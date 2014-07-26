(ns demo-app.db
  (:require [datomic.api :as d]
            [clojure.java.io :as io])
  (:import datomic.Util)) 

(def uri "datomic:dev://localhost:4334/demo-app")

(defn make-conn [] 
  (d/connect uri))

(defn get-db []
  (d/db (make-conn)))

(defn read-all
    "Read all forms in f, where f is any resource that can
       be opened by io/reader"
         [f]
                               (Util/readAll (io/reader f)))

(defn transact-all
  "Load and run all transactions from f, where f is any
  resource that can be opened by io/reader."
  [conn f]
  (doseq [txd (read-all f)]
    (d/transact conn [txd])))

(defn read-schema []
  (io/resource "resources/../schema.edn"))

(transact-all (make-conn) (read-schema))

(def db (get-db))

(def all-products-query
  '[:find ?n
    :where [?n :product/name]])

(defn get-all-products [& [db]]
  (d/q all-products-query (or db (get-db))))

(defn make-tempid []
  (d/tempid :db.part/user))

(defn e->hash
  "converts entity into map that plays nicely"
  [e]
  (into (select-keys e [:db/id]) e))

(defn touch-and-convert-entity 
  "makes touched entity with children components readable"
  [eid many-attr-name]
  (let [e (d/touch (d/entity (get-db) eid))]
    (assoc (e->hash e) many-attr-name
           (into [] (map #(e->hash %) 
                         (many-attr-name  e))))))

(defn retract-arr [arr]
  (mapv 
    #(merge [:db.fn/retractEntity] (:db/id %)) 
    arr))

(defn retract-data [data & [to-add]]
  (when-let [to-delete (:to-delete data)]
    (let [retract-map (retract-arr to-delete)]
      (d/transact-async (make-conn) retract-map)
      (if to-add (d/transact-async (make-conn) [to-add])))))

(defn set-data 
  "retracts data assigned to :to-delete and adds the rest"
  [data] 
  (if-let [to-add (-> (->> (or (:db/id data) (make-tempid))
                           (assoc data :db/id))
                      (dissoc :to-delete))]
    (or 
      (retract-data data to-add) 
      (d/transact-async (make-conn) [to-add]))
    (retract-data data)))

(defn has-attribute?
  "Does database have an attribute named attr-name?"
  [db attr-name]
  (-> (d/entity db attr-name)
      :db.install/_attribute
      boolean))

;(d/transact (make-conn) [{:db/id (make-tempid)
;                         :product/name "Dreamer"
;                        :product/category "sock"}])

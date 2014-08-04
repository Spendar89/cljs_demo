(ns demo-app.controllers.products
  (:require [datomic.api :as d]
            [demo-app.db :as db]))

(defn generate-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"
             "Access-Control-Allow-Origin" "*"
             "Access-Control-Allow-Methods" "GET, OPTIONS, POST, DELETE"
             "Access-Control-Allow-Headers" "Origin, X-Requested-With, Content-Type, Accept"}
   :body (pr-str data)})

(defn index [& [database]]
  (let [products (db/get-all-products database)
        entities (map 
                   #(db/e->om (first %) [:product/specs :product/features]) 
                   products)]
   (generate-response entities)))

(defn show [eid]
  (db/touch-and-convert-entity eid))

(defn create [body]
    (let [res (db/set-data (:products body))
          db-after (:db-after @res)]
      (index db-after)))

(defn delete [body]
  (prn "IM DELETINGGGG " body)
    (let [res (db/delete-data body)
          db-after (:db-after @res)]
      (index db-after)))

; first entity hash:
;(let [e (db/e->om (ffirst (db/get-all-products)) [:product/features :product/specs])]
;(create  (conj [] e)))


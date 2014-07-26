(ns demo-app.controllers.products
  (:require [datomic.api :as d]
            [demo-app.db :as db]))

(defn generate-response [data & [status]]
  {:status (or status 200)
   :headers {"Content-Type" "application/edn"}
   :body (pr-str data)})

(defn index [& [database]]
  (let [database (or database (db/get-db))
        products (d/q db/all-products database)
        entities (map #(db/touch-entity (first %)) products)]
   (generate-response entities)))

(defn show [eid]
  (db/touch-entity eid))

(defn create [body]
    (let [res (db/set-data body)
          db-after (:db-after @res)]
      (index db-after)))

; first entity hash:
;(let [e (db/touch-entity (ffirst (d/q db/all-product-types (db/get-db))))]
;(create e) )


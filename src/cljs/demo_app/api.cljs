(ns demo-app.api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.net.XhrIo :as xhr]
            [cljs.reader :as reader]
            [cljs.core.async :refer [put! chan <! >! timeout]]
            [clojure.data :as data]
            [clojure.string :as string]))

(defn reqAsync [url method & [body]]
  (let [c (chan)
        full-url (str "http://localhost:3000" url)]
(go
  (xhr/send full-url
            #(put! c (.getResponse (.-target %))) 
            method 
            (when body (pr-str body))  
            #js {"Content-Type" "application/edn"}))
  c))

(defn GET [url]
  (reqAsync url "GET"))

(defn POST [url & [body]]
  (reqAsync url "POST" body))

(defn DELETE [url & [body]]
  (reqAsync url "DELETE" body))

(def fetch-products
  (let [c (chan)
        res (GET "/api/products")]
    (go (put! c (reader/read-string (<! res))))
    c))

(defn save-data [body & [tx-chan]]
  (let [c (or tx-chan (chan))
        res (POST "/api/products" body)]
    (go (put! c (reader/read-string (<! res))))
    c))

(defn delete-data [body]
  (let [c (chan)
        res (DELETE "/api/products" body)]
    (go (put! c (reader/read-string (<! res))))
    c))

(def chan-create-product (chan 1))


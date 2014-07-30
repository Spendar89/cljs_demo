(ns demo-app.api
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [goog.net.XhrIo :as xhr]
            [cljs.reader :as reader]
            [cljs.core.async :refer [put! chan <! >! timeout]]
            [clojure.data :as data]
            [clojure.string :as string]))

(defn reqAsync [url method & [body]]
  (let [c (chan)]
(go
  (xhr/send url
            #(put! c (.getResponse (.-target %))) 
            method 
            (when body (pr-str body))  
            #js {"Content-Type" "application/edn"}))
  c))

(defn GET [url]
  (reqAsync url "GET"))

(defn POST [url & [body]]
  (reqAsync url "POST" (assoc {} :products  body)))

(def fetch-products
  (let [c (chan)
        res (GET "/api/products")]
    (go (put! c (reader/read-string (<! res))))
    c))

(defn save-data [body]
  (let [c (chan)
        res (POST "/api/products" body)]
    (go (put! c (reader/read-string (<! res))))
    c))

(def chan-create-product (chan 1))


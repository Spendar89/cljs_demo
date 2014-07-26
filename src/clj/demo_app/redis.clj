(ns demo-app.redis
  (:require [taoensso.carmine :as car :refer (wcar)]))


(defmacro wcar* [& body] `(car/wcar {} ~@body))

(defn rset! [rkey rdata]
  (wcar* (car/set rkey rdata)))

(defn incrset! [key data]
  (let [id (wcar* (car/incr key))
        rkey (str key ":" id)
        rdata (assoc data :id id)]
    (rset! rkey rdata)
    rdata))

(defn rget! [rkey]
  (wcar* (car/get rkey)))

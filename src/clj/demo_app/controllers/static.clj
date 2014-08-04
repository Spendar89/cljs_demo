(ns demo-app.controllers.static
  (:require [net.cgrand.enlive-html :as enlive]
            [clojure.java.io :as io]))

(enlive/deftemplate index
  (io/resource "public/html/index.html") [])
     

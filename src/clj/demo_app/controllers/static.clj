(ns demo-app.controllers.static
  (:require [cemerick.austin.repls :refer (browser-connected-repl-js)]
            [net.cgrand.enlive-html :as enlive]
            [clojure.java.io :as io]))

(enlive/deftemplate index
  (io/resource "public/html/index.html")
  []  [:body] (enlive/append
                (enlive/html [:script (browser-connected-repl-js)])))

(ns demo-app.core
  (:require [compojure.core :refer :all]
            [cemerick.austin.repls :refer (browser-connected-repl-js)]
            [net.cgrand.enlive-html :as enlive]
            [demo-app.util :as util]
            [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.adapter.jetty :refer [run-jetty]]
            [ring.util.response :refer [file-response]]
            [clojure.java.io :as io]))

  (enlive/deftemplate index
    (io/resource "public/html/index.html")
    []  [:body] (enlive/append
                (enlive/html [:script (browser-connected-repl-js)])))

  (defroutes app-routes
    (GET "/" req (index))
    (route/resources "/")
    (route/not-found "Not Found"))

  (def app
    (handler/site app-routes))

(defn run
  []
  (defonce ^:private server
    (ring.adapter.jetty/run-jetty #'app-routes {:port 8080 :join? false}))
  server)



(ns demo-app.core
  (:require [demo-app.util :as util]
            [demo-app.routes :as routes]
            [brepl.connect]
            [compojure.handler :as handler]
            [ring.adapter.jetty :refer [run-jetty]]
            [demo-app.redis :as redis]))


;(defn ws-brepl-env 
  ;":Piggieback (weasel-brepl-env)"
  ;[]
  ;(ws/repl-env :ip "0.0.0.0" :port 9001))

(def app
  (handler/api routes/app))

(defn run []
  (defonce ^:private server
    (ring.adapter.jetty/run-jetty #'routes/app {:port 3000 :join? false}))
  server)


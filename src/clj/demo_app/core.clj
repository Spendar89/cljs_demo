(ns demo-app.core
  (:require [demo-app.util :as util]
            [demo-app.routes :as routes]
            [compojure.handler :as handler]
            [ring.adapter.jetty :refer [run-jetty]]
            [demo-app.redis :as redis]))


(def repl-env (reset! cemerick.austin.repls/browser-repl-env
                      (cemerick.austin/repl-env)))

(defn brepl []
  (cemerick.austin.repls/cljs-repl repl-env))


(def app
  (handler/api routes/app))

(defn run []
  (defonce ^:private server
    (ring.adapter.jetty/run-jetty #'routes/app {:port 8080 :join? false}))
  server)

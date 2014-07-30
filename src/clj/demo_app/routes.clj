(ns demo-app.routes
  (:require [ring.util.response :refer [response]]
            [ring.middleware.edn :refer [wrap-edn-params]]
            [ring.middleware.reload :refer [wrap-reload]]
            [ring.middleware.stacktrace :refer [wrap-stacktrace]]
            [demo-app.controllers.products :as products]
            [demo-app.controllers.static :as static]
            [compojure.route :as default]
            [compojure.core :refer [defroutes GET POST context]]))

(defn log [msg & vals]
  (let [line (apply format msg vals)]
    (locking System/out (println line))))

(defroutes api
  (context "/api" []
           (context "/products" []
                    (GET "/" []
                         (products/index))
                    (POST "/" {edn-params :edn-params} 
                          (products/create edn-params))))) 

(defroutes static
  (GET "/" req 
       (static/index))
  (default/resources "/")
  (default/not-found "Not Found :("))


(defn wrap-request-logging [handler]
  (fn [{:keys [request-method uri] :as req}]
    (let [resp (handler req)]
      (log "Processing %s %s" request-method uri)
      resp)))

(defroutes app
  (-> api
      (wrap-edn-params)
      (wrap-stacktrace)
      (wrap-reload))
 (->  static
     (wrap-reload)
     (wrap-stacktrace)))

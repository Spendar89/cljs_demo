(ns demo-app.routes
  (:require [ring.util.response :refer [response]]
            [ring.middleware.edn :refer [wrap-edn-params]]
            [demo-app.controllers.product-type-props :as product-type-props]
            [demo-app.controllers.products :as products]
            [demo-app.controllers.static :as static]
            [compojure.route :as default]
            [compojure.core :refer [defroutes GET POST context]]))

(defn log [msg & vals]
  (let [line (apply format msg vals)]
    (locking System/out (println line))))

(defroutes api
  (context "/api" []
           (context "/product-type-props" []
                    (GET "/" [] 
                         (response (product-type-props/index)))
                    (GET "/:id" [id] 
                         (response (product-type-props/show id))))
           (context "/product-types" []
                    (GET "/" []
                         (product-types/index))
                    (POST "/" {edn-params :edn-params} 
                          (product-types/create edn-params))))) 

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
      (wrap-request-logging))
  static)

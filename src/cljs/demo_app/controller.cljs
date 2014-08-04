(ns demo-app.controller
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put! chan <! >! timeout]]
            [clojure.data :as data]
            [clojure.string :as string]
            [demo-app.api :as api]
            [demo-app.products.views :as products :refer [products]]))

(enable-console-print!)

(def tx-save-chan (chan))

(def tx-delete-chan (chan))



(defn tx-save-loop [data]
  (go
    (while true
      (let [d (<! tx-save-chan)
            saved (api/save-data d)]
        (.log js/console "SAVING")
        (om/update! data (vec (<! saved)))
        (.log js/console "SAVED")))))


(defn tx-delete-loop [data korks chan]
  (go
    (while true
      (let [delete-id (<! tx-delete-chan)
            deleted (api/delete-data delete-id)]
        (.log js/console "DELETING" delete-id)
        (om/update! data (vec (<! deleted)))
        (.log js/console "DELETED")))))

(defcomponent controller [data owner]
  (will-mount [_]
              (tx-delete-loop data)
              (tx-save-loop data)
              (go (om/update! data :products (vec (<! api/fetch-products)))))
  (render [_]
          (om/build products (:products data))))

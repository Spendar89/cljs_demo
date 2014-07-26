(ns demo-app.product-types.views
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put! chan <! >! timeout]]
            [clojure.data :as data]
            [clojure.string :as string]
            [demo-app.product-types.product-type-props.views 
             :as product-type-props :refer [product-type-props]]
            [demo-app.api :refer [GET POST fetch-product-types save-data]]))

(defn save-loop [data chan]
  (go
    (while true
      (let [d (<! chan)
            saved (save-data d)]
        (.log js/console "SAVING")
        (om/update! data (vec (<! saved)))
        (.log js/console "SAVED")))))

(defn add-loop [data chan]
  (go 
    (while true
      (let [d (<! chan)]
        (om/transact! data 
                      (fn [xs] 
                        (conj xs d)))))))

(defn delete-loop [data chan]
  (go 
    (while true
      (let [d (<! chan)
            to-delete (assoc {} :to-delete (conj [] (into {} d)))]
        (om/transact! data
                      (fn [xs] (vec (remove #(== d %) xs))))
        (<! (save-data to-delete))))))

(defcomponent product-type-view [data owner {:keys [save-chan delete-chan] :as opts}]
  (render [_]
          (dom/div 
            (dom/h2 "Product-Type Defaults")
            (dom/div
              (dom/label "Name")
              (dom/input {:type "text"
                          :value (:product-type/name data)                          
                          :on-change #(om/update! data 
                                                  :product-type/name 
                                                  (.. % -target -value))})
              (dom/label "Category")
              (dom/input {:type "text"
                          :value (:product-type/category data)                          
                          :on-change #(om/update! data 
                                                  :product-type/category 
                                                  (.. % -target -value))})
              (dom/button {:on-click #(put! delete-chan @data)} "Delete")
              (dom/div
                (dom/h2 "Product-Type Props")
                (om/build product-type-props data))
              (dom/button {:on-click #(put! save-chan (into {} @data))}
                          "Save Product Type")))))

(defcomponent product-types [data owner]
  (init-state [_]
              {:save-chan (chan)
               :add-chan (chan)
               :delete-chan (chan)})
  (will-mount [_]
              (save-loop 
                data (om/get-state owner :save-chan))
              (delete-loop
                data (om/get-state owner :delete-chan))
              (add-loop 
                data (om/get-state owner :add-chan)))
  (render-state [_ {:keys [save-chan add-chan delete-chan] :as state}]
                (dom/div
                  (om/build-all product-type-view data 
                                {:opts state})
                  (dom/button {:on-click #(put! add-chan 
                                                    {:product-type/name "" 
                                                     :product-type/category "default"
                                                     :product-type/props []})} 
                                  "New Product Type"))))

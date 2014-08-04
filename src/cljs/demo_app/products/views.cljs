(ns demo-app.products.views
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put! chan <! >! timeout]]
            [clojure.data :as data]
            [clojure.string :as string]
            [demo-app.products.specs.views :as specs :refer [specs]]
            [demo-app.products.features.views :as features :refer [feature]]))



;(defn save-loop [data chan]
  ;(go
    ;(while true
      ;(let [d (<! chan)
            ;saved (save-data d)]
        ;(.log js/console "SAVING")
        ;(om/update! data (vec (<! saved)))
        ;(.log js/console "SAVED")))))

(defn add-loop [data chan]
  (go 
    (while true
      (let [d (<! chan)]
        (om/transact! data 
                      (fn [xs] 
                        (vec (cons d xs))))))))

(defn add-feature [data]
  (let [new-feature {:feature/headline ""
                     :feature/body ""}]
    (om/transact! data :product/features #(vec (cons new-feature %)))))

(defn delete-thing [coll thing]
  (vec (remove #(== thing %) coll)))

(defn delete-product-loop [data chan]
  (go 
    (while true
      (let [product (<! chan)]
        (om/transact! data #(delete-thing % product))))))

(defcomponent product-view [data owner {:keys [save-chan delete-chan] :as opts}]
  (init-state [_]
              {:delete-feature-chan (chan)})
  (will-mount [_]
              (delete-product-loop
                (:product/features data) (om/get-state owner :delete-feature-chan)))
  (render-state [_ {:keys [delete-feature-chan] :as state}]
          (dom/div {:class "col-sm-12 product-view"} 
            (dom/h2 (:product/name data))
            (dom/div
              (dom/div {:class "form-group"}
                       (dom/label {:class "control-label"} "Name")
                       (dom/input {:type "text"
                                   :class "form-control"
                                   :value (:product/name data)                          
                                   :on-change #(om/update! data 
                                                           :product/name 
                                                           (.. % -target -value) :sync-data)}))
              (dom/div {:class "form-group"}
                       (dom/label {:class "control-label"} "Category")
                       (dom/input {:type "text"
                                   :class "form-control"
                                   :value (:product/category data)                          
                                   :on-change #(om/update! data 
                                                           :product/category 
                                                           (.. % -target -value) :sync-data)}))
              (om/build specs (:product/specs data))
              (dom/div {:class "form-group col-sm-12"}
                       (dom/h4 {:class "col-sm-2"} "Features")
                       (dom/div {:class "col-sm-2"}
                                (dom/a {:class "form-control btn btn-primary"
                                        :href "#"
                                        :on-click #(do
                                                     (.preventDefault %)
                                                     (add-feature data))} 
                                       "New")))
              (om/build-all feature (:product/features data) 
                            {:opts {:handle-delete (fn [ft] 
                                                     (om/transact! data :product/features 
                                                                   #(delete-thing % ft)))}})
              (dom/div {:class "form-group"}
                       (dom/a {:class "form-control btn btn-danger"
                               :on-click #(put! delete-chan @data)} "Delete Product"))))))

(def add-product-chan (chan))

(defcomponent products [data owner]
  (init-state [_]
              {:save-chan (chan)
               :delete-chan (chan)})
  (will-mount [_]
              (delete-product-loop
                data (om/get-state owner :delete-chan))
              (add-loop data add-product-chan))
  (render-state [_ {:keys [save-chan delete-chan] :as state}]
                (dom/div {:class "col-sm-12"}
                         
                         (dom/div {:class "col-sm-12 form-group"}
                                  (dom/h2
                                    (dom/a {:class "btn form-control btn-primary"
                                            :on-click #(put! add-product-chan 
                                                             {:product/name "" 
                                                              :product/category "default"
                                                              :product/specs []
                                                              :product/features []})} 
                                           "New Product")))
                         (dom/div {:class "col-sm-12"}
                                  (om/build-all product-view data 
                                                {:opts state})))))

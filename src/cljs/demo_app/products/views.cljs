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
            [demo-app.products.features.views :as features :refer [feature]]
            [demo-app.api :refer [GET POST fetch-products save-data]]))

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
        (<! (save-data (conj [] to-delete)))))))

(defcomponent product-view [data owner {:keys [save-chan delete-chan add-chan] :as opts}]
  (init-state [_]
              {:add-feature-chan (chan)
               :delete-feature-chan (chan)})
  (will-mount [_]
              (add-loop 
                (:product/features data) (om/get-state owner :add-feature-chan))
              (delete-loop
                (:product/features data) (om/get-state owner :delete-feature-chan)))
  (render-state [_ {:keys [add-feature-chan delete-feature-chan] :as state}]
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
                                                           (.. % -target -value))}))
              (dom/div {:class "form-group"}
                       (dom/label {:class "control-label"} "Category")
                       (dom/input {:type "text"
                                   :class "form-control"
                                   :value (:product/category data)                          
                                   :on-change #(om/update! data 
                                                           :product/category 
                                                           (.. % -target -value))}))
              (om/build specs data)
              (dom/div {:class "form-group col-sm-12"}
                       (dom/h4 {:class "col-sm-2"} "Features")
                       (dom/div {:class "col-sm-2"}
                                (dom/a {:class "form-control btn btn-primary"
                                        :href "#"
                                        :on-click #(do
                                                     (.preventDefault %)
                                                     (put! add-feature-chan 
                                                         {:feature/headline "" 
                                                          :feature/body ""}))} 
                                       "New")))
              (om/build-all feature (:product/features data) {:opts state})
              (dom/div {:class "form-group"}
                       (dom/a {:class "form-control btn btn-danger"
                               :on-click #(put! delete-chan @data)} "Delete Product"))))))

(defcomponent products [data owner]
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
                (dom/div {:class "col-sm-12"}
                         (dom/div {:class "col-sm-6"}
                                  (om/build-all product-view data 
                                                {:opts state}))
                         (dom/div {:class "col-sm-6 form-group"}
                                  (dom/h2
                                    (dom/a {:class "btn form-control btn-primary"
                                            :on-click #(put! add-chan 
                                                             {:product/name "" 
                                                              :product/category "default"
                                                              :product/specs []
                                                              :product/features []})} 
                                           "New Product"))
                                  (dom/h2
                                    (dom/a {:class "btn form-control btn-primary"
                                            :href "#"
                                            :on-click #(do
                                                         (.preventDefault %)
                                                         (put! save-chan @data))} 
                                           "Save"))))))

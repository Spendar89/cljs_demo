(ns demo-app.product-types.product-type-props.views
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put! chan <! >! timeout]]
            [clojure.data :as data]
            [clojure.string :as string]
            [demo-app.api :refer [GET POST fetch-product-types save-data]]))

(defcomponent product-type-prop-input [data owner 
                                       {:keys [chan-del chan-add] :as opts}]
  (render [_]
          (dom/li 
            (dom/input {:type "text" 
                        :placeholder "Name"
                        :value (:prop/name data) 
                        :on-change #(om/update! data 
                                                :prop/name 
                                                (.. % -target -value))})
            (dom/input {:type "text" 
                        :placeholder "Kind"
                        :value (:prop/kind data) 
                        :on-change #(om/update! data 
                                                :prop/kind 
                                                (.. % -target -value))})
            (dom/button {:on-click #(put! chan-del @data)} "Delete"))))

(defcomponent product-type-props [data owner]
  (init-state [_]
              {:chan-del (chan)
               :chan-add (chan)})
  (will-mount [_]
              (let [chan-del (om/get-state owner :chan-del)]
                (go 
                  (loop []
                    (let [product-type-prop (<! chan-del)]
                      (om/transact! data :product-type/props
                                    (fn [xs] 
                                      (vec 
                                        (remove 
                                          #(== product-type-prop %) xs))))
                      (om/transact! data :to-delete
                                    #(conj (vec %) product-type-prop))
                      (recur)))))
              (let [chan-add (om/get-state owner :chan-add)]
                (go 
                  (loop []
                    (let [product-type-prop (<! chan-add)]
                      (om/transact! data :product-type/props 
                                    (fn [xs] 
                                      (conj xs product-type-prop)))
                      (recur))))))
  (render-state [this {:keys [chan-add chan-del] :as state}]
                (dom/div
                  (dom/div
                    (dom/ul
                      (om/build-all product-type-prop-input 
                                    (:product-type/props data)
                                    {:opts {:chan-del chan-del 
                                            :chan-add chan-add}}))
                    (dom/div
                      (dom/button {:on-click #(put! chan-add 
                                                    {:prop/name "" 
                                                     :prop/kind "text"})} 
                                  "New Product Type Prop"))))))

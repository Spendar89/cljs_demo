(ns demo-app.products.specs.views
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put! chan <! >! timeout]]
            [clojure.data :as data]
            [clojure.string :as string]
            [demo-app.api :refer [GET POST fetch-products save-data]]))

(defcomponent spec-input [data owner 
                          {:keys [chan-del chan-add] :as opts}]
  (render [_]
          (dom/div {:class "form-group col-sm-12"}
                   (dom/div {:class "col-sm-5"}
                            (dom/input {:type "text" 
                                        :class "form-control"
                                        :placeholder "Name"
                                        :value (:spec/name data) 
                                        :on-change #(om/update! data 
                                                                :spec/name 
                                                                (.. % -target -value))}))
                   (dom/div {:class "col-sm-5"}
                            (dom/input {:type "text" 
                                        :class "form-control"
                                        :placeholder "Text Value"
                                        :value (:spec/textValue data) 
                                        :on-change #(om/update! data 
                                                                :spec/textValue 
                                                                (.. % -target -value))}))
                   (dom/div {:class "col-sm-2"}
                            (dom/a {:class "btn btn-danger"
                                    :on-click #(put! chan-del @data)} "Delete")))))

(defcomponent specs [data owner]
  (init-state [_]
              {:chan-del (chan)
               :chan-add (chan)})
  (will-mount [_]
              (let [chan-del (om/get-state owner :chan-del)]
                (go 
                  (loop []
                    (let [spec (<! chan-del)]
                      (om/transact! data :product/specs
                                    (fn [xs] 
                                      (vec 
                                        (remove 
                                          #(== spec %) xs))))
                      (om/transact! data :to-delete
                                    #(conj (vec %) spec))
                      (recur)))))
              (let [chan-add (om/get-state owner :chan-add)]
                (go 
                  (loop []
                    (let [spec (<! chan-add)]
                      (om/transact! data :product/specs 
                                    (fn [xs] 
                                      (conj xs spec)))
                      (recur))))))
  (render-state [this {:keys [chan-add chan-del] :as state}]
                (dom/div {:class "col-sm-12"}
                         (dom/div {:class "form-group col-sm-12"}
                                  (dom/h4 {:class "col-sm-2"} "Specs")
                                  (dom/div {:class "col-sm-2"}
                                           (dom/a {:class "form-control btn btn-primary"
                                                   :href "#"
                                                   :on-click #(do
                                                                (.preventDefault %)
                                                                (put! chan-add 
                                                                    {:spec/name "" 
                                                                     :spec/textValue ""}))} 
                                                  "New")))
                         (om/build-all spec-input 
                                       (:product/specs data)
                                       {:opts {:chan-del chan-del 
                                               :chan-add chan-add}}))))

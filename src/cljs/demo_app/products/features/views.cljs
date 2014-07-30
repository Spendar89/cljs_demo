(ns demo-app.products.features.views
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put! chan <! >! timeout]]
            [clojure.data :as data]
            [clojure.string :as string]))


(defcomponent feature [data owner 
                          {:keys [delete-feature-chan] :as opts}]
  (render [_]
          (dom/div {:class "form-group col-sm-12"}
                   (dom/div {:class "col-sm-5"}
                            (dom/input {:type "text" 
                                        :class "form-control"
                                        :placeholder "Headline"
                                        :value (:feature/headline data) 
                                        :on-change #(om/update! data 
                                                                :feature/headline 
                                                                (.. % -target -value))}))
                   (dom/div {:class "col-sm-5"}
                            (dom/input {:type "text" 
                                        :class "form-control"
                                        :placeholder "Text Value"
                                        :value (:feature/body data) 
                                        :on-change #(om/update! data 
                                                                :feature/body
                                                                (.. % -target -value))}))
                   (dom/div {:class "col-sm-2"}
                            (dom/a {:class "btn btn-danger"
                                    :on-click #(do
                                                 (.preventDefault %)
                                                 (put! delete-feature-chan @data))} "Delete")))))

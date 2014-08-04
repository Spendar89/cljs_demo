(ns demo-app.products.specs.views
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put! chan <! >! timeout]]
            [clojure.data :as data]
            [demo-app.util :as util]
            [clojure.string :as string]))



(defn handle-add [data] 
  (om/transact! data nil (fn [xs] (vec (cons {:spec/name "" 
                                          :spec/textValue ""} xs))) :sync-data))

(defcomponent spec [data owner]
  (render [_]
          (dom/div {:class "form-group col-sm-12"}
                   (dom/div {:class "col-sm-5"}
                            (dom/input {:type "text" 
                                        :class "form-control"
                                        :placeholder "Name"
                                        :value (:spec/name data) 
                                        :on-change #(om/update! data 
                                                                :spec/name 
                                                                (.. % -target -value) :sync-data)}))
                   (dom/div {:class "col-sm-5"}
                            (dom/input {:type "text" 
                                        :class "form-control"
                                        :placeholder "Text Value"
                                        :value (:spec/textValue data) 
                                        :on-change #(om/update! data 
                                                                :spec/textValue 
                                                                (.. % -target -value) :sync-data)}))
                   (dom/div {:class "col-sm-2"}
                            (dom/a {:class "btn btn-danger"
                                    :on-click #(util/handle-delete @data)} "Delete")))))

(defcomponent specs [data owner {:keys [tx-delete-chan] :as opts}]
  (render [_]
          (dom/div {:class "col-sm-12"}
                   (dom/div {:class "form-group col-sm-12"}
                            (dom/h4 {:class "col-sm-2"} "Specs")
                            (dom/div {:class "col-sm-2"}
                                     (dom/a {:class "form-control btn btn-primary"
                                             :href "#"
                                             :on-click #(do
                                                          (.preventDefault %)
                                                          (handle-add data))} 
                                            "New")))
                   (om/build-all spec data))))

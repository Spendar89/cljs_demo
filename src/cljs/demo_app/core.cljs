(ns demo-app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put! chan <! >! timeout]]
            [clojure.data :as data]
            [clojure.string :as string]
            [demo-app.util :as util :refer [tx-save-chan]]
            [demo-app.controller :as controller :refer [controller]]))

(enable-console-print!)

(def app-state 
  (atom {:products []
         :to-delete []}))

(om.core/root 
  controller
  app-state
  {:target (. js/document (getElementById "app0"))
   :tx-listen
   (fn [tx-data root-cursor]
     (when (= :sync-data-delete (:tag tx-data))
       (.log js/console (:db/id (first (:old-value tx-data)))))

     (when (= :sync-data (:tag tx-data))
       (put! tx-save-chan @root-cursor)))})

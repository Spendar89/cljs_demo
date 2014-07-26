(ns demo-app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put! chan <! >! timeout]]
            [clojure.data :as data]
            [clojure.string :as string]
            [clojure.browser.repl]
            [demo-app.api :refer [GET POST fetch-product-types save-data]]
            [demo-app.product-types.views :as product-types :refer [product-types]]))

(enable-console-print!)

(def app-state
  (let [c (chan)]
    (go
      (put! c (atom (vec (<! fetch-product-types)))))
    c))
(go
  (om.core/root 
    product-types (<! app-state)
    {:target (. js/document (getElementById "app0"))}))

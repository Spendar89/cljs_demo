(ns demo-app.util
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.reader :as reader]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [cljs.core.async :refer [put! chan <! >! timeout]]
            [clojure.data :as data]
            [clojure.string :as string]))

(def tx-save-chan (chan))
(def tx-delete-chan (chan))

(defn handle-delete [data]
  (when (:db/id data) (put! tx-delete-chan data)))


(ns demo-app.core
  (:require [cljs.reader :as reader]
            [goog.events :as events]
            [goog.dom :as gdom]
            [om.core :as om :include-macros true]
            [clojure.browser.repl]
            [om.dom :as dom :include-macros true])
  (:import [goog.net XhrIo]
           [goog.net.EventType]
           [goog.events EventType]))

(enable-console-print!)

(println "Hello Dude!")

(def app-state 
  (atom 
    {:list ["Lion" "Zebra" "Buffalo" "Antelope"]}))



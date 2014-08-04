(ns figwheel-connect
    (:require 
      [weasel.repl :as ws-repl]
      [figwheel.client :as fw :include-macros true]))


(if-not (ws-repl/alive?)
  (ws-repl/connect "ws://localhost:9001" :verbose true))

(fw/watch-and-reload
   :jsload-callback  (fn  []  (print "reloaded")))

(ns brepl.connect
  (:require 
    [cemerick.piggieback]
    [weasel.repl.websocket :refer [repl-env]]
    [weasel.repl.server :refer [stop]]))

(def brepl-env  
  (repl-env :ip "0.0.0.0" :port 9001))

(defn stop-brepl [] (stop))

(ns demo-app.util)

(defn new-cljs-repl
  []
  (let [browser-repl-env (reset! cemerick.austin.repls/browser-repl-env
                                 (cemerick.austin/repl-env))]
    (cemerick.austin.repls/cljs-repl browser-repl-env)))

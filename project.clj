(defproject demo-app "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [ring/ring "1.2.1"]
                 [enlive "1.1.5"]
                 [om "0.5.3"]
                 [compojure "1.1.8"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-ring "0.8.11"]
            [com.cemerick/austin "0.1.4"]
            [lein-cljsbuild "1.0.2"]]
  :source-paths ["src/clj" "src/cljs"]
  :resource-paths ["resources"]
  :ring {:handler demo-app.core/app}
  :repl-options {
                 :init-ns demo-app.core}
  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src/clj" "src/cljs"] 
                        :compiler {
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :preamble ["react/react.min.js"]
                                   :externs ["react/externs/react.js"]
                                   :source-map true}}]})

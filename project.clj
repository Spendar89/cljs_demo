(defproject demo-app "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2277"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [ring/ring "1.2.1"]
                 [enlive "1.1.5"]
                 [om "0.7.0"]
                 [compojure "1.1.8"]
                 [sablono "0.2.18"]
                 [prismatic/om-tools "0.2.2"]
                 [figwheel "0.1.3-SNAPSHOT"]
                 [com.cemerick/piggieback "0.1.3"]
                 [weasel "0.3.0"]
                 [http-kit "2.1.18"]
                 [ring/ring-json "0.3.1"]
                 [ring-cors "0.1.4"]
                 [fogus/ring-edn "0.2.0"]
                 [com.datomic/datomic-pro "0.9.4815.12"]
                 [com.taoensso/carmine "2.6.0"]]

  :jvm-opts ^:replace ["-Xms512m" "-Xmx512m" "-server"]

  :plugins [[lein-garden "0.1.8"]
            [lein-figwheel "0.1.3-SNAPSHOT"]
            [lein-ring "0.8.11"]
            ;[com.cemerick/austin "0.1.4"]
            [lein-cljsbuild "1.0.3"]]

  :source-paths ["src/clj" "src/cljs" "src/figwheel"]
  :resource-paths ["resources"]
  :repl-options {:init-ns demo-app.core}

  :bower-dependencies [[bootstrap "3.2.0"]
                       [font-awesome "3.0.2"]]

  :profiles {:dev
             {:datomic {:config "resources/transactor.properties"
                        :db-uri "datomic:dev://localhost:4334/demo-app"}}}

  :ring {:handler demo-app.core/app
         :nrepl {:start? true :port 7000}}

  :datomic {:schemas ["resources" ["schema.edn"]]}

  :garden {:builds [{:id "screen"
                     :stylesheet demo-app.styles/app
                     :compiler {:output-to "resources/public/css/app.css"
                                :pretty-print? false}}]}

  :figwheel {
             :http-server-root "public"
             :port 3449
             :css-dirs ["resources/public/css"]}

  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src/cljs" "src/figwheel"] 
                        :compiler {
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none 
                                   :closure-warnings {:externs-validation :off
                                                      :non-standard-jsdoc :off}
                                   :source-map true}}]})

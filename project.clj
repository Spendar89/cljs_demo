(defproject demo-app "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2156"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]
                 [ring/ring "1.2.1"]
                 [enlive "1.1.5"]
                 [om "0.5.0"]
                 [compojure "1.1.8"]
                 [sablono "0.2.18"]
                 [prismatic/om-tools "0.2.2"]
                 [http-kit "2.1.18"]
                 [ring/ring-json "0.3.1"]
                 [fogus/ring-edn "0.2.0"]
                 [com.datomic/datomic-pro "0.9.4815.12"]
                 [com.taoensso/carmine "2.6.0"]]
  :jvm-opts ^:replace ["-Xmx1g" "-server"]
  :plugins [[lein-ring "0.8.11"]
            [com.cemerick/austin "0.1.4"]
            [lein-cljsbuild "1.0.2"]]
  :source-paths ["src/clj" "src/cljs"]
  :resource-paths ["resources"]
  :ring {:handler demo-app.core/app}
  :repl-options {
                 :init-ns demo-app.core}
  :profiles {:dev
             {:datomic {:config "resources/transactor.properties"
                        :db-uri "datomic:dev://localhost:4334/demo-app"}}}
  :datomic {:schemas ["resources" ["schema.edn"]]}
  :cljsbuild {
              :builds [{:id "dev"
                        :source-paths ["src/cljs"] 
                        :compiler {
                                   :output-to "resources/public/js/main.js"
                                   :output-dir "resources/public/js/out"
                                   :optimizations :none
                                   :source-map true}}]})

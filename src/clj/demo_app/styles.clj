(ns  demo-app.styles
  (:require [garden.def :refer [defstylesheet defstyles]]
            [garden.units :refer [px]]))

(def hexmap 
  {:darkgrey "#585864"
   :seagreen "#7EBEB4"
   :orangered "#FF6666"})

(defstyles app
  [:body
    [".product-view" {:background (:darkgrey hexmap)
                      :color "white"
                      :margin-top (px 20)}
     [".btn-success" {:background (:seagreen hexmap)}]
     [".btn-danger" {:background (:orangered hexmap)}]]])

// Compiled by ClojureScript 0.0-2156
goog.provide('demo_app.product_types.views');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('demo_app.api');
goog.require('demo_app.product_types.product_type_props.views');
goog.require('demo_app.product_types.product_type_props.views');
goog.require('om_tools.dom');
goog.require('clojure.data');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('demo_app.product_types.product_type_props.views');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('demo_app.api');
demo_app.product_types.views.save_loop = (function save_loop(data,chan){var c__26765__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_30999){var state_val_31000 = (state_30999[1]);if((state_val_31000 === 8))
{var inst_30988 = (state_30999[2]);var inst_30989 = cljs.core.vec.call(null,inst_30988);var inst_30990 = om.core.update_BANG_.call(null,data,inst_30989);var inst_30991 = console.log("SAVED");var state_30999__$1 = (function (){var statearr_31001 = state_30999;(statearr_31001[7] = inst_30990);
(statearr_31001[8] = inst_30991);
return statearr_31001;
})();var statearr_31002_31016 = state_30999__$1;(statearr_31002_31016[2] = null);
(statearr_31002_31016[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31000 === 7))
{var inst_30984 = (state_30999[2]);var inst_30985 = demo_app.api.save_data.call(null,inst_30984);var inst_30986 = console.log("SAVING",inst_30984);var state_30999__$1 = (function (){var statearr_31003 = state_30999;(statearr_31003[9] = inst_30986);
return statearr_31003;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30999__$1,8,inst_30985);
} else
{if((state_val_31000 === 6))
{var inst_30995 = (state_30999[2]);var state_30999__$1 = state_30999;var statearr_31004_31017 = state_30999__$1;(statearr_31004_31017[2] = inst_30995);
(statearr_31004_31017[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31000 === 5))
{var state_30999__$1 = state_30999;var statearr_31005_31018 = state_30999__$1;(statearr_31005_31018[2] = null);
(statearr_31005_31018[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31000 === 4))
{var state_30999__$1 = state_30999;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30999__$1,7,chan);
} else
{if((state_val_31000 === 3))
{var inst_30997 = (state_30999[2]);var state_30999__$1 = state_30999;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30999__$1,inst_30997);
} else
{if((state_val_31000 === 2))
{var state_30999__$1 = state_30999;if(true)
{var statearr_31006_31019 = state_30999__$1;(statearr_31006_31019[1] = 4);
} else
{var statearr_31007_31020 = state_30999__$1;(statearr_31007_31020[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31000 === 1))
{var state_30999__$1 = state_30999;var statearr_31008_31021 = state_30999__$1;(statearr_31008_31021[2] = null);
(statearr_31008_31021[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_31012 = [null,null,null,null,null,null,null,null,null,null];(statearr_31012[0] = state_machine__26702__auto__);
(statearr_31012[1] = 1);
return statearr_31012;
});
var state_machine__26702__auto____1 = (function (state_30999){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_30999);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e31013){if((e31013 instanceof Object))
{var ex__26705__auto__ = e31013;var statearr_31014_31022 = state_30999;(statearr_31014_31022[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30999);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31023 = state_30999;
state_30999 = G__31023;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_30999){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_30999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_31015 = f__26766__auto__.call(null);(statearr_31015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto__);
return statearr_31015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
}));
return c__26765__auto__;
});
demo_app.product_types.views.add_loop = (function add_loop(data,chan){var c__26765__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_31066){var state_val_31067 = (state_31066[1]);if((state_val_31067 === 7))
{var inst_31056 = (state_31066[2]);var inst_31057 = (function (){var d = inst_31056;return ((function (d,inst_31056,state_val_31067){
return (function (xs){return cljs.core.conj.call(null,xs,d);
});
;})(d,inst_31056,state_val_31067))
})();var inst_31058 = om.core.transact_BANG_.call(null,data,inst_31057);var state_31066__$1 = (function (){var statearr_31068 = state_31066;(statearr_31068[7] = inst_31058);
return statearr_31068;
})();var statearr_31069_31082 = state_31066__$1;(statearr_31069_31082[2] = null);
(statearr_31069_31082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31067 === 6))
{var inst_31062 = (state_31066[2]);var state_31066__$1 = state_31066;var statearr_31070_31083 = state_31066__$1;(statearr_31070_31083[2] = inst_31062);
(statearr_31070_31083[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31067 === 5))
{var state_31066__$1 = state_31066;var statearr_31071_31084 = state_31066__$1;(statearr_31071_31084[2] = null);
(statearr_31071_31084[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31067 === 4))
{var state_31066__$1 = state_31066;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31066__$1,7,chan);
} else
{if((state_val_31067 === 3))
{var inst_31064 = (state_31066[2]);var state_31066__$1 = state_31066;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31066__$1,inst_31064);
} else
{if((state_val_31067 === 2))
{var state_31066__$1 = state_31066;if(true)
{var statearr_31072_31085 = state_31066__$1;(statearr_31072_31085[1] = 4);
} else
{var statearr_31073_31086 = state_31066__$1;(statearr_31073_31086[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31067 === 1))
{var state_31066__$1 = state_31066;var statearr_31074_31087 = state_31066__$1;(statearr_31074_31087[2] = null);
(statearr_31074_31087[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_31078 = [null,null,null,null,null,null,null,null];(statearr_31078[0] = state_machine__26702__auto__);
(statearr_31078[1] = 1);
return statearr_31078;
});
var state_machine__26702__auto____1 = (function (state_31066){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_31066);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e31079){if((e31079 instanceof Object))
{var ex__26705__auto__ = e31079;var statearr_31080_31088 = state_31066;(statearr_31080_31088[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31066);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31079;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31089 = state_31066;
state_31066 = G__31089;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_31066){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_31066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_31081 = f__26766__auto__.call(null);(statearr_31081[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto__);
return statearr_31081;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
}));
return c__26765__auto__;
});
demo_app.product_types.views.delete_loop = (function delete_loop(data,chan){var c__26765__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_31146){var state_val_31147 = (state_31146[1]);if((state_val_31147 === 8))
{var inst_31138 = (state_31146[2]);var state_31146__$1 = (function (){var statearr_31148 = state_31146;(statearr_31148[7] = inst_31138);
return statearr_31148;
})();var statearr_31149_31163 = state_31146__$1;(statearr_31149_31163[2] = null);
(statearr_31149_31163[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31147 === 7))
{var inst_31130 = (state_31146[2]);var inst_31131 = cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,inst_31130);var inst_31132 = cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,inst_31131);var inst_31133 = cljs.core.assoc.call(null,cljs.core.PersistentHashMap.EMPTY,new cljs.core.Keyword(null,"to-delete","to-delete",1928504495),inst_31132);var inst_31134 = (function (){var to_delete = inst_31133;var d = inst_31130;return ((function (to_delete,d,inst_31130,inst_31131,inst_31132,inst_31133,state_val_31147){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (to_delete,d,inst_31130,inst_31131,inst_31132,inst_31133,state_val_31147){
return (function (p1__31090_SHARP_){return (d === p1__31090_SHARP_);
});})(to_delete,d,inst_31130,inst_31131,inst_31132,inst_31133,state_val_31147))
,xs));
});
;})(to_delete,d,inst_31130,inst_31131,inst_31132,inst_31133,state_val_31147))
})();var inst_31135 = om.core.transact_BANG_.call(null,data,inst_31134);var inst_31136 = demo_app.api.save_data.call(null,inst_31133);var state_31146__$1 = (function (){var statearr_31150 = state_31146;(statearr_31150[8] = inst_31135);
return statearr_31150;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31146__$1,8,inst_31136);
} else
{if((state_val_31147 === 6))
{var inst_31142 = (state_31146[2]);var state_31146__$1 = state_31146;var statearr_31151_31164 = state_31146__$1;(statearr_31151_31164[2] = inst_31142);
(statearr_31151_31164[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31147 === 5))
{var state_31146__$1 = state_31146;var statearr_31152_31165 = state_31146__$1;(statearr_31152_31165[2] = null);
(statearr_31152_31165[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31147 === 4))
{var state_31146__$1 = state_31146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31146__$1,7,chan);
} else
{if((state_val_31147 === 3))
{var inst_31144 = (state_31146[2]);var state_31146__$1 = state_31146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31146__$1,inst_31144);
} else
{if((state_val_31147 === 2))
{var state_31146__$1 = state_31146;if(true)
{var statearr_31153_31166 = state_31146__$1;(statearr_31153_31166[1] = 4);
} else
{var statearr_31154_31167 = state_31146__$1;(statearr_31154_31167[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31147 === 1))
{var state_31146__$1 = state_31146;var statearr_31155_31168 = state_31146__$1;(statearr_31155_31168[2] = null);
(statearr_31155_31168[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_31159 = [null,null,null,null,null,null,null,null,null];(statearr_31159[0] = state_machine__26702__auto__);
(statearr_31159[1] = 1);
return statearr_31159;
});
var state_machine__26702__auto____1 = (function (state_31146){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_31146);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e31160){if((e31160 instanceof Object))
{var ex__26705__auto__ = e31160;var statearr_31161_31169 = state_31146;(statearr_31161_31169[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31146);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31160;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31170 = state_31146;
state_31146 = G__31170;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_31146){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_31146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_31162 = f__26766__auto__.call(null);(statearr_31162[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto__);
return statearr_31162;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
}));
return c__26765__auto__;
});
demo_app.product_types.views.make_input = (function make_input(attr_key,value){return om.dom.input.call(null,{"onChange": (function (p1__31171_SHARP_){return om.core.update_BANG_.call(null,demo_app.product_types.views.data,new cljs.core.Symbol(null,"attr-key","attr-key",-1087699396,null),p1__31171_SHARP_.target.value);
}), "value": value, "type": "text"});
});
var ufv___31194 = schema.utils.use_fn_validation;var output_schema31173_31195 = schema.core.Any;var input_schema31174_31196 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-1637529003,null))], null);var input_checker31175_31197 = schema.core.checker.call(null,input_schema31174_31196);var output_checker31176_31198 = schema.core.checker.call(null,output_schema31173_31195);/**
* Inputs: [data owner {:keys [save-chan delete-chan], :as opts}]
*/
demo_app.product_types.views.product_type_view = (function product_type_view(G__31177,G__31178,G__31179){var validate__23131__auto__ = ufv___31194.get_cell();if(cljs.core.truth_(validate__23131__auto__))
{var args__23132__auto___31199 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31177,G__31178,G__31179], null);var temp__4126__auto___31200 = input_checker31175_31197.call(null,args__23132__auto___31199);if(cljs.core.truth_(temp__4126__auto___31200))
{var error__23133__auto___31201 = temp__4126__auto___31200;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-view","product-type-view",211241907,null),cljs.core.pr_str.call(null,error__23133__auto___31201)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema31174_31196,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___31199,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___31201], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var data = G__31177;var owner = G__31178;var G__31188 = G__31179;var map__31189 = G__31188;var map__31189__$1 = ((cljs.core.seq_QMARK_.call(null,map__31189))?cljs.core.apply.call(null,cljs.core.hash_map,map__31189):map__31189);var opts = map__31189__$1;var delete_chan = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222));var save_chan = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180));var data__$1 = data;var owner__$1 = owner;var G__31188__$1 = G__31188;while(true){
var data__$2 = data__$1;var owner__$2 = owner__$1;var map__31190 = G__31188__$1;var map__31190__$1 = ((cljs.core.seq_QMARK_.call(null,map__31190))?cljs.core.apply.call(null,cljs.core.hash_map,map__31190):map__31190);var opts__$1 = map__31190__$1;var delete_chan__$1 = cljs.core.get.call(null,map__31190__$1,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222));var save_chan__$1 = cljs.core.get.call(null,map__31190__$1,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180));if(typeof demo_app.product_types.views.t31191 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.views.t31191 = (function (output_checker31176,owner,validate__23131__auto__,G__31178,save_chan,data,G__31188,output_schema31173,input_checker31175,map__31190,G__31177,product_type_view,map__31189,G__31179,delete_chan,input_schema31174,opts,ufv__,meta31192){
this.output_checker31176 = output_checker31176;
this.owner = owner;
this.validate__23131__auto__ = validate__23131__auto__;
this.G__31178 = G__31178;
this.save_chan = save_chan;
this.data = data;
this.G__31188 = G__31188;
this.output_schema31173 = output_schema31173;
this.input_checker31175 = input_checker31175;
this.map__31190 = map__31190;
this.G__31177 = G__31177;
this.product_type_view = product_type_view;
this.map__31189 = map__31189;
this.G__31179 = G__31179;
this.delete_chan = delete_chan;
this.input_schema31174 = input_schema31174;
this.opts = opts;
this.ufv__ = ufv__;
this.meta31192 = meta31192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.views.t31191.cljs$lang$type = true;
demo_app.product_types.views.t31191.cljs$lang$ctorStr = "demo-app.product-types.views/t31191";
demo_app.product_types.views.t31191.cljs$lang$ctorPrWriter = ((function (data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan){
return (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"demo-app.product-types.views/t31191");
});})(data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.t31191.prototype.om$core$IRender$ = true;
demo_app.product_types.views.t31191.prototype.om$core$IRender$render$arity$1 = ((function (data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,React.DOM.h2(null,"Product-Type Defaults"),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,React.DOM.label(null,"Name"),(new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,[demo_app.product_types.views.make_input.call(null,new cljs.core.Keyword("product-type","name","product-type/name",3237039483),new cljs.core.Keyword("product-type","name","product-type/name",3237039483).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.button({"onClick": ((function (___$1,data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.delete_chan,cljs.core.deref.call(null,self__.data));
});})(___$1,data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan))
},"Delete"),om_tools.dom.element.call(null,React.DOM.div,React.DOM.h2(null,"Product-Type Props"),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_props,self__.data)],null))),React.DOM.button({"onClick": ((function (___$1,data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.save_chan,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,self__.data)));
});})(___$1,data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan))
},"Save Product Type")],null)))],null)));
});})(data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.t31191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan){
return (function (_31193){var self__ = this;
var _31193__$1 = this;return self__.meta31192;
});})(data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.t31191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan){
return (function (_31193,meta31192__$1){var self__ = this;
var _31193__$1 = this;return (new demo_app.product_types.views.t31191(self__.output_checker31176,self__.owner,self__.validate__23131__auto__,self__.G__31178,self__.save_chan,self__.data,self__.G__31188,self__.output_schema31173,self__.input_checker31175,self__.map__31190,self__.G__31177,self__.product_type_view,self__.map__31189,self__.G__31179,self__.delete_chan,self__.input_schema31174,self__.opts,self__.ufv__,meta31192__$1));
});})(data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.__GT_t31191 = ((function (data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan){
return (function __GT_t31191(output_checker31176__$1,owner__$3,validate__23131__auto____$1,G__31178__$1,save_chan__$2,data__$3,G__31188__$2,output_schema31173__$1,input_checker31175__$1,map__31190__$2,G__31177__$1,product_type_view__$1,map__31189__$2,G__31179__$1,delete_chan__$2,input_schema31174__$1,opts__$2,ufv____$1,meta31192){return (new demo_app.product_types.views.t31191(output_checker31176__$1,owner__$3,validate__23131__auto____$1,G__31178__$1,save_chan__$2,data__$3,G__31188__$2,output_schema31173__$1,input_checker31175__$1,map__31190__$2,G__31177__$1,product_type_view__$1,map__31189__$2,G__31179__$1,delete_chan__$2,input_schema31174__$1,opts__$2,ufv____$1,meta31192));
});})(data__$2,owner__$2,map__31190,map__31190__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__31188,map__31189,map__31189__$1,opts,delete_chan,save_chan))
;
}
return (new demo_app.product_types.views.t31191(output_checker31176_31198,owner__$2,validate__23131__auto__,G__31178,save_chan__$1,data__$2,G__31188__$1,output_schema31173_31195,input_checker31175_31197,map__31190__$1,G__31177,product_type_view,map__31189__$1,G__31179,delete_chan__$1,input_schema31174_31196,opts__$1,ufv___31194,null));
break;
}
})();if(cljs.core.truth_(validate__23131__auto__))
{var temp__4126__auto___31202 = output_checker31176_31198.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___31202))
{var error__23133__auto___31203 = temp__4126__auto___31202;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-view","product-type-view",211241907,null),cljs.core.pr_str.call(null,error__23133__auto___31203)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema31173_31195,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___31203], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.views.product_type_view),schema.core.make_fn_schema.call(null,output_schema31173_31195,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31174_31196], null)));
demo_app.product_types.views.__GT_product_type_view = (function() {
var __GT_product_type_view = null;
var __GT_product_type_view__1 = (function (cursor__29261__auto__){return om.core.build.call(null,demo_app.product_types.views.product_type_view,cursor__29261__auto__);
});
var __GT_product_type_view__2 = (function (cursor__29261__auto__,m31172){return om.core.build.call(null,demo_app.product_types.views.product_type_view,cursor__29261__auto__,m31172);
});
__GT_product_type_view = function(cursor__29261__auto__,m31172){
switch(arguments.length){
case 1:
return __GT_product_type_view__1.call(this,cursor__29261__auto__);
case 2:
return __GT_product_type_view__2.call(this,cursor__29261__auto__,m31172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_type_view.cljs$core$IFn$_invoke$arity$1 = __GT_product_type_view__1;
__GT_product_type_view.cljs$core$IFn$_invoke$arity$2 = __GT_product_type_view__2;
return __GT_product_type_view;
})()
;
var ufv___31221 = schema.utils.use_fn_validation;var output_schema31205_31222 = schema.core.Any;var input_schema31206_31223 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker31207_31224 = schema.core.checker.call(null,input_schema31206_31223);var output_checker31208_31225 = schema.core.checker.call(null,output_schema31205_31222);/**
* Inputs: [data owner]
*/
demo_app.product_types.views.product_types = (function product_types(G__31209,G__31210){var validate__23131__auto__ = ufv___31221.get_cell();if(cljs.core.truth_(validate__23131__auto__))
{var args__23132__auto___31226 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31209,G__31210], null);var temp__4126__auto___31227 = input_checker31207_31224.call(null,args__23132__auto___31226);if(cljs.core.truth_(temp__4126__auto___31227))
{var error__23133__auto___31228 = temp__4126__auto___31227;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-types","product-types",-1684864044,null),cljs.core.pr_str.call(null,error__23133__auto___31228)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema31206_31223,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___31226,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___31228], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var data = G__31209;var owner = G__31210;while(true){
if(typeof demo_app.product_types.views.t31216 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.views.t31216 = (function (owner,validate__23131__auto__,input_schema31206,data,G__31209,output_schema31205,G__31210,output_checker31208,product_types,ufv__,input_checker31207,meta31217){
this.owner = owner;
this.validate__23131__auto__ = validate__23131__auto__;
this.input_schema31206 = input_schema31206;
this.data = data;
this.G__31209 = G__31209;
this.output_schema31205 = output_schema31205;
this.G__31210 = G__31210;
this.output_checker31208 = output_checker31208;
this.product_types = product_types;
this.ufv__ = ufv__;
this.input_checker31207 = input_checker31207;
this.meta31217 = meta31217;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.views.t31216.cljs$lang$type = true;
demo_app.product_types.views.t31216.cljs$lang$ctorStr = "demo-app.product-types.views/t31216";
demo_app.product_types.views.t31216.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"demo-app.product-types.views/t31216");
});
demo_app.product_types.views.t31216.prototype.om$core$IRenderState$ = true;
demo_app.product_types.views.t31216.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__31219){var self__ = this;
var map__31220 = p__31219;var map__31220__$1 = ((cljs.core.seq_QMARK_.call(null,map__31220))?cljs.core.apply.call(null,cljs.core.hash_map,map__31220):map__31220);var state = map__31220__$1;var delete_chan = cljs.core.get.call(null,map__31220__$1,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222));var add_chan = cljs.core.get.call(null,map__31220__$1,new cljs.core.Keyword(null,"add-chan","add-chan",4026362992));var save_chan = cljs.core.get.call(null,map__31220__$1,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180));var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om.core.build_all.call(null,demo_app.product_types.views.product_type_view,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),state], null)),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,map__31220,map__31220__$1,state,delete_chan,add_chan,save_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,add_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("product-type","name","product-type/name",3237039483),"",new cljs.core.Keyword("product-type","category","product-type/category",3265236494),"default",new cljs.core.Keyword("product-type","props","product-type/props",3066878432),cljs.core.PersistentVector.EMPTY], null));
});})(___$1,map__31220,map__31220__$1,state,delete_chan,add_chan,save_chan))
},"New Product Type")],null)));
});
demo_app.product_types.views.t31216.prototype.om$core$IWillMount$ = true;
demo_app.product_types.views.t31216.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;demo_app.product_types.views.save_loop.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180)));
demo_app.product_types.views.delete_loop.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222)));
return demo_app.product_types.views.add_loop.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"add-chan","add-chan",4026362992)));
});
demo_app.product_types.views.t31216.prototype.om$core$IInitState$ = true;
demo_app.product_types.views.t31216.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"save-chan","save-chan",1151356180),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"add-chan","add-chan",4026362992),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222),cljs.core.async.chan.call(null)], null);
});
demo_app.product_types.views.t31216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31218){var self__ = this;
var _31218__$1 = this;return self__.meta31217;
});
demo_app.product_types.views.t31216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31218,meta31217__$1){var self__ = this;
var _31218__$1 = this;return (new demo_app.product_types.views.t31216(self__.owner,self__.validate__23131__auto__,self__.input_schema31206,self__.data,self__.G__31209,self__.output_schema31205,self__.G__31210,self__.output_checker31208,self__.product_types,self__.ufv__,self__.input_checker31207,meta31217__$1));
});
demo_app.product_types.views.__GT_t31216 = (function __GT_t31216(owner__$1,validate__23131__auto____$1,input_schema31206__$1,data__$1,G__31209__$1,output_schema31205__$1,G__31210__$1,output_checker31208__$1,product_types__$1,ufv____$1,input_checker31207__$1,meta31217){return (new demo_app.product_types.views.t31216(owner__$1,validate__23131__auto____$1,input_schema31206__$1,data__$1,G__31209__$1,output_schema31205__$1,G__31210__$1,output_checker31208__$1,product_types__$1,ufv____$1,input_checker31207__$1,meta31217));
});
}
return (new demo_app.product_types.views.t31216(owner,validate__23131__auto__,input_schema31206_31223,data,G__31209,output_schema31205_31222,G__31210,output_checker31208_31225,product_types,ufv___31221,input_checker31207_31224,null));
break;
}
})();if(cljs.core.truth_(validate__23131__auto__))
{var temp__4126__auto___31229 = output_checker31208_31225.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___31229))
{var error__23133__auto___31230 = temp__4126__auto___31229;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-types","product-types",-1684864044,null),cljs.core.pr_str.call(null,error__23133__auto___31230)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema31205_31222,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___31230], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.views.product_types),schema.core.make_fn_schema.call(null,output_schema31205_31222,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31206_31223], null)));
demo_app.product_types.views.__GT_product_types = (function() {
var __GT_product_types = null;
var __GT_product_types__1 = (function (cursor__29261__auto__){return om.core.build.call(null,demo_app.product_types.views.product_types,cursor__29261__auto__);
});
var __GT_product_types__2 = (function (cursor__29261__auto__,m31204){return om.core.build.call(null,demo_app.product_types.views.product_types,cursor__29261__auto__,m31204);
});
__GT_product_types = function(cursor__29261__auto__,m31204){
switch(arguments.length){
case 1:
return __GT_product_types__1.call(this,cursor__29261__auto__);
case 2:
return __GT_product_types__2.call(this,cursor__29261__auto__,m31204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_types.cljs$core$IFn$_invoke$arity$1 = __GT_product_types__1;
__GT_product_types.cljs$core$IFn$_invoke$arity$2 = __GT_product_types__2;
return __GT_product_types;
})()
;

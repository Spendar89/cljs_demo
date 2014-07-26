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
demo_app.product_types.views.save_loop = (function save_loop(data,chan){var c__26765__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_36957){var state_val_36958 = (state_36957[1]);if((state_val_36958 === 8))
{var inst_36946 = (state_36957[2]);var inst_36947 = cljs.core.vec.call(null,inst_36946);var inst_36948 = om.core.update_BANG_.call(null,data,inst_36947);var inst_36949 = console.log("SAVED");var state_36957__$1 = (function (){var statearr_36959 = state_36957;(statearr_36959[7] = inst_36948);
(statearr_36959[8] = inst_36949);
return statearr_36959;
})();var statearr_36960_36974 = state_36957__$1;(statearr_36960_36974[2] = null);
(statearr_36960_36974[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36958 === 7))
{var inst_36942 = (state_36957[2]);var inst_36943 = demo_app.api.save_data.call(null,inst_36942);var inst_36944 = console.log("SAVING");var state_36957__$1 = (function (){var statearr_36961 = state_36957;(statearr_36961[9] = inst_36944);
return statearr_36961;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36957__$1,8,inst_36943);
} else
{if((state_val_36958 === 6))
{var inst_36953 = (state_36957[2]);var state_36957__$1 = state_36957;var statearr_36962_36975 = state_36957__$1;(statearr_36962_36975[2] = inst_36953);
(statearr_36962_36975[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36958 === 5))
{var state_36957__$1 = state_36957;var statearr_36963_36976 = state_36957__$1;(statearr_36963_36976[2] = null);
(statearr_36963_36976[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36958 === 4))
{var state_36957__$1 = state_36957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36957__$1,7,chan);
} else
{if((state_val_36958 === 3))
{var inst_36955 = (state_36957[2]);var state_36957__$1 = state_36957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36957__$1,inst_36955);
} else
{if((state_val_36958 === 2))
{var state_36957__$1 = state_36957;if(true)
{var statearr_36964_36977 = state_36957__$1;(statearr_36964_36977[1] = 4);
} else
{var statearr_36965_36978 = state_36957__$1;(statearr_36965_36978[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36958 === 1))
{var state_36957__$1 = state_36957;var statearr_36966_36979 = state_36957__$1;(statearr_36966_36979[2] = null);
(statearr_36966_36979[1] = 2);
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
var state_machine__26702__auto____0 = (function (){var statearr_36970 = [null,null,null,null,null,null,null,null,null,null];(statearr_36970[0] = state_machine__26702__auto__);
(statearr_36970[1] = 1);
return statearr_36970;
});
var state_machine__26702__auto____1 = (function (state_36957){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_36957);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e36971){if((e36971 instanceof Object))
{var ex__26705__auto__ = e36971;var statearr_36972_36980 = state_36957;(statearr_36972_36980[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36957);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36981 = state_36957;
state_36957 = G__36981;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_36957){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_36957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_36973 = f__26766__auto__.call(null);(statearr_36973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto__);
return statearr_36973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
}));
return c__26765__auto__;
});
demo_app.product_types.views.add_loop = (function add_loop(data,chan){var c__26765__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_37024){var state_val_37025 = (state_37024[1]);if((state_val_37025 === 7))
{var inst_37014 = (state_37024[2]);var inst_37015 = (function (){var d = inst_37014;return ((function (d,inst_37014,state_val_37025){
return (function (xs){return cljs.core.conj.call(null,xs,d);
});
;})(d,inst_37014,state_val_37025))
})();var inst_37016 = om.core.transact_BANG_.call(null,data,inst_37015);var state_37024__$1 = (function (){var statearr_37026 = state_37024;(statearr_37026[7] = inst_37016);
return statearr_37026;
})();var statearr_37027_37040 = state_37024__$1;(statearr_37027_37040[2] = null);
(statearr_37027_37040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37025 === 6))
{var inst_37020 = (state_37024[2]);var state_37024__$1 = state_37024;var statearr_37028_37041 = state_37024__$1;(statearr_37028_37041[2] = inst_37020);
(statearr_37028_37041[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37025 === 5))
{var state_37024__$1 = state_37024;var statearr_37029_37042 = state_37024__$1;(statearr_37029_37042[2] = null);
(statearr_37029_37042[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37025 === 4))
{var state_37024__$1 = state_37024;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37024__$1,7,chan);
} else
{if((state_val_37025 === 3))
{var inst_37022 = (state_37024[2]);var state_37024__$1 = state_37024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37024__$1,inst_37022);
} else
{if((state_val_37025 === 2))
{var state_37024__$1 = state_37024;if(true)
{var statearr_37030_37043 = state_37024__$1;(statearr_37030_37043[1] = 4);
} else
{var statearr_37031_37044 = state_37024__$1;(statearr_37031_37044[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37025 === 1))
{var state_37024__$1 = state_37024;var statearr_37032_37045 = state_37024__$1;(statearr_37032_37045[2] = null);
(statearr_37032_37045[1] = 2);
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
var state_machine__26702__auto____0 = (function (){var statearr_37036 = [null,null,null,null,null,null,null,null];(statearr_37036[0] = state_machine__26702__auto__);
(statearr_37036[1] = 1);
return statearr_37036;
});
var state_machine__26702__auto____1 = (function (state_37024){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_37024);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e37037){if((e37037 instanceof Object))
{var ex__26705__auto__ = e37037;var statearr_37038_37046 = state_37024;(statearr_37038_37046[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37024);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37037;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37047 = state_37024;
state_37024 = G__37047;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_37024){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_37024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_37039 = f__26766__auto__.call(null);(statearr_37039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto__);
return statearr_37039;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
}));
return c__26765__auto__;
});
demo_app.product_types.views.delete_loop = (function delete_loop(data,chan){var c__26765__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_37104){var state_val_37105 = (state_37104[1]);if((state_val_37105 === 8))
{var inst_37096 = (state_37104[2]);var state_37104__$1 = (function (){var statearr_37106 = state_37104;(statearr_37106[7] = inst_37096);
return statearr_37106;
})();var statearr_37107_37121 = state_37104__$1;(statearr_37107_37121[2] = null);
(statearr_37107_37121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37105 === 7))
{var inst_37088 = (state_37104[2]);var inst_37089 = cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,inst_37088);var inst_37090 = cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,inst_37089);var inst_37091 = cljs.core.assoc.call(null,cljs.core.PersistentHashMap.EMPTY,new cljs.core.Keyword(null,"to-delete","to-delete",1928504495),inst_37090);var inst_37092 = (function (){var to_delete = inst_37091;var d = inst_37088;return ((function (to_delete,d,inst_37088,inst_37089,inst_37090,inst_37091,state_val_37105){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (to_delete,d,inst_37088,inst_37089,inst_37090,inst_37091,state_val_37105){
return (function (p1__37048_SHARP_){return (d === p1__37048_SHARP_);
});})(to_delete,d,inst_37088,inst_37089,inst_37090,inst_37091,state_val_37105))
,xs));
});
;})(to_delete,d,inst_37088,inst_37089,inst_37090,inst_37091,state_val_37105))
})();var inst_37093 = om.core.transact_BANG_.call(null,data,inst_37092);var inst_37094 = demo_app.api.save_data.call(null,inst_37091);var state_37104__$1 = (function (){var statearr_37108 = state_37104;(statearr_37108[8] = inst_37093);
return statearr_37108;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37104__$1,8,inst_37094);
} else
{if((state_val_37105 === 6))
{var inst_37100 = (state_37104[2]);var state_37104__$1 = state_37104;var statearr_37109_37122 = state_37104__$1;(statearr_37109_37122[2] = inst_37100);
(statearr_37109_37122[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37105 === 5))
{var state_37104__$1 = state_37104;var statearr_37110_37123 = state_37104__$1;(statearr_37110_37123[2] = null);
(statearr_37110_37123[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37105 === 4))
{var state_37104__$1 = state_37104;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37104__$1,7,chan);
} else
{if((state_val_37105 === 3))
{var inst_37102 = (state_37104[2]);var state_37104__$1 = state_37104;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37104__$1,inst_37102);
} else
{if((state_val_37105 === 2))
{var state_37104__$1 = state_37104;if(true)
{var statearr_37111_37124 = state_37104__$1;(statearr_37111_37124[1] = 4);
} else
{var statearr_37112_37125 = state_37104__$1;(statearr_37112_37125[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37105 === 1))
{var state_37104__$1 = state_37104;var statearr_37113_37126 = state_37104__$1;(statearr_37113_37126[2] = null);
(statearr_37113_37126[1] = 2);
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
var state_machine__26702__auto____0 = (function (){var statearr_37117 = [null,null,null,null,null,null,null,null,null];(statearr_37117[0] = state_machine__26702__auto__);
(statearr_37117[1] = 1);
return statearr_37117;
});
var state_machine__26702__auto____1 = (function (state_37104){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_37104);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e37118){if((e37118 instanceof Object))
{var ex__26705__auto__ = e37118;var statearr_37119_37127 = state_37104;(statearr_37119_37127[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37104);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37128 = state_37104;
state_37104 = G__37128;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_37104){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_37104);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_37120 = f__26766__auto__.call(null);(statearr_37120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto__);
return statearr_37120;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
}));
return c__26765__auto__;
});
var ufv___37152 = schema.utils.use_fn_validation;var output_schema37131_37153 = schema.core.Any;var input_schema37132_37154 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-1637529003,null))], null);var input_checker37133_37155 = schema.core.checker.call(null,input_schema37132_37154);var output_checker37134_37156 = schema.core.checker.call(null,output_schema37131_37153);/**
* Inputs: [data owner {:keys [save-chan delete-chan], :as opts}]
*/
demo_app.product_types.views.product_type_view = (function product_type_view(G__37135,G__37136,G__37137){var validate__23131__auto__ = ufv___37152.get_cell();if(cljs.core.truth_(validate__23131__auto__))
{var args__23132__auto___37157 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37135,G__37136,G__37137], null);var temp__4126__auto___37158 = input_checker37133_37155.call(null,args__23132__auto___37157);if(cljs.core.truth_(temp__4126__auto___37158))
{var error__23133__auto___37159 = temp__4126__auto___37158;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-view","product-type-view",211241907,null),cljs.core.pr_str.call(null,error__23133__auto___37159)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema37132_37154,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___37157,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___37159], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var data = G__37135;var owner = G__37136;var G__37146 = G__37137;var map__37147 = G__37146;var map__37147__$1 = ((cljs.core.seq_QMARK_.call(null,map__37147))?cljs.core.apply.call(null,cljs.core.hash_map,map__37147):map__37147);var opts = map__37147__$1;var delete_chan = cljs.core.get.call(null,map__37147__$1,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222));var save_chan = cljs.core.get.call(null,map__37147__$1,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180));var data__$1 = data;var owner__$1 = owner;var G__37146__$1 = G__37146;while(true){
var data__$2 = data__$1;var owner__$2 = owner__$1;var map__37148 = G__37146__$1;var map__37148__$1 = ((cljs.core.seq_QMARK_.call(null,map__37148))?cljs.core.apply.call(null,cljs.core.hash_map,map__37148):map__37148);var opts__$1 = map__37148__$1;var delete_chan__$1 = cljs.core.get.call(null,map__37148__$1,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222));var save_chan__$1 = cljs.core.get.call(null,map__37148__$1,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180));if(typeof demo_app.product_types.views.t37149 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.views.t37149 = (function (input_checker37133,owner,validate__23131__auto__,save_chan,data,G__37146,output_schema37131,G__37135,G__37137,map__37147,product_type_view,G__37136,delete_chan,output_checker37134,opts,ufv__,input_schema37132,map__37148,meta37150){
this.input_checker37133 = input_checker37133;
this.owner = owner;
this.validate__23131__auto__ = validate__23131__auto__;
this.save_chan = save_chan;
this.data = data;
this.G__37146 = G__37146;
this.output_schema37131 = output_schema37131;
this.G__37135 = G__37135;
this.G__37137 = G__37137;
this.map__37147 = map__37147;
this.product_type_view = product_type_view;
this.G__37136 = G__37136;
this.delete_chan = delete_chan;
this.output_checker37134 = output_checker37134;
this.opts = opts;
this.ufv__ = ufv__;
this.input_schema37132 = input_schema37132;
this.map__37148 = map__37148;
this.meta37150 = meta37150;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.views.t37149.cljs$lang$type = true;
demo_app.product_types.views.t37149.cljs$lang$ctorStr = "demo-app.product-types.views/t37149";
demo_app.product_types.views.t37149.cljs$lang$ctorPrWriter = ((function (data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan){
return (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"demo-app.product-types.views/t37149");
});})(data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.t37149.prototype.om$core$IRender$ = true;
demo_app.product_types.views.t37149.prototype.om$core$IRender$render$arity$1 = ((function (data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,React.DOM.h2(null,"Product-Type Defaults"),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,React.DOM.label(null,"Name"),(new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": ((function (___$1,data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan){
return (function (p1__37129_SHARP_){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword("product-type","name","product-type/name",3237039483),p1__37129_SHARP_.target.value);
});})(___$1,data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan))
, "value": new cljs.core.Keyword("product-type","name","product-type/name",3237039483).cljs$core$IFn$_invoke$arity$1(self__.data), "type": "text"}),React.DOM.button({"onClick": ((function (___$1,data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.delete_chan,cljs.core.deref.call(null,self__.data));
});})(___$1,data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan))
},"Delete"),om_tools.dom.element.call(null,React.DOM.div,React.DOM.h2(null,"Product-Type Props"),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_props,self__.data)],null))),React.DOM.button({"onClick": ((function (___$1,data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.save_chan,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,self__.data)));
});})(___$1,data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan))
},"Save Product Type")],null)))],null)));
});})(data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.t37149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan){
return (function (_37151){var self__ = this;
var _37151__$1 = this;return self__.meta37150;
});})(data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.t37149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan){
return (function (_37151,meta37150__$1){var self__ = this;
var _37151__$1 = this;return (new demo_app.product_types.views.t37149(self__.input_checker37133,self__.owner,self__.validate__23131__auto__,self__.save_chan,self__.data,self__.G__37146,self__.output_schema37131,self__.G__37135,self__.G__37137,self__.map__37147,self__.product_type_view,self__.G__37136,self__.delete_chan,self__.output_checker37134,self__.opts,self__.ufv__,self__.input_schema37132,self__.map__37148,meta37150__$1));
});})(data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.__GT_t37149 = ((function (data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan){
return (function __GT_t37149(input_checker37133__$1,owner__$3,validate__23131__auto____$1,save_chan__$2,data__$3,G__37146__$2,output_schema37131__$1,G__37135__$1,G__37137__$1,map__37147__$2,product_type_view__$1,G__37136__$1,delete_chan__$2,output_checker37134__$1,opts__$2,ufv____$1,input_schema37132__$1,map__37148__$2,meta37150){return (new demo_app.product_types.views.t37149(input_checker37133__$1,owner__$3,validate__23131__auto____$1,save_chan__$2,data__$3,G__37146__$2,output_schema37131__$1,G__37135__$1,G__37137__$1,map__37147__$2,product_type_view__$1,G__37136__$1,delete_chan__$2,output_checker37134__$1,opts__$2,ufv____$1,input_schema37132__$1,map__37148__$2,meta37150));
});})(data__$2,owner__$2,map__37148,map__37148__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__37146,map__37147,map__37147__$1,opts,delete_chan,save_chan))
;
}
return (new demo_app.product_types.views.t37149(input_checker37133_37155,owner__$2,validate__23131__auto__,save_chan__$1,data__$2,G__37146__$1,output_schema37131_37153,G__37135,G__37137,map__37147__$1,product_type_view,G__37136,delete_chan__$1,output_checker37134_37156,opts__$1,ufv___37152,input_schema37132_37154,map__37148__$1,null));
break;
}
})();if(cljs.core.truth_(validate__23131__auto__))
{var temp__4126__auto___37160 = output_checker37134_37156.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___37160))
{var error__23133__auto___37161 = temp__4126__auto___37160;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-view","product-type-view",211241907,null),cljs.core.pr_str.call(null,error__23133__auto___37161)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema37131_37153,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___37161], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.views.product_type_view),schema.core.make_fn_schema.call(null,output_schema37131_37153,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37132_37154], null)));
demo_app.product_types.views.__GT_product_type_view = (function() {
var __GT_product_type_view = null;
var __GT_product_type_view__1 = (function (cursor__29261__auto__){return om.core.build.call(null,demo_app.product_types.views.product_type_view,cursor__29261__auto__);
});
var __GT_product_type_view__2 = (function (cursor__29261__auto__,m37130){return om.core.build.call(null,demo_app.product_types.views.product_type_view,cursor__29261__auto__,m37130);
});
__GT_product_type_view = function(cursor__29261__auto__,m37130){
switch(arguments.length){
case 1:
return __GT_product_type_view__1.call(this,cursor__29261__auto__);
case 2:
return __GT_product_type_view__2.call(this,cursor__29261__auto__,m37130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_type_view.cljs$core$IFn$_invoke$arity$1 = __GT_product_type_view__1;
__GT_product_type_view.cljs$core$IFn$_invoke$arity$2 = __GT_product_type_view__2;
return __GT_product_type_view;
})()
;
var ufv___37179 = schema.utils.use_fn_validation;var output_schema37163_37180 = schema.core.Any;var input_schema37164_37181 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker37165_37182 = schema.core.checker.call(null,input_schema37164_37181);var output_checker37166_37183 = schema.core.checker.call(null,output_schema37163_37180);/**
* Inputs: [data owner]
*/
demo_app.product_types.views.product_types = (function product_types(G__37167,G__37168){var validate__23131__auto__ = ufv___37179.get_cell();if(cljs.core.truth_(validate__23131__auto__))
{var args__23132__auto___37184 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37167,G__37168], null);var temp__4126__auto___37185 = input_checker37165_37182.call(null,args__23132__auto___37184);if(cljs.core.truth_(temp__4126__auto___37185))
{var error__23133__auto___37186 = temp__4126__auto___37185;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-types","product-types",-1684864044,null),cljs.core.pr_str.call(null,error__23133__auto___37186)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema37164_37181,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___37184,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___37186], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var data = G__37167;var owner = G__37168;while(true){
if(typeof demo_app.product_types.views.t37174 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.views.t37174 = (function (G__37168,owner,validate__23131__auto__,data,output_checker37166,input_schema37164,input_checker37165,product_types,G__37167,output_schema37163,ufv__,meta37175){
this.G__37168 = G__37168;
this.owner = owner;
this.validate__23131__auto__ = validate__23131__auto__;
this.data = data;
this.output_checker37166 = output_checker37166;
this.input_schema37164 = input_schema37164;
this.input_checker37165 = input_checker37165;
this.product_types = product_types;
this.G__37167 = G__37167;
this.output_schema37163 = output_schema37163;
this.ufv__ = ufv__;
this.meta37175 = meta37175;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.views.t37174.cljs$lang$type = true;
demo_app.product_types.views.t37174.cljs$lang$ctorStr = "demo-app.product-types.views/t37174";
demo_app.product_types.views.t37174.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"demo-app.product-types.views/t37174");
});
demo_app.product_types.views.t37174.prototype.om$core$IRenderState$ = true;
demo_app.product_types.views.t37174.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__37177){var self__ = this;
var map__37178 = p__37177;var map__37178__$1 = ((cljs.core.seq_QMARK_.call(null,map__37178))?cljs.core.apply.call(null,cljs.core.hash_map,map__37178):map__37178);var state = map__37178__$1;var delete_chan = cljs.core.get.call(null,map__37178__$1,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222));var add_chan = cljs.core.get.call(null,map__37178__$1,new cljs.core.Keyword(null,"add-chan","add-chan",4026362992));var save_chan = cljs.core.get.call(null,map__37178__$1,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180));var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om.core.build_all.call(null,demo_app.product_types.views.product_type_view,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),state], null)),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,map__37178,map__37178__$1,state,delete_chan,add_chan,save_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,add_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("product-type","name","product-type/name",3237039483),"",new cljs.core.Keyword("product-type","category","product-type/category",3265236494),"default",new cljs.core.Keyword("product-type","props","product-type/props",3066878432),cljs.core.PersistentVector.EMPTY], null));
});})(___$1,map__37178,map__37178__$1,state,delete_chan,add_chan,save_chan))
},"New Product Type")],null)));
});
demo_app.product_types.views.t37174.prototype.om$core$IWillMount$ = true;
demo_app.product_types.views.t37174.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;demo_app.product_types.views.save_loop.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180)));
demo_app.product_types.views.delete_loop.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222)));
return demo_app.product_types.views.add_loop.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"add-chan","add-chan",4026362992)));
});
demo_app.product_types.views.t37174.prototype.om$core$IInitState$ = true;
demo_app.product_types.views.t37174.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"save-chan","save-chan",1151356180),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"add-chan","add-chan",4026362992),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222),cljs.core.async.chan.call(null)], null);
});
demo_app.product_types.views.t37174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37176){var self__ = this;
var _37176__$1 = this;return self__.meta37175;
});
demo_app.product_types.views.t37174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37176,meta37175__$1){var self__ = this;
var _37176__$1 = this;return (new demo_app.product_types.views.t37174(self__.G__37168,self__.owner,self__.validate__23131__auto__,self__.data,self__.output_checker37166,self__.input_schema37164,self__.input_checker37165,self__.product_types,self__.G__37167,self__.output_schema37163,self__.ufv__,meta37175__$1));
});
demo_app.product_types.views.__GT_t37174 = (function __GT_t37174(G__37168__$1,owner__$1,validate__23131__auto____$1,data__$1,output_checker37166__$1,input_schema37164__$1,input_checker37165__$1,product_types__$1,G__37167__$1,output_schema37163__$1,ufv____$1,meta37175){return (new demo_app.product_types.views.t37174(G__37168__$1,owner__$1,validate__23131__auto____$1,data__$1,output_checker37166__$1,input_schema37164__$1,input_checker37165__$1,product_types__$1,G__37167__$1,output_schema37163__$1,ufv____$1,meta37175));
});
}
return (new demo_app.product_types.views.t37174(G__37168,owner,validate__23131__auto__,data,output_checker37166_37183,input_schema37164_37181,input_checker37165_37182,product_types,G__37167,output_schema37163_37180,ufv___37179,null));
break;
}
})();if(cljs.core.truth_(validate__23131__auto__))
{var temp__4126__auto___37187 = output_checker37166_37183.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___37187))
{var error__23133__auto___37188 = temp__4126__auto___37187;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-types","product-types",-1684864044,null),cljs.core.pr_str.call(null,error__23133__auto___37188)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema37163_37180,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___37188], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.views.product_types),schema.core.make_fn_schema.call(null,output_schema37163_37180,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37164_37181], null)));
demo_app.product_types.views.__GT_product_types = (function() {
var __GT_product_types = null;
var __GT_product_types__1 = (function (cursor__29261__auto__){return om.core.build.call(null,demo_app.product_types.views.product_types,cursor__29261__auto__);
});
var __GT_product_types__2 = (function (cursor__29261__auto__,m37162){return om.core.build.call(null,demo_app.product_types.views.product_types,cursor__29261__auto__,m37162);
});
__GT_product_types = function(cursor__29261__auto__,m37162){
switch(arguments.length){
case 1:
return __GT_product_types__1.call(this,cursor__29261__auto__);
case 2:
return __GT_product_types__2.call(this,cursor__29261__auto__,m37162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_types.cljs$core$IFn$_invoke$arity$1 = __GT_product_types__1;
__GT_product_types.cljs$core$IFn$_invoke$arity$2 = __GT_product_types__2;
return __GT_product_types;
})()
;

// Compiled by ClojureScript 0.0-2156
goog.provide('demo_app.product_types.views');
goog.require('cljs.core');
goog.require('demo_app.product_types.product_type_props.views');
goog.require('cljs.core.async');
goog.require('demo_app.api');
goog.require('om_tools.core');
goog.require('clojure.data');
goog.require('clojure.data');
goog.require('cljs.reader');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('demo_app.api');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
goog.require('demo_app.product_types.product_type_props.views');
goog.require('demo_app.product_types.product_type_props.views');
demo_app.product_types.views.save_loop = (function save_loop(data,chan){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_88840){var state_val_88841 = (state_88840[1]);if((state_val_88841 === 8))
{var inst_88829 = (state_88840[2]);var inst_88830 = cljs.core.vec.call(null,inst_88829);var inst_88831 = om.core.update_BANG_.call(null,data,inst_88830);var inst_88832 = console.log("SAVED");var state_88840__$1 = (function (){var statearr_88842 = state_88840;(statearr_88842[7] = inst_88831);
(statearr_88842[8] = inst_88832);
return statearr_88842;
})();var statearr_88843_88857 = state_88840__$1;(statearr_88843_88857[2] = null);
(statearr_88843_88857[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88841 === 7))
{var inst_88825 = (state_88840[2]);var inst_88826 = demo_app.api.save_data.call(null,inst_88825);var inst_88827 = console.log("SAVING");var state_88840__$1 = (function (){var statearr_88844 = state_88840;(statearr_88844[9] = inst_88827);
return statearr_88844;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88840__$1,8,inst_88826);
} else
{if((state_val_88841 === 6))
{var inst_88836 = (state_88840[2]);var state_88840__$1 = state_88840;var statearr_88845_88858 = state_88840__$1;(statearr_88845_88858[2] = inst_88836);
(statearr_88845_88858[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88841 === 5))
{var state_88840__$1 = state_88840;var statearr_88846_88859 = state_88840__$1;(statearr_88846_88859[2] = null);
(statearr_88846_88859[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88841 === 4))
{var state_88840__$1 = state_88840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88840__$1,7,chan);
} else
{if((state_val_88841 === 3))
{var inst_88838 = (state_88840[2]);var state_88840__$1 = state_88840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88840__$1,inst_88838);
} else
{if((state_val_88841 === 2))
{var state_88840__$1 = state_88840;if(true)
{var statearr_88847_88860 = state_88840__$1;(statearr_88847_88860[1] = 4);
} else
{var statearr_88848_88861 = state_88840__$1;(statearr_88848_88861[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88841 === 1))
{var state_88840__$1 = state_88840;var statearr_88849_88862 = state_88840__$1;(statearr_88849_88862[2] = null);
(statearr_88849_88862[1] = 2);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_88853 = [null,null,null,null,null,null,null,null,null,null];(statearr_88853[0] = state_machine__5510__auto__);
(statearr_88853[1] = 1);
return statearr_88853;
});
var state_machine__5510__auto____1 = (function (state_88840){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_88840);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e88854){if((e88854 instanceof Object))
{var ex__5513__auto__ = e88854;var statearr_88855_88863 = state_88840;(statearr_88855_88863[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88864 = state_88840;
state_88840 = G__88864;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_88840){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_88840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_88856 = f__5525__auto__.call(null);(statearr_88856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_88856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
});
demo_app.product_types.views.add_loop = (function add_loop(data,chan){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_88907){var state_val_88908 = (state_88907[1]);if((state_val_88908 === 7))
{var inst_88897 = (state_88907[2]);var inst_88898 = (function (){var d = inst_88897;return ((function (d,inst_88897,state_val_88908){
return (function (xs){return cljs.core.conj.call(null,xs,d);
});
;})(d,inst_88897,state_val_88908))
})();var inst_88899 = om.core.transact_BANG_.call(null,data,inst_88898);var state_88907__$1 = (function (){var statearr_88909 = state_88907;(statearr_88909[7] = inst_88899);
return statearr_88909;
})();var statearr_88910_88923 = state_88907__$1;(statearr_88910_88923[2] = null);
(statearr_88910_88923[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88908 === 6))
{var inst_88903 = (state_88907[2]);var state_88907__$1 = state_88907;var statearr_88911_88924 = state_88907__$1;(statearr_88911_88924[2] = inst_88903);
(statearr_88911_88924[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88908 === 5))
{var state_88907__$1 = state_88907;var statearr_88912_88925 = state_88907__$1;(statearr_88912_88925[2] = null);
(statearr_88912_88925[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88908 === 4))
{var state_88907__$1 = state_88907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88907__$1,7,chan);
} else
{if((state_val_88908 === 3))
{var inst_88905 = (state_88907[2]);var state_88907__$1 = state_88907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88907__$1,inst_88905);
} else
{if((state_val_88908 === 2))
{var state_88907__$1 = state_88907;if(true)
{var statearr_88913_88926 = state_88907__$1;(statearr_88913_88926[1] = 4);
} else
{var statearr_88914_88927 = state_88907__$1;(statearr_88914_88927[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88908 === 1))
{var state_88907__$1 = state_88907;var statearr_88915_88928 = state_88907__$1;(statearr_88915_88928[2] = null);
(statearr_88915_88928[1] = 2);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_88919 = [null,null,null,null,null,null,null,null];(statearr_88919[0] = state_machine__5510__auto__);
(statearr_88919[1] = 1);
return statearr_88919;
});
var state_machine__5510__auto____1 = (function (state_88907){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_88907);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e88920){if((e88920 instanceof Object))
{var ex__5513__auto__ = e88920;var statearr_88921_88929 = state_88907;(statearr_88921_88929[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88907);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e88920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__88930 = state_88907;
state_88907 = G__88930;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_88907){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_88907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_88922 = f__5525__auto__.call(null);(statearr_88922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_88922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
});
demo_app.product_types.views.delete_loop = (function delete_loop(data,chan){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_88987){var state_val_88988 = (state_88987[1]);if((state_val_88988 === 8))
{var inst_88979 = (state_88987[2]);var state_88987__$1 = (function (){var statearr_88989 = state_88987;(statearr_88989[7] = inst_88979);
return statearr_88989;
})();var statearr_88990_89004 = state_88987__$1;(statearr_88990_89004[2] = null);
(statearr_88990_89004[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88988 === 7))
{var inst_88971 = (state_88987[2]);var inst_88972 = cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,inst_88971);var inst_88973 = cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,inst_88972);var inst_88974 = cljs.core.assoc.call(null,cljs.core.PersistentHashMap.EMPTY,new cljs.core.Keyword(null,"to-delete","to-delete",1928504495),inst_88973);var inst_88975 = (function (){var to_delete = inst_88974;var d = inst_88971;return ((function (to_delete,d,inst_88971,inst_88972,inst_88973,inst_88974,state_val_88988){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (to_delete,d,inst_88971,inst_88972,inst_88973,inst_88974,state_val_88988){
return (function (p1__88931_SHARP_){return (d === p1__88931_SHARP_);
});})(to_delete,d,inst_88971,inst_88972,inst_88973,inst_88974,state_val_88988))
,xs));
});
;})(to_delete,d,inst_88971,inst_88972,inst_88973,inst_88974,state_val_88988))
})();var inst_88976 = om.core.transact_BANG_.call(null,data,inst_88975);var inst_88977 = demo_app.api.save_data.call(null,inst_88974);var state_88987__$1 = (function (){var statearr_88991 = state_88987;(statearr_88991[8] = inst_88976);
return statearr_88991;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88987__$1,8,inst_88977);
} else
{if((state_val_88988 === 6))
{var inst_88983 = (state_88987[2]);var state_88987__$1 = state_88987;var statearr_88992_89005 = state_88987__$1;(statearr_88992_89005[2] = inst_88983);
(statearr_88992_89005[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88988 === 5))
{var state_88987__$1 = state_88987;var statearr_88993_89006 = state_88987__$1;(statearr_88993_89006[2] = null);
(statearr_88993_89006[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88988 === 4))
{var state_88987__$1 = state_88987;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_88987__$1,7,chan);
} else
{if((state_val_88988 === 3))
{var inst_88985 = (state_88987[2]);var state_88987__$1 = state_88987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_88987__$1,inst_88985);
} else
{if((state_val_88988 === 2))
{var state_88987__$1 = state_88987;if(true)
{var statearr_88994_89007 = state_88987__$1;(statearr_88994_89007[1] = 4);
} else
{var statearr_88995_89008 = state_88987__$1;(statearr_88995_89008[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_88988 === 1))
{var state_88987__$1 = state_88987;var statearr_88996_89009 = state_88987__$1;(statearr_88996_89009[2] = null);
(statearr_88996_89009[1] = 2);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_89000 = [null,null,null,null,null,null,null,null,null];(statearr_89000[0] = state_machine__5510__auto__);
(statearr_89000[1] = 1);
return statearr_89000;
});
var state_machine__5510__auto____1 = (function (state_88987){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_88987);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e89001){if((e89001 instanceof Object))
{var ex__5513__auto__ = e89001;var statearr_89002_89010 = state_88987;(statearr_89002_89010[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_88987);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e89001;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__89011 = state_88987;
state_88987 = G__89011;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_88987){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_88987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_89003 = f__5525__auto__.call(null);(statearr_89003[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_89003;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
});
var ufv___89036 = schema.utils.use_fn_validation;var output_schema89015_89037 = schema.core.Any;var input_schema89016_89038 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-1637529003,null))], null);var input_checker89017_89039 = schema.core.checker.call(null,input_schema89016_89038);var output_checker89018_89040 = schema.core.checker.call(null,output_schema89015_89037);/**
* Inputs: [data owner {:keys [save-chan delete-chan], :as opts}]
*/
demo_app.product_types.views.product_type_view = (function product_type_view(G__89019,G__89020,G__89021){var validate__9355__auto__ = ufv___89036.get_cell();if(cljs.core.truth_(validate__9355__auto__))
{var args__9356__auto___89041 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__89019,G__89020,G__89021], null);var temp__4092__auto___89042 = input_checker89017_89039.call(null,args__9356__auto___89041);if(cljs.core.truth_(temp__4092__auto___89042))
{var error__9357__auto___89043 = temp__4092__auto___89042;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-view","product-type-view",211241907,null),cljs.core.pr_str.call(null,error__9357__auto___89043)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___89043,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema89016_89038,new cljs.core.Keyword(null,"value","value",1125876963),args__9356__auto___89041], null));
} else
{}
} else
{}
var o__9358__auto__ = (function (){var data = G__89019;var owner = G__89020;var G__89030 = G__89021;var map__89031 = G__89030;var map__89031__$1 = ((cljs.core.seq_QMARK_.call(null,map__89031))?cljs.core.apply.call(null,cljs.core.hash_map,map__89031):map__89031);var opts = map__89031__$1;var delete_chan = cljs.core.get.call(null,map__89031__$1,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222));var save_chan = cljs.core.get.call(null,map__89031__$1,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180));var data__$1 = data;var owner__$1 = owner;var G__89030__$1 = G__89030;while(true){
var data__$2 = data__$1;var owner__$2 = owner__$1;var map__89032 = G__89030__$1;var map__89032__$1 = ((cljs.core.seq_QMARK_.call(null,map__89032))?cljs.core.apply.call(null,cljs.core.hash_map,map__89032):map__89032);var opts__$1 = map__89032__$1;var delete_chan__$1 = cljs.core.get.call(null,map__89032__$1,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222));var save_chan__$1 = cljs.core.get.call(null,map__89032__$1,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180));if(typeof demo_app.product_types.views.t89033 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.views.t89033 = (function (opts,save_chan,ufv__,data,input_checker89017,G__89020,G__89021,product_type_view,validate__9355__auto__,delete_chan,output_schema89015,map__89031,input_schema89016,G__89019,owner,map__89032,G__89030,output_checker89018,meta89034){
this.opts = opts;
this.save_chan = save_chan;
this.ufv__ = ufv__;
this.data = data;
this.input_checker89017 = input_checker89017;
this.G__89020 = G__89020;
this.G__89021 = G__89021;
this.product_type_view = product_type_view;
this.validate__9355__auto__ = validate__9355__auto__;
this.delete_chan = delete_chan;
this.output_schema89015 = output_schema89015;
this.map__89031 = map__89031;
this.input_schema89016 = input_schema89016;
this.G__89019 = G__89019;
this.owner = owner;
this.map__89032 = map__89032;
this.G__89030 = G__89030;
this.output_checker89018 = output_checker89018;
this.meta89034 = meta89034;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.views.t89033.cljs$lang$type = true;
demo_app.product_types.views.t89033.cljs$lang$ctorStr = "demo-app.product-types.views/t89033";
demo_app.product_types.views.t89033.cljs$lang$ctorPrWriter = ((function (data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"demo-app.product-types.views/t89033");
});})(data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.t89033.prototype.om$core$IRender$ = true;
demo_app.product_types.views.t89033.prototype.om$core$IRender$render$arity$1 = ((function (data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,React.DOM.h2(null,"Product-Type Defaults"),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,React.DOM.label(null,"Name"),(new cljs.core.PersistentVector(null,6,5,cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": ((function (___$1,data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan){
return (function (p1__89012_SHARP_){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword("product-type","name","product-type/name",3237039483),p1__89012_SHARP_.target.value);
});})(___$1,data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan))
, "value": new cljs.core.Keyword("product-type","name","product-type/name",3237039483).cljs$core$IFn$_invoke$arity$1(self__.data), "type": "text"}),React.DOM.label(null,"Category"),om.dom.input.call(null,{"onChange": ((function (___$1,data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan){
return (function (p1__89013_SHARP_){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword("product-type","category","product-type/category",3265236494),p1__89013_SHARP_.target.value);
});})(___$1,data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan))
, "value": new cljs.core.Keyword("product-type","category","product-type/category",3265236494).cljs$core$IFn$_invoke$arity$1(self__.data), "type": "text"}),React.DOM.button({"onClick": ((function (___$1,data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.delete_chan,cljs.core.deref.call(null,self__.data));
});})(___$1,data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan))
},"Delete"),om_tools.dom.element.call(null,React.DOM.div,React.DOM.h2(null,"Product-Type Props"),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_props,self__.data)],null))),React.DOM.button({"onClick": ((function (___$1,data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.save_chan,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,self__.data)));
});})(___$1,data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan))
},"Save Product Type")],null)))],null)));
});})(data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.t89033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan){
return (function (_89035){var self__ = this;
var _89035__$1 = this;return self__.meta89034;
});})(data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.t89033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan){
return (function (_89035,meta89034__$1){var self__ = this;
var _89035__$1 = this;return (new demo_app.product_types.views.t89033(self__.opts,self__.save_chan,self__.ufv__,self__.data,self__.input_checker89017,self__.G__89020,self__.G__89021,self__.product_type_view,self__.validate__9355__auto__,self__.delete_chan,self__.output_schema89015,self__.map__89031,self__.input_schema89016,self__.G__89019,self__.owner,self__.map__89032,self__.G__89030,self__.output_checker89018,meta89034__$1));
});})(data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.__GT_t89033 = ((function (data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan){
return (function __GT_t89033(opts__$2,save_chan__$2,ufv____$1,data__$3,input_checker89017__$1,G__89020__$1,G__89021__$1,product_type_view__$1,validate__9355__auto____$1,delete_chan__$2,output_schema89015__$1,map__89031__$2,input_schema89016__$1,G__89019__$1,owner__$3,map__89032__$2,G__89030__$2,output_checker89018__$1,meta89034){return (new demo_app.product_types.views.t89033(opts__$2,save_chan__$2,ufv____$1,data__$3,input_checker89017__$1,G__89020__$1,G__89021__$1,product_type_view__$1,validate__9355__auto____$1,delete_chan__$2,output_schema89015__$1,map__89031__$2,input_schema89016__$1,G__89019__$1,owner__$3,map__89032__$2,G__89030__$2,output_checker89018__$1,meta89034));
});})(data__$2,owner__$2,map__89032,map__89032__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__89030,map__89031,map__89031__$1,opts,delete_chan,save_chan))
;
}
return (new demo_app.product_types.views.t89033(opts__$1,save_chan__$1,ufv___89036,data__$2,input_checker89017_89039,G__89020,G__89021,product_type_view,validate__9355__auto__,delete_chan__$1,output_schema89015_89037,map__89031__$1,input_schema89016_89038,G__89019,owner__$2,map__89032__$1,G__89030__$1,output_checker89018_89040,null));
break;
}
})();if(cljs.core.truth_(validate__9355__auto__))
{var temp__4092__auto___89044 = output_checker89018_89040.call(null,o__9358__auto__);if(cljs.core.truth_(temp__4092__auto___89044))
{var error__9357__auto___89045 = temp__4092__auto___89044;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-view","product-type-view",211241907,null),cljs.core.pr_str.call(null,error__9357__auto___89045)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___89045,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema89015_89037,new cljs.core.Keyword(null,"value","value",1125876963),o__9358__auto__], null));
} else
{}
} else
{}
return o__9358__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.views.product_type_view),schema.core.make_fn_schema.call(null,output_schema89015_89037,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema89016_89038], null)));
demo_app.product_types.views.__GT_product_type_view = (function() {
var __GT_product_type_view = null;
var __GT_product_type_view__1 = (function (cursor__11123__auto__){return om.core.build.call(null,demo_app.product_types.views.product_type_view,cursor__11123__auto__);
});
var __GT_product_type_view__2 = (function (cursor__11123__auto__,m89014){return om.core.build.call(null,demo_app.product_types.views.product_type_view,cursor__11123__auto__,m89014);
});
__GT_product_type_view = function(cursor__11123__auto__,m89014){
switch(arguments.length){
case 1:
return __GT_product_type_view__1.call(this,cursor__11123__auto__);
case 2:
return __GT_product_type_view__2.call(this,cursor__11123__auto__,m89014);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_type_view.cljs$core$IFn$_invoke$arity$1 = __GT_product_type_view__1;
__GT_product_type_view.cljs$core$IFn$_invoke$arity$2 = __GT_product_type_view__2;
return __GT_product_type_view;
})()
;
var ufv___89063 = schema.utils.use_fn_validation;var output_schema89047_89064 = schema.core.Any;var input_schema89048_89065 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker89049_89066 = schema.core.checker.call(null,input_schema89048_89065);var output_checker89050_89067 = schema.core.checker.call(null,output_schema89047_89064);/**
* Inputs: [data owner]
*/
demo_app.product_types.views.product_types = (function product_types(G__89051,G__89052){var validate__9355__auto__ = ufv___89063.get_cell();if(cljs.core.truth_(validate__9355__auto__))
{var args__9356__auto___89068 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__89051,G__89052], null);var temp__4092__auto___89069 = input_checker89049_89066.call(null,args__9356__auto___89068);if(cljs.core.truth_(temp__4092__auto___89069))
{var error__9357__auto___89070 = temp__4092__auto___89069;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-types","product-types",-1684864044,null),cljs.core.pr_str.call(null,error__9357__auto___89070)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___89070,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema89048_89065,new cljs.core.Keyword(null,"value","value",1125876963),args__9356__auto___89068], null));
} else
{}
} else
{}
var o__9358__auto__ = (function (){var data = G__89051;var owner = G__89052;while(true){
if(typeof demo_app.product_types.views.t89058 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.views.t89058 = (function (input_checker89049,product_types,G__89051,ufv__,G__89052,data,validate__9355__auto__,output_schema89047,output_checker89050,input_schema89048,owner,meta89059){
this.input_checker89049 = input_checker89049;
this.product_types = product_types;
this.G__89051 = G__89051;
this.ufv__ = ufv__;
this.G__89052 = G__89052;
this.data = data;
this.validate__9355__auto__ = validate__9355__auto__;
this.output_schema89047 = output_schema89047;
this.output_checker89050 = output_checker89050;
this.input_schema89048 = input_schema89048;
this.owner = owner;
this.meta89059 = meta89059;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.views.t89058.cljs$lang$type = true;
demo_app.product_types.views.t89058.cljs$lang$ctorStr = "demo-app.product-types.views/t89058";
demo_app.product_types.views.t89058.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"demo-app.product-types.views/t89058");
});
demo_app.product_types.views.t89058.prototype.om$core$IRenderState$ = true;
demo_app.product_types.views.t89058.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__89061){var self__ = this;
var map__89062 = p__89061;var map__89062__$1 = ((cljs.core.seq_QMARK_.call(null,map__89062))?cljs.core.apply.call(null,cljs.core.hash_map,map__89062):map__89062);var state = map__89062__$1;var delete_chan = cljs.core.get.call(null,map__89062__$1,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222));var add_chan = cljs.core.get.call(null,map__89062__$1,new cljs.core.Keyword(null,"add-chan","add-chan",4026362992));var save_chan = cljs.core.get.call(null,map__89062__$1,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180));var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om.core.build_all.call(null,demo_app.product_types.views.product_type_view,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),state], null)),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,map__89062,map__89062__$1,state,delete_chan,add_chan,save_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,add_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("product-type","name","product-type/name",3237039483),"",new cljs.core.Keyword("product-type","category","product-type/category",3265236494),"default",new cljs.core.Keyword("product-type","props","product-type/props",3066878432),cljs.core.PersistentVector.EMPTY], null));
});})(___$1,map__89062,map__89062__$1,state,delete_chan,add_chan,save_chan))
},"New Product Type")],null)));
});
demo_app.product_types.views.t89058.prototype.om$core$IWillMount$ = true;
demo_app.product_types.views.t89058.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;demo_app.product_types.views.save_loop.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180)));
demo_app.product_types.views.delete_loop.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222)));
return demo_app.product_types.views.add_loop.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"add-chan","add-chan",4026362992)));
});
demo_app.product_types.views.t89058.prototype.om$core$IInitState$ = true;
demo_app.product_types.views.t89058.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"save-chan","save-chan",1151356180),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"add-chan","add-chan",4026362992),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222),cljs.core.async.chan.call(null)], null);
});
demo_app.product_types.views.t89058.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_89060){var self__ = this;
var _89060__$1 = this;return self__.meta89059;
});
demo_app.product_types.views.t89058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_89060,meta89059__$1){var self__ = this;
var _89060__$1 = this;return (new demo_app.product_types.views.t89058(self__.input_checker89049,self__.product_types,self__.G__89051,self__.ufv__,self__.G__89052,self__.data,self__.validate__9355__auto__,self__.output_schema89047,self__.output_checker89050,self__.input_schema89048,self__.owner,meta89059__$1));
});
demo_app.product_types.views.__GT_t89058 = (function __GT_t89058(input_checker89049__$1,product_types__$1,G__89051__$1,ufv____$1,G__89052__$1,data__$1,validate__9355__auto____$1,output_schema89047__$1,output_checker89050__$1,input_schema89048__$1,owner__$1,meta89059){return (new demo_app.product_types.views.t89058(input_checker89049__$1,product_types__$1,G__89051__$1,ufv____$1,G__89052__$1,data__$1,validate__9355__auto____$1,output_schema89047__$1,output_checker89050__$1,input_schema89048__$1,owner__$1,meta89059));
});
}
return (new demo_app.product_types.views.t89058(input_checker89049_89066,product_types,G__89051,ufv___89063,G__89052,data,validate__9355__auto__,output_schema89047_89064,output_checker89050_89067,input_schema89048_89065,owner,null));
break;
}
})();if(cljs.core.truth_(validate__9355__auto__))
{var temp__4092__auto___89071 = output_checker89050_89067.call(null,o__9358__auto__);if(cljs.core.truth_(temp__4092__auto___89071))
{var error__9357__auto___89072 = temp__4092__auto___89071;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-types","product-types",-1684864044,null),cljs.core.pr_str.call(null,error__9357__auto___89072)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___89072,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema89047_89064,new cljs.core.Keyword(null,"value","value",1125876963),o__9358__auto__], null));
} else
{}
} else
{}
return o__9358__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.views.product_types),schema.core.make_fn_schema.call(null,output_schema89047_89064,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema89048_89065], null)));
demo_app.product_types.views.__GT_product_types = (function() {
var __GT_product_types = null;
var __GT_product_types__1 = (function (cursor__11123__auto__){return om.core.build.call(null,demo_app.product_types.views.product_types,cursor__11123__auto__);
});
var __GT_product_types__2 = (function (cursor__11123__auto__,m89046){return om.core.build.call(null,demo_app.product_types.views.product_types,cursor__11123__auto__,m89046);
});
__GT_product_types = function(cursor__11123__auto__,m89046){
switch(arguments.length){
case 1:
return __GT_product_types__1.call(this,cursor__11123__auto__);
case 2:
return __GT_product_types__2.call(this,cursor__11123__auto__,m89046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_types.cljs$core$IFn$_invoke$arity$1 = __GT_product_types__1;
__GT_product_types.cljs$core$IFn$_invoke$arity$2 = __GT_product_types__2;
return __GT_product_types;
})()
;

//# sourceMappingURL=views.js.map
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
demo_app.product_types.views.save_loop = (function save_loop(data,chan){var c__26736__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_47677){var state_val_47678 = (state_47677[1]);if((state_val_47678 === 8))
{var inst_47666 = (state_47677[2]);var inst_47667 = cljs.core.vec.call(null,inst_47666);var inst_47668 = om.core.update_BANG_.call(null,data,inst_47667);var inst_47669 = console.log("SAVED");var state_47677__$1 = (function (){var statearr_47679 = state_47677;(statearr_47679[7] = inst_47669);
(statearr_47679[8] = inst_47668);
return statearr_47679;
})();var statearr_47680_47694 = state_47677__$1;(statearr_47680_47694[2] = null);
(statearr_47680_47694[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47678 === 7))
{var inst_47662 = (state_47677[2]);var inst_47663 = demo_app.api.save_data.call(null,inst_47662);var inst_47664 = console.log("SAVING",inst_47662);var state_47677__$1 = (function (){var statearr_47681 = state_47677;(statearr_47681[9] = inst_47664);
return statearr_47681;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47677__$1,8,inst_47663);
} else
{if((state_val_47678 === 6))
{var inst_47673 = (state_47677[2]);var state_47677__$1 = state_47677;var statearr_47682_47695 = state_47677__$1;(statearr_47682_47695[2] = inst_47673);
(statearr_47682_47695[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47678 === 5))
{var state_47677__$1 = state_47677;var statearr_47683_47696 = state_47677__$1;(statearr_47683_47696[2] = null);
(statearr_47683_47696[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47678 === 4))
{var state_47677__$1 = state_47677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47677__$1,7,chan);
} else
{if((state_val_47678 === 3))
{var inst_47675 = (state_47677[2]);var state_47677__$1 = state_47677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47677__$1,inst_47675);
} else
{if((state_val_47678 === 2))
{var state_47677__$1 = state_47677;if(true)
{var statearr_47684_47697 = state_47677__$1;(statearr_47684_47697[1] = 4);
} else
{var statearr_47685_47698 = state_47677__$1;(statearr_47685_47698[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47678 === 1))
{var state_47677__$1 = state_47677;var statearr_47686_47699 = state_47677__$1;(statearr_47686_47699[2] = null);
(statearr_47686_47699[1] = 2);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_47690 = [null,null,null,null,null,null,null,null,null,null];(statearr_47690[0] = state_machine__26673__auto__);
(statearr_47690[1] = 1);
return statearr_47690;
});
var state_machine__26673__auto____1 = (function (state_47677){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_47677);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e47691){if((e47691 instanceof Object))
{var ex__26676__auto__ = e47691;var statearr_47692_47700 = state_47677;(statearr_47692_47700[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47677);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47691;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47701 = state_47677;
state_47677 = G__47701;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_47677){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_47677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_47693 = f__26737__auto__.call(null);(statearr_47693[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto__);
return statearr_47693;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
}));
return c__26736__auto__;
});
demo_app.product_types.views.add_loop = (function add_loop(data,chan){var c__26736__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_47744){var state_val_47745 = (state_47744[1]);if((state_val_47745 === 7))
{var inst_47734 = (state_47744[2]);var inst_47735 = (function (){var d = inst_47734;return ((function (d,inst_47734,state_val_47745){
return (function (xs){return cljs.core.conj.call(null,xs,d);
});
;})(d,inst_47734,state_val_47745))
})();var inst_47736 = om.core.transact_BANG_.call(null,data,inst_47735);var state_47744__$1 = (function (){var statearr_47746 = state_47744;(statearr_47746[7] = inst_47736);
return statearr_47746;
})();var statearr_47747_47760 = state_47744__$1;(statearr_47747_47760[2] = null);
(statearr_47747_47760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47745 === 6))
{var inst_47740 = (state_47744[2]);var state_47744__$1 = state_47744;var statearr_47748_47761 = state_47744__$1;(statearr_47748_47761[2] = inst_47740);
(statearr_47748_47761[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47745 === 5))
{var state_47744__$1 = state_47744;var statearr_47749_47762 = state_47744__$1;(statearr_47749_47762[2] = null);
(statearr_47749_47762[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47745 === 4))
{var state_47744__$1 = state_47744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47744__$1,7,chan);
} else
{if((state_val_47745 === 3))
{var inst_47742 = (state_47744[2]);var state_47744__$1 = state_47744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47744__$1,inst_47742);
} else
{if((state_val_47745 === 2))
{var state_47744__$1 = state_47744;if(true)
{var statearr_47750_47763 = state_47744__$1;(statearr_47750_47763[1] = 4);
} else
{var statearr_47751_47764 = state_47744__$1;(statearr_47751_47764[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47745 === 1))
{var state_47744__$1 = state_47744;var statearr_47752_47765 = state_47744__$1;(statearr_47752_47765[2] = null);
(statearr_47752_47765[1] = 2);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_47756 = [null,null,null,null,null,null,null,null];(statearr_47756[0] = state_machine__26673__auto__);
(statearr_47756[1] = 1);
return statearr_47756;
});
var state_machine__26673__auto____1 = (function (state_47744){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_47744);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e47757){if((e47757 instanceof Object))
{var ex__26676__auto__ = e47757;var statearr_47758_47766 = state_47744;(statearr_47758_47766[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47744);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47757;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47767 = state_47744;
state_47744 = G__47767;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_47744){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_47744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_47759 = f__26737__auto__.call(null);(statearr_47759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto__);
return statearr_47759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
}));
return c__26736__auto__;
});
demo_app.product_types.views.delete_loop = (function delete_loop(data,chan){var c__26736__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_47824){var state_val_47825 = (state_47824[1]);if((state_val_47825 === 8))
{var inst_47816 = (state_47824[2]);var state_47824__$1 = (function (){var statearr_47826 = state_47824;(statearr_47826[7] = inst_47816);
return statearr_47826;
})();var statearr_47827_47841 = state_47824__$1;(statearr_47827_47841[2] = null);
(statearr_47827_47841[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47825 === 7))
{var inst_47808 = (state_47824[2]);var inst_47809 = cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,inst_47808);var inst_47810 = cljs.core.conj.call(null,cljs.core.PersistentVector.EMPTY,inst_47809);var inst_47811 = cljs.core.assoc.call(null,cljs.core.PersistentHashMap.EMPTY,new cljs.core.Keyword(null,"to-delete","to-delete",1928504495),inst_47810);var inst_47812 = (function (){var to_delete = inst_47811;var d = inst_47808;return ((function (to_delete,d,inst_47808,inst_47809,inst_47810,inst_47811,state_val_47825){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (to_delete,d,inst_47808,inst_47809,inst_47810,inst_47811,state_val_47825){
return (function (p1__47768_SHARP_){return (d === p1__47768_SHARP_);
});})(to_delete,d,inst_47808,inst_47809,inst_47810,inst_47811,state_val_47825))
,xs));
});
;})(to_delete,d,inst_47808,inst_47809,inst_47810,inst_47811,state_val_47825))
})();var inst_47813 = om.core.transact_BANG_.call(null,data,inst_47812);var inst_47814 = demo_app.api.save_data.call(null,inst_47811);var state_47824__$1 = (function (){var statearr_47828 = state_47824;(statearr_47828[8] = inst_47813);
return statearr_47828;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47824__$1,8,inst_47814);
} else
{if((state_val_47825 === 6))
{var inst_47820 = (state_47824[2]);var state_47824__$1 = state_47824;var statearr_47829_47842 = state_47824__$1;(statearr_47829_47842[2] = inst_47820);
(statearr_47829_47842[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47825 === 5))
{var state_47824__$1 = state_47824;var statearr_47830_47843 = state_47824__$1;(statearr_47830_47843[2] = null);
(statearr_47830_47843[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47825 === 4))
{var state_47824__$1 = state_47824;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47824__$1,7,chan);
} else
{if((state_val_47825 === 3))
{var inst_47822 = (state_47824[2]);var state_47824__$1 = state_47824;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47824__$1,inst_47822);
} else
{if((state_val_47825 === 2))
{var state_47824__$1 = state_47824;if(true)
{var statearr_47831_47844 = state_47824__$1;(statearr_47831_47844[1] = 4);
} else
{var statearr_47832_47845 = state_47824__$1;(statearr_47832_47845[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_47825 === 1))
{var state_47824__$1 = state_47824;var statearr_47833_47846 = state_47824__$1;(statearr_47833_47846[2] = null);
(statearr_47833_47846[1] = 2);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_47837 = [null,null,null,null,null,null,null,null,null];(statearr_47837[0] = state_machine__26673__auto__);
(statearr_47837[1] = 1);
return statearr_47837;
});
var state_machine__26673__auto____1 = (function (state_47824){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_47824);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e47838){if((e47838 instanceof Object))
{var ex__26676__auto__ = e47838;var statearr_47839_47847 = state_47824;(statearr_47839_47847[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47824);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e47838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__47848 = state_47824;
state_47824 = G__47848;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_47824){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_47824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_47840 = f__26737__auto__.call(null);(statearr_47840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto__);
return statearr_47840;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
}));
return c__26736__auto__;
});
demo_app.product_types.views.make_input = (function make_input(attr_key,value){return om.dom.input.call(null,{"onChange": (function (p1__47849_SHARP_){return om.core.update_BANG_.call(null,demo_app.product_types.views.data,new cljs.core.Symbol(null,"attr-key","attr-key",-1087699396,null),p1__47849_SHARP_.target.value);
}), "value": value, "type": "text"});
});
var ufv___47872 = schema.utils.use_fn_validation;var output_schema47851_47873 = schema.core.Any;var input_schema47852_47874 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-1637529003,null))], null);var input_checker47853_47875 = schema.core.checker.call(null,input_schema47852_47874);var output_checker47854_47876 = schema.core.checker.call(null,output_schema47851_47873);/**
* Inputs: [data owner {:keys [save-chan delete-chan], :as opts}]
*/
demo_app.product_types.views.product_type_view = (function product_type_view(G__47855,G__47856,G__47857){var validate__23102__auto__ = ufv___47872.get_cell();if(cljs.core.truth_(validate__23102__auto__))
{var args__23103__auto___47877 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47855,G__47856,G__47857], null);var temp__4126__auto___47878 = input_checker47853_47875.call(null,args__23103__auto___47877);if(cljs.core.truth_(temp__4126__auto___47878))
{var error__23104__auto___47879 = temp__4126__auto___47878;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-view","product-type-view",211241907,null),cljs.core.pr_str.call(null,error__23104__auto___47879)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema47852_47874,new cljs.core.Keyword(null,"value","value",1125876963),args__23103__auto___47877,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___47879], null));
} else
{}
} else
{}
var o__23105__auto__ = (function (){var data = G__47855;var owner = G__47856;var G__47866 = G__47857;var map__47867 = G__47866;var map__47867__$1 = ((cljs.core.seq_QMARK_.call(null,map__47867))?cljs.core.apply.call(null,cljs.core.hash_map,map__47867):map__47867);var opts = map__47867__$1;var delete_chan = cljs.core.get.call(null,map__47867__$1,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222));var save_chan = cljs.core.get.call(null,map__47867__$1,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180));var data__$1 = data;var owner__$1 = owner;var G__47866__$1 = G__47866;while(true){
var data__$2 = data__$1;var owner__$2 = owner__$1;var map__47868 = G__47866__$1;var map__47868__$1 = ((cljs.core.seq_QMARK_.call(null,map__47868))?cljs.core.apply.call(null,cljs.core.hash_map,map__47868):map__47868);var opts__$1 = map__47868__$1;var delete_chan__$1 = cljs.core.get.call(null,map__47868__$1,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222));var save_chan__$1 = cljs.core.get.call(null,map__47868__$1,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180));if(typeof demo_app.product_types.views.t47869 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.views.t47869 = (function (validate__23102__auto__,G__47856,owner,G__47855,save_chan,data,G__47866,input_schema47852,product_type_view,G__47857,map__47867,output_schema47851,input_checker47853,delete_chan,map__47868,opts,ufv__,output_checker47854,meta47870){
this.validate__23102__auto__ = validate__23102__auto__;
this.G__47856 = G__47856;
this.owner = owner;
this.G__47855 = G__47855;
this.save_chan = save_chan;
this.data = data;
this.G__47866 = G__47866;
this.input_schema47852 = input_schema47852;
this.product_type_view = product_type_view;
this.G__47857 = G__47857;
this.map__47867 = map__47867;
this.output_schema47851 = output_schema47851;
this.input_checker47853 = input_checker47853;
this.delete_chan = delete_chan;
this.map__47868 = map__47868;
this.opts = opts;
this.ufv__ = ufv__;
this.output_checker47854 = output_checker47854;
this.meta47870 = meta47870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.views.t47869.cljs$lang$type = true;
demo_app.product_types.views.t47869.cljs$lang$ctorStr = "demo-app.product-types.views/t47869";
demo_app.product_types.views.t47869.cljs$lang$ctorPrWriter = ((function (data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan){
return (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"demo-app.product-types.views/t47869");
});})(data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.t47869.prototype.om$core$IRender$ = true;
demo_app.product_types.views.t47869.prototype.om$core$IRender$render$arity$1 = ((function (data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,React.DOM.h2(null,"Product-Type Defaults"),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,React.DOM.label(null,"Name"),(new cljs.core.PersistentVector(null,4,5,cljs.core.PersistentVector.EMPTY_NODE,[demo_app.product_types.views.make_input.call(null,new cljs.core.Keyword("product-type","name","product-type/name",3237039483),new cljs.core.Keyword("product-type","name","product-type/name",3237039483).cljs$core$IFn$_invoke$arity$1(self__.data)),React.DOM.button({"onClick": ((function (___$1,data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.delete_chan,cljs.core.deref.call(null,self__.data));
});})(___$1,data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan))
},"Delete"),om_tools.dom.element.call(null,React.DOM.div,React.DOM.h2(null,"Product-Type Props"),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_props,self__.data)],null))),React.DOM.button({"onClick": ((function (___$1,data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.save_chan,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,self__.data)));
});})(___$1,data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan))
},"Save Product Type")],null)))],null)));
});})(data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.t47869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan){
return (function (_47871){var self__ = this;
var _47871__$1 = this;return self__.meta47870;
});})(data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.t47869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan){
return (function (_47871,meta47870__$1){var self__ = this;
var _47871__$1 = this;return (new demo_app.product_types.views.t47869(self__.validate__23102__auto__,self__.G__47856,self__.owner,self__.G__47855,self__.save_chan,self__.data,self__.G__47866,self__.input_schema47852,self__.product_type_view,self__.G__47857,self__.map__47867,self__.output_schema47851,self__.input_checker47853,self__.delete_chan,self__.map__47868,self__.opts,self__.ufv__,self__.output_checker47854,meta47870__$1));
});})(data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan))
;
demo_app.product_types.views.__GT_t47869 = ((function (data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan){
return (function __GT_t47869(validate__23102__auto____$1,G__47856__$1,owner__$3,G__47855__$1,save_chan__$2,data__$3,G__47866__$2,input_schema47852__$1,product_type_view__$1,G__47857__$1,map__47867__$2,output_schema47851__$1,input_checker47853__$1,delete_chan__$2,map__47868__$2,opts__$2,ufv____$1,output_checker47854__$1,meta47870){return (new demo_app.product_types.views.t47869(validate__23102__auto____$1,G__47856__$1,owner__$3,G__47855__$1,save_chan__$2,data__$3,G__47866__$2,input_schema47852__$1,product_type_view__$1,G__47857__$1,map__47867__$2,output_schema47851__$1,input_checker47853__$1,delete_chan__$2,map__47868__$2,opts__$2,ufv____$1,output_checker47854__$1,meta47870));
});})(data__$2,owner__$2,map__47868,map__47868__$1,opts__$1,delete_chan__$1,save_chan__$1,data,owner,G__47866,map__47867,map__47867__$1,opts,delete_chan,save_chan))
;
}
return (new demo_app.product_types.views.t47869(validate__23102__auto__,G__47856,owner__$2,G__47855,save_chan__$1,data__$2,G__47866__$1,input_schema47852_47874,product_type_view,G__47857,map__47867__$1,output_schema47851_47873,input_checker47853_47875,delete_chan__$1,map__47868__$1,opts__$1,ufv___47872,output_checker47854_47876,null));
break;
}
})();if(cljs.core.truth_(validate__23102__auto__))
{var temp__4126__auto___47880 = output_checker47854_47876.call(null,o__23105__auto__);if(cljs.core.truth_(temp__4126__auto___47880))
{var error__23104__auto___47881 = temp__4126__auto___47880;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-view","product-type-view",211241907,null),cljs.core.pr_str.call(null,error__23104__auto___47881)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema47851_47873,new cljs.core.Keyword(null,"value","value",1125876963),o__23105__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___47881], null));
} else
{}
} else
{}
return o__23105__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.views.product_type_view),schema.core.make_fn_schema.call(null,output_schema47851_47873,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47852_47874], null)));
demo_app.product_types.views.__GT_product_type_view = (function() {
var __GT_product_type_view = null;
var __GT_product_type_view__1 = (function (cursor__29232__auto__){return om.core.build.call(null,demo_app.product_types.views.product_type_view,cursor__29232__auto__);
});
var __GT_product_type_view__2 = (function (cursor__29232__auto__,m47850){return om.core.build.call(null,demo_app.product_types.views.product_type_view,cursor__29232__auto__,m47850);
});
__GT_product_type_view = function(cursor__29232__auto__,m47850){
switch(arguments.length){
case 1:
return __GT_product_type_view__1.call(this,cursor__29232__auto__);
case 2:
return __GT_product_type_view__2.call(this,cursor__29232__auto__,m47850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_type_view.cljs$core$IFn$_invoke$arity$1 = __GT_product_type_view__1;
__GT_product_type_view.cljs$core$IFn$_invoke$arity$2 = __GT_product_type_view__2;
return __GT_product_type_view;
})()
;
var ufv___47899 = schema.utils.use_fn_validation;var output_schema47883_47900 = schema.core.Any;var input_schema47884_47901 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker47885_47902 = schema.core.checker.call(null,input_schema47884_47901);var output_checker47886_47903 = schema.core.checker.call(null,output_schema47883_47900);/**
* Inputs: [data owner]
*/
demo_app.product_types.views.product_types = (function product_types(G__47887,G__47888){var validate__23102__auto__ = ufv___47899.get_cell();if(cljs.core.truth_(validate__23102__auto__))
{var args__23103__auto___47904 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__47887,G__47888], null);var temp__4126__auto___47905 = input_checker47885_47902.call(null,args__23103__auto___47904);if(cljs.core.truth_(temp__4126__auto___47905))
{var error__23104__auto___47906 = temp__4126__auto___47905;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-types","product-types",-1684864044,null),cljs.core.pr_str.call(null,error__23104__auto___47906)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema47884_47901,new cljs.core.Keyword(null,"value","value",1125876963),args__23103__auto___47904,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___47906], null));
} else
{}
} else
{}
var o__23105__auto__ = (function (){var data = G__47887;var owner = G__47888;while(true){
if(typeof demo_app.product_types.views.t47894 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.views.t47894 = (function (validate__23102__auto__,owner,G__47888,data,input_schema47884,G__47887,output_schema47883,product_types,input_checker47885,ufv__,output_checker47886,meta47895){
this.validate__23102__auto__ = validate__23102__auto__;
this.owner = owner;
this.G__47888 = G__47888;
this.data = data;
this.input_schema47884 = input_schema47884;
this.G__47887 = G__47887;
this.output_schema47883 = output_schema47883;
this.product_types = product_types;
this.input_checker47885 = input_checker47885;
this.ufv__ = ufv__;
this.output_checker47886 = output_checker47886;
this.meta47895 = meta47895;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.views.t47894.cljs$lang$type = true;
demo_app.product_types.views.t47894.cljs$lang$ctorStr = "demo-app.product-types.views/t47894";
demo_app.product_types.views.t47894.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"demo-app.product-types.views/t47894");
});
demo_app.product_types.views.t47894.prototype.om$core$IRenderState$ = true;
demo_app.product_types.views.t47894.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,p__47897){var self__ = this;
var map__47898 = p__47897;var map__47898__$1 = ((cljs.core.seq_QMARK_.call(null,map__47898))?cljs.core.apply.call(null,cljs.core.hash_map,map__47898):map__47898);var state = map__47898__$1;var delete_chan = cljs.core.get.call(null,map__47898__$1,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222));var add_chan = cljs.core.get.call(null,map__47898__$1,new cljs.core.Keyword(null,"add-chan","add-chan",4026362992));var save_chan = cljs.core.get.call(null,map__47898__$1,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180));var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om.core.build_all.call(null,demo_app.product_types.views.product_type_view,self__.data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),state], null)),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,map__47898,map__47898__$1,state,delete_chan,add_chan,save_chan){
return (function (){return cljs.core.async.put_BANG_.call(null,add_chan,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("product-type","name","product-type/name",3237039483),"",new cljs.core.Keyword("product-type","category","product-type/category",3265236494),"default",new cljs.core.Keyword("product-type","props","product-type/props",3066878432),cljs.core.PersistentVector.EMPTY], null));
});})(___$1,map__47898,map__47898__$1,state,delete_chan,add_chan,save_chan))
},"New Product Type")],null)));
});
demo_app.product_types.views.t47894.prototype.om$core$IWillMount$ = true;
demo_app.product_types.views.t47894.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;demo_app.product_types.views.save_loop.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"save-chan","save-chan",1151356180)));
demo_app.product_types.views.delete_loop.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222)));
return demo_app.product_types.views.add_loop.call(null,self__.data,om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"add-chan","add-chan",4026362992)));
});
demo_app.product_types.views.t47894.prototype.om$core$IInitState$ = true;
demo_app.product_types.views.t47894.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"save-chan","save-chan",1151356180),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"add-chan","add-chan",4026362992),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"delete-chan","delete-chan",4140365222),cljs.core.async.chan.call(null)], null);
});
demo_app.product_types.views.t47894.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47896){var self__ = this;
var _47896__$1 = this;return self__.meta47895;
});
demo_app.product_types.views.t47894.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47896,meta47895__$1){var self__ = this;
var _47896__$1 = this;return (new demo_app.product_types.views.t47894(self__.validate__23102__auto__,self__.owner,self__.G__47888,self__.data,self__.input_schema47884,self__.G__47887,self__.output_schema47883,self__.product_types,self__.input_checker47885,self__.ufv__,self__.output_checker47886,meta47895__$1));
});
demo_app.product_types.views.__GT_t47894 = (function __GT_t47894(validate__23102__auto____$1,owner__$1,G__47888__$1,data__$1,input_schema47884__$1,G__47887__$1,output_schema47883__$1,product_types__$1,input_checker47885__$1,ufv____$1,output_checker47886__$1,meta47895){return (new demo_app.product_types.views.t47894(validate__23102__auto____$1,owner__$1,G__47888__$1,data__$1,input_schema47884__$1,G__47887__$1,output_schema47883__$1,product_types__$1,input_checker47885__$1,ufv____$1,output_checker47886__$1,meta47895));
});
}
return (new demo_app.product_types.views.t47894(validate__23102__auto__,owner,G__47888,data,input_schema47884_47901,G__47887,output_schema47883_47900,product_types,input_checker47885_47902,ufv___47899,output_checker47886_47903,null));
break;
}
})();if(cljs.core.truth_(validate__23102__auto__))
{var temp__4126__auto___47907 = output_checker47886_47903.call(null,o__23105__auto__);if(cljs.core.truth_(temp__4126__auto___47907))
{var error__23104__auto___47908 = temp__4126__auto___47907;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-types","product-types",-1684864044,null),cljs.core.pr_str.call(null,error__23104__auto___47908)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema47883_47900,new cljs.core.Keyword(null,"value","value",1125876963),o__23105__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___47908], null));
} else
{}
} else
{}
return o__23105__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.views.product_types),schema.core.make_fn_schema.call(null,output_schema47883_47900,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema47884_47901], null)));
demo_app.product_types.views.__GT_product_types = (function() {
var __GT_product_types = null;
var __GT_product_types__1 = (function (cursor__29232__auto__){return om.core.build.call(null,demo_app.product_types.views.product_types,cursor__29232__auto__);
});
var __GT_product_types__2 = (function (cursor__29232__auto__,m47882){return om.core.build.call(null,demo_app.product_types.views.product_types,cursor__29232__auto__,m47882);
});
__GT_product_types = function(cursor__29232__auto__,m47882){
switch(arguments.length){
case 1:
return __GT_product_types__1.call(this,cursor__29232__auto__);
case 2:
return __GT_product_types__2.call(this,cursor__29232__auto__,m47882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_types.cljs$core$IFn$_invoke$arity$1 = __GT_product_types__1;
__GT_product_types.cljs$core$IFn$_invoke$arity$2 = __GT_product_types__2;
return __GT_product_types;
})()
;

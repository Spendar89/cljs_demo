// Compiled by ClojureScript 0.0-2156
goog.provide('demo_app.core');
goog.require('cljs.core');
goog.require('demo_app.product_types.views');
goog.require('cljs.core.async');
goog.require('demo_app.api');
goog.require('demo_app.product_types.views');
goog.require('om_tools.dom');
goog.require('clojure.data');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('clojure.browser.repl');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('demo_app.product_types.views');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('demo_app.api');
cljs.core.enable_console_print_BANG_.call(null);
demo_app.core.app_state = (function (){var c = cljs.core.async.chan.call(null);var c__27289__auto___69654 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_69645){var state_val_69646 = (state_69645[1]);if((state_val_69646 === 2))
{var inst_69640 = (state_69645[2]);var inst_69641 = cljs.core.vec.call(null,inst_69640);var inst_69642 = cljs.core.atom.call(null,inst_69641);var inst_69643 = cljs.core.async.put_BANG_.call(null,c,inst_69642);var state_69645__$1 = state_69645;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69645__$1,inst_69643);
} else
{if((state_val_69646 === 1))
{var state_69645__$1 = state_69645;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69645__$1,2,demo_app.api.fetch_product_types);
} else
{return null;
}
}
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_69650 = [null,null,null,null,null,null,null];(statearr_69650[0] = state_machine__27226__auto__);
(statearr_69650[1] = 1);
return statearr_69650;
});
var state_machine__27226__auto____1 = (function (state_69645){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_69645);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e69651){if((e69651 instanceof Object))
{var ex__27229__auto__ = e69651;var statearr_69652_69655 = state_69645;(statearr_69652_69655[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69645);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e69651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__69656 = state_69645;
state_69645 = G__69656;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_69645){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_69645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_69653 = f__27290__auto__.call(null);(statearr_69653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___69654);
return statearr_69653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
}));
return c;
})();
var c__27289__auto___69674 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_69665){var state_val_69666 = (state_69665[1]);if((state_val_69666 === 2))
{var inst_69658 = (state_69665[2]);var inst_69659 = [new cljs.core.Keyword(null,"target","target",4427965699)];var inst_69660 = document.getElementById("app0");var inst_69661 = [inst_69660];var inst_69662 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_69659,inst_69661);var inst_69663 = om.core.root.call(null,demo_app.product_types.views.product_types,inst_69658,inst_69662);var state_69665__$1 = state_69665;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69665__$1,inst_69663);
} else
{if((state_val_69666 === 1))
{var state_69665__$1 = state_69665;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69665__$1,2,demo_app.core.app_state);
} else
{return null;
}
}
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_69670 = [null,null,null,null,null,null,null];(statearr_69670[0] = state_machine__27226__auto__);
(statearr_69670[1] = 1);
return statearr_69670;
});
var state_machine__27226__auto____1 = (function (state_69665){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_69665);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e69671){if((e69671 instanceof Object))
{var ex__27229__auto__ = e69671;var statearr_69672_69675 = state_69665;(statearr_69672_69675[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69665);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e69671;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__69676 = state_69665;
state_69665 = G__69676;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_69665){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_69665);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_69673 = f__27290__auto__.call(null);(statearr_69673[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___69674);
return statearr_69673;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
}));

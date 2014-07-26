// Compiled by ClojureScript 0.0-2156
goog.provide('demo_app.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('clojure.data');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
/**
* @param {...*} var_args
*/
demo_app.api.reqAsync = (function() { 
var reqAsync__delegate = function (url,method,p__46479){var vec__46481 = p__46479;var body = cljs.core.nth.call(null,vec__46481,0,null);var c = cljs.core.async.chan.call(null);goog.net.XhrIo.send(url,(function (p1__46478_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p1__46478_SHARP_.target.getResponse());
}),method,(cljs.core.truth_(body)?cljs.core.pr_str.call(null,body):null),{"Content-Type": "application/edn"});
return c;
};
var reqAsync = function (url,method,var_args){
var p__46479 = null;if (arguments.length > 2) {
  p__46479 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return reqAsync__delegate.call(this,url,method,p__46479);};
reqAsync.cljs$lang$maxFixedArity = 2;
reqAsync.cljs$lang$applyTo = (function (arglist__46482){
var url = cljs.core.first(arglist__46482);
arglist__46482 = cljs.core.next(arglist__46482);
var method = cljs.core.first(arglist__46482);
var p__46479 = cljs.core.rest(arglist__46482);
return reqAsync__delegate(url,method,p__46479);
});
reqAsync.cljs$core$IFn$_invoke$arity$variadic = reqAsync__delegate;
return reqAsync;
})()
;
demo_app.api.GET = (function GET(url){return demo_app.api.reqAsync.call(null,url,"GET");
});
/**
* @param {...*} var_args
*/
demo_app.api.POST = (function() { 
var POST__delegate = function (url,p__46483){var vec__46485 = p__46483;var body = cljs.core.nth.call(null,vec__46485,0,null);return demo_app.api.reqAsync.call(null,url,"POST",(function (){var or__15106__auto__ = body;if(cljs.core.truth_(or__15106__auto__))
{return or__15106__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
};
var POST = function (url,var_args){
var p__46483 = null;if (arguments.length > 1) {
  p__46483 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,url,p__46483);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__46486){
var url = cljs.core.first(arglist__46486);
var p__46483 = cljs.core.rest(arglist__46486);
return POST__delegate(url,p__46483);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
demo_app.api.fetch_product_types = (function (){var c = cljs.core.async.chan.call(null);var res = demo_app.api.GET.call(null,"/api/product-types");var c__27289__auto___46501 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_46492){var state_val_46493 = (state_46492[1]);if((state_val_46493 === 2))
{var inst_46488 = (state_46492[2]);var inst_46489 = cljs.reader.read_string.call(null,inst_46488);var inst_46490 = cljs.core.async.put_BANG_.call(null,c,inst_46489);var state_46492__$1 = state_46492;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46492__$1,inst_46490);
} else
{if((state_val_46493 === 1))
{var state_46492__$1 = state_46492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46492__$1,2,res);
} else
{return null;
}
}
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_46497 = [null,null,null,null,null,null,null];(statearr_46497[0] = state_machine__27226__auto__);
(statearr_46497[1] = 1);
return statearr_46497;
});
var state_machine__27226__auto____1 = (function (state_46492){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_46492);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e46498){if((e46498 instanceof Object))
{var ex__27229__auto__ = e46498;var statearr_46499_46502 = state_46492;(statearr_46499_46502[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46492);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46498;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46503 = state_46492;
state_46492 = G__46503;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_46492){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_46492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_46500 = f__27290__auto__.call(null);(statearr_46500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___46501);
return statearr_46500;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
}));
return c;
})();
demo_app.api.save_data = (function save_data(body){var c = cljs.core.async.chan.call(null);var res = demo_app.api.POST.call(null,"/api/product-types",body);var c__27289__auto___46532 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_46523){var state_val_46524 = (state_46523[1]);if((state_val_46524 === 2))
{var inst_46519 = (state_46523[2]);var inst_46520 = cljs.reader.read_string.call(null,inst_46519);var inst_46521 = cljs.core.async.put_BANG_.call(null,c,inst_46520);var state_46523__$1 = state_46523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46523__$1,inst_46521);
} else
{if((state_val_46524 === 1))
{var state_46523__$1 = state_46523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46523__$1,2,res);
} else
{return null;
}
}
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_46528 = [null,null,null,null,null,null,null];(statearr_46528[0] = state_machine__27226__auto__);
(statearr_46528[1] = 1);
return statearr_46528;
});
var state_machine__27226__auto____1 = (function (state_46523){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_46523);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e46529){if((e46529 instanceof Object))
{var ex__27229__auto__ = e46529;var statearr_46530_46533 = state_46523;(statearr_46530_46533[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46523);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46534 = state_46523;
state_46523 = G__46534;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_46523){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_46523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_46531 = f__27290__auto__.call(null);(statearr_46531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___46532);
return statearr_46531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
}));
return c;
});
demo_app.api.chan_create_product_type = cljs.core.async.chan.call(null,1);

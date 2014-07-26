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
var reqAsync__delegate = function (url,method,p__36388){var vec__36412 = p__36388;var body = cljs.core.nth.call(null,vec__36412,0,null);var c = cljs.core.async.chan.call(null);var c__26736__auto___36435 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_36421){var state_val_36422 = (state_36421[1]);if((state_val_36422 === 4))
{var inst_36413 = (state_36421[7]);var inst_36418 = (state_36421[2]);var inst_36419 = goog.net.XhrIo.send(url,inst_36413,method,inst_36418,{"Content-Type": "application/edn"});var state_36421__$1 = state_36421;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36421__$1,inst_36419);
} else
{if((state_val_36422 === 3))
{var state_36421__$1 = state_36421;var statearr_36423_36436 = state_36421__$1;(statearr_36423_36436[2] = null);
(statearr_36423_36436[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36422 === 2))
{var inst_36415 = cljs.core.pr_str.call(null,body);var state_36421__$1 = state_36421;var statearr_36424_36437 = state_36421__$1;(statearr_36424_36437[2] = inst_36415);
(statearr_36424_36437[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36422 === 1))
{var inst_36413 = (function (){return ((function (state_val_36422){
return (function (p1__36387_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p1__36387_SHARP_.target.getResponse());
});
;})(state_val_36422))
})();var state_36421__$1 = (function (){var statearr_36425 = state_36421;(statearr_36425[7] = inst_36413);
return statearr_36425;
})();if(cljs.core.truth_(body))
{var statearr_36426_36438 = state_36421__$1;(statearr_36426_36438[1] = 2);
} else
{var statearr_36427_36439 = state_36421__$1;(statearr_36427_36439[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_36431 = [null,null,null,null,null,null,null,null];(statearr_36431[0] = state_machine__26673__auto__);
(statearr_36431[1] = 1);
return statearr_36431;
});
var state_machine__26673__auto____1 = (function (state_36421){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_36421);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e36432){if((e36432 instanceof Object))
{var ex__26676__auto__ = e36432;var statearr_36433_36440 = state_36421;(statearr_36433_36440[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36421);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36441 = state_36421;
state_36421 = G__36441;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_36421){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_36421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_36434 = f__26737__auto__.call(null);(statearr_36434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___36435);
return statearr_36434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
}));
return c;
};
var reqAsync = function (url,method,var_args){
var p__36388 = null;if (arguments.length > 2) {
  p__36388 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return reqAsync__delegate.call(this,url,method,p__36388);};
reqAsync.cljs$lang$maxFixedArity = 2;
reqAsync.cljs$lang$applyTo = (function (arglist__36442){
var url = cljs.core.first(arglist__36442);
arglist__36442 = cljs.core.next(arglist__36442);
var method = cljs.core.first(arglist__36442);
var p__36388 = cljs.core.rest(arglist__36442);
return reqAsync__delegate(url,method,p__36388);
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
var POST__delegate = function (url,p__36443){var vec__36445 = p__36443;var body = cljs.core.nth.call(null,vec__36445,0,null);return demo_app.api.reqAsync.call(null,url,"POST",(function (){var or__14581__auto__ = body;if(cljs.core.truth_(or__14581__auto__))
{return or__14581__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
};
var POST = function (url,var_args){
var p__36443 = null;if (arguments.length > 1) {
  p__36443 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,url,p__36443);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__36446){
var url = cljs.core.first(arglist__36446);
var p__36443 = cljs.core.rest(arglist__36446);
return POST__delegate(url,p__36443);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
demo_app.api.fetch_product_types = (function (){var c = cljs.core.async.chan.call(null);var res = demo_app.api.GET.call(null,"/api/product-types");var c__26736__auto___36461 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_36452){var state_val_36453 = (state_36452[1]);if((state_val_36453 === 2))
{var inst_36448 = (state_36452[2]);var inst_36449 = cljs.reader.read_string.call(null,inst_36448);var inst_36450 = cljs.core.async.put_BANG_.call(null,c,inst_36449);var state_36452__$1 = state_36452;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36452__$1,inst_36450);
} else
{if((state_val_36453 === 1))
{var state_36452__$1 = state_36452;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36452__$1,2,res);
} else
{return null;
}
}
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_36457 = [null,null,null,null,null,null,null];(statearr_36457[0] = state_machine__26673__auto__);
(statearr_36457[1] = 1);
return statearr_36457;
});
var state_machine__26673__auto____1 = (function (state_36452){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_36452);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e36458){if((e36458 instanceof Object))
{var ex__26676__auto__ = e36458;var statearr_36459_36462 = state_36452;(statearr_36459_36462[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36452);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36463 = state_36452;
state_36452 = G__36463;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_36452){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_36452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_36460 = f__26737__auto__.call(null);(statearr_36460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___36461);
return statearr_36460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
}));
return c;
})();
demo_app.api.save_data = (function save_data(body){var c = cljs.core.async.chan.call(null);var res = demo_app.api.POST.call(null,"/api/product-types",body);var c__26736__auto___36492 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_36483){var state_val_36484 = (state_36483[1]);if((state_val_36484 === 2))
{var inst_36479 = (state_36483[2]);var inst_36480 = cljs.reader.read_string.call(null,inst_36479);var inst_36481 = cljs.core.async.put_BANG_.call(null,c,inst_36480);var state_36483__$1 = state_36483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36483__$1,inst_36481);
} else
{if((state_val_36484 === 1))
{var state_36483__$1 = state_36483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36483__$1,2,res);
} else
{return null;
}
}
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_36488 = [null,null,null,null,null,null,null];(statearr_36488[0] = state_machine__26673__auto__);
(statearr_36488[1] = 1);
return statearr_36488;
});
var state_machine__26673__auto____1 = (function (state_36483){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_36483);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e36489){if((e36489 instanceof Object))
{var ex__26676__auto__ = e36489;var statearr_36490_36493 = state_36483;(statearr_36490_36493[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36494 = state_36483;
state_36483 = G__36494;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_36483){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_36483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_36491 = f__26737__auto__.call(null);(statearr_36491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___36492);
return statearr_36491;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
}));
return c;
});
demo_app.api.chan_create_product_type = cljs.core.async.chan.call(null,1);

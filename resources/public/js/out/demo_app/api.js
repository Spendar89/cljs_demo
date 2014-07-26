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
var reqAsync__delegate = function (url,method,p__83295){var vec__83319 = p__83295;var body = cljs.core.nth.call(null,vec__83319,0,null);var c = cljs.core.async.chan.call(null);var c__5524__auto___83342 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_83328){var state_val_83329 = (state_83328[1]);if((state_val_83329 === 4))
{var inst_83320 = (state_83328[7]);var inst_83325 = (state_83328[2]);var inst_83326 = goog.net.XhrIo.send(url,inst_83320,method,inst_83325,{"Content-Type": "application/edn"});var state_83328__$1 = state_83328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83328__$1,inst_83326);
} else
{if((state_val_83329 === 3))
{var state_83328__$1 = state_83328;var statearr_83330_83343 = state_83328__$1;(statearr_83330_83343[2] = null);
(statearr_83330_83343[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83329 === 2))
{var inst_83322 = cljs.core.pr_str.call(null,body);var state_83328__$1 = state_83328;var statearr_83331_83344 = state_83328__$1;(statearr_83331_83344[2] = inst_83322);
(statearr_83331_83344[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_83329 === 1))
{var inst_83320 = (function (){return ((function (state_val_83329){
return (function (p1__83294_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p1__83294_SHARP_.target.getResponse());
});
;})(state_val_83329))
})();var state_83328__$1 = (function (){var statearr_83332 = state_83328;(statearr_83332[7] = inst_83320);
return statearr_83332;
})();if(cljs.core.truth_(body))
{var statearr_83333_83345 = state_83328__$1;(statearr_83333_83345[1] = 2);
} else
{var statearr_83334_83346 = state_83328__$1;(statearr_83334_83346[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_83338 = [null,null,null,null,null,null,null,null];(statearr_83338[0] = state_machine__5510__auto__);
(statearr_83338[1] = 1);
return statearr_83338;
});
var state_machine__5510__auto____1 = (function (state_83328){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_83328);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e83339){if((e83339 instanceof Object))
{var ex__5513__auto__ = e83339;var statearr_83340_83347 = state_83328;(statearr_83340_83347[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83328);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83348 = state_83328;
state_83328 = G__83348;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_83328){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_83328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_83341 = f__5525__auto__.call(null);(statearr_83341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___83342);
return statearr_83341;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c;
};
var reqAsync = function (url,method,var_args){
var p__83295 = null;if (arguments.length > 2) {
  p__83295 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return reqAsync__delegate.call(this,url,method,p__83295);};
reqAsync.cljs$lang$maxFixedArity = 2;
reqAsync.cljs$lang$applyTo = (function (arglist__83349){
var url = cljs.core.first(arglist__83349);
arglist__83349 = cljs.core.next(arglist__83349);
var method = cljs.core.first(arglist__83349);
var p__83295 = cljs.core.rest(arglist__83349);
return reqAsync__delegate(url,method,p__83295);
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
var POST__delegate = function (url,p__83350){var vec__83352 = p__83350;var body = cljs.core.nth.call(null,vec__83352,0,null);return demo_app.api.reqAsync.call(null,url,"POST",(function (){var or__3403__auto__ = body;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
};
var POST = function (url,var_args){
var p__83350 = null;if (arguments.length > 1) {
  p__83350 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,url,p__83350);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__83353){
var url = cljs.core.first(arglist__83353);
var p__83350 = cljs.core.rest(arglist__83353);
return POST__delegate(url,p__83350);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
demo_app.api.fetch_product_types = (function (){var c = cljs.core.async.chan.call(null);var res = demo_app.api.GET.call(null,"/api/product-types");var c__5524__auto___83368 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_83359){var state_val_83360 = (state_83359[1]);if((state_val_83360 === 2))
{var inst_83355 = (state_83359[2]);var inst_83356 = cljs.reader.read_string.call(null,inst_83355);var inst_83357 = cljs.core.async.put_BANG_.call(null,c,inst_83356);var state_83359__$1 = state_83359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83359__$1,inst_83357);
} else
{if((state_val_83360 === 1))
{var state_83359__$1 = state_83359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83359__$1,2,res);
} else
{return null;
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_83364 = [null,null,null,null,null,null,null];(statearr_83364[0] = state_machine__5510__auto__);
(statearr_83364[1] = 1);
return statearr_83364;
});
var state_machine__5510__auto____1 = (function (state_83359){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_83359);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e83365){if((e83365 instanceof Object))
{var ex__5513__auto__ = e83365;var statearr_83366_83369 = state_83359;(statearr_83366_83369[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83359);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83365;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83370 = state_83359;
state_83359 = G__83370;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_83359){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_83359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_83367 = f__5525__auto__.call(null);(statearr_83367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___83368);
return statearr_83367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c;
})();
demo_app.api.save_data = (function save_data(body){var c = cljs.core.async.chan.call(null);var res = demo_app.api.POST.call(null,"/api/product-types",body);var c__5524__auto___83399 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_83390){var state_val_83391 = (state_83390[1]);if((state_val_83391 === 2))
{var inst_83386 = (state_83390[2]);var inst_83387 = cljs.reader.read_string.call(null,inst_83386);var inst_83388 = cljs.core.async.put_BANG_.call(null,c,inst_83387);var state_83390__$1 = state_83390;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83390__$1,inst_83388);
} else
{if((state_val_83391 === 1))
{var state_83390__$1 = state_83390;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83390__$1,2,res);
} else
{return null;
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_83395 = [null,null,null,null,null,null,null];(statearr_83395[0] = state_machine__5510__auto__);
(statearr_83395[1] = 1);
return statearr_83395;
});
var state_machine__5510__auto____1 = (function (state_83390){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_83390);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e83396){if((e83396 instanceof Object))
{var ex__5513__auto__ = e83396;var statearr_83397_83400 = state_83390;(statearr_83397_83400[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83390);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83396;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83401 = state_83390;
state_83390 = G__83401;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_83390){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_83390);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_83398 = f__5525__auto__.call(null);(statearr_83398[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___83399);
return statearr_83398;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c;
});
demo_app.api.chan_create_product_type = cljs.core.async.chan.call(null,1);

//# sourceMappingURL=api.js.map
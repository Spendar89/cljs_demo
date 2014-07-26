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
var reqAsync__delegate = function (url,method,p__37190){var vec__37214 = p__37190;var body = cljs.core.nth.call(null,vec__37214,0,null);var c = cljs.core.async.chan.call(null);var c__26765__auto___37237 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_37223){var state_val_37224 = (state_37223[1]);if((state_val_37224 === 4))
{var inst_37215 = (state_37223[7]);var inst_37220 = (state_37223[2]);var inst_37221 = goog.net.XhrIo.send(url,inst_37215,method,inst_37220,{"Content-Type": "application/edn"});var state_37223__$1 = state_37223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37223__$1,inst_37221);
} else
{if((state_val_37224 === 3))
{var state_37223__$1 = state_37223;var statearr_37225_37238 = state_37223__$1;(statearr_37225_37238[2] = null);
(statearr_37225_37238[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37224 === 2))
{var inst_37217 = cljs.core.pr_str.call(null,body);var state_37223__$1 = state_37223;var statearr_37226_37239 = state_37223__$1;(statearr_37226_37239[2] = inst_37217);
(statearr_37226_37239[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37224 === 1))
{var inst_37215 = (function (){return ((function (state_val_37224){
return (function (p1__37189_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p1__37189_SHARP_.target.getResponse());
});
;})(state_val_37224))
})();var state_37223__$1 = (function (){var statearr_37227 = state_37223;(statearr_37227[7] = inst_37215);
return statearr_37227;
})();if(cljs.core.truth_(body))
{var statearr_37228_37240 = state_37223__$1;(statearr_37228_37240[1] = 2);
} else
{var statearr_37229_37241 = state_37223__$1;(statearr_37229_37241[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_37233 = [null,null,null,null,null,null,null,null];(statearr_37233[0] = state_machine__26702__auto__);
(statearr_37233[1] = 1);
return statearr_37233;
});
var state_machine__26702__auto____1 = (function (state_37223){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_37223);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e37234){if((e37234 instanceof Object))
{var ex__26705__auto__ = e37234;var statearr_37235_37242 = state_37223;(statearr_37235_37242[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37223);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37234;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37243 = state_37223;
state_37223 = G__37243;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_37223){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_37223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_37236 = f__26766__auto__.call(null);(statearr_37236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___37237);
return statearr_37236;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
}));
return c;
};
var reqAsync = function (url,method,var_args){
var p__37190 = null;if (arguments.length > 2) {
  p__37190 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return reqAsync__delegate.call(this,url,method,p__37190);};
reqAsync.cljs$lang$maxFixedArity = 2;
reqAsync.cljs$lang$applyTo = (function (arglist__37244){
var url = cljs.core.first(arglist__37244);
arglist__37244 = cljs.core.next(arglist__37244);
var method = cljs.core.first(arglist__37244);
var p__37190 = cljs.core.rest(arglist__37244);
return reqAsync__delegate(url,method,p__37190);
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
var POST__delegate = function (url,p__37245){var vec__37247 = p__37245;var body = cljs.core.nth.call(null,vec__37247,0,null);return demo_app.api.reqAsync.call(null,url,"POST",(function (){var or__14581__auto__ = body;if(cljs.core.truth_(or__14581__auto__))
{return or__14581__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
};
var POST = function (url,var_args){
var p__37245 = null;if (arguments.length > 1) {
  p__37245 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,url,p__37245);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__37248){
var url = cljs.core.first(arglist__37248);
var p__37245 = cljs.core.rest(arglist__37248);
return POST__delegate(url,p__37245);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
demo_app.api.fetch_product_types = (function (){var c = cljs.core.async.chan.call(null);var res = demo_app.api.GET.call(null,"/api/product-types");var c__26765__auto___37263 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_37254){var state_val_37255 = (state_37254[1]);if((state_val_37255 === 2))
{var inst_37250 = (state_37254[2]);var inst_37251 = cljs.reader.read_string.call(null,inst_37250);var inst_37252 = cljs.core.async.put_BANG_.call(null,c,inst_37251);var state_37254__$1 = state_37254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37254__$1,inst_37252);
} else
{if((state_val_37255 === 1))
{var state_37254__$1 = state_37254;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,2,res);
} else
{return null;
}
}
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_37259 = [null,null,null,null,null,null,null];(statearr_37259[0] = state_machine__26702__auto__);
(statearr_37259[1] = 1);
return statearr_37259;
});
var state_machine__26702__auto____1 = (function (state_37254){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_37254);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e37260){if((e37260 instanceof Object))
{var ex__26705__auto__ = e37260;var statearr_37261_37264 = state_37254;(statearr_37261_37264[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37254);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37260;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37265 = state_37254;
state_37254 = G__37265;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_37254){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_37254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_37262 = f__26766__auto__.call(null);(statearr_37262[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___37263);
return statearr_37262;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
}));
return c;
})();
demo_app.api.save_data = (function save_data(body){var c = cljs.core.async.chan.call(null);var res = demo_app.api.POST.call(null,"/api/product-types",body);var c__26765__auto___37294 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_37285){var state_val_37286 = (state_37285[1]);if((state_val_37286 === 2))
{var inst_37281 = (state_37285[2]);var inst_37282 = cljs.reader.read_string.call(null,inst_37281);var inst_37283 = cljs.core.async.put_BANG_.call(null,c,inst_37282);var state_37285__$1 = state_37285;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37285__$1,inst_37283);
} else
{if((state_val_37286 === 1))
{var state_37285__$1 = state_37285;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37285__$1,2,res);
} else
{return null;
}
}
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_37290 = [null,null,null,null,null,null,null];(statearr_37290[0] = state_machine__26702__auto__);
(statearr_37290[1] = 1);
return statearr_37290;
});
var state_machine__26702__auto____1 = (function (state_37285){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_37285);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e37291){if((e37291 instanceof Object))
{var ex__26705__auto__ = e37291;var statearr_37292_37295 = state_37285;(statearr_37292_37295[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37285);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37296 = state_37285;
state_37285 = G__37296;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_37285){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_37285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_37293 = f__26766__auto__.call(null);(statearr_37293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___37294);
return statearr_37293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
}));
return c;
});
demo_app.api.chan_create_product_type = cljs.core.async.chan.call(null,1);

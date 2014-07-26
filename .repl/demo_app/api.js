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
var reqAsync__delegate = function (url,method,p__68644){var vec__68668 = p__68644;var body = cljs.core.nth.call(null,vec__68668,0,null);var c = cljs.core.async.chan.call(null);var c__27289__auto___68691 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_68677){var state_val_68678 = (state_68677[1]);if((state_val_68678 === 4))
{var inst_68669 = (state_68677[7]);var inst_68674 = (state_68677[2]);var inst_68675 = goog.net.XhrIo.send(url,inst_68669,method,inst_68674,{"Content-Type": "application/edn"});var state_68677__$1 = state_68677;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68677__$1,inst_68675);
} else
{if((state_val_68678 === 3))
{var state_68677__$1 = state_68677;var statearr_68679_68692 = state_68677__$1;(statearr_68679_68692[2] = null);
(statearr_68679_68692[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68678 === 2))
{var inst_68671 = cljs.core.pr_str.call(null,body);var state_68677__$1 = state_68677;var statearr_68680_68693 = state_68677__$1;(statearr_68680_68693[2] = inst_68671);
(statearr_68680_68693[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68678 === 1))
{var inst_68669 = (function (){return ((function (state_val_68678){
return (function (p1__68643_SHARP_){return cljs.core.async.put_BANG_.call(null,c,p1__68643_SHARP_.target.getResponse());
});
;})(state_val_68678))
})();var state_68677__$1 = (function (){var statearr_68681 = state_68677;(statearr_68681[7] = inst_68669);
return statearr_68681;
})();if(cljs.core.truth_(body))
{var statearr_68682_68694 = state_68677__$1;(statearr_68682_68694[1] = 2);
} else
{var statearr_68683_68695 = state_68677__$1;(statearr_68683_68695[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_68687 = [null,null,null,null,null,null,null,null];(statearr_68687[0] = state_machine__27226__auto__);
(statearr_68687[1] = 1);
return statearr_68687;
});
var state_machine__27226__auto____1 = (function (state_68677){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_68677);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e68688){if((e68688 instanceof Object))
{var ex__27229__auto__ = e68688;var statearr_68689_68696 = state_68677;(statearr_68689_68696[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68677);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e68688;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__68697 = state_68677;
state_68677 = G__68697;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_68677){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_68677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_68690 = f__27290__auto__.call(null);(statearr_68690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___68691);
return statearr_68690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
}));
return c;
};
var reqAsync = function (url,method,var_args){
var p__68644 = null;if (arguments.length > 2) {
  p__68644 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return reqAsync__delegate.call(this,url,method,p__68644);};
reqAsync.cljs$lang$maxFixedArity = 2;
reqAsync.cljs$lang$applyTo = (function (arglist__68698){
var url = cljs.core.first(arglist__68698);
arglist__68698 = cljs.core.next(arglist__68698);
var method = cljs.core.first(arglist__68698);
var p__68644 = cljs.core.rest(arglist__68698);
return reqAsync__delegate(url,method,p__68644);
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
var POST__delegate = function (url,p__68699){var vec__68701 = p__68699;var body = cljs.core.nth.call(null,vec__68701,0,null);return demo_app.api.reqAsync.call(null,url,"POST",(function (){var or__15106__auto__ = body;if(cljs.core.truth_(or__15106__auto__))
{return or__15106__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})());
};
var POST = function (url,var_args){
var p__68699 = null;if (arguments.length > 1) {
  p__68699 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return POST__delegate.call(this,url,p__68699);};
POST.cljs$lang$maxFixedArity = 1;
POST.cljs$lang$applyTo = (function (arglist__68702){
var url = cljs.core.first(arglist__68702);
var p__68699 = cljs.core.rest(arglist__68702);
return POST__delegate(url,p__68699);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
demo_app.api.fetch_product_types = (function (){var c = cljs.core.async.chan.call(null);var res = demo_app.api.GET.call(null,"/api/product-types");var c__27289__auto___68717 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_68708){var state_val_68709 = (state_68708[1]);if((state_val_68709 === 2))
{var inst_68704 = (state_68708[2]);var inst_68705 = cljs.reader.read_string.call(null,inst_68704);var inst_68706 = cljs.core.async.put_BANG_.call(null,c,inst_68705);var state_68708__$1 = state_68708;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68708__$1,inst_68706);
} else
{if((state_val_68709 === 1))
{var state_68708__$1 = state_68708;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68708__$1,2,res);
} else
{return null;
}
}
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_68713 = [null,null,null,null,null,null,null];(statearr_68713[0] = state_machine__27226__auto__);
(statearr_68713[1] = 1);
return statearr_68713;
});
var state_machine__27226__auto____1 = (function (state_68708){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_68708);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e68714){if((e68714 instanceof Object))
{var ex__27229__auto__ = e68714;var statearr_68715_68718 = state_68708;(statearr_68715_68718[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68708);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e68714;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__68719 = state_68708;
state_68708 = G__68719;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_68708){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_68708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_68716 = f__27290__auto__.call(null);(statearr_68716[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___68717);
return statearr_68716;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
}));
return c;
})();
demo_app.api.save_data = (function save_data(body){var c = cljs.core.async.chan.call(null);var res = demo_app.api.POST.call(null,"/api/product-types",body);var c__27289__auto___68748 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_68739){var state_val_68740 = (state_68739[1]);if((state_val_68740 === 2))
{var inst_68735 = (state_68739[2]);var inst_68736 = cljs.reader.read_string.call(null,inst_68735);var inst_68737 = cljs.core.async.put_BANG_.call(null,c,inst_68736);var state_68739__$1 = state_68739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68739__$1,inst_68737);
} else
{if((state_val_68740 === 1))
{var state_68739__$1 = state_68739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68739__$1,2,res);
} else
{return null;
}
}
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_68744 = [null,null,null,null,null,null,null];(statearr_68744[0] = state_machine__27226__auto__);
(statearr_68744[1] = 1);
return statearr_68744;
});
var state_machine__27226__auto____1 = (function (state_68739){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_68739);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e68745){if((e68745 instanceof Object))
{var ex__27229__auto__ = e68745;var statearr_68746_68749 = state_68739;(statearr_68746_68749[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68739);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e68745;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__68750 = state_68739;
state_68739 = G__68750;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_68739){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_68739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_68747 = f__27290__auto__.call(null);(statearr_68747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___68748);
return statearr_68747;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
}));
return c;
});
demo_app.api.chan_create_product_type = cljs.core.async.chan.call(null,1);

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
var reqAsync__delegate = function (url,method,data){var c = cljs.core.async.chan.call(null);goog.net.XhrIo.send(url,(function (e){return cljs.core.async.put_BANG_.call(null,c,e.target.getResponseText());
}),method,(cljs.core.truth_(data)?cljs.core.pr_str.call(null,data):null));
return c;
};
var reqAsync = function (url,method,var_args){
var data = null;if (arguments.length > 2) {
  data = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return reqAsync__delegate.call(this,url,method,data);};
reqAsync.cljs$lang$maxFixedArity = 2;
reqAsync.cljs$lang$applyTo = (function (arglist__44062){
var url = cljs.core.first(arglist__44062);
arglist__44062 = cljs.core.next(arglist__44062);
var method = cljs.core.first(arglist__44062);
var data = cljs.core.rest(arglist__44062);
return reqAsync__delegate(url,method,data);
});
reqAsync.cljs$core$IFn$_invoke$arity$variadic = reqAsync__delegate;
return reqAsync;
})()
;
demo_app.api.GET = (function GET(url){return demo_app.api.reqAsync.call(null,url,"GET");
});
demo_app.api.POST = (function POST(url,data){demo_app.api.reqAsync.call(null,url,"POST");
return data;
});
demo_app.api.fetch_product_types = (function (){var c = cljs.core.async.chan.call(null);var res = demo_app.api.GET.call(null,"/api/product-types");var c__36000__auto___44078 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_44069){var state_val_44070 = (state_44069[1]);if((state_val_44070 === 2))
{var inst_44064 = (state_44069[2]);var inst_44065 = cljs.reader.read_string.call(null,inst_44064);var inst_44066 = cljs.core.js__GT_clj.call(null,inst_44065);var inst_44067 = cljs.core.async.put_BANG_.call(null,c,inst_44066);var state_44069__$1 = state_44069;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44069__$1,inst_44067);
} else
{if((state_val_44070 === 1))
{var state_44069__$1 = state_44069;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44069__$1,2,res);
} else
{return null;
}
}
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_44074 = [null,null,null,null,null,null,null];(statearr_44074[0] = state_machine__35937__auto__);
(statearr_44074[1] = 1);
return statearr_44074;
});
var state_machine__35937__auto____1 = (function (state_44069){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_44069);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e44075){if((e44075 instanceof Object))
{var ex__35940__auto__ = e44075;var statearr_44076_44079 = state_44069;(statearr_44076_44079[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44069);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44080 = state_44069;
state_44069 = G__44080;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_44069){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_44069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_44077 = f__36001__auto__.call(null);(statearr_44077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto___44078);
return statearr_44077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
}));
return c;
})();
demo_app.api.chan_create_product_type = cljs.core.async.chan.call(null,1);
demo_app.api.create_product_type = (function create_product_type(data){var c__36000__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_44107){var state_val_44108 = (state_44107[1]);if((state_val_44108 === 4))
{var inst_44102 = (state_44107[2]);var inst_44103 = demo_app.api.POST.call(null,"/api/product-types/",data);var state_44107__$1 = (function (){var statearr_44109 = state_44107;(statearr_44109[7] = inst_44102);
return statearr_44109;
})();var statearr_44110_44119 = state_44107__$1;(statearr_44110_44119[2] = inst_44103);
(statearr_44110_44119[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44108 === 3))
{var inst_44105 = (state_44107[2]);var state_44107__$1 = state_44107;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44107__$1,inst_44105);
} else
{if((state_val_44108 === 2))
{var state_44107__$1 = state_44107;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44107__$1,4,demo_app.api.chan_create_product_type);
} else
{if((state_val_44108 === 1))
{var state_44107__$1 = state_44107;var statearr_44111_44120 = state_44107__$1;(statearr_44111_44120[2] = null);
(statearr_44111_44120[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_44115 = [null,null,null,null,null,null,null,null];(statearr_44115[0] = state_machine__35937__auto__);
(statearr_44115[1] = 1);
return statearr_44115;
});
var state_machine__35937__auto____1 = (function (state_44107){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_44107);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e44116){if((e44116 instanceof Object))
{var ex__35940__auto__ = e44116;var statearr_44117_44121 = state_44107;(statearr_44117_44121[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44107);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44122 = state_44107;
state_44107 = G__44122;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_44107){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_44107);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_44118 = f__36001__auto__.call(null);(statearr_44118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto__);
return statearr_44118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
}));
return c__36000__auto__;
});

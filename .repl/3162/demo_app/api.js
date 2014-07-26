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
reqAsync.cljs$lang$applyTo = (function (arglist__36839){
var url = cljs.core.first(arglist__36839);
arglist__36839 = cljs.core.next(arglist__36839);
var method = cljs.core.first(arglist__36839);
var data = cljs.core.rest(arglist__36839);
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
demo_app.api.fetch_props = (function (){var c = cljs.core.async.chan.call(null);var res = demo_app.api.GET.call(null,"/api/product-type-props");var c__29288__auto___36855 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_36846){var state_val_36847 = (state_36846[1]);if((state_val_36847 === 2))
{var inst_36841 = (state_36846[2]);var inst_36842 = JSON.parse.call(null,inst_36841);var inst_36843 = cljs.core.js__GT_clj.call(null,inst_36842,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var inst_36844 = cljs.core.async.put_BANG_.call(null,c,inst_36843);var state_36846__$1 = state_36846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36846__$1,inst_36844);
} else
{if((state_val_36847 === 1))
{var state_36846__$1 = state_36846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36846__$1,2,res);
} else
{return null;
}
}
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_36851 = [null,null,null,null,null,null,null];(statearr_36851[0] = state_machine__29225__auto__);
(statearr_36851[1] = 1);
return statearr_36851;
});
var state_machine__29225__auto____1 = (function (state_36846){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_36846);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e36852){if((e36852 instanceof Object))
{var ex__29228__auto__ = e36852;var statearr_36853_36856 = state_36846;(statearr_36853_36856[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36846);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36852;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36857 = state_36846;
state_36846 = G__36857;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_36846){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_36846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_36854 = f__29289__auto__.call(null);(statearr_36854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___36855);
return statearr_36854;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
}));
return c;
})();
demo_app.api.fetch_product_types = (function (){var c = cljs.core.async.chan.call(null);var res = demo_app.api.GET.call(null,"/api/product-types");var c__29288__auto___36873 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_36864){var state_val_36865 = (state_36864[1]);if((state_val_36865 === 2))
{var inst_36859 = (state_36864[2]);var inst_36860 = JSON.parse.call(null,inst_36859);var inst_36861 = cljs.core.js__GT_clj.call(null,inst_36860,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",4191781672),true);var inst_36862 = cljs.core.async.put_BANG_.call(null,c,inst_36861);var state_36864__$1 = state_36864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36864__$1,inst_36862);
} else
{if((state_val_36865 === 1))
{var state_36864__$1 = state_36864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36864__$1,2,res);
} else
{return null;
}
}
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_36869 = [null,null,null,null,null,null,null];(statearr_36869[0] = state_machine__29225__auto__);
(statearr_36869[1] = 1);
return statearr_36869;
});
var state_machine__29225__auto____1 = (function (state_36864){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_36864);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e36870){if((e36870 instanceof Object))
{var ex__29228__auto__ = e36870;var statearr_36871_36874 = state_36864;(statearr_36871_36874[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36864);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36870;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36875 = state_36864;
state_36864 = G__36875;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_36864){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_36864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_36872 = f__29289__auto__.call(null);(statearr_36872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___36873);
return statearr_36872;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
}));
return c;
})();
demo_app.api.chan_create_product_type = cljs.core.async.chan.call(null,1);
demo_app.api.create_product_type = (function create_product_type(data){var c__29288__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_36902){var state_val_36903 = (state_36902[1]);if((state_val_36903 === 4))
{var inst_36897 = (state_36902[2]);var inst_36898 = demo_app.api.POST.call(null,"/api/product-types/",data);var state_36902__$1 = (function (){var statearr_36904 = state_36902;(statearr_36904[7] = inst_36897);
return statearr_36904;
})();var statearr_36905_36914 = state_36902__$1;(statearr_36905_36914[2] = inst_36898);
(statearr_36905_36914[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36903 === 3))
{var inst_36900 = (state_36902[2]);var state_36902__$1 = state_36902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36902__$1,inst_36900);
} else
{if((state_val_36903 === 2))
{var state_36902__$1 = state_36902;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36902__$1,4,demo_app.api.chan_create_product_type);
} else
{if((state_val_36903 === 1))
{var state_36902__$1 = state_36902;var statearr_36906_36915 = state_36902__$1;(statearr_36906_36915[2] = null);
(statearr_36906_36915[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_36910 = [null,null,null,null,null,null,null,null];(statearr_36910[0] = state_machine__29225__auto__);
(statearr_36910[1] = 1);
return statearr_36910;
});
var state_machine__29225__auto____1 = (function (state_36902){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_36902);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e36911){if((e36911 instanceof Object))
{var ex__29228__auto__ = e36911;var statearr_36912_36916 = state_36902;(statearr_36912_36916[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36902);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36911;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36917 = state_36902;
state_36902 = G__36917;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_36902){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_36902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_36913 = f__29289__auto__.call(null);(statearr_36913[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto__);
return statearr_36913;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
}));
return c__29288__auto__;
});

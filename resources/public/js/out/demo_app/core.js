// Compiled by ClojureScript 0.0-2156
goog.provide('demo_app.core');
goog.require('cljs.core');
goog.require('demo_app.product_types.views');
goog.require('cljs.core.async');
goog.require('demo_app.api');
goog.require('om_tools.core');
goog.require('clojure.data');
goog.require('demo_app.product_types.views');
goog.require('demo_app.product_types.views');
goog.require('clojure.data');
goog.require('cljs.reader');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('demo_app.api');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('clojure.browser.repl');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
demo_app.core.app_state = (function (){var c = cljs.core.async.chan.call(null);var c__5524__auto___83417 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_83408){var state_val_83409 = (state_83408[1]);if((state_val_83409 === 2))
{var inst_83403 = (state_83408[2]);var inst_83404 = cljs.core.vec.call(null,inst_83403);var inst_83405 = cljs.core.atom.call(null,inst_83404);var inst_83406 = cljs.core.async.put_BANG_.call(null,c,inst_83405);var state_83408__$1 = state_83408;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83408__$1,inst_83406);
} else
{if((state_val_83409 === 1))
{var state_83408__$1 = state_83408;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83408__$1,2,demo_app.api.fetch_product_types);
} else
{return null;
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_83413 = [null,null,null,null,null,null,null];(statearr_83413[0] = state_machine__5510__auto__);
(statearr_83413[1] = 1);
return statearr_83413;
});
var state_machine__5510__auto____1 = (function (state_83408){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_83408);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e83414){if((e83414 instanceof Object))
{var ex__5513__auto__ = e83414;var statearr_83415_83418 = state_83408;(statearr_83415_83418[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83408);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83414;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83419 = state_83408;
state_83408 = G__83419;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_83408){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_83408);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_83416 = f__5525__auto__.call(null);(statearr_83416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___83417);
return statearr_83416;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c;
})();
var c__5524__auto___83437 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_83428){var state_val_83429 = (state_83428[1]);if((state_val_83429 === 2))
{var inst_83421 = (state_83428[2]);var inst_83422 = [new cljs.core.Keyword(null,"target","target",4427965699)];var inst_83423 = document.getElementById("app0");var inst_83424 = [inst_83423];var inst_83425 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_83422,inst_83424);var inst_83426 = om.core.root.call(null,demo_app.product_types.views.product_types,inst_83421,inst_83425);var state_83428__$1 = state_83428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_83428__$1,inst_83426);
} else
{if((state_val_83429 === 1))
{var state_83428__$1 = state_83428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_83428__$1,2,demo_app.core.app_state);
} else
{return null;
}
}
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_83433 = [null,null,null,null,null,null,null];(statearr_83433[0] = state_machine__5510__auto__);
(statearr_83433[1] = 1);
return statearr_83433;
});
var state_machine__5510__auto____1 = (function (state_83428){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_83428);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e83434){if((e83434 instanceof Object))
{var ex__5513__auto__ = e83434;var statearr_83435_83438 = state_83428;(statearr_83435_83438[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_83428);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e83434;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__83439 = state_83428;
state_83428 = G__83439;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_83428){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_83428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_83436 = f__5525__auto__.call(null);(statearr_83436[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___83437);
return statearr_83436;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));

//# sourceMappingURL=core.js.map
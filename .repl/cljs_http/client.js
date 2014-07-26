// Compiled by ClojureScript 0.0-2156
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.core');
goog.require('no.en.core');
goog.require('goog.Uri');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('cljs_http.core');
cljs_http.client.if_pos = (function if_pos(v){if(cljs.core.truth_((function (){var and__14970__auto__ = v;if(cljs.core.truth_(and__14970__auto__))
{return (v > 0);
} else
{return and__14970__auto__;
}
})()))
{return v;
} else
{return null;
}
});
/**
* Parse `s` as query params and return a hash map.
*/
cljs_http.client.parse_query_params = (function parse_query_params(s){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,s)))
{return cljs.core.reduce.call(null,(function (p1__26688_SHARP_,p2__26687_SHARP_){var vec__26690 = clojure.string.split.call(null,p2__26687_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__26690,0,null);var v = cljs.core.nth.call(null,vec__26690,1,null);return cljs.core.assoc.call(null,p1__26688_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str(s)].join(''),/&/));
} else
{return null;
}
});
/**
* Parse `url` into a hash map.
*/
cljs_http.client.parse_url = (function parse_url(url){if(cljs.core.not.call(null,clojure.string.blank_QMARK_.call(null,url)))
{var uri = goog.Uri.parse(url);var query_data = uri.getQueryData();return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",4400883991),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",4503925319),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",4503998525),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",1014020318),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",1183691816),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",1080249757),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str(query_data)].join('')):null)], null);
} else
{return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [205,null,206,null,300,null,204,null,307,null,303,null,301,null,201,null,302,null,202,null,200,null,203,null,207,null], null), null);
cljs_http.client.encode_val = (function encode_val(k,v){return [cljs.core.str(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),cljs.core.str("="),cljs.core.str(no.en.core.url_encode.call(null,[cljs.core.str(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__26691_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__26691_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__26692){var vec__26694 = p__26692;var k = cljs.core.nth.call(null,vec__26694,0,null);var v = cljs.core.nth.call(null,vec__26694,1,null);if(cljs.core.coll_QMARK_.call(null,v))
{return cljs_http.client.encode_vals.call(null,k,v);
} else
{return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function generate_query_string(params){return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
/**
* Decocde the :body of `response` with `decode-fn` if the content type matches.
*/
cljs_http.client.decode_body = (function decode_body(response,decode_fn,content_type,request_method){if(cljs.core.truth_((function (){var and__14970__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",1017102674),request_method);if(and__14970__auto__)
{return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,[cljs.core.str("(?i)"),cljs.core.str(content_type)].join('')),[cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",1809212152).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else
{return and__14970__auto__;
}
})()))
{return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",1016933652)], null),decode_fn);
} else
{return response;
}
});
/**
* Encode :edn-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_edn_params = (function wrap_edn_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",1007197398).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",1007197398)),new cljs.core.Keyword(null,"body","body",1016933652),cljs.core.pr_str.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),"application/edn"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/edn responses.
*/
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__23295__auto___26731 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23296__auto__ = (function (){var switch__23231__auto__ = (function (state_26721){var state_val_26722 = (state_26721[1]);if((state_val_26722 === 2))
{var inst_26715 = (state_26721[2]);var inst_26716 = new cljs.core.Keyword(null,"request-method","request-method",1993477457).cljs$core$IFn$_invoke$arity$1(request);var inst_26717 = cljs_http.client.decode_body.call(null,inst_26715,cljs.reader.read_string,"application/edn",inst_26716);var inst_26718 = cljs.core.async.put_BANG_.call(null,channel,inst_26717);var inst_26719 = cljs.core.async.close_BANG_.call(null,channel);var state_26721__$1 = (function (){var statearr_26723 = state_26721;(statearr_26723[7] = inst_26718);
return statearr_26723;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26721__$1,inst_26719);
} else
{if((state_val_26722 === 1))
{var inst_26713 = client.call(null,request);var state_26721__$1 = state_26721;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26721__$1,2,inst_26713);
} else
{return null;
}
}
});return ((function (switch__23231__auto__){
return (function() {
var state_machine__23232__auto__ = null;
var state_machine__23232__auto____0 = (function (){var statearr_26727 = [null,null,null,null,null,null,null,null];(statearr_26727[0] = state_machine__23232__auto__);
(statearr_26727[1] = 1);
return statearr_26727;
});
var state_machine__23232__auto____1 = (function (state_26721){while(true){
var ret_value__23233__auto__ = (function (){try{while(true){
var result__23234__auto__ = switch__23231__auto__.call(null,state_26721);if(cljs.core.keyword_identical_QMARK_.call(null,result__23234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23234__auto__;
}
break;
}
}catch (e26728){if((e26728 instanceof Object))
{var ex__23235__auto__ = e26728;var statearr_26729_26732 = state_26721;(statearr_26729_26732[5] = ex__23235__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26721);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23233__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26733 = state_26721;
state_26721 = G__26733;
continue;
}
} else
{return ret_value__23233__auto__;
}
break;
}
});
state_machine__23232__auto__ = function(state_26721){
switch(arguments.length){
case 0:
return state_machine__23232__auto____0.call(this);
case 1:
return state_machine__23232__auto____1.call(this,state_26721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23232__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23232__auto____0;
state_machine__23232__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23232__auto____1;
return state_machine__23232__auto__;
})()
;})(switch__23231__auto__))
})();var state__23297__auto__ = (function (){var statearr_26730 = f__23296__auto__.call(null);(statearr_26730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23295__auto___26731);
return statearr_26730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23297__auto__);
}));
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__26734){var vec__26736 = p__26734;var accept = cljs.core.nth.call(null,vec__26736,0,null);return (function (request){var temp__4124__auto__ = (function (){var or__14982__auto__ = new cljs.core.Keyword(null,"accept","accept",3885410426).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return accept;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var accept__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"accept"], null),accept__$1));
} else
{return client.call(null,request);
}
});
};
var wrap_accept = function (client,var_args){
var p__26734 = null;if (arguments.length > 1) {
  p__26734 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__26734);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__26737){
var client = cljs.core.first(arglist__26737);
var p__26734 = cljs.core.rest(arglist__26737);
return wrap_accept__delegate(client,p__26734);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__26738){var vec__26740 = p__26738;var content_type = cljs.core.nth.call(null,vec__26740,0,null);return (function (request){var temp__4124__auto__ = (function (){var or__14982__auto__ = new cljs.core.Keyword(null,"content-type","content-type",1799574400).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return content_type;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var content_type__$1 = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),content_type__$1));
} else
{return client.call(null,request);
}
});
};
var wrap_content_type = function (client,var_args){
var p__26738 = null;if (arguments.length > 1) {
  p__26738 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__26738);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__26741){
var client = cljs.core.first(arglist__26741);
var p__26738 = cljs.core.rest(arglist__26741);
return wrap_content_type__delegate(client,p__26738);
});
wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = wrap_content_type__delegate;
return wrap_content_type;
})()
;
/**
* Encode :json-params in the `request` :body and set the appropriate
* Content Type header.
*/
cljs_http.client.wrap_json_params = (function wrap_json_params(client){return (function (request){var temp__4124__auto__ = new cljs.core.Keyword(null,"json-params","json-params",2645529981).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(temp__4124__auto__))
{var params = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",2645529981)),new cljs.core.Keyword(null,"body","body",1016933652),cljs_http.util.json_encode.call(null,params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),"application/json"));
} else
{return client.call(null,request);
}
});
});
/**
* Decode application/json responses.
*/
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__23295__auto___26778 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23296__auto__ = (function (){var switch__23231__auto__ = (function (state_26768){var state_val_26769 = (state_26768[1]);if((state_val_26769 === 2))
{var inst_26762 = (state_26768[2]);var inst_26763 = new cljs.core.Keyword(null,"request-method","request-method",1993477457).cljs$core$IFn$_invoke$arity$1(request);var inst_26764 = cljs_http.client.decode_body.call(null,inst_26762,cljs_http.util.json_decode,"application/json",inst_26763);var inst_26765 = cljs.core.async.put_BANG_.call(null,channel,inst_26764);var inst_26766 = cljs.core.async.close_BANG_.call(null,channel);var state_26768__$1 = (function (){var statearr_26770 = state_26768;(statearr_26770[7] = inst_26765);
return statearr_26770;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26768__$1,inst_26766);
} else
{if((state_val_26769 === 1))
{var inst_26760 = client.call(null,request);var state_26768__$1 = state_26768;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26768__$1,2,inst_26760);
} else
{return null;
}
}
});return ((function (switch__23231__auto__){
return (function() {
var state_machine__23232__auto__ = null;
var state_machine__23232__auto____0 = (function (){var statearr_26774 = [null,null,null,null,null,null,null,null];(statearr_26774[0] = state_machine__23232__auto__);
(statearr_26774[1] = 1);
return statearr_26774;
});
var state_machine__23232__auto____1 = (function (state_26768){while(true){
var ret_value__23233__auto__ = (function (){try{while(true){
var result__23234__auto__ = switch__23231__auto__.call(null,state_26768);if(cljs.core.keyword_identical_QMARK_.call(null,result__23234__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23234__auto__;
}
break;
}
}catch (e26775){if((e26775 instanceof Object))
{var ex__23235__auto__ = e26775;var statearr_26776_26779 = state_26768;(statearr_26776_26779[5] = ex__23235__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26768);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26775;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23233__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26780 = state_26768;
state_26768 = G__26780;
continue;
}
} else
{return ret_value__23233__auto__;
}
break;
}
});
state_machine__23232__auto__ = function(state_26768){
switch(arguments.length){
case 0:
return state_machine__23232__auto____0.call(this);
case 1:
return state_machine__23232__auto____1.call(this,state_26768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23232__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23232__auto____0;
state_machine__23232__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23232__auto____1;
return state_machine__23232__auto__;
})()
;})(switch__23231__auto__))
})();var state__23297__auto__ = (function (){var statearr_26777 = f__23296__auto__.call(null);(statearr_26777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23295__auto___26778);
return statearr_26777;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23297__auto__);
}));
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__26783){var map__26784 = p__26783;var map__26784__$1 = ((cljs.core.seq_QMARK_.call(null,map__26784))?cljs.core.apply.call(null,cljs.core.hash_map,map__26784):map__26784);var req = map__26784__$1;var query_params = cljs.core.get.call(null,map__26784__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",1080249757)),new cljs.core.Keyword(null,"query-string","query-string",1183691816),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__26787){var map__26788 = p__26787;var map__26788__$1 = ((cljs.core.seq_QMARK_.call(null,map__26788))?cljs.core.apply.call(null,cljs.core.hash_map,map__26788):map__26788);var request = map__26788__$1;var request_method = cljs.core.get.call(null,map__26788__$1,new cljs.core.Keyword(null,"request-method","request-method",1993477457));var form_params = cljs.core.get.call(null,map__26788__$1,new cljs.core.Keyword(null,"form-params","form-params",3454215713));if(cljs.core.truth_((function (){var and__14970__auto__ = form_params;if(cljs.core.truth_(and__14970__auto__))
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",1120342970),null,new cljs.core.Keyword(null,"delete","delete",3973413149),null,new cljs.core.Keyword(null,"post","post",1017351186),null,new cljs.core.Keyword(null,"put","put",1014015617),null], null), null).call(null,request_method);
} else
{return and__14970__auto__;
}
})()))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",3454215713)),new cljs.core.Keyword(null,"body","body",1016933652),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"content-type"], null),"application/x-www-form-urlencoded"));
} else
{return client.call(null,request);
}
});
});
cljs_http.client.wrap_android_cors_bugfix = (function wrap_android_cors_bugfix(client){return (function (request){return client.call(null,(cljs.core.truth_(cljs_http.util.android_QMARK_.call(null))?cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757),new cljs.core.Keyword(null,"android","android",4447480289)], null),Math.random.call(null)):request));
});
});
cljs_http.client.wrap_method = (function wrap_method(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"method","method",4231316563).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var m = temp__4124__auto__;return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",4231316563)),new cljs.core.Keyword(null,"request-method","request-method",1993477457),m));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__26789_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__26789_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",4503925319),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__26793){var map__26794 = p__26793;var map__26794__$1 = ((cljs.core.seq_QMARK_.call(null,map__26794))?cljs.core.apply.call(null,cljs.core.hash_map,map__26794):map__26794);var req = map__26794__$1;var query_params = cljs.core.get.call(null,map__26794__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",1014020321)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757)], null),(function (p1__26790_SHARP_){return cljs.core.merge.call(null,p1__26790_SHARP_,query_params);
})));
} else
{return client.call(null,req);
}
});
});
/**
* Middleware converting the :basic-auth option or `credentials` into
* an Authorization header.
* @param {...*} var_args
*/
cljs_http.client.wrap_basic_auth = (function() { 
var wrap_basic_auth__delegate = function (client,p__26795){var vec__26797 = p__26795;var credentials = cljs.core.nth.call(null,vec__26797,0,null);return (function (req){var credentials__$1 = (function (){var or__14982__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return credentials;
}
})();if(!(cljs.core.empty_QMARK_.call(null,credentials__$1)))
{return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else
{return client.call(null,req);
}
});
};
var wrap_basic_auth = function (client,var_args){
var p__26795 = null;if (arguments.length > 1) {
  p__26795 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__26795);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__26798){
var client = cljs.core.first(arglist__26798);
var p__26795 = cljs.core.rest(arglist__26798);
return wrap_basic_auth__delegate(client,p__26795);
});
wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = wrap_basic_auth__delegate;
return wrap_basic_auth;
})()
;
/**
* Middleware converting the :oauth-token option into an Authorization header.
*/
cljs_http.client.wrap_oauth = (function wrap_oauth(client){return (function (req){var temp__4124__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",4322509493).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(temp__4124__auto__))
{var oauth_token = temp__4124__auto__;return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",4322509493)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",1809212152),"authorization"], null),[cljs.core.str("Bearer "),cljs.core.str(oauth_token)].join('')));
} else
{return client.call(null,req);
}
});
});
/**
* Returns a batteries-included HTTP request function coresponding to the given
* core client. See client/client.
*/
cljs_http.client.wrap_request = (function wrap_request(request){return cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_android_cors_bugfix.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))));
});
/**
* Executes the HTTP request corresponding to the given map and returns the
* response map for corresponding to the resulting HTTP response.
* 
* In addition to the standard Ring request keys, the following keys are also
* recognized:
* * :url
* * :method
* * :query-params
*/
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.delete$ = (function() { 
var delete$__delegate = function (url,p__26799){var vec__26801 = p__26799;var req = cljs.core.nth.call(null,vec__26801,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var delete$ = function (url,var_args){
var p__26799 = null;if (arguments.length > 1) {
  p__26799 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__26799);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__26802){
var url = cljs.core.first(arglist__26802);
var p__26799 = cljs.core.rest(arglist__26802);
return delete$__delegate(url,p__26799);
});
delete$.cljs$core$IFn$_invoke$arity$variadic = delete$__delegate;
return delete$;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.get = (function() { 
var get__delegate = function (url,p__26803){var vec__26805 = p__26803;var req = cljs.core.nth.call(null,vec__26805,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var get = function (url,var_args){
var p__26803 = null;if (arguments.length > 1) {
  p__26803 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__26803);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__26806){
var url = cljs.core.first(arglist__26806);
var p__26803 = cljs.core.rest(arglist__26806);
return get__delegate(url,p__26803);
});
get.cljs$core$IFn$_invoke$arity$variadic = get__delegate;
return get;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.head = (function() { 
var head__delegate = function (url,p__26807){var vec__26809 = p__26807;var req = cljs.core.nth.call(null,vec__26809,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var head = function (url,var_args){
var p__26807 = null;if (arguments.length > 1) {
  p__26807 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__26807);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__26810){
var url = cljs.core.first(arglist__26810);
var p__26807 = cljs.core.rest(arglist__26810);
return head__delegate(url,p__26807);
});
head.cljs$core$IFn$_invoke$arity$variadic = head__delegate;
return head;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.move = (function() { 
var move__delegate = function (url,p__26811){var vec__26813 = p__26811;var req = cljs.core.nth.call(null,vec__26813,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var move = function (url,var_args){
var p__26811 = null;if (arguments.length > 1) {
  p__26811 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__26811);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__26814){
var url = cljs.core.first(arglist__26814);
var p__26811 = cljs.core.rest(arglist__26814);
return move__delegate(url,p__26811);
});
move.cljs$core$IFn$_invoke$arity$variadic = move__delegate;
return move;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.options = (function() { 
var options__delegate = function (url,p__26815){var vec__26817 = p__26815;var req = cljs.core.nth.call(null,vec__26817,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var options = function (url,var_args){
var p__26815 = null;if (arguments.length > 1) {
  p__26815 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__26815);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__26818){
var url = cljs.core.first(arglist__26818);
var p__26815 = cljs.core.rest(arglist__26818);
return options__delegate(url,p__26815);
});
options.cljs$core$IFn$_invoke$arity$variadic = options__delegate;
return options;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.patch = (function() { 
var patch__delegate = function (url,p__26819){var vec__26821 = p__26819;var req = cljs.core.nth.call(null,vec__26821,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"patch","patch",1120342970),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var patch = function (url,var_args){
var p__26819 = null;if (arguments.length > 1) {
  p__26819 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__26819);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__26822){
var url = cljs.core.first(arglist__26822);
var p__26819 = cljs.core.rest(arglist__26822);
return patch__delegate(url,p__26819);
});
patch.cljs$core$IFn$_invoke$arity$variadic = patch__delegate;
return patch;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.post = (function() { 
var post__delegate = function (url,p__26823){var vec__26825 = p__26823;var req = cljs.core.nth.call(null,vec__26825,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var post = function (url,var_args){
var p__26823 = null;if (arguments.length > 1) {
  p__26823 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__26823);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__26826){
var url = cljs.core.first(arglist__26826);
var p__26823 = cljs.core.rest(arglist__26826);
return post__delegate(url,p__26823);
});
post.cljs$core$IFn$_invoke$arity$variadic = post__delegate;
return post;
})()
;
/**
* Like #'request, but sets the :method and :url as appropriate.
* @param {...*} var_args
*/
cljs_http.client.put = (function() { 
var put__delegate = function (url,p__26827){var vec__26829 = p__26827;var req = cljs.core.nth.call(null,vec__26829,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var put = function (url,var_args){
var p__26827 = null;if (arguments.length > 1) {
  p__26827 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__26827);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__26830){
var url = cljs.core.first(arglist__26830);
var p__26827 = cljs.core.rest(arglist__26830);
return put__delegate(url,p__26827);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

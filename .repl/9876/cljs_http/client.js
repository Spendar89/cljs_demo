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
{return cljs.core.reduce.call(null,(function (p1__36976_SHARP_,p2__36975_SHARP_){var vec__36978 = clojure.string.split.call(null,p2__36975_SHARP_,/=/);var k = cljs.core.nth.call(null,vec__36978,0,null);var v = cljs.core.nth.call(null,vec__36978,1,null);return cljs.core.assoc.call(null,p1__36976_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),no.en.core.url_decode.call(null,v));
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
cljs_http.client.encode_vals = (function encode_vals(k,vs){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__36979_SHARP_){return cljs_http.client.encode_val.call(null,k,p1__36979_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function encode_param(p__36980){var vec__36982 = p__36980;var k = cljs.core.nth.call(null,vec__36982,0,null);var v = cljs.core.nth.call(null,vec__36982,1,null);if(cljs.core.coll_QMARK_.call(null,v))
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
cljs_http.client.wrap_edn_response = (function wrap_edn_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__22201__auto___37019 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_37009){var state_val_37010 = (state_37009[1]);if((state_val_37010 === 2))
{var inst_37003 = (state_37009[2]);var inst_37004 = new cljs.core.Keyword(null,"request-method","request-method",1993477457).cljs$core$IFn$_invoke$arity$1(request);var inst_37005 = cljs_http.client.decode_body.call(null,inst_37003,cljs.reader.read_string,"application/edn",inst_37004);var inst_37006 = cljs.core.async.put_BANG_.call(null,channel,inst_37005);var inst_37007 = cljs.core.async.close_BANG_.call(null,channel);var state_37009__$1 = (function (){var statearr_37011 = state_37009;(statearr_37011[7] = inst_37006);
return statearr_37011;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37009__$1,inst_37007);
} else
{if((state_val_37010 === 1))
{var inst_37001 = client.call(null,request);var state_37009__$1 = state_37009;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37009__$1,2,inst_37001);
} else
{return null;
}
}
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_37015 = [null,null,null,null,null,null,null,null];(statearr_37015[0] = state_machine__22127__auto__);
(statearr_37015[1] = 1);
return statearr_37015;
});
var state_machine__22127__auto____1 = (function (state_37009){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_37009);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e37016){if((e37016 instanceof Object))
{var ex__22130__auto__ = e37016;var statearr_37017_37020 = state_37009;(statearr_37017_37020[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37009);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37016;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37021 = state_37009;
state_37009 = G__37021;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_37009){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_37009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_37018 = f__22202__auto__.call(null);(statearr_37018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___37019);
return statearr_37018;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
}));
return channel;
});
});
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_accept = (function() { 
var wrap_accept__delegate = function (client,p__37022){var vec__37024 = p__37022;var accept = cljs.core.nth.call(null,vec__37024,0,null);return (function (request){var temp__4124__auto__ = (function (){var or__14982__auto__ = new cljs.core.Keyword(null,"accept","accept",3885410426).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__14982__auto__))
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
var p__37022 = null;if (arguments.length > 1) {
  p__37022 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_accept__delegate.call(this,client,p__37022);};
wrap_accept.cljs$lang$maxFixedArity = 1;
wrap_accept.cljs$lang$applyTo = (function (arglist__37025){
var client = cljs.core.first(arglist__37025);
var p__37022 = cljs.core.rest(arglist__37025);
return wrap_accept__delegate(client,p__37022);
});
wrap_accept.cljs$core$IFn$_invoke$arity$variadic = wrap_accept__delegate;
return wrap_accept;
})()
;
/**
* @param {...*} var_args
*/
cljs_http.client.wrap_content_type = (function() { 
var wrap_content_type__delegate = function (client,p__37026){var vec__37028 = p__37026;var content_type = cljs.core.nth.call(null,vec__37028,0,null);return (function (request){var temp__4124__auto__ = (function (){var or__14982__auto__ = new cljs.core.Keyword(null,"content-type","content-type",1799574400).cljs$core$IFn$_invoke$arity$1(request);if(cljs.core.truth_(or__14982__auto__))
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
var p__37026 = null;if (arguments.length > 1) {
  p__37026 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_content_type__delegate.call(this,client,p__37026);};
wrap_content_type.cljs$lang$maxFixedArity = 1;
wrap_content_type.cljs$lang$applyTo = (function (arglist__37029){
var client = cljs.core.first(arglist__37029);
var p__37026 = cljs.core.rest(arglist__37029);
return wrap_content_type__delegate(client,p__37026);
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
cljs_http.client.wrap_json_response = (function wrap_json_response(client){return (function (request){var channel = cljs.core.async.chan.call(null);var c__22201__auto___37066 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_37056){var state_val_37057 = (state_37056[1]);if((state_val_37057 === 2))
{var inst_37050 = (state_37056[2]);var inst_37051 = new cljs.core.Keyword(null,"request-method","request-method",1993477457).cljs$core$IFn$_invoke$arity$1(request);var inst_37052 = cljs_http.client.decode_body.call(null,inst_37050,cljs_http.util.json_decode,"application/json",inst_37051);var inst_37053 = cljs.core.async.put_BANG_.call(null,channel,inst_37052);var inst_37054 = cljs.core.async.close_BANG_.call(null,channel);var state_37056__$1 = (function (){var statearr_37058 = state_37056;(statearr_37058[7] = inst_37053);
return statearr_37058;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37056__$1,inst_37054);
} else
{if((state_val_37057 === 1))
{var inst_37048 = client.call(null,request);var state_37056__$1 = state_37056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37056__$1,2,inst_37048);
} else
{return null;
}
}
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_37062 = [null,null,null,null,null,null,null,null];(statearr_37062[0] = state_machine__22127__auto__);
(statearr_37062[1] = 1);
return statearr_37062;
});
var state_machine__22127__auto____1 = (function (state_37056){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_37056);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e37063){if((e37063 instanceof Object))
{var ex__22130__auto__ = e37063;var statearr_37064_37067 = state_37056;(statearr_37064_37067[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37056);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37068 = state_37056;
state_37056 = G__37068;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_37056){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_37056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_37065 = f__22202__auto__.call(null);(statearr_37065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___37066);
return statearr_37065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
}));
return channel;
});
});
cljs_http.client.wrap_query_params = (function wrap_query_params(client){return (function (p__37071){var map__37072 = p__37071;var map__37072__$1 = ((cljs.core.seq_QMARK_.call(null,map__37072))?cljs.core.apply.call(null,cljs.core.hash_map,map__37072):map__37072);var req = map__37072__$1;var query_params = cljs.core.get.call(null,map__37072__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));if(cljs.core.truth_(query_params))
{return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",1080249757)),new cljs.core.Keyword(null,"query-string","query-string",1183691816),cljs_http.client.generate_query_string.call(null,query_params)));
} else
{return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function wrap_form_params(client){return (function (p__37075){var map__37076 = p__37075;var map__37076__$1 = ((cljs.core.seq_QMARK_.call(null,map__37076))?cljs.core.apply.call(null,cljs.core.hash_map,map__37076):map__37076);var request = map__37076__$1;var request_method = cljs.core.get.call(null,map__37076__$1,new cljs.core.Keyword(null,"request-method","request-method",1993477457));var form_params = cljs.core.get.call(null,map__37076__$1,new cljs.core.Keyword(null,"form-params","form-params",3454215713));if(cljs.core.truth_((function (){var and__14970__auto__ = form_params;if(cljs.core.truth_(and__14970__auto__))
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
cljs_http.client.wrap_server_name = (function wrap_server_name(client,server_name){return (function (p1__37077_SHARP_){return client.call(null,cljs.core.assoc.call(null,p1__37077_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",4503925319),server_name));
});
});
cljs_http.client.wrap_url = (function wrap_url(client){return (function (p__37081){var map__37082 = p__37081;var map__37082__$1 = ((cljs.core.seq_QMARK_.call(null,map__37082))?cljs.core.apply.call(null,cljs.core.hash_map,map__37082):map__37082);var req = map__37082__$1;var query_params = cljs.core.get.call(null,map__37082__$1,new cljs.core.Keyword(null,"query-params","query-params",1080249757));var temp__4124__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",1014020321).cljs$core$IFn$_invoke$arity$1(req));if(cljs.core.truth_(temp__4124__auto__))
{var spec = temp__4124__auto__;return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",1014020321)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",1080249757)], null),(function (p1__37078_SHARP_){return cljs.core.merge.call(null,p1__37078_SHARP_,query_params);
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
var wrap_basic_auth__delegate = function (client,p__37083){var vec__37085 = p__37083;var credentials = cljs.core.nth.call(null,vec__37085,0,null);return (function (req){var credentials__$1 = (function (){var or__14982__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",4138175321).cljs$core$IFn$_invoke$arity$1(req);if(cljs.core.truth_(or__14982__auto__))
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
var p__37083 = null;if (arguments.length > 1) {
  p__37083 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return wrap_basic_auth__delegate.call(this,client,p__37083);};
wrap_basic_auth.cljs$lang$maxFixedArity = 1;
wrap_basic_auth.cljs$lang$applyTo = (function (arglist__37086){
var client = cljs.core.first(arglist__37086);
var p__37083 = cljs.core.rest(arglist__37086);
return wrap_basic_auth__delegate(client,p__37083);
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
var delete$__delegate = function (url,p__37087){var vec__37089 = p__37087;var req = cljs.core.nth.call(null,vec__37089,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"delete","delete",3973413149),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var delete$ = function (url,var_args){
var p__37087 = null;if (arguments.length > 1) {
  p__37087 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return delete$__delegate.call(this,url,p__37087);};
delete$.cljs$lang$maxFixedArity = 1;
delete$.cljs$lang$applyTo = (function (arglist__37090){
var url = cljs.core.first(arglist__37090);
var p__37087 = cljs.core.rest(arglist__37090);
return delete$__delegate(url,p__37087);
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
var get__delegate = function (url,p__37091){var vec__37093 = p__37091;var req = cljs.core.nth.call(null,vec__37093,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"get","get",1014006472),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var get = function (url,var_args){
var p__37091 = null;if (arguments.length > 1) {
  p__37091 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return get__delegate.call(this,url,p__37091);};
get.cljs$lang$maxFixedArity = 1;
get.cljs$lang$applyTo = (function (arglist__37094){
var url = cljs.core.first(arglist__37094);
var p__37091 = cljs.core.rest(arglist__37094);
return get__delegate(url,p__37091);
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
var head__delegate = function (url,p__37095){var vec__37097 = p__37095;var req = cljs.core.nth.call(null,vec__37097,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"head","head",1017102674),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var head = function (url,var_args){
var p__37095 = null;if (arguments.length > 1) {
  p__37095 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return head__delegate.call(this,url,p__37095);};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = (function (arglist__37098){
var url = cljs.core.first(arglist__37098);
var p__37095 = cljs.core.rest(arglist__37098);
return head__delegate(url,p__37095);
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
var move__delegate = function (url,p__37099){var vec__37101 = p__37099;var req = cljs.core.nth.call(null,vec__37101,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"move","move",1017261891),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var move = function (url,var_args){
var p__37099 = null;if (arguments.length > 1) {
  p__37099 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return move__delegate.call(this,url,p__37099);};
move.cljs$lang$maxFixedArity = 1;
move.cljs$lang$applyTo = (function (arglist__37102){
var url = cljs.core.first(arglist__37102);
var p__37099 = cljs.core.rest(arglist__37102);
return move__delegate(url,p__37099);
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
var options__delegate = function (url,p__37103){var vec__37105 = p__37103;var req = cljs.core.nth.call(null,vec__37105,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"options","options",4059396624),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var options = function (url,var_args){
var p__37103 = null;if (arguments.length > 1) {
  p__37103 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return options__delegate.call(this,url,p__37103);};
options.cljs$lang$maxFixedArity = 1;
options.cljs$lang$applyTo = (function (arglist__37106){
var url = cljs.core.first(arglist__37106);
var p__37103 = cljs.core.rest(arglist__37106);
return options__delegate(url,p__37103);
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
var patch__delegate = function (url,p__37107){var vec__37109 = p__37107;var req = cljs.core.nth.call(null,vec__37109,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"patch","patch",1120342970),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var patch = function (url,var_args){
var p__37107 = null;if (arguments.length > 1) {
  p__37107 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return patch__delegate.call(this,url,p__37107);};
patch.cljs$lang$maxFixedArity = 1;
patch.cljs$lang$applyTo = (function (arglist__37110){
var url = cljs.core.first(arglist__37110);
var p__37107 = cljs.core.rest(arglist__37110);
return patch__delegate(url,p__37107);
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
var post__delegate = function (url,p__37111){var vec__37113 = p__37111;var req = cljs.core.nth.call(null,vec__37113,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"post","post",1017351186),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var post = function (url,var_args){
var p__37111 = null;if (arguments.length > 1) {
  p__37111 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return post__delegate.call(this,url,p__37111);};
post.cljs$lang$maxFixedArity = 1;
post.cljs$lang$applyTo = (function (arglist__37114){
var url = cljs.core.first(arglist__37114);
var p__37111 = cljs.core.rest(arglist__37114);
return post__delegate(url,p__37111);
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
var put__delegate = function (url,p__37115){var vec__37117 = p__37115;var req = cljs.core.nth.call(null,vec__37117,0,null);return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),new cljs.core.Keyword(null,"put","put",1014015617),new cljs.core.Keyword(null,"url","url",1014020321),url], null)));
};
var put = function (url,var_args){
var p__37115 = null;if (arguments.length > 1) {
  p__37115 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return put__delegate.call(this,url,p__37115);};
put.cljs$lang$maxFixedArity = 1;
put.cljs$lang$applyTo = (function (arglist__37118){
var url = cljs.core.first(arglist__37118);
var p__37115 = cljs.core.rest(arglist__37118);
return put__delegate(url,p__37115);
});
put.cljs$core$IFn$_invoke$arity$variadic = put__delegate;
return put;
})()
;

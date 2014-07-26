// Compiled by ClojureScript 0.0-2156
goog.provide('demo_app.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('clojure.data');
goog.require('clojure.browser.repl');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
demo_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contacts","contacts",4741419973),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",1111344674),"Ben",new cljs.core.Keyword(null,"last","last",1017218568),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1110523662),"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",1111344674),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),"P",new cljs.core.Keyword(null,"last","last",1017218568),"Hacker",new cljs.core.Keyword(null,"email","email",1110523662),"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",1111344674),"Eva",new cljs.core.Keyword(null,"middle","middle",4234530055),"Lu",new cljs.core.Keyword(null,"last","last",1017218568),"Ator",new cljs.core.Keyword(null,"email","email",1110523662),"eval@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",1111344674),"Louis",new cljs.core.Keyword(null,"last","last",1017218568),"Reasoner",new cljs.core.Keyword(null,"email","email",1110523662),"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",1111344674),"Cy",new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),"D",new cljs.core.Keyword(null,"last","last",1017218568),"Effect",new cljs.core.Keyword(null,"email","email",1110523662),"bugs@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",1111344674),"Lem",new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),"E",new cljs.core.Keyword(null,"last","last",1017218568),"Tweakit",new cljs.core.Keyword(null,"email","email",1110523662),"morebugs@mit.edu"], null)], null)], null));
demo_app.core.parse_contact = (function parse_contact(contact_str){var vec__26177 = clojure.string.split.call(null,contact_str,/\s+/);var first = cljs.core.nth.call(null,vec__26177,0,null);var middle = cljs.core.nth.call(null,vec__26177,1,null);var last = cljs.core.nth.call(null,vec__26177,2,null);var parts = vec__26177;var vec__26178 = (((last == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,middle], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last,middle], null));var first__$1 = cljs.core.nth.call(null,vec__26178,0,null);var last__$1 = cljs.core.nth.call(null,vec__26178,1,null);var middle__$1 = cljs.core.nth.call(null,vec__26178,2,null);var middle__$2 = (cljs.core.truth_(middle__$1)?clojure.string.replace.call(null,middle__$1,".",""):null);var c = (cljs.core.truth_(middle__$2)?cljs.core.count.call(null,middle__$2):0);if((cljs.core.count.call(null,parts) >= 2))
{var G__26179 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",1111344674),first__$1,new cljs.core.Keyword(null,"last","last",1017218568),last__$1], null);var G__26179__$1 = (((c === 1))?cljs.core.assoc.call(null,G__26179,new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),middle__$2):G__26179);var G__26179__$2 = (((c >= 2))?cljs.core.assoc.call(null,G__26179__$1,new cljs.core.Keyword(null,"middle","middle",4234530055),middle__$2):G__26179__$1);return G__26179__$2;
} else
{return null;
}
});
demo_app.core.add_contact = (function add_contact(app,owner){var new_contact = demo_app.core.parse_contact.call(null,om.core.get_node.call(null,owner,"new-contact").value);if(cljs.core.truth_(new_contact))
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"contacts","contacts",4741419973),(function (p1__26180_SHARP_){return cljs.core.conj.call(null,p1__26180_SHARP_,new_contact);
}));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),"");
} else
{return null;
}
});
demo_app.core.middle_name = (function middle_name(p__26181){var map__26183 = p__26181;var map__26183__$1 = ((cljs.core.seq_QMARK_.call(null,map__26183))?cljs.core.apply.call(null,cljs.core.hash_map,map__26183):map__26183);var middle_initial = cljs.core.get.call(null,map__26183__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286));var middle = cljs.core.get.call(null,map__26183__$1,new cljs.core.Keyword(null,"middle","middle",4234530055));if(cljs.core.truth_(middle))
{return [cljs.core.str(" "),cljs.core.str(middle)].join('');
} else
{if(cljs.core.truth_(middle_initial))
{return [cljs.core.str(" "),cljs.core.str(middle_initial),cljs.core.str(".")].join('');
} else
{return null;
}
}
});
demo_app.core.display_name = (function display_name(p__26184){var map__26186 = p__26184;var map__26186__$1 = ((cljs.core.seq_QMARK_.call(null,map__26186))?cljs.core.apply.call(null,cljs.core.hash_map,map__26186):map__26186);var contact = map__26186__$1;var last = cljs.core.get.call(null,map__26186__$1,new cljs.core.Keyword(null,"last","last",1017218568));var first = cljs.core.get.call(null,map__26186__$1,new cljs.core.Keyword(null,"first","first",1111344674));return [cljs.core.str(last),cljs.core.str(", "),cljs.core.str(first),cljs.core.str(demo_app.core.middle_name.call(null,contact))].join('');
});
demo_app.core.handle_change = (function handle_change(e,owner,p__26187){var map__26189 = p__26187;var map__26189__$1 = ((cljs.core.seq_QMARK_.call(null,map__26189))?cljs.core.apply.call(null,cljs.core.hash_map,map__26189):map__26189);var text = cljs.core.get.call(null,map__26189__$1,new cljs.core.Keyword(null,"text","text",1017460895));var value = e.target.value;var has_num = cljs.core.re_find.call(null,/\d+/,value);if(cljs.core.not.call(null,has_num))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),value);
} else
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),text);
}
});
demo_app.core.contact_view = (function contact_view(contact,owner){if(typeof demo_app.core.t26195 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.core.t26195 = (function (owner,contact,contact_view,meta26196){
this.owner = owner;
this.contact = contact;
this.contact_view = contact_view;
this.meta26196 = meta26196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.core.t26195.cljs$lang$type = true;
demo_app.core.t26195.cljs$lang$ctorStr = "demo-app.core/t26195";
demo_app.core.t26195.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"demo-app.core/t26195");
});
demo_app.core.t26195.prototype.om$core$IRenderState$ = true;
demo_app.core.t26195.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__26198){var self__ = this;
var map__26199 = p__26198;var map__26199__$1 = ((cljs.core.seq_QMARK_.call(null,map__26199))?cljs.core.apply.call(null,cljs.core.hash_map,map__26199):map__26199);var delete$ = cljs.core.get.call(null,map__26199__$1,new cljs.core.Keyword(null,"delete","delete",3973413149));var this$__$1 = this;return React.DOM.li(null,React.DOM.span(null,demo_app.core.display_name.call(null,self__.contact)),React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,delete$,cljs.core.deref.call(null,self__.contact));
})},"Delete"));
});
demo_app.core.t26195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26197){var self__ = this;
var _26197__$1 = this;return self__.meta26196;
});
demo_app.core.t26195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26197,meta26196__$1){var self__ = this;
var _26197__$1 = this;return (new demo_app.core.t26195(self__.owner,self__.contact,self__.contact_view,meta26196__$1));
});
demo_app.core.__GT_t26195 = (function __GT_t26195(owner__$1,contact__$1,contact_view__$1,meta26196){return (new demo_app.core.t26195(owner__$1,contact__$1,contact_view__$1,meta26196));
});
}
return (new demo_app.core.t26195(owner,contact,contact_view,null));
});
demo_app.core.contacts_view = (function contacts_view(app,owner){if(typeof demo_app.core.t26226 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.core.t26226 = (function (owner,app,contacts_view,meta26227){
this.owner = owner;
this.app = app;
this.contacts_view = contacts_view;
this.meta26227 = meta26227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.core.t26226.cljs$lang$type = true;
demo_app.core.t26226.cljs$lang$ctorStr = "demo-app.core/t26226";
demo_app.core.t26226.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"demo-app.core/t26226");
});
demo_app.core.t26226.prototype.om$core$IRenderState$ = true;
demo_app.core.t26226.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Contacts list"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,demo_app.core.contact_view,new cljs.core.Keyword(null,"contacts","contacts",4741419973).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),state], null))),React.DOM.div(null,om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(state), "ref": "new-contact", "onChange": (function (p1__26201_SHARP_){return demo_app.core.handle_change.call(null,p1__26201_SHARP_,self__.owner,state);
}), "type": "text"}),React.DOM.button({"onClick": (function (){return demo_app.core.add_contact.call(null,self__.app,self__.owner);
})},"Add contact")));
});
demo_app.core.t26226.prototype.om$core$IWillMount$ = true;
demo_app.core.t26226.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",3973413149));var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_26238){var state_val_26239 = (state_26238[1]);if((state_val_26239 === 4))
{var inst_26231 = (state_26238[2]);var inst_26232 = (function (){var contact = inst_26231;return ((function (contact,inst_26231,state_val_26239){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (contact,inst_26231,state_val_26239){
return (function (p1__26200_SHARP_){return cljs.core._EQ_.call(null,contact,p1__26200_SHARP_);
});})(contact,inst_26231,state_val_26239))
,xs));
});
;})(contact,inst_26231,state_val_26239))
})();var inst_26233 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"contacts","contacts",4741419973),inst_26232);var state_26238__$1 = (function (){var statearr_26240 = state_26238;(statearr_26240[7] = inst_26233);
return statearr_26240;
})();var statearr_26241_26250 = state_26238__$1;(statearr_26241_26250[2] = null);
(statearr_26241_26250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26239 === 3))
{var inst_26236 = (state_26238[2]);var state_26238__$1 = state_26238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26238__$1,inst_26236);
} else
{if((state_val_26239 === 2))
{var state_26238__$1 = state_26238;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26238__$1,4,delete$);
} else
{if((state_val_26239 === 1))
{var state_26238__$1 = state_26238;var statearr_26242_26251 = state_26238__$1;(statearr_26242_26251[2] = null);
(statearr_26242_26251[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_26246 = [null,null,null,null,null,null,null,null];(statearr_26246[0] = state_machine__22127__auto__);
(statearr_26246[1] = 1);
return statearr_26246;
});
var state_machine__22127__auto____1 = (function (state_26238){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_26238);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e26247){if((e26247 instanceof Object))
{var ex__22130__auto__ = e26247;var statearr_26248_26252 = state_26238;(statearr_26248_26252[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26238);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26247;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26253 = state_26238;
state_26238 = G__26253;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_26238){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_26238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_26249 = f__22202__auto__.call(null);(statearr_26249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_26249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
}));
return c__22201__auto__;
});
demo_app.core.t26226.prototype.om$core$IInitState$ = true;
demo_app.core.t26226.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delete","delete",3973413149),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"text","text",1017460895),""], null);
});
demo_app.core.t26226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26228){var self__ = this;
var _26228__$1 = this;return self__.meta26227;
});
demo_app.core.t26226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26228,meta26227__$1){var self__ = this;
var _26228__$1 = this;return (new demo_app.core.t26226(self__.owner,self__.app,self__.contacts_view,meta26227__$1));
});
demo_app.core.__GT_t26226 = (function __GT_t26226(owner__$1,app__$1,contacts_view__$1,meta26227){return (new demo_app.core.t26226(owner__$1,app__$1,contacts_view__$1,meta26227));
});
}
return (new demo_app.core.t26226(owner,app,contacts_view,null));
});
om.core.root.call(null,demo_app.core.contacts_view,demo_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app0")], null));
var c__22201__auto___26276 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_26266){var state_val_26267 = (state_26266[1]);if((state_val_26267 === 2))
{var inst_26259 = (state_26266[2]);var inst_26260 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_26259);var inst_26261 = cljs.core.prn.call(null,inst_26260);var inst_26262 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_26259);var inst_26263 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",1117053659),inst_26262);var inst_26264 = cljs.core.prn.call(null,inst_26263);var state_26266__$1 = (function (){var statearr_26268 = state_26266;(statearr_26268[7] = inst_26261);
return statearr_26268;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26266__$1,inst_26264);
} else
{if((state_val_26267 === 1))
{var inst_26254 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380)];var inst_26255 = [false];var inst_26256 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_26254,inst_26255);var inst_26257 = cljs_http.client.get.call(null,"https://api.github.com/users",inst_26256);var state_26266__$1 = state_26266;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26266__$1,2,inst_26257);
} else
{return null;
}
}
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_26272 = [null,null,null,null,null,null,null,null];(statearr_26272[0] = state_machine__22127__auto__);
(statearr_26272[1] = 1);
return statearr_26272;
});
var state_machine__22127__auto____1 = (function (state_26266){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_26266);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e26273){if((e26273 instanceof Object))
{var ex__22130__auto__ = e26273;var statearr_26274_26277 = state_26266;(statearr_26274_26277[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26266);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26273;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26278 = state_26266;
state_26266 = G__26278;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_26266){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_26266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_26275 = f__22202__auto__.call(null);(statearr_26275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___26276);
return statearr_26275;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
}));

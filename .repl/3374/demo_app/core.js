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
demo_app.core.parse_contact = (function parse_contact(contact_str){var vec__41485 = clojure.string.split.call(null,contact_str,/\s+/);var first = cljs.core.nth.call(null,vec__41485,0,null);var middle = cljs.core.nth.call(null,vec__41485,1,null);var last = cljs.core.nth.call(null,vec__41485,2,null);var parts = vec__41485;var vec__41486 = (((last == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,middle], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last,middle], null));var first__$1 = cljs.core.nth.call(null,vec__41486,0,null);var last__$1 = cljs.core.nth.call(null,vec__41486,1,null);var middle__$1 = cljs.core.nth.call(null,vec__41486,2,null);var middle__$2 = (cljs.core.truth_(middle__$1)?clojure.string.replace.call(null,middle__$1,".",""):null);var c = (cljs.core.truth_(middle__$2)?cljs.core.count.call(null,middle__$2):0);if((cljs.core.count.call(null,parts) >= 2))
{var G__41487 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",1111344674),first__$1,new cljs.core.Keyword(null,"last","last",1017218568),last__$1], null);var G__41487__$1 = (((c === 1))?cljs.core.assoc.call(null,G__41487,new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),middle__$2):G__41487);var G__41487__$2 = (((c >= 2))?cljs.core.assoc.call(null,G__41487__$1,new cljs.core.Keyword(null,"middle","middle",4234530055),middle__$2):G__41487__$1);return G__41487__$2;
} else
{return null;
}
});
demo_app.core.add_contact = (function add_contact(app,owner){var new_contact = demo_app.core.parse_contact.call(null,om.core.get_node.call(null,owner,"new-contact").value);if(cljs.core.truth_(new_contact))
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"contacts","contacts",4741419973),(function (p1__41488_SHARP_){return cljs.core.conj.call(null,p1__41488_SHARP_,new_contact);
}));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),"");
} else
{return null;
}
});
demo_app.core.middle_name = (function middle_name(p__41489){var map__41491 = p__41489;var map__41491__$1 = ((cljs.core.seq_QMARK_.call(null,map__41491))?cljs.core.apply.call(null,cljs.core.hash_map,map__41491):map__41491);var middle_initial = cljs.core.get.call(null,map__41491__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286));var middle = cljs.core.get.call(null,map__41491__$1,new cljs.core.Keyword(null,"middle","middle",4234530055));if(cljs.core.truth_(middle))
{return [cljs.core.str(" "),cljs.core.str(middle)].join('');
} else
{if(cljs.core.truth_(middle_initial))
{return [cljs.core.str(" "),cljs.core.str(middle_initial),cljs.core.str(".")].join('');
} else
{return null;
}
}
});
demo_app.core.display_name = (function display_name(p__41492){var map__41494 = p__41492;var map__41494__$1 = ((cljs.core.seq_QMARK_.call(null,map__41494))?cljs.core.apply.call(null,cljs.core.hash_map,map__41494):map__41494);var contact = map__41494__$1;var last = cljs.core.get.call(null,map__41494__$1,new cljs.core.Keyword(null,"last","last",1017218568));var first = cljs.core.get.call(null,map__41494__$1,new cljs.core.Keyword(null,"first","first",1111344674));return [cljs.core.str(last),cljs.core.str(", "),cljs.core.str(first),cljs.core.str(demo_app.core.middle_name.call(null,contact))].join('');
});
demo_app.core.handle_change = (function handle_change(e,owner,p__41495){var map__41497 = p__41495;var map__41497__$1 = ((cljs.core.seq_QMARK_.call(null,map__41497))?cljs.core.apply.call(null,cljs.core.hash_map,map__41497):map__41497);var text = cljs.core.get.call(null,map__41497__$1,new cljs.core.Keyword(null,"text","text",1017460895));var value = e.target.value;var has_num = cljs.core.re_find.call(null,/\d+/,value);if(cljs.core.not.call(null,has_num))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),value);
} else
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),text);
}
});
demo_app.core.contact_view = (function contact_view(contact,owner){if(typeof demo_app.core.t41503 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.core.t41503 = (function (owner,contact,contact_view,meta41504){
this.owner = owner;
this.contact = contact;
this.contact_view = contact_view;
this.meta41504 = meta41504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.core.t41503.cljs$lang$type = true;
demo_app.core.t41503.cljs$lang$ctorStr = "demo-app.core/t41503";
demo_app.core.t41503.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"demo-app.core/t41503");
});
demo_app.core.t41503.prototype.om$core$IRenderState$ = true;
demo_app.core.t41503.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__41506){var self__ = this;
var map__41507 = p__41506;var map__41507__$1 = ((cljs.core.seq_QMARK_.call(null,map__41507))?cljs.core.apply.call(null,cljs.core.hash_map,map__41507):map__41507);var delete$ = cljs.core.get.call(null,map__41507__$1,new cljs.core.Keyword(null,"delete","delete",3973413149));var this$__$1 = this;return React.DOM.li(null,React.DOM.span(null,demo_app.core.display_name.call(null,self__.contact)),React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,delete$,cljs.core.deref.call(null,self__.contact));
})},"Delete"));
});
demo_app.core.t41503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41505){var self__ = this;
var _41505__$1 = this;return self__.meta41504;
});
demo_app.core.t41503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41505,meta41504__$1){var self__ = this;
var _41505__$1 = this;return (new demo_app.core.t41503(self__.owner,self__.contact,self__.contact_view,meta41504__$1));
});
demo_app.core.__GT_t41503 = (function __GT_t41503(owner__$1,contact__$1,contact_view__$1,meta41504){return (new demo_app.core.t41503(owner__$1,contact__$1,contact_view__$1,meta41504));
});
}
return (new demo_app.core.t41503(owner,contact,contact_view,null));
});
demo_app.core.contacts_view = (function contacts_view(app,owner){if(typeof demo_app.core.t41534 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.core.t41534 = (function (owner,app,contacts_view,meta41535){
this.owner = owner;
this.app = app;
this.contacts_view = contacts_view;
this.meta41535 = meta41535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.core.t41534.cljs$lang$type = true;
demo_app.core.t41534.cljs$lang$ctorStr = "demo-app.core/t41534";
demo_app.core.t41534.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"demo-app.core/t41534");
});
demo_app.core.t41534.prototype.om$core$IRenderState$ = true;
demo_app.core.t41534.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Contacts list"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,demo_app.core.contact_view,new cljs.core.Keyword(null,"contacts","contacts",4741419973).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),state], null))),React.DOM.div(null,om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(state), "ref": "new-contact", "onChange": (function (p1__41509_SHARP_){return demo_app.core.handle_change.call(null,p1__41509_SHARP_,self__.owner,state);
}), "type": "text"}),React.DOM.button({"onClick": (function (){return demo_app.core.add_contact.call(null,self__.app,self__.owner);
})},"Add contact")));
});
demo_app.core.t41534.prototype.om$core$IWillMount$ = true;
demo_app.core.t41534.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",3973413149));var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_41546){var state_val_41547 = (state_41546[1]);if((state_val_41547 === 4))
{var inst_41539 = (state_41546[2]);var inst_41540 = (function (){var contact = inst_41539;return ((function (contact,inst_41539,state_val_41547){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (contact,inst_41539,state_val_41547){
return (function (p1__41508_SHARP_){return cljs.core._EQ_.call(null,contact,p1__41508_SHARP_);
});})(contact,inst_41539,state_val_41547))
,xs));
});
;})(contact,inst_41539,state_val_41547))
})();var inst_41541 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"contacts","contacts",4741419973),inst_41540);var state_41546__$1 = (function (){var statearr_41548 = state_41546;(statearr_41548[7] = inst_41541);
return statearr_41548;
})();var statearr_41549_41558 = state_41546__$1;(statearr_41549_41558[2] = null);
(statearr_41549_41558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41547 === 3))
{var inst_41544 = (state_41546[2]);var state_41546__$1 = state_41546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41546__$1,inst_41544);
} else
{if((state_val_41547 === 2))
{var state_41546__$1 = state_41546;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41546__$1,4,delete$);
} else
{if((state_val_41547 === 1))
{var state_41546__$1 = state_41546;var statearr_41550_41559 = state_41546__$1;(statearr_41550_41559[2] = null);
(statearr_41550_41559[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_41554 = [null,null,null,null,null,null,null,null];(statearr_41554[0] = state_machine__22127__auto__);
(statearr_41554[1] = 1);
return statearr_41554;
});
var state_machine__22127__auto____1 = (function (state_41546){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_41546);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e41555){if((e41555 instanceof Object))
{var ex__22130__auto__ = e41555;var statearr_41556_41560 = state_41546;(statearr_41556_41560[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41546);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41555;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41561 = state_41546;
state_41546 = G__41561;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_41546){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_41546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_41557 = f__22202__auto__.call(null);(statearr_41557[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_41557;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
}));
return c__22201__auto__;
});
demo_app.core.t41534.prototype.om$core$IInitState$ = true;
demo_app.core.t41534.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delete","delete",3973413149),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"text","text",1017460895),""], null);
});
demo_app.core.t41534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41536){var self__ = this;
var _41536__$1 = this;return self__.meta41535;
});
demo_app.core.t41534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41536,meta41535__$1){var self__ = this;
var _41536__$1 = this;return (new demo_app.core.t41534(self__.owner,self__.app,self__.contacts_view,meta41535__$1));
});
demo_app.core.__GT_t41534 = (function __GT_t41534(owner__$1,app__$1,contacts_view__$1,meta41535){return (new demo_app.core.t41534(owner__$1,app__$1,contacts_view__$1,meta41535));
});
}
return (new demo_app.core.t41534(owner,app,contacts_view,null));
});
om.core.root.call(null,demo_app.core.contacts_view,demo_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app0")], null));
var c__22201__auto___41584 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_41574){var state_val_41575 = (state_41574[1]);if((state_val_41575 === 2))
{var inst_41567 = (state_41574[2]);var inst_41568 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_41567);var inst_41569 = cljs.core.prn.call(null,inst_41568);var inst_41570 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_41567);var inst_41571 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",1117053659),inst_41570);var inst_41572 = cljs.core.prn.call(null,inst_41571);var state_41574__$1 = (function (){var statearr_41576 = state_41574;(statearr_41576[7] = inst_41569);
return statearr_41576;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41574__$1,inst_41572);
} else
{if((state_val_41575 === 1))
{var inst_41562 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380)];var inst_41563 = [false];var inst_41564 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_41562,inst_41563);var inst_41565 = cljs_http.client.get.call(null,"https://api.github.com/users",inst_41564);var state_41574__$1 = state_41574;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41574__$1,2,inst_41565);
} else
{return null;
}
}
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_41580 = [null,null,null,null,null,null,null,null];(statearr_41580[0] = state_machine__22127__auto__);
(statearr_41580[1] = 1);
return statearr_41580;
});
var state_machine__22127__auto____1 = (function (state_41574){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_41574);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e41581){if((e41581 instanceof Object))
{var ex__22130__auto__ = e41581;var statearr_41582_41585 = state_41574;(statearr_41582_41585[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41574);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41586 = state_41574;
state_41574 = G__41586;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_41574){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_41574);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_41583 = f__22202__auto__.call(null);(statearr_41583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___41584);
return statearr_41583;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
}));

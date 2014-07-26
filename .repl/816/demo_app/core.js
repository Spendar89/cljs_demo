// Compiled by ClojureScript 0.0-2156
goog.provide('demo_app.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om.dom');
goog.require('clojure.data');
goog.require('clojure.browser.repl');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.reader');
goog.require('cljs.reader');
cljs.core.enable_console_print_BANG_.call(null);
demo_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"contacts","contacts",4741419973),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",1111344674),"Ben",new cljs.core.Keyword(null,"last","last",1017218568),"Bitdiddle",new cljs.core.Keyword(null,"email","email",1110523662),"benb@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",1111344674),"Alyssa",new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),"P",new cljs.core.Keyword(null,"last","last",1017218568),"Hacker",new cljs.core.Keyword(null,"email","email",1110523662),"aphacker@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",1111344674),"Eva",new cljs.core.Keyword(null,"middle","middle",4234530055),"Lu",new cljs.core.Keyword(null,"last","last",1017218568),"Ator",new cljs.core.Keyword(null,"email","email",1110523662),"eval@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"first","first",1111344674),"Louis",new cljs.core.Keyword(null,"last","last",1017218568),"Reasoner",new cljs.core.Keyword(null,"email","email",1110523662),"prolog@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",1111344674),"Cy",new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),"D",new cljs.core.Keyword(null,"last","last",1017218568),"Effect",new cljs.core.Keyword(null,"email","email",1110523662),"bugs@mit.edu"], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"first","first",1111344674),"Lem",new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),"E",new cljs.core.Keyword(null,"last","last",1017218568),"Tweakit",new cljs.core.Keyword(null,"email","email",1110523662),"morebugs@mit.edu"], null)], null)], null));
demo_app.core.parse_contact = (function parse_contact(contact_str){var vec__61076 = clojure.string.split.call(null,contact_str,/\s+/);var first = cljs.core.nth.call(null,vec__61076,0,null);var middle = cljs.core.nth.call(null,vec__61076,1,null);var last = cljs.core.nth.call(null,vec__61076,2,null);var parts = vec__61076;var vec__61077 = (((last == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,middle], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last,middle], null));var first__$1 = cljs.core.nth.call(null,vec__61077,0,null);var last__$1 = cljs.core.nth.call(null,vec__61077,1,null);var middle__$1 = cljs.core.nth.call(null,vec__61077,2,null);var middle__$2 = (cljs.core.truth_(middle__$1)?clojure.string.replace.call(null,middle__$1,".",""):null);var c = (cljs.core.truth_(middle__$2)?cljs.core.count.call(null,middle__$2):0);if((cljs.core.count.call(null,parts) >= 2))
{var G__61078 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",1111344674),first__$1,new cljs.core.Keyword(null,"last","last",1017218568),last__$1], null);var G__61078__$1 = (((c === 1))?cljs.core.assoc.call(null,G__61078,new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),middle__$2):G__61078);var G__61078__$2 = (((c >= 2))?cljs.core.assoc.call(null,G__61078__$1,new cljs.core.Keyword(null,"middle","middle",4234530055),middle__$2):G__61078__$1);return G__61078__$2;
} else
{return null;
}
});
demo_app.core.add_contact = (function add_contact(app,owner){var new_contact = demo_app.core.parse_contact.call(null,om.core.get_node.call(null,owner,"new-contact").value);if(cljs.core.truth_(new_contact))
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"contacts","contacts",4741419973),(function (p1__61079_SHARP_){return cljs.core.conj.call(null,p1__61079_SHARP_,new_contact);
}));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),"");
} else
{return null;
}
});
demo_app.core.middle_name = (function middle_name(p__61080){var map__61082 = p__61080;var map__61082__$1 = ((cljs.core.seq_QMARK_.call(null,map__61082))?cljs.core.apply.call(null,cljs.core.hash_map,map__61082):map__61082);var middle_initial = cljs.core.get.call(null,map__61082__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286));var middle = cljs.core.get.call(null,map__61082__$1,new cljs.core.Keyword(null,"middle","middle",4234530055));if(cljs.core.truth_(middle))
{return [cljs.core.str(" "),cljs.core.str(middle)].join('');
} else
{if(cljs.core.truth_(middle_initial))
{return [cljs.core.str(" "),cljs.core.str(middle_initial),cljs.core.str(".")].join('');
} else
{return null;
}
}
});
demo_app.core.display_name = (function display_name(p__61083){var map__61085 = p__61083;var map__61085__$1 = ((cljs.core.seq_QMARK_.call(null,map__61085))?cljs.core.apply.call(null,cljs.core.hash_map,map__61085):map__61085);var contact = map__61085__$1;var last = cljs.core.get.call(null,map__61085__$1,new cljs.core.Keyword(null,"last","last",1017218568));var first = cljs.core.get.call(null,map__61085__$1,new cljs.core.Keyword(null,"first","first",1111344674));return [cljs.core.str(last),cljs.core.str(", "),cljs.core.str(first),cljs.core.str(demo_app.core.middle_name.call(null,contact))].join('');
});
demo_app.core.handle_change = (function handle_change(e,owner,p__61086){var map__61088 = p__61086;var map__61088__$1 = ((cljs.core.seq_QMARK_.call(null,map__61088))?cljs.core.apply.call(null,cljs.core.hash_map,map__61088):map__61088);var text = cljs.core.get.call(null,map__61088__$1,new cljs.core.Keyword(null,"text","text",1017460895));var value = e.target.value;var has_num = cljs.core.re_find.call(null,/\d+/,value);if(cljs.core.not.call(null,has_num))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),value);
} else
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),text);
}
});
demo_app.core.contact_view = (function contact_view(contact,owner){if(typeof demo_app.core.t61094 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.core.t61094 = (function (owner,contact,contact_view,meta61095){
this.owner = owner;
this.contact = contact;
this.contact_view = contact_view;
this.meta61095 = meta61095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.core.t61094.cljs$lang$type = true;
demo_app.core.t61094.cljs$lang$ctorStr = "demo-app.core/t61094";
demo_app.core.t61094.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"demo-app.core/t61094");
});
demo_app.core.t61094.prototype.om$core$IRenderState$ = true;
demo_app.core.t61094.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__61097){var self__ = this;
var map__61098 = p__61097;var map__61098__$1 = ((cljs.core.seq_QMARK_.call(null,map__61098))?cljs.core.apply.call(null,cljs.core.hash_map,map__61098):map__61098);var delete$ = cljs.core.get.call(null,map__61098__$1,new cljs.core.Keyword(null,"delete","delete",3973413149));var this$__$1 = this;return React.DOM.li(null,React.DOM.span(null,demo_app.core.display_name.call(null,self__.contact)),React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,delete$,cljs.core.deref.call(null,self__.contact));
})},"Delete"));
});
demo_app.core.t61094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61096){var self__ = this;
var _61096__$1 = this;return self__.meta61095;
});
demo_app.core.t61094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61096,meta61095__$1){var self__ = this;
var _61096__$1 = this;return (new demo_app.core.t61094(self__.owner,self__.contact,self__.contact_view,meta61095__$1));
});
demo_app.core.__GT_t61094 = (function __GT_t61094(owner__$1,contact__$1,contact_view__$1,meta61095){return (new demo_app.core.t61094(owner__$1,contact__$1,contact_view__$1,meta61095));
});
}
return (new demo_app.core.t61094(owner,contact,contact_view,null));
});
demo_app.core.contacts_view = (function contacts_view(app,owner){if(typeof demo_app.core.t61125 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.core.t61125 = (function (owner,app,contacts_view,meta61126){
this.owner = owner;
this.app = app;
this.contacts_view = contacts_view;
this.meta61126 = meta61126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.core.t61125.cljs$lang$type = true;
demo_app.core.t61125.cljs$lang$ctorStr = "demo-app.core/t61125";
demo_app.core.t61125.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"demo-app.core/t61125");
});
demo_app.core.t61125.prototype.om$core$IRenderState$ = true;
demo_app.core.t61125.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Contacts list"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,demo_app.core.contact_view,new cljs.core.Keyword(null,"contacts","contacts",4741419973).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),state], null))),React.DOM.div(null,om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(state), "ref": "new-contact", "onChange": (function (p1__61100_SHARP_){return demo_app.core.handle_change.call(null,p1__61100_SHARP_,self__.owner,state);
}), "type": "text"}),React.DOM.button({"onClick": (function (){return demo_app.core.add_contact.call(null,self__.app,self__.owner);
})},"Add contact")));
});
demo_app.core.t61125.prototype.om$core$IWillMount$ = true;
demo_app.core.t61125.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",3973413149));var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_61137){var state_val_61138 = (state_61137[1]);if((state_val_61138 === 4))
{var inst_61130 = (state_61137[2]);var inst_61131 = (function (){var contact = inst_61130;return ((function (contact,inst_61130,state_val_61138){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (contact,inst_61130,state_val_61138){
return (function (p1__61099_SHARP_){return cljs.core._EQ_.call(null,contact,p1__61099_SHARP_);
});})(contact,inst_61130,state_val_61138))
,xs));
});
;})(contact,inst_61130,state_val_61138))
})();var inst_61132 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"contacts","contacts",4741419973),inst_61131);var state_61137__$1 = (function (){var statearr_61139 = state_61137;(statearr_61139[7] = inst_61132);
return statearr_61139;
})();var statearr_61140_61149 = state_61137__$1;(statearr_61140_61149[2] = null);
(statearr_61140_61149[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61138 === 3))
{var inst_61135 = (state_61137[2]);var state_61137__$1 = state_61137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61137__$1,inst_61135);
} else
{if((state_val_61138 === 2))
{var state_61137__$1 = state_61137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61137__$1,4,delete$);
} else
{if((state_val_61138 === 1))
{var state_61137__$1 = state_61137;var statearr_61141_61150 = state_61137__$1;(statearr_61141_61150[2] = null);
(statearr_61141_61150[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_61145 = [null,null,null,null,null,null,null,null];(statearr_61145[0] = state_machine__22127__auto__);
(statearr_61145[1] = 1);
return statearr_61145;
});
var state_machine__22127__auto____1 = (function (state_61137){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_61137);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e61146){if((e61146 instanceof Object))
{var ex__22130__auto__ = e61146;var statearr_61147_61151 = state_61137;(statearr_61147_61151[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61137);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e61146;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__61152 = state_61137;
state_61137 = G__61152;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_61137){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_61137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_61148 = f__22202__auto__.call(null);(statearr_61148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_61148;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
}));
return c__22201__auto__;
});
demo_app.core.t61125.prototype.om$core$IInitState$ = true;
demo_app.core.t61125.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delete","delete",3973413149),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"text","text",1017460895),""], null);
});
demo_app.core.t61125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61127){var self__ = this;
var _61127__$1 = this;return self__.meta61126;
});
demo_app.core.t61125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61127,meta61126__$1){var self__ = this;
var _61127__$1 = this;return (new demo_app.core.t61125(self__.owner,self__.app,self__.contacts_view,meta61126__$1));
});
demo_app.core.__GT_t61125 = (function __GT_t61125(owner__$1,app__$1,contacts_view__$1,meta61126){return (new demo_app.core.t61125(owner__$1,app__$1,contacts_view__$1,meta61126));
});
}
return (new demo_app.core.t61125(owner,app,contacts_view,null));
});
om.core.root.call(null,demo_app.core.contacts_view,demo_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app0")], null));

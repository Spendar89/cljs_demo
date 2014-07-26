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
demo_app.core.parse_contact = (function parse_contact(contact_str){var vec__33831 = clojure.string.split.call(null,contact_str,/\s+/);var first = cljs.core.nth.call(null,vec__33831,0,null);var middle = cljs.core.nth.call(null,vec__33831,1,null);var last = cljs.core.nth.call(null,vec__33831,2,null);var parts = vec__33831;var vec__33832 = (((last == null))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,middle], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [first,last,middle], null));var first__$1 = cljs.core.nth.call(null,vec__33832,0,null);var last__$1 = cljs.core.nth.call(null,vec__33832,1,null);var middle__$1 = cljs.core.nth.call(null,vec__33832,2,null);var middle__$2 = (cljs.core.truth_(middle__$1)?clojure.string.replace.call(null,middle__$1,".",""):null);var c = (cljs.core.truth_(middle__$2)?cljs.core.count.call(null,middle__$2):0);if((cljs.core.count.call(null,parts) >= 2))
{var G__33833 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"first","first",1111344674),first__$1,new cljs.core.Keyword(null,"last","last",1017218568),last__$1], null);var G__33833__$1 = (((c === 1))?cljs.core.assoc.call(null,G__33833,new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286),middle__$2):G__33833);var G__33833__$2 = (((c >= 2))?cljs.core.assoc.call(null,G__33833__$1,new cljs.core.Keyword(null,"middle","middle",4234530055),middle__$2):G__33833__$1);return G__33833__$2;
} else
{return null;
}
});
demo_app.core.add_contact = (function add_contact(app,owner){var new_contact = demo_app.core.parse_contact.call(null,om.core.get_node.call(null,owner,"new-contact").value);if(cljs.core.truth_(new_contact))
{om.core.transact_BANG_.call(null,app,new cljs.core.Keyword(null,"contacts","contacts",4741419973),(function (p1__33834_SHARP_){return cljs.core.conj.call(null,p1__33834_SHARP_,new_contact);
}));
return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),"");
} else
{return null;
}
});
demo_app.core.middle_name = (function middle_name(p__33835){var map__33837 = p__33835;var map__33837__$1 = ((cljs.core.seq_QMARK_.call(null,map__33837))?cljs.core.apply.call(null,cljs.core.hash_map,map__33837):map__33837);var middle_initial = cljs.core.get.call(null,map__33837__$1,new cljs.core.Keyword(null,"middle-initial","middle-initial",2869404286));var middle = cljs.core.get.call(null,map__33837__$1,new cljs.core.Keyword(null,"middle","middle",4234530055));if(cljs.core.truth_(middle))
{return [cljs.core.str(" "),cljs.core.str(middle)].join('');
} else
{if(cljs.core.truth_(middle_initial))
{return [cljs.core.str(" "),cljs.core.str(middle_initial),cljs.core.str(".")].join('');
} else
{return null;
}
}
});
demo_app.core.display_name = (function display_name(p__33838){var map__33840 = p__33838;var map__33840__$1 = ((cljs.core.seq_QMARK_.call(null,map__33840))?cljs.core.apply.call(null,cljs.core.hash_map,map__33840):map__33840);var contact = map__33840__$1;var last = cljs.core.get.call(null,map__33840__$1,new cljs.core.Keyword(null,"last","last",1017218568));var first = cljs.core.get.call(null,map__33840__$1,new cljs.core.Keyword(null,"first","first",1111344674));return [cljs.core.str(last),cljs.core.str(", "),cljs.core.str(first),cljs.core.str(demo_app.core.middle_name.call(null,contact))].join('');
});
demo_app.core.handle_change = (function handle_change(e,owner,p__33841){var map__33843 = p__33841;var map__33843__$1 = ((cljs.core.seq_QMARK_.call(null,map__33843))?cljs.core.apply.call(null,cljs.core.hash_map,map__33843):map__33843);var text = cljs.core.get.call(null,map__33843__$1,new cljs.core.Keyword(null,"text","text",1017460895));var value = e.target.value;var has_num = cljs.core.re_find.call(null,/\d+/,value);if(cljs.core.not.call(null,has_num))
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),value);
} else
{return om.core.set_state_BANG_.call(null,owner,new cljs.core.Keyword(null,"text","text",1017460895),text);
}
});
demo_app.core.contact_view = (function contact_view(contact,owner){if(typeof demo_app.core.t33849 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.core.t33849 = (function (owner,contact,contact_view,meta33850){
this.owner = owner;
this.contact = contact;
this.contact_view = contact_view;
this.meta33850 = meta33850;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.core.t33849.cljs$lang$type = true;
demo_app.core.t33849.cljs$lang$ctorStr = "demo-app.core/t33849";
demo_app.core.t33849.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"demo-app.core/t33849");
});
demo_app.core.t33849.prototype.om$core$IRenderState$ = true;
demo_app.core.t33849.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__33852){var self__ = this;
var map__33853 = p__33852;var map__33853__$1 = ((cljs.core.seq_QMARK_.call(null,map__33853))?cljs.core.apply.call(null,cljs.core.hash_map,map__33853):map__33853);var delete$ = cljs.core.get.call(null,map__33853__$1,new cljs.core.Keyword(null,"delete","delete",3973413149));var this$__$1 = this;return React.DOM.li(null,React.DOM.span(null,demo_app.core.display_name.call(null,self__.contact)),React.DOM.button({"onClick": (function (){return cljs.core.async.put_BANG_.call(null,delete$,cljs.core.deref.call(null,self__.contact));
})},"Delete"));
});
demo_app.core.t33849.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33851){var self__ = this;
var _33851__$1 = this;return self__.meta33850;
});
demo_app.core.t33849.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33851,meta33850__$1){var self__ = this;
var _33851__$1 = this;return (new demo_app.core.t33849(self__.owner,self__.contact,self__.contact_view,meta33850__$1));
});
demo_app.core.__GT_t33849 = (function __GT_t33849(owner__$1,contact__$1,contact_view__$1,meta33850){return (new demo_app.core.t33849(owner__$1,contact__$1,contact_view__$1,meta33850));
});
}
return (new demo_app.core.t33849(owner,contact,contact_view,null));
});
demo_app.core.contacts_view = (function contacts_view(app,owner){if(typeof demo_app.core.t33880 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.core.t33880 = (function (owner,app,contacts_view,meta33881){
this.owner = owner;
this.app = app;
this.contacts_view = contacts_view;
this.meta33881 = meta33881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.core.t33880.cljs$lang$type = true;
demo_app.core.t33880.cljs$lang$ctorStr = "demo-app.core/t33880";
demo_app.core.t33880.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"demo-app.core/t33880");
});
demo_app.core.t33880.prototype.om$core$IRenderState$ = true;
demo_app.core.t33880.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){var self__ = this;
var this$__$1 = this;return React.DOM.div(null,React.DOM.h2(null,"Contacts list"),cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,demo_app.core.contact_view,new cljs.core.Keyword(null,"contacts","contacts",4741419973).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",4479067398),state], null))),React.DOM.div(null,om.dom.input.call(null,{"value": new cljs.core.Keyword(null,"text","text",1017460895).cljs$core$IFn$_invoke$arity$1(state), "ref": "new-contact", "onChange": (function (p1__33855_SHARP_){return demo_app.core.handle_change.call(null,p1__33855_SHARP_,self__.owner,state);
}), "type": "text"}),React.DOM.button({"onClick": (function (){return demo_app.core.add_contact.call(null,self__.app,self__.owner);
})},"Add contact")));
});
demo_app.core.t33880.prototype.om$core$IWillMount$ = true;
demo_app.core.t33880.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var delete$ = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"delete","delete",3973413149));var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_33892){var state_val_33893 = (state_33892[1]);if((state_val_33893 === 4))
{var inst_33885 = (state_33892[2]);var inst_33886 = (function (){var contact = inst_33885;return ((function (contact,inst_33885,state_val_33893){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (contact,inst_33885,state_val_33893){
return (function (p1__33854_SHARP_){return cljs.core._EQ_.call(null,contact,p1__33854_SHARP_);
});})(contact,inst_33885,state_val_33893))
,xs));
});
;})(contact,inst_33885,state_val_33893))
})();var inst_33887 = om.core.transact_BANG_.call(null,self__.app,new cljs.core.Keyword(null,"contacts","contacts",4741419973),inst_33886);var state_33892__$1 = (function (){var statearr_33894 = state_33892;(statearr_33894[7] = inst_33887);
return statearr_33894;
})();var statearr_33895_33904 = state_33892__$1;(statearr_33895_33904[2] = null);
(statearr_33895_33904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33893 === 3))
{var inst_33890 = (state_33892[2]);var state_33892__$1 = state_33892;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33892__$1,inst_33890);
} else
{if((state_val_33893 === 2))
{var state_33892__$1 = state_33892;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33892__$1,4,delete$);
} else
{if((state_val_33893 === 1))
{var state_33892__$1 = state_33892;var statearr_33896_33905 = state_33892__$1;(statearr_33896_33905[2] = null);
(statearr_33896_33905[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_33900 = [null,null,null,null,null,null,null,null];(statearr_33900[0] = state_machine__22127__auto__);
(statearr_33900[1] = 1);
return statearr_33900;
});
var state_machine__22127__auto____1 = (function (state_33892){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_33892);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e33901){if((e33901 instanceof Object))
{var ex__22130__auto__ = e33901;var statearr_33902_33906 = state_33892;(statearr_33902_33906[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33892);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33901;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33907 = state_33892;
state_33892 = G__33907;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_33892){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_33892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_33903 = f__22202__auto__.call(null);(statearr_33903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_33903;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
}));
return c__22201__auto__;
});
demo_app.core.t33880.prototype.om$core$IInitState$ = true;
demo_app.core.t33880.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"delete","delete",3973413149),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"text","text",1017460895),""], null);
});
demo_app.core.t33880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33882){var self__ = this;
var _33882__$1 = this;return self__.meta33881;
});
demo_app.core.t33880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33882,meta33881__$1){var self__ = this;
var _33882__$1 = this;return (new demo_app.core.t33880(self__.owner,self__.app,self__.contacts_view,meta33881__$1));
});
demo_app.core.__GT_t33880 = (function __GT_t33880(owner__$1,app__$1,contacts_view__$1,meta33881){return (new demo_app.core.t33880(owner__$1,app__$1,contacts_view__$1,meta33881));
});
}
return (new demo_app.core.t33880(owner,app,contacts_view,null));
});
om.core.root.call(null,demo_app.core.contacts_view,demo_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",4427965699),document.getElementById("app0")], null));
var c__22201__auto___33930 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_33920){var state_val_33921 = (state_33920[1]);if((state_val_33921 === 2))
{var inst_33913 = (state_33920[2]);var inst_33914 = new cljs.core.Keyword(null,"status","status",4416389988).cljs$core$IFn$_invoke$arity$1(inst_33913);var inst_33915 = cljs.core.prn.call(null,inst_33914);var inst_33916 = new cljs.core.Keyword(null,"body","body",1016933652).cljs$core$IFn$_invoke$arity$1(inst_33913);var inst_33917 = cljs.core.map.call(null,new cljs.core.Keyword(null,"login","login",1117053659),inst_33916);var inst_33918 = cljs.core.prn.call(null,inst_33917);var state_33920__$1 = (function (){var statearr_33922 = state_33920;(statearr_33922[7] = inst_33915);
return statearr_33922;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33920__$1,inst_33918);
} else
{if((state_val_33921 === 1))
{var inst_33908 = [new cljs.core.Keyword(null,"with-credentials?","with-credentials?",3165820380)];var inst_33909 = [false];var inst_33910 = cljs.core.PersistentHashMap.fromArrays.call(null,inst_33908,inst_33909);var inst_33911 = cljs_http.client.get.call(null,"https://api.github.com/users",inst_33910);var state_33920__$1 = state_33920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33920__$1,2,inst_33911);
} else
{return null;
}
}
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_33926 = [null,null,null,null,null,null,null,null];(statearr_33926[0] = state_machine__22127__auto__);
(statearr_33926[1] = 1);
return statearr_33926;
});
var state_machine__22127__auto____1 = (function (state_33920){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_33920);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e33927){if((e33927 instanceof Object))
{var ex__22130__auto__ = e33927;var statearr_33928_33931 = state_33920;(statearr_33928_33931[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33920);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33932 = state_33920;
state_33920 = G__33932;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_33920){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_33920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_33929 = f__22202__auto__.call(null);(statearr_33929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___33930);
return statearr_33929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
}));

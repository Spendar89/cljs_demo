// Compiled by ClojureScript 0.0-2156
goog.provide('demo_app.product_types.product_type_props.views');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('demo_app.api');
goog.require('om_tools.dom');
goog.require('clojure.data');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('om.core');
goog.require('om.core');
goog.require('clojure.string');
goog.require('clojure.data');
goog.require('cljs.reader');
goog.require('cljs.reader');
goog.require('demo_app.api');
var ufv___68774 = schema.utils.use_fn_validation;var output_schema68753_68775 = schema.core.Any;var input_schema68754_68776 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-1637529003,null))], null);var input_checker68755_68777 = schema.core.checker.call(null,input_schema68754_68776);var output_checker68756_68778 = schema.core.checker.call(null,output_schema68753_68775);/**
* Inputs: [data owner {:keys [chan-del chan-add], :as opts}]
*/
demo_app.product_types.product_type_props.views.product_type_prop_input = (function product_type_prop_input(G__68757,G__68758,G__68759){var validate__23627__auto__ = ufv___68774.get_cell();if(cljs.core.truth_(validate__23627__auto__))
{var args__23628__auto___68779 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__68757,G__68758,G__68759], null);var temp__4126__auto___68780 = input_checker68755_68777.call(null,args__23628__auto___68779);if(cljs.core.truth_(temp__4126__auto___68780))
{var error__23629__auto___68781 = temp__4126__auto___68780;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-prop-input","product-type-prop-input",-1803471314,null),cljs.core.pr_str.call(null,error__23629__auto___68781)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema68754_68776,new cljs.core.Keyword(null,"value","value",1125876963),args__23628__auto___68779,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___68781], null));
} else
{}
} else
{}
var o__23630__auto__ = (function (){var data = G__68757;var owner = G__68758;var G__68768 = G__68759;var map__68769 = G__68768;var map__68769__$1 = ((cljs.core.seq_QMARK_.call(null,map__68769))?cljs.core.apply.call(null,cljs.core.hash_map,map__68769):map__68769);var opts = map__68769__$1;var chan_add = cljs.core.get.call(null,map__68769__$1,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var chan_del = cljs.core.get.call(null,map__68769__$1,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));var data__$1 = data;var owner__$1 = owner;var G__68768__$1 = G__68768;while(true){
var data__$2 = data__$1;var owner__$2 = owner__$1;var map__68770 = G__68768__$1;var map__68770__$1 = ((cljs.core.seq_QMARK_.call(null,map__68770))?cljs.core.apply.call(null,cljs.core.hash_map,map__68770):map__68770);var opts__$1 = map__68770__$1;var chan_add__$1 = cljs.core.get.call(null,map__68770__$1,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var chan_del__$1 = cljs.core.get.call(null,map__68770__$1,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));if(typeof demo_app.product_types.product_type_props.views.t68771 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.product_type_props.views.t68771 = (function (validate__23627__auto__,chan_del,owner,data,G__68758,output_checker68756,output_schema68753,input_checker68755,G__68768,G__68757,G__68759,input_schema68754,product_type_prop_input,chan_add,map__68769,opts,map__68770,ufv__,meta68772){
this.validate__23627__auto__ = validate__23627__auto__;
this.chan_del = chan_del;
this.owner = owner;
this.data = data;
this.G__68758 = G__68758;
this.output_checker68756 = output_checker68756;
this.output_schema68753 = output_schema68753;
this.input_checker68755 = input_checker68755;
this.G__68768 = G__68768;
this.G__68757 = G__68757;
this.G__68759 = G__68759;
this.input_schema68754 = input_schema68754;
this.product_type_prop_input = product_type_prop_input;
this.chan_add = chan_add;
this.map__68769 = map__68769;
this.opts = opts;
this.map__68770 = map__68770;
this.ufv__ = ufv__;
this.meta68772 = meta68772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.product_type_props.views.t68771.cljs$lang$type = true;
demo_app.product_types.product_type_props.views.t68771.cljs$lang$ctorStr = "demo-app.product-types.product-type-props.views/t68771";
demo_app.product_types.product_type_props.views.t68771.cljs$lang$ctorPrWriter = ((function (data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del){
return (function (this__15673__auto__,writer__15674__auto__,opt__15675__auto__){return cljs.core._write.call(null,writer__15674__auto__,"demo-app.product-types.product-type-props.views/t68771");
});})(data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.t68771.prototype.om$core$IRender$ = true;
demo_app.product_types.product_type_props.views.t68771.prototype.om$core$IRender$render$arity$1 = ((function (data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.li,om.dom.input.call(null,{"onChange": ((function (___$1,data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del){
return (function (p1__68751_SHARP_){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword("prop","name","prop/name",1238093944),p1__68751_SHARP_.target.value);
});})(___$1,data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del))
, "value": new cljs.core.Keyword("prop","name","prop/name",1238093944).cljs$core$IFn$_invoke$arity$1(self__.data), "type": "text"}),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.chan_del,cljs.core.deref.call(null,self__.data));
});})(___$1,data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del))
},"Delete")],null)));
});})(data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.t68771.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del){
return (function (_68773){var self__ = this;
var _68773__$1 = this;return self__.meta68772;
});})(data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.t68771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del){
return (function (_68773,meta68772__$1){var self__ = this;
var _68773__$1 = this;return (new demo_app.product_types.product_type_props.views.t68771(self__.validate__23627__auto__,self__.chan_del,self__.owner,self__.data,self__.G__68758,self__.output_checker68756,self__.output_schema68753,self__.input_checker68755,self__.G__68768,self__.G__68757,self__.G__68759,self__.input_schema68754,self__.product_type_prop_input,self__.chan_add,self__.map__68769,self__.opts,self__.map__68770,self__.ufv__,meta68772__$1));
});})(data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.__GT_t68771 = ((function (data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del){
return (function __GT_t68771(validate__23627__auto____$1,chan_del__$2,owner__$3,data__$3,G__68758__$1,output_checker68756__$1,output_schema68753__$1,input_checker68755__$1,G__68768__$2,G__68757__$1,G__68759__$1,input_schema68754__$1,product_type_prop_input__$1,chan_add__$2,map__68769__$2,opts__$2,map__68770__$2,ufv____$1,meta68772){return (new demo_app.product_types.product_type_props.views.t68771(validate__23627__auto____$1,chan_del__$2,owner__$3,data__$3,G__68758__$1,output_checker68756__$1,output_schema68753__$1,input_checker68755__$1,G__68768__$2,G__68757__$1,G__68759__$1,input_schema68754__$1,product_type_prop_input__$1,chan_add__$2,map__68769__$2,opts__$2,map__68770__$2,ufv____$1,meta68772));
});})(data__$2,owner__$2,map__68770,map__68770__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__68768,map__68769,map__68769__$1,opts,chan_add,chan_del))
;
}
return (new demo_app.product_types.product_type_props.views.t68771(validate__23627__auto__,chan_del__$1,owner__$2,data__$2,G__68758,output_checker68756_68778,output_schema68753_68775,input_checker68755_68777,G__68768__$1,G__68757,G__68759,input_schema68754_68776,product_type_prop_input,chan_add__$1,map__68769__$1,opts__$1,map__68770__$1,ufv___68774,null));
break;
}
})();if(cljs.core.truth_(validate__23627__auto__))
{var temp__4126__auto___68782 = output_checker68756_68778.call(null,o__23630__auto__);if(cljs.core.truth_(temp__4126__auto___68782))
{var error__23629__auto___68783 = temp__4126__auto___68782;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-prop-input","product-type-prop-input",-1803471314,null),cljs.core.pr_str.call(null,error__23629__auto___68783)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema68753_68775,new cljs.core.Keyword(null,"value","value",1125876963),o__23630__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___68783], null));
} else
{}
} else
{}
return o__23630__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input),schema.core.make_fn_schema.call(null,output_schema68753_68775,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema68754_68776], null)));
demo_app.product_types.product_type_props.views.__GT_product_type_prop_input = (function() {
var __GT_product_type_prop_input = null;
var __GT_product_type_prop_input__1 = (function (cursor__29734__auto__){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input,cursor__29734__auto__);
});
var __GT_product_type_prop_input__2 = (function (cursor__29734__auto__,m68752){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input,cursor__29734__auto__,m68752);
});
__GT_product_type_prop_input = function(cursor__29734__auto__,m68752){
switch(arguments.length){
case 1:
return __GT_product_type_prop_input__1.call(this,cursor__29734__auto__);
case 2:
return __GT_product_type_prop_input__2.call(this,cursor__29734__auto__,m68752);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_type_prop_input.cljs$core$IFn$_invoke$arity$1 = __GT_product_type_prop_input__1;
__GT_product_type_prop_input.cljs$core$IFn$_invoke$arity$2 = __GT_product_type_prop_input__2;
return __GT_product_type_prop_input;
})()
;
var ufv___68891 = schema.utils.use_fn_validation;var output_schema68787_68892 = schema.core.Any;var input_schema68788_68893 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker68789_68894 = schema.core.checker.call(null,input_schema68788_68893);var output_checker68790_68895 = schema.core.checker.call(null,output_schema68787_68892);/**
* Inputs: [data owner]
*/
demo_app.product_types.product_type_props.views.product_type_props = (function product_type_props(G__68791,G__68792){var validate__23627__auto__ = ufv___68891.get_cell();if(cljs.core.truth_(validate__23627__auto__))
{var args__23628__auto___68896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__68791,G__68792], null);var temp__4126__auto___68897 = input_checker68789_68894.call(null,args__23628__auto___68896);if(cljs.core.truth_(temp__4126__auto___68897))
{var error__23629__auto___68898 = temp__4126__auto___68897;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-props","product-type-props",-75393420,null),cljs.core.pr_str.call(null,error__23629__auto___68898)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema68788_68893,new cljs.core.Keyword(null,"value","value",1125876963),args__23628__auto___68896,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___68898], null));
} else
{}
} else
{}
var o__23630__auto__ = (function (){var data = G__68791;var owner = G__68792;while(true){
if(typeof demo_app.product_types.product_type_props.views.t68842 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.product_type_props.views.t68842 = (function (product_type_props,validate__23627__auto__,owner,data,output_schema68787,G__68791,G__68792,output_checker68790,input_checker68789,input_schema68788,ufv__,meta68843){
this.product_type_props = product_type_props;
this.validate__23627__auto__ = validate__23627__auto__;
this.owner = owner;
this.data = data;
this.output_schema68787 = output_schema68787;
this.G__68791 = G__68791;
this.G__68792 = G__68792;
this.output_checker68790 = output_checker68790;
this.input_checker68789 = input_checker68789;
this.input_schema68788 = input_schema68788;
this.ufv__ = ufv__;
this.meta68843 = meta68843;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.product_type_props.views.t68842.cljs$lang$type = true;
demo_app.product_types.product_type_props.views.t68842.cljs$lang$ctorStr = "demo-app.product-types.product-type-props.views/t68842";
demo_app.product_types.product_type_props.views.t68842.cljs$lang$ctorPrWriter = (function (this__15673__auto__,writer__15674__auto__,opt__15675__auto__){return cljs.core._write.call(null,writer__15674__auto__,"demo-app.product-types.product-type-props.views/t68842");
});
demo_app.product_types.product_type_props.views.t68842.prototype.om$core$IRenderState$ = true;
demo_app.product_types.product_type_props.views.t68842.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__68845){var self__ = this;
var map__68846 = p__68845;var map__68846__$1 = ((cljs.core.seq_QMARK_.call(null,map__68846))?cljs.core.apply.call(null,cljs.core.hash_map,map__68846):map__68846);var state = map__68846__$1;var chan_del = cljs.core.get.call(null,map__68846__$1,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));var chan_add = cljs.core.get.call(null,map__68846__$1,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var this$__$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.ul,om.core.build_all.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input,new cljs.core.Keyword("product-type","props","product-type/props",3066878432).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan-del","chan-del",2444592770),chan_del,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848),chan_add], null)], null)),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,React.DOM.button({"onClick": ((function (this$__$1,map__68846,map__68846__$1,state,chan_del,chan_add){
return (function (){return cljs.core.async.put_BANG_.call(null,chan_add,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("prop","name","prop/name",1238093944),"",new cljs.core.Keyword("prop","kind","prop/kind",1239584575),"text"], null));
});})(this$__$1,map__68846,map__68846__$1,state,chan_del,chan_add))
},"New Product Type Prop"),cljs.core.PersistentVector.EMPTY)],null))),cljs.core.PersistentVector.EMPTY);
});
demo_app.product_types.product_type_props.views.t68842.prototype.om$core$IWillMount$ = true;
demo_app.product_types.product_type_props.views.t68842.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var chan_del_68899 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));var c__27289__auto___68900 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__27289__auto___68900,chan_del_68899,___$1){
return (function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = ((function (c__27289__auto___68900,chan_del_68899,___$1){
return (function (state_68858){var state_val_68859 = (state_68858[1]);if((state_val_68859 === 4))
{var inst_68849 = (state_68858[2]);var inst_68850 = (function (){var product_type_prop = inst_68849;return ((function (product_type_prop,inst_68849,state_val_68859,c__27289__auto___68900,chan_del_68899,___$1){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (product_type_prop,inst_68849,state_val_68859,c__27289__auto___68900,chan_del_68899,___$1){
return (function (p1__68784_SHARP_){return (product_type_prop === p1__68784_SHARP_);
});})(product_type_prop,inst_68849,state_val_68859,c__27289__auto___68900,chan_del_68899,___$1))
,xs));
});
;})(product_type_prop,inst_68849,state_val_68859,c__27289__auto___68900,chan_del_68899,___$1))
})();var inst_68851 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword("product-type","props","product-type/props",3066878432),inst_68850);var inst_68852 = (function (){var product_type_prop = inst_68849;return ((function (product_type_prop,inst_68849,inst_68850,inst_68851,state_val_68859,c__27289__auto___68900,chan_del_68899,___$1){
return (function (p1__68785_SHARP_){return cljs.core.conj.call(null,cljs.core.vec.call(null,p1__68785_SHARP_),product_type_prop);
});
;})(product_type_prop,inst_68849,inst_68850,inst_68851,state_val_68859,c__27289__auto___68900,chan_del_68899,___$1))
})();var inst_68853 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"to-delete","to-delete",1928504495),inst_68852);var state_68858__$1 = (function (){var statearr_68860 = state_68858;(statearr_68860[7] = inst_68853);
(statearr_68860[8] = inst_68851);
return statearr_68860;
})();var statearr_68861_68901 = state_68858__$1;(statearr_68861_68901[2] = null);
(statearr_68861_68901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68859 === 3))
{var inst_68856 = (state_68858[2]);var state_68858__$1 = state_68858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68858__$1,inst_68856);
} else
{if((state_val_68859 === 2))
{var state_68858__$1 = state_68858;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68858__$1,4,chan_del_68899);
} else
{if((state_val_68859 === 1))
{var state_68858__$1 = state_68858;var statearr_68862_68902 = state_68858__$1;(statearr_68862_68902[2] = null);
(statearr_68862_68902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__27289__auto___68900,chan_del_68899,___$1))
;return ((function (switch__27225__auto__,c__27289__auto___68900,chan_del_68899,___$1){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_68866 = [null,null,null,null,null,null,null,null,null];(statearr_68866[0] = state_machine__27226__auto__);
(statearr_68866[1] = 1);
return statearr_68866;
});
var state_machine__27226__auto____1 = (function (state_68858){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_68858);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e68867){if((e68867 instanceof Object))
{var ex__27229__auto__ = e68867;var statearr_68868_68903 = state_68858;(statearr_68868_68903[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68858);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e68867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__68904 = state_68858;
state_68858 = G__68904;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_68858){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_68858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__,c__27289__auto___68900,chan_del_68899,___$1))
})();var state__27291__auto__ = (function (){var statearr_68869 = f__27290__auto__.call(null);(statearr_68869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___68900);
return statearr_68869;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
});})(c__27289__auto___68900,chan_del_68899,___$1))
);
var chan_add = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var c__27289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__27289__auto__,chan_add,___$1){
return (function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = ((function (c__27289__auto__,chan_add,___$1){
return (function (state_68879){var state_val_68880 = (state_68879[1]);if((state_val_68880 === 4))
{var inst_68872 = (state_68879[2]);var inst_68873 = (function (){var product_type_prop = inst_68872;return ((function (product_type_prop,inst_68872,state_val_68880,c__27289__auto__,chan_add,___$1){
return (function (xs){return cljs.core.conj.call(null,xs,product_type_prop);
});
;})(product_type_prop,inst_68872,state_val_68880,c__27289__auto__,chan_add,___$1))
})();var inst_68874 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword("product-type","props","product-type/props",3066878432),inst_68873);var state_68879__$1 = (function (){var statearr_68881 = state_68879;(statearr_68881[7] = inst_68874);
return statearr_68881;
})();var statearr_68882_68905 = state_68879__$1;(statearr_68882_68905[2] = null);
(statearr_68882_68905[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_68880 === 3))
{var inst_68877 = (state_68879[2]);var state_68879__$1 = state_68879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68879__$1,inst_68877);
} else
{if((state_val_68880 === 2))
{var state_68879__$1 = state_68879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68879__$1,4,chan_add);
} else
{if((state_val_68880 === 1))
{var state_68879__$1 = state_68879;var statearr_68883_68906 = state_68879__$1;(statearr_68883_68906[2] = null);
(statearr_68883_68906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__27289__auto__,chan_add,___$1))
;return ((function (switch__27225__auto__,c__27289__auto__,chan_add,___$1){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_68887 = [null,null,null,null,null,null,null,null];(statearr_68887[0] = state_machine__27226__auto__);
(statearr_68887[1] = 1);
return statearr_68887;
});
var state_machine__27226__auto____1 = (function (state_68879){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_68879);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e68888){if((e68888 instanceof Object))
{var ex__27229__auto__ = e68888;var statearr_68889_68907 = state_68879;(statearr_68889_68907[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68879);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e68888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__68908 = state_68879;
state_68879 = G__68908;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_68879){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_68879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__,c__27289__auto__,chan_add,___$1))
})();var state__27291__auto__ = (function (){var statearr_68890 = f__27290__auto__.call(null);(statearr_68890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto__);
return statearr_68890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
});})(c__27289__auto__,chan_add,___$1))
);
return c__27289__auto__;
});
demo_app.product_types.product_type_props.views.t68842.prototype.om$core$IInitState$ = true;
demo_app.product_types.product_type_props.views.t68842.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan-del","chan-del",2444592770),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"chan-add","chan-add",2444589848),cljs.core.async.chan.call(null)], null);
});
demo_app.product_types.product_type_props.views.t68842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_68844){var self__ = this;
var _68844__$1 = this;return self__.meta68843;
});
demo_app.product_types.product_type_props.views.t68842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_68844,meta68843__$1){var self__ = this;
var _68844__$1 = this;return (new demo_app.product_types.product_type_props.views.t68842(self__.product_type_props,self__.validate__23627__auto__,self__.owner,self__.data,self__.output_schema68787,self__.G__68791,self__.G__68792,self__.output_checker68790,self__.input_checker68789,self__.input_schema68788,self__.ufv__,meta68843__$1));
});
demo_app.product_types.product_type_props.views.__GT_t68842 = (function __GT_t68842(product_type_props__$1,validate__23627__auto____$1,owner__$1,data__$1,output_schema68787__$1,G__68791__$1,G__68792__$1,output_checker68790__$1,input_checker68789__$1,input_schema68788__$1,ufv____$1,meta68843){return (new demo_app.product_types.product_type_props.views.t68842(product_type_props__$1,validate__23627__auto____$1,owner__$1,data__$1,output_schema68787__$1,G__68791__$1,G__68792__$1,output_checker68790__$1,input_checker68789__$1,input_schema68788__$1,ufv____$1,meta68843));
});
}
return (new demo_app.product_types.product_type_props.views.t68842(product_type_props,validate__23627__auto__,owner,data,output_schema68787_68892,G__68791,G__68792,output_checker68790_68895,input_checker68789_68894,input_schema68788_68893,ufv___68891,null));
break;
}
})();if(cljs.core.truth_(validate__23627__auto__))
{var temp__4126__auto___68909 = output_checker68790_68895.call(null,o__23630__auto__);if(cljs.core.truth_(temp__4126__auto___68909))
{var error__23629__auto___68910 = temp__4126__auto___68909;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-props","product-type-props",-75393420,null),cljs.core.pr_str.call(null,error__23629__auto___68910)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema68787_68892,new cljs.core.Keyword(null,"value","value",1125876963),o__23630__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___68910], null));
} else
{}
} else
{}
return o__23630__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.product_type_props.views.product_type_props),schema.core.make_fn_schema.call(null,output_schema68787_68892,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema68788_68893], null)));
demo_app.product_types.product_type_props.views.__GT_product_type_props = (function() {
var __GT_product_type_props = null;
var __GT_product_type_props__1 = (function (cursor__29734__auto__){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_props,cursor__29734__auto__);
});
var __GT_product_type_props__2 = (function (cursor__29734__auto__,m68786){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_props,cursor__29734__auto__,m68786);
});
__GT_product_type_props = function(cursor__29734__auto__,m68786){
switch(arguments.length){
case 1:
return __GT_product_type_props__1.call(this,cursor__29734__auto__);
case 2:
return __GT_product_type_props__2.call(this,cursor__29734__auto__,m68786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_type_props.cljs$core$IFn$_invoke$arity$1 = __GT_product_type_props__1;
__GT_product_type_props.cljs$core$IFn$_invoke$arity$2 = __GT_product_type_props__2;
return __GT_product_type_props;
})()
;

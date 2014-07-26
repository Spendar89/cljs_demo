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
var ufv___37705 = schema.utils.use_fn_validation;var output_schema37684_37706 = schema.core.Any;var input_schema37685_37707 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-1637529003,null))], null);var input_checker37686_37708 = schema.core.checker.call(null,input_schema37685_37707);var output_checker37687_37709 = schema.core.checker.call(null,output_schema37684_37706);/**
* Inputs: [data owner {:keys [chan-del chan-add], :as opts}]
*/
demo_app.product_types.product_type_props.views.product_type_prop_input = (function product_type_prop_input(G__37688,G__37689,G__37690){var validate__23131__auto__ = ufv___37705.get_cell();if(cljs.core.truth_(validate__23131__auto__))
{var args__23132__auto___37710 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37688,G__37689,G__37690], null);var temp__4126__auto___37711 = input_checker37686_37708.call(null,args__23132__auto___37710);if(cljs.core.truth_(temp__4126__auto___37711))
{var error__23133__auto___37712 = temp__4126__auto___37711;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-prop-input","product-type-prop-input",-1803471314,null),cljs.core.pr_str.call(null,error__23133__auto___37712)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema37685_37707,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___37710,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___37712], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var data = G__37688;var owner = G__37689;var G__37699 = G__37690;var map__37700 = G__37699;var map__37700__$1 = ((cljs.core.seq_QMARK_.call(null,map__37700))?cljs.core.apply.call(null,cljs.core.hash_map,map__37700):map__37700);var opts = map__37700__$1;var chan_add = cljs.core.get.call(null,map__37700__$1,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var chan_del = cljs.core.get.call(null,map__37700__$1,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));var data__$1 = data;var owner__$1 = owner;var G__37699__$1 = G__37699;while(true){
var data__$2 = data__$1;var owner__$2 = owner__$1;var map__37701 = G__37699__$1;var map__37701__$1 = ((cljs.core.seq_QMARK_.call(null,map__37701))?cljs.core.apply.call(null,cljs.core.hash_map,map__37701):map__37701);var opts__$1 = map__37701__$1;var chan_add__$1 = cljs.core.get.call(null,map__37701__$1,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var chan_del__$1 = cljs.core.get.call(null,map__37701__$1,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));if(typeof demo_app.product_types.product_type_props.views.t37702 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.product_type_props.views.t37702 = (function (chan_del,owner,validate__23131__auto__,data,input_checker37686,G__37688,G__37699,output_schema37684,G__37690,map__37701,G__37689,map__37700,output_checker37687,product_type_prop_input,input_schema37685,chan_add,opts,ufv__,meta37703){
this.chan_del = chan_del;
this.owner = owner;
this.validate__23131__auto__ = validate__23131__auto__;
this.data = data;
this.input_checker37686 = input_checker37686;
this.G__37688 = G__37688;
this.G__37699 = G__37699;
this.output_schema37684 = output_schema37684;
this.G__37690 = G__37690;
this.map__37701 = map__37701;
this.G__37689 = G__37689;
this.map__37700 = map__37700;
this.output_checker37687 = output_checker37687;
this.product_type_prop_input = product_type_prop_input;
this.input_schema37685 = input_schema37685;
this.chan_add = chan_add;
this.opts = opts;
this.ufv__ = ufv__;
this.meta37703 = meta37703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.product_type_props.views.t37702.cljs$lang$type = true;
demo_app.product_types.product_type_props.views.t37702.cljs$lang$ctorStr = "demo-app.product-types.product-type-props.views/t37702";
demo_app.product_types.product_type_props.views.t37702.cljs$lang$ctorPrWriter = ((function (data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del){
return (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"demo-app.product-types.product-type-props.views/t37702");
});})(data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.t37702.prototype.om$core$IRender$ = true;
demo_app.product_types.product_type_props.views.t37702.prototype.om$core$IRender$render$arity$1 = ((function (data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.li,om.dom.input.call(null,{"onChange": ((function (___$1,data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del){
return (function (p1__37682_SHARP_){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword("prop","name","prop/name",1238093944),p1__37682_SHARP_.target.value);
});})(___$1,data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del))
, "value": new cljs.core.Keyword("prop","name","prop/name",1238093944).cljs$core$IFn$_invoke$arity$1(self__.data), "type": "text"}),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.chan_del,cljs.core.deref.call(null,self__.data));
});})(___$1,data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del))
},"Delete")],null)));
});})(data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.t37702.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del){
return (function (_37704){var self__ = this;
var _37704__$1 = this;return self__.meta37703;
});})(data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.t37702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del){
return (function (_37704,meta37703__$1){var self__ = this;
var _37704__$1 = this;return (new demo_app.product_types.product_type_props.views.t37702(self__.chan_del,self__.owner,self__.validate__23131__auto__,self__.data,self__.input_checker37686,self__.G__37688,self__.G__37699,self__.output_schema37684,self__.G__37690,self__.map__37701,self__.G__37689,self__.map__37700,self__.output_checker37687,self__.product_type_prop_input,self__.input_schema37685,self__.chan_add,self__.opts,self__.ufv__,meta37703__$1));
});})(data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.__GT_t37702 = ((function (data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del){
return (function __GT_t37702(chan_del__$2,owner__$3,validate__23131__auto____$1,data__$3,input_checker37686__$1,G__37688__$1,G__37699__$2,output_schema37684__$1,G__37690__$1,map__37701__$2,G__37689__$1,map__37700__$2,output_checker37687__$1,product_type_prop_input__$1,input_schema37685__$1,chan_add__$2,opts__$2,ufv____$1,meta37703){return (new demo_app.product_types.product_type_props.views.t37702(chan_del__$2,owner__$3,validate__23131__auto____$1,data__$3,input_checker37686__$1,G__37688__$1,G__37699__$2,output_schema37684__$1,G__37690__$1,map__37701__$2,G__37689__$1,map__37700__$2,output_checker37687__$1,product_type_prop_input__$1,input_schema37685__$1,chan_add__$2,opts__$2,ufv____$1,meta37703));
});})(data__$2,owner__$2,map__37701,map__37701__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__37699,map__37700,map__37700__$1,opts,chan_add,chan_del))
;
}
return (new demo_app.product_types.product_type_props.views.t37702(chan_del__$1,owner__$2,validate__23131__auto__,data__$2,input_checker37686_37708,G__37688,G__37699__$1,output_schema37684_37706,G__37690,map__37701__$1,G__37689,map__37700__$1,output_checker37687_37709,product_type_prop_input,input_schema37685_37707,chan_add__$1,opts__$1,ufv___37705,null));
break;
}
})();if(cljs.core.truth_(validate__23131__auto__))
{var temp__4126__auto___37713 = output_checker37687_37709.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___37713))
{var error__23133__auto___37714 = temp__4126__auto___37713;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-prop-input","product-type-prop-input",-1803471314,null),cljs.core.pr_str.call(null,error__23133__auto___37714)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema37684_37706,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___37714], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input),schema.core.make_fn_schema.call(null,output_schema37684_37706,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37685_37707], null)));
demo_app.product_types.product_type_props.views.__GT_product_type_prop_input = (function() {
var __GT_product_type_prop_input = null;
var __GT_product_type_prop_input__1 = (function (cursor__29261__auto__){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input,cursor__29261__auto__);
});
var __GT_product_type_prop_input__2 = (function (cursor__29261__auto__,m37683){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input,cursor__29261__auto__,m37683);
});
__GT_product_type_prop_input = function(cursor__29261__auto__,m37683){
switch(arguments.length){
case 1:
return __GT_product_type_prop_input__1.call(this,cursor__29261__auto__);
case 2:
return __GT_product_type_prop_input__2.call(this,cursor__29261__auto__,m37683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_type_prop_input.cljs$core$IFn$_invoke$arity$1 = __GT_product_type_prop_input__1;
__GT_product_type_prop_input.cljs$core$IFn$_invoke$arity$2 = __GT_product_type_prop_input__2;
return __GT_product_type_prop_input;
})()
;
var ufv___37822 = schema.utils.use_fn_validation;var output_schema37718_37823 = schema.core.Any;var input_schema37719_37824 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker37720_37825 = schema.core.checker.call(null,input_schema37719_37824);var output_checker37721_37826 = schema.core.checker.call(null,output_schema37718_37823);/**
* Inputs: [data owner]
*/
demo_app.product_types.product_type_props.views.product_type_props = (function product_type_props(G__37722,G__37723){var validate__23131__auto__ = ufv___37822.get_cell();if(cljs.core.truth_(validate__23131__auto__))
{var args__23132__auto___37827 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__37722,G__37723], null);var temp__4126__auto___37828 = input_checker37720_37825.call(null,args__23132__auto___37827);if(cljs.core.truth_(temp__4126__auto___37828))
{var error__23133__auto___37829 = temp__4126__auto___37828;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-props","product-type-props",-75393420,null),cljs.core.pr_str.call(null,error__23133__auto___37829)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema37719_37824,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___37827,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___37829], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var data = G__37722;var owner = G__37723;while(true){
if(typeof demo_app.product_types.product_type_props.views.t37773 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.product_type_props.views.t37773 = (function (product_type_props,G__37723,owner,validate__23131__auto__,data,input_schema37719,output_checker37721,input_checker37720,output_schema37718,ufv__,G__37722,meta37774){
this.product_type_props = product_type_props;
this.G__37723 = G__37723;
this.owner = owner;
this.validate__23131__auto__ = validate__23131__auto__;
this.data = data;
this.input_schema37719 = input_schema37719;
this.output_checker37721 = output_checker37721;
this.input_checker37720 = input_checker37720;
this.output_schema37718 = output_schema37718;
this.ufv__ = ufv__;
this.G__37722 = G__37722;
this.meta37774 = meta37774;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.product_type_props.views.t37773.cljs$lang$type = true;
demo_app.product_types.product_type_props.views.t37773.cljs$lang$ctorStr = "demo-app.product-types.product-type-props.views/t37773";
demo_app.product_types.product_type_props.views.t37773.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"demo-app.product-types.product-type-props.views/t37773");
});
demo_app.product_types.product_type_props.views.t37773.prototype.om$core$IRenderState$ = true;
demo_app.product_types.product_type_props.views.t37773.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__37776){var self__ = this;
var map__37777 = p__37776;var map__37777__$1 = ((cljs.core.seq_QMARK_.call(null,map__37777))?cljs.core.apply.call(null,cljs.core.hash_map,map__37777):map__37777);var state = map__37777__$1;var chan_del = cljs.core.get.call(null,map__37777__$1,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));var chan_add = cljs.core.get.call(null,map__37777__$1,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var this$__$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.ul,om.core.build_all.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input,new cljs.core.Keyword("product-type","props","product-type/props",3066878432).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan-del","chan-del",2444592770),chan_del,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848),chan_add], null)], null)),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,React.DOM.button({"onClick": ((function (this$__$1,map__37777,map__37777__$1,state,chan_del,chan_add){
return (function (){return cljs.core.async.put_BANG_.call(null,chan_add,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("prop","name","prop/name",1238093944),"",new cljs.core.Keyword("prop","kind","prop/kind",1239584575),"text"], null));
});})(this$__$1,map__37777,map__37777__$1,state,chan_del,chan_add))
},"New Product Type Prop"),cljs.core.PersistentVector.EMPTY)],null))),cljs.core.PersistentVector.EMPTY);
});
demo_app.product_types.product_type_props.views.t37773.prototype.om$core$IWillMount$ = true;
demo_app.product_types.product_type_props.views.t37773.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var chan_del_37830 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));var c__26765__auto___37831 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__26765__auto___37831,chan_del_37830,___$1){
return (function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = ((function (c__26765__auto___37831,chan_del_37830,___$1){
return (function (state_37789){var state_val_37790 = (state_37789[1]);if((state_val_37790 === 4))
{var inst_37780 = (state_37789[2]);var inst_37781 = (function (){var product_type_prop = inst_37780;return ((function (product_type_prop,inst_37780,state_val_37790,c__26765__auto___37831,chan_del_37830,___$1){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (product_type_prop,inst_37780,state_val_37790,c__26765__auto___37831,chan_del_37830,___$1){
return (function (p1__37715_SHARP_){return (product_type_prop === p1__37715_SHARP_);
});})(product_type_prop,inst_37780,state_val_37790,c__26765__auto___37831,chan_del_37830,___$1))
,xs));
});
;})(product_type_prop,inst_37780,state_val_37790,c__26765__auto___37831,chan_del_37830,___$1))
})();var inst_37782 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword("product-type","props","product-type/props",3066878432),inst_37781);var inst_37783 = (function (){var product_type_prop = inst_37780;return ((function (product_type_prop,inst_37780,inst_37781,inst_37782,state_val_37790,c__26765__auto___37831,chan_del_37830,___$1){
return (function (p1__37716_SHARP_){return cljs.core.conj.call(null,cljs.core.vec.call(null,p1__37716_SHARP_),product_type_prop);
});
;})(product_type_prop,inst_37780,inst_37781,inst_37782,state_val_37790,c__26765__auto___37831,chan_del_37830,___$1))
})();var inst_37784 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"to-delete","to-delete",1928504495),inst_37783);var state_37789__$1 = (function (){var statearr_37791 = state_37789;(statearr_37791[7] = inst_37782);
(statearr_37791[8] = inst_37784);
return statearr_37791;
})();var statearr_37792_37832 = state_37789__$1;(statearr_37792_37832[2] = null);
(statearr_37792_37832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37790 === 3))
{var inst_37787 = (state_37789[2]);var state_37789__$1 = state_37789;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37789__$1,inst_37787);
} else
{if((state_val_37790 === 2))
{var state_37789__$1 = state_37789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37789__$1,4,chan_del_37830);
} else
{if((state_val_37790 === 1))
{var state_37789__$1 = state_37789;var statearr_37793_37833 = state_37789__$1;(statearr_37793_37833[2] = null);
(statearr_37793_37833[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__26765__auto___37831,chan_del_37830,___$1))
;return ((function (switch__26701__auto__,c__26765__auto___37831,chan_del_37830,___$1){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_37797 = [null,null,null,null,null,null,null,null,null];(statearr_37797[0] = state_machine__26702__auto__);
(statearr_37797[1] = 1);
return statearr_37797;
});
var state_machine__26702__auto____1 = (function (state_37789){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_37789);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e37798){if((e37798 instanceof Object))
{var ex__26705__auto__ = e37798;var statearr_37799_37834 = state_37789;(statearr_37799_37834[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37789);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37798;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37835 = state_37789;
state_37789 = G__37835;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_37789){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_37789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__,c__26765__auto___37831,chan_del_37830,___$1))
})();var state__26767__auto__ = (function (){var statearr_37800 = f__26766__auto__.call(null);(statearr_37800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___37831);
return statearr_37800;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
});})(c__26765__auto___37831,chan_del_37830,___$1))
);
var chan_add = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var c__26765__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__26765__auto__,chan_add,___$1){
return (function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = ((function (c__26765__auto__,chan_add,___$1){
return (function (state_37810){var state_val_37811 = (state_37810[1]);if((state_val_37811 === 4))
{var inst_37803 = (state_37810[2]);var inst_37804 = (function (){var product_type_prop = inst_37803;return ((function (product_type_prop,inst_37803,state_val_37811,c__26765__auto__,chan_add,___$1){
return (function (xs){return cljs.core.conj.call(null,xs,product_type_prop);
});
;})(product_type_prop,inst_37803,state_val_37811,c__26765__auto__,chan_add,___$1))
})();var inst_37805 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword("product-type","props","product-type/props",3066878432),inst_37804);var state_37810__$1 = (function (){var statearr_37812 = state_37810;(statearr_37812[7] = inst_37805);
return statearr_37812;
})();var statearr_37813_37836 = state_37810__$1;(statearr_37813_37836[2] = null);
(statearr_37813_37836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37811 === 3))
{var inst_37808 = (state_37810[2]);var state_37810__$1 = state_37810;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37810__$1,inst_37808);
} else
{if((state_val_37811 === 2))
{var state_37810__$1 = state_37810;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37810__$1,4,chan_add);
} else
{if((state_val_37811 === 1))
{var state_37810__$1 = state_37810;var statearr_37814_37837 = state_37810__$1;(statearr_37814_37837[2] = null);
(statearr_37814_37837[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__26765__auto__,chan_add,___$1))
;return ((function (switch__26701__auto__,c__26765__auto__,chan_add,___$1){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_37818 = [null,null,null,null,null,null,null,null];(statearr_37818[0] = state_machine__26702__auto__);
(statearr_37818[1] = 1);
return statearr_37818;
});
var state_machine__26702__auto____1 = (function (state_37810){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_37810);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e37819){if((e37819 instanceof Object))
{var ex__26705__auto__ = e37819;var statearr_37820_37838 = state_37810;(statearr_37820_37838[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37810);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37839 = state_37810;
state_37810 = G__37839;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_37810){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_37810);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__,c__26765__auto__,chan_add,___$1))
})();var state__26767__auto__ = (function (){var statearr_37821 = f__26766__auto__.call(null);(statearr_37821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto__);
return statearr_37821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
});})(c__26765__auto__,chan_add,___$1))
);
return c__26765__auto__;
});
demo_app.product_types.product_type_props.views.t37773.prototype.om$core$IInitState$ = true;
demo_app.product_types.product_type_props.views.t37773.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan-del","chan-del",2444592770),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"chan-add","chan-add",2444589848),cljs.core.async.chan.call(null)], null);
});
demo_app.product_types.product_type_props.views.t37773.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37775){var self__ = this;
var _37775__$1 = this;return self__.meta37774;
});
demo_app.product_types.product_type_props.views.t37773.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37775,meta37774__$1){var self__ = this;
var _37775__$1 = this;return (new demo_app.product_types.product_type_props.views.t37773(self__.product_type_props,self__.G__37723,self__.owner,self__.validate__23131__auto__,self__.data,self__.input_schema37719,self__.output_checker37721,self__.input_checker37720,self__.output_schema37718,self__.ufv__,self__.G__37722,meta37774__$1));
});
demo_app.product_types.product_type_props.views.__GT_t37773 = (function __GT_t37773(product_type_props__$1,G__37723__$1,owner__$1,validate__23131__auto____$1,data__$1,input_schema37719__$1,output_checker37721__$1,input_checker37720__$1,output_schema37718__$1,ufv____$1,G__37722__$1,meta37774){return (new demo_app.product_types.product_type_props.views.t37773(product_type_props__$1,G__37723__$1,owner__$1,validate__23131__auto____$1,data__$1,input_schema37719__$1,output_checker37721__$1,input_checker37720__$1,output_schema37718__$1,ufv____$1,G__37722__$1,meta37774));
});
}
return (new demo_app.product_types.product_type_props.views.t37773(product_type_props,G__37723,owner,validate__23131__auto__,data,input_schema37719_37824,output_checker37721_37826,input_checker37720_37825,output_schema37718_37823,ufv___37822,G__37722,null));
break;
}
})();if(cljs.core.truth_(validate__23131__auto__))
{var temp__4126__auto___37840 = output_checker37721_37826.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___37840))
{var error__23133__auto___37841 = temp__4126__auto___37840;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-props","product-type-props",-75393420,null),cljs.core.pr_str.call(null,error__23133__auto___37841)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema37718_37823,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___37841], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.product_type_props.views.product_type_props),schema.core.make_fn_schema.call(null,output_schema37718_37823,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema37719_37824], null)));
demo_app.product_types.product_type_props.views.__GT_product_type_props = (function() {
var __GT_product_type_props = null;
var __GT_product_type_props__1 = (function (cursor__29261__auto__){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_props,cursor__29261__auto__);
});
var __GT_product_type_props__2 = (function (cursor__29261__auto__,m37717){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_props,cursor__29261__auto__,m37717);
});
__GT_product_type_props = function(cursor__29261__auto__,m37717){
switch(arguments.length){
case 1:
return __GT_product_type_props__1.call(this,cursor__29261__auto__);
case 2:
return __GT_product_type_props__2.call(this,cursor__29261__auto__,m37717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_type_props.cljs$core$IFn$_invoke$arity$1 = __GT_product_type_props__1;
__GT_product_type_props.cljs$core$IFn$_invoke$arity$2 = __GT_product_type_props__2;
return __GT_product_type_props;
})()
;

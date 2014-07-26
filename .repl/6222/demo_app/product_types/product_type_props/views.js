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
var ufv___36903 = schema.utils.use_fn_validation;var output_schema36882_36904 = schema.core.Any;var input_schema36883_36905 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-1637529003,null))], null);var input_checker36884_36906 = schema.core.checker.call(null,input_schema36883_36905);var output_checker36885_36907 = schema.core.checker.call(null,output_schema36882_36904);/**
* Inputs: [data owner {:keys [chan-del chan-add], :as opts}]
*/
demo_app.product_types.product_type_props.views.product_type_prop_input = (function product_type_prop_input(G__36886,G__36887,G__36888){var validate__23102__auto__ = ufv___36903.get_cell();if(cljs.core.truth_(validate__23102__auto__))
{var args__23103__auto___36908 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36886,G__36887,G__36888], null);var temp__4126__auto___36909 = input_checker36884_36906.call(null,args__23103__auto___36908);if(cljs.core.truth_(temp__4126__auto___36909))
{var error__23104__auto___36910 = temp__4126__auto___36909;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-prop-input","product-type-prop-input",-1803471314,null),cljs.core.pr_str.call(null,error__23104__auto___36910)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema36883_36905,new cljs.core.Keyword(null,"value","value",1125876963),args__23103__auto___36908,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___36910], null));
} else
{}
} else
{}
var o__23105__auto__ = (function (){var data = G__36886;var owner = G__36887;var G__36897 = G__36888;var map__36898 = G__36897;var map__36898__$1 = ((cljs.core.seq_QMARK_.call(null,map__36898))?cljs.core.apply.call(null,cljs.core.hash_map,map__36898):map__36898);var opts = map__36898__$1;var chan_add = cljs.core.get.call(null,map__36898__$1,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var chan_del = cljs.core.get.call(null,map__36898__$1,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));var data__$1 = data;var owner__$1 = owner;var G__36897__$1 = G__36897;while(true){
var data__$2 = data__$1;var owner__$2 = owner__$1;var map__36899 = G__36897__$1;var map__36899__$1 = ((cljs.core.seq_QMARK_.call(null,map__36899))?cljs.core.apply.call(null,cljs.core.hash_map,map__36899):map__36899);var opts__$1 = map__36899__$1;var chan_add__$1 = cljs.core.get.call(null,map__36899__$1,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var chan_del__$1 = cljs.core.get.call(null,map__36899__$1,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));if(typeof demo_app.product_types.product_type_props.views.t36900 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.product_type_props.views.t36900 = (function (map__36898,chan_del,validate__23102__auto__,owner,output_schema36882,data,G__36886,input_schema36883,input_checker36884,G__36887,G__36888,G__36897,product_type_prop_input,map__36899,chan_add,output_checker36885,opts,ufv__,meta36901){
this.map__36898 = map__36898;
this.chan_del = chan_del;
this.validate__23102__auto__ = validate__23102__auto__;
this.owner = owner;
this.output_schema36882 = output_schema36882;
this.data = data;
this.G__36886 = G__36886;
this.input_schema36883 = input_schema36883;
this.input_checker36884 = input_checker36884;
this.G__36887 = G__36887;
this.G__36888 = G__36888;
this.G__36897 = G__36897;
this.product_type_prop_input = product_type_prop_input;
this.map__36899 = map__36899;
this.chan_add = chan_add;
this.output_checker36885 = output_checker36885;
this.opts = opts;
this.ufv__ = ufv__;
this.meta36901 = meta36901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.product_type_props.views.t36900.cljs$lang$type = true;
demo_app.product_types.product_type_props.views.t36900.cljs$lang$ctorStr = "demo-app.product-types.product-type-props.views/t36900";
demo_app.product_types.product_type_props.views.t36900.cljs$lang$ctorPrWriter = ((function (data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del){
return (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"demo-app.product-types.product-type-props.views/t36900");
});})(data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.t36900.prototype.om$core$IRender$ = true;
demo_app.product_types.product_type_props.views.t36900.prototype.om$core$IRender$render$arity$1 = ((function (data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.li,om.dom.input.call(null,{"onChange": ((function (___$1,data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del){
return (function (p1__36880_SHARP_){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword("prop","name","prop/name",1238093944),p1__36880_SHARP_.target.value);
});})(___$1,data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del))
, "value": new cljs.core.Keyword("prop","name","prop/name",1238093944).cljs$core$IFn$_invoke$arity$1(self__.data), "type": "text"}),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"onClick": ((function (___$1,data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.chan_del,cljs.core.deref.call(null,self__.data));
});})(___$1,data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del))
},"Delete")],null)));
});})(data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.t36900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del){
return (function (_36902){var self__ = this;
var _36902__$1 = this;return self__.meta36901;
});})(data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.t36900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del){
return (function (_36902,meta36901__$1){var self__ = this;
var _36902__$1 = this;return (new demo_app.product_types.product_type_props.views.t36900(self__.map__36898,self__.chan_del,self__.validate__23102__auto__,self__.owner,self__.output_schema36882,self__.data,self__.G__36886,self__.input_schema36883,self__.input_checker36884,self__.G__36887,self__.G__36888,self__.G__36897,self__.product_type_prop_input,self__.map__36899,self__.chan_add,self__.output_checker36885,self__.opts,self__.ufv__,meta36901__$1));
});})(data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.__GT_t36900 = ((function (data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del){
return (function __GT_t36900(map__36898__$2,chan_del__$2,validate__23102__auto____$1,owner__$3,output_schema36882__$1,data__$3,G__36886__$1,input_schema36883__$1,input_checker36884__$1,G__36887__$1,G__36888__$1,G__36897__$2,product_type_prop_input__$1,map__36899__$2,chan_add__$2,output_checker36885__$1,opts__$2,ufv____$1,meta36901){return (new demo_app.product_types.product_type_props.views.t36900(map__36898__$2,chan_del__$2,validate__23102__auto____$1,owner__$3,output_schema36882__$1,data__$3,G__36886__$1,input_schema36883__$1,input_checker36884__$1,G__36887__$1,G__36888__$1,G__36897__$2,product_type_prop_input__$1,map__36899__$2,chan_add__$2,output_checker36885__$1,opts__$2,ufv____$1,meta36901));
});})(data__$2,owner__$2,map__36899,map__36899__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__36897,map__36898,map__36898__$1,opts,chan_add,chan_del))
;
}
return (new demo_app.product_types.product_type_props.views.t36900(map__36898__$1,chan_del__$1,validate__23102__auto__,owner__$2,output_schema36882_36904,data__$2,G__36886,input_schema36883_36905,input_checker36884_36906,G__36887,G__36888,G__36897__$1,product_type_prop_input,map__36899__$1,chan_add__$1,output_checker36885_36907,opts__$1,ufv___36903,null));
break;
}
})();if(cljs.core.truth_(validate__23102__auto__))
{var temp__4126__auto___36911 = output_checker36885_36907.call(null,o__23105__auto__);if(cljs.core.truth_(temp__4126__auto___36911))
{var error__23104__auto___36912 = temp__4126__auto___36911;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-prop-input","product-type-prop-input",-1803471314,null),cljs.core.pr_str.call(null,error__23104__auto___36912)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema36882_36904,new cljs.core.Keyword(null,"value","value",1125876963),o__23105__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___36912], null));
} else
{}
} else
{}
return o__23105__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input),schema.core.make_fn_schema.call(null,output_schema36882_36904,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36883_36905], null)));
demo_app.product_types.product_type_props.views.__GT_product_type_prop_input = (function() {
var __GT_product_type_prop_input = null;
var __GT_product_type_prop_input__1 = (function (cursor__29232__auto__){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input,cursor__29232__auto__);
});
var __GT_product_type_prop_input__2 = (function (cursor__29232__auto__,m36881){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input,cursor__29232__auto__,m36881);
});
__GT_product_type_prop_input = function(cursor__29232__auto__,m36881){
switch(arguments.length){
case 1:
return __GT_product_type_prop_input__1.call(this,cursor__29232__auto__);
case 2:
return __GT_product_type_prop_input__2.call(this,cursor__29232__auto__,m36881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_type_prop_input.cljs$core$IFn$_invoke$arity$1 = __GT_product_type_prop_input__1;
__GT_product_type_prop_input.cljs$core$IFn$_invoke$arity$2 = __GT_product_type_prop_input__2;
return __GT_product_type_prop_input;
})()
;
var ufv___37020 = schema.utils.use_fn_validation;var output_schema36916_37021 = schema.core.Any;var input_schema36917_37022 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker36918_37023 = schema.core.checker.call(null,input_schema36917_37022);var output_checker36919_37024 = schema.core.checker.call(null,output_schema36916_37021);/**
* Inputs: [data owner]
*/
demo_app.product_types.product_type_props.views.product_type_props = (function product_type_props(G__36920,G__36921){var validate__23102__auto__ = ufv___37020.get_cell();if(cljs.core.truth_(validate__23102__auto__))
{var args__23103__auto___37025 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__36920,G__36921], null);var temp__4126__auto___37026 = input_checker36918_37023.call(null,args__23103__auto___37025);if(cljs.core.truth_(temp__4126__auto___37026))
{var error__23104__auto___37027 = temp__4126__auto___37026;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-props","product-type-props",-75393420,null),cljs.core.pr_str.call(null,error__23104__auto___37027)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema36917_37022,new cljs.core.Keyword(null,"value","value",1125876963),args__23103__auto___37025,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___37027], null));
} else
{}
} else
{}
var o__23105__auto__ = (function (){var data = G__36920;var owner = G__36921;while(true){
if(typeof demo_app.product_types.product_type_props.views.t36971 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.product_type_props.views.t36971 = (function (product_type_props,output_checker36919,validate__23102__auto__,owner,data,input_checker36918,output_schema36916,G__36921,G__36920,input_schema36917,ufv__,meta36972){
this.product_type_props = product_type_props;
this.output_checker36919 = output_checker36919;
this.validate__23102__auto__ = validate__23102__auto__;
this.owner = owner;
this.data = data;
this.input_checker36918 = input_checker36918;
this.output_schema36916 = output_schema36916;
this.G__36921 = G__36921;
this.G__36920 = G__36920;
this.input_schema36917 = input_schema36917;
this.ufv__ = ufv__;
this.meta36972 = meta36972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.product_type_props.views.t36971.cljs$lang$type = true;
demo_app.product_types.product_type_props.views.t36971.cljs$lang$ctorStr = "demo-app.product-types.product-type-props.views/t36971";
demo_app.product_types.product_type_props.views.t36971.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"demo-app.product-types.product-type-props.views/t36971");
});
demo_app.product_types.product_type_props.views.t36971.prototype.om$core$IRenderState$ = true;
demo_app.product_types.product_type_props.views.t36971.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__36974){var self__ = this;
var map__36975 = p__36974;var map__36975__$1 = ((cljs.core.seq_QMARK_.call(null,map__36975))?cljs.core.apply.call(null,cljs.core.hash_map,map__36975):map__36975);var state = map__36975__$1;var chan_del = cljs.core.get.call(null,map__36975__$1,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));var chan_add = cljs.core.get.call(null,map__36975__$1,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var this$__$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.ul,om.core.build_all.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input,new cljs.core.Keyword("product-type","props","product-type/props",3066878432).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan-del","chan-del",2444592770),chan_del,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848),chan_add], null)], null)),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,React.DOM.button({"onClick": ((function (this$__$1,map__36975,map__36975__$1,state,chan_del,chan_add){
return (function (){return cljs.core.async.put_BANG_.call(null,chan_add,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("prop","name","prop/name",1238093944),"",new cljs.core.Keyword("prop","kind","prop/kind",1239584575),"text"], null));
});})(this$__$1,map__36975,map__36975__$1,state,chan_del,chan_add))
},"New Product Type Prop"),cljs.core.PersistentVector.EMPTY)],null))),cljs.core.PersistentVector.EMPTY);
});
demo_app.product_types.product_type_props.views.t36971.prototype.om$core$IWillMount$ = true;
demo_app.product_types.product_type_props.views.t36971.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var chan_del_37028 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));var c__26736__auto___37029 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__26736__auto___37029,chan_del_37028,___$1){
return (function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = ((function (c__26736__auto___37029,chan_del_37028,___$1){
return (function (state_36987){var state_val_36988 = (state_36987[1]);if((state_val_36988 === 4))
{var inst_36978 = (state_36987[2]);var inst_36979 = (function (){var product_type_prop = inst_36978;return ((function (product_type_prop,inst_36978,state_val_36988,c__26736__auto___37029,chan_del_37028,___$1){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (product_type_prop,inst_36978,state_val_36988,c__26736__auto___37029,chan_del_37028,___$1){
return (function (p1__36913_SHARP_){return (product_type_prop === p1__36913_SHARP_);
});})(product_type_prop,inst_36978,state_val_36988,c__26736__auto___37029,chan_del_37028,___$1))
,xs));
});
;})(product_type_prop,inst_36978,state_val_36988,c__26736__auto___37029,chan_del_37028,___$1))
})();var inst_36980 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword("product-type","props","product-type/props",3066878432),inst_36979);var inst_36981 = (function (){var product_type_prop = inst_36978;return ((function (product_type_prop,inst_36978,inst_36979,inst_36980,state_val_36988,c__26736__auto___37029,chan_del_37028,___$1){
return (function (p1__36914_SHARP_){return cljs.core.conj.call(null,cljs.core.vec.call(null,p1__36914_SHARP_),product_type_prop);
});
;})(product_type_prop,inst_36978,inst_36979,inst_36980,state_val_36988,c__26736__auto___37029,chan_del_37028,___$1))
})();var inst_36982 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"to-delete","to-delete",1928504495),inst_36981);var state_36987__$1 = (function (){var statearr_36989 = state_36987;(statearr_36989[7] = inst_36982);
(statearr_36989[8] = inst_36980);
return statearr_36989;
})();var statearr_36990_37030 = state_36987__$1;(statearr_36990_37030[2] = null);
(statearr_36990_37030[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36988 === 3))
{var inst_36985 = (state_36987[2]);var state_36987__$1 = state_36987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36987__$1,inst_36985);
} else
{if((state_val_36988 === 2))
{var state_36987__$1 = state_36987;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36987__$1,4,chan_del_37028);
} else
{if((state_val_36988 === 1))
{var state_36987__$1 = state_36987;var statearr_36991_37031 = state_36987__$1;(statearr_36991_37031[2] = null);
(statearr_36991_37031[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__26736__auto___37029,chan_del_37028,___$1))
;return ((function (switch__26672__auto__,c__26736__auto___37029,chan_del_37028,___$1){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_36995 = [null,null,null,null,null,null,null,null,null];(statearr_36995[0] = state_machine__26673__auto__);
(statearr_36995[1] = 1);
return statearr_36995;
});
var state_machine__26673__auto____1 = (function (state_36987){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_36987);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e36996){if((e36996 instanceof Object))
{var ex__26676__auto__ = e36996;var statearr_36997_37032 = state_36987;(statearr_36997_37032[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36987);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36996;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37033 = state_36987;
state_36987 = G__37033;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_36987){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_36987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__,c__26736__auto___37029,chan_del_37028,___$1))
})();var state__26738__auto__ = (function (){var statearr_36998 = f__26737__auto__.call(null);(statearr_36998[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___37029);
return statearr_36998;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
});})(c__26736__auto___37029,chan_del_37028,___$1))
);
var chan_add = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var c__26736__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__26736__auto__,chan_add,___$1){
return (function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = ((function (c__26736__auto__,chan_add,___$1){
return (function (state_37008){var state_val_37009 = (state_37008[1]);if((state_val_37009 === 4))
{var inst_37001 = (state_37008[2]);var inst_37002 = (function (){var product_type_prop = inst_37001;return ((function (product_type_prop,inst_37001,state_val_37009,c__26736__auto__,chan_add,___$1){
return (function (xs){return cljs.core.conj.call(null,xs,product_type_prop);
});
;})(product_type_prop,inst_37001,state_val_37009,c__26736__auto__,chan_add,___$1))
})();var inst_37003 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword("product-type","props","product-type/props",3066878432),inst_37002);var state_37008__$1 = (function (){var statearr_37010 = state_37008;(statearr_37010[7] = inst_37003);
return statearr_37010;
})();var statearr_37011_37034 = state_37008__$1;(statearr_37011_37034[2] = null);
(statearr_37011_37034[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37009 === 3))
{var inst_37006 = (state_37008[2]);var state_37008__$1 = state_37008;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37008__$1,inst_37006);
} else
{if((state_val_37009 === 2))
{var state_37008__$1 = state_37008;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37008__$1,4,chan_add);
} else
{if((state_val_37009 === 1))
{var state_37008__$1 = state_37008;var statearr_37012_37035 = state_37008__$1;(statearr_37012_37035[2] = null);
(statearr_37012_37035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__26736__auto__,chan_add,___$1))
;return ((function (switch__26672__auto__,c__26736__auto__,chan_add,___$1){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_37016 = [null,null,null,null,null,null,null,null];(statearr_37016[0] = state_machine__26673__auto__);
(statearr_37016[1] = 1);
return statearr_37016;
});
var state_machine__26673__auto____1 = (function (state_37008){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_37008);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e37017){if((e37017 instanceof Object))
{var ex__26676__auto__ = e37017;var statearr_37018_37036 = state_37008;(statearr_37018_37036[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37008);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37017;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37037 = state_37008;
state_37008 = G__37037;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_37008){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_37008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__,c__26736__auto__,chan_add,___$1))
})();var state__26738__auto__ = (function (){var statearr_37019 = f__26737__auto__.call(null);(statearr_37019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto__);
return statearr_37019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
});})(c__26736__auto__,chan_add,___$1))
);
return c__26736__auto__;
});
demo_app.product_types.product_type_props.views.t36971.prototype.om$core$IInitState$ = true;
demo_app.product_types.product_type_props.views.t36971.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan-del","chan-del",2444592770),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"chan-add","chan-add",2444589848),cljs.core.async.chan.call(null)], null);
});
demo_app.product_types.product_type_props.views.t36971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36973){var self__ = this;
var _36973__$1 = this;return self__.meta36972;
});
demo_app.product_types.product_type_props.views.t36971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36973,meta36972__$1){var self__ = this;
var _36973__$1 = this;return (new demo_app.product_types.product_type_props.views.t36971(self__.product_type_props,self__.output_checker36919,self__.validate__23102__auto__,self__.owner,self__.data,self__.input_checker36918,self__.output_schema36916,self__.G__36921,self__.G__36920,self__.input_schema36917,self__.ufv__,meta36972__$1));
});
demo_app.product_types.product_type_props.views.__GT_t36971 = (function __GT_t36971(product_type_props__$1,output_checker36919__$1,validate__23102__auto____$1,owner__$1,data__$1,input_checker36918__$1,output_schema36916__$1,G__36921__$1,G__36920__$1,input_schema36917__$1,ufv____$1,meta36972){return (new demo_app.product_types.product_type_props.views.t36971(product_type_props__$1,output_checker36919__$1,validate__23102__auto____$1,owner__$1,data__$1,input_checker36918__$1,output_schema36916__$1,G__36921__$1,G__36920__$1,input_schema36917__$1,ufv____$1,meta36972));
});
}
return (new demo_app.product_types.product_type_props.views.t36971(product_type_props,output_checker36919_37024,validate__23102__auto__,owner,data,input_checker36918_37023,output_schema36916_37021,G__36921,G__36920,input_schema36917_37022,ufv___37020,null));
break;
}
})();if(cljs.core.truth_(validate__23102__auto__))
{var temp__4126__auto___37038 = output_checker36919_37024.call(null,o__23105__auto__);if(cljs.core.truth_(temp__4126__auto___37038))
{var error__23104__auto___37039 = temp__4126__auto___37038;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-props","product-type-props",-75393420,null),cljs.core.pr_str.call(null,error__23104__auto___37039)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema36916_37021,new cljs.core.Keyword(null,"value","value",1125876963),o__23105__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___37039], null));
} else
{}
} else
{}
return o__23105__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.product_type_props.views.product_type_props),schema.core.make_fn_schema.call(null,output_schema36916_37021,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema36917_37022], null)));
demo_app.product_types.product_type_props.views.__GT_product_type_props = (function() {
var __GT_product_type_props = null;
var __GT_product_type_props__1 = (function (cursor__29232__auto__){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_props,cursor__29232__auto__);
});
var __GT_product_type_props__2 = (function (cursor__29232__auto__,m36915){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_props,cursor__29232__auto__,m36915);
});
__GT_product_type_props = function(cursor__29232__auto__,m36915){
switch(arguments.length){
case 1:
return __GT_product_type_props__1.call(this,cursor__29232__auto__);
case 2:
return __GT_product_type_props__2.call(this,cursor__29232__auto__,m36915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_type_props.cljs$core$IFn$_invoke$arity$1 = __GT_product_type_props__1;
__GT_product_type_props.cljs$core$IFn$_invoke$arity$2 = __GT_product_type_props__2;
return __GT_product_type_props;
})()
;

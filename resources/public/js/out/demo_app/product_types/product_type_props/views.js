// Compiled by ClojureScript 0.0-2156
goog.provide('demo_app.product_types.product_type_props.views');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('demo_app.api');
goog.require('om_tools.core');
goog.require('clojure.data');
goog.require('clojure.data');
goog.require('cljs.reader');
goog.require('om_tools.dom');
goog.require('om.core');
goog.require('clojure.string');
goog.require('om.core');
goog.require('demo_app.api');
goog.require('clojure.string');
goog.require('cljs.reader');
goog.require('om_tools.dom');
goog.require('cljs.core.async');
var ufv___89258 = schema.utils.use_fn_validation;var output_schema89237_89259 = schema.core.Any;var input_schema89238_89260 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg2","arg2",-1637529003,null))], null);var input_checker89239_89261 = schema.core.checker.call(null,input_schema89238_89260);var output_checker89240_89262 = schema.core.checker.call(null,output_schema89237_89259);/**
* Inputs: [data owner {:keys [chan-del chan-add], :as opts}]
*/
demo_app.product_types.product_type_props.views.product_type_prop_input = (function product_type_prop_input(G__89241,G__89242,G__89243){var validate__9355__auto__ = ufv___89258.get_cell();if(cljs.core.truth_(validate__9355__auto__))
{var args__9356__auto___89263 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__89241,G__89242,G__89243], null);var temp__4092__auto___89264 = input_checker89239_89261.call(null,args__9356__auto___89263);if(cljs.core.truth_(temp__4092__auto___89264))
{var error__9357__auto___89265 = temp__4092__auto___89264;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-prop-input","product-type-prop-input",-1803471314,null),cljs.core.pr_str.call(null,error__9357__auto___89265)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___89265,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema89238_89260,new cljs.core.Keyword(null,"value","value",1125876963),args__9356__auto___89263], null));
} else
{}
} else
{}
var o__9358__auto__ = (function (){var data = G__89241;var owner = G__89242;var G__89252 = G__89243;var map__89253 = G__89252;var map__89253__$1 = ((cljs.core.seq_QMARK_.call(null,map__89253))?cljs.core.apply.call(null,cljs.core.hash_map,map__89253):map__89253);var opts = map__89253__$1;var chan_add = cljs.core.get.call(null,map__89253__$1,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var chan_del = cljs.core.get.call(null,map__89253__$1,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));var data__$1 = data;var owner__$1 = owner;var G__89252__$1 = G__89252;while(true){
var data__$2 = data__$1;var owner__$2 = owner__$1;var map__89254 = G__89252__$1;var map__89254__$1 = ((cljs.core.seq_QMARK_.call(null,map__89254))?cljs.core.apply.call(null,cljs.core.hash_map,map__89254):map__89254);var opts__$1 = map__89254__$1;var chan_add__$1 = cljs.core.get.call(null,map__89254__$1,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var chan_del__$1 = cljs.core.get.call(null,map__89254__$1,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));if(typeof demo_app.product_types.product_type_props.views.t89255 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.product_type_props.views.t89255 = (function (opts,map__89254,product_type_prop_input,chan_add,G__89252,map__89253,ufv__,input_schema89238,data,output_schema89237,chan_del,output_checker89240,validate__9355__auto__,G__89243,G__89242,owner,G__89241,input_checker89239,meta89256){
this.opts = opts;
this.map__89254 = map__89254;
this.product_type_prop_input = product_type_prop_input;
this.chan_add = chan_add;
this.G__89252 = G__89252;
this.map__89253 = map__89253;
this.ufv__ = ufv__;
this.input_schema89238 = input_schema89238;
this.data = data;
this.output_schema89237 = output_schema89237;
this.chan_del = chan_del;
this.output_checker89240 = output_checker89240;
this.validate__9355__auto__ = validate__9355__auto__;
this.G__89243 = G__89243;
this.G__89242 = G__89242;
this.owner = owner;
this.G__89241 = G__89241;
this.input_checker89239 = input_checker89239;
this.meta89256 = meta89256;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.product_type_props.views.t89255.cljs$lang$type = true;
demo_app.product_types.product_type_props.views.t89255.cljs$lang$ctorStr = "demo-app.product-types.product-type-props.views/t89255";
demo_app.product_types.product_type_props.views.t89255.cljs$lang$ctorPrWriter = ((function (data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"demo-app.product-types.product-type-props.views/t89255");
});})(data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.t89255.prototype.om$core$IRender$ = true;
demo_app.product_types.product_type_props.views.t89255.prototype.om$core$IRender$render$arity$1 = ((function (data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.li,om.dom.input.call(null,{"onChange": ((function (___$1,data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del){
return (function (p1__89234_SHARP_){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword("prop","name","prop/name",1238093944),p1__89234_SHARP_.target.value);
});})(___$1,data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del))
, "value": new cljs.core.Keyword("prop","name","prop/name",1238093944).cljs$core$IFn$_invoke$arity$1(self__.data), "placeholder": "Name", "type": "text"}),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[om.dom.input.call(null,{"onChange": ((function (___$1,data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del){
return (function (p1__89235_SHARP_){return om.core.update_BANG_.call(null,self__.data,new cljs.core.Keyword("prop","kind","prop/kind",1239584575),p1__89235_SHARP_.target.value);
});})(___$1,data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del))
, "value": new cljs.core.Keyword("prop","kind","prop/kind",1239584575).cljs$core$IFn$_invoke$arity$1(self__.data), "placeholder": "Kind", "type": "text"}),React.DOM.button({"onClick": ((function (___$1,data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del){
return (function (){return cljs.core.async.put_BANG_.call(null,self__.chan_del,cljs.core.deref.call(null,self__.data));
});})(___$1,data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del))
},"Delete")],null)));
});})(data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.t89255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del){
return (function (_89257){var self__ = this;
var _89257__$1 = this;return self__.meta89256;
});})(data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.t89255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del){
return (function (_89257,meta89256__$1){var self__ = this;
var _89257__$1 = this;return (new demo_app.product_types.product_type_props.views.t89255(self__.opts,self__.map__89254,self__.product_type_prop_input,self__.chan_add,self__.G__89252,self__.map__89253,self__.ufv__,self__.input_schema89238,self__.data,self__.output_schema89237,self__.chan_del,self__.output_checker89240,self__.validate__9355__auto__,self__.G__89243,self__.G__89242,self__.owner,self__.G__89241,self__.input_checker89239,meta89256__$1));
});})(data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del))
;
demo_app.product_types.product_type_props.views.__GT_t89255 = ((function (data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del){
return (function __GT_t89255(opts__$2,map__89254__$2,product_type_prop_input__$1,chan_add__$2,G__89252__$2,map__89253__$2,ufv____$1,input_schema89238__$1,data__$3,output_schema89237__$1,chan_del__$2,output_checker89240__$1,validate__9355__auto____$1,G__89243__$1,G__89242__$1,owner__$3,G__89241__$1,input_checker89239__$1,meta89256){return (new demo_app.product_types.product_type_props.views.t89255(opts__$2,map__89254__$2,product_type_prop_input__$1,chan_add__$2,G__89252__$2,map__89253__$2,ufv____$1,input_schema89238__$1,data__$3,output_schema89237__$1,chan_del__$2,output_checker89240__$1,validate__9355__auto____$1,G__89243__$1,G__89242__$1,owner__$3,G__89241__$1,input_checker89239__$1,meta89256));
});})(data__$2,owner__$2,map__89254,map__89254__$1,opts__$1,chan_add__$1,chan_del__$1,data,owner,G__89252,map__89253,map__89253__$1,opts,chan_add,chan_del))
;
}
return (new demo_app.product_types.product_type_props.views.t89255(opts__$1,map__89254__$1,product_type_prop_input,chan_add__$1,G__89252__$1,map__89253__$1,ufv___89258,input_schema89238_89260,data__$2,output_schema89237_89259,chan_del__$1,output_checker89240_89262,validate__9355__auto__,G__89243,G__89242,owner__$2,G__89241,input_checker89239_89261,null));
break;
}
})();if(cljs.core.truth_(validate__9355__auto__))
{var temp__4092__auto___89266 = output_checker89240_89262.call(null,o__9358__auto__);if(cljs.core.truth_(temp__4092__auto___89266))
{var error__9357__auto___89267 = temp__4092__auto___89266;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-prop-input","product-type-prop-input",-1803471314,null),cljs.core.pr_str.call(null,error__9357__auto___89267)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___89267,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema89237_89259,new cljs.core.Keyword(null,"value","value",1125876963),o__9358__auto__], null));
} else
{}
} else
{}
return o__9358__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input),schema.core.make_fn_schema.call(null,output_schema89237_89259,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema89238_89260], null)));
demo_app.product_types.product_type_props.views.__GT_product_type_prop_input = (function() {
var __GT_product_type_prop_input = null;
var __GT_product_type_prop_input__1 = (function (cursor__11123__auto__){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input,cursor__11123__auto__);
});
var __GT_product_type_prop_input__2 = (function (cursor__11123__auto__,m89236){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input,cursor__11123__auto__,m89236);
});
__GT_product_type_prop_input = function(cursor__11123__auto__,m89236){
switch(arguments.length){
case 1:
return __GT_product_type_prop_input__1.call(this,cursor__11123__auto__);
case 2:
return __GT_product_type_prop_input__2.call(this,cursor__11123__auto__,m89236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_type_prop_input.cljs$core$IFn$_invoke$arity$1 = __GT_product_type_prop_input__1;
__GT_product_type_prop_input.cljs$core$IFn$_invoke$arity$2 = __GT_product_type_prop_input__2;
return __GT_product_type_prop_input;
})()
;
var ufv___89375 = schema.utils.use_fn_validation;var output_schema89271_89376 = schema.core.Any;var input_schema89272_89377 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"data","data",-1637455517,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",-1534366612,null))], null);var input_checker89273_89378 = schema.core.checker.call(null,input_schema89272_89377);var output_checker89274_89379 = schema.core.checker.call(null,output_schema89271_89376);/**
* Inputs: [data owner]
*/
demo_app.product_types.product_type_props.views.product_type_props = (function product_type_props(G__89275,G__89276){var validate__9355__auto__ = ufv___89375.get_cell();if(cljs.core.truth_(validate__9355__auto__))
{var args__9356__auto___89380 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__89275,G__89276], null);var temp__4092__auto___89381 = input_checker89273_89378.call(null,args__9356__auto___89380);if(cljs.core.truth_(temp__4092__auto___89381))
{var error__9357__auto___89382 = temp__4092__auto___89381;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-props","product-type-props",-75393420,null),cljs.core.pr_str.call(null,error__9357__auto___89382)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___89382,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema89272_89377,new cljs.core.Keyword(null,"value","value",1125876963),args__9356__auto___89380], null));
} else
{}
} else
{}
var o__9358__auto__ = (function (){var data = G__89275;var owner = G__89276;while(true){
if(typeof demo_app.product_types.product_type_props.views.t89326 !== 'undefined')
{} else
{
/**
* @constructor
*/
demo_app.product_types.product_type_props.views.t89326 = (function (output_checker89274,ufv__,data,input_checker89273,validate__9355__auto__,owner,G__89276,input_schema89272,G__89275,product_type_props,output_schema89271,meta89327){
this.output_checker89274 = output_checker89274;
this.ufv__ = ufv__;
this.data = data;
this.input_checker89273 = input_checker89273;
this.validate__9355__auto__ = validate__9355__auto__;
this.owner = owner;
this.G__89276 = G__89276;
this.input_schema89272 = input_schema89272;
this.G__89275 = G__89275;
this.product_type_props = product_type_props;
this.output_schema89271 = output_schema89271;
this.meta89327 = meta89327;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
demo_app.product_types.product_type_props.views.t89326.cljs$lang$type = true;
demo_app.product_types.product_type_props.views.t89326.cljs$lang$ctorStr = "demo-app.product-types.product-type-props.views/t89326";
demo_app.product_types.product_type_props.views.t89326.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"demo-app.product-types.product-type-props.views/t89326");
});
demo_app.product_types.product_type_props.views.t89326.prototype.om$core$IRenderState$ = true;
demo_app.product_types.product_type_props.views.t89326.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,p__89329){var self__ = this;
var map__89330 = p__89329;var map__89330__$1 = ((cljs.core.seq_QMARK_.call(null,map__89330))?cljs.core.apply.call(null,cljs.core.hash_map,map__89330):map__89330);var state = map__89330__$1;var chan_del = cljs.core.get.call(null,map__89330__$1,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));var chan_add = cljs.core.get.call(null,map__89330__$1,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var this$__$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.div,om_tools.dom.element.call(null,React.DOM.ul,om.core.build_all.call(null,demo_app.product_types.product_type_props.views.product_type_prop_input,new cljs.core.Keyword("product-type","props","product-type/props",3066878432).cljs$core$IFn$_invoke$arity$1(self__.data),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",1017322386),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan-del","chan-del",2444592770),chan_del,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848),chan_add], null)], null)),cljs.core.PersistentVector.EMPTY),(new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,[om_tools.dom.element.call(null,React.DOM.div,React.DOM.button({"onClick": ((function (this$__$1,map__89330,map__89330__$1,state,chan_del,chan_add){
return (function (){return cljs.core.async.put_BANG_.call(null,chan_add,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("prop","name","prop/name",1238093944),"",new cljs.core.Keyword("prop","kind","prop/kind",1239584575),"text"], null));
});})(this$__$1,map__89330,map__89330__$1,state,chan_del,chan_add))
},"New Product Type Prop"),cljs.core.PersistentVector.EMPTY)],null))),cljs.core.PersistentVector.EMPTY);
});
demo_app.product_types.product_type_props.views.t89326.prototype.om$core$IWillMount$ = true;
demo_app.product_types.product_type_props.views.t89326.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;var chan_del_89383 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"chan-del","chan-del",2444592770));var c__5524__auto___89384 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5524__auto___89384,chan_del_89383,___$1){
return (function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = ((function (c__5524__auto___89384,chan_del_89383,___$1){
return (function (state_89342){var state_val_89343 = (state_89342[1]);if((state_val_89343 === 4))
{var inst_89333 = (state_89342[2]);var inst_89334 = (function (){var product_type_prop = inst_89333;return ((function (product_type_prop,inst_89333,state_val_89343,c__5524__auto___89384,chan_del_89383,___$1){
return (function (xs){return cljs.core.vec.call(null,cljs.core.remove.call(null,((function (product_type_prop,inst_89333,state_val_89343,c__5524__auto___89384,chan_del_89383,___$1){
return (function (p1__89268_SHARP_){return (product_type_prop === p1__89268_SHARP_);
});})(product_type_prop,inst_89333,state_val_89343,c__5524__auto___89384,chan_del_89383,___$1))
,xs));
});
;})(product_type_prop,inst_89333,state_val_89343,c__5524__auto___89384,chan_del_89383,___$1))
})();var inst_89335 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword("product-type","props","product-type/props",3066878432),inst_89334);var inst_89336 = (function (){var product_type_prop = inst_89333;return ((function (product_type_prop,inst_89333,inst_89334,inst_89335,state_val_89343,c__5524__auto___89384,chan_del_89383,___$1){
return (function (p1__89269_SHARP_){return cljs.core.conj.call(null,cljs.core.vec.call(null,p1__89269_SHARP_),product_type_prop);
});
;})(product_type_prop,inst_89333,inst_89334,inst_89335,state_val_89343,c__5524__auto___89384,chan_del_89383,___$1))
})();var inst_89337 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword(null,"to-delete","to-delete",1928504495),inst_89336);var state_89342__$1 = (function (){var statearr_89344 = state_89342;(statearr_89344[7] = inst_89337);
(statearr_89344[8] = inst_89335);
return statearr_89344;
})();var statearr_89345_89385 = state_89342__$1;(statearr_89345_89385[2] = null);
(statearr_89345_89385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89343 === 3))
{var inst_89340 = (state_89342[2]);var state_89342__$1 = state_89342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89342__$1,inst_89340);
} else
{if((state_val_89343 === 2))
{var state_89342__$1 = state_89342;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89342__$1,4,chan_del_89383);
} else
{if((state_val_89343 === 1))
{var state_89342__$1 = state_89342;var statearr_89346_89386 = state_89342__$1;(statearr_89346_89386[2] = null);
(statearr_89346_89386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__5524__auto___89384,chan_del_89383,___$1))
;return ((function (switch__5509__auto__,c__5524__auto___89384,chan_del_89383,___$1){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_89350 = [null,null,null,null,null,null,null,null,null];(statearr_89350[0] = state_machine__5510__auto__);
(statearr_89350[1] = 1);
return statearr_89350;
});
var state_machine__5510__auto____1 = (function (state_89342){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_89342);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e89351){if((e89351 instanceof Object))
{var ex__5513__auto__ = e89351;var statearr_89352_89387 = state_89342;(statearr_89352_89387[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89342);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e89351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__89388 = state_89342;
state_89342 = G__89388;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_89342){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_89342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__,c__5524__auto___89384,chan_del_89383,___$1))
})();var state__5526__auto__ = (function (){var statearr_89353 = f__5525__auto__.call(null);(statearr_89353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___89384);
return statearr_89353;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
});})(c__5524__auto___89384,chan_del_89383,___$1))
);
var chan_add = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"chan-add","chan-add",2444589848));var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__5524__auto__,chan_add,___$1){
return (function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = ((function (c__5524__auto__,chan_add,___$1){
return (function (state_89363){var state_val_89364 = (state_89363[1]);if((state_val_89364 === 4))
{var inst_89356 = (state_89363[2]);var inst_89357 = (function (){var product_type_prop = inst_89356;return ((function (product_type_prop,inst_89356,state_val_89364,c__5524__auto__,chan_add,___$1){
return (function (xs){return cljs.core.conj.call(null,xs,product_type_prop);
});
;})(product_type_prop,inst_89356,state_val_89364,c__5524__auto__,chan_add,___$1))
})();var inst_89358 = om.core.transact_BANG_.call(null,self__.data,new cljs.core.Keyword("product-type","props","product-type/props",3066878432),inst_89357);var state_89363__$1 = (function (){var statearr_89365 = state_89363;(statearr_89365[7] = inst_89358);
return statearr_89365;
})();var statearr_89366_89389 = state_89363__$1;(statearr_89366_89389[2] = null);
(statearr_89366_89389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_89364 === 3))
{var inst_89361 = (state_89363[2]);var state_89363__$1 = state_89363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_89363__$1,inst_89361);
} else
{if((state_val_89364 === 2))
{var state_89363__$1 = state_89363;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_89363__$1,4,chan_add);
} else
{if((state_val_89364 === 1))
{var state_89363__$1 = state_89363;var statearr_89367_89390 = state_89363__$1;(statearr_89367_89390[2] = null);
(statearr_89367_89390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
});})(c__5524__auto__,chan_add,___$1))
;return ((function (switch__5509__auto__,c__5524__auto__,chan_add,___$1){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_89371 = [null,null,null,null,null,null,null,null];(statearr_89371[0] = state_machine__5510__auto__);
(statearr_89371[1] = 1);
return statearr_89371;
});
var state_machine__5510__auto____1 = (function (state_89363){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_89363);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e89372){if((e89372 instanceof Object))
{var ex__5513__auto__ = e89372;var statearr_89373_89391 = state_89363;(statearr_89373_89391[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_89363);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e89372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__89392 = state_89363;
state_89363 = G__89392;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_89363){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_89363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__,c__5524__auto__,chan_add,___$1))
})();var state__5526__auto__ = (function (){var statearr_89374 = f__5525__auto__.call(null);(statearr_89374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_89374;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
});})(c__5524__auto__,chan_add,___$1))
);
return c__5524__auto__;
});
demo_app.product_types.product_type_props.views.t89326.prototype.om$core$IInitState$ = true;
demo_app.product_types.product_type_props.views.t89326.prototype.om$core$IInitState$init_state$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"chan-del","chan-del",2444592770),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"chan-add","chan-add",2444589848),cljs.core.async.chan.call(null)], null);
});
demo_app.product_types.product_type_props.views.t89326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_89328){var self__ = this;
var _89328__$1 = this;return self__.meta89327;
});
demo_app.product_types.product_type_props.views.t89326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_89328,meta89327__$1){var self__ = this;
var _89328__$1 = this;return (new demo_app.product_types.product_type_props.views.t89326(self__.output_checker89274,self__.ufv__,self__.data,self__.input_checker89273,self__.validate__9355__auto__,self__.owner,self__.G__89276,self__.input_schema89272,self__.G__89275,self__.product_type_props,self__.output_schema89271,meta89327__$1));
});
demo_app.product_types.product_type_props.views.__GT_t89326 = (function __GT_t89326(output_checker89274__$1,ufv____$1,data__$1,input_checker89273__$1,validate__9355__auto____$1,owner__$1,G__89276__$1,input_schema89272__$1,G__89275__$1,product_type_props__$1,output_schema89271__$1,meta89327){return (new demo_app.product_types.product_type_props.views.t89326(output_checker89274__$1,ufv____$1,data__$1,input_checker89273__$1,validate__9355__auto____$1,owner__$1,G__89276__$1,input_schema89272__$1,G__89275__$1,product_type_props__$1,output_schema89271__$1,meta89327));
});
}
return (new demo_app.product_types.product_type_props.views.t89326(output_checker89274_89379,ufv___89375,data,input_checker89273_89378,validate__9355__auto__,owner,G__89276,input_schema89272_89377,G__89275,product_type_props,output_schema89271_89376,null));
break;
}
})();if(cljs.core.truth_(validate__9355__auto__))
{var temp__4092__auto___89393 = output_checker89274_89379.call(null,o__9358__auto__);if(cljs.core.truth_(temp__4092__auto___89393))
{var error__9357__auto___89394 = temp__4092__auto___89393;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"product-type-props","product-type-props",-75393420,null),cljs.core.pr_str.call(null,error__9357__auto___89394)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___89394,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema89271_89376,new cljs.core.Keyword(null,"value","value",1125876963),o__9358__auto__], null));
} else
{}
} else
{}
return o__9358__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,demo_app.product_types.product_type_props.views.product_type_props),schema.core.make_fn_schema.call(null,output_schema89271_89376,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema89272_89377], null)));
demo_app.product_types.product_type_props.views.__GT_product_type_props = (function() {
var __GT_product_type_props = null;
var __GT_product_type_props__1 = (function (cursor__11123__auto__){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_props,cursor__11123__auto__);
});
var __GT_product_type_props__2 = (function (cursor__11123__auto__,m89270){return om.core.build.call(null,demo_app.product_types.product_type_props.views.product_type_props,cursor__11123__auto__,m89270);
});
__GT_product_type_props = function(cursor__11123__auto__,m89270){
switch(arguments.length){
case 1:
return __GT_product_type_props__1.call(this,cursor__11123__auto__);
case 2:
return __GT_product_type_props__2.call(this,cursor__11123__auto__,m89270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_product_type_props.cljs$core$IFn$_invoke$arity$1 = __GT_product_type_props__1;
__GT_product_type_props.cljs$core$IFn$_invoke$arity$2 = __GT_product_type_props__2;
return __GT_product_type_props;
})()
;

//# sourceMappingURL=views.js.map
// Compiled by ClojureScript 0.0-2156
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string');
goog.require('goog.string.format');
/**
* Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
* schema need not depend on plumbing.
* @param {...*} var_args
*/
schema.utils.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
return cljs.core.into.call(null,(function (){var or__14581__auto__ = m;if(cljs.core.truth_(or__14581__auto__))
{return or__14581__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__15298__auto__ = (function iter__40006(s__40007){return (new cljs.core.LazySeq(null,(function (){var s__40007__$1 = s__40007;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40007__$1);if(temp__4126__auto__)
{var s__40007__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40007__$2))
{var c__15296__auto__ = cljs.core.chunk_first.call(null,s__40007__$2);var size__15297__auto__ = cljs.core.count.call(null,c__15296__auto__);var b__40009 = cljs.core.chunk_buffer.call(null,size__15297__auto__);if((function (){var i__40008 = 0;while(true){
if((i__40008 < size__15297__auto__))
{var vec__40012 = cljs.core._nth.call(null,c__15296__auto__,i__40008);var k = cljs.core.nth.call(null,vec__40012,0,null);var v = cljs.core.nth.call(null,vec__40012,1,null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__40009,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__40014 = (i__40008 + 1);
i__40008 = G__40014;
continue;
}
} else
{{
var G__40015 = (i__40008 + 1);
i__40008 = G__40015;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40009),iter__40006.call(null,cljs.core.chunk_rest.call(null,s__40007__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40009),null);
}
} else
{var vec__40013 = cljs.core.first.call(null,s__40007__$2);var k = cljs.core.nth.call(null,vec__40013,0,null);var v = cljs.core.nth.call(null,vec__40013,1,null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__40006.call(null,cljs.core.rest.call(null,s__40007__$2)));
} else
{{
var G__40016 = cljs.core.rest.call(null,s__40007__$2);
s__40007__$1 = G__40016;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15298__auto__.call(null,cljs.core.partition.call(null,2,kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__40017){
var m = cljs.core.first(arglist__40017);
var kvs = cljs.core.rest(arglist__40017);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
schema.utils.type_of = (function type_of(x){return typeof x;
});
/**
* What class can we associate the fn schema with? In Clojure use the class of the fn; in
* cljs just use the fn itself.
*/
schema.utils.fn_schema_bearer = (function fn_schema_bearer(f){return f;
});
/**
* @param {...*} var_args
*/
schema.utils.format_STAR_ = (function() { 
var format_STAR___delegate = function (fmt,args){return cljs.core.apply.call(null,goog.string.format,fmt,args);
};
var format_STAR_ = function (fmt,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return format_STAR___delegate.call(this,fmt,args);};
format_STAR_.cljs$lang$maxFixedArity = 1;
format_STAR_.cljs$lang$applyTo = (function (arglist__40018){
var fmt = cljs.core.first(arglist__40018);
var args = cljs.core.rest(arglist__40018);
return format_STAR___delegate(fmt,args);
});
format_STAR_.cljs$core$IFn$_invoke$arity$variadic = format_STAR___delegate;
return format_STAR_;
})()
;
/**
* Provide a descriptive short name for a value.
*/
schema.utils.value_name = (function value_name(value){var t = schema.utils.type_of.call(null,value);if((cljs.core.count.call(null,[cljs.core.str(value)].join('')) < 20))
{return value;
} else
{return cljs.core.symbol.call(null,[cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});

/**
* @constructor
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.ValidationError.cljs$lang$type = true;
schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";
schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"schema.utils/ValidationError");
});
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._pr_writer.call(null,schema.utils.validation_error_explain.call(null,this$__$1),writer,opts);
});
schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});
schema.utils.validation_error_explain = (function validation_error_explain(err){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.deref.call(null,err.expectation_delay)),(function (){var or__14581__auto__ = err.fail_explanation;if(cljs.core.truth_(or__14581__auto__))
{return or__14581__auto__;
} else
{return new cljs.core.Symbol(null,"not","not",-1640422260,null);
}
})());
});
/**
* for cljs sake (easier than normalizing imports in macros.clj)
*/
schema.utils.__GT_ValidationError = (function __GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
})
schema.utils.NamedError.cljs$lang$type = true;
schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";
schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"schema.utils/NamedError");
});
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){var self__ = this;
var this$__$1 = this;return cljs.core._pr_writer.call(null,schema.utils.named_error_explain.call(null,this$__$1),writer,opts);
});
schema.utils.__GT_NamedError = (function __GT_NamedError(name,error){return (new schema.utils.NamedError(name,error));
});
schema.utils.named_error_explain = (function named_error_explain(err){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,err.name),err.error),new cljs.core.Symbol(null,"named","named",-1535946510,null));
});
/**
* for cljs sake (easier than normalizing imports in macros.clj)
*/
schema.utils.__GT_NamedError = (function __GT_NamedError(name,error){return (new schema.utils.NamedError(name,error));
});

/**
* @constructor
* @param {*} error
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>1){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__15167__auto__,k__15168__auto__){var self__ = this;
var this__15167__auto____$1 = this;return cljs.core._lookup.call(null,this__15167__auto____$1,k__15168__auto__,null);
});
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__15169__auto__,k40020,else__15170__auto__){var self__ = this;
var this__15169__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_.call(null,k40020,new cljs.core.Keyword(null,"error","error",1110689146)))
{return self__.error;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.get.call(null,self__.__extmap,k40020,else__15170__auto__);
} else
{return null;
}
}
});
schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__15181__auto__,writer__15182__auto__,opts__15183__auto__){var self__ = this;
var this__15181__auto____$1 = this;var pr_pair__15184__auto__ = (function (keyval__15185__auto__){return cljs.core.pr_sequential_writer.call(null,writer__15182__auto__,cljs.core.pr_writer,""," ","",opts__15183__auto__,keyval__15185__auto__);
});return cljs.core.pr_sequential_writer.call(null,writer__15182__auto__,pr_pair__15184__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__15183__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",1110689146),self__.error],null))], null),self__.__extmap));
});
schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__15165__auto__){var self__ = this;
var this__15165__auto____$1 = this;return self__.__meta;
});
schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__15161__auto__){var self__ = this;
var this__15161__auto____$1 = this;return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});
schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__15171__auto__){var self__ = this;
var this__15171__auto____$1 = this;return (1 + cljs.core.count.call(null,self__.__extmap));
});
schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__15162__auto__){var self__ = this;
var this__15162__auto____$1 = this;var h__14992__auto__ = self__.__hash;if(!((h__14992__auto__ == null)))
{return h__14992__auto__;
} else
{var h__14992__auto____$1 = cljs.core.hash_imap.call(null,this__15162__auto____$1);self__.__hash = h__14992__auto____$1;
return h__14992__auto____$1;
}
});
schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__15163__auto__,other__15164__auto__){var self__ = this;
var this__15163__auto____$1 = this;if(cljs.core.truth_((function (){var and__14569__auto__ = other__15164__auto__;if(cljs.core.truth_(and__14569__auto__))
{return ((this__15163__auto____$1.constructor === other__15164__auto__.constructor)) && (cljs.core.equiv_map.call(null,this__15163__auto____$1,other__15164__auto__));
} else
{return and__14569__auto__;
}
})()))
{return true;
} else
{return false;
}
});
schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__15176__auto__,k__15177__auto__){var self__ = this;
var this__15176__auto____$1 = this;if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",1110689146),null], null), null),k__15177__auto__))
{return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__15176__auto____$1),self__.__meta),k__15177__auto__);
} else
{return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__15177__auto__)),null));
}
});
schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__15174__auto__,k__15175__auto__,G__40019){var self__ = this;
var this__15174__auto____$1 = this;var pred__40022 = cljs.core.keyword_identical_QMARK_;var expr__40023 = k__15175__auto__;if(cljs.core.truth_(pred__40022.call(null,new cljs.core.Keyword(null,"error","error",1110689146),expr__40023)))
{return (new schema.utils.ErrorContainer(G__40019,self__.__meta,self__.__extmap,null));
} else
{return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__15175__auto__,G__40019),null));
}
});
schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__15179__auto__){var self__ = this;
var this__15179__auto____$1 = this;return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"error","error",1110689146),self__.error],null))], null),self__.__extmap));
});
schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__15166__auto__,G__40019){var self__ = this;
var this__15166__auto____$1 = this;return (new schema.utils.ErrorContainer(self__.error,G__40019,self__.__extmap,self__.__hash));
});
schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__15172__auto__,entry__15173__auto__){var self__ = this;
var this__15172__auto____$1 = this;if(cljs.core.vector_QMARK_.call(null,entry__15173__auto__))
{return cljs.core._assoc.call(null,this__15172__auto____$1,cljs.core._nth.call(null,entry__15173__auto__,0),cljs.core._nth.call(null,entry__15173__auto__,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,this__15172__auto____$1,entry__15173__auto__);
}
});
schema.utils.ErrorContainer.cljs$lang$type = true;
schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__15201__auto__){return cljs.core._conj.call(null,cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});
schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__15201__auto__,writer__15202__auto__){return cljs.core._write.call(null,writer__15202__auto__,"schema.utils/ErrorContainer");
});
schema.utils.__GT_ErrorContainer = (function __GT_ErrorContainer(error){return (new schema.utils.ErrorContainer(error));
});
schema.utils.map__GT_ErrorContainer = (function map__GT_ErrorContainer(G__40021){return (new schema.utils.ErrorContainer(new cljs.core.Keyword(null,"error","error",1110689146).cljs$core$IFn$_invoke$arity$1(G__40021),null,cljs.core.dissoc.call(null,G__40021,new cljs.core.Keyword(null,"error","error",1110689146))));
});
/**
* Distinguish a value (must be non-nil) as an error.
*/
schema.utils.error = (function error(x){if(cljs.core.truth_(x))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"x","x",-1640531407,null)))].join('')));
}
return schema.utils.__GT_ErrorContainer.call(null,x);
});
schema.utils.error_QMARK_ = (function error_QMARK_(x){return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function error_val(x){if(schema.utils.error_QMARK_.call(null,x))
{return x.error;
} else
{return null;
}
});
/**
* If maybe-error is an error, wrap the inner value in a NamedError; otherwise, return as-is
*/
schema.utils.wrap_error_name = (function wrap_error_name(name,maybe_error){var temp__4124__auto__ = schema.utils.error_val.call(null,maybe_error);if(cljs.core.truth_(temp__4124__auto__))
{var e = temp__4124__auto__;return schema.utils.error.call(null,schema.utils.__GT_NamedError.call(null,name,e));
} else
{return maybe_error;
}
});
/**
* Build up a result by conjing values, producing an error if at least one
* sub-value returns an error.
*/
schema.utils.result_builder = (function result_builder(lift_to_error){return (function conjer(m,e){var temp__4124__auto__ = schema.utils.error_val.call(null,e);if(cljs.core.truth_(temp__4124__auto__))
{var err = temp__4124__auto__;return schema.utils.error.call(null,cljs.core.conj.call(null,(function (){var or__14581__auto__ = schema.utils.error_val.call(null,m);if(cljs.core.truth_(or__14581__auto__))
{return or__14581__auto__;
} else
{return lift_to_error.call(null,m);
}
})(),err));
} else
{var temp__4124__auto____$1 = schema.utils.error_val.call(null,m);if(cljs.core.truth_(temp__4124__auto____$1))
{var merr = temp__4124__auto____$1;return schema.utils.error.call(null,cljs.core.conj.call(null,merr,null));
} else
{return cljs.core.conj.call(null,m,e);
}
}
});
});
schema.utils.declare_class_schema_BANG_ = (function declare_class_schema_BANG_(klass,schema__$1){return (klass["schema$utils$schema"] = schema__$1);
});
schema.utils.class_schema = (function class_schema(klass){return (klass["schema$utils$schema"]);
});
schema.utils.PSimpleCell = (function (){var obj40026 = {};return obj40026;
})();
schema.utils.get_cell = (function get_cell(this$){if((function (){var and__14569__auto__ = this$;if(and__14569__auto__)
{return this$.schema$utils$PSimpleCell$get_cell$arity$1;
} else
{return and__14569__auto__;
}
})())
{return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else
{var x__15208__auto__ = (((this$ == null))?null:this$);return (function (){var or__14581__auto__ = (schema.utils.get_cell[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (schema.utils.get_cell["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PSimpleCell.get_cell",this$);
}
}
})().call(null,this$);
}
});
schema.utils.set_cell = (function set_cell(this$,x){if((function (){var and__14569__auto__ = this$;if(and__14569__auto__)
{return this$.schema$utils$PSimpleCell$set_cell$arity$2;
} else
{return and__14569__auto__;
}
})())
{return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else
{var x__15208__auto__ = (((this$ == null))?null:this$);return (function (){var or__14581__auto__ = (schema.utils.set_cell[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (schema.utils.set_cell["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"PSimpleCell.set_cell",this$);
}
}
})().call(null,this$,x);
}
});

/**
* @constructor
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.cljs$lang$type = true;
schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";
schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"schema.utils/SimpleVCell");
});
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){var self__ = this;
var this$__$1 = this;return self__.q;
});
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){var self__ = this;
var this$__$1 = this;return self__.q = x;
});
schema.utils.__GT_SimpleVCell = (function __GT_SimpleVCell(q){return (new schema.utils.SimpleVCell(q));
});
/**
* Turn on run-time function validation for functions compiled when
* *compile-function-validation* was true -- has no effect for functions compiled
* when it is false.
*/
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.call(null,schema.utils.get_cell,schema.utils.use_fn_validation);
schema.utils.use_fn_validation.set_cell = cljs.core.partial.call(null,schema.utils.set_cell,schema.utils.use_fn_validation);

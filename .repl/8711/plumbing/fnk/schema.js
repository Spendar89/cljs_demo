// Compiled by ClojureScript 0.0-2156
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",4707957972),new cljs.core.Symbol("s","Schema","s/Schema",830322725,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",3860323928),(function (p1__23657__23658__auto__){var G__46663 = p1__23657__23658__auto__;if(G__46663)
{var bit__15756__auto__ = null;if(cljs.core.truth_((function (){var or__15106__auto__ = bit__15756__auto__;if(cljs.core.truth_(or__15106__auto__))
{return or__15106__auto__;
} else
{return G__46663.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__46663.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__46663);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__46663);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__46664_SHARP_){return (cljs.core.val.call(null,p1__46664_SHARP_) > 1);
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__46666 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__46666,0,null);var v = cljs.core.nth.call(null,vec__46666,1,null);var p = vec__46666;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"missing-key","missing-key",2360894698),new cljs.core.Keyword(null,"key","key",1014010321),k,new cljs.core.Keyword(null,"map","map",1014012110),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return schema.core.both.call(null,s1,s2);
} else
{return null;
}
}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___46672 = schema.utils.use_fn_validation;var output_schema46667_46673 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema46668_46674 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-1640531420,null))], null);var input_checker46669_46675 = schema.core.checker.call(null,input_schema46668_46674);var output_checker46670_46676 = schema.core.checker.call(null,output_schema46667_46673);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = (function unwrap_schema_form_key(G__46671){var validate__23627__auto__ = ufv___46672.get_cell();if(cljs.core.truth_(validate__23627__auto__))
{var args__23628__auto___46677 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46671], null);var temp__4126__auto___46678 = input_checker46669_46675.call(null,args__23628__auto___46677);if(cljs.core.truth_(temp__4126__auto___46678))
{var error__23629__auto___46679 = temp__4126__auto___46678;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__23629__auto___46679)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema46668_46674,new cljs.core.Keyword(null,"value","value",1125876963),args__23628__auto___46677,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46679], null));
} else
{}
} else
{}
var o__23630__auto__ = (function (){var k = G__46671;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),2)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-54341422,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__23627__auto__))
{var temp__4126__auto___46680 = output_checker46670_46676.call(null,o__23630__auto__);if(cljs.core.truth_(temp__4126__auto___46680))
{var error__23629__auto___46681 = temp__4126__auto___46680;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__23629__auto___46681)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema46667_46673,new cljs.core.Keyword(null,"value","value",1125876963),o__23630__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46681], null));
} else
{}
} else
{}
return o__23630__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema46667_46673,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46668_46674], null)));
var ufv___46687 = schema.utils.use_fn_validation;var output_schema46682_46688 = schema.core.Any;var input_schema46683_46689 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker46684_46690 = schema.core.checker.call(null,input_schema46683_46689);var output_checker46685_46691 = schema.core.checker.call(null,output_schema46682_46688);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = (function explicit_schema_key_map(G__46686){var validate__23627__auto__ = ufv___46687.get_cell();if(cljs.core.truth_(validate__23627__auto__))
{var args__23628__auto___46692 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46686], null);var temp__4126__auto___46693 = input_checker46684_46690.call(null,args__23628__auto___46692);if(cljs.core.truth_(temp__4126__auto___46693))
{var error__23629__auto___46694 = temp__4126__auto___46693;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__23629__auto___46694)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema46683_46689,new cljs.core.Keyword(null,"value","value",1125876963),args__23628__auto___46692,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46694], null));
} else
{}
} else
{}
var o__23630__auto__ = (function (){var s = G__46686;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__23627__auto__))
{var temp__4126__auto___46695 = output_checker46685_46691.call(null,o__23630__auto__);if(cljs.core.truth_(temp__4126__auto___46695))
{var error__23629__auto___46696 = temp__4126__auto___46695;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__23629__auto___46696)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema46682_46688,new cljs.core.Keyword(null,"value","value",1125876963),o__23630__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46696], null));
} else
{}
} else
{}
return o__23630__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema46682_46688,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46683_46689], null)));
var ufv___46702 = schema.utils.use_fn_validation;var output_schema46697_46703 = schema.core.Any;var input_schema46698_46704 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker46699_46705 = schema.core.checker.call(null,input_schema46698_46704);var output_checker46700_46706 = schema.core.checker.call(null,output_schema46697_46703);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = (function split_schema_keys(G__46701){var validate__23627__auto__ = ufv___46702.get_cell();if(cljs.core.truth_(validate__23627__auto__))
{var args__23628__auto___46707 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46701], null);var temp__4126__auto___46708 = input_checker46699_46705.call(null,args__23628__auto___46707);if(cljs.core.truth_(temp__4126__auto___46708))
{var error__23629__auto___46709 = temp__4126__auto___46708;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__23629__auto___46709)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema46698_46704,new cljs.core.Keyword(null,"value","value",1125876963),args__23628__auto___46707,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46709], null));
} else
{}
} else
{}
var o__23630__auto__ = (function (){var s = G__46701;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-2033670824,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-1719548647,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__23627__auto__))
{var temp__4126__auto___46710 = output_checker46700_46706.call(null,o__23630__auto__);if(cljs.core.truth_(temp__4126__auto___46710))
{var error__23629__auto___46711 = temp__4126__auto___46710;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__23629__auto___46711)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema46697_46703,new cljs.core.Keyword(null,"value","value",1125876963),o__23630__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46711], null));
} else
{}
} else
{}
return o__23630__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema46697_46703,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46698_46704], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__46715){var vec__46716 = p__46715;var k = cljs.core.nth.call(null,vec__46716,0,null);var v = cljs.core.nth.call(null,vec__46716,1,null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__46717 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__46717,0,null);var ov = cljs.core.nth.call(null,vec__46717,1,null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__46718){
var key_project = cljs.core.first(arglist__46718);
arglist__46718 = cljs.core.next(arglist__46718);
var key_combine = cljs.core.first(arglist__46718);
arglist__46718 = cljs.core.next(arglist__46718);
var val_combine = cljs.core.first(arglist__46718);
var maps = cljs.core.rest(arglist__46718);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___46726 = schema.utils.use_fn_validation;var output_schema46720_46727 = plumbing.fnk.schema.InputSchema;var input_schema46721_46728 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-1640528223,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",-1640528222,null))], null);var input_checker46722_46729 = schema.core.checker.call(null,input_schema46721_46728);var output_checker46723_46730 = schema.core.checker.call(null,output_schema46720_46727);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = (function union_input_schemata(G__46724,G__46725){var validate__23627__auto__ = ufv___46726.get_cell();if(cljs.core.truth_(validate__23627__auto__))
{var args__23628__auto___46731 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46724,G__46725], null);var temp__4126__auto___46732 = input_checker46722_46729.call(null,args__23628__auto___46731);if(cljs.core.truth_(temp__4126__auto___46732))
{var error__23629__auto___46733 = temp__4126__auto___46732;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__23629__auto___46733)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema46721_46728,new cljs.core.Keyword(null,"value","value",1125876963),args__23628__auto___46731,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46733], null));
} else
{}
} else
{}
var o__23630__auto__ = (function (){var i1 = G__46724;var i2 = G__46725;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,(function (p1__46719_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__46719_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__46719_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1110869890);
}
}),(function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1640531466,null),new cljs.core.Symbol(null,"k1","k1",-1640528161,null),new cljs.core.Symbol(null,"k2","k2",-1640528160,null))))].join('')));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{if(false)
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));
}
} else
{return null;
}
}
}
}
}
}),(function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
}),i1,i2);
break;
}
})();if(cljs.core.truth_(validate__23627__auto__))
{var temp__4126__auto___46734 = output_checker46723_46730.call(null,o__23630__auto__);if(cljs.core.truth_(temp__4126__auto___46734))
{var error__23629__auto___46735 = temp__4126__auto___46734;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__23629__auto___46735)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema46720_46727,new cljs.core.Keyword(null,"value","value",1125876963),o__23630__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46735], null));
} else
{}
} else
{}
return o__23630__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema46720_46727,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46721_46728], null)));
var ufv___46741 = schema.utils.use_fn_validation;var output_schema46736_46742 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema46737_46743 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",-1943844163,null))], null);var input_checker46738_46744 = schema.core.checker.call(null,input_schema46737_46743);var output_checker46739_46745 = schema.core.checker.call(null,output_schema46736_46742);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = (function required_toplevel_keys(G__46740){var validate__23627__auto__ = ufv___46741.get_cell();if(cljs.core.truth_(validate__23627__auto__))
{var args__23628__auto___46746 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46740], null);var temp__4126__auto___46747 = input_checker46738_46744.call(null,args__23628__auto___46746);if(cljs.core.truth_(temp__4126__auto___46747))
{var error__23629__auto___46748 = temp__4126__auto___46747;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__23629__auto___46748)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema46737_46743,new cljs.core.Keyword(null,"value","value",1125876963),args__23628__auto___46746,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46748], null));
} else
{}
} else
{}
var o__23630__auto__ = (function (){var input_schema = G__46740;while(true){
return cljs.core.keep.call(null,(function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
}),cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__23627__auto__))
{var temp__4126__auto___46749 = output_checker46739_46745.call(null,o__23630__auto__);if(cljs.core.truth_(temp__4126__auto___46749))
{var error__23629__auto___46750 = temp__4126__auto___46749;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__23629__auto___46750)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema46736_46742,new cljs.core.Keyword(null,"value","value",1125876963),o__23630__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46750], null));
} else
{}
} else
{}
return o__23630__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema46736_46742,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46737_46743], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15823__auto__ = (function iter__46759(s__46760){return (new cljs.core.LazySeq(null,(function (){var s__46760__$1 = s__46760;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__46760__$1);if(temp__4126__auto__)
{var s__46760__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46760__$2))
{var c__15821__auto__ = cljs.core.chunk_first.call(null,s__46760__$2);var size__15822__auto__ = cljs.core.count.call(null,c__15821__auto__);var b__46762 = cljs.core.chunk_buffer.call(null,size__15822__auto__);if((function (){var i__46761 = 0;while(true){
if((i__46761 < size__15822__auto__))
{var vec__46765 = cljs.core._nth.call(null,c__15821__auto__,i__46761);var k = cljs.core.nth.call(null,vec__46765,0,null);var v = cljs.core.nth.call(null,vec__46765,1,null);cljs.core.chunk_append.call(null,b__46762,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__46767 = (i__46761 + 1);
i__46761 = G__46767;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46762),iter__46759.call(null,cljs.core.chunk_rest.call(null,s__46760__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46762),null);
}
} else
{var vec__46766 = cljs.core.first.call(null,s__46760__$2);var k = cljs.core.nth.call(null,vec__46766,0,null);var v = cljs.core.nth.call(null,vec__46766,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__46759.call(null,cljs.core.rest.call(null,s__46760__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15823__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",271859124,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay(cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"done","done",1016993524),false,new cljs.core.Keyword(null,"value","value",1125876963),null], null)),(function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1637187556,null));
}))),null));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15823__auto__ = (function iter__46776(s__46777){return (new cljs.core.LazySeq(null,(function (){var s__46777__$1 = s__46777;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__46777__$1);if(temp__4126__auto__)
{var s__46777__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46777__$2))
{var c__15821__auto__ = cljs.core.chunk_first.call(null,s__46777__$2);var size__15822__auto__ = cljs.core.count.call(null,c__15821__auto__);var b__46779 = cljs.core.chunk_buffer.call(null,size__15822__auto__);if((function (){var i__46778 = 0;while(true){
if((i__46778 < size__15822__auto__))
{var vec__46782 = cljs.core._nth.call(null,c__15821__auto__,i__46778);var k = cljs.core.nth.call(null,vec__46782,0,null);var v = cljs.core.nth.call(null,vec__46782,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__46779,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__46784 = (i__46778 + 1);
i__46778 = G__46784;
continue;
}
} else
{{
var G__46785 = (i__46778 + 1);
i__46778 = G__46785;
continue;
}
}
} else
{{
var G__46786 = (i__46778 + 1);
i__46778 = G__46786;
continue;
}
}
} else
{{
var G__46787 = (i__46778 + 1);
i__46778 = G__46787;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46779),iter__46776.call(null,cljs.core.chunk_rest.call(null,s__46777__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46779),null);
}
} else
{var vec__46783 = cljs.core.first.call(null,s__46777__$2);var k = cljs.core.nth.call(null,vec__46783,0,null);var v = cljs.core.nth.call(null,vec__46783,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__46776.call(null,cljs.core.rest.call(null,s__46777__$2)));
} else
{{
var G__46788 = cljs.core.rest.call(null,s__46777__$2);
s__46777__$1 = G__46788;
continue;
}
}
} else
{{
var G__46789 = cljs.core.rest.call(null,s__46777__$2);
s__46777__$1 = G__46789;
continue;
}
}
} else
{{
var G__46790 = cljs.core.rest.call(null,s__46777__$2);
s__46777__$1 = G__46790;
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
});return iter__15823__auto__.call(null,input_schema);
})()));
} else
{return null;
}
}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",1110689146),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",2405949387),new cljs.core.Keyword(null,"failures","failures",1689842587),fails], null));
} else
{return null;
}
});
var ufv___46813 = schema.utils.use_fn_validation;var output_schema46791_46814 = schema.core.Any;var input_schema46792_46815 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker46793_46816 = schema.core.checker.call(null,input_schema46792_46815);var output_checker46794_46817 = schema.core.checker.call(null,output_schema46791_46814);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = (function compose_schemata(G__46795,G__46796){var validate__23627__auto__ = true;if(validate__23627__auto__)
{var args__23628__auto___46818 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46795,G__46796], null);var temp__4126__auto___46819 = input_checker46793_46816.call(null,args__23628__auto___46818);if(cljs.core.truth_(temp__4126__auto___46819))
{var error__23629__auto___46820 = temp__4126__auto___46819;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__23629__auto___46820)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema46792_46815,new cljs.core.Keyword(null,"value","value",1125876963),args__23628__auto___46818,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46820], null));
} else
{}
} else
{}
var o__23630__auto__ = (function (){var G__46807 = G__46795;var vec__46809 = G__46807;var i2 = cljs.core.nth.call(null,vec__46809,0,null);var o2 = cljs.core.nth.call(null,vec__46809,1,null);var G__46808 = G__46796;var vec__46810 = G__46808;var i1 = cljs.core.nth.call(null,vec__46810,0,null);var o1 = cljs.core.nth.call(null,vec__46810,1,null);var G__46807__$1 = G__46807;var G__46808__$1 = G__46808;while(true){
var vec__46811 = G__46807__$1;var i2__$1 = cljs.core.nth.call(null,vec__46811,0,null);var o2__$1 = cljs.core.nth.call(null,vec__46811,1,null);var vec__46812 = G__46808__$1;var i1__$1 = cljs.core.nth.call(null,vec__46812,0,null);var o1__$1 = cljs.core.nth.call(null,vec__46812,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__23627__auto__)
{var temp__4126__auto___46821 = output_checker46794_46817.call(null,o__23630__auto__);if(cljs.core.truth_(temp__4126__auto___46821))
{var error__23629__auto___46822 = temp__4126__auto___46821;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__23629__auto___46822)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema46791_46814,new cljs.core.Keyword(null,"value","value",1125876963),o__23630__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46822], null));
} else
{}
} else
{}
return o__23630__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema46791_46814,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46792_46815], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return null;
} else
{return null;
}
}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___46901 = schema.utils.use_fn_validation;var output_schema46823_46902 = schema.core.Any;var input_schema46824_46903 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-1640531412,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-1640528095,null))], null);var input_checker46825_46904 = schema.core.checker.call(null,input_schema46824_46903);var output_checker46826_46905 = schema.core.checker.call(null,output_schema46823_46902);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = (function split_schema(G__46827,G__46828){var validate__23627__auto__ = ufv___46901.get_cell();if(cljs.core.truth_(validate__23627__auto__))
{var args__23628__auto___46906 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46827,G__46828], null);var temp__4126__auto___46907 = input_checker46825_46904.call(null,args__23628__auto___46906);if(cljs.core.truth_(temp__4126__auto___46907))
{var error__23629__auto___46908 = temp__4126__auto___46907;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__23629__auto___46908)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema46824_46903,new cljs.core.Keyword(null,"value","value",1125876963),args__23628__auto___46906,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46908], null));
} else
{}
} else
{}
var o__23630__auto__ = (function (){var s = G__46827;var ks = G__46828;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__15823__auto__ = ((function (ks__$1){
return (function iter__46865(s__46866){return (new cljs.core.LazySeq(null,((function (ks__$1){
return (function (){var s__46866__$1 = s__46866;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__46866__$1);if(temp__4126__auto__)
{var s__46866__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__46866__$2))
{var c__15821__auto__ = cljs.core.chunk_first.call(null,s__46866__$2);var size__15822__auto__ = cljs.core.count.call(null,c__15821__auto__);var b__46868 = cljs.core.chunk_buffer.call(null,size__15822__auto__);if((function (){var i__46867 = 0;while(true){
if((i__46867 < size__15822__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__15821__auto__,i__46867);cljs.core.chunk_append.call(null,b__46868,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15823__auto__ = ((function (i__46867,in_QMARK_,c__15821__auto__,size__15822__auto__,b__46868,s__46866__$2,temp__4126__auto__,ks__$1){
return (function iter__46885(s__46886){return (new cljs.core.LazySeq(null,((function (i__46867,in_QMARK_,c__15821__auto__,size__15822__auto__,b__46868,s__46866__$2,temp__4126__auto__,ks__$1){
return (function (){var s__46886__$1 = s__46886;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__46886__$1);if(temp__4126__auto____$1)
{var s__46886__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__46886__$2))
{var c__15821__auto____$1 = cljs.core.chunk_first.call(null,s__46886__$2);var size__15822__auto____$1 = cljs.core.count.call(null,c__15821__auto____$1);var b__46888 = cljs.core.chunk_buffer.call(null,size__15822__auto____$1);if((function (){var i__46887 = 0;while(true){
if((i__46887 < size__15822__auto____$1))
{var vec__46891 = cljs.core._nth.call(null,c__15821__auto____$1,i__46887);var k = cljs.core.nth.call(null,vec__46891,0,null);var v = cljs.core.nth.call(null,vec__46891,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__46888,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__46909 = (i__46887 + 1);
i__46887 = G__46909;
continue;
}
} else
{{
var G__46910 = (i__46887 + 1);
i__46887 = G__46910;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46888),iter__46885.call(null,cljs.core.chunk_rest.call(null,s__46886__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46888),null);
}
} else
{var vec__46892 = cljs.core.first.call(null,s__46886__$2);var k = cljs.core.nth.call(null,vec__46892,0,null);var v = cljs.core.nth.call(null,vec__46892,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__46885.call(null,cljs.core.rest.call(null,s__46886__$2)));
} else
{{
var G__46911 = cljs.core.rest.call(null,s__46886__$2);
s__46886__$1 = G__46911;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__46867,in_QMARK_,c__15821__auto__,size__15822__auto__,b__46868,s__46866__$2,temp__4126__auto__,ks__$1))
,null,null));
});})(i__46867,in_QMARK_,c__15821__auto__,size__15822__auto__,b__46868,s__46866__$2,temp__4126__auto__,ks__$1))
;return iter__15823__auto__.call(null,s);
})()));
{
var G__46912 = (i__46867 + 1);
i__46867 = G__46912;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46868),iter__46865.call(null,cljs.core.chunk_rest.call(null,s__46866__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46868),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__46866__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15823__auto__ = ((function (in_QMARK_,s__46866__$2,temp__4126__auto__,ks__$1){
return (function iter__46893(s__46894){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__46866__$2,temp__4126__auto__,ks__$1){
return (function (){var s__46894__$1 = s__46894;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__46894__$1);if(temp__4126__auto____$1)
{var s__46894__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__46894__$2))
{var c__15821__auto__ = cljs.core.chunk_first.call(null,s__46894__$2);var size__15822__auto__ = cljs.core.count.call(null,c__15821__auto__);var b__46896 = cljs.core.chunk_buffer.call(null,size__15822__auto__);if((function (){var i__46895 = 0;while(true){
if((i__46895 < size__15822__auto__))
{var vec__46899 = cljs.core._nth.call(null,c__15821__auto__,i__46895);var k = cljs.core.nth.call(null,vec__46899,0,null);var v = cljs.core.nth.call(null,vec__46899,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__46896,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__46913 = (i__46895 + 1);
i__46895 = G__46913;
continue;
}
} else
{{
var G__46914 = (i__46895 + 1);
i__46895 = G__46914;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46896),iter__46893.call(null,cljs.core.chunk_rest.call(null,s__46894__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__46896),null);
}
} else
{var vec__46900 = cljs.core.first.call(null,s__46894__$2);var k = cljs.core.nth.call(null,vec__46900,0,null);var v = cljs.core.nth.call(null,vec__46900,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__46893.call(null,cljs.core.rest.call(null,s__46894__$2)));
} else
{{
var G__46915 = cljs.core.rest.call(null,s__46894__$2);
s__46894__$1 = G__46915;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__46866__$2,temp__4126__auto__,ks__$1))
,null,null));
});})(in_QMARK_,s__46866__$2,temp__4126__auto__,ks__$1))
;return iter__15823__auto__.call(null,s);
})()),iter__46865.call(null,cljs.core.rest.call(null,s__46866__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1))
,null,null));
});})(ks__$1))
;return iter__15823__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__23627__auto__))
{var temp__4126__auto___46916 = output_checker46826_46905.call(null,o__23630__auto__);if(cljs.core.truth_(temp__4126__auto___46916))
{var error__23629__auto___46917 = temp__4126__auto___46916;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__23629__auto___46917)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema46823_46902,new cljs.core.Keyword(null,"value","value",1125876963),o__23630__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46917], null));
} else
{}
} else
{}
return o__23630__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema46823_46902,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46824_46903], null)));
var ufv___46948 = schema.utils.use_fn_validation;var output_schema46918_46949 = plumbing.fnk.schema.GraphIOSchemata;var input_schema46919_46950 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker46920_46951 = schema.core.checker.call(null,input_schema46919_46950);var output_checker46921_46952 = schema.core.checker.call(null,output_schema46918_46949);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = (function sequence_schemata(G__46922,G__46923){var validate__23627__auto__ = ufv___46948.get_cell();if(cljs.core.truth_(validate__23627__auto__))
{var args__23628__auto___46953 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__46922,G__46923], null);var temp__4126__auto___46954 = input_checker46920_46951.call(null,args__23628__auto___46953);if(cljs.core.truth_(temp__4126__auto___46954))
{var error__23629__auto___46955 = temp__4126__auto___46954;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__23629__auto___46955)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema46919_46950,new cljs.core.Keyword(null,"value","value",1125876963),args__23628__auto___46953,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46955], null));
} else
{}
} else
{}
var o__23630__auto__ = (function (){var G__46939 = G__46922;var vec__46941 = G__46939;var i1 = cljs.core.nth.call(null,vec__46941,0,null);var o1 = cljs.core.nth.call(null,vec__46941,1,null);var G__46940 = G__46923;var vec__46942 = G__46940;var k = cljs.core.nth.call(null,vec__46942,0,null);var vec__46943 = cljs.core.nth.call(null,vec__46942,1,null);var i2 = cljs.core.nth.call(null,vec__46943,0,null);var o2 = cljs.core.nth.call(null,vec__46943,1,null);var G__46939__$1 = G__46939;var G__46940__$1 = G__46940;while(true){
var vec__46944 = G__46939__$1;var i1__$1 = cljs.core.nth.call(null,vec__46944,0,null);var o1__$1 = cljs.core.nth.call(null,vec__46944,1,null);var vec__46945 = G__46940__$1;var k__$1 = cljs.core.nth.call(null,vec__46945,0,null);var vec__46946 = cljs.core.nth.call(null,vec__46945,1,null);var i2__$1 = cljs.core.nth.call(null,vec__46946,0,null);var o2__$1 = cljs.core.nth.call(null,vec__46946,1,null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__46947 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__46947,0,null);var unused = cljs.core.nth.call(null,vec__46947,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__23627__auto__))
{var temp__4126__auto___46956 = output_checker46921_46952.call(null,o__23630__auto__);if(cljs.core.truth_(temp__4126__auto___46956))
{var error__23629__auto___46957 = temp__4126__auto___46956;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__23629__auto___46957)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema46918_46949,new cljs.core.Keyword(null,"value","value",1125876963),o__23630__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23629__auto___46957], null));
} else
{}
} else
{}
return o__23630__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema46918_46949,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema46919_46950], null)));

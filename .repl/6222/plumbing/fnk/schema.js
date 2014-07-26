// Compiled by ClojureScript 0.0-2156
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",4707957972),new cljs.core.Symbol("s","Schema","s/Schema",830322725,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",3860323928),(function (p1__23132__23133__auto__){var G__39703 = p1__23132__23133__auto__;if(G__39703)
{var bit__15231__auto__ = null;if(cljs.core.truth_((function (){var or__14581__auto__ = bit__15231__auto__;if(cljs.core.truth_(or__14581__auto__))
{return or__14581__auto__;
} else
{return G__39703.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__39703.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__39703);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__39703);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__39704_SHARP_){return (cljs.core.val.call(null,p1__39704_SHARP_) > 1);
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
var vec__39706 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__39706,0,null);var v = cljs.core.nth.call(null,vec__39706,1,null);var p = vec__39706;if(cljs.core.truth_(p))
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
var ufv___39712 = schema.utils.use_fn_validation;var output_schema39707_39713 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema39708_39714 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-1640531420,null))], null);var input_checker39709_39715 = schema.core.checker.call(null,input_schema39708_39714);var output_checker39710_39716 = schema.core.checker.call(null,output_schema39707_39713);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = (function unwrap_schema_form_key(G__39711){var validate__23102__auto__ = ufv___39712.get_cell();if(cljs.core.truth_(validate__23102__auto__))
{var args__23103__auto___39717 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39711], null);var temp__4126__auto___39718 = input_checker39709_39715.call(null,args__23103__auto___39717);if(cljs.core.truth_(temp__4126__auto___39718))
{var error__23104__auto___39719 = temp__4126__auto___39718;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__23104__auto___39719)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema39708_39714,new cljs.core.Keyword(null,"value","value",1125876963),args__23103__auto___39717,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39719], null));
} else
{}
} else
{}
var o__23105__auto__ = (function (){var k = G__39711;while(true){
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
})();if(cljs.core.truth_(validate__23102__auto__))
{var temp__4126__auto___39720 = output_checker39710_39716.call(null,o__23105__auto__);if(cljs.core.truth_(temp__4126__auto___39720))
{var error__23104__auto___39721 = temp__4126__auto___39720;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__23104__auto___39721)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema39707_39713,new cljs.core.Keyword(null,"value","value",1125876963),o__23105__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39721], null));
} else
{}
} else
{}
return o__23105__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema39707_39713,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39708_39714], null)));
var ufv___39727 = schema.utils.use_fn_validation;var output_schema39722_39728 = schema.core.Any;var input_schema39723_39729 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker39724_39730 = schema.core.checker.call(null,input_schema39723_39729);var output_checker39725_39731 = schema.core.checker.call(null,output_schema39722_39728);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = (function explicit_schema_key_map(G__39726){var validate__23102__auto__ = ufv___39727.get_cell();if(cljs.core.truth_(validate__23102__auto__))
{var args__23103__auto___39732 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39726], null);var temp__4126__auto___39733 = input_checker39724_39730.call(null,args__23103__auto___39732);if(cljs.core.truth_(temp__4126__auto___39733))
{var error__23104__auto___39734 = temp__4126__auto___39733;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__23104__auto___39734)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema39723_39729,new cljs.core.Keyword(null,"value","value",1125876963),args__23103__auto___39732,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39734], null));
} else
{}
} else
{}
var o__23105__auto__ = (function (){var s = G__39726;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__23102__auto__))
{var temp__4126__auto___39735 = output_checker39725_39731.call(null,o__23105__auto__);if(cljs.core.truth_(temp__4126__auto___39735))
{var error__23104__auto___39736 = temp__4126__auto___39735;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__23104__auto___39736)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema39722_39728,new cljs.core.Keyword(null,"value","value",1125876963),o__23105__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39736], null));
} else
{}
} else
{}
return o__23105__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema39722_39728,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39723_39729], null)));
var ufv___39742 = schema.utils.use_fn_validation;var output_schema39737_39743 = schema.core.Any;var input_schema39738_39744 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker39739_39745 = schema.core.checker.call(null,input_schema39738_39744);var output_checker39740_39746 = schema.core.checker.call(null,output_schema39737_39743);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = (function split_schema_keys(G__39741){var validate__23102__auto__ = ufv___39742.get_cell();if(cljs.core.truth_(validate__23102__auto__))
{var args__23103__auto___39747 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39741], null);var temp__4126__auto___39748 = input_checker39739_39745.call(null,args__23103__auto___39747);if(cljs.core.truth_(temp__4126__auto___39748))
{var error__23104__auto___39749 = temp__4126__auto___39748;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__23104__auto___39749)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema39738_39744,new cljs.core.Keyword(null,"value","value",1125876963),args__23103__auto___39747,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39749], null));
} else
{}
} else
{}
var o__23105__auto__ = (function (){var s = G__39741;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-2033670824,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-1719548647,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__23102__auto__))
{var temp__4126__auto___39750 = output_checker39740_39746.call(null,o__23105__auto__);if(cljs.core.truth_(temp__4126__auto___39750))
{var error__23104__auto___39751 = temp__4126__auto___39750;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__23104__auto___39751)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema39737_39743,new cljs.core.Keyword(null,"value","value",1125876963),o__23105__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39751], null));
} else
{}
} else
{}
return o__23105__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema39737_39743,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39738_39744], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__39755){var vec__39756 = p__39755;var k = cljs.core.nth.call(null,vec__39756,0,null);var v = cljs.core.nth.call(null,vec__39756,1,null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__39757 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__39757,0,null);var ov = cljs.core.nth.call(null,vec__39757,1,null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__39758){
var key_project = cljs.core.first(arglist__39758);
arglist__39758 = cljs.core.next(arglist__39758);
var key_combine = cljs.core.first(arglist__39758);
arglist__39758 = cljs.core.next(arglist__39758);
var val_combine = cljs.core.first(arglist__39758);
var maps = cljs.core.rest(arglist__39758);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___39766 = schema.utils.use_fn_validation;var output_schema39760_39767 = plumbing.fnk.schema.InputSchema;var input_schema39761_39768 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-1640528223,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",-1640528222,null))], null);var input_checker39762_39769 = schema.core.checker.call(null,input_schema39761_39768);var output_checker39763_39770 = schema.core.checker.call(null,output_schema39760_39767);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = (function union_input_schemata(G__39764,G__39765){var validate__23102__auto__ = ufv___39766.get_cell();if(cljs.core.truth_(validate__23102__auto__))
{var args__23103__auto___39771 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39764,G__39765], null);var temp__4126__auto___39772 = input_checker39762_39769.call(null,args__23103__auto___39771);if(cljs.core.truth_(temp__4126__auto___39772))
{var error__23104__auto___39773 = temp__4126__auto___39772;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__23104__auto___39773)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema39761_39768,new cljs.core.Keyword(null,"value","value",1125876963),args__23103__auto___39771,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39773], null));
} else
{}
} else
{}
var o__23105__auto__ = (function (){var i1 = G__39764;var i2 = G__39765;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,(function (p1__39759_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__39759_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__39759_SHARP_);
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
})();if(cljs.core.truth_(validate__23102__auto__))
{var temp__4126__auto___39774 = output_checker39763_39770.call(null,o__23105__auto__);if(cljs.core.truth_(temp__4126__auto___39774))
{var error__23104__auto___39775 = temp__4126__auto___39774;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__23104__auto___39775)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema39760_39767,new cljs.core.Keyword(null,"value","value",1125876963),o__23105__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39775], null));
} else
{}
} else
{}
return o__23105__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema39760_39767,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39761_39768], null)));
var ufv___39781 = schema.utils.use_fn_validation;var output_schema39776_39782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema39777_39783 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",-1943844163,null))], null);var input_checker39778_39784 = schema.core.checker.call(null,input_schema39777_39783);var output_checker39779_39785 = schema.core.checker.call(null,output_schema39776_39782);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = (function required_toplevel_keys(G__39780){var validate__23102__auto__ = ufv___39781.get_cell();if(cljs.core.truth_(validate__23102__auto__))
{var args__23103__auto___39786 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39780], null);var temp__4126__auto___39787 = input_checker39778_39784.call(null,args__23103__auto___39786);if(cljs.core.truth_(temp__4126__auto___39787))
{var error__23104__auto___39788 = temp__4126__auto___39787;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__23104__auto___39788)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema39777_39783,new cljs.core.Keyword(null,"value","value",1125876963),args__23103__auto___39786,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39788], null));
} else
{}
} else
{}
var o__23105__auto__ = (function (){var input_schema = G__39780;while(true){
return cljs.core.keep.call(null,(function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
}),cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__23102__auto__))
{var temp__4126__auto___39789 = output_checker39779_39785.call(null,o__23105__auto__);if(cljs.core.truth_(temp__4126__auto___39789))
{var error__23104__auto___39790 = temp__4126__auto___39789;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__23104__auto___39790)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema39776_39782,new cljs.core.Keyword(null,"value","value",1125876963),o__23105__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39790], null));
} else
{}
} else
{}
return o__23105__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema39776_39782,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39777_39783], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15298__auto__ = (function iter__39799(s__39800){return (new cljs.core.LazySeq(null,(function (){var s__39800__$1 = s__39800;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39800__$1);if(temp__4126__auto__)
{var s__39800__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39800__$2))
{var c__15296__auto__ = cljs.core.chunk_first.call(null,s__39800__$2);var size__15297__auto__ = cljs.core.count.call(null,c__15296__auto__);var b__39802 = cljs.core.chunk_buffer.call(null,size__15297__auto__);if((function (){var i__39801 = 0;while(true){
if((i__39801 < size__15297__auto__))
{var vec__39805 = cljs.core._nth.call(null,c__15296__auto__,i__39801);var k = cljs.core.nth.call(null,vec__39805,0,null);var v = cljs.core.nth.call(null,vec__39805,1,null);cljs.core.chunk_append.call(null,b__39802,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__39807 = (i__39801 + 1);
i__39801 = G__39807;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39802),iter__39799.call(null,cljs.core.chunk_rest.call(null,s__39800__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39802),null);
}
} else
{var vec__39806 = cljs.core.first.call(null,s__39800__$2);var k = cljs.core.nth.call(null,vec__39806,0,null);var v = cljs.core.nth.call(null,vec__39806,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__39799.call(null,cljs.core.rest.call(null,s__39800__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15298__auto__.call(null,expr);
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15298__auto__ = (function iter__39816(s__39817){return (new cljs.core.LazySeq(null,(function (){var s__39817__$1 = s__39817;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39817__$1);if(temp__4126__auto__)
{var s__39817__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39817__$2))
{var c__15296__auto__ = cljs.core.chunk_first.call(null,s__39817__$2);var size__15297__auto__ = cljs.core.count.call(null,c__15296__auto__);var b__39819 = cljs.core.chunk_buffer.call(null,size__15297__auto__);if((function (){var i__39818 = 0;while(true){
if((i__39818 < size__15297__auto__))
{var vec__39822 = cljs.core._nth.call(null,c__15296__auto__,i__39818);var k = cljs.core.nth.call(null,vec__39822,0,null);var v = cljs.core.nth.call(null,vec__39822,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__39819,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__39824 = (i__39818 + 1);
i__39818 = G__39824;
continue;
}
} else
{{
var G__39825 = (i__39818 + 1);
i__39818 = G__39825;
continue;
}
}
} else
{{
var G__39826 = (i__39818 + 1);
i__39818 = G__39826;
continue;
}
}
} else
{{
var G__39827 = (i__39818 + 1);
i__39818 = G__39827;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39819),iter__39816.call(null,cljs.core.chunk_rest.call(null,s__39817__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39819),null);
}
} else
{var vec__39823 = cljs.core.first.call(null,s__39817__$2);var k = cljs.core.nth.call(null,vec__39823,0,null);var v = cljs.core.nth.call(null,vec__39823,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__39816.call(null,cljs.core.rest.call(null,s__39817__$2)));
} else
{{
var G__39828 = cljs.core.rest.call(null,s__39817__$2);
s__39817__$1 = G__39828;
continue;
}
}
} else
{{
var G__39829 = cljs.core.rest.call(null,s__39817__$2);
s__39817__$1 = G__39829;
continue;
}
}
} else
{{
var G__39830 = cljs.core.rest.call(null,s__39817__$2);
s__39817__$1 = G__39830;
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
});return iter__15298__auto__.call(null,input_schema);
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
var ufv___39853 = schema.utils.use_fn_validation;var output_schema39831_39854 = schema.core.Any;var input_schema39832_39855 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker39833_39856 = schema.core.checker.call(null,input_schema39832_39855);var output_checker39834_39857 = schema.core.checker.call(null,output_schema39831_39854);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = (function compose_schemata(G__39835,G__39836){var validate__23102__auto__ = true;if(validate__23102__auto__)
{var args__23103__auto___39858 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39835,G__39836], null);var temp__4126__auto___39859 = input_checker39833_39856.call(null,args__23103__auto___39858);if(cljs.core.truth_(temp__4126__auto___39859))
{var error__23104__auto___39860 = temp__4126__auto___39859;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__23104__auto___39860)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema39832_39855,new cljs.core.Keyword(null,"value","value",1125876963),args__23103__auto___39858,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39860], null));
} else
{}
} else
{}
var o__23105__auto__ = (function (){var G__39847 = G__39835;var vec__39849 = G__39847;var i2 = cljs.core.nth.call(null,vec__39849,0,null);var o2 = cljs.core.nth.call(null,vec__39849,1,null);var G__39848 = G__39836;var vec__39850 = G__39848;var i1 = cljs.core.nth.call(null,vec__39850,0,null);var o1 = cljs.core.nth.call(null,vec__39850,1,null);var G__39847__$1 = G__39847;var G__39848__$1 = G__39848;while(true){
var vec__39851 = G__39847__$1;var i2__$1 = cljs.core.nth.call(null,vec__39851,0,null);var o2__$1 = cljs.core.nth.call(null,vec__39851,1,null);var vec__39852 = G__39848__$1;var i1__$1 = cljs.core.nth.call(null,vec__39852,0,null);var o1__$1 = cljs.core.nth.call(null,vec__39852,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__23102__auto__)
{var temp__4126__auto___39861 = output_checker39834_39857.call(null,o__23105__auto__);if(cljs.core.truth_(temp__4126__auto___39861))
{var error__23104__auto___39862 = temp__4126__auto___39861;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__23104__auto___39862)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema39831_39854,new cljs.core.Keyword(null,"value","value",1125876963),o__23105__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39862], null));
} else
{}
} else
{}
return o__23105__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema39831_39854,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39832_39855], null)));
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
var ufv___39941 = schema.utils.use_fn_validation;var output_schema39863_39942 = schema.core.Any;var input_schema39864_39943 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-1640531412,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-1640528095,null))], null);var input_checker39865_39944 = schema.core.checker.call(null,input_schema39864_39943);var output_checker39866_39945 = schema.core.checker.call(null,output_schema39863_39942);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = (function split_schema(G__39867,G__39868){var validate__23102__auto__ = ufv___39941.get_cell();if(cljs.core.truth_(validate__23102__auto__))
{var args__23103__auto___39946 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39867,G__39868], null);var temp__4126__auto___39947 = input_checker39865_39944.call(null,args__23103__auto___39946);if(cljs.core.truth_(temp__4126__auto___39947))
{var error__23104__auto___39948 = temp__4126__auto___39947;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__23104__auto___39948)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema39864_39943,new cljs.core.Keyword(null,"value","value",1125876963),args__23103__auto___39946,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39948], null));
} else
{}
} else
{}
var o__23105__auto__ = (function (){var s = G__39867;var ks = G__39868;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__15298__auto__ = ((function (ks__$1){
return (function iter__39905(s__39906){return (new cljs.core.LazySeq(null,((function (ks__$1){
return (function (){var s__39906__$1 = s__39906;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__39906__$1);if(temp__4126__auto__)
{var s__39906__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__39906__$2))
{var c__15296__auto__ = cljs.core.chunk_first.call(null,s__39906__$2);var size__15297__auto__ = cljs.core.count.call(null,c__15296__auto__);var b__39908 = cljs.core.chunk_buffer.call(null,size__15297__auto__);if((function (){var i__39907 = 0;while(true){
if((i__39907 < size__15297__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__15296__auto__,i__39907);cljs.core.chunk_append.call(null,b__39908,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15298__auto__ = ((function (i__39907,in_QMARK_,c__15296__auto__,size__15297__auto__,b__39908,s__39906__$2,temp__4126__auto__,ks__$1){
return (function iter__39925(s__39926){return (new cljs.core.LazySeq(null,((function (i__39907,in_QMARK_,c__15296__auto__,size__15297__auto__,b__39908,s__39906__$2,temp__4126__auto__,ks__$1){
return (function (){var s__39926__$1 = s__39926;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__39926__$1);if(temp__4126__auto____$1)
{var s__39926__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__39926__$2))
{var c__15296__auto____$1 = cljs.core.chunk_first.call(null,s__39926__$2);var size__15297__auto____$1 = cljs.core.count.call(null,c__15296__auto____$1);var b__39928 = cljs.core.chunk_buffer.call(null,size__15297__auto____$1);if((function (){var i__39927 = 0;while(true){
if((i__39927 < size__15297__auto____$1))
{var vec__39931 = cljs.core._nth.call(null,c__15296__auto____$1,i__39927);var k = cljs.core.nth.call(null,vec__39931,0,null);var v = cljs.core.nth.call(null,vec__39931,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__39928,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__39949 = (i__39927 + 1);
i__39927 = G__39949;
continue;
}
} else
{{
var G__39950 = (i__39927 + 1);
i__39927 = G__39950;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39928),iter__39925.call(null,cljs.core.chunk_rest.call(null,s__39926__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39928),null);
}
} else
{var vec__39932 = cljs.core.first.call(null,s__39926__$2);var k = cljs.core.nth.call(null,vec__39932,0,null);var v = cljs.core.nth.call(null,vec__39932,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__39925.call(null,cljs.core.rest.call(null,s__39926__$2)));
} else
{{
var G__39951 = cljs.core.rest.call(null,s__39926__$2);
s__39926__$1 = G__39951;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__39907,in_QMARK_,c__15296__auto__,size__15297__auto__,b__39908,s__39906__$2,temp__4126__auto__,ks__$1))
,null,null));
});})(i__39907,in_QMARK_,c__15296__auto__,size__15297__auto__,b__39908,s__39906__$2,temp__4126__auto__,ks__$1))
;return iter__15298__auto__.call(null,s);
})()));
{
var G__39952 = (i__39907 + 1);
i__39907 = G__39952;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39908),iter__39905.call(null,cljs.core.chunk_rest.call(null,s__39906__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39908),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__39906__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15298__auto__ = ((function (in_QMARK_,s__39906__$2,temp__4126__auto__,ks__$1){
return (function iter__39933(s__39934){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__39906__$2,temp__4126__auto__,ks__$1){
return (function (){var s__39934__$1 = s__39934;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__39934__$1);if(temp__4126__auto____$1)
{var s__39934__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__39934__$2))
{var c__15296__auto__ = cljs.core.chunk_first.call(null,s__39934__$2);var size__15297__auto__ = cljs.core.count.call(null,c__15296__auto__);var b__39936 = cljs.core.chunk_buffer.call(null,size__15297__auto__);if((function (){var i__39935 = 0;while(true){
if((i__39935 < size__15297__auto__))
{var vec__39939 = cljs.core._nth.call(null,c__15296__auto__,i__39935);var k = cljs.core.nth.call(null,vec__39939,0,null);var v = cljs.core.nth.call(null,vec__39939,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__39936,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__39953 = (i__39935 + 1);
i__39935 = G__39953;
continue;
}
} else
{{
var G__39954 = (i__39935 + 1);
i__39935 = G__39954;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39936),iter__39933.call(null,cljs.core.chunk_rest.call(null,s__39934__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__39936),null);
}
} else
{var vec__39940 = cljs.core.first.call(null,s__39934__$2);var k = cljs.core.nth.call(null,vec__39940,0,null);var v = cljs.core.nth.call(null,vec__39940,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__39933.call(null,cljs.core.rest.call(null,s__39934__$2)));
} else
{{
var G__39955 = cljs.core.rest.call(null,s__39934__$2);
s__39934__$1 = G__39955;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__39906__$2,temp__4126__auto__,ks__$1))
,null,null));
});})(in_QMARK_,s__39906__$2,temp__4126__auto__,ks__$1))
;return iter__15298__auto__.call(null,s);
})()),iter__39905.call(null,cljs.core.rest.call(null,s__39906__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1))
,null,null));
});})(ks__$1))
;return iter__15298__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__23102__auto__))
{var temp__4126__auto___39956 = output_checker39866_39945.call(null,o__23105__auto__);if(cljs.core.truth_(temp__4126__auto___39956))
{var error__23104__auto___39957 = temp__4126__auto___39956;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__23104__auto___39957)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema39863_39942,new cljs.core.Keyword(null,"value","value",1125876963),o__23105__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39957], null));
} else
{}
} else
{}
return o__23105__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema39863_39942,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39864_39943], null)));
var ufv___39988 = schema.utils.use_fn_validation;var output_schema39958_39989 = plumbing.fnk.schema.GraphIOSchemata;var input_schema39959_39990 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker39960_39991 = schema.core.checker.call(null,input_schema39959_39990);var output_checker39961_39992 = schema.core.checker.call(null,output_schema39958_39989);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = (function sequence_schemata(G__39962,G__39963){var validate__23102__auto__ = ufv___39988.get_cell();if(cljs.core.truth_(validate__23102__auto__))
{var args__23103__auto___39993 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__39962,G__39963], null);var temp__4126__auto___39994 = input_checker39960_39991.call(null,args__23103__auto___39993);if(cljs.core.truth_(temp__4126__auto___39994))
{var error__23104__auto___39995 = temp__4126__auto___39994;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__23104__auto___39995)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema39959_39990,new cljs.core.Keyword(null,"value","value",1125876963),args__23103__auto___39993,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39995], null));
} else
{}
} else
{}
var o__23105__auto__ = (function (){var G__39979 = G__39962;var vec__39981 = G__39979;var i1 = cljs.core.nth.call(null,vec__39981,0,null);var o1 = cljs.core.nth.call(null,vec__39981,1,null);var G__39980 = G__39963;var vec__39982 = G__39980;var k = cljs.core.nth.call(null,vec__39982,0,null);var vec__39983 = cljs.core.nth.call(null,vec__39982,1,null);var i2 = cljs.core.nth.call(null,vec__39983,0,null);var o2 = cljs.core.nth.call(null,vec__39983,1,null);var G__39979__$1 = G__39979;var G__39980__$1 = G__39980;while(true){
var vec__39984 = G__39979__$1;var i1__$1 = cljs.core.nth.call(null,vec__39984,0,null);var o1__$1 = cljs.core.nth.call(null,vec__39984,1,null);var vec__39985 = G__39980__$1;var k__$1 = cljs.core.nth.call(null,vec__39985,0,null);var vec__39986 = cljs.core.nth.call(null,vec__39985,1,null);var i2__$1 = cljs.core.nth.call(null,vec__39986,0,null);var o2__$1 = cljs.core.nth.call(null,vec__39986,1,null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__39987 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__39987,0,null);var unused = cljs.core.nth.call(null,vec__39987,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__23102__auto__))
{var temp__4126__auto___39996 = output_checker39961_39992.call(null,o__23105__auto__);if(cljs.core.truth_(temp__4126__auto___39996))
{var error__23104__auto___39997 = temp__4126__auto___39996;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__23104__auto___39997)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema39958_39989,new cljs.core.Keyword(null,"value","value",1125876963),o__23105__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23104__auto___39997], null));
} else
{}
} else
{}
return o__23105__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema39958_39989,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema39959_39990], null)));

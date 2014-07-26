// Compiled by ClojureScript 0.0-2156
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",4707957972),new cljs.core.Symbol("s","Schema","s/Schema",830322725,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",3860323928),(function (p1__9385__9386__auto__){var G__88018 = p1__9385__9386__auto__;if(G__88018)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__88018.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__88018.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__88018);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__88018);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__88019_SHARP_){return (cljs.core.val.call(null,p1__88019_SHARP_) > 1);
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
var vec__88021 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__88021,0,null);var v = cljs.core.nth.call(null,vec__88021,1,null);var p = vec__88021;if(cljs.core.truth_(p))
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
var ufv___88027 = schema.utils.use_fn_validation;var output_schema88022_88028 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema88023_88029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-1640531420,null))], null);var input_checker88024_88030 = schema.core.checker.call(null,input_schema88023_88029);var output_checker88025_88031 = schema.core.checker.call(null,output_schema88022_88028);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = (function unwrap_schema_form_key(G__88026){var validate__9355__auto__ = ufv___88027.get_cell();if(cljs.core.truth_(validate__9355__auto__))
{var args__9356__auto___88032 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__88026], null);var temp__4092__auto___88033 = input_checker88024_88030.call(null,args__9356__auto___88032);if(cljs.core.truth_(temp__4092__auto___88033))
{var error__9357__auto___88034 = temp__4092__auto___88033;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__9357__auto___88034)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88034,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema88023_88029,new cljs.core.Keyword(null,"value","value",1125876963),args__9356__auto___88032], null));
} else
{}
} else
{}
var o__9358__auto__ = (function (){var k = G__88026;while(true){
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
})();if(cljs.core.truth_(validate__9355__auto__))
{var temp__4092__auto___88035 = output_checker88025_88031.call(null,o__9358__auto__);if(cljs.core.truth_(temp__4092__auto___88035))
{var error__9357__auto___88036 = temp__4092__auto___88035;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__9357__auto___88036)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88036,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema88022_88028,new cljs.core.Keyword(null,"value","value",1125876963),o__9358__auto__], null));
} else
{}
} else
{}
return o__9358__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema88022_88028,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema88023_88029], null)));
var ufv___88042 = schema.utils.use_fn_validation;var output_schema88037_88043 = schema.core.Any;var input_schema88038_88044 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker88039_88045 = schema.core.checker.call(null,input_schema88038_88044);var output_checker88040_88046 = schema.core.checker.call(null,output_schema88037_88043);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = (function explicit_schema_key_map(G__88041){var validate__9355__auto__ = ufv___88042.get_cell();if(cljs.core.truth_(validate__9355__auto__))
{var args__9356__auto___88047 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__88041], null);var temp__4092__auto___88048 = input_checker88039_88045.call(null,args__9356__auto___88047);if(cljs.core.truth_(temp__4092__auto___88048))
{var error__9357__auto___88049 = temp__4092__auto___88048;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__9357__auto___88049)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88049,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema88038_88044,new cljs.core.Keyword(null,"value","value",1125876963),args__9356__auto___88047], null));
} else
{}
} else
{}
var o__9358__auto__ = (function (){var s = G__88041;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__9355__auto__))
{var temp__4092__auto___88050 = output_checker88040_88046.call(null,o__9358__auto__);if(cljs.core.truth_(temp__4092__auto___88050))
{var error__9357__auto___88051 = temp__4092__auto___88050;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__9357__auto___88051)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88051,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema88037_88043,new cljs.core.Keyword(null,"value","value",1125876963),o__9358__auto__], null));
} else
{}
} else
{}
return o__9358__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema88037_88043,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema88038_88044], null)));
var ufv___88057 = schema.utils.use_fn_validation;var output_schema88052_88058 = schema.core.Any;var input_schema88053_88059 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker88054_88060 = schema.core.checker.call(null,input_schema88053_88059);var output_checker88055_88061 = schema.core.checker.call(null,output_schema88052_88058);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = (function split_schema_keys(G__88056){var validate__9355__auto__ = ufv___88057.get_cell();if(cljs.core.truth_(validate__9355__auto__))
{var args__9356__auto___88062 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__88056], null);var temp__4092__auto___88063 = input_checker88054_88060.call(null,args__9356__auto___88062);if(cljs.core.truth_(temp__4092__auto___88063))
{var error__9357__auto___88064 = temp__4092__auto___88063;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__9357__auto___88064)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88064,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema88053_88059,new cljs.core.Keyword(null,"value","value",1125876963),args__9356__auto___88062], null));
} else
{}
} else
{}
var o__9358__auto__ = (function (){var s = G__88056;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-2033670824,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-1719548647,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__9355__auto__))
{var temp__4092__auto___88065 = output_checker88055_88061.call(null,o__9358__auto__);if(cljs.core.truth_(temp__4092__auto___88065))
{var error__9357__auto___88066 = temp__4092__auto___88065;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__9357__auto___88066)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88066,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema88052_88058,new cljs.core.Keyword(null,"value","value",1125876963),o__9358__auto__], null));
} else
{}
} else
{}
return o__9358__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema88052_88058,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema88053_88059], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__88070){var vec__88071 = p__88070;var k = cljs.core.nth.call(null,vec__88071,0,null);var v = cljs.core.nth.call(null,vec__88071,1,null);var pk = key_project.call(null,k);var temp__4090__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4090__auto__))
{var vec__88072 = temp__4090__auto__;var ok = cljs.core.nth.call(null,vec__88072,0,null);var ov = cljs.core.nth.call(null,vec__88072,1,null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__88073){
var key_project = cljs.core.first(arglist__88073);
arglist__88073 = cljs.core.next(arglist__88073);
var key_combine = cljs.core.first(arglist__88073);
arglist__88073 = cljs.core.next(arglist__88073);
var val_combine = cljs.core.first(arglist__88073);
var maps = cljs.core.rest(arglist__88073);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___88081 = schema.utils.use_fn_validation;var output_schema88075_88082 = plumbing.fnk.schema.InputSchema;var input_schema88076_88083 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-1640528223,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",-1640528222,null))], null);var input_checker88077_88084 = schema.core.checker.call(null,input_schema88076_88083);var output_checker88078_88085 = schema.core.checker.call(null,output_schema88075_88082);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = (function union_input_schemata(G__88079,G__88080){var validate__9355__auto__ = ufv___88081.get_cell();if(cljs.core.truth_(validate__9355__auto__))
{var args__9356__auto___88086 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__88079,G__88080], null);var temp__4092__auto___88087 = input_checker88077_88084.call(null,args__9356__auto___88086);if(cljs.core.truth_(temp__4092__auto___88087))
{var error__9357__auto___88088 = temp__4092__auto___88087;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__9357__auto___88088)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88088,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema88076_88083,new cljs.core.Keyword(null,"value","value",1125876963),args__9356__auto___88086], null));
} else
{}
} else
{}
var o__9358__auto__ = (function (){var i1 = G__88079;var i2 = G__88080;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,(function (p1__88074_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__88074_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__88074_SHARP_);
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
})();if(cljs.core.truth_(validate__9355__auto__))
{var temp__4092__auto___88089 = output_checker88078_88085.call(null,o__9358__auto__);if(cljs.core.truth_(temp__4092__auto___88089))
{var error__9357__auto___88090 = temp__4092__auto___88089;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__9357__auto___88090)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88090,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema88075_88082,new cljs.core.Keyword(null,"value","value",1125876963),o__9358__auto__], null));
} else
{}
} else
{}
return o__9358__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema88075_88082,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema88076_88083], null)));
var ufv___88096 = schema.utils.use_fn_validation;var output_schema88091_88097 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema88092_88098 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",-1943844163,null))], null);var input_checker88093_88099 = schema.core.checker.call(null,input_schema88092_88098);var output_checker88094_88100 = schema.core.checker.call(null,output_schema88091_88097);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = (function required_toplevel_keys(G__88095){var validate__9355__auto__ = ufv___88096.get_cell();if(cljs.core.truth_(validate__9355__auto__))
{var args__9356__auto___88101 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__88095], null);var temp__4092__auto___88102 = input_checker88093_88099.call(null,args__9356__auto___88101);if(cljs.core.truth_(temp__4092__auto___88102))
{var error__9357__auto___88103 = temp__4092__auto___88102;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__9357__auto___88103)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88103,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema88092_88098,new cljs.core.Keyword(null,"value","value",1125876963),args__9356__auto___88101], null));
} else
{}
} else
{}
var o__9358__auto__ = (function (){var input_schema = G__88095;while(true){
return cljs.core.keep.call(null,(function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
}),cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__9355__auto__))
{var temp__4092__auto___88104 = output_checker88094_88100.call(null,o__9358__auto__);if(cljs.core.truth_(temp__4092__auto___88104))
{var error__9357__auto___88105 = temp__4092__auto___88104;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__9357__auto___88105)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88105,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema88091_88097,new cljs.core.Keyword(null,"value","value",1125876963),o__9358__auto__], null));
} else
{}
} else
{}
return o__9358__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema88091_88097,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema88092_88098], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4120__auto__ = (function iter__88114(s__88115){return (new cljs.core.LazySeq(null,(function (){var s__88115__$1 = s__88115;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__88115__$1);if(temp__4092__auto__)
{var s__88115__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__88115__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__88115__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__88117 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__88116 = 0;while(true){
if((i__88116 < size__4119__auto__))
{var vec__88120 = cljs.core._nth.call(null,c__4118__auto__,i__88116);var k = cljs.core.nth.call(null,vec__88120,0,null);var v = cljs.core.nth.call(null,vec__88120,1,null);cljs.core.chunk_append.call(null,b__88117,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__88122 = (i__88116 + 1);
i__88116 = G__88122;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88117),iter__88114.call(null,cljs.core.chunk_rest.call(null,s__88115__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88117),null);
}
} else
{var vec__88121 = cljs.core.first.call(null,s__88115__$2);var k = cljs.core.nth.call(null,vec__88121,0,null);var v = cljs.core.nth.call(null,vec__88121,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__88114.call(null,cljs.core.rest.call(null,s__88115__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4120__auto__.call(null,expr);
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4120__auto__ = (function iter__88131(s__88132){return (new cljs.core.LazySeq(null,(function (){var s__88132__$1 = s__88132;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__88132__$1);if(temp__4092__auto__)
{var s__88132__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__88132__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__88132__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__88134 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__88133 = 0;while(true){
if((i__88133 < size__4119__auto__))
{var vec__88137 = cljs.core._nth.call(null,c__4118__auto__,i__88133);var k = cljs.core.nth.call(null,vec__88137,0,null);var v = cljs.core.nth.call(null,vec__88137,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__88134,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__88139 = (i__88133 + 1);
i__88133 = G__88139;
continue;
}
} else
{{
var G__88140 = (i__88133 + 1);
i__88133 = G__88140;
continue;
}
}
} else
{{
var G__88141 = (i__88133 + 1);
i__88133 = G__88141;
continue;
}
}
} else
{{
var G__88142 = (i__88133 + 1);
i__88133 = G__88142;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88134),iter__88131.call(null,cljs.core.chunk_rest.call(null,s__88132__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88134),null);
}
} else
{var vec__88138 = cljs.core.first.call(null,s__88132__$2);var k = cljs.core.nth.call(null,vec__88138,0,null);var v = cljs.core.nth.call(null,vec__88138,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__88131.call(null,cljs.core.rest.call(null,s__88132__$2)));
} else
{{
var G__88143 = cljs.core.rest.call(null,s__88132__$2);
s__88132__$1 = G__88143;
continue;
}
}
} else
{{
var G__88144 = cljs.core.rest.call(null,s__88132__$2);
s__88132__$1 = G__88144;
continue;
}
}
} else
{{
var G__88145 = cljs.core.rest.call(null,s__88132__$2);
s__88132__$1 = G__88145;
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
});return iter__4120__auto__.call(null,input_schema);
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
var ufv___88168 = schema.utils.use_fn_validation;var output_schema88146_88169 = schema.core.Any;var input_schema88147_88170 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker88148_88171 = schema.core.checker.call(null,input_schema88147_88170);var output_checker88149_88172 = schema.core.checker.call(null,output_schema88146_88169);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = (function compose_schemata(G__88150,G__88151){var validate__9355__auto__ = true;if(validate__9355__auto__)
{var args__9356__auto___88173 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__88150,G__88151], null);var temp__4092__auto___88174 = input_checker88148_88171.call(null,args__9356__auto___88173);if(cljs.core.truth_(temp__4092__auto___88174))
{var error__9357__auto___88175 = temp__4092__auto___88174;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__9357__auto___88175)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88175,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema88147_88170,new cljs.core.Keyword(null,"value","value",1125876963),args__9356__auto___88173], null));
} else
{}
} else
{}
var o__9358__auto__ = (function (){var G__88162 = G__88150;var vec__88164 = G__88162;var i2 = cljs.core.nth.call(null,vec__88164,0,null);var o2 = cljs.core.nth.call(null,vec__88164,1,null);var G__88163 = G__88151;var vec__88165 = G__88163;var i1 = cljs.core.nth.call(null,vec__88165,0,null);var o1 = cljs.core.nth.call(null,vec__88165,1,null);var G__88162__$1 = G__88162;var G__88163__$1 = G__88163;while(true){
var vec__88166 = G__88162__$1;var i2__$1 = cljs.core.nth.call(null,vec__88166,0,null);var o2__$1 = cljs.core.nth.call(null,vec__88166,1,null);var vec__88167 = G__88163__$1;var i1__$1 = cljs.core.nth.call(null,vec__88167,0,null);var o1__$1 = cljs.core.nth.call(null,vec__88167,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__9355__auto__)
{var temp__4092__auto___88176 = output_checker88149_88172.call(null,o__9358__auto__);if(cljs.core.truth_(temp__4092__auto___88176))
{var error__9357__auto___88177 = temp__4092__auto___88176;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__9357__auto___88177)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88177,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema88146_88169,new cljs.core.Keyword(null,"value","value",1125876963),o__9358__auto__], null));
} else
{}
} else
{}
return o__9358__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema88146_88169,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema88147_88170], null)));
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
var ufv___88256 = schema.utils.use_fn_validation;var output_schema88178_88257 = schema.core.Any;var input_schema88179_88258 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-1640531412,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-1640528095,null))], null);var input_checker88180_88259 = schema.core.checker.call(null,input_schema88179_88258);var output_checker88181_88260 = schema.core.checker.call(null,output_schema88178_88257);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = (function split_schema(G__88182,G__88183){var validate__9355__auto__ = ufv___88256.get_cell();if(cljs.core.truth_(validate__9355__auto__))
{var args__9356__auto___88261 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__88182,G__88183], null);var temp__4092__auto___88262 = input_checker88180_88259.call(null,args__9356__auto___88261);if(cljs.core.truth_(temp__4092__auto___88262))
{var error__9357__auto___88263 = temp__4092__auto___88262;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__9357__auto___88263)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88263,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema88179_88258,new cljs.core.Keyword(null,"value","value",1125876963),args__9356__auto___88261], null));
} else
{}
} else
{}
var o__9358__auto__ = (function (){var s = G__88182;var ks = G__88183;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4120__auto__ = ((function (ks__$1){
return (function iter__88220(s__88221){return (new cljs.core.LazySeq(null,((function (ks__$1){
return (function (){var s__88221__$1 = s__88221;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__88221__$1);if(temp__4092__auto__)
{var s__88221__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__88221__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__88221__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__88223 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__88222 = 0;while(true){
if((i__88222 < size__4119__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4118__auto__,i__88222);cljs.core.chunk_append.call(null,b__88223,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4120__auto__ = ((function (i__88222,in_QMARK_,c__4118__auto__,size__4119__auto__,b__88223,s__88221__$2,temp__4092__auto__,ks__$1){
return (function iter__88240(s__88241){return (new cljs.core.LazySeq(null,((function (i__88222,in_QMARK_,c__4118__auto__,size__4119__auto__,b__88223,s__88221__$2,temp__4092__auto__,ks__$1){
return (function (){var s__88241__$1 = s__88241;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__88241__$1);if(temp__4092__auto____$1)
{var s__88241__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__88241__$2))
{var c__4118__auto____$1 = cljs.core.chunk_first.call(null,s__88241__$2);var size__4119__auto____$1 = cljs.core.count.call(null,c__4118__auto____$1);var b__88243 = cljs.core.chunk_buffer.call(null,size__4119__auto____$1);if((function (){var i__88242 = 0;while(true){
if((i__88242 < size__4119__auto____$1))
{var vec__88246 = cljs.core._nth.call(null,c__4118__auto____$1,i__88242);var k = cljs.core.nth.call(null,vec__88246,0,null);var v = cljs.core.nth.call(null,vec__88246,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__88243,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__88264 = (i__88242 + 1);
i__88242 = G__88264;
continue;
}
} else
{{
var G__88265 = (i__88242 + 1);
i__88242 = G__88265;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88243),iter__88240.call(null,cljs.core.chunk_rest.call(null,s__88241__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88243),null);
}
} else
{var vec__88247 = cljs.core.first.call(null,s__88241__$2);var k = cljs.core.nth.call(null,vec__88247,0,null);var v = cljs.core.nth.call(null,vec__88247,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__88240.call(null,cljs.core.rest.call(null,s__88241__$2)));
} else
{{
var G__88266 = cljs.core.rest.call(null,s__88241__$2);
s__88241__$1 = G__88266;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__88222,in_QMARK_,c__4118__auto__,size__4119__auto__,b__88223,s__88221__$2,temp__4092__auto__,ks__$1))
,null,null));
});})(i__88222,in_QMARK_,c__4118__auto__,size__4119__auto__,b__88223,s__88221__$2,temp__4092__auto__,ks__$1))
;return iter__4120__auto__.call(null,s);
})()));
{
var G__88267 = (i__88222 + 1);
i__88222 = G__88267;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88223),iter__88220.call(null,cljs.core.chunk_rest.call(null,s__88221__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88223),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__88221__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4120__auto__ = ((function (in_QMARK_,s__88221__$2,temp__4092__auto__,ks__$1){
return (function iter__88248(s__88249){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__88221__$2,temp__4092__auto__,ks__$1){
return (function (){var s__88249__$1 = s__88249;while(true){
var temp__4092__auto____$1 = cljs.core.seq.call(null,s__88249__$1);if(temp__4092__auto____$1)
{var s__88249__$2 = temp__4092__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__88249__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__88249__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__88251 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__88250 = 0;while(true){
if((i__88250 < size__4119__auto__))
{var vec__88254 = cljs.core._nth.call(null,c__4118__auto__,i__88250);var k = cljs.core.nth.call(null,vec__88254,0,null);var v = cljs.core.nth.call(null,vec__88254,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__88251,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__88268 = (i__88250 + 1);
i__88250 = G__88268;
continue;
}
} else
{{
var G__88269 = (i__88250 + 1);
i__88250 = G__88269;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88251),iter__88248.call(null,cljs.core.chunk_rest.call(null,s__88249__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__88251),null);
}
} else
{var vec__88255 = cljs.core.first.call(null,s__88249__$2);var k = cljs.core.nth.call(null,vec__88255,0,null);var v = cljs.core.nth.call(null,vec__88255,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__88248.call(null,cljs.core.rest.call(null,s__88249__$2)));
} else
{{
var G__88270 = cljs.core.rest.call(null,s__88249__$2);
s__88249__$1 = G__88270;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__88221__$2,temp__4092__auto__,ks__$1))
,null,null));
});})(in_QMARK_,s__88221__$2,temp__4092__auto__,ks__$1))
;return iter__4120__auto__.call(null,s);
})()),iter__88220.call(null,cljs.core.rest.call(null,s__88221__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1))
,null,null));
});})(ks__$1))
;return iter__4120__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__9355__auto__))
{var temp__4092__auto___88271 = output_checker88181_88260.call(null,o__9358__auto__);if(cljs.core.truth_(temp__4092__auto___88271))
{var error__9357__auto___88272 = temp__4092__auto___88271;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__9357__auto___88272)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88272,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema88178_88257,new cljs.core.Keyword(null,"value","value",1125876963),o__9358__auto__], null));
} else
{}
} else
{}
return o__9358__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema88178_88257,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema88179_88258], null)));
var ufv___88303 = schema.utils.use_fn_validation;var output_schema88273_88304 = plumbing.fnk.schema.GraphIOSchemata;var input_schema88274_88305 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker88275_88306 = schema.core.checker.call(null,input_schema88274_88305);var output_checker88276_88307 = schema.core.checker.call(null,output_schema88273_88304);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = (function sequence_schemata(G__88277,G__88278){var validate__9355__auto__ = ufv___88303.get_cell();if(cljs.core.truth_(validate__9355__auto__))
{var args__9356__auto___88308 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__88277,G__88278], null);var temp__4092__auto___88309 = input_checker88275_88306.call(null,args__9356__auto___88308);if(cljs.core.truth_(temp__4092__auto___88309))
{var error__9357__auto___88310 = temp__4092__auto___88309;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__9357__auto___88310)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88310,new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema88274_88305,new cljs.core.Keyword(null,"value","value",1125876963),args__9356__auto___88308], null));
} else
{}
} else
{}
var o__9358__auto__ = (function (){var G__88294 = G__88277;var vec__88296 = G__88294;var i1 = cljs.core.nth.call(null,vec__88296,0,null);var o1 = cljs.core.nth.call(null,vec__88296,1,null);var G__88295 = G__88278;var vec__88297 = G__88295;var k = cljs.core.nth.call(null,vec__88297,0,null);var vec__88298 = cljs.core.nth.call(null,vec__88297,1,null);var i2 = cljs.core.nth.call(null,vec__88298,0,null);var o2 = cljs.core.nth.call(null,vec__88298,1,null);var G__88294__$1 = G__88294;var G__88295__$1 = G__88295;while(true){
var vec__88299 = G__88294__$1;var i1__$1 = cljs.core.nth.call(null,vec__88299,0,null);var o1__$1 = cljs.core.nth.call(null,vec__88299,1,null);var vec__88300 = G__88295__$1;var k__$1 = cljs.core.nth.call(null,vec__88300,0,null);var vec__88301 = cljs.core.nth.call(null,vec__88300,1,null);var i2__$1 = cljs.core.nth.call(null,vec__88301,0,null);var o2__$1 = cljs.core.nth.call(null,vec__88301,1,null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__88302 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__88302,0,null);var unused = cljs.core.nth.call(null,vec__88302,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__9355__auto__))
{var temp__4092__auto___88311 = output_checker88276_88307.call(null,o__9358__auto__);if(cljs.core.truth_(temp__4092__auto___88311))
{var error__9357__auto___88312 = temp__4092__auto___88311;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__9357__auto___88312)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",1110689146),error__9357__auto___88312,new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema88273_88304,new cljs.core.Keyword(null,"value","value",1125876963),o__9358__auto__], null));
} else
{}
} else
{}
return o__9358__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema88273_88304,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema88274_88305], null)));

//# sourceMappingURL=schema.js.map
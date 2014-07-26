// Compiled by ClojureScript 0.0-2156
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",4707957972),new cljs.core.Symbol("s","Schema","s/Schema",830322725,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",3860323928),(function (p1__23161__23162__auto__){var G__40505 = p1__23161__23162__auto__;if(G__40505)
{var bit__15231__auto__ = null;if(cljs.core.truth_((function (){var or__14581__auto__ = bit__15231__auto__;if(cljs.core.truth_(or__14581__auto__))
{return or__14581__auto__;
} else
{return G__40505.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__40505.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__40505);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__40505);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__40506_SHARP_){return (cljs.core.val.call(null,p1__40506_SHARP_) > 1);
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
var vec__40508 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__40508,0,null);var v = cljs.core.nth.call(null,vec__40508,1,null);var p = vec__40508;if(cljs.core.truth_(p))
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
var ufv___40514 = schema.utils.use_fn_validation;var output_schema40509_40515 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema40510_40516 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-1640531420,null))], null);var input_checker40511_40517 = schema.core.checker.call(null,input_schema40510_40516);var output_checker40512_40518 = schema.core.checker.call(null,output_schema40509_40515);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = (function unwrap_schema_form_key(G__40513){var validate__23131__auto__ = ufv___40514.get_cell();if(cljs.core.truth_(validate__23131__auto__))
{var args__23132__auto___40519 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40513], null);var temp__4126__auto___40520 = input_checker40511_40517.call(null,args__23132__auto___40519);if(cljs.core.truth_(temp__4126__auto___40520))
{var error__23133__auto___40521 = temp__4126__auto___40520;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__23133__auto___40521)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema40510_40516,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___40519,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40521], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var k = G__40513;while(true){
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
})();if(cljs.core.truth_(validate__23131__auto__))
{var temp__4126__auto___40522 = output_checker40512_40518.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___40522))
{var error__23133__auto___40523 = temp__4126__auto___40522;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__23133__auto___40523)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema40509_40515,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40523], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema40509_40515,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40510_40516], null)));
var ufv___40529 = schema.utils.use_fn_validation;var output_schema40524_40530 = schema.core.Any;var input_schema40525_40531 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker40526_40532 = schema.core.checker.call(null,input_schema40525_40531);var output_checker40527_40533 = schema.core.checker.call(null,output_schema40524_40530);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = (function explicit_schema_key_map(G__40528){var validate__23131__auto__ = ufv___40529.get_cell();if(cljs.core.truth_(validate__23131__auto__))
{var args__23132__auto___40534 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40528], null);var temp__4126__auto___40535 = input_checker40526_40532.call(null,args__23132__auto___40534);if(cljs.core.truth_(temp__4126__auto___40535))
{var error__23133__auto___40536 = temp__4126__auto___40535;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__23133__auto___40536)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema40525_40531,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___40534,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40536], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var s = G__40528;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__23131__auto__))
{var temp__4126__auto___40537 = output_checker40527_40533.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___40537))
{var error__23133__auto___40538 = temp__4126__auto___40537;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__23133__auto___40538)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema40524_40530,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40538], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema40524_40530,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40525_40531], null)));
var ufv___40544 = schema.utils.use_fn_validation;var output_schema40539_40545 = schema.core.Any;var input_schema40540_40546 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker40541_40547 = schema.core.checker.call(null,input_schema40540_40546);var output_checker40542_40548 = schema.core.checker.call(null,output_schema40539_40545);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = (function split_schema_keys(G__40543){var validate__23131__auto__ = ufv___40544.get_cell();if(cljs.core.truth_(validate__23131__auto__))
{var args__23132__auto___40549 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40543], null);var temp__4126__auto___40550 = input_checker40541_40547.call(null,args__23132__auto___40549);if(cljs.core.truth_(temp__4126__auto___40550))
{var error__23133__auto___40551 = temp__4126__auto___40550;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__23133__auto___40551)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema40540_40546,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___40549,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40551], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var s = G__40543;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-2033670824,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-1719548647,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__23131__auto__))
{var temp__4126__auto___40552 = output_checker40542_40548.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___40552))
{var error__23133__auto___40553 = temp__4126__auto___40552;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__23133__auto___40553)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema40539_40545,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40553], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema40539_40545,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40540_40546], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__40557){var vec__40558 = p__40557;var k = cljs.core.nth.call(null,vec__40558,0,null);var v = cljs.core.nth.call(null,vec__40558,1,null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__40559 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__40559,0,null);var ov = cljs.core.nth.call(null,vec__40559,1,null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__40560){
var key_project = cljs.core.first(arglist__40560);
arglist__40560 = cljs.core.next(arglist__40560);
var key_combine = cljs.core.first(arglist__40560);
arglist__40560 = cljs.core.next(arglist__40560);
var val_combine = cljs.core.first(arglist__40560);
var maps = cljs.core.rest(arglist__40560);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___40568 = schema.utils.use_fn_validation;var output_schema40562_40569 = plumbing.fnk.schema.InputSchema;var input_schema40563_40570 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-1640528223,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",-1640528222,null))], null);var input_checker40564_40571 = schema.core.checker.call(null,input_schema40563_40570);var output_checker40565_40572 = schema.core.checker.call(null,output_schema40562_40569);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = (function union_input_schemata(G__40566,G__40567){var validate__23131__auto__ = ufv___40568.get_cell();if(cljs.core.truth_(validate__23131__auto__))
{var args__23132__auto___40573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40566,G__40567], null);var temp__4126__auto___40574 = input_checker40564_40571.call(null,args__23132__auto___40573);if(cljs.core.truth_(temp__4126__auto___40574))
{var error__23133__auto___40575 = temp__4126__auto___40574;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__23133__auto___40575)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema40563_40570,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___40573,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40575], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var i1 = G__40566;var i2 = G__40567;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,(function (p1__40561_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__40561_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__40561_SHARP_);
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
})();if(cljs.core.truth_(validate__23131__auto__))
{var temp__4126__auto___40576 = output_checker40565_40572.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___40576))
{var error__23133__auto___40577 = temp__4126__auto___40576;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__23133__auto___40577)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema40562_40569,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40577], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema40562_40569,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40563_40570], null)));
var ufv___40583 = schema.utils.use_fn_validation;var output_schema40578_40584 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema40579_40585 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",-1943844163,null))], null);var input_checker40580_40586 = schema.core.checker.call(null,input_schema40579_40585);var output_checker40581_40587 = schema.core.checker.call(null,output_schema40578_40584);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = (function required_toplevel_keys(G__40582){var validate__23131__auto__ = ufv___40583.get_cell();if(cljs.core.truth_(validate__23131__auto__))
{var args__23132__auto___40588 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40582], null);var temp__4126__auto___40589 = input_checker40580_40586.call(null,args__23132__auto___40588);if(cljs.core.truth_(temp__4126__auto___40589))
{var error__23133__auto___40590 = temp__4126__auto___40589;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__23133__auto___40590)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema40579_40585,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___40588,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40590], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var input_schema = G__40582;while(true){
return cljs.core.keep.call(null,(function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
}),cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__23131__auto__))
{var temp__4126__auto___40591 = output_checker40581_40587.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___40591))
{var error__23133__auto___40592 = temp__4126__auto___40591;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__23133__auto___40592)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema40578_40584,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40592], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema40578_40584,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40579_40585], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15298__auto__ = (function iter__40601(s__40602){return (new cljs.core.LazySeq(null,(function (){var s__40602__$1 = s__40602;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40602__$1);if(temp__4126__auto__)
{var s__40602__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40602__$2))
{var c__15296__auto__ = cljs.core.chunk_first.call(null,s__40602__$2);var size__15297__auto__ = cljs.core.count.call(null,c__15296__auto__);var b__40604 = cljs.core.chunk_buffer.call(null,size__15297__auto__);if((function (){var i__40603 = 0;while(true){
if((i__40603 < size__15297__auto__))
{var vec__40607 = cljs.core._nth.call(null,c__15296__auto__,i__40603);var k = cljs.core.nth.call(null,vec__40607,0,null);var v = cljs.core.nth.call(null,vec__40607,1,null);cljs.core.chunk_append.call(null,b__40604,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__40609 = (i__40603 + 1);
i__40603 = G__40609;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40604),iter__40601.call(null,cljs.core.chunk_rest.call(null,s__40602__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40604),null);
}
} else
{var vec__40608 = cljs.core.first.call(null,s__40602__$2);var k = cljs.core.nth.call(null,vec__40608,0,null);var v = cljs.core.nth.call(null,vec__40608,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__40601.call(null,cljs.core.rest.call(null,s__40602__$2)));
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15298__auto__ = (function iter__40618(s__40619){return (new cljs.core.LazySeq(null,(function (){var s__40619__$1 = s__40619;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40619__$1);if(temp__4126__auto__)
{var s__40619__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40619__$2))
{var c__15296__auto__ = cljs.core.chunk_first.call(null,s__40619__$2);var size__15297__auto__ = cljs.core.count.call(null,c__15296__auto__);var b__40621 = cljs.core.chunk_buffer.call(null,size__15297__auto__);if((function (){var i__40620 = 0;while(true){
if((i__40620 < size__15297__auto__))
{var vec__40624 = cljs.core._nth.call(null,c__15296__auto__,i__40620);var k = cljs.core.nth.call(null,vec__40624,0,null);var v = cljs.core.nth.call(null,vec__40624,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__40621,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__40626 = (i__40620 + 1);
i__40620 = G__40626;
continue;
}
} else
{{
var G__40627 = (i__40620 + 1);
i__40620 = G__40627;
continue;
}
}
} else
{{
var G__40628 = (i__40620 + 1);
i__40620 = G__40628;
continue;
}
}
} else
{{
var G__40629 = (i__40620 + 1);
i__40620 = G__40629;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40621),iter__40618.call(null,cljs.core.chunk_rest.call(null,s__40619__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40621),null);
}
} else
{var vec__40625 = cljs.core.first.call(null,s__40619__$2);var k = cljs.core.nth.call(null,vec__40625,0,null);var v = cljs.core.nth.call(null,vec__40625,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__40618.call(null,cljs.core.rest.call(null,s__40619__$2)));
} else
{{
var G__40630 = cljs.core.rest.call(null,s__40619__$2);
s__40619__$1 = G__40630;
continue;
}
}
} else
{{
var G__40631 = cljs.core.rest.call(null,s__40619__$2);
s__40619__$1 = G__40631;
continue;
}
}
} else
{{
var G__40632 = cljs.core.rest.call(null,s__40619__$2);
s__40619__$1 = G__40632;
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
var ufv___40655 = schema.utils.use_fn_validation;var output_schema40633_40656 = schema.core.Any;var input_schema40634_40657 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker40635_40658 = schema.core.checker.call(null,input_schema40634_40657);var output_checker40636_40659 = schema.core.checker.call(null,output_schema40633_40656);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = (function compose_schemata(G__40637,G__40638){var validate__23131__auto__ = true;if(validate__23131__auto__)
{var args__23132__auto___40660 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40637,G__40638], null);var temp__4126__auto___40661 = input_checker40635_40658.call(null,args__23132__auto___40660);if(cljs.core.truth_(temp__4126__auto___40661))
{var error__23133__auto___40662 = temp__4126__auto___40661;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__23133__auto___40662)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema40634_40657,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___40660,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40662], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var G__40649 = G__40637;var vec__40651 = G__40649;var i2 = cljs.core.nth.call(null,vec__40651,0,null);var o2 = cljs.core.nth.call(null,vec__40651,1,null);var G__40650 = G__40638;var vec__40652 = G__40650;var i1 = cljs.core.nth.call(null,vec__40652,0,null);var o1 = cljs.core.nth.call(null,vec__40652,1,null);var G__40649__$1 = G__40649;var G__40650__$1 = G__40650;while(true){
var vec__40653 = G__40649__$1;var i2__$1 = cljs.core.nth.call(null,vec__40653,0,null);var o2__$1 = cljs.core.nth.call(null,vec__40653,1,null);var vec__40654 = G__40650__$1;var i1__$1 = cljs.core.nth.call(null,vec__40654,0,null);var o1__$1 = cljs.core.nth.call(null,vec__40654,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__23131__auto__)
{var temp__4126__auto___40663 = output_checker40636_40659.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___40663))
{var error__23133__auto___40664 = temp__4126__auto___40663;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__23133__auto___40664)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema40633_40656,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40664], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema40633_40656,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40634_40657], null)));
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
var ufv___40743 = schema.utils.use_fn_validation;var output_schema40665_40744 = schema.core.Any;var input_schema40666_40745 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-1640531412,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-1640528095,null))], null);var input_checker40667_40746 = schema.core.checker.call(null,input_schema40666_40745);var output_checker40668_40747 = schema.core.checker.call(null,output_schema40665_40744);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = (function split_schema(G__40669,G__40670){var validate__23131__auto__ = ufv___40743.get_cell();if(cljs.core.truth_(validate__23131__auto__))
{var args__23132__auto___40748 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40669,G__40670], null);var temp__4126__auto___40749 = input_checker40667_40746.call(null,args__23132__auto___40748);if(cljs.core.truth_(temp__4126__auto___40749))
{var error__23133__auto___40750 = temp__4126__auto___40749;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__23133__auto___40750)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema40666_40745,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___40748,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40750], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var s = G__40669;var ks = G__40670;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__15298__auto__ = ((function (ks__$1){
return (function iter__40707(s__40708){return (new cljs.core.LazySeq(null,((function (ks__$1){
return (function (){var s__40708__$1 = s__40708;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40708__$1);if(temp__4126__auto__)
{var s__40708__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40708__$2))
{var c__15296__auto__ = cljs.core.chunk_first.call(null,s__40708__$2);var size__15297__auto__ = cljs.core.count.call(null,c__15296__auto__);var b__40710 = cljs.core.chunk_buffer.call(null,size__15297__auto__);if((function (){var i__40709 = 0;while(true){
if((i__40709 < size__15297__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__15296__auto__,i__40709);cljs.core.chunk_append.call(null,b__40710,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15298__auto__ = ((function (i__40709,in_QMARK_,c__15296__auto__,size__15297__auto__,b__40710,s__40708__$2,temp__4126__auto__,ks__$1){
return (function iter__40727(s__40728){return (new cljs.core.LazySeq(null,((function (i__40709,in_QMARK_,c__15296__auto__,size__15297__auto__,b__40710,s__40708__$2,temp__4126__auto__,ks__$1){
return (function (){var s__40728__$1 = s__40728;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__40728__$1);if(temp__4126__auto____$1)
{var s__40728__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__40728__$2))
{var c__15296__auto____$1 = cljs.core.chunk_first.call(null,s__40728__$2);var size__15297__auto____$1 = cljs.core.count.call(null,c__15296__auto____$1);var b__40730 = cljs.core.chunk_buffer.call(null,size__15297__auto____$1);if((function (){var i__40729 = 0;while(true){
if((i__40729 < size__15297__auto____$1))
{var vec__40733 = cljs.core._nth.call(null,c__15296__auto____$1,i__40729);var k = cljs.core.nth.call(null,vec__40733,0,null);var v = cljs.core.nth.call(null,vec__40733,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__40730,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__40751 = (i__40729 + 1);
i__40729 = G__40751;
continue;
}
} else
{{
var G__40752 = (i__40729 + 1);
i__40729 = G__40752;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40730),iter__40727.call(null,cljs.core.chunk_rest.call(null,s__40728__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40730),null);
}
} else
{var vec__40734 = cljs.core.first.call(null,s__40728__$2);var k = cljs.core.nth.call(null,vec__40734,0,null);var v = cljs.core.nth.call(null,vec__40734,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__40727.call(null,cljs.core.rest.call(null,s__40728__$2)));
} else
{{
var G__40753 = cljs.core.rest.call(null,s__40728__$2);
s__40728__$1 = G__40753;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__40709,in_QMARK_,c__15296__auto__,size__15297__auto__,b__40710,s__40708__$2,temp__4126__auto__,ks__$1))
,null,null));
});})(i__40709,in_QMARK_,c__15296__auto__,size__15297__auto__,b__40710,s__40708__$2,temp__4126__auto__,ks__$1))
;return iter__15298__auto__.call(null,s);
})()));
{
var G__40754 = (i__40709 + 1);
i__40709 = G__40754;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40710),iter__40707.call(null,cljs.core.chunk_rest.call(null,s__40708__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40710),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__40708__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15298__auto__ = ((function (in_QMARK_,s__40708__$2,temp__4126__auto__,ks__$1){
return (function iter__40735(s__40736){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__40708__$2,temp__4126__auto__,ks__$1){
return (function (){var s__40736__$1 = s__40736;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__40736__$1);if(temp__4126__auto____$1)
{var s__40736__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__40736__$2))
{var c__15296__auto__ = cljs.core.chunk_first.call(null,s__40736__$2);var size__15297__auto__ = cljs.core.count.call(null,c__15296__auto__);var b__40738 = cljs.core.chunk_buffer.call(null,size__15297__auto__);if((function (){var i__40737 = 0;while(true){
if((i__40737 < size__15297__auto__))
{var vec__40741 = cljs.core._nth.call(null,c__15296__auto__,i__40737);var k = cljs.core.nth.call(null,vec__40741,0,null);var v = cljs.core.nth.call(null,vec__40741,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__40738,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__40755 = (i__40737 + 1);
i__40737 = G__40755;
continue;
}
} else
{{
var G__40756 = (i__40737 + 1);
i__40737 = G__40756;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40738),iter__40735.call(null,cljs.core.chunk_rest.call(null,s__40736__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40738),null);
}
} else
{var vec__40742 = cljs.core.first.call(null,s__40736__$2);var k = cljs.core.nth.call(null,vec__40742,0,null);var v = cljs.core.nth.call(null,vec__40742,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__40735.call(null,cljs.core.rest.call(null,s__40736__$2)));
} else
{{
var G__40757 = cljs.core.rest.call(null,s__40736__$2);
s__40736__$1 = G__40757;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__40708__$2,temp__4126__auto__,ks__$1))
,null,null));
});})(in_QMARK_,s__40708__$2,temp__4126__auto__,ks__$1))
;return iter__15298__auto__.call(null,s);
})()),iter__40707.call(null,cljs.core.rest.call(null,s__40708__$2)));
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
})();if(cljs.core.truth_(validate__23131__auto__))
{var temp__4126__auto___40758 = output_checker40668_40747.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___40758))
{var error__23133__auto___40759 = temp__4126__auto___40758;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__23133__auto___40759)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema40665_40744,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40759], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema40665_40744,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40666_40745], null)));
var ufv___40790 = schema.utils.use_fn_validation;var output_schema40760_40791 = plumbing.fnk.schema.GraphIOSchemata;var input_schema40761_40792 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker40762_40793 = schema.core.checker.call(null,input_schema40761_40792);var output_checker40763_40794 = schema.core.checker.call(null,output_schema40760_40791);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = (function sequence_schemata(G__40764,G__40765){var validate__23131__auto__ = ufv___40790.get_cell();if(cljs.core.truth_(validate__23131__auto__))
{var args__23132__auto___40795 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__40764,G__40765], null);var temp__4126__auto___40796 = input_checker40762_40793.call(null,args__23132__auto___40795);if(cljs.core.truth_(temp__4126__auto___40796))
{var error__23133__auto___40797 = temp__4126__auto___40796;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__23133__auto___40797)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema40761_40792,new cljs.core.Keyword(null,"value","value",1125876963),args__23132__auto___40795,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40797], null));
} else
{}
} else
{}
var o__23134__auto__ = (function (){var G__40781 = G__40764;var vec__40783 = G__40781;var i1 = cljs.core.nth.call(null,vec__40783,0,null);var o1 = cljs.core.nth.call(null,vec__40783,1,null);var G__40782 = G__40765;var vec__40784 = G__40782;var k = cljs.core.nth.call(null,vec__40784,0,null);var vec__40785 = cljs.core.nth.call(null,vec__40784,1,null);var i2 = cljs.core.nth.call(null,vec__40785,0,null);var o2 = cljs.core.nth.call(null,vec__40785,1,null);var G__40781__$1 = G__40781;var G__40782__$1 = G__40782;while(true){
var vec__40786 = G__40781__$1;var i1__$1 = cljs.core.nth.call(null,vec__40786,0,null);var o1__$1 = cljs.core.nth.call(null,vec__40786,1,null);var vec__40787 = G__40782__$1;var k__$1 = cljs.core.nth.call(null,vec__40787,0,null);var vec__40788 = cljs.core.nth.call(null,vec__40787,1,null);var i2__$1 = cljs.core.nth.call(null,vec__40788,0,null);var o2__$1 = cljs.core.nth.call(null,vec__40788,1,null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__40789 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__40789,0,null);var unused = cljs.core.nth.call(null,vec__40789,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__23131__auto__))
{var temp__4126__auto___40798 = output_checker40763_40794.call(null,o__23134__auto__);if(cljs.core.truth_(temp__4126__auto___40798))
{var error__23133__auto___40799 = temp__4126__auto___40798;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__23133__auto___40799)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema40760_40791,new cljs.core.Keyword(null,"value","value",1125876963),o__23134__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23133__auto___40799], null));
} else
{}
} else
{}
return o__23134__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema40760_40791,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema40761_40792], null)));

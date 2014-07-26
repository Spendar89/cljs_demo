// Compiled by ClojureScript 0.0-2156
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",4707957972),new cljs.core.Symbol("s","Schema","s/Schema",830322725,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",3860323928),(function (p1__23597__23598__auto__){var G__31395 = p1__23597__23598__auto__;if(G__31395)
{var bit__15677__auto__ = null;if(cljs.core.truth_((function (){var or__15027__auto__ = bit__15677__auto__;if(cljs.core.truth_(or__15027__auto__))
{return or__15027__auto__;
} else
{return G__31395.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__31395.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__31395);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__31395);
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
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__31396_SHARP_){return (cljs.core.val.call(null,p1__31396_SHARP_) > 1);
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
var vec__31398 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__31398,0,null);var v = cljs.core.nth.call(null,vec__31398,1,null);var p = vec__31398;if(cljs.core.truth_(p))
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
var ufv___31404 = schema.utils.use_fn_validation;var output_schema31399_31405 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema31400_31406 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-1640531420,null))], null);var input_checker31401_31407 = schema.core.checker.call(null,input_schema31400_31406);var output_checker31402_31408 = schema.core.checker.call(null,output_schema31399_31405);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = (function unwrap_schema_form_key(G__31403){var validate__23567__auto__ = ufv___31404.get_cell();if(cljs.core.truth_(validate__23567__auto__))
{var args__23568__auto___31409 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31403], null);var temp__4126__auto___31410 = input_checker31401_31407.call(null,args__23568__auto___31409);if(cljs.core.truth_(temp__4126__auto___31410))
{var error__23569__auto___31411 = temp__4126__auto___31410;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__23569__auto___31411)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema31400_31406,new cljs.core.Keyword(null,"value","value",1125876963),args__23568__auto___31409,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31411], null));
} else
{}
} else
{}
var o__23570__auto__ = (function (){var k = G__31403;while(true){
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
})();if(cljs.core.truth_(validate__23567__auto__))
{var temp__4126__auto___31412 = output_checker31402_31408.call(null,o__23570__auto__);if(cljs.core.truth_(temp__4126__auto___31412))
{var error__23569__auto___31413 = temp__4126__auto___31412;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-143561007,null),cljs.core.pr_str.call(null,error__23569__auto___31413)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema31399_31405,new cljs.core.Keyword(null,"value","value",1125876963),o__23570__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31413], null));
} else
{}
} else
{}
return o__23570__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema31399_31405,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31400_31406], null)));
var ufv___31419 = schema.utils.use_fn_validation;var output_schema31414_31420 = schema.core.Any;var input_schema31415_31421 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker31416_31422 = schema.core.checker.call(null,input_schema31415_31421);var output_checker31417_31423 = schema.core.checker.call(null,output_schema31414_31420);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = (function explicit_schema_key_map(G__31418){var validate__23567__auto__ = ufv___31419.get_cell();if(cljs.core.truth_(validate__23567__auto__))
{var args__23568__auto___31424 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31418], null);var temp__4126__auto___31425 = input_checker31416_31422.call(null,args__23568__auto___31424);if(cljs.core.truth_(temp__4126__auto___31425))
{var error__23569__auto___31426 = temp__4126__auto___31425;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__23569__auto___31426)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema31415_31421,new cljs.core.Keyword(null,"value","value",1125876963),args__23568__auto___31424,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31426], null));
} else
{}
} else
{}
var o__23570__auto__ = (function (){var s = G__31418;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__23567__auto__))
{var temp__4126__auto___31427 = output_checker31417_31423.call(null,o__23570__auto__);if(cljs.core.truth_(temp__4126__auto___31427))
{var error__23569__auto___31428 = temp__4126__auto___31427;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",2031840052,null),cljs.core.pr_str.call(null,error__23569__auto___31428)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema31414_31420,new cljs.core.Keyword(null,"value","value",1125876963),o__23570__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31428], null));
} else
{}
} else
{}
return o__23570__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema31414_31420,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31415_31421], null)));
var ufv___31434 = schema.utils.use_fn_validation;var output_schema31429_31435 = schema.core.Any;var input_schema31430_31436 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-1640531412,null))], null);var input_checker31431_31437 = schema.core.checker.call(null,input_schema31430_31436);var output_checker31432_31438 = schema.core.checker.call(null,output_schema31429_31435);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = (function split_schema_keys(G__31433){var validate__23567__auto__ = ufv___31434.get_cell();if(cljs.core.truth_(validate__23567__auto__))
{var args__23568__auto___31439 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31433], null);var temp__4126__auto___31440 = input_checker31431_31437.call(null,args__23568__auto___31439);if(cljs.core.truth_(temp__4126__auto___31440))
{var error__23569__auto___31441 = temp__4126__auto___31440;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__23569__auto___31441)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema31430_31436,new cljs.core.Keyword(null,"value","value",1125876963),args__23568__auto___31439,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31441], null));
} else
{}
} else
{}
var o__23570__auto__ = (function (){var s = G__31433;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-2033670824,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-1719548647,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__23567__auto__))
{var temp__4126__auto___31442 = output_checker31432_31438.call(null,o__23570__auto__);if(cljs.core.truth_(temp__4126__auto___31442))
{var error__23569__auto___31443 = temp__4126__auto___31442;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",1165575718,null),cljs.core.pr_str.call(null,error__23569__auto___31443)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema31429_31435,new cljs.core.Keyword(null,"value","value",1125876963),o__23570__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31443], null));
} else
{}
} else
{}
return o__23570__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema31429_31435,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31430_31436], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__31447){var vec__31448 = p__31447;var k = cljs.core.nth.call(null,vec__31448,0,null);var v = cljs.core.nth.call(null,vec__31448,1,null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__31449 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__31449,0,null);var ov = cljs.core.nth.call(null,vec__31449,1,null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
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
merge_on_with.cljs$lang$applyTo = (function (arglist__31450){
var key_project = cljs.core.first(arglist__31450);
arglist__31450 = cljs.core.next(arglist__31450);
var key_combine = cljs.core.first(arglist__31450);
arglist__31450 = cljs.core.next(arglist__31450);
var val_combine = cljs.core.first(arglist__31450);
var maps = cljs.core.rest(arglist__31450);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___31458 = schema.utils.use_fn_validation;var output_schema31452_31459 = plumbing.fnk.schema.InputSchema;var input_schema31453_31460 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-1640528223,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",-1640528222,null))], null);var input_checker31454_31461 = schema.core.checker.call(null,input_schema31453_31460);var output_checker31455_31462 = schema.core.checker.call(null,output_schema31452_31459);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = (function union_input_schemata(G__31456,G__31457){var validate__23567__auto__ = ufv___31458.get_cell();if(cljs.core.truth_(validate__23567__auto__))
{var args__23568__auto___31463 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31456,G__31457], null);var temp__4126__auto___31464 = input_checker31454_31461.call(null,args__23568__auto___31463);if(cljs.core.truth_(temp__4126__auto___31464))
{var error__23569__auto___31465 = temp__4126__auto___31464;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__23569__auto___31465)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema31453_31460,new cljs.core.Keyword(null,"value","value",1125876963),args__23568__auto___31463,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31465], null));
} else
{}
} else
{}
var o__23570__auto__ = (function (){var i1 = G__31456;var i2 = G__31457;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,(function (p1__31451_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__31451_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__31451_SHARP_);
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
})();if(cljs.core.truth_(validate__23567__auto__))
{var temp__4126__auto___31466 = output_checker31455_31462.call(null,o__23570__auto__);if(cljs.core.truth_(temp__4126__auto___31466))
{var error__23569__auto___31467 = temp__4126__auto___31466;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",1314662120,null),cljs.core.pr_str.call(null,error__23569__auto___31467)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema31452_31459,new cljs.core.Keyword(null,"value","value",1125876963),o__23570__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31467], null));
} else
{}
} else
{}
return o__23570__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema31452_31459,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31453_31460], null)));
var ufv___31473 = schema.utils.use_fn_validation;var output_schema31468_31474 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema31469_31475 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",-1943844163,null))], null);var input_checker31470_31476 = schema.core.checker.call(null,input_schema31469_31475);var output_checker31471_31477 = schema.core.checker.call(null,output_schema31468_31474);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = (function required_toplevel_keys(G__31472){var validate__23567__auto__ = ufv___31473.get_cell();if(cljs.core.truth_(validate__23567__auto__))
{var args__23568__auto___31478 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31472], null);var temp__4126__auto___31479 = input_checker31470_31476.call(null,args__23568__auto___31478);if(cljs.core.truth_(temp__4126__auto___31479))
{var error__23569__auto___31480 = temp__4126__auto___31479;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__23569__auto___31480)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema31469_31475,new cljs.core.Keyword(null,"value","value",1125876963),args__23568__auto___31478,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31480], null));
} else
{}
} else
{}
var o__23570__auto__ = (function (){var input_schema = G__31472;while(true){
return cljs.core.keep.call(null,(function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
}),cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__23567__auto__))
{var temp__4126__auto___31481 = output_checker31471_31477.call(null,o__23570__auto__);if(cljs.core.truth_(temp__4126__auto___31481))
{var error__23569__auto___31482 = temp__4126__auto___31481;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",-1439959619,null),cljs.core.pr_str.call(null,error__23569__auto___31482)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema31468_31474,new cljs.core.Keyword(null,"value","value",1125876963),o__23570__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31482], null));
} else
{}
} else
{}
return o__23570__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema31468_31474,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31469_31475], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15744__auto__ = (function iter__31491(s__31492){return (new cljs.core.LazySeq(null,(function (){var s__31492__$1 = s__31492;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31492__$1);if(temp__4126__auto__)
{var s__31492__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31492__$2))
{var c__15742__auto__ = cljs.core.chunk_first.call(null,s__31492__$2);var size__15743__auto__ = cljs.core.count.call(null,c__15742__auto__);var b__31494 = cljs.core.chunk_buffer.call(null,size__15743__auto__);if((function (){var i__31493 = 0;while(true){
if((i__31493 < size__15743__auto__))
{var vec__31497 = cljs.core._nth.call(null,c__15742__auto__,i__31493);var k = cljs.core.nth.call(null,vec__31497,0,null);var v = cljs.core.nth.call(null,vec__31497,1,null);cljs.core.chunk_append.call(null,b__31494,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__31499 = (i__31493 + 1);
i__31493 = G__31499;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31494),iter__31491.call(null,cljs.core.chunk_rest.call(null,s__31492__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31494),null);
}
} else
{var vec__31498 = cljs.core.first.call(null,s__31492__$2);var k = cljs.core.nth.call(null,vec__31498,0,null);var v = cljs.core.nth.call(null,vec__31498,1,null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__31491.call(null,cljs.core.rest.call(null,s__31492__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15744__auto__.call(null,expr);
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
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15744__auto__ = (function iter__31508(s__31509){return (new cljs.core.LazySeq(null,(function (){var s__31509__$1 = s__31509;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31509__$1);if(temp__4126__auto__)
{var s__31509__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31509__$2))
{var c__15742__auto__ = cljs.core.chunk_first.call(null,s__31509__$2);var size__15743__auto__ = cljs.core.count.call(null,c__15742__auto__);var b__31511 = cljs.core.chunk_buffer.call(null,size__15743__auto__);if((function (){var i__31510 = 0;while(true){
if((i__31510 < size__15743__auto__))
{var vec__31514 = cljs.core._nth.call(null,c__15742__auto__,i__31510);var k = cljs.core.nth.call(null,vec__31514,0,null);var v = cljs.core.nth.call(null,vec__31514,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__31511,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__31516 = (i__31510 + 1);
i__31510 = G__31516;
continue;
}
} else
{{
var G__31517 = (i__31510 + 1);
i__31510 = G__31517;
continue;
}
}
} else
{{
var G__31518 = (i__31510 + 1);
i__31510 = G__31518;
continue;
}
}
} else
{{
var G__31519 = (i__31510 + 1);
i__31510 = G__31519;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31511),iter__31508.call(null,cljs.core.chunk_rest.call(null,s__31509__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31511),null);
}
} else
{var vec__31515 = cljs.core.first.call(null,s__31509__$2);var k = cljs.core.nth.call(null,vec__31515,0,null);var v = cljs.core.nth.call(null,vec__31515,1,null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",-1340904975,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__31508.call(null,cljs.core.rest.call(null,s__31509__$2)));
} else
{{
var G__31520 = cljs.core.rest.call(null,s__31509__$2);
s__31509__$1 = G__31520;
continue;
}
}
} else
{{
var G__31521 = cljs.core.rest.call(null,s__31509__$2);
s__31509__$1 = G__31521;
continue;
}
}
} else
{{
var G__31522 = cljs.core.rest.call(null,s__31509__$2);
s__31509__$1 = G__31522;
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
});return iter__15744__auto__.call(null,input_schema);
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
var ufv___31545 = schema.utils.use_fn_validation;var output_schema31523_31546 = schema.core.Any;var input_schema31524_31547 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-1540173437,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",1648923322,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker31525_31548 = schema.core.checker.call(null,input_schema31524_31547);var output_checker31526_31549 = schema.core.checker.call(null,output_schema31523_31546);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = (function compose_schemata(G__31527,G__31528){var validate__23567__auto__ = true;if(validate__23567__auto__)
{var args__23568__auto___31550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31527,G__31528], null);var temp__4126__auto___31551 = input_checker31525_31548.call(null,args__23568__auto___31550);if(cljs.core.truth_(temp__4126__auto___31551))
{var error__23569__auto___31552 = temp__4126__auto___31551;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__23569__auto___31552)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema31524_31547,new cljs.core.Keyword(null,"value","value",1125876963),args__23568__auto___31550,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31552], null));
} else
{}
} else
{}
var o__23570__auto__ = (function (){var G__31539 = G__31527;var vec__31541 = G__31539;var i2 = cljs.core.nth.call(null,vec__31541,0,null);var o2 = cljs.core.nth.call(null,vec__31541,1,null);var G__31540 = G__31528;var vec__31542 = G__31540;var i1 = cljs.core.nth.call(null,vec__31542,0,null);var o1 = cljs.core.nth.call(null,vec__31542,1,null);var G__31539__$1 = G__31539;var G__31540__$1 = G__31540;while(true){
var vec__31543 = G__31539__$1;var i2__$1 = cljs.core.nth.call(null,vec__31543,0,null);var o2__$1 = cljs.core.nth.call(null,vec__31543,1,null);var vec__31544 = G__31540__$1;var i1__$1 = cljs.core.nth.call(null,vec__31544,0,null);var o1__$1 = cljs.core.nth.call(null,vec__31544,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__23567__auto__)
{var temp__4126__auto___31553 = output_checker31526_31549.call(null,o__23570__auto__);if(cljs.core.truth_(temp__4126__auto___31553))
{var error__23569__auto___31554 = temp__4126__auto___31553;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",-726429854,null),cljs.core.pr_str.call(null,error__23569__auto___31554)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema31523_31546,new cljs.core.Keyword(null,"value","value",1125876963),o__23570__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31554], null));
} else
{}
} else
{}
return o__23570__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema31523_31546,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31524_31547], null)));
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
var ufv___31633 = schema.utils.use_fn_validation;var output_schema31555_31634 = schema.core.Any;var input_schema31556_31635 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-1640531412,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-1640528095,null))], null);var input_checker31557_31636 = schema.core.checker.call(null,input_schema31556_31635);var output_checker31558_31637 = schema.core.checker.call(null,output_schema31555_31634);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = (function split_schema(G__31559,G__31560){var validate__23567__auto__ = ufv___31633.get_cell();if(cljs.core.truth_(validate__23567__auto__))
{var args__23568__auto___31638 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31559,G__31560], null);var temp__4126__auto___31639 = input_checker31557_31636.call(null,args__23568__auto___31638);if(cljs.core.truth_(temp__4126__auto___31639))
{var error__23569__auto___31640 = temp__4126__auto___31639;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__23569__auto___31640)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema31556_31635,new cljs.core.Keyword(null,"value","value",1125876963),args__23568__auto___31638,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31640], null));
} else
{}
} else
{}
var o__23570__auto__ = (function (){var s = G__31559;var ks = G__31560;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__15744__auto__ = ((function (ks__$1){
return (function iter__31597(s__31598){return (new cljs.core.LazySeq(null,((function (ks__$1){
return (function (){var s__31598__$1 = s__31598;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__31598__$1);if(temp__4126__auto__)
{var s__31598__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__31598__$2))
{var c__15742__auto__ = cljs.core.chunk_first.call(null,s__31598__$2);var size__15743__auto__ = cljs.core.count.call(null,c__15742__auto__);var b__31600 = cljs.core.chunk_buffer.call(null,size__15743__auto__);if((function (){var i__31599 = 0;while(true){
if((i__31599 < size__15743__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__15742__auto__,i__31599);cljs.core.chunk_append.call(null,b__31600,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15744__auto__ = ((function (i__31599,in_QMARK_,c__15742__auto__,size__15743__auto__,b__31600,s__31598__$2,temp__4126__auto__,ks__$1){
return (function iter__31617(s__31618){return (new cljs.core.LazySeq(null,((function (i__31599,in_QMARK_,c__15742__auto__,size__15743__auto__,b__31600,s__31598__$2,temp__4126__auto__,ks__$1){
return (function (){var s__31618__$1 = s__31618;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31618__$1);if(temp__4126__auto____$1)
{var s__31618__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31618__$2))
{var c__15742__auto____$1 = cljs.core.chunk_first.call(null,s__31618__$2);var size__15743__auto____$1 = cljs.core.count.call(null,c__15742__auto____$1);var b__31620 = cljs.core.chunk_buffer.call(null,size__15743__auto____$1);if((function (){var i__31619 = 0;while(true){
if((i__31619 < size__15743__auto____$1))
{var vec__31623 = cljs.core._nth.call(null,c__15742__auto____$1,i__31619);var k = cljs.core.nth.call(null,vec__31623,0,null);var v = cljs.core.nth.call(null,vec__31623,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__31620,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__31641 = (i__31619 + 1);
i__31619 = G__31641;
continue;
}
} else
{{
var G__31642 = (i__31619 + 1);
i__31619 = G__31642;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31620),iter__31617.call(null,cljs.core.chunk_rest.call(null,s__31618__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31620),null);
}
} else
{var vec__31624 = cljs.core.first.call(null,s__31618__$2);var k = cljs.core.nth.call(null,vec__31624,0,null);var v = cljs.core.nth.call(null,vec__31624,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__31617.call(null,cljs.core.rest.call(null,s__31618__$2)));
} else
{{
var G__31643 = cljs.core.rest.call(null,s__31618__$2);
s__31618__$1 = G__31643;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__31599,in_QMARK_,c__15742__auto__,size__15743__auto__,b__31600,s__31598__$2,temp__4126__auto__,ks__$1))
,null,null));
});})(i__31599,in_QMARK_,c__15742__auto__,size__15743__auto__,b__31600,s__31598__$2,temp__4126__auto__,ks__$1))
;return iter__15744__auto__.call(null,s);
})()));
{
var G__31644 = (i__31599 + 1);
i__31599 = G__31644;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31600),iter__31597.call(null,cljs.core.chunk_rest.call(null,s__31598__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31600),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__31598__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__15744__auto__ = ((function (in_QMARK_,s__31598__$2,temp__4126__auto__,ks__$1){
return (function iter__31625(s__31626){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__31598__$2,temp__4126__auto__,ks__$1){
return (function (){var s__31626__$1 = s__31626;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__31626__$1);if(temp__4126__auto____$1)
{var s__31626__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__31626__$2))
{var c__15742__auto__ = cljs.core.chunk_first.call(null,s__31626__$2);var size__15743__auto__ = cljs.core.count.call(null,c__15742__auto__);var b__31628 = cljs.core.chunk_buffer.call(null,size__15743__auto__);if((function (){var i__31627 = 0;while(true){
if((i__31627 < size__15743__auto__))
{var vec__31631 = cljs.core._nth.call(null,c__15742__auto__,i__31627);var k = cljs.core.nth.call(null,vec__31631,0,null);var v = cljs.core.nth.call(null,vec__31631,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__31628,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__31645 = (i__31627 + 1);
i__31627 = G__31645;
continue;
}
} else
{{
var G__31646 = (i__31627 + 1);
i__31627 = G__31646;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31628),iter__31625.call(null,cljs.core.chunk_rest.call(null,s__31626__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__31628),null);
}
} else
{var vec__31632 = cljs.core.first.call(null,s__31626__$2);var k = cljs.core.nth.call(null,vec__31632,0,null);var v = cljs.core.nth.call(null,vec__31632,1,null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__31625.call(null,cljs.core.rest.call(null,s__31626__$2)));
} else
{{
var G__31647 = cljs.core.rest.call(null,s__31626__$2);
s__31626__$1 = G__31647;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__31598__$2,temp__4126__auto__,ks__$1))
,null,null));
});})(in_QMARK_,s__31598__$2,temp__4126__auto__,ks__$1))
;return iter__15744__auto__.call(null,s);
})()),iter__31597.call(null,cljs.core.rest.call(null,s__31598__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1))
,null,null));
});})(ks__$1))
;return iter__15744__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__23567__auto__))
{var temp__4126__auto___31648 = output_checker31558_31637.call(null,o__23570__auto__);if(cljs.core.truth_(temp__4126__auto___31648))
{var error__23569__auto___31649 = temp__4126__auto___31648;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1048718701,null),cljs.core.pr_str.call(null,error__23569__auto___31649)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema31555_31634,new cljs.core.Keyword(null,"value","value",1125876963),o__23570__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31649], null));
} else
{}
} else
{}
return o__23570__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema31555_31634,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31556_31635], null)));
var ufv___31680 = schema.utils.use_fn_validation;var output_schema31650_31681 = plumbing.fnk.schema.GraphIOSchemata;var input_schema31651_31682 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1637529005,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1637529004,null))], null);var input_checker31652_31683 = schema.core.checker.call(null,input_schema31651_31682);var output_checker31653_31684 = schema.core.checker.call(null,output_schema31650_31681);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = (function sequence_schemata(G__31654,G__31655){var validate__23567__auto__ = ufv___31680.get_cell();if(cljs.core.truth_(validate__23567__auto__))
{var args__23568__auto___31685 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__31654,G__31655], null);var temp__4126__auto___31686 = input_checker31652_31683.call(null,args__23568__auto___31685);if(cljs.core.truth_(temp__4126__auto___31686))
{var error__23569__auto___31687 = temp__4126__auto___31686;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__23569__auto___31687)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),input_schema31651_31682,new cljs.core.Keyword(null,"value","value",1125876963),args__23568__auto___31685,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31687], null));
} else
{}
} else
{}
var o__23570__auto__ = (function (){var G__31671 = G__31654;var vec__31673 = G__31671;var i1 = cljs.core.nth.call(null,vec__31673,0,null);var o1 = cljs.core.nth.call(null,vec__31673,1,null);var G__31672 = G__31655;var vec__31674 = G__31672;var k = cljs.core.nth.call(null,vec__31674,0,null);var vec__31675 = cljs.core.nth.call(null,vec__31674,1,null);var i2 = cljs.core.nth.call(null,vec__31675,0,null);var o2 = cljs.core.nth.call(null,vec__31675,1,null);var G__31671__$1 = G__31671;var G__31672__$1 = G__31672;while(true){
var vec__31676 = G__31671__$1;var i1__$1 = cljs.core.nth.call(null,vec__31676,0,null);var o1__$1 = cljs.core.nth.call(null,vec__31676,1,null);var vec__31677 = G__31672__$1;var k__$1 = cljs.core.nth.call(null,vec__31677,0,null);var vec__31678 = cljs.core.nth.call(null,vec__31677,1,null);var i2__$1 = cljs.core.nth.call(null,vec__31678,0,null);var o2__$1 = cljs.core.nth.call(null,vec__31678,1,null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
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
var vec__31679 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__31679,0,null);var unused = cljs.core.nth.call(null,vec__31679,1,null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__23567__auto__))
{var temp__4126__auto___31688 = output_checker31653_31684.call(null,o__23570__auto__);if(cljs.core.truth_(temp__4126__auto___31688))
{var error__23569__auto___31689 = temp__4126__auto___31688;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",19729939,null),cljs.core.pr_str.call(null,error__23569__auto___31689)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",4400883987),output_schema31650_31681,new cljs.core.Keyword(null,"value","value",1125876963),o__23570__auto__,new cljs.core.Keyword(null,"error","error",1110689146),error__23569__auto___31689], null));
} else
{}
} else
{}
return o__23570__auto__;
});
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema31650_31681,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema31651_31682], null)));

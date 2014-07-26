// Compiled by ClojureScript 0.0-2156
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1730933117);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__40241__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__40241 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__40241__delegate.call(this,m,k,f,x1,x2,xs);};
G__40241.cljs$lang$maxFixedArity = 5;
G__40241.cljs$lang$applyTo = (function (arglist__40242){
var m = cljs.core.first(arglist__40242);
arglist__40242 = cljs.core.next(arglist__40242);
var k = cljs.core.first(arglist__40242);
arglist__40242 = cljs.core.next(arglist__40242);
var f = cljs.core.first(arglist__40242);
arglist__40242 = cljs.core.next(arglist__40242);
var x1 = cljs.core.first(arglist__40242);
arglist__40242 = cljs.core.next(arglist__40242);
var x2 = cljs.core.first(arglist__40242);
var xs = cljs.core.rest(arglist__40242);
return G__40241__delegate(m,k,f,x1,x2,xs);
});
G__40241.cljs$core$IFn$_invoke$arity$variadic = G__40241__delegate;
return G__40241;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{var m_atom__25009__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__40251_40257 = cljs.core.seq.call(null,m);var chunk__40252_40258 = null;var count__40253_40259 = 0;var i__40254_40260 = 0;while(true){
if((i__40254_40260 < count__40253_40259))
{var vec__40255_40261 = cljs.core._nth.call(null,chunk__40252_40258,i__40254_40260);var k_40262 = cljs.core.nth.call(null,vec__40255_40261,0,null);var v_40263 = cljs.core.nth.call(null,vec__40255_40261,1,null);var m40250_40264 = cljs.core.deref.call(null,m_atom__25009__auto__);cljs.core.reset_BANG_.call(null,m_atom__25009__auto__,cljs.core.assoc_BANG_.call(null,m40250_40264,k_40262,f.call(null,v_40263)));
{
var G__40265 = seq__40251_40257;
var G__40266 = chunk__40252_40258;
var G__40267 = count__40253_40259;
var G__40268 = (i__40254_40260 + 1);
seq__40251_40257 = G__40265;
chunk__40252_40258 = G__40266;
count__40253_40259 = G__40267;
i__40254_40260 = G__40268;
continue;
}
} else
{var temp__4126__auto___40269 = cljs.core.seq.call(null,seq__40251_40257);if(temp__4126__auto___40269)
{var seq__40251_40270__$1 = temp__4126__auto___40269;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40251_40270__$1))
{var c__15329__auto___40271 = cljs.core.chunk_first.call(null,seq__40251_40270__$1);{
var G__40272 = cljs.core.chunk_rest.call(null,seq__40251_40270__$1);
var G__40273 = c__15329__auto___40271;
var G__40274 = cljs.core.count.call(null,c__15329__auto___40271);
var G__40275 = 0;
seq__40251_40257 = G__40272;
chunk__40252_40258 = G__40273;
count__40253_40259 = G__40274;
i__40254_40260 = G__40275;
continue;
}
} else
{var vec__40256_40276 = cljs.core.first.call(null,seq__40251_40270__$1);var k_40277 = cljs.core.nth.call(null,vec__40256_40276,0,null);var v_40278 = cljs.core.nth.call(null,vec__40256_40276,1,null);var m40250_40279 = cljs.core.deref.call(null,m_atom__25009__auto__);cljs.core.reset_BANG_.call(null,m_atom__25009__auto__,cljs.core.assoc_BANG_.call(null,m40250_40279,k_40277,f.call(null,v_40278)));
{
var G__40280 = cljs.core.next.call(null,seq__40251_40270__$1);
var G__40281 = null;
var G__40282 = 0;
var G__40283 = 0;
seq__40251_40257 = G__40280;
chunk__40252_40258 = G__40281;
count__40253_40259 = G__40282;
i__40254_40260 = G__40283;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25009__auto__));
} else
{return null;
}
}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__25009__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__40292_40298 = cljs.core.seq.call(null,m);var chunk__40293_40299 = null;var count__40294_40300 = 0;var i__40295_40301 = 0;while(true){
if((i__40295_40301 < count__40294_40300))
{var vec__40296_40302 = cljs.core._nth.call(null,chunk__40293_40299,i__40295_40301);var k_40303 = cljs.core.nth.call(null,vec__40296_40302,0,null);var v_40304 = cljs.core.nth.call(null,vec__40296_40302,1,null);var m40291_40305 = cljs.core.deref.call(null,m_atom__25009__auto__);cljs.core.reset_BANG_.call(null,m_atom__25009__auto__,cljs.core.assoc_BANG_.call(null,m40291_40305,f.call(null,k_40303),v_40304));
{
var G__40306 = seq__40292_40298;
var G__40307 = chunk__40293_40299;
var G__40308 = count__40294_40300;
var G__40309 = (i__40295_40301 + 1);
seq__40292_40298 = G__40306;
chunk__40293_40299 = G__40307;
count__40294_40300 = G__40308;
i__40295_40301 = G__40309;
continue;
}
} else
{var temp__4126__auto___40310 = cljs.core.seq.call(null,seq__40292_40298);if(temp__4126__auto___40310)
{var seq__40292_40311__$1 = temp__4126__auto___40310;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40292_40311__$1))
{var c__15329__auto___40312 = cljs.core.chunk_first.call(null,seq__40292_40311__$1);{
var G__40313 = cljs.core.chunk_rest.call(null,seq__40292_40311__$1);
var G__40314 = c__15329__auto___40312;
var G__40315 = cljs.core.count.call(null,c__15329__auto___40312);
var G__40316 = 0;
seq__40292_40298 = G__40313;
chunk__40293_40299 = G__40314;
count__40294_40300 = G__40315;
i__40295_40301 = G__40316;
continue;
}
} else
{var vec__40297_40317 = cljs.core.first.call(null,seq__40292_40311__$1);var k_40318 = cljs.core.nth.call(null,vec__40297_40317,0,null);var v_40319 = cljs.core.nth.call(null,vec__40297_40317,1,null);var m40291_40320 = cljs.core.deref.call(null,m_atom__25009__auto__);cljs.core.reset_BANG_.call(null,m_atom__25009__auto__,cljs.core.assoc_BANG_.call(null,m40291_40320,f.call(null,k_40318),v_40319));
{
var G__40321 = cljs.core.next.call(null,seq__40292_40311__$1);
var G__40322 = null;
var G__40323 = 0;
var G__40324 = 0;
seq__40292_40298 = G__40321;
chunk__40293_40299 = G__40322;
count__40294_40300 = G__40323;
i__40295_40301 = G__40324;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25009__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__25009__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__40331_40335 = cljs.core.seq.call(null,ks);var chunk__40332_40336 = null;var count__40333_40337 = 0;var i__40334_40338 = 0;while(true){
if((i__40334_40338 < count__40333_40337))
{var k_40339 = cljs.core._nth.call(null,chunk__40332_40336,i__40334_40338);var m40330_40340 = cljs.core.deref.call(null,m_atom__25009__auto__);cljs.core.reset_BANG_.call(null,m_atom__25009__auto__,cljs.core.assoc_BANG_.call(null,m40330_40340,k_40339,f.call(null,k_40339)));
{
var G__40341 = seq__40331_40335;
var G__40342 = chunk__40332_40336;
var G__40343 = count__40333_40337;
var G__40344 = (i__40334_40338 + 1);
seq__40331_40335 = G__40341;
chunk__40332_40336 = G__40342;
count__40333_40337 = G__40343;
i__40334_40338 = G__40344;
continue;
}
} else
{var temp__4126__auto___40345 = cljs.core.seq.call(null,seq__40331_40335);if(temp__4126__auto___40345)
{var seq__40331_40346__$1 = temp__4126__auto___40345;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40331_40346__$1))
{var c__15329__auto___40347 = cljs.core.chunk_first.call(null,seq__40331_40346__$1);{
var G__40348 = cljs.core.chunk_rest.call(null,seq__40331_40346__$1);
var G__40349 = c__15329__auto___40347;
var G__40350 = cljs.core.count.call(null,c__15329__auto___40347);
var G__40351 = 0;
seq__40331_40335 = G__40348;
chunk__40332_40336 = G__40349;
count__40333_40337 = G__40350;
i__40334_40338 = G__40351;
continue;
}
} else
{var k_40352 = cljs.core.first.call(null,seq__40331_40346__$1);var m40330_40353 = cljs.core.deref.call(null,m_atom__25009__auto__);cljs.core.reset_BANG_.call(null,m_atom__25009__auto__,cljs.core.assoc_BANG_.call(null,m40330_40353,k_40352,f.call(null,k_40352)));
{
var G__40354 = cljs.core.next.call(null,seq__40331_40346__$1);
var G__40355 = null;
var G__40356 = 0;
var G__40357 = 0;
seq__40331_40335 = G__40354;
chunk__40332_40336 = G__40355;
count__40333_40337 = G__40356;
i__40334_40338 = G__40357;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25009__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__25009__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__40364_40368 = cljs.core.seq.call(null,vs);var chunk__40365_40369 = null;var count__40366_40370 = 0;var i__40367_40371 = 0;while(true){
if((i__40367_40371 < count__40366_40370))
{var v_40372 = cljs.core._nth.call(null,chunk__40365_40369,i__40367_40371);var m40363_40373 = cljs.core.deref.call(null,m_atom__25009__auto__);cljs.core.reset_BANG_.call(null,m_atom__25009__auto__,cljs.core.assoc_BANG_.call(null,m40363_40373,f.call(null,v_40372),v_40372));
{
var G__40374 = seq__40364_40368;
var G__40375 = chunk__40365_40369;
var G__40376 = count__40366_40370;
var G__40377 = (i__40367_40371 + 1);
seq__40364_40368 = G__40374;
chunk__40365_40369 = G__40375;
count__40366_40370 = G__40376;
i__40367_40371 = G__40377;
continue;
}
} else
{var temp__4126__auto___40378 = cljs.core.seq.call(null,seq__40364_40368);if(temp__4126__auto___40378)
{var seq__40364_40379__$1 = temp__4126__auto___40378;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40364_40379__$1))
{var c__15329__auto___40380 = cljs.core.chunk_first.call(null,seq__40364_40379__$1);{
var G__40381 = cljs.core.chunk_rest.call(null,seq__40364_40379__$1);
var G__40382 = c__15329__auto___40380;
var G__40383 = cljs.core.count.call(null,c__15329__auto___40380);
var G__40384 = 0;
seq__40364_40368 = G__40381;
chunk__40365_40369 = G__40382;
count__40366_40370 = G__40383;
i__40367_40371 = G__40384;
continue;
}
} else
{var v_40385 = cljs.core.first.call(null,seq__40364_40379__$1);var m40363_40386 = cljs.core.deref.call(null,m_atom__25009__auto__);cljs.core.reset_BANG_.call(null,m_atom__25009__auto__,cljs.core.assoc_BANG_.call(null,m40363_40386,f.call(null,v_40385),v_40385));
{
var G__40387 = cljs.core.next.call(null,seq__40364_40379__$1);
var G__40388 = null;
var G__40389 = 0;
var G__40390 = 0;
seq__40364_40368 = G__40387;
chunk__40365_40369 = G__40388;
count__40366_40370 = G__40389;
i__40367_40371 = G__40390;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25009__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__40391){var vec__40393 = p__40391;var k = cljs.core.nth.call(null,vec__40393,0,null);var ks = cljs.core.nthnext.call(null,vec__40393,1);if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__14569__auto__ = ks;if(and__14569__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__14569__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__25009__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__40402_40408 = cljs.core.seq.call(null,x);var chunk__40403_40409 = null;var count__40404_40410 = 0;var i__40405_40411 = 0;while(true){
if((i__40405_40411 < count__40404_40410))
{var vec__40406_40412 = cljs.core._nth.call(null,chunk__40403_40409,i__40405_40411);var k_40413 = cljs.core.nth.call(null,vec__40406_40412,0,null);var v_40414 = cljs.core.nth.call(null,vec__40406_40412,1,null);var m40401_40415 = cljs.core.deref.call(null,m_atom__25009__auto__);cljs.core.reset_BANG_.call(null,m_atom__25009__auto__,cljs.core.assoc_BANG_.call(null,m40401_40415,((typeof k_40413 === 'string')?cljs.core.keyword.call(null,k_40413):k_40413),keywordize_map.call(null,v_40414)));
{
var G__40416 = seq__40402_40408;
var G__40417 = chunk__40403_40409;
var G__40418 = count__40404_40410;
var G__40419 = (i__40405_40411 + 1);
seq__40402_40408 = G__40416;
chunk__40403_40409 = G__40417;
count__40404_40410 = G__40418;
i__40405_40411 = G__40419;
continue;
}
} else
{var temp__4126__auto___40420 = cljs.core.seq.call(null,seq__40402_40408);if(temp__4126__auto___40420)
{var seq__40402_40421__$1 = temp__4126__auto___40420;if(cljs.core.chunked_seq_QMARK_.call(null,seq__40402_40421__$1))
{var c__15329__auto___40422 = cljs.core.chunk_first.call(null,seq__40402_40421__$1);{
var G__40423 = cljs.core.chunk_rest.call(null,seq__40402_40421__$1);
var G__40424 = c__15329__auto___40422;
var G__40425 = cljs.core.count.call(null,c__15329__auto___40422);
var G__40426 = 0;
seq__40402_40408 = G__40423;
chunk__40403_40409 = G__40424;
count__40404_40410 = G__40425;
i__40405_40411 = G__40426;
continue;
}
} else
{var vec__40407_40427 = cljs.core.first.call(null,seq__40402_40421__$1);var k_40428 = cljs.core.nth.call(null,vec__40407_40427,0,null);var v_40429 = cljs.core.nth.call(null,vec__40407_40427,1,null);var m40401_40430 = cljs.core.deref.call(null,m_atom__25009__auto__);cljs.core.reset_BANG_.call(null,m_atom__25009__auto__,cljs.core.assoc_BANG_.call(null,m40401_40430,((typeof k_40428 === 'string')?cljs.core.keyword.call(null,k_40428):k_40428),keywordize_map.call(null,v_40429)));
{
var G__40431 = cljs.core.next.call(null,seq__40402_40421__$1);
var G__40432 = null;
var G__40433 = 0;
var G__40434 = 0;
seq__40402_40408 = G__40431;
chunk__40403_40409 = G__40432;
count__40404_40410 = G__40433;
i__40405_40411 = G__40434;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25009__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x;
} else
{return null;
}
}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__25078__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__25078__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__40435 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__40436 = cljs.core.next.call(null,ks);
m = G__40435;
ks = G__40436;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1543640034,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-1545680184,null),new cljs.core.Symbol(null,"kvs","kvs",-1640424927,null)))))].join('')));
}
return cljs.core.into.call(null,(function (){var or__14581__auto__ = m;if(cljs.core.truth_(or__14581__auto__))
{return or__14581__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__15298__auto__ = (function iter__40445(s__40446){return (new cljs.core.LazySeq(null,(function (){var s__40446__$1 = s__40446;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40446__$1);if(temp__4126__auto__)
{var s__40446__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40446__$2))
{var c__15296__auto__ = cljs.core.chunk_first.call(null,s__40446__$2);var size__15297__auto__ = cljs.core.count.call(null,c__15296__auto__);var b__40448 = cljs.core.chunk_buffer.call(null,size__15297__auto__);if((function (){var i__40447 = 0;while(true){
if((i__40447 < size__15297__auto__))
{var vec__40451 = cljs.core._nth.call(null,c__15296__auto__,i__40447);var k = cljs.core.nth.call(null,vec__40451,0,null);var v = cljs.core.nth.call(null,vec__40451,1,null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__40448,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__40453 = (i__40447 + 1);
i__40447 = G__40453;
continue;
}
} else
{{
var G__40454 = (i__40447 + 1);
i__40447 = G__40454;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40448),iter__40445.call(null,cljs.core.chunk_rest.call(null,s__40446__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40448),null);
}
} else
{var vec__40452 = cljs.core.first.call(null,s__40446__$2);var k = cljs.core.nth.call(null,vec__40452,0,null);var v = cljs.core.nth.call(null,vec__40452,1,null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__40445.call(null,cljs.core.rest.call(null,s__40446__$2)));
} else
{{
var G__40455 = cljs.core.rest.call(null,s__40446__$2);
s__40446__$1 = G__40455;
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
assoc_when.cljs$lang$applyTo = (function (arglist__40456){
var m = cljs.core.first(arglist__40456);
var kvs = cljs.core.rest(arglist__40456);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__40457){
var m = cljs.core.first(arglist__40457);
arglist__40457 = cljs.core.next(arglist__40457);
var key_seq = cljs.core.first(arglist__40457);
arglist__40457 = cljs.core.next(arglist__40457);
var f = cljs.core.first(arglist__40457);
var args = cljs.core.rest(arglist__40457);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__15298__auto__ = (function iter__40462(s__40463){return (new cljs.core.LazySeq(null,(function (){var s__40463__$1 = s__40463;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__40463__$1);if(temp__4126__auto__)
{var s__40463__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__40463__$2))
{var c__15296__auto__ = cljs.core.chunk_first.call(null,s__40463__$2);var size__15297__auto__ = cljs.core.count.call(null,c__15296__auto__);var b__40465 = cljs.core.chunk_buffer.call(null,size__15297__auto__);if((function (){var i__40464 = 0;while(true){
if((i__40464 < size__15297__auto__))
{var x = cljs.core._nth.call(null,c__15296__auto__,i__40464);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__40465,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__40466 = (i__40464 + 1);
i__40464 = G__40466;
continue;
}
} else
{{
var G__40467 = (i__40464 + 1);
i__40464 = G__40467;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40465),iter__40462.call(null,cljs.core.chunk_rest.call(null,s__40463__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40465),null);
}
} else
{var x = cljs.core.first.call(null,s__40463__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__40462.call(null,cljs.core.rest.call(null,s__40463__$2)));
} else
{{
var G__40468 = cljs.core.rest.call(null,s__40463__$2);
s__40463__$1 = G__40468;
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
});return iter__15298__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__40469){
var colls = cljs.core.seq(arglist__40469);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__40470__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__40471 = conj_when.call(null,coll,x);
var G__40472 = cljs.core.first.call(null,xs);
var G__40473 = cljs.core.next.call(null,xs);
coll = G__40471;
x = G__40472;
xs = G__40473;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__40470 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__40470__delegate.call(this,coll,x,xs);};
G__40470.cljs$lang$maxFixedArity = 2;
G__40470.cljs$lang$applyTo = (function (arglist__40474){
var coll = cljs.core.first(arglist__40474);
arglist__40474 = cljs.core.next(arglist__40474);
var x = cljs.core.first(arglist__40474);
var xs = cljs.core.rest(arglist__40474);
return G__40470__delegate(coll,x,xs);
});
G__40470.cljs$core$IFn$_invoke$arity$variadic = G__40470__delegate;
return G__40470;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__40476__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__40475_SHARP_){return cljs.core.apply.call(null,f,p1__40475_SHARP_,args);
}));
};
var G__40476 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__40476__delegate.call(this,a,f,args);};
G__40476.cljs$lang$maxFixedArity = 2;
G__40476.cljs$lang$applyTo = (function (arglist__40477){
var a = cljs.core.first(arglist__40477);
arglist__40477 = cljs.core.next(arglist__40477);
var f = cljs.core.first(arglist__40477);
var args = cljs.core.rest(arglist__40477);
return G__40476__delegate(a,f,args);
});
G__40476.cljs$core$IFn$_invoke$arity$variadic = G__40476__delegate;
return G__40476;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__40478__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__40478 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__40478__delegate.call(this,f,arg,args);};
G__40478.cljs$lang$maxFixedArity = 2;
G__40478.cljs$lang$applyTo = (function (arglist__40479){
var f = cljs.core.first(arglist__40479);
arglist__40479 = cljs.core.next(arglist__40479);
var arg = cljs.core.first(arglist__40479);
var args = cljs.core.rest(arglist__40479);
return G__40478__delegate(f,arg,args);
});
G__40478.cljs$core$IFn$_invoke$arity$variadic = G__40478__delegate;
return G__40478;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

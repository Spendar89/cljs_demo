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
var G__47311__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__47311 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__47311__delegate.call(this,m,k,f,x1,x2,xs);};
G__47311.cljs$lang$maxFixedArity = 5;
G__47311.cljs$lang$applyTo = (function (arglist__47312){
var m = cljs.core.first(arglist__47312);
arglist__47312 = cljs.core.next(arglist__47312);
var k = cljs.core.first(arglist__47312);
arglist__47312 = cljs.core.next(arglist__47312);
var f = cljs.core.first(arglist__47312);
arglist__47312 = cljs.core.next(arglist__47312);
var x1 = cljs.core.first(arglist__47312);
arglist__47312 = cljs.core.next(arglist__47312);
var x2 = cljs.core.first(arglist__47312);
var xs = cljs.core.rest(arglist__47312);
return G__47311__delegate(m,k,f,x1,x2,xs);
});
G__47311.cljs$core$IFn$_invoke$arity$variadic = G__47311__delegate;
return G__47311;
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
{var m_atom__25534__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__47321_47327 = cljs.core.seq.call(null,m);var chunk__47322_47328 = null;var count__47323_47329 = 0;var i__47324_47330 = 0;while(true){
if((i__47324_47330 < count__47323_47329))
{var vec__47325_47331 = cljs.core._nth.call(null,chunk__47322_47328,i__47324_47330);var k_47332 = cljs.core.nth.call(null,vec__47325_47331,0,null);var v_47333 = cljs.core.nth.call(null,vec__47325_47331,1,null);var m47320_47334 = cljs.core.deref.call(null,m_atom__25534__auto__);cljs.core.reset_BANG_.call(null,m_atom__25534__auto__,cljs.core.assoc_BANG_.call(null,m47320_47334,k_47332,f.call(null,v_47333)));
{
var G__47335 = seq__47321_47327;
var G__47336 = chunk__47322_47328;
var G__47337 = count__47323_47329;
var G__47338 = (i__47324_47330 + 1);
seq__47321_47327 = G__47335;
chunk__47322_47328 = G__47336;
count__47323_47329 = G__47337;
i__47324_47330 = G__47338;
continue;
}
} else
{var temp__4126__auto___47339 = cljs.core.seq.call(null,seq__47321_47327);if(temp__4126__auto___47339)
{var seq__47321_47340__$1 = temp__4126__auto___47339;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47321_47340__$1))
{var c__15854__auto___47341 = cljs.core.chunk_first.call(null,seq__47321_47340__$1);{
var G__47342 = cljs.core.chunk_rest.call(null,seq__47321_47340__$1);
var G__47343 = c__15854__auto___47341;
var G__47344 = cljs.core.count.call(null,c__15854__auto___47341);
var G__47345 = 0;
seq__47321_47327 = G__47342;
chunk__47322_47328 = G__47343;
count__47323_47329 = G__47344;
i__47324_47330 = G__47345;
continue;
}
} else
{var vec__47326_47346 = cljs.core.first.call(null,seq__47321_47340__$1);var k_47347 = cljs.core.nth.call(null,vec__47326_47346,0,null);var v_47348 = cljs.core.nth.call(null,vec__47326_47346,1,null);var m47320_47349 = cljs.core.deref.call(null,m_atom__25534__auto__);cljs.core.reset_BANG_.call(null,m_atom__25534__auto__,cljs.core.assoc_BANG_.call(null,m47320_47349,k_47347,f.call(null,v_47348)));
{
var G__47350 = cljs.core.next.call(null,seq__47321_47340__$1);
var G__47351 = null;
var G__47352 = 0;
var G__47353 = 0;
seq__47321_47327 = G__47350;
chunk__47322_47328 = G__47351;
count__47323_47329 = G__47352;
i__47324_47330 = G__47353;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25534__auto__));
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
{var m_atom__25534__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__47362_47368 = cljs.core.seq.call(null,m);var chunk__47363_47369 = null;var count__47364_47370 = 0;var i__47365_47371 = 0;while(true){
if((i__47365_47371 < count__47364_47370))
{var vec__47366_47372 = cljs.core._nth.call(null,chunk__47363_47369,i__47365_47371);var k_47373 = cljs.core.nth.call(null,vec__47366_47372,0,null);var v_47374 = cljs.core.nth.call(null,vec__47366_47372,1,null);var m47361_47375 = cljs.core.deref.call(null,m_atom__25534__auto__);cljs.core.reset_BANG_.call(null,m_atom__25534__auto__,cljs.core.assoc_BANG_.call(null,m47361_47375,f.call(null,k_47373),v_47374));
{
var G__47376 = seq__47362_47368;
var G__47377 = chunk__47363_47369;
var G__47378 = count__47364_47370;
var G__47379 = (i__47365_47371 + 1);
seq__47362_47368 = G__47376;
chunk__47363_47369 = G__47377;
count__47364_47370 = G__47378;
i__47365_47371 = G__47379;
continue;
}
} else
{var temp__4126__auto___47380 = cljs.core.seq.call(null,seq__47362_47368);if(temp__4126__auto___47380)
{var seq__47362_47381__$1 = temp__4126__auto___47380;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47362_47381__$1))
{var c__15854__auto___47382 = cljs.core.chunk_first.call(null,seq__47362_47381__$1);{
var G__47383 = cljs.core.chunk_rest.call(null,seq__47362_47381__$1);
var G__47384 = c__15854__auto___47382;
var G__47385 = cljs.core.count.call(null,c__15854__auto___47382);
var G__47386 = 0;
seq__47362_47368 = G__47383;
chunk__47363_47369 = G__47384;
count__47364_47370 = G__47385;
i__47365_47371 = G__47386;
continue;
}
} else
{var vec__47367_47387 = cljs.core.first.call(null,seq__47362_47381__$1);var k_47388 = cljs.core.nth.call(null,vec__47367_47387,0,null);var v_47389 = cljs.core.nth.call(null,vec__47367_47387,1,null);var m47361_47390 = cljs.core.deref.call(null,m_atom__25534__auto__);cljs.core.reset_BANG_.call(null,m_atom__25534__auto__,cljs.core.assoc_BANG_.call(null,m47361_47390,f.call(null,k_47388),v_47389));
{
var G__47391 = cljs.core.next.call(null,seq__47362_47381__$1);
var G__47392 = null;
var G__47393 = 0;
var G__47394 = 0;
seq__47362_47368 = G__47391;
chunk__47363_47369 = G__47392;
count__47364_47370 = G__47393;
i__47365_47371 = G__47394;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25534__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__25534__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__47401_47405 = cljs.core.seq.call(null,ks);var chunk__47402_47406 = null;var count__47403_47407 = 0;var i__47404_47408 = 0;while(true){
if((i__47404_47408 < count__47403_47407))
{var k_47409 = cljs.core._nth.call(null,chunk__47402_47406,i__47404_47408);var m47400_47410 = cljs.core.deref.call(null,m_atom__25534__auto__);cljs.core.reset_BANG_.call(null,m_atom__25534__auto__,cljs.core.assoc_BANG_.call(null,m47400_47410,k_47409,f.call(null,k_47409)));
{
var G__47411 = seq__47401_47405;
var G__47412 = chunk__47402_47406;
var G__47413 = count__47403_47407;
var G__47414 = (i__47404_47408 + 1);
seq__47401_47405 = G__47411;
chunk__47402_47406 = G__47412;
count__47403_47407 = G__47413;
i__47404_47408 = G__47414;
continue;
}
} else
{var temp__4126__auto___47415 = cljs.core.seq.call(null,seq__47401_47405);if(temp__4126__auto___47415)
{var seq__47401_47416__$1 = temp__4126__auto___47415;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47401_47416__$1))
{var c__15854__auto___47417 = cljs.core.chunk_first.call(null,seq__47401_47416__$1);{
var G__47418 = cljs.core.chunk_rest.call(null,seq__47401_47416__$1);
var G__47419 = c__15854__auto___47417;
var G__47420 = cljs.core.count.call(null,c__15854__auto___47417);
var G__47421 = 0;
seq__47401_47405 = G__47418;
chunk__47402_47406 = G__47419;
count__47403_47407 = G__47420;
i__47404_47408 = G__47421;
continue;
}
} else
{var k_47422 = cljs.core.first.call(null,seq__47401_47416__$1);var m47400_47423 = cljs.core.deref.call(null,m_atom__25534__auto__);cljs.core.reset_BANG_.call(null,m_atom__25534__auto__,cljs.core.assoc_BANG_.call(null,m47400_47423,k_47422,f.call(null,k_47422)));
{
var G__47424 = cljs.core.next.call(null,seq__47401_47416__$1);
var G__47425 = null;
var G__47426 = 0;
var G__47427 = 0;
seq__47401_47405 = G__47424;
chunk__47402_47406 = G__47425;
count__47403_47407 = G__47426;
i__47404_47408 = G__47427;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25534__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__25534__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__47434_47438 = cljs.core.seq.call(null,vs);var chunk__47435_47439 = null;var count__47436_47440 = 0;var i__47437_47441 = 0;while(true){
if((i__47437_47441 < count__47436_47440))
{var v_47442 = cljs.core._nth.call(null,chunk__47435_47439,i__47437_47441);var m47433_47443 = cljs.core.deref.call(null,m_atom__25534__auto__);cljs.core.reset_BANG_.call(null,m_atom__25534__auto__,cljs.core.assoc_BANG_.call(null,m47433_47443,f.call(null,v_47442),v_47442));
{
var G__47444 = seq__47434_47438;
var G__47445 = chunk__47435_47439;
var G__47446 = count__47436_47440;
var G__47447 = (i__47437_47441 + 1);
seq__47434_47438 = G__47444;
chunk__47435_47439 = G__47445;
count__47436_47440 = G__47446;
i__47437_47441 = G__47447;
continue;
}
} else
{var temp__4126__auto___47448 = cljs.core.seq.call(null,seq__47434_47438);if(temp__4126__auto___47448)
{var seq__47434_47449__$1 = temp__4126__auto___47448;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47434_47449__$1))
{var c__15854__auto___47450 = cljs.core.chunk_first.call(null,seq__47434_47449__$1);{
var G__47451 = cljs.core.chunk_rest.call(null,seq__47434_47449__$1);
var G__47452 = c__15854__auto___47450;
var G__47453 = cljs.core.count.call(null,c__15854__auto___47450);
var G__47454 = 0;
seq__47434_47438 = G__47451;
chunk__47435_47439 = G__47452;
count__47436_47440 = G__47453;
i__47437_47441 = G__47454;
continue;
}
} else
{var v_47455 = cljs.core.first.call(null,seq__47434_47449__$1);var m47433_47456 = cljs.core.deref.call(null,m_atom__25534__auto__);cljs.core.reset_BANG_.call(null,m_atom__25534__auto__,cljs.core.assoc_BANG_.call(null,m47433_47456,f.call(null,v_47455),v_47455));
{
var G__47457 = cljs.core.next.call(null,seq__47434_47449__$1);
var G__47458 = null;
var G__47459 = 0;
var G__47460 = 0;
seq__47434_47438 = G__47457;
chunk__47435_47439 = G__47458;
count__47436_47440 = G__47459;
i__47437_47441 = G__47460;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25534__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__47461){var vec__47463 = p__47461;var k = cljs.core.nth.call(null,vec__47463,0,null);var ks = cljs.core.nthnext.call(null,vec__47463,1);if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__15094__auto__ = ks;if(and__15094__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__15094__auto__;
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
{var m_atom__25534__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__47472_47478 = cljs.core.seq.call(null,x);var chunk__47473_47479 = null;var count__47474_47480 = 0;var i__47475_47481 = 0;while(true){
if((i__47475_47481 < count__47474_47480))
{var vec__47476_47482 = cljs.core._nth.call(null,chunk__47473_47479,i__47475_47481);var k_47483 = cljs.core.nth.call(null,vec__47476_47482,0,null);var v_47484 = cljs.core.nth.call(null,vec__47476_47482,1,null);var m47471_47485 = cljs.core.deref.call(null,m_atom__25534__auto__);cljs.core.reset_BANG_.call(null,m_atom__25534__auto__,cljs.core.assoc_BANG_.call(null,m47471_47485,((typeof k_47483 === 'string')?cljs.core.keyword.call(null,k_47483):k_47483),keywordize_map.call(null,v_47484)));
{
var G__47486 = seq__47472_47478;
var G__47487 = chunk__47473_47479;
var G__47488 = count__47474_47480;
var G__47489 = (i__47475_47481 + 1);
seq__47472_47478 = G__47486;
chunk__47473_47479 = G__47487;
count__47474_47480 = G__47488;
i__47475_47481 = G__47489;
continue;
}
} else
{var temp__4126__auto___47490 = cljs.core.seq.call(null,seq__47472_47478);if(temp__4126__auto___47490)
{var seq__47472_47491__$1 = temp__4126__auto___47490;if(cljs.core.chunked_seq_QMARK_.call(null,seq__47472_47491__$1))
{var c__15854__auto___47492 = cljs.core.chunk_first.call(null,seq__47472_47491__$1);{
var G__47493 = cljs.core.chunk_rest.call(null,seq__47472_47491__$1);
var G__47494 = c__15854__auto___47492;
var G__47495 = cljs.core.count.call(null,c__15854__auto___47492);
var G__47496 = 0;
seq__47472_47478 = G__47493;
chunk__47473_47479 = G__47494;
count__47474_47480 = G__47495;
i__47475_47481 = G__47496;
continue;
}
} else
{var vec__47477_47497 = cljs.core.first.call(null,seq__47472_47491__$1);var k_47498 = cljs.core.nth.call(null,vec__47477_47497,0,null);var v_47499 = cljs.core.nth.call(null,vec__47477_47497,1,null);var m47471_47500 = cljs.core.deref.call(null,m_atom__25534__auto__);cljs.core.reset_BANG_.call(null,m_atom__25534__auto__,cljs.core.assoc_BANG_.call(null,m47471_47500,((typeof k_47498 === 'string')?cljs.core.keyword.call(null,k_47498):k_47498),keywordize_map.call(null,v_47499)));
{
var G__47501 = cljs.core.next.call(null,seq__47472_47491__$1);
var G__47502 = null;
var G__47503 = 0;
var G__47504 = 0;
seq__47472_47478 = G__47501;
chunk__47473_47479 = G__47502;
count__47474_47480 = G__47503;
i__47475_47481 = G__47504;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25534__auto__));
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
{var pair__25603__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__25603__auto__);
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
var G__47505 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__47506 = cljs.core.next.call(null,ks);
m = G__47505;
ks = G__47506;
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
return cljs.core.into.call(null,(function (){var or__15106__auto__ = m;if(cljs.core.truth_(or__15106__auto__))
{return or__15106__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__15823__auto__ = (function iter__47515(s__47516){return (new cljs.core.LazySeq(null,(function (){var s__47516__$1 = s__47516;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__47516__$1);if(temp__4126__auto__)
{var s__47516__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47516__$2))
{var c__15821__auto__ = cljs.core.chunk_first.call(null,s__47516__$2);var size__15822__auto__ = cljs.core.count.call(null,c__15821__auto__);var b__47518 = cljs.core.chunk_buffer.call(null,size__15822__auto__);if((function (){var i__47517 = 0;while(true){
if((i__47517 < size__15822__auto__))
{var vec__47521 = cljs.core._nth.call(null,c__15821__auto__,i__47517);var k = cljs.core.nth.call(null,vec__47521,0,null);var v = cljs.core.nth.call(null,vec__47521,1,null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__47518,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__47523 = (i__47517 + 1);
i__47517 = G__47523;
continue;
}
} else
{{
var G__47524 = (i__47517 + 1);
i__47517 = G__47524;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47518),iter__47515.call(null,cljs.core.chunk_rest.call(null,s__47516__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47518),null);
}
} else
{var vec__47522 = cljs.core.first.call(null,s__47516__$2);var k = cljs.core.nth.call(null,vec__47522,0,null);var v = cljs.core.nth.call(null,vec__47522,1,null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__47515.call(null,cljs.core.rest.call(null,s__47516__$2)));
} else
{{
var G__47525 = cljs.core.rest.call(null,s__47516__$2);
s__47516__$1 = G__47525;
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
});return iter__15823__auto__.call(null,cljs.core.partition.call(null,2,kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__47526){
var m = cljs.core.first(arglist__47526);
var kvs = cljs.core.rest(arglist__47526);
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
update_in_when.cljs$lang$applyTo = (function (arglist__47527){
var m = cljs.core.first(arglist__47527);
arglist__47527 = cljs.core.next(arglist__47527);
var key_seq = cljs.core.first(arglist__47527);
arglist__47527 = cljs.core.next(arglist__47527);
var f = cljs.core.first(arglist__47527);
var args = cljs.core.rest(arglist__47527);
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__15823__auto__ = (function iter__47532(s__47533){return (new cljs.core.LazySeq(null,(function (){var s__47533__$1 = s__47533;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__47533__$1);if(temp__4126__auto__)
{var s__47533__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__47533__$2))
{var c__15821__auto__ = cljs.core.chunk_first.call(null,s__47533__$2);var size__15822__auto__ = cljs.core.count.call(null,c__15821__auto__);var b__47535 = cljs.core.chunk_buffer.call(null,size__15822__auto__);if((function (){var i__47534 = 0;while(true){
if((i__47534 < size__15822__auto__))
{var x = cljs.core._nth.call(null,c__15821__auto__,i__47534);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__47535,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__47536 = (i__47534 + 1);
i__47534 = G__47536;
continue;
}
} else
{{
var G__47537 = (i__47534 + 1);
i__47534 = G__47537;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47535),iter__47532.call(null,cljs.core.chunk_rest.call(null,s__47533__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__47535),null);
}
} else
{var x = cljs.core.first.call(null,s__47533__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__47532.call(null,cljs.core.rest.call(null,s__47533__$2)));
} else
{{
var G__47538 = cljs.core.rest.call(null,s__47533__$2);
s__47533__$1 = G__47538;
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
});return iter__15823__auto__.call(null,xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__47539){
var colls = cljs.core.seq(arglist__47539);
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
var G__47540__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__47541 = conj_when.call(null,coll,x);
var G__47542 = cljs.core.first.call(null,xs);
var G__47543 = cljs.core.next.call(null,xs);
coll = G__47541;
x = G__47542;
xs = G__47543;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__47540 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__47540__delegate.call(this,coll,x,xs);};
G__47540.cljs$lang$maxFixedArity = 2;
G__47540.cljs$lang$applyTo = (function (arglist__47544){
var coll = cljs.core.first(arglist__47544);
arglist__47544 = cljs.core.next(arglist__47544);
var x = cljs.core.first(arglist__47544);
var xs = cljs.core.rest(arglist__47544);
return G__47540__delegate(coll,x,xs);
});
G__47540.cljs$core$IFn$_invoke$arity$variadic = G__47540__delegate;
return G__47540;
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
var G__47546__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__47545_SHARP_){return cljs.core.apply.call(null,f,p1__47545_SHARP_,args);
}));
};
var G__47546 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__47546__delegate.call(this,a,f,args);};
G__47546.cljs$lang$maxFixedArity = 2;
G__47546.cljs$lang$applyTo = (function (arglist__47547){
var a = cljs.core.first(arglist__47547);
arglist__47547 = cljs.core.next(arglist__47547);
var f = cljs.core.first(arglist__47547);
var args = cljs.core.rest(arglist__47547);
return G__47546__delegate(a,f,args);
});
G__47546.cljs$core$IFn$_invoke$arity$variadic = G__47546__delegate;
return G__47546;
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
var G__47548__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__47548 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__47548__delegate.call(this,f,arg,args);};
G__47548.cljs$lang$maxFixedArity = 2;
G__47548.cljs$lang$applyTo = (function (arglist__47549){
var f = cljs.core.first(arglist__47549);
arglist__47549 = cljs.core.next(arglist__47549);
var arg = cljs.core.first(arglist__47549);
var args = cljs.core.rest(arglist__47549);
return G__47548__delegate(f,arg,args);
});
G__47548.cljs$core$IFn$_invoke$arity$variadic = G__47548__delegate;
return G__47548;
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

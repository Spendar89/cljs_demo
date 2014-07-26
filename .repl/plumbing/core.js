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
var G__31933__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__31933 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__31933__delegate.call(this,m,k,f,x1,x2,xs);};
G__31933.cljs$lang$maxFixedArity = 5;
G__31933.cljs$lang$applyTo = (function (arglist__31934){
var m = cljs.core.first(arglist__31934);
arglist__31934 = cljs.core.next(arglist__31934);
var k = cljs.core.first(arglist__31934);
arglist__31934 = cljs.core.next(arglist__31934);
var f = cljs.core.first(arglist__31934);
arglist__31934 = cljs.core.next(arglist__31934);
var x1 = cljs.core.first(arglist__31934);
arglist__31934 = cljs.core.next(arglist__31934);
var x2 = cljs.core.first(arglist__31934);
var xs = cljs.core.rest(arglist__31934);
return G__31933__delegate(m,k,f,x1,x2,xs);
});
G__31933.cljs$core$IFn$_invoke$arity$variadic = G__31933__delegate;
return G__31933;
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
{var m_atom__25474__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__31943_31949 = cljs.core.seq.call(null,m);var chunk__31944_31950 = null;var count__31945_31951 = 0;var i__31946_31952 = 0;while(true){
if((i__31946_31952 < count__31945_31951))
{var vec__31947_31953 = cljs.core._nth.call(null,chunk__31944_31950,i__31946_31952);var k_31954 = cljs.core.nth.call(null,vec__31947_31953,0,null);var v_31955 = cljs.core.nth.call(null,vec__31947_31953,1,null);var m31942_31956 = cljs.core.deref.call(null,m_atom__25474__auto__);cljs.core.reset_BANG_.call(null,m_atom__25474__auto__,cljs.core.assoc_BANG_.call(null,m31942_31956,k_31954,f.call(null,v_31955)));
{
var G__31957 = seq__31943_31949;
var G__31958 = chunk__31944_31950;
var G__31959 = count__31945_31951;
var G__31960 = (i__31946_31952 + 1);
seq__31943_31949 = G__31957;
chunk__31944_31950 = G__31958;
count__31945_31951 = G__31959;
i__31946_31952 = G__31960;
continue;
}
} else
{var temp__4126__auto___31961 = cljs.core.seq.call(null,seq__31943_31949);if(temp__4126__auto___31961)
{var seq__31943_31962__$1 = temp__4126__auto___31961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31943_31962__$1))
{var c__15775__auto___31963 = cljs.core.chunk_first.call(null,seq__31943_31962__$1);{
var G__31964 = cljs.core.chunk_rest.call(null,seq__31943_31962__$1);
var G__31965 = c__15775__auto___31963;
var G__31966 = cljs.core.count.call(null,c__15775__auto___31963);
var G__31967 = 0;
seq__31943_31949 = G__31964;
chunk__31944_31950 = G__31965;
count__31945_31951 = G__31966;
i__31946_31952 = G__31967;
continue;
}
} else
{var vec__31948_31968 = cljs.core.first.call(null,seq__31943_31962__$1);var k_31969 = cljs.core.nth.call(null,vec__31948_31968,0,null);var v_31970 = cljs.core.nth.call(null,vec__31948_31968,1,null);var m31942_31971 = cljs.core.deref.call(null,m_atom__25474__auto__);cljs.core.reset_BANG_.call(null,m_atom__25474__auto__,cljs.core.assoc_BANG_.call(null,m31942_31971,k_31969,f.call(null,v_31970)));
{
var G__31972 = cljs.core.next.call(null,seq__31943_31962__$1);
var G__31973 = null;
var G__31974 = 0;
var G__31975 = 0;
seq__31943_31949 = G__31972;
chunk__31944_31950 = G__31973;
count__31945_31951 = G__31974;
i__31946_31952 = G__31975;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25474__auto__));
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
{var m_atom__25474__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__31984_31990 = cljs.core.seq.call(null,m);var chunk__31985_31991 = null;var count__31986_31992 = 0;var i__31987_31993 = 0;while(true){
if((i__31987_31993 < count__31986_31992))
{var vec__31988_31994 = cljs.core._nth.call(null,chunk__31985_31991,i__31987_31993);var k_31995 = cljs.core.nth.call(null,vec__31988_31994,0,null);var v_31996 = cljs.core.nth.call(null,vec__31988_31994,1,null);var m31983_31997 = cljs.core.deref.call(null,m_atom__25474__auto__);cljs.core.reset_BANG_.call(null,m_atom__25474__auto__,cljs.core.assoc_BANG_.call(null,m31983_31997,f.call(null,k_31995),v_31996));
{
var G__31998 = seq__31984_31990;
var G__31999 = chunk__31985_31991;
var G__32000 = count__31986_31992;
var G__32001 = (i__31987_31993 + 1);
seq__31984_31990 = G__31998;
chunk__31985_31991 = G__31999;
count__31986_31992 = G__32000;
i__31987_31993 = G__32001;
continue;
}
} else
{var temp__4126__auto___32002 = cljs.core.seq.call(null,seq__31984_31990);if(temp__4126__auto___32002)
{var seq__31984_32003__$1 = temp__4126__auto___32002;if(cljs.core.chunked_seq_QMARK_.call(null,seq__31984_32003__$1))
{var c__15775__auto___32004 = cljs.core.chunk_first.call(null,seq__31984_32003__$1);{
var G__32005 = cljs.core.chunk_rest.call(null,seq__31984_32003__$1);
var G__32006 = c__15775__auto___32004;
var G__32007 = cljs.core.count.call(null,c__15775__auto___32004);
var G__32008 = 0;
seq__31984_31990 = G__32005;
chunk__31985_31991 = G__32006;
count__31986_31992 = G__32007;
i__31987_31993 = G__32008;
continue;
}
} else
{var vec__31989_32009 = cljs.core.first.call(null,seq__31984_32003__$1);var k_32010 = cljs.core.nth.call(null,vec__31989_32009,0,null);var v_32011 = cljs.core.nth.call(null,vec__31989_32009,1,null);var m31983_32012 = cljs.core.deref.call(null,m_atom__25474__auto__);cljs.core.reset_BANG_.call(null,m_atom__25474__auto__,cljs.core.assoc_BANG_.call(null,m31983_32012,f.call(null,k_32010),v_32011));
{
var G__32013 = cljs.core.next.call(null,seq__31984_32003__$1);
var G__32014 = null;
var G__32015 = 0;
var G__32016 = 0;
seq__31984_31990 = G__32013;
chunk__31985_31991 = G__32014;
count__31986_31992 = G__32015;
i__31987_31993 = G__32016;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25474__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__25474__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__32023_32027 = cljs.core.seq.call(null,ks);var chunk__32024_32028 = null;var count__32025_32029 = 0;var i__32026_32030 = 0;while(true){
if((i__32026_32030 < count__32025_32029))
{var k_32031 = cljs.core._nth.call(null,chunk__32024_32028,i__32026_32030);var m32022_32032 = cljs.core.deref.call(null,m_atom__25474__auto__);cljs.core.reset_BANG_.call(null,m_atom__25474__auto__,cljs.core.assoc_BANG_.call(null,m32022_32032,k_32031,f.call(null,k_32031)));
{
var G__32033 = seq__32023_32027;
var G__32034 = chunk__32024_32028;
var G__32035 = count__32025_32029;
var G__32036 = (i__32026_32030 + 1);
seq__32023_32027 = G__32033;
chunk__32024_32028 = G__32034;
count__32025_32029 = G__32035;
i__32026_32030 = G__32036;
continue;
}
} else
{var temp__4126__auto___32037 = cljs.core.seq.call(null,seq__32023_32027);if(temp__4126__auto___32037)
{var seq__32023_32038__$1 = temp__4126__auto___32037;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32023_32038__$1))
{var c__15775__auto___32039 = cljs.core.chunk_first.call(null,seq__32023_32038__$1);{
var G__32040 = cljs.core.chunk_rest.call(null,seq__32023_32038__$1);
var G__32041 = c__15775__auto___32039;
var G__32042 = cljs.core.count.call(null,c__15775__auto___32039);
var G__32043 = 0;
seq__32023_32027 = G__32040;
chunk__32024_32028 = G__32041;
count__32025_32029 = G__32042;
i__32026_32030 = G__32043;
continue;
}
} else
{var k_32044 = cljs.core.first.call(null,seq__32023_32038__$1);var m32022_32045 = cljs.core.deref.call(null,m_atom__25474__auto__);cljs.core.reset_BANG_.call(null,m_atom__25474__auto__,cljs.core.assoc_BANG_.call(null,m32022_32045,k_32044,f.call(null,k_32044)));
{
var G__32046 = cljs.core.next.call(null,seq__32023_32038__$1);
var G__32047 = null;
var G__32048 = 0;
var G__32049 = 0;
seq__32023_32027 = G__32046;
chunk__32024_32028 = G__32047;
count__32025_32029 = G__32048;
i__32026_32030 = G__32049;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25474__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__25474__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__32056_32060 = cljs.core.seq.call(null,vs);var chunk__32057_32061 = null;var count__32058_32062 = 0;var i__32059_32063 = 0;while(true){
if((i__32059_32063 < count__32058_32062))
{var v_32064 = cljs.core._nth.call(null,chunk__32057_32061,i__32059_32063);var m32055_32065 = cljs.core.deref.call(null,m_atom__25474__auto__);cljs.core.reset_BANG_.call(null,m_atom__25474__auto__,cljs.core.assoc_BANG_.call(null,m32055_32065,f.call(null,v_32064),v_32064));
{
var G__32066 = seq__32056_32060;
var G__32067 = chunk__32057_32061;
var G__32068 = count__32058_32062;
var G__32069 = (i__32059_32063 + 1);
seq__32056_32060 = G__32066;
chunk__32057_32061 = G__32067;
count__32058_32062 = G__32068;
i__32059_32063 = G__32069;
continue;
}
} else
{var temp__4126__auto___32070 = cljs.core.seq.call(null,seq__32056_32060);if(temp__4126__auto___32070)
{var seq__32056_32071__$1 = temp__4126__auto___32070;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32056_32071__$1))
{var c__15775__auto___32072 = cljs.core.chunk_first.call(null,seq__32056_32071__$1);{
var G__32073 = cljs.core.chunk_rest.call(null,seq__32056_32071__$1);
var G__32074 = c__15775__auto___32072;
var G__32075 = cljs.core.count.call(null,c__15775__auto___32072);
var G__32076 = 0;
seq__32056_32060 = G__32073;
chunk__32057_32061 = G__32074;
count__32058_32062 = G__32075;
i__32059_32063 = G__32076;
continue;
}
} else
{var v_32077 = cljs.core.first.call(null,seq__32056_32071__$1);var m32055_32078 = cljs.core.deref.call(null,m_atom__25474__auto__);cljs.core.reset_BANG_.call(null,m_atom__25474__auto__,cljs.core.assoc_BANG_.call(null,m32055_32078,f.call(null,v_32077),v_32077));
{
var G__32079 = cljs.core.next.call(null,seq__32056_32071__$1);
var G__32080 = null;
var G__32081 = 0;
var G__32082 = 0;
seq__32056_32060 = G__32079;
chunk__32057_32061 = G__32080;
count__32058_32062 = G__32081;
i__32059_32063 = G__32082;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25474__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__32083){var vec__32085 = p__32083;var k = cljs.core.nth.call(null,vec__32085,0,null);var ks = cljs.core.nthnext.call(null,vec__32085,1);if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__15015__auto__ = ks;if(and__15015__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__15015__auto__;
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
{var m_atom__25474__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__32094_32100 = cljs.core.seq.call(null,x);var chunk__32095_32101 = null;var count__32096_32102 = 0;var i__32097_32103 = 0;while(true){
if((i__32097_32103 < count__32096_32102))
{var vec__32098_32104 = cljs.core._nth.call(null,chunk__32095_32101,i__32097_32103);var k_32105 = cljs.core.nth.call(null,vec__32098_32104,0,null);var v_32106 = cljs.core.nth.call(null,vec__32098_32104,1,null);var m32093_32107 = cljs.core.deref.call(null,m_atom__25474__auto__);cljs.core.reset_BANG_.call(null,m_atom__25474__auto__,cljs.core.assoc_BANG_.call(null,m32093_32107,((typeof k_32105 === 'string')?cljs.core.keyword.call(null,k_32105):k_32105),keywordize_map.call(null,v_32106)));
{
var G__32108 = seq__32094_32100;
var G__32109 = chunk__32095_32101;
var G__32110 = count__32096_32102;
var G__32111 = (i__32097_32103 + 1);
seq__32094_32100 = G__32108;
chunk__32095_32101 = G__32109;
count__32096_32102 = G__32110;
i__32097_32103 = G__32111;
continue;
}
} else
{var temp__4126__auto___32112 = cljs.core.seq.call(null,seq__32094_32100);if(temp__4126__auto___32112)
{var seq__32094_32113__$1 = temp__4126__auto___32112;if(cljs.core.chunked_seq_QMARK_.call(null,seq__32094_32113__$1))
{var c__15775__auto___32114 = cljs.core.chunk_first.call(null,seq__32094_32113__$1);{
var G__32115 = cljs.core.chunk_rest.call(null,seq__32094_32113__$1);
var G__32116 = c__15775__auto___32114;
var G__32117 = cljs.core.count.call(null,c__15775__auto___32114);
var G__32118 = 0;
seq__32094_32100 = G__32115;
chunk__32095_32101 = G__32116;
count__32096_32102 = G__32117;
i__32097_32103 = G__32118;
continue;
}
} else
{var vec__32099_32119 = cljs.core.first.call(null,seq__32094_32113__$1);var k_32120 = cljs.core.nth.call(null,vec__32099_32119,0,null);var v_32121 = cljs.core.nth.call(null,vec__32099_32119,1,null);var m32093_32122 = cljs.core.deref.call(null,m_atom__25474__auto__);cljs.core.reset_BANG_.call(null,m_atom__25474__auto__,cljs.core.assoc_BANG_.call(null,m32093_32122,((typeof k_32120 === 'string')?cljs.core.keyword.call(null,k_32120):k_32120),keywordize_map.call(null,v_32121)));
{
var G__32123 = cljs.core.next.call(null,seq__32094_32113__$1);
var G__32124 = null;
var G__32125 = 0;
var G__32126 = 0;
seq__32094_32100 = G__32123;
chunk__32095_32101 = G__32124;
count__32096_32102 = G__32125;
i__32097_32103 = G__32126;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25474__auto__));
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
{var pair__25543__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__25543__auto__);
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
var G__32127 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__32128 = cljs.core.next.call(null,ks);
m = G__32127;
ks = G__32128;
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
return cljs.core.into.call(null,(function (){var or__15027__auto__ = m;if(cljs.core.truth_(or__15027__auto__))
{return or__15027__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__15744__auto__ = (function iter__32137(s__32138){return (new cljs.core.LazySeq(null,(function (){var s__32138__$1 = s__32138;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32138__$1);if(temp__4126__auto__)
{var s__32138__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32138__$2))
{var c__15742__auto__ = cljs.core.chunk_first.call(null,s__32138__$2);var size__15743__auto__ = cljs.core.count.call(null,c__15742__auto__);var b__32140 = cljs.core.chunk_buffer.call(null,size__15743__auto__);if((function (){var i__32139 = 0;while(true){
if((i__32139 < size__15743__auto__))
{var vec__32143 = cljs.core._nth.call(null,c__15742__auto__,i__32139);var k = cljs.core.nth.call(null,vec__32143,0,null);var v = cljs.core.nth.call(null,vec__32143,1,null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__32140,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__32145 = (i__32139 + 1);
i__32139 = G__32145;
continue;
}
} else
{{
var G__32146 = (i__32139 + 1);
i__32139 = G__32146;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32140),iter__32137.call(null,cljs.core.chunk_rest.call(null,s__32138__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32140),null);
}
} else
{var vec__32144 = cljs.core.first.call(null,s__32138__$2);var k = cljs.core.nth.call(null,vec__32144,0,null);var v = cljs.core.nth.call(null,vec__32144,1,null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__32137.call(null,cljs.core.rest.call(null,s__32138__$2)));
} else
{{
var G__32147 = cljs.core.rest.call(null,s__32138__$2);
s__32138__$1 = G__32147;
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
});return iter__15744__auto__.call(null,cljs.core.partition.call(null,2,kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__32148){
var m = cljs.core.first(arglist__32148);
var kvs = cljs.core.rest(arglist__32148);
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
update_in_when.cljs$lang$applyTo = (function (arglist__32149){
var m = cljs.core.first(arglist__32149);
arglist__32149 = cljs.core.next(arglist__32149);
var key_seq = cljs.core.first(arglist__32149);
arglist__32149 = cljs.core.next(arglist__32149);
var f = cljs.core.first(arglist__32149);
var args = cljs.core.rest(arglist__32149);
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__15744__auto__ = (function iter__32154(s__32155){return (new cljs.core.LazySeq(null,(function (){var s__32155__$1 = s__32155;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__32155__$1);if(temp__4126__auto__)
{var s__32155__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__32155__$2))
{var c__15742__auto__ = cljs.core.chunk_first.call(null,s__32155__$2);var size__15743__auto__ = cljs.core.count.call(null,c__15742__auto__);var b__32157 = cljs.core.chunk_buffer.call(null,size__15743__auto__);if((function (){var i__32156 = 0;while(true){
if((i__32156 < size__15743__auto__))
{var x = cljs.core._nth.call(null,c__15742__auto__,i__32156);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__32157,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__32158 = (i__32156 + 1);
i__32156 = G__32158;
continue;
}
} else
{{
var G__32159 = (i__32156 + 1);
i__32156 = G__32159;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32157),iter__32154.call(null,cljs.core.chunk_rest.call(null,s__32155__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32157),null);
}
} else
{var x = cljs.core.first.call(null,s__32155__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__32154.call(null,cljs.core.rest.call(null,s__32155__$2)));
} else
{{
var G__32160 = cljs.core.rest.call(null,s__32155__$2);
s__32155__$1 = G__32160;
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
});return iter__15744__auto__.call(null,xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__32161){
var colls = cljs.core.seq(arglist__32161);
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
var G__32162__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__32163 = conj_when.call(null,coll,x);
var G__32164 = cljs.core.first.call(null,xs);
var G__32165 = cljs.core.next.call(null,xs);
coll = G__32163;
x = G__32164;
xs = G__32165;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__32162 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__32162__delegate.call(this,coll,x,xs);};
G__32162.cljs$lang$maxFixedArity = 2;
G__32162.cljs$lang$applyTo = (function (arglist__32166){
var coll = cljs.core.first(arglist__32166);
arglist__32166 = cljs.core.next(arglist__32166);
var x = cljs.core.first(arglist__32166);
var xs = cljs.core.rest(arglist__32166);
return G__32162__delegate(coll,x,xs);
});
G__32162.cljs$core$IFn$_invoke$arity$variadic = G__32162__delegate;
return G__32162;
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
var G__32168__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__32167_SHARP_){return cljs.core.apply.call(null,f,p1__32167_SHARP_,args);
}));
};
var G__32168 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__32168__delegate.call(this,a,f,args);};
G__32168.cljs$lang$maxFixedArity = 2;
G__32168.cljs$lang$applyTo = (function (arglist__32169){
var a = cljs.core.first(arglist__32169);
arglist__32169 = cljs.core.next(arglist__32169);
var f = cljs.core.first(arglist__32169);
var args = cljs.core.rest(arglist__32169);
return G__32168__delegate(a,f,args);
});
G__32168.cljs$core$IFn$_invoke$arity$variadic = G__32168__delegate;
return G__32168;
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
var G__32170__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__32170 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__32170__delegate.call(this,f,arg,args);};
G__32170.cljs$lang$maxFixedArity = 2;
G__32170.cljs$lang$applyTo = (function (arglist__32171){
var f = cljs.core.first(arglist__32171);
arglist__32171 = cljs.core.next(arglist__32171);
var arg = cljs.core.first(arglist__32171);
var args = cljs.core.rest(arglist__32171);
return G__32170__delegate(f,arg,args);
});
G__32170.cljs$core$IFn$_invoke$arity$variadic = G__32170__delegate;
return G__32170;
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

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
var G__41043__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__41043 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__41043__delegate.call(this,m,k,f,x1,x2,xs);};
G__41043.cljs$lang$maxFixedArity = 5;
G__41043.cljs$lang$applyTo = (function (arglist__41044){
var m = cljs.core.first(arglist__41044);
arglist__41044 = cljs.core.next(arglist__41044);
var k = cljs.core.first(arglist__41044);
arglist__41044 = cljs.core.next(arglist__41044);
var f = cljs.core.first(arglist__41044);
arglist__41044 = cljs.core.next(arglist__41044);
var x1 = cljs.core.first(arglist__41044);
arglist__41044 = cljs.core.next(arglist__41044);
var x2 = cljs.core.first(arglist__41044);
var xs = cljs.core.rest(arglist__41044);
return G__41043__delegate(m,k,f,x1,x2,xs);
});
G__41043.cljs$core$IFn$_invoke$arity$variadic = G__41043__delegate;
return G__41043;
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
{var m_atom__25038__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__41053_41059 = cljs.core.seq.call(null,m);var chunk__41054_41060 = null;var count__41055_41061 = 0;var i__41056_41062 = 0;while(true){
if((i__41056_41062 < count__41055_41061))
{var vec__41057_41063 = cljs.core._nth.call(null,chunk__41054_41060,i__41056_41062);var k_41064 = cljs.core.nth.call(null,vec__41057_41063,0,null);var v_41065 = cljs.core.nth.call(null,vec__41057_41063,1,null);var m41052_41066 = cljs.core.deref.call(null,m_atom__25038__auto__);cljs.core.reset_BANG_.call(null,m_atom__25038__auto__,cljs.core.assoc_BANG_.call(null,m41052_41066,k_41064,f.call(null,v_41065)));
{
var G__41067 = seq__41053_41059;
var G__41068 = chunk__41054_41060;
var G__41069 = count__41055_41061;
var G__41070 = (i__41056_41062 + 1);
seq__41053_41059 = G__41067;
chunk__41054_41060 = G__41068;
count__41055_41061 = G__41069;
i__41056_41062 = G__41070;
continue;
}
} else
{var temp__4126__auto___41071 = cljs.core.seq.call(null,seq__41053_41059);if(temp__4126__auto___41071)
{var seq__41053_41072__$1 = temp__4126__auto___41071;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41053_41072__$1))
{var c__15329__auto___41073 = cljs.core.chunk_first.call(null,seq__41053_41072__$1);{
var G__41074 = cljs.core.chunk_rest.call(null,seq__41053_41072__$1);
var G__41075 = c__15329__auto___41073;
var G__41076 = cljs.core.count.call(null,c__15329__auto___41073);
var G__41077 = 0;
seq__41053_41059 = G__41074;
chunk__41054_41060 = G__41075;
count__41055_41061 = G__41076;
i__41056_41062 = G__41077;
continue;
}
} else
{var vec__41058_41078 = cljs.core.first.call(null,seq__41053_41072__$1);var k_41079 = cljs.core.nth.call(null,vec__41058_41078,0,null);var v_41080 = cljs.core.nth.call(null,vec__41058_41078,1,null);var m41052_41081 = cljs.core.deref.call(null,m_atom__25038__auto__);cljs.core.reset_BANG_.call(null,m_atom__25038__auto__,cljs.core.assoc_BANG_.call(null,m41052_41081,k_41079,f.call(null,v_41080)));
{
var G__41082 = cljs.core.next.call(null,seq__41053_41072__$1);
var G__41083 = null;
var G__41084 = 0;
var G__41085 = 0;
seq__41053_41059 = G__41082;
chunk__41054_41060 = G__41083;
count__41055_41061 = G__41084;
i__41056_41062 = G__41085;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25038__auto__));
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
{var m_atom__25038__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__41094_41100 = cljs.core.seq.call(null,m);var chunk__41095_41101 = null;var count__41096_41102 = 0;var i__41097_41103 = 0;while(true){
if((i__41097_41103 < count__41096_41102))
{var vec__41098_41104 = cljs.core._nth.call(null,chunk__41095_41101,i__41097_41103);var k_41105 = cljs.core.nth.call(null,vec__41098_41104,0,null);var v_41106 = cljs.core.nth.call(null,vec__41098_41104,1,null);var m41093_41107 = cljs.core.deref.call(null,m_atom__25038__auto__);cljs.core.reset_BANG_.call(null,m_atom__25038__auto__,cljs.core.assoc_BANG_.call(null,m41093_41107,f.call(null,k_41105),v_41106));
{
var G__41108 = seq__41094_41100;
var G__41109 = chunk__41095_41101;
var G__41110 = count__41096_41102;
var G__41111 = (i__41097_41103 + 1);
seq__41094_41100 = G__41108;
chunk__41095_41101 = G__41109;
count__41096_41102 = G__41110;
i__41097_41103 = G__41111;
continue;
}
} else
{var temp__4126__auto___41112 = cljs.core.seq.call(null,seq__41094_41100);if(temp__4126__auto___41112)
{var seq__41094_41113__$1 = temp__4126__auto___41112;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41094_41113__$1))
{var c__15329__auto___41114 = cljs.core.chunk_first.call(null,seq__41094_41113__$1);{
var G__41115 = cljs.core.chunk_rest.call(null,seq__41094_41113__$1);
var G__41116 = c__15329__auto___41114;
var G__41117 = cljs.core.count.call(null,c__15329__auto___41114);
var G__41118 = 0;
seq__41094_41100 = G__41115;
chunk__41095_41101 = G__41116;
count__41096_41102 = G__41117;
i__41097_41103 = G__41118;
continue;
}
} else
{var vec__41099_41119 = cljs.core.first.call(null,seq__41094_41113__$1);var k_41120 = cljs.core.nth.call(null,vec__41099_41119,0,null);var v_41121 = cljs.core.nth.call(null,vec__41099_41119,1,null);var m41093_41122 = cljs.core.deref.call(null,m_atom__25038__auto__);cljs.core.reset_BANG_.call(null,m_atom__25038__auto__,cljs.core.assoc_BANG_.call(null,m41093_41122,f.call(null,k_41120),v_41121));
{
var G__41123 = cljs.core.next.call(null,seq__41094_41113__$1);
var G__41124 = null;
var G__41125 = 0;
var G__41126 = 0;
seq__41094_41100 = G__41123;
chunk__41095_41101 = G__41124;
count__41096_41102 = G__41125;
i__41097_41103 = G__41126;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25038__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__25038__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__41133_41137 = cljs.core.seq.call(null,ks);var chunk__41134_41138 = null;var count__41135_41139 = 0;var i__41136_41140 = 0;while(true){
if((i__41136_41140 < count__41135_41139))
{var k_41141 = cljs.core._nth.call(null,chunk__41134_41138,i__41136_41140);var m41132_41142 = cljs.core.deref.call(null,m_atom__25038__auto__);cljs.core.reset_BANG_.call(null,m_atom__25038__auto__,cljs.core.assoc_BANG_.call(null,m41132_41142,k_41141,f.call(null,k_41141)));
{
var G__41143 = seq__41133_41137;
var G__41144 = chunk__41134_41138;
var G__41145 = count__41135_41139;
var G__41146 = (i__41136_41140 + 1);
seq__41133_41137 = G__41143;
chunk__41134_41138 = G__41144;
count__41135_41139 = G__41145;
i__41136_41140 = G__41146;
continue;
}
} else
{var temp__4126__auto___41147 = cljs.core.seq.call(null,seq__41133_41137);if(temp__4126__auto___41147)
{var seq__41133_41148__$1 = temp__4126__auto___41147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41133_41148__$1))
{var c__15329__auto___41149 = cljs.core.chunk_first.call(null,seq__41133_41148__$1);{
var G__41150 = cljs.core.chunk_rest.call(null,seq__41133_41148__$1);
var G__41151 = c__15329__auto___41149;
var G__41152 = cljs.core.count.call(null,c__15329__auto___41149);
var G__41153 = 0;
seq__41133_41137 = G__41150;
chunk__41134_41138 = G__41151;
count__41135_41139 = G__41152;
i__41136_41140 = G__41153;
continue;
}
} else
{var k_41154 = cljs.core.first.call(null,seq__41133_41148__$1);var m41132_41155 = cljs.core.deref.call(null,m_atom__25038__auto__);cljs.core.reset_BANG_.call(null,m_atom__25038__auto__,cljs.core.assoc_BANG_.call(null,m41132_41155,k_41154,f.call(null,k_41154)));
{
var G__41156 = cljs.core.next.call(null,seq__41133_41148__$1);
var G__41157 = null;
var G__41158 = 0;
var G__41159 = 0;
seq__41133_41137 = G__41156;
chunk__41134_41138 = G__41157;
count__41135_41139 = G__41158;
i__41136_41140 = G__41159;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25038__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__25038__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__41166_41170 = cljs.core.seq.call(null,vs);var chunk__41167_41171 = null;var count__41168_41172 = 0;var i__41169_41173 = 0;while(true){
if((i__41169_41173 < count__41168_41172))
{var v_41174 = cljs.core._nth.call(null,chunk__41167_41171,i__41169_41173);var m41165_41175 = cljs.core.deref.call(null,m_atom__25038__auto__);cljs.core.reset_BANG_.call(null,m_atom__25038__auto__,cljs.core.assoc_BANG_.call(null,m41165_41175,f.call(null,v_41174),v_41174));
{
var G__41176 = seq__41166_41170;
var G__41177 = chunk__41167_41171;
var G__41178 = count__41168_41172;
var G__41179 = (i__41169_41173 + 1);
seq__41166_41170 = G__41176;
chunk__41167_41171 = G__41177;
count__41168_41172 = G__41178;
i__41169_41173 = G__41179;
continue;
}
} else
{var temp__4126__auto___41180 = cljs.core.seq.call(null,seq__41166_41170);if(temp__4126__auto___41180)
{var seq__41166_41181__$1 = temp__4126__auto___41180;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41166_41181__$1))
{var c__15329__auto___41182 = cljs.core.chunk_first.call(null,seq__41166_41181__$1);{
var G__41183 = cljs.core.chunk_rest.call(null,seq__41166_41181__$1);
var G__41184 = c__15329__auto___41182;
var G__41185 = cljs.core.count.call(null,c__15329__auto___41182);
var G__41186 = 0;
seq__41166_41170 = G__41183;
chunk__41167_41171 = G__41184;
count__41168_41172 = G__41185;
i__41169_41173 = G__41186;
continue;
}
} else
{var v_41187 = cljs.core.first.call(null,seq__41166_41181__$1);var m41165_41188 = cljs.core.deref.call(null,m_atom__25038__auto__);cljs.core.reset_BANG_.call(null,m_atom__25038__auto__,cljs.core.assoc_BANG_.call(null,m41165_41188,f.call(null,v_41187),v_41187));
{
var G__41189 = cljs.core.next.call(null,seq__41166_41181__$1);
var G__41190 = null;
var G__41191 = 0;
var G__41192 = 0;
seq__41166_41170 = G__41189;
chunk__41167_41171 = G__41190;
count__41168_41172 = G__41191;
i__41169_41173 = G__41192;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25038__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__41193){var vec__41195 = p__41193;var k = cljs.core.nth.call(null,vec__41195,0,null);var ks = cljs.core.nthnext.call(null,vec__41195,1);if(cljs.core.truth_(m))
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
{var m_atom__25038__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__41204_41210 = cljs.core.seq.call(null,x);var chunk__41205_41211 = null;var count__41206_41212 = 0;var i__41207_41213 = 0;while(true){
if((i__41207_41213 < count__41206_41212))
{var vec__41208_41214 = cljs.core._nth.call(null,chunk__41205_41211,i__41207_41213);var k_41215 = cljs.core.nth.call(null,vec__41208_41214,0,null);var v_41216 = cljs.core.nth.call(null,vec__41208_41214,1,null);var m41203_41217 = cljs.core.deref.call(null,m_atom__25038__auto__);cljs.core.reset_BANG_.call(null,m_atom__25038__auto__,cljs.core.assoc_BANG_.call(null,m41203_41217,((typeof k_41215 === 'string')?cljs.core.keyword.call(null,k_41215):k_41215),keywordize_map.call(null,v_41216)));
{
var G__41218 = seq__41204_41210;
var G__41219 = chunk__41205_41211;
var G__41220 = count__41206_41212;
var G__41221 = (i__41207_41213 + 1);
seq__41204_41210 = G__41218;
chunk__41205_41211 = G__41219;
count__41206_41212 = G__41220;
i__41207_41213 = G__41221;
continue;
}
} else
{var temp__4126__auto___41222 = cljs.core.seq.call(null,seq__41204_41210);if(temp__4126__auto___41222)
{var seq__41204_41223__$1 = temp__4126__auto___41222;if(cljs.core.chunked_seq_QMARK_.call(null,seq__41204_41223__$1))
{var c__15329__auto___41224 = cljs.core.chunk_first.call(null,seq__41204_41223__$1);{
var G__41225 = cljs.core.chunk_rest.call(null,seq__41204_41223__$1);
var G__41226 = c__15329__auto___41224;
var G__41227 = cljs.core.count.call(null,c__15329__auto___41224);
var G__41228 = 0;
seq__41204_41210 = G__41225;
chunk__41205_41211 = G__41226;
count__41206_41212 = G__41227;
i__41207_41213 = G__41228;
continue;
}
} else
{var vec__41209_41229 = cljs.core.first.call(null,seq__41204_41223__$1);var k_41230 = cljs.core.nth.call(null,vec__41209_41229,0,null);var v_41231 = cljs.core.nth.call(null,vec__41209_41229,1,null);var m41203_41232 = cljs.core.deref.call(null,m_atom__25038__auto__);cljs.core.reset_BANG_.call(null,m_atom__25038__auto__,cljs.core.assoc_BANG_.call(null,m41203_41232,((typeof k_41230 === 'string')?cljs.core.keyword.call(null,k_41230):k_41230),keywordize_map.call(null,v_41231)));
{
var G__41233 = cljs.core.next.call(null,seq__41204_41223__$1);
var G__41234 = null;
var G__41235 = 0;
var G__41236 = 0;
seq__41204_41210 = G__41233;
chunk__41205_41211 = G__41234;
count__41206_41212 = G__41235;
i__41207_41213 = G__41236;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__25038__auto__));
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
{var pair__25107__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__25107__auto__);
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
var G__41237 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__41238 = cljs.core.next.call(null,ks);
m = G__41237;
ks = G__41238;
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
})(),(function (){var iter__15298__auto__ = (function iter__41247(s__41248){return (new cljs.core.LazySeq(null,(function (){var s__41248__$1 = s__41248;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__41248__$1);if(temp__4126__auto__)
{var s__41248__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__41248__$2))
{var c__15296__auto__ = cljs.core.chunk_first.call(null,s__41248__$2);var size__15297__auto__ = cljs.core.count.call(null,c__15296__auto__);var b__41250 = cljs.core.chunk_buffer.call(null,size__15297__auto__);if((function (){var i__41249 = 0;while(true){
if((i__41249 < size__15297__auto__))
{var vec__41253 = cljs.core._nth.call(null,c__15296__auto__,i__41249);var k = cljs.core.nth.call(null,vec__41253,0,null);var v = cljs.core.nth.call(null,vec__41253,1,null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__41250,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__41255 = (i__41249 + 1);
i__41249 = G__41255;
continue;
}
} else
{{
var G__41256 = (i__41249 + 1);
i__41249 = G__41256;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41250),iter__41247.call(null,cljs.core.chunk_rest.call(null,s__41248__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41250),null);
}
} else
{var vec__41254 = cljs.core.first.call(null,s__41248__$2);var k = cljs.core.nth.call(null,vec__41254,0,null);var v = cljs.core.nth.call(null,vec__41254,1,null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__41247.call(null,cljs.core.rest.call(null,s__41248__$2)));
} else
{{
var G__41257 = cljs.core.rest.call(null,s__41248__$2);
s__41248__$1 = G__41257;
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
assoc_when.cljs$lang$applyTo = (function (arglist__41258){
var m = cljs.core.first(arglist__41258);
var kvs = cljs.core.rest(arglist__41258);
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
update_in_when.cljs$lang$applyTo = (function (arglist__41259){
var m = cljs.core.first(arglist__41259);
arglist__41259 = cljs.core.next(arglist__41259);
var key_seq = cljs.core.first(arglist__41259);
arglist__41259 = cljs.core.next(arglist__41259);
var f = cljs.core.first(arglist__41259);
var args = cljs.core.rest(arglist__41259);
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__15298__auto__ = (function iter__41264(s__41265){return (new cljs.core.LazySeq(null,(function (){var s__41265__$1 = s__41265;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__41265__$1);if(temp__4126__auto__)
{var s__41265__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__41265__$2))
{var c__15296__auto__ = cljs.core.chunk_first.call(null,s__41265__$2);var size__15297__auto__ = cljs.core.count.call(null,c__15296__auto__);var b__41267 = cljs.core.chunk_buffer.call(null,size__15297__auto__);if((function (){var i__41266 = 0;while(true){
if((i__41266 < size__15297__auto__))
{var x = cljs.core._nth.call(null,c__15296__auto__,i__41266);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__41267,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__41268 = (i__41266 + 1);
i__41266 = G__41268;
continue;
}
} else
{{
var G__41269 = (i__41266 + 1);
i__41266 = G__41269;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41267),iter__41264.call(null,cljs.core.chunk_rest.call(null,s__41265__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41267),null);
}
} else
{var x = cljs.core.first.call(null,s__41265__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__41264.call(null,cljs.core.rest.call(null,s__41265__$2)));
} else
{{
var G__41270 = cljs.core.rest.call(null,s__41265__$2);
s__41265__$1 = G__41270;
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
interleave_all.cljs$lang$applyTo = (function (arglist__41271){
var colls = cljs.core.seq(arglist__41271);
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
var G__41272__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__41273 = conj_when.call(null,coll,x);
var G__41274 = cljs.core.first.call(null,xs);
var G__41275 = cljs.core.next.call(null,xs);
coll = G__41273;
x = G__41274;
xs = G__41275;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__41272 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__41272__delegate.call(this,coll,x,xs);};
G__41272.cljs$lang$maxFixedArity = 2;
G__41272.cljs$lang$applyTo = (function (arglist__41276){
var coll = cljs.core.first(arglist__41276);
arglist__41276 = cljs.core.next(arglist__41276);
var x = cljs.core.first(arglist__41276);
var xs = cljs.core.rest(arglist__41276);
return G__41272__delegate(coll,x,xs);
});
G__41272.cljs$core$IFn$_invoke$arity$variadic = G__41272__delegate;
return G__41272;
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
var G__41278__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__41277_SHARP_){return cljs.core.apply.call(null,f,p1__41277_SHARP_,args);
}));
};
var G__41278 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__41278__delegate.call(this,a,f,args);};
G__41278.cljs$lang$maxFixedArity = 2;
G__41278.cljs$lang$applyTo = (function (arglist__41279){
var a = cljs.core.first(arglist__41279);
arglist__41279 = cljs.core.next(arglist__41279);
var f = cljs.core.first(arglist__41279);
var args = cljs.core.rest(arglist__41279);
return G__41278__delegate(a,f,args);
});
G__41278.cljs$core$IFn$_invoke$arity$variadic = G__41278__delegate;
return G__41278;
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
var G__41280__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__41280 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__41280__delegate.call(this,f,arg,args);};
G__41280.cljs$lang$maxFixedArity = 2;
G__41280.cljs$lang$applyTo = (function (arglist__41281){
var f = cljs.core.first(arglist__41281);
arglist__41281 = cljs.core.next(arglist__41281);
var arg = cljs.core.first(arglist__41281);
var args = cljs.core.rest(arglist__41281);
return G__41280__delegate(f,arg,args);
});
G__41280.cljs$core$IFn$_invoke$arity$variadic = G__41280__delegate;
return G__41280;
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

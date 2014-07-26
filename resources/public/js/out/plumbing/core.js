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
var G__87750__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__87750 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__87750__delegate.call(this,m,k,f,x1,x2,xs);};
G__87750.cljs$lang$maxFixedArity = 5;
G__87750.cljs$lang$applyTo = (function (arglist__87751){
var m = cljs.core.first(arglist__87751);
arglist__87751 = cljs.core.next(arglist__87751);
var k = cljs.core.first(arglist__87751);
arglist__87751 = cljs.core.next(arglist__87751);
var f = cljs.core.first(arglist__87751);
arglist__87751 = cljs.core.next(arglist__87751);
var x1 = cljs.core.first(arglist__87751);
arglist__87751 = cljs.core.next(arglist__87751);
var x2 = cljs.core.first(arglist__87751);
var xs = cljs.core.rest(arglist__87751);
return G__87750__delegate(m,k,f,x1,x2,xs);
});
G__87750.cljs$core$IFn$_invoke$arity$variadic = G__87750__delegate;
return G__87750;
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
{var m_atom__10856__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__87760_87766 = cljs.core.seq.call(null,m);var chunk__87761_87767 = null;var count__87762_87768 = 0;var i__87763_87769 = 0;while(true){
if((i__87763_87769 < count__87762_87768))
{var vec__87764_87770 = cljs.core._nth.call(null,chunk__87761_87767,i__87763_87769);var k_87771 = cljs.core.nth.call(null,vec__87764_87770,0,null);var v_87772 = cljs.core.nth.call(null,vec__87764_87770,1,null);var m87759_87773 = cljs.core.deref.call(null,m_atom__10856__auto__);cljs.core.reset_BANG_.call(null,m_atom__10856__auto__,cljs.core.assoc_BANG_.call(null,m87759_87773,k_87771,f.call(null,v_87772)));
{
var G__87774 = seq__87760_87766;
var G__87775 = chunk__87761_87767;
var G__87776 = count__87762_87768;
var G__87777 = (i__87763_87769 + 1);
seq__87760_87766 = G__87774;
chunk__87761_87767 = G__87775;
count__87762_87768 = G__87776;
i__87763_87769 = G__87777;
continue;
}
} else
{var temp__4092__auto___87778 = cljs.core.seq.call(null,seq__87760_87766);if(temp__4092__auto___87778)
{var seq__87760_87779__$1 = temp__4092__auto___87778;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87760_87779__$1))
{var c__4151__auto___87780 = cljs.core.chunk_first.call(null,seq__87760_87779__$1);{
var G__87781 = cljs.core.chunk_rest.call(null,seq__87760_87779__$1);
var G__87782 = c__4151__auto___87780;
var G__87783 = cljs.core.count.call(null,c__4151__auto___87780);
var G__87784 = 0;
seq__87760_87766 = G__87781;
chunk__87761_87767 = G__87782;
count__87762_87768 = G__87783;
i__87763_87769 = G__87784;
continue;
}
} else
{var vec__87765_87785 = cljs.core.first.call(null,seq__87760_87779__$1);var k_87786 = cljs.core.nth.call(null,vec__87765_87785,0,null);var v_87787 = cljs.core.nth.call(null,vec__87765_87785,1,null);var m87759_87788 = cljs.core.deref.call(null,m_atom__10856__auto__);cljs.core.reset_BANG_.call(null,m_atom__10856__auto__,cljs.core.assoc_BANG_.call(null,m87759_87788,k_87786,f.call(null,v_87787)));
{
var G__87789 = cljs.core.next.call(null,seq__87760_87779__$1);
var G__87790 = null;
var G__87791 = 0;
var G__87792 = 0;
seq__87760_87766 = G__87789;
chunk__87761_87767 = G__87790;
count__87762_87768 = G__87791;
i__87763_87769 = G__87792;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10856__auto__));
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
{var m_atom__10856__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__87801_87807 = cljs.core.seq.call(null,m);var chunk__87802_87808 = null;var count__87803_87809 = 0;var i__87804_87810 = 0;while(true){
if((i__87804_87810 < count__87803_87809))
{var vec__87805_87811 = cljs.core._nth.call(null,chunk__87802_87808,i__87804_87810);var k_87812 = cljs.core.nth.call(null,vec__87805_87811,0,null);var v_87813 = cljs.core.nth.call(null,vec__87805_87811,1,null);var m87800_87814 = cljs.core.deref.call(null,m_atom__10856__auto__);cljs.core.reset_BANG_.call(null,m_atom__10856__auto__,cljs.core.assoc_BANG_.call(null,m87800_87814,f.call(null,k_87812),v_87813));
{
var G__87815 = seq__87801_87807;
var G__87816 = chunk__87802_87808;
var G__87817 = count__87803_87809;
var G__87818 = (i__87804_87810 + 1);
seq__87801_87807 = G__87815;
chunk__87802_87808 = G__87816;
count__87803_87809 = G__87817;
i__87804_87810 = G__87818;
continue;
}
} else
{var temp__4092__auto___87819 = cljs.core.seq.call(null,seq__87801_87807);if(temp__4092__auto___87819)
{var seq__87801_87820__$1 = temp__4092__auto___87819;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87801_87820__$1))
{var c__4151__auto___87821 = cljs.core.chunk_first.call(null,seq__87801_87820__$1);{
var G__87822 = cljs.core.chunk_rest.call(null,seq__87801_87820__$1);
var G__87823 = c__4151__auto___87821;
var G__87824 = cljs.core.count.call(null,c__4151__auto___87821);
var G__87825 = 0;
seq__87801_87807 = G__87822;
chunk__87802_87808 = G__87823;
count__87803_87809 = G__87824;
i__87804_87810 = G__87825;
continue;
}
} else
{var vec__87806_87826 = cljs.core.first.call(null,seq__87801_87820__$1);var k_87827 = cljs.core.nth.call(null,vec__87806_87826,0,null);var v_87828 = cljs.core.nth.call(null,vec__87806_87826,1,null);var m87800_87829 = cljs.core.deref.call(null,m_atom__10856__auto__);cljs.core.reset_BANG_.call(null,m_atom__10856__auto__,cljs.core.assoc_BANG_.call(null,m87800_87829,f.call(null,k_87827),v_87828));
{
var G__87830 = cljs.core.next.call(null,seq__87801_87820__$1);
var G__87831 = null;
var G__87832 = 0;
var G__87833 = 0;
seq__87801_87807 = G__87830;
chunk__87802_87808 = G__87831;
count__87803_87809 = G__87832;
i__87804_87810 = G__87833;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10856__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__10856__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__87840_87844 = cljs.core.seq.call(null,ks);var chunk__87841_87845 = null;var count__87842_87846 = 0;var i__87843_87847 = 0;while(true){
if((i__87843_87847 < count__87842_87846))
{var k_87848 = cljs.core._nth.call(null,chunk__87841_87845,i__87843_87847);var m87839_87849 = cljs.core.deref.call(null,m_atom__10856__auto__);cljs.core.reset_BANG_.call(null,m_atom__10856__auto__,cljs.core.assoc_BANG_.call(null,m87839_87849,k_87848,f.call(null,k_87848)));
{
var G__87850 = seq__87840_87844;
var G__87851 = chunk__87841_87845;
var G__87852 = count__87842_87846;
var G__87853 = (i__87843_87847 + 1);
seq__87840_87844 = G__87850;
chunk__87841_87845 = G__87851;
count__87842_87846 = G__87852;
i__87843_87847 = G__87853;
continue;
}
} else
{var temp__4092__auto___87854 = cljs.core.seq.call(null,seq__87840_87844);if(temp__4092__auto___87854)
{var seq__87840_87855__$1 = temp__4092__auto___87854;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87840_87855__$1))
{var c__4151__auto___87856 = cljs.core.chunk_first.call(null,seq__87840_87855__$1);{
var G__87857 = cljs.core.chunk_rest.call(null,seq__87840_87855__$1);
var G__87858 = c__4151__auto___87856;
var G__87859 = cljs.core.count.call(null,c__4151__auto___87856);
var G__87860 = 0;
seq__87840_87844 = G__87857;
chunk__87841_87845 = G__87858;
count__87842_87846 = G__87859;
i__87843_87847 = G__87860;
continue;
}
} else
{var k_87861 = cljs.core.first.call(null,seq__87840_87855__$1);var m87839_87862 = cljs.core.deref.call(null,m_atom__10856__auto__);cljs.core.reset_BANG_.call(null,m_atom__10856__auto__,cljs.core.assoc_BANG_.call(null,m87839_87862,k_87861,f.call(null,k_87861)));
{
var G__87863 = cljs.core.next.call(null,seq__87840_87855__$1);
var G__87864 = null;
var G__87865 = 0;
var G__87866 = 0;
seq__87840_87844 = G__87863;
chunk__87841_87845 = G__87864;
count__87842_87846 = G__87865;
i__87843_87847 = G__87866;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10856__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__10856__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__87873_87877 = cljs.core.seq.call(null,vs);var chunk__87874_87878 = null;var count__87875_87879 = 0;var i__87876_87880 = 0;while(true){
if((i__87876_87880 < count__87875_87879))
{var v_87881 = cljs.core._nth.call(null,chunk__87874_87878,i__87876_87880);var m87872_87882 = cljs.core.deref.call(null,m_atom__10856__auto__);cljs.core.reset_BANG_.call(null,m_atom__10856__auto__,cljs.core.assoc_BANG_.call(null,m87872_87882,f.call(null,v_87881),v_87881));
{
var G__87883 = seq__87873_87877;
var G__87884 = chunk__87874_87878;
var G__87885 = count__87875_87879;
var G__87886 = (i__87876_87880 + 1);
seq__87873_87877 = G__87883;
chunk__87874_87878 = G__87884;
count__87875_87879 = G__87885;
i__87876_87880 = G__87886;
continue;
}
} else
{var temp__4092__auto___87887 = cljs.core.seq.call(null,seq__87873_87877);if(temp__4092__auto___87887)
{var seq__87873_87888__$1 = temp__4092__auto___87887;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87873_87888__$1))
{var c__4151__auto___87889 = cljs.core.chunk_first.call(null,seq__87873_87888__$1);{
var G__87890 = cljs.core.chunk_rest.call(null,seq__87873_87888__$1);
var G__87891 = c__4151__auto___87889;
var G__87892 = cljs.core.count.call(null,c__4151__auto___87889);
var G__87893 = 0;
seq__87873_87877 = G__87890;
chunk__87874_87878 = G__87891;
count__87875_87879 = G__87892;
i__87876_87880 = G__87893;
continue;
}
} else
{var v_87894 = cljs.core.first.call(null,seq__87873_87888__$1);var m87872_87895 = cljs.core.deref.call(null,m_atom__10856__auto__);cljs.core.reset_BANG_.call(null,m_atom__10856__auto__,cljs.core.assoc_BANG_.call(null,m87872_87895,f.call(null,v_87894),v_87894));
{
var G__87896 = cljs.core.next.call(null,seq__87873_87888__$1);
var G__87897 = null;
var G__87898 = 0;
var G__87899 = 0;
seq__87873_87877 = G__87896;
chunk__87874_87878 = G__87897;
count__87875_87879 = G__87898;
i__87876_87880 = G__87899;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10856__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__87900){var vec__87902 = p__87900;var k = cljs.core.nth.call(null,vec__87902,0,null);var ks = cljs.core.nthnext.call(null,vec__87902,1);if(cljs.core.truth_(m))
{var temp__4090__auto__ = (function (){var and__3391__auto__ = ks;if(and__3391__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4090__auto__))
{var res = temp__4090__auto__;return cljs.core.assoc.call(null,m,k,res);
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
{var m_atom__10856__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__87911_87917 = cljs.core.seq.call(null,x);var chunk__87912_87918 = null;var count__87913_87919 = 0;var i__87914_87920 = 0;while(true){
if((i__87914_87920 < count__87913_87919))
{var vec__87915_87921 = cljs.core._nth.call(null,chunk__87912_87918,i__87914_87920);var k_87922 = cljs.core.nth.call(null,vec__87915_87921,0,null);var v_87923 = cljs.core.nth.call(null,vec__87915_87921,1,null);var m87910_87924 = cljs.core.deref.call(null,m_atom__10856__auto__);cljs.core.reset_BANG_.call(null,m_atom__10856__auto__,cljs.core.assoc_BANG_.call(null,m87910_87924,((typeof k_87922 === 'string')?cljs.core.keyword.call(null,k_87922):k_87922),keywordize_map.call(null,v_87923)));
{
var G__87925 = seq__87911_87917;
var G__87926 = chunk__87912_87918;
var G__87927 = count__87913_87919;
var G__87928 = (i__87914_87920 + 1);
seq__87911_87917 = G__87925;
chunk__87912_87918 = G__87926;
count__87913_87919 = G__87927;
i__87914_87920 = G__87928;
continue;
}
} else
{var temp__4092__auto___87929 = cljs.core.seq.call(null,seq__87911_87917);if(temp__4092__auto___87929)
{var seq__87911_87930__$1 = temp__4092__auto___87929;if(cljs.core.chunked_seq_QMARK_.call(null,seq__87911_87930__$1))
{var c__4151__auto___87931 = cljs.core.chunk_first.call(null,seq__87911_87930__$1);{
var G__87932 = cljs.core.chunk_rest.call(null,seq__87911_87930__$1);
var G__87933 = c__4151__auto___87931;
var G__87934 = cljs.core.count.call(null,c__4151__auto___87931);
var G__87935 = 0;
seq__87911_87917 = G__87932;
chunk__87912_87918 = G__87933;
count__87913_87919 = G__87934;
i__87914_87920 = G__87935;
continue;
}
} else
{var vec__87916_87936 = cljs.core.first.call(null,seq__87911_87930__$1);var k_87937 = cljs.core.nth.call(null,vec__87916_87936,0,null);var v_87938 = cljs.core.nth.call(null,vec__87916_87936,1,null);var m87910_87939 = cljs.core.deref.call(null,m_atom__10856__auto__);cljs.core.reset_BANG_.call(null,m_atom__10856__auto__,cljs.core.assoc_BANG_.call(null,m87910_87939,((typeof k_87937 === 'string')?cljs.core.keyword.call(null,k_87937):k_87937),keywordize_map.call(null,v_87938)));
{
var G__87940 = cljs.core.next.call(null,seq__87911_87930__$1);
var G__87941 = null;
var G__87942 = 0;
var G__87943 = 0;
seq__87911_87917 = G__87940;
chunk__87912_87918 = G__87941;
count__87913_87919 = G__87942;
i__87914_87920 = G__87943;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10856__auto__));
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
plumbing.core.safe_get = (function safe_get(m,k){var temp__4090__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4090__auto__))
{var pair__10925__auto__ = temp__4090__auto__;return cljs.core.val.call(null,pair__10925__auto__);
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
var G__87944 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__87945 = cljs.core.next.call(null,ks);
m = G__87944;
ks = G__87945;
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
return cljs.core.into.call(null,(function (){var or__3403__auto__ = m;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4120__auto__ = (function iter__87954(s__87955){return (new cljs.core.LazySeq(null,(function (){var s__87955__$1 = s__87955;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__87955__$1);if(temp__4092__auto__)
{var s__87955__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__87955__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__87955__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__87957 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__87956 = 0;while(true){
if((i__87956 < size__4119__auto__))
{var vec__87960 = cljs.core._nth.call(null,c__4118__auto__,i__87956);var k = cljs.core.nth.call(null,vec__87960,0,null);var v = cljs.core.nth.call(null,vec__87960,1,null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__87957,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__87962 = (i__87956 + 1);
i__87956 = G__87962;
continue;
}
} else
{{
var G__87963 = (i__87956 + 1);
i__87956 = G__87963;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87957),iter__87954.call(null,cljs.core.chunk_rest.call(null,s__87955__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87957),null);
}
} else
{var vec__87961 = cljs.core.first.call(null,s__87955__$2);var k = cljs.core.nth.call(null,vec__87961,0,null);var v = cljs.core.nth.call(null,vec__87961,1,null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__87954.call(null,cljs.core.rest.call(null,s__87955__$2)));
} else
{{
var G__87964 = cljs.core.rest.call(null,s__87955__$2);
s__87955__$1 = G__87964;
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
});return iter__4120__auto__.call(null,cljs.core.partition.call(null,2,kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__87965){
var m = cljs.core.first(arglist__87965);
var kvs = cljs.core.rest(arglist__87965);
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
update_in_when.cljs$lang$applyTo = (function (arglist__87966){
var m = cljs.core.first(arglist__87966);
arglist__87966 = cljs.core.next(arglist__87966);
var key_seq = cljs.core.first(arglist__87966);
arglist__87966 = cljs.core.next(arglist__87966);
var f = cljs.core.first(arglist__87966);
var args = cljs.core.rest(arglist__87966);
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
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4092__auto__ = cljs.core.next.call(null,s);if(temp__4092__auto__)
{var n = temp__4092__auto__;return aconcat.call(null,n);
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
plumbing.core.singleton = (function singleton(xs){var temp__4092__auto__ = cljs.core.seq.call(null,xs);if(temp__4092__auto__)
{var xs__$1 = temp__4092__auto__;if(cljs.core.next.call(null,xs__$1))
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
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4120__auto__ = (function iter__87971(s__87972){return (new cljs.core.LazySeq(null,(function (){var s__87972__$1 = s__87972;while(true){
var temp__4092__auto__ = cljs.core.seq.call(null,s__87972__$1);if(temp__4092__auto__)
{var s__87972__$2 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__87972__$2))
{var c__4118__auto__ = cljs.core.chunk_first.call(null,s__87972__$2);var size__4119__auto__ = cljs.core.count.call(null,c__4118__auto__);var b__87974 = cljs.core.chunk_buffer.call(null,size__4119__auto__);if((function (){var i__87973 = 0;while(true){
if((i__87973 < size__4119__auto__))
{var x = cljs.core._nth.call(null,c__4118__auto__,i__87973);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__87974,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__87975 = (i__87973 + 1);
i__87973 = G__87975;
continue;
}
} else
{{
var G__87976 = (i__87973 + 1);
i__87973 = G__87976;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87974),iter__87971.call(null,cljs.core.chunk_rest.call(null,s__87972__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__87974),null);
}
} else
{var x = cljs.core.first.call(null,s__87972__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__87971.call(null,cljs.core.rest.call(null,s__87972__$2)));
} else
{{
var G__87977 = cljs.core.rest.call(null,s__87972__$2);
s__87972__$1 = G__87977;
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
});return iter__4120__auto__.call(null,xs);
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
interleave_all.cljs$lang$applyTo = (function (arglist__87978){
var colls = cljs.core.seq(arglist__87978);
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
var G__87979__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__87980 = conj_when.call(null,coll,x);
var G__87981 = cljs.core.first.call(null,xs);
var G__87982 = cljs.core.next.call(null,xs);
coll = G__87980;
x = G__87981;
xs = G__87982;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__87979 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__87979__delegate.call(this,coll,x,xs);};
G__87979.cljs$lang$maxFixedArity = 2;
G__87979.cljs$lang$applyTo = (function (arglist__87983){
var coll = cljs.core.first(arglist__87983);
arglist__87983 = cljs.core.next(arglist__87983);
var x = cljs.core.first(arglist__87983);
var xs = cljs.core.rest(arglist__87983);
return G__87979__delegate(coll,x,xs);
});
G__87979.cljs$core$IFn$_invoke$arity$variadic = G__87979__delegate;
return G__87979;
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
var G__87985__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__87984_SHARP_){return cljs.core.apply.call(null,f,p1__87984_SHARP_,args);
}));
};
var G__87985 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__87985__delegate.call(this,a,f,args);};
G__87985.cljs$lang$maxFixedArity = 2;
G__87985.cljs$lang$applyTo = (function (arglist__87986){
var a = cljs.core.first(arglist__87986);
arglist__87986 = cljs.core.next(arglist__87986);
var f = cljs.core.first(arglist__87986);
var args = cljs.core.rest(arglist__87986);
return G__87985__delegate(a,f,args);
});
G__87985.cljs$core$IFn$_invoke$arity$variadic = G__87985__delegate;
return G__87985;
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
var G__87987__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__87987 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__87987__delegate.call(this,f,arg,args);};
G__87987.cljs$lang$maxFixedArity = 2;
G__87987.cljs$lang$applyTo = (function (arglist__87988){
var f = cljs.core.first(arglist__87988);
arglist__87988 = cljs.core.next(arglist__87988);
var arg = cljs.core.first(arglist__87988);
var args = cljs.core.rest(arglist__87988);
return G__87987__delegate(f,arg,args);
});
G__87987.cljs$core$IFn$_invoke$arity$variadic = G__87987__delegate;
return G__87987;
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

//# sourceMappingURL=core.js.map
// Compiled by ClojureScript 0.0-2156
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* Converts kebab-case to camelCase
*/
om_tools.dom.camel_case = (function camel_case(s){return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
* Converts attributes that are kebab-case and should be camelCase
*/
om_tools.dom.opt_key_case = (function opt_key_case(attr){if(cljs.core.truth_((function (){var or__15106__auto__ = (cljs.core.count.call(null,attr) < 5);if(or__15106__auto__)
{return or__15106__auto__;
} else
{return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["aria-",null,"data-",null], null), null).call(null,cljs.core.subs.call(null,attr,0,5));
}
})()))
{return attr;
} else
{return om_tools.dom.camel_case.call(null,attr);
}
});
/**
* Converts aliased attributes
*/
om_tools.dom.opt_key_alias = (function opt_key_alias(opt){var G__46536 = opt;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"for","for",1014005819),G__46536))
{return new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"class","class",1108647146),G__46536))
{return new cljs.core.Keyword(null,"className","className",1004015509);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return opt;
} else
{return null;
}
}
}
});
om_tools.dom.format_opt_key = (function format_opt_key(opt_key){return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
om_tools.dom.format_opt_val = (function format_opt_val(opt_val){if(cljs.core.map_QMARK_.call(null,opt_val))
{return cljs.core.clj__GT_js.call(null,opt_val);
} else
{return opt_val;
}
});
/**
* Returns JavaScript object for React DOM attributes from opts map
*/
om_tools.dom.format_opts = (function format_opts(opts){return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__46539){var vec__46540 = p__46539;var k = cljs.core.nth.call(null,vec__46540,0,null);var v = cljs.core.nth.call(null,vec__46540,1,null);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
});
om_tools.dom.literal_QMARK_ = (function literal_QMARK_(form){return !(((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form)));
});
om_tools.dom.possible_coll_QMARK_ = (function possible_coll_QMARK_(form){return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.form_tags = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input","input",-1540173437,null),new cljs.core.Symbol(null,"textarea","textarea",1651192051,null),new cljs.core.Symbol(null,"option","option",1644298798,null)], null);
om_tools.dom.el_ctor = (function el_ctor(tag){if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.partial.call(null,cljs.core._EQ_,tag),om_tools.dom.form_tags)))
{return cljs.core.symbol.call(null,"om.dom",cljs.core.name.call(null,tag));
} else
{return cljs.core.symbol.call(null,"js",[cljs.core.str("React.DOM."),cljs.core.str(cljs.core.name.call(null,tag))].join(''));
}
});
om_tools.dom.element_args = (function element_args(opts,children){if((opts == null))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else
{if(cljs.core.map_QMARK_.call(null,opts))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else
{if(cljs.core.object_QMARK_.call(null,opts))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);
} else
{return null;
}
}
}
}
});
om_tools.dom.element = (function element(ctor,opts,children){var vec__46542 = om_tools.dom.element_args.call(null,opts,children);var opts__$1 = cljs.core.nth.call(null,vec__46542,0,null);var children__$1 = cljs.core.nth.call(null,vec__46542,1,null);return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
om_tools.dom.class_set = (function class_set(m){var temp__4126__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));if(temp__4126__auto__)
{var ks = temp__4126__auto__;return clojure.string.join.call(null," ",ks);
} else
{return null;
}
});

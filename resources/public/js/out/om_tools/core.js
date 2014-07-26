// Compiled by ClojureScript 0.0-2156
goog.provide('om_tools.core');
goog.require('cljs.core');
goog.require('plumbing.core');
goog.require('plumbing.core');
goog.require('plumbing.fnk.schema');
goog.require('om.core');
goog.require('om.core');
/**
* Returns an atom-like object for reading and writing Om component
* state.
* 
* Note: Behavior may exactly not match atoms when deref'ing
* immediately following a reset!/swap! because Om processes state
* changes asynchronously in separate render phases.
*/
om_tools.core.state_proxy = (function state_proxy(owner){if(cljs.core.truth_(owner))
{var get_state = (function (){return om.core.get_state.call(null,owner);
});if(typeof om_tools.core.t87747 !== 'undefined')
{} else
{
/**
* @constructor
*/
om_tools.core.t87747 = (function (get_state,owner,state_proxy,meta87748){
this.get_state = get_state;
this.owner = owner;
this.state_proxy = state_proxy;
this.meta87748 = meta87748;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 425984;
})
om_tools.core.t87747.cljs$lang$type = true;
om_tools.core.t87747.cljs$lang$ctorStr = "om-tools.core/t87747";
om_tools.core.t87747.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"om-tools.core/t87747");
});
om_tools.core.t87747.prototype.om_tools$core$ISwap$ = true;
om_tools.core.t87747.prototype.om_tools$core$ISwap$_swap_BANG_$arity$2 = (function (s,f){var self__ = this;
var s__$1 = this;return om_tools.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null)));
});
om_tools.core.t87747.prototype.om_tools$core$ISwap$_swap_BANG_$arity$3 = (function (s,f,x){var self__ = this;
var s__$1 = this;return om_tools.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null),x));
});
om_tools.core.t87747.prototype.om_tools$core$ISwap$_swap_BANG_$arity$4 = (function (s,f,x,y){var self__ = this;
var s__$1 = this;return om_tools.core._reset_BANG_.call(null,s__$1,f.call(null,self__.get_state.call(null),x,y));
});
om_tools.core.t87747.prototype.om_tools$core$ISwap$_swap_BANG_$arity$5 = (function (s,f,x,y,more){var self__ = this;
var s__$1 = this;return om_tools.core._reset_BANG_.call(null,s__$1,cljs.core.apply.call(null,f,self__.get_state.call(null),x,y,more));
});
om_tools.core.t87747.prototype.om_tools$core$IReset$ = true;
om_tools.core.t87747.prototype.om_tools$core$IReset$_reset_BANG_$arity$2 = (function (_,v){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,v);
});
om_tools.core.t87747.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.get_state.call(null);
});
om_tools.core.t87747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_87749){var self__ = this;
var _87749__$1 = this;return self__.meta87748;
});
om_tools.core.t87747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_87749,meta87748__$1){var self__ = this;
var _87749__$1 = this;return (new om_tools.core.t87747(self__.get_state,self__.owner,self__.state_proxy,meta87748__$1));
});
om_tools.core.__GT_t87747 = (function __GT_t87747(get_state__$1,owner__$1,state_proxy__$1,meta87748){return (new om_tools.core.t87747(get_state__$1,owner__$1,state_proxy__$1,meta87748));
});
}
return (new om_tools.core.t87747(get_state,owner,state_proxy,null));
} else
{return null;
}
});
/**
* Calls om.core/set-state! when current value not= to v and returns
* updated owner, otherwise nil.
* Used to prevent no-op updates from entering render queue
*/
om_tools.core.set_state_QMARK__BANG_ = (function() {
var set_state_QMARK__BANG_ = null;
var set_state_QMARK__BANG___2 = (function (owner,v){if(cljs.core._EQ_.call(null,v,om.core.get_state.call(null,owner)))
{return null;
} else
{return om.core.set_state_BANG_.call(null,owner,v);
}
});
var set_state_QMARK__BANG___3 = (function (owner,korks,v){if(cljs.core._EQ_.call(null,v,om.core.get_state.call(null,owner,korks)))
{return null;
} else
{return om.core.set_state_BANG_.call(null,owner,korks,v);
}
});
set_state_QMARK__BANG_ = function(owner,korks,v){
switch(arguments.length){
case 2:
return set_state_QMARK__BANG___2.call(this,owner,korks);
case 3:
return set_state_QMARK__BANG___3.call(this,owner,korks,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$2 = set_state_QMARK__BANG___2;
set_state_QMARK__BANG_.cljs$core$IFn$_invoke$arity$3 = set_state_QMARK__BANG___3;
return set_state_QMARK__BANG_;
})()
;

//# sourceMappingURL=core.js.map
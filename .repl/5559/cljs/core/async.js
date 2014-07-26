// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18909 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18909 = (function (f,fn_handler,meta18910){
this.f = f;
this.fn_handler = fn_handler;
this.meta18910 = meta18910;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18909.cljs$lang$type = true;
cljs.core.async.t18909.cljs$lang$ctorStr = "cljs.core.async/t18909";
cljs.core.async.t18909.cljs$lang$ctorPrWriter = (function (this__10073__auto__,writer__10074__auto__,opt__10075__auto__){return cljs.core._write.call(null,writer__10074__auto__,"cljs.core.async/t18909");
});
cljs.core.async.t18909.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18911){var self__ = this;
var _18911__$1 = this;return self__.meta18910;
});
cljs.core.async.t18909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18911,meta18910__$1){var self__ = this;
var _18911__$1 = this;return (new cljs.core.async.t18909(self__.f,self__.fn_handler,meta18910__$1));
});
cljs.core.async.__GT_t18909 = (function __GT_t18909(f__$1,fn_handler__$1,meta18910){return (new cljs.core.async.t18909(f__$1,fn_handler__$1,meta18910));
});
}
return (new cljs.core.async.t18909(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18913 = buff;if(G__18913)
{var bit__10156__auto__ = null;if(cljs.core.truth_((function (){var or__9506__auto__ = bit__10156__auto__;if(cljs.core.truth_(or__9506__auto__))
{return or__9506__auto__;
} else
{return G__18913.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18913.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18913);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18913);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_18914 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18914);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_18914);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__9494__auto__ = ret;if(cljs.core.truth_(and__9494__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__9494__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__10354__auto___18915 = n;var x_18916 = 0;while(true){
if((x_18916 < n__10354__auto___18915))
{(a[x_18916] = 0);
{
var G__18917 = (x_18916 + 1);
x_18916 = G__18917;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__18918 = (i + 1);
i = G__18918;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18922 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18922 = (function (flag,alt_flag,meta18923){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18923 = meta18923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18922.cljs$lang$type = true;
cljs.core.async.t18922.cljs$lang$ctorStr = "cljs.core.async/t18922";
cljs.core.async.t18922.cljs$lang$ctorPrWriter = (function (this__10073__auto__,writer__10074__auto__,opt__10075__auto__){return cljs.core._write.call(null,writer__10074__auto__,"cljs.core.async/t18922");
});
cljs.core.async.t18922.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t18922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t18922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18924){var self__ = this;
var _18924__$1 = this;return self__.meta18923;
});
cljs.core.async.t18922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18924,meta18923__$1){var self__ = this;
var _18924__$1 = this;return (new cljs.core.async.t18922(self__.flag,self__.alt_flag,meta18923__$1));
});
cljs.core.async.__GT_t18922 = (function __GT_t18922(flag__$1,alt_flag__$1,meta18923){return (new cljs.core.async.t18922(flag__$1,alt_flag__$1,meta18923));
});
}
return (new cljs.core.async.t18922(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18928 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18928 = (function (cb,flag,alt_handler,meta18929){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18929 = meta18929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18928.cljs$lang$type = true;
cljs.core.async.t18928.cljs$lang$ctorStr = "cljs.core.async/t18928";
cljs.core.async.t18928.cljs$lang$ctorPrWriter = (function (this__10073__auto__,writer__10074__auto__,opt__10075__auto__){return cljs.core._write.call(null,writer__10074__auto__,"cljs.core.async/t18928");
});
cljs.core.async.t18928.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18930){var self__ = this;
var _18930__$1 = this;return self__.meta18929;
});
cljs.core.async.t18928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18930,meta18929__$1){var self__ = this;
var _18930__$1 = this;return (new cljs.core.async.t18928(self__.cb,self__.flag,self__.alt_handler,meta18929__$1));
});
cljs.core.async.__GT_t18928 = (function __GT_t18928(cb__$1,flag__$1,alt_handler__$1,meta18929){return (new cljs.core.async.t18928(cb__$1,flag__$1,alt_handler__$1,meta18929));
});
}
return (new cljs.core.async.t18928(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__18931_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18931_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__9506__auto__ = wport;if(cljs.core.truth_(or__9506__auto__))
{return or__9506__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__18932 = (i + 1);
i = G__18932;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__9506__auto__ = ret;if(cljs.core.truth_(or__9506__auto__))
{return or__9506__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__9494__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__9494__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__9494__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__18933){var map__18935 = p__18933;var map__18935__$1 = ((cljs.core.seq_QMARK_.call(null,map__18935))?cljs.core.apply.call(null,cljs.core.hash_map,map__18935):map__18935);var opts = map__18935__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__18933 = null;if (arguments.length > 1) {
  p__18933 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18933);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18936){
var ports = cljs.core.first(arglist__18936);
var p__18933 = cljs.core.rest(arglist__18936);
return alts_BANG___delegate(ports,p__18933);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t18944 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18944 = (function (ch,f,map_LT_,meta18945){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18945 = meta18945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18944.cljs$lang$type = true;
cljs.core.async.t18944.cljs$lang$ctorStr = "cljs.core.async/t18944";
cljs.core.async.t18944.cljs$lang$ctorPrWriter = (function (this__10073__auto__,writer__10074__auto__,opt__10075__auto__){return cljs.core._write.call(null,writer__10074__auto__,"cljs.core.async/t18944");
});
cljs.core.async.t18944.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t18944.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t18947 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18947 = (function (fn1,_,meta18945,ch,f,map_LT_,meta18948){
this.fn1 = fn1;
this._ = _;
this.meta18945 = meta18945;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18948 = meta18948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18947.cljs$lang$type = true;
cljs.core.async.t18947.cljs$lang$ctorStr = "cljs.core.async/t18947";
cljs.core.async.t18947.cljs$lang$ctorPrWriter = (function (this__10073__auto__,writer__10074__auto__,opt__10075__auto__){return cljs.core._write.call(null,writer__10074__auto__,"cljs.core.async/t18947");
});
cljs.core.async.t18947.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t18947.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t18947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__18937_SHARP_){return f1.call(null,(((p1__18937_SHARP_ == null))?null:self__.f.call(null,p1__18937_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t18947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18949){var self__ = this;
var _18949__$1 = this;return self__.meta18948;
});
cljs.core.async.t18947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18949,meta18948__$1){var self__ = this;
var _18949__$1 = this;return (new cljs.core.async.t18947(self__.fn1,self__._,self__.meta18945,self__.ch,self__.f,self__.map_LT_,meta18948__$1));
});
cljs.core.async.__GT_t18947 = (function __GT_t18947(fn1__$1,___$2,meta18945__$1,ch__$2,f__$2,map_LT___$2,meta18948){return (new cljs.core.async.t18947(fn1__$1,___$2,meta18945__$1,ch__$2,f__$2,map_LT___$2,meta18948));
});
}
return (new cljs.core.async.t18947(fn1,___$1,self__.meta18945,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__9494__auto__ = ret;if(cljs.core.truth_(and__9494__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__9494__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t18944.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18946){var self__ = this;
var _18946__$1 = this;return self__.meta18945;
});
cljs.core.async.t18944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18946,meta18945__$1){var self__ = this;
var _18946__$1 = this;return (new cljs.core.async.t18944(self__.ch,self__.f,self__.map_LT_,meta18945__$1));
});
cljs.core.async.__GT_t18944 = (function __GT_t18944(ch__$1,f__$1,map_LT___$1,meta18945){return (new cljs.core.async.t18944(ch__$1,f__$1,map_LT___$1,meta18945));
});
}
return (new cljs.core.async.t18944(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t18953 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18953 = (function (ch,f,map_GT_,meta18954){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18954 = meta18954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18953.cljs$lang$type = true;
cljs.core.async.t18953.cljs$lang$ctorStr = "cljs.core.async/t18953";
cljs.core.async.t18953.cljs$lang$ctorPrWriter = (function (this__10073__auto__,writer__10074__auto__,opt__10075__auto__){return cljs.core._write.call(null,writer__10074__auto__,"cljs.core.async/t18953");
});
cljs.core.async.t18953.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18953.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t18953.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18953.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18953.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18953.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18955){var self__ = this;
var _18955__$1 = this;return self__.meta18954;
});
cljs.core.async.t18953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18955,meta18954__$1){var self__ = this;
var _18955__$1 = this;return (new cljs.core.async.t18953(self__.ch,self__.f,self__.map_GT_,meta18954__$1));
});
cljs.core.async.__GT_t18953 = (function __GT_t18953(ch__$1,f__$1,map_GT___$1,meta18954){return (new cljs.core.async.t18953(ch__$1,f__$1,map_GT___$1,meta18954));
});
}
return (new cljs.core.async.t18953(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t18959 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18959 = (function (ch,p,filter_GT_,meta18960){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18960 = meta18960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18959.cljs$lang$type = true;
cljs.core.async.t18959.cljs$lang$ctorStr = "cljs.core.async/t18959";
cljs.core.async.t18959.cljs$lang$ctorPrWriter = (function (this__10073__auto__,writer__10074__auto__,opt__10075__auto__){return cljs.core._write.call(null,writer__10074__auto__,"cljs.core.async/t18959");
});
cljs.core.async.t18959.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t18959.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18959.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18961){var self__ = this;
var _18961__$1 = this;return self__.meta18960;
});
cljs.core.async.t18959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18961,meta18960__$1){var self__ = this;
var _18961__$1 = this;return (new cljs.core.async.t18959(self__.ch,self__.p,self__.filter_GT_,meta18960__$1));
});
cljs.core.async.__GT_t18959 = (function __GT_t18959(ch__$1,p__$1,filter_GT___$1,meta18960){return (new cljs.core.async.t18959(ch__$1,p__$1,filter_GT___$1,meta18960));
});
}
return (new cljs.core.async.t18959(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16602__auto___19044 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_19023){var state_val_19024 = (state_19023[1]);if((state_val_19024 === 7))
{var inst_19019 = (state_19023[2]);var state_19023__$1 = state_19023;var statearr_19025_19045 = state_19023__$1;(statearr_19025_19045[2] = inst_19019);
(statearr_19025_19045[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19024 === 1))
{var state_19023__$1 = state_19023;var statearr_19026_19046 = state_19023__$1;(statearr_19026_19046[2] = null);
(statearr_19026_19046[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19024 === 4))
{var inst_19005 = (state_19023[7]);var inst_19005__$1 = (state_19023[2]);var inst_19006 = (inst_19005__$1 == null);var state_19023__$1 = (function (){var statearr_19027 = state_19023;(statearr_19027[7] = inst_19005__$1);
return statearr_19027;
})();if(cljs.core.truth_(inst_19006))
{var statearr_19028_19047 = state_19023__$1;(statearr_19028_19047[1] = 5);
} else
{var statearr_19029_19048 = state_19023__$1;(statearr_19029_19048[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19024 === 6))
{var inst_19005 = (state_19023[7]);var inst_19010 = p.call(null,inst_19005);var state_19023__$1 = state_19023;if(cljs.core.truth_(inst_19010))
{var statearr_19030_19049 = state_19023__$1;(statearr_19030_19049[1] = 8);
} else
{var statearr_19031_19050 = state_19023__$1;(statearr_19031_19050[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19024 === 3))
{var inst_19021 = (state_19023[2]);var state_19023__$1 = state_19023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19023__$1,inst_19021);
} else
{if((state_val_19024 === 2))
{var state_19023__$1 = state_19023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19023__$1,4,ch);
} else
{if((state_val_19024 === 11))
{var inst_19013 = (state_19023[2]);var state_19023__$1 = state_19023;var statearr_19032_19051 = state_19023__$1;(statearr_19032_19051[2] = inst_19013);
(statearr_19032_19051[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19024 === 9))
{var state_19023__$1 = state_19023;var statearr_19033_19052 = state_19023__$1;(statearr_19033_19052[2] = null);
(statearr_19033_19052[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19024 === 5))
{var inst_19008 = cljs.core.async.close_BANG_.call(null,out);var state_19023__$1 = state_19023;var statearr_19034_19053 = state_19023__$1;(statearr_19034_19053[2] = inst_19008);
(statearr_19034_19053[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19024 === 10))
{var inst_19016 = (state_19023[2]);var state_19023__$1 = (function (){var statearr_19035 = state_19023;(statearr_19035[8] = inst_19016);
return statearr_19035;
})();var statearr_19036_19054 = state_19023__$1;(statearr_19036_19054[2] = null);
(statearr_19036_19054[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19024 === 8))
{var inst_19005 = (state_19023[7]);var state_19023__$1 = state_19023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19023__$1,11,out,inst_19005);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_19040 = [null,null,null,null,null,null,null,null,null];(statearr_19040[0] = state_machine__16539__auto__);
(statearr_19040[1] = 1);
return statearr_19040;
});
var state_machine__16539__auto____1 = (function (state_19023){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_19023);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e19041){if((e19041 instanceof Object))
{var ex__16542__auto__ = e19041;var statearr_19042_19055 = state_19023;(statearr_19042_19055[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19056 = state_19023;
state_19023 = G__19056;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_19023){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_19023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_19043 = f__16603__auto__.call(null);(statearr_19043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto___19044);
return statearr_19043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__16602__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_19208){var state_val_19209 = (state_19208[1]);if((state_val_19209 === 7))
{var inst_19204 = (state_19208[2]);var state_19208__$1 = state_19208;var statearr_19210_19247 = state_19208__$1;(statearr_19210_19247[2] = inst_19204);
(statearr_19210_19247[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 20))
{var inst_19179 = (state_19208[7]);var inst_19190 = (state_19208[2]);var inst_19191 = cljs.core.next.call(null,inst_19179);var inst_19165 = inst_19191;var inst_19166 = null;var inst_19167 = 0;var inst_19168 = 0;var state_19208__$1 = (function (){var statearr_19211 = state_19208;(statearr_19211[8] = inst_19167);
(statearr_19211[9] = inst_19168);
(statearr_19211[10] = inst_19190);
(statearr_19211[11] = inst_19165);
(statearr_19211[12] = inst_19166);
return statearr_19211;
})();var statearr_19212_19248 = state_19208__$1;(statearr_19212_19248[2] = null);
(statearr_19212_19248[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 1))
{var state_19208__$1 = state_19208;var statearr_19213_19249 = state_19208__$1;(statearr_19213_19249[2] = null);
(statearr_19213_19249[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 4))
{var inst_19154 = (state_19208[13]);var inst_19154__$1 = (state_19208[2]);var inst_19155 = (inst_19154__$1 == null);var state_19208__$1 = (function (){var statearr_19217 = state_19208;(statearr_19217[13] = inst_19154__$1);
return statearr_19217;
})();if(cljs.core.truth_(inst_19155))
{var statearr_19218_19250 = state_19208__$1;(statearr_19218_19250[1] = 5);
} else
{var statearr_19219_19251 = state_19208__$1;(statearr_19219_19251[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 15))
{var state_19208__$1 = state_19208;var statearr_19220_19252 = state_19208__$1;(statearr_19220_19252[2] = null);
(statearr_19220_19252[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 13))
{var inst_19167 = (state_19208[8]);var inst_19168 = (state_19208[9]);var inst_19165 = (state_19208[11]);var inst_19166 = (state_19208[12]);var inst_19175 = (state_19208[2]);var inst_19176 = (inst_19168 + 1);var tmp19214 = inst_19167;var tmp19215 = inst_19165;var tmp19216 = inst_19166;var inst_19165__$1 = tmp19215;var inst_19166__$1 = tmp19216;var inst_19167__$1 = tmp19214;var inst_19168__$1 = inst_19176;var state_19208__$1 = (function (){var statearr_19221 = state_19208;(statearr_19221[14] = inst_19175);
(statearr_19221[8] = inst_19167__$1);
(statearr_19221[9] = inst_19168__$1);
(statearr_19221[11] = inst_19165__$1);
(statearr_19221[12] = inst_19166__$1);
return statearr_19221;
})();var statearr_19222_19253 = state_19208__$1;(statearr_19222_19253[2] = null);
(statearr_19222_19253[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 6))
{var inst_19154 = (state_19208[13]);var inst_19159 = f.call(null,inst_19154);var inst_19164 = cljs.core.seq.call(null,inst_19159);var inst_19165 = inst_19164;var inst_19166 = null;var inst_19167 = 0;var inst_19168 = 0;var state_19208__$1 = (function (){var statearr_19223 = state_19208;(statearr_19223[8] = inst_19167);
(statearr_19223[9] = inst_19168);
(statearr_19223[11] = inst_19165);
(statearr_19223[12] = inst_19166);
return statearr_19223;
})();var statearr_19224_19254 = state_19208__$1;(statearr_19224_19254[2] = null);
(statearr_19224_19254[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 17))
{var inst_19179 = (state_19208[7]);var inst_19183 = cljs.core.chunk_first.call(null,inst_19179);var inst_19184 = cljs.core.chunk_rest.call(null,inst_19179);var inst_19185 = cljs.core.count.call(null,inst_19183);var inst_19165 = inst_19184;var inst_19166 = inst_19183;var inst_19167 = inst_19185;var inst_19168 = 0;var state_19208__$1 = (function (){var statearr_19225 = state_19208;(statearr_19225[8] = inst_19167);
(statearr_19225[9] = inst_19168);
(statearr_19225[11] = inst_19165);
(statearr_19225[12] = inst_19166);
return statearr_19225;
})();var statearr_19226_19255 = state_19208__$1;(statearr_19226_19255[2] = null);
(statearr_19226_19255[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 3))
{var inst_19206 = (state_19208[2]);var state_19208__$1 = state_19208;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19208__$1,inst_19206);
} else
{if((state_val_19209 === 12))
{var inst_19199 = (state_19208[2]);var state_19208__$1 = state_19208;var statearr_19227_19256 = state_19208__$1;(statearr_19227_19256[2] = inst_19199);
(statearr_19227_19256[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 2))
{var state_19208__$1 = state_19208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19208__$1,4,in$);
} else
{if((state_val_19209 === 19))
{var inst_19194 = (state_19208[2]);var state_19208__$1 = state_19208;var statearr_19228_19257 = state_19208__$1;(statearr_19228_19257[2] = inst_19194);
(statearr_19228_19257[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 11))
{var inst_19179 = (state_19208[7]);var inst_19165 = (state_19208[11]);var inst_19179__$1 = cljs.core.seq.call(null,inst_19165);var state_19208__$1 = (function (){var statearr_19229 = state_19208;(statearr_19229[7] = inst_19179__$1);
return statearr_19229;
})();if(inst_19179__$1)
{var statearr_19230_19258 = state_19208__$1;(statearr_19230_19258[1] = 14);
} else
{var statearr_19231_19259 = state_19208__$1;(statearr_19231_19259[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 9))
{var inst_19201 = (state_19208[2]);var state_19208__$1 = (function (){var statearr_19232 = state_19208;(statearr_19232[15] = inst_19201);
return statearr_19232;
})();var statearr_19233_19260 = state_19208__$1;(statearr_19233_19260[2] = null);
(statearr_19233_19260[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 5))
{var inst_19157 = cljs.core.async.close_BANG_.call(null,out);var state_19208__$1 = state_19208;var statearr_19234_19261 = state_19208__$1;(statearr_19234_19261[2] = inst_19157);
(statearr_19234_19261[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 14))
{var inst_19179 = (state_19208[7]);var inst_19181 = cljs.core.chunked_seq_QMARK_.call(null,inst_19179);var state_19208__$1 = state_19208;if(inst_19181)
{var statearr_19235_19262 = state_19208__$1;(statearr_19235_19262[1] = 17);
} else
{var statearr_19236_19263 = state_19208__$1;(statearr_19236_19263[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 16))
{var inst_19197 = (state_19208[2]);var state_19208__$1 = state_19208;var statearr_19237_19264 = state_19208__$1;(statearr_19237_19264[2] = inst_19197);
(statearr_19237_19264[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19209 === 10))
{var inst_19168 = (state_19208[9]);var inst_19166 = (state_19208[12]);var inst_19173 = cljs.core._nth.call(null,inst_19166,inst_19168);var state_19208__$1 = state_19208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19208__$1,13,out,inst_19173);
} else
{if((state_val_19209 === 18))
{var inst_19179 = (state_19208[7]);var inst_19188 = cljs.core.first.call(null,inst_19179);var state_19208__$1 = state_19208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19208__$1,20,out,inst_19188);
} else
{if((state_val_19209 === 8))
{var inst_19167 = (state_19208[8]);var inst_19168 = (state_19208[9]);var inst_19170 = (inst_19168 < inst_19167);var inst_19171 = inst_19170;var state_19208__$1 = state_19208;if(cljs.core.truth_(inst_19171))
{var statearr_19238_19265 = state_19208__$1;(statearr_19238_19265[1] = 10);
} else
{var statearr_19239_19266 = state_19208__$1;(statearr_19239_19266[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_19243 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19243[0] = state_machine__16539__auto__);
(statearr_19243[1] = 1);
return statearr_19243;
});
var state_machine__16539__auto____1 = (function (state_19208){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_19208);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e19244){if((e19244 instanceof Object))
{var ex__16542__auto__ = e19244;var statearr_19245_19267 = state_19208;(statearr_19245_19267[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19208);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19268 = state_19208;
state_19208 = G__19268;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_19208){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_19208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_19246 = f__16603__auto__.call(null);(statearr_19246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto__);
return statearr_19246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return c__16602__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__16602__auto___19349 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_19328){var state_val_19329 = (state_19328[1]);if((state_val_19329 === 7))
{var inst_19324 = (state_19328[2]);var state_19328__$1 = state_19328;var statearr_19330_19350 = state_19328__$1;(statearr_19330_19350[2] = inst_19324);
(statearr_19330_19350[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 1))
{var state_19328__$1 = state_19328;var statearr_19331_19351 = state_19328__$1;(statearr_19331_19351[2] = null);
(statearr_19331_19351[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 4))
{var inst_19311 = (state_19328[7]);var inst_19311__$1 = (state_19328[2]);var inst_19312 = (inst_19311__$1 == null);var state_19328__$1 = (function (){var statearr_19332 = state_19328;(statearr_19332[7] = inst_19311__$1);
return statearr_19332;
})();if(cljs.core.truth_(inst_19312))
{var statearr_19333_19352 = state_19328__$1;(statearr_19333_19352[1] = 5);
} else
{var statearr_19334_19353 = state_19328__$1;(statearr_19334_19353[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 6))
{var inst_19311 = (state_19328[7]);var state_19328__$1 = state_19328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19328__$1,11,to,inst_19311);
} else
{if((state_val_19329 === 3))
{var inst_19326 = (state_19328[2]);var state_19328__$1 = state_19328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19328__$1,inst_19326);
} else
{if((state_val_19329 === 2))
{var state_19328__$1 = state_19328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19328__$1,4,from);
} else
{if((state_val_19329 === 11))
{var inst_19321 = (state_19328[2]);var state_19328__$1 = (function (){var statearr_19335 = state_19328;(statearr_19335[8] = inst_19321);
return statearr_19335;
})();var statearr_19336_19354 = state_19328__$1;(statearr_19336_19354[2] = null);
(statearr_19336_19354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 9))
{var state_19328__$1 = state_19328;var statearr_19337_19355 = state_19328__$1;(statearr_19337_19355[2] = null);
(statearr_19337_19355[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 5))
{var state_19328__$1 = state_19328;if(cljs.core.truth_(close_QMARK_))
{var statearr_19338_19356 = state_19328__$1;(statearr_19338_19356[1] = 8);
} else
{var statearr_19339_19357 = state_19328__$1;(statearr_19339_19357[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 10))
{var inst_19318 = (state_19328[2]);var state_19328__$1 = state_19328;var statearr_19340_19358 = state_19328__$1;(statearr_19340_19358[2] = inst_19318);
(statearr_19340_19358[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19329 === 8))
{var inst_19315 = cljs.core.async.close_BANG_.call(null,to);var state_19328__$1 = state_19328;var statearr_19341_19359 = state_19328__$1;(statearr_19341_19359[2] = inst_19315);
(statearr_19341_19359[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_19345 = [null,null,null,null,null,null,null,null,null];(statearr_19345[0] = state_machine__16539__auto__);
(statearr_19345[1] = 1);
return statearr_19345;
});
var state_machine__16539__auto____1 = (function (state_19328){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_19328);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e19346){if((e19346 instanceof Object))
{var ex__16542__auto__ = e19346;var statearr_19347_19360 = state_19328;(statearr_19347_19360[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19328);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19361 = state_19328;
state_19328 = G__19361;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_19328){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_19328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_19348 = f__16603__auto__.call(null);(statearr_19348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto___19349);
return statearr_19348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__16602__auto___19448 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_19426){var state_val_19427 = (state_19426[1]);if((state_val_19427 === 7))
{var inst_19422 = (state_19426[2]);var state_19426__$1 = state_19426;var statearr_19428_19449 = state_19426__$1;(statearr_19428_19449[2] = inst_19422);
(statearr_19428_19449[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19427 === 1))
{var state_19426__$1 = state_19426;var statearr_19429_19450 = state_19426__$1;(statearr_19429_19450[2] = null);
(statearr_19429_19450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19427 === 4))
{var inst_19407 = (state_19426[7]);var inst_19407__$1 = (state_19426[2]);var inst_19408 = (inst_19407__$1 == null);var state_19426__$1 = (function (){var statearr_19430 = state_19426;(statearr_19430[7] = inst_19407__$1);
return statearr_19430;
})();if(cljs.core.truth_(inst_19408))
{var statearr_19431_19451 = state_19426__$1;(statearr_19431_19451[1] = 5);
} else
{var statearr_19432_19452 = state_19426__$1;(statearr_19432_19452[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19427 === 6))
{var inst_19407 = (state_19426[7]);var inst_19413 = p.call(null,inst_19407);var state_19426__$1 = state_19426;if(cljs.core.truth_(inst_19413))
{var statearr_19433_19453 = state_19426__$1;(statearr_19433_19453[1] = 9);
} else
{var statearr_19434_19454 = state_19426__$1;(statearr_19434_19454[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19427 === 3))
{var inst_19424 = (state_19426[2]);var state_19426__$1 = state_19426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19426__$1,inst_19424);
} else
{if((state_val_19427 === 2))
{var state_19426__$1 = state_19426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19426__$1,4,ch);
} else
{if((state_val_19427 === 11))
{var inst_19407 = (state_19426[7]);var inst_19417 = (state_19426[2]);var state_19426__$1 = state_19426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19426__$1,8,inst_19417,inst_19407);
} else
{if((state_val_19427 === 9))
{var state_19426__$1 = state_19426;var statearr_19435_19455 = state_19426__$1;(statearr_19435_19455[2] = tc);
(statearr_19435_19455[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19427 === 5))
{var inst_19410 = cljs.core.async.close_BANG_.call(null,tc);var inst_19411 = cljs.core.async.close_BANG_.call(null,fc);var state_19426__$1 = (function (){var statearr_19436 = state_19426;(statearr_19436[8] = inst_19410);
return statearr_19436;
})();var statearr_19437_19456 = state_19426__$1;(statearr_19437_19456[2] = inst_19411);
(statearr_19437_19456[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19427 === 10))
{var state_19426__$1 = state_19426;var statearr_19438_19457 = state_19426__$1;(statearr_19438_19457[2] = fc);
(statearr_19438_19457[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19427 === 8))
{var inst_19419 = (state_19426[2]);var state_19426__$1 = (function (){var statearr_19439 = state_19426;(statearr_19439[9] = inst_19419);
return statearr_19439;
})();var statearr_19440_19458 = state_19426__$1;(statearr_19440_19458[2] = null);
(statearr_19440_19458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_19444 = [null,null,null,null,null,null,null,null,null,null];(statearr_19444[0] = state_machine__16539__auto__);
(statearr_19444[1] = 1);
return statearr_19444;
});
var state_machine__16539__auto____1 = (function (state_19426){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_19426);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e19445){if((e19445 instanceof Object))
{var ex__16542__auto__ = e19445;var statearr_19446_19459 = state_19426;(statearr_19446_19459[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19426);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19445;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19460 = state_19426;
state_19426 = G__19460;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_19426){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_19426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_19447 = f__16603__auto__.call(null);(statearr_19447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto___19448);
return statearr_19447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__16602__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_19507){var state_val_19508 = (state_19507[1]);if((state_val_19508 === 7))
{var inst_19503 = (state_19507[2]);var state_19507__$1 = state_19507;var statearr_19509_19525 = state_19507__$1;(statearr_19509_19525[2] = inst_19503);
(statearr_19509_19525[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19508 === 6))
{var inst_19496 = (state_19507[7]);var inst_19493 = (state_19507[8]);var inst_19500 = f.call(null,inst_19493,inst_19496);var inst_19493__$1 = inst_19500;var state_19507__$1 = (function (){var statearr_19510 = state_19507;(statearr_19510[8] = inst_19493__$1);
return statearr_19510;
})();var statearr_19511_19526 = state_19507__$1;(statearr_19511_19526[2] = null);
(statearr_19511_19526[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19508 === 5))
{var inst_19493 = (state_19507[8]);var state_19507__$1 = state_19507;var statearr_19512_19527 = state_19507__$1;(statearr_19512_19527[2] = inst_19493);
(statearr_19512_19527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19508 === 4))
{var inst_19496 = (state_19507[7]);var inst_19496__$1 = (state_19507[2]);var inst_19497 = (inst_19496__$1 == null);var state_19507__$1 = (function (){var statearr_19513 = state_19507;(statearr_19513[7] = inst_19496__$1);
return statearr_19513;
})();if(cljs.core.truth_(inst_19497))
{var statearr_19514_19528 = state_19507__$1;(statearr_19514_19528[1] = 5);
} else
{var statearr_19515_19529 = state_19507__$1;(statearr_19515_19529[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19508 === 3))
{var inst_19505 = (state_19507[2]);var state_19507__$1 = state_19507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19507__$1,inst_19505);
} else
{if((state_val_19508 === 2))
{var state_19507__$1 = state_19507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19507__$1,4,ch);
} else
{if((state_val_19508 === 1))
{var inst_19493 = init;var state_19507__$1 = (function (){var statearr_19516 = state_19507;(statearr_19516[8] = inst_19493);
return statearr_19516;
})();var statearr_19517_19530 = state_19507__$1;(statearr_19517_19530[2] = null);
(statearr_19517_19530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_19521 = [null,null,null,null,null,null,null,null,null];(statearr_19521[0] = state_machine__16539__auto__);
(statearr_19521[1] = 1);
return statearr_19521;
});
var state_machine__16539__auto____1 = (function (state_19507){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_19507);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e19522){if((e19522 instanceof Object))
{var ex__16542__auto__ = e19522;var statearr_19523_19531 = state_19507;(statearr_19523_19531[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19507);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19532 = state_19507;
state_19507 = G__19532;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_19507){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_19507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_19524 = f__16603__auto__.call(null);(statearr_19524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto__);
return statearr_19524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return c__16602__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__16602__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_19594){var state_val_19595 = (state_19594[1]);if((state_val_19595 === 7))
{var inst_19575 = (state_19594[7]);var inst_19580 = (state_19594[2]);var inst_19581 = cljs.core.next.call(null,inst_19575);var inst_19575__$1 = inst_19581;var state_19594__$1 = (function (){var statearr_19596 = state_19594;(statearr_19596[8] = inst_19580);
(statearr_19596[7] = inst_19575__$1);
return statearr_19596;
})();var statearr_19597_19615 = state_19594__$1;(statearr_19597_19615[2] = null);
(statearr_19597_19615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19595 === 1))
{var inst_19574 = cljs.core.seq.call(null,coll);var inst_19575 = inst_19574;var state_19594__$1 = (function (){var statearr_19598 = state_19594;(statearr_19598[7] = inst_19575);
return statearr_19598;
})();var statearr_19599_19616 = state_19594__$1;(statearr_19599_19616[2] = null);
(statearr_19599_19616[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19595 === 4))
{var inst_19575 = (state_19594[7]);var inst_19578 = cljs.core.first.call(null,inst_19575);var state_19594__$1 = state_19594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19594__$1,7,ch,inst_19578);
} else
{if((state_val_19595 === 6))
{var inst_19590 = (state_19594[2]);var state_19594__$1 = state_19594;var statearr_19600_19617 = state_19594__$1;(statearr_19600_19617[2] = inst_19590);
(statearr_19600_19617[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19595 === 3))
{var inst_19592 = (state_19594[2]);var state_19594__$1 = state_19594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19594__$1,inst_19592);
} else
{if((state_val_19595 === 2))
{var inst_19575 = (state_19594[7]);var state_19594__$1 = state_19594;if(cljs.core.truth_(inst_19575))
{var statearr_19601_19618 = state_19594__$1;(statearr_19601_19618[1] = 4);
} else
{var statearr_19602_19619 = state_19594__$1;(statearr_19602_19619[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19595 === 9))
{var state_19594__$1 = state_19594;var statearr_19603_19620 = state_19594__$1;(statearr_19603_19620[2] = null);
(statearr_19603_19620[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19595 === 5))
{var state_19594__$1 = state_19594;if(cljs.core.truth_(close_QMARK_))
{var statearr_19604_19621 = state_19594__$1;(statearr_19604_19621[1] = 8);
} else
{var statearr_19605_19622 = state_19594__$1;(statearr_19605_19622[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19595 === 10))
{var inst_19588 = (state_19594[2]);var state_19594__$1 = state_19594;var statearr_19606_19623 = state_19594__$1;(statearr_19606_19623[2] = inst_19588);
(statearr_19606_19623[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19595 === 8))
{var inst_19585 = cljs.core.async.close_BANG_.call(null,ch);var state_19594__$1 = state_19594;var statearr_19607_19624 = state_19594__$1;(statearr_19607_19624[2] = inst_19585);
(statearr_19607_19624[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_19611 = [null,null,null,null,null,null,null,null,null];(statearr_19611[0] = state_machine__16539__auto__);
(statearr_19611[1] = 1);
return statearr_19611;
});
var state_machine__16539__auto____1 = (function (state_19594){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_19594);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e19612){if((e19612 instanceof Object))
{var ex__16542__auto__ = e19612;var statearr_19613_19625 = state_19594;(statearr_19613_19625[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19594);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19612;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__19626 = state_19594;
state_19594 = G__19626;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_19594){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_19594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_19614 = f__16603__auto__.call(null);(statearr_19614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto__);
return statearr_19614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return c__16602__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj19628 = {};return obj19628;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__9494__auto__ = _;if(and__9494__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__9494__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__10133__auto__ = (((_ == null))?null:_);return (function (){var or__9506__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__10133__auto__)]);if(or__9506__auto__)
{return or__9506__auto__;
} else
{var or__9506__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__9506__auto____$1)
{return or__9506__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj19630 = {};return obj19630;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__9494__auto__ = m;if(and__9494__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__9494__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__10133__auto__ = (((m == null))?null:m);return (function (){var or__9506__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__10133__auto__)]);if(or__9506__auto__)
{return or__9506__auto__;
} else
{var or__9506__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__9506__auto____$1)
{return or__9506__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__9494__auto__ = m;if(and__9494__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__9494__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__10133__auto__ = (((m == null))?null:m);return (function (){var or__9506__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__10133__auto__)]);if(or__9506__auto__)
{return or__9506__auto__;
} else
{var or__9506__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__9506__auto____$1)
{return or__9506__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__9494__auto__ = m;if(and__9494__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__9494__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__10133__auto__ = (((m == null))?null:m);return (function (){var or__9506__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__10133__auto__)]);if(or__9506__auto__)
{return or__9506__auto__;
} else
{var or__9506__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__9506__auto____$1)
{return or__9506__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19854 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19854 = (function (cs,ch,mult,meta19855){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19855 = meta19855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19854.cljs$lang$type = true;
cljs.core.async.t19854.cljs$lang$ctorStr = "cljs.core.async/t19854";
cljs.core.async.t19854.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__10073__auto__,writer__10074__auto__,opt__10075__auto__){return cljs.core._write.call(null,writer__10074__auto__,"cljs.core.async/t19854");
});})(cs))
;
cljs.core.async.t19854.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19854.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19854.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19854.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19854.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19854.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19856){var self__ = this;
var _19856__$1 = this;return self__.meta19855;
});})(cs))
;
cljs.core.async.t19854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19856,meta19855__$1){var self__ = this;
var _19856__$1 = this;return (new cljs.core.async.t19854(self__.cs,self__.ch,self__.mult,meta19855__$1));
});})(cs))
;
cljs.core.async.__GT_t19854 = ((function (cs){
return (function __GT_t19854(cs__$1,ch__$1,mult__$1,meta19855){return (new cljs.core.async.t19854(cs__$1,ch__$1,mult__$1,meta19855));
});})(cs))
;
}
return (new cljs.core.async.t19854(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__16602__auto___20077 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_19991){var state_val_19992 = (state_19991[1]);if((state_val_19992 === 7))
{var inst_19987 = (state_19991[2]);var state_19991__$1 = state_19991;var statearr_19993_20078 = state_19991__$1;(statearr_19993_20078[2] = inst_19987);
(statearr_19993_20078[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 20))
{var inst_19888 = (state_19991[7]);var inst_19898 = cljs.core.first.call(null,inst_19888);var inst_19899 = cljs.core.nth.call(null,inst_19898,0,null);var inst_19900 = cljs.core.nth.call(null,inst_19898,1,null);var state_19991__$1 = (function (){var statearr_19994 = state_19991;(statearr_19994[8] = inst_19899);
return statearr_19994;
})();if(cljs.core.truth_(inst_19900))
{var statearr_19995_20079 = state_19991__$1;(statearr_19995_20079[1] = 22);
} else
{var statearr_19996_20080 = state_19991__$1;(statearr_19996_20080[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 27))
{var inst_19930 = (state_19991[9]);var inst_19928 = (state_19991[10]);var inst_19935 = cljs.core._nth.call(null,inst_19928,inst_19930);var state_19991__$1 = (function (){var statearr_19997 = state_19991;(statearr_19997[11] = inst_19935);
return statearr_19997;
})();var statearr_19998_20081 = state_19991__$1;(statearr_19998_20081[2] = null);
(statearr_19998_20081[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 1))
{var state_19991__$1 = state_19991;var statearr_19999_20082 = state_19991__$1;(statearr_19999_20082[2] = null);
(statearr_19999_20082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 24))
{var inst_19888 = (state_19991[7]);var inst_19905 = (state_19991[2]);var inst_19906 = cljs.core.next.call(null,inst_19888);var inst_19868 = inst_19906;var inst_19869 = null;var inst_19870 = 0;var inst_19871 = 0;var state_19991__$1 = (function (){var statearr_20000 = state_19991;(statearr_20000[12] = inst_19870);
(statearr_20000[13] = inst_19905);
(statearr_20000[14] = inst_19869);
(statearr_20000[15] = inst_19871);
(statearr_20000[16] = inst_19868);
return statearr_20000;
})();var statearr_20001_20083 = state_19991__$1;(statearr_20001_20083[2] = null);
(statearr_20001_20083[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 39))
{var inst_19948 = (state_19991[17]);var inst_19966 = (state_19991[2]);var inst_19967 = cljs.core.next.call(null,inst_19948);var inst_19927 = inst_19967;var inst_19928 = null;var inst_19929 = 0;var inst_19930 = 0;var state_19991__$1 = (function (){var statearr_20005 = state_19991;(statearr_20005[18] = inst_19966);
(statearr_20005[19] = inst_19927);
(statearr_20005[9] = inst_19930);
(statearr_20005[20] = inst_19929);
(statearr_20005[10] = inst_19928);
return statearr_20005;
})();var statearr_20006_20084 = state_19991__$1;(statearr_20006_20084[2] = null);
(statearr_20006_20084[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 4))
{var inst_19859 = (state_19991[21]);var inst_19859__$1 = (state_19991[2]);var inst_19860 = (inst_19859__$1 == null);var state_19991__$1 = (function (){var statearr_20007 = state_19991;(statearr_20007[21] = inst_19859__$1);
return statearr_20007;
})();if(cljs.core.truth_(inst_19860))
{var statearr_20008_20085 = state_19991__$1;(statearr_20008_20085[1] = 5);
} else
{var statearr_20009_20086 = state_19991__$1;(statearr_20009_20086[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 15))
{var inst_19870 = (state_19991[12]);var inst_19869 = (state_19991[14]);var inst_19871 = (state_19991[15]);var inst_19868 = (state_19991[16]);var inst_19884 = (state_19991[2]);var inst_19885 = (inst_19871 + 1);var tmp20002 = inst_19870;var tmp20003 = inst_19869;var tmp20004 = inst_19868;var inst_19868__$1 = tmp20004;var inst_19869__$1 = tmp20003;var inst_19870__$1 = tmp20002;var inst_19871__$1 = inst_19885;var state_19991__$1 = (function (){var statearr_20010 = state_19991;(statearr_20010[12] = inst_19870__$1);
(statearr_20010[14] = inst_19869__$1);
(statearr_20010[22] = inst_19884);
(statearr_20010[15] = inst_19871__$1);
(statearr_20010[16] = inst_19868__$1);
return statearr_20010;
})();var statearr_20011_20087 = state_19991__$1;(statearr_20011_20087[2] = null);
(statearr_20011_20087[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 21))
{var inst_19909 = (state_19991[2]);var state_19991__$1 = state_19991;var statearr_20012_20088 = state_19991__$1;(statearr_20012_20088[2] = inst_19909);
(statearr_20012_20088[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 31))
{var inst_19935 = (state_19991[11]);var inst_19936 = (state_19991[2]);var inst_19937 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19938 = cljs.core.async.untap_STAR_.call(null,m,inst_19935);var state_19991__$1 = (function (){var statearr_20013 = state_19991;(statearr_20013[23] = inst_19936);
(statearr_20013[24] = inst_19937);
return statearr_20013;
})();var statearr_20014_20089 = state_19991__$1;(statearr_20014_20089[2] = inst_19938);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19991__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 32))
{var inst_19859 = (state_19991[21]);var inst_19935 = (state_19991[11]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19991,31,Object,null,30);var inst_19942 = cljs.core.async.put_BANG_.call(null,inst_19935,inst_19859,done);var state_19991__$1 = state_19991;var statearr_20015_20090 = state_19991__$1;(statearr_20015_20090[2] = inst_19942);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19991__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 40))
{var inst_19957 = (state_19991[25]);var inst_19958 = (state_19991[2]);var inst_19959 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19960 = cljs.core.async.untap_STAR_.call(null,m,inst_19957);var state_19991__$1 = (function (){var statearr_20016 = state_19991;(statearr_20016[26] = inst_19958);
(statearr_20016[27] = inst_19959);
return statearr_20016;
})();var statearr_20017_20091 = state_19991__$1;(statearr_20017_20091[2] = inst_19960);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19991__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 33))
{var inst_19948 = (state_19991[17]);var inst_19950 = cljs.core.chunked_seq_QMARK_.call(null,inst_19948);var state_19991__$1 = state_19991;if(inst_19950)
{var statearr_20018_20092 = state_19991__$1;(statearr_20018_20092[1] = 36);
} else
{var statearr_20019_20093 = state_19991__$1;(statearr_20019_20093[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 13))
{var inst_19878 = (state_19991[28]);var inst_19881 = cljs.core.async.close_BANG_.call(null,inst_19878);var state_19991__$1 = state_19991;var statearr_20020_20094 = state_19991__$1;(statearr_20020_20094[2] = inst_19881);
(statearr_20020_20094[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 22))
{var inst_19899 = (state_19991[8]);var inst_19902 = cljs.core.async.close_BANG_.call(null,inst_19899);var state_19991__$1 = state_19991;var statearr_20021_20095 = state_19991__$1;(statearr_20021_20095[2] = inst_19902);
(statearr_20021_20095[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 36))
{var inst_19948 = (state_19991[17]);var inst_19952 = cljs.core.chunk_first.call(null,inst_19948);var inst_19953 = cljs.core.chunk_rest.call(null,inst_19948);var inst_19954 = cljs.core.count.call(null,inst_19952);var inst_19927 = inst_19953;var inst_19928 = inst_19952;var inst_19929 = inst_19954;var inst_19930 = 0;var state_19991__$1 = (function (){var statearr_20022 = state_19991;(statearr_20022[19] = inst_19927);
(statearr_20022[9] = inst_19930);
(statearr_20022[20] = inst_19929);
(statearr_20022[10] = inst_19928);
return statearr_20022;
})();var statearr_20023_20096 = state_19991__$1;(statearr_20023_20096[2] = null);
(statearr_20023_20096[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 41))
{var inst_19957 = (state_19991[25]);var inst_19859 = (state_19991[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19991,40,Object,null,39);var inst_19964 = cljs.core.async.put_BANG_.call(null,inst_19957,inst_19859,done);var state_19991__$1 = state_19991;var statearr_20024_20097 = state_19991__$1;(statearr_20024_20097[2] = inst_19964);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19991__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 43))
{var state_19991__$1 = state_19991;var statearr_20025_20098 = state_19991__$1;(statearr_20025_20098[2] = null);
(statearr_20025_20098[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 29))
{var inst_19975 = (state_19991[2]);var state_19991__$1 = state_19991;var statearr_20026_20099 = state_19991__$1;(statearr_20026_20099[2] = inst_19975);
(statearr_20026_20099[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 44))
{var inst_19984 = (state_19991[2]);var state_19991__$1 = (function (){var statearr_20027 = state_19991;(statearr_20027[29] = inst_19984);
return statearr_20027;
})();var statearr_20028_20100 = state_19991__$1;(statearr_20028_20100[2] = null);
(statearr_20028_20100[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 6))
{var inst_19919 = (state_19991[30]);var inst_19918 = cljs.core.deref.call(null,cs);var inst_19919__$1 = cljs.core.keys.call(null,inst_19918);var inst_19920 = cljs.core.count.call(null,inst_19919__$1);var inst_19921 = cljs.core.reset_BANG_.call(null,dctr,inst_19920);var inst_19926 = cljs.core.seq.call(null,inst_19919__$1);var inst_19927 = inst_19926;var inst_19928 = null;var inst_19929 = 0;var inst_19930 = 0;var state_19991__$1 = (function (){var statearr_20029 = state_19991;(statearr_20029[31] = inst_19921);
(statearr_20029[19] = inst_19927);
(statearr_20029[9] = inst_19930);
(statearr_20029[20] = inst_19929);
(statearr_20029[10] = inst_19928);
(statearr_20029[30] = inst_19919__$1);
return statearr_20029;
})();var statearr_20030_20101 = state_19991__$1;(statearr_20030_20101[2] = null);
(statearr_20030_20101[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 28))
{var inst_19948 = (state_19991[17]);var inst_19927 = (state_19991[19]);var inst_19948__$1 = cljs.core.seq.call(null,inst_19927);var state_19991__$1 = (function (){var statearr_20031 = state_19991;(statearr_20031[17] = inst_19948__$1);
return statearr_20031;
})();if(inst_19948__$1)
{var statearr_20032_20102 = state_19991__$1;(statearr_20032_20102[1] = 33);
} else
{var statearr_20033_20103 = state_19991__$1;(statearr_20033_20103[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 25))
{var inst_19930 = (state_19991[9]);var inst_19929 = (state_19991[20]);var inst_19932 = (inst_19930 < inst_19929);var inst_19933 = inst_19932;var state_19991__$1 = state_19991;if(cljs.core.truth_(inst_19933))
{var statearr_20034_20104 = state_19991__$1;(statearr_20034_20104[1] = 27);
} else
{var statearr_20035_20105 = state_19991__$1;(statearr_20035_20105[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 34))
{var state_19991__$1 = state_19991;var statearr_20036_20106 = state_19991__$1;(statearr_20036_20106[2] = null);
(statearr_20036_20106[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 17))
{var state_19991__$1 = state_19991;var statearr_20037_20107 = state_19991__$1;(statearr_20037_20107[2] = null);
(statearr_20037_20107[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 3))
{var inst_19989 = (state_19991[2]);var state_19991__$1 = state_19991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19991__$1,inst_19989);
} else
{if((state_val_19992 === 12))
{var inst_19914 = (state_19991[2]);var state_19991__$1 = state_19991;var statearr_20038_20108 = state_19991__$1;(statearr_20038_20108[2] = inst_19914);
(statearr_20038_20108[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 2))
{var state_19991__$1 = state_19991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19991__$1,4,ch);
} else
{if((state_val_19992 === 23))
{var state_19991__$1 = state_19991;var statearr_20039_20109 = state_19991__$1;(statearr_20039_20109[2] = null);
(statearr_20039_20109[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 35))
{var inst_19973 = (state_19991[2]);var state_19991__$1 = state_19991;var statearr_20040_20110 = state_19991__$1;(statearr_20040_20110[2] = inst_19973);
(statearr_20040_20110[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 19))
{var inst_19888 = (state_19991[7]);var inst_19892 = cljs.core.chunk_first.call(null,inst_19888);var inst_19893 = cljs.core.chunk_rest.call(null,inst_19888);var inst_19894 = cljs.core.count.call(null,inst_19892);var inst_19868 = inst_19893;var inst_19869 = inst_19892;var inst_19870 = inst_19894;var inst_19871 = 0;var state_19991__$1 = (function (){var statearr_20041 = state_19991;(statearr_20041[12] = inst_19870);
(statearr_20041[14] = inst_19869);
(statearr_20041[15] = inst_19871);
(statearr_20041[16] = inst_19868);
return statearr_20041;
})();var statearr_20042_20111 = state_19991__$1;(statearr_20042_20111[2] = null);
(statearr_20042_20111[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 11))
{var inst_19888 = (state_19991[7]);var inst_19868 = (state_19991[16]);var inst_19888__$1 = cljs.core.seq.call(null,inst_19868);var state_19991__$1 = (function (){var statearr_20043 = state_19991;(statearr_20043[7] = inst_19888__$1);
return statearr_20043;
})();if(inst_19888__$1)
{var statearr_20044_20112 = state_19991__$1;(statearr_20044_20112[1] = 16);
} else
{var statearr_20045_20113 = state_19991__$1;(statearr_20045_20113[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 9))
{var inst_19916 = (state_19991[2]);var state_19991__$1 = state_19991;var statearr_20046_20114 = state_19991__$1;(statearr_20046_20114[2] = inst_19916);
(statearr_20046_20114[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 5))
{var inst_19866 = cljs.core.deref.call(null,cs);var inst_19867 = cljs.core.seq.call(null,inst_19866);var inst_19868 = inst_19867;var inst_19869 = null;var inst_19870 = 0;var inst_19871 = 0;var state_19991__$1 = (function (){var statearr_20047 = state_19991;(statearr_20047[12] = inst_19870);
(statearr_20047[14] = inst_19869);
(statearr_20047[15] = inst_19871);
(statearr_20047[16] = inst_19868);
return statearr_20047;
})();var statearr_20048_20115 = state_19991__$1;(statearr_20048_20115[2] = null);
(statearr_20048_20115[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 14))
{var state_19991__$1 = state_19991;var statearr_20049_20116 = state_19991__$1;(statearr_20049_20116[2] = null);
(statearr_20049_20116[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 45))
{var inst_19981 = (state_19991[2]);var state_19991__$1 = state_19991;var statearr_20050_20117 = state_19991__$1;(statearr_20050_20117[2] = inst_19981);
(statearr_20050_20117[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 26))
{var inst_19919 = (state_19991[30]);var inst_19977 = (state_19991[2]);var inst_19978 = cljs.core.seq.call(null,inst_19919);var state_19991__$1 = (function (){var statearr_20051 = state_19991;(statearr_20051[32] = inst_19977);
return statearr_20051;
})();if(inst_19978)
{var statearr_20052_20118 = state_19991__$1;(statearr_20052_20118[1] = 42);
} else
{var statearr_20053_20119 = state_19991__$1;(statearr_20053_20119[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 16))
{var inst_19888 = (state_19991[7]);var inst_19890 = cljs.core.chunked_seq_QMARK_.call(null,inst_19888);var state_19991__$1 = state_19991;if(inst_19890)
{var statearr_20057_20120 = state_19991__$1;(statearr_20057_20120[1] = 19);
} else
{var statearr_20058_20121 = state_19991__$1;(statearr_20058_20121[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 38))
{var inst_19970 = (state_19991[2]);var state_19991__$1 = state_19991;var statearr_20059_20122 = state_19991__$1;(statearr_20059_20122[2] = inst_19970);
(statearr_20059_20122[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 30))
{var inst_19927 = (state_19991[19]);var inst_19930 = (state_19991[9]);var inst_19929 = (state_19991[20]);var inst_19928 = (state_19991[10]);var inst_19944 = (state_19991[2]);var inst_19945 = (inst_19930 + 1);var tmp20054 = inst_19927;var tmp20055 = inst_19929;var tmp20056 = inst_19928;var inst_19927__$1 = tmp20054;var inst_19928__$1 = tmp20056;var inst_19929__$1 = tmp20055;var inst_19930__$1 = inst_19945;var state_19991__$1 = (function (){var statearr_20060 = state_19991;(statearr_20060[19] = inst_19927__$1);
(statearr_20060[9] = inst_19930__$1);
(statearr_20060[20] = inst_19929__$1);
(statearr_20060[10] = inst_19928__$1);
(statearr_20060[33] = inst_19944);
return statearr_20060;
})();var statearr_20061_20123 = state_19991__$1;(statearr_20061_20123[2] = null);
(statearr_20061_20123[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 10))
{var inst_19869 = (state_19991[14]);var inst_19871 = (state_19991[15]);var inst_19877 = cljs.core._nth.call(null,inst_19869,inst_19871);var inst_19878 = cljs.core.nth.call(null,inst_19877,0,null);var inst_19879 = cljs.core.nth.call(null,inst_19877,1,null);var state_19991__$1 = (function (){var statearr_20062 = state_19991;(statearr_20062[28] = inst_19878);
return statearr_20062;
})();if(cljs.core.truth_(inst_19879))
{var statearr_20063_20124 = state_19991__$1;(statearr_20063_20124[1] = 13);
} else
{var statearr_20064_20125 = state_19991__$1;(statearr_20064_20125[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 18))
{var inst_19912 = (state_19991[2]);var state_19991__$1 = state_19991;var statearr_20065_20126 = state_19991__$1;(statearr_20065_20126[2] = inst_19912);
(statearr_20065_20126[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 42))
{var state_19991__$1 = state_19991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19991__$1,45,dchan);
} else
{if((state_val_19992 === 37))
{var inst_19948 = (state_19991[17]);var inst_19957 = cljs.core.first.call(null,inst_19948);var state_19991__$1 = (function (){var statearr_20066 = state_19991;(statearr_20066[25] = inst_19957);
return statearr_20066;
})();var statearr_20067_20127 = state_19991__$1;(statearr_20067_20127[2] = null);
(statearr_20067_20127[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_19992 === 8))
{var inst_19870 = (state_19991[12]);var inst_19871 = (state_19991[15]);var inst_19873 = (inst_19871 < inst_19870);var inst_19874 = inst_19873;var state_19991__$1 = state_19991;if(cljs.core.truth_(inst_19874))
{var statearr_20068_20128 = state_19991__$1;(statearr_20068_20128[1] = 10);
} else
{var statearr_20069_20129 = state_19991__$1;(statearr_20069_20129[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_20073 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20073[0] = state_machine__16539__auto__);
(statearr_20073[1] = 1);
return statearr_20073;
});
var state_machine__16539__auto____1 = (function (state_19991){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_19991);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e20074){if((e20074 instanceof Object))
{var ex__16542__auto__ = e20074;var statearr_20075_20130 = state_19991;(statearr_20075_20130[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19991);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20074;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20131 = state_19991;
state_19991 = G__20131;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_19991){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_19991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_20076 = f__16603__auto__.call(null);(statearr_20076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto___20077);
return statearr_20076;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj20133 = {};return obj20133;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__9494__auto__ = m;if(and__9494__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__9494__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__10133__auto__ = (((m == null))?null:m);return (function (){var or__9506__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__10133__auto__)]);if(or__9506__auto__)
{return or__9506__auto__;
} else
{var or__9506__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__9506__auto____$1)
{return or__9506__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__9494__auto__ = m;if(and__9494__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__9494__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__10133__auto__ = (((m == null))?null:m);return (function (){var or__9506__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__10133__auto__)]);if(or__9506__auto__)
{return or__9506__auto__;
} else
{var or__9506__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__9506__auto____$1)
{return or__9506__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__9494__auto__ = m;if(and__9494__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__9494__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__10133__auto__ = (((m == null))?null:m);return (function (){var or__9506__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__10133__auto__)]);if(or__9506__auto__)
{return or__9506__auto__;
} else
{var or__9506__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__9506__auto____$1)
{return or__9506__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__9494__auto__ = m;if(and__9494__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__9494__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__10133__auto__ = (((m == null))?null:m);return (function (){var or__9506__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__10133__auto__)]);if(or__9506__auto__)
{return or__9506__auto__;
} else
{var or__9506__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__9506__auto____$1)
{return or__9506__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__9494__auto__ = m;if(and__9494__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__9494__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__10133__auto__ = (((m == null))?null:m);return (function (){var or__9506__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__10133__auto__)]);if(or__9506__auto__)
{return or__9506__auto__;
} else
{var or__9506__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__9506__auto____$1)
{return or__9506__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t20243 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20243 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta20244){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta20244 = meta20244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20243.cljs$lang$type = true;
cljs.core.async.t20243.cljs$lang$ctorStr = "cljs.core.async/t20243";
cljs.core.async.t20243.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__10073__auto__,writer__10074__auto__,opt__10075__auto__){return cljs.core._write.call(null,writer__10074__auto__,"cljs.core.async/t20243");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20243.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t20243.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20243.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20243.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20243.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20243.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20243.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20243.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20243.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20245){var self__ = this;
var _20245__$1 = this;return self__.meta20244;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t20243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_20245,meta20244__$1){var self__ = this;
var _20245__$1 = this;return (new cljs.core.async.t20243(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta20244__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t20243 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t20243(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20244){return (new cljs.core.async.t20243(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta20244));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t20243(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__16602__auto___20352 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_20310){var state_val_20311 = (state_20310[1]);if((state_val_20311 === 7))
{var inst_20259 = (state_20310[7]);var inst_20264 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20259);var state_20310__$1 = state_20310;var statearr_20312_20353 = state_20310__$1;(statearr_20312_20353[2] = inst_20264);
(statearr_20312_20353[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 20))
{var inst_20274 = (state_20310[8]);var state_20310__$1 = state_20310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20310__$1,23,out,inst_20274);
} else
{if((state_val_20311 === 1))
{var inst_20249 = (state_20310[9]);var inst_20249__$1 = calc_state.call(null);var inst_20250 = cljs.core.seq_QMARK_.call(null,inst_20249__$1);var state_20310__$1 = (function (){var statearr_20313 = state_20310;(statearr_20313[9] = inst_20249__$1);
return statearr_20313;
})();if(inst_20250)
{var statearr_20314_20354 = state_20310__$1;(statearr_20314_20354[1] = 2);
} else
{var statearr_20315_20355 = state_20310__$1;(statearr_20315_20355[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 4))
{var inst_20249 = (state_20310[9]);var inst_20255 = (state_20310[2]);var inst_20256 = cljs.core.get.call(null,inst_20255,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_20257 = cljs.core.get.call(null,inst_20255,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_20258 = cljs.core.get.call(null,inst_20255,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_20259 = inst_20249;var state_20310__$1 = (function (){var statearr_20316 = state_20310;(statearr_20316[10] = inst_20256);
(statearr_20316[11] = inst_20258);
(statearr_20316[7] = inst_20259);
(statearr_20316[12] = inst_20257);
return statearr_20316;
})();var statearr_20317_20356 = state_20310__$1;(statearr_20317_20356[2] = null);
(statearr_20317_20356[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 15))
{var state_20310__$1 = state_20310;var statearr_20318_20357 = state_20310__$1;(statearr_20318_20357[2] = null);
(statearr_20318_20357[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 21))
{var state_20310__$1 = state_20310;var statearr_20319_20358 = state_20310__$1;(statearr_20319_20358[2] = null);
(statearr_20319_20358[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 13))
{var inst_20306 = (state_20310[2]);var state_20310__$1 = state_20310;var statearr_20320_20359 = state_20310__$1;(statearr_20320_20359[2] = inst_20306);
(statearr_20320_20359[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 22))
{var inst_20267 = (state_20310[13]);var inst_20303 = (state_20310[2]);var inst_20259 = inst_20267;var state_20310__$1 = (function (){var statearr_20321 = state_20310;(statearr_20321[7] = inst_20259);
(statearr_20321[14] = inst_20303);
return statearr_20321;
})();var statearr_20322_20360 = state_20310__$1;(statearr_20322_20360[2] = null);
(statearr_20322_20360[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 6))
{var inst_20308 = (state_20310[2]);var state_20310__$1 = state_20310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20310__$1,inst_20308);
} else
{if((state_val_20311 === 17))
{var inst_20289 = (state_20310[15]);var state_20310__$1 = state_20310;var statearr_20323_20361 = state_20310__$1;(statearr_20323_20361[2] = inst_20289);
(statearr_20323_20361[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 3))
{var inst_20249 = (state_20310[9]);var state_20310__$1 = state_20310;var statearr_20324_20362 = state_20310__$1;(statearr_20324_20362[2] = inst_20249);
(statearr_20324_20362[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 12))
{var inst_20275 = (state_20310[16]);var inst_20270 = (state_20310[17]);var inst_20289 = (state_20310[15]);var inst_20289__$1 = inst_20270.call(null,inst_20275);var state_20310__$1 = (function (){var statearr_20325 = state_20310;(statearr_20325[15] = inst_20289__$1);
return statearr_20325;
})();if(cljs.core.truth_(inst_20289__$1))
{var statearr_20326_20363 = state_20310__$1;(statearr_20326_20363[1] = 17);
} else
{var statearr_20327_20364 = state_20310__$1;(statearr_20327_20364[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 2))
{var inst_20249 = (state_20310[9]);var inst_20252 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20249);var state_20310__$1 = state_20310;var statearr_20328_20365 = state_20310__$1;(statearr_20328_20365[2] = inst_20252);
(statearr_20328_20365[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 23))
{var inst_20300 = (state_20310[2]);var state_20310__$1 = state_20310;var statearr_20329_20366 = state_20310__$1;(statearr_20329_20366[2] = inst_20300);
(statearr_20329_20366[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 19))
{var inst_20297 = (state_20310[2]);var state_20310__$1 = state_20310;if(cljs.core.truth_(inst_20297))
{var statearr_20330_20367 = state_20310__$1;(statearr_20330_20367[1] = 20);
} else
{var statearr_20331_20368 = state_20310__$1;(statearr_20331_20368[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 11))
{var inst_20274 = (state_20310[8]);var inst_20280 = (inst_20274 == null);var state_20310__$1 = state_20310;if(cljs.core.truth_(inst_20280))
{var statearr_20332_20369 = state_20310__$1;(statearr_20332_20369[1] = 14);
} else
{var statearr_20333_20370 = state_20310__$1;(statearr_20333_20370[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 9))
{var inst_20267 = (state_20310[13]);var inst_20267__$1 = (state_20310[2]);var inst_20268 = cljs.core.get.call(null,inst_20267__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_20269 = cljs.core.get.call(null,inst_20267__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_20270 = cljs.core.get.call(null,inst_20267__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_20310__$1 = (function (){var statearr_20334 = state_20310;(statearr_20334[18] = inst_20269);
(statearr_20334[17] = inst_20270);
(statearr_20334[13] = inst_20267__$1);
return statearr_20334;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20310__$1,10,inst_20268);
} else
{if((state_val_20311 === 5))
{var inst_20259 = (state_20310[7]);var inst_20262 = cljs.core.seq_QMARK_.call(null,inst_20259);var state_20310__$1 = state_20310;if(inst_20262)
{var statearr_20335_20371 = state_20310__$1;(statearr_20335_20371[1] = 7);
} else
{var statearr_20336_20372 = state_20310__$1;(statearr_20336_20372[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 14))
{var inst_20275 = (state_20310[16]);var inst_20282 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_20275);var state_20310__$1 = state_20310;var statearr_20337_20373 = state_20310__$1;(statearr_20337_20373[2] = inst_20282);
(statearr_20337_20373[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 16))
{var inst_20285 = (state_20310[2]);var inst_20286 = calc_state.call(null);var inst_20259 = inst_20286;var state_20310__$1 = (function (){var statearr_20338 = state_20310;(statearr_20338[19] = inst_20285);
(statearr_20338[7] = inst_20259);
return statearr_20338;
})();var statearr_20339_20374 = state_20310__$1;(statearr_20339_20374[2] = null);
(statearr_20339_20374[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 10))
{var inst_20275 = (state_20310[16]);var inst_20274 = (state_20310[8]);var inst_20273 = (state_20310[2]);var inst_20274__$1 = cljs.core.nth.call(null,inst_20273,0,null);var inst_20275__$1 = cljs.core.nth.call(null,inst_20273,1,null);var inst_20276 = (inst_20274__$1 == null);var inst_20277 = cljs.core._EQ_.call(null,inst_20275__$1,change);var inst_20278 = (inst_20276) || (inst_20277);var state_20310__$1 = (function (){var statearr_20340 = state_20310;(statearr_20340[16] = inst_20275__$1);
(statearr_20340[8] = inst_20274__$1);
return statearr_20340;
})();if(cljs.core.truth_(inst_20278))
{var statearr_20341_20375 = state_20310__$1;(statearr_20341_20375[1] = 11);
} else
{var statearr_20342_20376 = state_20310__$1;(statearr_20342_20376[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 18))
{var inst_20275 = (state_20310[16]);var inst_20269 = (state_20310[18]);var inst_20270 = (state_20310[17]);var inst_20292 = cljs.core.empty_QMARK_.call(null,inst_20270);var inst_20293 = inst_20269.call(null,inst_20275);var inst_20294 = cljs.core.not.call(null,inst_20293);var inst_20295 = (inst_20292) && (inst_20294);var state_20310__$1 = state_20310;var statearr_20343_20377 = state_20310__$1;(statearr_20343_20377[2] = inst_20295);
(statearr_20343_20377[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20311 === 8))
{var inst_20259 = (state_20310[7]);var state_20310__$1 = state_20310;var statearr_20344_20378 = state_20310__$1;(statearr_20344_20378[2] = inst_20259);
(statearr_20344_20378[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_20348 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20348[0] = state_machine__16539__auto__);
(statearr_20348[1] = 1);
return statearr_20348;
});
var state_machine__16539__auto____1 = (function (state_20310){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_20310);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e20349){if((e20349 instanceof Object))
{var ex__16542__auto__ = e20349;var statearr_20350_20379 = state_20310;(statearr_20350_20379[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20310);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20349;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20380 = state_20310;
state_20310 = G__20380;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_20310){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_20310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_20351 = f__16603__auto__.call(null);(statearr_20351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto___20352);
return statearr_20351;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj20382 = {};return obj20382;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__9494__auto__ = p;if(and__9494__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__9494__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__10133__auto__ = (((p == null))?null:p);return (function (){var or__9506__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__10133__auto__)]);if(or__9506__auto__)
{return or__9506__auto__;
} else
{var or__9506__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__9506__auto____$1)
{return or__9506__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__9494__auto__ = p;if(and__9494__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__9494__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__10133__auto__ = (((p == null))?null:p);return (function (){var or__9506__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__10133__auto__)]);if(or__9506__auto__)
{return or__9506__auto__;
} else
{var or__9506__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__9506__auto____$1)
{return or__9506__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__9494__auto__ = p;if(and__9494__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__9494__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__10133__auto__ = (((p == null))?null:p);return (function (){var or__9506__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10133__auto__)]);if(or__9506__auto__)
{return or__9506__auto__;
} else
{var or__9506__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9506__auto____$1)
{return or__9506__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__9494__auto__ = p;if(and__9494__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__9494__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__10133__auto__ = (((p == null))?null:p);return (function (){var or__9506__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__10133__auto__)]);if(or__9506__auto__)
{return or__9506__auto__;
} else
{var or__9506__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__9506__auto____$1)
{return or__9506__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__9506__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__9506__auto__))
{return or__9506__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__9506__auto__,mults){
return (function (p1__20383_SHARP_){if(cljs.core.truth_(p1__20383_SHARP_.call(null,topic)))
{return p1__20383_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__20383_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__9506__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20508 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20508 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20509){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20509 = meta20509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20508.cljs$lang$type = true;
cljs.core.async.t20508.cljs$lang$ctorStr = "cljs.core.async/t20508";
cljs.core.async.t20508.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__10073__auto__,writer__10074__auto__,opt__10075__auto__){return cljs.core._write.call(null,writer__10074__auto__,"cljs.core.async/t20508");
});})(mults,ensure_mult))
;
cljs.core.async.t20508.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20508.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20508.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20508.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20508.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20508.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20508.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20508.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20510){var self__ = this;
var _20510__$1 = this;return self__.meta20509;
});})(mults,ensure_mult))
;
cljs.core.async.t20508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20510,meta20509__$1){var self__ = this;
var _20510__$1 = this;return (new cljs.core.async.t20508(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20509__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20508 = ((function (mults,ensure_mult){
return (function __GT_t20508(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20509){return (new cljs.core.async.t20508(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20509));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20508(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__16602__auto___20632 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_20584){var state_val_20585 = (state_20584[1]);if((state_val_20585 === 7))
{var inst_20580 = (state_20584[2]);var state_20584__$1 = state_20584;var statearr_20586_20633 = state_20584__$1;(statearr_20586_20633[2] = inst_20580);
(statearr_20586_20633[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 20))
{var state_20584__$1 = state_20584;var statearr_20587_20634 = state_20584__$1;(statearr_20587_20634[2] = null);
(statearr_20587_20634[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 1))
{var state_20584__$1 = state_20584;var statearr_20588_20635 = state_20584__$1;(statearr_20588_20635[2] = null);
(statearr_20588_20635[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 24))
{var inst_20513 = (state_20584[7]);var inst_20563 = (state_20584[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20584,23,Object,null,22);var inst_20570 = cljs.core.async.muxch_STAR_.call(null,inst_20563);var state_20584__$1 = state_20584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20584__$1,25,inst_20570,inst_20513);
} else
{if((state_val_20585 === 4))
{var inst_20513 = (state_20584[7]);var inst_20513__$1 = (state_20584[2]);var inst_20514 = (inst_20513__$1 == null);var state_20584__$1 = (function (){var statearr_20589 = state_20584;(statearr_20589[7] = inst_20513__$1);
return statearr_20589;
})();if(cljs.core.truth_(inst_20514))
{var statearr_20590_20636 = state_20584__$1;(statearr_20590_20636[1] = 5);
} else
{var statearr_20591_20637 = state_20584__$1;(statearr_20591_20637[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 15))
{var inst_20555 = (state_20584[2]);var state_20584__$1 = state_20584;var statearr_20592_20638 = state_20584__$1;(statearr_20592_20638[2] = inst_20555);
(statearr_20592_20638[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 21))
{var inst_20577 = (state_20584[2]);var state_20584__$1 = (function (){var statearr_20593 = state_20584;(statearr_20593[9] = inst_20577);
return statearr_20593;
})();var statearr_20594_20639 = state_20584__$1;(statearr_20594_20639[2] = null);
(statearr_20594_20639[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 13))
{var inst_20537 = (state_20584[10]);var inst_20539 = cljs.core.chunked_seq_QMARK_.call(null,inst_20537);var state_20584__$1 = state_20584;if(inst_20539)
{var statearr_20595_20640 = state_20584__$1;(statearr_20595_20640[1] = 16);
} else
{var statearr_20596_20641 = state_20584__$1;(statearr_20596_20641[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 22))
{var inst_20574 = (state_20584[2]);var state_20584__$1 = state_20584;var statearr_20597_20642 = state_20584__$1;(statearr_20597_20642[2] = inst_20574);
(statearr_20597_20642[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 6))
{var inst_20561 = (state_20584[11]);var inst_20513 = (state_20584[7]);var inst_20563 = (state_20584[8]);var inst_20561__$1 = topic_fn.call(null,inst_20513);var inst_20562 = cljs.core.deref.call(null,mults);var inst_20563__$1 = cljs.core.get.call(null,inst_20562,inst_20561__$1);var state_20584__$1 = (function (){var statearr_20598 = state_20584;(statearr_20598[11] = inst_20561__$1);
(statearr_20598[8] = inst_20563__$1);
return statearr_20598;
})();if(cljs.core.truth_(inst_20563__$1))
{var statearr_20599_20643 = state_20584__$1;(statearr_20599_20643[1] = 19);
} else
{var statearr_20600_20644 = state_20584__$1;(statearr_20600_20644[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 25))
{var inst_20572 = (state_20584[2]);var state_20584__$1 = state_20584;var statearr_20601_20645 = state_20584__$1;(statearr_20601_20645[2] = inst_20572);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20584__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 17))
{var inst_20537 = (state_20584[10]);var inst_20546 = cljs.core.first.call(null,inst_20537);var inst_20547 = cljs.core.async.muxch_STAR_.call(null,inst_20546);var inst_20548 = cljs.core.async.close_BANG_.call(null,inst_20547);var inst_20549 = cljs.core.next.call(null,inst_20537);var inst_20523 = inst_20549;var inst_20524 = null;var inst_20525 = 0;var inst_20526 = 0;var state_20584__$1 = (function (){var statearr_20602 = state_20584;(statearr_20602[12] = inst_20523);
(statearr_20602[13] = inst_20526);
(statearr_20602[14] = inst_20524);
(statearr_20602[15] = inst_20548);
(statearr_20602[16] = inst_20525);
return statearr_20602;
})();var statearr_20603_20646 = state_20584__$1;(statearr_20603_20646[2] = null);
(statearr_20603_20646[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 3))
{var inst_20582 = (state_20584[2]);var state_20584__$1 = state_20584;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20584__$1,inst_20582);
} else
{if((state_val_20585 === 12))
{var inst_20557 = (state_20584[2]);var state_20584__$1 = state_20584;var statearr_20604_20647 = state_20584__$1;(statearr_20604_20647[2] = inst_20557);
(statearr_20604_20647[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 2))
{var state_20584__$1 = state_20584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20584__$1,4,ch);
} else
{if((state_val_20585 === 23))
{var inst_20561 = (state_20584[11]);var inst_20565 = (state_20584[2]);var inst_20566 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20561);var state_20584__$1 = (function (){var statearr_20605 = state_20584;(statearr_20605[17] = inst_20565);
return statearr_20605;
})();var statearr_20606_20648 = state_20584__$1;(statearr_20606_20648[2] = inst_20566);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20584__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 19))
{var state_20584__$1 = state_20584;var statearr_20607_20649 = state_20584__$1;(statearr_20607_20649[2] = null);
(statearr_20607_20649[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 11))
{var inst_20523 = (state_20584[12]);var inst_20537 = (state_20584[10]);var inst_20537__$1 = cljs.core.seq.call(null,inst_20523);var state_20584__$1 = (function (){var statearr_20608 = state_20584;(statearr_20608[10] = inst_20537__$1);
return statearr_20608;
})();if(inst_20537__$1)
{var statearr_20609_20650 = state_20584__$1;(statearr_20609_20650[1] = 13);
} else
{var statearr_20610_20651 = state_20584__$1;(statearr_20610_20651[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 9))
{var inst_20559 = (state_20584[2]);var state_20584__$1 = state_20584;var statearr_20611_20652 = state_20584__$1;(statearr_20611_20652[2] = inst_20559);
(statearr_20611_20652[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 5))
{var inst_20520 = cljs.core.deref.call(null,mults);var inst_20521 = cljs.core.vals.call(null,inst_20520);var inst_20522 = cljs.core.seq.call(null,inst_20521);var inst_20523 = inst_20522;var inst_20524 = null;var inst_20525 = 0;var inst_20526 = 0;var state_20584__$1 = (function (){var statearr_20612 = state_20584;(statearr_20612[12] = inst_20523);
(statearr_20612[13] = inst_20526);
(statearr_20612[14] = inst_20524);
(statearr_20612[16] = inst_20525);
return statearr_20612;
})();var statearr_20613_20653 = state_20584__$1;(statearr_20613_20653[2] = null);
(statearr_20613_20653[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 14))
{var state_20584__$1 = state_20584;var statearr_20617_20654 = state_20584__$1;(statearr_20617_20654[2] = null);
(statearr_20617_20654[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 16))
{var inst_20537 = (state_20584[10]);var inst_20541 = cljs.core.chunk_first.call(null,inst_20537);var inst_20542 = cljs.core.chunk_rest.call(null,inst_20537);var inst_20543 = cljs.core.count.call(null,inst_20541);var inst_20523 = inst_20542;var inst_20524 = inst_20541;var inst_20525 = inst_20543;var inst_20526 = 0;var state_20584__$1 = (function (){var statearr_20618 = state_20584;(statearr_20618[12] = inst_20523);
(statearr_20618[13] = inst_20526);
(statearr_20618[14] = inst_20524);
(statearr_20618[16] = inst_20525);
return statearr_20618;
})();var statearr_20619_20655 = state_20584__$1;(statearr_20619_20655[2] = null);
(statearr_20619_20655[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 10))
{var inst_20523 = (state_20584[12]);var inst_20526 = (state_20584[13]);var inst_20524 = (state_20584[14]);var inst_20525 = (state_20584[16]);var inst_20531 = cljs.core._nth.call(null,inst_20524,inst_20526);var inst_20532 = cljs.core.async.muxch_STAR_.call(null,inst_20531);var inst_20533 = cljs.core.async.close_BANG_.call(null,inst_20532);var inst_20534 = (inst_20526 + 1);var tmp20614 = inst_20523;var tmp20615 = inst_20524;var tmp20616 = inst_20525;var inst_20523__$1 = tmp20614;var inst_20524__$1 = tmp20615;var inst_20525__$1 = tmp20616;var inst_20526__$1 = inst_20534;var state_20584__$1 = (function (){var statearr_20620 = state_20584;(statearr_20620[12] = inst_20523__$1);
(statearr_20620[18] = inst_20533);
(statearr_20620[13] = inst_20526__$1);
(statearr_20620[14] = inst_20524__$1);
(statearr_20620[16] = inst_20525__$1);
return statearr_20620;
})();var statearr_20621_20656 = state_20584__$1;(statearr_20621_20656[2] = null);
(statearr_20621_20656[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 18))
{var inst_20552 = (state_20584[2]);var state_20584__$1 = state_20584;var statearr_20622_20657 = state_20584__$1;(statearr_20622_20657[2] = inst_20552);
(statearr_20622_20657[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20585 === 8))
{var inst_20526 = (state_20584[13]);var inst_20525 = (state_20584[16]);var inst_20528 = (inst_20526 < inst_20525);var inst_20529 = inst_20528;var state_20584__$1 = state_20584;if(cljs.core.truth_(inst_20529))
{var statearr_20623_20658 = state_20584__$1;(statearr_20623_20658[1] = 10);
} else
{var statearr_20624_20659 = state_20584__$1;(statearr_20624_20659[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_20628 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20628[0] = state_machine__16539__auto__);
(statearr_20628[1] = 1);
return statearr_20628;
});
var state_machine__16539__auto____1 = (function (state_20584){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_20584);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e20629){if((e20629 instanceof Object))
{var ex__16542__auto__ = e20629;var statearr_20630_20660 = state_20584;(statearr_20630_20660[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20584);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20629;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20661 = state_20584;
state_20584 = G__20661;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_20584){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_20584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_20631 = f__16603__auto__.call(null);(statearr_20631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto___20632);
return statearr_20631;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__16602__auto___20798 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_20768){var state_val_20769 = (state_20768[1]);if((state_val_20769 === 7))
{var state_20768__$1 = state_20768;var statearr_20770_20799 = state_20768__$1;(statearr_20770_20799[2] = null);
(statearr_20770_20799[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 1))
{var state_20768__$1 = state_20768;var statearr_20771_20800 = state_20768__$1;(statearr_20771_20800[2] = null);
(statearr_20771_20800[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 4))
{var inst_20732 = (state_20768[7]);var inst_20734 = (inst_20732 < cnt);var state_20768__$1 = state_20768;if(cljs.core.truth_(inst_20734))
{var statearr_20772_20801 = state_20768__$1;(statearr_20772_20801[1] = 6);
} else
{var statearr_20773_20802 = state_20768__$1;(statearr_20773_20802[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 15))
{var inst_20764 = (state_20768[2]);var state_20768__$1 = state_20768;var statearr_20774_20803 = state_20768__$1;(statearr_20774_20803[2] = inst_20764);
(statearr_20774_20803[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 13))
{var inst_20757 = cljs.core.async.close_BANG_.call(null,out);var state_20768__$1 = state_20768;var statearr_20775_20804 = state_20768__$1;(statearr_20775_20804[2] = inst_20757);
(statearr_20775_20804[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 6))
{var state_20768__$1 = state_20768;var statearr_20776_20805 = state_20768__$1;(statearr_20776_20805[2] = null);
(statearr_20776_20805[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 3))
{var inst_20766 = (state_20768[2]);var state_20768__$1 = state_20768;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20768__$1,inst_20766);
} else
{if((state_val_20769 === 12))
{var inst_20754 = (state_20768[8]);var inst_20754__$1 = (state_20768[2]);var inst_20755 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20754__$1);var state_20768__$1 = (function (){var statearr_20777 = state_20768;(statearr_20777[8] = inst_20754__$1);
return statearr_20777;
})();if(cljs.core.truth_(inst_20755))
{var statearr_20778_20806 = state_20768__$1;(statearr_20778_20806[1] = 13);
} else
{var statearr_20779_20807 = state_20768__$1;(statearr_20779_20807[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 2))
{var inst_20731 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20732 = 0;var state_20768__$1 = (function (){var statearr_20780 = state_20768;(statearr_20780[7] = inst_20732);
(statearr_20780[9] = inst_20731);
return statearr_20780;
})();var statearr_20781_20808 = state_20768__$1;(statearr_20781_20808[2] = null);
(statearr_20781_20808[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 11))
{var inst_20732 = (state_20768[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20768,10,Object,null,9);var inst_20741 = chs__$1.call(null,inst_20732);var inst_20742 = done.call(null,inst_20732);var inst_20743 = cljs.core.async.take_BANG_.call(null,inst_20741,inst_20742);var state_20768__$1 = state_20768;var statearr_20782_20809 = state_20768__$1;(statearr_20782_20809[2] = inst_20743);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20768__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 9))
{var inst_20732 = (state_20768[7]);var inst_20745 = (state_20768[2]);var inst_20746 = (inst_20732 + 1);var inst_20732__$1 = inst_20746;var state_20768__$1 = (function (){var statearr_20783 = state_20768;(statearr_20783[7] = inst_20732__$1);
(statearr_20783[10] = inst_20745);
return statearr_20783;
})();var statearr_20784_20810 = state_20768__$1;(statearr_20784_20810[2] = null);
(statearr_20784_20810[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 5))
{var inst_20752 = (state_20768[2]);var state_20768__$1 = (function (){var statearr_20785 = state_20768;(statearr_20785[11] = inst_20752);
return statearr_20785;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20768__$1,12,dchan);
} else
{if((state_val_20769 === 14))
{var inst_20754 = (state_20768[8]);var inst_20759 = cljs.core.apply.call(null,f,inst_20754);var state_20768__$1 = state_20768;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20768__$1,16,out,inst_20759);
} else
{if((state_val_20769 === 16))
{var inst_20761 = (state_20768[2]);var state_20768__$1 = (function (){var statearr_20786 = state_20768;(statearr_20786[12] = inst_20761);
return statearr_20786;
})();var statearr_20787_20811 = state_20768__$1;(statearr_20787_20811[2] = null);
(statearr_20787_20811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 10))
{var inst_20736 = (state_20768[2]);var inst_20737 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20768__$1 = (function (){var statearr_20788 = state_20768;(statearr_20788[13] = inst_20736);
return statearr_20788;
})();var statearr_20789_20812 = state_20768__$1;(statearr_20789_20812[2] = inst_20737);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20768__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20769 === 8))
{var inst_20750 = (state_20768[2]);var state_20768__$1 = state_20768;var statearr_20790_20813 = state_20768__$1;(statearr_20790_20813[2] = inst_20750);
(statearr_20790_20813[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_20794 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20794[0] = state_machine__16539__auto__);
(statearr_20794[1] = 1);
return statearr_20794;
});
var state_machine__16539__auto____1 = (function (state_20768){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_20768);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e20795){if((e20795 instanceof Object))
{var ex__16542__auto__ = e20795;var statearr_20796_20814 = state_20768;(statearr_20796_20814[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20768);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20795;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20815 = state_20768;
state_20768 = G__20815;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_20768){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_20768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_20797 = f__16603__auto__.call(null);(statearr_20797[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto___20798);
return statearr_20797;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16602__auto___20923 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_20899){var state_val_20900 = (state_20899[1]);if((state_val_20900 === 7))
{var inst_20878 = (state_20899[7]);var inst_20879 = (state_20899[8]);var inst_20878__$1 = (state_20899[2]);var inst_20879__$1 = cljs.core.nth.call(null,inst_20878__$1,0,null);var inst_20880 = cljs.core.nth.call(null,inst_20878__$1,1,null);var inst_20881 = (inst_20879__$1 == null);var state_20899__$1 = (function (){var statearr_20901 = state_20899;(statearr_20901[9] = inst_20880);
(statearr_20901[7] = inst_20878__$1);
(statearr_20901[8] = inst_20879__$1);
return statearr_20901;
})();if(cljs.core.truth_(inst_20881))
{var statearr_20902_20924 = state_20899__$1;(statearr_20902_20924[1] = 8);
} else
{var statearr_20903_20925 = state_20899__$1;(statearr_20903_20925[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20900 === 1))
{var inst_20870 = cljs.core.vec.call(null,chs);var inst_20871 = inst_20870;var state_20899__$1 = (function (){var statearr_20904 = state_20899;(statearr_20904[10] = inst_20871);
return statearr_20904;
})();var statearr_20905_20926 = state_20899__$1;(statearr_20905_20926[2] = null);
(statearr_20905_20926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20900 === 4))
{var inst_20871 = (state_20899[10]);var state_20899__$1 = state_20899;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20899__$1,7,inst_20871);
} else
{if((state_val_20900 === 6))
{var inst_20895 = (state_20899[2]);var state_20899__$1 = state_20899;var statearr_20906_20927 = state_20899__$1;(statearr_20906_20927[2] = inst_20895);
(statearr_20906_20927[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20900 === 3))
{var inst_20897 = (state_20899[2]);var state_20899__$1 = state_20899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20899__$1,inst_20897);
} else
{if((state_val_20900 === 2))
{var inst_20871 = (state_20899[10]);var inst_20873 = cljs.core.count.call(null,inst_20871);var inst_20874 = (inst_20873 > 0);var state_20899__$1 = state_20899;if(cljs.core.truth_(inst_20874))
{var statearr_20908_20928 = state_20899__$1;(statearr_20908_20928[1] = 4);
} else
{var statearr_20909_20929 = state_20899__$1;(statearr_20909_20929[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20900 === 11))
{var inst_20871 = (state_20899[10]);var inst_20888 = (state_20899[2]);var tmp20907 = inst_20871;var inst_20871__$1 = tmp20907;var state_20899__$1 = (function (){var statearr_20910 = state_20899;(statearr_20910[10] = inst_20871__$1);
(statearr_20910[11] = inst_20888);
return statearr_20910;
})();var statearr_20911_20930 = state_20899__$1;(statearr_20911_20930[2] = null);
(statearr_20911_20930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20900 === 9))
{var inst_20879 = (state_20899[8]);var state_20899__$1 = state_20899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20899__$1,11,out,inst_20879);
} else
{if((state_val_20900 === 5))
{var inst_20893 = cljs.core.async.close_BANG_.call(null,out);var state_20899__$1 = state_20899;var statearr_20912_20931 = state_20899__$1;(statearr_20912_20931[2] = inst_20893);
(statearr_20912_20931[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20900 === 10))
{var inst_20891 = (state_20899[2]);var state_20899__$1 = state_20899;var statearr_20913_20932 = state_20899__$1;(statearr_20913_20932[2] = inst_20891);
(statearr_20913_20932[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_20900 === 8))
{var inst_20880 = (state_20899[9]);var inst_20871 = (state_20899[10]);var inst_20878 = (state_20899[7]);var inst_20879 = (state_20899[8]);var inst_20883 = (function (){var c = inst_20880;var v = inst_20879;var vec__20876 = inst_20878;var cs = inst_20871;return ((function (c,v,vec__20876,cs,inst_20880,inst_20871,inst_20878,inst_20879,state_val_20900){
return (function (p1__20816_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20816_SHARP_);
});
;})(c,v,vec__20876,cs,inst_20880,inst_20871,inst_20878,inst_20879,state_val_20900))
})();var inst_20884 = cljs.core.filterv.call(null,inst_20883,inst_20871);var inst_20871__$1 = inst_20884;var state_20899__$1 = (function (){var statearr_20914 = state_20899;(statearr_20914[10] = inst_20871__$1);
return statearr_20914;
})();var statearr_20915_20933 = state_20899__$1;(statearr_20915_20933[2] = null);
(statearr_20915_20933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_20919 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20919[0] = state_machine__16539__auto__);
(statearr_20919[1] = 1);
return statearr_20919;
});
var state_machine__16539__auto____1 = (function (state_20899){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_20899);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e20920){if((e20920 instanceof Object))
{var ex__16542__auto__ = e20920;var statearr_20921_20934 = state_20899;(statearr_20921_20934[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20899);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e20920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__20935 = state_20899;
state_20899 = G__20935;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_20899){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_20899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_20922 = f__16603__auto__.call(null);(statearr_20922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto___20923);
return statearr_20922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16602__auto___21028 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_21005){var state_val_21006 = (state_21005[1]);if((state_val_21006 === 7))
{var inst_20987 = (state_21005[7]);var inst_20987__$1 = (state_21005[2]);var inst_20988 = (inst_20987__$1 == null);var inst_20989 = cljs.core.not.call(null,inst_20988);var state_21005__$1 = (function (){var statearr_21007 = state_21005;(statearr_21007[7] = inst_20987__$1);
return statearr_21007;
})();if(inst_20989)
{var statearr_21008_21029 = state_21005__$1;(statearr_21008_21029[1] = 8);
} else
{var statearr_21009_21030 = state_21005__$1;(statearr_21009_21030[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21006 === 1))
{var inst_20982 = 0;var state_21005__$1 = (function (){var statearr_21010 = state_21005;(statearr_21010[8] = inst_20982);
return statearr_21010;
})();var statearr_21011_21031 = state_21005__$1;(statearr_21011_21031[2] = null);
(statearr_21011_21031[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21006 === 4))
{var state_21005__$1 = state_21005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21005__$1,7,ch);
} else
{if((state_val_21006 === 6))
{var inst_21000 = (state_21005[2]);var state_21005__$1 = state_21005;var statearr_21012_21032 = state_21005__$1;(statearr_21012_21032[2] = inst_21000);
(statearr_21012_21032[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21006 === 3))
{var inst_21002 = (state_21005[2]);var inst_21003 = cljs.core.async.close_BANG_.call(null,out);var state_21005__$1 = (function (){var statearr_21013 = state_21005;(statearr_21013[9] = inst_21002);
return statearr_21013;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21005__$1,inst_21003);
} else
{if((state_val_21006 === 2))
{var inst_20982 = (state_21005[8]);var inst_20984 = (inst_20982 < n);var state_21005__$1 = state_21005;if(cljs.core.truth_(inst_20984))
{var statearr_21014_21033 = state_21005__$1;(statearr_21014_21033[1] = 4);
} else
{var statearr_21015_21034 = state_21005__$1;(statearr_21015_21034[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21006 === 11))
{var inst_20982 = (state_21005[8]);var inst_20992 = (state_21005[2]);var inst_20993 = (inst_20982 + 1);var inst_20982__$1 = inst_20993;var state_21005__$1 = (function (){var statearr_21016 = state_21005;(statearr_21016[8] = inst_20982__$1);
(statearr_21016[10] = inst_20992);
return statearr_21016;
})();var statearr_21017_21035 = state_21005__$1;(statearr_21017_21035[2] = null);
(statearr_21017_21035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21006 === 9))
{var state_21005__$1 = state_21005;var statearr_21018_21036 = state_21005__$1;(statearr_21018_21036[2] = null);
(statearr_21018_21036[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21006 === 5))
{var state_21005__$1 = state_21005;var statearr_21019_21037 = state_21005__$1;(statearr_21019_21037[2] = null);
(statearr_21019_21037[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21006 === 10))
{var inst_20997 = (state_21005[2]);var state_21005__$1 = state_21005;var statearr_21020_21038 = state_21005__$1;(statearr_21020_21038[2] = inst_20997);
(statearr_21020_21038[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21006 === 8))
{var inst_20987 = (state_21005[7]);var state_21005__$1 = state_21005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21005__$1,11,out,inst_20987);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_21024 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21024[0] = state_machine__16539__auto__);
(statearr_21024[1] = 1);
return statearr_21024;
});
var state_machine__16539__auto____1 = (function (state_21005){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_21005);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e21025){if((e21025 instanceof Object))
{var ex__16542__auto__ = e21025;var statearr_21026_21039 = state_21005;(statearr_21026_21039[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21025;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21040 = state_21005;
state_21005 = G__21040;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_21005){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_21005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_21027 = f__16603__auto__.call(null);(statearr_21027[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto___21028);
return statearr_21027;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16602__auto___21137 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_21112){var state_val_21113 = (state_21112[1]);if((state_val_21113 === 7))
{var inst_21107 = (state_21112[2]);var state_21112__$1 = state_21112;var statearr_21114_21138 = state_21112__$1;(statearr_21114_21138[2] = inst_21107);
(statearr_21114_21138[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21113 === 1))
{var inst_21089 = null;var state_21112__$1 = (function (){var statearr_21115 = state_21112;(statearr_21115[7] = inst_21089);
return statearr_21115;
})();var statearr_21116_21139 = state_21112__$1;(statearr_21116_21139[2] = null);
(statearr_21116_21139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21113 === 4))
{var inst_21092 = (state_21112[8]);var inst_21092__$1 = (state_21112[2]);var inst_21093 = (inst_21092__$1 == null);var inst_21094 = cljs.core.not.call(null,inst_21093);var state_21112__$1 = (function (){var statearr_21117 = state_21112;(statearr_21117[8] = inst_21092__$1);
return statearr_21117;
})();if(inst_21094)
{var statearr_21118_21140 = state_21112__$1;(statearr_21118_21140[1] = 5);
} else
{var statearr_21119_21141 = state_21112__$1;(statearr_21119_21141[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21113 === 6))
{var state_21112__$1 = state_21112;var statearr_21120_21142 = state_21112__$1;(statearr_21120_21142[2] = null);
(statearr_21120_21142[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21113 === 3))
{var inst_21109 = (state_21112[2]);var inst_21110 = cljs.core.async.close_BANG_.call(null,out);var state_21112__$1 = (function (){var statearr_21121 = state_21112;(statearr_21121[9] = inst_21109);
return statearr_21121;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21112__$1,inst_21110);
} else
{if((state_val_21113 === 2))
{var state_21112__$1 = state_21112;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21112__$1,4,ch);
} else
{if((state_val_21113 === 11))
{var inst_21092 = (state_21112[8]);var inst_21101 = (state_21112[2]);var inst_21089 = inst_21092;var state_21112__$1 = (function (){var statearr_21122 = state_21112;(statearr_21122[10] = inst_21101);
(statearr_21122[7] = inst_21089);
return statearr_21122;
})();var statearr_21123_21143 = state_21112__$1;(statearr_21123_21143[2] = null);
(statearr_21123_21143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21113 === 9))
{var inst_21092 = (state_21112[8]);var state_21112__$1 = state_21112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21112__$1,11,out,inst_21092);
} else
{if((state_val_21113 === 5))
{var inst_21089 = (state_21112[7]);var inst_21092 = (state_21112[8]);var inst_21096 = cljs.core._EQ_.call(null,inst_21092,inst_21089);var state_21112__$1 = state_21112;if(inst_21096)
{var statearr_21125_21144 = state_21112__$1;(statearr_21125_21144[1] = 8);
} else
{var statearr_21126_21145 = state_21112__$1;(statearr_21126_21145[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21113 === 10))
{var inst_21104 = (state_21112[2]);var state_21112__$1 = state_21112;var statearr_21127_21146 = state_21112__$1;(statearr_21127_21146[2] = inst_21104);
(statearr_21127_21146[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21113 === 8))
{var inst_21089 = (state_21112[7]);var tmp21124 = inst_21089;var inst_21089__$1 = tmp21124;var state_21112__$1 = (function (){var statearr_21128 = state_21112;(statearr_21128[7] = inst_21089__$1);
return statearr_21128;
})();var statearr_21129_21147 = state_21112__$1;(statearr_21129_21147[2] = null);
(statearr_21129_21147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_21133 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21133[0] = state_machine__16539__auto__);
(statearr_21133[1] = 1);
return statearr_21133;
});
var state_machine__16539__auto____1 = (function (state_21112){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_21112);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e21134){if((e21134 instanceof Object))
{var ex__16542__auto__ = e21134;var statearr_21135_21148 = state_21112;(statearr_21135_21148[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21112);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21149 = state_21112;
state_21112 = G__21149;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_21112){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_21112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_21136 = f__16603__auto__.call(null);(statearr_21136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto___21137);
return statearr_21136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16602__auto___21284 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_21254){var state_val_21255 = (state_21254[1]);if((state_val_21255 === 7))
{var inst_21250 = (state_21254[2]);var state_21254__$1 = state_21254;var statearr_21256_21285 = state_21254__$1;(statearr_21256_21285[2] = inst_21250);
(statearr_21256_21285[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21255 === 1))
{var inst_21217 = (new Array(n));var inst_21218 = inst_21217;var inst_21219 = 0;var state_21254__$1 = (function (){var statearr_21257 = state_21254;(statearr_21257[7] = inst_21218);
(statearr_21257[8] = inst_21219);
return statearr_21257;
})();var statearr_21258_21286 = state_21254__$1;(statearr_21258_21286[2] = null);
(statearr_21258_21286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21255 === 4))
{var inst_21222 = (state_21254[9]);var inst_21222__$1 = (state_21254[2]);var inst_21223 = (inst_21222__$1 == null);var inst_21224 = cljs.core.not.call(null,inst_21223);var state_21254__$1 = (function (){var statearr_21259 = state_21254;(statearr_21259[9] = inst_21222__$1);
return statearr_21259;
})();if(inst_21224)
{var statearr_21260_21287 = state_21254__$1;(statearr_21260_21287[1] = 5);
} else
{var statearr_21261_21288 = state_21254__$1;(statearr_21261_21288[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21255 === 15))
{var inst_21244 = (state_21254[2]);var state_21254__$1 = state_21254;var statearr_21262_21289 = state_21254__$1;(statearr_21262_21289[2] = inst_21244);
(statearr_21262_21289[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21255 === 13))
{var state_21254__$1 = state_21254;var statearr_21263_21290 = state_21254__$1;(statearr_21263_21290[2] = null);
(statearr_21263_21290[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21255 === 6))
{var inst_21219 = (state_21254[8]);var inst_21240 = (inst_21219 > 0);var state_21254__$1 = state_21254;if(cljs.core.truth_(inst_21240))
{var statearr_21264_21291 = state_21254__$1;(statearr_21264_21291[1] = 12);
} else
{var statearr_21265_21292 = state_21254__$1;(statearr_21265_21292[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21255 === 3))
{var inst_21252 = (state_21254[2]);var state_21254__$1 = state_21254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21254__$1,inst_21252);
} else
{if((state_val_21255 === 12))
{var inst_21218 = (state_21254[7]);var inst_21242 = cljs.core.vec.call(null,inst_21218);var state_21254__$1 = state_21254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21254__$1,15,out,inst_21242);
} else
{if((state_val_21255 === 2))
{var state_21254__$1 = state_21254;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21254__$1,4,ch);
} else
{if((state_val_21255 === 11))
{var inst_21234 = (state_21254[2]);var inst_21235 = (new Array(n));var inst_21218 = inst_21235;var inst_21219 = 0;var state_21254__$1 = (function (){var statearr_21266 = state_21254;(statearr_21266[7] = inst_21218);
(statearr_21266[10] = inst_21234);
(statearr_21266[8] = inst_21219);
return statearr_21266;
})();var statearr_21267_21293 = state_21254__$1;(statearr_21267_21293[2] = null);
(statearr_21267_21293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21255 === 9))
{var inst_21218 = (state_21254[7]);var inst_21232 = cljs.core.vec.call(null,inst_21218);var state_21254__$1 = state_21254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21254__$1,11,out,inst_21232);
} else
{if((state_val_21255 === 5))
{var inst_21218 = (state_21254[7]);var inst_21227 = (state_21254[11]);var inst_21222 = (state_21254[9]);var inst_21219 = (state_21254[8]);var inst_21226 = (inst_21218[inst_21219] = inst_21222);var inst_21227__$1 = (inst_21219 + 1);var inst_21228 = (inst_21227__$1 < n);var state_21254__$1 = (function (){var statearr_21268 = state_21254;(statearr_21268[11] = inst_21227__$1);
(statearr_21268[12] = inst_21226);
return statearr_21268;
})();if(cljs.core.truth_(inst_21228))
{var statearr_21269_21294 = state_21254__$1;(statearr_21269_21294[1] = 8);
} else
{var statearr_21270_21295 = state_21254__$1;(statearr_21270_21295[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21255 === 14))
{var inst_21247 = (state_21254[2]);var inst_21248 = cljs.core.async.close_BANG_.call(null,out);var state_21254__$1 = (function (){var statearr_21272 = state_21254;(statearr_21272[13] = inst_21247);
return statearr_21272;
})();var statearr_21273_21296 = state_21254__$1;(statearr_21273_21296[2] = inst_21248);
(statearr_21273_21296[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21255 === 10))
{var inst_21238 = (state_21254[2]);var state_21254__$1 = state_21254;var statearr_21274_21297 = state_21254__$1;(statearr_21274_21297[2] = inst_21238);
(statearr_21274_21297[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21255 === 8))
{var inst_21218 = (state_21254[7]);var inst_21227 = (state_21254[11]);var tmp21271 = inst_21218;var inst_21218__$1 = tmp21271;var inst_21219 = inst_21227;var state_21254__$1 = (function (){var statearr_21275 = state_21254;(statearr_21275[7] = inst_21218__$1);
(statearr_21275[8] = inst_21219);
return statearr_21275;
})();var statearr_21276_21298 = state_21254__$1;(statearr_21276_21298[2] = null);
(statearr_21276_21298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_21280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21280[0] = state_machine__16539__auto__);
(statearr_21280[1] = 1);
return statearr_21280;
});
var state_machine__16539__auto____1 = (function (state_21254){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_21254);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e21281){if((e21281 instanceof Object))
{var ex__16542__auto__ = e21281;var statearr_21282_21299 = state_21254;(statearr_21282_21299[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21254);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21281;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21300 = state_21254;
state_21254 = G__21300;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_21254){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_21254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_21283 = f__16603__auto__.call(null);(statearr_21283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto___21284);
return statearr_21283;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__16602__auto___21443 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__16603__auto__ = (function (){var switch__16538__auto__ = (function (state_21413){var state_val_21414 = (state_21413[1]);if((state_val_21414 === 7))
{var inst_21409 = (state_21413[2]);var state_21413__$1 = state_21413;var statearr_21415_21444 = state_21413__$1;(statearr_21415_21444[2] = inst_21409);
(statearr_21415_21444[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21414 === 1))
{var inst_21372 = [];var inst_21373 = inst_21372;var inst_21374 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_21413__$1 = (function (){var statearr_21416 = state_21413;(statearr_21416[7] = inst_21373);
(statearr_21416[8] = inst_21374);
return statearr_21416;
})();var statearr_21417_21445 = state_21413__$1;(statearr_21417_21445[2] = null);
(statearr_21417_21445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21414 === 4))
{var inst_21377 = (state_21413[9]);var inst_21377__$1 = (state_21413[2]);var inst_21378 = (inst_21377__$1 == null);var inst_21379 = cljs.core.not.call(null,inst_21378);var state_21413__$1 = (function (){var statearr_21418 = state_21413;(statearr_21418[9] = inst_21377__$1);
return statearr_21418;
})();if(inst_21379)
{var statearr_21419_21446 = state_21413__$1;(statearr_21419_21446[1] = 5);
} else
{var statearr_21420_21447 = state_21413__$1;(statearr_21420_21447[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21414 === 15))
{var inst_21403 = (state_21413[2]);var state_21413__$1 = state_21413;var statearr_21421_21448 = state_21413__$1;(statearr_21421_21448[2] = inst_21403);
(statearr_21421_21448[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21414 === 13))
{var state_21413__$1 = state_21413;var statearr_21422_21449 = state_21413__$1;(statearr_21422_21449[2] = null);
(statearr_21422_21449[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21414 === 6))
{var inst_21373 = (state_21413[7]);var inst_21398 = inst_21373.length;var inst_21399 = (inst_21398 > 0);var state_21413__$1 = state_21413;if(cljs.core.truth_(inst_21399))
{var statearr_21423_21450 = state_21413__$1;(statearr_21423_21450[1] = 12);
} else
{var statearr_21424_21451 = state_21413__$1;(statearr_21424_21451[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21414 === 3))
{var inst_21411 = (state_21413[2]);var state_21413__$1 = state_21413;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21413__$1,inst_21411);
} else
{if((state_val_21414 === 12))
{var inst_21373 = (state_21413[7]);var inst_21401 = cljs.core.vec.call(null,inst_21373);var state_21413__$1 = state_21413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21413__$1,15,out,inst_21401);
} else
{if((state_val_21414 === 2))
{var state_21413__$1 = state_21413;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21413__$1,4,ch);
} else
{if((state_val_21414 === 11))
{var inst_21381 = (state_21413[10]);var inst_21377 = (state_21413[9]);var inst_21391 = (state_21413[2]);var inst_21392 = [];var inst_21393 = inst_21392.push(inst_21377);var inst_21373 = inst_21392;var inst_21374 = inst_21381;var state_21413__$1 = (function (){var statearr_21425 = state_21413;(statearr_21425[7] = inst_21373);
(statearr_21425[8] = inst_21374);
(statearr_21425[11] = inst_21393);
(statearr_21425[12] = inst_21391);
return statearr_21425;
})();var statearr_21426_21452 = state_21413__$1;(statearr_21426_21452[2] = null);
(statearr_21426_21452[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21414 === 9))
{var inst_21373 = (state_21413[7]);var inst_21389 = cljs.core.vec.call(null,inst_21373);var state_21413__$1 = state_21413;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_21413__$1,11,out,inst_21389);
} else
{if((state_val_21414 === 5))
{var inst_21381 = (state_21413[10]);var inst_21374 = (state_21413[8]);var inst_21377 = (state_21413[9]);var inst_21381__$1 = f.call(null,inst_21377);var inst_21382 = cljs.core._EQ_.call(null,inst_21381__$1,inst_21374);var inst_21383 = cljs.core.keyword_identical_QMARK_.call(null,inst_21374,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_21384 = (inst_21382) || (inst_21383);var state_21413__$1 = (function (){var statearr_21427 = state_21413;(statearr_21427[10] = inst_21381__$1);
return statearr_21427;
})();if(cljs.core.truth_(inst_21384))
{var statearr_21428_21453 = state_21413__$1;(statearr_21428_21453[1] = 8);
} else
{var statearr_21429_21454 = state_21413__$1;(statearr_21429_21454[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21414 === 14))
{var inst_21406 = (state_21413[2]);var inst_21407 = cljs.core.async.close_BANG_.call(null,out);var state_21413__$1 = (function (){var statearr_21431 = state_21413;(statearr_21431[13] = inst_21406);
return statearr_21431;
})();var statearr_21432_21455 = state_21413__$1;(statearr_21432_21455[2] = inst_21407);
(statearr_21432_21455[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21414 === 10))
{var inst_21396 = (state_21413[2]);var state_21413__$1 = state_21413;var statearr_21433_21456 = state_21413__$1;(statearr_21433_21456[2] = inst_21396);
(statearr_21433_21456[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_21414 === 8))
{var inst_21381 = (state_21413[10]);var inst_21373 = (state_21413[7]);var inst_21377 = (state_21413[9]);var inst_21386 = inst_21373.push(inst_21377);var tmp21430 = inst_21373;var inst_21373__$1 = tmp21430;var inst_21374 = inst_21381;var state_21413__$1 = (function (){var statearr_21434 = state_21413;(statearr_21434[14] = inst_21386);
(statearr_21434[7] = inst_21373__$1);
(statearr_21434[8] = inst_21374);
return statearr_21434;
})();var statearr_21435_21457 = state_21413__$1;(statearr_21435_21457[2] = null);
(statearr_21435_21457[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});return ((function (switch__16538__auto__){
return (function() {
var state_machine__16539__auto__ = null;
var state_machine__16539__auto____0 = (function (){var statearr_21439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21439[0] = state_machine__16539__auto__);
(statearr_21439[1] = 1);
return statearr_21439;
});
var state_machine__16539__auto____1 = (function (state_21413){while(true){
var ret_value__16540__auto__ = (function (){try{while(true){
var result__16541__auto__ = switch__16538__auto__.call(null,state_21413);if(cljs.core.keyword_identical_QMARK_.call(null,result__16541__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__16541__auto__;
}
break;
}
}catch (e21440){if((e21440 instanceof Object))
{var ex__16542__auto__ = e21440;var statearr_21441_21458 = state_21413;(statearr_21441_21458[5] = ex__16542__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21413);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e21440;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__16540__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__21459 = state_21413;
state_21413 = G__21459;
continue;
}
} else
{return ret_value__16540__auto__;
}
break;
}
});
state_machine__16539__auto__ = function(state_21413){
switch(arguments.length){
case 0:
return state_machine__16539__auto____0.call(this);
case 1:
return state_machine__16539__auto____1.call(this,state_21413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__16539__auto____0;
state_machine__16539__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__16539__auto____1;
return state_machine__16539__auto__;
})()
;})(switch__16538__auto__))
})();var state__16604__auto__ = (function (){var statearr_21442 = f__16603__auto__.call(null);(statearr_21442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__16602__auto___21443);
return statearr_21442;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__16604__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

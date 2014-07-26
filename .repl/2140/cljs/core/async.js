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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t29224 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29224 = (function (f,fn_handler,meta29225){
this.f = f;
this.fn_handler = fn_handler;
this.meta29225 = meta29225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29224.cljs$lang$type = true;
cljs.core.async.t29224.cljs$lang$ctorStr = "cljs.core.async/t29224";
cljs.core.async.t29224.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t29224");
});
cljs.core.async.t29224.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29224.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t29224.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t29224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29226){var self__ = this;
var _29226__$1 = this;return self__.meta29225;
});
cljs.core.async.t29224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29226,meta29225__$1){var self__ = this;
var _29226__$1 = this;return (new cljs.core.async.t29224(self__.f,self__.fn_handler,meta29225__$1));
});
cljs.core.async.__GT_t29224 = (function __GT_t29224(f__$1,fn_handler__$1,meta29225){return (new cljs.core.async.t29224(f__$1,fn_handler__$1,meta29225));
});
}
return (new cljs.core.async.t29224(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__29228 = buff;if(G__29228)
{var bit__15632__auto__ = null;if(cljs.core.truth_((function (){var or__14982__auto__ = bit__15632__auto__;if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return G__29228.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__29228.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29228);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__29228);
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
{var val_29229 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_29229);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_29229);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__14970__auto__ = ret;if(cljs.core.truth_(and__14970__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__14970__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15830__auto___29230 = n;var x_29231 = 0;while(true){
if((x_29231 < n__15830__auto___29230))
{(a[x_29231] = 0);
{
var G__29232 = (x_29231 + 1);
x_29231 = G__29232;
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
var G__29233 = (i + 1);
i = G__29233;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t29237 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29237 = (function (flag,alt_flag,meta29238){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta29238 = meta29238;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29237.cljs$lang$type = true;
cljs.core.async.t29237.cljs$lang$ctorStr = "cljs.core.async/t29237";
cljs.core.async.t29237.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t29237");
});
cljs.core.async.t29237.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29237.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t29237.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t29237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29239){var self__ = this;
var _29239__$1 = this;return self__.meta29238;
});
cljs.core.async.t29237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29239,meta29238__$1){var self__ = this;
var _29239__$1 = this;return (new cljs.core.async.t29237(self__.flag,self__.alt_flag,meta29238__$1));
});
cljs.core.async.__GT_t29237 = (function __GT_t29237(flag__$1,alt_flag__$1,meta29238){return (new cljs.core.async.t29237(flag__$1,alt_flag__$1,meta29238));
});
}
return (new cljs.core.async.t29237(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t29243 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29243 = (function (cb,flag,alt_handler,meta29244){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta29244 = meta29244;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29243.cljs$lang$type = true;
cljs.core.async.t29243.cljs$lang$ctorStr = "cljs.core.async/t29243";
cljs.core.async.t29243.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t29243");
});
cljs.core.async.t29243.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29243.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t29243.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t29243.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29245){var self__ = this;
var _29245__$1 = this;return self__.meta29244;
});
cljs.core.async.t29243.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29245,meta29244__$1){var self__ = this;
var _29245__$1 = this;return (new cljs.core.async.t29243(self__.cb,self__.flag,self__.alt_handler,meta29244__$1));
});
cljs.core.async.__GT_t29243 = (function __GT_t29243(cb__$1,flag__$1,alt_handler__$1,meta29244){return (new cljs.core.async.t29243(cb__$1,flag__$1,alt_handler__$1,meta29244));
});
}
return (new cljs.core.async.t29243(cb,flag,alt_handler,null));
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
return (function (p1__29246_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29246_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__14982__auto__ = wport;if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__29247 = (i + 1);
i = G__29247;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__14982__auto__ = ret;if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__14970__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__14970__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__14970__auto__;
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
var alts_BANG___delegate = function (ports,p__29248){var map__29250 = p__29248;var map__29250__$1 = ((cljs.core.seq_QMARK_.call(null,map__29250))?cljs.core.apply.call(null,cljs.core.hash_map,map__29250):map__29250);var opts = map__29250__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__29248 = null;if (arguments.length > 1) {
  p__29248 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__29248);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__29251){
var ports = cljs.core.first(arglist__29251);
var p__29248 = cljs.core.rest(arglist__29251);
return alts_BANG___delegate(ports,p__29248);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t29259 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29259 = (function (ch,f,map_LT_,meta29260){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29260 = meta29260;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29259.cljs$lang$type = true;
cljs.core.async.t29259.cljs$lang$ctorStr = "cljs.core.async/t29259";
cljs.core.async.t29259.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t29259");
});
cljs.core.async.t29259.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29259.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t29259.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29259.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t29262 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29262 = (function (fn1,_,meta29260,ch,f,map_LT_,meta29263){
this.fn1 = fn1;
this._ = _;
this.meta29260 = meta29260;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta29263 = meta29263;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29262.cljs$lang$type = true;
cljs.core.async.t29262.cljs$lang$ctorStr = "cljs.core.async/t29262";
cljs.core.async.t29262.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t29262");
});
cljs.core.async.t29262.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t29262.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t29262.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t29262.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__29252_SHARP_){return f1.call(null,(((p1__29252_SHARP_ == null))?null:self__.f.call(null,p1__29252_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t29262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29264){var self__ = this;
var _29264__$1 = this;return self__.meta29263;
});
cljs.core.async.t29262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29264,meta29263__$1){var self__ = this;
var _29264__$1 = this;return (new cljs.core.async.t29262(self__.fn1,self__._,self__.meta29260,self__.ch,self__.f,self__.map_LT_,meta29263__$1));
});
cljs.core.async.__GT_t29262 = (function __GT_t29262(fn1__$1,___$2,meta29260__$1,ch__$2,f__$2,map_LT___$2,meta29263){return (new cljs.core.async.t29262(fn1__$1,___$2,meta29260__$1,ch__$2,f__$2,map_LT___$2,meta29263));
});
}
return (new cljs.core.async.t29262(fn1,___$1,self__.meta29260,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__14970__auto__ = ret;if(cljs.core.truth_(and__14970__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__14970__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t29259.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29259.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29259.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29261){var self__ = this;
var _29261__$1 = this;return self__.meta29260;
});
cljs.core.async.t29259.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29261,meta29260__$1){var self__ = this;
var _29261__$1 = this;return (new cljs.core.async.t29259(self__.ch,self__.f,self__.map_LT_,meta29260__$1));
});
cljs.core.async.__GT_t29259 = (function __GT_t29259(ch__$1,f__$1,map_LT___$1,meta29260){return (new cljs.core.async.t29259(ch__$1,f__$1,map_LT___$1,meta29260));
});
}
return (new cljs.core.async.t29259(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t29268 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29268 = (function (ch,f,map_GT_,meta29269){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta29269 = meta29269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29268.cljs$lang$type = true;
cljs.core.async.t29268.cljs$lang$ctorStr = "cljs.core.async/t29268";
cljs.core.async.t29268.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t29268");
});
cljs.core.async.t29268.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29268.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t29268.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29268.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29268.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29268.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29270){var self__ = this;
var _29270__$1 = this;return self__.meta29269;
});
cljs.core.async.t29268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29270,meta29269__$1){var self__ = this;
var _29270__$1 = this;return (new cljs.core.async.t29268(self__.ch,self__.f,self__.map_GT_,meta29269__$1));
});
cljs.core.async.__GT_t29268 = (function __GT_t29268(ch__$1,f__$1,map_GT___$1,meta29269){return (new cljs.core.async.t29268(ch__$1,f__$1,map_GT___$1,meta29269));
});
}
return (new cljs.core.async.t29268(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t29274 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29274 = (function (ch,p,filter_GT_,meta29275){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta29275 = meta29275;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29274.cljs$lang$type = true;
cljs.core.async.t29274.cljs$lang$ctorStr = "cljs.core.async/t29274";
cljs.core.async.t29274.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t29274");
});
cljs.core.async.t29274.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t29274.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t29274.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t29274.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t29274.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t29274.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t29274.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29276){var self__ = this;
var _29276__$1 = this;return self__.meta29275;
});
cljs.core.async.t29274.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29276,meta29275__$1){var self__ = this;
var _29276__$1 = this;return (new cljs.core.async.t29274(self__.ch,self__.p,self__.filter_GT_,meta29275__$1));
});
cljs.core.async.__GT_t29274 = (function __GT_t29274(ch__$1,p__$1,filter_GT___$1,meta29275){return (new cljs.core.async.t29274(ch__$1,p__$1,filter_GT___$1,meta29275));
});
}
return (new cljs.core.async.t29274(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___29359 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_29338){var state_val_29339 = (state_29338[1]);if((state_val_29339 === 7))
{var inst_29334 = (state_29338[2]);var state_29338__$1 = state_29338;var statearr_29340_29360 = state_29338__$1;(statearr_29340_29360[2] = inst_29334);
(statearr_29340_29360[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29339 === 1))
{var state_29338__$1 = state_29338;var statearr_29341_29361 = state_29338__$1;(statearr_29341_29361[2] = null);
(statearr_29341_29361[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29339 === 4))
{var inst_29320 = (state_29338[7]);var inst_29320__$1 = (state_29338[2]);var inst_29321 = (inst_29320__$1 == null);var state_29338__$1 = (function (){var statearr_29342 = state_29338;(statearr_29342[7] = inst_29320__$1);
return statearr_29342;
})();if(cljs.core.truth_(inst_29321))
{var statearr_29343_29362 = state_29338__$1;(statearr_29343_29362[1] = 5);
} else
{var statearr_29344_29363 = state_29338__$1;(statearr_29344_29363[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29339 === 6))
{var inst_29320 = (state_29338[7]);var inst_29325 = p.call(null,inst_29320);var state_29338__$1 = state_29338;if(cljs.core.truth_(inst_29325))
{var statearr_29345_29364 = state_29338__$1;(statearr_29345_29364[1] = 8);
} else
{var statearr_29346_29365 = state_29338__$1;(statearr_29346_29365[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29339 === 3))
{var inst_29336 = (state_29338[2]);var state_29338__$1 = state_29338;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29338__$1,inst_29336);
} else
{if((state_val_29339 === 2))
{var state_29338__$1 = state_29338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29338__$1,4,ch);
} else
{if((state_val_29339 === 11))
{var inst_29328 = (state_29338[2]);var state_29338__$1 = state_29338;var statearr_29347_29366 = state_29338__$1;(statearr_29347_29366[2] = inst_29328);
(statearr_29347_29366[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29339 === 9))
{var state_29338__$1 = state_29338;var statearr_29348_29367 = state_29338__$1;(statearr_29348_29367[2] = null);
(statearr_29348_29367[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29339 === 5))
{var inst_29323 = cljs.core.async.close_BANG_.call(null,out);var state_29338__$1 = state_29338;var statearr_29349_29368 = state_29338__$1;(statearr_29349_29368[2] = inst_29323);
(statearr_29349_29368[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29339 === 10))
{var inst_29331 = (state_29338[2]);var state_29338__$1 = (function (){var statearr_29350 = state_29338;(statearr_29350[8] = inst_29331);
return statearr_29350;
})();var statearr_29351_29369 = state_29338__$1;(statearr_29351_29369[2] = null);
(statearr_29351_29369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29339 === 8))
{var inst_29320 = (state_29338[7]);var state_29338__$1 = state_29338;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29338__$1,11,out,inst_29320);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_29355 = [null,null,null,null,null,null,null,null,null];(statearr_29355[0] = state_machine__23717__auto__);
(statearr_29355[1] = 1);
return statearr_29355;
});
var state_machine__23717__auto____1 = (function (state_29338){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_29338);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e29356){if((e29356 instanceof Object))
{var ex__23720__auto__ = e29356;var statearr_29357_29370 = state_29338;(statearr_29357_29370[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29338);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29371 = state_29338;
state_29338 = G__29371;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_29338){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_29338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_29358 = f__23781__auto__.call(null);(statearr_29358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___29359);
return statearr_29358;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__23780__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_29523){var state_val_29524 = (state_29523[1]);if((state_val_29524 === 7))
{var inst_29519 = (state_29523[2]);var state_29523__$1 = state_29523;var statearr_29525_29562 = state_29523__$1;(statearr_29525_29562[2] = inst_29519);
(statearr_29525_29562[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 20))
{var inst_29494 = (state_29523[7]);var inst_29505 = (state_29523[2]);var inst_29506 = cljs.core.next.call(null,inst_29494);var inst_29480 = inst_29506;var inst_29481 = null;var inst_29482 = 0;var inst_29483 = 0;var state_29523__$1 = (function (){var statearr_29526 = state_29523;(statearr_29526[8] = inst_29505);
(statearr_29526[9] = inst_29482);
(statearr_29526[10] = inst_29480);
(statearr_29526[11] = inst_29483);
(statearr_29526[12] = inst_29481);
return statearr_29526;
})();var statearr_29527_29563 = state_29523__$1;(statearr_29527_29563[2] = null);
(statearr_29527_29563[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 1))
{var state_29523__$1 = state_29523;var statearr_29528_29564 = state_29523__$1;(statearr_29528_29564[2] = null);
(statearr_29528_29564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 4))
{var inst_29469 = (state_29523[13]);var inst_29469__$1 = (state_29523[2]);var inst_29470 = (inst_29469__$1 == null);var state_29523__$1 = (function (){var statearr_29532 = state_29523;(statearr_29532[13] = inst_29469__$1);
return statearr_29532;
})();if(cljs.core.truth_(inst_29470))
{var statearr_29533_29565 = state_29523__$1;(statearr_29533_29565[1] = 5);
} else
{var statearr_29534_29566 = state_29523__$1;(statearr_29534_29566[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 15))
{var state_29523__$1 = state_29523;var statearr_29535_29567 = state_29523__$1;(statearr_29535_29567[2] = null);
(statearr_29535_29567[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 13))
{var inst_29482 = (state_29523[9]);var inst_29480 = (state_29523[10]);var inst_29483 = (state_29523[11]);var inst_29481 = (state_29523[12]);var inst_29490 = (state_29523[2]);var inst_29491 = (inst_29483 + 1);var tmp29529 = inst_29482;var tmp29530 = inst_29480;var tmp29531 = inst_29481;var inst_29480__$1 = tmp29530;var inst_29481__$1 = tmp29531;var inst_29482__$1 = tmp29529;var inst_29483__$1 = inst_29491;var state_29523__$1 = (function (){var statearr_29536 = state_29523;(statearr_29536[14] = inst_29490);
(statearr_29536[9] = inst_29482__$1);
(statearr_29536[10] = inst_29480__$1);
(statearr_29536[11] = inst_29483__$1);
(statearr_29536[12] = inst_29481__$1);
return statearr_29536;
})();var statearr_29537_29568 = state_29523__$1;(statearr_29537_29568[2] = null);
(statearr_29537_29568[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 6))
{var inst_29469 = (state_29523[13]);var inst_29474 = f.call(null,inst_29469);var inst_29479 = cljs.core.seq.call(null,inst_29474);var inst_29480 = inst_29479;var inst_29481 = null;var inst_29482 = 0;var inst_29483 = 0;var state_29523__$1 = (function (){var statearr_29538 = state_29523;(statearr_29538[9] = inst_29482);
(statearr_29538[10] = inst_29480);
(statearr_29538[11] = inst_29483);
(statearr_29538[12] = inst_29481);
return statearr_29538;
})();var statearr_29539_29569 = state_29523__$1;(statearr_29539_29569[2] = null);
(statearr_29539_29569[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 17))
{var inst_29494 = (state_29523[7]);var inst_29498 = cljs.core.chunk_first.call(null,inst_29494);var inst_29499 = cljs.core.chunk_rest.call(null,inst_29494);var inst_29500 = cljs.core.count.call(null,inst_29498);var inst_29480 = inst_29499;var inst_29481 = inst_29498;var inst_29482 = inst_29500;var inst_29483 = 0;var state_29523__$1 = (function (){var statearr_29540 = state_29523;(statearr_29540[9] = inst_29482);
(statearr_29540[10] = inst_29480);
(statearr_29540[11] = inst_29483);
(statearr_29540[12] = inst_29481);
return statearr_29540;
})();var statearr_29541_29570 = state_29523__$1;(statearr_29541_29570[2] = null);
(statearr_29541_29570[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 3))
{var inst_29521 = (state_29523[2]);var state_29523__$1 = state_29523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29523__$1,inst_29521);
} else
{if((state_val_29524 === 12))
{var inst_29514 = (state_29523[2]);var state_29523__$1 = state_29523;var statearr_29542_29571 = state_29523__$1;(statearr_29542_29571[2] = inst_29514);
(statearr_29542_29571[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 2))
{var state_29523__$1 = state_29523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29523__$1,4,in$);
} else
{if((state_val_29524 === 19))
{var inst_29509 = (state_29523[2]);var state_29523__$1 = state_29523;var statearr_29543_29572 = state_29523__$1;(statearr_29543_29572[2] = inst_29509);
(statearr_29543_29572[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 11))
{var inst_29480 = (state_29523[10]);var inst_29494 = (state_29523[7]);var inst_29494__$1 = cljs.core.seq.call(null,inst_29480);var state_29523__$1 = (function (){var statearr_29544 = state_29523;(statearr_29544[7] = inst_29494__$1);
return statearr_29544;
})();if(inst_29494__$1)
{var statearr_29545_29573 = state_29523__$1;(statearr_29545_29573[1] = 14);
} else
{var statearr_29546_29574 = state_29523__$1;(statearr_29546_29574[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 9))
{var inst_29516 = (state_29523[2]);var state_29523__$1 = (function (){var statearr_29547 = state_29523;(statearr_29547[15] = inst_29516);
return statearr_29547;
})();var statearr_29548_29575 = state_29523__$1;(statearr_29548_29575[2] = null);
(statearr_29548_29575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 5))
{var inst_29472 = cljs.core.async.close_BANG_.call(null,out);var state_29523__$1 = state_29523;var statearr_29549_29576 = state_29523__$1;(statearr_29549_29576[2] = inst_29472);
(statearr_29549_29576[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 14))
{var inst_29494 = (state_29523[7]);var inst_29496 = cljs.core.chunked_seq_QMARK_.call(null,inst_29494);var state_29523__$1 = state_29523;if(inst_29496)
{var statearr_29550_29577 = state_29523__$1;(statearr_29550_29577[1] = 17);
} else
{var statearr_29551_29578 = state_29523__$1;(statearr_29551_29578[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 16))
{var inst_29512 = (state_29523[2]);var state_29523__$1 = state_29523;var statearr_29552_29579 = state_29523__$1;(statearr_29552_29579[2] = inst_29512);
(statearr_29552_29579[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29524 === 10))
{var inst_29483 = (state_29523[11]);var inst_29481 = (state_29523[12]);var inst_29488 = cljs.core._nth.call(null,inst_29481,inst_29483);var state_29523__$1 = state_29523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29523__$1,13,out,inst_29488);
} else
{if((state_val_29524 === 18))
{var inst_29494 = (state_29523[7]);var inst_29503 = cljs.core.first.call(null,inst_29494);var state_29523__$1 = state_29523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29523__$1,20,out,inst_29503);
} else
{if((state_val_29524 === 8))
{var inst_29482 = (state_29523[9]);var inst_29483 = (state_29523[11]);var inst_29485 = (inst_29483 < inst_29482);var inst_29486 = inst_29485;var state_29523__$1 = state_29523;if(cljs.core.truth_(inst_29486))
{var statearr_29553_29580 = state_29523__$1;(statearr_29553_29580[1] = 10);
} else
{var statearr_29554_29581 = state_29523__$1;(statearr_29554_29581[1] = 11);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_29558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29558[0] = state_machine__23717__auto__);
(statearr_29558[1] = 1);
return statearr_29558;
});
var state_machine__23717__auto____1 = (function (state_29523){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_29523);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e29559){if((e29559 instanceof Object))
{var ex__23720__auto__ = e29559;var statearr_29560_29582 = state_29523;(statearr_29560_29582[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29523);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29583 = state_29523;
state_29523 = G__29583;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_29523){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_29523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_29561 = f__23781__auto__.call(null);(statearr_29561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto__);
return statearr_29561;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
}));
return c__23780__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__23780__auto___29664 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_29643){var state_val_29644 = (state_29643[1]);if((state_val_29644 === 7))
{var inst_29639 = (state_29643[2]);var state_29643__$1 = state_29643;var statearr_29645_29665 = state_29643__$1;(statearr_29645_29665[2] = inst_29639);
(statearr_29645_29665[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29644 === 1))
{var state_29643__$1 = state_29643;var statearr_29646_29666 = state_29643__$1;(statearr_29646_29666[2] = null);
(statearr_29646_29666[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29644 === 4))
{var inst_29626 = (state_29643[7]);var inst_29626__$1 = (state_29643[2]);var inst_29627 = (inst_29626__$1 == null);var state_29643__$1 = (function (){var statearr_29647 = state_29643;(statearr_29647[7] = inst_29626__$1);
return statearr_29647;
})();if(cljs.core.truth_(inst_29627))
{var statearr_29648_29667 = state_29643__$1;(statearr_29648_29667[1] = 5);
} else
{var statearr_29649_29668 = state_29643__$1;(statearr_29649_29668[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29644 === 6))
{var inst_29626 = (state_29643[7]);var state_29643__$1 = state_29643;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29643__$1,11,to,inst_29626);
} else
{if((state_val_29644 === 3))
{var inst_29641 = (state_29643[2]);var state_29643__$1 = state_29643;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29643__$1,inst_29641);
} else
{if((state_val_29644 === 2))
{var state_29643__$1 = state_29643;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29643__$1,4,from);
} else
{if((state_val_29644 === 11))
{var inst_29636 = (state_29643[2]);var state_29643__$1 = (function (){var statearr_29650 = state_29643;(statearr_29650[8] = inst_29636);
return statearr_29650;
})();var statearr_29651_29669 = state_29643__$1;(statearr_29651_29669[2] = null);
(statearr_29651_29669[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29644 === 9))
{var state_29643__$1 = state_29643;var statearr_29652_29670 = state_29643__$1;(statearr_29652_29670[2] = null);
(statearr_29652_29670[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29644 === 5))
{var state_29643__$1 = state_29643;if(cljs.core.truth_(close_QMARK_))
{var statearr_29653_29671 = state_29643__$1;(statearr_29653_29671[1] = 8);
} else
{var statearr_29654_29672 = state_29643__$1;(statearr_29654_29672[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29644 === 10))
{var inst_29633 = (state_29643[2]);var state_29643__$1 = state_29643;var statearr_29655_29673 = state_29643__$1;(statearr_29655_29673[2] = inst_29633);
(statearr_29655_29673[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29644 === 8))
{var inst_29630 = cljs.core.async.close_BANG_.call(null,to);var state_29643__$1 = state_29643;var statearr_29656_29674 = state_29643__$1;(statearr_29656_29674[2] = inst_29630);
(statearr_29656_29674[1] = 10);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_29660 = [null,null,null,null,null,null,null,null,null];(statearr_29660[0] = state_machine__23717__auto__);
(statearr_29660[1] = 1);
return statearr_29660;
});
var state_machine__23717__auto____1 = (function (state_29643){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_29643);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e29661){if((e29661 instanceof Object))
{var ex__23720__auto__ = e29661;var statearr_29662_29675 = state_29643;(statearr_29662_29675[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29643);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29661;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29676 = state_29643;
state_29643 = G__29676;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_29643){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_29643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_29663 = f__23781__auto__.call(null);(statearr_29663[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___29664);
return statearr_29663;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__23780__auto___29763 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_29741){var state_val_29742 = (state_29741[1]);if((state_val_29742 === 7))
{var inst_29737 = (state_29741[2]);var state_29741__$1 = state_29741;var statearr_29743_29764 = state_29741__$1;(statearr_29743_29764[2] = inst_29737);
(statearr_29743_29764[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29742 === 1))
{var state_29741__$1 = state_29741;var statearr_29744_29765 = state_29741__$1;(statearr_29744_29765[2] = null);
(statearr_29744_29765[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29742 === 4))
{var inst_29722 = (state_29741[7]);var inst_29722__$1 = (state_29741[2]);var inst_29723 = (inst_29722__$1 == null);var state_29741__$1 = (function (){var statearr_29745 = state_29741;(statearr_29745[7] = inst_29722__$1);
return statearr_29745;
})();if(cljs.core.truth_(inst_29723))
{var statearr_29746_29766 = state_29741__$1;(statearr_29746_29766[1] = 5);
} else
{var statearr_29747_29767 = state_29741__$1;(statearr_29747_29767[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29742 === 6))
{var inst_29722 = (state_29741[7]);var inst_29728 = p.call(null,inst_29722);var state_29741__$1 = state_29741;if(cljs.core.truth_(inst_29728))
{var statearr_29748_29768 = state_29741__$1;(statearr_29748_29768[1] = 9);
} else
{var statearr_29749_29769 = state_29741__$1;(statearr_29749_29769[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29742 === 3))
{var inst_29739 = (state_29741[2]);var state_29741__$1 = state_29741;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29741__$1,inst_29739);
} else
{if((state_val_29742 === 2))
{var state_29741__$1 = state_29741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29741__$1,4,ch);
} else
{if((state_val_29742 === 11))
{var inst_29722 = (state_29741[7]);var inst_29732 = (state_29741[2]);var state_29741__$1 = state_29741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29741__$1,8,inst_29732,inst_29722);
} else
{if((state_val_29742 === 9))
{var state_29741__$1 = state_29741;var statearr_29750_29770 = state_29741__$1;(statearr_29750_29770[2] = tc);
(statearr_29750_29770[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29742 === 5))
{var inst_29725 = cljs.core.async.close_BANG_.call(null,tc);var inst_29726 = cljs.core.async.close_BANG_.call(null,fc);var state_29741__$1 = (function (){var statearr_29751 = state_29741;(statearr_29751[8] = inst_29725);
return statearr_29751;
})();var statearr_29752_29771 = state_29741__$1;(statearr_29752_29771[2] = inst_29726);
(statearr_29752_29771[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29742 === 10))
{var state_29741__$1 = state_29741;var statearr_29753_29772 = state_29741__$1;(statearr_29753_29772[2] = fc);
(statearr_29753_29772[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29742 === 8))
{var inst_29734 = (state_29741[2]);var state_29741__$1 = (function (){var statearr_29754 = state_29741;(statearr_29754[9] = inst_29734);
return statearr_29754;
})();var statearr_29755_29773 = state_29741__$1;(statearr_29755_29773[2] = null);
(statearr_29755_29773[1] = 2);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_29759 = [null,null,null,null,null,null,null,null,null,null];(statearr_29759[0] = state_machine__23717__auto__);
(statearr_29759[1] = 1);
return statearr_29759;
});
var state_machine__23717__auto____1 = (function (state_29741){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_29741);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e29760){if((e29760 instanceof Object))
{var ex__23720__auto__ = e29760;var statearr_29761_29774 = state_29741;(statearr_29761_29774[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29760;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29775 = state_29741;
state_29741 = G__29775;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_29741){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_29741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_29762 = f__23781__auto__.call(null);(statearr_29762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___29763);
return statearr_29762;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__23780__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_29822){var state_val_29823 = (state_29822[1]);if((state_val_29823 === 7))
{var inst_29818 = (state_29822[2]);var state_29822__$1 = state_29822;var statearr_29824_29840 = state_29822__$1;(statearr_29824_29840[2] = inst_29818);
(statearr_29824_29840[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29823 === 6))
{var inst_29808 = (state_29822[7]);var inst_29811 = (state_29822[8]);var inst_29815 = f.call(null,inst_29808,inst_29811);var inst_29808__$1 = inst_29815;var state_29822__$1 = (function (){var statearr_29825 = state_29822;(statearr_29825[7] = inst_29808__$1);
return statearr_29825;
})();var statearr_29826_29841 = state_29822__$1;(statearr_29826_29841[2] = null);
(statearr_29826_29841[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29823 === 5))
{var inst_29808 = (state_29822[7]);var state_29822__$1 = state_29822;var statearr_29827_29842 = state_29822__$1;(statearr_29827_29842[2] = inst_29808);
(statearr_29827_29842[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29823 === 4))
{var inst_29811 = (state_29822[8]);var inst_29811__$1 = (state_29822[2]);var inst_29812 = (inst_29811__$1 == null);var state_29822__$1 = (function (){var statearr_29828 = state_29822;(statearr_29828[8] = inst_29811__$1);
return statearr_29828;
})();if(cljs.core.truth_(inst_29812))
{var statearr_29829_29843 = state_29822__$1;(statearr_29829_29843[1] = 5);
} else
{var statearr_29830_29844 = state_29822__$1;(statearr_29830_29844[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29823 === 3))
{var inst_29820 = (state_29822[2]);var state_29822__$1 = state_29822;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29822__$1,inst_29820);
} else
{if((state_val_29823 === 2))
{var state_29822__$1 = state_29822;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29822__$1,4,ch);
} else
{if((state_val_29823 === 1))
{var inst_29808 = init;var state_29822__$1 = (function (){var statearr_29831 = state_29822;(statearr_29831[7] = inst_29808);
return statearr_29831;
})();var statearr_29832_29845 = state_29822__$1;(statearr_29832_29845[2] = null);
(statearr_29832_29845[1] = 2);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_29836 = [null,null,null,null,null,null,null,null,null];(statearr_29836[0] = state_machine__23717__auto__);
(statearr_29836[1] = 1);
return statearr_29836;
});
var state_machine__23717__auto____1 = (function (state_29822){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_29822);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e29837){if((e29837 instanceof Object))
{var ex__23720__auto__ = e29837;var statearr_29838_29846 = state_29822;(statearr_29838_29846[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29822);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29837;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29847 = state_29822;
state_29822 = G__29847;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_29822){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_29822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_29839 = f__23781__auto__.call(null);(statearr_29839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto__);
return statearr_29839;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
}));
return c__23780__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__23780__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_29909){var state_val_29910 = (state_29909[1]);if((state_val_29910 === 7))
{var inst_29890 = (state_29909[7]);var inst_29895 = (state_29909[2]);var inst_29896 = cljs.core.next.call(null,inst_29890);var inst_29890__$1 = inst_29896;var state_29909__$1 = (function (){var statearr_29911 = state_29909;(statearr_29911[7] = inst_29890__$1);
(statearr_29911[8] = inst_29895);
return statearr_29911;
})();var statearr_29912_29930 = state_29909__$1;(statearr_29912_29930[2] = null);
(statearr_29912_29930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29910 === 1))
{var inst_29889 = cljs.core.seq.call(null,coll);var inst_29890 = inst_29889;var state_29909__$1 = (function (){var statearr_29913 = state_29909;(statearr_29913[7] = inst_29890);
return statearr_29913;
})();var statearr_29914_29931 = state_29909__$1;(statearr_29914_29931[2] = null);
(statearr_29914_29931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29910 === 4))
{var inst_29890 = (state_29909[7]);var inst_29893 = cljs.core.first.call(null,inst_29890);var state_29909__$1 = state_29909;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29909__$1,7,ch,inst_29893);
} else
{if((state_val_29910 === 6))
{var inst_29905 = (state_29909[2]);var state_29909__$1 = state_29909;var statearr_29915_29932 = state_29909__$1;(statearr_29915_29932[2] = inst_29905);
(statearr_29915_29932[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29910 === 3))
{var inst_29907 = (state_29909[2]);var state_29909__$1 = state_29909;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29909__$1,inst_29907);
} else
{if((state_val_29910 === 2))
{var inst_29890 = (state_29909[7]);var state_29909__$1 = state_29909;if(cljs.core.truth_(inst_29890))
{var statearr_29916_29933 = state_29909__$1;(statearr_29916_29933[1] = 4);
} else
{var statearr_29917_29934 = state_29909__$1;(statearr_29917_29934[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29910 === 9))
{var state_29909__$1 = state_29909;var statearr_29918_29935 = state_29909__$1;(statearr_29918_29935[2] = null);
(statearr_29918_29935[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29910 === 5))
{var state_29909__$1 = state_29909;if(cljs.core.truth_(close_QMARK_))
{var statearr_29919_29936 = state_29909__$1;(statearr_29919_29936[1] = 8);
} else
{var statearr_29920_29937 = state_29909__$1;(statearr_29920_29937[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29910 === 10))
{var inst_29903 = (state_29909[2]);var state_29909__$1 = state_29909;var statearr_29921_29938 = state_29909__$1;(statearr_29921_29938[2] = inst_29903);
(statearr_29921_29938[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29910 === 8))
{var inst_29900 = cljs.core.async.close_BANG_.call(null,ch);var state_29909__$1 = state_29909;var statearr_29922_29939 = state_29909__$1;(statearr_29922_29939[2] = inst_29900);
(statearr_29922_29939[1] = 10);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_29926 = [null,null,null,null,null,null,null,null,null];(statearr_29926[0] = state_machine__23717__auto__);
(statearr_29926[1] = 1);
return statearr_29926;
});
var state_machine__23717__auto____1 = (function (state_29909){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_29909);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e29927){if((e29927 instanceof Object))
{var ex__23720__auto__ = e29927;var statearr_29928_29940 = state_29909;(statearr_29928_29940[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29909);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29941 = state_29909;
state_29909 = G__29941;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_29909){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_29909);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_29929 = f__23781__auto__.call(null);(statearr_29929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto__);
return statearr_29929;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
}));
return c__23780__auto__;
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
cljs.core.async.Mux = (function (){var obj29943 = {};return obj29943;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__14970__auto__ = _;if(and__14970__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__14970__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__15609__auto__ = (((_ == null))?null:_);return (function (){var or__14982__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15609__auto__)]);if(or__14982__auto__)
{return or__14982__auto__;
} else
{var or__14982__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__14982__auto____$1)
{return or__14982__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj29945 = {};return obj29945;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__14970__auto__ = m;if(and__14970__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__14970__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__15609__auto__ = (((m == null))?null:m);return (function (){var or__14982__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15609__auto__)]);if(or__14982__auto__)
{return or__14982__auto__;
} else
{var or__14982__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__14982__auto____$1)
{return or__14982__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__14970__auto__ = m;if(and__14970__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__14970__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__15609__auto__ = (((m == null))?null:m);return (function (){var or__14982__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15609__auto__)]);if(or__14982__auto__)
{return or__14982__auto__;
} else
{var or__14982__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__14982__auto____$1)
{return or__14982__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__14970__auto__ = m;if(and__14970__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__14970__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__15609__auto__ = (((m == null))?null:m);return (function (){var or__14982__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15609__auto__)]);if(or__14982__auto__)
{return or__14982__auto__;
} else
{var or__14982__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__14982__auto____$1)
{return or__14982__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t30169 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30169 = (function (cs,ch,mult,meta30170){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta30170 = meta30170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30169.cljs$lang$type = true;
cljs.core.async.t30169.cljs$lang$ctorStr = "cljs.core.async/t30169";
cljs.core.async.t30169.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t30169");
});})(cs))
;
cljs.core.async.t30169.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t30169.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t30169.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t30169.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t30169.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30169.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t30169.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_30171){var self__ = this;
var _30171__$1 = this;return self__.meta30170;
});})(cs))
;
cljs.core.async.t30169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_30171,meta30170__$1){var self__ = this;
var _30171__$1 = this;return (new cljs.core.async.t30169(self__.cs,self__.ch,self__.mult,meta30170__$1));
});})(cs))
;
cljs.core.async.__GT_t30169 = ((function (cs){
return (function __GT_t30169(cs__$1,ch__$1,mult__$1,meta30170){return (new cljs.core.async.t30169(cs__$1,ch__$1,mult__$1,meta30170));
});})(cs))
;
}
return (new cljs.core.async.t30169(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__23780__auto___30392 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_30306){var state_val_30307 = (state_30306[1]);if((state_val_30307 === 7))
{var inst_30302 = (state_30306[2]);var state_30306__$1 = state_30306;var statearr_30308_30393 = state_30306__$1;(statearr_30308_30393[2] = inst_30302);
(statearr_30308_30393[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 20))
{var inst_30203 = (state_30306[7]);var inst_30213 = cljs.core.first.call(null,inst_30203);var inst_30214 = cljs.core.nth.call(null,inst_30213,0,null);var inst_30215 = cljs.core.nth.call(null,inst_30213,1,null);var state_30306__$1 = (function (){var statearr_30309 = state_30306;(statearr_30309[8] = inst_30214);
return statearr_30309;
})();if(cljs.core.truth_(inst_30215))
{var statearr_30310_30394 = state_30306__$1;(statearr_30310_30394[1] = 22);
} else
{var statearr_30311_30395 = state_30306__$1;(statearr_30311_30395[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 27))
{var inst_30245 = (state_30306[9]);var inst_30243 = (state_30306[10]);var inst_30250 = cljs.core._nth.call(null,inst_30243,inst_30245);var state_30306__$1 = (function (){var statearr_30312 = state_30306;(statearr_30312[11] = inst_30250);
return statearr_30312;
})();var statearr_30313_30396 = state_30306__$1;(statearr_30313_30396[2] = null);
(statearr_30313_30396[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 1))
{var state_30306__$1 = state_30306;var statearr_30314_30397 = state_30306__$1;(statearr_30314_30397[2] = null);
(statearr_30314_30397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 24))
{var inst_30203 = (state_30306[7]);var inst_30220 = (state_30306[2]);var inst_30221 = cljs.core.next.call(null,inst_30203);var inst_30183 = inst_30221;var inst_30184 = null;var inst_30185 = 0;var inst_30186 = 0;var state_30306__$1 = (function (){var statearr_30315 = state_30306;(statearr_30315[12] = inst_30186);
(statearr_30315[13] = inst_30184);
(statearr_30315[14] = inst_30183);
(statearr_30315[15] = inst_30185);
(statearr_30315[16] = inst_30220);
return statearr_30315;
})();var statearr_30316_30398 = state_30306__$1;(statearr_30316_30398[2] = null);
(statearr_30316_30398[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 39))
{var inst_30263 = (state_30306[17]);var inst_30281 = (state_30306[2]);var inst_30282 = cljs.core.next.call(null,inst_30263);var inst_30242 = inst_30282;var inst_30243 = null;var inst_30244 = 0;var inst_30245 = 0;var state_30306__$1 = (function (){var statearr_30320 = state_30306;(statearr_30320[18] = inst_30281);
(statearr_30320[9] = inst_30245);
(statearr_30320[19] = inst_30242);
(statearr_30320[10] = inst_30243);
(statearr_30320[20] = inst_30244);
return statearr_30320;
})();var statearr_30321_30399 = state_30306__$1;(statearr_30321_30399[2] = null);
(statearr_30321_30399[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 4))
{var inst_30174 = (state_30306[21]);var inst_30174__$1 = (state_30306[2]);var inst_30175 = (inst_30174__$1 == null);var state_30306__$1 = (function (){var statearr_30322 = state_30306;(statearr_30322[21] = inst_30174__$1);
return statearr_30322;
})();if(cljs.core.truth_(inst_30175))
{var statearr_30323_30400 = state_30306__$1;(statearr_30323_30400[1] = 5);
} else
{var statearr_30324_30401 = state_30306__$1;(statearr_30324_30401[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 15))
{var inst_30186 = (state_30306[12]);var inst_30184 = (state_30306[13]);var inst_30183 = (state_30306[14]);var inst_30185 = (state_30306[15]);var inst_30199 = (state_30306[2]);var inst_30200 = (inst_30186 + 1);var tmp30317 = inst_30184;var tmp30318 = inst_30183;var tmp30319 = inst_30185;var inst_30183__$1 = tmp30318;var inst_30184__$1 = tmp30317;var inst_30185__$1 = tmp30319;var inst_30186__$1 = inst_30200;var state_30306__$1 = (function (){var statearr_30325 = state_30306;(statearr_30325[12] = inst_30186__$1);
(statearr_30325[13] = inst_30184__$1);
(statearr_30325[22] = inst_30199);
(statearr_30325[14] = inst_30183__$1);
(statearr_30325[15] = inst_30185__$1);
return statearr_30325;
})();var statearr_30326_30402 = state_30306__$1;(statearr_30326_30402[2] = null);
(statearr_30326_30402[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 21))
{var inst_30224 = (state_30306[2]);var state_30306__$1 = state_30306;var statearr_30327_30403 = state_30306__$1;(statearr_30327_30403[2] = inst_30224);
(statearr_30327_30403[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 31))
{var inst_30250 = (state_30306[11]);var inst_30251 = (state_30306[2]);var inst_30252 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30253 = cljs.core.async.untap_STAR_.call(null,m,inst_30250);var state_30306__$1 = (function (){var statearr_30328 = state_30306;(statearr_30328[23] = inst_30251);
(statearr_30328[24] = inst_30252);
return statearr_30328;
})();var statearr_30329_30404 = state_30306__$1;(statearr_30329_30404[2] = inst_30253);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30306__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 32))
{var inst_30174 = (state_30306[21]);var inst_30250 = (state_30306[11]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30306,31,Object,null,30);var inst_30257 = cljs.core.async.put_BANG_.call(null,inst_30250,inst_30174,done);var state_30306__$1 = state_30306;var statearr_30330_30405 = state_30306__$1;(statearr_30330_30405[2] = inst_30257);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30306__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 40))
{var inst_30272 = (state_30306[25]);var inst_30273 = (state_30306[2]);var inst_30274 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_30275 = cljs.core.async.untap_STAR_.call(null,m,inst_30272);var state_30306__$1 = (function (){var statearr_30331 = state_30306;(statearr_30331[26] = inst_30273);
(statearr_30331[27] = inst_30274);
return statearr_30331;
})();var statearr_30332_30406 = state_30306__$1;(statearr_30332_30406[2] = inst_30275);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30306__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 33))
{var inst_30263 = (state_30306[17]);var inst_30265 = cljs.core.chunked_seq_QMARK_.call(null,inst_30263);var state_30306__$1 = state_30306;if(inst_30265)
{var statearr_30333_30407 = state_30306__$1;(statearr_30333_30407[1] = 36);
} else
{var statearr_30334_30408 = state_30306__$1;(statearr_30334_30408[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 13))
{var inst_30193 = (state_30306[28]);var inst_30196 = cljs.core.async.close_BANG_.call(null,inst_30193);var state_30306__$1 = state_30306;var statearr_30335_30409 = state_30306__$1;(statearr_30335_30409[2] = inst_30196);
(statearr_30335_30409[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 22))
{var inst_30214 = (state_30306[8]);var inst_30217 = cljs.core.async.close_BANG_.call(null,inst_30214);var state_30306__$1 = state_30306;var statearr_30336_30410 = state_30306__$1;(statearr_30336_30410[2] = inst_30217);
(statearr_30336_30410[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 36))
{var inst_30263 = (state_30306[17]);var inst_30267 = cljs.core.chunk_first.call(null,inst_30263);var inst_30268 = cljs.core.chunk_rest.call(null,inst_30263);var inst_30269 = cljs.core.count.call(null,inst_30267);var inst_30242 = inst_30268;var inst_30243 = inst_30267;var inst_30244 = inst_30269;var inst_30245 = 0;var state_30306__$1 = (function (){var statearr_30337 = state_30306;(statearr_30337[9] = inst_30245);
(statearr_30337[19] = inst_30242);
(statearr_30337[10] = inst_30243);
(statearr_30337[20] = inst_30244);
return statearr_30337;
})();var statearr_30338_30411 = state_30306__$1;(statearr_30338_30411[2] = null);
(statearr_30338_30411[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 41))
{var inst_30174 = (state_30306[21]);var inst_30272 = (state_30306[25]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30306,40,Object,null,39);var inst_30279 = cljs.core.async.put_BANG_.call(null,inst_30272,inst_30174,done);var state_30306__$1 = state_30306;var statearr_30339_30412 = state_30306__$1;(statearr_30339_30412[2] = inst_30279);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30306__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 43))
{var state_30306__$1 = state_30306;var statearr_30340_30413 = state_30306__$1;(statearr_30340_30413[2] = null);
(statearr_30340_30413[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 29))
{var inst_30290 = (state_30306[2]);var state_30306__$1 = state_30306;var statearr_30341_30414 = state_30306__$1;(statearr_30341_30414[2] = inst_30290);
(statearr_30341_30414[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 44))
{var inst_30299 = (state_30306[2]);var state_30306__$1 = (function (){var statearr_30342 = state_30306;(statearr_30342[29] = inst_30299);
return statearr_30342;
})();var statearr_30343_30415 = state_30306__$1;(statearr_30343_30415[2] = null);
(statearr_30343_30415[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 6))
{var inst_30234 = (state_30306[30]);var inst_30233 = cljs.core.deref.call(null,cs);var inst_30234__$1 = cljs.core.keys.call(null,inst_30233);var inst_30235 = cljs.core.count.call(null,inst_30234__$1);var inst_30236 = cljs.core.reset_BANG_.call(null,dctr,inst_30235);var inst_30241 = cljs.core.seq.call(null,inst_30234__$1);var inst_30242 = inst_30241;var inst_30243 = null;var inst_30244 = 0;var inst_30245 = 0;var state_30306__$1 = (function (){var statearr_30344 = state_30306;(statearr_30344[9] = inst_30245);
(statearr_30344[19] = inst_30242);
(statearr_30344[10] = inst_30243);
(statearr_30344[31] = inst_30236);
(statearr_30344[20] = inst_30244);
(statearr_30344[30] = inst_30234__$1);
return statearr_30344;
})();var statearr_30345_30416 = state_30306__$1;(statearr_30345_30416[2] = null);
(statearr_30345_30416[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 28))
{var inst_30242 = (state_30306[19]);var inst_30263 = (state_30306[17]);var inst_30263__$1 = cljs.core.seq.call(null,inst_30242);var state_30306__$1 = (function (){var statearr_30346 = state_30306;(statearr_30346[17] = inst_30263__$1);
return statearr_30346;
})();if(inst_30263__$1)
{var statearr_30347_30417 = state_30306__$1;(statearr_30347_30417[1] = 33);
} else
{var statearr_30348_30418 = state_30306__$1;(statearr_30348_30418[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 25))
{var inst_30245 = (state_30306[9]);var inst_30244 = (state_30306[20]);var inst_30247 = (inst_30245 < inst_30244);var inst_30248 = inst_30247;var state_30306__$1 = state_30306;if(cljs.core.truth_(inst_30248))
{var statearr_30349_30419 = state_30306__$1;(statearr_30349_30419[1] = 27);
} else
{var statearr_30350_30420 = state_30306__$1;(statearr_30350_30420[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 34))
{var state_30306__$1 = state_30306;var statearr_30351_30421 = state_30306__$1;(statearr_30351_30421[2] = null);
(statearr_30351_30421[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 17))
{var state_30306__$1 = state_30306;var statearr_30352_30422 = state_30306__$1;(statearr_30352_30422[2] = null);
(statearr_30352_30422[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 3))
{var inst_30304 = (state_30306[2]);var state_30306__$1 = state_30306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30306__$1,inst_30304);
} else
{if((state_val_30307 === 12))
{var inst_30229 = (state_30306[2]);var state_30306__$1 = state_30306;var statearr_30353_30423 = state_30306__$1;(statearr_30353_30423[2] = inst_30229);
(statearr_30353_30423[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 2))
{var state_30306__$1 = state_30306;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30306__$1,4,ch);
} else
{if((state_val_30307 === 23))
{var state_30306__$1 = state_30306;var statearr_30354_30424 = state_30306__$1;(statearr_30354_30424[2] = null);
(statearr_30354_30424[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 35))
{var inst_30288 = (state_30306[2]);var state_30306__$1 = state_30306;var statearr_30355_30425 = state_30306__$1;(statearr_30355_30425[2] = inst_30288);
(statearr_30355_30425[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 19))
{var inst_30203 = (state_30306[7]);var inst_30207 = cljs.core.chunk_first.call(null,inst_30203);var inst_30208 = cljs.core.chunk_rest.call(null,inst_30203);var inst_30209 = cljs.core.count.call(null,inst_30207);var inst_30183 = inst_30208;var inst_30184 = inst_30207;var inst_30185 = inst_30209;var inst_30186 = 0;var state_30306__$1 = (function (){var statearr_30356 = state_30306;(statearr_30356[12] = inst_30186);
(statearr_30356[13] = inst_30184);
(statearr_30356[14] = inst_30183);
(statearr_30356[15] = inst_30185);
return statearr_30356;
})();var statearr_30357_30426 = state_30306__$1;(statearr_30357_30426[2] = null);
(statearr_30357_30426[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 11))
{var inst_30203 = (state_30306[7]);var inst_30183 = (state_30306[14]);var inst_30203__$1 = cljs.core.seq.call(null,inst_30183);var state_30306__$1 = (function (){var statearr_30358 = state_30306;(statearr_30358[7] = inst_30203__$1);
return statearr_30358;
})();if(inst_30203__$1)
{var statearr_30359_30427 = state_30306__$1;(statearr_30359_30427[1] = 16);
} else
{var statearr_30360_30428 = state_30306__$1;(statearr_30360_30428[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 9))
{var inst_30231 = (state_30306[2]);var state_30306__$1 = state_30306;var statearr_30361_30429 = state_30306__$1;(statearr_30361_30429[2] = inst_30231);
(statearr_30361_30429[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 5))
{var inst_30181 = cljs.core.deref.call(null,cs);var inst_30182 = cljs.core.seq.call(null,inst_30181);var inst_30183 = inst_30182;var inst_30184 = null;var inst_30185 = 0;var inst_30186 = 0;var state_30306__$1 = (function (){var statearr_30362 = state_30306;(statearr_30362[12] = inst_30186);
(statearr_30362[13] = inst_30184);
(statearr_30362[14] = inst_30183);
(statearr_30362[15] = inst_30185);
return statearr_30362;
})();var statearr_30363_30430 = state_30306__$1;(statearr_30363_30430[2] = null);
(statearr_30363_30430[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 14))
{var state_30306__$1 = state_30306;var statearr_30364_30431 = state_30306__$1;(statearr_30364_30431[2] = null);
(statearr_30364_30431[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 45))
{var inst_30296 = (state_30306[2]);var state_30306__$1 = state_30306;var statearr_30365_30432 = state_30306__$1;(statearr_30365_30432[2] = inst_30296);
(statearr_30365_30432[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 26))
{var inst_30234 = (state_30306[30]);var inst_30292 = (state_30306[2]);var inst_30293 = cljs.core.seq.call(null,inst_30234);var state_30306__$1 = (function (){var statearr_30366 = state_30306;(statearr_30366[32] = inst_30292);
return statearr_30366;
})();if(inst_30293)
{var statearr_30367_30433 = state_30306__$1;(statearr_30367_30433[1] = 42);
} else
{var statearr_30368_30434 = state_30306__$1;(statearr_30368_30434[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 16))
{var inst_30203 = (state_30306[7]);var inst_30205 = cljs.core.chunked_seq_QMARK_.call(null,inst_30203);var state_30306__$1 = state_30306;if(inst_30205)
{var statearr_30372_30435 = state_30306__$1;(statearr_30372_30435[1] = 19);
} else
{var statearr_30373_30436 = state_30306__$1;(statearr_30373_30436[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 38))
{var inst_30285 = (state_30306[2]);var state_30306__$1 = state_30306;var statearr_30374_30437 = state_30306__$1;(statearr_30374_30437[2] = inst_30285);
(statearr_30374_30437[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 30))
{var inst_30245 = (state_30306[9]);var inst_30242 = (state_30306[19]);var inst_30243 = (state_30306[10]);var inst_30244 = (state_30306[20]);var inst_30259 = (state_30306[2]);var inst_30260 = (inst_30245 + 1);var tmp30369 = inst_30242;var tmp30370 = inst_30243;var tmp30371 = inst_30244;var inst_30242__$1 = tmp30369;var inst_30243__$1 = tmp30370;var inst_30244__$1 = tmp30371;var inst_30245__$1 = inst_30260;var state_30306__$1 = (function (){var statearr_30375 = state_30306;(statearr_30375[9] = inst_30245__$1);
(statearr_30375[19] = inst_30242__$1);
(statearr_30375[10] = inst_30243__$1);
(statearr_30375[33] = inst_30259);
(statearr_30375[20] = inst_30244__$1);
return statearr_30375;
})();var statearr_30376_30438 = state_30306__$1;(statearr_30376_30438[2] = null);
(statearr_30376_30438[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 10))
{var inst_30186 = (state_30306[12]);var inst_30184 = (state_30306[13]);var inst_30192 = cljs.core._nth.call(null,inst_30184,inst_30186);var inst_30193 = cljs.core.nth.call(null,inst_30192,0,null);var inst_30194 = cljs.core.nth.call(null,inst_30192,1,null);var state_30306__$1 = (function (){var statearr_30377 = state_30306;(statearr_30377[28] = inst_30193);
return statearr_30377;
})();if(cljs.core.truth_(inst_30194))
{var statearr_30378_30439 = state_30306__$1;(statearr_30378_30439[1] = 13);
} else
{var statearr_30379_30440 = state_30306__$1;(statearr_30379_30440[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 18))
{var inst_30227 = (state_30306[2]);var state_30306__$1 = state_30306;var statearr_30380_30441 = state_30306__$1;(statearr_30380_30441[2] = inst_30227);
(statearr_30380_30441[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 42))
{var state_30306__$1 = state_30306;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30306__$1,45,dchan);
} else
{if((state_val_30307 === 37))
{var inst_30263 = (state_30306[17]);var inst_30272 = cljs.core.first.call(null,inst_30263);var state_30306__$1 = (function (){var statearr_30381 = state_30306;(statearr_30381[25] = inst_30272);
return statearr_30381;
})();var statearr_30382_30442 = state_30306__$1;(statearr_30382_30442[2] = null);
(statearr_30382_30442[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30307 === 8))
{var inst_30186 = (state_30306[12]);var inst_30185 = (state_30306[15]);var inst_30188 = (inst_30186 < inst_30185);var inst_30189 = inst_30188;var state_30306__$1 = state_30306;if(cljs.core.truth_(inst_30189))
{var statearr_30383_30443 = state_30306__$1;(statearr_30383_30443[1] = 10);
} else
{var statearr_30384_30444 = state_30306__$1;(statearr_30384_30444[1] = 11);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_30388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30388[0] = state_machine__23717__auto__);
(statearr_30388[1] = 1);
return statearr_30388;
});
var state_machine__23717__auto____1 = (function (state_30306){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_30306);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e30389){if((e30389 instanceof Object))
{var ex__23720__auto__ = e30389;var statearr_30390_30445 = state_30306;(statearr_30390_30445[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30306);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30446 = state_30306;
state_30306 = G__30446;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_30306){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_30306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_30391 = f__23781__auto__.call(null);(statearr_30391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___30392);
return statearr_30391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
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
cljs.core.async.Mix = (function (){var obj30448 = {};return obj30448;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__14970__auto__ = m;if(and__14970__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__14970__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__15609__auto__ = (((m == null))?null:m);return (function (){var or__14982__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15609__auto__)]);if(or__14982__auto__)
{return or__14982__auto__;
} else
{var or__14982__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__14982__auto____$1)
{return or__14982__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__14970__auto__ = m;if(and__14970__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__14970__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__15609__auto__ = (((m == null))?null:m);return (function (){var or__14982__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15609__auto__)]);if(or__14982__auto__)
{return or__14982__auto__;
} else
{var or__14982__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__14982__auto____$1)
{return or__14982__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__14970__auto__ = m;if(and__14970__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__14970__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__15609__auto__ = (((m == null))?null:m);return (function (){var or__14982__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15609__auto__)]);if(or__14982__auto__)
{return or__14982__auto__;
} else
{var or__14982__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__14982__auto____$1)
{return or__14982__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__14970__auto__ = m;if(and__14970__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__14970__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__15609__auto__ = (((m == null))?null:m);return (function (){var or__14982__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15609__auto__)]);if(or__14982__auto__)
{return or__14982__auto__;
} else
{var or__14982__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__14982__auto____$1)
{return or__14982__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__14970__auto__ = m;if(and__14970__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__14970__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__15609__auto__ = (((m == null))?null:m);return (function (){var or__14982__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15609__auto__)]);if(or__14982__auto__)
{return or__14982__auto__;
} else
{var or__14982__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__14982__auto____$1)
{return or__14982__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t30558 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30558 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30559){
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
this.meta30559 = meta30559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30558.cljs$lang$type = true;
cljs.core.async.t30558.cljs$lang$ctorStr = "cljs.core.async/t30558";
cljs.core.async.t30558.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t30558");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30558.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t30558.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30558.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30558.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30558.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30558.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30558.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30558.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30558.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30560){var self__ = this;
var _30560__$1 = this;return self__.meta30559;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t30558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_30560,meta30559__$1){var self__ = this;
var _30560__$1 = this;return (new cljs.core.async.t30558(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30559__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t30558 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t30558(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30559){return (new cljs.core.async.t30558(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30559));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t30558(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__23780__auto___30667 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_30625){var state_val_30626 = (state_30625[1]);if((state_val_30626 === 7))
{var inst_30574 = (state_30625[7]);var inst_30579 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30574);var state_30625__$1 = state_30625;var statearr_30627_30668 = state_30625__$1;(statearr_30627_30668[2] = inst_30579);
(statearr_30627_30668[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 20))
{var inst_30589 = (state_30625[8]);var state_30625__$1 = state_30625;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30625__$1,23,out,inst_30589);
} else
{if((state_val_30626 === 1))
{var inst_30564 = (state_30625[9]);var inst_30564__$1 = calc_state.call(null);var inst_30565 = cljs.core.seq_QMARK_.call(null,inst_30564__$1);var state_30625__$1 = (function (){var statearr_30628 = state_30625;(statearr_30628[9] = inst_30564__$1);
return statearr_30628;
})();if(inst_30565)
{var statearr_30629_30669 = state_30625__$1;(statearr_30629_30669[1] = 2);
} else
{var statearr_30630_30670 = state_30625__$1;(statearr_30630_30670[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 4))
{var inst_30564 = (state_30625[9]);var inst_30570 = (state_30625[2]);var inst_30571 = cljs.core.get.call(null,inst_30570,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_30572 = cljs.core.get.call(null,inst_30570,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_30573 = cljs.core.get.call(null,inst_30570,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_30574 = inst_30564;var state_30625__$1 = (function (){var statearr_30631 = state_30625;(statearr_30631[7] = inst_30574);
(statearr_30631[10] = inst_30573);
(statearr_30631[11] = inst_30571);
(statearr_30631[12] = inst_30572);
return statearr_30631;
})();var statearr_30632_30671 = state_30625__$1;(statearr_30632_30671[2] = null);
(statearr_30632_30671[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 15))
{var state_30625__$1 = state_30625;var statearr_30633_30672 = state_30625__$1;(statearr_30633_30672[2] = null);
(statearr_30633_30672[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 21))
{var state_30625__$1 = state_30625;var statearr_30634_30673 = state_30625__$1;(statearr_30634_30673[2] = null);
(statearr_30634_30673[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 13))
{var inst_30621 = (state_30625[2]);var state_30625__$1 = state_30625;var statearr_30635_30674 = state_30625__$1;(statearr_30635_30674[2] = inst_30621);
(statearr_30635_30674[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 22))
{var inst_30582 = (state_30625[13]);var inst_30618 = (state_30625[2]);var inst_30574 = inst_30582;var state_30625__$1 = (function (){var statearr_30636 = state_30625;(statearr_30636[7] = inst_30574);
(statearr_30636[14] = inst_30618);
return statearr_30636;
})();var statearr_30637_30675 = state_30625__$1;(statearr_30637_30675[2] = null);
(statearr_30637_30675[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 6))
{var inst_30623 = (state_30625[2]);var state_30625__$1 = state_30625;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30625__$1,inst_30623);
} else
{if((state_val_30626 === 17))
{var inst_30604 = (state_30625[15]);var state_30625__$1 = state_30625;var statearr_30638_30676 = state_30625__$1;(statearr_30638_30676[2] = inst_30604);
(statearr_30638_30676[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 3))
{var inst_30564 = (state_30625[9]);var state_30625__$1 = state_30625;var statearr_30639_30677 = state_30625__$1;(statearr_30639_30677[2] = inst_30564);
(statearr_30639_30677[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 12))
{var inst_30604 = (state_30625[15]);var inst_30590 = (state_30625[16]);var inst_30585 = (state_30625[17]);var inst_30604__$1 = inst_30585.call(null,inst_30590);var state_30625__$1 = (function (){var statearr_30640 = state_30625;(statearr_30640[15] = inst_30604__$1);
return statearr_30640;
})();if(cljs.core.truth_(inst_30604__$1))
{var statearr_30641_30678 = state_30625__$1;(statearr_30641_30678[1] = 17);
} else
{var statearr_30642_30679 = state_30625__$1;(statearr_30642_30679[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 2))
{var inst_30564 = (state_30625[9]);var inst_30567 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30564);var state_30625__$1 = state_30625;var statearr_30643_30680 = state_30625__$1;(statearr_30643_30680[2] = inst_30567);
(statearr_30643_30680[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 23))
{var inst_30615 = (state_30625[2]);var state_30625__$1 = state_30625;var statearr_30644_30681 = state_30625__$1;(statearr_30644_30681[2] = inst_30615);
(statearr_30644_30681[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 19))
{var inst_30612 = (state_30625[2]);var state_30625__$1 = state_30625;if(cljs.core.truth_(inst_30612))
{var statearr_30645_30682 = state_30625__$1;(statearr_30645_30682[1] = 20);
} else
{var statearr_30646_30683 = state_30625__$1;(statearr_30646_30683[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 11))
{var inst_30589 = (state_30625[8]);var inst_30595 = (inst_30589 == null);var state_30625__$1 = state_30625;if(cljs.core.truth_(inst_30595))
{var statearr_30647_30684 = state_30625__$1;(statearr_30647_30684[1] = 14);
} else
{var statearr_30648_30685 = state_30625__$1;(statearr_30648_30685[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 9))
{var inst_30582 = (state_30625[13]);var inst_30582__$1 = (state_30625[2]);var inst_30583 = cljs.core.get.call(null,inst_30582__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_30584 = cljs.core.get.call(null,inst_30582__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_30585 = cljs.core.get.call(null,inst_30582__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_30625__$1 = (function (){var statearr_30649 = state_30625;(statearr_30649[18] = inst_30584);
(statearr_30649[13] = inst_30582__$1);
(statearr_30649[17] = inst_30585);
return statearr_30649;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_30625__$1,10,inst_30583);
} else
{if((state_val_30626 === 5))
{var inst_30574 = (state_30625[7]);var inst_30577 = cljs.core.seq_QMARK_.call(null,inst_30574);var state_30625__$1 = state_30625;if(inst_30577)
{var statearr_30650_30686 = state_30625__$1;(statearr_30650_30686[1] = 7);
} else
{var statearr_30651_30687 = state_30625__$1;(statearr_30651_30687[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 14))
{var inst_30590 = (state_30625[16]);var inst_30597 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_30590);var state_30625__$1 = state_30625;var statearr_30652_30688 = state_30625__$1;(statearr_30652_30688[2] = inst_30597);
(statearr_30652_30688[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 16))
{var inst_30600 = (state_30625[2]);var inst_30601 = calc_state.call(null);var inst_30574 = inst_30601;var state_30625__$1 = (function (){var statearr_30653 = state_30625;(statearr_30653[7] = inst_30574);
(statearr_30653[19] = inst_30600);
return statearr_30653;
})();var statearr_30654_30689 = state_30625__$1;(statearr_30654_30689[2] = null);
(statearr_30654_30689[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 10))
{var inst_30590 = (state_30625[16]);var inst_30589 = (state_30625[8]);var inst_30588 = (state_30625[2]);var inst_30589__$1 = cljs.core.nth.call(null,inst_30588,0,null);var inst_30590__$1 = cljs.core.nth.call(null,inst_30588,1,null);var inst_30591 = (inst_30589__$1 == null);var inst_30592 = cljs.core._EQ_.call(null,inst_30590__$1,change);var inst_30593 = (inst_30591) || (inst_30592);var state_30625__$1 = (function (){var statearr_30655 = state_30625;(statearr_30655[16] = inst_30590__$1);
(statearr_30655[8] = inst_30589__$1);
return statearr_30655;
})();if(cljs.core.truth_(inst_30593))
{var statearr_30656_30690 = state_30625__$1;(statearr_30656_30690[1] = 11);
} else
{var statearr_30657_30691 = state_30625__$1;(statearr_30657_30691[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 18))
{var inst_30584 = (state_30625[18]);var inst_30590 = (state_30625[16]);var inst_30585 = (state_30625[17]);var inst_30607 = cljs.core.empty_QMARK_.call(null,inst_30585);var inst_30608 = inst_30584.call(null,inst_30590);var inst_30609 = cljs.core.not.call(null,inst_30608);var inst_30610 = (inst_30607) && (inst_30609);var state_30625__$1 = state_30625;var statearr_30658_30692 = state_30625__$1;(statearr_30658_30692[2] = inst_30610);
(statearr_30658_30692[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30626 === 8))
{var inst_30574 = (state_30625[7]);var state_30625__$1 = state_30625;var statearr_30659_30693 = state_30625__$1;(statearr_30659_30693[2] = inst_30574);
(statearr_30659_30693[1] = 9);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_30663 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30663[0] = state_machine__23717__auto__);
(statearr_30663[1] = 1);
return statearr_30663;
});
var state_machine__23717__auto____1 = (function (state_30625){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_30625);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e30664){if((e30664 instanceof Object))
{var ex__23720__auto__ = e30664;var statearr_30665_30694 = state_30625;(statearr_30665_30694[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30625);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30664;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30695 = state_30625;
state_30625 = G__30695;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_30625){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_30625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_30666 = f__23781__auto__.call(null);(statearr_30666[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___30667);
return statearr_30666;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
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
cljs.core.async.Pub = (function (){var obj30697 = {};return obj30697;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__14970__auto__ = p;if(and__14970__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__14970__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__15609__auto__ = (((p == null))?null:p);return (function (){var or__14982__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15609__auto__)]);if(or__14982__auto__)
{return or__14982__auto__;
} else
{var or__14982__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__14982__auto____$1)
{return or__14982__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__14970__auto__ = p;if(and__14970__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__14970__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__15609__auto__ = (((p == null))?null:p);return (function (){var or__14982__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15609__auto__)]);if(or__14982__auto__)
{return or__14982__auto__;
} else
{var or__14982__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__14982__auto____$1)
{return or__14982__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__14970__auto__ = p;if(and__14970__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__14970__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__15609__auto__ = (((p == null))?null:p);return (function (){var or__14982__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15609__auto__)]);if(or__14982__auto__)
{return or__14982__auto__;
} else
{var or__14982__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__14982__auto____$1)
{return or__14982__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__14970__auto__ = p;if(and__14970__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__14970__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__15609__auto__ = (((p == null))?null:p);return (function (){var or__14982__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15609__auto__)]);if(or__14982__auto__)
{return or__14982__auto__;
} else
{var or__14982__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__14982__auto____$1)
{return or__14982__auto____$1;
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
return (function (topic){var or__14982__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__14982__auto__,mults){
return (function (p1__30698_SHARP_){if(cljs.core.truth_(p1__30698_SHARP_.call(null,topic)))
{return p1__30698_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__30698_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14982__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t30823 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30823 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta30824){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta30824 = meta30824;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30823.cljs$lang$type = true;
cljs.core.async.t30823.cljs$lang$ctorStr = "cljs.core.async/t30823";
cljs.core.async.t30823.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t30823");
});})(mults,ensure_mult))
;
cljs.core.async.t30823.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t30823.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t30823.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t30823.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t30823.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t30823.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t30823.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t30823.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_30825){var self__ = this;
var _30825__$1 = this;return self__.meta30824;
});})(mults,ensure_mult))
;
cljs.core.async.t30823.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_30825,meta30824__$1){var self__ = this;
var _30825__$1 = this;return (new cljs.core.async.t30823(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta30824__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t30823 = ((function (mults,ensure_mult){
return (function __GT_t30823(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30824){return (new cljs.core.async.t30823(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta30824));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t30823(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__23780__auto___30947 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_30899){var state_val_30900 = (state_30899[1]);if((state_val_30900 === 7))
{var inst_30895 = (state_30899[2]);var state_30899__$1 = state_30899;var statearr_30901_30948 = state_30899__$1;(statearr_30901_30948[2] = inst_30895);
(statearr_30901_30948[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 20))
{var state_30899__$1 = state_30899;var statearr_30902_30949 = state_30899__$1;(statearr_30902_30949[2] = null);
(statearr_30902_30949[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 1))
{var state_30899__$1 = state_30899;var statearr_30903_30950 = state_30899__$1;(statearr_30903_30950[2] = null);
(statearr_30903_30950[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 24))
{var inst_30828 = (state_30899[7]);var inst_30878 = (state_30899[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_30899,23,Object,null,22);var inst_30885 = cljs.core.async.muxch_STAR_.call(null,inst_30878);var state_30899__$1 = state_30899;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30899__$1,25,inst_30885,inst_30828);
} else
{if((state_val_30900 === 4))
{var inst_30828 = (state_30899[7]);var inst_30828__$1 = (state_30899[2]);var inst_30829 = (inst_30828__$1 == null);var state_30899__$1 = (function (){var statearr_30904 = state_30899;(statearr_30904[7] = inst_30828__$1);
return statearr_30904;
})();if(cljs.core.truth_(inst_30829))
{var statearr_30905_30951 = state_30899__$1;(statearr_30905_30951[1] = 5);
} else
{var statearr_30906_30952 = state_30899__$1;(statearr_30906_30952[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 15))
{var inst_30870 = (state_30899[2]);var state_30899__$1 = state_30899;var statearr_30907_30953 = state_30899__$1;(statearr_30907_30953[2] = inst_30870);
(statearr_30907_30953[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 21))
{var inst_30892 = (state_30899[2]);var state_30899__$1 = (function (){var statearr_30908 = state_30899;(statearr_30908[9] = inst_30892);
return statearr_30908;
})();var statearr_30909_30954 = state_30899__$1;(statearr_30909_30954[2] = null);
(statearr_30909_30954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 13))
{var inst_30852 = (state_30899[10]);var inst_30854 = cljs.core.chunked_seq_QMARK_.call(null,inst_30852);var state_30899__$1 = state_30899;if(inst_30854)
{var statearr_30910_30955 = state_30899__$1;(statearr_30910_30955[1] = 16);
} else
{var statearr_30911_30956 = state_30899__$1;(statearr_30911_30956[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 22))
{var inst_30889 = (state_30899[2]);var state_30899__$1 = state_30899;var statearr_30912_30957 = state_30899__$1;(statearr_30912_30957[2] = inst_30889);
(statearr_30912_30957[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 6))
{var inst_30828 = (state_30899[7]);var inst_30876 = (state_30899[11]);var inst_30878 = (state_30899[8]);var inst_30876__$1 = topic_fn.call(null,inst_30828);var inst_30877 = cljs.core.deref.call(null,mults);var inst_30878__$1 = cljs.core.get.call(null,inst_30877,inst_30876__$1);var state_30899__$1 = (function (){var statearr_30913 = state_30899;(statearr_30913[11] = inst_30876__$1);
(statearr_30913[8] = inst_30878__$1);
return statearr_30913;
})();if(cljs.core.truth_(inst_30878__$1))
{var statearr_30914_30958 = state_30899__$1;(statearr_30914_30958[1] = 19);
} else
{var statearr_30915_30959 = state_30899__$1;(statearr_30915_30959[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 25))
{var inst_30887 = (state_30899[2]);var state_30899__$1 = state_30899;var statearr_30916_30960 = state_30899__$1;(statearr_30916_30960[2] = inst_30887);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30899__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 17))
{var inst_30852 = (state_30899[10]);var inst_30861 = cljs.core.first.call(null,inst_30852);var inst_30862 = cljs.core.async.muxch_STAR_.call(null,inst_30861);var inst_30863 = cljs.core.async.close_BANG_.call(null,inst_30862);var inst_30864 = cljs.core.next.call(null,inst_30852);var inst_30838 = inst_30864;var inst_30839 = null;var inst_30840 = 0;var inst_30841 = 0;var state_30899__$1 = (function (){var statearr_30917 = state_30899;(statearr_30917[12] = inst_30841);
(statearr_30917[13] = inst_30838);
(statearr_30917[14] = inst_30840);
(statearr_30917[15] = inst_30839);
(statearr_30917[16] = inst_30863);
return statearr_30917;
})();var statearr_30918_30961 = state_30899__$1;(statearr_30918_30961[2] = null);
(statearr_30918_30961[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 3))
{var inst_30897 = (state_30899[2]);var state_30899__$1 = state_30899;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30899__$1,inst_30897);
} else
{if((state_val_30900 === 12))
{var inst_30872 = (state_30899[2]);var state_30899__$1 = state_30899;var statearr_30919_30962 = state_30899__$1;(statearr_30919_30962[2] = inst_30872);
(statearr_30919_30962[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 2))
{var state_30899__$1 = state_30899;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30899__$1,4,ch);
} else
{if((state_val_30900 === 23))
{var inst_30876 = (state_30899[11]);var inst_30880 = (state_30899[2]);var inst_30881 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_30876);var state_30899__$1 = (function (){var statearr_30920 = state_30899;(statearr_30920[17] = inst_30880);
return statearr_30920;
})();var statearr_30921_30963 = state_30899__$1;(statearr_30921_30963[2] = inst_30881);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30899__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 19))
{var state_30899__$1 = state_30899;var statearr_30922_30964 = state_30899__$1;(statearr_30922_30964[2] = null);
(statearr_30922_30964[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 11))
{var inst_30838 = (state_30899[13]);var inst_30852 = (state_30899[10]);var inst_30852__$1 = cljs.core.seq.call(null,inst_30838);var state_30899__$1 = (function (){var statearr_30923 = state_30899;(statearr_30923[10] = inst_30852__$1);
return statearr_30923;
})();if(inst_30852__$1)
{var statearr_30924_30965 = state_30899__$1;(statearr_30924_30965[1] = 13);
} else
{var statearr_30925_30966 = state_30899__$1;(statearr_30925_30966[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 9))
{var inst_30874 = (state_30899[2]);var state_30899__$1 = state_30899;var statearr_30926_30967 = state_30899__$1;(statearr_30926_30967[2] = inst_30874);
(statearr_30926_30967[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 5))
{var inst_30835 = cljs.core.deref.call(null,mults);var inst_30836 = cljs.core.vals.call(null,inst_30835);var inst_30837 = cljs.core.seq.call(null,inst_30836);var inst_30838 = inst_30837;var inst_30839 = null;var inst_30840 = 0;var inst_30841 = 0;var state_30899__$1 = (function (){var statearr_30927 = state_30899;(statearr_30927[12] = inst_30841);
(statearr_30927[13] = inst_30838);
(statearr_30927[14] = inst_30840);
(statearr_30927[15] = inst_30839);
return statearr_30927;
})();var statearr_30928_30968 = state_30899__$1;(statearr_30928_30968[2] = null);
(statearr_30928_30968[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 14))
{var state_30899__$1 = state_30899;var statearr_30932_30969 = state_30899__$1;(statearr_30932_30969[2] = null);
(statearr_30932_30969[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 16))
{var inst_30852 = (state_30899[10]);var inst_30856 = cljs.core.chunk_first.call(null,inst_30852);var inst_30857 = cljs.core.chunk_rest.call(null,inst_30852);var inst_30858 = cljs.core.count.call(null,inst_30856);var inst_30838 = inst_30857;var inst_30839 = inst_30856;var inst_30840 = inst_30858;var inst_30841 = 0;var state_30899__$1 = (function (){var statearr_30933 = state_30899;(statearr_30933[12] = inst_30841);
(statearr_30933[13] = inst_30838);
(statearr_30933[14] = inst_30840);
(statearr_30933[15] = inst_30839);
return statearr_30933;
})();var statearr_30934_30970 = state_30899__$1;(statearr_30934_30970[2] = null);
(statearr_30934_30970[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 10))
{var inst_30841 = (state_30899[12]);var inst_30838 = (state_30899[13]);var inst_30840 = (state_30899[14]);var inst_30839 = (state_30899[15]);var inst_30846 = cljs.core._nth.call(null,inst_30839,inst_30841);var inst_30847 = cljs.core.async.muxch_STAR_.call(null,inst_30846);var inst_30848 = cljs.core.async.close_BANG_.call(null,inst_30847);var inst_30849 = (inst_30841 + 1);var tmp30929 = inst_30838;var tmp30930 = inst_30840;var tmp30931 = inst_30839;var inst_30838__$1 = tmp30929;var inst_30839__$1 = tmp30931;var inst_30840__$1 = tmp30930;var inst_30841__$1 = inst_30849;var state_30899__$1 = (function (){var statearr_30935 = state_30899;(statearr_30935[12] = inst_30841__$1);
(statearr_30935[13] = inst_30838__$1);
(statearr_30935[14] = inst_30840__$1);
(statearr_30935[18] = inst_30848);
(statearr_30935[15] = inst_30839__$1);
return statearr_30935;
})();var statearr_30936_30971 = state_30899__$1;(statearr_30936_30971[2] = null);
(statearr_30936_30971[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 18))
{var inst_30867 = (state_30899[2]);var state_30899__$1 = state_30899;var statearr_30937_30972 = state_30899__$1;(statearr_30937_30972[2] = inst_30867);
(statearr_30937_30972[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30900 === 8))
{var inst_30841 = (state_30899[12]);var inst_30840 = (state_30899[14]);var inst_30843 = (inst_30841 < inst_30840);var inst_30844 = inst_30843;var state_30899__$1 = state_30899;if(cljs.core.truth_(inst_30844))
{var statearr_30938_30973 = state_30899__$1;(statearr_30938_30973[1] = 10);
} else
{var statearr_30939_30974 = state_30899__$1;(statearr_30939_30974[1] = 11);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_30943 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30943[0] = state_machine__23717__auto__);
(statearr_30943[1] = 1);
return statearr_30943;
});
var state_machine__23717__auto____1 = (function (state_30899){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_30899);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e30944){if((e30944 instanceof Object))
{var ex__23720__auto__ = e30944;var statearr_30945_30975 = state_30899;(statearr_30945_30975[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30899);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30944;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30976 = state_30899;
state_30899 = G__30976;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_30899){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_30899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_30946 = f__23781__auto__.call(null);(statearr_30946[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___30947);
return statearr_30946;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
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
,cljs.core.range.call(null,cnt));var c__23780__auto___31113 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_31083){var state_val_31084 = (state_31083[1]);if((state_val_31084 === 7))
{var state_31083__$1 = state_31083;var statearr_31085_31114 = state_31083__$1;(statearr_31085_31114[2] = null);
(statearr_31085_31114[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31084 === 1))
{var state_31083__$1 = state_31083;var statearr_31086_31115 = state_31083__$1;(statearr_31086_31115[2] = null);
(statearr_31086_31115[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31084 === 4))
{var inst_31047 = (state_31083[7]);var inst_31049 = (inst_31047 < cnt);var state_31083__$1 = state_31083;if(cljs.core.truth_(inst_31049))
{var statearr_31087_31116 = state_31083__$1;(statearr_31087_31116[1] = 6);
} else
{var statearr_31088_31117 = state_31083__$1;(statearr_31088_31117[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31084 === 15))
{var inst_31079 = (state_31083[2]);var state_31083__$1 = state_31083;var statearr_31089_31118 = state_31083__$1;(statearr_31089_31118[2] = inst_31079);
(statearr_31089_31118[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31084 === 13))
{var inst_31072 = cljs.core.async.close_BANG_.call(null,out);var state_31083__$1 = state_31083;var statearr_31090_31119 = state_31083__$1;(statearr_31090_31119[2] = inst_31072);
(statearr_31090_31119[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31084 === 6))
{var state_31083__$1 = state_31083;var statearr_31091_31120 = state_31083__$1;(statearr_31091_31120[2] = null);
(statearr_31091_31120[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31084 === 3))
{var inst_31081 = (state_31083[2]);var state_31083__$1 = state_31083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31083__$1,inst_31081);
} else
{if((state_val_31084 === 12))
{var inst_31069 = (state_31083[8]);var inst_31069__$1 = (state_31083[2]);var inst_31070 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_31069__$1);var state_31083__$1 = (function (){var statearr_31092 = state_31083;(statearr_31092[8] = inst_31069__$1);
return statearr_31092;
})();if(cljs.core.truth_(inst_31070))
{var statearr_31093_31121 = state_31083__$1;(statearr_31093_31121[1] = 13);
} else
{var statearr_31094_31122 = state_31083__$1;(statearr_31094_31122[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31084 === 2))
{var inst_31046 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_31047 = 0;var state_31083__$1 = (function (){var statearr_31095 = state_31083;(statearr_31095[9] = inst_31046);
(statearr_31095[7] = inst_31047);
return statearr_31095;
})();var statearr_31096_31123 = state_31083__$1;(statearr_31096_31123[2] = null);
(statearr_31096_31123[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31084 === 11))
{var inst_31047 = (state_31083[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31083,10,Object,null,9);var inst_31056 = chs__$1.call(null,inst_31047);var inst_31057 = done.call(null,inst_31047);var inst_31058 = cljs.core.async.take_BANG_.call(null,inst_31056,inst_31057);var state_31083__$1 = state_31083;var statearr_31097_31124 = state_31083__$1;(statearr_31097_31124[2] = inst_31058);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31083__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31084 === 9))
{var inst_31047 = (state_31083[7]);var inst_31060 = (state_31083[2]);var inst_31061 = (inst_31047 + 1);var inst_31047__$1 = inst_31061;var state_31083__$1 = (function (){var statearr_31098 = state_31083;(statearr_31098[10] = inst_31060);
(statearr_31098[7] = inst_31047__$1);
return statearr_31098;
})();var statearr_31099_31125 = state_31083__$1;(statearr_31099_31125[2] = null);
(statearr_31099_31125[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31084 === 5))
{var inst_31067 = (state_31083[2]);var state_31083__$1 = (function (){var statearr_31100 = state_31083;(statearr_31100[11] = inst_31067);
return statearr_31100;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31083__$1,12,dchan);
} else
{if((state_val_31084 === 14))
{var inst_31069 = (state_31083[8]);var inst_31074 = cljs.core.apply.call(null,f,inst_31069);var state_31083__$1 = state_31083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31083__$1,16,out,inst_31074);
} else
{if((state_val_31084 === 16))
{var inst_31076 = (state_31083[2]);var state_31083__$1 = (function (){var statearr_31101 = state_31083;(statearr_31101[12] = inst_31076);
return statearr_31101;
})();var statearr_31102_31126 = state_31083__$1;(statearr_31102_31126[2] = null);
(statearr_31102_31126[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31084 === 10))
{var inst_31051 = (state_31083[2]);var inst_31052 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_31083__$1 = (function (){var statearr_31103 = state_31083;(statearr_31103[13] = inst_31051);
return statearr_31103;
})();var statearr_31104_31127 = state_31083__$1;(statearr_31104_31127[2] = inst_31052);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31083__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31084 === 8))
{var inst_31065 = (state_31083[2]);var state_31083__$1 = state_31083;var statearr_31105_31128 = state_31083__$1;(statearr_31105_31128[2] = inst_31065);
(statearr_31105_31128[1] = 5);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_31109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31109[0] = state_machine__23717__auto__);
(statearr_31109[1] = 1);
return statearr_31109;
});
var state_machine__23717__auto____1 = (function (state_31083){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_31083);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e31110){if((e31110 instanceof Object))
{var ex__23720__auto__ = e31110;var statearr_31111_31129 = state_31083;(statearr_31111_31129[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31110;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31130 = state_31083;
state_31083 = G__31130;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_31083){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_31083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_31112 = f__23781__auto__.call(null);(statearr_31112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___31113);
return statearr_31112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___31238 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_31214){var state_val_31215 = (state_31214[1]);if((state_val_31215 === 7))
{var inst_31194 = (state_31214[7]);var inst_31193 = (state_31214[8]);var inst_31193__$1 = (state_31214[2]);var inst_31194__$1 = cljs.core.nth.call(null,inst_31193__$1,0,null);var inst_31195 = cljs.core.nth.call(null,inst_31193__$1,1,null);var inst_31196 = (inst_31194__$1 == null);var state_31214__$1 = (function (){var statearr_31216 = state_31214;(statearr_31216[7] = inst_31194__$1);
(statearr_31216[9] = inst_31195);
(statearr_31216[8] = inst_31193__$1);
return statearr_31216;
})();if(cljs.core.truth_(inst_31196))
{var statearr_31217_31239 = state_31214__$1;(statearr_31217_31239[1] = 8);
} else
{var statearr_31218_31240 = state_31214__$1;(statearr_31218_31240[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31215 === 1))
{var inst_31185 = cljs.core.vec.call(null,chs);var inst_31186 = inst_31185;var state_31214__$1 = (function (){var statearr_31219 = state_31214;(statearr_31219[10] = inst_31186);
return statearr_31219;
})();var statearr_31220_31241 = state_31214__$1;(statearr_31220_31241[2] = null);
(statearr_31220_31241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31215 === 4))
{var inst_31186 = (state_31214[10]);var state_31214__$1 = state_31214;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31214__$1,7,inst_31186);
} else
{if((state_val_31215 === 6))
{var inst_31210 = (state_31214[2]);var state_31214__$1 = state_31214;var statearr_31221_31242 = state_31214__$1;(statearr_31221_31242[2] = inst_31210);
(statearr_31221_31242[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31215 === 3))
{var inst_31212 = (state_31214[2]);var state_31214__$1 = state_31214;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31214__$1,inst_31212);
} else
{if((state_val_31215 === 2))
{var inst_31186 = (state_31214[10]);var inst_31188 = cljs.core.count.call(null,inst_31186);var inst_31189 = (inst_31188 > 0);var state_31214__$1 = state_31214;if(cljs.core.truth_(inst_31189))
{var statearr_31223_31243 = state_31214__$1;(statearr_31223_31243[1] = 4);
} else
{var statearr_31224_31244 = state_31214__$1;(statearr_31224_31244[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31215 === 11))
{var inst_31186 = (state_31214[10]);var inst_31203 = (state_31214[2]);var tmp31222 = inst_31186;var inst_31186__$1 = tmp31222;var state_31214__$1 = (function (){var statearr_31225 = state_31214;(statearr_31225[11] = inst_31203);
(statearr_31225[10] = inst_31186__$1);
return statearr_31225;
})();var statearr_31226_31245 = state_31214__$1;(statearr_31226_31245[2] = null);
(statearr_31226_31245[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31215 === 9))
{var inst_31194 = (state_31214[7]);var state_31214__$1 = state_31214;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31214__$1,11,out,inst_31194);
} else
{if((state_val_31215 === 5))
{var inst_31208 = cljs.core.async.close_BANG_.call(null,out);var state_31214__$1 = state_31214;var statearr_31227_31246 = state_31214__$1;(statearr_31227_31246[2] = inst_31208);
(statearr_31227_31246[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31215 === 10))
{var inst_31206 = (state_31214[2]);var state_31214__$1 = state_31214;var statearr_31228_31247 = state_31214__$1;(statearr_31228_31247[2] = inst_31206);
(statearr_31228_31247[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31215 === 8))
{var inst_31194 = (state_31214[7]);var inst_31195 = (state_31214[9]);var inst_31186 = (state_31214[10]);var inst_31193 = (state_31214[8]);var inst_31198 = (function (){var c = inst_31195;var v = inst_31194;var vec__31191 = inst_31193;var cs = inst_31186;return ((function (c,v,vec__31191,cs,inst_31194,inst_31195,inst_31186,inst_31193,state_val_31215){
return (function (p1__31131_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__31131_SHARP_);
});
;})(c,v,vec__31191,cs,inst_31194,inst_31195,inst_31186,inst_31193,state_val_31215))
})();var inst_31199 = cljs.core.filterv.call(null,inst_31198,inst_31186);var inst_31186__$1 = inst_31199;var state_31214__$1 = (function (){var statearr_31229 = state_31214;(statearr_31229[10] = inst_31186__$1);
return statearr_31229;
})();var statearr_31230_31248 = state_31214__$1;(statearr_31230_31248[2] = null);
(statearr_31230_31248[1] = 2);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_31234 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31234[0] = state_machine__23717__auto__);
(statearr_31234[1] = 1);
return statearr_31234;
});
var state_machine__23717__auto____1 = (function (state_31214){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_31214);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e31235){if((e31235 instanceof Object))
{var ex__23720__auto__ = e31235;var statearr_31236_31249 = state_31214;(statearr_31236_31249[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31214);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31235;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31250 = state_31214;
state_31214 = G__31250;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_31214){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_31214);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_31237 = f__23781__auto__.call(null);(statearr_31237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___31238);
return statearr_31237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___31343 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_31320){var state_val_31321 = (state_31320[1]);if((state_val_31321 === 7))
{var inst_31302 = (state_31320[7]);var inst_31302__$1 = (state_31320[2]);var inst_31303 = (inst_31302__$1 == null);var inst_31304 = cljs.core.not.call(null,inst_31303);var state_31320__$1 = (function (){var statearr_31322 = state_31320;(statearr_31322[7] = inst_31302__$1);
return statearr_31322;
})();if(inst_31304)
{var statearr_31323_31344 = state_31320__$1;(statearr_31323_31344[1] = 8);
} else
{var statearr_31324_31345 = state_31320__$1;(statearr_31324_31345[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31321 === 1))
{var inst_31297 = 0;var state_31320__$1 = (function (){var statearr_31325 = state_31320;(statearr_31325[8] = inst_31297);
return statearr_31325;
})();var statearr_31326_31346 = state_31320__$1;(statearr_31326_31346[2] = null);
(statearr_31326_31346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31321 === 4))
{var state_31320__$1 = state_31320;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31320__$1,7,ch);
} else
{if((state_val_31321 === 6))
{var inst_31315 = (state_31320[2]);var state_31320__$1 = state_31320;var statearr_31327_31347 = state_31320__$1;(statearr_31327_31347[2] = inst_31315);
(statearr_31327_31347[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31321 === 3))
{var inst_31317 = (state_31320[2]);var inst_31318 = cljs.core.async.close_BANG_.call(null,out);var state_31320__$1 = (function (){var statearr_31328 = state_31320;(statearr_31328[9] = inst_31317);
return statearr_31328;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31320__$1,inst_31318);
} else
{if((state_val_31321 === 2))
{var inst_31297 = (state_31320[8]);var inst_31299 = (inst_31297 < n);var state_31320__$1 = state_31320;if(cljs.core.truth_(inst_31299))
{var statearr_31329_31348 = state_31320__$1;(statearr_31329_31348[1] = 4);
} else
{var statearr_31330_31349 = state_31320__$1;(statearr_31330_31349[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31321 === 11))
{var inst_31297 = (state_31320[8]);var inst_31307 = (state_31320[2]);var inst_31308 = (inst_31297 + 1);var inst_31297__$1 = inst_31308;var state_31320__$1 = (function (){var statearr_31331 = state_31320;(statearr_31331[8] = inst_31297__$1);
(statearr_31331[10] = inst_31307);
return statearr_31331;
})();var statearr_31332_31350 = state_31320__$1;(statearr_31332_31350[2] = null);
(statearr_31332_31350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31321 === 9))
{var state_31320__$1 = state_31320;var statearr_31333_31351 = state_31320__$1;(statearr_31333_31351[2] = null);
(statearr_31333_31351[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31321 === 5))
{var state_31320__$1 = state_31320;var statearr_31334_31352 = state_31320__$1;(statearr_31334_31352[2] = null);
(statearr_31334_31352[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31321 === 10))
{var inst_31312 = (state_31320[2]);var state_31320__$1 = state_31320;var statearr_31335_31353 = state_31320__$1;(statearr_31335_31353[2] = inst_31312);
(statearr_31335_31353[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31321 === 8))
{var inst_31302 = (state_31320[7]);var state_31320__$1 = state_31320;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31320__$1,11,out,inst_31302);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_31339 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31339[0] = state_machine__23717__auto__);
(statearr_31339[1] = 1);
return statearr_31339;
});
var state_machine__23717__auto____1 = (function (state_31320){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_31320);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e31340){if((e31340 instanceof Object))
{var ex__23720__auto__ = e31340;var statearr_31341_31354 = state_31320;(statearr_31341_31354[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31320);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31355 = state_31320;
state_31320 = G__31355;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_31320){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_31320);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_31342 = f__23781__auto__.call(null);(statearr_31342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___31343);
return statearr_31342;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___31452 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_31427){var state_val_31428 = (state_31427[1]);if((state_val_31428 === 7))
{var inst_31422 = (state_31427[2]);var state_31427__$1 = state_31427;var statearr_31429_31453 = state_31427__$1;(statearr_31429_31453[2] = inst_31422);
(statearr_31429_31453[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31428 === 1))
{var inst_31404 = null;var state_31427__$1 = (function (){var statearr_31430 = state_31427;(statearr_31430[7] = inst_31404);
return statearr_31430;
})();var statearr_31431_31454 = state_31427__$1;(statearr_31431_31454[2] = null);
(statearr_31431_31454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31428 === 4))
{var inst_31407 = (state_31427[8]);var inst_31407__$1 = (state_31427[2]);var inst_31408 = (inst_31407__$1 == null);var inst_31409 = cljs.core.not.call(null,inst_31408);var state_31427__$1 = (function (){var statearr_31432 = state_31427;(statearr_31432[8] = inst_31407__$1);
return statearr_31432;
})();if(inst_31409)
{var statearr_31433_31455 = state_31427__$1;(statearr_31433_31455[1] = 5);
} else
{var statearr_31434_31456 = state_31427__$1;(statearr_31434_31456[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31428 === 6))
{var state_31427__$1 = state_31427;var statearr_31435_31457 = state_31427__$1;(statearr_31435_31457[2] = null);
(statearr_31435_31457[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31428 === 3))
{var inst_31424 = (state_31427[2]);var inst_31425 = cljs.core.async.close_BANG_.call(null,out);var state_31427__$1 = (function (){var statearr_31436 = state_31427;(statearr_31436[9] = inst_31424);
return statearr_31436;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31427__$1,inst_31425);
} else
{if((state_val_31428 === 2))
{var state_31427__$1 = state_31427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31427__$1,4,ch);
} else
{if((state_val_31428 === 11))
{var inst_31407 = (state_31427[8]);var inst_31416 = (state_31427[2]);var inst_31404 = inst_31407;var state_31427__$1 = (function (){var statearr_31437 = state_31427;(statearr_31437[7] = inst_31404);
(statearr_31437[10] = inst_31416);
return statearr_31437;
})();var statearr_31438_31458 = state_31427__$1;(statearr_31438_31458[2] = null);
(statearr_31438_31458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31428 === 9))
{var inst_31407 = (state_31427[8]);var state_31427__$1 = state_31427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31427__$1,11,out,inst_31407);
} else
{if((state_val_31428 === 5))
{var inst_31404 = (state_31427[7]);var inst_31407 = (state_31427[8]);var inst_31411 = cljs.core._EQ_.call(null,inst_31407,inst_31404);var state_31427__$1 = state_31427;if(inst_31411)
{var statearr_31440_31459 = state_31427__$1;(statearr_31440_31459[1] = 8);
} else
{var statearr_31441_31460 = state_31427__$1;(statearr_31441_31460[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31428 === 10))
{var inst_31419 = (state_31427[2]);var state_31427__$1 = state_31427;var statearr_31442_31461 = state_31427__$1;(statearr_31442_31461[2] = inst_31419);
(statearr_31442_31461[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31428 === 8))
{var inst_31404 = (state_31427[7]);var tmp31439 = inst_31404;var inst_31404__$1 = tmp31439;var state_31427__$1 = (function (){var statearr_31443 = state_31427;(statearr_31443[7] = inst_31404__$1);
return statearr_31443;
})();var statearr_31444_31462 = state_31427__$1;(statearr_31444_31462[2] = null);
(statearr_31444_31462[1] = 2);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_31448 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_31448[0] = state_machine__23717__auto__);
(statearr_31448[1] = 1);
return statearr_31448;
});
var state_machine__23717__auto____1 = (function (state_31427){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_31427);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e31449){if((e31449 instanceof Object))
{var ex__23720__auto__ = e31449;var statearr_31450_31463 = state_31427;(statearr_31450_31463[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31449;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31464 = state_31427;
state_31427 = G__31464;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_31427){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_31427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_31451 = f__23781__auto__.call(null);(statearr_31451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___31452);
return statearr_31451;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___31599 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_31569){var state_val_31570 = (state_31569[1]);if((state_val_31570 === 7))
{var inst_31565 = (state_31569[2]);var state_31569__$1 = state_31569;var statearr_31571_31600 = state_31569__$1;(statearr_31571_31600[2] = inst_31565);
(statearr_31571_31600[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 1))
{var inst_31532 = (new Array(n));var inst_31533 = inst_31532;var inst_31534 = 0;var state_31569__$1 = (function (){var statearr_31572 = state_31569;(statearr_31572[7] = inst_31533);
(statearr_31572[8] = inst_31534);
return statearr_31572;
})();var statearr_31573_31601 = state_31569__$1;(statearr_31573_31601[2] = null);
(statearr_31573_31601[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 4))
{var inst_31537 = (state_31569[9]);var inst_31537__$1 = (state_31569[2]);var inst_31538 = (inst_31537__$1 == null);var inst_31539 = cljs.core.not.call(null,inst_31538);var state_31569__$1 = (function (){var statearr_31574 = state_31569;(statearr_31574[9] = inst_31537__$1);
return statearr_31574;
})();if(inst_31539)
{var statearr_31575_31602 = state_31569__$1;(statearr_31575_31602[1] = 5);
} else
{var statearr_31576_31603 = state_31569__$1;(statearr_31576_31603[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 15))
{var inst_31559 = (state_31569[2]);var state_31569__$1 = state_31569;var statearr_31577_31604 = state_31569__$1;(statearr_31577_31604[2] = inst_31559);
(statearr_31577_31604[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 13))
{var state_31569__$1 = state_31569;var statearr_31578_31605 = state_31569__$1;(statearr_31578_31605[2] = null);
(statearr_31578_31605[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 6))
{var inst_31534 = (state_31569[8]);var inst_31555 = (inst_31534 > 0);var state_31569__$1 = state_31569;if(cljs.core.truth_(inst_31555))
{var statearr_31579_31606 = state_31569__$1;(statearr_31579_31606[1] = 12);
} else
{var statearr_31580_31607 = state_31569__$1;(statearr_31580_31607[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 3))
{var inst_31567 = (state_31569[2]);var state_31569__$1 = state_31569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31569__$1,inst_31567);
} else
{if((state_val_31570 === 12))
{var inst_31533 = (state_31569[7]);var inst_31557 = cljs.core.vec.call(null,inst_31533);var state_31569__$1 = state_31569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31569__$1,15,out,inst_31557);
} else
{if((state_val_31570 === 2))
{var state_31569__$1 = state_31569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31569__$1,4,ch);
} else
{if((state_val_31570 === 11))
{var inst_31549 = (state_31569[2]);var inst_31550 = (new Array(n));var inst_31533 = inst_31550;var inst_31534 = 0;var state_31569__$1 = (function (){var statearr_31581 = state_31569;(statearr_31581[7] = inst_31533);
(statearr_31581[10] = inst_31549);
(statearr_31581[8] = inst_31534);
return statearr_31581;
})();var statearr_31582_31608 = state_31569__$1;(statearr_31582_31608[2] = null);
(statearr_31582_31608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 9))
{var inst_31533 = (state_31569[7]);var inst_31547 = cljs.core.vec.call(null,inst_31533);var state_31569__$1 = state_31569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31569__$1,11,out,inst_31547);
} else
{if((state_val_31570 === 5))
{var inst_31533 = (state_31569[7]);var inst_31534 = (state_31569[8]);var inst_31542 = (state_31569[11]);var inst_31537 = (state_31569[9]);var inst_31541 = (inst_31533[inst_31534] = inst_31537);var inst_31542__$1 = (inst_31534 + 1);var inst_31543 = (inst_31542__$1 < n);var state_31569__$1 = (function (){var statearr_31583 = state_31569;(statearr_31583[12] = inst_31541);
(statearr_31583[11] = inst_31542__$1);
return statearr_31583;
})();if(cljs.core.truth_(inst_31543))
{var statearr_31584_31609 = state_31569__$1;(statearr_31584_31609[1] = 8);
} else
{var statearr_31585_31610 = state_31569__$1;(statearr_31585_31610[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 14))
{var inst_31562 = (state_31569[2]);var inst_31563 = cljs.core.async.close_BANG_.call(null,out);var state_31569__$1 = (function (){var statearr_31587 = state_31569;(statearr_31587[13] = inst_31562);
return statearr_31587;
})();var statearr_31588_31611 = state_31569__$1;(statearr_31588_31611[2] = inst_31563);
(statearr_31588_31611[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 10))
{var inst_31553 = (state_31569[2]);var state_31569__$1 = state_31569;var statearr_31589_31612 = state_31569__$1;(statearr_31589_31612[2] = inst_31553);
(statearr_31589_31612[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31570 === 8))
{var inst_31533 = (state_31569[7]);var inst_31542 = (state_31569[11]);var tmp31586 = inst_31533;var inst_31533__$1 = tmp31586;var inst_31534 = inst_31542;var state_31569__$1 = (function (){var statearr_31590 = state_31569;(statearr_31590[7] = inst_31533__$1);
(statearr_31590[8] = inst_31534);
return statearr_31590;
})();var statearr_31591_31613 = state_31569__$1;(statearr_31591_31613[2] = null);
(statearr_31591_31613[1] = 2);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_31595 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31595[0] = state_machine__23717__auto__);
(statearr_31595[1] = 1);
return statearr_31595;
});
var state_machine__23717__auto____1 = (function (state_31569){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_31569);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e31596){if((e31596 instanceof Object))
{var ex__23720__auto__ = e31596;var statearr_31597_31614 = state_31569;(statearr_31597_31614[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31569);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31596;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31615 = state_31569;
state_31569 = G__31615;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_31569){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_31569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_31598 = f__23781__auto__.call(null);(statearr_31598[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___31599);
return statearr_31598;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___31758 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_31728){var state_val_31729 = (state_31728[1]);if((state_val_31729 === 7))
{var inst_31724 = (state_31728[2]);var state_31728__$1 = state_31728;var statearr_31730_31759 = state_31728__$1;(statearr_31730_31759[2] = inst_31724);
(statearr_31730_31759[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31729 === 1))
{var inst_31687 = [];var inst_31688 = inst_31687;var inst_31689 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_31728__$1 = (function (){var statearr_31731 = state_31728;(statearr_31731[7] = inst_31689);
(statearr_31731[8] = inst_31688);
return statearr_31731;
})();var statearr_31732_31760 = state_31728__$1;(statearr_31732_31760[2] = null);
(statearr_31732_31760[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31729 === 4))
{var inst_31692 = (state_31728[9]);var inst_31692__$1 = (state_31728[2]);var inst_31693 = (inst_31692__$1 == null);var inst_31694 = cljs.core.not.call(null,inst_31693);var state_31728__$1 = (function (){var statearr_31733 = state_31728;(statearr_31733[9] = inst_31692__$1);
return statearr_31733;
})();if(inst_31694)
{var statearr_31734_31761 = state_31728__$1;(statearr_31734_31761[1] = 5);
} else
{var statearr_31735_31762 = state_31728__$1;(statearr_31735_31762[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31729 === 15))
{var inst_31718 = (state_31728[2]);var state_31728__$1 = state_31728;var statearr_31736_31763 = state_31728__$1;(statearr_31736_31763[2] = inst_31718);
(statearr_31736_31763[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31729 === 13))
{var state_31728__$1 = state_31728;var statearr_31737_31764 = state_31728__$1;(statearr_31737_31764[2] = null);
(statearr_31737_31764[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31729 === 6))
{var inst_31688 = (state_31728[8]);var inst_31713 = inst_31688.length;var inst_31714 = (inst_31713 > 0);var state_31728__$1 = state_31728;if(cljs.core.truth_(inst_31714))
{var statearr_31738_31765 = state_31728__$1;(statearr_31738_31765[1] = 12);
} else
{var statearr_31739_31766 = state_31728__$1;(statearr_31739_31766[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31729 === 3))
{var inst_31726 = (state_31728[2]);var state_31728__$1 = state_31728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31728__$1,inst_31726);
} else
{if((state_val_31729 === 12))
{var inst_31688 = (state_31728[8]);var inst_31716 = cljs.core.vec.call(null,inst_31688);var state_31728__$1 = state_31728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31728__$1,15,out,inst_31716);
} else
{if((state_val_31729 === 2))
{var state_31728__$1 = state_31728;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31728__$1,4,ch);
} else
{if((state_val_31729 === 11))
{var inst_31696 = (state_31728[10]);var inst_31692 = (state_31728[9]);var inst_31706 = (state_31728[2]);var inst_31707 = [];var inst_31708 = inst_31707.push(inst_31692);var inst_31688 = inst_31707;var inst_31689 = inst_31696;var state_31728__$1 = (function (){var statearr_31740 = state_31728;(statearr_31740[11] = inst_31708);
(statearr_31740[7] = inst_31689);
(statearr_31740[8] = inst_31688);
(statearr_31740[12] = inst_31706);
return statearr_31740;
})();var statearr_31741_31767 = state_31728__$1;(statearr_31741_31767[2] = null);
(statearr_31741_31767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31729 === 9))
{var inst_31688 = (state_31728[8]);var inst_31704 = cljs.core.vec.call(null,inst_31688);var state_31728__$1 = state_31728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31728__$1,11,out,inst_31704);
} else
{if((state_val_31729 === 5))
{var inst_31696 = (state_31728[10]);var inst_31689 = (state_31728[7]);var inst_31692 = (state_31728[9]);var inst_31696__$1 = f.call(null,inst_31692);var inst_31697 = cljs.core._EQ_.call(null,inst_31696__$1,inst_31689);var inst_31698 = cljs.core.keyword_identical_QMARK_.call(null,inst_31689,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_31699 = (inst_31697) || (inst_31698);var state_31728__$1 = (function (){var statearr_31742 = state_31728;(statearr_31742[10] = inst_31696__$1);
return statearr_31742;
})();if(cljs.core.truth_(inst_31699))
{var statearr_31743_31768 = state_31728__$1;(statearr_31743_31768[1] = 8);
} else
{var statearr_31744_31769 = state_31728__$1;(statearr_31744_31769[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31729 === 14))
{var inst_31721 = (state_31728[2]);var inst_31722 = cljs.core.async.close_BANG_.call(null,out);var state_31728__$1 = (function (){var statearr_31746 = state_31728;(statearr_31746[13] = inst_31721);
return statearr_31746;
})();var statearr_31747_31770 = state_31728__$1;(statearr_31747_31770[2] = inst_31722);
(statearr_31747_31770[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31729 === 10))
{var inst_31711 = (state_31728[2]);var state_31728__$1 = state_31728;var statearr_31748_31771 = state_31728__$1;(statearr_31748_31771[2] = inst_31711);
(statearr_31748_31771[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31729 === 8))
{var inst_31696 = (state_31728[10]);var inst_31688 = (state_31728[8]);var inst_31692 = (state_31728[9]);var inst_31701 = inst_31688.push(inst_31692);var tmp31745 = inst_31688;var inst_31688__$1 = tmp31745;var inst_31689 = inst_31696;var state_31728__$1 = (function (){var statearr_31749 = state_31728;(statearr_31749[7] = inst_31689);
(statearr_31749[8] = inst_31688__$1);
(statearr_31749[14] = inst_31701);
return statearr_31749;
})();var statearr_31750_31772 = state_31728__$1;(statearr_31750_31772[2] = null);
(statearr_31750_31772[1] = 2);
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
});return ((function (switch__23716__auto__){
return (function() {
var state_machine__23717__auto__ = null;
var state_machine__23717__auto____0 = (function (){var statearr_31754 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31754[0] = state_machine__23717__auto__);
(statearr_31754[1] = 1);
return statearr_31754;
});
var state_machine__23717__auto____1 = (function (state_31728){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_31728);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e31755){if((e31755 instanceof Object))
{var ex__23720__auto__ = e31755;var statearr_31756_31773 = state_31728;(statearr_31756_31773[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31728);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31755;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31774 = state_31728;
state_31728 = G__31774;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_31728){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_31728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_31757 = f__23781__auto__.call(null);(statearr_31757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___31758);
return statearr_31757;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23782__auto__);
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

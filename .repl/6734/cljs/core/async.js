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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t26553 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26553 = (function (f,fn_handler,meta26554){
this.f = f;
this.fn_handler = fn_handler;
this.meta26554 = meta26554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26553.cljs$lang$type = true;
cljs.core.async.t26553.cljs$lang$ctorStr = "cljs.core.async/t26553";
cljs.core.async.t26553.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26553");
});
cljs.core.async.t26553.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t26553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t26553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26555){var self__ = this;
var _26555__$1 = this;return self__.meta26554;
});
cljs.core.async.t26553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26555,meta26554__$1){var self__ = this;
var _26555__$1 = this;return (new cljs.core.async.t26553(self__.f,self__.fn_handler,meta26554__$1));
});
cljs.core.async.__GT_t26553 = (function __GT_t26553(f__$1,fn_handler__$1,meta26554){return (new cljs.core.async.t26553(f__$1,fn_handler__$1,meta26554));
});
}
return (new cljs.core.async.t26553(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__26557 = buff;if(G__26557)
{var bit__15632__auto__ = null;if(cljs.core.truth_((function (){var or__14982__auto__ = bit__15632__auto__;if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return G__26557.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__26557.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26557);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26557);
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
{var val_26558 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_26558);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_26558);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15830__auto___26559 = n;var x_26560 = 0;while(true){
if((x_26560 < n__15830__auto___26559))
{(a[x_26560] = 0);
{
var G__26561 = (x_26560 + 1);
x_26560 = G__26561;
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
var G__26562 = (i + 1);
i = G__26562;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t26566 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26566 = (function (flag,alt_flag,meta26567){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26567 = meta26567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26566.cljs$lang$type = true;
cljs.core.async.t26566.cljs$lang$ctorStr = "cljs.core.async/t26566";
cljs.core.async.t26566.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26566");
});
cljs.core.async.t26566.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t26566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t26566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26568){var self__ = this;
var _26568__$1 = this;return self__.meta26567;
});
cljs.core.async.t26566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26568,meta26567__$1){var self__ = this;
var _26568__$1 = this;return (new cljs.core.async.t26566(self__.flag,self__.alt_flag,meta26567__$1));
});
cljs.core.async.__GT_t26566 = (function __GT_t26566(flag__$1,alt_flag__$1,meta26567){return (new cljs.core.async.t26566(flag__$1,alt_flag__$1,meta26567));
});
}
return (new cljs.core.async.t26566(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t26572 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26572 = (function (cb,flag,alt_handler,meta26573){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26573 = meta26573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26572.cljs$lang$type = true;
cljs.core.async.t26572.cljs$lang$ctorStr = "cljs.core.async/t26572";
cljs.core.async.t26572.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26572");
});
cljs.core.async.t26572.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t26572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t26572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26574){var self__ = this;
var _26574__$1 = this;return self__.meta26573;
});
cljs.core.async.t26572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26574,meta26573__$1){var self__ = this;
var _26574__$1 = this;return (new cljs.core.async.t26572(self__.cb,self__.flag,self__.alt_handler,meta26573__$1));
});
cljs.core.async.__GT_t26572 = (function __GT_t26572(cb__$1,flag__$1,alt_handler__$1,meta26573){return (new cljs.core.async.t26572(cb__$1,flag__$1,alt_handler__$1,meta26573));
});
}
return (new cljs.core.async.t26572(cb,flag,alt_handler,null));
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
return (function (p1__26575_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26575_SHARP_,port], null));
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
var G__26576 = (i + 1);
i = G__26576;
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
var alts_BANG___delegate = function (ports,p__26577){var map__26579 = p__26577;var map__26579__$1 = ((cljs.core.seq_QMARK_.call(null,map__26579))?cljs.core.apply.call(null,cljs.core.hash_map,map__26579):map__26579);var opts = map__26579__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__26577 = null;if (arguments.length > 1) {
  p__26577 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__26577);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26580){
var ports = cljs.core.first(arglist__26580);
var p__26577 = cljs.core.rest(arglist__26580);
return alts_BANG___delegate(ports,p__26577);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26588 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26588 = (function (ch,f,map_LT_,meta26589){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26589 = meta26589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26588.cljs$lang$type = true;
cljs.core.async.t26588.cljs$lang$ctorStr = "cljs.core.async/t26588";
cljs.core.async.t26588.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26588");
});
cljs.core.async.t26588.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t26588.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26591 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26591 = (function (fn1,_,meta26589,ch,f,map_LT_,meta26592){
this.fn1 = fn1;
this._ = _;
this.meta26589 = meta26589;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26592 = meta26592;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26591.cljs$lang$type = true;
cljs.core.async.t26591.cljs$lang$ctorStr = "cljs.core.async/t26591";
cljs.core.async.t26591.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26591");
});
cljs.core.async.t26591.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t26591.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t26591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__26581_SHARP_){return f1.call(null,(((p1__26581_SHARP_ == null))?null:self__.f.call(null,p1__26581_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t26591.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26593){var self__ = this;
var _26593__$1 = this;return self__.meta26592;
});
cljs.core.async.t26591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26593,meta26592__$1){var self__ = this;
var _26593__$1 = this;return (new cljs.core.async.t26591(self__.fn1,self__._,self__.meta26589,self__.ch,self__.f,self__.map_LT_,meta26592__$1));
});
cljs.core.async.__GT_t26591 = (function __GT_t26591(fn1__$1,___$2,meta26589__$1,ch__$2,f__$2,map_LT___$2,meta26592){return (new cljs.core.async.t26591(fn1__$1,___$2,meta26589__$1,ch__$2,f__$2,map_LT___$2,meta26592));
});
}
return (new cljs.core.async.t26591(fn1,___$1,self__.meta26589,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26588.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26590){var self__ = this;
var _26590__$1 = this;return self__.meta26589;
});
cljs.core.async.t26588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26590,meta26589__$1){var self__ = this;
var _26590__$1 = this;return (new cljs.core.async.t26588(self__.ch,self__.f,self__.map_LT_,meta26589__$1));
});
cljs.core.async.__GT_t26588 = (function __GT_t26588(ch__$1,f__$1,map_LT___$1,meta26589){return (new cljs.core.async.t26588(ch__$1,f__$1,map_LT___$1,meta26589));
});
}
return (new cljs.core.async.t26588(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26597 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26597 = (function (ch,f,map_GT_,meta26598){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26598 = meta26598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26597.cljs$lang$type = true;
cljs.core.async.t26597.cljs$lang$ctorStr = "cljs.core.async/t26597";
cljs.core.async.t26597.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26597");
});
cljs.core.async.t26597.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t26597.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26597.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26599){var self__ = this;
var _26599__$1 = this;return self__.meta26598;
});
cljs.core.async.t26597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26599,meta26598__$1){var self__ = this;
var _26599__$1 = this;return (new cljs.core.async.t26597(self__.ch,self__.f,self__.map_GT_,meta26598__$1));
});
cljs.core.async.__GT_t26597 = (function __GT_t26597(ch__$1,f__$1,map_GT___$1,meta26598){return (new cljs.core.async.t26597(ch__$1,f__$1,map_GT___$1,meta26598));
});
}
return (new cljs.core.async.t26597(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26603 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26603 = (function (ch,p,filter_GT_,meta26604){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26604 = meta26604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26603.cljs$lang$type = true;
cljs.core.async.t26603.cljs$lang$ctorStr = "cljs.core.async/t26603";
cljs.core.async.t26603.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26603");
});
cljs.core.async.t26603.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t26603.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26603.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26605){var self__ = this;
var _26605__$1 = this;return self__.meta26604;
});
cljs.core.async.t26603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26605,meta26604__$1){var self__ = this;
var _26605__$1 = this;return (new cljs.core.async.t26603(self__.ch,self__.p,self__.filter_GT_,meta26604__$1));
});
cljs.core.async.__GT_t26603 = (function __GT_t26603(ch__$1,p__$1,filter_GT___$1,meta26604){return (new cljs.core.async.t26603(ch__$1,p__$1,filter_GT___$1,meta26604));
});
}
return (new cljs.core.async.t26603(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___26688 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_26667){var state_val_26668 = (state_26667[1]);if((state_val_26668 === 7))
{var inst_26663 = (state_26667[2]);var state_26667__$1 = state_26667;var statearr_26669_26689 = state_26667__$1;(statearr_26669_26689[2] = inst_26663);
(statearr_26669_26689[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26668 === 1))
{var state_26667__$1 = state_26667;var statearr_26670_26690 = state_26667__$1;(statearr_26670_26690[2] = null);
(statearr_26670_26690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26668 === 4))
{var inst_26649 = (state_26667[7]);var inst_26649__$1 = (state_26667[2]);var inst_26650 = (inst_26649__$1 == null);var state_26667__$1 = (function (){var statearr_26671 = state_26667;(statearr_26671[7] = inst_26649__$1);
return statearr_26671;
})();if(cljs.core.truth_(inst_26650))
{var statearr_26672_26691 = state_26667__$1;(statearr_26672_26691[1] = 5);
} else
{var statearr_26673_26692 = state_26667__$1;(statearr_26673_26692[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26668 === 6))
{var inst_26649 = (state_26667[7]);var inst_26654 = p.call(null,inst_26649);var state_26667__$1 = state_26667;if(cljs.core.truth_(inst_26654))
{var statearr_26674_26693 = state_26667__$1;(statearr_26674_26693[1] = 8);
} else
{var statearr_26675_26694 = state_26667__$1;(statearr_26675_26694[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26668 === 3))
{var inst_26665 = (state_26667[2]);var state_26667__$1 = state_26667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26667__$1,inst_26665);
} else
{if((state_val_26668 === 2))
{var state_26667__$1 = state_26667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26667__$1,4,ch);
} else
{if((state_val_26668 === 11))
{var inst_26657 = (state_26667[2]);var state_26667__$1 = state_26667;var statearr_26676_26695 = state_26667__$1;(statearr_26676_26695[2] = inst_26657);
(statearr_26676_26695[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26668 === 9))
{var state_26667__$1 = state_26667;var statearr_26677_26696 = state_26667__$1;(statearr_26677_26696[2] = null);
(statearr_26677_26696[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26668 === 5))
{var inst_26652 = cljs.core.async.close_BANG_.call(null,out);var state_26667__$1 = state_26667;var statearr_26678_26697 = state_26667__$1;(statearr_26678_26697[2] = inst_26652);
(statearr_26678_26697[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26668 === 10))
{var inst_26660 = (state_26667[2]);var state_26667__$1 = (function (){var statearr_26679 = state_26667;(statearr_26679[8] = inst_26660);
return statearr_26679;
})();var statearr_26680_26698 = state_26667__$1;(statearr_26680_26698[2] = null);
(statearr_26680_26698[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26668 === 8))
{var inst_26649 = (state_26667[7]);var state_26667__$1 = state_26667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26667__$1,11,out,inst_26649);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_26684 = [null,null,null,null,null,null,null,null,null];(statearr_26684[0] = state_machine__22127__auto__);
(statearr_26684[1] = 1);
return statearr_26684;
});
var state_machine__22127__auto____1 = (function (state_26667){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_26667);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e26685){if((e26685 instanceof Object))
{var ex__22130__auto__ = e26685;var statearr_26686_26699 = state_26667;(statearr_26686_26699[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26667);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26685;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26700 = state_26667;
state_26667 = G__26700;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_26667){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_26667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_26687 = f__22202__auto__.call(null);(statearr_26687[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___26688);
return statearr_26687;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_26852){var state_val_26853 = (state_26852[1]);if((state_val_26853 === 7))
{var inst_26848 = (state_26852[2]);var state_26852__$1 = state_26852;var statearr_26854_26891 = state_26852__$1;(statearr_26854_26891[2] = inst_26848);
(statearr_26854_26891[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 20))
{var inst_26823 = (state_26852[7]);var inst_26834 = (state_26852[2]);var inst_26835 = cljs.core.next.call(null,inst_26823);var inst_26809 = inst_26835;var inst_26810 = null;var inst_26811 = 0;var inst_26812 = 0;var state_26852__$1 = (function (){var statearr_26855 = state_26852;(statearr_26855[8] = inst_26834);
(statearr_26855[9] = inst_26810);
(statearr_26855[10] = inst_26811);
(statearr_26855[11] = inst_26812);
(statearr_26855[12] = inst_26809);
return statearr_26855;
})();var statearr_26856_26892 = state_26852__$1;(statearr_26856_26892[2] = null);
(statearr_26856_26892[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 1))
{var state_26852__$1 = state_26852;var statearr_26857_26893 = state_26852__$1;(statearr_26857_26893[2] = null);
(statearr_26857_26893[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 4))
{var inst_26798 = (state_26852[13]);var inst_26798__$1 = (state_26852[2]);var inst_26799 = (inst_26798__$1 == null);var state_26852__$1 = (function (){var statearr_26861 = state_26852;(statearr_26861[13] = inst_26798__$1);
return statearr_26861;
})();if(cljs.core.truth_(inst_26799))
{var statearr_26862_26894 = state_26852__$1;(statearr_26862_26894[1] = 5);
} else
{var statearr_26863_26895 = state_26852__$1;(statearr_26863_26895[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 15))
{var state_26852__$1 = state_26852;var statearr_26864_26896 = state_26852__$1;(statearr_26864_26896[2] = null);
(statearr_26864_26896[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 13))
{var inst_26810 = (state_26852[9]);var inst_26811 = (state_26852[10]);var inst_26812 = (state_26852[11]);var inst_26809 = (state_26852[12]);var inst_26819 = (state_26852[2]);var inst_26820 = (inst_26812 + 1);var tmp26858 = inst_26810;var tmp26859 = inst_26811;var tmp26860 = inst_26809;var inst_26809__$1 = tmp26860;var inst_26810__$1 = tmp26858;var inst_26811__$1 = tmp26859;var inst_26812__$1 = inst_26820;var state_26852__$1 = (function (){var statearr_26865 = state_26852;(statearr_26865[9] = inst_26810__$1);
(statearr_26865[10] = inst_26811__$1);
(statearr_26865[11] = inst_26812__$1);
(statearr_26865[14] = inst_26819);
(statearr_26865[12] = inst_26809__$1);
return statearr_26865;
})();var statearr_26866_26897 = state_26852__$1;(statearr_26866_26897[2] = null);
(statearr_26866_26897[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 6))
{var inst_26798 = (state_26852[13]);var inst_26803 = f.call(null,inst_26798);var inst_26808 = cljs.core.seq.call(null,inst_26803);var inst_26809 = inst_26808;var inst_26810 = null;var inst_26811 = 0;var inst_26812 = 0;var state_26852__$1 = (function (){var statearr_26867 = state_26852;(statearr_26867[9] = inst_26810);
(statearr_26867[10] = inst_26811);
(statearr_26867[11] = inst_26812);
(statearr_26867[12] = inst_26809);
return statearr_26867;
})();var statearr_26868_26898 = state_26852__$1;(statearr_26868_26898[2] = null);
(statearr_26868_26898[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 17))
{var inst_26823 = (state_26852[7]);var inst_26827 = cljs.core.chunk_first.call(null,inst_26823);var inst_26828 = cljs.core.chunk_rest.call(null,inst_26823);var inst_26829 = cljs.core.count.call(null,inst_26827);var inst_26809 = inst_26828;var inst_26810 = inst_26827;var inst_26811 = inst_26829;var inst_26812 = 0;var state_26852__$1 = (function (){var statearr_26869 = state_26852;(statearr_26869[9] = inst_26810);
(statearr_26869[10] = inst_26811);
(statearr_26869[11] = inst_26812);
(statearr_26869[12] = inst_26809);
return statearr_26869;
})();var statearr_26870_26899 = state_26852__$1;(statearr_26870_26899[2] = null);
(statearr_26870_26899[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 3))
{var inst_26850 = (state_26852[2]);var state_26852__$1 = state_26852;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26852__$1,inst_26850);
} else
{if((state_val_26853 === 12))
{var inst_26843 = (state_26852[2]);var state_26852__$1 = state_26852;var statearr_26871_26900 = state_26852__$1;(statearr_26871_26900[2] = inst_26843);
(statearr_26871_26900[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 2))
{var state_26852__$1 = state_26852;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26852__$1,4,in$);
} else
{if((state_val_26853 === 19))
{var inst_26838 = (state_26852[2]);var state_26852__$1 = state_26852;var statearr_26872_26901 = state_26852__$1;(statearr_26872_26901[2] = inst_26838);
(statearr_26872_26901[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 11))
{var inst_26823 = (state_26852[7]);var inst_26809 = (state_26852[12]);var inst_26823__$1 = cljs.core.seq.call(null,inst_26809);var state_26852__$1 = (function (){var statearr_26873 = state_26852;(statearr_26873[7] = inst_26823__$1);
return statearr_26873;
})();if(inst_26823__$1)
{var statearr_26874_26902 = state_26852__$1;(statearr_26874_26902[1] = 14);
} else
{var statearr_26875_26903 = state_26852__$1;(statearr_26875_26903[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 9))
{var inst_26845 = (state_26852[2]);var state_26852__$1 = (function (){var statearr_26876 = state_26852;(statearr_26876[15] = inst_26845);
return statearr_26876;
})();var statearr_26877_26904 = state_26852__$1;(statearr_26877_26904[2] = null);
(statearr_26877_26904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 5))
{var inst_26801 = cljs.core.async.close_BANG_.call(null,out);var state_26852__$1 = state_26852;var statearr_26878_26905 = state_26852__$1;(statearr_26878_26905[2] = inst_26801);
(statearr_26878_26905[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 14))
{var inst_26823 = (state_26852[7]);var inst_26825 = cljs.core.chunked_seq_QMARK_.call(null,inst_26823);var state_26852__$1 = state_26852;if(inst_26825)
{var statearr_26879_26906 = state_26852__$1;(statearr_26879_26906[1] = 17);
} else
{var statearr_26880_26907 = state_26852__$1;(statearr_26880_26907[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 16))
{var inst_26841 = (state_26852[2]);var state_26852__$1 = state_26852;var statearr_26881_26908 = state_26852__$1;(statearr_26881_26908[2] = inst_26841);
(statearr_26881_26908[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26853 === 10))
{var inst_26810 = (state_26852[9]);var inst_26812 = (state_26852[11]);var inst_26817 = cljs.core._nth.call(null,inst_26810,inst_26812);var state_26852__$1 = state_26852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26852__$1,13,out,inst_26817);
} else
{if((state_val_26853 === 18))
{var inst_26823 = (state_26852[7]);var inst_26832 = cljs.core.first.call(null,inst_26823);var state_26852__$1 = state_26852;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26852__$1,20,out,inst_26832);
} else
{if((state_val_26853 === 8))
{var inst_26811 = (state_26852[10]);var inst_26812 = (state_26852[11]);var inst_26814 = (inst_26812 < inst_26811);var inst_26815 = inst_26814;var state_26852__$1 = state_26852;if(cljs.core.truth_(inst_26815))
{var statearr_26882_26909 = state_26852__$1;(statearr_26882_26909[1] = 10);
} else
{var statearr_26883_26910 = state_26852__$1;(statearr_26883_26910[1] = 11);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_26887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26887[0] = state_machine__22127__auto__);
(statearr_26887[1] = 1);
return statearr_26887;
});
var state_machine__22127__auto____1 = (function (state_26852){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_26852);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e26888){if((e26888 instanceof Object))
{var ex__22130__auto__ = e26888;var statearr_26889_26911 = state_26852;(statearr_26889_26911[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26852);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26888;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26912 = state_26852;
state_26852 = G__26912;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_26852){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_26852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_26890 = f__22202__auto__.call(null);(statearr_26890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_26890;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
}));
return c__22201__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22201__auto___26993 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_26972){var state_val_26973 = (state_26972[1]);if((state_val_26973 === 7))
{var inst_26968 = (state_26972[2]);var state_26972__$1 = state_26972;var statearr_26974_26994 = state_26972__$1;(statearr_26974_26994[2] = inst_26968);
(statearr_26974_26994[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26973 === 1))
{var state_26972__$1 = state_26972;var statearr_26975_26995 = state_26972__$1;(statearr_26975_26995[2] = null);
(statearr_26975_26995[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26973 === 4))
{var inst_26955 = (state_26972[7]);var inst_26955__$1 = (state_26972[2]);var inst_26956 = (inst_26955__$1 == null);var state_26972__$1 = (function (){var statearr_26976 = state_26972;(statearr_26976[7] = inst_26955__$1);
return statearr_26976;
})();if(cljs.core.truth_(inst_26956))
{var statearr_26977_26996 = state_26972__$1;(statearr_26977_26996[1] = 5);
} else
{var statearr_26978_26997 = state_26972__$1;(statearr_26978_26997[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26973 === 6))
{var inst_26955 = (state_26972[7]);var state_26972__$1 = state_26972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26972__$1,11,to,inst_26955);
} else
{if((state_val_26973 === 3))
{var inst_26970 = (state_26972[2]);var state_26972__$1 = state_26972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26972__$1,inst_26970);
} else
{if((state_val_26973 === 2))
{var state_26972__$1 = state_26972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26972__$1,4,from);
} else
{if((state_val_26973 === 11))
{var inst_26965 = (state_26972[2]);var state_26972__$1 = (function (){var statearr_26979 = state_26972;(statearr_26979[8] = inst_26965);
return statearr_26979;
})();var statearr_26980_26998 = state_26972__$1;(statearr_26980_26998[2] = null);
(statearr_26980_26998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26973 === 9))
{var state_26972__$1 = state_26972;var statearr_26981_26999 = state_26972__$1;(statearr_26981_26999[2] = null);
(statearr_26981_26999[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26973 === 5))
{var state_26972__$1 = state_26972;if(cljs.core.truth_(close_QMARK_))
{var statearr_26982_27000 = state_26972__$1;(statearr_26982_27000[1] = 8);
} else
{var statearr_26983_27001 = state_26972__$1;(statearr_26983_27001[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26973 === 10))
{var inst_26962 = (state_26972[2]);var state_26972__$1 = state_26972;var statearr_26984_27002 = state_26972__$1;(statearr_26984_27002[2] = inst_26962);
(statearr_26984_27002[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26973 === 8))
{var inst_26959 = cljs.core.async.close_BANG_.call(null,to);var state_26972__$1 = state_26972;var statearr_26985_27003 = state_26972__$1;(statearr_26985_27003[2] = inst_26959);
(statearr_26985_27003[1] = 10);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_26989 = [null,null,null,null,null,null,null,null,null];(statearr_26989[0] = state_machine__22127__auto__);
(statearr_26989[1] = 1);
return statearr_26989;
});
var state_machine__22127__auto____1 = (function (state_26972){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_26972);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e26990){if((e26990 instanceof Object))
{var ex__22130__auto__ = e26990;var statearr_26991_27004 = state_26972;(statearr_26991_27004[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26972);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27005 = state_26972;
state_26972 = G__27005;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_26972){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_26972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_26992 = f__22202__auto__.call(null);(statearr_26992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___26993);
return statearr_26992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22201__auto___27092 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_27070){var state_val_27071 = (state_27070[1]);if((state_val_27071 === 7))
{var inst_27066 = (state_27070[2]);var state_27070__$1 = state_27070;var statearr_27072_27093 = state_27070__$1;(statearr_27072_27093[2] = inst_27066);
(statearr_27072_27093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27071 === 1))
{var state_27070__$1 = state_27070;var statearr_27073_27094 = state_27070__$1;(statearr_27073_27094[2] = null);
(statearr_27073_27094[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27071 === 4))
{var inst_27051 = (state_27070[7]);var inst_27051__$1 = (state_27070[2]);var inst_27052 = (inst_27051__$1 == null);var state_27070__$1 = (function (){var statearr_27074 = state_27070;(statearr_27074[7] = inst_27051__$1);
return statearr_27074;
})();if(cljs.core.truth_(inst_27052))
{var statearr_27075_27095 = state_27070__$1;(statearr_27075_27095[1] = 5);
} else
{var statearr_27076_27096 = state_27070__$1;(statearr_27076_27096[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27071 === 6))
{var inst_27051 = (state_27070[7]);var inst_27057 = p.call(null,inst_27051);var state_27070__$1 = state_27070;if(cljs.core.truth_(inst_27057))
{var statearr_27077_27097 = state_27070__$1;(statearr_27077_27097[1] = 9);
} else
{var statearr_27078_27098 = state_27070__$1;(statearr_27078_27098[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27071 === 3))
{var inst_27068 = (state_27070[2]);var state_27070__$1 = state_27070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27070__$1,inst_27068);
} else
{if((state_val_27071 === 2))
{var state_27070__$1 = state_27070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27070__$1,4,ch);
} else
{if((state_val_27071 === 11))
{var inst_27051 = (state_27070[7]);var inst_27061 = (state_27070[2]);var state_27070__$1 = state_27070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27070__$1,8,inst_27061,inst_27051);
} else
{if((state_val_27071 === 9))
{var state_27070__$1 = state_27070;var statearr_27079_27099 = state_27070__$1;(statearr_27079_27099[2] = tc);
(statearr_27079_27099[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27071 === 5))
{var inst_27054 = cljs.core.async.close_BANG_.call(null,tc);var inst_27055 = cljs.core.async.close_BANG_.call(null,fc);var state_27070__$1 = (function (){var statearr_27080 = state_27070;(statearr_27080[8] = inst_27054);
return statearr_27080;
})();var statearr_27081_27100 = state_27070__$1;(statearr_27081_27100[2] = inst_27055);
(statearr_27081_27100[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27071 === 10))
{var state_27070__$1 = state_27070;var statearr_27082_27101 = state_27070__$1;(statearr_27082_27101[2] = fc);
(statearr_27082_27101[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27071 === 8))
{var inst_27063 = (state_27070[2]);var state_27070__$1 = (function (){var statearr_27083 = state_27070;(statearr_27083[9] = inst_27063);
return statearr_27083;
})();var statearr_27084_27102 = state_27070__$1;(statearr_27084_27102[2] = null);
(statearr_27084_27102[1] = 2);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_27088 = [null,null,null,null,null,null,null,null,null,null];(statearr_27088[0] = state_machine__22127__auto__);
(statearr_27088[1] = 1);
return statearr_27088;
});
var state_machine__22127__auto____1 = (function (state_27070){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_27070);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e27089){if((e27089 instanceof Object))
{var ex__22130__auto__ = e27089;var statearr_27090_27103 = state_27070;(statearr_27090_27103[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27070);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27089;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27104 = state_27070;
state_27070 = G__27104;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_27070){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_27070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_27091 = f__22202__auto__.call(null);(statearr_27091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___27092);
return statearr_27091;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_27151){var state_val_27152 = (state_27151[1]);if((state_val_27152 === 7))
{var inst_27147 = (state_27151[2]);var state_27151__$1 = state_27151;var statearr_27153_27169 = state_27151__$1;(statearr_27153_27169[2] = inst_27147);
(statearr_27153_27169[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27152 === 6))
{var inst_27140 = (state_27151[7]);var inst_27137 = (state_27151[8]);var inst_27144 = f.call(null,inst_27137,inst_27140);var inst_27137__$1 = inst_27144;var state_27151__$1 = (function (){var statearr_27154 = state_27151;(statearr_27154[8] = inst_27137__$1);
return statearr_27154;
})();var statearr_27155_27170 = state_27151__$1;(statearr_27155_27170[2] = null);
(statearr_27155_27170[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27152 === 5))
{var inst_27137 = (state_27151[8]);var state_27151__$1 = state_27151;var statearr_27156_27171 = state_27151__$1;(statearr_27156_27171[2] = inst_27137);
(statearr_27156_27171[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27152 === 4))
{var inst_27140 = (state_27151[7]);var inst_27140__$1 = (state_27151[2]);var inst_27141 = (inst_27140__$1 == null);var state_27151__$1 = (function (){var statearr_27157 = state_27151;(statearr_27157[7] = inst_27140__$1);
return statearr_27157;
})();if(cljs.core.truth_(inst_27141))
{var statearr_27158_27172 = state_27151__$1;(statearr_27158_27172[1] = 5);
} else
{var statearr_27159_27173 = state_27151__$1;(statearr_27159_27173[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27152 === 3))
{var inst_27149 = (state_27151[2]);var state_27151__$1 = state_27151;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27151__$1,inst_27149);
} else
{if((state_val_27152 === 2))
{var state_27151__$1 = state_27151;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27151__$1,4,ch);
} else
{if((state_val_27152 === 1))
{var inst_27137 = init;var state_27151__$1 = (function (){var statearr_27160 = state_27151;(statearr_27160[8] = inst_27137);
return statearr_27160;
})();var statearr_27161_27174 = state_27151__$1;(statearr_27161_27174[2] = null);
(statearr_27161_27174[1] = 2);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_27165 = [null,null,null,null,null,null,null,null,null];(statearr_27165[0] = state_machine__22127__auto__);
(statearr_27165[1] = 1);
return statearr_27165;
});
var state_machine__22127__auto____1 = (function (state_27151){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_27151);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e27166){if((e27166 instanceof Object))
{var ex__22130__auto__ = e27166;var statearr_27167_27175 = state_27151;(statearr_27167_27175[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27151);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27166;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27176 = state_27151;
state_27151 = G__27176;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_27151){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_27151);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_27168 = f__22202__auto__.call(null);(statearr_27168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_27168;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
}));
return c__22201__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_27238){var state_val_27239 = (state_27238[1]);if((state_val_27239 === 7))
{var inst_27219 = (state_27238[7]);var inst_27224 = (state_27238[2]);var inst_27225 = cljs.core.next.call(null,inst_27219);var inst_27219__$1 = inst_27225;var state_27238__$1 = (function (){var statearr_27240 = state_27238;(statearr_27240[8] = inst_27224);
(statearr_27240[7] = inst_27219__$1);
return statearr_27240;
})();var statearr_27241_27259 = state_27238__$1;(statearr_27241_27259[2] = null);
(statearr_27241_27259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27239 === 1))
{var inst_27218 = cljs.core.seq.call(null,coll);var inst_27219 = inst_27218;var state_27238__$1 = (function (){var statearr_27242 = state_27238;(statearr_27242[7] = inst_27219);
return statearr_27242;
})();var statearr_27243_27260 = state_27238__$1;(statearr_27243_27260[2] = null);
(statearr_27243_27260[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27239 === 4))
{var inst_27219 = (state_27238[7]);var inst_27222 = cljs.core.first.call(null,inst_27219);var state_27238__$1 = state_27238;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27238__$1,7,ch,inst_27222);
} else
{if((state_val_27239 === 6))
{var inst_27234 = (state_27238[2]);var state_27238__$1 = state_27238;var statearr_27244_27261 = state_27238__$1;(statearr_27244_27261[2] = inst_27234);
(statearr_27244_27261[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27239 === 3))
{var inst_27236 = (state_27238[2]);var state_27238__$1 = state_27238;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27238__$1,inst_27236);
} else
{if((state_val_27239 === 2))
{var inst_27219 = (state_27238[7]);var state_27238__$1 = state_27238;if(cljs.core.truth_(inst_27219))
{var statearr_27245_27262 = state_27238__$1;(statearr_27245_27262[1] = 4);
} else
{var statearr_27246_27263 = state_27238__$1;(statearr_27246_27263[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27239 === 9))
{var state_27238__$1 = state_27238;var statearr_27247_27264 = state_27238__$1;(statearr_27247_27264[2] = null);
(statearr_27247_27264[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27239 === 5))
{var state_27238__$1 = state_27238;if(cljs.core.truth_(close_QMARK_))
{var statearr_27248_27265 = state_27238__$1;(statearr_27248_27265[1] = 8);
} else
{var statearr_27249_27266 = state_27238__$1;(statearr_27249_27266[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27239 === 10))
{var inst_27232 = (state_27238[2]);var state_27238__$1 = state_27238;var statearr_27250_27267 = state_27238__$1;(statearr_27250_27267[2] = inst_27232);
(statearr_27250_27267[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27239 === 8))
{var inst_27229 = cljs.core.async.close_BANG_.call(null,ch);var state_27238__$1 = state_27238;var statearr_27251_27268 = state_27238__$1;(statearr_27251_27268[2] = inst_27229);
(statearr_27251_27268[1] = 10);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_27255 = [null,null,null,null,null,null,null,null,null];(statearr_27255[0] = state_machine__22127__auto__);
(statearr_27255[1] = 1);
return statearr_27255;
});
var state_machine__22127__auto____1 = (function (state_27238){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_27238);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e27256){if((e27256 instanceof Object))
{var ex__22130__auto__ = e27256;var statearr_27257_27269 = state_27238;(statearr_27257_27269[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27238);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27256;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27270 = state_27238;
state_27238 = G__27270;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_27238){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_27238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_27258 = f__22202__auto__.call(null);(statearr_27258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_27258;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
}));
return c__22201__auto__;
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
cljs.core.async.Mux = (function (){var obj27272 = {};return obj27272;
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
cljs.core.async.Mult = (function (){var obj27274 = {};return obj27274;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t27498 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27498 = (function (cs,ch,mult,meta27499){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27499 = meta27499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27498.cljs$lang$type = true;
cljs.core.async.t27498.cljs$lang$ctorStr = "cljs.core.async/t27498";
cljs.core.async.t27498.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t27498");
});})(cs))
;
cljs.core.async.t27498.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t27498.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t27498.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t27498.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t27498.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27498.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t27498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27500){var self__ = this;
var _27500__$1 = this;return self__.meta27499;
});})(cs))
;
cljs.core.async.t27498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27500,meta27499__$1){var self__ = this;
var _27500__$1 = this;return (new cljs.core.async.t27498(self__.cs,self__.ch,self__.mult,meta27499__$1));
});})(cs))
;
cljs.core.async.__GT_t27498 = ((function (cs){
return (function __GT_t27498(cs__$1,ch__$1,mult__$1,meta27499){return (new cljs.core.async.t27498(cs__$1,ch__$1,mult__$1,meta27499));
});})(cs))
;
}
return (new cljs.core.async.t27498(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22201__auto___27721 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_27635){var state_val_27636 = (state_27635[1]);if((state_val_27636 === 7))
{var inst_27631 = (state_27635[2]);var state_27635__$1 = state_27635;var statearr_27637_27722 = state_27635__$1;(statearr_27637_27722[2] = inst_27631);
(statearr_27637_27722[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 20))
{var inst_27532 = (state_27635[7]);var inst_27542 = cljs.core.first.call(null,inst_27532);var inst_27543 = cljs.core.nth.call(null,inst_27542,0,null);var inst_27544 = cljs.core.nth.call(null,inst_27542,1,null);var state_27635__$1 = (function (){var statearr_27638 = state_27635;(statearr_27638[8] = inst_27543);
return statearr_27638;
})();if(cljs.core.truth_(inst_27544))
{var statearr_27639_27723 = state_27635__$1;(statearr_27639_27723[1] = 22);
} else
{var statearr_27640_27724 = state_27635__$1;(statearr_27640_27724[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 27))
{var inst_27572 = (state_27635[9]);var inst_27574 = (state_27635[10]);var inst_27579 = cljs.core._nth.call(null,inst_27572,inst_27574);var state_27635__$1 = (function (){var statearr_27641 = state_27635;(statearr_27641[11] = inst_27579);
return statearr_27641;
})();var statearr_27642_27725 = state_27635__$1;(statearr_27642_27725[2] = null);
(statearr_27642_27725[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 1))
{var state_27635__$1 = state_27635;var statearr_27643_27726 = state_27635__$1;(statearr_27643_27726[2] = null);
(statearr_27643_27726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 24))
{var inst_27532 = (state_27635[7]);var inst_27549 = (state_27635[2]);var inst_27550 = cljs.core.next.call(null,inst_27532);var inst_27512 = inst_27550;var inst_27513 = null;var inst_27514 = 0;var inst_27515 = 0;var state_27635__$1 = (function (){var statearr_27644 = state_27635;(statearr_27644[12] = inst_27515);
(statearr_27644[13] = inst_27549);
(statearr_27644[14] = inst_27514);
(statearr_27644[15] = inst_27512);
(statearr_27644[16] = inst_27513);
return statearr_27644;
})();var statearr_27645_27727 = state_27635__$1;(statearr_27645_27727[2] = null);
(statearr_27645_27727[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 39))
{var inst_27592 = (state_27635[17]);var inst_27610 = (state_27635[2]);var inst_27611 = cljs.core.next.call(null,inst_27592);var inst_27571 = inst_27611;var inst_27572 = null;var inst_27573 = 0;var inst_27574 = 0;var state_27635__$1 = (function (){var statearr_27649 = state_27635;(statearr_27649[18] = inst_27610);
(statearr_27649[9] = inst_27572);
(statearr_27649[10] = inst_27574);
(statearr_27649[19] = inst_27571);
(statearr_27649[20] = inst_27573);
return statearr_27649;
})();var statearr_27650_27728 = state_27635__$1;(statearr_27650_27728[2] = null);
(statearr_27650_27728[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 4))
{var inst_27503 = (state_27635[21]);var inst_27503__$1 = (state_27635[2]);var inst_27504 = (inst_27503__$1 == null);var state_27635__$1 = (function (){var statearr_27651 = state_27635;(statearr_27651[21] = inst_27503__$1);
return statearr_27651;
})();if(cljs.core.truth_(inst_27504))
{var statearr_27652_27729 = state_27635__$1;(statearr_27652_27729[1] = 5);
} else
{var statearr_27653_27730 = state_27635__$1;(statearr_27653_27730[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 15))
{var inst_27515 = (state_27635[12]);var inst_27514 = (state_27635[14]);var inst_27512 = (state_27635[15]);var inst_27513 = (state_27635[16]);var inst_27528 = (state_27635[2]);var inst_27529 = (inst_27515 + 1);var tmp27646 = inst_27514;var tmp27647 = inst_27512;var tmp27648 = inst_27513;var inst_27512__$1 = tmp27647;var inst_27513__$1 = tmp27648;var inst_27514__$1 = tmp27646;var inst_27515__$1 = inst_27529;var state_27635__$1 = (function (){var statearr_27654 = state_27635;(statearr_27654[12] = inst_27515__$1);
(statearr_27654[14] = inst_27514__$1);
(statearr_27654[15] = inst_27512__$1);
(statearr_27654[16] = inst_27513__$1);
(statearr_27654[22] = inst_27528);
return statearr_27654;
})();var statearr_27655_27731 = state_27635__$1;(statearr_27655_27731[2] = null);
(statearr_27655_27731[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 21))
{var inst_27553 = (state_27635[2]);var state_27635__$1 = state_27635;var statearr_27656_27732 = state_27635__$1;(statearr_27656_27732[2] = inst_27553);
(statearr_27656_27732[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 31))
{var inst_27579 = (state_27635[11]);var inst_27580 = (state_27635[2]);var inst_27581 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27582 = cljs.core.async.untap_STAR_.call(null,m,inst_27579);var state_27635__$1 = (function (){var statearr_27657 = state_27635;(statearr_27657[23] = inst_27581);
(statearr_27657[24] = inst_27580);
return statearr_27657;
})();var statearr_27658_27733 = state_27635__$1;(statearr_27658_27733[2] = inst_27582);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27635__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 32))
{var inst_27579 = (state_27635[11]);var inst_27503 = (state_27635[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27635,31,Object,null,30);var inst_27586 = cljs.core.async.put_BANG_.call(null,inst_27579,inst_27503,done);var state_27635__$1 = state_27635;var statearr_27659_27734 = state_27635__$1;(statearr_27659_27734[2] = inst_27586);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27635__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 40))
{var inst_27601 = (state_27635[25]);var inst_27602 = (state_27635[2]);var inst_27603 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27604 = cljs.core.async.untap_STAR_.call(null,m,inst_27601);var state_27635__$1 = (function (){var statearr_27660 = state_27635;(statearr_27660[26] = inst_27603);
(statearr_27660[27] = inst_27602);
return statearr_27660;
})();var statearr_27661_27735 = state_27635__$1;(statearr_27661_27735[2] = inst_27604);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27635__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 33))
{var inst_27592 = (state_27635[17]);var inst_27594 = cljs.core.chunked_seq_QMARK_.call(null,inst_27592);var state_27635__$1 = state_27635;if(inst_27594)
{var statearr_27662_27736 = state_27635__$1;(statearr_27662_27736[1] = 36);
} else
{var statearr_27663_27737 = state_27635__$1;(statearr_27663_27737[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 13))
{var inst_27522 = (state_27635[28]);var inst_27525 = cljs.core.async.close_BANG_.call(null,inst_27522);var state_27635__$1 = state_27635;var statearr_27664_27738 = state_27635__$1;(statearr_27664_27738[2] = inst_27525);
(statearr_27664_27738[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 22))
{var inst_27543 = (state_27635[8]);var inst_27546 = cljs.core.async.close_BANG_.call(null,inst_27543);var state_27635__$1 = state_27635;var statearr_27665_27739 = state_27635__$1;(statearr_27665_27739[2] = inst_27546);
(statearr_27665_27739[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 36))
{var inst_27592 = (state_27635[17]);var inst_27596 = cljs.core.chunk_first.call(null,inst_27592);var inst_27597 = cljs.core.chunk_rest.call(null,inst_27592);var inst_27598 = cljs.core.count.call(null,inst_27596);var inst_27571 = inst_27597;var inst_27572 = inst_27596;var inst_27573 = inst_27598;var inst_27574 = 0;var state_27635__$1 = (function (){var statearr_27666 = state_27635;(statearr_27666[9] = inst_27572);
(statearr_27666[10] = inst_27574);
(statearr_27666[19] = inst_27571);
(statearr_27666[20] = inst_27573);
return statearr_27666;
})();var statearr_27667_27740 = state_27635__$1;(statearr_27667_27740[2] = null);
(statearr_27667_27740[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 41))
{var inst_27601 = (state_27635[25]);var inst_27503 = (state_27635[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27635,40,Object,null,39);var inst_27608 = cljs.core.async.put_BANG_.call(null,inst_27601,inst_27503,done);var state_27635__$1 = state_27635;var statearr_27668_27741 = state_27635__$1;(statearr_27668_27741[2] = inst_27608);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27635__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 43))
{var state_27635__$1 = state_27635;var statearr_27669_27742 = state_27635__$1;(statearr_27669_27742[2] = null);
(statearr_27669_27742[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 29))
{var inst_27619 = (state_27635[2]);var state_27635__$1 = state_27635;var statearr_27670_27743 = state_27635__$1;(statearr_27670_27743[2] = inst_27619);
(statearr_27670_27743[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 44))
{var inst_27628 = (state_27635[2]);var state_27635__$1 = (function (){var statearr_27671 = state_27635;(statearr_27671[29] = inst_27628);
return statearr_27671;
})();var statearr_27672_27744 = state_27635__$1;(statearr_27672_27744[2] = null);
(statearr_27672_27744[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 6))
{var inst_27563 = (state_27635[30]);var inst_27562 = cljs.core.deref.call(null,cs);var inst_27563__$1 = cljs.core.keys.call(null,inst_27562);var inst_27564 = cljs.core.count.call(null,inst_27563__$1);var inst_27565 = cljs.core.reset_BANG_.call(null,dctr,inst_27564);var inst_27570 = cljs.core.seq.call(null,inst_27563__$1);var inst_27571 = inst_27570;var inst_27572 = null;var inst_27573 = 0;var inst_27574 = 0;var state_27635__$1 = (function (){var statearr_27673 = state_27635;(statearr_27673[9] = inst_27572);
(statearr_27673[30] = inst_27563__$1);
(statearr_27673[10] = inst_27574);
(statearr_27673[31] = inst_27565);
(statearr_27673[19] = inst_27571);
(statearr_27673[20] = inst_27573);
return statearr_27673;
})();var statearr_27674_27745 = state_27635__$1;(statearr_27674_27745[2] = null);
(statearr_27674_27745[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 28))
{var inst_27571 = (state_27635[19]);var inst_27592 = (state_27635[17]);var inst_27592__$1 = cljs.core.seq.call(null,inst_27571);var state_27635__$1 = (function (){var statearr_27675 = state_27635;(statearr_27675[17] = inst_27592__$1);
return statearr_27675;
})();if(inst_27592__$1)
{var statearr_27676_27746 = state_27635__$1;(statearr_27676_27746[1] = 33);
} else
{var statearr_27677_27747 = state_27635__$1;(statearr_27677_27747[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 25))
{var inst_27574 = (state_27635[10]);var inst_27573 = (state_27635[20]);var inst_27576 = (inst_27574 < inst_27573);var inst_27577 = inst_27576;var state_27635__$1 = state_27635;if(cljs.core.truth_(inst_27577))
{var statearr_27678_27748 = state_27635__$1;(statearr_27678_27748[1] = 27);
} else
{var statearr_27679_27749 = state_27635__$1;(statearr_27679_27749[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 34))
{var state_27635__$1 = state_27635;var statearr_27680_27750 = state_27635__$1;(statearr_27680_27750[2] = null);
(statearr_27680_27750[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 17))
{var state_27635__$1 = state_27635;var statearr_27681_27751 = state_27635__$1;(statearr_27681_27751[2] = null);
(statearr_27681_27751[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 3))
{var inst_27633 = (state_27635[2]);var state_27635__$1 = state_27635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27635__$1,inst_27633);
} else
{if((state_val_27636 === 12))
{var inst_27558 = (state_27635[2]);var state_27635__$1 = state_27635;var statearr_27682_27752 = state_27635__$1;(statearr_27682_27752[2] = inst_27558);
(statearr_27682_27752[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 2))
{var state_27635__$1 = state_27635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27635__$1,4,ch);
} else
{if((state_val_27636 === 23))
{var state_27635__$1 = state_27635;var statearr_27683_27753 = state_27635__$1;(statearr_27683_27753[2] = null);
(statearr_27683_27753[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 35))
{var inst_27617 = (state_27635[2]);var state_27635__$1 = state_27635;var statearr_27684_27754 = state_27635__$1;(statearr_27684_27754[2] = inst_27617);
(statearr_27684_27754[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 19))
{var inst_27532 = (state_27635[7]);var inst_27536 = cljs.core.chunk_first.call(null,inst_27532);var inst_27537 = cljs.core.chunk_rest.call(null,inst_27532);var inst_27538 = cljs.core.count.call(null,inst_27536);var inst_27512 = inst_27537;var inst_27513 = inst_27536;var inst_27514 = inst_27538;var inst_27515 = 0;var state_27635__$1 = (function (){var statearr_27685 = state_27635;(statearr_27685[12] = inst_27515);
(statearr_27685[14] = inst_27514);
(statearr_27685[15] = inst_27512);
(statearr_27685[16] = inst_27513);
return statearr_27685;
})();var statearr_27686_27755 = state_27635__$1;(statearr_27686_27755[2] = null);
(statearr_27686_27755[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 11))
{var inst_27512 = (state_27635[15]);var inst_27532 = (state_27635[7]);var inst_27532__$1 = cljs.core.seq.call(null,inst_27512);var state_27635__$1 = (function (){var statearr_27687 = state_27635;(statearr_27687[7] = inst_27532__$1);
return statearr_27687;
})();if(inst_27532__$1)
{var statearr_27688_27756 = state_27635__$1;(statearr_27688_27756[1] = 16);
} else
{var statearr_27689_27757 = state_27635__$1;(statearr_27689_27757[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 9))
{var inst_27560 = (state_27635[2]);var state_27635__$1 = state_27635;var statearr_27690_27758 = state_27635__$1;(statearr_27690_27758[2] = inst_27560);
(statearr_27690_27758[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 5))
{var inst_27510 = cljs.core.deref.call(null,cs);var inst_27511 = cljs.core.seq.call(null,inst_27510);var inst_27512 = inst_27511;var inst_27513 = null;var inst_27514 = 0;var inst_27515 = 0;var state_27635__$1 = (function (){var statearr_27691 = state_27635;(statearr_27691[12] = inst_27515);
(statearr_27691[14] = inst_27514);
(statearr_27691[15] = inst_27512);
(statearr_27691[16] = inst_27513);
return statearr_27691;
})();var statearr_27692_27759 = state_27635__$1;(statearr_27692_27759[2] = null);
(statearr_27692_27759[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 14))
{var state_27635__$1 = state_27635;var statearr_27693_27760 = state_27635__$1;(statearr_27693_27760[2] = null);
(statearr_27693_27760[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 45))
{var inst_27625 = (state_27635[2]);var state_27635__$1 = state_27635;var statearr_27694_27761 = state_27635__$1;(statearr_27694_27761[2] = inst_27625);
(statearr_27694_27761[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 26))
{var inst_27563 = (state_27635[30]);var inst_27621 = (state_27635[2]);var inst_27622 = cljs.core.seq.call(null,inst_27563);var state_27635__$1 = (function (){var statearr_27695 = state_27635;(statearr_27695[32] = inst_27621);
return statearr_27695;
})();if(inst_27622)
{var statearr_27696_27762 = state_27635__$1;(statearr_27696_27762[1] = 42);
} else
{var statearr_27697_27763 = state_27635__$1;(statearr_27697_27763[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 16))
{var inst_27532 = (state_27635[7]);var inst_27534 = cljs.core.chunked_seq_QMARK_.call(null,inst_27532);var state_27635__$1 = state_27635;if(inst_27534)
{var statearr_27701_27764 = state_27635__$1;(statearr_27701_27764[1] = 19);
} else
{var statearr_27702_27765 = state_27635__$1;(statearr_27702_27765[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 38))
{var inst_27614 = (state_27635[2]);var state_27635__$1 = state_27635;var statearr_27703_27766 = state_27635__$1;(statearr_27703_27766[2] = inst_27614);
(statearr_27703_27766[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 30))
{var inst_27572 = (state_27635[9]);var inst_27574 = (state_27635[10]);var inst_27571 = (state_27635[19]);var inst_27573 = (state_27635[20]);var inst_27588 = (state_27635[2]);var inst_27589 = (inst_27574 + 1);var tmp27698 = inst_27572;var tmp27699 = inst_27571;var tmp27700 = inst_27573;var inst_27571__$1 = tmp27699;var inst_27572__$1 = tmp27698;var inst_27573__$1 = tmp27700;var inst_27574__$1 = inst_27589;var state_27635__$1 = (function (){var statearr_27704 = state_27635;(statearr_27704[33] = inst_27588);
(statearr_27704[9] = inst_27572__$1);
(statearr_27704[10] = inst_27574__$1);
(statearr_27704[19] = inst_27571__$1);
(statearr_27704[20] = inst_27573__$1);
return statearr_27704;
})();var statearr_27705_27767 = state_27635__$1;(statearr_27705_27767[2] = null);
(statearr_27705_27767[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 10))
{var inst_27515 = (state_27635[12]);var inst_27513 = (state_27635[16]);var inst_27521 = cljs.core._nth.call(null,inst_27513,inst_27515);var inst_27522 = cljs.core.nth.call(null,inst_27521,0,null);var inst_27523 = cljs.core.nth.call(null,inst_27521,1,null);var state_27635__$1 = (function (){var statearr_27706 = state_27635;(statearr_27706[28] = inst_27522);
return statearr_27706;
})();if(cljs.core.truth_(inst_27523))
{var statearr_27707_27768 = state_27635__$1;(statearr_27707_27768[1] = 13);
} else
{var statearr_27708_27769 = state_27635__$1;(statearr_27708_27769[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 18))
{var inst_27556 = (state_27635[2]);var state_27635__$1 = state_27635;var statearr_27709_27770 = state_27635__$1;(statearr_27709_27770[2] = inst_27556);
(statearr_27709_27770[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 42))
{var state_27635__$1 = state_27635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27635__$1,45,dchan);
} else
{if((state_val_27636 === 37))
{var inst_27592 = (state_27635[17]);var inst_27601 = cljs.core.first.call(null,inst_27592);var state_27635__$1 = (function (){var statearr_27710 = state_27635;(statearr_27710[25] = inst_27601);
return statearr_27710;
})();var statearr_27711_27771 = state_27635__$1;(statearr_27711_27771[2] = null);
(statearr_27711_27771[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27636 === 8))
{var inst_27515 = (state_27635[12]);var inst_27514 = (state_27635[14]);var inst_27517 = (inst_27515 < inst_27514);var inst_27518 = inst_27517;var state_27635__$1 = state_27635;if(cljs.core.truth_(inst_27518))
{var statearr_27712_27772 = state_27635__$1;(statearr_27712_27772[1] = 10);
} else
{var statearr_27713_27773 = state_27635__$1;(statearr_27713_27773[1] = 11);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_27717 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27717[0] = state_machine__22127__auto__);
(statearr_27717[1] = 1);
return statearr_27717;
});
var state_machine__22127__auto____1 = (function (state_27635){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_27635);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e27718){if((e27718 instanceof Object))
{var ex__22130__auto__ = e27718;var statearr_27719_27774 = state_27635;(statearr_27719_27774[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27635);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27718;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27775 = state_27635;
state_27635 = G__27775;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_27635){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_27635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_27720 = f__22202__auto__.call(null);(statearr_27720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___27721);
return statearr_27720;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
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
cljs.core.async.Mix = (function (){var obj27777 = {};return obj27777;
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
;var m = (function (){if(typeof cljs.core.async.t27887 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27887 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27888){
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
this.meta27888 = meta27888;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27887.cljs$lang$type = true;
cljs.core.async.t27887.cljs$lang$ctorStr = "cljs.core.async/t27887";
cljs.core.async.t27887.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t27887");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27887.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27887.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27887.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27887.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27887.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27887.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27887.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27887.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27887.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27889){var self__ = this;
var _27889__$1 = this;return self__.meta27888;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27887.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27889,meta27888__$1){var self__ = this;
var _27889__$1 = this;return (new cljs.core.async.t27887(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27888__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27887 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27887(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27888){return (new cljs.core.async.t27887(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27888));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27887(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__22201__auto___27996 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_27954){var state_val_27955 = (state_27954[1]);if((state_val_27955 === 7))
{var inst_27903 = (state_27954[7]);var inst_27908 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27903);var state_27954__$1 = state_27954;var statearr_27956_27997 = state_27954__$1;(statearr_27956_27997[2] = inst_27908);
(statearr_27956_27997[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 20))
{var inst_27918 = (state_27954[8]);var state_27954__$1 = state_27954;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27954__$1,23,out,inst_27918);
} else
{if((state_val_27955 === 1))
{var inst_27893 = (state_27954[9]);var inst_27893__$1 = calc_state.call(null);var inst_27894 = cljs.core.seq_QMARK_.call(null,inst_27893__$1);var state_27954__$1 = (function (){var statearr_27957 = state_27954;(statearr_27957[9] = inst_27893__$1);
return statearr_27957;
})();if(inst_27894)
{var statearr_27958_27998 = state_27954__$1;(statearr_27958_27998[1] = 2);
} else
{var statearr_27959_27999 = state_27954__$1;(statearr_27959_27999[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 4))
{var inst_27893 = (state_27954[9]);var inst_27899 = (state_27954[2]);var inst_27900 = cljs.core.get.call(null,inst_27899,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27901 = cljs.core.get.call(null,inst_27899,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27902 = cljs.core.get.call(null,inst_27899,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_27903 = inst_27893;var state_27954__$1 = (function (){var statearr_27960 = state_27954;(statearr_27960[7] = inst_27903);
(statearr_27960[10] = inst_27900);
(statearr_27960[11] = inst_27901);
(statearr_27960[12] = inst_27902);
return statearr_27960;
})();var statearr_27961_28000 = state_27954__$1;(statearr_27961_28000[2] = null);
(statearr_27961_28000[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 15))
{var state_27954__$1 = state_27954;var statearr_27962_28001 = state_27954__$1;(statearr_27962_28001[2] = null);
(statearr_27962_28001[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 21))
{var state_27954__$1 = state_27954;var statearr_27963_28002 = state_27954__$1;(statearr_27963_28002[2] = null);
(statearr_27963_28002[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 13))
{var inst_27950 = (state_27954[2]);var state_27954__$1 = state_27954;var statearr_27964_28003 = state_27954__$1;(statearr_27964_28003[2] = inst_27950);
(statearr_27964_28003[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 22))
{var inst_27911 = (state_27954[13]);var inst_27947 = (state_27954[2]);var inst_27903 = inst_27911;var state_27954__$1 = (function (){var statearr_27965 = state_27954;(statearr_27965[7] = inst_27903);
(statearr_27965[14] = inst_27947);
return statearr_27965;
})();var statearr_27966_28004 = state_27954__$1;(statearr_27966_28004[2] = null);
(statearr_27966_28004[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 6))
{var inst_27952 = (state_27954[2]);var state_27954__$1 = state_27954;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27954__$1,inst_27952);
} else
{if((state_val_27955 === 17))
{var inst_27933 = (state_27954[15]);var state_27954__$1 = state_27954;var statearr_27967_28005 = state_27954__$1;(statearr_27967_28005[2] = inst_27933);
(statearr_27967_28005[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 3))
{var inst_27893 = (state_27954[9]);var state_27954__$1 = state_27954;var statearr_27968_28006 = state_27954__$1;(statearr_27968_28006[2] = inst_27893);
(statearr_27968_28006[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 12))
{var inst_27914 = (state_27954[16]);var inst_27933 = (state_27954[15]);var inst_27919 = (state_27954[17]);var inst_27933__$1 = inst_27914.call(null,inst_27919);var state_27954__$1 = (function (){var statearr_27969 = state_27954;(statearr_27969[15] = inst_27933__$1);
return statearr_27969;
})();if(cljs.core.truth_(inst_27933__$1))
{var statearr_27970_28007 = state_27954__$1;(statearr_27970_28007[1] = 17);
} else
{var statearr_27971_28008 = state_27954__$1;(statearr_27971_28008[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 2))
{var inst_27893 = (state_27954[9]);var inst_27896 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27893);var state_27954__$1 = state_27954;var statearr_27972_28009 = state_27954__$1;(statearr_27972_28009[2] = inst_27896);
(statearr_27972_28009[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 23))
{var inst_27944 = (state_27954[2]);var state_27954__$1 = state_27954;var statearr_27973_28010 = state_27954__$1;(statearr_27973_28010[2] = inst_27944);
(statearr_27973_28010[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 19))
{var inst_27941 = (state_27954[2]);var state_27954__$1 = state_27954;if(cljs.core.truth_(inst_27941))
{var statearr_27974_28011 = state_27954__$1;(statearr_27974_28011[1] = 20);
} else
{var statearr_27975_28012 = state_27954__$1;(statearr_27975_28012[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 11))
{var inst_27918 = (state_27954[8]);var inst_27924 = (inst_27918 == null);var state_27954__$1 = state_27954;if(cljs.core.truth_(inst_27924))
{var statearr_27976_28013 = state_27954__$1;(statearr_27976_28013[1] = 14);
} else
{var statearr_27977_28014 = state_27954__$1;(statearr_27977_28014[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 9))
{var inst_27911 = (state_27954[13]);var inst_27911__$1 = (state_27954[2]);var inst_27912 = cljs.core.get.call(null,inst_27911__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27913 = cljs.core.get.call(null,inst_27911__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27914 = cljs.core.get.call(null,inst_27911__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27954__$1 = (function (){var statearr_27978 = state_27954;(statearr_27978[13] = inst_27911__$1);
(statearr_27978[16] = inst_27914);
(statearr_27978[18] = inst_27913);
return statearr_27978;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27954__$1,10,inst_27912);
} else
{if((state_val_27955 === 5))
{var inst_27903 = (state_27954[7]);var inst_27906 = cljs.core.seq_QMARK_.call(null,inst_27903);var state_27954__$1 = state_27954;if(inst_27906)
{var statearr_27979_28015 = state_27954__$1;(statearr_27979_28015[1] = 7);
} else
{var statearr_27980_28016 = state_27954__$1;(statearr_27980_28016[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 14))
{var inst_27919 = (state_27954[17]);var inst_27926 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27919);var state_27954__$1 = state_27954;var statearr_27981_28017 = state_27954__$1;(statearr_27981_28017[2] = inst_27926);
(statearr_27981_28017[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 16))
{var inst_27929 = (state_27954[2]);var inst_27930 = calc_state.call(null);var inst_27903 = inst_27930;var state_27954__$1 = (function (){var statearr_27982 = state_27954;(statearr_27982[19] = inst_27929);
(statearr_27982[7] = inst_27903);
return statearr_27982;
})();var statearr_27983_28018 = state_27954__$1;(statearr_27983_28018[2] = null);
(statearr_27983_28018[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 10))
{var inst_27919 = (state_27954[17]);var inst_27918 = (state_27954[8]);var inst_27917 = (state_27954[2]);var inst_27918__$1 = cljs.core.nth.call(null,inst_27917,0,null);var inst_27919__$1 = cljs.core.nth.call(null,inst_27917,1,null);var inst_27920 = (inst_27918__$1 == null);var inst_27921 = cljs.core._EQ_.call(null,inst_27919__$1,change);var inst_27922 = (inst_27920) || (inst_27921);var state_27954__$1 = (function (){var statearr_27984 = state_27954;(statearr_27984[17] = inst_27919__$1);
(statearr_27984[8] = inst_27918__$1);
return statearr_27984;
})();if(cljs.core.truth_(inst_27922))
{var statearr_27985_28019 = state_27954__$1;(statearr_27985_28019[1] = 11);
} else
{var statearr_27986_28020 = state_27954__$1;(statearr_27986_28020[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 18))
{var inst_27914 = (state_27954[16]);var inst_27919 = (state_27954[17]);var inst_27913 = (state_27954[18]);var inst_27936 = cljs.core.empty_QMARK_.call(null,inst_27914);var inst_27937 = inst_27913.call(null,inst_27919);var inst_27938 = cljs.core.not.call(null,inst_27937);var inst_27939 = (inst_27936) && (inst_27938);var state_27954__$1 = state_27954;var statearr_27987_28021 = state_27954__$1;(statearr_27987_28021[2] = inst_27939);
(statearr_27987_28021[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27955 === 8))
{var inst_27903 = (state_27954[7]);var state_27954__$1 = state_27954;var statearr_27988_28022 = state_27954__$1;(statearr_27988_28022[2] = inst_27903);
(statearr_27988_28022[1] = 9);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_27992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27992[0] = state_machine__22127__auto__);
(statearr_27992[1] = 1);
return statearr_27992;
});
var state_machine__22127__auto____1 = (function (state_27954){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_27954);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e27993){if((e27993 instanceof Object))
{var ex__22130__auto__ = e27993;var statearr_27994_28023 = state_27954;(statearr_27994_28023[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27954);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28024 = state_27954;
state_27954 = G__28024;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_27954){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_27954);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_27995 = f__22202__auto__.call(null);(statearr_27995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___27996);
return statearr_27995;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
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
cljs.core.async.Pub = (function (){var obj28026 = {};return obj28026;
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
return (function (p1__28027_SHARP_){if(cljs.core.truth_(p1__28027_SHARP_.call(null,topic)))
{return p1__28027_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__28027_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14982__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t28152 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28152 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28153){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28153 = meta28153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28152.cljs$lang$type = true;
cljs.core.async.t28152.cljs$lang$ctorStr = "cljs.core.async/t28152";
cljs.core.async.t28152.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t28152");
});})(mults,ensure_mult))
;
cljs.core.async.t28152.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t28152.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t28152.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t28152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t28152.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t28152.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t28152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28154){var self__ = this;
var _28154__$1 = this;return self__.meta28153;
});})(mults,ensure_mult))
;
cljs.core.async.t28152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28154,meta28153__$1){var self__ = this;
var _28154__$1 = this;return (new cljs.core.async.t28152(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28153__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t28152 = ((function (mults,ensure_mult){
return (function __GT_t28152(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28153){return (new cljs.core.async.t28152(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28153));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t28152(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22201__auto___28276 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_28228){var state_val_28229 = (state_28228[1]);if((state_val_28229 === 7))
{var inst_28224 = (state_28228[2]);var state_28228__$1 = state_28228;var statearr_28230_28277 = state_28228__$1;(statearr_28230_28277[2] = inst_28224);
(statearr_28230_28277[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 20))
{var state_28228__$1 = state_28228;var statearr_28231_28278 = state_28228__$1;(statearr_28231_28278[2] = null);
(statearr_28231_28278[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 1))
{var state_28228__$1 = state_28228;var statearr_28232_28279 = state_28228__$1;(statearr_28232_28279[2] = null);
(statearr_28232_28279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 24))
{var inst_28207 = (state_28228[7]);var inst_28157 = (state_28228[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28228,23,Object,null,22);var inst_28214 = cljs.core.async.muxch_STAR_.call(null,inst_28207);var state_28228__$1 = state_28228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28228__$1,25,inst_28214,inst_28157);
} else
{if((state_val_28229 === 4))
{var inst_28157 = (state_28228[8]);var inst_28157__$1 = (state_28228[2]);var inst_28158 = (inst_28157__$1 == null);var state_28228__$1 = (function (){var statearr_28233 = state_28228;(statearr_28233[8] = inst_28157__$1);
return statearr_28233;
})();if(cljs.core.truth_(inst_28158))
{var statearr_28234_28280 = state_28228__$1;(statearr_28234_28280[1] = 5);
} else
{var statearr_28235_28281 = state_28228__$1;(statearr_28235_28281[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 15))
{var inst_28199 = (state_28228[2]);var state_28228__$1 = state_28228;var statearr_28236_28282 = state_28228__$1;(statearr_28236_28282[2] = inst_28199);
(statearr_28236_28282[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 21))
{var inst_28221 = (state_28228[2]);var state_28228__$1 = (function (){var statearr_28237 = state_28228;(statearr_28237[9] = inst_28221);
return statearr_28237;
})();var statearr_28238_28283 = state_28228__$1;(statearr_28238_28283[2] = null);
(statearr_28238_28283[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 13))
{var inst_28181 = (state_28228[10]);var inst_28183 = cljs.core.chunked_seq_QMARK_.call(null,inst_28181);var state_28228__$1 = state_28228;if(inst_28183)
{var statearr_28239_28284 = state_28228__$1;(statearr_28239_28284[1] = 16);
} else
{var statearr_28240_28285 = state_28228__$1;(statearr_28240_28285[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 22))
{var inst_28218 = (state_28228[2]);var state_28228__$1 = state_28228;var statearr_28241_28286 = state_28228__$1;(statearr_28241_28286[2] = inst_28218);
(statearr_28241_28286[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 6))
{var inst_28207 = (state_28228[7]);var inst_28157 = (state_28228[8]);var inst_28205 = (state_28228[11]);var inst_28205__$1 = topic_fn.call(null,inst_28157);var inst_28206 = cljs.core.deref.call(null,mults);var inst_28207__$1 = cljs.core.get.call(null,inst_28206,inst_28205__$1);var state_28228__$1 = (function (){var statearr_28242 = state_28228;(statearr_28242[7] = inst_28207__$1);
(statearr_28242[11] = inst_28205__$1);
return statearr_28242;
})();if(cljs.core.truth_(inst_28207__$1))
{var statearr_28243_28287 = state_28228__$1;(statearr_28243_28287[1] = 19);
} else
{var statearr_28244_28288 = state_28228__$1;(statearr_28244_28288[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 25))
{var inst_28216 = (state_28228[2]);var state_28228__$1 = state_28228;var statearr_28245_28289 = state_28228__$1;(statearr_28245_28289[2] = inst_28216);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28228__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 17))
{var inst_28181 = (state_28228[10]);var inst_28190 = cljs.core.first.call(null,inst_28181);var inst_28191 = cljs.core.async.muxch_STAR_.call(null,inst_28190);var inst_28192 = cljs.core.async.close_BANG_.call(null,inst_28191);var inst_28193 = cljs.core.next.call(null,inst_28181);var inst_28167 = inst_28193;var inst_28168 = null;var inst_28169 = 0;var inst_28170 = 0;var state_28228__$1 = (function (){var statearr_28246 = state_28228;(statearr_28246[12] = inst_28170);
(statearr_28246[13] = inst_28167);
(statearr_28246[14] = inst_28169);
(statearr_28246[15] = inst_28168);
(statearr_28246[16] = inst_28192);
return statearr_28246;
})();var statearr_28247_28290 = state_28228__$1;(statearr_28247_28290[2] = null);
(statearr_28247_28290[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 3))
{var inst_28226 = (state_28228[2]);var state_28228__$1 = state_28228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28228__$1,inst_28226);
} else
{if((state_val_28229 === 12))
{var inst_28201 = (state_28228[2]);var state_28228__$1 = state_28228;var statearr_28248_28291 = state_28228__$1;(statearr_28248_28291[2] = inst_28201);
(statearr_28248_28291[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 2))
{var state_28228__$1 = state_28228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28228__$1,4,ch);
} else
{if((state_val_28229 === 23))
{var inst_28205 = (state_28228[11]);var inst_28209 = (state_28228[2]);var inst_28210 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28205);var state_28228__$1 = (function (){var statearr_28249 = state_28228;(statearr_28249[17] = inst_28209);
return statearr_28249;
})();var statearr_28250_28292 = state_28228__$1;(statearr_28250_28292[2] = inst_28210);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28228__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 19))
{var state_28228__$1 = state_28228;var statearr_28251_28293 = state_28228__$1;(statearr_28251_28293[2] = null);
(statearr_28251_28293[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 11))
{var inst_28181 = (state_28228[10]);var inst_28167 = (state_28228[13]);var inst_28181__$1 = cljs.core.seq.call(null,inst_28167);var state_28228__$1 = (function (){var statearr_28252 = state_28228;(statearr_28252[10] = inst_28181__$1);
return statearr_28252;
})();if(inst_28181__$1)
{var statearr_28253_28294 = state_28228__$1;(statearr_28253_28294[1] = 13);
} else
{var statearr_28254_28295 = state_28228__$1;(statearr_28254_28295[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 9))
{var inst_28203 = (state_28228[2]);var state_28228__$1 = state_28228;var statearr_28255_28296 = state_28228__$1;(statearr_28255_28296[2] = inst_28203);
(statearr_28255_28296[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 5))
{var inst_28164 = cljs.core.deref.call(null,mults);var inst_28165 = cljs.core.vals.call(null,inst_28164);var inst_28166 = cljs.core.seq.call(null,inst_28165);var inst_28167 = inst_28166;var inst_28168 = null;var inst_28169 = 0;var inst_28170 = 0;var state_28228__$1 = (function (){var statearr_28256 = state_28228;(statearr_28256[12] = inst_28170);
(statearr_28256[13] = inst_28167);
(statearr_28256[14] = inst_28169);
(statearr_28256[15] = inst_28168);
return statearr_28256;
})();var statearr_28257_28297 = state_28228__$1;(statearr_28257_28297[2] = null);
(statearr_28257_28297[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 14))
{var state_28228__$1 = state_28228;var statearr_28261_28298 = state_28228__$1;(statearr_28261_28298[2] = null);
(statearr_28261_28298[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 16))
{var inst_28181 = (state_28228[10]);var inst_28185 = cljs.core.chunk_first.call(null,inst_28181);var inst_28186 = cljs.core.chunk_rest.call(null,inst_28181);var inst_28187 = cljs.core.count.call(null,inst_28185);var inst_28167 = inst_28186;var inst_28168 = inst_28185;var inst_28169 = inst_28187;var inst_28170 = 0;var state_28228__$1 = (function (){var statearr_28262 = state_28228;(statearr_28262[12] = inst_28170);
(statearr_28262[13] = inst_28167);
(statearr_28262[14] = inst_28169);
(statearr_28262[15] = inst_28168);
return statearr_28262;
})();var statearr_28263_28299 = state_28228__$1;(statearr_28263_28299[2] = null);
(statearr_28263_28299[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 10))
{var inst_28170 = (state_28228[12]);var inst_28167 = (state_28228[13]);var inst_28169 = (state_28228[14]);var inst_28168 = (state_28228[15]);var inst_28175 = cljs.core._nth.call(null,inst_28168,inst_28170);var inst_28176 = cljs.core.async.muxch_STAR_.call(null,inst_28175);var inst_28177 = cljs.core.async.close_BANG_.call(null,inst_28176);var inst_28178 = (inst_28170 + 1);var tmp28258 = inst_28167;var tmp28259 = inst_28169;var tmp28260 = inst_28168;var inst_28167__$1 = tmp28258;var inst_28168__$1 = tmp28260;var inst_28169__$1 = tmp28259;var inst_28170__$1 = inst_28178;var state_28228__$1 = (function (){var statearr_28264 = state_28228;(statearr_28264[12] = inst_28170__$1);
(statearr_28264[13] = inst_28167__$1);
(statearr_28264[14] = inst_28169__$1);
(statearr_28264[18] = inst_28177);
(statearr_28264[15] = inst_28168__$1);
return statearr_28264;
})();var statearr_28265_28300 = state_28228__$1;(statearr_28265_28300[2] = null);
(statearr_28265_28300[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 18))
{var inst_28196 = (state_28228[2]);var state_28228__$1 = state_28228;var statearr_28266_28301 = state_28228__$1;(statearr_28266_28301[2] = inst_28196);
(statearr_28266_28301[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28229 === 8))
{var inst_28170 = (state_28228[12]);var inst_28169 = (state_28228[14]);var inst_28172 = (inst_28170 < inst_28169);var inst_28173 = inst_28172;var state_28228__$1 = state_28228;if(cljs.core.truth_(inst_28173))
{var statearr_28267_28302 = state_28228__$1;(statearr_28267_28302[1] = 10);
} else
{var statearr_28268_28303 = state_28228__$1;(statearr_28268_28303[1] = 11);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_28272 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28272[0] = state_machine__22127__auto__);
(statearr_28272[1] = 1);
return statearr_28272;
});
var state_machine__22127__auto____1 = (function (state_28228){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_28228);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e28273){if((e28273 instanceof Object))
{var ex__22130__auto__ = e28273;var statearr_28274_28304 = state_28228;(statearr_28274_28304[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28228);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28273;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28305 = state_28228;
state_28228 = G__28305;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_28228){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_28228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_28275 = f__22202__auto__.call(null);(statearr_28275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___28276);
return statearr_28275;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
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
,cljs.core.range.call(null,cnt));var c__22201__auto___28442 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_28412){var state_val_28413 = (state_28412[1]);if((state_val_28413 === 7))
{var state_28412__$1 = state_28412;var statearr_28414_28443 = state_28412__$1;(statearr_28414_28443[2] = null);
(statearr_28414_28443[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28413 === 1))
{var state_28412__$1 = state_28412;var statearr_28415_28444 = state_28412__$1;(statearr_28415_28444[2] = null);
(statearr_28415_28444[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28413 === 4))
{var inst_28376 = (state_28412[7]);var inst_28378 = (inst_28376 < cnt);var state_28412__$1 = state_28412;if(cljs.core.truth_(inst_28378))
{var statearr_28416_28445 = state_28412__$1;(statearr_28416_28445[1] = 6);
} else
{var statearr_28417_28446 = state_28412__$1;(statearr_28417_28446[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28413 === 15))
{var inst_28408 = (state_28412[2]);var state_28412__$1 = state_28412;var statearr_28418_28447 = state_28412__$1;(statearr_28418_28447[2] = inst_28408);
(statearr_28418_28447[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28413 === 13))
{var inst_28401 = cljs.core.async.close_BANG_.call(null,out);var state_28412__$1 = state_28412;var statearr_28419_28448 = state_28412__$1;(statearr_28419_28448[2] = inst_28401);
(statearr_28419_28448[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28413 === 6))
{var state_28412__$1 = state_28412;var statearr_28420_28449 = state_28412__$1;(statearr_28420_28449[2] = null);
(statearr_28420_28449[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28413 === 3))
{var inst_28410 = (state_28412[2]);var state_28412__$1 = state_28412;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28412__$1,inst_28410);
} else
{if((state_val_28413 === 12))
{var inst_28398 = (state_28412[8]);var inst_28398__$1 = (state_28412[2]);var inst_28399 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28398__$1);var state_28412__$1 = (function (){var statearr_28421 = state_28412;(statearr_28421[8] = inst_28398__$1);
return statearr_28421;
})();if(cljs.core.truth_(inst_28399))
{var statearr_28422_28450 = state_28412__$1;(statearr_28422_28450[1] = 13);
} else
{var statearr_28423_28451 = state_28412__$1;(statearr_28423_28451[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28413 === 2))
{var inst_28375 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_28376 = 0;var state_28412__$1 = (function (){var statearr_28424 = state_28412;(statearr_28424[9] = inst_28375);
(statearr_28424[7] = inst_28376);
return statearr_28424;
})();var statearr_28425_28452 = state_28412__$1;(statearr_28425_28452[2] = null);
(statearr_28425_28452[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28413 === 11))
{var inst_28376 = (state_28412[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28412,10,Object,null,9);var inst_28385 = chs__$1.call(null,inst_28376);var inst_28386 = done.call(null,inst_28376);var inst_28387 = cljs.core.async.take_BANG_.call(null,inst_28385,inst_28386);var state_28412__$1 = state_28412;var statearr_28426_28453 = state_28412__$1;(statearr_28426_28453[2] = inst_28387);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28412__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28413 === 9))
{var inst_28376 = (state_28412[7]);var inst_28389 = (state_28412[2]);var inst_28390 = (inst_28376 + 1);var inst_28376__$1 = inst_28390;var state_28412__$1 = (function (){var statearr_28427 = state_28412;(statearr_28427[10] = inst_28389);
(statearr_28427[7] = inst_28376__$1);
return statearr_28427;
})();var statearr_28428_28454 = state_28412__$1;(statearr_28428_28454[2] = null);
(statearr_28428_28454[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28413 === 5))
{var inst_28396 = (state_28412[2]);var state_28412__$1 = (function (){var statearr_28429 = state_28412;(statearr_28429[11] = inst_28396);
return statearr_28429;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28412__$1,12,dchan);
} else
{if((state_val_28413 === 14))
{var inst_28398 = (state_28412[8]);var inst_28403 = cljs.core.apply.call(null,f,inst_28398);var state_28412__$1 = state_28412;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28412__$1,16,out,inst_28403);
} else
{if((state_val_28413 === 16))
{var inst_28405 = (state_28412[2]);var state_28412__$1 = (function (){var statearr_28430 = state_28412;(statearr_28430[12] = inst_28405);
return statearr_28430;
})();var statearr_28431_28455 = state_28412__$1;(statearr_28431_28455[2] = null);
(statearr_28431_28455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28413 === 10))
{var inst_28380 = (state_28412[2]);var inst_28381 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_28412__$1 = (function (){var statearr_28432 = state_28412;(statearr_28432[13] = inst_28380);
return statearr_28432;
})();var statearr_28433_28456 = state_28412__$1;(statearr_28433_28456[2] = inst_28381);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28412__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28413 === 8))
{var inst_28394 = (state_28412[2]);var state_28412__$1 = state_28412;var statearr_28434_28457 = state_28412__$1;(statearr_28434_28457[2] = inst_28394);
(statearr_28434_28457[1] = 5);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_28438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28438[0] = state_machine__22127__auto__);
(statearr_28438[1] = 1);
return statearr_28438;
});
var state_machine__22127__auto____1 = (function (state_28412){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_28412);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e28439){if((e28439 instanceof Object))
{var ex__22130__auto__ = e28439;var statearr_28440_28458 = state_28412;(statearr_28440_28458[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28412);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28459 = state_28412;
state_28412 = G__28459;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_28412){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_28412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_28441 = f__22202__auto__.call(null);(statearr_28441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___28442);
return statearr_28441;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___28567 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_28543){var state_val_28544 = (state_28543[1]);if((state_val_28544 === 7))
{var inst_28522 = (state_28543[7]);var inst_28523 = (state_28543[8]);var inst_28522__$1 = (state_28543[2]);var inst_28523__$1 = cljs.core.nth.call(null,inst_28522__$1,0,null);var inst_28524 = cljs.core.nth.call(null,inst_28522__$1,1,null);var inst_28525 = (inst_28523__$1 == null);var state_28543__$1 = (function (){var statearr_28545 = state_28543;(statearr_28545[7] = inst_28522__$1);
(statearr_28545[9] = inst_28524);
(statearr_28545[8] = inst_28523__$1);
return statearr_28545;
})();if(cljs.core.truth_(inst_28525))
{var statearr_28546_28568 = state_28543__$1;(statearr_28546_28568[1] = 8);
} else
{var statearr_28547_28569 = state_28543__$1;(statearr_28547_28569[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28544 === 1))
{var inst_28514 = cljs.core.vec.call(null,chs);var inst_28515 = inst_28514;var state_28543__$1 = (function (){var statearr_28548 = state_28543;(statearr_28548[10] = inst_28515);
return statearr_28548;
})();var statearr_28549_28570 = state_28543__$1;(statearr_28549_28570[2] = null);
(statearr_28549_28570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28544 === 4))
{var inst_28515 = (state_28543[10]);var state_28543__$1 = state_28543;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28543__$1,7,inst_28515);
} else
{if((state_val_28544 === 6))
{var inst_28539 = (state_28543[2]);var state_28543__$1 = state_28543;var statearr_28550_28571 = state_28543__$1;(statearr_28550_28571[2] = inst_28539);
(statearr_28550_28571[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28544 === 3))
{var inst_28541 = (state_28543[2]);var state_28543__$1 = state_28543;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28543__$1,inst_28541);
} else
{if((state_val_28544 === 2))
{var inst_28515 = (state_28543[10]);var inst_28517 = cljs.core.count.call(null,inst_28515);var inst_28518 = (inst_28517 > 0);var state_28543__$1 = state_28543;if(cljs.core.truth_(inst_28518))
{var statearr_28552_28572 = state_28543__$1;(statearr_28552_28572[1] = 4);
} else
{var statearr_28553_28573 = state_28543__$1;(statearr_28553_28573[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28544 === 11))
{var inst_28515 = (state_28543[10]);var inst_28532 = (state_28543[2]);var tmp28551 = inst_28515;var inst_28515__$1 = tmp28551;var state_28543__$1 = (function (){var statearr_28554 = state_28543;(statearr_28554[11] = inst_28532);
(statearr_28554[10] = inst_28515__$1);
return statearr_28554;
})();var statearr_28555_28574 = state_28543__$1;(statearr_28555_28574[2] = null);
(statearr_28555_28574[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28544 === 9))
{var inst_28523 = (state_28543[8]);var state_28543__$1 = state_28543;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28543__$1,11,out,inst_28523);
} else
{if((state_val_28544 === 5))
{var inst_28537 = cljs.core.async.close_BANG_.call(null,out);var state_28543__$1 = state_28543;var statearr_28556_28575 = state_28543__$1;(statearr_28556_28575[2] = inst_28537);
(statearr_28556_28575[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28544 === 10))
{var inst_28535 = (state_28543[2]);var state_28543__$1 = state_28543;var statearr_28557_28576 = state_28543__$1;(statearr_28557_28576[2] = inst_28535);
(statearr_28557_28576[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28544 === 8))
{var inst_28522 = (state_28543[7]);var inst_28515 = (state_28543[10]);var inst_28524 = (state_28543[9]);var inst_28523 = (state_28543[8]);var inst_28527 = (function (){var c = inst_28524;var v = inst_28523;var vec__28520 = inst_28522;var cs = inst_28515;return ((function (c,v,vec__28520,cs,inst_28522,inst_28515,inst_28524,inst_28523,state_val_28544){
return (function (p1__28460_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__28460_SHARP_);
});
;})(c,v,vec__28520,cs,inst_28522,inst_28515,inst_28524,inst_28523,state_val_28544))
})();var inst_28528 = cljs.core.filterv.call(null,inst_28527,inst_28515);var inst_28515__$1 = inst_28528;var state_28543__$1 = (function (){var statearr_28558 = state_28543;(statearr_28558[10] = inst_28515__$1);
return statearr_28558;
})();var statearr_28559_28577 = state_28543__$1;(statearr_28559_28577[2] = null);
(statearr_28559_28577[1] = 2);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_28563 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28563[0] = state_machine__22127__auto__);
(statearr_28563[1] = 1);
return statearr_28563;
});
var state_machine__22127__auto____1 = (function (state_28543){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_28543);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e28564){if((e28564 instanceof Object))
{var ex__22130__auto__ = e28564;var statearr_28565_28578 = state_28543;(statearr_28565_28578[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28543);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28579 = state_28543;
state_28543 = G__28579;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_28543){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_28543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_28566 = f__22202__auto__.call(null);(statearr_28566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___28567);
return statearr_28566;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___28672 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_28649){var state_val_28650 = (state_28649[1]);if((state_val_28650 === 7))
{var inst_28631 = (state_28649[7]);var inst_28631__$1 = (state_28649[2]);var inst_28632 = (inst_28631__$1 == null);var inst_28633 = cljs.core.not.call(null,inst_28632);var state_28649__$1 = (function (){var statearr_28651 = state_28649;(statearr_28651[7] = inst_28631__$1);
return statearr_28651;
})();if(inst_28633)
{var statearr_28652_28673 = state_28649__$1;(statearr_28652_28673[1] = 8);
} else
{var statearr_28653_28674 = state_28649__$1;(statearr_28653_28674[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28650 === 1))
{var inst_28626 = 0;var state_28649__$1 = (function (){var statearr_28654 = state_28649;(statearr_28654[8] = inst_28626);
return statearr_28654;
})();var statearr_28655_28675 = state_28649__$1;(statearr_28655_28675[2] = null);
(statearr_28655_28675[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28650 === 4))
{var state_28649__$1 = state_28649;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28649__$1,7,ch);
} else
{if((state_val_28650 === 6))
{var inst_28644 = (state_28649[2]);var state_28649__$1 = state_28649;var statearr_28656_28676 = state_28649__$1;(statearr_28656_28676[2] = inst_28644);
(statearr_28656_28676[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28650 === 3))
{var inst_28646 = (state_28649[2]);var inst_28647 = cljs.core.async.close_BANG_.call(null,out);var state_28649__$1 = (function (){var statearr_28657 = state_28649;(statearr_28657[9] = inst_28646);
return statearr_28657;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28649__$1,inst_28647);
} else
{if((state_val_28650 === 2))
{var inst_28626 = (state_28649[8]);var inst_28628 = (inst_28626 < n);var state_28649__$1 = state_28649;if(cljs.core.truth_(inst_28628))
{var statearr_28658_28677 = state_28649__$1;(statearr_28658_28677[1] = 4);
} else
{var statearr_28659_28678 = state_28649__$1;(statearr_28659_28678[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28650 === 11))
{var inst_28626 = (state_28649[8]);var inst_28636 = (state_28649[2]);var inst_28637 = (inst_28626 + 1);var inst_28626__$1 = inst_28637;var state_28649__$1 = (function (){var statearr_28660 = state_28649;(statearr_28660[10] = inst_28636);
(statearr_28660[8] = inst_28626__$1);
return statearr_28660;
})();var statearr_28661_28679 = state_28649__$1;(statearr_28661_28679[2] = null);
(statearr_28661_28679[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28650 === 9))
{var state_28649__$1 = state_28649;var statearr_28662_28680 = state_28649__$1;(statearr_28662_28680[2] = null);
(statearr_28662_28680[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28650 === 5))
{var state_28649__$1 = state_28649;var statearr_28663_28681 = state_28649__$1;(statearr_28663_28681[2] = null);
(statearr_28663_28681[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28650 === 10))
{var inst_28641 = (state_28649[2]);var state_28649__$1 = state_28649;var statearr_28664_28682 = state_28649__$1;(statearr_28664_28682[2] = inst_28641);
(statearr_28664_28682[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28650 === 8))
{var inst_28631 = (state_28649[7]);var state_28649__$1 = state_28649;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28649__$1,11,out,inst_28631);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_28668 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28668[0] = state_machine__22127__auto__);
(statearr_28668[1] = 1);
return statearr_28668;
});
var state_machine__22127__auto____1 = (function (state_28649){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_28649);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e28669){if((e28669 instanceof Object))
{var ex__22130__auto__ = e28669;var statearr_28670_28683 = state_28649;(statearr_28670_28683[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28649);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28669;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28684 = state_28649;
state_28649 = G__28684;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_28649){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_28649);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_28671 = f__22202__auto__.call(null);(statearr_28671[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___28672);
return statearr_28671;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___28781 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_28756){var state_val_28757 = (state_28756[1]);if((state_val_28757 === 7))
{var inst_28751 = (state_28756[2]);var state_28756__$1 = state_28756;var statearr_28758_28782 = state_28756__$1;(statearr_28758_28782[2] = inst_28751);
(statearr_28758_28782[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28757 === 1))
{var inst_28733 = null;var state_28756__$1 = (function (){var statearr_28759 = state_28756;(statearr_28759[7] = inst_28733);
return statearr_28759;
})();var statearr_28760_28783 = state_28756__$1;(statearr_28760_28783[2] = null);
(statearr_28760_28783[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28757 === 4))
{var inst_28736 = (state_28756[8]);var inst_28736__$1 = (state_28756[2]);var inst_28737 = (inst_28736__$1 == null);var inst_28738 = cljs.core.not.call(null,inst_28737);var state_28756__$1 = (function (){var statearr_28761 = state_28756;(statearr_28761[8] = inst_28736__$1);
return statearr_28761;
})();if(inst_28738)
{var statearr_28762_28784 = state_28756__$1;(statearr_28762_28784[1] = 5);
} else
{var statearr_28763_28785 = state_28756__$1;(statearr_28763_28785[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28757 === 6))
{var state_28756__$1 = state_28756;var statearr_28764_28786 = state_28756__$1;(statearr_28764_28786[2] = null);
(statearr_28764_28786[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28757 === 3))
{var inst_28753 = (state_28756[2]);var inst_28754 = cljs.core.async.close_BANG_.call(null,out);var state_28756__$1 = (function (){var statearr_28765 = state_28756;(statearr_28765[9] = inst_28753);
return statearr_28765;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28756__$1,inst_28754);
} else
{if((state_val_28757 === 2))
{var state_28756__$1 = state_28756;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28756__$1,4,ch);
} else
{if((state_val_28757 === 11))
{var inst_28736 = (state_28756[8]);var inst_28745 = (state_28756[2]);var inst_28733 = inst_28736;var state_28756__$1 = (function (){var statearr_28766 = state_28756;(statearr_28766[7] = inst_28733);
(statearr_28766[10] = inst_28745);
return statearr_28766;
})();var statearr_28767_28787 = state_28756__$1;(statearr_28767_28787[2] = null);
(statearr_28767_28787[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28757 === 9))
{var inst_28736 = (state_28756[8]);var state_28756__$1 = state_28756;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28756__$1,11,out,inst_28736);
} else
{if((state_val_28757 === 5))
{var inst_28733 = (state_28756[7]);var inst_28736 = (state_28756[8]);var inst_28740 = cljs.core._EQ_.call(null,inst_28736,inst_28733);var state_28756__$1 = state_28756;if(inst_28740)
{var statearr_28769_28788 = state_28756__$1;(statearr_28769_28788[1] = 8);
} else
{var statearr_28770_28789 = state_28756__$1;(statearr_28770_28789[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28757 === 10))
{var inst_28748 = (state_28756[2]);var state_28756__$1 = state_28756;var statearr_28771_28790 = state_28756__$1;(statearr_28771_28790[2] = inst_28748);
(statearr_28771_28790[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28757 === 8))
{var inst_28733 = (state_28756[7]);var tmp28768 = inst_28733;var inst_28733__$1 = tmp28768;var state_28756__$1 = (function (){var statearr_28772 = state_28756;(statearr_28772[7] = inst_28733__$1);
return statearr_28772;
})();var statearr_28773_28791 = state_28756__$1;(statearr_28773_28791[2] = null);
(statearr_28773_28791[1] = 2);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_28777 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28777[0] = state_machine__22127__auto__);
(statearr_28777[1] = 1);
return statearr_28777;
});
var state_machine__22127__auto____1 = (function (state_28756){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_28756);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e28778){if((e28778 instanceof Object))
{var ex__22130__auto__ = e28778;var statearr_28779_28792 = state_28756;(statearr_28779_28792[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28756);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28778;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28793 = state_28756;
state_28756 = G__28793;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_28756){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_28756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_28780 = f__22202__auto__.call(null);(statearr_28780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___28781);
return statearr_28780;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___28928 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_28898){var state_val_28899 = (state_28898[1]);if((state_val_28899 === 7))
{var inst_28894 = (state_28898[2]);var state_28898__$1 = state_28898;var statearr_28900_28929 = state_28898__$1;(statearr_28900_28929[2] = inst_28894);
(statearr_28900_28929[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28899 === 1))
{var inst_28861 = (new Array(n));var inst_28862 = inst_28861;var inst_28863 = 0;var state_28898__$1 = (function (){var statearr_28901 = state_28898;(statearr_28901[7] = inst_28863);
(statearr_28901[8] = inst_28862);
return statearr_28901;
})();var statearr_28902_28930 = state_28898__$1;(statearr_28902_28930[2] = null);
(statearr_28902_28930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28899 === 4))
{var inst_28866 = (state_28898[9]);var inst_28866__$1 = (state_28898[2]);var inst_28867 = (inst_28866__$1 == null);var inst_28868 = cljs.core.not.call(null,inst_28867);var state_28898__$1 = (function (){var statearr_28903 = state_28898;(statearr_28903[9] = inst_28866__$1);
return statearr_28903;
})();if(inst_28868)
{var statearr_28904_28931 = state_28898__$1;(statearr_28904_28931[1] = 5);
} else
{var statearr_28905_28932 = state_28898__$1;(statearr_28905_28932[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28899 === 15))
{var inst_28888 = (state_28898[2]);var state_28898__$1 = state_28898;var statearr_28906_28933 = state_28898__$1;(statearr_28906_28933[2] = inst_28888);
(statearr_28906_28933[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28899 === 13))
{var state_28898__$1 = state_28898;var statearr_28907_28934 = state_28898__$1;(statearr_28907_28934[2] = null);
(statearr_28907_28934[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28899 === 6))
{var inst_28863 = (state_28898[7]);var inst_28884 = (inst_28863 > 0);var state_28898__$1 = state_28898;if(cljs.core.truth_(inst_28884))
{var statearr_28908_28935 = state_28898__$1;(statearr_28908_28935[1] = 12);
} else
{var statearr_28909_28936 = state_28898__$1;(statearr_28909_28936[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28899 === 3))
{var inst_28896 = (state_28898[2]);var state_28898__$1 = state_28898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28898__$1,inst_28896);
} else
{if((state_val_28899 === 12))
{var inst_28862 = (state_28898[8]);var inst_28886 = cljs.core.vec.call(null,inst_28862);var state_28898__$1 = state_28898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28898__$1,15,out,inst_28886);
} else
{if((state_val_28899 === 2))
{var state_28898__$1 = state_28898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28898__$1,4,ch);
} else
{if((state_val_28899 === 11))
{var inst_28878 = (state_28898[2]);var inst_28879 = (new Array(n));var inst_28862 = inst_28879;var inst_28863 = 0;var state_28898__$1 = (function (){var statearr_28910 = state_28898;(statearr_28910[7] = inst_28863);
(statearr_28910[8] = inst_28862);
(statearr_28910[10] = inst_28878);
return statearr_28910;
})();var statearr_28911_28937 = state_28898__$1;(statearr_28911_28937[2] = null);
(statearr_28911_28937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28899 === 9))
{var inst_28862 = (state_28898[8]);var inst_28876 = cljs.core.vec.call(null,inst_28862);var state_28898__$1 = state_28898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28898__$1,11,out,inst_28876);
} else
{if((state_val_28899 === 5))
{var inst_28863 = (state_28898[7]);var inst_28862 = (state_28898[8]);var inst_28871 = (state_28898[11]);var inst_28866 = (state_28898[9]);var inst_28870 = (inst_28862[inst_28863] = inst_28866);var inst_28871__$1 = (inst_28863 + 1);var inst_28872 = (inst_28871__$1 < n);var state_28898__$1 = (function (){var statearr_28912 = state_28898;(statearr_28912[12] = inst_28870);
(statearr_28912[11] = inst_28871__$1);
return statearr_28912;
})();if(cljs.core.truth_(inst_28872))
{var statearr_28913_28938 = state_28898__$1;(statearr_28913_28938[1] = 8);
} else
{var statearr_28914_28939 = state_28898__$1;(statearr_28914_28939[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28899 === 14))
{var inst_28891 = (state_28898[2]);var inst_28892 = cljs.core.async.close_BANG_.call(null,out);var state_28898__$1 = (function (){var statearr_28916 = state_28898;(statearr_28916[13] = inst_28891);
return statearr_28916;
})();var statearr_28917_28940 = state_28898__$1;(statearr_28917_28940[2] = inst_28892);
(statearr_28917_28940[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28899 === 10))
{var inst_28882 = (state_28898[2]);var state_28898__$1 = state_28898;var statearr_28918_28941 = state_28898__$1;(statearr_28918_28941[2] = inst_28882);
(statearr_28918_28941[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28899 === 8))
{var inst_28862 = (state_28898[8]);var inst_28871 = (state_28898[11]);var tmp28915 = inst_28862;var inst_28862__$1 = tmp28915;var inst_28863 = inst_28871;var state_28898__$1 = (function (){var statearr_28919 = state_28898;(statearr_28919[7] = inst_28863);
(statearr_28919[8] = inst_28862__$1);
return statearr_28919;
})();var statearr_28920_28942 = state_28898__$1;(statearr_28920_28942[2] = null);
(statearr_28920_28942[1] = 2);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_28924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28924[0] = state_machine__22127__auto__);
(statearr_28924[1] = 1);
return statearr_28924;
});
var state_machine__22127__auto____1 = (function (state_28898){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_28898);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e28925){if((e28925 instanceof Object))
{var ex__22130__auto__ = e28925;var statearr_28926_28943 = state_28898;(statearr_28926_28943[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28944 = state_28898;
state_28898 = G__28944;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_28898){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_28898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_28927 = f__22202__auto__.call(null);(statearr_28927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___28928);
return statearr_28927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___29087 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_29057){var state_val_29058 = (state_29057[1]);if((state_val_29058 === 7))
{var inst_29053 = (state_29057[2]);var state_29057__$1 = state_29057;var statearr_29059_29088 = state_29057__$1;(statearr_29059_29088[2] = inst_29053);
(statearr_29059_29088[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 1))
{var inst_29016 = [];var inst_29017 = inst_29016;var inst_29018 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_29057__$1 = (function (){var statearr_29060 = state_29057;(statearr_29060[7] = inst_29018);
(statearr_29060[8] = inst_29017);
return statearr_29060;
})();var statearr_29061_29089 = state_29057__$1;(statearr_29061_29089[2] = null);
(statearr_29061_29089[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 4))
{var inst_29021 = (state_29057[9]);var inst_29021__$1 = (state_29057[2]);var inst_29022 = (inst_29021__$1 == null);var inst_29023 = cljs.core.not.call(null,inst_29022);var state_29057__$1 = (function (){var statearr_29062 = state_29057;(statearr_29062[9] = inst_29021__$1);
return statearr_29062;
})();if(inst_29023)
{var statearr_29063_29090 = state_29057__$1;(statearr_29063_29090[1] = 5);
} else
{var statearr_29064_29091 = state_29057__$1;(statearr_29064_29091[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 15))
{var inst_29047 = (state_29057[2]);var state_29057__$1 = state_29057;var statearr_29065_29092 = state_29057__$1;(statearr_29065_29092[2] = inst_29047);
(statearr_29065_29092[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 13))
{var state_29057__$1 = state_29057;var statearr_29066_29093 = state_29057__$1;(statearr_29066_29093[2] = null);
(statearr_29066_29093[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 6))
{var inst_29017 = (state_29057[8]);var inst_29042 = inst_29017.length;var inst_29043 = (inst_29042 > 0);var state_29057__$1 = state_29057;if(cljs.core.truth_(inst_29043))
{var statearr_29067_29094 = state_29057__$1;(statearr_29067_29094[1] = 12);
} else
{var statearr_29068_29095 = state_29057__$1;(statearr_29068_29095[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 3))
{var inst_29055 = (state_29057[2]);var state_29057__$1 = state_29057;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29057__$1,inst_29055);
} else
{if((state_val_29058 === 12))
{var inst_29017 = (state_29057[8]);var inst_29045 = cljs.core.vec.call(null,inst_29017);var state_29057__$1 = state_29057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29057__$1,15,out,inst_29045);
} else
{if((state_val_29058 === 2))
{var state_29057__$1 = state_29057;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29057__$1,4,ch);
} else
{if((state_val_29058 === 11))
{var inst_29021 = (state_29057[9]);var inst_29025 = (state_29057[10]);var inst_29035 = (state_29057[2]);var inst_29036 = [];var inst_29037 = inst_29036.push(inst_29021);var inst_29017 = inst_29036;var inst_29018 = inst_29025;var state_29057__$1 = (function (){var statearr_29069 = state_29057;(statearr_29069[7] = inst_29018);
(statearr_29069[11] = inst_29037);
(statearr_29069[12] = inst_29035);
(statearr_29069[8] = inst_29017);
return statearr_29069;
})();var statearr_29070_29096 = state_29057__$1;(statearr_29070_29096[2] = null);
(statearr_29070_29096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 9))
{var inst_29017 = (state_29057[8]);var inst_29033 = cljs.core.vec.call(null,inst_29017);var state_29057__$1 = state_29057;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29057__$1,11,out,inst_29033);
} else
{if((state_val_29058 === 5))
{var inst_29018 = (state_29057[7]);var inst_29021 = (state_29057[9]);var inst_29025 = (state_29057[10]);var inst_29025__$1 = f.call(null,inst_29021);var inst_29026 = cljs.core._EQ_.call(null,inst_29025__$1,inst_29018);var inst_29027 = cljs.core.keyword_identical_QMARK_.call(null,inst_29018,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_29028 = (inst_29026) || (inst_29027);var state_29057__$1 = (function (){var statearr_29071 = state_29057;(statearr_29071[10] = inst_29025__$1);
return statearr_29071;
})();if(cljs.core.truth_(inst_29028))
{var statearr_29072_29097 = state_29057__$1;(statearr_29072_29097[1] = 8);
} else
{var statearr_29073_29098 = state_29057__$1;(statearr_29073_29098[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 14))
{var inst_29050 = (state_29057[2]);var inst_29051 = cljs.core.async.close_BANG_.call(null,out);var state_29057__$1 = (function (){var statearr_29075 = state_29057;(statearr_29075[13] = inst_29050);
return statearr_29075;
})();var statearr_29076_29099 = state_29057__$1;(statearr_29076_29099[2] = inst_29051);
(statearr_29076_29099[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 10))
{var inst_29040 = (state_29057[2]);var state_29057__$1 = state_29057;var statearr_29077_29100 = state_29057__$1;(statearr_29077_29100[2] = inst_29040);
(statearr_29077_29100[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29058 === 8))
{var inst_29021 = (state_29057[9]);var inst_29025 = (state_29057[10]);var inst_29017 = (state_29057[8]);var inst_29030 = inst_29017.push(inst_29021);var tmp29074 = inst_29017;var inst_29017__$1 = tmp29074;var inst_29018 = inst_29025;var state_29057__$1 = (function (){var statearr_29078 = state_29057;(statearr_29078[7] = inst_29018);
(statearr_29078[14] = inst_29030);
(statearr_29078[8] = inst_29017__$1);
return statearr_29078;
})();var statearr_29079_29101 = state_29057__$1;(statearr_29079_29101[2] = null);
(statearr_29079_29101[1] = 2);
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
});return ((function (switch__22126__auto__){
return (function() {
var state_machine__22127__auto__ = null;
var state_machine__22127__auto____0 = (function (){var statearr_29083 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29083[0] = state_machine__22127__auto__);
(statearr_29083[1] = 1);
return statearr_29083;
});
var state_machine__22127__auto____1 = (function (state_29057){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_29057);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e29084){if((e29084 instanceof Object))
{var ex__22130__auto__ = e29084;var statearr_29085_29102 = state_29057;(statearr_29085_29102[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29057);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29103 = state_29057;
state_29057 = G__29103;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_29057){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_29057);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_29086 = f__22202__auto__.call(null);(statearr_29086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___29087);
return statearr_29086;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22203__auto__);
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

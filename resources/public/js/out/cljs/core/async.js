// Compiled by ClojureScript 0.0-2156
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t85090 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t85090 = (function (f,fn_handler,meta85091){
this.f = f;
this.fn_handler = fn_handler;
this.meta85091 = meta85091;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t85090.cljs$lang$type = true;
cljs.core.async.t85090.cljs$lang$ctorStr = "cljs.core.async/t85090";
cljs.core.async.t85090.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t85090");
});
cljs.core.async.t85090.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t85090.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t85090.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t85090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85092){var self__ = this;
var _85092__$1 = this;return self__.meta85091;
});
cljs.core.async.t85090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85092,meta85091__$1){var self__ = this;
var _85092__$1 = this;return (new cljs.core.async.t85090(self__.f,self__.fn_handler,meta85091__$1));
});
cljs.core.async.__GT_t85090 = (function __GT_t85090(f__$1,fn_handler__$1,meta85091){return (new cljs.core.async.t85090(f__$1,fn_handler__$1,meta85091));
});
}
return (new cljs.core.async.t85090(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__85094 = buff;if(G__85094)
{var bit__4053__auto__ = null;if(cljs.core.truth_((function (){var or__3403__auto__ = bit__4053__auto__;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return G__85094.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__85094.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__85094);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__85094);
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
{var val_85095 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_85095);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_85095);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3391__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4251__auto___85096 = n;var x_85097 = 0;while(true){
if((x_85097 < n__4251__auto___85096))
{(a[x_85097] = 0);
{
var G__85098 = (x_85097 + 1);
x_85097 = G__85098;
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
var G__85099 = (i + 1);
i = G__85099;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t85103 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t85103 = (function (flag,alt_flag,meta85104){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta85104 = meta85104;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t85103.cljs$lang$type = true;
cljs.core.async.t85103.cljs$lang$ctorStr = "cljs.core.async/t85103";
cljs.core.async.t85103.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t85103");
});
cljs.core.async.t85103.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t85103.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t85103.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t85103.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85105){var self__ = this;
var _85105__$1 = this;return self__.meta85104;
});
cljs.core.async.t85103.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85105,meta85104__$1){var self__ = this;
var _85105__$1 = this;return (new cljs.core.async.t85103(self__.flag,self__.alt_flag,meta85104__$1));
});
cljs.core.async.__GT_t85103 = (function __GT_t85103(flag__$1,alt_flag__$1,meta85104){return (new cljs.core.async.t85103(flag__$1,alt_flag__$1,meta85104));
});
}
return (new cljs.core.async.t85103(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t85109 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t85109 = (function (cb,flag,alt_handler,meta85110){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta85110 = meta85110;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t85109.cljs$lang$type = true;
cljs.core.async.t85109.cljs$lang$ctorStr = "cljs.core.async/t85109";
cljs.core.async.t85109.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t85109");
});
cljs.core.async.t85109.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t85109.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t85109.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t85109.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85111){var self__ = this;
var _85111__$1 = this;return self__.meta85110;
});
cljs.core.async.t85109.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85111,meta85110__$1){var self__ = this;
var _85111__$1 = this;return (new cljs.core.async.t85109(self__.cb,self__.flag,self__.alt_handler,meta85110__$1));
});
cljs.core.async.__GT_t85109 = (function __GT_t85109(cb__$1,flag__$1,alt_handler__$1,meta85110){return (new cljs.core.async.t85109(cb__$1,flag__$1,alt_handler__$1,meta85110));
});
}
return (new cljs.core.async.t85109(cb,flag,alt_handler,null));
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
return (function (p1__85112_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__85112_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3403__auto__ = wport;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__85113 = (i + 1);
i = G__85113;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3403__auto__ = ret;if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3391__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3391__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3391__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__85114){var map__85116 = p__85114;var map__85116__$1 = ((cljs.core.seq_QMARK_.call(null,map__85116))?cljs.core.apply.call(null,cljs.core.hash_map,map__85116):map__85116);var opts = map__85116__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__85114 = null;if (arguments.length > 1) {
  p__85114 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__85114);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__85117){
var ports = cljs.core.first(arglist__85117);
var p__85114 = cljs.core.rest(arglist__85117);
return alts_BANG___delegate(ports,p__85114);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t85125 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t85125 = (function (ch,f,map_LT_,meta85126){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta85126 = meta85126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t85125.cljs$lang$type = true;
cljs.core.async.t85125.cljs$lang$ctorStr = "cljs.core.async/t85125";
cljs.core.async.t85125.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t85125");
});
cljs.core.async.t85125.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t85125.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t85125.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t85125.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t85128 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t85128 = (function (fn1,_,meta85126,ch,f,map_LT_,meta85129){
this.fn1 = fn1;
this._ = _;
this.meta85126 = meta85126;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta85129 = meta85129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t85128.cljs$lang$type = true;
cljs.core.async.t85128.cljs$lang$ctorStr = "cljs.core.async/t85128";
cljs.core.async.t85128.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t85128");
});
cljs.core.async.t85128.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t85128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t85128.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t85128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__85118_SHARP_){return f1.call(null,(((p1__85118_SHARP_ == null))?null:self__.f.call(null,p1__85118_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t85128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85130){var self__ = this;
var _85130__$1 = this;return self__.meta85129;
});
cljs.core.async.t85128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85130,meta85129__$1){var self__ = this;
var _85130__$1 = this;return (new cljs.core.async.t85128(self__.fn1,self__._,self__.meta85126,self__.ch,self__.f,self__.map_LT_,meta85129__$1));
});
cljs.core.async.__GT_t85128 = (function __GT_t85128(fn1__$1,___$2,meta85126__$1,ch__$2,f__$2,map_LT___$2,meta85129){return (new cljs.core.async.t85128(fn1__$1,___$2,meta85126__$1,ch__$2,f__$2,map_LT___$2,meta85129));
});
}
return (new cljs.core.async.t85128(fn1,___$1,self__.meta85126,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3391__auto__ = ret;if(cljs.core.truth_(and__3391__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3391__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t85125.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t85125.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t85125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85127){var self__ = this;
var _85127__$1 = this;return self__.meta85126;
});
cljs.core.async.t85125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85127,meta85126__$1){var self__ = this;
var _85127__$1 = this;return (new cljs.core.async.t85125(self__.ch,self__.f,self__.map_LT_,meta85126__$1));
});
cljs.core.async.__GT_t85125 = (function __GT_t85125(ch__$1,f__$1,map_LT___$1,meta85126){return (new cljs.core.async.t85125(ch__$1,f__$1,map_LT___$1,meta85126));
});
}
return (new cljs.core.async.t85125(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t85134 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t85134 = (function (ch,f,map_GT_,meta85135){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta85135 = meta85135;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t85134.cljs$lang$type = true;
cljs.core.async.t85134.cljs$lang$ctorStr = "cljs.core.async/t85134";
cljs.core.async.t85134.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t85134");
});
cljs.core.async.t85134.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t85134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t85134.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t85134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t85134.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t85134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t85134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85136){var self__ = this;
var _85136__$1 = this;return self__.meta85135;
});
cljs.core.async.t85134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85136,meta85135__$1){var self__ = this;
var _85136__$1 = this;return (new cljs.core.async.t85134(self__.ch,self__.f,self__.map_GT_,meta85135__$1));
});
cljs.core.async.__GT_t85134 = (function __GT_t85134(ch__$1,f__$1,map_GT___$1,meta85135){return (new cljs.core.async.t85134(ch__$1,f__$1,map_GT___$1,meta85135));
});
}
return (new cljs.core.async.t85134(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t85140 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t85140 = (function (ch,p,filter_GT_,meta85141){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta85141 = meta85141;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t85140.cljs$lang$type = true;
cljs.core.async.t85140.cljs$lang$ctorStr = "cljs.core.async/t85140";
cljs.core.async.t85140.cljs$lang$ctorPrWriter = (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t85140");
});
cljs.core.async.t85140.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t85140.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t85140.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t85140.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t85140.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t85140.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t85140.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85142){var self__ = this;
var _85142__$1 = this;return self__.meta85141;
});
cljs.core.async.t85140.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85142,meta85141__$1){var self__ = this;
var _85142__$1 = this;return (new cljs.core.async.t85140(self__.ch,self__.p,self__.filter_GT_,meta85141__$1));
});
cljs.core.async.__GT_t85140 = (function __GT_t85140(ch__$1,p__$1,filter_GT___$1,meta85141){return (new cljs.core.async.t85140(ch__$1,p__$1,filter_GT___$1,meta85141));
});
}
return (new cljs.core.async.t85140(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___85225 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_85204){var state_val_85205 = (state_85204[1]);if((state_val_85205 === 1))
{var state_85204__$1 = state_85204;var statearr_85206_85226 = state_85204__$1;(statearr_85206_85226[2] = null);
(statearr_85206_85226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85205 === 2))
{var state_85204__$1 = state_85204;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85204__$1,4,ch);
} else
{if((state_val_85205 === 3))
{var inst_85202 = (state_85204[2]);var state_85204__$1 = state_85204;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85204__$1,inst_85202);
} else
{if((state_val_85205 === 4))
{var inst_85186 = (state_85204[7]);var inst_85186__$1 = (state_85204[2]);var inst_85187 = (inst_85186__$1 == null);var state_85204__$1 = (function (){var statearr_85207 = state_85204;(statearr_85207[7] = inst_85186__$1);
return statearr_85207;
})();if(cljs.core.truth_(inst_85187))
{var statearr_85208_85227 = state_85204__$1;(statearr_85208_85227[1] = 5);
} else
{var statearr_85209_85228 = state_85204__$1;(statearr_85209_85228[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85205 === 5))
{var inst_85189 = cljs.core.async.close_BANG_.call(null,out);var state_85204__$1 = state_85204;var statearr_85210_85229 = state_85204__$1;(statearr_85210_85229[2] = inst_85189);
(statearr_85210_85229[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85205 === 6))
{var inst_85186 = (state_85204[7]);var inst_85191 = p.call(null,inst_85186);var state_85204__$1 = state_85204;if(cljs.core.truth_(inst_85191))
{var statearr_85211_85230 = state_85204__$1;(statearr_85211_85230[1] = 8);
} else
{var statearr_85212_85231 = state_85204__$1;(statearr_85212_85231[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85205 === 7))
{var inst_85200 = (state_85204[2]);var state_85204__$1 = state_85204;var statearr_85213_85232 = state_85204__$1;(statearr_85213_85232[2] = inst_85200);
(statearr_85213_85232[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85205 === 8))
{var inst_85186 = (state_85204[7]);var state_85204__$1 = state_85204;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85204__$1,11,out,inst_85186);
} else
{if((state_val_85205 === 9))
{var state_85204__$1 = state_85204;var statearr_85214_85233 = state_85204__$1;(statearr_85214_85233[2] = null);
(statearr_85214_85233[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85205 === 10))
{var inst_85197 = (state_85204[2]);var state_85204__$1 = (function (){var statearr_85215 = state_85204;(statearr_85215[8] = inst_85197);
return statearr_85215;
})();var statearr_85216_85234 = state_85204__$1;(statearr_85216_85234[2] = null);
(statearr_85216_85234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85205 === 11))
{var inst_85194 = (state_85204[2]);var state_85204__$1 = state_85204;var statearr_85217_85235 = state_85204__$1;(statearr_85217_85235[2] = inst_85194);
(statearr_85217_85235[1] = 10);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_85221 = [null,null,null,null,null,null,null,null,null];(statearr_85221[0] = state_machine__5510__auto__);
(statearr_85221[1] = 1);
return statearr_85221;
});
var state_machine__5510__auto____1 = (function (state_85204){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_85204);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e85222){if((e85222 instanceof Object))
{var ex__5513__auto__ = e85222;var statearr_85223_85236 = state_85204;(statearr_85223_85236[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85204);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e85222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__85237 = state_85204;
state_85204 = G__85237;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_85204){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_85204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_85224 = f__5525__auto__.call(null);(statearr_85224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___85225);
return statearr_85224;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_85389){var state_val_85390 = (state_85389[1]);if((state_val_85390 === 1))
{var state_85389__$1 = state_85389;var statearr_85391_85428 = state_85389__$1;(statearr_85391_85428[2] = null);
(statearr_85391_85428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 2))
{var state_85389__$1 = state_85389;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85389__$1,4,in$);
} else
{if((state_val_85390 === 3))
{var inst_85387 = (state_85389[2]);var state_85389__$1 = state_85389;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85389__$1,inst_85387);
} else
{if((state_val_85390 === 4))
{var inst_85335 = (state_85389[7]);var inst_85335__$1 = (state_85389[2]);var inst_85336 = (inst_85335__$1 == null);var state_85389__$1 = (function (){var statearr_85392 = state_85389;(statearr_85392[7] = inst_85335__$1);
return statearr_85392;
})();if(cljs.core.truth_(inst_85336))
{var statearr_85393_85429 = state_85389__$1;(statearr_85393_85429[1] = 5);
} else
{var statearr_85394_85430 = state_85389__$1;(statearr_85394_85430[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 5))
{var inst_85338 = cljs.core.async.close_BANG_.call(null,out);var state_85389__$1 = state_85389;var statearr_85395_85431 = state_85389__$1;(statearr_85395_85431[2] = inst_85338);
(statearr_85395_85431[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 6))
{var inst_85335 = (state_85389[7]);var inst_85340 = f.call(null,inst_85335);var inst_85345 = cljs.core.seq.call(null,inst_85340);var inst_85346 = inst_85345;var inst_85347 = null;var inst_85348 = 0;var inst_85349 = 0;var state_85389__$1 = (function (){var statearr_85396 = state_85389;(statearr_85396[8] = inst_85348);
(statearr_85396[9] = inst_85347);
(statearr_85396[10] = inst_85349);
(statearr_85396[11] = inst_85346);
return statearr_85396;
})();var statearr_85397_85432 = state_85389__$1;(statearr_85397_85432[2] = null);
(statearr_85397_85432[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 7))
{var inst_85385 = (state_85389[2]);var state_85389__$1 = state_85389;var statearr_85398_85433 = state_85389__$1;(statearr_85398_85433[2] = inst_85385);
(statearr_85398_85433[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 8))
{var inst_85348 = (state_85389[8]);var inst_85349 = (state_85389[10]);var inst_85351 = (inst_85349 < inst_85348);var inst_85352 = inst_85351;var state_85389__$1 = state_85389;if(cljs.core.truth_(inst_85352))
{var statearr_85399_85434 = state_85389__$1;(statearr_85399_85434[1] = 10);
} else
{var statearr_85400_85435 = state_85389__$1;(statearr_85400_85435[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 9))
{var inst_85382 = (state_85389[2]);var state_85389__$1 = (function (){var statearr_85401 = state_85389;(statearr_85401[12] = inst_85382);
return statearr_85401;
})();var statearr_85402_85436 = state_85389__$1;(statearr_85402_85436[2] = null);
(statearr_85402_85436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 10))
{var inst_85347 = (state_85389[9]);var inst_85349 = (state_85389[10]);var inst_85354 = cljs.core._nth.call(null,inst_85347,inst_85349);var state_85389__$1 = state_85389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85389__$1,13,out,inst_85354);
} else
{if((state_val_85390 === 11))
{var inst_85360 = (state_85389[13]);var inst_85346 = (state_85389[11]);var inst_85360__$1 = cljs.core.seq.call(null,inst_85346);var state_85389__$1 = (function (){var statearr_85406 = state_85389;(statearr_85406[13] = inst_85360__$1);
return statearr_85406;
})();if(inst_85360__$1)
{var statearr_85407_85437 = state_85389__$1;(statearr_85407_85437[1] = 14);
} else
{var statearr_85408_85438 = state_85389__$1;(statearr_85408_85438[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 12))
{var inst_85380 = (state_85389[2]);var state_85389__$1 = state_85389;var statearr_85409_85439 = state_85389__$1;(statearr_85409_85439[2] = inst_85380);
(statearr_85409_85439[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 13))
{var inst_85348 = (state_85389[8]);var inst_85347 = (state_85389[9]);var inst_85349 = (state_85389[10]);var inst_85346 = (state_85389[11]);var inst_85356 = (state_85389[2]);var inst_85357 = (inst_85349 + 1);var tmp85403 = inst_85348;var tmp85404 = inst_85347;var tmp85405 = inst_85346;var inst_85346__$1 = tmp85405;var inst_85347__$1 = tmp85404;var inst_85348__$1 = tmp85403;var inst_85349__$1 = inst_85357;var state_85389__$1 = (function (){var statearr_85410 = state_85389;(statearr_85410[8] = inst_85348__$1);
(statearr_85410[9] = inst_85347__$1);
(statearr_85410[10] = inst_85349__$1);
(statearr_85410[14] = inst_85356);
(statearr_85410[11] = inst_85346__$1);
return statearr_85410;
})();var statearr_85411_85440 = state_85389__$1;(statearr_85411_85440[2] = null);
(statearr_85411_85440[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 14))
{var inst_85360 = (state_85389[13]);var inst_85362 = cljs.core.chunked_seq_QMARK_.call(null,inst_85360);var state_85389__$1 = state_85389;if(inst_85362)
{var statearr_85412_85441 = state_85389__$1;(statearr_85412_85441[1] = 17);
} else
{var statearr_85413_85442 = state_85389__$1;(statearr_85413_85442[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 15))
{var state_85389__$1 = state_85389;var statearr_85414_85443 = state_85389__$1;(statearr_85414_85443[2] = null);
(statearr_85414_85443[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 16))
{var inst_85378 = (state_85389[2]);var state_85389__$1 = state_85389;var statearr_85415_85444 = state_85389__$1;(statearr_85415_85444[2] = inst_85378);
(statearr_85415_85444[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 17))
{var inst_85360 = (state_85389[13]);var inst_85364 = cljs.core.chunk_first.call(null,inst_85360);var inst_85365 = cljs.core.chunk_rest.call(null,inst_85360);var inst_85366 = cljs.core.count.call(null,inst_85364);var inst_85346 = inst_85365;var inst_85347 = inst_85364;var inst_85348 = inst_85366;var inst_85349 = 0;var state_85389__$1 = (function (){var statearr_85416 = state_85389;(statearr_85416[8] = inst_85348);
(statearr_85416[9] = inst_85347);
(statearr_85416[10] = inst_85349);
(statearr_85416[11] = inst_85346);
return statearr_85416;
})();var statearr_85417_85445 = state_85389__$1;(statearr_85417_85445[2] = null);
(statearr_85417_85445[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 18))
{var inst_85360 = (state_85389[13]);var inst_85369 = cljs.core.first.call(null,inst_85360);var state_85389__$1 = state_85389;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85389__$1,20,out,inst_85369);
} else
{if((state_val_85390 === 19))
{var inst_85375 = (state_85389[2]);var state_85389__$1 = state_85389;var statearr_85418_85446 = state_85389__$1;(statearr_85418_85446[2] = inst_85375);
(statearr_85418_85446[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85390 === 20))
{var inst_85360 = (state_85389[13]);var inst_85371 = (state_85389[2]);var inst_85372 = cljs.core.next.call(null,inst_85360);var inst_85346 = inst_85372;var inst_85347 = null;var inst_85348 = 0;var inst_85349 = 0;var state_85389__$1 = (function (){var statearr_85419 = state_85389;(statearr_85419[8] = inst_85348);
(statearr_85419[15] = inst_85371);
(statearr_85419[9] = inst_85347);
(statearr_85419[10] = inst_85349);
(statearr_85419[11] = inst_85346);
return statearr_85419;
})();var statearr_85420_85447 = state_85389__$1;(statearr_85420_85447[2] = null);
(statearr_85420_85447[1] = 8);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_85424 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_85424[0] = state_machine__5510__auto__);
(statearr_85424[1] = 1);
return statearr_85424;
});
var state_machine__5510__auto____1 = (function (state_85389){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_85389);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e85425){if((e85425 instanceof Object))
{var ex__5513__auto__ = e85425;var statearr_85426_85448 = state_85389;(statearr_85426_85448[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85389);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e85425;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__85449 = state_85389;
state_85389 = G__85449;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_85389){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_85389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_85427 = f__5525__auto__.call(null);(statearr_85427[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_85427;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5524__auto___85530 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_85509){var state_val_85510 = (state_85509[1]);if((state_val_85510 === 1))
{var state_85509__$1 = state_85509;var statearr_85511_85531 = state_85509__$1;(statearr_85511_85531[2] = null);
(statearr_85511_85531[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85510 === 2))
{var state_85509__$1 = state_85509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85509__$1,4,from);
} else
{if((state_val_85510 === 3))
{var inst_85507 = (state_85509[2]);var state_85509__$1 = state_85509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85509__$1,inst_85507);
} else
{if((state_val_85510 === 4))
{var inst_85492 = (state_85509[7]);var inst_85492__$1 = (state_85509[2]);var inst_85493 = (inst_85492__$1 == null);var state_85509__$1 = (function (){var statearr_85512 = state_85509;(statearr_85512[7] = inst_85492__$1);
return statearr_85512;
})();if(cljs.core.truth_(inst_85493))
{var statearr_85513_85532 = state_85509__$1;(statearr_85513_85532[1] = 5);
} else
{var statearr_85514_85533 = state_85509__$1;(statearr_85514_85533[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85510 === 5))
{var state_85509__$1 = state_85509;if(cljs.core.truth_(close_QMARK_))
{var statearr_85515_85534 = state_85509__$1;(statearr_85515_85534[1] = 8);
} else
{var statearr_85516_85535 = state_85509__$1;(statearr_85516_85535[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85510 === 6))
{var inst_85492 = (state_85509[7]);var state_85509__$1 = state_85509;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85509__$1,11,to,inst_85492);
} else
{if((state_val_85510 === 7))
{var inst_85505 = (state_85509[2]);var state_85509__$1 = state_85509;var statearr_85517_85536 = state_85509__$1;(statearr_85517_85536[2] = inst_85505);
(statearr_85517_85536[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85510 === 8))
{var inst_85496 = cljs.core.async.close_BANG_.call(null,to);var state_85509__$1 = state_85509;var statearr_85518_85537 = state_85509__$1;(statearr_85518_85537[2] = inst_85496);
(statearr_85518_85537[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85510 === 9))
{var state_85509__$1 = state_85509;var statearr_85519_85538 = state_85509__$1;(statearr_85519_85538[2] = null);
(statearr_85519_85538[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85510 === 10))
{var inst_85499 = (state_85509[2]);var state_85509__$1 = state_85509;var statearr_85520_85539 = state_85509__$1;(statearr_85520_85539[2] = inst_85499);
(statearr_85520_85539[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85510 === 11))
{var inst_85502 = (state_85509[2]);var state_85509__$1 = (function (){var statearr_85521 = state_85509;(statearr_85521[8] = inst_85502);
return statearr_85521;
})();var statearr_85522_85540 = state_85509__$1;(statearr_85522_85540[2] = null);
(statearr_85522_85540[1] = 2);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_85526 = [null,null,null,null,null,null,null,null,null];(statearr_85526[0] = state_machine__5510__auto__);
(statearr_85526[1] = 1);
return statearr_85526;
});
var state_machine__5510__auto____1 = (function (state_85509){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_85509);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e85527){if((e85527 instanceof Object))
{var ex__5513__auto__ = e85527;var statearr_85528_85541 = state_85509;(statearr_85528_85541[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85509);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e85527;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__85542 = state_85509;
state_85509 = G__85542;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_85509){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_85509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_85529 = f__5525__auto__.call(null);(statearr_85529[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___85530);
return statearr_85529;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5524__auto___85629 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_85607){var state_val_85608 = (state_85607[1]);if((state_val_85608 === 1))
{var state_85607__$1 = state_85607;var statearr_85609_85630 = state_85607__$1;(statearr_85609_85630[2] = null);
(statearr_85609_85630[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85608 === 2))
{var state_85607__$1 = state_85607;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85607__$1,4,ch);
} else
{if((state_val_85608 === 3))
{var inst_85605 = (state_85607[2]);var state_85607__$1 = state_85607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85607__$1,inst_85605);
} else
{if((state_val_85608 === 4))
{var inst_85588 = (state_85607[7]);var inst_85588__$1 = (state_85607[2]);var inst_85589 = (inst_85588__$1 == null);var state_85607__$1 = (function (){var statearr_85610 = state_85607;(statearr_85610[7] = inst_85588__$1);
return statearr_85610;
})();if(cljs.core.truth_(inst_85589))
{var statearr_85611_85631 = state_85607__$1;(statearr_85611_85631[1] = 5);
} else
{var statearr_85612_85632 = state_85607__$1;(statearr_85612_85632[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85608 === 5))
{var inst_85591 = cljs.core.async.close_BANG_.call(null,tc);var inst_85592 = cljs.core.async.close_BANG_.call(null,fc);var state_85607__$1 = (function (){var statearr_85613 = state_85607;(statearr_85613[8] = inst_85591);
return statearr_85613;
})();var statearr_85614_85633 = state_85607__$1;(statearr_85614_85633[2] = inst_85592);
(statearr_85614_85633[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85608 === 6))
{var inst_85588 = (state_85607[7]);var inst_85594 = p.call(null,inst_85588);var state_85607__$1 = state_85607;if(cljs.core.truth_(inst_85594))
{var statearr_85615_85634 = state_85607__$1;(statearr_85615_85634[1] = 9);
} else
{var statearr_85616_85635 = state_85607__$1;(statearr_85616_85635[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85608 === 7))
{var inst_85603 = (state_85607[2]);var state_85607__$1 = state_85607;var statearr_85617_85636 = state_85607__$1;(statearr_85617_85636[2] = inst_85603);
(statearr_85617_85636[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85608 === 8))
{var inst_85600 = (state_85607[2]);var state_85607__$1 = (function (){var statearr_85618 = state_85607;(statearr_85618[9] = inst_85600);
return statearr_85618;
})();var statearr_85619_85637 = state_85607__$1;(statearr_85619_85637[2] = null);
(statearr_85619_85637[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85608 === 9))
{var state_85607__$1 = state_85607;var statearr_85620_85638 = state_85607__$1;(statearr_85620_85638[2] = tc);
(statearr_85620_85638[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85608 === 10))
{var state_85607__$1 = state_85607;var statearr_85621_85639 = state_85607__$1;(statearr_85621_85639[2] = fc);
(statearr_85621_85639[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85608 === 11))
{var inst_85588 = (state_85607[7]);var inst_85598 = (state_85607[2]);var state_85607__$1 = state_85607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85607__$1,8,inst_85598,inst_85588);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_85625 = [null,null,null,null,null,null,null,null,null,null];(statearr_85625[0] = state_machine__5510__auto__);
(statearr_85625[1] = 1);
return statearr_85625;
});
var state_machine__5510__auto____1 = (function (state_85607){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_85607);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e85626){if((e85626 instanceof Object))
{var ex__5513__auto__ = e85626;var statearr_85627_85640 = state_85607;(statearr_85627_85640[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85607);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e85626;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__85641 = state_85607;
state_85607 = G__85641;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_85607){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_85607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_85628 = f__5525__auto__.call(null);(statearr_85628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___85629);
return statearr_85628;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_85688){var state_val_85689 = (state_85688[1]);if((state_val_85689 === 7))
{var inst_85684 = (state_85688[2]);var state_85688__$1 = state_85688;var statearr_85690_85706 = state_85688__$1;(statearr_85690_85706[2] = inst_85684);
(statearr_85690_85706[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85689 === 6))
{var inst_85677 = (state_85688[7]);var inst_85674 = (state_85688[8]);var inst_85681 = f.call(null,inst_85674,inst_85677);var inst_85674__$1 = inst_85681;var state_85688__$1 = (function (){var statearr_85691 = state_85688;(statearr_85691[8] = inst_85674__$1);
return statearr_85691;
})();var statearr_85692_85707 = state_85688__$1;(statearr_85692_85707[2] = null);
(statearr_85692_85707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85689 === 5))
{var inst_85674 = (state_85688[8]);var state_85688__$1 = state_85688;var statearr_85693_85708 = state_85688__$1;(statearr_85693_85708[2] = inst_85674);
(statearr_85693_85708[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85689 === 4))
{var inst_85677 = (state_85688[7]);var inst_85677__$1 = (state_85688[2]);var inst_85678 = (inst_85677__$1 == null);var state_85688__$1 = (function (){var statearr_85694 = state_85688;(statearr_85694[7] = inst_85677__$1);
return statearr_85694;
})();if(cljs.core.truth_(inst_85678))
{var statearr_85695_85709 = state_85688__$1;(statearr_85695_85709[1] = 5);
} else
{var statearr_85696_85710 = state_85688__$1;(statearr_85696_85710[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85689 === 3))
{var inst_85686 = (state_85688[2]);var state_85688__$1 = state_85688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85688__$1,inst_85686);
} else
{if((state_val_85689 === 2))
{var state_85688__$1 = state_85688;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_85688__$1,4,ch);
} else
{if((state_val_85689 === 1))
{var inst_85674 = init;var state_85688__$1 = (function (){var statearr_85697 = state_85688;(statearr_85697[8] = inst_85674);
return statearr_85697;
})();var statearr_85698_85711 = state_85688__$1;(statearr_85698_85711[2] = null);
(statearr_85698_85711[1] = 2);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_85702 = [null,null,null,null,null,null,null,null,null];(statearr_85702[0] = state_machine__5510__auto__);
(statearr_85702[1] = 1);
return statearr_85702;
});
var state_machine__5510__auto____1 = (function (state_85688){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_85688);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e85703){if((e85703 instanceof Object))
{var ex__5513__auto__ = e85703;var statearr_85704_85712 = state_85688;(statearr_85704_85712[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85688);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e85703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__85713 = state_85688;
state_85688 = G__85713;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_85688){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_85688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_85705 = f__5525__auto__.call(null);(statearr_85705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_85705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5524__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_85775){var state_val_85776 = (state_85775[1]);if((state_val_85776 === 1))
{var inst_85755 = cljs.core.seq.call(null,coll);var inst_85756 = inst_85755;var state_85775__$1 = (function (){var statearr_85777 = state_85775;(statearr_85777[7] = inst_85756);
return statearr_85777;
})();var statearr_85778_85796 = state_85775__$1;(statearr_85778_85796[2] = null);
(statearr_85778_85796[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85776 === 2))
{var inst_85756 = (state_85775[7]);var state_85775__$1 = state_85775;if(cljs.core.truth_(inst_85756))
{var statearr_85779_85797 = state_85775__$1;(statearr_85779_85797[1] = 4);
} else
{var statearr_85780_85798 = state_85775__$1;(statearr_85780_85798[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85776 === 3))
{var inst_85773 = (state_85775[2]);var state_85775__$1 = state_85775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_85775__$1,inst_85773);
} else
{if((state_val_85776 === 4))
{var inst_85756 = (state_85775[7]);var inst_85759 = cljs.core.first.call(null,inst_85756);var state_85775__$1 = state_85775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_85775__$1,7,ch,inst_85759);
} else
{if((state_val_85776 === 5))
{var state_85775__$1 = state_85775;if(cljs.core.truth_(close_QMARK_))
{var statearr_85781_85799 = state_85775__$1;(statearr_85781_85799[1] = 8);
} else
{var statearr_85782_85800 = state_85775__$1;(statearr_85782_85800[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85776 === 6))
{var inst_85771 = (state_85775[2]);var state_85775__$1 = state_85775;var statearr_85783_85801 = state_85775__$1;(statearr_85783_85801[2] = inst_85771);
(statearr_85783_85801[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85776 === 7))
{var inst_85756 = (state_85775[7]);var inst_85761 = (state_85775[2]);var inst_85762 = cljs.core.next.call(null,inst_85756);var inst_85756__$1 = inst_85762;var state_85775__$1 = (function (){var statearr_85784 = state_85775;(statearr_85784[7] = inst_85756__$1);
(statearr_85784[8] = inst_85761);
return statearr_85784;
})();var statearr_85785_85802 = state_85775__$1;(statearr_85785_85802[2] = null);
(statearr_85785_85802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85776 === 8))
{var inst_85766 = cljs.core.async.close_BANG_.call(null,ch);var state_85775__$1 = state_85775;var statearr_85786_85803 = state_85775__$1;(statearr_85786_85803[2] = inst_85766);
(statearr_85786_85803[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85776 === 9))
{var state_85775__$1 = state_85775;var statearr_85787_85804 = state_85775__$1;(statearr_85787_85804[2] = null);
(statearr_85787_85804[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_85776 === 10))
{var inst_85769 = (state_85775[2]);var state_85775__$1 = state_85775;var statearr_85788_85805 = state_85775__$1;(statearr_85788_85805[2] = inst_85769);
(statearr_85788_85805[1] = 6);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_85792 = [null,null,null,null,null,null,null,null,null];(statearr_85792[0] = state_machine__5510__auto__);
(statearr_85792[1] = 1);
return statearr_85792;
});
var state_machine__5510__auto____1 = (function (state_85775){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_85775);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e85793){if((e85793 instanceof Object))
{var ex__5513__auto__ = e85793;var statearr_85794_85806 = state_85775;(statearr_85794_85806[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_85775);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e85793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__85807 = state_85775;
state_85775 = G__85807;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_85775){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_85775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_85795 = f__5525__auto__.call(null);(statearr_85795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto__);
return statearr_85795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
}));
return c__5524__auto__;
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
cljs.core.async.Mux = (function (){var obj85809 = {};return obj85809;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3391__auto__ = _;if(and__3391__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4030__auto__ = (((_ == null))?null:_);return (function (){var or__3403__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj85811 = {};return obj85811;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t86035 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t86035 = (function (cs,ch,mult,meta86036){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta86036 = meta86036;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t86035.cljs$lang$type = true;
cljs.core.async.t86035.cljs$lang$ctorStr = "cljs.core.async/t86035";
cljs.core.async.t86035.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t86035");
});})(cs))
;
cljs.core.async.t86035.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t86035.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t86035.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t86035.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t86035.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t86035.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t86035.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_86037){var self__ = this;
var _86037__$1 = this;return self__.meta86036;
});})(cs))
;
cljs.core.async.t86035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_86037,meta86036__$1){var self__ = this;
var _86037__$1 = this;return (new cljs.core.async.t86035(self__.cs,self__.ch,self__.mult,meta86036__$1));
});})(cs))
;
cljs.core.async.__GT_t86035 = ((function (cs){
return (function __GT_t86035(cs__$1,ch__$1,mult__$1,meta86036){return (new cljs.core.async.t86035(cs__$1,ch__$1,mult__$1,meta86036));
});})(cs))
;
}
return (new cljs.core.async.t86035(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5524__auto___86258 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_86172){var state_val_86173 = (state_86172[1]);if((state_val_86173 === 32))
{var inst_86040 = (state_86172[7]);var inst_86116 = (state_86172[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_86172,31,Object,null,30);var inst_86123 = cljs.core.async.put_BANG_.call(null,inst_86116,inst_86040,done);var state_86172__$1 = state_86172;var statearr_86174_86259 = state_86172__$1;(statearr_86174_86259[2] = inst_86123);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86172__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 1))
{var state_86172__$1 = state_86172;var statearr_86175_86260 = state_86172__$1;(statearr_86175_86260[2] = null);
(statearr_86175_86260[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 33))
{var inst_86129 = (state_86172[9]);var inst_86131 = cljs.core.chunked_seq_QMARK_.call(null,inst_86129);var state_86172__$1 = state_86172;if(inst_86131)
{var statearr_86176_86261 = state_86172__$1;(statearr_86176_86261[1] = 36);
} else
{var statearr_86177_86262 = state_86172__$1;(statearr_86177_86262[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 2))
{var state_86172__$1 = state_86172;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86172__$1,4,ch);
} else
{if((state_val_86173 === 34))
{var state_86172__$1 = state_86172;var statearr_86178_86263 = state_86172__$1;(statearr_86178_86263[2] = null);
(statearr_86178_86263[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 3))
{var inst_86170 = (state_86172[2]);var state_86172__$1 = state_86172;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86172__$1,inst_86170);
} else
{if((state_val_86173 === 35))
{var inst_86154 = (state_86172[2]);var state_86172__$1 = state_86172;var statearr_86179_86264 = state_86172__$1;(statearr_86179_86264[2] = inst_86154);
(statearr_86179_86264[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 4))
{var inst_86040 = (state_86172[7]);var inst_86040__$1 = (state_86172[2]);var inst_86041 = (inst_86040__$1 == null);var state_86172__$1 = (function (){var statearr_86180 = state_86172;(statearr_86180[7] = inst_86040__$1);
return statearr_86180;
})();if(cljs.core.truth_(inst_86041))
{var statearr_86181_86265 = state_86172__$1;(statearr_86181_86265[1] = 5);
} else
{var statearr_86182_86266 = state_86172__$1;(statearr_86182_86266[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 36))
{var inst_86129 = (state_86172[9]);var inst_86133 = cljs.core.chunk_first.call(null,inst_86129);var inst_86134 = cljs.core.chunk_rest.call(null,inst_86129);var inst_86135 = cljs.core.count.call(null,inst_86133);var inst_86108 = inst_86134;var inst_86109 = inst_86133;var inst_86110 = inst_86135;var inst_86111 = 0;var state_86172__$1 = (function (){var statearr_86183 = state_86172;(statearr_86183[10] = inst_86111);
(statearr_86183[11] = inst_86110);
(statearr_86183[12] = inst_86109);
(statearr_86183[13] = inst_86108);
return statearr_86183;
})();var statearr_86184_86267 = state_86172__$1;(statearr_86184_86267[2] = null);
(statearr_86184_86267[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 5))
{var inst_86047 = cljs.core.deref.call(null,cs);var inst_86048 = cljs.core.seq.call(null,inst_86047);var inst_86049 = inst_86048;var inst_86050 = null;var inst_86051 = 0;var inst_86052 = 0;var state_86172__$1 = (function (){var statearr_86185 = state_86172;(statearr_86185[14] = inst_86049);
(statearr_86185[15] = inst_86052);
(statearr_86185[16] = inst_86050);
(statearr_86185[17] = inst_86051);
return statearr_86185;
})();var statearr_86186_86268 = state_86172__$1;(statearr_86186_86268[2] = null);
(statearr_86186_86268[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 37))
{var inst_86129 = (state_86172[9]);var inst_86138 = cljs.core.first.call(null,inst_86129);var state_86172__$1 = (function (){var statearr_86187 = state_86172;(statearr_86187[18] = inst_86138);
return statearr_86187;
})();var statearr_86188_86269 = state_86172__$1;(statearr_86188_86269[2] = null);
(statearr_86188_86269[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 6))
{var inst_86100 = (state_86172[19]);var inst_86099 = cljs.core.deref.call(null,cs);var inst_86100__$1 = cljs.core.keys.call(null,inst_86099);var inst_86101 = cljs.core.count.call(null,inst_86100__$1);var inst_86102 = cljs.core.reset_BANG_.call(null,dctr,inst_86101);var inst_86107 = cljs.core.seq.call(null,inst_86100__$1);var inst_86108 = inst_86107;var inst_86109 = null;var inst_86110 = 0;var inst_86111 = 0;var state_86172__$1 = (function (){var statearr_86189 = state_86172;(statearr_86189[20] = inst_86102);
(statearr_86189[10] = inst_86111);
(statearr_86189[11] = inst_86110);
(statearr_86189[19] = inst_86100__$1);
(statearr_86189[12] = inst_86109);
(statearr_86189[13] = inst_86108);
return statearr_86189;
})();var statearr_86190_86270 = state_86172__$1;(statearr_86190_86270[2] = null);
(statearr_86190_86270[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 38))
{var inst_86151 = (state_86172[2]);var state_86172__$1 = state_86172;var statearr_86191_86271 = state_86172__$1;(statearr_86191_86271[2] = inst_86151);
(statearr_86191_86271[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 7))
{var inst_86168 = (state_86172[2]);var state_86172__$1 = state_86172;var statearr_86192_86272 = state_86172__$1;(statearr_86192_86272[2] = inst_86168);
(statearr_86192_86272[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 39))
{var inst_86129 = (state_86172[9]);var inst_86147 = (state_86172[2]);var inst_86148 = cljs.core.next.call(null,inst_86129);var inst_86108 = inst_86148;var inst_86109 = null;var inst_86110 = 0;var inst_86111 = 0;var state_86172__$1 = (function (){var statearr_86193 = state_86172;(statearr_86193[21] = inst_86147);
(statearr_86193[10] = inst_86111);
(statearr_86193[11] = inst_86110);
(statearr_86193[12] = inst_86109);
(statearr_86193[13] = inst_86108);
return statearr_86193;
})();var statearr_86194_86273 = state_86172__$1;(statearr_86194_86273[2] = null);
(statearr_86194_86273[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 8))
{var inst_86052 = (state_86172[15]);var inst_86051 = (state_86172[17]);var inst_86054 = (inst_86052 < inst_86051);var inst_86055 = inst_86054;var state_86172__$1 = state_86172;if(cljs.core.truth_(inst_86055))
{var statearr_86195_86274 = state_86172__$1;(statearr_86195_86274[1] = 10);
} else
{var statearr_86196_86275 = state_86172__$1;(statearr_86196_86275[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 40))
{var inst_86138 = (state_86172[18]);var inst_86139 = (state_86172[2]);var inst_86140 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_86141 = cljs.core.async.untap_STAR_.call(null,m,inst_86138);var state_86172__$1 = (function (){var statearr_86197 = state_86172;(statearr_86197[22] = inst_86140);
(statearr_86197[23] = inst_86139);
return statearr_86197;
})();var statearr_86198_86276 = state_86172__$1;(statearr_86198_86276[2] = inst_86141);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86172__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 9))
{var inst_86097 = (state_86172[2]);var state_86172__$1 = state_86172;var statearr_86199_86277 = state_86172__$1;(statearr_86199_86277[2] = inst_86097);
(statearr_86199_86277[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 41))
{var inst_86138 = (state_86172[18]);var inst_86040 = (state_86172[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_86172,40,Object,null,39);var inst_86145 = cljs.core.async.put_BANG_.call(null,inst_86138,inst_86040,done);var state_86172__$1 = state_86172;var statearr_86200_86278 = state_86172__$1;(statearr_86200_86278[2] = inst_86145);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86172__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 10))
{var inst_86052 = (state_86172[15]);var inst_86050 = (state_86172[16]);var inst_86058 = cljs.core._nth.call(null,inst_86050,inst_86052);var inst_86059 = cljs.core.nth.call(null,inst_86058,0,null);var inst_86060 = cljs.core.nth.call(null,inst_86058,1,null);var state_86172__$1 = (function (){var statearr_86201 = state_86172;(statearr_86201[24] = inst_86059);
return statearr_86201;
})();if(cljs.core.truth_(inst_86060))
{var statearr_86202_86279 = state_86172__$1;(statearr_86202_86279[1] = 13);
} else
{var statearr_86203_86280 = state_86172__$1;(statearr_86203_86280[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 42))
{var state_86172__$1 = state_86172;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86172__$1,45,dchan);
} else
{if((state_val_86173 === 11))
{var inst_86069 = (state_86172[25]);var inst_86049 = (state_86172[14]);var inst_86069__$1 = cljs.core.seq.call(null,inst_86049);var state_86172__$1 = (function (){var statearr_86204 = state_86172;(statearr_86204[25] = inst_86069__$1);
return statearr_86204;
})();if(inst_86069__$1)
{var statearr_86205_86281 = state_86172__$1;(statearr_86205_86281[1] = 16);
} else
{var statearr_86206_86282 = state_86172__$1;(statearr_86206_86282[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 43))
{var state_86172__$1 = state_86172;var statearr_86207_86283 = state_86172__$1;(statearr_86207_86283[2] = null);
(statearr_86207_86283[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 12))
{var inst_86095 = (state_86172[2]);var state_86172__$1 = state_86172;var statearr_86208_86284 = state_86172__$1;(statearr_86208_86284[2] = inst_86095);
(statearr_86208_86284[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 44))
{var inst_86165 = (state_86172[2]);var state_86172__$1 = (function (){var statearr_86209 = state_86172;(statearr_86209[26] = inst_86165);
return statearr_86209;
})();var statearr_86210_86285 = state_86172__$1;(statearr_86210_86285[2] = null);
(statearr_86210_86285[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 13))
{var inst_86059 = (state_86172[24]);var inst_86062 = cljs.core.async.close_BANG_.call(null,inst_86059);var state_86172__$1 = state_86172;var statearr_86211_86286 = state_86172__$1;(statearr_86211_86286[2] = inst_86062);
(statearr_86211_86286[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 45))
{var inst_86162 = (state_86172[2]);var state_86172__$1 = state_86172;var statearr_86215_86287 = state_86172__$1;(statearr_86215_86287[2] = inst_86162);
(statearr_86215_86287[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 14))
{var state_86172__$1 = state_86172;var statearr_86216_86288 = state_86172__$1;(statearr_86216_86288[2] = null);
(statearr_86216_86288[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 15))
{var inst_86049 = (state_86172[14]);var inst_86052 = (state_86172[15]);var inst_86050 = (state_86172[16]);var inst_86051 = (state_86172[17]);var inst_86065 = (state_86172[2]);var inst_86066 = (inst_86052 + 1);var tmp86212 = inst_86049;var tmp86213 = inst_86050;var tmp86214 = inst_86051;var inst_86049__$1 = tmp86212;var inst_86050__$1 = tmp86213;var inst_86051__$1 = tmp86214;var inst_86052__$1 = inst_86066;var state_86172__$1 = (function (){var statearr_86217 = state_86172;(statearr_86217[27] = inst_86065);
(statearr_86217[14] = inst_86049__$1);
(statearr_86217[15] = inst_86052__$1);
(statearr_86217[16] = inst_86050__$1);
(statearr_86217[17] = inst_86051__$1);
return statearr_86217;
})();var statearr_86218_86289 = state_86172__$1;(statearr_86218_86289[2] = null);
(statearr_86218_86289[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 16))
{var inst_86069 = (state_86172[25]);var inst_86071 = cljs.core.chunked_seq_QMARK_.call(null,inst_86069);var state_86172__$1 = state_86172;if(inst_86071)
{var statearr_86219_86290 = state_86172__$1;(statearr_86219_86290[1] = 19);
} else
{var statearr_86220_86291 = state_86172__$1;(statearr_86220_86291[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 17))
{var state_86172__$1 = state_86172;var statearr_86221_86292 = state_86172__$1;(statearr_86221_86292[2] = null);
(statearr_86221_86292[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 18))
{var inst_86093 = (state_86172[2]);var state_86172__$1 = state_86172;var statearr_86222_86293 = state_86172__$1;(statearr_86222_86293[2] = inst_86093);
(statearr_86222_86293[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 19))
{var inst_86069 = (state_86172[25]);var inst_86073 = cljs.core.chunk_first.call(null,inst_86069);var inst_86074 = cljs.core.chunk_rest.call(null,inst_86069);var inst_86075 = cljs.core.count.call(null,inst_86073);var inst_86049 = inst_86074;var inst_86050 = inst_86073;var inst_86051 = inst_86075;var inst_86052 = 0;var state_86172__$1 = (function (){var statearr_86223 = state_86172;(statearr_86223[14] = inst_86049);
(statearr_86223[15] = inst_86052);
(statearr_86223[16] = inst_86050);
(statearr_86223[17] = inst_86051);
return statearr_86223;
})();var statearr_86224_86294 = state_86172__$1;(statearr_86224_86294[2] = null);
(statearr_86224_86294[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 20))
{var inst_86069 = (state_86172[25]);var inst_86079 = cljs.core.first.call(null,inst_86069);var inst_86080 = cljs.core.nth.call(null,inst_86079,0,null);var inst_86081 = cljs.core.nth.call(null,inst_86079,1,null);var state_86172__$1 = (function (){var statearr_86225 = state_86172;(statearr_86225[28] = inst_86080);
return statearr_86225;
})();if(cljs.core.truth_(inst_86081))
{var statearr_86226_86295 = state_86172__$1;(statearr_86226_86295[1] = 22);
} else
{var statearr_86227_86296 = state_86172__$1;(statearr_86227_86296[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 21))
{var inst_86090 = (state_86172[2]);var state_86172__$1 = state_86172;var statearr_86228_86297 = state_86172__$1;(statearr_86228_86297[2] = inst_86090);
(statearr_86228_86297[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 22))
{var inst_86080 = (state_86172[28]);var inst_86083 = cljs.core.async.close_BANG_.call(null,inst_86080);var state_86172__$1 = state_86172;var statearr_86229_86298 = state_86172__$1;(statearr_86229_86298[2] = inst_86083);
(statearr_86229_86298[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 23))
{var state_86172__$1 = state_86172;var statearr_86230_86299 = state_86172__$1;(statearr_86230_86299[2] = null);
(statearr_86230_86299[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 24))
{var inst_86069 = (state_86172[25]);var inst_86086 = (state_86172[2]);var inst_86087 = cljs.core.next.call(null,inst_86069);var inst_86049 = inst_86087;var inst_86050 = null;var inst_86051 = 0;var inst_86052 = 0;var state_86172__$1 = (function (){var statearr_86231 = state_86172;(statearr_86231[29] = inst_86086);
(statearr_86231[14] = inst_86049);
(statearr_86231[15] = inst_86052);
(statearr_86231[16] = inst_86050);
(statearr_86231[17] = inst_86051);
return statearr_86231;
})();var statearr_86232_86300 = state_86172__$1;(statearr_86232_86300[2] = null);
(statearr_86232_86300[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 25))
{var inst_86111 = (state_86172[10]);var inst_86110 = (state_86172[11]);var inst_86113 = (inst_86111 < inst_86110);var inst_86114 = inst_86113;var state_86172__$1 = state_86172;if(cljs.core.truth_(inst_86114))
{var statearr_86233_86301 = state_86172__$1;(statearr_86233_86301[1] = 27);
} else
{var statearr_86234_86302 = state_86172__$1;(statearr_86234_86302[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 26))
{var inst_86100 = (state_86172[19]);var inst_86158 = (state_86172[2]);var inst_86159 = cljs.core.seq.call(null,inst_86100);var state_86172__$1 = (function (){var statearr_86235 = state_86172;(statearr_86235[30] = inst_86158);
return statearr_86235;
})();if(inst_86159)
{var statearr_86236_86303 = state_86172__$1;(statearr_86236_86303[1] = 42);
} else
{var statearr_86237_86304 = state_86172__$1;(statearr_86237_86304[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 27))
{var inst_86111 = (state_86172[10]);var inst_86109 = (state_86172[12]);var inst_86116 = cljs.core._nth.call(null,inst_86109,inst_86111);var state_86172__$1 = (function (){var statearr_86238 = state_86172;(statearr_86238[8] = inst_86116);
return statearr_86238;
})();var statearr_86239_86305 = state_86172__$1;(statearr_86239_86305[2] = null);
(statearr_86239_86305[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 28))
{var inst_86129 = (state_86172[9]);var inst_86108 = (state_86172[13]);var inst_86129__$1 = cljs.core.seq.call(null,inst_86108);var state_86172__$1 = (function (){var statearr_86243 = state_86172;(statearr_86243[9] = inst_86129__$1);
return statearr_86243;
})();if(inst_86129__$1)
{var statearr_86244_86306 = state_86172__$1;(statearr_86244_86306[1] = 33);
} else
{var statearr_86245_86307 = state_86172__$1;(statearr_86245_86307[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 29))
{var inst_86156 = (state_86172[2]);var state_86172__$1 = state_86172;var statearr_86246_86308 = state_86172__$1;(statearr_86246_86308[2] = inst_86156);
(statearr_86246_86308[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 30))
{var inst_86111 = (state_86172[10]);var inst_86110 = (state_86172[11]);var inst_86109 = (state_86172[12]);var inst_86108 = (state_86172[13]);var inst_86125 = (state_86172[2]);var inst_86126 = (inst_86111 + 1);var tmp86240 = inst_86110;var tmp86241 = inst_86109;var tmp86242 = inst_86108;var inst_86108__$1 = tmp86242;var inst_86109__$1 = tmp86241;var inst_86110__$1 = tmp86240;var inst_86111__$1 = inst_86126;var state_86172__$1 = (function (){var statearr_86247 = state_86172;(statearr_86247[10] = inst_86111__$1);
(statearr_86247[11] = inst_86110__$1);
(statearr_86247[31] = inst_86125);
(statearr_86247[12] = inst_86109__$1);
(statearr_86247[13] = inst_86108__$1);
return statearr_86247;
})();var statearr_86248_86309 = state_86172__$1;(statearr_86248_86309[2] = null);
(statearr_86248_86309[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86173 === 31))
{var inst_86116 = (state_86172[8]);var inst_86117 = (state_86172[2]);var inst_86118 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_86119 = cljs.core.async.untap_STAR_.call(null,m,inst_86116);var state_86172__$1 = (function (){var statearr_86249 = state_86172;(statearr_86249[32] = inst_86118);
(statearr_86249[33] = inst_86117);
return statearr_86249;
})();var statearr_86250_86310 = state_86172__$1;(statearr_86250_86310[2] = inst_86119);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86172__$1);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_86254 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_86254[0] = state_machine__5510__auto__);
(statearr_86254[1] = 1);
return statearr_86254;
});
var state_machine__5510__auto____1 = (function (state_86172){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_86172);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e86255){if((e86255 instanceof Object))
{var ex__5513__auto__ = e86255;var statearr_86256_86311 = state_86172;(statearr_86256_86311[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86172);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e86255;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__86312 = state_86172;
state_86172 = G__86312;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_86172){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_86172);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_86257 = f__5525__auto__.call(null);(statearr_86257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___86258);
return statearr_86257;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
cljs.core.async.Mix = (function (){var obj86314 = {};return obj86314;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3391__auto__ = m;if(and__3391__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4030__auto__ = (((m == null))?null:m);return (function (){var or__3403__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t86424 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t86424 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta86425){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta86425 = meta86425;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t86424.cljs$lang$type = true;
cljs.core.async.t86424.cljs$lang$ctorStr = "cljs.core.async/t86424";
cljs.core.async.t86424.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t86424");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t86424.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t86424.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t86424.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t86424.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t86424.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t86424.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t86424.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t86424.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t86424.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_86426){var self__ = this;
var _86426__$1 = this;return self__.meta86425;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t86424.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_86426,meta86425__$1){var self__ = this;
var _86426__$1 = this;return (new cljs.core.async.t86424(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta86425__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t86424 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t86424(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta86425){return (new cljs.core.async.t86424(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta86425));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t86424(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5524__auto___86533 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_86491){var state_val_86492 = (state_86491[1]);if((state_val_86492 === 1))
{var inst_86430 = (state_86491[7]);var inst_86430__$1 = calc_state.call(null);var inst_86431 = cljs.core.seq_QMARK_.call(null,inst_86430__$1);var state_86491__$1 = (function (){var statearr_86493 = state_86491;(statearr_86493[7] = inst_86430__$1);
return statearr_86493;
})();if(inst_86431)
{var statearr_86494_86534 = state_86491__$1;(statearr_86494_86534[1] = 2);
} else
{var statearr_86495_86535 = state_86491__$1;(statearr_86495_86535[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 2))
{var inst_86430 = (state_86491[7]);var inst_86433 = cljs.core.apply.call(null,cljs.core.hash_map,inst_86430);var state_86491__$1 = state_86491;var statearr_86496_86536 = state_86491__$1;(statearr_86496_86536[2] = inst_86433);
(statearr_86496_86536[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 3))
{var inst_86430 = (state_86491[7]);var state_86491__$1 = state_86491;var statearr_86497_86537 = state_86491__$1;(statearr_86497_86537[2] = inst_86430);
(statearr_86497_86537[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 4))
{var inst_86430 = (state_86491[7]);var inst_86436 = (state_86491[2]);var inst_86437 = cljs.core.get.call(null,inst_86436,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_86438 = cljs.core.get.call(null,inst_86436,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_86439 = cljs.core.get.call(null,inst_86436,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_86440 = inst_86430;var state_86491__$1 = (function (){var statearr_86498 = state_86491;(statearr_86498[8] = inst_86437);
(statearr_86498[9] = inst_86439);
(statearr_86498[10] = inst_86438);
(statearr_86498[11] = inst_86440);
return statearr_86498;
})();var statearr_86499_86538 = state_86491__$1;(statearr_86499_86538[2] = null);
(statearr_86499_86538[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 5))
{var inst_86440 = (state_86491[11]);var inst_86443 = cljs.core.seq_QMARK_.call(null,inst_86440);var state_86491__$1 = state_86491;if(inst_86443)
{var statearr_86500_86539 = state_86491__$1;(statearr_86500_86539[1] = 7);
} else
{var statearr_86501_86540 = state_86491__$1;(statearr_86501_86540[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 6))
{var inst_86489 = (state_86491[2]);var state_86491__$1 = state_86491;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86491__$1,inst_86489);
} else
{if((state_val_86492 === 7))
{var inst_86440 = (state_86491[11]);var inst_86445 = cljs.core.apply.call(null,cljs.core.hash_map,inst_86440);var state_86491__$1 = state_86491;var statearr_86502_86541 = state_86491__$1;(statearr_86502_86541[2] = inst_86445);
(statearr_86502_86541[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 8))
{var inst_86440 = (state_86491[11]);var state_86491__$1 = state_86491;var statearr_86503_86542 = state_86491__$1;(statearr_86503_86542[2] = inst_86440);
(statearr_86503_86542[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 9))
{var inst_86448 = (state_86491[12]);var inst_86448__$1 = (state_86491[2]);var inst_86449 = cljs.core.get.call(null,inst_86448__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_86450 = cljs.core.get.call(null,inst_86448__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_86451 = cljs.core.get.call(null,inst_86448__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_86491__$1 = (function (){var statearr_86504 = state_86491;(statearr_86504[12] = inst_86448__$1);
(statearr_86504[13] = inst_86451);
(statearr_86504[14] = inst_86450);
return statearr_86504;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_86491__$1,10,inst_86449);
} else
{if((state_val_86492 === 10))
{var inst_86455 = (state_86491[15]);var inst_86456 = (state_86491[16]);var inst_86454 = (state_86491[2]);var inst_86455__$1 = cljs.core.nth.call(null,inst_86454,0,null);var inst_86456__$1 = cljs.core.nth.call(null,inst_86454,1,null);var inst_86457 = (inst_86455__$1 == null);var inst_86458 = cljs.core._EQ_.call(null,inst_86456__$1,change);var inst_86459 = (inst_86457) || (inst_86458);var state_86491__$1 = (function (){var statearr_86505 = state_86491;(statearr_86505[15] = inst_86455__$1);
(statearr_86505[16] = inst_86456__$1);
return statearr_86505;
})();if(cljs.core.truth_(inst_86459))
{var statearr_86506_86543 = state_86491__$1;(statearr_86506_86543[1] = 11);
} else
{var statearr_86507_86544 = state_86491__$1;(statearr_86507_86544[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 11))
{var inst_86455 = (state_86491[15]);var inst_86461 = (inst_86455 == null);var state_86491__$1 = state_86491;if(cljs.core.truth_(inst_86461))
{var statearr_86508_86545 = state_86491__$1;(statearr_86508_86545[1] = 14);
} else
{var statearr_86509_86546 = state_86491__$1;(statearr_86509_86546[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 12))
{var inst_86470 = (state_86491[17]);var inst_86456 = (state_86491[16]);var inst_86451 = (state_86491[13]);var inst_86470__$1 = inst_86451.call(null,inst_86456);var state_86491__$1 = (function (){var statearr_86510 = state_86491;(statearr_86510[17] = inst_86470__$1);
return statearr_86510;
})();if(cljs.core.truth_(inst_86470__$1))
{var statearr_86511_86547 = state_86491__$1;(statearr_86511_86547[1] = 17);
} else
{var statearr_86512_86548 = state_86491__$1;(statearr_86512_86548[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 13))
{var inst_86487 = (state_86491[2]);var state_86491__$1 = state_86491;var statearr_86513_86549 = state_86491__$1;(statearr_86513_86549[2] = inst_86487);
(statearr_86513_86549[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 14))
{var inst_86456 = (state_86491[16]);var inst_86463 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_86456);var state_86491__$1 = state_86491;var statearr_86514_86550 = state_86491__$1;(statearr_86514_86550[2] = inst_86463);
(statearr_86514_86550[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 15))
{var state_86491__$1 = state_86491;var statearr_86515_86551 = state_86491__$1;(statearr_86515_86551[2] = null);
(statearr_86515_86551[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 16))
{var inst_86466 = (state_86491[2]);var inst_86467 = calc_state.call(null);var inst_86440 = inst_86467;var state_86491__$1 = (function (){var statearr_86516 = state_86491;(statearr_86516[18] = inst_86466);
(statearr_86516[11] = inst_86440);
return statearr_86516;
})();var statearr_86517_86552 = state_86491__$1;(statearr_86517_86552[2] = null);
(statearr_86517_86552[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 17))
{var inst_86470 = (state_86491[17]);var state_86491__$1 = state_86491;var statearr_86518_86553 = state_86491__$1;(statearr_86518_86553[2] = inst_86470);
(statearr_86518_86553[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 18))
{var inst_86456 = (state_86491[16]);var inst_86451 = (state_86491[13]);var inst_86450 = (state_86491[14]);var inst_86473 = cljs.core.empty_QMARK_.call(null,inst_86451);var inst_86474 = inst_86450.call(null,inst_86456);var inst_86475 = cljs.core.not.call(null,inst_86474);var inst_86476 = (inst_86473) && (inst_86475);var state_86491__$1 = state_86491;var statearr_86519_86554 = state_86491__$1;(statearr_86519_86554[2] = inst_86476);
(statearr_86519_86554[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 19))
{var inst_86478 = (state_86491[2]);var state_86491__$1 = state_86491;if(cljs.core.truth_(inst_86478))
{var statearr_86520_86555 = state_86491__$1;(statearr_86520_86555[1] = 20);
} else
{var statearr_86521_86556 = state_86491__$1;(statearr_86521_86556[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 20))
{var inst_86455 = (state_86491[15]);var state_86491__$1 = state_86491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86491__$1,23,out,inst_86455);
} else
{if((state_val_86492 === 21))
{var state_86491__$1 = state_86491;var statearr_86522_86557 = state_86491__$1;(statearr_86522_86557[2] = null);
(statearr_86522_86557[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 22))
{var inst_86448 = (state_86491[12]);var inst_86484 = (state_86491[2]);var inst_86440 = inst_86448;var state_86491__$1 = (function (){var statearr_86523 = state_86491;(statearr_86523[19] = inst_86484);
(statearr_86523[11] = inst_86440);
return statearr_86523;
})();var statearr_86524_86558 = state_86491__$1;(statearr_86524_86558[2] = null);
(statearr_86524_86558[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86492 === 23))
{var inst_86481 = (state_86491[2]);var state_86491__$1 = state_86491;var statearr_86525_86559 = state_86491__$1;(statearr_86525_86559[2] = inst_86481);
(statearr_86525_86559[1] = 22);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_86529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_86529[0] = state_machine__5510__auto__);
(statearr_86529[1] = 1);
return statearr_86529;
});
var state_machine__5510__auto____1 = (function (state_86491){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_86491);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e86530){if((e86530 instanceof Object))
{var ex__5513__auto__ = e86530;var statearr_86531_86560 = state_86491;(statearr_86531_86560[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86491);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e86530;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__86561 = state_86491;
state_86491 = G__86561;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_86491){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_86491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_86532 = f__5525__auto__.call(null);(statearr_86532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___86533);
return statearr_86532;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
cljs.core.async.Pub = (function (){var obj86563 = {};return obj86563;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3391__auto__ = p;if(and__3391__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3391__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4030__auto__ = (((p == null))?null:p);return (function (){var or__3403__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4030__auto__)]);if(or__3403__auto__)
{return or__3403__auto__;
} else
{var or__3403__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3403__auto____$1)
{return or__3403__auto____$1;
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
return (function (topic){var or__3403__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3403__auto__))
{return or__3403__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3403__auto__,mults){
return (function (p1__86564_SHARP_){if(cljs.core.truth_(p1__86564_SHARP_.call(null,topic)))
{return p1__86564_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__86564_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3403__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t86689 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t86689 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta86690){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta86690 = meta86690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t86689.cljs$lang$type = true;
cljs.core.async.t86689.cljs$lang$ctorStr = "cljs.core.async/t86689";
cljs.core.async.t86689.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3970__auto__,writer__3971__auto__,opt__3972__auto__){return cljs.core._write.call(null,writer__3971__auto__,"cljs.core.async/t86689");
});})(mults,ensure_mult))
;
cljs.core.async.t86689.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t86689.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t86689.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t86689.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t86689.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t86689.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t86689.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t86689.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_86691){var self__ = this;
var _86691__$1 = this;return self__.meta86690;
});})(mults,ensure_mult))
;
cljs.core.async.t86689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_86691,meta86690__$1){var self__ = this;
var _86691__$1 = this;return (new cljs.core.async.t86689(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta86690__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t86689 = ((function (mults,ensure_mult){
return (function __GT_t86689(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta86690){return (new cljs.core.async.t86689(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta86690));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t86689(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5524__auto___86813 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_86765){var state_val_86766 = (state_86765[1]);if((state_val_86766 === 1))
{var state_86765__$1 = state_86765;var statearr_86767_86814 = state_86765__$1;(statearr_86767_86814[2] = null);
(statearr_86767_86814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 2))
{var state_86765__$1 = state_86765;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86765__$1,4,ch);
} else
{if((state_val_86766 === 3))
{var inst_86763 = (state_86765[2]);var state_86765__$1 = state_86765;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86765__$1,inst_86763);
} else
{if((state_val_86766 === 4))
{var inst_86694 = (state_86765[7]);var inst_86694__$1 = (state_86765[2]);var inst_86695 = (inst_86694__$1 == null);var state_86765__$1 = (function (){var statearr_86768 = state_86765;(statearr_86768[7] = inst_86694__$1);
return statearr_86768;
})();if(cljs.core.truth_(inst_86695))
{var statearr_86769_86815 = state_86765__$1;(statearr_86769_86815[1] = 5);
} else
{var statearr_86770_86816 = state_86765__$1;(statearr_86770_86816[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 5))
{var inst_86701 = cljs.core.deref.call(null,mults);var inst_86702 = cljs.core.vals.call(null,inst_86701);var inst_86703 = cljs.core.seq.call(null,inst_86702);var inst_86704 = inst_86703;var inst_86705 = null;var inst_86706 = 0;var inst_86707 = 0;var state_86765__$1 = (function (){var statearr_86771 = state_86765;(statearr_86771[8] = inst_86706);
(statearr_86771[9] = inst_86707);
(statearr_86771[10] = inst_86704);
(statearr_86771[11] = inst_86705);
return statearr_86771;
})();var statearr_86772_86817 = state_86765__$1;(statearr_86772_86817[2] = null);
(statearr_86772_86817[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 6))
{var inst_86742 = (state_86765[12]);var inst_86694 = (state_86765[7]);var inst_86744 = (state_86765[13]);var inst_86742__$1 = topic_fn.call(null,inst_86694);var inst_86743 = cljs.core.deref.call(null,mults);var inst_86744__$1 = cljs.core.get.call(null,inst_86743,inst_86742__$1);var state_86765__$1 = (function (){var statearr_86773 = state_86765;(statearr_86773[12] = inst_86742__$1);
(statearr_86773[13] = inst_86744__$1);
return statearr_86773;
})();if(cljs.core.truth_(inst_86744__$1))
{var statearr_86774_86818 = state_86765__$1;(statearr_86774_86818[1] = 19);
} else
{var statearr_86775_86819 = state_86765__$1;(statearr_86775_86819[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 7))
{var inst_86761 = (state_86765[2]);var state_86765__$1 = state_86765;var statearr_86776_86820 = state_86765__$1;(statearr_86776_86820[2] = inst_86761);
(statearr_86776_86820[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 8))
{var inst_86706 = (state_86765[8]);var inst_86707 = (state_86765[9]);var inst_86709 = (inst_86707 < inst_86706);var inst_86710 = inst_86709;var state_86765__$1 = state_86765;if(cljs.core.truth_(inst_86710))
{var statearr_86780_86821 = state_86765__$1;(statearr_86780_86821[1] = 10);
} else
{var statearr_86781_86822 = state_86765__$1;(statearr_86781_86822[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 9))
{var inst_86740 = (state_86765[2]);var state_86765__$1 = state_86765;var statearr_86782_86823 = state_86765__$1;(statearr_86782_86823[2] = inst_86740);
(statearr_86782_86823[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 10))
{var inst_86706 = (state_86765[8]);var inst_86707 = (state_86765[9]);var inst_86704 = (state_86765[10]);var inst_86705 = (state_86765[11]);var inst_86712 = cljs.core._nth.call(null,inst_86705,inst_86707);var inst_86713 = cljs.core.async.muxch_STAR_.call(null,inst_86712);var inst_86714 = cljs.core.async.close_BANG_.call(null,inst_86713);var inst_86715 = (inst_86707 + 1);var tmp86777 = inst_86706;var tmp86778 = inst_86704;var tmp86779 = inst_86705;var inst_86704__$1 = tmp86778;var inst_86705__$1 = tmp86779;var inst_86706__$1 = tmp86777;var inst_86707__$1 = inst_86715;var state_86765__$1 = (function (){var statearr_86783 = state_86765;(statearr_86783[14] = inst_86714);
(statearr_86783[8] = inst_86706__$1);
(statearr_86783[9] = inst_86707__$1);
(statearr_86783[10] = inst_86704__$1);
(statearr_86783[11] = inst_86705__$1);
return statearr_86783;
})();var statearr_86784_86824 = state_86765__$1;(statearr_86784_86824[2] = null);
(statearr_86784_86824[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 11))
{var inst_86718 = (state_86765[15]);var inst_86704 = (state_86765[10]);var inst_86718__$1 = cljs.core.seq.call(null,inst_86704);var state_86765__$1 = (function (){var statearr_86785 = state_86765;(statearr_86785[15] = inst_86718__$1);
return statearr_86785;
})();if(inst_86718__$1)
{var statearr_86786_86825 = state_86765__$1;(statearr_86786_86825[1] = 13);
} else
{var statearr_86787_86826 = state_86765__$1;(statearr_86787_86826[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 12))
{var inst_86738 = (state_86765[2]);var state_86765__$1 = state_86765;var statearr_86788_86827 = state_86765__$1;(statearr_86788_86827[2] = inst_86738);
(statearr_86788_86827[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 13))
{var inst_86718 = (state_86765[15]);var inst_86720 = cljs.core.chunked_seq_QMARK_.call(null,inst_86718);var state_86765__$1 = state_86765;if(inst_86720)
{var statearr_86789_86828 = state_86765__$1;(statearr_86789_86828[1] = 16);
} else
{var statearr_86790_86829 = state_86765__$1;(statearr_86790_86829[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 14))
{var state_86765__$1 = state_86765;var statearr_86791_86830 = state_86765__$1;(statearr_86791_86830[2] = null);
(statearr_86791_86830[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 15))
{var inst_86736 = (state_86765[2]);var state_86765__$1 = state_86765;var statearr_86792_86831 = state_86765__$1;(statearr_86792_86831[2] = inst_86736);
(statearr_86792_86831[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 16))
{var inst_86718 = (state_86765[15]);var inst_86722 = cljs.core.chunk_first.call(null,inst_86718);var inst_86723 = cljs.core.chunk_rest.call(null,inst_86718);var inst_86724 = cljs.core.count.call(null,inst_86722);var inst_86704 = inst_86723;var inst_86705 = inst_86722;var inst_86706 = inst_86724;var inst_86707 = 0;var state_86765__$1 = (function (){var statearr_86793 = state_86765;(statearr_86793[8] = inst_86706);
(statearr_86793[9] = inst_86707);
(statearr_86793[10] = inst_86704);
(statearr_86793[11] = inst_86705);
return statearr_86793;
})();var statearr_86794_86832 = state_86765__$1;(statearr_86794_86832[2] = null);
(statearr_86794_86832[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 17))
{var inst_86718 = (state_86765[15]);var inst_86727 = cljs.core.first.call(null,inst_86718);var inst_86728 = cljs.core.async.muxch_STAR_.call(null,inst_86727);var inst_86729 = cljs.core.async.close_BANG_.call(null,inst_86728);var inst_86730 = cljs.core.next.call(null,inst_86718);var inst_86704 = inst_86730;var inst_86705 = null;var inst_86706 = 0;var inst_86707 = 0;var state_86765__$1 = (function (){var statearr_86795 = state_86765;(statearr_86795[16] = inst_86729);
(statearr_86795[8] = inst_86706);
(statearr_86795[9] = inst_86707);
(statearr_86795[10] = inst_86704);
(statearr_86795[11] = inst_86705);
return statearr_86795;
})();var statearr_86796_86833 = state_86765__$1;(statearr_86796_86833[2] = null);
(statearr_86796_86833[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 18))
{var inst_86733 = (state_86765[2]);var state_86765__$1 = state_86765;var statearr_86797_86834 = state_86765__$1;(statearr_86797_86834[2] = inst_86733);
(statearr_86797_86834[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 19))
{var state_86765__$1 = state_86765;var statearr_86798_86835 = state_86765__$1;(statearr_86798_86835[2] = null);
(statearr_86798_86835[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 20))
{var state_86765__$1 = state_86765;var statearr_86799_86836 = state_86765__$1;(statearr_86799_86836[2] = null);
(statearr_86799_86836[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 21))
{var inst_86758 = (state_86765[2]);var state_86765__$1 = (function (){var statearr_86800 = state_86765;(statearr_86800[17] = inst_86758);
return statearr_86800;
})();var statearr_86801_86837 = state_86765__$1;(statearr_86801_86837[2] = null);
(statearr_86801_86837[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 22))
{var inst_86755 = (state_86765[2]);var state_86765__$1 = state_86765;var statearr_86802_86838 = state_86765__$1;(statearr_86802_86838[2] = inst_86755);
(statearr_86802_86838[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 23))
{var inst_86742 = (state_86765[12]);var inst_86746 = (state_86765[2]);var inst_86747 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_86742);var state_86765__$1 = (function (){var statearr_86803 = state_86765;(statearr_86803[18] = inst_86746);
return statearr_86803;
})();var statearr_86804_86839 = state_86765__$1;(statearr_86804_86839[2] = inst_86747);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86765__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86766 === 24))
{var inst_86694 = (state_86765[7]);var inst_86744 = (state_86765[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_86765,23,Object,null,22);var inst_86751 = cljs.core.async.muxch_STAR_.call(null,inst_86744);var state_86765__$1 = state_86765;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86765__$1,25,inst_86751,inst_86694);
} else
{if((state_val_86766 === 25))
{var inst_86753 = (state_86765[2]);var state_86765__$1 = state_86765;var statearr_86805_86840 = state_86765__$1;(statearr_86805_86840[2] = inst_86753);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86765__$1);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_86809 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_86809[0] = state_machine__5510__auto__);
(statearr_86809[1] = 1);
return statearr_86809;
});
var state_machine__5510__auto____1 = (function (state_86765){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_86765);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e86810){if((e86810 instanceof Object))
{var ex__5513__auto__ = e86810;var statearr_86811_86841 = state_86765;(statearr_86811_86841[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86765);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e86810;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__86842 = state_86765;
state_86765 = G__86842;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_86765){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_86765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_86812 = f__5525__auto__.call(null);(statearr_86812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___86813);
return statearr_86812;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
,cljs.core.range.call(null,cnt));var c__5524__auto___86979 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_86949){var state_val_86950 = (state_86949[1]);if((state_val_86950 === 1))
{var state_86949__$1 = state_86949;var statearr_86951_86980 = state_86949__$1;(statearr_86951_86980[2] = null);
(statearr_86951_86980[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86950 === 2))
{var inst_86912 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_86913 = 0;var state_86949__$1 = (function (){var statearr_86952 = state_86949;(statearr_86952[7] = inst_86912);
(statearr_86952[8] = inst_86913);
return statearr_86952;
})();var statearr_86953_86981 = state_86949__$1;(statearr_86953_86981[2] = null);
(statearr_86953_86981[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86950 === 3))
{var inst_86947 = (state_86949[2]);var state_86949__$1 = state_86949;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86949__$1,inst_86947);
} else
{if((state_val_86950 === 4))
{var inst_86913 = (state_86949[8]);var inst_86915 = (inst_86913 < cnt);var state_86949__$1 = state_86949;if(cljs.core.truth_(inst_86915))
{var statearr_86954_86982 = state_86949__$1;(statearr_86954_86982[1] = 6);
} else
{var statearr_86955_86983 = state_86949__$1;(statearr_86955_86983[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86950 === 5))
{var inst_86933 = (state_86949[2]);var state_86949__$1 = (function (){var statearr_86956 = state_86949;(statearr_86956[9] = inst_86933);
return statearr_86956;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86949__$1,12,dchan);
} else
{if((state_val_86950 === 6))
{var state_86949__$1 = state_86949;var statearr_86957_86984 = state_86949__$1;(statearr_86957_86984[2] = null);
(statearr_86957_86984[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86950 === 7))
{var state_86949__$1 = state_86949;var statearr_86958_86985 = state_86949__$1;(statearr_86958_86985[2] = null);
(statearr_86958_86985[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86950 === 8))
{var inst_86931 = (state_86949[2]);var state_86949__$1 = state_86949;var statearr_86959_86986 = state_86949__$1;(statearr_86959_86986[2] = inst_86931);
(statearr_86959_86986[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86950 === 9))
{var inst_86913 = (state_86949[8]);var inst_86926 = (state_86949[2]);var inst_86927 = (inst_86913 + 1);var inst_86913__$1 = inst_86927;var state_86949__$1 = (function (){var statearr_86960 = state_86949;(statearr_86960[8] = inst_86913__$1);
(statearr_86960[10] = inst_86926);
return statearr_86960;
})();var statearr_86961_86987 = state_86949__$1;(statearr_86961_86987[2] = null);
(statearr_86961_86987[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86950 === 10))
{var inst_86917 = (state_86949[2]);var inst_86918 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_86949__$1 = (function (){var statearr_86962 = state_86949;(statearr_86962[11] = inst_86917);
return statearr_86962;
})();var statearr_86963_86988 = state_86949__$1;(statearr_86963_86988[2] = inst_86918);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86949__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86950 === 11))
{var inst_86913 = (state_86949[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_86949,10,Object,null,9);var inst_86922 = chs__$1.call(null,inst_86913);var inst_86923 = done.call(null,inst_86913);var inst_86924 = cljs.core.async.take_BANG_.call(null,inst_86922,inst_86923);var state_86949__$1 = state_86949;var statearr_86964_86989 = state_86949__$1;(statearr_86964_86989[2] = inst_86924);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86949__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86950 === 12))
{var inst_86935 = (state_86949[12]);var inst_86935__$1 = (state_86949[2]);var inst_86936 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_86935__$1);var state_86949__$1 = (function (){var statearr_86965 = state_86949;(statearr_86965[12] = inst_86935__$1);
return statearr_86965;
})();if(cljs.core.truth_(inst_86936))
{var statearr_86966_86990 = state_86949__$1;(statearr_86966_86990[1] = 13);
} else
{var statearr_86967_86991 = state_86949__$1;(statearr_86967_86991[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86950 === 13))
{var inst_86938 = cljs.core.async.close_BANG_.call(null,out);var state_86949__$1 = state_86949;var statearr_86968_86992 = state_86949__$1;(statearr_86968_86992[2] = inst_86938);
(statearr_86968_86992[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86950 === 14))
{var inst_86935 = (state_86949[12]);var inst_86940 = cljs.core.apply.call(null,f,inst_86935);var state_86949__$1 = state_86949;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_86949__$1,16,out,inst_86940);
} else
{if((state_val_86950 === 15))
{var inst_86945 = (state_86949[2]);var state_86949__$1 = state_86949;var statearr_86969_86993 = state_86949__$1;(statearr_86969_86993[2] = inst_86945);
(statearr_86969_86993[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_86950 === 16))
{var inst_86942 = (state_86949[2]);var state_86949__$1 = (function (){var statearr_86970 = state_86949;(statearr_86970[13] = inst_86942);
return statearr_86970;
})();var statearr_86971_86994 = state_86949__$1;(statearr_86971_86994[2] = null);
(statearr_86971_86994[1] = 2);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_86975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_86975[0] = state_machine__5510__auto__);
(statearr_86975[1] = 1);
return statearr_86975;
});
var state_machine__5510__auto____1 = (function (state_86949){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_86949);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e86976){if((e86976 instanceof Object))
{var ex__5513__auto__ = e86976;var statearr_86977_86995 = state_86949;(statearr_86977_86995[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86949);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e86976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__86996 = state_86949;
state_86949 = G__86996;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_86949){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_86949);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_86978 = f__5525__auto__.call(null);(statearr_86978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___86979);
return statearr_86978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___87104 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_87080){var state_val_87081 = (state_87080[1]);if((state_val_87081 === 1))
{var inst_87051 = cljs.core.vec.call(null,chs);var inst_87052 = inst_87051;var state_87080__$1 = (function (){var statearr_87082 = state_87080;(statearr_87082[7] = inst_87052);
return statearr_87082;
})();var statearr_87083_87105 = state_87080__$1;(statearr_87083_87105[2] = null);
(statearr_87083_87105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87081 === 2))
{var inst_87052 = (state_87080[7]);var inst_87054 = cljs.core.count.call(null,inst_87052);var inst_87055 = (inst_87054 > 0);var state_87080__$1 = state_87080;if(cljs.core.truth_(inst_87055))
{var statearr_87084_87106 = state_87080__$1;(statearr_87084_87106[1] = 4);
} else
{var statearr_87085_87107 = state_87080__$1;(statearr_87085_87107[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87081 === 3))
{var inst_87078 = (state_87080[2]);var state_87080__$1 = state_87080;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87080__$1,inst_87078);
} else
{if((state_val_87081 === 4))
{var inst_87052 = (state_87080[7]);var state_87080__$1 = state_87080;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_87080__$1,7,inst_87052);
} else
{if((state_val_87081 === 5))
{var inst_87074 = cljs.core.async.close_BANG_.call(null,out);var state_87080__$1 = state_87080;var statearr_87086_87108 = state_87080__$1;(statearr_87086_87108[2] = inst_87074);
(statearr_87086_87108[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87081 === 6))
{var inst_87076 = (state_87080[2]);var state_87080__$1 = state_87080;var statearr_87087_87109 = state_87080__$1;(statearr_87087_87109[2] = inst_87076);
(statearr_87087_87109[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87081 === 7))
{var inst_87059 = (state_87080[8]);var inst_87060 = (state_87080[9]);var inst_87059__$1 = (state_87080[2]);var inst_87060__$1 = cljs.core.nth.call(null,inst_87059__$1,0,null);var inst_87061 = cljs.core.nth.call(null,inst_87059__$1,1,null);var inst_87062 = (inst_87060__$1 == null);var state_87080__$1 = (function (){var statearr_87088 = state_87080;(statearr_87088[8] = inst_87059__$1);
(statearr_87088[10] = inst_87061);
(statearr_87088[9] = inst_87060__$1);
return statearr_87088;
})();if(cljs.core.truth_(inst_87062))
{var statearr_87089_87110 = state_87080__$1;(statearr_87089_87110[1] = 8);
} else
{var statearr_87090_87111 = state_87080__$1;(statearr_87090_87111[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87081 === 8))
{var inst_87052 = (state_87080[7]);var inst_87059 = (state_87080[8]);var inst_87061 = (state_87080[10]);var inst_87060 = (state_87080[9]);var inst_87064 = (function (){var c = inst_87061;var v = inst_87060;var vec__87057 = inst_87059;var cs = inst_87052;return ((function (c,v,vec__87057,cs,inst_87052,inst_87059,inst_87061,inst_87060,state_val_87081){
return (function (p1__86997_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__86997_SHARP_);
});
;})(c,v,vec__87057,cs,inst_87052,inst_87059,inst_87061,inst_87060,state_val_87081))
})();var inst_87065 = cljs.core.filterv.call(null,inst_87064,inst_87052);var inst_87052__$1 = inst_87065;var state_87080__$1 = (function (){var statearr_87091 = state_87080;(statearr_87091[7] = inst_87052__$1);
return statearr_87091;
})();var statearr_87092_87112 = state_87080__$1;(statearr_87092_87112[2] = null);
(statearr_87092_87112[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87081 === 9))
{var inst_87060 = (state_87080[9]);var state_87080__$1 = state_87080;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87080__$1,11,out,inst_87060);
} else
{if((state_val_87081 === 10))
{var inst_87072 = (state_87080[2]);var state_87080__$1 = state_87080;var statearr_87094_87113 = state_87080__$1;(statearr_87094_87113[2] = inst_87072);
(statearr_87094_87113[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87081 === 11))
{var inst_87052 = (state_87080[7]);var inst_87069 = (state_87080[2]);var tmp87093 = inst_87052;var inst_87052__$1 = tmp87093;var state_87080__$1 = (function (){var statearr_87095 = state_87080;(statearr_87095[7] = inst_87052__$1);
(statearr_87095[11] = inst_87069);
return statearr_87095;
})();var statearr_87096_87114 = state_87080__$1;(statearr_87096_87114[2] = null);
(statearr_87096_87114[1] = 2);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_87100 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_87100[0] = state_machine__5510__auto__);
(statearr_87100[1] = 1);
return statearr_87100;
});
var state_machine__5510__auto____1 = (function (state_87080){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_87080);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e87101){if((e87101 instanceof Object))
{var ex__5513__auto__ = e87101;var statearr_87102_87115 = state_87080;(statearr_87102_87115[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87080);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e87101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__87116 = state_87080;
state_87080 = G__87116;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_87080){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_87080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_87103 = f__5525__auto__.call(null);(statearr_87103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___87104);
return statearr_87103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___87209 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_87186){var state_val_87187 = (state_87186[1]);if((state_val_87187 === 1))
{var inst_87163 = 0;var state_87186__$1 = (function (){var statearr_87188 = state_87186;(statearr_87188[7] = inst_87163);
return statearr_87188;
})();var statearr_87189_87210 = state_87186__$1;(statearr_87189_87210[2] = null);
(statearr_87189_87210[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87187 === 2))
{var inst_87163 = (state_87186[7]);var inst_87165 = (inst_87163 < n);var state_87186__$1 = state_87186;if(cljs.core.truth_(inst_87165))
{var statearr_87190_87211 = state_87186__$1;(statearr_87190_87211[1] = 4);
} else
{var statearr_87191_87212 = state_87186__$1;(statearr_87191_87212[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87187 === 3))
{var inst_87183 = (state_87186[2]);var inst_87184 = cljs.core.async.close_BANG_.call(null,out);var state_87186__$1 = (function (){var statearr_87192 = state_87186;(statearr_87192[8] = inst_87183);
return statearr_87192;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87186__$1,inst_87184);
} else
{if((state_val_87187 === 4))
{var state_87186__$1 = state_87186;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87186__$1,7,ch);
} else
{if((state_val_87187 === 5))
{var state_87186__$1 = state_87186;var statearr_87193_87213 = state_87186__$1;(statearr_87193_87213[2] = null);
(statearr_87193_87213[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87187 === 6))
{var inst_87181 = (state_87186[2]);var state_87186__$1 = state_87186;var statearr_87194_87214 = state_87186__$1;(statearr_87194_87214[2] = inst_87181);
(statearr_87194_87214[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87187 === 7))
{var inst_87168 = (state_87186[9]);var inst_87168__$1 = (state_87186[2]);var inst_87169 = (inst_87168__$1 == null);var inst_87170 = cljs.core.not.call(null,inst_87169);var state_87186__$1 = (function (){var statearr_87195 = state_87186;(statearr_87195[9] = inst_87168__$1);
return statearr_87195;
})();if(inst_87170)
{var statearr_87196_87215 = state_87186__$1;(statearr_87196_87215[1] = 8);
} else
{var statearr_87197_87216 = state_87186__$1;(statearr_87197_87216[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87187 === 8))
{var inst_87168 = (state_87186[9]);var state_87186__$1 = state_87186;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87186__$1,11,out,inst_87168);
} else
{if((state_val_87187 === 9))
{var state_87186__$1 = state_87186;var statearr_87198_87217 = state_87186__$1;(statearr_87198_87217[2] = null);
(statearr_87198_87217[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87187 === 10))
{var inst_87178 = (state_87186[2]);var state_87186__$1 = state_87186;var statearr_87199_87218 = state_87186__$1;(statearr_87199_87218[2] = inst_87178);
(statearr_87199_87218[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87187 === 11))
{var inst_87163 = (state_87186[7]);var inst_87173 = (state_87186[2]);var inst_87174 = (inst_87163 + 1);var inst_87163__$1 = inst_87174;var state_87186__$1 = (function (){var statearr_87200 = state_87186;(statearr_87200[7] = inst_87163__$1);
(statearr_87200[10] = inst_87173);
return statearr_87200;
})();var statearr_87201_87219 = state_87186__$1;(statearr_87201_87219[2] = null);
(statearr_87201_87219[1] = 2);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_87205 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_87205[0] = state_machine__5510__auto__);
(statearr_87205[1] = 1);
return statearr_87205;
});
var state_machine__5510__auto____1 = (function (state_87186){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_87186);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e87206){if((e87206 instanceof Object))
{var ex__5513__auto__ = e87206;var statearr_87207_87220 = state_87186;(statearr_87207_87220[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87186);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e87206;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__87221 = state_87186;
state_87186 = G__87221;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_87186){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_87186);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_87208 = f__5525__auto__.call(null);(statearr_87208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___87209);
return statearr_87208;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___87318 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_87293){var state_val_87294 = (state_87293[1]);if((state_val_87294 === 1))
{var inst_87270 = null;var state_87293__$1 = (function (){var statearr_87295 = state_87293;(statearr_87295[7] = inst_87270);
return statearr_87295;
})();var statearr_87296_87319 = state_87293__$1;(statearr_87296_87319[2] = null);
(statearr_87296_87319[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87294 === 2))
{var state_87293__$1 = state_87293;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87293__$1,4,ch);
} else
{if((state_val_87294 === 3))
{var inst_87290 = (state_87293[2]);var inst_87291 = cljs.core.async.close_BANG_.call(null,out);var state_87293__$1 = (function (){var statearr_87297 = state_87293;(statearr_87297[8] = inst_87290);
return statearr_87297;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87293__$1,inst_87291);
} else
{if((state_val_87294 === 4))
{var inst_87273 = (state_87293[9]);var inst_87273__$1 = (state_87293[2]);var inst_87274 = (inst_87273__$1 == null);var inst_87275 = cljs.core.not.call(null,inst_87274);var state_87293__$1 = (function (){var statearr_87298 = state_87293;(statearr_87298[9] = inst_87273__$1);
return statearr_87298;
})();if(inst_87275)
{var statearr_87299_87320 = state_87293__$1;(statearr_87299_87320[1] = 5);
} else
{var statearr_87300_87321 = state_87293__$1;(statearr_87300_87321[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87294 === 5))
{var inst_87273 = (state_87293[9]);var inst_87270 = (state_87293[7]);var inst_87277 = cljs.core._EQ_.call(null,inst_87273,inst_87270);var state_87293__$1 = state_87293;if(inst_87277)
{var statearr_87301_87322 = state_87293__$1;(statearr_87301_87322[1] = 8);
} else
{var statearr_87302_87323 = state_87293__$1;(statearr_87302_87323[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87294 === 6))
{var state_87293__$1 = state_87293;var statearr_87304_87324 = state_87293__$1;(statearr_87304_87324[2] = null);
(statearr_87304_87324[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87294 === 7))
{var inst_87288 = (state_87293[2]);var state_87293__$1 = state_87293;var statearr_87305_87325 = state_87293__$1;(statearr_87305_87325[2] = inst_87288);
(statearr_87305_87325[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87294 === 8))
{var inst_87270 = (state_87293[7]);var tmp87303 = inst_87270;var inst_87270__$1 = tmp87303;var state_87293__$1 = (function (){var statearr_87306 = state_87293;(statearr_87306[7] = inst_87270__$1);
return statearr_87306;
})();var statearr_87307_87326 = state_87293__$1;(statearr_87307_87326[2] = null);
(statearr_87307_87326[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87294 === 9))
{var inst_87273 = (state_87293[9]);var state_87293__$1 = state_87293;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87293__$1,11,out,inst_87273);
} else
{if((state_val_87294 === 10))
{var inst_87285 = (state_87293[2]);var state_87293__$1 = state_87293;var statearr_87308_87327 = state_87293__$1;(statearr_87308_87327[2] = inst_87285);
(statearr_87308_87327[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87294 === 11))
{var inst_87273 = (state_87293[9]);var inst_87282 = (state_87293[2]);var inst_87270 = inst_87273;var state_87293__$1 = (function (){var statearr_87309 = state_87293;(statearr_87309[7] = inst_87270);
(statearr_87309[10] = inst_87282);
return statearr_87309;
})();var statearr_87310_87328 = state_87293__$1;(statearr_87310_87328[2] = null);
(statearr_87310_87328[1] = 2);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_87314 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_87314[0] = state_machine__5510__auto__);
(statearr_87314[1] = 1);
return statearr_87314;
});
var state_machine__5510__auto____1 = (function (state_87293){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_87293);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e87315){if((e87315 instanceof Object))
{var ex__5513__auto__ = e87315;var statearr_87316_87329 = state_87293;(statearr_87316_87329[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87293);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e87315;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__87330 = state_87293;
state_87293 = G__87330;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_87293){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_87293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_87317 = f__5525__auto__.call(null);(statearr_87317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___87318);
return statearr_87317;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___87465 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_87435){var state_val_87436 = (state_87435[1]);if((state_val_87436 === 1))
{var inst_87398 = (new Array(n));var inst_87399 = inst_87398;var inst_87400 = 0;var state_87435__$1 = (function (){var statearr_87437 = state_87435;(statearr_87437[7] = inst_87399);
(statearr_87437[8] = inst_87400);
return statearr_87437;
})();var statearr_87438_87466 = state_87435__$1;(statearr_87438_87466[2] = null);
(statearr_87438_87466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87436 === 2))
{var state_87435__$1 = state_87435;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87435__$1,4,ch);
} else
{if((state_val_87436 === 3))
{var inst_87433 = (state_87435[2]);var state_87435__$1 = state_87435;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87435__$1,inst_87433);
} else
{if((state_val_87436 === 4))
{var inst_87403 = (state_87435[9]);var inst_87403__$1 = (state_87435[2]);var inst_87404 = (inst_87403__$1 == null);var inst_87405 = cljs.core.not.call(null,inst_87404);var state_87435__$1 = (function (){var statearr_87439 = state_87435;(statearr_87439[9] = inst_87403__$1);
return statearr_87439;
})();if(inst_87405)
{var statearr_87440_87467 = state_87435__$1;(statearr_87440_87467[1] = 5);
} else
{var statearr_87441_87468 = state_87435__$1;(statearr_87441_87468[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87436 === 5))
{var inst_87408 = (state_87435[10]);var inst_87399 = (state_87435[7]);var inst_87400 = (state_87435[8]);var inst_87403 = (state_87435[9]);var inst_87407 = (inst_87399[inst_87400] = inst_87403);var inst_87408__$1 = (inst_87400 + 1);var inst_87409 = (inst_87408__$1 < n);var state_87435__$1 = (function (){var statearr_87442 = state_87435;(statearr_87442[11] = inst_87407);
(statearr_87442[10] = inst_87408__$1);
return statearr_87442;
})();if(cljs.core.truth_(inst_87409))
{var statearr_87443_87469 = state_87435__$1;(statearr_87443_87469[1] = 8);
} else
{var statearr_87444_87470 = state_87435__$1;(statearr_87444_87470[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87436 === 6))
{var inst_87400 = (state_87435[8]);var inst_87421 = (inst_87400 > 0);var state_87435__$1 = state_87435;if(cljs.core.truth_(inst_87421))
{var statearr_87446_87471 = state_87435__$1;(statearr_87446_87471[1] = 12);
} else
{var statearr_87447_87472 = state_87435__$1;(statearr_87447_87472[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87436 === 7))
{var inst_87431 = (state_87435[2]);var state_87435__$1 = state_87435;var statearr_87448_87473 = state_87435__$1;(statearr_87448_87473[2] = inst_87431);
(statearr_87448_87473[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87436 === 8))
{var inst_87408 = (state_87435[10]);var inst_87399 = (state_87435[7]);var tmp87445 = inst_87399;var inst_87399__$1 = tmp87445;var inst_87400 = inst_87408;var state_87435__$1 = (function (){var statearr_87449 = state_87435;(statearr_87449[7] = inst_87399__$1);
(statearr_87449[8] = inst_87400);
return statearr_87449;
})();var statearr_87450_87474 = state_87435__$1;(statearr_87450_87474[2] = null);
(statearr_87450_87474[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87436 === 9))
{var inst_87399 = (state_87435[7]);var inst_87413 = cljs.core.vec.call(null,inst_87399);var state_87435__$1 = state_87435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87435__$1,11,out,inst_87413);
} else
{if((state_val_87436 === 10))
{var inst_87419 = (state_87435[2]);var state_87435__$1 = state_87435;var statearr_87451_87475 = state_87435__$1;(statearr_87451_87475[2] = inst_87419);
(statearr_87451_87475[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87436 === 11))
{var inst_87415 = (state_87435[2]);var inst_87416 = (new Array(n));var inst_87399 = inst_87416;var inst_87400 = 0;var state_87435__$1 = (function (){var statearr_87452 = state_87435;(statearr_87452[12] = inst_87415);
(statearr_87452[7] = inst_87399);
(statearr_87452[8] = inst_87400);
return statearr_87452;
})();var statearr_87453_87476 = state_87435__$1;(statearr_87453_87476[2] = null);
(statearr_87453_87476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87436 === 12))
{var inst_87399 = (state_87435[7]);var inst_87423 = cljs.core.vec.call(null,inst_87399);var state_87435__$1 = state_87435;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87435__$1,15,out,inst_87423);
} else
{if((state_val_87436 === 13))
{var state_87435__$1 = state_87435;var statearr_87454_87477 = state_87435__$1;(statearr_87454_87477[2] = null);
(statearr_87454_87477[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87436 === 14))
{var inst_87428 = (state_87435[2]);var inst_87429 = cljs.core.async.close_BANG_.call(null,out);var state_87435__$1 = (function (){var statearr_87455 = state_87435;(statearr_87455[13] = inst_87428);
return statearr_87455;
})();var statearr_87456_87478 = state_87435__$1;(statearr_87456_87478[2] = inst_87429);
(statearr_87456_87478[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87436 === 15))
{var inst_87425 = (state_87435[2]);var state_87435__$1 = state_87435;var statearr_87457_87479 = state_87435__$1;(statearr_87457_87479[2] = inst_87425);
(statearr_87457_87479[1] = 14);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_87461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_87461[0] = state_machine__5510__auto__);
(statearr_87461[1] = 1);
return statearr_87461;
});
var state_machine__5510__auto____1 = (function (state_87435){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_87435);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e87462){if((e87462 instanceof Object))
{var ex__5513__auto__ = e87462;var statearr_87463_87480 = state_87435;(statearr_87463_87480[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87435);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e87462;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__87481 = state_87435;
state_87435 = G__87481;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_87435){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_87435);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_87464 = f__5525__auto__.call(null);(statearr_87464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___87465);
return statearr_87464;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5524__auto___87624 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5525__auto__ = (function (){var switch__5509__auto__ = (function (state_87594){var state_val_87595 = (state_87594[1]);if((state_val_87595 === 1))
{var inst_87553 = [];var inst_87554 = inst_87553;var inst_87555 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_87594__$1 = (function (){var statearr_87596 = state_87594;(statearr_87596[7] = inst_87554);
(statearr_87596[8] = inst_87555);
return statearr_87596;
})();var statearr_87597_87625 = state_87594__$1;(statearr_87597_87625[2] = null);
(statearr_87597_87625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87595 === 2))
{var state_87594__$1 = state_87594;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_87594__$1,4,ch);
} else
{if((state_val_87595 === 3))
{var inst_87592 = (state_87594[2]);var state_87594__$1 = state_87594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_87594__$1,inst_87592);
} else
{if((state_val_87595 === 4))
{var inst_87558 = (state_87594[9]);var inst_87558__$1 = (state_87594[2]);var inst_87559 = (inst_87558__$1 == null);var inst_87560 = cljs.core.not.call(null,inst_87559);var state_87594__$1 = (function (){var statearr_87598 = state_87594;(statearr_87598[9] = inst_87558__$1);
return statearr_87598;
})();if(inst_87560)
{var statearr_87599_87626 = state_87594__$1;(statearr_87599_87626[1] = 5);
} else
{var statearr_87600_87627 = state_87594__$1;(statearr_87600_87627[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87595 === 5))
{var inst_87555 = (state_87594[8]);var inst_87562 = (state_87594[10]);var inst_87558 = (state_87594[9]);var inst_87562__$1 = f.call(null,inst_87558);var inst_87563 = cljs.core._EQ_.call(null,inst_87562__$1,inst_87555);var inst_87564 = cljs.core.keyword_identical_QMARK_.call(null,inst_87555,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_87565 = (inst_87563) || (inst_87564);var state_87594__$1 = (function (){var statearr_87601 = state_87594;(statearr_87601[10] = inst_87562__$1);
return statearr_87601;
})();if(cljs.core.truth_(inst_87565))
{var statearr_87602_87628 = state_87594__$1;(statearr_87602_87628[1] = 8);
} else
{var statearr_87603_87629 = state_87594__$1;(statearr_87603_87629[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87595 === 6))
{var inst_87554 = (state_87594[7]);var inst_87579 = inst_87554.length;var inst_87580 = (inst_87579 > 0);var state_87594__$1 = state_87594;if(cljs.core.truth_(inst_87580))
{var statearr_87605_87630 = state_87594__$1;(statearr_87605_87630[1] = 12);
} else
{var statearr_87606_87631 = state_87594__$1;(statearr_87606_87631[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87595 === 7))
{var inst_87590 = (state_87594[2]);var state_87594__$1 = state_87594;var statearr_87607_87632 = state_87594__$1;(statearr_87607_87632[2] = inst_87590);
(statearr_87607_87632[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87595 === 8))
{var inst_87554 = (state_87594[7]);var inst_87562 = (state_87594[10]);var inst_87558 = (state_87594[9]);var inst_87567 = inst_87554.push(inst_87558);var tmp87604 = inst_87554;var inst_87554__$1 = tmp87604;var inst_87555 = inst_87562;var state_87594__$1 = (function (){var statearr_87608 = state_87594;(statearr_87608[7] = inst_87554__$1);
(statearr_87608[8] = inst_87555);
(statearr_87608[11] = inst_87567);
return statearr_87608;
})();var statearr_87609_87633 = state_87594__$1;(statearr_87609_87633[2] = null);
(statearr_87609_87633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87595 === 9))
{var inst_87554 = (state_87594[7]);var inst_87570 = cljs.core.vec.call(null,inst_87554);var state_87594__$1 = state_87594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87594__$1,11,out,inst_87570);
} else
{if((state_val_87595 === 10))
{var inst_87577 = (state_87594[2]);var state_87594__$1 = state_87594;var statearr_87610_87634 = state_87594__$1;(statearr_87610_87634[2] = inst_87577);
(statearr_87610_87634[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87595 === 11))
{var inst_87562 = (state_87594[10]);var inst_87558 = (state_87594[9]);var inst_87572 = (state_87594[2]);var inst_87573 = [];var inst_87574 = inst_87573.push(inst_87558);var inst_87554 = inst_87573;var inst_87555 = inst_87562;var state_87594__$1 = (function (){var statearr_87611 = state_87594;(statearr_87611[7] = inst_87554);
(statearr_87611[8] = inst_87555);
(statearr_87611[12] = inst_87574);
(statearr_87611[13] = inst_87572);
return statearr_87611;
})();var statearr_87612_87635 = state_87594__$1;(statearr_87612_87635[2] = null);
(statearr_87612_87635[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87595 === 12))
{var inst_87554 = (state_87594[7]);var inst_87582 = cljs.core.vec.call(null,inst_87554);var state_87594__$1 = state_87594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_87594__$1,15,out,inst_87582);
} else
{if((state_val_87595 === 13))
{var state_87594__$1 = state_87594;var statearr_87613_87636 = state_87594__$1;(statearr_87613_87636[2] = null);
(statearr_87613_87636[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87595 === 14))
{var inst_87587 = (state_87594[2]);var inst_87588 = cljs.core.async.close_BANG_.call(null,out);var state_87594__$1 = (function (){var statearr_87614 = state_87594;(statearr_87614[14] = inst_87587);
return statearr_87614;
})();var statearr_87615_87637 = state_87594__$1;(statearr_87615_87637[2] = inst_87588);
(statearr_87615_87637[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_87595 === 15))
{var inst_87584 = (state_87594[2]);var state_87594__$1 = state_87594;var statearr_87616_87638 = state_87594__$1;(statearr_87616_87638[2] = inst_87584);
(statearr_87616_87638[1] = 14);
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
});return ((function (switch__5509__auto__){
return (function() {
var state_machine__5510__auto__ = null;
var state_machine__5510__auto____0 = (function (){var statearr_87620 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_87620[0] = state_machine__5510__auto__);
(statearr_87620[1] = 1);
return statearr_87620;
});
var state_machine__5510__auto____1 = (function (state_87594){while(true){
var ret_value__5511__auto__ = (function (){try{while(true){
var result__5512__auto__ = switch__5509__auto__.call(null,state_87594);if(cljs.core.keyword_identical_QMARK_.call(null,result__5512__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5512__auto__;
}
break;
}
}catch (e87621){if((e87621 instanceof Object))
{var ex__5513__auto__ = e87621;var statearr_87622_87639 = state_87594;(statearr_87622_87639[5] = ex__5513__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_87594);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e87621;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5511__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__87640 = state_87594;
state_87594 = G__87640;
continue;
}
} else
{return ret_value__5511__auto__;
}
break;
}
});
state_machine__5510__auto__ = function(state_87594){
switch(arguments.length){
case 0:
return state_machine__5510__auto____0.call(this);
case 1:
return state_machine__5510__auto____1.call(this,state_87594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5510__auto____0;
state_machine__5510__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5510__auto____1;
return state_machine__5510__auto__;
})()
;})(switch__5509__auto__))
})();var state__5526__auto__ = (function (){var statearr_87623 = f__5525__auto__.call(null);(statearr_87623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5524__auto___87624);
return statearr_87623;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5526__auto__);
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

//# sourceMappingURL=async.js.map
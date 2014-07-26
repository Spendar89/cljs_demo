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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t41263 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41263 = (function (f,fn_handler,meta41264){
this.f = f;
this.fn_handler = fn_handler;
this.meta41264 = meta41264;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41263.cljs$lang$type = true;
cljs.core.async.t41263.cljs$lang$ctorStr = "cljs.core.async/t41263";
cljs.core.async.t41263.cljs$lang$ctorPrWriter = (function (this__15673__auto__,writer__15674__auto__,opt__15675__auto__){return cljs.core._write.call(null,writer__15674__auto__,"cljs.core.async/t41263");
});
cljs.core.async.t41263.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41263.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t41263.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t41263.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41265){var self__ = this;
var _41265__$1 = this;return self__.meta41264;
});
cljs.core.async.t41263.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41265,meta41264__$1){var self__ = this;
var _41265__$1 = this;return (new cljs.core.async.t41263(self__.f,self__.fn_handler,meta41264__$1));
});
cljs.core.async.__GT_t41263 = (function __GT_t41263(f__$1,fn_handler__$1,meta41264){return (new cljs.core.async.t41263(f__$1,fn_handler__$1,meta41264));
});
}
return (new cljs.core.async.t41263(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__41267 = buff;if(G__41267)
{var bit__15756__auto__ = null;if(cljs.core.truth_((function (){var or__15106__auto__ = bit__15756__auto__;if(cljs.core.truth_(or__15106__auto__))
{return or__15106__auto__;
} else
{return G__41267.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__41267.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__41267);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__41267);
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
{var val_41268 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_41268);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_41268);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__15094__auto__ = ret;if(cljs.core.truth_(and__15094__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__15094__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15954__auto___41269 = n;var x_41270 = 0;while(true){
if((x_41270 < n__15954__auto___41269))
{(a[x_41270] = 0);
{
var G__41271 = (x_41270 + 1);
x_41270 = G__41271;
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
var G__41272 = (i + 1);
i = G__41272;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t41276 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41276 = (function (flag,alt_flag,meta41277){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta41277 = meta41277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41276.cljs$lang$type = true;
cljs.core.async.t41276.cljs$lang$ctorStr = "cljs.core.async/t41276";
cljs.core.async.t41276.cljs$lang$ctorPrWriter = (function (this__15673__auto__,writer__15674__auto__,opt__15675__auto__){return cljs.core._write.call(null,writer__15674__auto__,"cljs.core.async/t41276");
});
cljs.core.async.t41276.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41276.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t41276.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t41276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41278){var self__ = this;
var _41278__$1 = this;return self__.meta41277;
});
cljs.core.async.t41276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41278,meta41277__$1){var self__ = this;
var _41278__$1 = this;return (new cljs.core.async.t41276(self__.flag,self__.alt_flag,meta41277__$1));
});
cljs.core.async.__GT_t41276 = (function __GT_t41276(flag__$1,alt_flag__$1,meta41277){return (new cljs.core.async.t41276(flag__$1,alt_flag__$1,meta41277));
});
}
return (new cljs.core.async.t41276(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t41282 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41282 = (function (cb,flag,alt_handler,meta41283){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta41283 = meta41283;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41282.cljs$lang$type = true;
cljs.core.async.t41282.cljs$lang$ctorStr = "cljs.core.async/t41282";
cljs.core.async.t41282.cljs$lang$ctorPrWriter = (function (this__15673__auto__,writer__15674__auto__,opt__15675__auto__){return cljs.core._write.call(null,writer__15674__auto__,"cljs.core.async/t41282");
});
cljs.core.async.t41282.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41282.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t41282.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t41282.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41284){var self__ = this;
var _41284__$1 = this;return self__.meta41283;
});
cljs.core.async.t41282.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41284,meta41283__$1){var self__ = this;
var _41284__$1 = this;return (new cljs.core.async.t41282(self__.cb,self__.flag,self__.alt_handler,meta41283__$1));
});
cljs.core.async.__GT_t41282 = (function __GT_t41282(cb__$1,flag__$1,alt_handler__$1,meta41283){return (new cljs.core.async.t41282(cb__$1,flag__$1,alt_handler__$1,meta41283));
});
}
return (new cljs.core.async.t41282(cb,flag,alt_handler,null));
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
return (function (p1__41285_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41285_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__15106__auto__ = wport;if(cljs.core.truth_(or__15106__auto__))
{return or__15106__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__41286 = (i + 1);
i = G__41286;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__15106__auto__ = ret;if(cljs.core.truth_(or__15106__auto__))
{return or__15106__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__15094__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__15094__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__15094__auto__;
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
var alts_BANG___delegate = function (ports,p__41287){var map__41289 = p__41287;var map__41289__$1 = ((cljs.core.seq_QMARK_.call(null,map__41289))?cljs.core.apply.call(null,cljs.core.hash_map,map__41289):map__41289);var opts = map__41289__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__41287 = null;if (arguments.length > 1) {
  p__41287 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__41287);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__41290){
var ports = cljs.core.first(arglist__41290);
var p__41287 = cljs.core.rest(arglist__41290);
return alts_BANG___delegate(ports,p__41287);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t41298 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41298 = (function (ch,f,map_LT_,meta41299){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta41299 = meta41299;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41298.cljs$lang$type = true;
cljs.core.async.t41298.cljs$lang$ctorStr = "cljs.core.async/t41298";
cljs.core.async.t41298.cljs$lang$ctorPrWriter = (function (this__15673__auto__,writer__15674__auto__,opt__15675__auto__){return cljs.core._write.call(null,writer__15674__auto__,"cljs.core.async/t41298");
});
cljs.core.async.t41298.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41298.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t41298.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41298.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t41301 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41301 = (function (fn1,_,meta41299,ch,f,map_LT_,meta41302){
this.fn1 = fn1;
this._ = _;
this.meta41299 = meta41299;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta41302 = meta41302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41301.cljs$lang$type = true;
cljs.core.async.t41301.cljs$lang$ctorStr = "cljs.core.async/t41301";
cljs.core.async.t41301.cljs$lang$ctorPrWriter = (function (this__15673__auto__,writer__15674__auto__,opt__15675__auto__){return cljs.core._write.call(null,writer__15674__auto__,"cljs.core.async/t41301");
});
cljs.core.async.t41301.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41301.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t41301.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t41301.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__41291_SHARP_){return f1.call(null,(((p1__41291_SHARP_ == null))?null:self__.f.call(null,p1__41291_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t41301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41303){var self__ = this;
var _41303__$1 = this;return self__.meta41302;
});
cljs.core.async.t41301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41303,meta41302__$1){var self__ = this;
var _41303__$1 = this;return (new cljs.core.async.t41301(self__.fn1,self__._,self__.meta41299,self__.ch,self__.f,self__.map_LT_,meta41302__$1));
});
cljs.core.async.__GT_t41301 = (function __GT_t41301(fn1__$1,___$2,meta41299__$1,ch__$2,f__$2,map_LT___$2,meta41302){return (new cljs.core.async.t41301(fn1__$1,___$2,meta41299__$1,ch__$2,f__$2,map_LT___$2,meta41302));
});
}
return (new cljs.core.async.t41301(fn1,___$1,self__.meta41299,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__15094__auto__ = ret;if(cljs.core.truth_(and__15094__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__15094__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t41298.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41298.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t41298.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41300){var self__ = this;
var _41300__$1 = this;return self__.meta41299;
});
cljs.core.async.t41298.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41300,meta41299__$1){var self__ = this;
var _41300__$1 = this;return (new cljs.core.async.t41298(self__.ch,self__.f,self__.map_LT_,meta41299__$1));
});
cljs.core.async.__GT_t41298 = (function __GT_t41298(ch__$1,f__$1,map_LT___$1,meta41299){return (new cljs.core.async.t41298(ch__$1,f__$1,map_LT___$1,meta41299));
});
}
return (new cljs.core.async.t41298(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t41307 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41307 = (function (ch,f,map_GT_,meta41308){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta41308 = meta41308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41307.cljs$lang$type = true;
cljs.core.async.t41307.cljs$lang$ctorStr = "cljs.core.async/t41307";
cljs.core.async.t41307.cljs$lang$ctorPrWriter = (function (this__15673__auto__,writer__15674__auto__,opt__15675__auto__){return cljs.core._write.call(null,writer__15674__auto__,"cljs.core.async/t41307");
});
cljs.core.async.t41307.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t41307.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t41307.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t41307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41309){var self__ = this;
var _41309__$1 = this;return self__.meta41308;
});
cljs.core.async.t41307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41309,meta41308__$1){var self__ = this;
var _41309__$1 = this;return (new cljs.core.async.t41307(self__.ch,self__.f,self__.map_GT_,meta41308__$1));
});
cljs.core.async.__GT_t41307 = (function __GT_t41307(ch__$1,f__$1,map_GT___$1,meta41308){return (new cljs.core.async.t41307(ch__$1,f__$1,map_GT___$1,meta41308));
});
}
return (new cljs.core.async.t41307(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t41313 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41313 = (function (ch,p,filter_GT_,meta41314){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta41314 = meta41314;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41313.cljs$lang$type = true;
cljs.core.async.t41313.cljs$lang$ctorStr = "cljs.core.async/t41313";
cljs.core.async.t41313.cljs$lang$ctorPrWriter = (function (this__15673__auto__,writer__15674__auto__,opt__15675__auto__){return cljs.core._write.call(null,writer__15674__auto__,"cljs.core.async/t41313");
});
cljs.core.async.t41313.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41313.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t41313.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41313.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t41313.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41313.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t41313.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41315){var self__ = this;
var _41315__$1 = this;return self__.meta41314;
});
cljs.core.async.t41313.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41315,meta41314__$1){var self__ = this;
var _41315__$1 = this;return (new cljs.core.async.t41313(self__.ch,self__.p,self__.filter_GT_,meta41314__$1));
});
cljs.core.async.__GT_t41313 = (function __GT_t41313(ch__$1,p__$1,filter_GT___$1,meta41314){return (new cljs.core.async.t41313(ch__$1,p__$1,filter_GT___$1,meta41314));
});
}
return (new cljs.core.async.t41313(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__27289__auto___41398 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_41377){var state_val_41378 = (state_41377[1]);if((state_val_41378 === 7))
{var inst_41373 = (state_41377[2]);var state_41377__$1 = state_41377;var statearr_41379_41399 = state_41377__$1;(statearr_41379_41399[2] = inst_41373);
(statearr_41379_41399[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41378 === 1))
{var state_41377__$1 = state_41377;var statearr_41380_41400 = state_41377__$1;(statearr_41380_41400[2] = null);
(statearr_41380_41400[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41378 === 4))
{var inst_41359 = (state_41377[7]);var inst_41359__$1 = (state_41377[2]);var inst_41360 = (inst_41359__$1 == null);var state_41377__$1 = (function (){var statearr_41381 = state_41377;(statearr_41381[7] = inst_41359__$1);
return statearr_41381;
})();if(cljs.core.truth_(inst_41360))
{var statearr_41382_41401 = state_41377__$1;(statearr_41382_41401[1] = 5);
} else
{var statearr_41383_41402 = state_41377__$1;(statearr_41383_41402[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41378 === 6))
{var inst_41359 = (state_41377[7]);var inst_41364 = p.call(null,inst_41359);var state_41377__$1 = state_41377;if(cljs.core.truth_(inst_41364))
{var statearr_41384_41403 = state_41377__$1;(statearr_41384_41403[1] = 8);
} else
{var statearr_41385_41404 = state_41377__$1;(statearr_41385_41404[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41378 === 3))
{var inst_41375 = (state_41377[2]);var state_41377__$1 = state_41377;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41377__$1,inst_41375);
} else
{if((state_val_41378 === 2))
{var state_41377__$1 = state_41377;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41377__$1,4,ch);
} else
{if((state_val_41378 === 11))
{var inst_41367 = (state_41377[2]);var state_41377__$1 = state_41377;var statearr_41386_41405 = state_41377__$1;(statearr_41386_41405[2] = inst_41367);
(statearr_41386_41405[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41378 === 9))
{var state_41377__$1 = state_41377;var statearr_41387_41406 = state_41377__$1;(statearr_41387_41406[2] = null);
(statearr_41387_41406[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41378 === 5))
{var inst_41362 = cljs.core.async.close_BANG_.call(null,out);var state_41377__$1 = state_41377;var statearr_41388_41407 = state_41377__$1;(statearr_41388_41407[2] = inst_41362);
(statearr_41388_41407[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41378 === 10))
{var inst_41370 = (state_41377[2]);var state_41377__$1 = (function (){var statearr_41389 = state_41377;(statearr_41389[8] = inst_41370);
return statearr_41389;
})();var statearr_41390_41408 = state_41377__$1;(statearr_41390_41408[2] = null);
(statearr_41390_41408[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41378 === 8))
{var inst_41359 = (state_41377[7]);var state_41377__$1 = state_41377;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41377__$1,11,out,inst_41359);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_41394 = [null,null,null,null,null,null,null,null,null];(statearr_41394[0] = state_machine__27226__auto__);
(statearr_41394[1] = 1);
return statearr_41394;
});
var state_machine__27226__auto____1 = (function (state_41377){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_41377);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e41395){if((e41395 instanceof Object))
{var ex__27229__auto__ = e41395;var statearr_41396_41409 = state_41377;(statearr_41396_41409[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41377);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41395;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41410 = state_41377;
state_41377 = G__41410;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_41377){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_41377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_41397 = f__27290__auto__.call(null);(statearr_41397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___41398);
return statearr_41397;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__27289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_41562){var state_val_41563 = (state_41562[1]);if((state_val_41563 === 7))
{var inst_41558 = (state_41562[2]);var state_41562__$1 = state_41562;var statearr_41564_41601 = state_41562__$1;(statearr_41564_41601[2] = inst_41558);
(statearr_41564_41601[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 20))
{var inst_41533 = (state_41562[7]);var inst_41544 = (state_41562[2]);var inst_41545 = cljs.core.next.call(null,inst_41533);var inst_41519 = inst_41545;var inst_41520 = null;var inst_41521 = 0;var inst_41522 = 0;var state_41562__$1 = (function (){var statearr_41565 = state_41562;(statearr_41565[8] = inst_41544);
(statearr_41565[9] = inst_41520);
(statearr_41565[10] = inst_41521);
(statearr_41565[11] = inst_41522);
(statearr_41565[12] = inst_41519);
return statearr_41565;
})();var statearr_41566_41602 = state_41562__$1;(statearr_41566_41602[2] = null);
(statearr_41566_41602[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 1))
{var state_41562__$1 = state_41562;var statearr_41567_41603 = state_41562__$1;(statearr_41567_41603[2] = null);
(statearr_41567_41603[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 4))
{var inst_41508 = (state_41562[13]);var inst_41508__$1 = (state_41562[2]);var inst_41509 = (inst_41508__$1 == null);var state_41562__$1 = (function (){var statearr_41571 = state_41562;(statearr_41571[13] = inst_41508__$1);
return statearr_41571;
})();if(cljs.core.truth_(inst_41509))
{var statearr_41572_41604 = state_41562__$1;(statearr_41572_41604[1] = 5);
} else
{var statearr_41573_41605 = state_41562__$1;(statearr_41573_41605[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 15))
{var state_41562__$1 = state_41562;var statearr_41574_41606 = state_41562__$1;(statearr_41574_41606[2] = null);
(statearr_41574_41606[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 13))
{var inst_41520 = (state_41562[9]);var inst_41521 = (state_41562[10]);var inst_41522 = (state_41562[11]);var inst_41519 = (state_41562[12]);var inst_41529 = (state_41562[2]);var inst_41530 = (inst_41522 + 1);var tmp41568 = inst_41520;var tmp41569 = inst_41521;var tmp41570 = inst_41519;var inst_41519__$1 = tmp41570;var inst_41520__$1 = tmp41568;var inst_41521__$1 = tmp41569;var inst_41522__$1 = inst_41530;var state_41562__$1 = (function (){var statearr_41575 = state_41562;(statearr_41575[14] = inst_41529);
(statearr_41575[9] = inst_41520__$1);
(statearr_41575[10] = inst_41521__$1);
(statearr_41575[11] = inst_41522__$1);
(statearr_41575[12] = inst_41519__$1);
return statearr_41575;
})();var statearr_41576_41607 = state_41562__$1;(statearr_41576_41607[2] = null);
(statearr_41576_41607[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 6))
{var inst_41508 = (state_41562[13]);var inst_41513 = f.call(null,inst_41508);var inst_41518 = cljs.core.seq.call(null,inst_41513);var inst_41519 = inst_41518;var inst_41520 = null;var inst_41521 = 0;var inst_41522 = 0;var state_41562__$1 = (function (){var statearr_41577 = state_41562;(statearr_41577[9] = inst_41520);
(statearr_41577[10] = inst_41521);
(statearr_41577[11] = inst_41522);
(statearr_41577[12] = inst_41519);
return statearr_41577;
})();var statearr_41578_41608 = state_41562__$1;(statearr_41578_41608[2] = null);
(statearr_41578_41608[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 17))
{var inst_41533 = (state_41562[7]);var inst_41537 = cljs.core.chunk_first.call(null,inst_41533);var inst_41538 = cljs.core.chunk_rest.call(null,inst_41533);var inst_41539 = cljs.core.count.call(null,inst_41537);var inst_41519 = inst_41538;var inst_41520 = inst_41537;var inst_41521 = inst_41539;var inst_41522 = 0;var state_41562__$1 = (function (){var statearr_41579 = state_41562;(statearr_41579[9] = inst_41520);
(statearr_41579[10] = inst_41521);
(statearr_41579[11] = inst_41522);
(statearr_41579[12] = inst_41519);
return statearr_41579;
})();var statearr_41580_41609 = state_41562__$1;(statearr_41580_41609[2] = null);
(statearr_41580_41609[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 3))
{var inst_41560 = (state_41562[2]);var state_41562__$1 = state_41562;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41562__$1,inst_41560);
} else
{if((state_val_41563 === 12))
{var inst_41553 = (state_41562[2]);var state_41562__$1 = state_41562;var statearr_41581_41610 = state_41562__$1;(statearr_41581_41610[2] = inst_41553);
(statearr_41581_41610[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 2))
{var state_41562__$1 = state_41562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41562__$1,4,in$);
} else
{if((state_val_41563 === 19))
{var inst_41548 = (state_41562[2]);var state_41562__$1 = state_41562;var statearr_41582_41611 = state_41562__$1;(statearr_41582_41611[2] = inst_41548);
(statearr_41582_41611[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 11))
{var inst_41533 = (state_41562[7]);var inst_41519 = (state_41562[12]);var inst_41533__$1 = cljs.core.seq.call(null,inst_41519);var state_41562__$1 = (function (){var statearr_41583 = state_41562;(statearr_41583[7] = inst_41533__$1);
return statearr_41583;
})();if(inst_41533__$1)
{var statearr_41584_41612 = state_41562__$1;(statearr_41584_41612[1] = 14);
} else
{var statearr_41585_41613 = state_41562__$1;(statearr_41585_41613[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 9))
{var inst_41555 = (state_41562[2]);var state_41562__$1 = (function (){var statearr_41586 = state_41562;(statearr_41586[15] = inst_41555);
return statearr_41586;
})();var statearr_41587_41614 = state_41562__$1;(statearr_41587_41614[2] = null);
(statearr_41587_41614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 5))
{var inst_41511 = cljs.core.async.close_BANG_.call(null,out);var state_41562__$1 = state_41562;var statearr_41588_41615 = state_41562__$1;(statearr_41588_41615[2] = inst_41511);
(statearr_41588_41615[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 14))
{var inst_41533 = (state_41562[7]);var inst_41535 = cljs.core.chunked_seq_QMARK_.call(null,inst_41533);var state_41562__$1 = state_41562;if(inst_41535)
{var statearr_41589_41616 = state_41562__$1;(statearr_41589_41616[1] = 17);
} else
{var statearr_41590_41617 = state_41562__$1;(statearr_41590_41617[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 16))
{var inst_41551 = (state_41562[2]);var state_41562__$1 = state_41562;var statearr_41591_41618 = state_41562__$1;(statearr_41591_41618[2] = inst_41551);
(statearr_41591_41618[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41563 === 10))
{var inst_41520 = (state_41562[9]);var inst_41522 = (state_41562[11]);var inst_41527 = cljs.core._nth.call(null,inst_41520,inst_41522);var state_41562__$1 = state_41562;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41562__$1,13,out,inst_41527);
} else
{if((state_val_41563 === 18))
{var inst_41533 = (state_41562[7]);var inst_41542 = cljs.core.first.call(null,inst_41533);var state_41562__$1 = state_41562;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41562__$1,20,out,inst_41542);
} else
{if((state_val_41563 === 8))
{var inst_41521 = (state_41562[10]);var inst_41522 = (state_41562[11]);var inst_41524 = (inst_41522 < inst_41521);var inst_41525 = inst_41524;var state_41562__$1 = state_41562;if(cljs.core.truth_(inst_41525))
{var statearr_41592_41619 = state_41562__$1;(statearr_41592_41619[1] = 10);
} else
{var statearr_41593_41620 = state_41562__$1;(statearr_41593_41620[1] = 11);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_41597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_41597[0] = state_machine__27226__auto__);
(statearr_41597[1] = 1);
return statearr_41597;
});
var state_machine__27226__auto____1 = (function (state_41562){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_41562);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e41598){if((e41598 instanceof Object))
{var ex__27229__auto__ = e41598;var statearr_41599_41621 = state_41562;(statearr_41599_41621[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41562);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41622 = state_41562;
state_41562 = G__41622;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_41562){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_41562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_41600 = f__27290__auto__.call(null);(statearr_41600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto__);
return statearr_41600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
}));
return c__27289__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__27289__auto___41703 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_41682){var state_val_41683 = (state_41682[1]);if((state_val_41683 === 7))
{var inst_41678 = (state_41682[2]);var state_41682__$1 = state_41682;var statearr_41684_41704 = state_41682__$1;(statearr_41684_41704[2] = inst_41678);
(statearr_41684_41704[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41683 === 1))
{var state_41682__$1 = state_41682;var statearr_41685_41705 = state_41682__$1;(statearr_41685_41705[2] = null);
(statearr_41685_41705[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41683 === 4))
{var inst_41665 = (state_41682[7]);var inst_41665__$1 = (state_41682[2]);var inst_41666 = (inst_41665__$1 == null);var state_41682__$1 = (function (){var statearr_41686 = state_41682;(statearr_41686[7] = inst_41665__$1);
return statearr_41686;
})();if(cljs.core.truth_(inst_41666))
{var statearr_41687_41706 = state_41682__$1;(statearr_41687_41706[1] = 5);
} else
{var statearr_41688_41707 = state_41682__$1;(statearr_41688_41707[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41683 === 6))
{var inst_41665 = (state_41682[7]);var state_41682__$1 = state_41682;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41682__$1,11,to,inst_41665);
} else
{if((state_val_41683 === 3))
{var inst_41680 = (state_41682[2]);var state_41682__$1 = state_41682;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41682__$1,inst_41680);
} else
{if((state_val_41683 === 2))
{var state_41682__$1 = state_41682;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41682__$1,4,from);
} else
{if((state_val_41683 === 11))
{var inst_41675 = (state_41682[2]);var state_41682__$1 = (function (){var statearr_41689 = state_41682;(statearr_41689[8] = inst_41675);
return statearr_41689;
})();var statearr_41690_41708 = state_41682__$1;(statearr_41690_41708[2] = null);
(statearr_41690_41708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41683 === 9))
{var state_41682__$1 = state_41682;var statearr_41691_41709 = state_41682__$1;(statearr_41691_41709[2] = null);
(statearr_41691_41709[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41683 === 5))
{var state_41682__$1 = state_41682;if(cljs.core.truth_(close_QMARK_))
{var statearr_41692_41710 = state_41682__$1;(statearr_41692_41710[1] = 8);
} else
{var statearr_41693_41711 = state_41682__$1;(statearr_41693_41711[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41683 === 10))
{var inst_41672 = (state_41682[2]);var state_41682__$1 = state_41682;var statearr_41694_41712 = state_41682__$1;(statearr_41694_41712[2] = inst_41672);
(statearr_41694_41712[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41683 === 8))
{var inst_41669 = cljs.core.async.close_BANG_.call(null,to);var state_41682__$1 = state_41682;var statearr_41695_41713 = state_41682__$1;(statearr_41695_41713[2] = inst_41669);
(statearr_41695_41713[1] = 10);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_41699 = [null,null,null,null,null,null,null,null,null];(statearr_41699[0] = state_machine__27226__auto__);
(statearr_41699[1] = 1);
return statearr_41699;
});
var state_machine__27226__auto____1 = (function (state_41682){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_41682);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e41700){if((e41700 instanceof Object))
{var ex__27229__auto__ = e41700;var statearr_41701_41714 = state_41682;(statearr_41701_41714[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41682);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41700;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41715 = state_41682;
state_41682 = G__41715;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_41682){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_41682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_41702 = f__27290__auto__.call(null);(statearr_41702[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___41703);
return statearr_41702;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__27289__auto___41802 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_41780){var state_val_41781 = (state_41780[1]);if((state_val_41781 === 7))
{var inst_41776 = (state_41780[2]);var state_41780__$1 = state_41780;var statearr_41782_41803 = state_41780__$1;(statearr_41782_41803[2] = inst_41776);
(statearr_41782_41803[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41781 === 1))
{var state_41780__$1 = state_41780;var statearr_41783_41804 = state_41780__$1;(statearr_41783_41804[2] = null);
(statearr_41783_41804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41781 === 4))
{var inst_41761 = (state_41780[7]);var inst_41761__$1 = (state_41780[2]);var inst_41762 = (inst_41761__$1 == null);var state_41780__$1 = (function (){var statearr_41784 = state_41780;(statearr_41784[7] = inst_41761__$1);
return statearr_41784;
})();if(cljs.core.truth_(inst_41762))
{var statearr_41785_41805 = state_41780__$1;(statearr_41785_41805[1] = 5);
} else
{var statearr_41786_41806 = state_41780__$1;(statearr_41786_41806[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41781 === 6))
{var inst_41761 = (state_41780[7]);var inst_41767 = p.call(null,inst_41761);var state_41780__$1 = state_41780;if(cljs.core.truth_(inst_41767))
{var statearr_41787_41807 = state_41780__$1;(statearr_41787_41807[1] = 9);
} else
{var statearr_41788_41808 = state_41780__$1;(statearr_41788_41808[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41781 === 3))
{var inst_41778 = (state_41780[2]);var state_41780__$1 = state_41780;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41780__$1,inst_41778);
} else
{if((state_val_41781 === 2))
{var state_41780__$1 = state_41780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41780__$1,4,ch);
} else
{if((state_val_41781 === 11))
{var inst_41761 = (state_41780[7]);var inst_41771 = (state_41780[2]);var state_41780__$1 = state_41780;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41780__$1,8,inst_41771,inst_41761);
} else
{if((state_val_41781 === 9))
{var state_41780__$1 = state_41780;var statearr_41789_41809 = state_41780__$1;(statearr_41789_41809[2] = tc);
(statearr_41789_41809[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41781 === 5))
{var inst_41764 = cljs.core.async.close_BANG_.call(null,tc);var inst_41765 = cljs.core.async.close_BANG_.call(null,fc);var state_41780__$1 = (function (){var statearr_41790 = state_41780;(statearr_41790[8] = inst_41764);
return statearr_41790;
})();var statearr_41791_41810 = state_41780__$1;(statearr_41791_41810[2] = inst_41765);
(statearr_41791_41810[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41781 === 10))
{var state_41780__$1 = state_41780;var statearr_41792_41811 = state_41780__$1;(statearr_41792_41811[2] = fc);
(statearr_41792_41811[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41781 === 8))
{var inst_41773 = (state_41780[2]);var state_41780__$1 = (function (){var statearr_41793 = state_41780;(statearr_41793[9] = inst_41773);
return statearr_41793;
})();var statearr_41794_41812 = state_41780__$1;(statearr_41794_41812[2] = null);
(statearr_41794_41812[1] = 2);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_41798 = [null,null,null,null,null,null,null,null,null,null];(statearr_41798[0] = state_machine__27226__auto__);
(statearr_41798[1] = 1);
return statearr_41798;
});
var state_machine__27226__auto____1 = (function (state_41780){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_41780);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e41799){if((e41799 instanceof Object))
{var ex__27229__auto__ = e41799;var statearr_41800_41813 = state_41780;(statearr_41800_41813[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41780);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41814 = state_41780;
state_41780 = G__41814;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_41780){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_41780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_41801 = f__27290__auto__.call(null);(statearr_41801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___41802);
return statearr_41801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__27289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_41861){var state_val_41862 = (state_41861[1]);if((state_val_41862 === 7))
{var inst_41857 = (state_41861[2]);var state_41861__$1 = state_41861;var statearr_41863_41879 = state_41861__$1;(statearr_41863_41879[2] = inst_41857);
(statearr_41863_41879[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41862 === 6))
{var inst_41847 = (state_41861[7]);var inst_41850 = (state_41861[8]);var inst_41854 = f.call(null,inst_41847,inst_41850);var inst_41847__$1 = inst_41854;var state_41861__$1 = (function (){var statearr_41864 = state_41861;(statearr_41864[7] = inst_41847__$1);
return statearr_41864;
})();var statearr_41865_41880 = state_41861__$1;(statearr_41865_41880[2] = null);
(statearr_41865_41880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41862 === 5))
{var inst_41847 = (state_41861[7]);var state_41861__$1 = state_41861;var statearr_41866_41881 = state_41861__$1;(statearr_41866_41881[2] = inst_41847);
(statearr_41866_41881[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41862 === 4))
{var inst_41850 = (state_41861[8]);var inst_41850__$1 = (state_41861[2]);var inst_41851 = (inst_41850__$1 == null);var state_41861__$1 = (function (){var statearr_41867 = state_41861;(statearr_41867[8] = inst_41850__$1);
return statearr_41867;
})();if(cljs.core.truth_(inst_41851))
{var statearr_41868_41882 = state_41861__$1;(statearr_41868_41882[1] = 5);
} else
{var statearr_41869_41883 = state_41861__$1;(statearr_41869_41883[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41862 === 3))
{var inst_41859 = (state_41861[2]);var state_41861__$1 = state_41861;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41861__$1,inst_41859);
} else
{if((state_val_41862 === 2))
{var state_41861__$1 = state_41861;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41861__$1,4,ch);
} else
{if((state_val_41862 === 1))
{var inst_41847 = init;var state_41861__$1 = (function (){var statearr_41870 = state_41861;(statearr_41870[7] = inst_41847);
return statearr_41870;
})();var statearr_41871_41884 = state_41861__$1;(statearr_41871_41884[2] = null);
(statearr_41871_41884[1] = 2);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_41875 = [null,null,null,null,null,null,null,null,null];(statearr_41875[0] = state_machine__27226__auto__);
(statearr_41875[1] = 1);
return statearr_41875;
});
var state_machine__27226__auto____1 = (function (state_41861){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_41861);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e41876){if((e41876 instanceof Object))
{var ex__27229__auto__ = e41876;var statearr_41877_41885 = state_41861;(statearr_41877_41885[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41861);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41876;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41886 = state_41861;
state_41861 = G__41886;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_41861){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_41861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_41878 = f__27290__auto__.call(null);(statearr_41878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto__);
return statearr_41878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
}));
return c__27289__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__27289__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_41948){var state_val_41949 = (state_41948[1]);if((state_val_41949 === 7))
{var inst_41929 = (state_41948[7]);var inst_41934 = (state_41948[2]);var inst_41935 = cljs.core.next.call(null,inst_41929);var inst_41929__$1 = inst_41935;var state_41948__$1 = (function (){var statearr_41950 = state_41948;(statearr_41950[7] = inst_41929__$1);
(statearr_41950[8] = inst_41934);
return statearr_41950;
})();var statearr_41951_41969 = state_41948__$1;(statearr_41951_41969[2] = null);
(statearr_41951_41969[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41949 === 1))
{var inst_41928 = cljs.core.seq.call(null,coll);var inst_41929 = inst_41928;var state_41948__$1 = (function (){var statearr_41952 = state_41948;(statearr_41952[7] = inst_41929);
return statearr_41952;
})();var statearr_41953_41970 = state_41948__$1;(statearr_41953_41970[2] = null);
(statearr_41953_41970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41949 === 4))
{var inst_41929 = (state_41948[7]);var inst_41932 = cljs.core.first.call(null,inst_41929);var state_41948__$1 = state_41948;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41948__$1,7,ch,inst_41932);
} else
{if((state_val_41949 === 6))
{var inst_41944 = (state_41948[2]);var state_41948__$1 = state_41948;var statearr_41954_41971 = state_41948__$1;(statearr_41954_41971[2] = inst_41944);
(statearr_41954_41971[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41949 === 3))
{var inst_41946 = (state_41948[2]);var state_41948__$1 = state_41948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41948__$1,inst_41946);
} else
{if((state_val_41949 === 2))
{var inst_41929 = (state_41948[7]);var state_41948__$1 = state_41948;if(cljs.core.truth_(inst_41929))
{var statearr_41955_41972 = state_41948__$1;(statearr_41955_41972[1] = 4);
} else
{var statearr_41956_41973 = state_41948__$1;(statearr_41956_41973[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41949 === 9))
{var state_41948__$1 = state_41948;var statearr_41957_41974 = state_41948__$1;(statearr_41957_41974[2] = null);
(statearr_41957_41974[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41949 === 5))
{var state_41948__$1 = state_41948;if(cljs.core.truth_(close_QMARK_))
{var statearr_41958_41975 = state_41948__$1;(statearr_41958_41975[1] = 8);
} else
{var statearr_41959_41976 = state_41948__$1;(statearr_41959_41976[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41949 === 10))
{var inst_41942 = (state_41948[2]);var state_41948__$1 = state_41948;var statearr_41960_41977 = state_41948__$1;(statearr_41960_41977[2] = inst_41942);
(statearr_41960_41977[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41949 === 8))
{var inst_41939 = cljs.core.async.close_BANG_.call(null,ch);var state_41948__$1 = state_41948;var statearr_41961_41978 = state_41948__$1;(statearr_41961_41978[2] = inst_41939);
(statearr_41961_41978[1] = 10);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_41965 = [null,null,null,null,null,null,null,null,null];(statearr_41965[0] = state_machine__27226__auto__);
(statearr_41965[1] = 1);
return statearr_41965;
});
var state_machine__27226__auto____1 = (function (state_41948){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_41948);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e41966){if((e41966 instanceof Object))
{var ex__27229__auto__ = e41966;var statearr_41967_41979 = state_41948;(statearr_41967_41979[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41948);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41966;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__41980 = state_41948;
state_41948 = G__41980;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_41948){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_41948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_41968 = f__27290__auto__.call(null);(statearr_41968[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto__);
return statearr_41968;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
}));
return c__27289__auto__;
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
cljs.core.async.Mux = (function (){var obj41982 = {};return obj41982;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__15094__auto__ = _;if(and__15094__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__15094__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__15733__auto__ = (((_ == null))?null:_);return (function (){var or__15106__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15733__auto__)]);if(or__15106__auto__)
{return or__15106__auto__;
} else
{var or__15106__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__15106__auto____$1)
{return or__15106__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj41984 = {};return obj41984;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__15094__auto__ = m;if(and__15094__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__15094__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__15733__auto__ = (((m == null))?null:m);return (function (){var or__15106__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15733__auto__)]);if(or__15106__auto__)
{return or__15106__auto__;
} else
{var or__15106__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__15106__auto____$1)
{return or__15106__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__15094__auto__ = m;if(and__15094__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__15094__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__15733__auto__ = (((m == null))?null:m);return (function (){var or__15106__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15733__auto__)]);if(or__15106__auto__)
{return or__15106__auto__;
} else
{var or__15106__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__15106__auto____$1)
{return or__15106__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__15094__auto__ = m;if(and__15094__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__15094__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__15733__auto__ = (((m == null))?null:m);return (function (){var or__15106__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15733__auto__)]);if(or__15106__auto__)
{return or__15106__auto__;
} else
{var or__15106__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__15106__auto____$1)
{return or__15106__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t42208 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42208 = (function (cs,ch,mult,meta42209){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta42209 = meta42209;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42208.cljs$lang$type = true;
cljs.core.async.t42208.cljs$lang$ctorStr = "cljs.core.async/t42208";
cljs.core.async.t42208.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15673__auto__,writer__15674__auto__,opt__15675__auto__){return cljs.core._write.call(null,writer__15674__auto__,"cljs.core.async/t42208");
});})(cs))
;
cljs.core.async.t42208.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t42208.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t42208.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t42208.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t42208.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42208.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t42208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42210){var self__ = this;
var _42210__$1 = this;return self__.meta42209;
});})(cs))
;
cljs.core.async.t42208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42210,meta42209__$1){var self__ = this;
var _42210__$1 = this;return (new cljs.core.async.t42208(self__.cs,self__.ch,self__.mult,meta42209__$1));
});})(cs))
;
cljs.core.async.__GT_t42208 = ((function (cs){
return (function __GT_t42208(cs__$1,ch__$1,mult__$1,meta42209){return (new cljs.core.async.t42208(cs__$1,ch__$1,mult__$1,meta42209));
});})(cs))
;
}
return (new cljs.core.async.t42208(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__27289__auto___42431 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_42345){var state_val_42346 = (state_42345[1]);if((state_val_42346 === 7))
{var inst_42341 = (state_42345[2]);var state_42345__$1 = state_42345;var statearr_42347_42432 = state_42345__$1;(statearr_42347_42432[2] = inst_42341);
(statearr_42347_42432[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 20))
{var inst_42242 = (state_42345[7]);var inst_42252 = cljs.core.first.call(null,inst_42242);var inst_42253 = cljs.core.nth.call(null,inst_42252,0,null);var inst_42254 = cljs.core.nth.call(null,inst_42252,1,null);var state_42345__$1 = (function (){var statearr_42348 = state_42345;(statearr_42348[8] = inst_42253);
return statearr_42348;
})();if(cljs.core.truth_(inst_42254))
{var statearr_42349_42433 = state_42345__$1;(statearr_42349_42433[1] = 22);
} else
{var statearr_42350_42434 = state_42345__$1;(statearr_42350_42434[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 27))
{var inst_42282 = (state_42345[9]);var inst_42284 = (state_42345[10]);var inst_42289 = cljs.core._nth.call(null,inst_42282,inst_42284);var state_42345__$1 = (function (){var statearr_42351 = state_42345;(statearr_42351[11] = inst_42289);
return statearr_42351;
})();var statearr_42352_42435 = state_42345__$1;(statearr_42352_42435[2] = null);
(statearr_42352_42435[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 1))
{var state_42345__$1 = state_42345;var statearr_42353_42436 = state_42345__$1;(statearr_42353_42436[2] = null);
(statearr_42353_42436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 24))
{var inst_42242 = (state_42345[7]);var inst_42259 = (state_42345[2]);var inst_42260 = cljs.core.next.call(null,inst_42242);var inst_42222 = inst_42260;var inst_42223 = null;var inst_42224 = 0;var inst_42225 = 0;var state_42345__$1 = (function (){var statearr_42354 = state_42345;(statearr_42354[12] = inst_42259);
(statearr_42354[13] = inst_42224);
(statearr_42354[14] = inst_42225);
(statearr_42354[15] = inst_42223);
(statearr_42354[16] = inst_42222);
return statearr_42354;
})();var statearr_42355_42437 = state_42345__$1;(statearr_42355_42437[2] = null);
(statearr_42355_42437[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 39))
{var inst_42302 = (state_42345[17]);var inst_42320 = (state_42345[2]);var inst_42321 = cljs.core.next.call(null,inst_42302);var inst_42281 = inst_42321;var inst_42282 = null;var inst_42283 = 0;var inst_42284 = 0;var state_42345__$1 = (function (){var statearr_42359 = state_42345;(statearr_42359[18] = inst_42281);
(statearr_42359[19] = inst_42320);
(statearr_42359[9] = inst_42282);
(statearr_42359[20] = inst_42283);
(statearr_42359[10] = inst_42284);
return statearr_42359;
})();var statearr_42360_42438 = state_42345__$1;(statearr_42360_42438[2] = null);
(statearr_42360_42438[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 4))
{var inst_42213 = (state_42345[21]);var inst_42213__$1 = (state_42345[2]);var inst_42214 = (inst_42213__$1 == null);var state_42345__$1 = (function (){var statearr_42361 = state_42345;(statearr_42361[21] = inst_42213__$1);
return statearr_42361;
})();if(cljs.core.truth_(inst_42214))
{var statearr_42362_42439 = state_42345__$1;(statearr_42362_42439[1] = 5);
} else
{var statearr_42363_42440 = state_42345__$1;(statearr_42363_42440[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 15))
{var inst_42224 = (state_42345[13]);var inst_42225 = (state_42345[14]);var inst_42223 = (state_42345[15]);var inst_42222 = (state_42345[16]);var inst_42238 = (state_42345[2]);var inst_42239 = (inst_42225 + 1);var tmp42356 = inst_42224;var tmp42357 = inst_42223;var tmp42358 = inst_42222;var inst_42222__$1 = tmp42358;var inst_42223__$1 = tmp42357;var inst_42224__$1 = tmp42356;var inst_42225__$1 = inst_42239;var state_42345__$1 = (function (){var statearr_42364 = state_42345;(statearr_42364[13] = inst_42224__$1);
(statearr_42364[22] = inst_42238);
(statearr_42364[14] = inst_42225__$1);
(statearr_42364[15] = inst_42223__$1);
(statearr_42364[16] = inst_42222__$1);
return statearr_42364;
})();var statearr_42365_42441 = state_42345__$1;(statearr_42365_42441[2] = null);
(statearr_42365_42441[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 21))
{var inst_42263 = (state_42345[2]);var state_42345__$1 = state_42345;var statearr_42366_42442 = state_42345__$1;(statearr_42366_42442[2] = inst_42263);
(statearr_42366_42442[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 31))
{var inst_42289 = (state_42345[11]);var inst_42290 = (state_42345[2]);var inst_42291 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_42292 = cljs.core.async.untap_STAR_.call(null,m,inst_42289);var state_42345__$1 = (function (){var statearr_42367 = state_42345;(statearr_42367[23] = inst_42291);
(statearr_42367[24] = inst_42290);
return statearr_42367;
})();var statearr_42368_42443 = state_42345__$1;(statearr_42368_42443[2] = inst_42292);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42345__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 32))
{var inst_42289 = (state_42345[11]);var inst_42213 = (state_42345[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42345,31,Object,null,30);var inst_42296 = cljs.core.async.put_BANG_.call(null,inst_42289,inst_42213,done);var state_42345__$1 = state_42345;var statearr_42369_42444 = state_42345__$1;(statearr_42369_42444[2] = inst_42296);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42345__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 40))
{var inst_42311 = (state_42345[25]);var inst_42312 = (state_42345[2]);var inst_42313 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_42314 = cljs.core.async.untap_STAR_.call(null,m,inst_42311);var state_42345__$1 = (function (){var statearr_42370 = state_42345;(statearr_42370[26] = inst_42313);
(statearr_42370[27] = inst_42312);
return statearr_42370;
})();var statearr_42371_42445 = state_42345__$1;(statearr_42371_42445[2] = inst_42314);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42345__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 33))
{var inst_42302 = (state_42345[17]);var inst_42304 = cljs.core.chunked_seq_QMARK_.call(null,inst_42302);var state_42345__$1 = state_42345;if(inst_42304)
{var statearr_42372_42446 = state_42345__$1;(statearr_42372_42446[1] = 36);
} else
{var statearr_42373_42447 = state_42345__$1;(statearr_42373_42447[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 13))
{var inst_42232 = (state_42345[28]);var inst_42235 = cljs.core.async.close_BANG_.call(null,inst_42232);var state_42345__$1 = state_42345;var statearr_42374_42448 = state_42345__$1;(statearr_42374_42448[2] = inst_42235);
(statearr_42374_42448[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 22))
{var inst_42253 = (state_42345[8]);var inst_42256 = cljs.core.async.close_BANG_.call(null,inst_42253);var state_42345__$1 = state_42345;var statearr_42375_42449 = state_42345__$1;(statearr_42375_42449[2] = inst_42256);
(statearr_42375_42449[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 36))
{var inst_42302 = (state_42345[17]);var inst_42306 = cljs.core.chunk_first.call(null,inst_42302);var inst_42307 = cljs.core.chunk_rest.call(null,inst_42302);var inst_42308 = cljs.core.count.call(null,inst_42306);var inst_42281 = inst_42307;var inst_42282 = inst_42306;var inst_42283 = inst_42308;var inst_42284 = 0;var state_42345__$1 = (function (){var statearr_42376 = state_42345;(statearr_42376[18] = inst_42281);
(statearr_42376[9] = inst_42282);
(statearr_42376[20] = inst_42283);
(statearr_42376[10] = inst_42284);
return statearr_42376;
})();var statearr_42377_42450 = state_42345__$1;(statearr_42377_42450[2] = null);
(statearr_42377_42450[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 41))
{var inst_42311 = (state_42345[25]);var inst_42213 = (state_42345[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42345,40,Object,null,39);var inst_42318 = cljs.core.async.put_BANG_.call(null,inst_42311,inst_42213,done);var state_42345__$1 = state_42345;var statearr_42378_42451 = state_42345__$1;(statearr_42378_42451[2] = inst_42318);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42345__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 43))
{var state_42345__$1 = state_42345;var statearr_42379_42452 = state_42345__$1;(statearr_42379_42452[2] = null);
(statearr_42379_42452[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 29))
{var inst_42329 = (state_42345[2]);var state_42345__$1 = state_42345;var statearr_42380_42453 = state_42345__$1;(statearr_42380_42453[2] = inst_42329);
(statearr_42380_42453[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 44))
{var inst_42338 = (state_42345[2]);var state_42345__$1 = (function (){var statearr_42381 = state_42345;(statearr_42381[29] = inst_42338);
return statearr_42381;
})();var statearr_42382_42454 = state_42345__$1;(statearr_42382_42454[2] = null);
(statearr_42382_42454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 6))
{var inst_42273 = (state_42345[30]);var inst_42272 = cljs.core.deref.call(null,cs);var inst_42273__$1 = cljs.core.keys.call(null,inst_42272);var inst_42274 = cljs.core.count.call(null,inst_42273__$1);var inst_42275 = cljs.core.reset_BANG_.call(null,dctr,inst_42274);var inst_42280 = cljs.core.seq.call(null,inst_42273__$1);var inst_42281 = inst_42280;var inst_42282 = null;var inst_42283 = 0;var inst_42284 = 0;var state_42345__$1 = (function (){var statearr_42383 = state_42345;(statearr_42383[18] = inst_42281);
(statearr_42383[9] = inst_42282);
(statearr_42383[20] = inst_42283);
(statearr_42383[31] = inst_42275);
(statearr_42383[30] = inst_42273__$1);
(statearr_42383[10] = inst_42284);
return statearr_42383;
})();var statearr_42384_42455 = state_42345__$1;(statearr_42384_42455[2] = null);
(statearr_42384_42455[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 28))
{var inst_42281 = (state_42345[18]);var inst_42302 = (state_42345[17]);var inst_42302__$1 = cljs.core.seq.call(null,inst_42281);var state_42345__$1 = (function (){var statearr_42385 = state_42345;(statearr_42385[17] = inst_42302__$1);
return statearr_42385;
})();if(inst_42302__$1)
{var statearr_42386_42456 = state_42345__$1;(statearr_42386_42456[1] = 33);
} else
{var statearr_42387_42457 = state_42345__$1;(statearr_42387_42457[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 25))
{var inst_42283 = (state_42345[20]);var inst_42284 = (state_42345[10]);var inst_42286 = (inst_42284 < inst_42283);var inst_42287 = inst_42286;var state_42345__$1 = state_42345;if(cljs.core.truth_(inst_42287))
{var statearr_42388_42458 = state_42345__$1;(statearr_42388_42458[1] = 27);
} else
{var statearr_42389_42459 = state_42345__$1;(statearr_42389_42459[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 34))
{var state_42345__$1 = state_42345;var statearr_42390_42460 = state_42345__$1;(statearr_42390_42460[2] = null);
(statearr_42390_42460[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 17))
{var state_42345__$1 = state_42345;var statearr_42391_42461 = state_42345__$1;(statearr_42391_42461[2] = null);
(statearr_42391_42461[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 3))
{var inst_42343 = (state_42345[2]);var state_42345__$1 = state_42345;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42345__$1,inst_42343);
} else
{if((state_val_42346 === 12))
{var inst_42268 = (state_42345[2]);var state_42345__$1 = state_42345;var statearr_42392_42462 = state_42345__$1;(statearr_42392_42462[2] = inst_42268);
(statearr_42392_42462[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 2))
{var state_42345__$1 = state_42345;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42345__$1,4,ch);
} else
{if((state_val_42346 === 23))
{var state_42345__$1 = state_42345;var statearr_42393_42463 = state_42345__$1;(statearr_42393_42463[2] = null);
(statearr_42393_42463[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 35))
{var inst_42327 = (state_42345[2]);var state_42345__$1 = state_42345;var statearr_42394_42464 = state_42345__$1;(statearr_42394_42464[2] = inst_42327);
(statearr_42394_42464[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 19))
{var inst_42242 = (state_42345[7]);var inst_42246 = cljs.core.chunk_first.call(null,inst_42242);var inst_42247 = cljs.core.chunk_rest.call(null,inst_42242);var inst_42248 = cljs.core.count.call(null,inst_42246);var inst_42222 = inst_42247;var inst_42223 = inst_42246;var inst_42224 = inst_42248;var inst_42225 = 0;var state_42345__$1 = (function (){var statearr_42395 = state_42345;(statearr_42395[13] = inst_42224);
(statearr_42395[14] = inst_42225);
(statearr_42395[15] = inst_42223);
(statearr_42395[16] = inst_42222);
return statearr_42395;
})();var statearr_42396_42465 = state_42345__$1;(statearr_42396_42465[2] = null);
(statearr_42396_42465[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 11))
{var inst_42242 = (state_42345[7]);var inst_42222 = (state_42345[16]);var inst_42242__$1 = cljs.core.seq.call(null,inst_42222);var state_42345__$1 = (function (){var statearr_42397 = state_42345;(statearr_42397[7] = inst_42242__$1);
return statearr_42397;
})();if(inst_42242__$1)
{var statearr_42398_42466 = state_42345__$1;(statearr_42398_42466[1] = 16);
} else
{var statearr_42399_42467 = state_42345__$1;(statearr_42399_42467[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 9))
{var inst_42270 = (state_42345[2]);var state_42345__$1 = state_42345;var statearr_42400_42468 = state_42345__$1;(statearr_42400_42468[2] = inst_42270);
(statearr_42400_42468[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 5))
{var inst_42220 = cljs.core.deref.call(null,cs);var inst_42221 = cljs.core.seq.call(null,inst_42220);var inst_42222 = inst_42221;var inst_42223 = null;var inst_42224 = 0;var inst_42225 = 0;var state_42345__$1 = (function (){var statearr_42401 = state_42345;(statearr_42401[13] = inst_42224);
(statearr_42401[14] = inst_42225);
(statearr_42401[15] = inst_42223);
(statearr_42401[16] = inst_42222);
return statearr_42401;
})();var statearr_42402_42469 = state_42345__$1;(statearr_42402_42469[2] = null);
(statearr_42402_42469[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 14))
{var state_42345__$1 = state_42345;var statearr_42403_42470 = state_42345__$1;(statearr_42403_42470[2] = null);
(statearr_42403_42470[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 45))
{var inst_42335 = (state_42345[2]);var state_42345__$1 = state_42345;var statearr_42404_42471 = state_42345__$1;(statearr_42404_42471[2] = inst_42335);
(statearr_42404_42471[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 26))
{var inst_42273 = (state_42345[30]);var inst_42331 = (state_42345[2]);var inst_42332 = cljs.core.seq.call(null,inst_42273);var state_42345__$1 = (function (){var statearr_42405 = state_42345;(statearr_42405[32] = inst_42331);
return statearr_42405;
})();if(inst_42332)
{var statearr_42406_42472 = state_42345__$1;(statearr_42406_42472[1] = 42);
} else
{var statearr_42407_42473 = state_42345__$1;(statearr_42407_42473[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 16))
{var inst_42242 = (state_42345[7]);var inst_42244 = cljs.core.chunked_seq_QMARK_.call(null,inst_42242);var state_42345__$1 = state_42345;if(inst_42244)
{var statearr_42411_42474 = state_42345__$1;(statearr_42411_42474[1] = 19);
} else
{var statearr_42412_42475 = state_42345__$1;(statearr_42412_42475[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 38))
{var inst_42324 = (state_42345[2]);var state_42345__$1 = state_42345;var statearr_42413_42476 = state_42345__$1;(statearr_42413_42476[2] = inst_42324);
(statearr_42413_42476[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 30))
{var inst_42281 = (state_42345[18]);var inst_42282 = (state_42345[9]);var inst_42283 = (state_42345[20]);var inst_42284 = (state_42345[10]);var inst_42298 = (state_42345[2]);var inst_42299 = (inst_42284 + 1);var tmp42408 = inst_42281;var tmp42409 = inst_42282;var tmp42410 = inst_42283;var inst_42281__$1 = tmp42408;var inst_42282__$1 = tmp42409;var inst_42283__$1 = tmp42410;var inst_42284__$1 = inst_42299;var state_42345__$1 = (function (){var statearr_42414 = state_42345;(statearr_42414[18] = inst_42281__$1);
(statearr_42414[33] = inst_42298);
(statearr_42414[9] = inst_42282__$1);
(statearr_42414[20] = inst_42283__$1);
(statearr_42414[10] = inst_42284__$1);
return statearr_42414;
})();var statearr_42415_42477 = state_42345__$1;(statearr_42415_42477[2] = null);
(statearr_42415_42477[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 10))
{var inst_42225 = (state_42345[14]);var inst_42223 = (state_42345[15]);var inst_42231 = cljs.core._nth.call(null,inst_42223,inst_42225);var inst_42232 = cljs.core.nth.call(null,inst_42231,0,null);var inst_42233 = cljs.core.nth.call(null,inst_42231,1,null);var state_42345__$1 = (function (){var statearr_42416 = state_42345;(statearr_42416[28] = inst_42232);
return statearr_42416;
})();if(cljs.core.truth_(inst_42233))
{var statearr_42417_42478 = state_42345__$1;(statearr_42417_42478[1] = 13);
} else
{var statearr_42418_42479 = state_42345__$1;(statearr_42418_42479[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 18))
{var inst_42266 = (state_42345[2]);var state_42345__$1 = state_42345;var statearr_42419_42480 = state_42345__$1;(statearr_42419_42480[2] = inst_42266);
(statearr_42419_42480[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 42))
{var state_42345__$1 = state_42345;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42345__$1,45,dchan);
} else
{if((state_val_42346 === 37))
{var inst_42302 = (state_42345[17]);var inst_42311 = cljs.core.first.call(null,inst_42302);var state_42345__$1 = (function (){var statearr_42420 = state_42345;(statearr_42420[25] = inst_42311);
return statearr_42420;
})();var statearr_42421_42481 = state_42345__$1;(statearr_42421_42481[2] = null);
(statearr_42421_42481[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42346 === 8))
{var inst_42224 = (state_42345[13]);var inst_42225 = (state_42345[14]);var inst_42227 = (inst_42225 < inst_42224);var inst_42228 = inst_42227;var state_42345__$1 = state_42345;if(cljs.core.truth_(inst_42228))
{var statearr_42422_42482 = state_42345__$1;(statearr_42422_42482[1] = 10);
} else
{var statearr_42423_42483 = state_42345__$1;(statearr_42423_42483[1] = 11);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_42427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42427[0] = state_machine__27226__auto__);
(statearr_42427[1] = 1);
return statearr_42427;
});
var state_machine__27226__auto____1 = (function (state_42345){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_42345);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e42428){if((e42428 instanceof Object))
{var ex__27229__auto__ = e42428;var statearr_42429_42484 = state_42345;(statearr_42429_42484[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42345);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42428;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42485 = state_42345;
state_42345 = G__42485;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_42345){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_42345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_42430 = f__27290__auto__.call(null);(statearr_42430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___42431);
return statearr_42430;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
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
cljs.core.async.Mix = (function (){var obj42487 = {};return obj42487;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__15094__auto__ = m;if(and__15094__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__15094__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__15733__auto__ = (((m == null))?null:m);return (function (){var or__15106__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15733__auto__)]);if(or__15106__auto__)
{return or__15106__auto__;
} else
{var or__15106__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__15106__auto____$1)
{return or__15106__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__15094__auto__ = m;if(and__15094__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__15094__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__15733__auto__ = (((m == null))?null:m);return (function (){var or__15106__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15733__auto__)]);if(or__15106__auto__)
{return or__15106__auto__;
} else
{var or__15106__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__15106__auto____$1)
{return or__15106__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__15094__auto__ = m;if(and__15094__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__15094__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__15733__auto__ = (((m == null))?null:m);return (function (){var or__15106__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15733__auto__)]);if(or__15106__auto__)
{return or__15106__auto__;
} else
{var or__15106__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__15106__auto____$1)
{return or__15106__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__15094__auto__ = m;if(and__15094__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__15094__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__15733__auto__ = (((m == null))?null:m);return (function (){var or__15106__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15733__auto__)]);if(or__15106__auto__)
{return or__15106__auto__;
} else
{var or__15106__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__15106__auto____$1)
{return or__15106__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__15094__auto__ = m;if(and__15094__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__15094__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__15733__auto__ = (((m == null))?null:m);return (function (){var or__15106__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15733__auto__)]);if(or__15106__auto__)
{return or__15106__auto__;
} else
{var or__15106__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__15106__auto____$1)
{return or__15106__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t42597 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42597 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta42598){
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
this.meta42598 = meta42598;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42597.cljs$lang$type = true;
cljs.core.async.t42597.cljs$lang$ctorStr = "cljs.core.async/t42597";
cljs.core.async.t42597.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15673__auto__,writer__15674__auto__,opt__15675__auto__){return cljs.core._write.call(null,writer__15674__auto__,"cljs.core.async/t42597");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42597.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t42597.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42597.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42597.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42597.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42597.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42597.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42597.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42597.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42599){var self__ = this;
var _42599__$1 = this;return self__.meta42598;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t42597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_42599,meta42598__$1){var self__ = this;
var _42599__$1 = this;return (new cljs.core.async.t42597(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta42598__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t42597 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t42597(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42598){return (new cljs.core.async.t42597(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta42598));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t42597(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__27289__auto___42706 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_42664){var state_val_42665 = (state_42664[1]);if((state_val_42665 === 7))
{var inst_42613 = (state_42664[7]);var inst_42618 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42613);var state_42664__$1 = state_42664;var statearr_42666_42707 = state_42664__$1;(statearr_42666_42707[2] = inst_42618);
(statearr_42666_42707[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 20))
{var inst_42628 = (state_42664[8]);var state_42664__$1 = state_42664;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42664__$1,23,out,inst_42628);
} else
{if((state_val_42665 === 1))
{var inst_42603 = (state_42664[9]);var inst_42603__$1 = calc_state.call(null);var inst_42604 = cljs.core.seq_QMARK_.call(null,inst_42603__$1);var state_42664__$1 = (function (){var statearr_42667 = state_42664;(statearr_42667[9] = inst_42603__$1);
return statearr_42667;
})();if(inst_42604)
{var statearr_42668_42708 = state_42664__$1;(statearr_42668_42708[1] = 2);
} else
{var statearr_42669_42709 = state_42664__$1;(statearr_42669_42709[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 4))
{var inst_42603 = (state_42664[9]);var inst_42609 = (state_42664[2]);var inst_42610 = cljs.core.get.call(null,inst_42609,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_42611 = cljs.core.get.call(null,inst_42609,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_42612 = cljs.core.get.call(null,inst_42609,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_42613 = inst_42603;var state_42664__$1 = (function (){var statearr_42670 = state_42664;(statearr_42670[7] = inst_42613);
(statearr_42670[10] = inst_42610);
(statearr_42670[11] = inst_42612);
(statearr_42670[12] = inst_42611);
return statearr_42670;
})();var statearr_42671_42710 = state_42664__$1;(statearr_42671_42710[2] = null);
(statearr_42671_42710[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 15))
{var state_42664__$1 = state_42664;var statearr_42672_42711 = state_42664__$1;(statearr_42672_42711[2] = null);
(statearr_42672_42711[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 21))
{var state_42664__$1 = state_42664;var statearr_42673_42712 = state_42664__$1;(statearr_42673_42712[2] = null);
(statearr_42673_42712[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 13))
{var inst_42660 = (state_42664[2]);var state_42664__$1 = state_42664;var statearr_42674_42713 = state_42664__$1;(statearr_42674_42713[2] = inst_42660);
(statearr_42674_42713[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 22))
{var inst_42621 = (state_42664[13]);var inst_42657 = (state_42664[2]);var inst_42613 = inst_42621;var state_42664__$1 = (function (){var statearr_42675 = state_42664;(statearr_42675[7] = inst_42613);
(statearr_42675[14] = inst_42657);
return statearr_42675;
})();var statearr_42676_42714 = state_42664__$1;(statearr_42676_42714[2] = null);
(statearr_42676_42714[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 6))
{var inst_42662 = (state_42664[2]);var state_42664__$1 = state_42664;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42664__$1,inst_42662);
} else
{if((state_val_42665 === 17))
{var inst_42643 = (state_42664[15]);var state_42664__$1 = state_42664;var statearr_42677_42715 = state_42664__$1;(statearr_42677_42715[2] = inst_42643);
(statearr_42677_42715[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 3))
{var inst_42603 = (state_42664[9]);var state_42664__$1 = state_42664;var statearr_42678_42716 = state_42664__$1;(statearr_42678_42716[2] = inst_42603);
(statearr_42678_42716[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 12))
{var inst_42624 = (state_42664[16]);var inst_42643 = (state_42664[15]);var inst_42629 = (state_42664[17]);var inst_42643__$1 = inst_42624.call(null,inst_42629);var state_42664__$1 = (function (){var statearr_42679 = state_42664;(statearr_42679[15] = inst_42643__$1);
return statearr_42679;
})();if(cljs.core.truth_(inst_42643__$1))
{var statearr_42680_42717 = state_42664__$1;(statearr_42680_42717[1] = 17);
} else
{var statearr_42681_42718 = state_42664__$1;(statearr_42681_42718[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 2))
{var inst_42603 = (state_42664[9]);var inst_42606 = cljs.core.apply.call(null,cljs.core.hash_map,inst_42603);var state_42664__$1 = state_42664;var statearr_42682_42719 = state_42664__$1;(statearr_42682_42719[2] = inst_42606);
(statearr_42682_42719[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 23))
{var inst_42654 = (state_42664[2]);var state_42664__$1 = state_42664;var statearr_42683_42720 = state_42664__$1;(statearr_42683_42720[2] = inst_42654);
(statearr_42683_42720[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 19))
{var inst_42651 = (state_42664[2]);var state_42664__$1 = state_42664;if(cljs.core.truth_(inst_42651))
{var statearr_42684_42721 = state_42664__$1;(statearr_42684_42721[1] = 20);
} else
{var statearr_42685_42722 = state_42664__$1;(statearr_42685_42722[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 11))
{var inst_42628 = (state_42664[8]);var inst_42634 = (inst_42628 == null);var state_42664__$1 = state_42664;if(cljs.core.truth_(inst_42634))
{var statearr_42686_42723 = state_42664__$1;(statearr_42686_42723[1] = 14);
} else
{var statearr_42687_42724 = state_42664__$1;(statearr_42687_42724[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 9))
{var inst_42621 = (state_42664[13]);var inst_42621__$1 = (state_42664[2]);var inst_42622 = cljs.core.get.call(null,inst_42621__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_42623 = cljs.core.get.call(null,inst_42621__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_42624 = cljs.core.get.call(null,inst_42621__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_42664__$1 = (function (){var statearr_42688 = state_42664;(statearr_42688[18] = inst_42623);
(statearr_42688[13] = inst_42621__$1);
(statearr_42688[16] = inst_42624);
return statearr_42688;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_42664__$1,10,inst_42622);
} else
{if((state_val_42665 === 5))
{var inst_42613 = (state_42664[7]);var inst_42616 = cljs.core.seq_QMARK_.call(null,inst_42613);var state_42664__$1 = state_42664;if(inst_42616)
{var statearr_42689_42725 = state_42664__$1;(statearr_42689_42725[1] = 7);
} else
{var statearr_42690_42726 = state_42664__$1;(statearr_42690_42726[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 14))
{var inst_42629 = (state_42664[17]);var inst_42636 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_42629);var state_42664__$1 = state_42664;var statearr_42691_42727 = state_42664__$1;(statearr_42691_42727[2] = inst_42636);
(statearr_42691_42727[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 16))
{var inst_42639 = (state_42664[2]);var inst_42640 = calc_state.call(null);var inst_42613 = inst_42640;var state_42664__$1 = (function (){var statearr_42692 = state_42664;(statearr_42692[7] = inst_42613);
(statearr_42692[19] = inst_42639);
return statearr_42692;
})();var statearr_42693_42728 = state_42664__$1;(statearr_42693_42728[2] = null);
(statearr_42693_42728[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 10))
{var inst_42628 = (state_42664[8]);var inst_42629 = (state_42664[17]);var inst_42627 = (state_42664[2]);var inst_42628__$1 = cljs.core.nth.call(null,inst_42627,0,null);var inst_42629__$1 = cljs.core.nth.call(null,inst_42627,1,null);var inst_42630 = (inst_42628__$1 == null);var inst_42631 = cljs.core._EQ_.call(null,inst_42629__$1,change);var inst_42632 = (inst_42630) || (inst_42631);var state_42664__$1 = (function (){var statearr_42694 = state_42664;(statearr_42694[8] = inst_42628__$1);
(statearr_42694[17] = inst_42629__$1);
return statearr_42694;
})();if(cljs.core.truth_(inst_42632))
{var statearr_42695_42729 = state_42664__$1;(statearr_42695_42729[1] = 11);
} else
{var statearr_42696_42730 = state_42664__$1;(statearr_42696_42730[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 18))
{var inst_42623 = (state_42664[18]);var inst_42624 = (state_42664[16]);var inst_42629 = (state_42664[17]);var inst_42646 = cljs.core.empty_QMARK_.call(null,inst_42624);var inst_42647 = inst_42623.call(null,inst_42629);var inst_42648 = cljs.core.not.call(null,inst_42647);var inst_42649 = (inst_42646) && (inst_42648);var state_42664__$1 = state_42664;var statearr_42697_42731 = state_42664__$1;(statearr_42697_42731[2] = inst_42649);
(statearr_42697_42731[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42665 === 8))
{var inst_42613 = (state_42664[7]);var state_42664__$1 = state_42664;var statearr_42698_42732 = state_42664__$1;(statearr_42698_42732[2] = inst_42613);
(statearr_42698_42732[1] = 9);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_42702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42702[0] = state_machine__27226__auto__);
(statearr_42702[1] = 1);
return statearr_42702;
});
var state_machine__27226__auto____1 = (function (state_42664){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_42664);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e42703){if((e42703 instanceof Object))
{var ex__27229__auto__ = e42703;var statearr_42704_42733 = state_42664;(statearr_42704_42733[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42664);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42734 = state_42664;
state_42664 = G__42734;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_42664){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_42664);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_42705 = f__27290__auto__.call(null);(statearr_42705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___42706);
return statearr_42705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
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
cljs.core.async.Pub = (function (){var obj42736 = {};return obj42736;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__15094__auto__ = p;if(and__15094__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__15094__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__15733__auto__ = (((p == null))?null:p);return (function (){var or__15106__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15733__auto__)]);if(or__15106__auto__)
{return or__15106__auto__;
} else
{var or__15106__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__15106__auto____$1)
{return or__15106__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__15094__auto__ = p;if(and__15094__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__15094__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__15733__auto__ = (((p == null))?null:p);return (function (){var or__15106__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15733__auto__)]);if(or__15106__auto__)
{return or__15106__auto__;
} else
{var or__15106__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__15106__auto____$1)
{return or__15106__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__15094__auto__ = p;if(and__15094__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__15094__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__15733__auto__ = (((p == null))?null:p);return (function (){var or__15106__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15733__auto__)]);if(or__15106__auto__)
{return or__15106__auto__;
} else
{var or__15106__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15106__auto____$1)
{return or__15106__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__15094__auto__ = p;if(and__15094__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__15094__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__15733__auto__ = (((p == null))?null:p);return (function (){var or__15106__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15733__auto__)]);if(or__15106__auto__)
{return or__15106__auto__;
} else
{var or__15106__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15106__auto____$1)
{return or__15106__auto____$1;
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
return (function (topic){var or__15106__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__15106__auto__))
{return or__15106__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__15106__auto__,mults){
return (function (p1__42737_SHARP_){if(cljs.core.truth_(p1__42737_SHARP_.call(null,topic)))
{return p1__42737_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__42737_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15106__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t42862 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42862 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta42863){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta42863 = meta42863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42862.cljs$lang$type = true;
cljs.core.async.t42862.cljs$lang$ctorStr = "cljs.core.async/t42862";
cljs.core.async.t42862.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15673__auto__,writer__15674__auto__,opt__15675__auto__){return cljs.core._write.call(null,writer__15674__auto__,"cljs.core.async/t42862");
});})(mults,ensure_mult))
;
cljs.core.async.t42862.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t42862.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t42862.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t42862.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t42862.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t42862.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t42862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_42864){var self__ = this;
var _42864__$1 = this;return self__.meta42863;
});})(mults,ensure_mult))
;
cljs.core.async.t42862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_42864,meta42863__$1){var self__ = this;
var _42864__$1 = this;return (new cljs.core.async.t42862(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta42863__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t42862 = ((function (mults,ensure_mult){
return (function __GT_t42862(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42863){return (new cljs.core.async.t42862(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta42863));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t42862(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__27289__auto___42986 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_42938){var state_val_42939 = (state_42938[1]);if((state_val_42939 === 7))
{var inst_42934 = (state_42938[2]);var state_42938__$1 = state_42938;var statearr_42940_42987 = state_42938__$1;(statearr_42940_42987[2] = inst_42934);
(statearr_42940_42987[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 20))
{var state_42938__$1 = state_42938;var statearr_42941_42988 = state_42938__$1;(statearr_42941_42988[2] = null);
(statearr_42941_42988[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 1))
{var state_42938__$1 = state_42938;var statearr_42942_42989 = state_42938__$1;(statearr_42942_42989[2] = null);
(statearr_42942_42989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 24))
{var inst_42917 = (state_42938[7]);var inst_42867 = (state_42938[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42938,23,Object,null,22);var inst_42924 = cljs.core.async.muxch_STAR_.call(null,inst_42917);var state_42938__$1 = state_42938;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42938__$1,25,inst_42924,inst_42867);
} else
{if((state_val_42939 === 4))
{var inst_42867 = (state_42938[8]);var inst_42867__$1 = (state_42938[2]);var inst_42868 = (inst_42867__$1 == null);var state_42938__$1 = (function (){var statearr_42943 = state_42938;(statearr_42943[8] = inst_42867__$1);
return statearr_42943;
})();if(cljs.core.truth_(inst_42868))
{var statearr_42944_42990 = state_42938__$1;(statearr_42944_42990[1] = 5);
} else
{var statearr_42945_42991 = state_42938__$1;(statearr_42945_42991[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 15))
{var inst_42909 = (state_42938[2]);var state_42938__$1 = state_42938;var statearr_42946_42992 = state_42938__$1;(statearr_42946_42992[2] = inst_42909);
(statearr_42946_42992[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 21))
{var inst_42931 = (state_42938[2]);var state_42938__$1 = (function (){var statearr_42947 = state_42938;(statearr_42947[9] = inst_42931);
return statearr_42947;
})();var statearr_42948_42993 = state_42938__$1;(statearr_42948_42993[2] = null);
(statearr_42948_42993[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 13))
{var inst_42891 = (state_42938[10]);var inst_42893 = cljs.core.chunked_seq_QMARK_.call(null,inst_42891);var state_42938__$1 = state_42938;if(inst_42893)
{var statearr_42949_42994 = state_42938__$1;(statearr_42949_42994[1] = 16);
} else
{var statearr_42950_42995 = state_42938__$1;(statearr_42950_42995[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 22))
{var inst_42928 = (state_42938[2]);var state_42938__$1 = state_42938;var statearr_42951_42996 = state_42938__$1;(statearr_42951_42996[2] = inst_42928);
(statearr_42951_42996[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 6))
{var inst_42915 = (state_42938[11]);var inst_42917 = (state_42938[7]);var inst_42867 = (state_42938[8]);var inst_42915__$1 = topic_fn.call(null,inst_42867);var inst_42916 = cljs.core.deref.call(null,mults);var inst_42917__$1 = cljs.core.get.call(null,inst_42916,inst_42915__$1);var state_42938__$1 = (function (){var statearr_42952 = state_42938;(statearr_42952[11] = inst_42915__$1);
(statearr_42952[7] = inst_42917__$1);
return statearr_42952;
})();if(cljs.core.truth_(inst_42917__$1))
{var statearr_42953_42997 = state_42938__$1;(statearr_42953_42997[1] = 19);
} else
{var statearr_42954_42998 = state_42938__$1;(statearr_42954_42998[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 25))
{var inst_42926 = (state_42938[2]);var state_42938__$1 = state_42938;var statearr_42955_42999 = state_42938__$1;(statearr_42955_42999[2] = inst_42926);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42938__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 17))
{var inst_42891 = (state_42938[10]);var inst_42900 = cljs.core.first.call(null,inst_42891);var inst_42901 = cljs.core.async.muxch_STAR_.call(null,inst_42900);var inst_42902 = cljs.core.async.close_BANG_.call(null,inst_42901);var inst_42903 = cljs.core.next.call(null,inst_42891);var inst_42877 = inst_42903;var inst_42878 = null;var inst_42879 = 0;var inst_42880 = 0;var state_42938__$1 = (function (){var statearr_42956 = state_42938;(statearr_42956[12] = inst_42880);
(statearr_42956[13] = inst_42878);
(statearr_42956[14] = inst_42879);
(statearr_42956[15] = inst_42902);
(statearr_42956[16] = inst_42877);
return statearr_42956;
})();var statearr_42957_43000 = state_42938__$1;(statearr_42957_43000[2] = null);
(statearr_42957_43000[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 3))
{var inst_42936 = (state_42938[2]);var state_42938__$1 = state_42938;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42938__$1,inst_42936);
} else
{if((state_val_42939 === 12))
{var inst_42911 = (state_42938[2]);var state_42938__$1 = state_42938;var statearr_42958_43001 = state_42938__$1;(statearr_42958_43001[2] = inst_42911);
(statearr_42958_43001[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 2))
{var state_42938__$1 = state_42938;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42938__$1,4,ch);
} else
{if((state_val_42939 === 23))
{var inst_42915 = (state_42938[11]);var inst_42919 = (state_42938[2]);var inst_42920 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_42915);var state_42938__$1 = (function (){var statearr_42959 = state_42938;(statearr_42959[17] = inst_42919);
return statearr_42959;
})();var statearr_42960_43002 = state_42938__$1;(statearr_42960_43002[2] = inst_42920);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42938__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 19))
{var state_42938__$1 = state_42938;var statearr_42961_43003 = state_42938__$1;(statearr_42961_43003[2] = null);
(statearr_42961_43003[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 11))
{var inst_42891 = (state_42938[10]);var inst_42877 = (state_42938[16]);var inst_42891__$1 = cljs.core.seq.call(null,inst_42877);var state_42938__$1 = (function (){var statearr_42962 = state_42938;(statearr_42962[10] = inst_42891__$1);
return statearr_42962;
})();if(inst_42891__$1)
{var statearr_42963_43004 = state_42938__$1;(statearr_42963_43004[1] = 13);
} else
{var statearr_42964_43005 = state_42938__$1;(statearr_42964_43005[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 9))
{var inst_42913 = (state_42938[2]);var state_42938__$1 = state_42938;var statearr_42965_43006 = state_42938__$1;(statearr_42965_43006[2] = inst_42913);
(statearr_42965_43006[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 5))
{var inst_42874 = cljs.core.deref.call(null,mults);var inst_42875 = cljs.core.vals.call(null,inst_42874);var inst_42876 = cljs.core.seq.call(null,inst_42875);var inst_42877 = inst_42876;var inst_42878 = null;var inst_42879 = 0;var inst_42880 = 0;var state_42938__$1 = (function (){var statearr_42966 = state_42938;(statearr_42966[12] = inst_42880);
(statearr_42966[13] = inst_42878);
(statearr_42966[14] = inst_42879);
(statearr_42966[16] = inst_42877);
return statearr_42966;
})();var statearr_42967_43007 = state_42938__$1;(statearr_42967_43007[2] = null);
(statearr_42967_43007[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 14))
{var state_42938__$1 = state_42938;var statearr_42971_43008 = state_42938__$1;(statearr_42971_43008[2] = null);
(statearr_42971_43008[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 16))
{var inst_42891 = (state_42938[10]);var inst_42895 = cljs.core.chunk_first.call(null,inst_42891);var inst_42896 = cljs.core.chunk_rest.call(null,inst_42891);var inst_42897 = cljs.core.count.call(null,inst_42895);var inst_42877 = inst_42896;var inst_42878 = inst_42895;var inst_42879 = inst_42897;var inst_42880 = 0;var state_42938__$1 = (function (){var statearr_42972 = state_42938;(statearr_42972[12] = inst_42880);
(statearr_42972[13] = inst_42878);
(statearr_42972[14] = inst_42879);
(statearr_42972[16] = inst_42877);
return statearr_42972;
})();var statearr_42973_43009 = state_42938__$1;(statearr_42973_43009[2] = null);
(statearr_42973_43009[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 10))
{var inst_42880 = (state_42938[12]);var inst_42878 = (state_42938[13]);var inst_42879 = (state_42938[14]);var inst_42877 = (state_42938[16]);var inst_42885 = cljs.core._nth.call(null,inst_42878,inst_42880);var inst_42886 = cljs.core.async.muxch_STAR_.call(null,inst_42885);var inst_42887 = cljs.core.async.close_BANG_.call(null,inst_42886);var inst_42888 = (inst_42880 + 1);var tmp42968 = inst_42878;var tmp42969 = inst_42879;var tmp42970 = inst_42877;var inst_42877__$1 = tmp42970;var inst_42878__$1 = tmp42968;var inst_42879__$1 = tmp42969;var inst_42880__$1 = inst_42888;var state_42938__$1 = (function (){var statearr_42974 = state_42938;(statearr_42974[12] = inst_42880__$1);
(statearr_42974[13] = inst_42878__$1);
(statearr_42974[14] = inst_42879__$1);
(statearr_42974[16] = inst_42877__$1);
(statearr_42974[18] = inst_42887);
return statearr_42974;
})();var statearr_42975_43010 = state_42938__$1;(statearr_42975_43010[2] = null);
(statearr_42975_43010[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 18))
{var inst_42906 = (state_42938[2]);var state_42938__$1 = state_42938;var statearr_42976_43011 = state_42938__$1;(statearr_42976_43011[2] = inst_42906);
(statearr_42976_43011[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42939 === 8))
{var inst_42880 = (state_42938[12]);var inst_42879 = (state_42938[14]);var inst_42882 = (inst_42880 < inst_42879);var inst_42883 = inst_42882;var state_42938__$1 = state_42938;if(cljs.core.truth_(inst_42883))
{var statearr_42977_43012 = state_42938__$1;(statearr_42977_43012[1] = 10);
} else
{var statearr_42978_43013 = state_42938__$1;(statearr_42978_43013[1] = 11);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_42982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42982[0] = state_machine__27226__auto__);
(statearr_42982[1] = 1);
return statearr_42982;
});
var state_machine__27226__auto____1 = (function (state_42938){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_42938);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e42983){if((e42983 instanceof Object))
{var ex__27229__auto__ = e42983;var statearr_42984_43014 = state_42938;(statearr_42984_43014[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42938);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43015 = state_42938;
state_42938 = G__43015;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_42938){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_42938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_42985 = f__27290__auto__.call(null);(statearr_42985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___42986);
return statearr_42985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
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
,cljs.core.range.call(null,cnt));var c__27289__auto___43152 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_43122){var state_val_43123 = (state_43122[1]);if((state_val_43123 === 7))
{var state_43122__$1 = state_43122;var statearr_43124_43153 = state_43122__$1;(statearr_43124_43153[2] = null);
(statearr_43124_43153[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43123 === 1))
{var state_43122__$1 = state_43122;var statearr_43125_43154 = state_43122__$1;(statearr_43125_43154[2] = null);
(statearr_43125_43154[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43123 === 4))
{var inst_43086 = (state_43122[7]);var inst_43088 = (inst_43086 < cnt);var state_43122__$1 = state_43122;if(cljs.core.truth_(inst_43088))
{var statearr_43126_43155 = state_43122__$1;(statearr_43126_43155[1] = 6);
} else
{var statearr_43127_43156 = state_43122__$1;(statearr_43127_43156[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43123 === 15))
{var inst_43118 = (state_43122[2]);var state_43122__$1 = state_43122;var statearr_43128_43157 = state_43122__$1;(statearr_43128_43157[2] = inst_43118);
(statearr_43128_43157[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43123 === 13))
{var inst_43111 = cljs.core.async.close_BANG_.call(null,out);var state_43122__$1 = state_43122;var statearr_43129_43158 = state_43122__$1;(statearr_43129_43158[2] = inst_43111);
(statearr_43129_43158[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43123 === 6))
{var state_43122__$1 = state_43122;var statearr_43130_43159 = state_43122__$1;(statearr_43130_43159[2] = null);
(statearr_43130_43159[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43123 === 3))
{var inst_43120 = (state_43122[2]);var state_43122__$1 = state_43122;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43122__$1,inst_43120);
} else
{if((state_val_43123 === 12))
{var inst_43108 = (state_43122[8]);var inst_43108__$1 = (state_43122[2]);var inst_43109 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43108__$1);var state_43122__$1 = (function (){var statearr_43131 = state_43122;(statearr_43131[8] = inst_43108__$1);
return statearr_43131;
})();if(cljs.core.truth_(inst_43109))
{var statearr_43132_43160 = state_43122__$1;(statearr_43132_43160[1] = 13);
} else
{var statearr_43133_43161 = state_43122__$1;(statearr_43133_43161[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43123 === 2))
{var inst_43085 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_43086 = 0;var state_43122__$1 = (function (){var statearr_43134 = state_43122;(statearr_43134[9] = inst_43085);
(statearr_43134[7] = inst_43086);
return statearr_43134;
})();var statearr_43135_43162 = state_43122__$1;(statearr_43135_43162[2] = null);
(statearr_43135_43162[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43123 === 11))
{var inst_43086 = (state_43122[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43122,10,Object,null,9);var inst_43095 = chs__$1.call(null,inst_43086);var inst_43096 = done.call(null,inst_43086);var inst_43097 = cljs.core.async.take_BANG_.call(null,inst_43095,inst_43096);var state_43122__$1 = state_43122;var statearr_43136_43163 = state_43122__$1;(statearr_43136_43163[2] = inst_43097);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43122__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43123 === 9))
{var inst_43086 = (state_43122[7]);var inst_43099 = (state_43122[2]);var inst_43100 = (inst_43086 + 1);var inst_43086__$1 = inst_43100;var state_43122__$1 = (function (){var statearr_43137 = state_43122;(statearr_43137[10] = inst_43099);
(statearr_43137[7] = inst_43086__$1);
return statearr_43137;
})();var statearr_43138_43164 = state_43122__$1;(statearr_43138_43164[2] = null);
(statearr_43138_43164[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43123 === 5))
{var inst_43106 = (state_43122[2]);var state_43122__$1 = (function (){var statearr_43139 = state_43122;(statearr_43139[11] = inst_43106);
return statearr_43139;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43122__$1,12,dchan);
} else
{if((state_val_43123 === 14))
{var inst_43108 = (state_43122[8]);var inst_43113 = cljs.core.apply.call(null,f,inst_43108);var state_43122__$1 = state_43122;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43122__$1,16,out,inst_43113);
} else
{if((state_val_43123 === 16))
{var inst_43115 = (state_43122[2]);var state_43122__$1 = (function (){var statearr_43140 = state_43122;(statearr_43140[12] = inst_43115);
return statearr_43140;
})();var statearr_43141_43165 = state_43122__$1;(statearr_43141_43165[2] = null);
(statearr_43141_43165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43123 === 10))
{var inst_43090 = (state_43122[2]);var inst_43091 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_43122__$1 = (function (){var statearr_43142 = state_43122;(statearr_43142[13] = inst_43090);
return statearr_43142;
})();var statearr_43143_43166 = state_43122__$1;(statearr_43143_43166[2] = inst_43091);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43122__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43123 === 8))
{var inst_43104 = (state_43122[2]);var state_43122__$1 = state_43122;var statearr_43144_43167 = state_43122__$1;(statearr_43144_43167[2] = inst_43104);
(statearr_43144_43167[1] = 5);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_43148 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43148[0] = state_machine__27226__auto__);
(statearr_43148[1] = 1);
return statearr_43148;
});
var state_machine__27226__auto____1 = (function (state_43122){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_43122);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e43149){if((e43149 instanceof Object))
{var ex__27229__auto__ = e43149;var statearr_43150_43168 = state_43122;(statearr_43150_43168[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43122);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43149;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43169 = state_43122;
state_43122 = G__43169;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_43122){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_43122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_43151 = f__27290__auto__.call(null);(statearr_43151[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___43152);
return statearr_43151;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__27289__auto___43277 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_43253){var state_val_43254 = (state_43253[1]);if((state_val_43254 === 7))
{var inst_43232 = (state_43253[7]);var inst_43233 = (state_43253[8]);var inst_43232__$1 = (state_43253[2]);var inst_43233__$1 = cljs.core.nth.call(null,inst_43232__$1,0,null);var inst_43234 = cljs.core.nth.call(null,inst_43232__$1,1,null);var inst_43235 = (inst_43233__$1 == null);var state_43253__$1 = (function (){var statearr_43255 = state_43253;(statearr_43255[7] = inst_43232__$1);
(statearr_43255[9] = inst_43234);
(statearr_43255[8] = inst_43233__$1);
return statearr_43255;
})();if(cljs.core.truth_(inst_43235))
{var statearr_43256_43278 = state_43253__$1;(statearr_43256_43278[1] = 8);
} else
{var statearr_43257_43279 = state_43253__$1;(statearr_43257_43279[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43254 === 1))
{var inst_43224 = cljs.core.vec.call(null,chs);var inst_43225 = inst_43224;var state_43253__$1 = (function (){var statearr_43258 = state_43253;(statearr_43258[10] = inst_43225);
return statearr_43258;
})();var statearr_43259_43280 = state_43253__$1;(statearr_43259_43280[2] = null);
(statearr_43259_43280[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43254 === 4))
{var inst_43225 = (state_43253[10]);var state_43253__$1 = state_43253;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_43253__$1,7,inst_43225);
} else
{if((state_val_43254 === 6))
{var inst_43249 = (state_43253[2]);var state_43253__$1 = state_43253;var statearr_43260_43281 = state_43253__$1;(statearr_43260_43281[2] = inst_43249);
(statearr_43260_43281[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43254 === 3))
{var inst_43251 = (state_43253[2]);var state_43253__$1 = state_43253;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43253__$1,inst_43251);
} else
{if((state_val_43254 === 2))
{var inst_43225 = (state_43253[10]);var inst_43227 = cljs.core.count.call(null,inst_43225);var inst_43228 = (inst_43227 > 0);var state_43253__$1 = state_43253;if(cljs.core.truth_(inst_43228))
{var statearr_43262_43282 = state_43253__$1;(statearr_43262_43282[1] = 4);
} else
{var statearr_43263_43283 = state_43253__$1;(statearr_43263_43283[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43254 === 11))
{var inst_43225 = (state_43253[10]);var inst_43242 = (state_43253[2]);var tmp43261 = inst_43225;var inst_43225__$1 = tmp43261;var state_43253__$1 = (function (){var statearr_43264 = state_43253;(statearr_43264[11] = inst_43242);
(statearr_43264[10] = inst_43225__$1);
return statearr_43264;
})();var statearr_43265_43284 = state_43253__$1;(statearr_43265_43284[2] = null);
(statearr_43265_43284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43254 === 9))
{var inst_43233 = (state_43253[8]);var state_43253__$1 = state_43253;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43253__$1,11,out,inst_43233);
} else
{if((state_val_43254 === 5))
{var inst_43247 = cljs.core.async.close_BANG_.call(null,out);var state_43253__$1 = state_43253;var statearr_43266_43285 = state_43253__$1;(statearr_43266_43285[2] = inst_43247);
(statearr_43266_43285[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43254 === 10))
{var inst_43245 = (state_43253[2]);var state_43253__$1 = state_43253;var statearr_43267_43286 = state_43253__$1;(statearr_43267_43286[2] = inst_43245);
(statearr_43267_43286[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43254 === 8))
{var inst_43232 = (state_43253[7]);var inst_43234 = (state_43253[9]);var inst_43233 = (state_43253[8]);var inst_43225 = (state_43253[10]);var inst_43237 = (function (){var c = inst_43234;var v = inst_43233;var vec__43230 = inst_43232;var cs = inst_43225;return ((function (c,v,vec__43230,cs,inst_43232,inst_43234,inst_43233,inst_43225,state_val_43254){
return (function (p1__43170_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__43170_SHARP_);
});
;})(c,v,vec__43230,cs,inst_43232,inst_43234,inst_43233,inst_43225,state_val_43254))
})();var inst_43238 = cljs.core.filterv.call(null,inst_43237,inst_43225);var inst_43225__$1 = inst_43238;var state_43253__$1 = (function (){var statearr_43268 = state_43253;(statearr_43268[10] = inst_43225__$1);
return statearr_43268;
})();var statearr_43269_43287 = state_43253__$1;(statearr_43269_43287[2] = null);
(statearr_43269_43287[1] = 2);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_43273 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43273[0] = state_machine__27226__auto__);
(statearr_43273[1] = 1);
return statearr_43273;
});
var state_machine__27226__auto____1 = (function (state_43253){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_43253);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e43274){if((e43274 instanceof Object))
{var ex__27229__auto__ = e43274;var statearr_43275_43288 = state_43253;(statearr_43275_43288[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43253);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43289 = state_43253;
state_43253 = G__43289;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_43253){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_43253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_43276 = f__27290__auto__.call(null);(statearr_43276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___43277);
return statearr_43276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__27289__auto___43382 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_43359){var state_val_43360 = (state_43359[1]);if((state_val_43360 === 7))
{var inst_43341 = (state_43359[7]);var inst_43341__$1 = (state_43359[2]);var inst_43342 = (inst_43341__$1 == null);var inst_43343 = cljs.core.not.call(null,inst_43342);var state_43359__$1 = (function (){var statearr_43361 = state_43359;(statearr_43361[7] = inst_43341__$1);
return statearr_43361;
})();if(inst_43343)
{var statearr_43362_43383 = state_43359__$1;(statearr_43362_43383[1] = 8);
} else
{var statearr_43363_43384 = state_43359__$1;(statearr_43363_43384[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43360 === 1))
{var inst_43336 = 0;var state_43359__$1 = (function (){var statearr_43364 = state_43359;(statearr_43364[8] = inst_43336);
return statearr_43364;
})();var statearr_43365_43385 = state_43359__$1;(statearr_43365_43385[2] = null);
(statearr_43365_43385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43360 === 4))
{var state_43359__$1 = state_43359;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43359__$1,7,ch);
} else
{if((state_val_43360 === 6))
{var inst_43354 = (state_43359[2]);var state_43359__$1 = state_43359;var statearr_43366_43386 = state_43359__$1;(statearr_43366_43386[2] = inst_43354);
(statearr_43366_43386[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43360 === 3))
{var inst_43356 = (state_43359[2]);var inst_43357 = cljs.core.async.close_BANG_.call(null,out);var state_43359__$1 = (function (){var statearr_43367 = state_43359;(statearr_43367[9] = inst_43356);
return statearr_43367;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43359__$1,inst_43357);
} else
{if((state_val_43360 === 2))
{var inst_43336 = (state_43359[8]);var inst_43338 = (inst_43336 < n);var state_43359__$1 = state_43359;if(cljs.core.truth_(inst_43338))
{var statearr_43368_43387 = state_43359__$1;(statearr_43368_43387[1] = 4);
} else
{var statearr_43369_43388 = state_43359__$1;(statearr_43369_43388[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43360 === 11))
{var inst_43336 = (state_43359[8]);var inst_43346 = (state_43359[2]);var inst_43347 = (inst_43336 + 1);var inst_43336__$1 = inst_43347;var state_43359__$1 = (function (){var statearr_43370 = state_43359;(statearr_43370[10] = inst_43346);
(statearr_43370[8] = inst_43336__$1);
return statearr_43370;
})();var statearr_43371_43389 = state_43359__$1;(statearr_43371_43389[2] = null);
(statearr_43371_43389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43360 === 9))
{var state_43359__$1 = state_43359;var statearr_43372_43390 = state_43359__$1;(statearr_43372_43390[2] = null);
(statearr_43372_43390[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43360 === 5))
{var state_43359__$1 = state_43359;var statearr_43373_43391 = state_43359__$1;(statearr_43373_43391[2] = null);
(statearr_43373_43391[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43360 === 10))
{var inst_43351 = (state_43359[2]);var state_43359__$1 = state_43359;var statearr_43374_43392 = state_43359__$1;(statearr_43374_43392[2] = inst_43351);
(statearr_43374_43392[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43360 === 8))
{var inst_43341 = (state_43359[7]);var state_43359__$1 = state_43359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43359__$1,11,out,inst_43341);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_43378 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_43378[0] = state_machine__27226__auto__);
(statearr_43378[1] = 1);
return statearr_43378;
});
var state_machine__27226__auto____1 = (function (state_43359){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_43359);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e43379){if((e43379 instanceof Object))
{var ex__27229__auto__ = e43379;var statearr_43380_43393 = state_43359;(statearr_43380_43393[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43359);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43379;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43394 = state_43359;
state_43359 = G__43394;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_43359){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_43359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_43381 = f__27290__auto__.call(null);(statearr_43381[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___43382);
return statearr_43381;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__27289__auto___43491 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_43466){var state_val_43467 = (state_43466[1]);if((state_val_43467 === 7))
{var inst_43461 = (state_43466[2]);var state_43466__$1 = state_43466;var statearr_43468_43492 = state_43466__$1;(statearr_43468_43492[2] = inst_43461);
(statearr_43468_43492[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43467 === 1))
{var inst_43443 = null;var state_43466__$1 = (function (){var statearr_43469 = state_43466;(statearr_43469[7] = inst_43443);
return statearr_43469;
})();var statearr_43470_43493 = state_43466__$1;(statearr_43470_43493[2] = null);
(statearr_43470_43493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43467 === 4))
{var inst_43446 = (state_43466[8]);var inst_43446__$1 = (state_43466[2]);var inst_43447 = (inst_43446__$1 == null);var inst_43448 = cljs.core.not.call(null,inst_43447);var state_43466__$1 = (function (){var statearr_43471 = state_43466;(statearr_43471[8] = inst_43446__$1);
return statearr_43471;
})();if(inst_43448)
{var statearr_43472_43494 = state_43466__$1;(statearr_43472_43494[1] = 5);
} else
{var statearr_43473_43495 = state_43466__$1;(statearr_43473_43495[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43467 === 6))
{var state_43466__$1 = state_43466;var statearr_43474_43496 = state_43466__$1;(statearr_43474_43496[2] = null);
(statearr_43474_43496[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43467 === 3))
{var inst_43463 = (state_43466[2]);var inst_43464 = cljs.core.async.close_BANG_.call(null,out);var state_43466__$1 = (function (){var statearr_43475 = state_43466;(statearr_43475[9] = inst_43463);
return statearr_43475;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43466__$1,inst_43464);
} else
{if((state_val_43467 === 2))
{var state_43466__$1 = state_43466;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43466__$1,4,ch);
} else
{if((state_val_43467 === 11))
{var inst_43446 = (state_43466[8]);var inst_43455 = (state_43466[2]);var inst_43443 = inst_43446;var state_43466__$1 = (function (){var statearr_43476 = state_43466;(statearr_43476[10] = inst_43455);
(statearr_43476[7] = inst_43443);
return statearr_43476;
})();var statearr_43477_43497 = state_43466__$1;(statearr_43477_43497[2] = null);
(statearr_43477_43497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43467 === 9))
{var inst_43446 = (state_43466[8]);var state_43466__$1 = state_43466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43466__$1,11,out,inst_43446);
} else
{if((state_val_43467 === 5))
{var inst_43446 = (state_43466[8]);var inst_43443 = (state_43466[7]);var inst_43450 = cljs.core._EQ_.call(null,inst_43446,inst_43443);var state_43466__$1 = state_43466;if(inst_43450)
{var statearr_43479_43498 = state_43466__$1;(statearr_43479_43498[1] = 8);
} else
{var statearr_43480_43499 = state_43466__$1;(statearr_43480_43499[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43467 === 10))
{var inst_43458 = (state_43466[2]);var state_43466__$1 = state_43466;var statearr_43481_43500 = state_43466__$1;(statearr_43481_43500[2] = inst_43458);
(statearr_43481_43500[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43467 === 8))
{var inst_43443 = (state_43466[7]);var tmp43478 = inst_43443;var inst_43443__$1 = tmp43478;var state_43466__$1 = (function (){var statearr_43482 = state_43466;(statearr_43482[7] = inst_43443__$1);
return statearr_43482;
})();var statearr_43483_43501 = state_43466__$1;(statearr_43483_43501[2] = null);
(statearr_43483_43501[1] = 2);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_43487 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_43487[0] = state_machine__27226__auto__);
(statearr_43487[1] = 1);
return statearr_43487;
});
var state_machine__27226__auto____1 = (function (state_43466){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_43466);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e43488){if((e43488 instanceof Object))
{var ex__27229__auto__ = e43488;var statearr_43489_43502 = state_43466;(statearr_43489_43502[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43466);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43488;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43503 = state_43466;
state_43466 = G__43503;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_43466){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_43466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_43490 = f__27290__auto__.call(null);(statearr_43490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___43491);
return statearr_43490;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__27289__auto___43638 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_43608){var state_val_43609 = (state_43608[1]);if((state_val_43609 === 7))
{var inst_43604 = (state_43608[2]);var state_43608__$1 = state_43608;var statearr_43610_43639 = state_43608__$1;(statearr_43610_43639[2] = inst_43604);
(statearr_43610_43639[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43609 === 1))
{var inst_43571 = (new Array(n));var inst_43572 = inst_43571;var inst_43573 = 0;var state_43608__$1 = (function (){var statearr_43611 = state_43608;(statearr_43611[7] = inst_43572);
(statearr_43611[8] = inst_43573);
return statearr_43611;
})();var statearr_43612_43640 = state_43608__$1;(statearr_43612_43640[2] = null);
(statearr_43612_43640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43609 === 4))
{var inst_43576 = (state_43608[9]);var inst_43576__$1 = (state_43608[2]);var inst_43577 = (inst_43576__$1 == null);var inst_43578 = cljs.core.not.call(null,inst_43577);var state_43608__$1 = (function (){var statearr_43613 = state_43608;(statearr_43613[9] = inst_43576__$1);
return statearr_43613;
})();if(inst_43578)
{var statearr_43614_43641 = state_43608__$1;(statearr_43614_43641[1] = 5);
} else
{var statearr_43615_43642 = state_43608__$1;(statearr_43615_43642[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43609 === 15))
{var inst_43598 = (state_43608[2]);var state_43608__$1 = state_43608;var statearr_43616_43643 = state_43608__$1;(statearr_43616_43643[2] = inst_43598);
(statearr_43616_43643[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43609 === 13))
{var state_43608__$1 = state_43608;var statearr_43617_43644 = state_43608__$1;(statearr_43617_43644[2] = null);
(statearr_43617_43644[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43609 === 6))
{var inst_43573 = (state_43608[8]);var inst_43594 = (inst_43573 > 0);var state_43608__$1 = state_43608;if(cljs.core.truth_(inst_43594))
{var statearr_43618_43645 = state_43608__$1;(statearr_43618_43645[1] = 12);
} else
{var statearr_43619_43646 = state_43608__$1;(statearr_43619_43646[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43609 === 3))
{var inst_43606 = (state_43608[2]);var state_43608__$1 = state_43608;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43608__$1,inst_43606);
} else
{if((state_val_43609 === 12))
{var inst_43572 = (state_43608[7]);var inst_43596 = cljs.core.vec.call(null,inst_43572);var state_43608__$1 = state_43608;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43608__$1,15,out,inst_43596);
} else
{if((state_val_43609 === 2))
{var state_43608__$1 = state_43608;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43608__$1,4,ch);
} else
{if((state_val_43609 === 11))
{var inst_43588 = (state_43608[2]);var inst_43589 = (new Array(n));var inst_43572 = inst_43589;var inst_43573 = 0;var state_43608__$1 = (function (){var statearr_43620 = state_43608;(statearr_43620[7] = inst_43572);
(statearr_43620[10] = inst_43588);
(statearr_43620[8] = inst_43573);
return statearr_43620;
})();var statearr_43621_43647 = state_43608__$1;(statearr_43621_43647[2] = null);
(statearr_43621_43647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43609 === 9))
{var inst_43572 = (state_43608[7]);var inst_43586 = cljs.core.vec.call(null,inst_43572);var state_43608__$1 = state_43608;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43608__$1,11,out,inst_43586);
} else
{if((state_val_43609 === 5))
{var inst_43572 = (state_43608[7]);var inst_43576 = (state_43608[9]);var inst_43573 = (state_43608[8]);var inst_43581 = (state_43608[11]);var inst_43580 = (inst_43572[inst_43573] = inst_43576);var inst_43581__$1 = (inst_43573 + 1);var inst_43582 = (inst_43581__$1 < n);var state_43608__$1 = (function (){var statearr_43622 = state_43608;(statearr_43622[12] = inst_43580);
(statearr_43622[11] = inst_43581__$1);
return statearr_43622;
})();if(cljs.core.truth_(inst_43582))
{var statearr_43623_43648 = state_43608__$1;(statearr_43623_43648[1] = 8);
} else
{var statearr_43624_43649 = state_43608__$1;(statearr_43624_43649[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43609 === 14))
{var inst_43601 = (state_43608[2]);var inst_43602 = cljs.core.async.close_BANG_.call(null,out);var state_43608__$1 = (function (){var statearr_43626 = state_43608;(statearr_43626[13] = inst_43601);
return statearr_43626;
})();var statearr_43627_43650 = state_43608__$1;(statearr_43627_43650[2] = inst_43602);
(statearr_43627_43650[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43609 === 10))
{var inst_43592 = (state_43608[2]);var state_43608__$1 = state_43608;var statearr_43628_43651 = state_43608__$1;(statearr_43628_43651[2] = inst_43592);
(statearr_43628_43651[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43609 === 8))
{var inst_43572 = (state_43608[7]);var inst_43581 = (state_43608[11]);var tmp43625 = inst_43572;var inst_43572__$1 = tmp43625;var inst_43573 = inst_43581;var state_43608__$1 = (function (){var statearr_43629 = state_43608;(statearr_43629[7] = inst_43572__$1);
(statearr_43629[8] = inst_43573);
return statearr_43629;
})();var statearr_43630_43652 = state_43608__$1;(statearr_43630_43652[2] = null);
(statearr_43630_43652[1] = 2);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_43634 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43634[0] = state_machine__27226__auto__);
(statearr_43634[1] = 1);
return statearr_43634;
});
var state_machine__27226__auto____1 = (function (state_43608){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_43608);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e43635){if((e43635 instanceof Object))
{var ex__27229__auto__ = e43635;var statearr_43636_43653 = state_43608;(statearr_43636_43653[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43608);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43654 = state_43608;
state_43608 = G__43654;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_43608){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_43608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_43637 = f__27290__auto__.call(null);(statearr_43637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___43638);
return statearr_43637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__27289__auto___43797 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__27290__auto__ = (function (){var switch__27225__auto__ = (function (state_43767){var state_val_43768 = (state_43767[1]);if((state_val_43768 === 7))
{var inst_43763 = (state_43767[2]);var state_43767__$1 = state_43767;var statearr_43769_43798 = state_43767__$1;(statearr_43769_43798[2] = inst_43763);
(statearr_43769_43798[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43768 === 1))
{var inst_43726 = [];var inst_43727 = inst_43726;var inst_43728 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_43767__$1 = (function (){var statearr_43770 = state_43767;(statearr_43770[7] = inst_43728);
(statearr_43770[8] = inst_43727);
return statearr_43770;
})();var statearr_43771_43799 = state_43767__$1;(statearr_43771_43799[2] = null);
(statearr_43771_43799[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43768 === 4))
{var inst_43731 = (state_43767[9]);var inst_43731__$1 = (state_43767[2]);var inst_43732 = (inst_43731__$1 == null);var inst_43733 = cljs.core.not.call(null,inst_43732);var state_43767__$1 = (function (){var statearr_43772 = state_43767;(statearr_43772[9] = inst_43731__$1);
return statearr_43772;
})();if(inst_43733)
{var statearr_43773_43800 = state_43767__$1;(statearr_43773_43800[1] = 5);
} else
{var statearr_43774_43801 = state_43767__$1;(statearr_43774_43801[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43768 === 15))
{var inst_43757 = (state_43767[2]);var state_43767__$1 = state_43767;var statearr_43775_43802 = state_43767__$1;(statearr_43775_43802[2] = inst_43757);
(statearr_43775_43802[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43768 === 13))
{var state_43767__$1 = state_43767;var statearr_43776_43803 = state_43767__$1;(statearr_43776_43803[2] = null);
(statearr_43776_43803[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43768 === 6))
{var inst_43727 = (state_43767[8]);var inst_43752 = inst_43727.length;var inst_43753 = (inst_43752 > 0);var state_43767__$1 = state_43767;if(cljs.core.truth_(inst_43753))
{var statearr_43777_43804 = state_43767__$1;(statearr_43777_43804[1] = 12);
} else
{var statearr_43778_43805 = state_43767__$1;(statearr_43778_43805[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43768 === 3))
{var inst_43765 = (state_43767[2]);var state_43767__$1 = state_43767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43767__$1,inst_43765);
} else
{if((state_val_43768 === 12))
{var inst_43727 = (state_43767[8]);var inst_43755 = cljs.core.vec.call(null,inst_43727);var state_43767__$1 = state_43767;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43767__$1,15,out,inst_43755);
} else
{if((state_val_43768 === 2))
{var state_43767__$1 = state_43767;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43767__$1,4,ch);
} else
{if((state_val_43768 === 11))
{var inst_43735 = (state_43767[10]);var inst_43731 = (state_43767[9]);var inst_43745 = (state_43767[2]);var inst_43746 = [];var inst_43747 = inst_43746.push(inst_43731);var inst_43727 = inst_43746;var inst_43728 = inst_43735;var state_43767__$1 = (function (){var statearr_43779 = state_43767;(statearr_43779[11] = inst_43747);
(statearr_43779[7] = inst_43728);
(statearr_43779[8] = inst_43727);
(statearr_43779[12] = inst_43745);
return statearr_43779;
})();var statearr_43780_43806 = state_43767__$1;(statearr_43780_43806[2] = null);
(statearr_43780_43806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43768 === 9))
{var inst_43727 = (state_43767[8]);var inst_43743 = cljs.core.vec.call(null,inst_43727);var state_43767__$1 = state_43767;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43767__$1,11,out,inst_43743);
} else
{if((state_val_43768 === 5))
{var inst_43728 = (state_43767[7]);var inst_43735 = (state_43767[10]);var inst_43731 = (state_43767[9]);var inst_43735__$1 = f.call(null,inst_43731);var inst_43736 = cljs.core._EQ_.call(null,inst_43735__$1,inst_43728);var inst_43737 = cljs.core.keyword_identical_QMARK_.call(null,inst_43728,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_43738 = (inst_43736) || (inst_43737);var state_43767__$1 = (function (){var statearr_43781 = state_43767;(statearr_43781[10] = inst_43735__$1);
return statearr_43781;
})();if(cljs.core.truth_(inst_43738))
{var statearr_43782_43807 = state_43767__$1;(statearr_43782_43807[1] = 8);
} else
{var statearr_43783_43808 = state_43767__$1;(statearr_43783_43808[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43768 === 14))
{var inst_43760 = (state_43767[2]);var inst_43761 = cljs.core.async.close_BANG_.call(null,out);var state_43767__$1 = (function (){var statearr_43785 = state_43767;(statearr_43785[13] = inst_43760);
return statearr_43785;
})();var statearr_43786_43809 = state_43767__$1;(statearr_43786_43809[2] = inst_43761);
(statearr_43786_43809[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43768 === 10))
{var inst_43750 = (state_43767[2]);var state_43767__$1 = state_43767;var statearr_43787_43810 = state_43767__$1;(statearr_43787_43810[2] = inst_43750);
(statearr_43787_43810[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43768 === 8))
{var inst_43735 = (state_43767[10]);var inst_43727 = (state_43767[8]);var inst_43731 = (state_43767[9]);var inst_43740 = inst_43727.push(inst_43731);var tmp43784 = inst_43727;var inst_43727__$1 = tmp43784;var inst_43728 = inst_43735;var state_43767__$1 = (function (){var statearr_43788 = state_43767;(statearr_43788[14] = inst_43740);
(statearr_43788[7] = inst_43728);
(statearr_43788[8] = inst_43727__$1);
return statearr_43788;
})();var statearr_43789_43811 = state_43767__$1;(statearr_43789_43811[2] = null);
(statearr_43789_43811[1] = 2);
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
});return ((function (switch__27225__auto__){
return (function() {
var state_machine__27226__auto__ = null;
var state_machine__27226__auto____0 = (function (){var statearr_43793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43793[0] = state_machine__27226__auto__);
(statearr_43793[1] = 1);
return statearr_43793;
});
var state_machine__27226__auto____1 = (function (state_43767){while(true){
var ret_value__27227__auto__ = (function (){try{while(true){
var result__27228__auto__ = switch__27225__auto__.call(null,state_43767);if(cljs.core.keyword_identical_QMARK_.call(null,result__27228__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__27228__auto__;
}
break;
}
}catch (e43794){if((e43794 instanceof Object))
{var ex__27229__auto__ = e43794;var statearr_43795_43812 = state_43767;(statearr_43795_43812[5] = ex__27229__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43767);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43794;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43813 = state_43767;
state_43767 = G__43813;
continue;
}
} else
{return ret_value__27227__auto__;
}
break;
}
});
state_machine__27226__auto__ = function(state_43767){
switch(arguments.length){
case 0:
return state_machine__27226__auto____0.call(this);
case 1:
return state_machine__27226__auto____1.call(this,state_43767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__27226__auto____0;
state_machine__27226__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__27226__auto____1;
return state_machine__27226__auto__;
})()
;})(switch__27225__auto__))
})();var state__27291__auto__ = (function (){var statearr_43796 = f__27290__auto__.call(null);(statearr_43796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27289__auto___43797);
return statearr_43796;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27291__auto__);
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

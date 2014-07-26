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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t61427 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t61427 = (function (f,fn_handler,meta61428){
this.f = f;
this.fn_handler = fn_handler;
this.meta61428 = meta61428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t61427.cljs$lang$type = true;
cljs.core.async.t61427.cljs$lang$ctorStr = "cljs.core.async/t61427";
cljs.core.async.t61427.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t61427");
});
cljs.core.async.t61427.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t61427.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t61427.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t61427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61429){var self__ = this;
var _61429__$1 = this;return self__.meta61428;
});
cljs.core.async.t61427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61429,meta61428__$1){var self__ = this;
var _61429__$1 = this;return (new cljs.core.async.t61427(self__.f,self__.fn_handler,meta61428__$1));
});
cljs.core.async.__GT_t61427 = (function __GT_t61427(f__$1,fn_handler__$1,meta61428){return (new cljs.core.async.t61427(f__$1,fn_handler__$1,meta61428));
});
}
return (new cljs.core.async.t61427(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__61431 = buff;if(G__61431)
{var bit__15632__auto__ = null;if(cljs.core.truth_((function (){var or__14982__auto__ = bit__15632__auto__;if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return G__61431.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__61431.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__61431);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__61431);
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
{var val_61432 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_61432);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_61432);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15830__auto___61433 = n;var x_61434 = 0;while(true){
if((x_61434 < n__15830__auto___61433))
{(a[x_61434] = 0);
{
var G__61435 = (x_61434 + 1);
x_61434 = G__61435;
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
var G__61436 = (i + 1);
i = G__61436;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t61440 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t61440 = (function (flag,alt_flag,meta61441){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta61441 = meta61441;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t61440.cljs$lang$type = true;
cljs.core.async.t61440.cljs$lang$ctorStr = "cljs.core.async/t61440";
cljs.core.async.t61440.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t61440");
});
cljs.core.async.t61440.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t61440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t61440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t61440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61442){var self__ = this;
var _61442__$1 = this;return self__.meta61441;
});
cljs.core.async.t61440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61442,meta61441__$1){var self__ = this;
var _61442__$1 = this;return (new cljs.core.async.t61440(self__.flag,self__.alt_flag,meta61441__$1));
});
cljs.core.async.__GT_t61440 = (function __GT_t61440(flag__$1,alt_flag__$1,meta61441){return (new cljs.core.async.t61440(flag__$1,alt_flag__$1,meta61441));
});
}
return (new cljs.core.async.t61440(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t61446 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t61446 = (function (cb,flag,alt_handler,meta61447){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta61447 = meta61447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t61446.cljs$lang$type = true;
cljs.core.async.t61446.cljs$lang$ctorStr = "cljs.core.async/t61446";
cljs.core.async.t61446.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t61446");
});
cljs.core.async.t61446.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t61446.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t61446.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t61446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61448){var self__ = this;
var _61448__$1 = this;return self__.meta61447;
});
cljs.core.async.t61446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61448,meta61447__$1){var self__ = this;
var _61448__$1 = this;return (new cljs.core.async.t61446(self__.cb,self__.flag,self__.alt_handler,meta61447__$1));
});
cljs.core.async.__GT_t61446 = (function __GT_t61446(cb__$1,flag__$1,alt_handler__$1,meta61447){return (new cljs.core.async.t61446(cb__$1,flag__$1,alt_handler__$1,meta61447));
});
}
return (new cljs.core.async.t61446(cb,flag,alt_handler,null));
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
return (function (p1__61449_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__61449_SHARP_,port], null));
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
var G__61450 = (i + 1);
i = G__61450;
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
var alts_BANG___delegate = function (ports,p__61451){var map__61453 = p__61451;var map__61453__$1 = ((cljs.core.seq_QMARK_.call(null,map__61453))?cljs.core.apply.call(null,cljs.core.hash_map,map__61453):map__61453);var opts = map__61453__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__61451 = null;if (arguments.length > 1) {
  p__61451 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__61451);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__61454){
var ports = cljs.core.first(arglist__61454);
var p__61451 = cljs.core.rest(arglist__61454);
return alts_BANG___delegate(ports,p__61451);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t61462 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t61462 = (function (ch,f,map_LT_,meta61463){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta61463 = meta61463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t61462.cljs$lang$type = true;
cljs.core.async.t61462.cljs$lang$ctorStr = "cljs.core.async/t61462";
cljs.core.async.t61462.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t61462");
});
cljs.core.async.t61462.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t61462.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t61462.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t61462.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t61465 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t61465 = (function (fn1,_,meta61463,ch,f,map_LT_,meta61466){
this.fn1 = fn1;
this._ = _;
this.meta61463 = meta61463;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta61466 = meta61466;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t61465.cljs$lang$type = true;
cljs.core.async.t61465.cljs$lang$ctorStr = "cljs.core.async/t61465";
cljs.core.async.t61465.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t61465");
});
cljs.core.async.t61465.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t61465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t61465.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t61465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__61455_SHARP_){return f1.call(null,(((p1__61455_SHARP_ == null))?null:self__.f.call(null,p1__61455_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t61465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61467){var self__ = this;
var _61467__$1 = this;return self__.meta61466;
});
cljs.core.async.t61465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61467,meta61466__$1){var self__ = this;
var _61467__$1 = this;return (new cljs.core.async.t61465(self__.fn1,self__._,self__.meta61463,self__.ch,self__.f,self__.map_LT_,meta61466__$1));
});
cljs.core.async.__GT_t61465 = (function __GT_t61465(fn1__$1,___$2,meta61463__$1,ch__$2,f__$2,map_LT___$2,meta61466){return (new cljs.core.async.t61465(fn1__$1,___$2,meta61463__$1,ch__$2,f__$2,map_LT___$2,meta61466));
});
}
return (new cljs.core.async.t61465(fn1,___$1,self__.meta61463,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t61462.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t61462.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t61462.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61464){var self__ = this;
var _61464__$1 = this;return self__.meta61463;
});
cljs.core.async.t61462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61464,meta61463__$1){var self__ = this;
var _61464__$1 = this;return (new cljs.core.async.t61462(self__.ch,self__.f,self__.map_LT_,meta61463__$1));
});
cljs.core.async.__GT_t61462 = (function __GT_t61462(ch__$1,f__$1,map_LT___$1,meta61463){return (new cljs.core.async.t61462(ch__$1,f__$1,map_LT___$1,meta61463));
});
}
return (new cljs.core.async.t61462(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t61471 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t61471 = (function (ch,f,map_GT_,meta61472){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta61472 = meta61472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t61471.cljs$lang$type = true;
cljs.core.async.t61471.cljs$lang$ctorStr = "cljs.core.async/t61471";
cljs.core.async.t61471.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t61471");
});
cljs.core.async.t61471.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t61471.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t61471.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t61471.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t61471.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t61471.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t61471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61473){var self__ = this;
var _61473__$1 = this;return self__.meta61472;
});
cljs.core.async.t61471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61473,meta61472__$1){var self__ = this;
var _61473__$1 = this;return (new cljs.core.async.t61471(self__.ch,self__.f,self__.map_GT_,meta61472__$1));
});
cljs.core.async.__GT_t61471 = (function __GT_t61471(ch__$1,f__$1,map_GT___$1,meta61472){return (new cljs.core.async.t61471(ch__$1,f__$1,map_GT___$1,meta61472));
});
}
return (new cljs.core.async.t61471(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t61477 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t61477 = (function (ch,p,filter_GT_,meta61478){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta61478 = meta61478;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t61477.cljs$lang$type = true;
cljs.core.async.t61477.cljs$lang$ctorStr = "cljs.core.async/t61477";
cljs.core.async.t61477.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t61477");
});
cljs.core.async.t61477.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t61477.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t61477.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t61477.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t61477.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t61477.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t61477.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_61479){var self__ = this;
var _61479__$1 = this;return self__.meta61478;
});
cljs.core.async.t61477.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_61479,meta61478__$1){var self__ = this;
var _61479__$1 = this;return (new cljs.core.async.t61477(self__.ch,self__.p,self__.filter_GT_,meta61478__$1));
});
cljs.core.async.__GT_t61477 = (function __GT_t61477(ch__$1,p__$1,filter_GT___$1,meta61478){return (new cljs.core.async.t61477(ch__$1,p__$1,filter_GT___$1,meta61478));
});
}
return (new cljs.core.async.t61477(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___61562 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_61541){var state_val_61542 = (state_61541[1]);if((state_val_61542 === 7))
{var inst_61537 = (state_61541[2]);var state_61541__$1 = state_61541;var statearr_61543_61563 = state_61541__$1;(statearr_61543_61563[2] = inst_61537);
(statearr_61543_61563[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61542 === 1))
{var state_61541__$1 = state_61541;var statearr_61544_61564 = state_61541__$1;(statearr_61544_61564[2] = null);
(statearr_61544_61564[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61542 === 4))
{var inst_61523 = (state_61541[7]);var inst_61523__$1 = (state_61541[2]);var inst_61524 = (inst_61523__$1 == null);var state_61541__$1 = (function (){var statearr_61545 = state_61541;(statearr_61545[7] = inst_61523__$1);
return statearr_61545;
})();if(cljs.core.truth_(inst_61524))
{var statearr_61546_61565 = state_61541__$1;(statearr_61546_61565[1] = 5);
} else
{var statearr_61547_61566 = state_61541__$1;(statearr_61547_61566[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61542 === 6))
{var inst_61523 = (state_61541[7]);var inst_61528 = p.call(null,inst_61523);var state_61541__$1 = state_61541;if(cljs.core.truth_(inst_61528))
{var statearr_61548_61567 = state_61541__$1;(statearr_61548_61567[1] = 8);
} else
{var statearr_61549_61568 = state_61541__$1;(statearr_61549_61568[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61542 === 3))
{var inst_61539 = (state_61541[2]);var state_61541__$1 = state_61541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61541__$1,inst_61539);
} else
{if((state_val_61542 === 2))
{var state_61541__$1 = state_61541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61541__$1,4,ch);
} else
{if((state_val_61542 === 11))
{var inst_61531 = (state_61541[2]);var state_61541__$1 = state_61541;var statearr_61550_61569 = state_61541__$1;(statearr_61550_61569[2] = inst_61531);
(statearr_61550_61569[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61542 === 9))
{var state_61541__$1 = state_61541;var statearr_61551_61570 = state_61541__$1;(statearr_61551_61570[2] = null);
(statearr_61551_61570[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61542 === 5))
{var inst_61526 = cljs.core.async.close_BANG_.call(null,out);var state_61541__$1 = state_61541;var statearr_61552_61571 = state_61541__$1;(statearr_61552_61571[2] = inst_61526);
(statearr_61552_61571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61542 === 10))
{var inst_61534 = (state_61541[2]);var state_61541__$1 = (function (){var statearr_61553 = state_61541;(statearr_61553[8] = inst_61534);
return statearr_61553;
})();var statearr_61554_61572 = state_61541__$1;(statearr_61554_61572[2] = null);
(statearr_61554_61572[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61542 === 8))
{var inst_61523 = (state_61541[7]);var state_61541__$1 = state_61541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61541__$1,11,out,inst_61523);
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
var state_machine__22127__auto____0 = (function (){var statearr_61558 = [null,null,null,null,null,null,null,null,null];(statearr_61558[0] = state_machine__22127__auto__);
(statearr_61558[1] = 1);
return statearr_61558;
});
var state_machine__22127__auto____1 = (function (state_61541){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_61541);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e61559){if((e61559 instanceof Object))
{var ex__22130__auto__ = e61559;var statearr_61560_61573 = state_61541;(statearr_61560_61573[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e61559;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__61574 = state_61541;
state_61541 = G__61574;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_61541){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_61541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_61561 = f__22202__auto__.call(null);(statearr_61561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___61562);
return statearr_61561;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_61726){var state_val_61727 = (state_61726[1]);if((state_val_61727 === 7))
{var inst_61722 = (state_61726[2]);var state_61726__$1 = state_61726;var statearr_61728_61765 = state_61726__$1;(statearr_61728_61765[2] = inst_61722);
(statearr_61728_61765[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 20))
{var inst_61697 = (state_61726[7]);var inst_61708 = (state_61726[2]);var inst_61709 = cljs.core.next.call(null,inst_61697);var inst_61683 = inst_61709;var inst_61684 = null;var inst_61685 = 0;var inst_61686 = 0;var state_61726__$1 = (function (){var statearr_61729 = state_61726;(statearr_61729[8] = inst_61685);
(statearr_61729[9] = inst_61683);
(statearr_61729[10] = inst_61686);
(statearr_61729[11] = inst_61684);
(statearr_61729[12] = inst_61708);
return statearr_61729;
})();var statearr_61730_61766 = state_61726__$1;(statearr_61730_61766[2] = null);
(statearr_61730_61766[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 1))
{var state_61726__$1 = state_61726;var statearr_61731_61767 = state_61726__$1;(statearr_61731_61767[2] = null);
(statearr_61731_61767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 4))
{var inst_61672 = (state_61726[13]);var inst_61672__$1 = (state_61726[2]);var inst_61673 = (inst_61672__$1 == null);var state_61726__$1 = (function (){var statearr_61735 = state_61726;(statearr_61735[13] = inst_61672__$1);
return statearr_61735;
})();if(cljs.core.truth_(inst_61673))
{var statearr_61736_61768 = state_61726__$1;(statearr_61736_61768[1] = 5);
} else
{var statearr_61737_61769 = state_61726__$1;(statearr_61737_61769[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 15))
{var state_61726__$1 = state_61726;var statearr_61738_61770 = state_61726__$1;(statearr_61738_61770[2] = null);
(statearr_61738_61770[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 13))
{var inst_61685 = (state_61726[8]);var inst_61683 = (state_61726[9]);var inst_61686 = (state_61726[10]);var inst_61684 = (state_61726[11]);var inst_61693 = (state_61726[2]);var inst_61694 = (inst_61686 + 1);var tmp61732 = inst_61685;var tmp61733 = inst_61683;var tmp61734 = inst_61684;var inst_61683__$1 = tmp61733;var inst_61684__$1 = tmp61734;var inst_61685__$1 = tmp61732;var inst_61686__$1 = inst_61694;var state_61726__$1 = (function (){var statearr_61739 = state_61726;(statearr_61739[8] = inst_61685__$1);
(statearr_61739[9] = inst_61683__$1);
(statearr_61739[14] = inst_61693);
(statearr_61739[10] = inst_61686__$1);
(statearr_61739[11] = inst_61684__$1);
return statearr_61739;
})();var statearr_61740_61771 = state_61726__$1;(statearr_61740_61771[2] = null);
(statearr_61740_61771[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 6))
{var inst_61672 = (state_61726[13]);var inst_61677 = f.call(null,inst_61672);var inst_61682 = cljs.core.seq.call(null,inst_61677);var inst_61683 = inst_61682;var inst_61684 = null;var inst_61685 = 0;var inst_61686 = 0;var state_61726__$1 = (function (){var statearr_61741 = state_61726;(statearr_61741[8] = inst_61685);
(statearr_61741[9] = inst_61683);
(statearr_61741[10] = inst_61686);
(statearr_61741[11] = inst_61684);
return statearr_61741;
})();var statearr_61742_61772 = state_61726__$1;(statearr_61742_61772[2] = null);
(statearr_61742_61772[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 17))
{var inst_61697 = (state_61726[7]);var inst_61701 = cljs.core.chunk_first.call(null,inst_61697);var inst_61702 = cljs.core.chunk_rest.call(null,inst_61697);var inst_61703 = cljs.core.count.call(null,inst_61701);var inst_61683 = inst_61702;var inst_61684 = inst_61701;var inst_61685 = inst_61703;var inst_61686 = 0;var state_61726__$1 = (function (){var statearr_61743 = state_61726;(statearr_61743[8] = inst_61685);
(statearr_61743[9] = inst_61683);
(statearr_61743[10] = inst_61686);
(statearr_61743[11] = inst_61684);
return statearr_61743;
})();var statearr_61744_61773 = state_61726__$1;(statearr_61744_61773[2] = null);
(statearr_61744_61773[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 3))
{var inst_61724 = (state_61726[2]);var state_61726__$1 = state_61726;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61726__$1,inst_61724);
} else
{if((state_val_61727 === 12))
{var inst_61717 = (state_61726[2]);var state_61726__$1 = state_61726;var statearr_61745_61774 = state_61726__$1;(statearr_61745_61774[2] = inst_61717);
(statearr_61745_61774[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 2))
{var state_61726__$1 = state_61726;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61726__$1,4,in$);
} else
{if((state_val_61727 === 19))
{var inst_61712 = (state_61726[2]);var state_61726__$1 = state_61726;var statearr_61746_61775 = state_61726__$1;(statearr_61746_61775[2] = inst_61712);
(statearr_61746_61775[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 11))
{var inst_61683 = (state_61726[9]);var inst_61697 = (state_61726[7]);var inst_61697__$1 = cljs.core.seq.call(null,inst_61683);var state_61726__$1 = (function (){var statearr_61747 = state_61726;(statearr_61747[7] = inst_61697__$1);
return statearr_61747;
})();if(inst_61697__$1)
{var statearr_61748_61776 = state_61726__$1;(statearr_61748_61776[1] = 14);
} else
{var statearr_61749_61777 = state_61726__$1;(statearr_61749_61777[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 9))
{var inst_61719 = (state_61726[2]);var state_61726__$1 = (function (){var statearr_61750 = state_61726;(statearr_61750[15] = inst_61719);
return statearr_61750;
})();var statearr_61751_61778 = state_61726__$1;(statearr_61751_61778[2] = null);
(statearr_61751_61778[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 5))
{var inst_61675 = cljs.core.async.close_BANG_.call(null,out);var state_61726__$1 = state_61726;var statearr_61752_61779 = state_61726__$1;(statearr_61752_61779[2] = inst_61675);
(statearr_61752_61779[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 14))
{var inst_61697 = (state_61726[7]);var inst_61699 = cljs.core.chunked_seq_QMARK_.call(null,inst_61697);var state_61726__$1 = state_61726;if(inst_61699)
{var statearr_61753_61780 = state_61726__$1;(statearr_61753_61780[1] = 17);
} else
{var statearr_61754_61781 = state_61726__$1;(statearr_61754_61781[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 16))
{var inst_61715 = (state_61726[2]);var state_61726__$1 = state_61726;var statearr_61755_61782 = state_61726__$1;(statearr_61755_61782[2] = inst_61715);
(statearr_61755_61782[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61727 === 10))
{var inst_61686 = (state_61726[10]);var inst_61684 = (state_61726[11]);var inst_61691 = cljs.core._nth.call(null,inst_61684,inst_61686);var state_61726__$1 = state_61726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61726__$1,13,out,inst_61691);
} else
{if((state_val_61727 === 18))
{var inst_61697 = (state_61726[7]);var inst_61706 = cljs.core.first.call(null,inst_61697);var state_61726__$1 = state_61726;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61726__$1,20,out,inst_61706);
} else
{if((state_val_61727 === 8))
{var inst_61685 = (state_61726[8]);var inst_61686 = (state_61726[10]);var inst_61688 = (inst_61686 < inst_61685);var inst_61689 = inst_61688;var state_61726__$1 = state_61726;if(cljs.core.truth_(inst_61689))
{var statearr_61756_61783 = state_61726__$1;(statearr_61756_61783[1] = 10);
} else
{var statearr_61757_61784 = state_61726__$1;(statearr_61757_61784[1] = 11);
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
var state_machine__22127__auto____0 = (function (){var statearr_61761 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_61761[0] = state_machine__22127__auto__);
(statearr_61761[1] = 1);
return statearr_61761;
});
var state_machine__22127__auto____1 = (function (state_61726){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_61726);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e61762){if((e61762 instanceof Object))
{var ex__22130__auto__ = e61762;var statearr_61763_61785 = state_61726;(statearr_61763_61785[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61726);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e61762;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__61786 = state_61726;
state_61726 = G__61786;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_61726){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_61726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_61764 = f__22202__auto__.call(null);(statearr_61764[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_61764;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22201__auto___61867 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_61846){var state_val_61847 = (state_61846[1]);if((state_val_61847 === 7))
{var inst_61842 = (state_61846[2]);var state_61846__$1 = state_61846;var statearr_61848_61868 = state_61846__$1;(statearr_61848_61868[2] = inst_61842);
(statearr_61848_61868[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61847 === 1))
{var state_61846__$1 = state_61846;var statearr_61849_61869 = state_61846__$1;(statearr_61849_61869[2] = null);
(statearr_61849_61869[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61847 === 4))
{var inst_61829 = (state_61846[7]);var inst_61829__$1 = (state_61846[2]);var inst_61830 = (inst_61829__$1 == null);var state_61846__$1 = (function (){var statearr_61850 = state_61846;(statearr_61850[7] = inst_61829__$1);
return statearr_61850;
})();if(cljs.core.truth_(inst_61830))
{var statearr_61851_61870 = state_61846__$1;(statearr_61851_61870[1] = 5);
} else
{var statearr_61852_61871 = state_61846__$1;(statearr_61852_61871[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61847 === 6))
{var inst_61829 = (state_61846[7]);var state_61846__$1 = state_61846;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61846__$1,11,to,inst_61829);
} else
{if((state_val_61847 === 3))
{var inst_61844 = (state_61846[2]);var state_61846__$1 = state_61846;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61846__$1,inst_61844);
} else
{if((state_val_61847 === 2))
{var state_61846__$1 = state_61846;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61846__$1,4,from);
} else
{if((state_val_61847 === 11))
{var inst_61839 = (state_61846[2]);var state_61846__$1 = (function (){var statearr_61853 = state_61846;(statearr_61853[8] = inst_61839);
return statearr_61853;
})();var statearr_61854_61872 = state_61846__$1;(statearr_61854_61872[2] = null);
(statearr_61854_61872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61847 === 9))
{var state_61846__$1 = state_61846;var statearr_61855_61873 = state_61846__$1;(statearr_61855_61873[2] = null);
(statearr_61855_61873[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61847 === 5))
{var state_61846__$1 = state_61846;if(cljs.core.truth_(close_QMARK_))
{var statearr_61856_61874 = state_61846__$1;(statearr_61856_61874[1] = 8);
} else
{var statearr_61857_61875 = state_61846__$1;(statearr_61857_61875[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61847 === 10))
{var inst_61836 = (state_61846[2]);var state_61846__$1 = state_61846;var statearr_61858_61876 = state_61846__$1;(statearr_61858_61876[2] = inst_61836);
(statearr_61858_61876[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61847 === 8))
{var inst_61833 = cljs.core.async.close_BANG_.call(null,to);var state_61846__$1 = state_61846;var statearr_61859_61877 = state_61846__$1;(statearr_61859_61877[2] = inst_61833);
(statearr_61859_61877[1] = 10);
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
var state_machine__22127__auto____0 = (function (){var statearr_61863 = [null,null,null,null,null,null,null,null,null];(statearr_61863[0] = state_machine__22127__auto__);
(statearr_61863[1] = 1);
return statearr_61863;
});
var state_machine__22127__auto____1 = (function (state_61846){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_61846);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e61864){if((e61864 instanceof Object))
{var ex__22130__auto__ = e61864;var statearr_61865_61878 = state_61846;(statearr_61865_61878[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61846);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e61864;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__61879 = state_61846;
state_61846 = G__61879;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_61846){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_61846);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_61866 = f__22202__auto__.call(null);(statearr_61866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___61867);
return statearr_61866;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22201__auto___61966 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_61944){var state_val_61945 = (state_61944[1]);if((state_val_61945 === 7))
{var inst_61940 = (state_61944[2]);var state_61944__$1 = state_61944;var statearr_61946_61967 = state_61944__$1;(statearr_61946_61967[2] = inst_61940);
(statearr_61946_61967[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61945 === 1))
{var state_61944__$1 = state_61944;var statearr_61947_61968 = state_61944__$1;(statearr_61947_61968[2] = null);
(statearr_61947_61968[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61945 === 4))
{var inst_61925 = (state_61944[7]);var inst_61925__$1 = (state_61944[2]);var inst_61926 = (inst_61925__$1 == null);var state_61944__$1 = (function (){var statearr_61948 = state_61944;(statearr_61948[7] = inst_61925__$1);
return statearr_61948;
})();if(cljs.core.truth_(inst_61926))
{var statearr_61949_61969 = state_61944__$1;(statearr_61949_61969[1] = 5);
} else
{var statearr_61950_61970 = state_61944__$1;(statearr_61950_61970[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61945 === 6))
{var inst_61925 = (state_61944[7]);var inst_61931 = p.call(null,inst_61925);var state_61944__$1 = state_61944;if(cljs.core.truth_(inst_61931))
{var statearr_61951_61971 = state_61944__$1;(statearr_61951_61971[1] = 9);
} else
{var statearr_61952_61972 = state_61944__$1;(statearr_61952_61972[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61945 === 3))
{var inst_61942 = (state_61944[2]);var state_61944__$1 = state_61944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61944__$1,inst_61942);
} else
{if((state_val_61945 === 2))
{var state_61944__$1 = state_61944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61944__$1,4,ch);
} else
{if((state_val_61945 === 11))
{var inst_61925 = (state_61944[7]);var inst_61935 = (state_61944[2]);var state_61944__$1 = state_61944;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61944__$1,8,inst_61935,inst_61925);
} else
{if((state_val_61945 === 9))
{var state_61944__$1 = state_61944;var statearr_61953_61973 = state_61944__$1;(statearr_61953_61973[2] = tc);
(statearr_61953_61973[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61945 === 5))
{var inst_61928 = cljs.core.async.close_BANG_.call(null,tc);var inst_61929 = cljs.core.async.close_BANG_.call(null,fc);var state_61944__$1 = (function (){var statearr_61954 = state_61944;(statearr_61954[8] = inst_61928);
return statearr_61954;
})();var statearr_61955_61974 = state_61944__$1;(statearr_61955_61974[2] = inst_61929);
(statearr_61955_61974[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61945 === 10))
{var state_61944__$1 = state_61944;var statearr_61956_61975 = state_61944__$1;(statearr_61956_61975[2] = fc);
(statearr_61956_61975[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_61945 === 8))
{var inst_61937 = (state_61944[2]);var state_61944__$1 = (function (){var statearr_61957 = state_61944;(statearr_61957[9] = inst_61937);
return statearr_61957;
})();var statearr_61958_61976 = state_61944__$1;(statearr_61958_61976[2] = null);
(statearr_61958_61976[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_61962 = [null,null,null,null,null,null,null,null,null,null];(statearr_61962[0] = state_machine__22127__auto__);
(statearr_61962[1] = 1);
return statearr_61962;
});
var state_machine__22127__auto____1 = (function (state_61944){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_61944);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e61963){if((e61963 instanceof Object))
{var ex__22130__auto__ = e61963;var statearr_61964_61977 = state_61944;(statearr_61964_61977[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61944);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e61963;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__61978 = state_61944;
state_61944 = G__61978;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_61944){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_61944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_61965 = f__22202__auto__.call(null);(statearr_61965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___61966);
return statearr_61965;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_62025){var state_val_62026 = (state_62025[1]);if((state_val_62026 === 7))
{var inst_62021 = (state_62025[2]);var state_62025__$1 = state_62025;var statearr_62027_62043 = state_62025__$1;(statearr_62027_62043[2] = inst_62021);
(statearr_62027_62043[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62026 === 6))
{var inst_62014 = (state_62025[7]);var inst_62011 = (state_62025[8]);var inst_62018 = f.call(null,inst_62011,inst_62014);var inst_62011__$1 = inst_62018;var state_62025__$1 = (function (){var statearr_62028 = state_62025;(statearr_62028[8] = inst_62011__$1);
return statearr_62028;
})();var statearr_62029_62044 = state_62025__$1;(statearr_62029_62044[2] = null);
(statearr_62029_62044[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62026 === 5))
{var inst_62011 = (state_62025[8]);var state_62025__$1 = state_62025;var statearr_62030_62045 = state_62025__$1;(statearr_62030_62045[2] = inst_62011);
(statearr_62030_62045[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62026 === 4))
{var inst_62014 = (state_62025[7]);var inst_62014__$1 = (state_62025[2]);var inst_62015 = (inst_62014__$1 == null);var state_62025__$1 = (function (){var statearr_62031 = state_62025;(statearr_62031[7] = inst_62014__$1);
return statearr_62031;
})();if(cljs.core.truth_(inst_62015))
{var statearr_62032_62046 = state_62025__$1;(statearr_62032_62046[1] = 5);
} else
{var statearr_62033_62047 = state_62025__$1;(statearr_62033_62047[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62026 === 3))
{var inst_62023 = (state_62025[2]);var state_62025__$1 = state_62025;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62025__$1,inst_62023);
} else
{if((state_val_62026 === 2))
{var state_62025__$1 = state_62025;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62025__$1,4,ch);
} else
{if((state_val_62026 === 1))
{var inst_62011 = init;var state_62025__$1 = (function (){var statearr_62034 = state_62025;(statearr_62034[8] = inst_62011);
return statearr_62034;
})();var statearr_62035_62048 = state_62025__$1;(statearr_62035_62048[2] = null);
(statearr_62035_62048[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_62039 = [null,null,null,null,null,null,null,null,null];(statearr_62039[0] = state_machine__22127__auto__);
(statearr_62039[1] = 1);
return statearr_62039;
});
var state_machine__22127__auto____1 = (function (state_62025){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_62025);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e62040){if((e62040 instanceof Object))
{var ex__22130__auto__ = e62040;var statearr_62041_62049 = state_62025;(statearr_62041_62049[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62025);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e62040;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__62050 = state_62025;
state_62025 = G__62050;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_62025){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_62025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_62042 = f__22202__auto__.call(null);(statearr_62042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_62042;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_62112){var state_val_62113 = (state_62112[1]);if((state_val_62113 === 7))
{var inst_62093 = (state_62112[7]);var inst_62098 = (state_62112[2]);var inst_62099 = cljs.core.next.call(null,inst_62093);var inst_62093__$1 = inst_62099;var state_62112__$1 = (function (){var statearr_62114 = state_62112;(statearr_62114[8] = inst_62098);
(statearr_62114[7] = inst_62093__$1);
return statearr_62114;
})();var statearr_62115_62133 = state_62112__$1;(statearr_62115_62133[2] = null);
(statearr_62115_62133[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62113 === 1))
{var inst_62092 = cljs.core.seq.call(null,coll);var inst_62093 = inst_62092;var state_62112__$1 = (function (){var statearr_62116 = state_62112;(statearr_62116[7] = inst_62093);
return statearr_62116;
})();var statearr_62117_62134 = state_62112__$1;(statearr_62117_62134[2] = null);
(statearr_62117_62134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62113 === 4))
{var inst_62093 = (state_62112[7]);var inst_62096 = cljs.core.first.call(null,inst_62093);var state_62112__$1 = state_62112;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62112__$1,7,ch,inst_62096);
} else
{if((state_val_62113 === 6))
{var inst_62108 = (state_62112[2]);var state_62112__$1 = state_62112;var statearr_62118_62135 = state_62112__$1;(statearr_62118_62135[2] = inst_62108);
(statearr_62118_62135[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62113 === 3))
{var inst_62110 = (state_62112[2]);var state_62112__$1 = state_62112;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62112__$1,inst_62110);
} else
{if((state_val_62113 === 2))
{var inst_62093 = (state_62112[7]);var state_62112__$1 = state_62112;if(cljs.core.truth_(inst_62093))
{var statearr_62119_62136 = state_62112__$1;(statearr_62119_62136[1] = 4);
} else
{var statearr_62120_62137 = state_62112__$1;(statearr_62120_62137[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62113 === 9))
{var state_62112__$1 = state_62112;var statearr_62121_62138 = state_62112__$1;(statearr_62121_62138[2] = null);
(statearr_62121_62138[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62113 === 5))
{var state_62112__$1 = state_62112;if(cljs.core.truth_(close_QMARK_))
{var statearr_62122_62139 = state_62112__$1;(statearr_62122_62139[1] = 8);
} else
{var statearr_62123_62140 = state_62112__$1;(statearr_62123_62140[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62113 === 10))
{var inst_62106 = (state_62112[2]);var state_62112__$1 = state_62112;var statearr_62124_62141 = state_62112__$1;(statearr_62124_62141[2] = inst_62106);
(statearr_62124_62141[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62113 === 8))
{var inst_62103 = cljs.core.async.close_BANG_.call(null,ch);var state_62112__$1 = state_62112;var statearr_62125_62142 = state_62112__$1;(statearr_62125_62142[2] = inst_62103);
(statearr_62125_62142[1] = 10);
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
var state_machine__22127__auto____0 = (function (){var statearr_62129 = [null,null,null,null,null,null,null,null,null];(statearr_62129[0] = state_machine__22127__auto__);
(statearr_62129[1] = 1);
return statearr_62129;
});
var state_machine__22127__auto____1 = (function (state_62112){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_62112);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e62130){if((e62130 instanceof Object))
{var ex__22130__auto__ = e62130;var statearr_62131_62143 = state_62112;(statearr_62131_62143[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62112);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e62130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__62144 = state_62112;
state_62112 = G__62144;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_62112){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_62112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_62132 = f__22202__auto__.call(null);(statearr_62132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_62132;
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
cljs.core.async.Mux = (function (){var obj62146 = {};return obj62146;
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
cljs.core.async.Mult = (function (){var obj62148 = {};return obj62148;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t62372 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t62372 = (function (cs,ch,mult,meta62373){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta62373 = meta62373;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t62372.cljs$lang$type = true;
cljs.core.async.t62372.cljs$lang$ctorStr = "cljs.core.async/t62372";
cljs.core.async.t62372.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t62372");
});})(cs))
;
cljs.core.async.t62372.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t62372.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t62372.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t62372.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t62372.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t62372.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t62372.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_62374){var self__ = this;
var _62374__$1 = this;return self__.meta62373;
});})(cs))
;
cljs.core.async.t62372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_62374,meta62373__$1){var self__ = this;
var _62374__$1 = this;return (new cljs.core.async.t62372(self__.cs,self__.ch,self__.mult,meta62373__$1));
});})(cs))
;
cljs.core.async.__GT_t62372 = ((function (cs){
return (function __GT_t62372(cs__$1,ch__$1,mult__$1,meta62373){return (new cljs.core.async.t62372(cs__$1,ch__$1,mult__$1,meta62373));
});})(cs))
;
}
return (new cljs.core.async.t62372(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22201__auto___62595 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_62509){var state_val_62510 = (state_62509[1]);if((state_val_62510 === 7))
{var inst_62505 = (state_62509[2]);var state_62509__$1 = state_62509;var statearr_62511_62596 = state_62509__$1;(statearr_62511_62596[2] = inst_62505);
(statearr_62511_62596[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 20))
{var inst_62406 = (state_62509[7]);var inst_62416 = cljs.core.first.call(null,inst_62406);var inst_62417 = cljs.core.nth.call(null,inst_62416,0,null);var inst_62418 = cljs.core.nth.call(null,inst_62416,1,null);var state_62509__$1 = (function (){var statearr_62512 = state_62509;(statearr_62512[8] = inst_62417);
return statearr_62512;
})();if(cljs.core.truth_(inst_62418))
{var statearr_62513_62597 = state_62509__$1;(statearr_62513_62597[1] = 22);
} else
{var statearr_62514_62598 = state_62509__$1;(statearr_62514_62598[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 27))
{var inst_62448 = (state_62509[9]);var inst_62446 = (state_62509[10]);var inst_62453 = cljs.core._nth.call(null,inst_62446,inst_62448);var state_62509__$1 = (function (){var statearr_62515 = state_62509;(statearr_62515[11] = inst_62453);
return statearr_62515;
})();var statearr_62516_62599 = state_62509__$1;(statearr_62516_62599[2] = null);
(statearr_62516_62599[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 1))
{var state_62509__$1 = state_62509;var statearr_62517_62600 = state_62509__$1;(statearr_62517_62600[2] = null);
(statearr_62517_62600[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 24))
{var inst_62406 = (state_62509[7]);var inst_62423 = (state_62509[2]);var inst_62424 = cljs.core.next.call(null,inst_62406);var inst_62386 = inst_62424;var inst_62387 = null;var inst_62388 = 0;var inst_62389 = 0;var state_62509__$1 = (function (){var statearr_62518 = state_62509;(statearr_62518[12] = inst_62389);
(statearr_62518[13] = inst_62423);
(statearr_62518[14] = inst_62388);
(statearr_62518[15] = inst_62387);
(statearr_62518[16] = inst_62386);
return statearr_62518;
})();var statearr_62519_62601 = state_62509__$1;(statearr_62519_62601[2] = null);
(statearr_62519_62601[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 39))
{var inst_62466 = (state_62509[17]);var inst_62484 = (state_62509[2]);var inst_62485 = cljs.core.next.call(null,inst_62466);var inst_62445 = inst_62485;var inst_62446 = null;var inst_62447 = 0;var inst_62448 = 0;var state_62509__$1 = (function (){var statearr_62523 = state_62509;(statearr_62523[18] = inst_62447);
(statearr_62523[19] = inst_62484);
(statearr_62523[20] = inst_62445);
(statearr_62523[9] = inst_62448);
(statearr_62523[10] = inst_62446);
return statearr_62523;
})();var statearr_62524_62602 = state_62509__$1;(statearr_62524_62602[2] = null);
(statearr_62524_62602[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 4))
{var inst_62377 = (state_62509[21]);var inst_62377__$1 = (state_62509[2]);var inst_62378 = (inst_62377__$1 == null);var state_62509__$1 = (function (){var statearr_62525 = state_62509;(statearr_62525[21] = inst_62377__$1);
return statearr_62525;
})();if(cljs.core.truth_(inst_62378))
{var statearr_62526_62603 = state_62509__$1;(statearr_62526_62603[1] = 5);
} else
{var statearr_62527_62604 = state_62509__$1;(statearr_62527_62604[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 15))
{var inst_62389 = (state_62509[12]);var inst_62388 = (state_62509[14]);var inst_62387 = (state_62509[15]);var inst_62386 = (state_62509[16]);var inst_62402 = (state_62509[2]);var inst_62403 = (inst_62389 + 1);var tmp62520 = inst_62388;var tmp62521 = inst_62387;var tmp62522 = inst_62386;var inst_62386__$1 = tmp62522;var inst_62387__$1 = tmp62521;var inst_62388__$1 = tmp62520;var inst_62389__$1 = inst_62403;var state_62509__$1 = (function (){var statearr_62528 = state_62509;(statearr_62528[22] = inst_62402);
(statearr_62528[12] = inst_62389__$1);
(statearr_62528[14] = inst_62388__$1);
(statearr_62528[15] = inst_62387__$1);
(statearr_62528[16] = inst_62386__$1);
return statearr_62528;
})();var statearr_62529_62605 = state_62509__$1;(statearr_62529_62605[2] = null);
(statearr_62529_62605[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 21))
{var inst_62427 = (state_62509[2]);var state_62509__$1 = state_62509;var statearr_62530_62606 = state_62509__$1;(statearr_62530_62606[2] = inst_62427);
(statearr_62530_62606[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 31))
{var inst_62453 = (state_62509[11]);var inst_62454 = (state_62509[2]);var inst_62455 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_62456 = cljs.core.async.untap_STAR_.call(null,m,inst_62453);var state_62509__$1 = (function (){var statearr_62531 = state_62509;(statearr_62531[23] = inst_62454);
(statearr_62531[24] = inst_62455);
return statearr_62531;
})();var statearr_62532_62607 = state_62509__$1;(statearr_62532_62607[2] = inst_62456);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62509__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 32))
{var inst_62453 = (state_62509[11]);var inst_62377 = (state_62509[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_62509,31,Object,null,30);var inst_62460 = cljs.core.async.put_BANG_.call(null,inst_62453,inst_62377,done);var state_62509__$1 = state_62509;var statearr_62533_62608 = state_62509__$1;(statearr_62533_62608[2] = inst_62460);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62509__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 40))
{var inst_62475 = (state_62509[25]);var inst_62476 = (state_62509[2]);var inst_62477 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_62478 = cljs.core.async.untap_STAR_.call(null,m,inst_62475);var state_62509__$1 = (function (){var statearr_62534 = state_62509;(statearr_62534[26] = inst_62476);
(statearr_62534[27] = inst_62477);
return statearr_62534;
})();var statearr_62535_62609 = state_62509__$1;(statearr_62535_62609[2] = inst_62478);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62509__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 33))
{var inst_62466 = (state_62509[17]);var inst_62468 = cljs.core.chunked_seq_QMARK_.call(null,inst_62466);var state_62509__$1 = state_62509;if(inst_62468)
{var statearr_62536_62610 = state_62509__$1;(statearr_62536_62610[1] = 36);
} else
{var statearr_62537_62611 = state_62509__$1;(statearr_62537_62611[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 13))
{var inst_62396 = (state_62509[28]);var inst_62399 = cljs.core.async.close_BANG_.call(null,inst_62396);var state_62509__$1 = state_62509;var statearr_62538_62612 = state_62509__$1;(statearr_62538_62612[2] = inst_62399);
(statearr_62538_62612[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 22))
{var inst_62417 = (state_62509[8]);var inst_62420 = cljs.core.async.close_BANG_.call(null,inst_62417);var state_62509__$1 = state_62509;var statearr_62539_62613 = state_62509__$1;(statearr_62539_62613[2] = inst_62420);
(statearr_62539_62613[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 36))
{var inst_62466 = (state_62509[17]);var inst_62470 = cljs.core.chunk_first.call(null,inst_62466);var inst_62471 = cljs.core.chunk_rest.call(null,inst_62466);var inst_62472 = cljs.core.count.call(null,inst_62470);var inst_62445 = inst_62471;var inst_62446 = inst_62470;var inst_62447 = inst_62472;var inst_62448 = 0;var state_62509__$1 = (function (){var statearr_62540 = state_62509;(statearr_62540[18] = inst_62447);
(statearr_62540[20] = inst_62445);
(statearr_62540[9] = inst_62448);
(statearr_62540[10] = inst_62446);
return statearr_62540;
})();var statearr_62541_62614 = state_62509__$1;(statearr_62541_62614[2] = null);
(statearr_62541_62614[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 41))
{var inst_62377 = (state_62509[21]);var inst_62475 = (state_62509[25]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_62509,40,Object,null,39);var inst_62482 = cljs.core.async.put_BANG_.call(null,inst_62475,inst_62377,done);var state_62509__$1 = state_62509;var statearr_62542_62615 = state_62509__$1;(statearr_62542_62615[2] = inst_62482);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62509__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 43))
{var state_62509__$1 = state_62509;var statearr_62543_62616 = state_62509__$1;(statearr_62543_62616[2] = null);
(statearr_62543_62616[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 29))
{var inst_62493 = (state_62509[2]);var state_62509__$1 = state_62509;var statearr_62544_62617 = state_62509__$1;(statearr_62544_62617[2] = inst_62493);
(statearr_62544_62617[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 44))
{var inst_62502 = (state_62509[2]);var state_62509__$1 = (function (){var statearr_62545 = state_62509;(statearr_62545[29] = inst_62502);
return statearr_62545;
})();var statearr_62546_62618 = state_62509__$1;(statearr_62546_62618[2] = null);
(statearr_62546_62618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 6))
{var inst_62437 = (state_62509[30]);var inst_62436 = cljs.core.deref.call(null,cs);var inst_62437__$1 = cljs.core.keys.call(null,inst_62436);var inst_62438 = cljs.core.count.call(null,inst_62437__$1);var inst_62439 = cljs.core.reset_BANG_.call(null,dctr,inst_62438);var inst_62444 = cljs.core.seq.call(null,inst_62437__$1);var inst_62445 = inst_62444;var inst_62446 = null;var inst_62447 = 0;var inst_62448 = 0;var state_62509__$1 = (function (){var statearr_62547 = state_62509;(statearr_62547[31] = inst_62439);
(statearr_62547[18] = inst_62447);
(statearr_62547[30] = inst_62437__$1);
(statearr_62547[20] = inst_62445);
(statearr_62547[9] = inst_62448);
(statearr_62547[10] = inst_62446);
return statearr_62547;
})();var statearr_62548_62619 = state_62509__$1;(statearr_62548_62619[2] = null);
(statearr_62548_62619[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 28))
{var inst_62445 = (state_62509[20]);var inst_62466 = (state_62509[17]);var inst_62466__$1 = cljs.core.seq.call(null,inst_62445);var state_62509__$1 = (function (){var statearr_62549 = state_62509;(statearr_62549[17] = inst_62466__$1);
return statearr_62549;
})();if(inst_62466__$1)
{var statearr_62550_62620 = state_62509__$1;(statearr_62550_62620[1] = 33);
} else
{var statearr_62551_62621 = state_62509__$1;(statearr_62551_62621[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 25))
{var inst_62447 = (state_62509[18]);var inst_62448 = (state_62509[9]);var inst_62450 = (inst_62448 < inst_62447);var inst_62451 = inst_62450;var state_62509__$1 = state_62509;if(cljs.core.truth_(inst_62451))
{var statearr_62552_62622 = state_62509__$1;(statearr_62552_62622[1] = 27);
} else
{var statearr_62553_62623 = state_62509__$1;(statearr_62553_62623[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 34))
{var state_62509__$1 = state_62509;var statearr_62554_62624 = state_62509__$1;(statearr_62554_62624[2] = null);
(statearr_62554_62624[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 17))
{var state_62509__$1 = state_62509;var statearr_62555_62625 = state_62509__$1;(statearr_62555_62625[2] = null);
(statearr_62555_62625[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 3))
{var inst_62507 = (state_62509[2]);var state_62509__$1 = state_62509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62509__$1,inst_62507);
} else
{if((state_val_62510 === 12))
{var inst_62432 = (state_62509[2]);var state_62509__$1 = state_62509;var statearr_62556_62626 = state_62509__$1;(statearr_62556_62626[2] = inst_62432);
(statearr_62556_62626[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 2))
{var state_62509__$1 = state_62509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62509__$1,4,ch);
} else
{if((state_val_62510 === 23))
{var state_62509__$1 = state_62509;var statearr_62557_62627 = state_62509__$1;(statearr_62557_62627[2] = null);
(statearr_62557_62627[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 35))
{var inst_62491 = (state_62509[2]);var state_62509__$1 = state_62509;var statearr_62558_62628 = state_62509__$1;(statearr_62558_62628[2] = inst_62491);
(statearr_62558_62628[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 19))
{var inst_62406 = (state_62509[7]);var inst_62410 = cljs.core.chunk_first.call(null,inst_62406);var inst_62411 = cljs.core.chunk_rest.call(null,inst_62406);var inst_62412 = cljs.core.count.call(null,inst_62410);var inst_62386 = inst_62411;var inst_62387 = inst_62410;var inst_62388 = inst_62412;var inst_62389 = 0;var state_62509__$1 = (function (){var statearr_62559 = state_62509;(statearr_62559[12] = inst_62389);
(statearr_62559[14] = inst_62388);
(statearr_62559[15] = inst_62387);
(statearr_62559[16] = inst_62386);
return statearr_62559;
})();var statearr_62560_62629 = state_62509__$1;(statearr_62560_62629[2] = null);
(statearr_62560_62629[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 11))
{var inst_62406 = (state_62509[7]);var inst_62386 = (state_62509[16]);var inst_62406__$1 = cljs.core.seq.call(null,inst_62386);var state_62509__$1 = (function (){var statearr_62561 = state_62509;(statearr_62561[7] = inst_62406__$1);
return statearr_62561;
})();if(inst_62406__$1)
{var statearr_62562_62630 = state_62509__$1;(statearr_62562_62630[1] = 16);
} else
{var statearr_62563_62631 = state_62509__$1;(statearr_62563_62631[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 9))
{var inst_62434 = (state_62509[2]);var state_62509__$1 = state_62509;var statearr_62564_62632 = state_62509__$1;(statearr_62564_62632[2] = inst_62434);
(statearr_62564_62632[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 5))
{var inst_62384 = cljs.core.deref.call(null,cs);var inst_62385 = cljs.core.seq.call(null,inst_62384);var inst_62386 = inst_62385;var inst_62387 = null;var inst_62388 = 0;var inst_62389 = 0;var state_62509__$1 = (function (){var statearr_62565 = state_62509;(statearr_62565[12] = inst_62389);
(statearr_62565[14] = inst_62388);
(statearr_62565[15] = inst_62387);
(statearr_62565[16] = inst_62386);
return statearr_62565;
})();var statearr_62566_62633 = state_62509__$1;(statearr_62566_62633[2] = null);
(statearr_62566_62633[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 14))
{var state_62509__$1 = state_62509;var statearr_62567_62634 = state_62509__$1;(statearr_62567_62634[2] = null);
(statearr_62567_62634[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 45))
{var inst_62499 = (state_62509[2]);var state_62509__$1 = state_62509;var statearr_62568_62635 = state_62509__$1;(statearr_62568_62635[2] = inst_62499);
(statearr_62568_62635[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 26))
{var inst_62437 = (state_62509[30]);var inst_62495 = (state_62509[2]);var inst_62496 = cljs.core.seq.call(null,inst_62437);var state_62509__$1 = (function (){var statearr_62569 = state_62509;(statearr_62569[32] = inst_62495);
return statearr_62569;
})();if(inst_62496)
{var statearr_62570_62636 = state_62509__$1;(statearr_62570_62636[1] = 42);
} else
{var statearr_62571_62637 = state_62509__$1;(statearr_62571_62637[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 16))
{var inst_62406 = (state_62509[7]);var inst_62408 = cljs.core.chunked_seq_QMARK_.call(null,inst_62406);var state_62509__$1 = state_62509;if(inst_62408)
{var statearr_62575_62638 = state_62509__$1;(statearr_62575_62638[1] = 19);
} else
{var statearr_62576_62639 = state_62509__$1;(statearr_62576_62639[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 38))
{var inst_62488 = (state_62509[2]);var state_62509__$1 = state_62509;var statearr_62577_62640 = state_62509__$1;(statearr_62577_62640[2] = inst_62488);
(statearr_62577_62640[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 30))
{var inst_62447 = (state_62509[18]);var inst_62445 = (state_62509[20]);var inst_62448 = (state_62509[9]);var inst_62446 = (state_62509[10]);var inst_62462 = (state_62509[2]);var inst_62463 = (inst_62448 + 1);var tmp62572 = inst_62447;var tmp62573 = inst_62445;var tmp62574 = inst_62446;var inst_62445__$1 = tmp62573;var inst_62446__$1 = tmp62574;var inst_62447__$1 = tmp62572;var inst_62448__$1 = inst_62463;var state_62509__$1 = (function (){var statearr_62578 = state_62509;(statearr_62578[18] = inst_62447__$1);
(statearr_62578[20] = inst_62445__$1);
(statearr_62578[33] = inst_62462);
(statearr_62578[9] = inst_62448__$1);
(statearr_62578[10] = inst_62446__$1);
return statearr_62578;
})();var statearr_62579_62641 = state_62509__$1;(statearr_62579_62641[2] = null);
(statearr_62579_62641[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 10))
{var inst_62389 = (state_62509[12]);var inst_62387 = (state_62509[15]);var inst_62395 = cljs.core._nth.call(null,inst_62387,inst_62389);var inst_62396 = cljs.core.nth.call(null,inst_62395,0,null);var inst_62397 = cljs.core.nth.call(null,inst_62395,1,null);var state_62509__$1 = (function (){var statearr_62580 = state_62509;(statearr_62580[28] = inst_62396);
return statearr_62580;
})();if(cljs.core.truth_(inst_62397))
{var statearr_62581_62642 = state_62509__$1;(statearr_62581_62642[1] = 13);
} else
{var statearr_62582_62643 = state_62509__$1;(statearr_62582_62643[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 18))
{var inst_62430 = (state_62509[2]);var state_62509__$1 = state_62509;var statearr_62583_62644 = state_62509__$1;(statearr_62583_62644[2] = inst_62430);
(statearr_62583_62644[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 42))
{var state_62509__$1 = state_62509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62509__$1,45,dchan);
} else
{if((state_val_62510 === 37))
{var inst_62466 = (state_62509[17]);var inst_62475 = cljs.core.first.call(null,inst_62466);var state_62509__$1 = (function (){var statearr_62584 = state_62509;(statearr_62584[25] = inst_62475);
return statearr_62584;
})();var statearr_62585_62645 = state_62509__$1;(statearr_62585_62645[2] = null);
(statearr_62585_62645[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62510 === 8))
{var inst_62389 = (state_62509[12]);var inst_62388 = (state_62509[14]);var inst_62391 = (inst_62389 < inst_62388);var inst_62392 = inst_62391;var state_62509__$1 = state_62509;if(cljs.core.truth_(inst_62392))
{var statearr_62586_62646 = state_62509__$1;(statearr_62586_62646[1] = 10);
} else
{var statearr_62587_62647 = state_62509__$1;(statearr_62587_62647[1] = 11);
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
var state_machine__22127__auto____0 = (function (){var statearr_62591 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_62591[0] = state_machine__22127__auto__);
(statearr_62591[1] = 1);
return statearr_62591;
});
var state_machine__22127__auto____1 = (function (state_62509){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_62509);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e62592){if((e62592 instanceof Object))
{var ex__22130__auto__ = e62592;var statearr_62593_62648 = state_62509;(statearr_62593_62648[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62509);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e62592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__62649 = state_62509;
state_62509 = G__62649;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_62509){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_62509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_62594 = f__22202__auto__.call(null);(statearr_62594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___62595);
return statearr_62594;
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
cljs.core.async.Mix = (function (){var obj62651 = {};return obj62651;
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
;var m = (function (){if(typeof cljs.core.async.t62761 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t62761 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62762){
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
this.meta62762 = meta62762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t62761.cljs$lang$type = true;
cljs.core.async.t62761.cljs$lang$ctorStr = "cljs.core.async/t62761";
cljs.core.async.t62761.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t62761");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62761.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t62761.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62761.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62761.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62761.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62761.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62761.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t62761.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62763){var self__ = this;
var _62763__$1 = this;return self__.meta62762;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62763,meta62762__$1){var self__ = this;
var _62763__$1 = this;return (new cljs.core.async.t62761(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta62762__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t62761 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t62761(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62762){return (new cljs.core.async.t62761(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62762));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t62761(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__22201__auto___62870 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_62828){var state_val_62829 = (state_62828[1]);if((state_val_62829 === 7))
{var inst_62777 = (state_62828[7]);var inst_62782 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62777);var state_62828__$1 = state_62828;var statearr_62830_62871 = state_62828__$1;(statearr_62830_62871[2] = inst_62782);
(statearr_62830_62871[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 20))
{var inst_62792 = (state_62828[8]);var state_62828__$1 = state_62828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62828__$1,23,out,inst_62792);
} else
{if((state_val_62829 === 1))
{var inst_62767 = (state_62828[9]);var inst_62767__$1 = calc_state.call(null);var inst_62768 = cljs.core.seq_QMARK_.call(null,inst_62767__$1);var state_62828__$1 = (function (){var statearr_62831 = state_62828;(statearr_62831[9] = inst_62767__$1);
return statearr_62831;
})();if(inst_62768)
{var statearr_62832_62872 = state_62828__$1;(statearr_62832_62872[1] = 2);
} else
{var statearr_62833_62873 = state_62828__$1;(statearr_62833_62873[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 4))
{var inst_62767 = (state_62828[9]);var inst_62773 = (state_62828[2]);var inst_62774 = cljs.core.get.call(null,inst_62773,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_62775 = cljs.core.get.call(null,inst_62773,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_62776 = cljs.core.get.call(null,inst_62773,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_62777 = inst_62767;var state_62828__$1 = (function (){var statearr_62834 = state_62828;(statearr_62834[10] = inst_62775);
(statearr_62834[7] = inst_62777);
(statearr_62834[11] = inst_62774);
(statearr_62834[12] = inst_62776);
return statearr_62834;
})();var statearr_62835_62874 = state_62828__$1;(statearr_62835_62874[2] = null);
(statearr_62835_62874[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 15))
{var state_62828__$1 = state_62828;var statearr_62836_62875 = state_62828__$1;(statearr_62836_62875[2] = null);
(statearr_62836_62875[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 21))
{var state_62828__$1 = state_62828;var statearr_62837_62876 = state_62828__$1;(statearr_62837_62876[2] = null);
(statearr_62837_62876[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 13))
{var inst_62824 = (state_62828[2]);var state_62828__$1 = state_62828;var statearr_62838_62877 = state_62828__$1;(statearr_62838_62877[2] = inst_62824);
(statearr_62838_62877[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 22))
{var inst_62785 = (state_62828[13]);var inst_62821 = (state_62828[2]);var inst_62777 = inst_62785;var state_62828__$1 = (function (){var statearr_62839 = state_62828;(statearr_62839[14] = inst_62821);
(statearr_62839[7] = inst_62777);
return statearr_62839;
})();var statearr_62840_62878 = state_62828__$1;(statearr_62840_62878[2] = null);
(statearr_62840_62878[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 6))
{var inst_62826 = (state_62828[2]);var state_62828__$1 = state_62828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62828__$1,inst_62826);
} else
{if((state_val_62829 === 17))
{var inst_62807 = (state_62828[15]);var state_62828__$1 = state_62828;var statearr_62841_62879 = state_62828__$1;(statearr_62841_62879[2] = inst_62807);
(statearr_62841_62879[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 3))
{var inst_62767 = (state_62828[9]);var state_62828__$1 = state_62828;var statearr_62842_62880 = state_62828__$1;(statearr_62842_62880[2] = inst_62767);
(statearr_62842_62880[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 12))
{var inst_62788 = (state_62828[16]);var inst_62793 = (state_62828[17]);var inst_62807 = (state_62828[15]);var inst_62807__$1 = inst_62788.call(null,inst_62793);var state_62828__$1 = (function (){var statearr_62843 = state_62828;(statearr_62843[15] = inst_62807__$1);
return statearr_62843;
})();if(cljs.core.truth_(inst_62807__$1))
{var statearr_62844_62881 = state_62828__$1;(statearr_62844_62881[1] = 17);
} else
{var statearr_62845_62882 = state_62828__$1;(statearr_62845_62882[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 2))
{var inst_62767 = (state_62828[9]);var inst_62770 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62767);var state_62828__$1 = state_62828;var statearr_62846_62883 = state_62828__$1;(statearr_62846_62883[2] = inst_62770);
(statearr_62846_62883[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 23))
{var inst_62818 = (state_62828[2]);var state_62828__$1 = state_62828;var statearr_62847_62884 = state_62828__$1;(statearr_62847_62884[2] = inst_62818);
(statearr_62847_62884[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 19))
{var inst_62815 = (state_62828[2]);var state_62828__$1 = state_62828;if(cljs.core.truth_(inst_62815))
{var statearr_62848_62885 = state_62828__$1;(statearr_62848_62885[1] = 20);
} else
{var statearr_62849_62886 = state_62828__$1;(statearr_62849_62886[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 11))
{var inst_62792 = (state_62828[8]);var inst_62798 = (inst_62792 == null);var state_62828__$1 = state_62828;if(cljs.core.truth_(inst_62798))
{var statearr_62850_62887 = state_62828__$1;(statearr_62850_62887[1] = 14);
} else
{var statearr_62851_62888 = state_62828__$1;(statearr_62851_62888[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 9))
{var inst_62785 = (state_62828[13]);var inst_62785__$1 = (state_62828[2]);var inst_62786 = cljs.core.get.call(null,inst_62785__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_62787 = cljs.core.get.call(null,inst_62785__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_62788 = cljs.core.get.call(null,inst_62785__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_62828__$1 = (function (){var statearr_62852 = state_62828;(statearr_62852[16] = inst_62788);
(statearr_62852[13] = inst_62785__$1);
(statearr_62852[18] = inst_62787);
return statearr_62852;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_62828__$1,10,inst_62786);
} else
{if((state_val_62829 === 5))
{var inst_62777 = (state_62828[7]);var inst_62780 = cljs.core.seq_QMARK_.call(null,inst_62777);var state_62828__$1 = state_62828;if(inst_62780)
{var statearr_62853_62889 = state_62828__$1;(statearr_62853_62889[1] = 7);
} else
{var statearr_62854_62890 = state_62828__$1;(statearr_62854_62890[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 14))
{var inst_62793 = (state_62828[17]);var inst_62800 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_62793);var state_62828__$1 = state_62828;var statearr_62855_62891 = state_62828__$1;(statearr_62855_62891[2] = inst_62800);
(statearr_62855_62891[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 16))
{var inst_62803 = (state_62828[2]);var inst_62804 = calc_state.call(null);var inst_62777 = inst_62804;var state_62828__$1 = (function (){var statearr_62856 = state_62828;(statearr_62856[7] = inst_62777);
(statearr_62856[19] = inst_62803);
return statearr_62856;
})();var statearr_62857_62892 = state_62828__$1;(statearr_62857_62892[2] = null);
(statearr_62857_62892[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 10))
{var inst_62793 = (state_62828[17]);var inst_62792 = (state_62828[8]);var inst_62791 = (state_62828[2]);var inst_62792__$1 = cljs.core.nth.call(null,inst_62791,0,null);var inst_62793__$1 = cljs.core.nth.call(null,inst_62791,1,null);var inst_62794 = (inst_62792__$1 == null);var inst_62795 = cljs.core._EQ_.call(null,inst_62793__$1,change);var inst_62796 = (inst_62794) || (inst_62795);var state_62828__$1 = (function (){var statearr_62858 = state_62828;(statearr_62858[17] = inst_62793__$1);
(statearr_62858[8] = inst_62792__$1);
return statearr_62858;
})();if(cljs.core.truth_(inst_62796))
{var statearr_62859_62893 = state_62828__$1;(statearr_62859_62893[1] = 11);
} else
{var statearr_62860_62894 = state_62828__$1;(statearr_62860_62894[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 18))
{var inst_62788 = (state_62828[16]);var inst_62793 = (state_62828[17]);var inst_62787 = (state_62828[18]);var inst_62810 = cljs.core.empty_QMARK_.call(null,inst_62788);var inst_62811 = inst_62787.call(null,inst_62793);var inst_62812 = cljs.core.not.call(null,inst_62811);var inst_62813 = (inst_62810) && (inst_62812);var state_62828__$1 = state_62828;var statearr_62861_62895 = state_62828__$1;(statearr_62861_62895[2] = inst_62813);
(statearr_62861_62895[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_62829 === 8))
{var inst_62777 = (state_62828[7]);var state_62828__$1 = state_62828;var statearr_62862_62896 = state_62828__$1;(statearr_62862_62896[2] = inst_62777);
(statearr_62862_62896[1] = 9);
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
var state_machine__22127__auto____0 = (function (){var statearr_62866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_62866[0] = state_machine__22127__auto__);
(statearr_62866[1] = 1);
return statearr_62866;
});
var state_machine__22127__auto____1 = (function (state_62828){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_62828);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e62867){if((e62867 instanceof Object))
{var ex__22130__auto__ = e62867;var statearr_62868_62897 = state_62828;(statearr_62868_62897[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62828);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e62867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__62898 = state_62828;
state_62828 = G__62898;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_62828){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_62828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_62869 = f__22202__auto__.call(null);(statearr_62869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___62870);
return statearr_62869;
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
cljs.core.async.Pub = (function (){var obj62900 = {};return obj62900;
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
return (function (p1__62901_SHARP_){if(cljs.core.truth_(p1__62901_SHARP_.call(null,topic)))
{return p1__62901_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__62901_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14982__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t63026 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t63026 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta63027){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta63027 = meta63027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t63026.cljs$lang$type = true;
cljs.core.async.t63026.cljs$lang$ctorStr = "cljs.core.async/t63026";
cljs.core.async.t63026.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t63026");
});})(mults,ensure_mult))
;
cljs.core.async.t63026.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t63026.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t63026.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t63026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t63026.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t63026.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t63026.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t63026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_63028){var self__ = this;
var _63028__$1 = this;return self__.meta63027;
});})(mults,ensure_mult))
;
cljs.core.async.t63026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_63028,meta63027__$1){var self__ = this;
var _63028__$1 = this;return (new cljs.core.async.t63026(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta63027__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t63026 = ((function (mults,ensure_mult){
return (function __GT_t63026(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta63027){return (new cljs.core.async.t63026(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta63027));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t63026(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22201__auto___63150 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_63102){var state_val_63103 = (state_63102[1]);if((state_val_63103 === 7))
{var inst_63098 = (state_63102[2]);var state_63102__$1 = state_63102;var statearr_63104_63151 = state_63102__$1;(statearr_63104_63151[2] = inst_63098);
(statearr_63104_63151[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 20))
{var state_63102__$1 = state_63102;var statearr_63105_63152 = state_63102__$1;(statearr_63105_63152[2] = null);
(statearr_63105_63152[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 1))
{var state_63102__$1 = state_63102;var statearr_63106_63153 = state_63102__$1;(statearr_63106_63153[2] = null);
(statearr_63106_63153[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 24))
{var inst_63031 = (state_63102[7]);var inst_63081 = (state_63102[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_63102,23,Object,null,22);var inst_63088 = cljs.core.async.muxch_STAR_.call(null,inst_63081);var state_63102__$1 = state_63102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63102__$1,25,inst_63088,inst_63031);
} else
{if((state_val_63103 === 4))
{var inst_63031 = (state_63102[7]);var inst_63031__$1 = (state_63102[2]);var inst_63032 = (inst_63031__$1 == null);var state_63102__$1 = (function (){var statearr_63107 = state_63102;(statearr_63107[7] = inst_63031__$1);
return statearr_63107;
})();if(cljs.core.truth_(inst_63032))
{var statearr_63108_63154 = state_63102__$1;(statearr_63108_63154[1] = 5);
} else
{var statearr_63109_63155 = state_63102__$1;(statearr_63109_63155[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 15))
{var inst_63073 = (state_63102[2]);var state_63102__$1 = state_63102;var statearr_63110_63156 = state_63102__$1;(statearr_63110_63156[2] = inst_63073);
(statearr_63110_63156[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 21))
{var inst_63095 = (state_63102[2]);var state_63102__$1 = (function (){var statearr_63111 = state_63102;(statearr_63111[9] = inst_63095);
return statearr_63111;
})();var statearr_63112_63157 = state_63102__$1;(statearr_63112_63157[2] = null);
(statearr_63112_63157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 13))
{var inst_63055 = (state_63102[10]);var inst_63057 = cljs.core.chunked_seq_QMARK_.call(null,inst_63055);var state_63102__$1 = state_63102;if(inst_63057)
{var statearr_63113_63158 = state_63102__$1;(statearr_63113_63158[1] = 16);
} else
{var statearr_63114_63159 = state_63102__$1;(statearr_63114_63159[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 22))
{var inst_63092 = (state_63102[2]);var state_63102__$1 = state_63102;var statearr_63115_63160 = state_63102__$1;(statearr_63115_63160[2] = inst_63092);
(statearr_63115_63160[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 6))
{var inst_63079 = (state_63102[11]);var inst_63031 = (state_63102[7]);var inst_63081 = (state_63102[8]);var inst_63079__$1 = topic_fn.call(null,inst_63031);var inst_63080 = cljs.core.deref.call(null,mults);var inst_63081__$1 = cljs.core.get.call(null,inst_63080,inst_63079__$1);var state_63102__$1 = (function (){var statearr_63116 = state_63102;(statearr_63116[11] = inst_63079__$1);
(statearr_63116[8] = inst_63081__$1);
return statearr_63116;
})();if(cljs.core.truth_(inst_63081__$1))
{var statearr_63117_63161 = state_63102__$1;(statearr_63117_63161[1] = 19);
} else
{var statearr_63118_63162 = state_63102__$1;(statearr_63118_63162[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 25))
{var inst_63090 = (state_63102[2]);var state_63102__$1 = state_63102;var statearr_63119_63163 = state_63102__$1;(statearr_63119_63163[2] = inst_63090);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63102__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 17))
{var inst_63055 = (state_63102[10]);var inst_63064 = cljs.core.first.call(null,inst_63055);var inst_63065 = cljs.core.async.muxch_STAR_.call(null,inst_63064);var inst_63066 = cljs.core.async.close_BANG_.call(null,inst_63065);var inst_63067 = cljs.core.next.call(null,inst_63055);var inst_63041 = inst_63067;var inst_63042 = null;var inst_63043 = 0;var inst_63044 = 0;var state_63102__$1 = (function (){var statearr_63120 = state_63102;(statearr_63120[12] = inst_63044);
(statearr_63120[13] = inst_63043);
(statearr_63120[14] = inst_63066);
(statearr_63120[15] = inst_63041);
(statearr_63120[16] = inst_63042);
return statearr_63120;
})();var statearr_63121_63164 = state_63102__$1;(statearr_63121_63164[2] = null);
(statearr_63121_63164[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 3))
{var inst_63100 = (state_63102[2]);var state_63102__$1 = state_63102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63102__$1,inst_63100);
} else
{if((state_val_63103 === 12))
{var inst_63075 = (state_63102[2]);var state_63102__$1 = state_63102;var statearr_63122_63165 = state_63102__$1;(statearr_63122_63165[2] = inst_63075);
(statearr_63122_63165[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 2))
{var state_63102__$1 = state_63102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63102__$1,4,ch);
} else
{if((state_val_63103 === 23))
{var inst_63079 = (state_63102[11]);var inst_63083 = (state_63102[2]);var inst_63084 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_63079);var state_63102__$1 = (function (){var statearr_63123 = state_63102;(statearr_63123[17] = inst_63083);
return statearr_63123;
})();var statearr_63124_63166 = state_63102__$1;(statearr_63124_63166[2] = inst_63084);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63102__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 19))
{var state_63102__$1 = state_63102;var statearr_63125_63167 = state_63102__$1;(statearr_63125_63167[2] = null);
(statearr_63125_63167[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 11))
{var inst_63055 = (state_63102[10]);var inst_63041 = (state_63102[15]);var inst_63055__$1 = cljs.core.seq.call(null,inst_63041);var state_63102__$1 = (function (){var statearr_63126 = state_63102;(statearr_63126[10] = inst_63055__$1);
return statearr_63126;
})();if(inst_63055__$1)
{var statearr_63127_63168 = state_63102__$1;(statearr_63127_63168[1] = 13);
} else
{var statearr_63128_63169 = state_63102__$1;(statearr_63128_63169[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 9))
{var inst_63077 = (state_63102[2]);var state_63102__$1 = state_63102;var statearr_63129_63170 = state_63102__$1;(statearr_63129_63170[2] = inst_63077);
(statearr_63129_63170[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 5))
{var inst_63038 = cljs.core.deref.call(null,mults);var inst_63039 = cljs.core.vals.call(null,inst_63038);var inst_63040 = cljs.core.seq.call(null,inst_63039);var inst_63041 = inst_63040;var inst_63042 = null;var inst_63043 = 0;var inst_63044 = 0;var state_63102__$1 = (function (){var statearr_63130 = state_63102;(statearr_63130[12] = inst_63044);
(statearr_63130[13] = inst_63043);
(statearr_63130[15] = inst_63041);
(statearr_63130[16] = inst_63042);
return statearr_63130;
})();var statearr_63131_63171 = state_63102__$1;(statearr_63131_63171[2] = null);
(statearr_63131_63171[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 14))
{var state_63102__$1 = state_63102;var statearr_63135_63172 = state_63102__$1;(statearr_63135_63172[2] = null);
(statearr_63135_63172[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 16))
{var inst_63055 = (state_63102[10]);var inst_63059 = cljs.core.chunk_first.call(null,inst_63055);var inst_63060 = cljs.core.chunk_rest.call(null,inst_63055);var inst_63061 = cljs.core.count.call(null,inst_63059);var inst_63041 = inst_63060;var inst_63042 = inst_63059;var inst_63043 = inst_63061;var inst_63044 = 0;var state_63102__$1 = (function (){var statearr_63136 = state_63102;(statearr_63136[12] = inst_63044);
(statearr_63136[13] = inst_63043);
(statearr_63136[15] = inst_63041);
(statearr_63136[16] = inst_63042);
return statearr_63136;
})();var statearr_63137_63173 = state_63102__$1;(statearr_63137_63173[2] = null);
(statearr_63137_63173[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 10))
{var inst_63044 = (state_63102[12]);var inst_63043 = (state_63102[13]);var inst_63041 = (state_63102[15]);var inst_63042 = (state_63102[16]);var inst_63049 = cljs.core._nth.call(null,inst_63042,inst_63044);var inst_63050 = cljs.core.async.muxch_STAR_.call(null,inst_63049);var inst_63051 = cljs.core.async.close_BANG_.call(null,inst_63050);var inst_63052 = (inst_63044 + 1);var tmp63132 = inst_63043;var tmp63133 = inst_63041;var tmp63134 = inst_63042;var inst_63041__$1 = tmp63133;var inst_63042__$1 = tmp63134;var inst_63043__$1 = tmp63132;var inst_63044__$1 = inst_63052;var state_63102__$1 = (function (){var statearr_63138 = state_63102;(statearr_63138[18] = inst_63051);
(statearr_63138[12] = inst_63044__$1);
(statearr_63138[13] = inst_63043__$1);
(statearr_63138[15] = inst_63041__$1);
(statearr_63138[16] = inst_63042__$1);
return statearr_63138;
})();var statearr_63139_63174 = state_63102__$1;(statearr_63139_63174[2] = null);
(statearr_63139_63174[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 18))
{var inst_63070 = (state_63102[2]);var state_63102__$1 = state_63102;var statearr_63140_63175 = state_63102__$1;(statearr_63140_63175[2] = inst_63070);
(statearr_63140_63175[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63103 === 8))
{var inst_63044 = (state_63102[12]);var inst_63043 = (state_63102[13]);var inst_63046 = (inst_63044 < inst_63043);var inst_63047 = inst_63046;var state_63102__$1 = state_63102;if(cljs.core.truth_(inst_63047))
{var statearr_63141_63176 = state_63102__$1;(statearr_63141_63176[1] = 10);
} else
{var statearr_63142_63177 = state_63102__$1;(statearr_63142_63177[1] = 11);
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
var state_machine__22127__auto____0 = (function (){var statearr_63146 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_63146[0] = state_machine__22127__auto__);
(statearr_63146[1] = 1);
return statearr_63146;
});
var state_machine__22127__auto____1 = (function (state_63102){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_63102);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e63147){if((e63147 instanceof Object))
{var ex__22130__auto__ = e63147;var statearr_63148_63178 = state_63102;(statearr_63148_63178[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63102);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e63147;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__63179 = state_63102;
state_63102 = G__63179;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_63102){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_63102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_63149 = f__22202__auto__.call(null);(statearr_63149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___63150);
return statearr_63149;
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
,cljs.core.range.call(null,cnt));var c__22201__auto___63316 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_63286){var state_val_63287 = (state_63286[1]);if((state_val_63287 === 7))
{var state_63286__$1 = state_63286;var statearr_63288_63317 = state_63286__$1;(statearr_63288_63317[2] = null);
(statearr_63288_63317[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63287 === 1))
{var state_63286__$1 = state_63286;var statearr_63289_63318 = state_63286__$1;(statearr_63289_63318[2] = null);
(statearr_63289_63318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63287 === 4))
{var inst_63250 = (state_63286[7]);var inst_63252 = (inst_63250 < cnt);var state_63286__$1 = state_63286;if(cljs.core.truth_(inst_63252))
{var statearr_63290_63319 = state_63286__$1;(statearr_63290_63319[1] = 6);
} else
{var statearr_63291_63320 = state_63286__$1;(statearr_63291_63320[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63287 === 15))
{var inst_63282 = (state_63286[2]);var state_63286__$1 = state_63286;var statearr_63292_63321 = state_63286__$1;(statearr_63292_63321[2] = inst_63282);
(statearr_63292_63321[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63287 === 13))
{var inst_63275 = cljs.core.async.close_BANG_.call(null,out);var state_63286__$1 = state_63286;var statearr_63293_63322 = state_63286__$1;(statearr_63293_63322[2] = inst_63275);
(statearr_63293_63322[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63287 === 6))
{var state_63286__$1 = state_63286;var statearr_63294_63323 = state_63286__$1;(statearr_63294_63323[2] = null);
(statearr_63294_63323[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63287 === 3))
{var inst_63284 = (state_63286[2]);var state_63286__$1 = state_63286;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63286__$1,inst_63284);
} else
{if((state_val_63287 === 12))
{var inst_63272 = (state_63286[8]);var inst_63272__$1 = (state_63286[2]);var inst_63273 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_63272__$1);var state_63286__$1 = (function (){var statearr_63295 = state_63286;(statearr_63295[8] = inst_63272__$1);
return statearr_63295;
})();if(cljs.core.truth_(inst_63273))
{var statearr_63296_63324 = state_63286__$1;(statearr_63296_63324[1] = 13);
} else
{var statearr_63297_63325 = state_63286__$1;(statearr_63297_63325[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63287 === 2))
{var inst_63249 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_63250 = 0;var state_63286__$1 = (function (){var statearr_63298 = state_63286;(statearr_63298[7] = inst_63250);
(statearr_63298[9] = inst_63249);
return statearr_63298;
})();var statearr_63299_63326 = state_63286__$1;(statearr_63299_63326[2] = null);
(statearr_63299_63326[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63287 === 11))
{var inst_63250 = (state_63286[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_63286,10,Object,null,9);var inst_63259 = chs__$1.call(null,inst_63250);var inst_63260 = done.call(null,inst_63250);var inst_63261 = cljs.core.async.take_BANG_.call(null,inst_63259,inst_63260);var state_63286__$1 = state_63286;var statearr_63300_63327 = state_63286__$1;(statearr_63300_63327[2] = inst_63261);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63286__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63287 === 9))
{var inst_63250 = (state_63286[7]);var inst_63263 = (state_63286[2]);var inst_63264 = (inst_63250 + 1);var inst_63250__$1 = inst_63264;var state_63286__$1 = (function (){var statearr_63301 = state_63286;(statearr_63301[7] = inst_63250__$1);
(statearr_63301[10] = inst_63263);
return statearr_63301;
})();var statearr_63302_63328 = state_63286__$1;(statearr_63302_63328[2] = null);
(statearr_63302_63328[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63287 === 5))
{var inst_63270 = (state_63286[2]);var state_63286__$1 = (function (){var statearr_63303 = state_63286;(statearr_63303[11] = inst_63270);
return statearr_63303;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63286__$1,12,dchan);
} else
{if((state_val_63287 === 14))
{var inst_63272 = (state_63286[8]);var inst_63277 = cljs.core.apply.call(null,f,inst_63272);var state_63286__$1 = state_63286;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63286__$1,16,out,inst_63277);
} else
{if((state_val_63287 === 16))
{var inst_63279 = (state_63286[2]);var state_63286__$1 = (function (){var statearr_63304 = state_63286;(statearr_63304[12] = inst_63279);
return statearr_63304;
})();var statearr_63305_63329 = state_63286__$1;(statearr_63305_63329[2] = null);
(statearr_63305_63329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63287 === 10))
{var inst_63254 = (state_63286[2]);var inst_63255 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_63286__$1 = (function (){var statearr_63306 = state_63286;(statearr_63306[13] = inst_63254);
return statearr_63306;
})();var statearr_63307_63330 = state_63286__$1;(statearr_63307_63330[2] = inst_63255);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63286__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63287 === 8))
{var inst_63268 = (state_63286[2]);var state_63286__$1 = state_63286;var statearr_63308_63331 = state_63286__$1;(statearr_63308_63331[2] = inst_63268);
(statearr_63308_63331[1] = 5);
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
var state_machine__22127__auto____0 = (function (){var statearr_63312 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_63312[0] = state_machine__22127__auto__);
(statearr_63312[1] = 1);
return statearr_63312;
});
var state_machine__22127__auto____1 = (function (state_63286){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_63286);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e63313){if((e63313 instanceof Object))
{var ex__22130__auto__ = e63313;var statearr_63314_63332 = state_63286;(statearr_63314_63332[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63286);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e63313;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__63333 = state_63286;
state_63286 = G__63333;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_63286){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_63286);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_63315 = f__22202__auto__.call(null);(statearr_63315[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___63316);
return statearr_63315;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___63441 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_63417){var state_val_63418 = (state_63417[1]);if((state_val_63418 === 7))
{var inst_63396 = (state_63417[7]);var inst_63397 = (state_63417[8]);var inst_63396__$1 = (state_63417[2]);var inst_63397__$1 = cljs.core.nth.call(null,inst_63396__$1,0,null);var inst_63398 = cljs.core.nth.call(null,inst_63396__$1,1,null);var inst_63399 = (inst_63397__$1 == null);var state_63417__$1 = (function (){var statearr_63419 = state_63417;(statearr_63419[9] = inst_63398);
(statearr_63419[7] = inst_63396__$1);
(statearr_63419[8] = inst_63397__$1);
return statearr_63419;
})();if(cljs.core.truth_(inst_63399))
{var statearr_63420_63442 = state_63417__$1;(statearr_63420_63442[1] = 8);
} else
{var statearr_63421_63443 = state_63417__$1;(statearr_63421_63443[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63418 === 1))
{var inst_63388 = cljs.core.vec.call(null,chs);var inst_63389 = inst_63388;var state_63417__$1 = (function (){var statearr_63422 = state_63417;(statearr_63422[10] = inst_63389);
return statearr_63422;
})();var statearr_63423_63444 = state_63417__$1;(statearr_63423_63444[2] = null);
(statearr_63423_63444[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63418 === 4))
{var inst_63389 = (state_63417[10]);var state_63417__$1 = state_63417;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_63417__$1,7,inst_63389);
} else
{if((state_val_63418 === 6))
{var inst_63413 = (state_63417[2]);var state_63417__$1 = state_63417;var statearr_63424_63445 = state_63417__$1;(statearr_63424_63445[2] = inst_63413);
(statearr_63424_63445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63418 === 3))
{var inst_63415 = (state_63417[2]);var state_63417__$1 = state_63417;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63417__$1,inst_63415);
} else
{if((state_val_63418 === 2))
{var inst_63389 = (state_63417[10]);var inst_63391 = cljs.core.count.call(null,inst_63389);var inst_63392 = (inst_63391 > 0);var state_63417__$1 = state_63417;if(cljs.core.truth_(inst_63392))
{var statearr_63426_63446 = state_63417__$1;(statearr_63426_63446[1] = 4);
} else
{var statearr_63427_63447 = state_63417__$1;(statearr_63427_63447[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63418 === 11))
{var inst_63389 = (state_63417[10]);var inst_63406 = (state_63417[2]);var tmp63425 = inst_63389;var inst_63389__$1 = tmp63425;var state_63417__$1 = (function (){var statearr_63428 = state_63417;(statearr_63428[10] = inst_63389__$1);
(statearr_63428[11] = inst_63406);
return statearr_63428;
})();var statearr_63429_63448 = state_63417__$1;(statearr_63429_63448[2] = null);
(statearr_63429_63448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63418 === 9))
{var inst_63397 = (state_63417[8]);var state_63417__$1 = state_63417;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63417__$1,11,out,inst_63397);
} else
{if((state_val_63418 === 5))
{var inst_63411 = cljs.core.async.close_BANG_.call(null,out);var state_63417__$1 = state_63417;var statearr_63430_63449 = state_63417__$1;(statearr_63430_63449[2] = inst_63411);
(statearr_63430_63449[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63418 === 10))
{var inst_63409 = (state_63417[2]);var state_63417__$1 = state_63417;var statearr_63431_63450 = state_63417__$1;(statearr_63431_63450[2] = inst_63409);
(statearr_63431_63450[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63418 === 8))
{var inst_63389 = (state_63417[10]);var inst_63398 = (state_63417[9]);var inst_63396 = (state_63417[7]);var inst_63397 = (state_63417[8]);var inst_63401 = (function (){var c = inst_63398;var v = inst_63397;var vec__63394 = inst_63396;var cs = inst_63389;return ((function (c,v,vec__63394,cs,inst_63389,inst_63398,inst_63396,inst_63397,state_val_63418){
return (function (p1__63334_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__63334_SHARP_);
});
;})(c,v,vec__63394,cs,inst_63389,inst_63398,inst_63396,inst_63397,state_val_63418))
})();var inst_63402 = cljs.core.filterv.call(null,inst_63401,inst_63389);var inst_63389__$1 = inst_63402;var state_63417__$1 = (function (){var statearr_63432 = state_63417;(statearr_63432[10] = inst_63389__$1);
return statearr_63432;
})();var statearr_63433_63451 = state_63417__$1;(statearr_63433_63451[2] = null);
(statearr_63433_63451[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_63437 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_63437[0] = state_machine__22127__auto__);
(statearr_63437[1] = 1);
return statearr_63437;
});
var state_machine__22127__auto____1 = (function (state_63417){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_63417);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e63438){if((e63438 instanceof Object))
{var ex__22130__auto__ = e63438;var statearr_63439_63452 = state_63417;(statearr_63439_63452[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63417);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e63438;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__63453 = state_63417;
state_63417 = G__63453;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_63417){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_63417);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_63440 = f__22202__auto__.call(null);(statearr_63440[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___63441);
return statearr_63440;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___63546 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_63523){var state_val_63524 = (state_63523[1]);if((state_val_63524 === 7))
{var inst_63505 = (state_63523[7]);var inst_63505__$1 = (state_63523[2]);var inst_63506 = (inst_63505__$1 == null);var inst_63507 = cljs.core.not.call(null,inst_63506);var state_63523__$1 = (function (){var statearr_63525 = state_63523;(statearr_63525[7] = inst_63505__$1);
return statearr_63525;
})();if(inst_63507)
{var statearr_63526_63547 = state_63523__$1;(statearr_63526_63547[1] = 8);
} else
{var statearr_63527_63548 = state_63523__$1;(statearr_63527_63548[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63524 === 1))
{var inst_63500 = 0;var state_63523__$1 = (function (){var statearr_63528 = state_63523;(statearr_63528[8] = inst_63500);
return statearr_63528;
})();var statearr_63529_63549 = state_63523__$1;(statearr_63529_63549[2] = null);
(statearr_63529_63549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63524 === 4))
{var state_63523__$1 = state_63523;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63523__$1,7,ch);
} else
{if((state_val_63524 === 6))
{var inst_63518 = (state_63523[2]);var state_63523__$1 = state_63523;var statearr_63530_63550 = state_63523__$1;(statearr_63530_63550[2] = inst_63518);
(statearr_63530_63550[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63524 === 3))
{var inst_63520 = (state_63523[2]);var inst_63521 = cljs.core.async.close_BANG_.call(null,out);var state_63523__$1 = (function (){var statearr_63531 = state_63523;(statearr_63531[9] = inst_63520);
return statearr_63531;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63523__$1,inst_63521);
} else
{if((state_val_63524 === 2))
{var inst_63500 = (state_63523[8]);var inst_63502 = (inst_63500 < n);var state_63523__$1 = state_63523;if(cljs.core.truth_(inst_63502))
{var statearr_63532_63551 = state_63523__$1;(statearr_63532_63551[1] = 4);
} else
{var statearr_63533_63552 = state_63523__$1;(statearr_63533_63552[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63524 === 11))
{var inst_63500 = (state_63523[8]);var inst_63510 = (state_63523[2]);var inst_63511 = (inst_63500 + 1);var inst_63500__$1 = inst_63511;var state_63523__$1 = (function (){var statearr_63534 = state_63523;(statearr_63534[10] = inst_63510);
(statearr_63534[8] = inst_63500__$1);
return statearr_63534;
})();var statearr_63535_63553 = state_63523__$1;(statearr_63535_63553[2] = null);
(statearr_63535_63553[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63524 === 9))
{var state_63523__$1 = state_63523;var statearr_63536_63554 = state_63523__$1;(statearr_63536_63554[2] = null);
(statearr_63536_63554[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63524 === 5))
{var state_63523__$1 = state_63523;var statearr_63537_63555 = state_63523__$1;(statearr_63537_63555[2] = null);
(statearr_63537_63555[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63524 === 10))
{var inst_63515 = (state_63523[2]);var state_63523__$1 = state_63523;var statearr_63538_63556 = state_63523__$1;(statearr_63538_63556[2] = inst_63515);
(statearr_63538_63556[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63524 === 8))
{var inst_63505 = (state_63523[7]);var state_63523__$1 = state_63523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63523__$1,11,out,inst_63505);
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
var state_machine__22127__auto____0 = (function (){var statearr_63542 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_63542[0] = state_machine__22127__auto__);
(statearr_63542[1] = 1);
return statearr_63542;
});
var state_machine__22127__auto____1 = (function (state_63523){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_63523);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e63543){if((e63543 instanceof Object))
{var ex__22130__auto__ = e63543;var statearr_63544_63557 = state_63523;(statearr_63544_63557[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63523);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e63543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__63558 = state_63523;
state_63523 = G__63558;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_63523){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_63523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_63545 = f__22202__auto__.call(null);(statearr_63545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___63546);
return statearr_63545;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___63655 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_63630){var state_val_63631 = (state_63630[1]);if((state_val_63631 === 7))
{var inst_63625 = (state_63630[2]);var state_63630__$1 = state_63630;var statearr_63632_63656 = state_63630__$1;(statearr_63632_63656[2] = inst_63625);
(statearr_63632_63656[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63631 === 1))
{var inst_63607 = null;var state_63630__$1 = (function (){var statearr_63633 = state_63630;(statearr_63633[7] = inst_63607);
return statearr_63633;
})();var statearr_63634_63657 = state_63630__$1;(statearr_63634_63657[2] = null);
(statearr_63634_63657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63631 === 4))
{var inst_63610 = (state_63630[8]);var inst_63610__$1 = (state_63630[2]);var inst_63611 = (inst_63610__$1 == null);var inst_63612 = cljs.core.not.call(null,inst_63611);var state_63630__$1 = (function (){var statearr_63635 = state_63630;(statearr_63635[8] = inst_63610__$1);
return statearr_63635;
})();if(inst_63612)
{var statearr_63636_63658 = state_63630__$1;(statearr_63636_63658[1] = 5);
} else
{var statearr_63637_63659 = state_63630__$1;(statearr_63637_63659[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63631 === 6))
{var state_63630__$1 = state_63630;var statearr_63638_63660 = state_63630__$1;(statearr_63638_63660[2] = null);
(statearr_63638_63660[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63631 === 3))
{var inst_63627 = (state_63630[2]);var inst_63628 = cljs.core.async.close_BANG_.call(null,out);var state_63630__$1 = (function (){var statearr_63639 = state_63630;(statearr_63639[9] = inst_63627);
return statearr_63639;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63630__$1,inst_63628);
} else
{if((state_val_63631 === 2))
{var state_63630__$1 = state_63630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63630__$1,4,ch);
} else
{if((state_val_63631 === 11))
{var inst_63610 = (state_63630[8]);var inst_63619 = (state_63630[2]);var inst_63607 = inst_63610;var state_63630__$1 = (function (){var statearr_63640 = state_63630;(statearr_63640[10] = inst_63619);
(statearr_63640[7] = inst_63607);
return statearr_63640;
})();var statearr_63641_63661 = state_63630__$1;(statearr_63641_63661[2] = null);
(statearr_63641_63661[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63631 === 9))
{var inst_63610 = (state_63630[8]);var state_63630__$1 = state_63630;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63630__$1,11,out,inst_63610);
} else
{if((state_val_63631 === 5))
{var inst_63610 = (state_63630[8]);var inst_63607 = (state_63630[7]);var inst_63614 = cljs.core._EQ_.call(null,inst_63610,inst_63607);var state_63630__$1 = state_63630;if(inst_63614)
{var statearr_63643_63662 = state_63630__$1;(statearr_63643_63662[1] = 8);
} else
{var statearr_63644_63663 = state_63630__$1;(statearr_63644_63663[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63631 === 10))
{var inst_63622 = (state_63630[2]);var state_63630__$1 = state_63630;var statearr_63645_63664 = state_63630__$1;(statearr_63645_63664[2] = inst_63622);
(statearr_63645_63664[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63631 === 8))
{var inst_63607 = (state_63630[7]);var tmp63642 = inst_63607;var inst_63607__$1 = tmp63642;var state_63630__$1 = (function (){var statearr_63646 = state_63630;(statearr_63646[7] = inst_63607__$1);
return statearr_63646;
})();var statearr_63647_63665 = state_63630__$1;(statearr_63647_63665[2] = null);
(statearr_63647_63665[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_63651 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_63651[0] = state_machine__22127__auto__);
(statearr_63651[1] = 1);
return statearr_63651;
});
var state_machine__22127__auto____1 = (function (state_63630){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_63630);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e63652){if((e63652 instanceof Object))
{var ex__22130__auto__ = e63652;var statearr_63653_63666 = state_63630;(statearr_63653_63666[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63630);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e63652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__63667 = state_63630;
state_63630 = G__63667;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_63630){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_63630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_63654 = f__22202__auto__.call(null);(statearr_63654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___63655);
return statearr_63654;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___63802 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_63772){var state_val_63773 = (state_63772[1]);if((state_val_63773 === 7))
{var inst_63768 = (state_63772[2]);var state_63772__$1 = state_63772;var statearr_63774_63803 = state_63772__$1;(statearr_63774_63803[2] = inst_63768);
(statearr_63774_63803[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63773 === 1))
{var inst_63735 = (new Array(n));var inst_63736 = inst_63735;var inst_63737 = 0;var state_63772__$1 = (function (){var statearr_63775 = state_63772;(statearr_63775[7] = inst_63736);
(statearr_63775[8] = inst_63737);
return statearr_63775;
})();var statearr_63776_63804 = state_63772__$1;(statearr_63776_63804[2] = null);
(statearr_63776_63804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63773 === 4))
{var inst_63740 = (state_63772[9]);var inst_63740__$1 = (state_63772[2]);var inst_63741 = (inst_63740__$1 == null);var inst_63742 = cljs.core.not.call(null,inst_63741);var state_63772__$1 = (function (){var statearr_63777 = state_63772;(statearr_63777[9] = inst_63740__$1);
return statearr_63777;
})();if(inst_63742)
{var statearr_63778_63805 = state_63772__$1;(statearr_63778_63805[1] = 5);
} else
{var statearr_63779_63806 = state_63772__$1;(statearr_63779_63806[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63773 === 15))
{var inst_63762 = (state_63772[2]);var state_63772__$1 = state_63772;var statearr_63780_63807 = state_63772__$1;(statearr_63780_63807[2] = inst_63762);
(statearr_63780_63807[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63773 === 13))
{var state_63772__$1 = state_63772;var statearr_63781_63808 = state_63772__$1;(statearr_63781_63808[2] = null);
(statearr_63781_63808[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63773 === 6))
{var inst_63737 = (state_63772[8]);var inst_63758 = (inst_63737 > 0);var state_63772__$1 = state_63772;if(cljs.core.truth_(inst_63758))
{var statearr_63782_63809 = state_63772__$1;(statearr_63782_63809[1] = 12);
} else
{var statearr_63783_63810 = state_63772__$1;(statearr_63783_63810[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63773 === 3))
{var inst_63770 = (state_63772[2]);var state_63772__$1 = state_63772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63772__$1,inst_63770);
} else
{if((state_val_63773 === 12))
{var inst_63736 = (state_63772[7]);var inst_63760 = cljs.core.vec.call(null,inst_63736);var state_63772__$1 = state_63772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63772__$1,15,out,inst_63760);
} else
{if((state_val_63773 === 2))
{var state_63772__$1 = state_63772;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63772__$1,4,ch);
} else
{if((state_val_63773 === 11))
{var inst_63752 = (state_63772[2]);var inst_63753 = (new Array(n));var inst_63736 = inst_63753;var inst_63737 = 0;var state_63772__$1 = (function (){var statearr_63784 = state_63772;(statearr_63784[10] = inst_63752);
(statearr_63784[7] = inst_63736);
(statearr_63784[8] = inst_63737);
return statearr_63784;
})();var statearr_63785_63811 = state_63772__$1;(statearr_63785_63811[2] = null);
(statearr_63785_63811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63773 === 9))
{var inst_63736 = (state_63772[7]);var inst_63750 = cljs.core.vec.call(null,inst_63736);var state_63772__$1 = state_63772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63772__$1,11,out,inst_63750);
} else
{if((state_val_63773 === 5))
{var inst_63740 = (state_63772[9]);var inst_63736 = (state_63772[7]);var inst_63737 = (state_63772[8]);var inst_63745 = (state_63772[11]);var inst_63744 = (inst_63736[inst_63737] = inst_63740);var inst_63745__$1 = (inst_63737 + 1);var inst_63746 = (inst_63745__$1 < n);var state_63772__$1 = (function (){var statearr_63786 = state_63772;(statearr_63786[12] = inst_63744);
(statearr_63786[11] = inst_63745__$1);
return statearr_63786;
})();if(cljs.core.truth_(inst_63746))
{var statearr_63787_63812 = state_63772__$1;(statearr_63787_63812[1] = 8);
} else
{var statearr_63788_63813 = state_63772__$1;(statearr_63788_63813[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63773 === 14))
{var inst_63765 = (state_63772[2]);var inst_63766 = cljs.core.async.close_BANG_.call(null,out);var state_63772__$1 = (function (){var statearr_63790 = state_63772;(statearr_63790[13] = inst_63765);
return statearr_63790;
})();var statearr_63791_63814 = state_63772__$1;(statearr_63791_63814[2] = inst_63766);
(statearr_63791_63814[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63773 === 10))
{var inst_63756 = (state_63772[2]);var state_63772__$1 = state_63772;var statearr_63792_63815 = state_63772__$1;(statearr_63792_63815[2] = inst_63756);
(statearr_63792_63815[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63773 === 8))
{var inst_63736 = (state_63772[7]);var inst_63745 = (state_63772[11]);var tmp63789 = inst_63736;var inst_63736__$1 = tmp63789;var inst_63737 = inst_63745;var state_63772__$1 = (function (){var statearr_63793 = state_63772;(statearr_63793[7] = inst_63736__$1);
(statearr_63793[8] = inst_63737);
return statearr_63793;
})();var statearr_63794_63816 = state_63772__$1;(statearr_63794_63816[2] = null);
(statearr_63794_63816[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_63798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_63798[0] = state_machine__22127__auto__);
(statearr_63798[1] = 1);
return statearr_63798;
});
var state_machine__22127__auto____1 = (function (state_63772){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_63772);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e63799){if((e63799 instanceof Object))
{var ex__22130__auto__ = e63799;var statearr_63800_63817 = state_63772;(statearr_63800_63817[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63772);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e63799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__63818 = state_63772;
state_63772 = G__63818;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_63772){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_63772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_63801 = f__22202__auto__.call(null);(statearr_63801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___63802);
return statearr_63801;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___63961 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_63931){var state_val_63932 = (state_63931[1]);if((state_val_63932 === 7))
{var inst_63927 = (state_63931[2]);var state_63931__$1 = state_63931;var statearr_63933_63962 = state_63931__$1;(statearr_63933_63962[2] = inst_63927);
(statearr_63933_63962[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63932 === 1))
{var inst_63890 = [];var inst_63891 = inst_63890;var inst_63892 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_63931__$1 = (function (){var statearr_63934 = state_63931;(statearr_63934[7] = inst_63891);
(statearr_63934[8] = inst_63892);
return statearr_63934;
})();var statearr_63935_63963 = state_63931__$1;(statearr_63935_63963[2] = null);
(statearr_63935_63963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63932 === 4))
{var inst_63895 = (state_63931[9]);var inst_63895__$1 = (state_63931[2]);var inst_63896 = (inst_63895__$1 == null);var inst_63897 = cljs.core.not.call(null,inst_63896);var state_63931__$1 = (function (){var statearr_63936 = state_63931;(statearr_63936[9] = inst_63895__$1);
return statearr_63936;
})();if(inst_63897)
{var statearr_63937_63964 = state_63931__$1;(statearr_63937_63964[1] = 5);
} else
{var statearr_63938_63965 = state_63931__$1;(statearr_63938_63965[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63932 === 15))
{var inst_63921 = (state_63931[2]);var state_63931__$1 = state_63931;var statearr_63939_63966 = state_63931__$1;(statearr_63939_63966[2] = inst_63921);
(statearr_63939_63966[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63932 === 13))
{var state_63931__$1 = state_63931;var statearr_63940_63967 = state_63931__$1;(statearr_63940_63967[2] = null);
(statearr_63940_63967[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63932 === 6))
{var inst_63891 = (state_63931[7]);var inst_63916 = inst_63891.length;var inst_63917 = (inst_63916 > 0);var state_63931__$1 = state_63931;if(cljs.core.truth_(inst_63917))
{var statearr_63941_63968 = state_63931__$1;(statearr_63941_63968[1] = 12);
} else
{var statearr_63942_63969 = state_63931__$1;(statearr_63942_63969[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63932 === 3))
{var inst_63929 = (state_63931[2]);var state_63931__$1 = state_63931;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63931__$1,inst_63929);
} else
{if((state_val_63932 === 12))
{var inst_63891 = (state_63931[7]);var inst_63919 = cljs.core.vec.call(null,inst_63891);var state_63931__$1 = state_63931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63931__$1,15,out,inst_63919);
} else
{if((state_val_63932 === 2))
{var state_63931__$1 = state_63931;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63931__$1,4,ch);
} else
{if((state_val_63932 === 11))
{var inst_63899 = (state_63931[10]);var inst_63895 = (state_63931[9]);var inst_63909 = (state_63931[2]);var inst_63910 = [];var inst_63911 = inst_63910.push(inst_63895);var inst_63891 = inst_63910;var inst_63892 = inst_63899;var state_63931__$1 = (function (){var statearr_63943 = state_63931;(statearr_63943[11] = inst_63911);
(statearr_63943[7] = inst_63891);
(statearr_63943[8] = inst_63892);
(statearr_63943[12] = inst_63909);
return statearr_63943;
})();var statearr_63944_63970 = state_63931__$1;(statearr_63944_63970[2] = null);
(statearr_63944_63970[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63932 === 9))
{var inst_63891 = (state_63931[7]);var inst_63907 = cljs.core.vec.call(null,inst_63891);var state_63931__$1 = state_63931;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63931__$1,11,out,inst_63907);
} else
{if((state_val_63932 === 5))
{var inst_63899 = (state_63931[10]);var inst_63895 = (state_63931[9]);var inst_63892 = (state_63931[8]);var inst_63899__$1 = f.call(null,inst_63895);var inst_63900 = cljs.core._EQ_.call(null,inst_63899__$1,inst_63892);var inst_63901 = cljs.core.keyword_identical_QMARK_.call(null,inst_63892,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_63902 = (inst_63900) || (inst_63901);var state_63931__$1 = (function (){var statearr_63945 = state_63931;(statearr_63945[10] = inst_63899__$1);
return statearr_63945;
})();if(cljs.core.truth_(inst_63902))
{var statearr_63946_63971 = state_63931__$1;(statearr_63946_63971[1] = 8);
} else
{var statearr_63947_63972 = state_63931__$1;(statearr_63947_63972[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63932 === 14))
{var inst_63924 = (state_63931[2]);var inst_63925 = cljs.core.async.close_BANG_.call(null,out);var state_63931__$1 = (function (){var statearr_63949 = state_63931;(statearr_63949[13] = inst_63924);
return statearr_63949;
})();var statearr_63950_63973 = state_63931__$1;(statearr_63950_63973[2] = inst_63925);
(statearr_63950_63973[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63932 === 10))
{var inst_63914 = (state_63931[2]);var state_63931__$1 = state_63931;var statearr_63951_63974 = state_63931__$1;(statearr_63951_63974[2] = inst_63914);
(statearr_63951_63974[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_63932 === 8))
{var inst_63891 = (state_63931[7]);var inst_63899 = (state_63931[10]);var inst_63895 = (state_63931[9]);var inst_63904 = inst_63891.push(inst_63895);var tmp63948 = inst_63891;var inst_63891__$1 = tmp63948;var inst_63892 = inst_63899;var state_63931__$1 = (function (){var statearr_63952 = state_63931;(statearr_63952[7] = inst_63891__$1);
(statearr_63952[14] = inst_63904);
(statearr_63952[8] = inst_63892);
return statearr_63952;
})();var statearr_63953_63975 = state_63931__$1;(statearr_63953_63975[2] = null);
(statearr_63953_63975[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_63957 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_63957[0] = state_machine__22127__auto__);
(statearr_63957[1] = 1);
return statearr_63957;
});
var state_machine__22127__auto____1 = (function (state_63931){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_63931);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e63958){if((e63958 instanceof Object))
{var ex__22130__auto__ = e63958;var statearr_63959_63976 = state_63931;(statearr_63959_63976[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63931);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e63958;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__63977 = state_63931;
state_63931 = G__63977;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_63931){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_63931);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_63960 = f__22202__auto__.call(null);(statearr_63960[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___63961);
return statearr_63960;
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

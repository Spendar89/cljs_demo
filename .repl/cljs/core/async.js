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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t26495 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26495 = (function (f,fn_handler,meta26496){
this.f = f;
this.fn_handler = fn_handler;
this.meta26496 = meta26496;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26495.cljs$lang$type = true;
cljs.core.async.t26495.cljs$lang$ctorStr = "cljs.core.async/t26495";
cljs.core.async.t26495.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26495");
});
cljs.core.async.t26495.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26495.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t26495.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t26495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26497){var self__ = this;
var _26497__$1 = this;return self__.meta26496;
});
cljs.core.async.t26495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26497,meta26496__$1){var self__ = this;
var _26497__$1 = this;return (new cljs.core.async.t26495(self__.f,self__.fn_handler,meta26496__$1));
});
cljs.core.async.__GT_t26495 = (function __GT_t26495(f__$1,fn_handler__$1,meta26496){return (new cljs.core.async.t26495(f__$1,fn_handler__$1,meta26496));
});
}
return (new cljs.core.async.t26495(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__26499 = buff;if(G__26499)
{var bit__15632__auto__ = null;if(cljs.core.truth_((function (){var or__14982__auto__ = bit__15632__auto__;if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return G__26499.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__26499.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26499);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__26499);
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
{var val_26500 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_26500);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_26500);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15830__auto___26501 = n;var x_26502 = 0;while(true){
if((x_26502 < n__15830__auto___26501))
{(a[x_26502] = 0);
{
var G__26503 = (x_26502 + 1);
x_26502 = G__26503;
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
var G__26504 = (i + 1);
i = G__26504;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t26508 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26508 = (function (flag,alt_flag,meta26509){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta26509 = meta26509;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26508.cljs$lang$type = true;
cljs.core.async.t26508.cljs$lang$ctorStr = "cljs.core.async/t26508";
cljs.core.async.t26508.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26508");
});
cljs.core.async.t26508.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26508.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t26508.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t26508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26510){var self__ = this;
var _26510__$1 = this;return self__.meta26509;
});
cljs.core.async.t26508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26510,meta26509__$1){var self__ = this;
var _26510__$1 = this;return (new cljs.core.async.t26508(self__.flag,self__.alt_flag,meta26509__$1));
});
cljs.core.async.__GT_t26508 = (function __GT_t26508(flag__$1,alt_flag__$1,meta26509){return (new cljs.core.async.t26508(flag__$1,alt_flag__$1,meta26509));
});
}
return (new cljs.core.async.t26508(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t26514 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26514 = (function (cb,flag,alt_handler,meta26515){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta26515 = meta26515;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26514.cljs$lang$type = true;
cljs.core.async.t26514.cljs$lang$ctorStr = "cljs.core.async/t26514";
cljs.core.async.t26514.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26514");
});
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t26514.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t26514.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26516){var self__ = this;
var _26516__$1 = this;return self__.meta26515;
});
cljs.core.async.t26514.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26516,meta26515__$1){var self__ = this;
var _26516__$1 = this;return (new cljs.core.async.t26514(self__.cb,self__.flag,self__.alt_handler,meta26515__$1));
});
cljs.core.async.__GT_t26514 = (function __GT_t26514(cb__$1,flag__$1,alt_handler__$1,meta26515){return (new cljs.core.async.t26514(cb__$1,flag__$1,alt_handler__$1,meta26515));
});
}
return (new cljs.core.async.t26514(cb,flag,alt_handler,null));
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
return (function (p1__26517_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26517_SHARP_,port], null));
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
var G__26518 = (i + 1);
i = G__26518;
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
var alts_BANG___delegate = function (ports,p__26519){var map__26521 = p__26519;var map__26521__$1 = ((cljs.core.seq_QMARK_.call(null,map__26521))?cljs.core.apply.call(null,cljs.core.hash_map,map__26521):map__26521);var opts = map__26521__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__26519 = null;if (arguments.length > 1) {
  p__26519 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__26519);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__26522){
var ports = cljs.core.first(arglist__26522);
var p__26519 = cljs.core.rest(arglist__26522);
return alts_BANG___delegate(ports,p__26519);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t26530 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26530 = (function (ch,f,map_LT_,meta26531){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26531 = meta26531;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26530.cljs$lang$type = true;
cljs.core.async.t26530.cljs$lang$ctorStr = "cljs.core.async/t26530";
cljs.core.async.t26530.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26530");
});
cljs.core.async.t26530.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26530.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t26530.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26530.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t26533 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26533 = (function (fn1,_,meta26531,ch,f,map_LT_,meta26534){
this.fn1 = fn1;
this._ = _;
this.meta26531 = meta26531;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta26534 = meta26534;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26533.cljs$lang$type = true;
cljs.core.async.t26533.cljs$lang$ctorStr = "cljs.core.async/t26533";
cljs.core.async.t26533.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26533");
});
cljs.core.async.t26533.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t26533.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t26533.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t26533.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__26523_SHARP_){return f1.call(null,(((p1__26523_SHARP_ == null))?null:self__.f.call(null,p1__26523_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t26533.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26535){var self__ = this;
var _26535__$1 = this;return self__.meta26534;
});
cljs.core.async.t26533.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26535,meta26534__$1){var self__ = this;
var _26535__$1 = this;return (new cljs.core.async.t26533(self__.fn1,self__._,self__.meta26531,self__.ch,self__.f,self__.map_LT_,meta26534__$1));
});
cljs.core.async.__GT_t26533 = (function __GT_t26533(fn1__$1,___$2,meta26531__$1,ch__$2,f__$2,map_LT___$2,meta26534){return (new cljs.core.async.t26533(fn1__$1,___$2,meta26531__$1,ch__$2,f__$2,map_LT___$2,meta26534));
});
}
return (new cljs.core.async.t26533(fn1,___$1,self__.meta26531,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t26530.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26530.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26530.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26532){var self__ = this;
var _26532__$1 = this;return self__.meta26531;
});
cljs.core.async.t26530.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26532,meta26531__$1){var self__ = this;
var _26532__$1 = this;return (new cljs.core.async.t26530(self__.ch,self__.f,self__.map_LT_,meta26531__$1));
});
cljs.core.async.__GT_t26530 = (function __GT_t26530(ch__$1,f__$1,map_LT___$1,meta26531){return (new cljs.core.async.t26530(ch__$1,f__$1,map_LT___$1,meta26531));
});
}
return (new cljs.core.async.t26530(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t26539 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26539 = (function (ch,f,map_GT_,meta26540){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta26540 = meta26540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26539.cljs$lang$type = true;
cljs.core.async.t26539.cljs$lang$ctorStr = "cljs.core.async/t26539";
cljs.core.async.t26539.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26539");
});
cljs.core.async.t26539.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26539.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t26539.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26539.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26539.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26539.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26541){var self__ = this;
var _26541__$1 = this;return self__.meta26540;
});
cljs.core.async.t26539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26541,meta26540__$1){var self__ = this;
var _26541__$1 = this;return (new cljs.core.async.t26539(self__.ch,self__.f,self__.map_GT_,meta26540__$1));
});
cljs.core.async.__GT_t26539 = (function __GT_t26539(ch__$1,f__$1,map_GT___$1,meta26540){return (new cljs.core.async.t26539(ch__$1,f__$1,map_GT___$1,meta26540));
});
}
return (new cljs.core.async.t26539(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t26545 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t26545 = (function (ch,p,filter_GT_,meta26546){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta26546 = meta26546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26545.cljs$lang$type = true;
cljs.core.async.t26545.cljs$lang$ctorStr = "cljs.core.async/t26545";
cljs.core.async.t26545.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t26545");
});
cljs.core.async.t26545.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t26545.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t26545.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t26545.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t26545.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t26545.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t26545.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26547){var self__ = this;
var _26547__$1 = this;return self__.meta26546;
});
cljs.core.async.t26545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26547,meta26546__$1){var self__ = this;
var _26547__$1 = this;return (new cljs.core.async.t26545(self__.ch,self__.p,self__.filter_GT_,meta26546__$1));
});
cljs.core.async.__GT_t26545 = (function __GT_t26545(ch__$1,p__$1,filter_GT___$1,meta26546){return (new cljs.core.async.t26545(ch__$1,p__$1,filter_GT___$1,meta26546));
});
}
return (new cljs.core.async.t26545(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___26630 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_26609){var state_val_26610 = (state_26609[1]);if((state_val_26610 === 7))
{var inst_26605 = (state_26609[2]);var state_26609__$1 = state_26609;var statearr_26611_26631 = state_26609__$1;(statearr_26611_26631[2] = inst_26605);
(statearr_26611_26631[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26610 === 1))
{var state_26609__$1 = state_26609;var statearr_26612_26632 = state_26609__$1;(statearr_26612_26632[2] = null);
(statearr_26612_26632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26610 === 4))
{var inst_26591 = (state_26609[7]);var inst_26591__$1 = (state_26609[2]);var inst_26592 = (inst_26591__$1 == null);var state_26609__$1 = (function (){var statearr_26613 = state_26609;(statearr_26613[7] = inst_26591__$1);
return statearr_26613;
})();if(cljs.core.truth_(inst_26592))
{var statearr_26614_26633 = state_26609__$1;(statearr_26614_26633[1] = 5);
} else
{var statearr_26615_26634 = state_26609__$1;(statearr_26615_26634[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26610 === 6))
{var inst_26591 = (state_26609[7]);var inst_26596 = p.call(null,inst_26591);var state_26609__$1 = state_26609;if(cljs.core.truth_(inst_26596))
{var statearr_26616_26635 = state_26609__$1;(statearr_26616_26635[1] = 8);
} else
{var statearr_26617_26636 = state_26609__$1;(statearr_26617_26636[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26610 === 3))
{var inst_26607 = (state_26609[2]);var state_26609__$1 = state_26609;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26609__$1,inst_26607);
} else
{if((state_val_26610 === 2))
{var state_26609__$1 = state_26609;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26609__$1,4,ch);
} else
{if((state_val_26610 === 11))
{var inst_26599 = (state_26609[2]);var state_26609__$1 = state_26609;var statearr_26618_26637 = state_26609__$1;(statearr_26618_26637[2] = inst_26599);
(statearr_26618_26637[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26610 === 9))
{var state_26609__$1 = state_26609;var statearr_26619_26638 = state_26609__$1;(statearr_26619_26638[2] = null);
(statearr_26619_26638[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26610 === 5))
{var inst_26594 = cljs.core.async.close_BANG_.call(null,out);var state_26609__$1 = state_26609;var statearr_26620_26639 = state_26609__$1;(statearr_26620_26639[2] = inst_26594);
(statearr_26620_26639[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26610 === 10))
{var inst_26602 = (state_26609[2]);var state_26609__$1 = (function (){var statearr_26621 = state_26609;(statearr_26621[8] = inst_26602);
return statearr_26621;
})();var statearr_26622_26640 = state_26609__$1;(statearr_26622_26640[2] = null);
(statearr_26622_26640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26610 === 8))
{var inst_26591 = (state_26609[7]);var state_26609__$1 = state_26609;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26609__$1,11,out,inst_26591);
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
var state_machine__23717__auto____0 = (function (){var statearr_26626 = [null,null,null,null,null,null,null,null,null];(statearr_26626[0] = state_machine__23717__auto__);
(statearr_26626[1] = 1);
return statearr_26626;
});
var state_machine__23717__auto____1 = (function (state_26609){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_26609);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e26627){if((e26627 instanceof Object))
{var ex__23720__auto__ = e26627;var statearr_26628_26641 = state_26609;(statearr_26628_26641[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26609);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26627;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26642 = state_26609;
state_26609 = G__26642;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_26609){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_26609);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_26629 = f__23781__auto__.call(null);(statearr_26629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___26630);
return statearr_26629;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__23780__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_26794){var state_val_26795 = (state_26794[1]);if((state_val_26795 === 7))
{var inst_26790 = (state_26794[2]);var state_26794__$1 = state_26794;var statearr_26796_26833 = state_26794__$1;(statearr_26796_26833[2] = inst_26790);
(statearr_26796_26833[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 20))
{var inst_26765 = (state_26794[7]);var inst_26776 = (state_26794[2]);var inst_26777 = cljs.core.next.call(null,inst_26765);var inst_26751 = inst_26777;var inst_26752 = null;var inst_26753 = 0;var inst_26754 = 0;var state_26794__$1 = (function (){var statearr_26797 = state_26794;(statearr_26797[8] = inst_26776);
(statearr_26797[9] = inst_26754);
(statearr_26797[10] = inst_26752);
(statearr_26797[11] = inst_26751);
(statearr_26797[12] = inst_26753);
return statearr_26797;
})();var statearr_26798_26834 = state_26794__$1;(statearr_26798_26834[2] = null);
(statearr_26798_26834[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 1))
{var state_26794__$1 = state_26794;var statearr_26799_26835 = state_26794__$1;(statearr_26799_26835[2] = null);
(statearr_26799_26835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 4))
{var inst_26740 = (state_26794[13]);var inst_26740__$1 = (state_26794[2]);var inst_26741 = (inst_26740__$1 == null);var state_26794__$1 = (function (){var statearr_26803 = state_26794;(statearr_26803[13] = inst_26740__$1);
return statearr_26803;
})();if(cljs.core.truth_(inst_26741))
{var statearr_26804_26836 = state_26794__$1;(statearr_26804_26836[1] = 5);
} else
{var statearr_26805_26837 = state_26794__$1;(statearr_26805_26837[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 15))
{var state_26794__$1 = state_26794;var statearr_26806_26838 = state_26794__$1;(statearr_26806_26838[2] = null);
(statearr_26806_26838[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 13))
{var inst_26754 = (state_26794[9]);var inst_26752 = (state_26794[10]);var inst_26751 = (state_26794[11]);var inst_26753 = (state_26794[12]);var inst_26761 = (state_26794[2]);var inst_26762 = (inst_26754 + 1);var tmp26800 = inst_26752;var tmp26801 = inst_26751;var tmp26802 = inst_26753;var inst_26751__$1 = tmp26801;var inst_26752__$1 = tmp26800;var inst_26753__$1 = tmp26802;var inst_26754__$1 = inst_26762;var state_26794__$1 = (function (){var statearr_26807 = state_26794;(statearr_26807[14] = inst_26761);
(statearr_26807[9] = inst_26754__$1);
(statearr_26807[10] = inst_26752__$1);
(statearr_26807[11] = inst_26751__$1);
(statearr_26807[12] = inst_26753__$1);
return statearr_26807;
})();var statearr_26808_26839 = state_26794__$1;(statearr_26808_26839[2] = null);
(statearr_26808_26839[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 6))
{var inst_26740 = (state_26794[13]);var inst_26745 = f.call(null,inst_26740);var inst_26750 = cljs.core.seq.call(null,inst_26745);var inst_26751 = inst_26750;var inst_26752 = null;var inst_26753 = 0;var inst_26754 = 0;var state_26794__$1 = (function (){var statearr_26809 = state_26794;(statearr_26809[9] = inst_26754);
(statearr_26809[10] = inst_26752);
(statearr_26809[11] = inst_26751);
(statearr_26809[12] = inst_26753);
return statearr_26809;
})();var statearr_26810_26840 = state_26794__$1;(statearr_26810_26840[2] = null);
(statearr_26810_26840[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 17))
{var inst_26765 = (state_26794[7]);var inst_26769 = cljs.core.chunk_first.call(null,inst_26765);var inst_26770 = cljs.core.chunk_rest.call(null,inst_26765);var inst_26771 = cljs.core.count.call(null,inst_26769);var inst_26751 = inst_26770;var inst_26752 = inst_26769;var inst_26753 = inst_26771;var inst_26754 = 0;var state_26794__$1 = (function (){var statearr_26811 = state_26794;(statearr_26811[9] = inst_26754);
(statearr_26811[10] = inst_26752);
(statearr_26811[11] = inst_26751);
(statearr_26811[12] = inst_26753);
return statearr_26811;
})();var statearr_26812_26841 = state_26794__$1;(statearr_26812_26841[2] = null);
(statearr_26812_26841[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 3))
{var inst_26792 = (state_26794[2]);var state_26794__$1 = state_26794;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26794__$1,inst_26792);
} else
{if((state_val_26795 === 12))
{var inst_26785 = (state_26794[2]);var state_26794__$1 = state_26794;var statearr_26813_26842 = state_26794__$1;(statearr_26813_26842[2] = inst_26785);
(statearr_26813_26842[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 2))
{var state_26794__$1 = state_26794;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26794__$1,4,in$);
} else
{if((state_val_26795 === 19))
{var inst_26780 = (state_26794[2]);var state_26794__$1 = state_26794;var statearr_26814_26843 = state_26794__$1;(statearr_26814_26843[2] = inst_26780);
(statearr_26814_26843[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 11))
{var inst_26751 = (state_26794[11]);var inst_26765 = (state_26794[7]);var inst_26765__$1 = cljs.core.seq.call(null,inst_26751);var state_26794__$1 = (function (){var statearr_26815 = state_26794;(statearr_26815[7] = inst_26765__$1);
return statearr_26815;
})();if(inst_26765__$1)
{var statearr_26816_26844 = state_26794__$1;(statearr_26816_26844[1] = 14);
} else
{var statearr_26817_26845 = state_26794__$1;(statearr_26817_26845[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 9))
{var inst_26787 = (state_26794[2]);var state_26794__$1 = (function (){var statearr_26818 = state_26794;(statearr_26818[15] = inst_26787);
return statearr_26818;
})();var statearr_26819_26846 = state_26794__$1;(statearr_26819_26846[2] = null);
(statearr_26819_26846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 5))
{var inst_26743 = cljs.core.async.close_BANG_.call(null,out);var state_26794__$1 = state_26794;var statearr_26820_26847 = state_26794__$1;(statearr_26820_26847[2] = inst_26743);
(statearr_26820_26847[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 14))
{var inst_26765 = (state_26794[7]);var inst_26767 = cljs.core.chunked_seq_QMARK_.call(null,inst_26765);var state_26794__$1 = state_26794;if(inst_26767)
{var statearr_26821_26848 = state_26794__$1;(statearr_26821_26848[1] = 17);
} else
{var statearr_26822_26849 = state_26794__$1;(statearr_26822_26849[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 16))
{var inst_26783 = (state_26794[2]);var state_26794__$1 = state_26794;var statearr_26823_26850 = state_26794__$1;(statearr_26823_26850[2] = inst_26783);
(statearr_26823_26850[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26795 === 10))
{var inst_26754 = (state_26794[9]);var inst_26752 = (state_26794[10]);var inst_26759 = cljs.core._nth.call(null,inst_26752,inst_26754);var state_26794__$1 = state_26794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26794__$1,13,out,inst_26759);
} else
{if((state_val_26795 === 18))
{var inst_26765 = (state_26794[7]);var inst_26774 = cljs.core.first.call(null,inst_26765);var state_26794__$1 = state_26794;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26794__$1,20,out,inst_26774);
} else
{if((state_val_26795 === 8))
{var inst_26754 = (state_26794[9]);var inst_26753 = (state_26794[12]);var inst_26756 = (inst_26754 < inst_26753);var inst_26757 = inst_26756;var state_26794__$1 = state_26794;if(cljs.core.truth_(inst_26757))
{var statearr_26824_26851 = state_26794__$1;(statearr_26824_26851[1] = 10);
} else
{var statearr_26825_26852 = state_26794__$1;(statearr_26825_26852[1] = 11);
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
var state_machine__23717__auto____0 = (function (){var statearr_26829 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26829[0] = state_machine__23717__auto__);
(statearr_26829[1] = 1);
return statearr_26829;
});
var state_machine__23717__auto____1 = (function (state_26794){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_26794);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e26830){if((e26830 instanceof Object))
{var ex__23720__auto__ = e26830;var statearr_26831_26853 = state_26794;(statearr_26831_26853[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26794);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26830;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26854 = state_26794;
state_26794 = G__26854;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_26794){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_26794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_26832 = f__23781__auto__.call(null);(statearr_26832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto__);
return statearr_26832;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__23780__auto___26935 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_26914){var state_val_26915 = (state_26914[1]);if((state_val_26915 === 7))
{var inst_26910 = (state_26914[2]);var state_26914__$1 = state_26914;var statearr_26916_26936 = state_26914__$1;(statearr_26916_26936[2] = inst_26910);
(statearr_26916_26936[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26915 === 1))
{var state_26914__$1 = state_26914;var statearr_26917_26937 = state_26914__$1;(statearr_26917_26937[2] = null);
(statearr_26917_26937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26915 === 4))
{var inst_26897 = (state_26914[7]);var inst_26897__$1 = (state_26914[2]);var inst_26898 = (inst_26897__$1 == null);var state_26914__$1 = (function (){var statearr_26918 = state_26914;(statearr_26918[7] = inst_26897__$1);
return statearr_26918;
})();if(cljs.core.truth_(inst_26898))
{var statearr_26919_26938 = state_26914__$1;(statearr_26919_26938[1] = 5);
} else
{var statearr_26920_26939 = state_26914__$1;(statearr_26920_26939[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26915 === 6))
{var inst_26897 = (state_26914[7]);var state_26914__$1 = state_26914;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26914__$1,11,to,inst_26897);
} else
{if((state_val_26915 === 3))
{var inst_26912 = (state_26914[2]);var state_26914__$1 = state_26914;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26914__$1,inst_26912);
} else
{if((state_val_26915 === 2))
{var state_26914__$1 = state_26914;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26914__$1,4,from);
} else
{if((state_val_26915 === 11))
{var inst_26907 = (state_26914[2]);var state_26914__$1 = (function (){var statearr_26921 = state_26914;(statearr_26921[8] = inst_26907);
return statearr_26921;
})();var statearr_26922_26940 = state_26914__$1;(statearr_26922_26940[2] = null);
(statearr_26922_26940[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26915 === 9))
{var state_26914__$1 = state_26914;var statearr_26923_26941 = state_26914__$1;(statearr_26923_26941[2] = null);
(statearr_26923_26941[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26915 === 5))
{var state_26914__$1 = state_26914;if(cljs.core.truth_(close_QMARK_))
{var statearr_26924_26942 = state_26914__$1;(statearr_26924_26942[1] = 8);
} else
{var statearr_26925_26943 = state_26914__$1;(statearr_26925_26943[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26915 === 10))
{var inst_26904 = (state_26914[2]);var state_26914__$1 = state_26914;var statearr_26926_26944 = state_26914__$1;(statearr_26926_26944[2] = inst_26904);
(statearr_26926_26944[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26915 === 8))
{var inst_26901 = cljs.core.async.close_BANG_.call(null,to);var state_26914__$1 = state_26914;var statearr_26927_26945 = state_26914__$1;(statearr_26927_26945[2] = inst_26901);
(statearr_26927_26945[1] = 10);
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
var state_machine__23717__auto____0 = (function (){var statearr_26931 = [null,null,null,null,null,null,null,null,null];(statearr_26931[0] = state_machine__23717__auto__);
(statearr_26931[1] = 1);
return statearr_26931;
});
var state_machine__23717__auto____1 = (function (state_26914){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_26914);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e26932){if((e26932 instanceof Object))
{var ex__23720__auto__ = e26932;var statearr_26933_26946 = state_26914;(statearr_26933_26946[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26914);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26932;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26947 = state_26914;
state_26914 = G__26947;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_26914){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_26914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_26934 = f__23781__auto__.call(null);(statearr_26934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___26935);
return statearr_26934;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__23780__auto___27034 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_27012){var state_val_27013 = (state_27012[1]);if((state_val_27013 === 7))
{var inst_27008 = (state_27012[2]);var state_27012__$1 = state_27012;var statearr_27014_27035 = state_27012__$1;(statearr_27014_27035[2] = inst_27008);
(statearr_27014_27035[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27013 === 1))
{var state_27012__$1 = state_27012;var statearr_27015_27036 = state_27012__$1;(statearr_27015_27036[2] = null);
(statearr_27015_27036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27013 === 4))
{var inst_26993 = (state_27012[7]);var inst_26993__$1 = (state_27012[2]);var inst_26994 = (inst_26993__$1 == null);var state_27012__$1 = (function (){var statearr_27016 = state_27012;(statearr_27016[7] = inst_26993__$1);
return statearr_27016;
})();if(cljs.core.truth_(inst_26994))
{var statearr_27017_27037 = state_27012__$1;(statearr_27017_27037[1] = 5);
} else
{var statearr_27018_27038 = state_27012__$1;(statearr_27018_27038[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27013 === 6))
{var inst_26993 = (state_27012[7]);var inst_26999 = p.call(null,inst_26993);var state_27012__$1 = state_27012;if(cljs.core.truth_(inst_26999))
{var statearr_27019_27039 = state_27012__$1;(statearr_27019_27039[1] = 9);
} else
{var statearr_27020_27040 = state_27012__$1;(statearr_27020_27040[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27013 === 3))
{var inst_27010 = (state_27012[2]);var state_27012__$1 = state_27012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27012__$1,inst_27010);
} else
{if((state_val_27013 === 2))
{var state_27012__$1 = state_27012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27012__$1,4,ch);
} else
{if((state_val_27013 === 11))
{var inst_26993 = (state_27012[7]);var inst_27003 = (state_27012[2]);var state_27012__$1 = state_27012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27012__$1,8,inst_27003,inst_26993);
} else
{if((state_val_27013 === 9))
{var state_27012__$1 = state_27012;var statearr_27021_27041 = state_27012__$1;(statearr_27021_27041[2] = tc);
(statearr_27021_27041[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27013 === 5))
{var inst_26996 = cljs.core.async.close_BANG_.call(null,tc);var inst_26997 = cljs.core.async.close_BANG_.call(null,fc);var state_27012__$1 = (function (){var statearr_27022 = state_27012;(statearr_27022[8] = inst_26996);
return statearr_27022;
})();var statearr_27023_27042 = state_27012__$1;(statearr_27023_27042[2] = inst_26997);
(statearr_27023_27042[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27013 === 10))
{var state_27012__$1 = state_27012;var statearr_27024_27043 = state_27012__$1;(statearr_27024_27043[2] = fc);
(statearr_27024_27043[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27013 === 8))
{var inst_27005 = (state_27012[2]);var state_27012__$1 = (function (){var statearr_27025 = state_27012;(statearr_27025[9] = inst_27005);
return statearr_27025;
})();var statearr_27026_27044 = state_27012__$1;(statearr_27026_27044[2] = null);
(statearr_27026_27044[1] = 2);
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
var state_machine__23717__auto____0 = (function (){var statearr_27030 = [null,null,null,null,null,null,null,null,null,null];(statearr_27030[0] = state_machine__23717__auto__);
(statearr_27030[1] = 1);
return statearr_27030;
});
var state_machine__23717__auto____1 = (function (state_27012){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_27012);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e27031){if((e27031 instanceof Object))
{var ex__23720__auto__ = e27031;var statearr_27032_27045 = state_27012;(statearr_27032_27045[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27046 = state_27012;
state_27012 = G__27046;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_27012){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_27012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_27033 = f__23781__auto__.call(null);(statearr_27033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___27034);
return statearr_27033;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__23780__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_27093){var state_val_27094 = (state_27093[1]);if((state_val_27094 === 7))
{var inst_27089 = (state_27093[2]);var state_27093__$1 = state_27093;var statearr_27095_27111 = state_27093__$1;(statearr_27095_27111[2] = inst_27089);
(statearr_27095_27111[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27094 === 6))
{var inst_27082 = (state_27093[7]);var inst_27079 = (state_27093[8]);var inst_27086 = f.call(null,inst_27079,inst_27082);var inst_27079__$1 = inst_27086;var state_27093__$1 = (function (){var statearr_27096 = state_27093;(statearr_27096[8] = inst_27079__$1);
return statearr_27096;
})();var statearr_27097_27112 = state_27093__$1;(statearr_27097_27112[2] = null);
(statearr_27097_27112[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27094 === 5))
{var inst_27079 = (state_27093[8]);var state_27093__$1 = state_27093;var statearr_27098_27113 = state_27093__$1;(statearr_27098_27113[2] = inst_27079);
(statearr_27098_27113[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27094 === 4))
{var inst_27082 = (state_27093[7]);var inst_27082__$1 = (state_27093[2]);var inst_27083 = (inst_27082__$1 == null);var state_27093__$1 = (function (){var statearr_27099 = state_27093;(statearr_27099[7] = inst_27082__$1);
return statearr_27099;
})();if(cljs.core.truth_(inst_27083))
{var statearr_27100_27114 = state_27093__$1;(statearr_27100_27114[1] = 5);
} else
{var statearr_27101_27115 = state_27093__$1;(statearr_27101_27115[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27094 === 3))
{var inst_27091 = (state_27093[2]);var state_27093__$1 = state_27093;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27093__$1,inst_27091);
} else
{if((state_val_27094 === 2))
{var state_27093__$1 = state_27093;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27093__$1,4,ch);
} else
{if((state_val_27094 === 1))
{var inst_27079 = init;var state_27093__$1 = (function (){var statearr_27102 = state_27093;(statearr_27102[8] = inst_27079);
return statearr_27102;
})();var statearr_27103_27116 = state_27093__$1;(statearr_27103_27116[2] = null);
(statearr_27103_27116[1] = 2);
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
var state_machine__23717__auto____0 = (function (){var statearr_27107 = [null,null,null,null,null,null,null,null,null];(statearr_27107[0] = state_machine__23717__auto__);
(statearr_27107[1] = 1);
return statearr_27107;
});
var state_machine__23717__auto____1 = (function (state_27093){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_27093);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e27108){if((e27108 instanceof Object))
{var ex__23720__auto__ = e27108;var statearr_27109_27117 = state_27093;(statearr_27109_27117[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27093);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27118 = state_27093;
state_27093 = G__27118;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_27093){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_27093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_27110 = f__23781__auto__.call(null);(statearr_27110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto__);
return statearr_27110;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__23780__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_27180){var state_val_27181 = (state_27180[1]);if((state_val_27181 === 7))
{var inst_27161 = (state_27180[7]);var inst_27166 = (state_27180[2]);var inst_27167 = cljs.core.next.call(null,inst_27161);var inst_27161__$1 = inst_27167;var state_27180__$1 = (function (){var statearr_27182 = state_27180;(statearr_27182[8] = inst_27166);
(statearr_27182[7] = inst_27161__$1);
return statearr_27182;
})();var statearr_27183_27201 = state_27180__$1;(statearr_27183_27201[2] = null);
(statearr_27183_27201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27181 === 1))
{var inst_27160 = cljs.core.seq.call(null,coll);var inst_27161 = inst_27160;var state_27180__$1 = (function (){var statearr_27184 = state_27180;(statearr_27184[7] = inst_27161);
return statearr_27184;
})();var statearr_27185_27202 = state_27180__$1;(statearr_27185_27202[2] = null);
(statearr_27185_27202[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27181 === 4))
{var inst_27161 = (state_27180[7]);var inst_27164 = cljs.core.first.call(null,inst_27161);var state_27180__$1 = state_27180;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27180__$1,7,ch,inst_27164);
} else
{if((state_val_27181 === 6))
{var inst_27176 = (state_27180[2]);var state_27180__$1 = state_27180;var statearr_27186_27203 = state_27180__$1;(statearr_27186_27203[2] = inst_27176);
(statearr_27186_27203[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27181 === 3))
{var inst_27178 = (state_27180[2]);var state_27180__$1 = state_27180;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27180__$1,inst_27178);
} else
{if((state_val_27181 === 2))
{var inst_27161 = (state_27180[7]);var state_27180__$1 = state_27180;if(cljs.core.truth_(inst_27161))
{var statearr_27187_27204 = state_27180__$1;(statearr_27187_27204[1] = 4);
} else
{var statearr_27188_27205 = state_27180__$1;(statearr_27188_27205[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27181 === 9))
{var state_27180__$1 = state_27180;var statearr_27189_27206 = state_27180__$1;(statearr_27189_27206[2] = null);
(statearr_27189_27206[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27181 === 5))
{var state_27180__$1 = state_27180;if(cljs.core.truth_(close_QMARK_))
{var statearr_27190_27207 = state_27180__$1;(statearr_27190_27207[1] = 8);
} else
{var statearr_27191_27208 = state_27180__$1;(statearr_27191_27208[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27181 === 10))
{var inst_27174 = (state_27180[2]);var state_27180__$1 = state_27180;var statearr_27192_27209 = state_27180__$1;(statearr_27192_27209[2] = inst_27174);
(statearr_27192_27209[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27181 === 8))
{var inst_27171 = cljs.core.async.close_BANG_.call(null,ch);var state_27180__$1 = state_27180;var statearr_27193_27210 = state_27180__$1;(statearr_27193_27210[2] = inst_27171);
(statearr_27193_27210[1] = 10);
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
var state_machine__23717__auto____0 = (function (){var statearr_27197 = [null,null,null,null,null,null,null,null,null];(statearr_27197[0] = state_machine__23717__auto__);
(statearr_27197[1] = 1);
return statearr_27197;
});
var state_machine__23717__auto____1 = (function (state_27180){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_27180);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e27198){if((e27198 instanceof Object))
{var ex__23720__auto__ = e27198;var statearr_27199_27211 = state_27180;(statearr_27199_27211[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27180);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27212 = state_27180;
state_27180 = G__27212;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_27180){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_27180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_27200 = f__23781__auto__.call(null);(statearr_27200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto__);
return statearr_27200;
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
cljs.core.async.Mux = (function (){var obj27214 = {};return obj27214;
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
cljs.core.async.Mult = (function (){var obj27216 = {};return obj27216;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t27440 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27440 = (function (cs,ch,mult,meta27441){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta27441 = meta27441;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27440.cljs$lang$type = true;
cljs.core.async.t27440.cljs$lang$ctorStr = "cljs.core.async/t27440";
cljs.core.async.t27440.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t27440");
});})(cs))
;
cljs.core.async.t27440.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t27440.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t27440.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t27440.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t27440.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t27440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27442){var self__ = this;
var _27442__$1 = this;return self__.meta27441;
});})(cs))
;
cljs.core.async.t27440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27442,meta27441__$1){var self__ = this;
var _27442__$1 = this;return (new cljs.core.async.t27440(self__.cs,self__.ch,self__.mult,meta27441__$1));
});})(cs))
;
cljs.core.async.__GT_t27440 = ((function (cs){
return (function __GT_t27440(cs__$1,ch__$1,mult__$1,meta27441){return (new cljs.core.async.t27440(cs__$1,ch__$1,mult__$1,meta27441));
});})(cs))
;
}
return (new cljs.core.async.t27440(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__23780__auto___27663 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_27577){var state_val_27578 = (state_27577[1]);if((state_val_27578 === 7))
{var inst_27573 = (state_27577[2]);var state_27577__$1 = state_27577;var statearr_27579_27664 = state_27577__$1;(statearr_27579_27664[2] = inst_27573);
(statearr_27579_27664[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 20))
{var inst_27474 = (state_27577[7]);var inst_27484 = cljs.core.first.call(null,inst_27474);var inst_27485 = cljs.core.nth.call(null,inst_27484,0,null);var inst_27486 = cljs.core.nth.call(null,inst_27484,1,null);var state_27577__$1 = (function (){var statearr_27580 = state_27577;(statearr_27580[8] = inst_27485);
return statearr_27580;
})();if(cljs.core.truth_(inst_27486))
{var statearr_27581_27665 = state_27577__$1;(statearr_27581_27665[1] = 22);
} else
{var statearr_27582_27666 = state_27577__$1;(statearr_27582_27666[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 27))
{var inst_27514 = (state_27577[9]);var inst_27516 = (state_27577[10]);var inst_27521 = cljs.core._nth.call(null,inst_27514,inst_27516);var state_27577__$1 = (function (){var statearr_27583 = state_27577;(statearr_27583[11] = inst_27521);
return statearr_27583;
})();var statearr_27584_27667 = state_27577__$1;(statearr_27584_27667[2] = null);
(statearr_27584_27667[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 1))
{var state_27577__$1 = state_27577;var statearr_27585_27668 = state_27577__$1;(statearr_27585_27668[2] = null);
(statearr_27585_27668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 24))
{var inst_27474 = (state_27577[7]);var inst_27491 = (state_27577[2]);var inst_27492 = cljs.core.next.call(null,inst_27474);var inst_27454 = inst_27492;var inst_27455 = null;var inst_27456 = 0;var inst_27457 = 0;var state_27577__$1 = (function (){var statearr_27586 = state_27577;(statearr_27586[12] = inst_27457);
(statearr_27586[13] = inst_27455);
(statearr_27586[14] = inst_27456);
(statearr_27586[15] = inst_27491);
(statearr_27586[16] = inst_27454);
return statearr_27586;
})();var statearr_27587_27669 = state_27577__$1;(statearr_27587_27669[2] = null);
(statearr_27587_27669[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 39))
{var inst_27534 = (state_27577[17]);var inst_27552 = (state_27577[2]);var inst_27553 = cljs.core.next.call(null,inst_27534);var inst_27513 = inst_27553;var inst_27514 = null;var inst_27515 = 0;var inst_27516 = 0;var state_27577__$1 = (function (){var statearr_27591 = state_27577;(statearr_27591[18] = inst_27515);
(statearr_27591[19] = inst_27552);
(statearr_27591[9] = inst_27514);
(statearr_27591[20] = inst_27513);
(statearr_27591[10] = inst_27516);
return statearr_27591;
})();var statearr_27592_27670 = state_27577__$1;(statearr_27592_27670[2] = null);
(statearr_27592_27670[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 4))
{var inst_27445 = (state_27577[21]);var inst_27445__$1 = (state_27577[2]);var inst_27446 = (inst_27445__$1 == null);var state_27577__$1 = (function (){var statearr_27593 = state_27577;(statearr_27593[21] = inst_27445__$1);
return statearr_27593;
})();if(cljs.core.truth_(inst_27446))
{var statearr_27594_27671 = state_27577__$1;(statearr_27594_27671[1] = 5);
} else
{var statearr_27595_27672 = state_27577__$1;(statearr_27595_27672[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 15))
{var inst_27457 = (state_27577[12]);var inst_27455 = (state_27577[13]);var inst_27456 = (state_27577[14]);var inst_27454 = (state_27577[16]);var inst_27470 = (state_27577[2]);var inst_27471 = (inst_27457 + 1);var tmp27588 = inst_27455;var tmp27589 = inst_27456;var tmp27590 = inst_27454;var inst_27454__$1 = tmp27590;var inst_27455__$1 = tmp27588;var inst_27456__$1 = tmp27589;var inst_27457__$1 = inst_27471;var state_27577__$1 = (function (){var statearr_27596 = state_27577;(statearr_27596[12] = inst_27457__$1);
(statearr_27596[13] = inst_27455__$1);
(statearr_27596[14] = inst_27456__$1);
(statearr_27596[22] = inst_27470);
(statearr_27596[16] = inst_27454__$1);
return statearr_27596;
})();var statearr_27597_27673 = state_27577__$1;(statearr_27597_27673[2] = null);
(statearr_27597_27673[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 21))
{var inst_27495 = (state_27577[2]);var state_27577__$1 = state_27577;var statearr_27598_27674 = state_27577__$1;(statearr_27598_27674[2] = inst_27495);
(statearr_27598_27674[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 31))
{var inst_27521 = (state_27577[11]);var inst_27522 = (state_27577[2]);var inst_27523 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27524 = cljs.core.async.untap_STAR_.call(null,m,inst_27521);var state_27577__$1 = (function (){var statearr_27599 = state_27577;(statearr_27599[23] = inst_27522);
(statearr_27599[24] = inst_27523);
return statearr_27599;
})();var statearr_27600_27675 = state_27577__$1;(statearr_27600_27675[2] = inst_27524);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27577__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 32))
{var inst_27521 = (state_27577[11]);var inst_27445 = (state_27577[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27577,31,Object,null,30);var inst_27528 = cljs.core.async.put_BANG_.call(null,inst_27521,inst_27445,done);var state_27577__$1 = state_27577;var statearr_27601_27676 = state_27577__$1;(statearr_27601_27676[2] = inst_27528);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27577__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 40))
{var inst_27543 = (state_27577[25]);var inst_27544 = (state_27577[2]);var inst_27545 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_27546 = cljs.core.async.untap_STAR_.call(null,m,inst_27543);var state_27577__$1 = (function (){var statearr_27602 = state_27577;(statearr_27602[26] = inst_27544);
(statearr_27602[27] = inst_27545);
return statearr_27602;
})();var statearr_27603_27677 = state_27577__$1;(statearr_27603_27677[2] = inst_27546);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27577__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 33))
{var inst_27534 = (state_27577[17]);var inst_27536 = cljs.core.chunked_seq_QMARK_.call(null,inst_27534);var state_27577__$1 = state_27577;if(inst_27536)
{var statearr_27604_27678 = state_27577__$1;(statearr_27604_27678[1] = 36);
} else
{var statearr_27605_27679 = state_27577__$1;(statearr_27605_27679[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 13))
{var inst_27464 = (state_27577[28]);var inst_27467 = cljs.core.async.close_BANG_.call(null,inst_27464);var state_27577__$1 = state_27577;var statearr_27606_27680 = state_27577__$1;(statearr_27606_27680[2] = inst_27467);
(statearr_27606_27680[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 22))
{var inst_27485 = (state_27577[8]);var inst_27488 = cljs.core.async.close_BANG_.call(null,inst_27485);var state_27577__$1 = state_27577;var statearr_27607_27681 = state_27577__$1;(statearr_27607_27681[2] = inst_27488);
(statearr_27607_27681[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 36))
{var inst_27534 = (state_27577[17]);var inst_27538 = cljs.core.chunk_first.call(null,inst_27534);var inst_27539 = cljs.core.chunk_rest.call(null,inst_27534);var inst_27540 = cljs.core.count.call(null,inst_27538);var inst_27513 = inst_27539;var inst_27514 = inst_27538;var inst_27515 = inst_27540;var inst_27516 = 0;var state_27577__$1 = (function (){var statearr_27608 = state_27577;(statearr_27608[18] = inst_27515);
(statearr_27608[9] = inst_27514);
(statearr_27608[20] = inst_27513);
(statearr_27608[10] = inst_27516);
return statearr_27608;
})();var statearr_27609_27682 = state_27577__$1;(statearr_27609_27682[2] = null);
(statearr_27609_27682[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 41))
{var inst_27445 = (state_27577[21]);var inst_27543 = (state_27577[25]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27577,40,Object,null,39);var inst_27550 = cljs.core.async.put_BANG_.call(null,inst_27543,inst_27445,done);var state_27577__$1 = state_27577;var statearr_27610_27683 = state_27577__$1;(statearr_27610_27683[2] = inst_27550);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27577__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 43))
{var state_27577__$1 = state_27577;var statearr_27611_27684 = state_27577__$1;(statearr_27611_27684[2] = null);
(statearr_27611_27684[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 29))
{var inst_27561 = (state_27577[2]);var state_27577__$1 = state_27577;var statearr_27612_27685 = state_27577__$1;(statearr_27612_27685[2] = inst_27561);
(statearr_27612_27685[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 44))
{var inst_27570 = (state_27577[2]);var state_27577__$1 = (function (){var statearr_27613 = state_27577;(statearr_27613[29] = inst_27570);
return statearr_27613;
})();var statearr_27614_27686 = state_27577__$1;(statearr_27614_27686[2] = null);
(statearr_27614_27686[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 6))
{var inst_27505 = (state_27577[30]);var inst_27504 = cljs.core.deref.call(null,cs);var inst_27505__$1 = cljs.core.keys.call(null,inst_27504);var inst_27506 = cljs.core.count.call(null,inst_27505__$1);var inst_27507 = cljs.core.reset_BANG_.call(null,dctr,inst_27506);var inst_27512 = cljs.core.seq.call(null,inst_27505__$1);var inst_27513 = inst_27512;var inst_27514 = null;var inst_27515 = 0;var inst_27516 = 0;var state_27577__$1 = (function (){var statearr_27615 = state_27577;(statearr_27615[18] = inst_27515);
(statearr_27615[9] = inst_27514);
(statearr_27615[30] = inst_27505__$1);
(statearr_27615[20] = inst_27513);
(statearr_27615[31] = inst_27507);
(statearr_27615[10] = inst_27516);
return statearr_27615;
})();var statearr_27616_27687 = state_27577__$1;(statearr_27616_27687[2] = null);
(statearr_27616_27687[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 28))
{var inst_27534 = (state_27577[17]);var inst_27513 = (state_27577[20]);var inst_27534__$1 = cljs.core.seq.call(null,inst_27513);var state_27577__$1 = (function (){var statearr_27617 = state_27577;(statearr_27617[17] = inst_27534__$1);
return statearr_27617;
})();if(inst_27534__$1)
{var statearr_27618_27688 = state_27577__$1;(statearr_27618_27688[1] = 33);
} else
{var statearr_27619_27689 = state_27577__$1;(statearr_27619_27689[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 25))
{var inst_27515 = (state_27577[18]);var inst_27516 = (state_27577[10]);var inst_27518 = (inst_27516 < inst_27515);var inst_27519 = inst_27518;var state_27577__$1 = state_27577;if(cljs.core.truth_(inst_27519))
{var statearr_27620_27690 = state_27577__$1;(statearr_27620_27690[1] = 27);
} else
{var statearr_27621_27691 = state_27577__$1;(statearr_27621_27691[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 34))
{var state_27577__$1 = state_27577;var statearr_27622_27692 = state_27577__$1;(statearr_27622_27692[2] = null);
(statearr_27622_27692[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 17))
{var state_27577__$1 = state_27577;var statearr_27623_27693 = state_27577__$1;(statearr_27623_27693[2] = null);
(statearr_27623_27693[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 3))
{var inst_27575 = (state_27577[2]);var state_27577__$1 = state_27577;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27577__$1,inst_27575);
} else
{if((state_val_27578 === 12))
{var inst_27500 = (state_27577[2]);var state_27577__$1 = state_27577;var statearr_27624_27694 = state_27577__$1;(statearr_27624_27694[2] = inst_27500);
(statearr_27624_27694[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 2))
{var state_27577__$1 = state_27577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27577__$1,4,ch);
} else
{if((state_val_27578 === 23))
{var state_27577__$1 = state_27577;var statearr_27625_27695 = state_27577__$1;(statearr_27625_27695[2] = null);
(statearr_27625_27695[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 35))
{var inst_27559 = (state_27577[2]);var state_27577__$1 = state_27577;var statearr_27626_27696 = state_27577__$1;(statearr_27626_27696[2] = inst_27559);
(statearr_27626_27696[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 19))
{var inst_27474 = (state_27577[7]);var inst_27478 = cljs.core.chunk_first.call(null,inst_27474);var inst_27479 = cljs.core.chunk_rest.call(null,inst_27474);var inst_27480 = cljs.core.count.call(null,inst_27478);var inst_27454 = inst_27479;var inst_27455 = inst_27478;var inst_27456 = inst_27480;var inst_27457 = 0;var state_27577__$1 = (function (){var statearr_27627 = state_27577;(statearr_27627[12] = inst_27457);
(statearr_27627[13] = inst_27455);
(statearr_27627[14] = inst_27456);
(statearr_27627[16] = inst_27454);
return statearr_27627;
})();var statearr_27628_27697 = state_27577__$1;(statearr_27628_27697[2] = null);
(statearr_27628_27697[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 11))
{var inst_27474 = (state_27577[7]);var inst_27454 = (state_27577[16]);var inst_27474__$1 = cljs.core.seq.call(null,inst_27454);var state_27577__$1 = (function (){var statearr_27629 = state_27577;(statearr_27629[7] = inst_27474__$1);
return statearr_27629;
})();if(inst_27474__$1)
{var statearr_27630_27698 = state_27577__$1;(statearr_27630_27698[1] = 16);
} else
{var statearr_27631_27699 = state_27577__$1;(statearr_27631_27699[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 9))
{var inst_27502 = (state_27577[2]);var state_27577__$1 = state_27577;var statearr_27632_27700 = state_27577__$1;(statearr_27632_27700[2] = inst_27502);
(statearr_27632_27700[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 5))
{var inst_27452 = cljs.core.deref.call(null,cs);var inst_27453 = cljs.core.seq.call(null,inst_27452);var inst_27454 = inst_27453;var inst_27455 = null;var inst_27456 = 0;var inst_27457 = 0;var state_27577__$1 = (function (){var statearr_27633 = state_27577;(statearr_27633[12] = inst_27457);
(statearr_27633[13] = inst_27455);
(statearr_27633[14] = inst_27456);
(statearr_27633[16] = inst_27454);
return statearr_27633;
})();var statearr_27634_27701 = state_27577__$1;(statearr_27634_27701[2] = null);
(statearr_27634_27701[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 14))
{var state_27577__$1 = state_27577;var statearr_27635_27702 = state_27577__$1;(statearr_27635_27702[2] = null);
(statearr_27635_27702[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 45))
{var inst_27567 = (state_27577[2]);var state_27577__$1 = state_27577;var statearr_27636_27703 = state_27577__$1;(statearr_27636_27703[2] = inst_27567);
(statearr_27636_27703[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 26))
{var inst_27505 = (state_27577[30]);var inst_27563 = (state_27577[2]);var inst_27564 = cljs.core.seq.call(null,inst_27505);var state_27577__$1 = (function (){var statearr_27637 = state_27577;(statearr_27637[32] = inst_27563);
return statearr_27637;
})();if(inst_27564)
{var statearr_27638_27704 = state_27577__$1;(statearr_27638_27704[1] = 42);
} else
{var statearr_27639_27705 = state_27577__$1;(statearr_27639_27705[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 16))
{var inst_27474 = (state_27577[7]);var inst_27476 = cljs.core.chunked_seq_QMARK_.call(null,inst_27474);var state_27577__$1 = state_27577;if(inst_27476)
{var statearr_27643_27706 = state_27577__$1;(statearr_27643_27706[1] = 19);
} else
{var statearr_27644_27707 = state_27577__$1;(statearr_27644_27707[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 38))
{var inst_27556 = (state_27577[2]);var state_27577__$1 = state_27577;var statearr_27645_27708 = state_27577__$1;(statearr_27645_27708[2] = inst_27556);
(statearr_27645_27708[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 30))
{var inst_27515 = (state_27577[18]);var inst_27514 = (state_27577[9]);var inst_27513 = (state_27577[20]);var inst_27516 = (state_27577[10]);var inst_27530 = (state_27577[2]);var inst_27531 = (inst_27516 + 1);var tmp27640 = inst_27515;var tmp27641 = inst_27514;var tmp27642 = inst_27513;var inst_27513__$1 = tmp27642;var inst_27514__$1 = tmp27641;var inst_27515__$1 = tmp27640;var inst_27516__$1 = inst_27531;var state_27577__$1 = (function (){var statearr_27646 = state_27577;(statearr_27646[18] = inst_27515__$1);
(statearr_27646[9] = inst_27514__$1);
(statearr_27646[33] = inst_27530);
(statearr_27646[20] = inst_27513__$1);
(statearr_27646[10] = inst_27516__$1);
return statearr_27646;
})();var statearr_27647_27709 = state_27577__$1;(statearr_27647_27709[2] = null);
(statearr_27647_27709[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 10))
{var inst_27457 = (state_27577[12]);var inst_27455 = (state_27577[13]);var inst_27463 = cljs.core._nth.call(null,inst_27455,inst_27457);var inst_27464 = cljs.core.nth.call(null,inst_27463,0,null);var inst_27465 = cljs.core.nth.call(null,inst_27463,1,null);var state_27577__$1 = (function (){var statearr_27648 = state_27577;(statearr_27648[28] = inst_27464);
return statearr_27648;
})();if(cljs.core.truth_(inst_27465))
{var statearr_27649_27710 = state_27577__$1;(statearr_27649_27710[1] = 13);
} else
{var statearr_27650_27711 = state_27577__$1;(statearr_27650_27711[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 18))
{var inst_27498 = (state_27577[2]);var state_27577__$1 = state_27577;var statearr_27651_27712 = state_27577__$1;(statearr_27651_27712[2] = inst_27498);
(statearr_27651_27712[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 42))
{var state_27577__$1 = state_27577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27577__$1,45,dchan);
} else
{if((state_val_27578 === 37))
{var inst_27534 = (state_27577[17]);var inst_27543 = cljs.core.first.call(null,inst_27534);var state_27577__$1 = (function (){var statearr_27652 = state_27577;(statearr_27652[25] = inst_27543);
return statearr_27652;
})();var statearr_27653_27713 = state_27577__$1;(statearr_27653_27713[2] = null);
(statearr_27653_27713[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27578 === 8))
{var inst_27457 = (state_27577[12]);var inst_27456 = (state_27577[14]);var inst_27459 = (inst_27457 < inst_27456);var inst_27460 = inst_27459;var state_27577__$1 = state_27577;if(cljs.core.truth_(inst_27460))
{var statearr_27654_27714 = state_27577__$1;(statearr_27654_27714[1] = 10);
} else
{var statearr_27655_27715 = state_27577__$1;(statearr_27655_27715[1] = 11);
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
var state_machine__23717__auto____0 = (function (){var statearr_27659 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27659[0] = state_machine__23717__auto__);
(statearr_27659[1] = 1);
return statearr_27659;
});
var state_machine__23717__auto____1 = (function (state_27577){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_27577);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e27660){if((e27660 instanceof Object))
{var ex__23720__auto__ = e27660;var statearr_27661_27716 = state_27577;(statearr_27661_27716[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27577);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27717 = state_27577;
state_27577 = G__27717;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_27577){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_27577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_27662 = f__23781__auto__.call(null);(statearr_27662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___27663);
return statearr_27662;
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
cljs.core.async.Mix = (function (){var obj27719 = {};return obj27719;
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
;var m = (function (){if(typeof cljs.core.async.t27829 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27829 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27830){
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
this.meta27830 = meta27830;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27829.cljs$lang$type = true;
cljs.core.async.t27829.cljs$lang$ctorStr = "cljs.core.async/t27829";
cljs.core.async.t27829.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t27829");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27829.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t27829.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27829.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27829.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27829.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27829.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27829.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t27829.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27831){var self__ = this;
var _27831__$1 = this;return self__.meta27830;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t27829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27831,meta27830__$1){var self__ = this;
var _27831__$1 = this;return (new cljs.core.async.t27829(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27830__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t27829 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t27829(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27830){return (new cljs.core.async.t27829(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27830));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t27829(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__23780__auto___27938 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_27896){var state_val_27897 = (state_27896[1]);if((state_val_27897 === 7))
{var inst_27845 = (state_27896[7]);var inst_27850 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27845);var state_27896__$1 = state_27896;var statearr_27898_27939 = state_27896__$1;(statearr_27898_27939[2] = inst_27850);
(statearr_27898_27939[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 20))
{var inst_27860 = (state_27896[8]);var state_27896__$1 = state_27896;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27896__$1,23,out,inst_27860);
} else
{if((state_val_27897 === 1))
{var inst_27835 = (state_27896[9]);var inst_27835__$1 = calc_state.call(null);var inst_27836 = cljs.core.seq_QMARK_.call(null,inst_27835__$1);var state_27896__$1 = (function (){var statearr_27899 = state_27896;(statearr_27899[9] = inst_27835__$1);
return statearr_27899;
})();if(inst_27836)
{var statearr_27900_27940 = state_27896__$1;(statearr_27900_27940[1] = 2);
} else
{var statearr_27901_27941 = state_27896__$1;(statearr_27901_27941[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 4))
{var inst_27835 = (state_27896[9]);var inst_27841 = (state_27896[2]);var inst_27842 = cljs.core.get.call(null,inst_27841,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27843 = cljs.core.get.call(null,inst_27841,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27844 = cljs.core.get.call(null,inst_27841,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_27845 = inst_27835;var state_27896__$1 = (function (){var statearr_27902 = state_27896;(statearr_27902[10] = inst_27844);
(statearr_27902[11] = inst_27842);
(statearr_27902[7] = inst_27845);
(statearr_27902[12] = inst_27843);
return statearr_27902;
})();var statearr_27903_27942 = state_27896__$1;(statearr_27903_27942[2] = null);
(statearr_27903_27942[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 15))
{var state_27896__$1 = state_27896;var statearr_27904_27943 = state_27896__$1;(statearr_27904_27943[2] = null);
(statearr_27904_27943[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 21))
{var state_27896__$1 = state_27896;var statearr_27905_27944 = state_27896__$1;(statearr_27905_27944[2] = null);
(statearr_27905_27944[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 13))
{var inst_27892 = (state_27896[2]);var state_27896__$1 = state_27896;var statearr_27906_27945 = state_27896__$1;(statearr_27906_27945[2] = inst_27892);
(statearr_27906_27945[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 22))
{var inst_27853 = (state_27896[13]);var inst_27889 = (state_27896[2]);var inst_27845 = inst_27853;var state_27896__$1 = (function (){var statearr_27907 = state_27896;(statearr_27907[14] = inst_27889);
(statearr_27907[7] = inst_27845);
return statearr_27907;
})();var statearr_27908_27946 = state_27896__$1;(statearr_27908_27946[2] = null);
(statearr_27908_27946[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 6))
{var inst_27894 = (state_27896[2]);var state_27896__$1 = state_27896;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27896__$1,inst_27894);
} else
{if((state_val_27897 === 17))
{var inst_27875 = (state_27896[15]);var state_27896__$1 = state_27896;var statearr_27909_27947 = state_27896__$1;(statearr_27909_27947[2] = inst_27875);
(statearr_27909_27947[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 3))
{var inst_27835 = (state_27896[9]);var state_27896__$1 = state_27896;var statearr_27910_27948 = state_27896__$1;(statearr_27910_27948[2] = inst_27835);
(statearr_27910_27948[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 12))
{var inst_27856 = (state_27896[16]);var inst_27875 = (state_27896[15]);var inst_27861 = (state_27896[17]);var inst_27875__$1 = inst_27856.call(null,inst_27861);var state_27896__$1 = (function (){var statearr_27911 = state_27896;(statearr_27911[15] = inst_27875__$1);
return statearr_27911;
})();if(cljs.core.truth_(inst_27875__$1))
{var statearr_27912_27949 = state_27896__$1;(statearr_27912_27949[1] = 17);
} else
{var statearr_27913_27950 = state_27896__$1;(statearr_27913_27950[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 2))
{var inst_27835 = (state_27896[9]);var inst_27838 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27835);var state_27896__$1 = state_27896;var statearr_27914_27951 = state_27896__$1;(statearr_27914_27951[2] = inst_27838);
(statearr_27914_27951[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 23))
{var inst_27886 = (state_27896[2]);var state_27896__$1 = state_27896;var statearr_27915_27952 = state_27896__$1;(statearr_27915_27952[2] = inst_27886);
(statearr_27915_27952[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 19))
{var inst_27883 = (state_27896[2]);var state_27896__$1 = state_27896;if(cljs.core.truth_(inst_27883))
{var statearr_27916_27953 = state_27896__$1;(statearr_27916_27953[1] = 20);
} else
{var statearr_27917_27954 = state_27896__$1;(statearr_27917_27954[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 11))
{var inst_27860 = (state_27896[8]);var inst_27866 = (inst_27860 == null);var state_27896__$1 = state_27896;if(cljs.core.truth_(inst_27866))
{var statearr_27918_27955 = state_27896__$1;(statearr_27918_27955[1] = 14);
} else
{var statearr_27919_27956 = state_27896__$1;(statearr_27919_27956[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 9))
{var inst_27853 = (state_27896[13]);var inst_27853__$1 = (state_27896[2]);var inst_27854 = cljs.core.get.call(null,inst_27853__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_27855 = cljs.core.get.call(null,inst_27853__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_27856 = cljs.core.get.call(null,inst_27853__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_27896__$1 = (function (){var statearr_27920 = state_27896;(statearr_27920[16] = inst_27856);
(statearr_27920[13] = inst_27853__$1);
(statearr_27920[18] = inst_27855);
return statearr_27920;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_27896__$1,10,inst_27854);
} else
{if((state_val_27897 === 5))
{var inst_27845 = (state_27896[7]);var inst_27848 = cljs.core.seq_QMARK_.call(null,inst_27845);var state_27896__$1 = state_27896;if(inst_27848)
{var statearr_27921_27957 = state_27896__$1;(statearr_27921_27957[1] = 7);
} else
{var statearr_27922_27958 = state_27896__$1;(statearr_27922_27958[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 14))
{var inst_27861 = (state_27896[17]);var inst_27868 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27861);var state_27896__$1 = state_27896;var statearr_27923_27959 = state_27896__$1;(statearr_27923_27959[2] = inst_27868);
(statearr_27923_27959[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 16))
{var inst_27871 = (state_27896[2]);var inst_27872 = calc_state.call(null);var inst_27845 = inst_27872;var state_27896__$1 = (function (){var statearr_27924 = state_27896;(statearr_27924[19] = inst_27871);
(statearr_27924[7] = inst_27845);
return statearr_27924;
})();var statearr_27925_27960 = state_27896__$1;(statearr_27925_27960[2] = null);
(statearr_27925_27960[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 10))
{var inst_27860 = (state_27896[8]);var inst_27861 = (state_27896[17]);var inst_27859 = (state_27896[2]);var inst_27860__$1 = cljs.core.nth.call(null,inst_27859,0,null);var inst_27861__$1 = cljs.core.nth.call(null,inst_27859,1,null);var inst_27862 = (inst_27860__$1 == null);var inst_27863 = cljs.core._EQ_.call(null,inst_27861__$1,change);var inst_27864 = (inst_27862) || (inst_27863);var state_27896__$1 = (function (){var statearr_27926 = state_27896;(statearr_27926[8] = inst_27860__$1);
(statearr_27926[17] = inst_27861__$1);
return statearr_27926;
})();if(cljs.core.truth_(inst_27864))
{var statearr_27927_27961 = state_27896__$1;(statearr_27927_27961[1] = 11);
} else
{var statearr_27928_27962 = state_27896__$1;(statearr_27928_27962[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 18))
{var inst_27856 = (state_27896[16]);var inst_27855 = (state_27896[18]);var inst_27861 = (state_27896[17]);var inst_27878 = cljs.core.empty_QMARK_.call(null,inst_27856);var inst_27879 = inst_27855.call(null,inst_27861);var inst_27880 = cljs.core.not.call(null,inst_27879);var inst_27881 = (inst_27878) && (inst_27880);var state_27896__$1 = state_27896;var statearr_27929_27963 = state_27896__$1;(statearr_27929_27963[2] = inst_27881);
(statearr_27929_27963[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_27897 === 8))
{var inst_27845 = (state_27896[7]);var state_27896__$1 = state_27896;var statearr_27930_27964 = state_27896__$1;(statearr_27930_27964[2] = inst_27845);
(statearr_27930_27964[1] = 9);
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
var state_machine__23717__auto____0 = (function (){var statearr_27934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27934[0] = state_machine__23717__auto__);
(statearr_27934[1] = 1);
return statearr_27934;
});
var state_machine__23717__auto____1 = (function (state_27896){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_27896);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e27935){if((e27935 instanceof Object))
{var ex__23720__auto__ = e27935;var statearr_27936_27965 = state_27896;(statearr_27936_27965[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27896);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e27935;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__27966 = state_27896;
state_27896 = G__27966;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_27896){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_27896);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_27937 = f__23781__auto__.call(null);(statearr_27937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___27938);
return statearr_27937;
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
cljs.core.async.Pub = (function (){var obj27968 = {};return obj27968;
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
return (function (p1__27969_SHARP_){if(cljs.core.truth_(p1__27969_SHARP_.call(null,topic)))
{return p1__27969_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__27969_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14982__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t28094 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28094 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta28095){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta28095 = meta28095;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28094.cljs$lang$type = true;
cljs.core.async.t28094.cljs$lang$ctorStr = "cljs.core.async/t28094";
cljs.core.async.t28094.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t28094");
});})(mults,ensure_mult))
;
cljs.core.async.t28094.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t28094.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t28094.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t28094.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t28094.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t28094.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28094.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t28094.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28096){var self__ = this;
var _28096__$1 = this;return self__.meta28095;
});})(mults,ensure_mult))
;
cljs.core.async.t28094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28096,meta28095__$1){var self__ = this;
var _28096__$1 = this;return (new cljs.core.async.t28094(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta28095__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t28094 = ((function (mults,ensure_mult){
return (function __GT_t28094(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28095){return (new cljs.core.async.t28094(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta28095));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t28094(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__23780__auto___28218 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_28170){var state_val_28171 = (state_28170[1]);if((state_val_28171 === 7))
{var inst_28166 = (state_28170[2]);var state_28170__$1 = state_28170;var statearr_28172_28219 = state_28170__$1;(statearr_28172_28219[2] = inst_28166);
(statearr_28172_28219[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 20))
{var state_28170__$1 = state_28170;var statearr_28173_28220 = state_28170__$1;(statearr_28173_28220[2] = null);
(statearr_28173_28220[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 1))
{var state_28170__$1 = state_28170;var statearr_28174_28221 = state_28170__$1;(statearr_28174_28221[2] = null);
(statearr_28174_28221[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 24))
{var inst_28099 = (state_28170[7]);var inst_28149 = (state_28170[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28170,23,Object,null,22);var inst_28156 = cljs.core.async.muxch_STAR_.call(null,inst_28149);var state_28170__$1 = state_28170;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28170__$1,25,inst_28156,inst_28099);
} else
{if((state_val_28171 === 4))
{var inst_28099 = (state_28170[7]);var inst_28099__$1 = (state_28170[2]);var inst_28100 = (inst_28099__$1 == null);var state_28170__$1 = (function (){var statearr_28175 = state_28170;(statearr_28175[7] = inst_28099__$1);
return statearr_28175;
})();if(cljs.core.truth_(inst_28100))
{var statearr_28176_28222 = state_28170__$1;(statearr_28176_28222[1] = 5);
} else
{var statearr_28177_28223 = state_28170__$1;(statearr_28177_28223[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 15))
{var inst_28141 = (state_28170[2]);var state_28170__$1 = state_28170;var statearr_28178_28224 = state_28170__$1;(statearr_28178_28224[2] = inst_28141);
(statearr_28178_28224[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 21))
{var inst_28163 = (state_28170[2]);var state_28170__$1 = (function (){var statearr_28179 = state_28170;(statearr_28179[9] = inst_28163);
return statearr_28179;
})();var statearr_28180_28225 = state_28170__$1;(statearr_28180_28225[2] = null);
(statearr_28180_28225[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 13))
{var inst_28123 = (state_28170[10]);var inst_28125 = cljs.core.chunked_seq_QMARK_.call(null,inst_28123);var state_28170__$1 = state_28170;if(inst_28125)
{var statearr_28181_28226 = state_28170__$1;(statearr_28181_28226[1] = 16);
} else
{var statearr_28182_28227 = state_28170__$1;(statearr_28182_28227[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 22))
{var inst_28160 = (state_28170[2]);var state_28170__$1 = state_28170;var statearr_28183_28228 = state_28170__$1;(statearr_28183_28228[2] = inst_28160);
(statearr_28183_28228[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 6))
{var inst_28147 = (state_28170[11]);var inst_28099 = (state_28170[7]);var inst_28149 = (state_28170[8]);var inst_28147__$1 = topic_fn.call(null,inst_28099);var inst_28148 = cljs.core.deref.call(null,mults);var inst_28149__$1 = cljs.core.get.call(null,inst_28148,inst_28147__$1);var state_28170__$1 = (function (){var statearr_28184 = state_28170;(statearr_28184[11] = inst_28147__$1);
(statearr_28184[8] = inst_28149__$1);
return statearr_28184;
})();if(cljs.core.truth_(inst_28149__$1))
{var statearr_28185_28229 = state_28170__$1;(statearr_28185_28229[1] = 19);
} else
{var statearr_28186_28230 = state_28170__$1;(statearr_28186_28230[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 25))
{var inst_28158 = (state_28170[2]);var state_28170__$1 = state_28170;var statearr_28187_28231 = state_28170__$1;(statearr_28187_28231[2] = inst_28158);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28170__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 17))
{var inst_28123 = (state_28170[10]);var inst_28132 = cljs.core.first.call(null,inst_28123);var inst_28133 = cljs.core.async.muxch_STAR_.call(null,inst_28132);var inst_28134 = cljs.core.async.close_BANG_.call(null,inst_28133);var inst_28135 = cljs.core.next.call(null,inst_28123);var inst_28109 = inst_28135;var inst_28110 = null;var inst_28111 = 0;var inst_28112 = 0;var state_28170__$1 = (function (){var statearr_28188 = state_28170;(statearr_28188[12] = inst_28111);
(statearr_28188[13] = inst_28112);
(statearr_28188[14] = inst_28134);
(statearr_28188[15] = inst_28110);
(statearr_28188[16] = inst_28109);
return statearr_28188;
})();var statearr_28189_28232 = state_28170__$1;(statearr_28189_28232[2] = null);
(statearr_28189_28232[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 3))
{var inst_28168 = (state_28170[2]);var state_28170__$1 = state_28170;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28170__$1,inst_28168);
} else
{if((state_val_28171 === 12))
{var inst_28143 = (state_28170[2]);var state_28170__$1 = state_28170;var statearr_28190_28233 = state_28170__$1;(statearr_28190_28233[2] = inst_28143);
(statearr_28190_28233[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 2))
{var state_28170__$1 = state_28170;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28170__$1,4,ch);
} else
{if((state_val_28171 === 23))
{var inst_28147 = (state_28170[11]);var inst_28151 = (state_28170[2]);var inst_28152 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28147);var state_28170__$1 = (function (){var statearr_28191 = state_28170;(statearr_28191[17] = inst_28151);
return statearr_28191;
})();var statearr_28192_28234 = state_28170__$1;(statearr_28192_28234[2] = inst_28152);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28170__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 19))
{var state_28170__$1 = state_28170;var statearr_28193_28235 = state_28170__$1;(statearr_28193_28235[2] = null);
(statearr_28193_28235[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 11))
{var inst_28123 = (state_28170[10]);var inst_28109 = (state_28170[16]);var inst_28123__$1 = cljs.core.seq.call(null,inst_28109);var state_28170__$1 = (function (){var statearr_28194 = state_28170;(statearr_28194[10] = inst_28123__$1);
return statearr_28194;
})();if(inst_28123__$1)
{var statearr_28195_28236 = state_28170__$1;(statearr_28195_28236[1] = 13);
} else
{var statearr_28196_28237 = state_28170__$1;(statearr_28196_28237[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 9))
{var inst_28145 = (state_28170[2]);var state_28170__$1 = state_28170;var statearr_28197_28238 = state_28170__$1;(statearr_28197_28238[2] = inst_28145);
(statearr_28197_28238[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 5))
{var inst_28106 = cljs.core.deref.call(null,mults);var inst_28107 = cljs.core.vals.call(null,inst_28106);var inst_28108 = cljs.core.seq.call(null,inst_28107);var inst_28109 = inst_28108;var inst_28110 = null;var inst_28111 = 0;var inst_28112 = 0;var state_28170__$1 = (function (){var statearr_28198 = state_28170;(statearr_28198[12] = inst_28111);
(statearr_28198[13] = inst_28112);
(statearr_28198[15] = inst_28110);
(statearr_28198[16] = inst_28109);
return statearr_28198;
})();var statearr_28199_28239 = state_28170__$1;(statearr_28199_28239[2] = null);
(statearr_28199_28239[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 14))
{var state_28170__$1 = state_28170;var statearr_28203_28240 = state_28170__$1;(statearr_28203_28240[2] = null);
(statearr_28203_28240[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 16))
{var inst_28123 = (state_28170[10]);var inst_28127 = cljs.core.chunk_first.call(null,inst_28123);var inst_28128 = cljs.core.chunk_rest.call(null,inst_28123);var inst_28129 = cljs.core.count.call(null,inst_28127);var inst_28109 = inst_28128;var inst_28110 = inst_28127;var inst_28111 = inst_28129;var inst_28112 = 0;var state_28170__$1 = (function (){var statearr_28204 = state_28170;(statearr_28204[12] = inst_28111);
(statearr_28204[13] = inst_28112);
(statearr_28204[15] = inst_28110);
(statearr_28204[16] = inst_28109);
return statearr_28204;
})();var statearr_28205_28241 = state_28170__$1;(statearr_28205_28241[2] = null);
(statearr_28205_28241[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 10))
{var inst_28111 = (state_28170[12]);var inst_28112 = (state_28170[13]);var inst_28110 = (state_28170[15]);var inst_28109 = (state_28170[16]);var inst_28117 = cljs.core._nth.call(null,inst_28110,inst_28112);var inst_28118 = cljs.core.async.muxch_STAR_.call(null,inst_28117);var inst_28119 = cljs.core.async.close_BANG_.call(null,inst_28118);var inst_28120 = (inst_28112 + 1);var tmp28200 = inst_28111;var tmp28201 = inst_28110;var tmp28202 = inst_28109;var inst_28109__$1 = tmp28202;var inst_28110__$1 = tmp28201;var inst_28111__$1 = tmp28200;var inst_28112__$1 = inst_28120;var state_28170__$1 = (function (){var statearr_28206 = state_28170;(statearr_28206[12] = inst_28111__$1);
(statearr_28206[13] = inst_28112__$1);
(statearr_28206[15] = inst_28110__$1);
(statearr_28206[18] = inst_28119);
(statearr_28206[16] = inst_28109__$1);
return statearr_28206;
})();var statearr_28207_28242 = state_28170__$1;(statearr_28207_28242[2] = null);
(statearr_28207_28242[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 18))
{var inst_28138 = (state_28170[2]);var state_28170__$1 = state_28170;var statearr_28208_28243 = state_28170__$1;(statearr_28208_28243[2] = inst_28138);
(statearr_28208_28243[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28171 === 8))
{var inst_28111 = (state_28170[12]);var inst_28112 = (state_28170[13]);var inst_28114 = (inst_28112 < inst_28111);var inst_28115 = inst_28114;var state_28170__$1 = state_28170;if(cljs.core.truth_(inst_28115))
{var statearr_28209_28244 = state_28170__$1;(statearr_28209_28244[1] = 10);
} else
{var statearr_28210_28245 = state_28170__$1;(statearr_28210_28245[1] = 11);
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
var state_machine__23717__auto____0 = (function (){var statearr_28214 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28214[0] = state_machine__23717__auto__);
(statearr_28214[1] = 1);
return statearr_28214;
});
var state_machine__23717__auto____1 = (function (state_28170){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_28170);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e28215){if((e28215 instanceof Object))
{var ex__23720__auto__ = e28215;var statearr_28216_28246 = state_28170;(statearr_28216_28246[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28170);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28215;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28247 = state_28170;
state_28170 = G__28247;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_28170){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_28170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_28217 = f__23781__auto__.call(null);(statearr_28217[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___28218);
return statearr_28217;
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
,cljs.core.range.call(null,cnt));var c__23780__auto___28384 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_28354){var state_val_28355 = (state_28354[1]);if((state_val_28355 === 7))
{var state_28354__$1 = state_28354;var statearr_28356_28385 = state_28354__$1;(statearr_28356_28385[2] = null);
(statearr_28356_28385[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28355 === 1))
{var state_28354__$1 = state_28354;var statearr_28357_28386 = state_28354__$1;(statearr_28357_28386[2] = null);
(statearr_28357_28386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28355 === 4))
{var inst_28318 = (state_28354[7]);var inst_28320 = (inst_28318 < cnt);var state_28354__$1 = state_28354;if(cljs.core.truth_(inst_28320))
{var statearr_28358_28387 = state_28354__$1;(statearr_28358_28387[1] = 6);
} else
{var statearr_28359_28388 = state_28354__$1;(statearr_28359_28388[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28355 === 15))
{var inst_28350 = (state_28354[2]);var state_28354__$1 = state_28354;var statearr_28360_28389 = state_28354__$1;(statearr_28360_28389[2] = inst_28350);
(statearr_28360_28389[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28355 === 13))
{var inst_28343 = cljs.core.async.close_BANG_.call(null,out);var state_28354__$1 = state_28354;var statearr_28361_28390 = state_28354__$1;(statearr_28361_28390[2] = inst_28343);
(statearr_28361_28390[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28355 === 6))
{var state_28354__$1 = state_28354;var statearr_28362_28391 = state_28354__$1;(statearr_28362_28391[2] = null);
(statearr_28362_28391[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28355 === 3))
{var inst_28352 = (state_28354[2]);var state_28354__$1 = state_28354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28354__$1,inst_28352);
} else
{if((state_val_28355 === 12))
{var inst_28340 = (state_28354[8]);var inst_28340__$1 = (state_28354[2]);var inst_28341 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28340__$1);var state_28354__$1 = (function (){var statearr_28363 = state_28354;(statearr_28363[8] = inst_28340__$1);
return statearr_28363;
})();if(cljs.core.truth_(inst_28341))
{var statearr_28364_28392 = state_28354__$1;(statearr_28364_28392[1] = 13);
} else
{var statearr_28365_28393 = state_28354__$1;(statearr_28365_28393[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28355 === 2))
{var inst_28317 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_28318 = 0;var state_28354__$1 = (function (){var statearr_28366 = state_28354;(statearr_28366[9] = inst_28317);
(statearr_28366[7] = inst_28318);
return statearr_28366;
})();var statearr_28367_28394 = state_28354__$1;(statearr_28367_28394[2] = null);
(statearr_28367_28394[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28355 === 11))
{var inst_28318 = (state_28354[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28354,10,Object,null,9);var inst_28327 = chs__$1.call(null,inst_28318);var inst_28328 = done.call(null,inst_28318);var inst_28329 = cljs.core.async.take_BANG_.call(null,inst_28327,inst_28328);var state_28354__$1 = state_28354;var statearr_28368_28395 = state_28354__$1;(statearr_28368_28395[2] = inst_28329);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28354__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28355 === 9))
{var inst_28318 = (state_28354[7]);var inst_28331 = (state_28354[2]);var inst_28332 = (inst_28318 + 1);var inst_28318__$1 = inst_28332;var state_28354__$1 = (function (){var statearr_28369 = state_28354;(statearr_28369[10] = inst_28331);
(statearr_28369[7] = inst_28318__$1);
return statearr_28369;
})();var statearr_28370_28396 = state_28354__$1;(statearr_28370_28396[2] = null);
(statearr_28370_28396[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28355 === 5))
{var inst_28338 = (state_28354[2]);var state_28354__$1 = (function (){var statearr_28371 = state_28354;(statearr_28371[11] = inst_28338);
return statearr_28371;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28354__$1,12,dchan);
} else
{if((state_val_28355 === 14))
{var inst_28340 = (state_28354[8]);var inst_28345 = cljs.core.apply.call(null,f,inst_28340);var state_28354__$1 = state_28354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28354__$1,16,out,inst_28345);
} else
{if((state_val_28355 === 16))
{var inst_28347 = (state_28354[2]);var state_28354__$1 = (function (){var statearr_28372 = state_28354;(statearr_28372[12] = inst_28347);
return statearr_28372;
})();var statearr_28373_28397 = state_28354__$1;(statearr_28373_28397[2] = null);
(statearr_28373_28397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28355 === 10))
{var inst_28322 = (state_28354[2]);var inst_28323 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_28354__$1 = (function (){var statearr_28374 = state_28354;(statearr_28374[13] = inst_28322);
return statearr_28374;
})();var statearr_28375_28398 = state_28354__$1;(statearr_28375_28398[2] = inst_28323);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28354__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28355 === 8))
{var inst_28336 = (state_28354[2]);var state_28354__$1 = state_28354;var statearr_28376_28399 = state_28354__$1;(statearr_28376_28399[2] = inst_28336);
(statearr_28376_28399[1] = 5);
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
var state_machine__23717__auto____0 = (function (){var statearr_28380 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28380[0] = state_machine__23717__auto__);
(statearr_28380[1] = 1);
return statearr_28380;
});
var state_machine__23717__auto____1 = (function (state_28354){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_28354);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e28381){if((e28381 instanceof Object))
{var ex__23720__auto__ = e28381;var statearr_28382_28400 = state_28354;(statearr_28382_28400[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28354);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28401 = state_28354;
state_28354 = G__28401;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_28354){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_28354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_28383 = f__23781__auto__.call(null);(statearr_28383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___28384);
return statearr_28383;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___28509 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_28485){var state_val_28486 = (state_28485[1]);if((state_val_28486 === 7))
{var inst_28464 = (state_28485[7]);var inst_28465 = (state_28485[8]);var inst_28464__$1 = (state_28485[2]);var inst_28465__$1 = cljs.core.nth.call(null,inst_28464__$1,0,null);var inst_28466 = cljs.core.nth.call(null,inst_28464__$1,1,null);var inst_28467 = (inst_28465__$1 == null);var state_28485__$1 = (function (){var statearr_28487 = state_28485;(statearr_28487[7] = inst_28464__$1);
(statearr_28487[8] = inst_28465__$1);
(statearr_28487[9] = inst_28466);
return statearr_28487;
})();if(cljs.core.truth_(inst_28467))
{var statearr_28488_28510 = state_28485__$1;(statearr_28488_28510[1] = 8);
} else
{var statearr_28489_28511 = state_28485__$1;(statearr_28489_28511[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 1))
{var inst_28456 = cljs.core.vec.call(null,chs);var inst_28457 = inst_28456;var state_28485__$1 = (function (){var statearr_28490 = state_28485;(statearr_28490[10] = inst_28457);
return statearr_28490;
})();var statearr_28491_28512 = state_28485__$1;(statearr_28491_28512[2] = null);
(statearr_28491_28512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 4))
{var inst_28457 = (state_28485[10]);var state_28485__$1 = state_28485;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28485__$1,7,inst_28457);
} else
{if((state_val_28486 === 6))
{var inst_28481 = (state_28485[2]);var state_28485__$1 = state_28485;var statearr_28492_28513 = state_28485__$1;(statearr_28492_28513[2] = inst_28481);
(statearr_28492_28513[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 3))
{var inst_28483 = (state_28485[2]);var state_28485__$1 = state_28485;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28485__$1,inst_28483);
} else
{if((state_val_28486 === 2))
{var inst_28457 = (state_28485[10]);var inst_28459 = cljs.core.count.call(null,inst_28457);var inst_28460 = (inst_28459 > 0);var state_28485__$1 = state_28485;if(cljs.core.truth_(inst_28460))
{var statearr_28494_28514 = state_28485__$1;(statearr_28494_28514[1] = 4);
} else
{var statearr_28495_28515 = state_28485__$1;(statearr_28495_28515[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 11))
{var inst_28457 = (state_28485[10]);var inst_28474 = (state_28485[2]);var tmp28493 = inst_28457;var inst_28457__$1 = tmp28493;var state_28485__$1 = (function (){var statearr_28496 = state_28485;(statearr_28496[11] = inst_28474);
(statearr_28496[10] = inst_28457__$1);
return statearr_28496;
})();var statearr_28497_28516 = state_28485__$1;(statearr_28497_28516[2] = null);
(statearr_28497_28516[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 9))
{var inst_28465 = (state_28485[8]);var state_28485__$1 = state_28485;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28485__$1,11,out,inst_28465);
} else
{if((state_val_28486 === 5))
{var inst_28479 = cljs.core.async.close_BANG_.call(null,out);var state_28485__$1 = state_28485;var statearr_28498_28517 = state_28485__$1;(statearr_28498_28517[2] = inst_28479);
(statearr_28498_28517[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 10))
{var inst_28477 = (state_28485[2]);var state_28485__$1 = state_28485;var statearr_28499_28518 = state_28485__$1;(statearr_28499_28518[2] = inst_28477);
(statearr_28499_28518[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28486 === 8))
{var inst_28464 = (state_28485[7]);var inst_28465 = (state_28485[8]);var inst_28457 = (state_28485[10]);var inst_28466 = (state_28485[9]);var inst_28469 = (function (){var c = inst_28466;var v = inst_28465;var vec__28462 = inst_28464;var cs = inst_28457;return ((function (c,v,vec__28462,cs,inst_28464,inst_28465,inst_28457,inst_28466,state_val_28486){
return (function (p1__28402_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__28402_SHARP_);
});
;})(c,v,vec__28462,cs,inst_28464,inst_28465,inst_28457,inst_28466,state_val_28486))
})();var inst_28470 = cljs.core.filterv.call(null,inst_28469,inst_28457);var inst_28457__$1 = inst_28470;var state_28485__$1 = (function (){var statearr_28500 = state_28485;(statearr_28500[10] = inst_28457__$1);
return statearr_28500;
})();var statearr_28501_28519 = state_28485__$1;(statearr_28501_28519[2] = null);
(statearr_28501_28519[1] = 2);
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
var state_machine__23717__auto____0 = (function (){var statearr_28505 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28505[0] = state_machine__23717__auto__);
(statearr_28505[1] = 1);
return statearr_28505;
});
var state_machine__23717__auto____1 = (function (state_28485){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_28485);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e28506){if((e28506 instanceof Object))
{var ex__23720__auto__ = e28506;var statearr_28507_28520 = state_28485;(statearr_28507_28520[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28485);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28506;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28521 = state_28485;
state_28485 = G__28521;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_28485){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_28485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_28508 = f__23781__auto__.call(null);(statearr_28508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___28509);
return statearr_28508;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___28614 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_28591){var state_val_28592 = (state_28591[1]);if((state_val_28592 === 7))
{var inst_28573 = (state_28591[7]);var inst_28573__$1 = (state_28591[2]);var inst_28574 = (inst_28573__$1 == null);var inst_28575 = cljs.core.not.call(null,inst_28574);var state_28591__$1 = (function (){var statearr_28593 = state_28591;(statearr_28593[7] = inst_28573__$1);
return statearr_28593;
})();if(inst_28575)
{var statearr_28594_28615 = state_28591__$1;(statearr_28594_28615[1] = 8);
} else
{var statearr_28595_28616 = state_28591__$1;(statearr_28595_28616[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28592 === 1))
{var inst_28568 = 0;var state_28591__$1 = (function (){var statearr_28596 = state_28591;(statearr_28596[8] = inst_28568);
return statearr_28596;
})();var statearr_28597_28617 = state_28591__$1;(statearr_28597_28617[2] = null);
(statearr_28597_28617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28592 === 4))
{var state_28591__$1 = state_28591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28591__$1,7,ch);
} else
{if((state_val_28592 === 6))
{var inst_28586 = (state_28591[2]);var state_28591__$1 = state_28591;var statearr_28598_28618 = state_28591__$1;(statearr_28598_28618[2] = inst_28586);
(statearr_28598_28618[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28592 === 3))
{var inst_28588 = (state_28591[2]);var inst_28589 = cljs.core.async.close_BANG_.call(null,out);var state_28591__$1 = (function (){var statearr_28599 = state_28591;(statearr_28599[9] = inst_28588);
return statearr_28599;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28591__$1,inst_28589);
} else
{if((state_val_28592 === 2))
{var inst_28568 = (state_28591[8]);var inst_28570 = (inst_28568 < n);var state_28591__$1 = state_28591;if(cljs.core.truth_(inst_28570))
{var statearr_28600_28619 = state_28591__$1;(statearr_28600_28619[1] = 4);
} else
{var statearr_28601_28620 = state_28591__$1;(statearr_28601_28620[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28592 === 11))
{var inst_28568 = (state_28591[8]);var inst_28578 = (state_28591[2]);var inst_28579 = (inst_28568 + 1);var inst_28568__$1 = inst_28579;var state_28591__$1 = (function (){var statearr_28602 = state_28591;(statearr_28602[8] = inst_28568__$1);
(statearr_28602[10] = inst_28578);
return statearr_28602;
})();var statearr_28603_28621 = state_28591__$1;(statearr_28603_28621[2] = null);
(statearr_28603_28621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28592 === 9))
{var state_28591__$1 = state_28591;var statearr_28604_28622 = state_28591__$1;(statearr_28604_28622[2] = null);
(statearr_28604_28622[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28592 === 5))
{var state_28591__$1 = state_28591;var statearr_28605_28623 = state_28591__$1;(statearr_28605_28623[2] = null);
(statearr_28605_28623[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28592 === 10))
{var inst_28583 = (state_28591[2]);var state_28591__$1 = state_28591;var statearr_28606_28624 = state_28591__$1;(statearr_28606_28624[2] = inst_28583);
(statearr_28606_28624[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28592 === 8))
{var inst_28573 = (state_28591[7]);var state_28591__$1 = state_28591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28591__$1,11,out,inst_28573);
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
var state_machine__23717__auto____0 = (function (){var statearr_28610 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28610[0] = state_machine__23717__auto__);
(statearr_28610[1] = 1);
return statearr_28610;
});
var state_machine__23717__auto____1 = (function (state_28591){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_28591);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e28611){if((e28611 instanceof Object))
{var ex__23720__auto__ = e28611;var statearr_28612_28625 = state_28591;(statearr_28612_28625[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28591);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28611;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28626 = state_28591;
state_28591 = G__28626;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_28591){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_28591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_28613 = f__23781__auto__.call(null);(statearr_28613[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___28614);
return statearr_28613;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___28723 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_28698){var state_val_28699 = (state_28698[1]);if((state_val_28699 === 7))
{var inst_28693 = (state_28698[2]);var state_28698__$1 = state_28698;var statearr_28700_28724 = state_28698__$1;(statearr_28700_28724[2] = inst_28693);
(statearr_28700_28724[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28699 === 1))
{var inst_28675 = null;var state_28698__$1 = (function (){var statearr_28701 = state_28698;(statearr_28701[7] = inst_28675);
return statearr_28701;
})();var statearr_28702_28725 = state_28698__$1;(statearr_28702_28725[2] = null);
(statearr_28702_28725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28699 === 4))
{var inst_28678 = (state_28698[8]);var inst_28678__$1 = (state_28698[2]);var inst_28679 = (inst_28678__$1 == null);var inst_28680 = cljs.core.not.call(null,inst_28679);var state_28698__$1 = (function (){var statearr_28703 = state_28698;(statearr_28703[8] = inst_28678__$1);
return statearr_28703;
})();if(inst_28680)
{var statearr_28704_28726 = state_28698__$1;(statearr_28704_28726[1] = 5);
} else
{var statearr_28705_28727 = state_28698__$1;(statearr_28705_28727[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28699 === 6))
{var state_28698__$1 = state_28698;var statearr_28706_28728 = state_28698__$1;(statearr_28706_28728[2] = null);
(statearr_28706_28728[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28699 === 3))
{var inst_28695 = (state_28698[2]);var inst_28696 = cljs.core.async.close_BANG_.call(null,out);var state_28698__$1 = (function (){var statearr_28707 = state_28698;(statearr_28707[9] = inst_28695);
return statearr_28707;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28698__$1,inst_28696);
} else
{if((state_val_28699 === 2))
{var state_28698__$1 = state_28698;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28698__$1,4,ch);
} else
{if((state_val_28699 === 11))
{var inst_28678 = (state_28698[8]);var inst_28687 = (state_28698[2]);var inst_28675 = inst_28678;var state_28698__$1 = (function (){var statearr_28708 = state_28698;(statearr_28708[7] = inst_28675);
(statearr_28708[10] = inst_28687);
return statearr_28708;
})();var statearr_28709_28729 = state_28698__$1;(statearr_28709_28729[2] = null);
(statearr_28709_28729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28699 === 9))
{var inst_28678 = (state_28698[8]);var state_28698__$1 = state_28698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28698__$1,11,out,inst_28678);
} else
{if((state_val_28699 === 5))
{var inst_28675 = (state_28698[7]);var inst_28678 = (state_28698[8]);var inst_28682 = cljs.core._EQ_.call(null,inst_28678,inst_28675);var state_28698__$1 = state_28698;if(inst_28682)
{var statearr_28711_28730 = state_28698__$1;(statearr_28711_28730[1] = 8);
} else
{var statearr_28712_28731 = state_28698__$1;(statearr_28712_28731[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28699 === 10))
{var inst_28690 = (state_28698[2]);var state_28698__$1 = state_28698;var statearr_28713_28732 = state_28698__$1;(statearr_28713_28732[2] = inst_28690);
(statearr_28713_28732[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28699 === 8))
{var inst_28675 = (state_28698[7]);var tmp28710 = inst_28675;var inst_28675__$1 = tmp28710;var state_28698__$1 = (function (){var statearr_28714 = state_28698;(statearr_28714[7] = inst_28675__$1);
return statearr_28714;
})();var statearr_28715_28733 = state_28698__$1;(statearr_28715_28733[2] = null);
(statearr_28715_28733[1] = 2);
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
var state_machine__23717__auto____0 = (function (){var statearr_28719 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_28719[0] = state_machine__23717__auto__);
(statearr_28719[1] = 1);
return statearr_28719;
});
var state_machine__23717__auto____1 = (function (state_28698){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_28698);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e28720){if((e28720 instanceof Object))
{var ex__23720__auto__ = e28720;var statearr_28721_28734 = state_28698;(statearr_28721_28734[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28698);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28720;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28735 = state_28698;
state_28698 = G__28735;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_28698){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_28698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_28722 = f__23781__auto__.call(null);(statearr_28722[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___28723);
return statearr_28722;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___28870 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_28840){var state_val_28841 = (state_28840[1]);if((state_val_28841 === 7))
{var inst_28836 = (state_28840[2]);var state_28840__$1 = state_28840;var statearr_28842_28871 = state_28840__$1;(statearr_28842_28871[2] = inst_28836);
(statearr_28842_28871[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28841 === 1))
{var inst_28803 = (new Array(n));var inst_28804 = inst_28803;var inst_28805 = 0;var state_28840__$1 = (function (){var statearr_28843 = state_28840;(statearr_28843[7] = inst_28804);
(statearr_28843[8] = inst_28805);
return statearr_28843;
})();var statearr_28844_28872 = state_28840__$1;(statearr_28844_28872[2] = null);
(statearr_28844_28872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28841 === 4))
{var inst_28808 = (state_28840[9]);var inst_28808__$1 = (state_28840[2]);var inst_28809 = (inst_28808__$1 == null);var inst_28810 = cljs.core.not.call(null,inst_28809);var state_28840__$1 = (function (){var statearr_28845 = state_28840;(statearr_28845[9] = inst_28808__$1);
return statearr_28845;
})();if(inst_28810)
{var statearr_28846_28873 = state_28840__$1;(statearr_28846_28873[1] = 5);
} else
{var statearr_28847_28874 = state_28840__$1;(statearr_28847_28874[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28841 === 15))
{var inst_28830 = (state_28840[2]);var state_28840__$1 = state_28840;var statearr_28848_28875 = state_28840__$1;(statearr_28848_28875[2] = inst_28830);
(statearr_28848_28875[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28841 === 13))
{var state_28840__$1 = state_28840;var statearr_28849_28876 = state_28840__$1;(statearr_28849_28876[2] = null);
(statearr_28849_28876[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28841 === 6))
{var inst_28805 = (state_28840[8]);var inst_28826 = (inst_28805 > 0);var state_28840__$1 = state_28840;if(cljs.core.truth_(inst_28826))
{var statearr_28850_28877 = state_28840__$1;(statearr_28850_28877[1] = 12);
} else
{var statearr_28851_28878 = state_28840__$1;(statearr_28851_28878[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28841 === 3))
{var inst_28838 = (state_28840[2]);var state_28840__$1 = state_28840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28840__$1,inst_28838);
} else
{if((state_val_28841 === 12))
{var inst_28804 = (state_28840[7]);var inst_28828 = cljs.core.vec.call(null,inst_28804);var state_28840__$1 = state_28840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28840__$1,15,out,inst_28828);
} else
{if((state_val_28841 === 2))
{var state_28840__$1 = state_28840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28840__$1,4,ch);
} else
{if((state_val_28841 === 11))
{var inst_28820 = (state_28840[2]);var inst_28821 = (new Array(n));var inst_28804 = inst_28821;var inst_28805 = 0;var state_28840__$1 = (function (){var statearr_28852 = state_28840;(statearr_28852[7] = inst_28804);
(statearr_28852[8] = inst_28805);
(statearr_28852[10] = inst_28820);
return statearr_28852;
})();var statearr_28853_28879 = state_28840__$1;(statearr_28853_28879[2] = null);
(statearr_28853_28879[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28841 === 9))
{var inst_28804 = (state_28840[7]);var inst_28818 = cljs.core.vec.call(null,inst_28804);var state_28840__$1 = state_28840;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28840__$1,11,out,inst_28818);
} else
{if((state_val_28841 === 5))
{var inst_28804 = (state_28840[7]);var inst_28805 = (state_28840[8]);var inst_28813 = (state_28840[11]);var inst_28808 = (state_28840[9]);var inst_28812 = (inst_28804[inst_28805] = inst_28808);var inst_28813__$1 = (inst_28805 + 1);var inst_28814 = (inst_28813__$1 < n);var state_28840__$1 = (function (){var statearr_28854 = state_28840;(statearr_28854[12] = inst_28812);
(statearr_28854[11] = inst_28813__$1);
return statearr_28854;
})();if(cljs.core.truth_(inst_28814))
{var statearr_28855_28880 = state_28840__$1;(statearr_28855_28880[1] = 8);
} else
{var statearr_28856_28881 = state_28840__$1;(statearr_28856_28881[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28841 === 14))
{var inst_28833 = (state_28840[2]);var inst_28834 = cljs.core.async.close_BANG_.call(null,out);var state_28840__$1 = (function (){var statearr_28858 = state_28840;(statearr_28858[13] = inst_28833);
return statearr_28858;
})();var statearr_28859_28882 = state_28840__$1;(statearr_28859_28882[2] = inst_28834);
(statearr_28859_28882[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28841 === 10))
{var inst_28824 = (state_28840[2]);var state_28840__$1 = state_28840;var statearr_28860_28883 = state_28840__$1;(statearr_28860_28883[2] = inst_28824);
(statearr_28860_28883[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28841 === 8))
{var inst_28804 = (state_28840[7]);var inst_28813 = (state_28840[11]);var tmp28857 = inst_28804;var inst_28804__$1 = tmp28857;var inst_28805 = inst_28813;var state_28840__$1 = (function (){var statearr_28861 = state_28840;(statearr_28861[7] = inst_28804__$1);
(statearr_28861[8] = inst_28805);
return statearr_28861;
})();var statearr_28862_28884 = state_28840__$1;(statearr_28862_28884[2] = null);
(statearr_28862_28884[1] = 2);
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
var state_machine__23717__auto____0 = (function (){var statearr_28866 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28866[0] = state_machine__23717__auto__);
(statearr_28866[1] = 1);
return statearr_28866;
});
var state_machine__23717__auto____1 = (function (state_28840){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_28840);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e28867){if((e28867 instanceof Object))
{var ex__23720__auto__ = e28867;var statearr_28868_28885 = state_28840;(statearr_28868_28885[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28867;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28886 = state_28840;
state_28840 = G__28886;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_28840){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_28840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_28869 = f__23781__auto__.call(null);(statearr_28869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___28870);
return statearr_28869;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___29029 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_28999){var state_val_29000 = (state_28999[1]);if((state_val_29000 === 7))
{var inst_28995 = (state_28999[2]);var state_28999__$1 = state_28999;var statearr_29001_29030 = state_28999__$1;(statearr_29001_29030[2] = inst_28995);
(statearr_29001_29030[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29000 === 1))
{var inst_28958 = [];var inst_28959 = inst_28958;var inst_28960 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_28999__$1 = (function (){var statearr_29002 = state_28999;(statearr_29002[7] = inst_28960);
(statearr_29002[8] = inst_28959);
return statearr_29002;
})();var statearr_29003_29031 = state_28999__$1;(statearr_29003_29031[2] = null);
(statearr_29003_29031[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29000 === 4))
{var inst_28963 = (state_28999[9]);var inst_28963__$1 = (state_28999[2]);var inst_28964 = (inst_28963__$1 == null);var inst_28965 = cljs.core.not.call(null,inst_28964);var state_28999__$1 = (function (){var statearr_29004 = state_28999;(statearr_29004[9] = inst_28963__$1);
return statearr_29004;
})();if(inst_28965)
{var statearr_29005_29032 = state_28999__$1;(statearr_29005_29032[1] = 5);
} else
{var statearr_29006_29033 = state_28999__$1;(statearr_29006_29033[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29000 === 15))
{var inst_28989 = (state_28999[2]);var state_28999__$1 = state_28999;var statearr_29007_29034 = state_28999__$1;(statearr_29007_29034[2] = inst_28989);
(statearr_29007_29034[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29000 === 13))
{var state_28999__$1 = state_28999;var statearr_29008_29035 = state_28999__$1;(statearr_29008_29035[2] = null);
(statearr_29008_29035[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29000 === 6))
{var inst_28959 = (state_28999[8]);var inst_28984 = inst_28959.length;var inst_28985 = (inst_28984 > 0);var state_28999__$1 = state_28999;if(cljs.core.truth_(inst_28985))
{var statearr_29009_29036 = state_28999__$1;(statearr_29009_29036[1] = 12);
} else
{var statearr_29010_29037 = state_28999__$1;(statearr_29010_29037[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29000 === 3))
{var inst_28997 = (state_28999[2]);var state_28999__$1 = state_28999;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28999__$1,inst_28997);
} else
{if((state_val_29000 === 12))
{var inst_28959 = (state_28999[8]);var inst_28987 = cljs.core.vec.call(null,inst_28959);var state_28999__$1 = state_28999;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28999__$1,15,out,inst_28987);
} else
{if((state_val_29000 === 2))
{var state_28999__$1 = state_28999;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28999__$1,4,ch);
} else
{if((state_val_29000 === 11))
{var inst_28963 = (state_28999[9]);var inst_28967 = (state_28999[10]);var inst_28977 = (state_28999[2]);var inst_28978 = [];var inst_28979 = inst_28978.push(inst_28963);var inst_28959 = inst_28978;var inst_28960 = inst_28967;var state_28999__$1 = (function (){var statearr_29011 = state_28999;(statearr_29011[11] = inst_28977);
(statearr_29011[7] = inst_28960);
(statearr_29011[8] = inst_28959);
(statearr_29011[12] = inst_28979);
return statearr_29011;
})();var statearr_29012_29038 = state_28999__$1;(statearr_29012_29038[2] = null);
(statearr_29012_29038[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29000 === 9))
{var inst_28959 = (state_28999[8]);var inst_28975 = cljs.core.vec.call(null,inst_28959);var state_28999__$1 = state_28999;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28999__$1,11,out,inst_28975);
} else
{if((state_val_29000 === 5))
{var inst_28963 = (state_28999[9]);var inst_28960 = (state_28999[7]);var inst_28967 = (state_28999[10]);var inst_28967__$1 = f.call(null,inst_28963);var inst_28968 = cljs.core._EQ_.call(null,inst_28967__$1,inst_28960);var inst_28969 = cljs.core.keyword_identical_QMARK_.call(null,inst_28960,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_28970 = (inst_28968) || (inst_28969);var state_28999__$1 = (function (){var statearr_29013 = state_28999;(statearr_29013[10] = inst_28967__$1);
return statearr_29013;
})();if(cljs.core.truth_(inst_28970))
{var statearr_29014_29039 = state_28999__$1;(statearr_29014_29039[1] = 8);
} else
{var statearr_29015_29040 = state_28999__$1;(statearr_29015_29040[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29000 === 14))
{var inst_28992 = (state_28999[2]);var inst_28993 = cljs.core.async.close_BANG_.call(null,out);var state_28999__$1 = (function (){var statearr_29017 = state_28999;(statearr_29017[13] = inst_28992);
return statearr_29017;
})();var statearr_29018_29041 = state_28999__$1;(statearr_29018_29041[2] = inst_28993);
(statearr_29018_29041[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29000 === 10))
{var inst_28982 = (state_28999[2]);var state_28999__$1 = state_28999;var statearr_29019_29042 = state_28999__$1;(statearr_29019_29042[2] = inst_28982);
(statearr_29019_29042[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_29000 === 8))
{var inst_28963 = (state_28999[9]);var inst_28967 = (state_28999[10]);var inst_28959 = (state_28999[8]);var inst_28972 = inst_28959.push(inst_28963);var tmp29016 = inst_28959;var inst_28959__$1 = tmp29016;var inst_28960 = inst_28967;var state_28999__$1 = (function (){var statearr_29020 = state_28999;(statearr_29020[7] = inst_28960);
(statearr_29020[8] = inst_28959__$1);
(statearr_29020[14] = inst_28972);
return statearr_29020;
})();var statearr_29021_29043 = state_28999__$1;(statearr_29021_29043[2] = null);
(statearr_29021_29043[1] = 2);
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
var state_machine__23717__auto____0 = (function (){var statearr_29025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29025[0] = state_machine__23717__auto__);
(statearr_29025[1] = 1);
return statearr_29025;
});
var state_machine__23717__auto____1 = (function (state_28999){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_28999);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e29026){if((e29026 instanceof Object))
{var ex__23720__auto__ = e29026;var statearr_29027_29044 = state_28999;(statearr_29027_29044[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28999);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e29026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__29045 = state_28999;
state_28999 = G__29045;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_28999){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_28999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_29028 = f__23781__auto__.call(null);(statearr_29028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___29029);
return statearr_29028;
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

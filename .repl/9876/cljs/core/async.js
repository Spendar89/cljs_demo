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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34207 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34207 = (function (f,fn_handler,meta34208){
this.f = f;
this.fn_handler = fn_handler;
this.meta34208 = meta34208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34207.cljs$lang$type = true;
cljs.core.async.t34207.cljs$lang$ctorStr = "cljs.core.async/t34207";
cljs.core.async.t34207.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34207");
});
cljs.core.async.t34207.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34209){var self__ = this;
var _34209__$1 = this;return self__.meta34208;
});
cljs.core.async.t34207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34209,meta34208__$1){var self__ = this;
var _34209__$1 = this;return (new cljs.core.async.t34207(self__.f,self__.fn_handler,meta34208__$1));
});
cljs.core.async.__GT_t34207 = (function __GT_t34207(f__$1,fn_handler__$1,meta34208){return (new cljs.core.async.t34207(f__$1,fn_handler__$1,meta34208));
});
}
return (new cljs.core.async.t34207(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34211 = buff;if(G__34211)
{var bit__15632__auto__ = null;if(cljs.core.truth_((function (){var or__14982__auto__ = bit__15632__auto__;if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return G__34211.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34211.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34211);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34211);
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
{var val_34212 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34212);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34212);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15830__auto___34213 = n;var x_34214 = 0;while(true){
if((x_34214 < n__15830__auto___34213))
{(a[x_34214] = 0);
{
var G__34215 = (x_34214 + 1);
x_34214 = G__34215;
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
var G__34216 = (i + 1);
i = G__34216;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34220 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34220 = (function (flag,alt_flag,meta34221){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34221 = meta34221;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34220.cljs$lang$type = true;
cljs.core.async.t34220.cljs$lang$ctorStr = "cljs.core.async/t34220";
cljs.core.async.t34220.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34220");
});
cljs.core.async.t34220.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34220.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34220.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34220.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34222){var self__ = this;
var _34222__$1 = this;return self__.meta34221;
});
cljs.core.async.t34220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34222,meta34221__$1){var self__ = this;
var _34222__$1 = this;return (new cljs.core.async.t34220(self__.flag,self__.alt_flag,meta34221__$1));
});
cljs.core.async.__GT_t34220 = (function __GT_t34220(flag__$1,alt_flag__$1,meta34221){return (new cljs.core.async.t34220(flag__$1,alt_flag__$1,meta34221));
});
}
return (new cljs.core.async.t34220(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34226 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34226 = (function (cb,flag,alt_handler,meta34227){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34227 = meta34227;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34226.cljs$lang$type = true;
cljs.core.async.t34226.cljs$lang$ctorStr = "cljs.core.async/t34226";
cljs.core.async.t34226.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34226");
});
cljs.core.async.t34226.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34226.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34226.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34228){var self__ = this;
var _34228__$1 = this;return self__.meta34227;
});
cljs.core.async.t34226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34228,meta34227__$1){var self__ = this;
var _34228__$1 = this;return (new cljs.core.async.t34226(self__.cb,self__.flag,self__.alt_handler,meta34227__$1));
});
cljs.core.async.__GT_t34226 = (function __GT_t34226(cb__$1,flag__$1,alt_handler__$1,meta34227){return (new cljs.core.async.t34226(cb__$1,flag__$1,alt_handler__$1,meta34227));
});
}
return (new cljs.core.async.t34226(cb,flag,alt_handler,null));
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
return (function (p1__34229_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34229_SHARP_,port], null));
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
var G__34230 = (i + 1);
i = G__34230;
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
var alts_BANG___delegate = function (ports,p__34231){var map__34233 = p__34231;var map__34233__$1 = ((cljs.core.seq_QMARK_.call(null,map__34233))?cljs.core.apply.call(null,cljs.core.hash_map,map__34233):map__34233);var opts = map__34233__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34231 = null;if (arguments.length > 1) {
  p__34231 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34231);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34234){
var ports = cljs.core.first(arglist__34234);
var p__34231 = cljs.core.rest(arglist__34234);
return alts_BANG___delegate(ports,p__34231);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34242 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34242 = (function (ch,f,map_LT_,meta34243){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34243 = meta34243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34242.cljs$lang$type = true;
cljs.core.async.t34242.cljs$lang$ctorStr = "cljs.core.async/t34242";
cljs.core.async.t34242.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34242");
});
cljs.core.async.t34242.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34242.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34245 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34245 = (function (fn1,_,meta34243,ch,f,map_LT_,meta34246){
this.fn1 = fn1;
this._ = _;
this.meta34243 = meta34243;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34246 = meta34246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34245.cljs$lang$type = true;
cljs.core.async.t34245.cljs$lang$ctorStr = "cljs.core.async/t34245";
cljs.core.async.t34245.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34245");
});
cljs.core.async.t34245.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34245.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34245.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34245.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34235_SHARP_){return f1.call(null,(((p1__34235_SHARP_ == null))?null:self__.f.call(null,p1__34235_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34245.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34247){var self__ = this;
var _34247__$1 = this;return self__.meta34246;
});
cljs.core.async.t34245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34247,meta34246__$1){var self__ = this;
var _34247__$1 = this;return (new cljs.core.async.t34245(self__.fn1,self__._,self__.meta34243,self__.ch,self__.f,self__.map_LT_,meta34246__$1));
});
cljs.core.async.__GT_t34245 = (function __GT_t34245(fn1__$1,___$2,meta34243__$1,ch__$2,f__$2,map_LT___$2,meta34246){return (new cljs.core.async.t34245(fn1__$1,___$2,meta34243__$1,ch__$2,f__$2,map_LT___$2,meta34246));
});
}
return (new cljs.core.async.t34245(fn1,___$1,self__.meta34243,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34242.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34244){var self__ = this;
var _34244__$1 = this;return self__.meta34243;
});
cljs.core.async.t34242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34244,meta34243__$1){var self__ = this;
var _34244__$1 = this;return (new cljs.core.async.t34242(self__.ch,self__.f,self__.map_LT_,meta34243__$1));
});
cljs.core.async.__GT_t34242 = (function __GT_t34242(ch__$1,f__$1,map_LT___$1,meta34243){return (new cljs.core.async.t34242(ch__$1,f__$1,map_LT___$1,meta34243));
});
}
return (new cljs.core.async.t34242(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34251 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34251 = (function (ch,f,map_GT_,meta34252){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34252 = meta34252;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34251.cljs$lang$type = true;
cljs.core.async.t34251.cljs$lang$ctorStr = "cljs.core.async/t34251";
cljs.core.async.t34251.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34251");
});
cljs.core.async.t34251.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34251.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34251.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34251.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34251.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34251.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34251.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34253){var self__ = this;
var _34253__$1 = this;return self__.meta34252;
});
cljs.core.async.t34251.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34253,meta34252__$1){var self__ = this;
var _34253__$1 = this;return (new cljs.core.async.t34251(self__.ch,self__.f,self__.map_GT_,meta34252__$1));
});
cljs.core.async.__GT_t34251 = (function __GT_t34251(ch__$1,f__$1,map_GT___$1,meta34252){return (new cljs.core.async.t34251(ch__$1,f__$1,map_GT___$1,meta34252));
});
}
return (new cljs.core.async.t34251(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34257 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34257 = (function (ch,p,filter_GT_,meta34258){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34258 = meta34258;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34257.cljs$lang$type = true;
cljs.core.async.t34257.cljs$lang$ctorStr = "cljs.core.async/t34257";
cljs.core.async.t34257.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34257");
});
cljs.core.async.t34257.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34257.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34257.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34257.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34257.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34257.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34257.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34259){var self__ = this;
var _34259__$1 = this;return self__.meta34258;
});
cljs.core.async.t34257.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34259,meta34258__$1){var self__ = this;
var _34259__$1 = this;return (new cljs.core.async.t34257(self__.ch,self__.p,self__.filter_GT_,meta34258__$1));
});
cljs.core.async.__GT_t34257 = (function __GT_t34257(ch__$1,p__$1,filter_GT___$1,meta34258){return (new cljs.core.async.t34257(ch__$1,p__$1,filter_GT___$1,meta34258));
});
}
return (new cljs.core.async.t34257(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___34342 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_34321){var state_val_34322 = (state_34321[1]);if((state_val_34322 === 7))
{var inst_34317 = (state_34321[2]);var state_34321__$1 = state_34321;var statearr_34323_34343 = state_34321__$1;(statearr_34323_34343[2] = inst_34317);
(statearr_34323_34343[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34322 === 1))
{var state_34321__$1 = state_34321;var statearr_34324_34344 = state_34321__$1;(statearr_34324_34344[2] = null);
(statearr_34324_34344[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34322 === 4))
{var inst_34303 = (state_34321[7]);var inst_34303__$1 = (state_34321[2]);var inst_34304 = (inst_34303__$1 == null);var state_34321__$1 = (function (){var statearr_34325 = state_34321;(statearr_34325[7] = inst_34303__$1);
return statearr_34325;
})();if(cljs.core.truth_(inst_34304))
{var statearr_34326_34345 = state_34321__$1;(statearr_34326_34345[1] = 5);
} else
{var statearr_34327_34346 = state_34321__$1;(statearr_34327_34346[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34322 === 6))
{var inst_34303 = (state_34321[7]);var inst_34308 = p.call(null,inst_34303);var state_34321__$1 = state_34321;if(cljs.core.truth_(inst_34308))
{var statearr_34328_34347 = state_34321__$1;(statearr_34328_34347[1] = 8);
} else
{var statearr_34329_34348 = state_34321__$1;(statearr_34329_34348[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34322 === 3))
{var inst_34319 = (state_34321[2]);var state_34321__$1 = state_34321;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34321__$1,inst_34319);
} else
{if((state_val_34322 === 2))
{var state_34321__$1 = state_34321;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34321__$1,4,ch);
} else
{if((state_val_34322 === 11))
{var inst_34311 = (state_34321[2]);var state_34321__$1 = state_34321;var statearr_34330_34349 = state_34321__$1;(statearr_34330_34349[2] = inst_34311);
(statearr_34330_34349[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34322 === 9))
{var state_34321__$1 = state_34321;var statearr_34331_34350 = state_34321__$1;(statearr_34331_34350[2] = null);
(statearr_34331_34350[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34322 === 5))
{var inst_34306 = cljs.core.async.close_BANG_.call(null,out);var state_34321__$1 = state_34321;var statearr_34332_34351 = state_34321__$1;(statearr_34332_34351[2] = inst_34306);
(statearr_34332_34351[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34322 === 10))
{var inst_34314 = (state_34321[2]);var state_34321__$1 = (function (){var statearr_34333 = state_34321;(statearr_34333[8] = inst_34314);
return statearr_34333;
})();var statearr_34334_34352 = state_34321__$1;(statearr_34334_34352[2] = null);
(statearr_34334_34352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34322 === 8))
{var inst_34303 = (state_34321[7]);var state_34321__$1 = state_34321;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34321__$1,11,out,inst_34303);
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
var state_machine__22127__auto____0 = (function (){var statearr_34338 = [null,null,null,null,null,null,null,null,null];(statearr_34338[0] = state_machine__22127__auto__);
(statearr_34338[1] = 1);
return statearr_34338;
});
var state_machine__22127__auto____1 = (function (state_34321){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_34321);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e34339){if((e34339 instanceof Object))
{var ex__22130__auto__ = e34339;var statearr_34340_34353 = state_34321;(statearr_34340_34353[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34321);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34354 = state_34321;
state_34321 = G__34354;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_34321){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_34321);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_34341 = f__22202__auto__.call(null);(statearr_34341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___34342);
return statearr_34341;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_34506){var state_val_34507 = (state_34506[1]);if((state_val_34507 === 7))
{var inst_34502 = (state_34506[2]);var state_34506__$1 = state_34506;var statearr_34508_34545 = state_34506__$1;(statearr_34508_34545[2] = inst_34502);
(statearr_34508_34545[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 20))
{var inst_34477 = (state_34506[7]);var inst_34488 = (state_34506[2]);var inst_34489 = cljs.core.next.call(null,inst_34477);var inst_34463 = inst_34489;var inst_34464 = null;var inst_34465 = 0;var inst_34466 = 0;var state_34506__$1 = (function (){var statearr_34509 = state_34506;(statearr_34509[8] = inst_34464);
(statearr_34509[9] = inst_34466);
(statearr_34509[10] = inst_34463);
(statearr_34509[11] = inst_34488);
(statearr_34509[12] = inst_34465);
return statearr_34509;
})();var statearr_34510_34546 = state_34506__$1;(statearr_34510_34546[2] = null);
(statearr_34510_34546[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 1))
{var state_34506__$1 = state_34506;var statearr_34511_34547 = state_34506__$1;(statearr_34511_34547[2] = null);
(statearr_34511_34547[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 4))
{var inst_34452 = (state_34506[13]);var inst_34452__$1 = (state_34506[2]);var inst_34453 = (inst_34452__$1 == null);var state_34506__$1 = (function (){var statearr_34515 = state_34506;(statearr_34515[13] = inst_34452__$1);
return statearr_34515;
})();if(cljs.core.truth_(inst_34453))
{var statearr_34516_34548 = state_34506__$1;(statearr_34516_34548[1] = 5);
} else
{var statearr_34517_34549 = state_34506__$1;(statearr_34517_34549[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 15))
{var state_34506__$1 = state_34506;var statearr_34518_34550 = state_34506__$1;(statearr_34518_34550[2] = null);
(statearr_34518_34550[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 13))
{var inst_34464 = (state_34506[8]);var inst_34466 = (state_34506[9]);var inst_34463 = (state_34506[10]);var inst_34465 = (state_34506[12]);var inst_34473 = (state_34506[2]);var inst_34474 = (inst_34466 + 1);var tmp34512 = inst_34464;var tmp34513 = inst_34463;var tmp34514 = inst_34465;var inst_34463__$1 = tmp34513;var inst_34464__$1 = tmp34512;var inst_34465__$1 = tmp34514;var inst_34466__$1 = inst_34474;var state_34506__$1 = (function (){var statearr_34519 = state_34506;(statearr_34519[8] = inst_34464__$1);
(statearr_34519[9] = inst_34466__$1);
(statearr_34519[10] = inst_34463__$1);
(statearr_34519[14] = inst_34473);
(statearr_34519[12] = inst_34465__$1);
return statearr_34519;
})();var statearr_34520_34551 = state_34506__$1;(statearr_34520_34551[2] = null);
(statearr_34520_34551[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 6))
{var inst_34452 = (state_34506[13]);var inst_34457 = f.call(null,inst_34452);var inst_34462 = cljs.core.seq.call(null,inst_34457);var inst_34463 = inst_34462;var inst_34464 = null;var inst_34465 = 0;var inst_34466 = 0;var state_34506__$1 = (function (){var statearr_34521 = state_34506;(statearr_34521[8] = inst_34464);
(statearr_34521[9] = inst_34466);
(statearr_34521[10] = inst_34463);
(statearr_34521[12] = inst_34465);
return statearr_34521;
})();var statearr_34522_34552 = state_34506__$1;(statearr_34522_34552[2] = null);
(statearr_34522_34552[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 17))
{var inst_34477 = (state_34506[7]);var inst_34481 = cljs.core.chunk_first.call(null,inst_34477);var inst_34482 = cljs.core.chunk_rest.call(null,inst_34477);var inst_34483 = cljs.core.count.call(null,inst_34481);var inst_34463 = inst_34482;var inst_34464 = inst_34481;var inst_34465 = inst_34483;var inst_34466 = 0;var state_34506__$1 = (function (){var statearr_34523 = state_34506;(statearr_34523[8] = inst_34464);
(statearr_34523[9] = inst_34466);
(statearr_34523[10] = inst_34463);
(statearr_34523[12] = inst_34465);
return statearr_34523;
})();var statearr_34524_34553 = state_34506__$1;(statearr_34524_34553[2] = null);
(statearr_34524_34553[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 3))
{var inst_34504 = (state_34506[2]);var state_34506__$1 = state_34506;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34506__$1,inst_34504);
} else
{if((state_val_34507 === 12))
{var inst_34497 = (state_34506[2]);var state_34506__$1 = state_34506;var statearr_34525_34554 = state_34506__$1;(statearr_34525_34554[2] = inst_34497);
(statearr_34525_34554[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 2))
{var state_34506__$1 = state_34506;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34506__$1,4,in$);
} else
{if((state_val_34507 === 19))
{var inst_34492 = (state_34506[2]);var state_34506__$1 = state_34506;var statearr_34526_34555 = state_34506__$1;(statearr_34526_34555[2] = inst_34492);
(statearr_34526_34555[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 11))
{var inst_34463 = (state_34506[10]);var inst_34477 = (state_34506[7]);var inst_34477__$1 = cljs.core.seq.call(null,inst_34463);var state_34506__$1 = (function (){var statearr_34527 = state_34506;(statearr_34527[7] = inst_34477__$1);
return statearr_34527;
})();if(inst_34477__$1)
{var statearr_34528_34556 = state_34506__$1;(statearr_34528_34556[1] = 14);
} else
{var statearr_34529_34557 = state_34506__$1;(statearr_34529_34557[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 9))
{var inst_34499 = (state_34506[2]);var state_34506__$1 = (function (){var statearr_34530 = state_34506;(statearr_34530[15] = inst_34499);
return statearr_34530;
})();var statearr_34531_34558 = state_34506__$1;(statearr_34531_34558[2] = null);
(statearr_34531_34558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 5))
{var inst_34455 = cljs.core.async.close_BANG_.call(null,out);var state_34506__$1 = state_34506;var statearr_34532_34559 = state_34506__$1;(statearr_34532_34559[2] = inst_34455);
(statearr_34532_34559[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 14))
{var inst_34477 = (state_34506[7]);var inst_34479 = cljs.core.chunked_seq_QMARK_.call(null,inst_34477);var state_34506__$1 = state_34506;if(inst_34479)
{var statearr_34533_34560 = state_34506__$1;(statearr_34533_34560[1] = 17);
} else
{var statearr_34534_34561 = state_34506__$1;(statearr_34534_34561[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 16))
{var inst_34495 = (state_34506[2]);var state_34506__$1 = state_34506;var statearr_34535_34562 = state_34506__$1;(statearr_34535_34562[2] = inst_34495);
(statearr_34535_34562[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34507 === 10))
{var inst_34464 = (state_34506[8]);var inst_34466 = (state_34506[9]);var inst_34471 = cljs.core._nth.call(null,inst_34464,inst_34466);var state_34506__$1 = state_34506;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34506__$1,13,out,inst_34471);
} else
{if((state_val_34507 === 18))
{var inst_34477 = (state_34506[7]);var inst_34486 = cljs.core.first.call(null,inst_34477);var state_34506__$1 = state_34506;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34506__$1,20,out,inst_34486);
} else
{if((state_val_34507 === 8))
{var inst_34466 = (state_34506[9]);var inst_34465 = (state_34506[12]);var inst_34468 = (inst_34466 < inst_34465);var inst_34469 = inst_34468;var state_34506__$1 = state_34506;if(cljs.core.truth_(inst_34469))
{var statearr_34536_34563 = state_34506__$1;(statearr_34536_34563[1] = 10);
} else
{var statearr_34537_34564 = state_34506__$1;(statearr_34537_34564[1] = 11);
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
var state_machine__22127__auto____0 = (function (){var statearr_34541 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34541[0] = state_machine__22127__auto__);
(statearr_34541[1] = 1);
return statearr_34541;
});
var state_machine__22127__auto____1 = (function (state_34506){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_34506);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e34542){if((e34542 instanceof Object))
{var ex__22130__auto__ = e34542;var statearr_34543_34565 = state_34506;(statearr_34543_34565[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34506);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34542;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34566 = state_34506;
state_34506 = G__34566;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_34506){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_34506);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_34544 = f__22202__auto__.call(null);(statearr_34544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_34544;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22201__auto___34647 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_34626){var state_val_34627 = (state_34626[1]);if((state_val_34627 === 7))
{var inst_34622 = (state_34626[2]);var state_34626__$1 = state_34626;var statearr_34628_34648 = state_34626__$1;(statearr_34628_34648[2] = inst_34622);
(statearr_34628_34648[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34627 === 1))
{var state_34626__$1 = state_34626;var statearr_34629_34649 = state_34626__$1;(statearr_34629_34649[2] = null);
(statearr_34629_34649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34627 === 4))
{var inst_34609 = (state_34626[7]);var inst_34609__$1 = (state_34626[2]);var inst_34610 = (inst_34609__$1 == null);var state_34626__$1 = (function (){var statearr_34630 = state_34626;(statearr_34630[7] = inst_34609__$1);
return statearr_34630;
})();if(cljs.core.truth_(inst_34610))
{var statearr_34631_34650 = state_34626__$1;(statearr_34631_34650[1] = 5);
} else
{var statearr_34632_34651 = state_34626__$1;(statearr_34632_34651[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34627 === 6))
{var inst_34609 = (state_34626[7]);var state_34626__$1 = state_34626;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34626__$1,11,to,inst_34609);
} else
{if((state_val_34627 === 3))
{var inst_34624 = (state_34626[2]);var state_34626__$1 = state_34626;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34626__$1,inst_34624);
} else
{if((state_val_34627 === 2))
{var state_34626__$1 = state_34626;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34626__$1,4,from);
} else
{if((state_val_34627 === 11))
{var inst_34619 = (state_34626[2]);var state_34626__$1 = (function (){var statearr_34633 = state_34626;(statearr_34633[8] = inst_34619);
return statearr_34633;
})();var statearr_34634_34652 = state_34626__$1;(statearr_34634_34652[2] = null);
(statearr_34634_34652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34627 === 9))
{var state_34626__$1 = state_34626;var statearr_34635_34653 = state_34626__$1;(statearr_34635_34653[2] = null);
(statearr_34635_34653[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34627 === 5))
{var state_34626__$1 = state_34626;if(cljs.core.truth_(close_QMARK_))
{var statearr_34636_34654 = state_34626__$1;(statearr_34636_34654[1] = 8);
} else
{var statearr_34637_34655 = state_34626__$1;(statearr_34637_34655[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34627 === 10))
{var inst_34616 = (state_34626[2]);var state_34626__$1 = state_34626;var statearr_34638_34656 = state_34626__$1;(statearr_34638_34656[2] = inst_34616);
(statearr_34638_34656[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34627 === 8))
{var inst_34613 = cljs.core.async.close_BANG_.call(null,to);var state_34626__$1 = state_34626;var statearr_34639_34657 = state_34626__$1;(statearr_34639_34657[2] = inst_34613);
(statearr_34639_34657[1] = 10);
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
var state_machine__22127__auto____0 = (function (){var statearr_34643 = [null,null,null,null,null,null,null,null,null];(statearr_34643[0] = state_machine__22127__auto__);
(statearr_34643[1] = 1);
return statearr_34643;
});
var state_machine__22127__auto____1 = (function (state_34626){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_34626);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e34644){if((e34644 instanceof Object))
{var ex__22130__auto__ = e34644;var statearr_34645_34658 = state_34626;(statearr_34645_34658[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34626);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34644;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34659 = state_34626;
state_34626 = G__34659;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_34626){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_34626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_34646 = f__22202__auto__.call(null);(statearr_34646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___34647);
return statearr_34646;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22201__auto___34746 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_34724){var state_val_34725 = (state_34724[1]);if((state_val_34725 === 7))
{var inst_34720 = (state_34724[2]);var state_34724__$1 = state_34724;var statearr_34726_34747 = state_34724__$1;(statearr_34726_34747[2] = inst_34720);
(statearr_34726_34747[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34725 === 1))
{var state_34724__$1 = state_34724;var statearr_34727_34748 = state_34724__$1;(statearr_34727_34748[2] = null);
(statearr_34727_34748[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34725 === 4))
{var inst_34705 = (state_34724[7]);var inst_34705__$1 = (state_34724[2]);var inst_34706 = (inst_34705__$1 == null);var state_34724__$1 = (function (){var statearr_34728 = state_34724;(statearr_34728[7] = inst_34705__$1);
return statearr_34728;
})();if(cljs.core.truth_(inst_34706))
{var statearr_34729_34749 = state_34724__$1;(statearr_34729_34749[1] = 5);
} else
{var statearr_34730_34750 = state_34724__$1;(statearr_34730_34750[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34725 === 6))
{var inst_34705 = (state_34724[7]);var inst_34711 = p.call(null,inst_34705);var state_34724__$1 = state_34724;if(cljs.core.truth_(inst_34711))
{var statearr_34731_34751 = state_34724__$1;(statearr_34731_34751[1] = 9);
} else
{var statearr_34732_34752 = state_34724__$1;(statearr_34732_34752[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34725 === 3))
{var inst_34722 = (state_34724[2]);var state_34724__$1 = state_34724;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34724__$1,inst_34722);
} else
{if((state_val_34725 === 2))
{var state_34724__$1 = state_34724;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34724__$1,4,ch);
} else
{if((state_val_34725 === 11))
{var inst_34705 = (state_34724[7]);var inst_34715 = (state_34724[2]);var state_34724__$1 = state_34724;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34724__$1,8,inst_34715,inst_34705);
} else
{if((state_val_34725 === 9))
{var state_34724__$1 = state_34724;var statearr_34733_34753 = state_34724__$1;(statearr_34733_34753[2] = tc);
(statearr_34733_34753[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34725 === 5))
{var inst_34708 = cljs.core.async.close_BANG_.call(null,tc);var inst_34709 = cljs.core.async.close_BANG_.call(null,fc);var state_34724__$1 = (function (){var statearr_34734 = state_34724;(statearr_34734[8] = inst_34708);
return statearr_34734;
})();var statearr_34735_34754 = state_34724__$1;(statearr_34735_34754[2] = inst_34709);
(statearr_34735_34754[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34725 === 10))
{var state_34724__$1 = state_34724;var statearr_34736_34755 = state_34724__$1;(statearr_34736_34755[2] = fc);
(statearr_34736_34755[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34725 === 8))
{var inst_34717 = (state_34724[2]);var state_34724__$1 = (function (){var statearr_34737 = state_34724;(statearr_34737[9] = inst_34717);
return statearr_34737;
})();var statearr_34738_34756 = state_34724__$1;(statearr_34738_34756[2] = null);
(statearr_34738_34756[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_34742 = [null,null,null,null,null,null,null,null,null,null];(statearr_34742[0] = state_machine__22127__auto__);
(statearr_34742[1] = 1);
return statearr_34742;
});
var state_machine__22127__auto____1 = (function (state_34724){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_34724);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e34743){if((e34743 instanceof Object))
{var ex__22130__auto__ = e34743;var statearr_34744_34757 = state_34724;(statearr_34744_34757[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34724);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34743;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34758 = state_34724;
state_34724 = G__34758;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_34724){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_34724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_34745 = f__22202__auto__.call(null);(statearr_34745[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___34746);
return statearr_34745;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_34805){var state_val_34806 = (state_34805[1]);if((state_val_34806 === 7))
{var inst_34801 = (state_34805[2]);var state_34805__$1 = state_34805;var statearr_34807_34823 = state_34805__$1;(statearr_34807_34823[2] = inst_34801);
(statearr_34807_34823[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34806 === 6))
{var inst_34791 = (state_34805[7]);var inst_34794 = (state_34805[8]);var inst_34798 = f.call(null,inst_34791,inst_34794);var inst_34791__$1 = inst_34798;var state_34805__$1 = (function (){var statearr_34808 = state_34805;(statearr_34808[7] = inst_34791__$1);
return statearr_34808;
})();var statearr_34809_34824 = state_34805__$1;(statearr_34809_34824[2] = null);
(statearr_34809_34824[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34806 === 5))
{var inst_34791 = (state_34805[7]);var state_34805__$1 = state_34805;var statearr_34810_34825 = state_34805__$1;(statearr_34810_34825[2] = inst_34791);
(statearr_34810_34825[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34806 === 4))
{var inst_34794 = (state_34805[8]);var inst_34794__$1 = (state_34805[2]);var inst_34795 = (inst_34794__$1 == null);var state_34805__$1 = (function (){var statearr_34811 = state_34805;(statearr_34811[8] = inst_34794__$1);
return statearr_34811;
})();if(cljs.core.truth_(inst_34795))
{var statearr_34812_34826 = state_34805__$1;(statearr_34812_34826[1] = 5);
} else
{var statearr_34813_34827 = state_34805__$1;(statearr_34813_34827[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34806 === 3))
{var inst_34803 = (state_34805[2]);var state_34805__$1 = state_34805;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34805__$1,inst_34803);
} else
{if((state_val_34806 === 2))
{var state_34805__$1 = state_34805;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34805__$1,4,ch);
} else
{if((state_val_34806 === 1))
{var inst_34791 = init;var state_34805__$1 = (function (){var statearr_34814 = state_34805;(statearr_34814[7] = inst_34791);
return statearr_34814;
})();var statearr_34815_34828 = state_34805__$1;(statearr_34815_34828[2] = null);
(statearr_34815_34828[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_34819 = [null,null,null,null,null,null,null,null,null];(statearr_34819[0] = state_machine__22127__auto__);
(statearr_34819[1] = 1);
return statearr_34819;
});
var state_machine__22127__auto____1 = (function (state_34805){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_34805);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e34820){if((e34820 instanceof Object))
{var ex__22130__auto__ = e34820;var statearr_34821_34829 = state_34805;(statearr_34821_34829[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34805);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34820;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34830 = state_34805;
state_34805 = G__34830;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_34805){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_34805);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_34822 = f__22202__auto__.call(null);(statearr_34822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_34822;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_34892){var state_val_34893 = (state_34892[1]);if((state_val_34893 === 7))
{var inst_34873 = (state_34892[7]);var inst_34878 = (state_34892[2]);var inst_34879 = cljs.core.next.call(null,inst_34873);var inst_34873__$1 = inst_34879;var state_34892__$1 = (function (){var statearr_34894 = state_34892;(statearr_34894[7] = inst_34873__$1);
(statearr_34894[8] = inst_34878);
return statearr_34894;
})();var statearr_34895_34913 = state_34892__$1;(statearr_34895_34913[2] = null);
(statearr_34895_34913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34893 === 1))
{var inst_34872 = cljs.core.seq.call(null,coll);var inst_34873 = inst_34872;var state_34892__$1 = (function (){var statearr_34896 = state_34892;(statearr_34896[7] = inst_34873);
return statearr_34896;
})();var statearr_34897_34914 = state_34892__$1;(statearr_34897_34914[2] = null);
(statearr_34897_34914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34893 === 4))
{var inst_34873 = (state_34892[7]);var inst_34876 = cljs.core.first.call(null,inst_34873);var state_34892__$1 = state_34892;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34892__$1,7,ch,inst_34876);
} else
{if((state_val_34893 === 6))
{var inst_34888 = (state_34892[2]);var state_34892__$1 = state_34892;var statearr_34898_34915 = state_34892__$1;(statearr_34898_34915[2] = inst_34888);
(statearr_34898_34915[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34893 === 3))
{var inst_34890 = (state_34892[2]);var state_34892__$1 = state_34892;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34892__$1,inst_34890);
} else
{if((state_val_34893 === 2))
{var inst_34873 = (state_34892[7]);var state_34892__$1 = state_34892;if(cljs.core.truth_(inst_34873))
{var statearr_34899_34916 = state_34892__$1;(statearr_34899_34916[1] = 4);
} else
{var statearr_34900_34917 = state_34892__$1;(statearr_34900_34917[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34893 === 9))
{var state_34892__$1 = state_34892;var statearr_34901_34918 = state_34892__$1;(statearr_34901_34918[2] = null);
(statearr_34901_34918[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34893 === 5))
{var state_34892__$1 = state_34892;if(cljs.core.truth_(close_QMARK_))
{var statearr_34902_34919 = state_34892__$1;(statearr_34902_34919[1] = 8);
} else
{var statearr_34903_34920 = state_34892__$1;(statearr_34903_34920[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34893 === 10))
{var inst_34886 = (state_34892[2]);var state_34892__$1 = state_34892;var statearr_34904_34921 = state_34892__$1;(statearr_34904_34921[2] = inst_34886);
(statearr_34904_34921[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34893 === 8))
{var inst_34883 = cljs.core.async.close_BANG_.call(null,ch);var state_34892__$1 = state_34892;var statearr_34905_34922 = state_34892__$1;(statearr_34905_34922[2] = inst_34883);
(statearr_34905_34922[1] = 10);
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
var state_machine__22127__auto____0 = (function (){var statearr_34909 = [null,null,null,null,null,null,null,null,null];(statearr_34909[0] = state_machine__22127__auto__);
(statearr_34909[1] = 1);
return statearr_34909;
});
var state_machine__22127__auto____1 = (function (state_34892){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_34892);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e34910){if((e34910 instanceof Object))
{var ex__22130__auto__ = e34910;var statearr_34911_34923 = state_34892;(statearr_34911_34923[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34892);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34924 = state_34892;
state_34892 = G__34924;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_34892){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_34892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_34912 = f__22202__auto__.call(null);(statearr_34912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_34912;
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
cljs.core.async.Mux = (function (){var obj34926 = {};return obj34926;
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
cljs.core.async.Mult = (function (){var obj34928 = {};return obj34928;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35152 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35152 = (function (cs,ch,mult,meta35153){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35153 = meta35153;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35152.cljs$lang$type = true;
cljs.core.async.t35152.cljs$lang$ctorStr = "cljs.core.async/t35152";
cljs.core.async.t35152.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t35152");
});})(cs))
;
cljs.core.async.t35152.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35152.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35152.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35152.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35152.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35152.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35152.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35154){var self__ = this;
var _35154__$1 = this;return self__.meta35153;
});})(cs))
;
cljs.core.async.t35152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35154,meta35153__$1){var self__ = this;
var _35154__$1 = this;return (new cljs.core.async.t35152(self__.cs,self__.ch,self__.mult,meta35153__$1));
});})(cs))
;
cljs.core.async.__GT_t35152 = ((function (cs){
return (function __GT_t35152(cs__$1,ch__$1,mult__$1,meta35153){return (new cljs.core.async.t35152(cs__$1,ch__$1,mult__$1,meta35153));
});})(cs))
;
}
return (new cljs.core.async.t35152(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22201__auto___35375 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_35289){var state_val_35290 = (state_35289[1]);if((state_val_35290 === 7))
{var inst_35285 = (state_35289[2]);var state_35289__$1 = state_35289;var statearr_35291_35376 = state_35289__$1;(statearr_35291_35376[2] = inst_35285);
(statearr_35291_35376[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 20))
{var inst_35186 = (state_35289[7]);var inst_35196 = cljs.core.first.call(null,inst_35186);var inst_35197 = cljs.core.nth.call(null,inst_35196,0,null);var inst_35198 = cljs.core.nth.call(null,inst_35196,1,null);var state_35289__$1 = (function (){var statearr_35292 = state_35289;(statearr_35292[8] = inst_35197);
return statearr_35292;
})();if(cljs.core.truth_(inst_35198))
{var statearr_35293_35377 = state_35289__$1;(statearr_35293_35377[1] = 22);
} else
{var statearr_35294_35378 = state_35289__$1;(statearr_35294_35378[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 27))
{var inst_35226 = (state_35289[9]);var inst_35228 = (state_35289[10]);var inst_35233 = cljs.core._nth.call(null,inst_35226,inst_35228);var state_35289__$1 = (function (){var statearr_35295 = state_35289;(statearr_35295[11] = inst_35233);
return statearr_35295;
})();var statearr_35296_35379 = state_35289__$1;(statearr_35296_35379[2] = null);
(statearr_35296_35379[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 1))
{var state_35289__$1 = state_35289;var statearr_35297_35380 = state_35289__$1;(statearr_35297_35380[2] = null);
(statearr_35297_35380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 24))
{var inst_35186 = (state_35289[7]);var inst_35203 = (state_35289[2]);var inst_35204 = cljs.core.next.call(null,inst_35186);var inst_35166 = inst_35204;var inst_35167 = null;var inst_35168 = 0;var inst_35169 = 0;var state_35289__$1 = (function (){var statearr_35298 = state_35289;(statearr_35298[12] = inst_35167);
(statearr_35298[13] = inst_35168);
(statearr_35298[14] = inst_35166);
(statearr_35298[15] = inst_35203);
(statearr_35298[16] = inst_35169);
return statearr_35298;
})();var statearr_35299_35381 = state_35289__$1;(statearr_35299_35381[2] = null);
(statearr_35299_35381[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 39))
{var inst_35246 = (state_35289[17]);var inst_35264 = (state_35289[2]);var inst_35265 = cljs.core.next.call(null,inst_35246);var inst_35225 = inst_35265;var inst_35226 = null;var inst_35227 = 0;var inst_35228 = 0;var state_35289__$1 = (function (){var statearr_35303 = state_35289;(statearr_35303[18] = inst_35227);
(statearr_35303[19] = inst_35264);
(statearr_35303[20] = inst_35225);
(statearr_35303[9] = inst_35226);
(statearr_35303[10] = inst_35228);
return statearr_35303;
})();var statearr_35304_35382 = state_35289__$1;(statearr_35304_35382[2] = null);
(statearr_35304_35382[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 4))
{var inst_35157 = (state_35289[21]);var inst_35157__$1 = (state_35289[2]);var inst_35158 = (inst_35157__$1 == null);var state_35289__$1 = (function (){var statearr_35305 = state_35289;(statearr_35305[21] = inst_35157__$1);
return statearr_35305;
})();if(cljs.core.truth_(inst_35158))
{var statearr_35306_35383 = state_35289__$1;(statearr_35306_35383[1] = 5);
} else
{var statearr_35307_35384 = state_35289__$1;(statearr_35307_35384[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 15))
{var inst_35167 = (state_35289[12]);var inst_35168 = (state_35289[13]);var inst_35166 = (state_35289[14]);var inst_35169 = (state_35289[16]);var inst_35182 = (state_35289[2]);var inst_35183 = (inst_35169 + 1);var tmp35300 = inst_35167;var tmp35301 = inst_35168;var tmp35302 = inst_35166;var inst_35166__$1 = tmp35302;var inst_35167__$1 = tmp35300;var inst_35168__$1 = tmp35301;var inst_35169__$1 = inst_35183;var state_35289__$1 = (function (){var statearr_35308 = state_35289;(statearr_35308[12] = inst_35167__$1);
(statearr_35308[13] = inst_35168__$1);
(statearr_35308[14] = inst_35166__$1);
(statearr_35308[22] = inst_35182);
(statearr_35308[16] = inst_35169__$1);
return statearr_35308;
})();var statearr_35309_35385 = state_35289__$1;(statearr_35309_35385[2] = null);
(statearr_35309_35385[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 21))
{var inst_35207 = (state_35289[2]);var state_35289__$1 = state_35289;var statearr_35310_35386 = state_35289__$1;(statearr_35310_35386[2] = inst_35207);
(statearr_35310_35386[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 31))
{var inst_35233 = (state_35289[11]);var inst_35234 = (state_35289[2]);var inst_35235 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35236 = cljs.core.async.untap_STAR_.call(null,m,inst_35233);var state_35289__$1 = (function (){var statearr_35311 = state_35289;(statearr_35311[23] = inst_35235);
(statearr_35311[24] = inst_35234);
return statearr_35311;
})();var statearr_35312_35387 = state_35289__$1;(statearr_35312_35387[2] = inst_35236);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35289__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 32))
{var inst_35157 = (state_35289[21]);var inst_35233 = (state_35289[11]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35289,31,Object,null,30);var inst_35240 = cljs.core.async.put_BANG_.call(null,inst_35233,inst_35157,done);var state_35289__$1 = state_35289;var statearr_35313_35388 = state_35289__$1;(statearr_35313_35388[2] = inst_35240);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35289__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 40))
{var inst_35255 = (state_35289[25]);var inst_35256 = (state_35289[2]);var inst_35257 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35258 = cljs.core.async.untap_STAR_.call(null,m,inst_35255);var state_35289__$1 = (function (){var statearr_35314 = state_35289;(statearr_35314[26] = inst_35257);
(statearr_35314[27] = inst_35256);
return statearr_35314;
})();var statearr_35315_35389 = state_35289__$1;(statearr_35315_35389[2] = inst_35258);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35289__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 33))
{var inst_35246 = (state_35289[17]);var inst_35248 = cljs.core.chunked_seq_QMARK_.call(null,inst_35246);var state_35289__$1 = state_35289;if(inst_35248)
{var statearr_35316_35390 = state_35289__$1;(statearr_35316_35390[1] = 36);
} else
{var statearr_35317_35391 = state_35289__$1;(statearr_35317_35391[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 13))
{var inst_35176 = (state_35289[28]);var inst_35179 = cljs.core.async.close_BANG_.call(null,inst_35176);var state_35289__$1 = state_35289;var statearr_35318_35392 = state_35289__$1;(statearr_35318_35392[2] = inst_35179);
(statearr_35318_35392[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 22))
{var inst_35197 = (state_35289[8]);var inst_35200 = cljs.core.async.close_BANG_.call(null,inst_35197);var state_35289__$1 = state_35289;var statearr_35319_35393 = state_35289__$1;(statearr_35319_35393[2] = inst_35200);
(statearr_35319_35393[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 36))
{var inst_35246 = (state_35289[17]);var inst_35250 = cljs.core.chunk_first.call(null,inst_35246);var inst_35251 = cljs.core.chunk_rest.call(null,inst_35246);var inst_35252 = cljs.core.count.call(null,inst_35250);var inst_35225 = inst_35251;var inst_35226 = inst_35250;var inst_35227 = inst_35252;var inst_35228 = 0;var state_35289__$1 = (function (){var statearr_35320 = state_35289;(statearr_35320[18] = inst_35227);
(statearr_35320[20] = inst_35225);
(statearr_35320[9] = inst_35226);
(statearr_35320[10] = inst_35228);
return statearr_35320;
})();var statearr_35321_35394 = state_35289__$1;(statearr_35321_35394[2] = null);
(statearr_35321_35394[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 41))
{var inst_35255 = (state_35289[25]);var inst_35157 = (state_35289[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35289,40,Object,null,39);var inst_35262 = cljs.core.async.put_BANG_.call(null,inst_35255,inst_35157,done);var state_35289__$1 = state_35289;var statearr_35322_35395 = state_35289__$1;(statearr_35322_35395[2] = inst_35262);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35289__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 43))
{var state_35289__$1 = state_35289;var statearr_35323_35396 = state_35289__$1;(statearr_35323_35396[2] = null);
(statearr_35323_35396[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 29))
{var inst_35273 = (state_35289[2]);var state_35289__$1 = state_35289;var statearr_35324_35397 = state_35289__$1;(statearr_35324_35397[2] = inst_35273);
(statearr_35324_35397[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 44))
{var inst_35282 = (state_35289[2]);var state_35289__$1 = (function (){var statearr_35325 = state_35289;(statearr_35325[29] = inst_35282);
return statearr_35325;
})();var statearr_35326_35398 = state_35289__$1;(statearr_35326_35398[2] = null);
(statearr_35326_35398[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 6))
{var inst_35217 = (state_35289[30]);var inst_35216 = cljs.core.deref.call(null,cs);var inst_35217__$1 = cljs.core.keys.call(null,inst_35216);var inst_35218 = cljs.core.count.call(null,inst_35217__$1);var inst_35219 = cljs.core.reset_BANG_.call(null,dctr,inst_35218);var inst_35224 = cljs.core.seq.call(null,inst_35217__$1);var inst_35225 = inst_35224;var inst_35226 = null;var inst_35227 = 0;var inst_35228 = 0;var state_35289__$1 = (function (){var statearr_35327 = state_35289;(statearr_35327[18] = inst_35227);
(statearr_35327[30] = inst_35217__$1);
(statearr_35327[31] = inst_35219);
(statearr_35327[20] = inst_35225);
(statearr_35327[9] = inst_35226);
(statearr_35327[10] = inst_35228);
return statearr_35327;
})();var statearr_35328_35399 = state_35289__$1;(statearr_35328_35399[2] = null);
(statearr_35328_35399[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 28))
{var inst_35246 = (state_35289[17]);var inst_35225 = (state_35289[20]);var inst_35246__$1 = cljs.core.seq.call(null,inst_35225);var state_35289__$1 = (function (){var statearr_35329 = state_35289;(statearr_35329[17] = inst_35246__$1);
return statearr_35329;
})();if(inst_35246__$1)
{var statearr_35330_35400 = state_35289__$1;(statearr_35330_35400[1] = 33);
} else
{var statearr_35331_35401 = state_35289__$1;(statearr_35331_35401[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 25))
{var inst_35227 = (state_35289[18]);var inst_35228 = (state_35289[10]);var inst_35230 = (inst_35228 < inst_35227);var inst_35231 = inst_35230;var state_35289__$1 = state_35289;if(cljs.core.truth_(inst_35231))
{var statearr_35332_35402 = state_35289__$1;(statearr_35332_35402[1] = 27);
} else
{var statearr_35333_35403 = state_35289__$1;(statearr_35333_35403[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 34))
{var state_35289__$1 = state_35289;var statearr_35334_35404 = state_35289__$1;(statearr_35334_35404[2] = null);
(statearr_35334_35404[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 17))
{var state_35289__$1 = state_35289;var statearr_35335_35405 = state_35289__$1;(statearr_35335_35405[2] = null);
(statearr_35335_35405[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 3))
{var inst_35287 = (state_35289[2]);var state_35289__$1 = state_35289;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35289__$1,inst_35287);
} else
{if((state_val_35290 === 12))
{var inst_35212 = (state_35289[2]);var state_35289__$1 = state_35289;var statearr_35336_35406 = state_35289__$1;(statearr_35336_35406[2] = inst_35212);
(statearr_35336_35406[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 2))
{var state_35289__$1 = state_35289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35289__$1,4,ch);
} else
{if((state_val_35290 === 23))
{var state_35289__$1 = state_35289;var statearr_35337_35407 = state_35289__$1;(statearr_35337_35407[2] = null);
(statearr_35337_35407[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 35))
{var inst_35271 = (state_35289[2]);var state_35289__$1 = state_35289;var statearr_35338_35408 = state_35289__$1;(statearr_35338_35408[2] = inst_35271);
(statearr_35338_35408[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 19))
{var inst_35186 = (state_35289[7]);var inst_35190 = cljs.core.chunk_first.call(null,inst_35186);var inst_35191 = cljs.core.chunk_rest.call(null,inst_35186);var inst_35192 = cljs.core.count.call(null,inst_35190);var inst_35166 = inst_35191;var inst_35167 = inst_35190;var inst_35168 = inst_35192;var inst_35169 = 0;var state_35289__$1 = (function (){var statearr_35339 = state_35289;(statearr_35339[12] = inst_35167);
(statearr_35339[13] = inst_35168);
(statearr_35339[14] = inst_35166);
(statearr_35339[16] = inst_35169);
return statearr_35339;
})();var statearr_35340_35409 = state_35289__$1;(statearr_35340_35409[2] = null);
(statearr_35340_35409[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 11))
{var inst_35186 = (state_35289[7]);var inst_35166 = (state_35289[14]);var inst_35186__$1 = cljs.core.seq.call(null,inst_35166);var state_35289__$1 = (function (){var statearr_35341 = state_35289;(statearr_35341[7] = inst_35186__$1);
return statearr_35341;
})();if(inst_35186__$1)
{var statearr_35342_35410 = state_35289__$1;(statearr_35342_35410[1] = 16);
} else
{var statearr_35343_35411 = state_35289__$1;(statearr_35343_35411[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 9))
{var inst_35214 = (state_35289[2]);var state_35289__$1 = state_35289;var statearr_35344_35412 = state_35289__$1;(statearr_35344_35412[2] = inst_35214);
(statearr_35344_35412[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 5))
{var inst_35164 = cljs.core.deref.call(null,cs);var inst_35165 = cljs.core.seq.call(null,inst_35164);var inst_35166 = inst_35165;var inst_35167 = null;var inst_35168 = 0;var inst_35169 = 0;var state_35289__$1 = (function (){var statearr_35345 = state_35289;(statearr_35345[12] = inst_35167);
(statearr_35345[13] = inst_35168);
(statearr_35345[14] = inst_35166);
(statearr_35345[16] = inst_35169);
return statearr_35345;
})();var statearr_35346_35413 = state_35289__$1;(statearr_35346_35413[2] = null);
(statearr_35346_35413[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 14))
{var state_35289__$1 = state_35289;var statearr_35347_35414 = state_35289__$1;(statearr_35347_35414[2] = null);
(statearr_35347_35414[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 45))
{var inst_35279 = (state_35289[2]);var state_35289__$1 = state_35289;var statearr_35348_35415 = state_35289__$1;(statearr_35348_35415[2] = inst_35279);
(statearr_35348_35415[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 26))
{var inst_35217 = (state_35289[30]);var inst_35275 = (state_35289[2]);var inst_35276 = cljs.core.seq.call(null,inst_35217);var state_35289__$1 = (function (){var statearr_35349 = state_35289;(statearr_35349[32] = inst_35275);
return statearr_35349;
})();if(inst_35276)
{var statearr_35350_35416 = state_35289__$1;(statearr_35350_35416[1] = 42);
} else
{var statearr_35351_35417 = state_35289__$1;(statearr_35351_35417[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 16))
{var inst_35186 = (state_35289[7]);var inst_35188 = cljs.core.chunked_seq_QMARK_.call(null,inst_35186);var state_35289__$1 = state_35289;if(inst_35188)
{var statearr_35355_35418 = state_35289__$1;(statearr_35355_35418[1] = 19);
} else
{var statearr_35356_35419 = state_35289__$1;(statearr_35356_35419[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 38))
{var inst_35268 = (state_35289[2]);var state_35289__$1 = state_35289;var statearr_35357_35420 = state_35289__$1;(statearr_35357_35420[2] = inst_35268);
(statearr_35357_35420[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 30))
{var inst_35227 = (state_35289[18]);var inst_35225 = (state_35289[20]);var inst_35226 = (state_35289[9]);var inst_35228 = (state_35289[10]);var inst_35242 = (state_35289[2]);var inst_35243 = (inst_35228 + 1);var tmp35352 = inst_35227;var tmp35353 = inst_35225;var tmp35354 = inst_35226;var inst_35225__$1 = tmp35353;var inst_35226__$1 = tmp35354;var inst_35227__$1 = tmp35352;var inst_35228__$1 = inst_35243;var state_35289__$1 = (function (){var statearr_35358 = state_35289;(statearr_35358[18] = inst_35227__$1);
(statearr_35358[33] = inst_35242);
(statearr_35358[20] = inst_35225__$1);
(statearr_35358[9] = inst_35226__$1);
(statearr_35358[10] = inst_35228__$1);
return statearr_35358;
})();var statearr_35359_35421 = state_35289__$1;(statearr_35359_35421[2] = null);
(statearr_35359_35421[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 10))
{var inst_35167 = (state_35289[12]);var inst_35169 = (state_35289[16]);var inst_35175 = cljs.core._nth.call(null,inst_35167,inst_35169);var inst_35176 = cljs.core.nth.call(null,inst_35175,0,null);var inst_35177 = cljs.core.nth.call(null,inst_35175,1,null);var state_35289__$1 = (function (){var statearr_35360 = state_35289;(statearr_35360[28] = inst_35176);
return statearr_35360;
})();if(cljs.core.truth_(inst_35177))
{var statearr_35361_35422 = state_35289__$1;(statearr_35361_35422[1] = 13);
} else
{var statearr_35362_35423 = state_35289__$1;(statearr_35362_35423[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 18))
{var inst_35210 = (state_35289[2]);var state_35289__$1 = state_35289;var statearr_35363_35424 = state_35289__$1;(statearr_35363_35424[2] = inst_35210);
(statearr_35363_35424[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 42))
{var state_35289__$1 = state_35289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35289__$1,45,dchan);
} else
{if((state_val_35290 === 37))
{var inst_35246 = (state_35289[17]);var inst_35255 = cljs.core.first.call(null,inst_35246);var state_35289__$1 = (function (){var statearr_35364 = state_35289;(statearr_35364[25] = inst_35255);
return statearr_35364;
})();var statearr_35365_35425 = state_35289__$1;(statearr_35365_35425[2] = null);
(statearr_35365_35425[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35290 === 8))
{var inst_35168 = (state_35289[13]);var inst_35169 = (state_35289[16]);var inst_35171 = (inst_35169 < inst_35168);var inst_35172 = inst_35171;var state_35289__$1 = state_35289;if(cljs.core.truth_(inst_35172))
{var statearr_35366_35426 = state_35289__$1;(statearr_35366_35426[1] = 10);
} else
{var statearr_35367_35427 = state_35289__$1;(statearr_35367_35427[1] = 11);
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
var state_machine__22127__auto____0 = (function (){var statearr_35371 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35371[0] = state_machine__22127__auto__);
(statearr_35371[1] = 1);
return statearr_35371;
});
var state_machine__22127__auto____1 = (function (state_35289){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_35289);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e35372){if((e35372 instanceof Object))
{var ex__22130__auto__ = e35372;var statearr_35373_35428 = state_35289;(statearr_35373_35428[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35289);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35372;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35429 = state_35289;
state_35289 = G__35429;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_35289){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_35289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_35374 = f__22202__auto__.call(null);(statearr_35374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___35375);
return statearr_35374;
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
cljs.core.async.Mix = (function (){var obj35431 = {};return obj35431;
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
;var m = (function (){if(typeof cljs.core.async.t35541 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35541 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35542){
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
this.meta35542 = meta35542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35541.cljs$lang$type = true;
cljs.core.async.t35541.cljs$lang$ctorStr = "cljs.core.async/t35541";
cljs.core.async.t35541.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t35541");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35541.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35541.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35541.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35541.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35541.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35541.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35541.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35541.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35543){var self__ = this;
var _35543__$1 = this;return self__.meta35542;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35543,meta35542__$1){var self__ = this;
var _35543__$1 = this;return (new cljs.core.async.t35541(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35542__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35541 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35541(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35542){return (new cljs.core.async.t35541(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35542));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35541(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__22201__auto___35650 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_35608){var state_val_35609 = (state_35608[1]);if((state_val_35609 === 7))
{var inst_35557 = (state_35608[7]);var inst_35562 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35557);var state_35608__$1 = state_35608;var statearr_35610_35651 = state_35608__$1;(statearr_35610_35651[2] = inst_35562);
(statearr_35610_35651[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 20))
{var inst_35572 = (state_35608[8]);var state_35608__$1 = state_35608;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35608__$1,23,out,inst_35572);
} else
{if((state_val_35609 === 1))
{var inst_35547 = (state_35608[9]);var inst_35547__$1 = calc_state.call(null);var inst_35548 = cljs.core.seq_QMARK_.call(null,inst_35547__$1);var state_35608__$1 = (function (){var statearr_35611 = state_35608;(statearr_35611[9] = inst_35547__$1);
return statearr_35611;
})();if(inst_35548)
{var statearr_35612_35652 = state_35608__$1;(statearr_35612_35652[1] = 2);
} else
{var statearr_35613_35653 = state_35608__$1;(statearr_35613_35653[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 4))
{var inst_35547 = (state_35608[9]);var inst_35553 = (state_35608[2]);var inst_35554 = cljs.core.get.call(null,inst_35553,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35555 = cljs.core.get.call(null,inst_35553,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35556 = cljs.core.get.call(null,inst_35553,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_35557 = inst_35547;var state_35608__$1 = (function (){var statearr_35614 = state_35608;(statearr_35614[7] = inst_35557);
(statearr_35614[10] = inst_35555);
(statearr_35614[11] = inst_35554);
(statearr_35614[12] = inst_35556);
return statearr_35614;
})();var statearr_35615_35654 = state_35608__$1;(statearr_35615_35654[2] = null);
(statearr_35615_35654[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 15))
{var state_35608__$1 = state_35608;var statearr_35616_35655 = state_35608__$1;(statearr_35616_35655[2] = null);
(statearr_35616_35655[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 21))
{var state_35608__$1 = state_35608;var statearr_35617_35656 = state_35608__$1;(statearr_35617_35656[2] = null);
(statearr_35617_35656[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 13))
{var inst_35604 = (state_35608[2]);var state_35608__$1 = state_35608;var statearr_35618_35657 = state_35608__$1;(statearr_35618_35657[2] = inst_35604);
(statearr_35618_35657[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 22))
{var inst_35565 = (state_35608[13]);var inst_35601 = (state_35608[2]);var inst_35557 = inst_35565;var state_35608__$1 = (function (){var statearr_35619 = state_35608;(statearr_35619[7] = inst_35557);
(statearr_35619[14] = inst_35601);
return statearr_35619;
})();var statearr_35620_35658 = state_35608__$1;(statearr_35620_35658[2] = null);
(statearr_35620_35658[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 6))
{var inst_35606 = (state_35608[2]);var state_35608__$1 = state_35608;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35608__$1,inst_35606);
} else
{if((state_val_35609 === 17))
{var inst_35587 = (state_35608[15]);var state_35608__$1 = state_35608;var statearr_35621_35659 = state_35608__$1;(statearr_35621_35659[2] = inst_35587);
(statearr_35621_35659[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 3))
{var inst_35547 = (state_35608[9]);var state_35608__$1 = state_35608;var statearr_35622_35660 = state_35608__$1;(statearr_35622_35660[2] = inst_35547);
(statearr_35622_35660[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 12))
{var inst_35568 = (state_35608[16]);var inst_35573 = (state_35608[17]);var inst_35587 = (state_35608[15]);var inst_35587__$1 = inst_35568.call(null,inst_35573);var state_35608__$1 = (function (){var statearr_35623 = state_35608;(statearr_35623[15] = inst_35587__$1);
return statearr_35623;
})();if(cljs.core.truth_(inst_35587__$1))
{var statearr_35624_35661 = state_35608__$1;(statearr_35624_35661[1] = 17);
} else
{var statearr_35625_35662 = state_35608__$1;(statearr_35625_35662[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 2))
{var inst_35547 = (state_35608[9]);var inst_35550 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35547);var state_35608__$1 = state_35608;var statearr_35626_35663 = state_35608__$1;(statearr_35626_35663[2] = inst_35550);
(statearr_35626_35663[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 23))
{var inst_35598 = (state_35608[2]);var state_35608__$1 = state_35608;var statearr_35627_35664 = state_35608__$1;(statearr_35627_35664[2] = inst_35598);
(statearr_35627_35664[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 19))
{var inst_35595 = (state_35608[2]);var state_35608__$1 = state_35608;if(cljs.core.truth_(inst_35595))
{var statearr_35628_35665 = state_35608__$1;(statearr_35628_35665[1] = 20);
} else
{var statearr_35629_35666 = state_35608__$1;(statearr_35629_35666[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 11))
{var inst_35572 = (state_35608[8]);var inst_35578 = (inst_35572 == null);var state_35608__$1 = state_35608;if(cljs.core.truth_(inst_35578))
{var statearr_35630_35667 = state_35608__$1;(statearr_35630_35667[1] = 14);
} else
{var statearr_35631_35668 = state_35608__$1;(statearr_35631_35668[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 9))
{var inst_35565 = (state_35608[13]);var inst_35565__$1 = (state_35608[2]);var inst_35566 = cljs.core.get.call(null,inst_35565__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35567 = cljs.core.get.call(null,inst_35565__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35568 = cljs.core.get.call(null,inst_35565__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_35608__$1 = (function (){var statearr_35632 = state_35608;(statearr_35632[16] = inst_35568);
(statearr_35632[13] = inst_35565__$1);
(statearr_35632[18] = inst_35567);
return statearr_35632;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35608__$1,10,inst_35566);
} else
{if((state_val_35609 === 5))
{var inst_35557 = (state_35608[7]);var inst_35560 = cljs.core.seq_QMARK_.call(null,inst_35557);var state_35608__$1 = state_35608;if(inst_35560)
{var statearr_35633_35669 = state_35608__$1;(statearr_35633_35669[1] = 7);
} else
{var statearr_35634_35670 = state_35608__$1;(statearr_35634_35670[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 14))
{var inst_35573 = (state_35608[17]);var inst_35580 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35573);var state_35608__$1 = state_35608;var statearr_35635_35671 = state_35608__$1;(statearr_35635_35671[2] = inst_35580);
(statearr_35635_35671[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 16))
{var inst_35583 = (state_35608[2]);var inst_35584 = calc_state.call(null);var inst_35557 = inst_35584;var state_35608__$1 = (function (){var statearr_35636 = state_35608;(statearr_35636[7] = inst_35557);
(statearr_35636[19] = inst_35583);
return statearr_35636;
})();var statearr_35637_35672 = state_35608__$1;(statearr_35637_35672[2] = null);
(statearr_35637_35672[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 10))
{var inst_35573 = (state_35608[17]);var inst_35572 = (state_35608[8]);var inst_35571 = (state_35608[2]);var inst_35572__$1 = cljs.core.nth.call(null,inst_35571,0,null);var inst_35573__$1 = cljs.core.nth.call(null,inst_35571,1,null);var inst_35574 = (inst_35572__$1 == null);var inst_35575 = cljs.core._EQ_.call(null,inst_35573__$1,change);var inst_35576 = (inst_35574) || (inst_35575);var state_35608__$1 = (function (){var statearr_35638 = state_35608;(statearr_35638[17] = inst_35573__$1);
(statearr_35638[8] = inst_35572__$1);
return statearr_35638;
})();if(cljs.core.truth_(inst_35576))
{var statearr_35639_35673 = state_35608__$1;(statearr_35639_35673[1] = 11);
} else
{var statearr_35640_35674 = state_35608__$1;(statearr_35640_35674[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 18))
{var inst_35568 = (state_35608[16]);var inst_35573 = (state_35608[17]);var inst_35567 = (state_35608[18]);var inst_35590 = cljs.core.empty_QMARK_.call(null,inst_35568);var inst_35591 = inst_35567.call(null,inst_35573);var inst_35592 = cljs.core.not.call(null,inst_35591);var inst_35593 = (inst_35590) && (inst_35592);var state_35608__$1 = state_35608;var statearr_35641_35675 = state_35608__$1;(statearr_35641_35675[2] = inst_35593);
(statearr_35641_35675[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35609 === 8))
{var inst_35557 = (state_35608[7]);var state_35608__$1 = state_35608;var statearr_35642_35676 = state_35608__$1;(statearr_35642_35676[2] = inst_35557);
(statearr_35642_35676[1] = 9);
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
var state_machine__22127__auto____0 = (function (){var statearr_35646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35646[0] = state_machine__22127__auto__);
(statearr_35646[1] = 1);
return statearr_35646;
});
var state_machine__22127__auto____1 = (function (state_35608){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_35608);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e35647){if((e35647 instanceof Object))
{var ex__22130__auto__ = e35647;var statearr_35648_35677 = state_35608;(statearr_35648_35677[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35608);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35647;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35678 = state_35608;
state_35608 = G__35678;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_35608){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_35608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_35649 = f__22202__auto__.call(null);(statearr_35649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___35650);
return statearr_35649;
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
cljs.core.async.Pub = (function (){var obj35680 = {};return obj35680;
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
return (function (p1__35681_SHARP_){if(cljs.core.truth_(p1__35681_SHARP_.call(null,topic)))
{return p1__35681_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35681_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14982__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35806 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35806 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35807){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35807 = meta35807;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35806.cljs$lang$type = true;
cljs.core.async.t35806.cljs$lang$ctorStr = "cljs.core.async/t35806";
cljs.core.async.t35806.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t35806");
});})(mults,ensure_mult))
;
cljs.core.async.t35806.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35806.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35806.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35806.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35806.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35806.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35806.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35808){var self__ = this;
var _35808__$1 = this;return self__.meta35807;
});})(mults,ensure_mult))
;
cljs.core.async.t35806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35808,meta35807__$1){var self__ = this;
var _35808__$1 = this;return (new cljs.core.async.t35806(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35807__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35806 = ((function (mults,ensure_mult){
return (function __GT_t35806(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35807){return (new cljs.core.async.t35806(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35807));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35806(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22201__auto___35930 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_35882){var state_val_35883 = (state_35882[1]);if((state_val_35883 === 7))
{var inst_35878 = (state_35882[2]);var state_35882__$1 = state_35882;var statearr_35884_35931 = state_35882__$1;(statearr_35884_35931[2] = inst_35878);
(statearr_35884_35931[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 20))
{var state_35882__$1 = state_35882;var statearr_35885_35932 = state_35882__$1;(statearr_35885_35932[2] = null);
(statearr_35885_35932[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 1))
{var state_35882__$1 = state_35882;var statearr_35886_35933 = state_35882__$1;(statearr_35886_35933[2] = null);
(statearr_35886_35933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 24))
{var inst_35861 = (state_35882[7]);var inst_35811 = (state_35882[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35882,23,Object,null,22);var inst_35868 = cljs.core.async.muxch_STAR_.call(null,inst_35861);var state_35882__$1 = state_35882;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35882__$1,25,inst_35868,inst_35811);
} else
{if((state_val_35883 === 4))
{var inst_35811 = (state_35882[8]);var inst_35811__$1 = (state_35882[2]);var inst_35812 = (inst_35811__$1 == null);var state_35882__$1 = (function (){var statearr_35887 = state_35882;(statearr_35887[8] = inst_35811__$1);
return statearr_35887;
})();if(cljs.core.truth_(inst_35812))
{var statearr_35888_35934 = state_35882__$1;(statearr_35888_35934[1] = 5);
} else
{var statearr_35889_35935 = state_35882__$1;(statearr_35889_35935[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 15))
{var inst_35853 = (state_35882[2]);var state_35882__$1 = state_35882;var statearr_35890_35936 = state_35882__$1;(statearr_35890_35936[2] = inst_35853);
(statearr_35890_35936[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 21))
{var inst_35875 = (state_35882[2]);var state_35882__$1 = (function (){var statearr_35891 = state_35882;(statearr_35891[9] = inst_35875);
return statearr_35891;
})();var statearr_35892_35937 = state_35882__$1;(statearr_35892_35937[2] = null);
(statearr_35892_35937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 13))
{var inst_35835 = (state_35882[10]);var inst_35837 = cljs.core.chunked_seq_QMARK_.call(null,inst_35835);var state_35882__$1 = state_35882;if(inst_35837)
{var statearr_35893_35938 = state_35882__$1;(statearr_35893_35938[1] = 16);
} else
{var statearr_35894_35939 = state_35882__$1;(statearr_35894_35939[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 22))
{var inst_35872 = (state_35882[2]);var state_35882__$1 = state_35882;var statearr_35895_35940 = state_35882__$1;(statearr_35895_35940[2] = inst_35872);
(statearr_35895_35940[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 6))
{var inst_35861 = (state_35882[7]);var inst_35811 = (state_35882[8]);var inst_35859 = (state_35882[11]);var inst_35859__$1 = topic_fn.call(null,inst_35811);var inst_35860 = cljs.core.deref.call(null,mults);var inst_35861__$1 = cljs.core.get.call(null,inst_35860,inst_35859__$1);var state_35882__$1 = (function (){var statearr_35896 = state_35882;(statearr_35896[7] = inst_35861__$1);
(statearr_35896[11] = inst_35859__$1);
return statearr_35896;
})();if(cljs.core.truth_(inst_35861__$1))
{var statearr_35897_35941 = state_35882__$1;(statearr_35897_35941[1] = 19);
} else
{var statearr_35898_35942 = state_35882__$1;(statearr_35898_35942[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 25))
{var inst_35870 = (state_35882[2]);var state_35882__$1 = state_35882;var statearr_35899_35943 = state_35882__$1;(statearr_35899_35943[2] = inst_35870);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35882__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 17))
{var inst_35835 = (state_35882[10]);var inst_35844 = cljs.core.first.call(null,inst_35835);var inst_35845 = cljs.core.async.muxch_STAR_.call(null,inst_35844);var inst_35846 = cljs.core.async.close_BANG_.call(null,inst_35845);var inst_35847 = cljs.core.next.call(null,inst_35835);var inst_35821 = inst_35847;var inst_35822 = null;var inst_35823 = 0;var inst_35824 = 0;var state_35882__$1 = (function (){var statearr_35900 = state_35882;(statearr_35900[12] = inst_35822);
(statearr_35900[13] = inst_35821);
(statearr_35900[14] = inst_35823);
(statearr_35900[15] = inst_35846);
(statearr_35900[16] = inst_35824);
return statearr_35900;
})();var statearr_35901_35944 = state_35882__$1;(statearr_35901_35944[2] = null);
(statearr_35901_35944[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 3))
{var inst_35880 = (state_35882[2]);var state_35882__$1 = state_35882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35882__$1,inst_35880);
} else
{if((state_val_35883 === 12))
{var inst_35855 = (state_35882[2]);var state_35882__$1 = state_35882;var statearr_35902_35945 = state_35882__$1;(statearr_35902_35945[2] = inst_35855);
(statearr_35902_35945[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 2))
{var state_35882__$1 = state_35882;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35882__$1,4,ch);
} else
{if((state_val_35883 === 23))
{var inst_35859 = (state_35882[11]);var inst_35863 = (state_35882[2]);var inst_35864 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35859);var state_35882__$1 = (function (){var statearr_35903 = state_35882;(statearr_35903[17] = inst_35863);
return statearr_35903;
})();var statearr_35904_35946 = state_35882__$1;(statearr_35904_35946[2] = inst_35864);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35882__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 19))
{var state_35882__$1 = state_35882;var statearr_35905_35947 = state_35882__$1;(statearr_35905_35947[2] = null);
(statearr_35905_35947[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 11))
{var inst_35821 = (state_35882[13]);var inst_35835 = (state_35882[10]);var inst_35835__$1 = cljs.core.seq.call(null,inst_35821);var state_35882__$1 = (function (){var statearr_35906 = state_35882;(statearr_35906[10] = inst_35835__$1);
return statearr_35906;
})();if(inst_35835__$1)
{var statearr_35907_35948 = state_35882__$1;(statearr_35907_35948[1] = 13);
} else
{var statearr_35908_35949 = state_35882__$1;(statearr_35908_35949[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 9))
{var inst_35857 = (state_35882[2]);var state_35882__$1 = state_35882;var statearr_35909_35950 = state_35882__$1;(statearr_35909_35950[2] = inst_35857);
(statearr_35909_35950[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 5))
{var inst_35818 = cljs.core.deref.call(null,mults);var inst_35819 = cljs.core.vals.call(null,inst_35818);var inst_35820 = cljs.core.seq.call(null,inst_35819);var inst_35821 = inst_35820;var inst_35822 = null;var inst_35823 = 0;var inst_35824 = 0;var state_35882__$1 = (function (){var statearr_35910 = state_35882;(statearr_35910[12] = inst_35822);
(statearr_35910[13] = inst_35821);
(statearr_35910[14] = inst_35823);
(statearr_35910[16] = inst_35824);
return statearr_35910;
})();var statearr_35911_35951 = state_35882__$1;(statearr_35911_35951[2] = null);
(statearr_35911_35951[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 14))
{var state_35882__$1 = state_35882;var statearr_35915_35952 = state_35882__$1;(statearr_35915_35952[2] = null);
(statearr_35915_35952[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 16))
{var inst_35835 = (state_35882[10]);var inst_35839 = cljs.core.chunk_first.call(null,inst_35835);var inst_35840 = cljs.core.chunk_rest.call(null,inst_35835);var inst_35841 = cljs.core.count.call(null,inst_35839);var inst_35821 = inst_35840;var inst_35822 = inst_35839;var inst_35823 = inst_35841;var inst_35824 = 0;var state_35882__$1 = (function (){var statearr_35916 = state_35882;(statearr_35916[12] = inst_35822);
(statearr_35916[13] = inst_35821);
(statearr_35916[14] = inst_35823);
(statearr_35916[16] = inst_35824);
return statearr_35916;
})();var statearr_35917_35953 = state_35882__$1;(statearr_35917_35953[2] = null);
(statearr_35917_35953[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 10))
{var inst_35822 = (state_35882[12]);var inst_35821 = (state_35882[13]);var inst_35823 = (state_35882[14]);var inst_35824 = (state_35882[16]);var inst_35829 = cljs.core._nth.call(null,inst_35822,inst_35824);var inst_35830 = cljs.core.async.muxch_STAR_.call(null,inst_35829);var inst_35831 = cljs.core.async.close_BANG_.call(null,inst_35830);var inst_35832 = (inst_35824 + 1);var tmp35912 = inst_35822;var tmp35913 = inst_35821;var tmp35914 = inst_35823;var inst_35821__$1 = tmp35913;var inst_35822__$1 = tmp35912;var inst_35823__$1 = tmp35914;var inst_35824__$1 = inst_35832;var state_35882__$1 = (function (){var statearr_35918 = state_35882;(statearr_35918[12] = inst_35822__$1);
(statearr_35918[13] = inst_35821__$1);
(statearr_35918[14] = inst_35823__$1);
(statearr_35918[18] = inst_35831);
(statearr_35918[16] = inst_35824__$1);
return statearr_35918;
})();var statearr_35919_35954 = state_35882__$1;(statearr_35919_35954[2] = null);
(statearr_35919_35954[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 18))
{var inst_35850 = (state_35882[2]);var state_35882__$1 = state_35882;var statearr_35920_35955 = state_35882__$1;(statearr_35920_35955[2] = inst_35850);
(statearr_35920_35955[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35883 === 8))
{var inst_35823 = (state_35882[14]);var inst_35824 = (state_35882[16]);var inst_35826 = (inst_35824 < inst_35823);var inst_35827 = inst_35826;var state_35882__$1 = state_35882;if(cljs.core.truth_(inst_35827))
{var statearr_35921_35956 = state_35882__$1;(statearr_35921_35956[1] = 10);
} else
{var statearr_35922_35957 = state_35882__$1;(statearr_35922_35957[1] = 11);
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
var state_machine__22127__auto____0 = (function (){var statearr_35926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35926[0] = state_machine__22127__auto__);
(statearr_35926[1] = 1);
return statearr_35926;
});
var state_machine__22127__auto____1 = (function (state_35882){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_35882);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e35927){if((e35927 instanceof Object))
{var ex__22130__auto__ = e35927;var statearr_35928_35958 = state_35882;(statearr_35928_35958[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35882);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35959 = state_35882;
state_35882 = G__35959;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_35882){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_35882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_35929 = f__22202__auto__.call(null);(statearr_35929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___35930);
return statearr_35929;
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
,cljs.core.range.call(null,cnt));var c__22201__auto___36096 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_36066){var state_val_36067 = (state_36066[1]);if((state_val_36067 === 7))
{var state_36066__$1 = state_36066;var statearr_36068_36097 = state_36066__$1;(statearr_36068_36097[2] = null);
(statearr_36068_36097[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36067 === 1))
{var state_36066__$1 = state_36066;var statearr_36069_36098 = state_36066__$1;(statearr_36069_36098[2] = null);
(statearr_36069_36098[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36067 === 4))
{var inst_36030 = (state_36066[7]);var inst_36032 = (inst_36030 < cnt);var state_36066__$1 = state_36066;if(cljs.core.truth_(inst_36032))
{var statearr_36070_36099 = state_36066__$1;(statearr_36070_36099[1] = 6);
} else
{var statearr_36071_36100 = state_36066__$1;(statearr_36071_36100[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36067 === 15))
{var inst_36062 = (state_36066[2]);var state_36066__$1 = state_36066;var statearr_36072_36101 = state_36066__$1;(statearr_36072_36101[2] = inst_36062);
(statearr_36072_36101[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36067 === 13))
{var inst_36055 = cljs.core.async.close_BANG_.call(null,out);var state_36066__$1 = state_36066;var statearr_36073_36102 = state_36066__$1;(statearr_36073_36102[2] = inst_36055);
(statearr_36073_36102[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36067 === 6))
{var state_36066__$1 = state_36066;var statearr_36074_36103 = state_36066__$1;(statearr_36074_36103[2] = null);
(statearr_36074_36103[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36067 === 3))
{var inst_36064 = (state_36066[2]);var state_36066__$1 = state_36066;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36066__$1,inst_36064);
} else
{if((state_val_36067 === 12))
{var inst_36052 = (state_36066[8]);var inst_36052__$1 = (state_36066[2]);var inst_36053 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36052__$1);var state_36066__$1 = (function (){var statearr_36075 = state_36066;(statearr_36075[8] = inst_36052__$1);
return statearr_36075;
})();if(cljs.core.truth_(inst_36053))
{var statearr_36076_36104 = state_36066__$1;(statearr_36076_36104[1] = 13);
} else
{var statearr_36077_36105 = state_36066__$1;(statearr_36077_36105[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36067 === 2))
{var inst_36029 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36030 = 0;var state_36066__$1 = (function (){var statearr_36078 = state_36066;(statearr_36078[9] = inst_36029);
(statearr_36078[7] = inst_36030);
return statearr_36078;
})();var statearr_36079_36106 = state_36066__$1;(statearr_36079_36106[2] = null);
(statearr_36079_36106[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36067 === 11))
{var inst_36030 = (state_36066[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36066,10,Object,null,9);var inst_36039 = chs__$1.call(null,inst_36030);var inst_36040 = done.call(null,inst_36030);var inst_36041 = cljs.core.async.take_BANG_.call(null,inst_36039,inst_36040);var state_36066__$1 = state_36066;var statearr_36080_36107 = state_36066__$1;(statearr_36080_36107[2] = inst_36041);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36066__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36067 === 9))
{var inst_36030 = (state_36066[7]);var inst_36043 = (state_36066[2]);var inst_36044 = (inst_36030 + 1);var inst_36030__$1 = inst_36044;var state_36066__$1 = (function (){var statearr_36081 = state_36066;(statearr_36081[10] = inst_36043);
(statearr_36081[7] = inst_36030__$1);
return statearr_36081;
})();var statearr_36082_36108 = state_36066__$1;(statearr_36082_36108[2] = null);
(statearr_36082_36108[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36067 === 5))
{var inst_36050 = (state_36066[2]);var state_36066__$1 = (function (){var statearr_36083 = state_36066;(statearr_36083[11] = inst_36050);
return statearr_36083;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36066__$1,12,dchan);
} else
{if((state_val_36067 === 14))
{var inst_36052 = (state_36066[8]);var inst_36057 = cljs.core.apply.call(null,f,inst_36052);var state_36066__$1 = state_36066;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36066__$1,16,out,inst_36057);
} else
{if((state_val_36067 === 16))
{var inst_36059 = (state_36066[2]);var state_36066__$1 = (function (){var statearr_36084 = state_36066;(statearr_36084[12] = inst_36059);
return statearr_36084;
})();var statearr_36085_36109 = state_36066__$1;(statearr_36085_36109[2] = null);
(statearr_36085_36109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36067 === 10))
{var inst_36034 = (state_36066[2]);var inst_36035 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36066__$1 = (function (){var statearr_36086 = state_36066;(statearr_36086[13] = inst_36034);
return statearr_36086;
})();var statearr_36087_36110 = state_36066__$1;(statearr_36087_36110[2] = inst_36035);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36066__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36067 === 8))
{var inst_36048 = (state_36066[2]);var state_36066__$1 = state_36066;var statearr_36088_36111 = state_36066__$1;(statearr_36088_36111[2] = inst_36048);
(statearr_36088_36111[1] = 5);
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
var state_machine__22127__auto____0 = (function (){var statearr_36092 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36092[0] = state_machine__22127__auto__);
(statearr_36092[1] = 1);
return statearr_36092;
});
var state_machine__22127__auto____1 = (function (state_36066){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_36066);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e36093){if((e36093 instanceof Object))
{var ex__22130__auto__ = e36093;var statearr_36094_36112 = state_36066;(statearr_36094_36112[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36066);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36093;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36113 = state_36066;
state_36066 = G__36113;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_36066){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_36066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_36095 = f__22202__auto__.call(null);(statearr_36095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___36096);
return statearr_36095;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___36221 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_36197){var state_val_36198 = (state_36197[1]);if((state_val_36198 === 7))
{var inst_36176 = (state_36197[7]);var inst_36177 = (state_36197[8]);var inst_36176__$1 = (state_36197[2]);var inst_36177__$1 = cljs.core.nth.call(null,inst_36176__$1,0,null);var inst_36178 = cljs.core.nth.call(null,inst_36176__$1,1,null);var inst_36179 = (inst_36177__$1 == null);var state_36197__$1 = (function (){var statearr_36199 = state_36197;(statearr_36199[7] = inst_36176__$1);
(statearr_36199[8] = inst_36177__$1);
(statearr_36199[9] = inst_36178);
return statearr_36199;
})();if(cljs.core.truth_(inst_36179))
{var statearr_36200_36222 = state_36197__$1;(statearr_36200_36222[1] = 8);
} else
{var statearr_36201_36223 = state_36197__$1;(statearr_36201_36223[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36198 === 1))
{var inst_36168 = cljs.core.vec.call(null,chs);var inst_36169 = inst_36168;var state_36197__$1 = (function (){var statearr_36202 = state_36197;(statearr_36202[10] = inst_36169);
return statearr_36202;
})();var statearr_36203_36224 = state_36197__$1;(statearr_36203_36224[2] = null);
(statearr_36203_36224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36198 === 4))
{var inst_36169 = (state_36197[10]);var state_36197__$1 = state_36197;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36197__$1,7,inst_36169);
} else
{if((state_val_36198 === 6))
{var inst_36193 = (state_36197[2]);var state_36197__$1 = state_36197;var statearr_36204_36225 = state_36197__$1;(statearr_36204_36225[2] = inst_36193);
(statearr_36204_36225[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36198 === 3))
{var inst_36195 = (state_36197[2]);var state_36197__$1 = state_36197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36197__$1,inst_36195);
} else
{if((state_val_36198 === 2))
{var inst_36169 = (state_36197[10]);var inst_36171 = cljs.core.count.call(null,inst_36169);var inst_36172 = (inst_36171 > 0);var state_36197__$1 = state_36197;if(cljs.core.truth_(inst_36172))
{var statearr_36206_36226 = state_36197__$1;(statearr_36206_36226[1] = 4);
} else
{var statearr_36207_36227 = state_36197__$1;(statearr_36207_36227[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36198 === 11))
{var inst_36169 = (state_36197[10]);var inst_36186 = (state_36197[2]);var tmp36205 = inst_36169;var inst_36169__$1 = tmp36205;var state_36197__$1 = (function (){var statearr_36208 = state_36197;(statearr_36208[11] = inst_36186);
(statearr_36208[10] = inst_36169__$1);
return statearr_36208;
})();var statearr_36209_36228 = state_36197__$1;(statearr_36209_36228[2] = null);
(statearr_36209_36228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36198 === 9))
{var inst_36177 = (state_36197[8]);var state_36197__$1 = state_36197;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36197__$1,11,out,inst_36177);
} else
{if((state_val_36198 === 5))
{var inst_36191 = cljs.core.async.close_BANG_.call(null,out);var state_36197__$1 = state_36197;var statearr_36210_36229 = state_36197__$1;(statearr_36210_36229[2] = inst_36191);
(statearr_36210_36229[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36198 === 10))
{var inst_36189 = (state_36197[2]);var state_36197__$1 = state_36197;var statearr_36211_36230 = state_36197__$1;(statearr_36211_36230[2] = inst_36189);
(statearr_36211_36230[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36198 === 8))
{var inst_36176 = (state_36197[7]);var inst_36177 = (state_36197[8]);var inst_36169 = (state_36197[10]);var inst_36178 = (state_36197[9]);var inst_36181 = (function (){var c = inst_36178;var v = inst_36177;var vec__36174 = inst_36176;var cs = inst_36169;return ((function (c,v,vec__36174,cs,inst_36176,inst_36177,inst_36169,inst_36178,state_val_36198){
return (function (p1__36114_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36114_SHARP_);
});
;})(c,v,vec__36174,cs,inst_36176,inst_36177,inst_36169,inst_36178,state_val_36198))
})();var inst_36182 = cljs.core.filterv.call(null,inst_36181,inst_36169);var inst_36169__$1 = inst_36182;var state_36197__$1 = (function (){var statearr_36212 = state_36197;(statearr_36212[10] = inst_36169__$1);
return statearr_36212;
})();var statearr_36213_36231 = state_36197__$1;(statearr_36213_36231[2] = null);
(statearr_36213_36231[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_36217 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36217[0] = state_machine__22127__auto__);
(statearr_36217[1] = 1);
return statearr_36217;
});
var state_machine__22127__auto____1 = (function (state_36197){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_36197);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e36218){if((e36218 instanceof Object))
{var ex__22130__auto__ = e36218;var statearr_36219_36232 = state_36197;(statearr_36219_36232[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36197);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36218;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36233 = state_36197;
state_36197 = G__36233;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_36197){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_36197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_36220 = f__22202__auto__.call(null);(statearr_36220[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___36221);
return statearr_36220;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___36326 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_36303){var state_val_36304 = (state_36303[1]);if((state_val_36304 === 7))
{var inst_36285 = (state_36303[7]);var inst_36285__$1 = (state_36303[2]);var inst_36286 = (inst_36285__$1 == null);var inst_36287 = cljs.core.not.call(null,inst_36286);var state_36303__$1 = (function (){var statearr_36305 = state_36303;(statearr_36305[7] = inst_36285__$1);
return statearr_36305;
})();if(inst_36287)
{var statearr_36306_36327 = state_36303__$1;(statearr_36306_36327[1] = 8);
} else
{var statearr_36307_36328 = state_36303__$1;(statearr_36307_36328[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36304 === 1))
{var inst_36280 = 0;var state_36303__$1 = (function (){var statearr_36308 = state_36303;(statearr_36308[8] = inst_36280);
return statearr_36308;
})();var statearr_36309_36329 = state_36303__$1;(statearr_36309_36329[2] = null);
(statearr_36309_36329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36304 === 4))
{var state_36303__$1 = state_36303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36303__$1,7,ch);
} else
{if((state_val_36304 === 6))
{var inst_36298 = (state_36303[2]);var state_36303__$1 = state_36303;var statearr_36310_36330 = state_36303__$1;(statearr_36310_36330[2] = inst_36298);
(statearr_36310_36330[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36304 === 3))
{var inst_36300 = (state_36303[2]);var inst_36301 = cljs.core.async.close_BANG_.call(null,out);var state_36303__$1 = (function (){var statearr_36311 = state_36303;(statearr_36311[9] = inst_36300);
return statearr_36311;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36303__$1,inst_36301);
} else
{if((state_val_36304 === 2))
{var inst_36280 = (state_36303[8]);var inst_36282 = (inst_36280 < n);var state_36303__$1 = state_36303;if(cljs.core.truth_(inst_36282))
{var statearr_36312_36331 = state_36303__$1;(statearr_36312_36331[1] = 4);
} else
{var statearr_36313_36332 = state_36303__$1;(statearr_36313_36332[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36304 === 11))
{var inst_36280 = (state_36303[8]);var inst_36290 = (state_36303[2]);var inst_36291 = (inst_36280 + 1);var inst_36280__$1 = inst_36291;var state_36303__$1 = (function (){var statearr_36314 = state_36303;(statearr_36314[10] = inst_36290);
(statearr_36314[8] = inst_36280__$1);
return statearr_36314;
})();var statearr_36315_36333 = state_36303__$1;(statearr_36315_36333[2] = null);
(statearr_36315_36333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36304 === 9))
{var state_36303__$1 = state_36303;var statearr_36316_36334 = state_36303__$1;(statearr_36316_36334[2] = null);
(statearr_36316_36334[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36304 === 5))
{var state_36303__$1 = state_36303;var statearr_36317_36335 = state_36303__$1;(statearr_36317_36335[2] = null);
(statearr_36317_36335[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36304 === 10))
{var inst_36295 = (state_36303[2]);var state_36303__$1 = state_36303;var statearr_36318_36336 = state_36303__$1;(statearr_36318_36336[2] = inst_36295);
(statearr_36318_36336[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36304 === 8))
{var inst_36285 = (state_36303[7]);var state_36303__$1 = state_36303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36303__$1,11,out,inst_36285);
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
var state_machine__22127__auto____0 = (function (){var statearr_36322 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36322[0] = state_machine__22127__auto__);
(statearr_36322[1] = 1);
return statearr_36322;
});
var state_machine__22127__auto____1 = (function (state_36303){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_36303);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e36323){if((e36323 instanceof Object))
{var ex__22130__auto__ = e36323;var statearr_36324_36337 = state_36303;(statearr_36324_36337[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36303);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36323;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36338 = state_36303;
state_36303 = G__36338;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_36303){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_36303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_36325 = f__22202__auto__.call(null);(statearr_36325[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___36326);
return statearr_36325;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___36435 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_36410){var state_val_36411 = (state_36410[1]);if((state_val_36411 === 7))
{var inst_36405 = (state_36410[2]);var state_36410__$1 = state_36410;var statearr_36412_36436 = state_36410__$1;(statearr_36412_36436[2] = inst_36405);
(statearr_36412_36436[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36411 === 1))
{var inst_36387 = null;var state_36410__$1 = (function (){var statearr_36413 = state_36410;(statearr_36413[7] = inst_36387);
return statearr_36413;
})();var statearr_36414_36437 = state_36410__$1;(statearr_36414_36437[2] = null);
(statearr_36414_36437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36411 === 4))
{var inst_36390 = (state_36410[8]);var inst_36390__$1 = (state_36410[2]);var inst_36391 = (inst_36390__$1 == null);var inst_36392 = cljs.core.not.call(null,inst_36391);var state_36410__$1 = (function (){var statearr_36415 = state_36410;(statearr_36415[8] = inst_36390__$1);
return statearr_36415;
})();if(inst_36392)
{var statearr_36416_36438 = state_36410__$1;(statearr_36416_36438[1] = 5);
} else
{var statearr_36417_36439 = state_36410__$1;(statearr_36417_36439[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36411 === 6))
{var state_36410__$1 = state_36410;var statearr_36418_36440 = state_36410__$1;(statearr_36418_36440[2] = null);
(statearr_36418_36440[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36411 === 3))
{var inst_36407 = (state_36410[2]);var inst_36408 = cljs.core.async.close_BANG_.call(null,out);var state_36410__$1 = (function (){var statearr_36419 = state_36410;(statearr_36419[9] = inst_36407);
return statearr_36419;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36410__$1,inst_36408);
} else
{if((state_val_36411 === 2))
{var state_36410__$1 = state_36410;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36410__$1,4,ch);
} else
{if((state_val_36411 === 11))
{var inst_36390 = (state_36410[8]);var inst_36399 = (state_36410[2]);var inst_36387 = inst_36390;var state_36410__$1 = (function (){var statearr_36420 = state_36410;(statearr_36420[10] = inst_36399);
(statearr_36420[7] = inst_36387);
return statearr_36420;
})();var statearr_36421_36441 = state_36410__$1;(statearr_36421_36441[2] = null);
(statearr_36421_36441[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36411 === 9))
{var inst_36390 = (state_36410[8]);var state_36410__$1 = state_36410;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36410__$1,11,out,inst_36390);
} else
{if((state_val_36411 === 5))
{var inst_36390 = (state_36410[8]);var inst_36387 = (state_36410[7]);var inst_36394 = cljs.core._EQ_.call(null,inst_36390,inst_36387);var state_36410__$1 = state_36410;if(inst_36394)
{var statearr_36423_36442 = state_36410__$1;(statearr_36423_36442[1] = 8);
} else
{var statearr_36424_36443 = state_36410__$1;(statearr_36424_36443[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36411 === 10))
{var inst_36402 = (state_36410[2]);var state_36410__$1 = state_36410;var statearr_36425_36444 = state_36410__$1;(statearr_36425_36444[2] = inst_36402);
(statearr_36425_36444[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36411 === 8))
{var inst_36387 = (state_36410[7]);var tmp36422 = inst_36387;var inst_36387__$1 = tmp36422;var state_36410__$1 = (function (){var statearr_36426 = state_36410;(statearr_36426[7] = inst_36387__$1);
return statearr_36426;
})();var statearr_36427_36445 = state_36410__$1;(statearr_36427_36445[2] = null);
(statearr_36427_36445[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_36431 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36431[0] = state_machine__22127__auto__);
(statearr_36431[1] = 1);
return statearr_36431;
});
var state_machine__22127__auto____1 = (function (state_36410){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_36410);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e36432){if((e36432 instanceof Object))
{var ex__22130__auto__ = e36432;var statearr_36433_36446 = state_36410;(statearr_36433_36446[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36410);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36447 = state_36410;
state_36410 = G__36447;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_36410){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_36410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_36434 = f__22202__auto__.call(null);(statearr_36434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___36435);
return statearr_36434;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___36582 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_36552){var state_val_36553 = (state_36552[1]);if((state_val_36553 === 7))
{var inst_36548 = (state_36552[2]);var state_36552__$1 = state_36552;var statearr_36554_36583 = state_36552__$1;(statearr_36554_36583[2] = inst_36548);
(statearr_36554_36583[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36553 === 1))
{var inst_36515 = (new Array(n));var inst_36516 = inst_36515;var inst_36517 = 0;var state_36552__$1 = (function (){var statearr_36555 = state_36552;(statearr_36555[7] = inst_36516);
(statearr_36555[8] = inst_36517);
return statearr_36555;
})();var statearr_36556_36584 = state_36552__$1;(statearr_36556_36584[2] = null);
(statearr_36556_36584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36553 === 4))
{var inst_36520 = (state_36552[9]);var inst_36520__$1 = (state_36552[2]);var inst_36521 = (inst_36520__$1 == null);var inst_36522 = cljs.core.not.call(null,inst_36521);var state_36552__$1 = (function (){var statearr_36557 = state_36552;(statearr_36557[9] = inst_36520__$1);
return statearr_36557;
})();if(inst_36522)
{var statearr_36558_36585 = state_36552__$1;(statearr_36558_36585[1] = 5);
} else
{var statearr_36559_36586 = state_36552__$1;(statearr_36559_36586[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36553 === 15))
{var inst_36542 = (state_36552[2]);var state_36552__$1 = state_36552;var statearr_36560_36587 = state_36552__$1;(statearr_36560_36587[2] = inst_36542);
(statearr_36560_36587[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36553 === 13))
{var state_36552__$1 = state_36552;var statearr_36561_36588 = state_36552__$1;(statearr_36561_36588[2] = null);
(statearr_36561_36588[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36553 === 6))
{var inst_36517 = (state_36552[8]);var inst_36538 = (inst_36517 > 0);var state_36552__$1 = state_36552;if(cljs.core.truth_(inst_36538))
{var statearr_36562_36589 = state_36552__$1;(statearr_36562_36589[1] = 12);
} else
{var statearr_36563_36590 = state_36552__$1;(statearr_36563_36590[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36553 === 3))
{var inst_36550 = (state_36552[2]);var state_36552__$1 = state_36552;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36552__$1,inst_36550);
} else
{if((state_val_36553 === 12))
{var inst_36516 = (state_36552[7]);var inst_36540 = cljs.core.vec.call(null,inst_36516);var state_36552__$1 = state_36552;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36552__$1,15,out,inst_36540);
} else
{if((state_val_36553 === 2))
{var state_36552__$1 = state_36552;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36552__$1,4,ch);
} else
{if((state_val_36553 === 11))
{var inst_36532 = (state_36552[2]);var inst_36533 = (new Array(n));var inst_36516 = inst_36533;var inst_36517 = 0;var state_36552__$1 = (function (){var statearr_36564 = state_36552;(statearr_36564[10] = inst_36532);
(statearr_36564[7] = inst_36516);
(statearr_36564[8] = inst_36517);
return statearr_36564;
})();var statearr_36565_36591 = state_36552__$1;(statearr_36565_36591[2] = null);
(statearr_36565_36591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36553 === 9))
{var inst_36516 = (state_36552[7]);var inst_36530 = cljs.core.vec.call(null,inst_36516);var state_36552__$1 = state_36552;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36552__$1,11,out,inst_36530);
} else
{if((state_val_36553 === 5))
{var inst_36516 = (state_36552[7]);var inst_36517 = (state_36552[8]);var inst_36525 = (state_36552[11]);var inst_36520 = (state_36552[9]);var inst_36524 = (inst_36516[inst_36517] = inst_36520);var inst_36525__$1 = (inst_36517 + 1);var inst_36526 = (inst_36525__$1 < n);var state_36552__$1 = (function (){var statearr_36566 = state_36552;(statearr_36566[12] = inst_36524);
(statearr_36566[11] = inst_36525__$1);
return statearr_36566;
})();if(cljs.core.truth_(inst_36526))
{var statearr_36567_36592 = state_36552__$1;(statearr_36567_36592[1] = 8);
} else
{var statearr_36568_36593 = state_36552__$1;(statearr_36568_36593[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36553 === 14))
{var inst_36545 = (state_36552[2]);var inst_36546 = cljs.core.async.close_BANG_.call(null,out);var state_36552__$1 = (function (){var statearr_36570 = state_36552;(statearr_36570[13] = inst_36545);
return statearr_36570;
})();var statearr_36571_36594 = state_36552__$1;(statearr_36571_36594[2] = inst_36546);
(statearr_36571_36594[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36553 === 10))
{var inst_36536 = (state_36552[2]);var state_36552__$1 = state_36552;var statearr_36572_36595 = state_36552__$1;(statearr_36572_36595[2] = inst_36536);
(statearr_36572_36595[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36553 === 8))
{var inst_36516 = (state_36552[7]);var inst_36525 = (state_36552[11]);var tmp36569 = inst_36516;var inst_36516__$1 = tmp36569;var inst_36517 = inst_36525;var state_36552__$1 = (function (){var statearr_36573 = state_36552;(statearr_36573[7] = inst_36516__$1);
(statearr_36573[8] = inst_36517);
return statearr_36573;
})();var statearr_36574_36596 = state_36552__$1;(statearr_36574_36596[2] = null);
(statearr_36574_36596[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_36578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36578[0] = state_machine__22127__auto__);
(statearr_36578[1] = 1);
return statearr_36578;
});
var state_machine__22127__auto____1 = (function (state_36552){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_36552);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e36579){if((e36579 instanceof Object))
{var ex__22130__auto__ = e36579;var statearr_36580_36597 = state_36552;(statearr_36580_36597[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36552);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36579;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36598 = state_36552;
state_36552 = G__36598;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_36552){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_36552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_36581 = f__22202__auto__.call(null);(statearr_36581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___36582);
return statearr_36581;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___36741 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_36711){var state_val_36712 = (state_36711[1]);if((state_val_36712 === 7))
{var inst_36707 = (state_36711[2]);var state_36711__$1 = state_36711;var statearr_36713_36742 = state_36711__$1;(statearr_36713_36742[2] = inst_36707);
(statearr_36713_36742[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36712 === 1))
{var inst_36670 = [];var inst_36671 = inst_36670;var inst_36672 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_36711__$1 = (function (){var statearr_36714 = state_36711;(statearr_36714[7] = inst_36671);
(statearr_36714[8] = inst_36672);
return statearr_36714;
})();var statearr_36715_36743 = state_36711__$1;(statearr_36715_36743[2] = null);
(statearr_36715_36743[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36712 === 4))
{var inst_36675 = (state_36711[9]);var inst_36675__$1 = (state_36711[2]);var inst_36676 = (inst_36675__$1 == null);var inst_36677 = cljs.core.not.call(null,inst_36676);var state_36711__$1 = (function (){var statearr_36716 = state_36711;(statearr_36716[9] = inst_36675__$1);
return statearr_36716;
})();if(inst_36677)
{var statearr_36717_36744 = state_36711__$1;(statearr_36717_36744[1] = 5);
} else
{var statearr_36718_36745 = state_36711__$1;(statearr_36718_36745[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36712 === 15))
{var inst_36701 = (state_36711[2]);var state_36711__$1 = state_36711;var statearr_36719_36746 = state_36711__$1;(statearr_36719_36746[2] = inst_36701);
(statearr_36719_36746[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36712 === 13))
{var state_36711__$1 = state_36711;var statearr_36720_36747 = state_36711__$1;(statearr_36720_36747[2] = null);
(statearr_36720_36747[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36712 === 6))
{var inst_36671 = (state_36711[7]);var inst_36696 = inst_36671.length;var inst_36697 = (inst_36696 > 0);var state_36711__$1 = state_36711;if(cljs.core.truth_(inst_36697))
{var statearr_36721_36748 = state_36711__$1;(statearr_36721_36748[1] = 12);
} else
{var statearr_36722_36749 = state_36711__$1;(statearr_36722_36749[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36712 === 3))
{var inst_36709 = (state_36711[2]);var state_36711__$1 = state_36711;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36711__$1,inst_36709);
} else
{if((state_val_36712 === 12))
{var inst_36671 = (state_36711[7]);var inst_36699 = cljs.core.vec.call(null,inst_36671);var state_36711__$1 = state_36711;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36711__$1,15,out,inst_36699);
} else
{if((state_val_36712 === 2))
{var state_36711__$1 = state_36711;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36711__$1,4,ch);
} else
{if((state_val_36712 === 11))
{var inst_36679 = (state_36711[10]);var inst_36675 = (state_36711[9]);var inst_36689 = (state_36711[2]);var inst_36690 = [];var inst_36691 = inst_36690.push(inst_36675);var inst_36671 = inst_36690;var inst_36672 = inst_36679;var state_36711__$1 = (function (){var statearr_36723 = state_36711;(statearr_36723[11] = inst_36691);
(statearr_36723[7] = inst_36671);
(statearr_36723[12] = inst_36689);
(statearr_36723[8] = inst_36672);
return statearr_36723;
})();var statearr_36724_36750 = state_36711__$1;(statearr_36724_36750[2] = null);
(statearr_36724_36750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36712 === 9))
{var inst_36671 = (state_36711[7]);var inst_36687 = cljs.core.vec.call(null,inst_36671);var state_36711__$1 = state_36711;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36711__$1,11,out,inst_36687);
} else
{if((state_val_36712 === 5))
{var inst_36679 = (state_36711[10]);var inst_36675 = (state_36711[9]);var inst_36672 = (state_36711[8]);var inst_36679__$1 = f.call(null,inst_36675);var inst_36680 = cljs.core._EQ_.call(null,inst_36679__$1,inst_36672);var inst_36681 = cljs.core.keyword_identical_QMARK_.call(null,inst_36672,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_36682 = (inst_36680) || (inst_36681);var state_36711__$1 = (function (){var statearr_36725 = state_36711;(statearr_36725[10] = inst_36679__$1);
return statearr_36725;
})();if(cljs.core.truth_(inst_36682))
{var statearr_36726_36751 = state_36711__$1;(statearr_36726_36751[1] = 8);
} else
{var statearr_36727_36752 = state_36711__$1;(statearr_36727_36752[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36712 === 14))
{var inst_36704 = (state_36711[2]);var inst_36705 = cljs.core.async.close_BANG_.call(null,out);var state_36711__$1 = (function (){var statearr_36729 = state_36711;(statearr_36729[13] = inst_36704);
return statearr_36729;
})();var statearr_36730_36753 = state_36711__$1;(statearr_36730_36753[2] = inst_36705);
(statearr_36730_36753[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36712 === 10))
{var inst_36694 = (state_36711[2]);var state_36711__$1 = state_36711;var statearr_36731_36754 = state_36711__$1;(statearr_36731_36754[2] = inst_36694);
(statearr_36731_36754[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36712 === 8))
{var inst_36679 = (state_36711[10]);var inst_36671 = (state_36711[7]);var inst_36675 = (state_36711[9]);var inst_36684 = inst_36671.push(inst_36675);var tmp36728 = inst_36671;var inst_36671__$1 = tmp36728;var inst_36672 = inst_36679;var state_36711__$1 = (function (){var statearr_36732 = state_36711;(statearr_36732[14] = inst_36684);
(statearr_36732[7] = inst_36671__$1);
(statearr_36732[8] = inst_36672);
return statearr_36732;
})();var statearr_36733_36755 = state_36711__$1;(statearr_36733_36755[2] = null);
(statearr_36733_36755[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_36737 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36737[0] = state_machine__22127__auto__);
(statearr_36737[1] = 1);
return statearr_36737;
});
var state_machine__22127__auto____1 = (function (state_36711){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_36711);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e36738){if((e36738 instanceof Object))
{var ex__22130__auto__ = e36738;var statearr_36739_36756 = state_36711;(statearr_36739_36756[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36711);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36738;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36757 = state_36711;
state_36711 = G__36757;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_36711){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_36711);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_36740 = f__22202__auto__.call(null);(statearr_36740[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___36741);
return statearr_36740;
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

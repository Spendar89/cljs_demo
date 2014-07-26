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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t37082 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37082 = (function (f,fn_handler,meta37083){
this.f = f;
this.fn_handler = fn_handler;
this.meta37083 = meta37083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37082.cljs$lang$type = true;
cljs.core.async.t37082.cljs$lang$ctorStr = "cljs.core.async/t37082";
cljs.core.async.t37082.cljs$lang$ctorPrWriter = (function (this__15594__auto__,writer__15595__auto__,opt__15596__auto__){return cljs.core._write.call(null,writer__15595__auto__,"cljs.core.async/t37082");
});
cljs.core.async.t37082.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37082.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t37082.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t37082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37084){var self__ = this;
var _37084__$1 = this;return self__.meta37083;
});
cljs.core.async.t37082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37084,meta37083__$1){var self__ = this;
var _37084__$1 = this;return (new cljs.core.async.t37082(self__.f,self__.fn_handler,meta37083__$1));
});
cljs.core.async.__GT_t37082 = (function __GT_t37082(f__$1,fn_handler__$1,meta37083){return (new cljs.core.async.t37082(f__$1,fn_handler__$1,meta37083));
});
}
return (new cljs.core.async.t37082(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__37086 = buff;if(G__37086)
{var bit__15677__auto__ = null;if(cljs.core.truth_((function (){var or__15027__auto__ = bit__15677__auto__;if(cljs.core.truth_(or__15027__auto__))
{return or__15027__auto__;
} else
{return G__37086.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__37086.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37086);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37086);
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
{var val_37087 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_37087);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_37087);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__15015__auto__ = ret;if(cljs.core.truth_(and__15015__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__15015__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15875__auto___37088 = n;var x_37089 = 0;while(true){
if((x_37089 < n__15875__auto___37088))
{(a[x_37089] = 0);
{
var G__37090 = (x_37089 + 1);
x_37089 = G__37090;
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
var G__37091 = (i + 1);
i = G__37091;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t37095 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37095 = (function (flag,alt_flag,meta37096){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta37096 = meta37096;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37095.cljs$lang$type = true;
cljs.core.async.t37095.cljs$lang$ctorStr = "cljs.core.async/t37095";
cljs.core.async.t37095.cljs$lang$ctorPrWriter = (function (this__15594__auto__,writer__15595__auto__,opt__15596__auto__){return cljs.core._write.call(null,writer__15595__auto__,"cljs.core.async/t37095");
});
cljs.core.async.t37095.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37095.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t37095.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t37095.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37097){var self__ = this;
var _37097__$1 = this;return self__.meta37096;
});
cljs.core.async.t37095.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37097,meta37096__$1){var self__ = this;
var _37097__$1 = this;return (new cljs.core.async.t37095(self__.flag,self__.alt_flag,meta37096__$1));
});
cljs.core.async.__GT_t37095 = (function __GT_t37095(flag__$1,alt_flag__$1,meta37096){return (new cljs.core.async.t37095(flag__$1,alt_flag__$1,meta37096));
});
}
return (new cljs.core.async.t37095(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t37101 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37101 = (function (cb,flag,alt_handler,meta37102){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta37102 = meta37102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37101.cljs$lang$type = true;
cljs.core.async.t37101.cljs$lang$ctorStr = "cljs.core.async/t37101";
cljs.core.async.t37101.cljs$lang$ctorPrWriter = (function (this__15594__auto__,writer__15595__auto__,opt__15596__auto__){return cljs.core._write.call(null,writer__15595__auto__,"cljs.core.async/t37101");
});
cljs.core.async.t37101.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37101.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t37101.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t37101.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37103){var self__ = this;
var _37103__$1 = this;return self__.meta37102;
});
cljs.core.async.t37101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37103,meta37102__$1){var self__ = this;
var _37103__$1 = this;return (new cljs.core.async.t37101(self__.cb,self__.flag,self__.alt_handler,meta37102__$1));
});
cljs.core.async.__GT_t37101 = (function __GT_t37101(cb__$1,flag__$1,alt_handler__$1,meta37102){return (new cljs.core.async.t37101(cb__$1,flag__$1,alt_handler__$1,meta37102));
});
}
return (new cljs.core.async.t37101(cb,flag,alt_handler,null));
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
return (function (p1__37104_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37104_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__15027__auto__ = wport;if(cljs.core.truth_(or__15027__auto__))
{return or__15027__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__37105 = (i + 1);
i = G__37105;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__15027__auto__ = ret;if(cljs.core.truth_(or__15027__auto__))
{return or__15027__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__15015__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__15015__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__15015__auto__;
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
var alts_BANG___delegate = function (ports,p__37106){var map__37108 = p__37106;var map__37108__$1 = ((cljs.core.seq_QMARK_.call(null,map__37108))?cljs.core.apply.call(null,cljs.core.hash_map,map__37108):map__37108);var opts = map__37108__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__37106 = null;if (arguments.length > 1) {
  p__37106 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__37106);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__37109){
var ports = cljs.core.first(arglist__37109);
var p__37106 = cljs.core.rest(arglist__37109);
return alts_BANG___delegate(ports,p__37106);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t37117 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37117 = (function (ch,f,map_LT_,meta37118){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37118 = meta37118;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37117.cljs$lang$type = true;
cljs.core.async.t37117.cljs$lang$ctorStr = "cljs.core.async/t37117";
cljs.core.async.t37117.cljs$lang$ctorPrWriter = (function (this__15594__auto__,writer__15595__auto__,opt__15596__auto__){return cljs.core._write.call(null,writer__15595__auto__,"cljs.core.async/t37117");
});
cljs.core.async.t37117.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37117.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t37117.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37117.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t37120 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37120 = (function (fn1,_,meta37118,ch,f,map_LT_,meta37121){
this.fn1 = fn1;
this._ = _;
this.meta37118 = meta37118;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37121 = meta37121;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37120.cljs$lang$type = true;
cljs.core.async.t37120.cljs$lang$ctorStr = "cljs.core.async/t37120";
cljs.core.async.t37120.cljs$lang$ctorPrWriter = (function (this__15594__auto__,writer__15595__auto__,opt__15596__auto__){return cljs.core._write.call(null,writer__15595__auto__,"cljs.core.async/t37120");
});
cljs.core.async.t37120.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37120.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t37120.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t37120.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__37110_SHARP_){return f1.call(null,(((p1__37110_SHARP_ == null))?null:self__.f.call(null,p1__37110_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t37120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37122){var self__ = this;
var _37122__$1 = this;return self__.meta37121;
});
cljs.core.async.t37120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37122,meta37121__$1){var self__ = this;
var _37122__$1 = this;return (new cljs.core.async.t37120(self__.fn1,self__._,self__.meta37118,self__.ch,self__.f,self__.map_LT_,meta37121__$1));
});
cljs.core.async.__GT_t37120 = (function __GT_t37120(fn1__$1,___$2,meta37118__$1,ch__$2,f__$2,map_LT___$2,meta37121){return (new cljs.core.async.t37120(fn1__$1,___$2,meta37118__$1,ch__$2,f__$2,map_LT___$2,meta37121));
});
}
return (new cljs.core.async.t37120(fn1,___$1,self__.meta37118,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__15015__auto__ = ret;if(cljs.core.truth_(and__15015__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__15015__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t37117.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37117.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37117.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37119){var self__ = this;
var _37119__$1 = this;return self__.meta37118;
});
cljs.core.async.t37117.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37119,meta37118__$1){var self__ = this;
var _37119__$1 = this;return (new cljs.core.async.t37117(self__.ch,self__.f,self__.map_LT_,meta37118__$1));
});
cljs.core.async.__GT_t37117 = (function __GT_t37117(ch__$1,f__$1,map_LT___$1,meta37118){return (new cljs.core.async.t37117(ch__$1,f__$1,map_LT___$1,meta37118));
});
}
return (new cljs.core.async.t37117(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t37126 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37126 = (function (ch,f,map_GT_,meta37127){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta37127 = meta37127;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37126.cljs$lang$type = true;
cljs.core.async.t37126.cljs$lang$ctorStr = "cljs.core.async/t37126";
cljs.core.async.t37126.cljs$lang$ctorPrWriter = (function (this__15594__auto__,writer__15595__auto__,opt__15596__auto__){return cljs.core._write.call(null,writer__15595__auto__,"cljs.core.async/t37126");
});
cljs.core.async.t37126.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37126.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t37126.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37126.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t37126.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37126.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37126.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37128){var self__ = this;
var _37128__$1 = this;return self__.meta37127;
});
cljs.core.async.t37126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37128,meta37127__$1){var self__ = this;
var _37128__$1 = this;return (new cljs.core.async.t37126(self__.ch,self__.f,self__.map_GT_,meta37127__$1));
});
cljs.core.async.__GT_t37126 = (function __GT_t37126(ch__$1,f__$1,map_GT___$1,meta37127){return (new cljs.core.async.t37126(ch__$1,f__$1,map_GT___$1,meta37127));
});
}
return (new cljs.core.async.t37126(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t37132 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37132 = (function (ch,p,filter_GT_,meta37133){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta37133 = meta37133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37132.cljs$lang$type = true;
cljs.core.async.t37132.cljs$lang$ctorStr = "cljs.core.async/t37132";
cljs.core.async.t37132.cljs$lang$ctorPrWriter = (function (this__15594__auto__,writer__15595__auto__,opt__15596__auto__){return cljs.core._write.call(null,writer__15595__auto__,"cljs.core.async/t37132");
});
cljs.core.async.t37132.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37132.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t37132.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37132.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t37132.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37132.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37134){var self__ = this;
var _37134__$1 = this;return self__.meta37133;
});
cljs.core.async.t37132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37134,meta37133__$1){var self__ = this;
var _37134__$1 = this;return (new cljs.core.async.t37132(self__.ch,self__.p,self__.filter_GT_,meta37133__$1));
});
cljs.core.async.__GT_t37132 = (function __GT_t37132(ch__$1,p__$1,filter_GT___$1,meta37133){return (new cljs.core.async.t37132(ch__$1,p__$1,filter_GT___$1,meta37133));
});
}
return (new cljs.core.async.t37132(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__29288__auto___37217 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_37196){var state_val_37197 = (state_37196[1]);if((state_val_37197 === 7))
{var inst_37192 = (state_37196[2]);var state_37196__$1 = state_37196;var statearr_37198_37218 = state_37196__$1;(statearr_37198_37218[2] = inst_37192);
(statearr_37198_37218[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 1))
{var state_37196__$1 = state_37196;var statearr_37199_37219 = state_37196__$1;(statearr_37199_37219[2] = null);
(statearr_37199_37219[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 4))
{var inst_37178 = (state_37196[7]);var inst_37178__$1 = (state_37196[2]);var inst_37179 = (inst_37178__$1 == null);var state_37196__$1 = (function (){var statearr_37200 = state_37196;(statearr_37200[7] = inst_37178__$1);
return statearr_37200;
})();if(cljs.core.truth_(inst_37179))
{var statearr_37201_37220 = state_37196__$1;(statearr_37201_37220[1] = 5);
} else
{var statearr_37202_37221 = state_37196__$1;(statearr_37202_37221[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 6))
{var inst_37178 = (state_37196[7]);var inst_37183 = p.call(null,inst_37178);var state_37196__$1 = state_37196;if(cljs.core.truth_(inst_37183))
{var statearr_37203_37222 = state_37196__$1;(statearr_37203_37222[1] = 8);
} else
{var statearr_37204_37223 = state_37196__$1;(statearr_37204_37223[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 3))
{var inst_37194 = (state_37196[2]);var state_37196__$1 = state_37196;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37196__$1,inst_37194);
} else
{if((state_val_37197 === 2))
{var state_37196__$1 = state_37196;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37196__$1,4,ch);
} else
{if((state_val_37197 === 11))
{var inst_37186 = (state_37196[2]);var state_37196__$1 = state_37196;var statearr_37205_37224 = state_37196__$1;(statearr_37205_37224[2] = inst_37186);
(statearr_37205_37224[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 9))
{var state_37196__$1 = state_37196;var statearr_37206_37225 = state_37196__$1;(statearr_37206_37225[2] = null);
(statearr_37206_37225[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 5))
{var inst_37181 = cljs.core.async.close_BANG_.call(null,out);var state_37196__$1 = state_37196;var statearr_37207_37226 = state_37196__$1;(statearr_37207_37226[2] = inst_37181);
(statearr_37207_37226[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 10))
{var inst_37189 = (state_37196[2]);var state_37196__$1 = (function (){var statearr_37208 = state_37196;(statearr_37208[8] = inst_37189);
return statearr_37208;
})();var statearr_37209_37227 = state_37196__$1;(statearr_37209_37227[2] = null);
(statearr_37209_37227[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37197 === 8))
{var inst_37178 = (state_37196[7]);var state_37196__$1 = state_37196;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37196__$1,11,out,inst_37178);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_37213 = [null,null,null,null,null,null,null,null,null];(statearr_37213[0] = state_machine__29225__auto__);
(statearr_37213[1] = 1);
return statearr_37213;
});
var state_machine__29225__auto____1 = (function (state_37196){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_37196);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e37214){if((e37214 instanceof Object))
{var ex__29228__auto__ = e37214;var statearr_37215_37228 = state_37196;(statearr_37215_37228[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37196);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37214;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37229 = state_37196;
state_37196 = G__37229;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_37196){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_37196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_37216 = f__29289__auto__.call(null);(statearr_37216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___37217);
return statearr_37216;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__29288__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_37381){var state_val_37382 = (state_37381[1]);if((state_val_37382 === 7))
{var inst_37377 = (state_37381[2]);var state_37381__$1 = state_37381;var statearr_37383_37420 = state_37381__$1;(statearr_37383_37420[2] = inst_37377);
(statearr_37383_37420[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 20))
{var inst_37352 = (state_37381[7]);var inst_37363 = (state_37381[2]);var inst_37364 = cljs.core.next.call(null,inst_37352);var inst_37338 = inst_37364;var inst_37339 = null;var inst_37340 = 0;var inst_37341 = 0;var state_37381__$1 = (function (){var statearr_37384 = state_37381;(statearr_37384[8] = inst_37339);
(statearr_37384[9] = inst_37341);
(statearr_37384[10] = inst_37340);
(statearr_37384[11] = inst_37363);
(statearr_37384[12] = inst_37338);
return statearr_37384;
})();var statearr_37385_37421 = state_37381__$1;(statearr_37385_37421[2] = null);
(statearr_37385_37421[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 1))
{var state_37381__$1 = state_37381;var statearr_37386_37422 = state_37381__$1;(statearr_37386_37422[2] = null);
(statearr_37386_37422[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 4))
{var inst_37327 = (state_37381[13]);var inst_37327__$1 = (state_37381[2]);var inst_37328 = (inst_37327__$1 == null);var state_37381__$1 = (function (){var statearr_37390 = state_37381;(statearr_37390[13] = inst_37327__$1);
return statearr_37390;
})();if(cljs.core.truth_(inst_37328))
{var statearr_37391_37423 = state_37381__$1;(statearr_37391_37423[1] = 5);
} else
{var statearr_37392_37424 = state_37381__$1;(statearr_37392_37424[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 15))
{var state_37381__$1 = state_37381;var statearr_37393_37425 = state_37381__$1;(statearr_37393_37425[2] = null);
(statearr_37393_37425[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 13))
{var inst_37339 = (state_37381[8]);var inst_37341 = (state_37381[9]);var inst_37340 = (state_37381[10]);var inst_37338 = (state_37381[12]);var inst_37348 = (state_37381[2]);var inst_37349 = (inst_37341 + 1);var tmp37387 = inst_37339;var tmp37388 = inst_37340;var tmp37389 = inst_37338;var inst_37338__$1 = tmp37389;var inst_37339__$1 = tmp37387;var inst_37340__$1 = tmp37388;var inst_37341__$1 = inst_37349;var state_37381__$1 = (function (){var statearr_37394 = state_37381;(statearr_37394[8] = inst_37339__$1);
(statearr_37394[9] = inst_37341__$1);
(statearr_37394[10] = inst_37340__$1);
(statearr_37394[14] = inst_37348);
(statearr_37394[12] = inst_37338__$1);
return statearr_37394;
})();var statearr_37395_37426 = state_37381__$1;(statearr_37395_37426[2] = null);
(statearr_37395_37426[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 6))
{var inst_37327 = (state_37381[13]);var inst_37332 = f.call(null,inst_37327);var inst_37337 = cljs.core.seq.call(null,inst_37332);var inst_37338 = inst_37337;var inst_37339 = null;var inst_37340 = 0;var inst_37341 = 0;var state_37381__$1 = (function (){var statearr_37396 = state_37381;(statearr_37396[8] = inst_37339);
(statearr_37396[9] = inst_37341);
(statearr_37396[10] = inst_37340);
(statearr_37396[12] = inst_37338);
return statearr_37396;
})();var statearr_37397_37427 = state_37381__$1;(statearr_37397_37427[2] = null);
(statearr_37397_37427[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 17))
{var inst_37352 = (state_37381[7]);var inst_37356 = cljs.core.chunk_first.call(null,inst_37352);var inst_37357 = cljs.core.chunk_rest.call(null,inst_37352);var inst_37358 = cljs.core.count.call(null,inst_37356);var inst_37338 = inst_37357;var inst_37339 = inst_37356;var inst_37340 = inst_37358;var inst_37341 = 0;var state_37381__$1 = (function (){var statearr_37398 = state_37381;(statearr_37398[8] = inst_37339);
(statearr_37398[9] = inst_37341);
(statearr_37398[10] = inst_37340);
(statearr_37398[12] = inst_37338);
return statearr_37398;
})();var statearr_37399_37428 = state_37381__$1;(statearr_37399_37428[2] = null);
(statearr_37399_37428[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 3))
{var inst_37379 = (state_37381[2]);var state_37381__$1 = state_37381;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37381__$1,inst_37379);
} else
{if((state_val_37382 === 12))
{var inst_37372 = (state_37381[2]);var state_37381__$1 = state_37381;var statearr_37400_37429 = state_37381__$1;(statearr_37400_37429[2] = inst_37372);
(statearr_37400_37429[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 2))
{var state_37381__$1 = state_37381;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37381__$1,4,in$);
} else
{if((state_val_37382 === 19))
{var inst_37367 = (state_37381[2]);var state_37381__$1 = state_37381;var statearr_37401_37430 = state_37381__$1;(statearr_37401_37430[2] = inst_37367);
(statearr_37401_37430[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 11))
{var inst_37352 = (state_37381[7]);var inst_37338 = (state_37381[12]);var inst_37352__$1 = cljs.core.seq.call(null,inst_37338);var state_37381__$1 = (function (){var statearr_37402 = state_37381;(statearr_37402[7] = inst_37352__$1);
return statearr_37402;
})();if(inst_37352__$1)
{var statearr_37403_37431 = state_37381__$1;(statearr_37403_37431[1] = 14);
} else
{var statearr_37404_37432 = state_37381__$1;(statearr_37404_37432[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 9))
{var inst_37374 = (state_37381[2]);var state_37381__$1 = (function (){var statearr_37405 = state_37381;(statearr_37405[15] = inst_37374);
return statearr_37405;
})();var statearr_37406_37433 = state_37381__$1;(statearr_37406_37433[2] = null);
(statearr_37406_37433[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 5))
{var inst_37330 = cljs.core.async.close_BANG_.call(null,out);var state_37381__$1 = state_37381;var statearr_37407_37434 = state_37381__$1;(statearr_37407_37434[2] = inst_37330);
(statearr_37407_37434[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 14))
{var inst_37352 = (state_37381[7]);var inst_37354 = cljs.core.chunked_seq_QMARK_.call(null,inst_37352);var state_37381__$1 = state_37381;if(inst_37354)
{var statearr_37408_37435 = state_37381__$1;(statearr_37408_37435[1] = 17);
} else
{var statearr_37409_37436 = state_37381__$1;(statearr_37409_37436[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 16))
{var inst_37370 = (state_37381[2]);var state_37381__$1 = state_37381;var statearr_37410_37437 = state_37381__$1;(statearr_37410_37437[2] = inst_37370);
(statearr_37410_37437[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37382 === 10))
{var inst_37339 = (state_37381[8]);var inst_37341 = (state_37381[9]);var inst_37346 = cljs.core._nth.call(null,inst_37339,inst_37341);var state_37381__$1 = state_37381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37381__$1,13,out,inst_37346);
} else
{if((state_val_37382 === 18))
{var inst_37352 = (state_37381[7]);var inst_37361 = cljs.core.first.call(null,inst_37352);var state_37381__$1 = state_37381;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37381__$1,20,out,inst_37361);
} else
{if((state_val_37382 === 8))
{var inst_37341 = (state_37381[9]);var inst_37340 = (state_37381[10]);var inst_37343 = (inst_37341 < inst_37340);var inst_37344 = inst_37343;var state_37381__$1 = state_37381;if(cljs.core.truth_(inst_37344))
{var statearr_37411_37438 = state_37381__$1;(statearr_37411_37438[1] = 10);
} else
{var statearr_37412_37439 = state_37381__$1;(statearr_37412_37439[1] = 11);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_37416 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37416[0] = state_machine__29225__auto__);
(statearr_37416[1] = 1);
return statearr_37416;
});
var state_machine__29225__auto____1 = (function (state_37381){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_37381);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e37417){if((e37417 instanceof Object))
{var ex__29228__auto__ = e37417;var statearr_37418_37440 = state_37381;(statearr_37418_37440[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37381);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37417;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37441 = state_37381;
state_37381 = G__37441;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_37381){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_37381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_37419 = f__29289__auto__.call(null);(statearr_37419[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto__);
return statearr_37419;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
}));
return c__29288__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__29288__auto___37522 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_37501){var state_val_37502 = (state_37501[1]);if((state_val_37502 === 7))
{var inst_37497 = (state_37501[2]);var state_37501__$1 = state_37501;var statearr_37503_37523 = state_37501__$1;(statearr_37503_37523[2] = inst_37497);
(statearr_37503_37523[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37502 === 1))
{var state_37501__$1 = state_37501;var statearr_37504_37524 = state_37501__$1;(statearr_37504_37524[2] = null);
(statearr_37504_37524[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37502 === 4))
{var inst_37484 = (state_37501[7]);var inst_37484__$1 = (state_37501[2]);var inst_37485 = (inst_37484__$1 == null);var state_37501__$1 = (function (){var statearr_37505 = state_37501;(statearr_37505[7] = inst_37484__$1);
return statearr_37505;
})();if(cljs.core.truth_(inst_37485))
{var statearr_37506_37525 = state_37501__$1;(statearr_37506_37525[1] = 5);
} else
{var statearr_37507_37526 = state_37501__$1;(statearr_37507_37526[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37502 === 6))
{var inst_37484 = (state_37501[7]);var state_37501__$1 = state_37501;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37501__$1,11,to,inst_37484);
} else
{if((state_val_37502 === 3))
{var inst_37499 = (state_37501[2]);var state_37501__$1 = state_37501;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37501__$1,inst_37499);
} else
{if((state_val_37502 === 2))
{var state_37501__$1 = state_37501;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37501__$1,4,from);
} else
{if((state_val_37502 === 11))
{var inst_37494 = (state_37501[2]);var state_37501__$1 = (function (){var statearr_37508 = state_37501;(statearr_37508[8] = inst_37494);
return statearr_37508;
})();var statearr_37509_37527 = state_37501__$1;(statearr_37509_37527[2] = null);
(statearr_37509_37527[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37502 === 9))
{var state_37501__$1 = state_37501;var statearr_37510_37528 = state_37501__$1;(statearr_37510_37528[2] = null);
(statearr_37510_37528[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37502 === 5))
{var state_37501__$1 = state_37501;if(cljs.core.truth_(close_QMARK_))
{var statearr_37511_37529 = state_37501__$1;(statearr_37511_37529[1] = 8);
} else
{var statearr_37512_37530 = state_37501__$1;(statearr_37512_37530[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37502 === 10))
{var inst_37491 = (state_37501[2]);var state_37501__$1 = state_37501;var statearr_37513_37531 = state_37501__$1;(statearr_37513_37531[2] = inst_37491);
(statearr_37513_37531[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37502 === 8))
{var inst_37488 = cljs.core.async.close_BANG_.call(null,to);var state_37501__$1 = state_37501;var statearr_37514_37532 = state_37501__$1;(statearr_37514_37532[2] = inst_37488);
(statearr_37514_37532[1] = 10);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_37518 = [null,null,null,null,null,null,null,null,null];(statearr_37518[0] = state_machine__29225__auto__);
(statearr_37518[1] = 1);
return statearr_37518;
});
var state_machine__29225__auto____1 = (function (state_37501){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_37501);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e37519){if((e37519 instanceof Object))
{var ex__29228__auto__ = e37519;var statearr_37520_37533 = state_37501;(statearr_37520_37533[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37501);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37519;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37534 = state_37501;
state_37501 = G__37534;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_37501){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_37501);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_37521 = f__29289__auto__.call(null);(statearr_37521[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___37522);
return statearr_37521;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__29288__auto___37621 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_37599){var state_val_37600 = (state_37599[1]);if((state_val_37600 === 7))
{var inst_37595 = (state_37599[2]);var state_37599__$1 = state_37599;var statearr_37601_37622 = state_37599__$1;(statearr_37601_37622[2] = inst_37595);
(statearr_37601_37622[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37600 === 1))
{var state_37599__$1 = state_37599;var statearr_37602_37623 = state_37599__$1;(statearr_37602_37623[2] = null);
(statearr_37602_37623[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37600 === 4))
{var inst_37580 = (state_37599[7]);var inst_37580__$1 = (state_37599[2]);var inst_37581 = (inst_37580__$1 == null);var state_37599__$1 = (function (){var statearr_37603 = state_37599;(statearr_37603[7] = inst_37580__$1);
return statearr_37603;
})();if(cljs.core.truth_(inst_37581))
{var statearr_37604_37624 = state_37599__$1;(statearr_37604_37624[1] = 5);
} else
{var statearr_37605_37625 = state_37599__$1;(statearr_37605_37625[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37600 === 6))
{var inst_37580 = (state_37599[7]);var inst_37586 = p.call(null,inst_37580);var state_37599__$1 = state_37599;if(cljs.core.truth_(inst_37586))
{var statearr_37606_37626 = state_37599__$1;(statearr_37606_37626[1] = 9);
} else
{var statearr_37607_37627 = state_37599__$1;(statearr_37607_37627[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37600 === 3))
{var inst_37597 = (state_37599[2]);var state_37599__$1 = state_37599;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37599__$1,inst_37597);
} else
{if((state_val_37600 === 2))
{var state_37599__$1 = state_37599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37599__$1,4,ch);
} else
{if((state_val_37600 === 11))
{var inst_37580 = (state_37599[7]);var inst_37590 = (state_37599[2]);var state_37599__$1 = state_37599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37599__$1,8,inst_37590,inst_37580);
} else
{if((state_val_37600 === 9))
{var state_37599__$1 = state_37599;var statearr_37608_37628 = state_37599__$1;(statearr_37608_37628[2] = tc);
(statearr_37608_37628[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37600 === 5))
{var inst_37583 = cljs.core.async.close_BANG_.call(null,tc);var inst_37584 = cljs.core.async.close_BANG_.call(null,fc);var state_37599__$1 = (function (){var statearr_37609 = state_37599;(statearr_37609[8] = inst_37583);
return statearr_37609;
})();var statearr_37610_37629 = state_37599__$1;(statearr_37610_37629[2] = inst_37584);
(statearr_37610_37629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37600 === 10))
{var state_37599__$1 = state_37599;var statearr_37611_37630 = state_37599__$1;(statearr_37611_37630[2] = fc);
(statearr_37611_37630[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37600 === 8))
{var inst_37592 = (state_37599[2]);var state_37599__$1 = (function (){var statearr_37612 = state_37599;(statearr_37612[9] = inst_37592);
return statearr_37612;
})();var statearr_37613_37631 = state_37599__$1;(statearr_37613_37631[2] = null);
(statearr_37613_37631[1] = 2);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_37617 = [null,null,null,null,null,null,null,null,null,null];(statearr_37617[0] = state_machine__29225__auto__);
(statearr_37617[1] = 1);
return statearr_37617;
});
var state_machine__29225__auto____1 = (function (state_37599){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_37599);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e37618){if((e37618 instanceof Object))
{var ex__29228__auto__ = e37618;var statearr_37619_37632 = state_37599;(statearr_37619_37632[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37599);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37618;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37633 = state_37599;
state_37599 = G__37633;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_37599){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_37599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_37620 = f__29289__auto__.call(null);(statearr_37620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___37621);
return statearr_37620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__29288__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_37680){var state_val_37681 = (state_37680[1]);if((state_val_37681 === 7))
{var inst_37676 = (state_37680[2]);var state_37680__$1 = state_37680;var statearr_37682_37698 = state_37680__$1;(statearr_37682_37698[2] = inst_37676);
(statearr_37682_37698[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37681 === 6))
{var inst_37669 = (state_37680[7]);var inst_37666 = (state_37680[8]);var inst_37673 = f.call(null,inst_37666,inst_37669);var inst_37666__$1 = inst_37673;var state_37680__$1 = (function (){var statearr_37683 = state_37680;(statearr_37683[8] = inst_37666__$1);
return statearr_37683;
})();var statearr_37684_37699 = state_37680__$1;(statearr_37684_37699[2] = null);
(statearr_37684_37699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37681 === 5))
{var inst_37666 = (state_37680[8]);var state_37680__$1 = state_37680;var statearr_37685_37700 = state_37680__$1;(statearr_37685_37700[2] = inst_37666);
(statearr_37685_37700[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37681 === 4))
{var inst_37669 = (state_37680[7]);var inst_37669__$1 = (state_37680[2]);var inst_37670 = (inst_37669__$1 == null);var state_37680__$1 = (function (){var statearr_37686 = state_37680;(statearr_37686[7] = inst_37669__$1);
return statearr_37686;
})();if(cljs.core.truth_(inst_37670))
{var statearr_37687_37701 = state_37680__$1;(statearr_37687_37701[1] = 5);
} else
{var statearr_37688_37702 = state_37680__$1;(statearr_37688_37702[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37681 === 3))
{var inst_37678 = (state_37680[2]);var state_37680__$1 = state_37680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37680__$1,inst_37678);
} else
{if((state_val_37681 === 2))
{var state_37680__$1 = state_37680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37680__$1,4,ch);
} else
{if((state_val_37681 === 1))
{var inst_37666 = init;var state_37680__$1 = (function (){var statearr_37689 = state_37680;(statearr_37689[8] = inst_37666);
return statearr_37689;
})();var statearr_37690_37703 = state_37680__$1;(statearr_37690_37703[2] = null);
(statearr_37690_37703[1] = 2);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_37694 = [null,null,null,null,null,null,null,null,null];(statearr_37694[0] = state_machine__29225__auto__);
(statearr_37694[1] = 1);
return statearr_37694;
});
var state_machine__29225__auto____1 = (function (state_37680){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_37680);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e37695){if((e37695 instanceof Object))
{var ex__29228__auto__ = e37695;var statearr_37696_37704 = state_37680;(statearr_37696_37704[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37705 = state_37680;
state_37680 = G__37705;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_37680){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_37680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_37697 = f__29289__auto__.call(null);(statearr_37697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto__);
return statearr_37697;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
}));
return c__29288__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__29288__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_37767){var state_val_37768 = (state_37767[1]);if((state_val_37768 === 7))
{var inst_37748 = (state_37767[7]);var inst_37753 = (state_37767[2]);var inst_37754 = cljs.core.next.call(null,inst_37748);var inst_37748__$1 = inst_37754;var state_37767__$1 = (function (){var statearr_37769 = state_37767;(statearr_37769[7] = inst_37748__$1);
(statearr_37769[8] = inst_37753);
return statearr_37769;
})();var statearr_37770_37788 = state_37767__$1;(statearr_37770_37788[2] = null);
(statearr_37770_37788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37768 === 1))
{var inst_37747 = cljs.core.seq.call(null,coll);var inst_37748 = inst_37747;var state_37767__$1 = (function (){var statearr_37771 = state_37767;(statearr_37771[7] = inst_37748);
return statearr_37771;
})();var statearr_37772_37789 = state_37767__$1;(statearr_37772_37789[2] = null);
(statearr_37772_37789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37768 === 4))
{var inst_37748 = (state_37767[7]);var inst_37751 = cljs.core.first.call(null,inst_37748);var state_37767__$1 = state_37767;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37767__$1,7,ch,inst_37751);
} else
{if((state_val_37768 === 6))
{var inst_37763 = (state_37767[2]);var state_37767__$1 = state_37767;var statearr_37773_37790 = state_37767__$1;(statearr_37773_37790[2] = inst_37763);
(statearr_37773_37790[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37768 === 3))
{var inst_37765 = (state_37767[2]);var state_37767__$1 = state_37767;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37767__$1,inst_37765);
} else
{if((state_val_37768 === 2))
{var inst_37748 = (state_37767[7]);var state_37767__$1 = state_37767;if(cljs.core.truth_(inst_37748))
{var statearr_37774_37791 = state_37767__$1;(statearr_37774_37791[1] = 4);
} else
{var statearr_37775_37792 = state_37767__$1;(statearr_37775_37792[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37768 === 9))
{var state_37767__$1 = state_37767;var statearr_37776_37793 = state_37767__$1;(statearr_37776_37793[2] = null);
(statearr_37776_37793[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37768 === 5))
{var state_37767__$1 = state_37767;if(cljs.core.truth_(close_QMARK_))
{var statearr_37777_37794 = state_37767__$1;(statearr_37777_37794[1] = 8);
} else
{var statearr_37778_37795 = state_37767__$1;(statearr_37778_37795[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37768 === 10))
{var inst_37761 = (state_37767[2]);var state_37767__$1 = state_37767;var statearr_37779_37796 = state_37767__$1;(statearr_37779_37796[2] = inst_37761);
(statearr_37779_37796[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37768 === 8))
{var inst_37758 = cljs.core.async.close_BANG_.call(null,ch);var state_37767__$1 = state_37767;var statearr_37780_37797 = state_37767__$1;(statearr_37780_37797[2] = inst_37758);
(statearr_37780_37797[1] = 10);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_37784 = [null,null,null,null,null,null,null,null,null];(statearr_37784[0] = state_machine__29225__auto__);
(statearr_37784[1] = 1);
return statearr_37784;
});
var state_machine__29225__auto____1 = (function (state_37767){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_37767);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e37785){if((e37785 instanceof Object))
{var ex__29228__auto__ = e37785;var statearr_37786_37798 = state_37767;(statearr_37786_37798[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37767);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37785;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37799 = state_37767;
state_37767 = G__37799;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_37767){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_37767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_37787 = f__29289__auto__.call(null);(statearr_37787[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto__);
return statearr_37787;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
}));
return c__29288__auto__;
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
cljs.core.async.Mux = (function (){var obj37801 = {};return obj37801;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__15015__auto__ = _;if(and__15015__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__15015__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__15654__auto__ = (((_ == null))?null:_);return (function (){var or__15027__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15654__auto__)]);if(or__15027__auto__)
{return or__15027__auto__;
} else
{var or__15027__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__15027__auto____$1)
{return or__15027__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj37803 = {};return obj37803;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__15015__auto__ = m;if(and__15015__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__15015__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__15654__auto__ = (((m == null))?null:m);return (function (){var or__15027__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15654__auto__)]);if(or__15027__auto__)
{return or__15027__auto__;
} else
{var or__15027__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__15027__auto____$1)
{return or__15027__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__15015__auto__ = m;if(and__15015__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__15015__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__15654__auto__ = (((m == null))?null:m);return (function (){var or__15027__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15654__auto__)]);if(or__15027__auto__)
{return or__15027__auto__;
} else
{var or__15027__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__15027__auto____$1)
{return or__15027__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__15015__auto__ = m;if(and__15015__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__15015__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__15654__auto__ = (((m == null))?null:m);return (function (){var or__15027__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15654__auto__)]);if(or__15027__auto__)
{return or__15027__auto__;
} else
{var or__15027__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__15027__auto____$1)
{return or__15027__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t38027 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38027 = (function (cs,ch,mult,meta38028){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta38028 = meta38028;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38027.cljs$lang$type = true;
cljs.core.async.t38027.cljs$lang$ctorStr = "cljs.core.async/t38027";
cljs.core.async.t38027.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15594__auto__,writer__15595__auto__,opt__15596__auto__){return cljs.core._write.call(null,writer__15595__auto__,"cljs.core.async/t38027");
});})(cs))
;
cljs.core.async.t38027.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t38027.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t38027.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t38027.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t38027.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38027.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t38027.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38029){var self__ = this;
var _38029__$1 = this;return self__.meta38028;
});})(cs))
;
cljs.core.async.t38027.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38029,meta38028__$1){var self__ = this;
var _38029__$1 = this;return (new cljs.core.async.t38027(self__.cs,self__.ch,self__.mult,meta38028__$1));
});})(cs))
;
cljs.core.async.__GT_t38027 = ((function (cs){
return (function __GT_t38027(cs__$1,ch__$1,mult__$1,meta38028){return (new cljs.core.async.t38027(cs__$1,ch__$1,mult__$1,meta38028));
});})(cs))
;
}
return (new cljs.core.async.t38027(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__29288__auto___38250 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_38164){var state_val_38165 = (state_38164[1]);if((state_val_38165 === 7))
{var inst_38160 = (state_38164[2]);var state_38164__$1 = state_38164;var statearr_38166_38251 = state_38164__$1;(statearr_38166_38251[2] = inst_38160);
(statearr_38166_38251[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 20))
{var inst_38061 = (state_38164[7]);var inst_38071 = cljs.core.first.call(null,inst_38061);var inst_38072 = cljs.core.nth.call(null,inst_38071,0,null);var inst_38073 = cljs.core.nth.call(null,inst_38071,1,null);var state_38164__$1 = (function (){var statearr_38167 = state_38164;(statearr_38167[8] = inst_38072);
return statearr_38167;
})();if(cljs.core.truth_(inst_38073))
{var statearr_38168_38252 = state_38164__$1;(statearr_38168_38252[1] = 22);
} else
{var statearr_38169_38253 = state_38164__$1;(statearr_38169_38253[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 27))
{var inst_38101 = (state_38164[9]);var inst_38103 = (state_38164[10]);var inst_38108 = cljs.core._nth.call(null,inst_38101,inst_38103);var state_38164__$1 = (function (){var statearr_38170 = state_38164;(statearr_38170[11] = inst_38108);
return statearr_38170;
})();var statearr_38171_38254 = state_38164__$1;(statearr_38171_38254[2] = null);
(statearr_38171_38254[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 1))
{var state_38164__$1 = state_38164;var statearr_38172_38255 = state_38164__$1;(statearr_38172_38255[2] = null);
(statearr_38172_38255[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 24))
{var inst_38061 = (state_38164[7]);var inst_38078 = (state_38164[2]);var inst_38079 = cljs.core.next.call(null,inst_38061);var inst_38041 = inst_38079;var inst_38042 = null;var inst_38043 = 0;var inst_38044 = 0;var state_38164__$1 = (function (){var statearr_38173 = state_38164;(statearr_38173[12] = inst_38042);
(statearr_38173[13] = inst_38041);
(statearr_38173[14] = inst_38044);
(statearr_38173[15] = inst_38043);
(statearr_38173[16] = inst_38078);
return statearr_38173;
})();var statearr_38174_38256 = state_38164__$1;(statearr_38174_38256[2] = null);
(statearr_38174_38256[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 39))
{var inst_38121 = (state_38164[17]);var inst_38139 = (state_38164[2]);var inst_38140 = cljs.core.next.call(null,inst_38121);var inst_38100 = inst_38140;var inst_38101 = null;var inst_38102 = 0;var inst_38103 = 0;var state_38164__$1 = (function (){var statearr_38178 = state_38164;(statearr_38178[18] = inst_38100);
(statearr_38178[19] = inst_38102);
(statearr_38178[9] = inst_38101);
(statearr_38178[10] = inst_38103);
(statearr_38178[20] = inst_38139);
return statearr_38178;
})();var statearr_38179_38257 = state_38164__$1;(statearr_38179_38257[2] = null);
(statearr_38179_38257[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 4))
{var inst_38032 = (state_38164[21]);var inst_38032__$1 = (state_38164[2]);var inst_38033 = (inst_38032__$1 == null);var state_38164__$1 = (function (){var statearr_38180 = state_38164;(statearr_38180[21] = inst_38032__$1);
return statearr_38180;
})();if(cljs.core.truth_(inst_38033))
{var statearr_38181_38258 = state_38164__$1;(statearr_38181_38258[1] = 5);
} else
{var statearr_38182_38259 = state_38164__$1;(statearr_38182_38259[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 15))
{var inst_38042 = (state_38164[12]);var inst_38041 = (state_38164[13]);var inst_38044 = (state_38164[14]);var inst_38043 = (state_38164[15]);var inst_38057 = (state_38164[2]);var inst_38058 = (inst_38044 + 1);var tmp38175 = inst_38042;var tmp38176 = inst_38041;var tmp38177 = inst_38043;var inst_38041__$1 = tmp38176;var inst_38042__$1 = tmp38175;var inst_38043__$1 = tmp38177;var inst_38044__$1 = inst_38058;var state_38164__$1 = (function (){var statearr_38183 = state_38164;(statearr_38183[12] = inst_38042__$1);
(statearr_38183[13] = inst_38041__$1);
(statearr_38183[14] = inst_38044__$1);
(statearr_38183[22] = inst_38057);
(statearr_38183[15] = inst_38043__$1);
return statearr_38183;
})();var statearr_38184_38260 = state_38164__$1;(statearr_38184_38260[2] = null);
(statearr_38184_38260[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 21))
{var inst_38082 = (state_38164[2]);var state_38164__$1 = state_38164;var statearr_38185_38261 = state_38164__$1;(statearr_38185_38261[2] = inst_38082);
(statearr_38185_38261[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 31))
{var inst_38108 = (state_38164[11]);var inst_38109 = (state_38164[2]);var inst_38110 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_38111 = cljs.core.async.untap_STAR_.call(null,m,inst_38108);var state_38164__$1 = (function (){var statearr_38186 = state_38164;(statearr_38186[23] = inst_38110);
(statearr_38186[24] = inst_38109);
return statearr_38186;
})();var statearr_38187_38262 = state_38164__$1;(statearr_38187_38262[2] = inst_38111);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38164__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 32))
{var inst_38108 = (state_38164[11]);var inst_38032 = (state_38164[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38164,31,Object,null,30);var inst_38115 = cljs.core.async.put_BANG_.call(null,inst_38108,inst_38032,done);var state_38164__$1 = state_38164;var statearr_38188_38263 = state_38164__$1;(statearr_38188_38263[2] = inst_38115);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38164__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 40))
{var inst_38130 = (state_38164[25]);var inst_38131 = (state_38164[2]);var inst_38132 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_38133 = cljs.core.async.untap_STAR_.call(null,m,inst_38130);var state_38164__$1 = (function (){var statearr_38189 = state_38164;(statearr_38189[26] = inst_38131);
(statearr_38189[27] = inst_38132);
return statearr_38189;
})();var statearr_38190_38264 = state_38164__$1;(statearr_38190_38264[2] = inst_38133);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38164__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 33))
{var inst_38121 = (state_38164[17]);var inst_38123 = cljs.core.chunked_seq_QMARK_.call(null,inst_38121);var state_38164__$1 = state_38164;if(inst_38123)
{var statearr_38191_38265 = state_38164__$1;(statearr_38191_38265[1] = 36);
} else
{var statearr_38192_38266 = state_38164__$1;(statearr_38192_38266[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 13))
{var inst_38051 = (state_38164[28]);var inst_38054 = cljs.core.async.close_BANG_.call(null,inst_38051);var state_38164__$1 = state_38164;var statearr_38193_38267 = state_38164__$1;(statearr_38193_38267[2] = inst_38054);
(statearr_38193_38267[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 22))
{var inst_38072 = (state_38164[8]);var inst_38075 = cljs.core.async.close_BANG_.call(null,inst_38072);var state_38164__$1 = state_38164;var statearr_38194_38268 = state_38164__$1;(statearr_38194_38268[2] = inst_38075);
(statearr_38194_38268[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 36))
{var inst_38121 = (state_38164[17]);var inst_38125 = cljs.core.chunk_first.call(null,inst_38121);var inst_38126 = cljs.core.chunk_rest.call(null,inst_38121);var inst_38127 = cljs.core.count.call(null,inst_38125);var inst_38100 = inst_38126;var inst_38101 = inst_38125;var inst_38102 = inst_38127;var inst_38103 = 0;var state_38164__$1 = (function (){var statearr_38195 = state_38164;(statearr_38195[18] = inst_38100);
(statearr_38195[19] = inst_38102);
(statearr_38195[9] = inst_38101);
(statearr_38195[10] = inst_38103);
return statearr_38195;
})();var statearr_38196_38269 = state_38164__$1;(statearr_38196_38269[2] = null);
(statearr_38196_38269[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 41))
{var inst_38130 = (state_38164[25]);var inst_38032 = (state_38164[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38164,40,Object,null,39);var inst_38137 = cljs.core.async.put_BANG_.call(null,inst_38130,inst_38032,done);var state_38164__$1 = state_38164;var statearr_38197_38270 = state_38164__$1;(statearr_38197_38270[2] = inst_38137);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38164__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 43))
{var state_38164__$1 = state_38164;var statearr_38198_38271 = state_38164__$1;(statearr_38198_38271[2] = null);
(statearr_38198_38271[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 29))
{var inst_38148 = (state_38164[2]);var state_38164__$1 = state_38164;var statearr_38199_38272 = state_38164__$1;(statearr_38199_38272[2] = inst_38148);
(statearr_38199_38272[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 44))
{var inst_38157 = (state_38164[2]);var state_38164__$1 = (function (){var statearr_38200 = state_38164;(statearr_38200[29] = inst_38157);
return statearr_38200;
})();var statearr_38201_38273 = state_38164__$1;(statearr_38201_38273[2] = null);
(statearr_38201_38273[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 6))
{var inst_38092 = (state_38164[30]);var inst_38091 = cljs.core.deref.call(null,cs);var inst_38092__$1 = cljs.core.keys.call(null,inst_38091);var inst_38093 = cljs.core.count.call(null,inst_38092__$1);var inst_38094 = cljs.core.reset_BANG_.call(null,dctr,inst_38093);var inst_38099 = cljs.core.seq.call(null,inst_38092__$1);var inst_38100 = inst_38099;var inst_38101 = null;var inst_38102 = 0;var inst_38103 = 0;var state_38164__$1 = (function (){var statearr_38202 = state_38164;(statearr_38202[31] = inst_38094);
(statearr_38202[18] = inst_38100);
(statearr_38202[30] = inst_38092__$1);
(statearr_38202[19] = inst_38102);
(statearr_38202[9] = inst_38101);
(statearr_38202[10] = inst_38103);
return statearr_38202;
})();var statearr_38203_38274 = state_38164__$1;(statearr_38203_38274[2] = null);
(statearr_38203_38274[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 28))
{var inst_38100 = (state_38164[18]);var inst_38121 = (state_38164[17]);var inst_38121__$1 = cljs.core.seq.call(null,inst_38100);var state_38164__$1 = (function (){var statearr_38204 = state_38164;(statearr_38204[17] = inst_38121__$1);
return statearr_38204;
})();if(inst_38121__$1)
{var statearr_38205_38275 = state_38164__$1;(statearr_38205_38275[1] = 33);
} else
{var statearr_38206_38276 = state_38164__$1;(statearr_38206_38276[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 25))
{var inst_38102 = (state_38164[19]);var inst_38103 = (state_38164[10]);var inst_38105 = (inst_38103 < inst_38102);var inst_38106 = inst_38105;var state_38164__$1 = state_38164;if(cljs.core.truth_(inst_38106))
{var statearr_38207_38277 = state_38164__$1;(statearr_38207_38277[1] = 27);
} else
{var statearr_38208_38278 = state_38164__$1;(statearr_38208_38278[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 34))
{var state_38164__$1 = state_38164;var statearr_38209_38279 = state_38164__$1;(statearr_38209_38279[2] = null);
(statearr_38209_38279[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 17))
{var state_38164__$1 = state_38164;var statearr_38210_38280 = state_38164__$1;(statearr_38210_38280[2] = null);
(statearr_38210_38280[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 3))
{var inst_38162 = (state_38164[2]);var state_38164__$1 = state_38164;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38164__$1,inst_38162);
} else
{if((state_val_38165 === 12))
{var inst_38087 = (state_38164[2]);var state_38164__$1 = state_38164;var statearr_38211_38281 = state_38164__$1;(statearr_38211_38281[2] = inst_38087);
(statearr_38211_38281[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 2))
{var state_38164__$1 = state_38164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38164__$1,4,ch);
} else
{if((state_val_38165 === 23))
{var state_38164__$1 = state_38164;var statearr_38212_38282 = state_38164__$1;(statearr_38212_38282[2] = null);
(statearr_38212_38282[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 35))
{var inst_38146 = (state_38164[2]);var state_38164__$1 = state_38164;var statearr_38213_38283 = state_38164__$1;(statearr_38213_38283[2] = inst_38146);
(statearr_38213_38283[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 19))
{var inst_38061 = (state_38164[7]);var inst_38065 = cljs.core.chunk_first.call(null,inst_38061);var inst_38066 = cljs.core.chunk_rest.call(null,inst_38061);var inst_38067 = cljs.core.count.call(null,inst_38065);var inst_38041 = inst_38066;var inst_38042 = inst_38065;var inst_38043 = inst_38067;var inst_38044 = 0;var state_38164__$1 = (function (){var statearr_38214 = state_38164;(statearr_38214[12] = inst_38042);
(statearr_38214[13] = inst_38041);
(statearr_38214[14] = inst_38044);
(statearr_38214[15] = inst_38043);
return statearr_38214;
})();var statearr_38215_38284 = state_38164__$1;(statearr_38215_38284[2] = null);
(statearr_38215_38284[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 11))
{var inst_38041 = (state_38164[13]);var inst_38061 = (state_38164[7]);var inst_38061__$1 = cljs.core.seq.call(null,inst_38041);var state_38164__$1 = (function (){var statearr_38216 = state_38164;(statearr_38216[7] = inst_38061__$1);
return statearr_38216;
})();if(inst_38061__$1)
{var statearr_38217_38285 = state_38164__$1;(statearr_38217_38285[1] = 16);
} else
{var statearr_38218_38286 = state_38164__$1;(statearr_38218_38286[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 9))
{var inst_38089 = (state_38164[2]);var state_38164__$1 = state_38164;var statearr_38219_38287 = state_38164__$1;(statearr_38219_38287[2] = inst_38089);
(statearr_38219_38287[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 5))
{var inst_38039 = cljs.core.deref.call(null,cs);var inst_38040 = cljs.core.seq.call(null,inst_38039);var inst_38041 = inst_38040;var inst_38042 = null;var inst_38043 = 0;var inst_38044 = 0;var state_38164__$1 = (function (){var statearr_38220 = state_38164;(statearr_38220[12] = inst_38042);
(statearr_38220[13] = inst_38041);
(statearr_38220[14] = inst_38044);
(statearr_38220[15] = inst_38043);
return statearr_38220;
})();var statearr_38221_38288 = state_38164__$1;(statearr_38221_38288[2] = null);
(statearr_38221_38288[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 14))
{var state_38164__$1 = state_38164;var statearr_38222_38289 = state_38164__$1;(statearr_38222_38289[2] = null);
(statearr_38222_38289[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 45))
{var inst_38154 = (state_38164[2]);var state_38164__$1 = state_38164;var statearr_38223_38290 = state_38164__$1;(statearr_38223_38290[2] = inst_38154);
(statearr_38223_38290[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 26))
{var inst_38092 = (state_38164[30]);var inst_38150 = (state_38164[2]);var inst_38151 = cljs.core.seq.call(null,inst_38092);var state_38164__$1 = (function (){var statearr_38224 = state_38164;(statearr_38224[32] = inst_38150);
return statearr_38224;
})();if(inst_38151)
{var statearr_38225_38291 = state_38164__$1;(statearr_38225_38291[1] = 42);
} else
{var statearr_38226_38292 = state_38164__$1;(statearr_38226_38292[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 16))
{var inst_38061 = (state_38164[7]);var inst_38063 = cljs.core.chunked_seq_QMARK_.call(null,inst_38061);var state_38164__$1 = state_38164;if(inst_38063)
{var statearr_38230_38293 = state_38164__$1;(statearr_38230_38293[1] = 19);
} else
{var statearr_38231_38294 = state_38164__$1;(statearr_38231_38294[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 38))
{var inst_38143 = (state_38164[2]);var state_38164__$1 = state_38164;var statearr_38232_38295 = state_38164__$1;(statearr_38232_38295[2] = inst_38143);
(statearr_38232_38295[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 30))
{var inst_38100 = (state_38164[18]);var inst_38102 = (state_38164[19]);var inst_38101 = (state_38164[9]);var inst_38103 = (state_38164[10]);var inst_38117 = (state_38164[2]);var inst_38118 = (inst_38103 + 1);var tmp38227 = inst_38100;var tmp38228 = inst_38102;var tmp38229 = inst_38101;var inst_38100__$1 = tmp38227;var inst_38101__$1 = tmp38229;var inst_38102__$1 = tmp38228;var inst_38103__$1 = inst_38118;var state_38164__$1 = (function (){var statearr_38233 = state_38164;(statearr_38233[33] = inst_38117);
(statearr_38233[18] = inst_38100__$1);
(statearr_38233[19] = inst_38102__$1);
(statearr_38233[9] = inst_38101__$1);
(statearr_38233[10] = inst_38103__$1);
return statearr_38233;
})();var statearr_38234_38296 = state_38164__$1;(statearr_38234_38296[2] = null);
(statearr_38234_38296[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 10))
{var inst_38042 = (state_38164[12]);var inst_38044 = (state_38164[14]);var inst_38050 = cljs.core._nth.call(null,inst_38042,inst_38044);var inst_38051 = cljs.core.nth.call(null,inst_38050,0,null);var inst_38052 = cljs.core.nth.call(null,inst_38050,1,null);var state_38164__$1 = (function (){var statearr_38235 = state_38164;(statearr_38235[28] = inst_38051);
return statearr_38235;
})();if(cljs.core.truth_(inst_38052))
{var statearr_38236_38297 = state_38164__$1;(statearr_38236_38297[1] = 13);
} else
{var statearr_38237_38298 = state_38164__$1;(statearr_38237_38298[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 18))
{var inst_38085 = (state_38164[2]);var state_38164__$1 = state_38164;var statearr_38238_38299 = state_38164__$1;(statearr_38238_38299[2] = inst_38085);
(statearr_38238_38299[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 42))
{var state_38164__$1 = state_38164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38164__$1,45,dchan);
} else
{if((state_val_38165 === 37))
{var inst_38121 = (state_38164[17]);var inst_38130 = cljs.core.first.call(null,inst_38121);var state_38164__$1 = (function (){var statearr_38239 = state_38164;(statearr_38239[25] = inst_38130);
return statearr_38239;
})();var statearr_38240_38300 = state_38164__$1;(statearr_38240_38300[2] = null);
(statearr_38240_38300[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38165 === 8))
{var inst_38044 = (state_38164[14]);var inst_38043 = (state_38164[15]);var inst_38046 = (inst_38044 < inst_38043);var inst_38047 = inst_38046;var state_38164__$1 = state_38164;if(cljs.core.truth_(inst_38047))
{var statearr_38241_38301 = state_38164__$1;(statearr_38241_38301[1] = 10);
} else
{var statearr_38242_38302 = state_38164__$1;(statearr_38242_38302[1] = 11);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_38246 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38246[0] = state_machine__29225__auto__);
(statearr_38246[1] = 1);
return statearr_38246;
});
var state_machine__29225__auto____1 = (function (state_38164){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_38164);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e38247){if((e38247 instanceof Object))
{var ex__29228__auto__ = e38247;var statearr_38248_38303 = state_38164;(statearr_38248_38303[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38164);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38247;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38304 = state_38164;
state_38164 = G__38304;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_38164){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_38164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_38249 = f__29289__auto__.call(null);(statearr_38249[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___38250);
return statearr_38249;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
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
cljs.core.async.Mix = (function (){var obj38306 = {};return obj38306;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__15015__auto__ = m;if(and__15015__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__15015__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__15654__auto__ = (((m == null))?null:m);return (function (){var or__15027__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15654__auto__)]);if(or__15027__auto__)
{return or__15027__auto__;
} else
{var or__15027__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__15027__auto____$1)
{return or__15027__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__15015__auto__ = m;if(and__15015__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__15015__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__15654__auto__ = (((m == null))?null:m);return (function (){var or__15027__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15654__auto__)]);if(or__15027__auto__)
{return or__15027__auto__;
} else
{var or__15027__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__15027__auto____$1)
{return or__15027__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__15015__auto__ = m;if(and__15015__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__15015__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__15654__auto__ = (((m == null))?null:m);return (function (){var or__15027__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15654__auto__)]);if(or__15027__auto__)
{return or__15027__auto__;
} else
{var or__15027__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__15027__auto____$1)
{return or__15027__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__15015__auto__ = m;if(and__15015__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__15015__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__15654__auto__ = (((m == null))?null:m);return (function (){var or__15027__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15654__auto__)]);if(or__15027__auto__)
{return or__15027__auto__;
} else
{var or__15027__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__15027__auto____$1)
{return or__15027__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__15015__auto__ = m;if(and__15015__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__15015__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__15654__auto__ = (((m == null))?null:m);return (function (){var or__15027__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15654__auto__)]);if(or__15027__auto__)
{return or__15027__auto__;
} else
{var or__15027__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__15027__auto____$1)
{return or__15027__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t38416 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38416 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38417){
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
this.meta38417 = meta38417;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38416.cljs$lang$type = true;
cljs.core.async.t38416.cljs$lang$ctorStr = "cljs.core.async/t38416";
cljs.core.async.t38416.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15594__auto__,writer__15595__auto__,opt__15596__auto__){return cljs.core._write.call(null,writer__15595__auto__,"cljs.core.async/t38416");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38416.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t38416.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38416.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38416.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38416.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38416.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38416.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38416.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38416.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38418){var self__ = this;
var _38418__$1 = this;return self__.meta38417;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38418,meta38417__$1){var self__ = this;
var _38418__$1 = this;return (new cljs.core.async.t38416(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38417__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t38416 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t38416(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38417){return (new cljs.core.async.t38416(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38417));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t38416(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__29288__auto___38525 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_38483){var state_val_38484 = (state_38483[1]);if((state_val_38484 === 7))
{var inst_38432 = (state_38483[7]);var inst_38437 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38432);var state_38483__$1 = state_38483;var statearr_38485_38526 = state_38483__$1;(statearr_38485_38526[2] = inst_38437);
(statearr_38485_38526[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 20))
{var inst_38447 = (state_38483[8]);var state_38483__$1 = state_38483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38483__$1,23,out,inst_38447);
} else
{if((state_val_38484 === 1))
{var inst_38422 = (state_38483[9]);var inst_38422__$1 = calc_state.call(null);var inst_38423 = cljs.core.seq_QMARK_.call(null,inst_38422__$1);var state_38483__$1 = (function (){var statearr_38486 = state_38483;(statearr_38486[9] = inst_38422__$1);
return statearr_38486;
})();if(inst_38423)
{var statearr_38487_38527 = state_38483__$1;(statearr_38487_38527[1] = 2);
} else
{var statearr_38488_38528 = state_38483__$1;(statearr_38488_38528[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 4))
{var inst_38422 = (state_38483[9]);var inst_38428 = (state_38483[2]);var inst_38429 = cljs.core.get.call(null,inst_38428,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_38430 = cljs.core.get.call(null,inst_38428,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_38431 = cljs.core.get.call(null,inst_38428,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_38432 = inst_38422;var state_38483__$1 = (function (){var statearr_38489 = state_38483;(statearr_38489[10] = inst_38429);
(statearr_38489[7] = inst_38432);
(statearr_38489[11] = inst_38430);
(statearr_38489[12] = inst_38431);
return statearr_38489;
})();var statearr_38490_38529 = state_38483__$1;(statearr_38490_38529[2] = null);
(statearr_38490_38529[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 15))
{var state_38483__$1 = state_38483;var statearr_38491_38530 = state_38483__$1;(statearr_38491_38530[2] = null);
(statearr_38491_38530[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 21))
{var state_38483__$1 = state_38483;var statearr_38492_38531 = state_38483__$1;(statearr_38492_38531[2] = null);
(statearr_38492_38531[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 13))
{var inst_38479 = (state_38483[2]);var state_38483__$1 = state_38483;var statearr_38493_38532 = state_38483__$1;(statearr_38493_38532[2] = inst_38479);
(statearr_38493_38532[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 22))
{var inst_38440 = (state_38483[13]);var inst_38476 = (state_38483[2]);var inst_38432 = inst_38440;var state_38483__$1 = (function (){var statearr_38494 = state_38483;(statearr_38494[14] = inst_38476);
(statearr_38494[7] = inst_38432);
return statearr_38494;
})();var statearr_38495_38533 = state_38483__$1;(statearr_38495_38533[2] = null);
(statearr_38495_38533[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 6))
{var inst_38481 = (state_38483[2]);var state_38483__$1 = state_38483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38483__$1,inst_38481);
} else
{if((state_val_38484 === 17))
{var inst_38462 = (state_38483[15]);var state_38483__$1 = state_38483;var statearr_38496_38534 = state_38483__$1;(statearr_38496_38534[2] = inst_38462);
(statearr_38496_38534[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 3))
{var inst_38422 = (state_38483[9]);var state_38483__$1 = state_38483;var statearr_38497_38535 = state_38483__$1;(statearr_38497_38535[2] = inst_38422);
(statearr_38497_38535[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 12))
{var inst_38443 = (state_38483[16]);var inst_38462 = (state_38483[15]);var inst_38448 = (state_38483[17]);var inst_38462__$1 = inst_38443.call(null,inst_38448);var state_38483__$1 = (function (){var statearr_38498 = state_38483;(statearr_38498[15] = inst_38462__$1);
return statearr_38498;
})();if(cljs.core.truth_(inst_38462__$1))
{var statearr_38499_38536 = state_38483__$1;(statearr_38499_38536[1] = 17);
} else
{var statearr_38500_38537 = state_38483__$1;(statearr_38500_38537[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 2))
{var inst_38422 = (state_38483[9]);var inst_38425 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38422);var state_38483__$1 = state_38483;var statearr_38501_38538 = state_38483__$1;(statearr_38501_38538[2] = inst_38425);
(statearr_38501_38538[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 23))
{var inst_38473 = (state_38483[2]);var state_38483__$1 = state_38483;var statearr_38502_38539 = state_38483__$1;(statearr_38502_38539[2] = inst_38473);
(statearr_38502_38539[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 19))
{var inst_38470 = (state_38483[2]);var state_38483__$1 = state_38483;if(cljs.core.truth_(inst_38470))
{var statearr_38503_38540 = state_38483__$1;(statearr_38503_38540[1] = 20);
} else
{var statearr_38504_38541 = state_38483__$1;(statearr_38504_38541[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 11))
{var inst_38447 = (state_38483[8]);var inst_38453 = (inst_38447 == null);var state_38483__$1 = state_38483;if(cljs.core.truth_(inst_38453))
{var statearr_38505_38542 = state_38483__$1;(statearr_38505_38542[1] = 14);
} else
{var statearr_38506_38543 = state_38483__$1;(statearr_38506_38543[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 9))
{var inst_38440 = (state_38483[13]);var inst_38440__$1 = (state_38483[2]);var inst_38441 = cljs.core.get.call(null,inst_38440__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_38442 = cljs.core.get.call(null,inst_38440__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_38443 = cljs.core.get.call(null,inst_38440__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_38483__$1 = (function (){var statearr_38507 = state_38483;(statearr_38507[16] = inst_38443);
(statearr_38507[13] = inst_38440__$1);
(statearr_38507[18] = inst_38442);
return statearr_38507;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_38483__$1,10,inst_38441);
} else
{if((state_val_38484 === 5))
{var inst_38432 = (state_38483[7]);var inst_38435 = cljs.core.seq_QMARK_.call(null,inst_38432);var state_38483__$1 = state_38483;if(inst_38435)
{var statearr_38508_38544 = state_38483__$1;(statearr_38508_38544[1] = 7);
} else
{var statearr_38509_38545 = state_38483__$1;(statearr_38509_38545[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 14))
{var inst_38448 = (state_38483[17]);var inst_38455 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38448);var state_38483__$1 = state_38483;var statearr_38510_38546 = state_38483__$1;(statearr_38510_38546[2] = inst_38455);
(statearr_38510_38546[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 16))
{var inst_38458 = (state_38483[2]);var inst_38459 = calc_state.call(null);var inst_38432 = inst_38459;var state_38483__$1 = (function (){var statearr_38511 = state_38483;(statearr_38511[19] = inst_38458);
(statearr_38511[7] = inst_38432);
return statearr_38511;
})();var statearr_38512_38547 = state_38483__$1;(statearr_38512_38547[2] = null);
(statearr_38512_38547[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 10))
{var inst_38448 = (state_38483[17]);var inst_38447 = (state_38483[8]);var inst_38446 = (state_38483[2]);var inst_38447__$1 = cljs.core.nth.call(null,inst_38446,0,null);var inst_38448__$1 = cljs.core.nth.call(null,inst_38446,1,null);var inst_38449 = (inst_38447__$1 == null);var inst_38450 = cljs.core._EQ_.call(null,inst_38448__$1,change);var inst_38451 = (inst_38449) || (inst_38450);var state_38483__$1 = (function (){var statearr_38513 = state_38483;(statearr_38513[17] = inst_38448__$1);
(statearr_38513[8] = inst_38447__$1);
return statearr_38513;
})();if(cljs.core.truth_(inst_38451))
{var statearr_38514_38548 = state_38483__$1;(statearr_38514_38548[1] = 11);
} else
{var statearr_38515_38549 = state_38483__$1;(statearr_38515_38549[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 18))
{var inst_38443 = (state_38483[16]);var inst_38448 = (state_38483[17]);var inst_38442 = (state_38483[18]);var inst_38465 = cljs.core.empty_QMARK_.call(null,inst_38443);var inst_38466 = inst_38442.call(null,inst_38448);var inst_38467 = cljs.core.not.call(null,inst_38466);var inst_38468 = (inst_38465) && (inst_38467);var state_38483__$1 = state_38483;var statearr_38516_38550 = state_38483__$1;(statearr_38516_38550[2] = inst_38468);
(statearr_38516_38550[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38484 === 8))
{var inst_38432 = (state_38483[7]);var state_38483__$1 = state_38483;var statearr_38517_38551 = state_38483__$1;(statearr_38517_38551[2] = inst_38432);
(statearr_38517_38551[1] = 9);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_38521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38521[0] = state_machine__29225__auto__);
(statearr_38521[1] = 1);
return statearr_38521;
});
var state_machine__29225__auto____1 = (function (state_38483){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_38483);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e38522){if((e38522 instanceof Object))
{var ex__29228__auto__ = e38522;var statearr_38523_38552 = state_38483;(statearr_38523_38552[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38553 = state_38483;
state_38483 = G__38553;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_38483){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_38483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_38524 = f__29289__auto__.call(null);(statearr_38524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___38525);
return statearr_38524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
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
cljs.core.async.Pub = (function (){var obj38555 = {};return obj38555;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__15015__auto__ = p;if(and__15015__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__15015__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__15654__auto__ = (((p == null))?null:p);return (function (){var or__15027__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15654__auto__)]);if(or__15027__auto__)
{return or__15027__auto__;
} else
{var or__15027__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__15027__auto____$1)
{return or__15027__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__15015__auto__ = p;if(and__15015__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__15015__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__15654__auto__ = (((p == null))?null:p);return (function (){var or__15027__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15654__auto__)]);if(or__15027__auto__)
{return or__15027__auto__;
} else
{var or__15027__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__15027__auto____$1)
{return or__15027__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__15015__auto__ = p;if(and__15015__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__15015__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__15654__auto__ = (((p == null))?null:p);return (function (){var or__15027__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15654__auto__)]);if(or__15027__auto__)
{return or__15027__auto__;
} else
{var or__15027__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15027__auto____$1)
{return or__15027__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__15015__auto__ = p;if(and__15015__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__15015__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__15654__auto__ = (((p == null))?null:p);return (function (){var or__15027__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15654__auto__)]);if(or__15027__auto__)
{return or__15027__auto__;
} else
{var or__15027__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15027__auto____$1)
{return or__15027__auto____$1;
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
return (function (topic){var or__15027__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__15027__auto__))
{return or__15027__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__15027__auto__,mults){
return (function (p1__38556_SHARP_){if(cljs.core.truth_(p1__38556_SHARP_.call(null,topic)))
{return p1__38556_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__38556_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15027__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t38681 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38681 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38682){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38682 = meta38682;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38681.cljs$lang$type = true;
cljs.core.async.t38681.cljs$lang$ctorStr = "cljs.core.async/t38681";
cljs.core.async.t38681.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15594__auto__,writer__15595__auto__,opt__15596__auto__){return cljs.core._write.call(null,writer__15595__auto__,"cljs.core.async/t38681");
});})(mults,ensure_mult))
;
cljs.core.async.t38681.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t38681.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t38681.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t38681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t38681.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t38681.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38681.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t38681.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38683){var self__ = this;
var _38683__$1 = this;return self__.meta38682;
});})(mults,ensure_mult))
;
cljs.core.async.t38681.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38683,meta38682__$1){var self__ = this;
var _38683__$1 = this;return (new cljs.core.async.t38681(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38682__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t38681 = ((function (mults,ensure_mult){
return (function __GT_t38681(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38682){return (new cljs.core.async.t38681(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38682));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t38681(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__29288__auto___38805 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_38757){var state_val_38758 = (state_38757[1]);if((state_val_38758 === 7))
{var inst_38753 = (state_38757[2]);var state_38757__$1 = state_38757;var statearr_38759_38806 = state_38757__$1;(statearr_38759_38806[2] = inst_38753);
(statearr_38759_38806[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 20))
{var state_38757__$1 = state_38757;var statearr_38760_38807 = state_38757__$1;(statearr_38760_38807[2] = null);
(statearr_38760_38807[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 1))
{var state_38757__$1 = state_38757;var statearr_38761_38808 = state_38757__$1;(statearr_38761_38808[2] = null);
(statearr_38761_38808[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 24))
{var inst_38736 = (state_38757[7]);var inst_38686 = (state_38757[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38757,23,Object,null,22);var inst_38743 = cljs.core.async.muxch_STAR_.call(null,inst_38736);var state_38757__$1 = state_38757;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38757__$1,25,inst_38743,inst_38686);
} else
{if((state_val_38758 === 4))
{var inst_38686 = (state_38757[8]);var inst_38686__$1 = (state_38757[2]);var inst_38687 = (inst_38686__$1 == null);var state_38757__$1 = (function (){var statearr_38762 = state_38757;(statearr_38762[8] = inst_38686__$1);
return statearr_38762;
})();if(cljs.core.truth_(inst_38687))
{var statearr_38763_38809 = state_38757__$1;(statearr_38763_38809[1] = 5);
} else
{var statearr_38764_38810 = state_38757__$1;(statearr_38764_38810[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 15))
{var inst_38728 = (state_38757[2]);var state_38757__$1 = state_38757;var statearr_38765_38811 = state_38757__$1;(statearr_38765_38811[2] = inst_38728);
(statearr_38765_38811[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 21))
{var inst_38750 = (state_38757[2]);var state_38757__$1 = (function (){var statearr_38766 = state_38757;(statearr_38766[9] = inst_38750);
return statearr_38766;
})();var statearr_38767_38812 = state_38757__$1;(statearr_38767_38812[2] = null);
(statearr_38767_38812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 13))
{var inst_38710 = (state_38757[10]);var inst_38712 = cljs.core.chunked_seq_QMARK_.call(null,inst_38710);var state_38757__$1 = state_38757;if(inst_38712)
{var statearr_38768_38813 = state_38757__$1;(statearr_38768_38813[1] = 16);
} else
{var statearr_38769_38814 = state_38757__$1;(statearr_38769_38814[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 22))
{var inst_38747 = (state_38757[2]);var state_38757__$1 = state_38757;var statearr_38770_38815 = state_38757__$1;(statearr_38770_38815[2] = inst_38747);
(statearr_38770_38815[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 6))
{var inst_38736 = (state_38757[7]);var inst_38734 = (state_38757[11]);var inst_38686 = (state_38757[8]);var inst_38734__$1 = topic_fn.call(null,inst_38686);var inst_38735 = cljs.core.deref.call(null,mults);var inst_38736__$1 = cljs.core.get.call(null,inst_38735,inst_38734__$1);var state_38757__$1 = (function (){var statearr_38771 = state_38757;(statearr_38771[7] = inst_38736__$1);
(statearr_38771[11] = inst_38734__$1);
return statearr_38771;
})();if(cljs.core.truth_(inst_38736__$1))
{var statearr_38772_38816 = state_38757__$1;(statearr_38772_38816[1] = 19);
} else
{var statearr_38773_38817 = state_38757__$1;(statearr_38773_38817[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 25))
{var inst_38745 = (state_38757[2]);var state_38757__$1 = state_38757;var statearr_38774_38818 = state_38757__$1;(statearr_38774_38818[2] = inst_38745);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38757__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 17))
{var inst_38710 = (state_38757[10]);var inst_38719 = cljs.core.first.call(null,inst_38710);var inst_38720 = cljs.core.async.muxch_STAR_.call(null,inst_38719);var inst_38721 = cljs.core.async.close_BANG_.call(null,inst_38720);var inst_38722 = cljs.core.next.call(null,inst_38710);var inst_38696 = inst_38722;var inst_38697 = null;var inst_38698 = 0;var inst_38699 = 0;var state_38757__$1 = (function (){var statearr_38775 = state_38757;(statearr_38775[12] = inst_38699);
(statearr_38775[13] = inst_38721);
(statearr_38775[14] = inst_38698);
(statearr_38775[15] = inst_38696);
(statearr_38775[16] = inst_38697);
return statearr_38775;
})();var statearr_38776_38819 = state_38757__$1;(statearr_38776_38819[2] = null);
(statearr_38776_38819[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 3))
{var inst_38755 = (state_38757[2]);var state_38757__$1 = state_38757;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38757__$1,inst_38755);
} else
{if((state_val_38758 === 12))
{var inst_38730 = (state_38757[2]);var state_38757__$1 = state_38757;var statearr_38777_38820 = state_38757__$1;(statearr_38777_38820[2] = inst_38730);
(statearr_38777_38820[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 2))
{var state_38757__$1 = state_38757;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38757__$1,4,ch);
} else
{if((state_val_38758 === 23))
{var inst_38734 = (state_38757[11]);var inst_38738 = (state_38757[2]);var inst_38739 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38734);var state_38757__$1 = (function (){var statearr_38778 = state_38757;(statearr_38778[17] = inst_38738);
return statearr_38778;
})();var statearr_38779_38821 = state_38757__$1;(statearr_38779_38821[2] = inst_38739);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38757__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 19))
{var state_38757__$1 = state_38757;var statearr_38780_38822 = state_38757__$1;(statearr_38780_38822[2] = null);
(statearr_38780_38822[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 11))
{var inst_38710 = (state_38757[10]);var inst_38696 = (state_38757[15]);var inst_38710__$1 = cljs.core.seq.call(null,inst_38696);var state_38757__$1 = (function (){var statearr_38781 = state_38757;(statearr_38781[10] = inst_38710__$1);
return statearr_38781;
})();if(inst_38710__$1)
{var statearr_38782_38823 = state_38757__$1;(statearr_38782_38823[1] = 13);
} else
{var statearr_38783_38824 = state_38757__$1;(statearr_38783_38824[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 9))
{var inst_38732 = (state_38757[2]);var state_38757__$1 = state_38757;var statearr_38784_38825 = state_38757__$1;(statearr_38784_38825[2] = inst_38732);
(statearr_38784_38825[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 5))
{var inst_38693 = cljs.core.deref.call(null,mults);var inst_38694 = cljs.core.vals.call(null,inst_38693);var inst_38695 = cljs.core.seq.call(null,inst_38694);var inst_38696 = inst_38695;var inst_38697 = null;var inst_38698 = 0;var inst_38699 = 0;var state_38757__$1 = (function (){var statearr_38785 = state_38757;(statearr_38785[12] = inst_38699);
(statearr_38785[14] = inst_38698);
(statearr_38785[15] = inst_38696);
(statearr_38785[16] = inst_38697);
return statearr_38785;
})();var statearr_38786_38826 = state_38757__$1;(statearr_38786_38826[2] = null);
(statearr_38786_38826[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 14))
{var state_38757__$1 = state_38757;var statearr_38790_38827 = state_38757__$1;(statearr_38790_38827[2] = null);
(statearr_38790_38827[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 16))
{var inst_38710 = (state_38757[10]);var inst_38714 = cljs.core.chunk_first.call(null,inst_38710);var inst_38715 = cljs.core.chunk_rest.call(null,inst_38710);var inst_38716 = cljs.core.count.call(null,inst_38714);var inst_38696 = inst_38715;var inst_38697 = inst_38714;var inst_38698 = inst_38716;var inst_38699 = 0;var state_38757__$1 = (function (){var statearr_38791 = state_38757;(statearr_38791[12] = inst_38699);
(statearr_38791[14] = inst_38698);
(statearr_38791[15] = inst_38696);
(statearr_38791[16] = inst_38697);
return statearr_38791;
})();var statearr_38792_38828 = state_38757__$1;(statearr_38792_38828[2] = null);
(statearr_38792_38828[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 10))
{var inst_38699 = (state_38757[12]);var inst_38698 = (state_38757[14]);var inst_38696 = (state_38757[15]);var inst_38697 = (state_38757[16]);var inst_38704 = cljs.core._nth.call(null,inst_38697,inst_38699);var inst_38705 = cljs.core.async.muxch_STAR_.call(null,inst_38704);var inst_38706 = cljs.core.async.close_BANG_.call(null,inst_38705);var inst_38707 = (inst_38699 + 1);var tmp38787 = inst_38698;var tmp38788 = inst_38696;var tmp38789 = inst_38697;var inst_38696__$1 = tmp38788;var inst_38697__$1 = tmp38789;var inst_38698__$1 = tmp38787;var inst_38699__$1 = inst_38707;var state_38757__$1 = (function (){var statearr_38793 = state_38757;(statearr_38793[18] = inst_38706);
(statearr_38793[12] = inst_38699__$1);
(statearr_38793[14] = inst_38698__$1);
(statearr_38793[15] = inst_38696__$1);
(statearr_38793[16] = inst_38697__$1);
return statearr_38793;
})();var statearr_38794_38829 = state_38757__$1;(statearr_38794_38829[2] = null);
(statearr_38794_38829[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 18))
{var inst_38725 = (state_38757[2]);var state_38757__$1 = state_38757;var statearr_38795_38830 = state_38757__$1;(statearr_38795_38830[2] = inst_38725);
(statearr_38795_38830[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38758 === 8))
{var inst_38699 = (state_38757[12]);var inst_38698 = (state_38757[14]);var inst_38701 = (inst_38699 < inst_38698);var inst_38702 = inst_38701;var state_38757__$1 = state_38757;if(cljs.core.truth_(inst_38702))
{var statearr_38796_38831 = state_38757__$1;(statearr_38796_38831[1] = 10);
} else
{var statearr_38797_38832 = state_38757__$1;(statearr_38797_38832[1] = 11);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_38801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38801[0] = state_machine__29225__auto__);
(statearr_38801[1] = 1);
return statearr_38801;
});
var state_machine__29225__auto____1 = (function (state_38757){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_38757);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e38802){if((e38802 instanceof Object))
{var ex__29228__auto__ = e38802;var statearr_38803_38833 = state_38757;(statearr_38803_38833[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38757);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38834 = state_38757;
state_38757 = G__38834;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_38757){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_38757);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_38804 = f__29289__auto__.call(null);(statearr_38804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___38805);
return statearr_38804;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
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
,cljs.core.range.call(null,cnt));var c__29288__auto___38971 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_38941){var state_val_38942 = (state_38941[1]);if((state_val_38942 === 7))
{var state_38941__$1 = state_38941;var statearr_38943_38972 = state_38941__$1;(statearr_38943_38972[2] = null);
(statearr_38943_38972[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38942 === 1))
{var state_38941__$1 = state_38941;var statearr_38944_38973 = state_38941__$1;(statearr_38944_38973[2] = null);
(statearr_38944_38973[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38942 === 4))
{var inst_38905 = (state_38941[7]);var inst_38907 = (inst_38905 < cnt);var state_38941__$1 = state_38941;if(cljs.core.truth_(inst_38907))
{var statearr_38945_38974 = state_38941__$1;(statearr_38945_38974[1] = 6);
} else
{var statearr_38946_38975 = state_38941__$1;(statearr_38946_38975[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38942 === 15))
{var inst_38937 = (state_38941[2]);var state_38941__$1 = state_38941;var statearr_38947_38976 = state_38941__$1;(statearr_38947_38976[2] = inst_38937);
(statearr_38947_38976[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38942 === 13))
{var inst_38930 = cljs.core.async.close_BANG_.call(null,out);var state_38941__$1 = state_38941;var statearr_38948_38977 = state_38941__$1;(statearr_38948_38977[2] = inst_38930);
(statearr_38948_38977[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38942 === 6))
{var state_38941__$1 = state_38941;var statearr_38949_38978 = state_38941__$1;(statearr_38949_38978[2] = null);
(statearr_38949_38978[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38942 === 3))
{var inst_38939 = (state_38941[2]);var state_38941__$1 = state_38941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38941__$1,inst_38939);
} else
{if((state_val_38942 === 12))
{var inst_38927 = (state_38941[8]);var inst_38927__$1 = (state_38941[2]);var inst_38928 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38927__$1);var state_38941__$1 = (function (){var statearr_38950 = state_38941;(statearr_38950[8] = inst_38927__$1);
return statearr_38950;
})();if(cljs.core.truth_(inst_38928))
{var statearr_38951_38979 = state_38941__$1;(statearr_38951_38979[1] = 13);
} else
{var statearr_38952_38980 = state_38941__$1;(statearr_38952_38980[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38942 === 2))
{var inst_38904 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_38905 = 0;var state_38941__$1 = (function (){var statearr_38953 = state_38941;(statearr_38953[9] = inst_38904);
(statearr_38953[7] = inst_38905);
return statearr_38953;
})();var statearr_38954_38981 = state_38941__$1;(statearr_38954_38981[2] = null);
(statearr_38954_38981[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38942 === 11))
{var inst_38905 = (state_38941[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38941,10,Object,null,9);var inst_38914 = chs__$1.call(null,inst_38905);var inst_38915 = done.call(null,inst_38905);var inst_38916 = cljs.core.async.take_BANG_.call(null,inst_38914,inst_38915);var state_38941__$1 = state_38941;var statearr_38955_38982 = state_38941__$1;(statearr_38955_38982[2] = inst_38916);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38941__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38942 === 9))
{var inst_38905 = (state_38941[7]);var inst_38918 = (state_38941[2]);var inst_38919 = (inst_38905 + 1);var inst_38905__$1 = inst_38919;var state_38941__$1 = (function (){var statearr_38956 = state_38941;(statearr_38956[10] = inst_38918);
(statearr_38956[7] = inst_38905__$1);
return statearr_38956;
})();var statearr_38957_38983 = state_38941__$1;(statearr_38957_38983[2] = null);
(statearr_38957_38983[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38942 === 5))
{var inst_38925 = (state_38941[2]);var state_38941__$1 = (function (){var statearr_38958 = state_38941;(statearr_38958[11] = inst_38925);
return statearr_38958;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38941__$1,12,dchan);
} else
{if((state_val_38942 === 14))
{var inst_38927 = (state_38941[8]);var inst_38932 = cljs.core.apply.call(null,f,inst_38927);var state_38941__$1 = state_38941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38941__$1,16,out,inst_38932);
} else
{if((state_val_38942 === 16))
{var inst_38934 = (state_38941[2]);var state_38941__$1 = (function (){var statearr_38959 = state_38941;(statearr_38959[12] = inst_38934);
return statearr_38959;
})();var statearr_38960_38984 = state_38941__$1;(statearr_38960_38984[2] = null);
(statearr_38960_38984[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38942 === 10))
{var inst_38909 = (state_38941[2]);var inst_38910 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_38941__$1 = (function (){var statearr_38961 = state_38941;(statearr_38961[13] = inst_38909);
return statearr_38961;
})();var statearr_38962_38985 = state_38941__$1;(statearr_38962_38985[2] = inst_38910);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38941__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38942 === 8))
{var inst_38923 = (state_38941[2]);var state_38941__$1 = state_38941;var statearr_38963_38986 = state_38941__$1;(statearr_38963_38986[2] = inst_38923);
(statearr_38963_38986[1] = 5);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_38967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38967[0] = state_machine__29225__auto__);
(statearr_38967[1] = 1);
return statearr_38967;
});
var state_machine__29225__auto____1 = (function (state_38941){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_38941);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e38968){if((e38968 instanceof Object))
{var ex__29228__auto__ = e38968;var statearr_38969_38987 = state_38941;(statearr_38969_38987[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38988 = state_38941;
state_38941 = G__38988;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_38941){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_38941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_38970 = f__29289__auto__.call(null);(statearr_38970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___38971);
return statearr_38970;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__29288__auto___39096 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_39072){var state_val_39073 = (state_39072[1]);if((state_val_39073 === 7))
{var inst_39051 = (state_39072[7]);var inst_39052 = (state_39072[8]);var inst_39051__$1 = (state_39072[2]);var inst_39052__$1 = cljs.core.nth.call(null,inst_39051__$1,0,null);var inst_39053 = cljs.core.nth.call(null,inst_39051__$1,1,null);var inst_39054 = (inst_39052__$1 == null);var state_39072__$1 = (function (){var statearr_39074 = state_39072;(statearr_39074[9] = inst_39053);
(statearr_39074[7] = inst_39051__$1);
(statearr_39074[8] = inst_39052__$1);
return statearr_39074;
})();if(cljs.core.truth_(inst_39054))
{var statearr_39075_39097 = state_39072__$1;(statearr_39075_39097[1] = 8);
} else
{var statearr_39076_39098 = state_39072__$1;(statearr_39076_39098[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39073 === 1))
{var inst_39043 = cljs.core.vec.call(null,chs);var inst_39044 = inst_39043;var state_39072__$1 = (function (){var statearr_39077 = state_39072;(statearr_39077[10] = inst_39044);
return statearr_39077;
})();var statearr_39078_39099 = state_39072__$1;(statearr_39078_39099[2] = null);
(statearr_39078_39099[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39073 === 4))
{var inst_39044 = (state_39072[10]);var state_39072__$1 = state_39072;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_39072__$1,7,inst_39044);
} else
{if((state_val_39073 === 6))
{var inst_39068 = (state_39072[2]);var state_39072__$1 = state_39072;var statearr_39079_39100 = state_39072__$1;(statearr_39079_39100[2] = inst_39068);
(statearr_39079_39100[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39073 === 3))
{var inst_39070 = (state_39072[2]);var state_39072__$1 = state_39072;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39072__$1,inst_39070);
} else
{if((state_val_39073 === 2))
{var inst_39044 = (state_39072[10]);var inst_39046 = cljs.core.count.call(null,inst_39044);var inst_39047 = (inst_39046 > 0);var state_39072__$1 = state_39072;if(cljs.core.truth_(inst_39047))
{var statearr_39081_39101 = state_39072__$1;(statearr_39081_39101[1] = 4);
} else
{var statearr_39082_39102 = state_39072__$1;(statearr_39082_39102[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39073 === 11))
{var inst_39044 = (state_39072[10]);var inst_39061 = (state_39072[2]);var tmp39080 = inst_39044;var inst_39044__$1 = tmp39080;var state_39072__$1 = (function (){var statearr_39083 = state_39072;(statearr_39083[11] = inst_39061);
(statearr_39083[10] = inst_39044__$1);
return statearr_39083;
})();var statearr_39084_39103 = state_39072__$1;(statearr_39084_39103[2] = null);
(statearr_39084_39103[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39073 === 9))
{var inst_39052 = (state_39072[8]);var state_39072__$1 = state_39072;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39072__$1,11,out,inst_39052);
} else
{if((state_val_39073 === 5))
{var inst_39066 = cljs.core.async.close_BANG_.call(null,out);var state_39072__$1 = state_39072;var statearr_39085_39104 = state_39072__$1;(statearr_39085_39104[2] = inst_39066);
(statearr_39085_39104[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39073 === 10))
{var inst_39064 = (state_39072[2]);var state_39072__$1 = state_39072;var statearr_39086_39105 = state_39072__$1;(statearr_39086_39105[2] = inst_39064);
(statearr_39086_39105[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39073 === 8))
{var inst_39053 = (state_39072[9]);var inst_39044 = (state_39072[10]);var inst_39051 = (state_39072[7]);var inst_39052 = (state_39072[8]);var inst_39056 = (function (){var c = inst_39053;var v = inst_39052;var vec__39049 = inst_39051;var cs = inst_39044;return ((function (c,v,vec__39049,cs,inst_39053,inst_39044,inst_39051,inst_39052,state_val_39073){
return (function (p1__38989_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__38989_SHARP_);
});
;})(c,v,vec__39049,cs,inst_39053,inst_39044,inst_39051,inst_39052,state_val_39073))
})();var inst_39057 = cljs.core.filterv.call(null,inst_39056,inst_39044);var inst_39044__$1 = inst_39057;var state_39072__$1 = (function (){var statearr_39087 = state_39072;(statearr_39087[10] = inst_39044__$1);
return statearr_39087;
})();var statearr_39088_39106 = state_39072__$1;(statearr_39088_39106[2] = null);
(statearr_39088_39106[1] = 2);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_39092 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39092[0] = state_machine__29225__auto__);
(statearr_39092[1] = 1);
return statearr_39092;
});
var state_machine__29225__auto____1 = (function (state_39072){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_39072);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e39093){if((e39093 instanceof Object))
{var ex__29228__auto__ = e39093;var statearr_39094_39107 = state_39072;(statearr_39094_39107[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39072);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39093;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39108 = state_39072;
state_39072 = G__39108;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_39072){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_39072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_39095 = f__29289__auto__.call(null);(statearr_39095[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___39096);
return statearr_39095;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__29288__auto___39201 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_39178){var state_val_39179 = (state_39178[1]);if((state_val_39179 === 7))
{var inst_39160 = (state_39178[7]);var inst_39160__$1 = (state_39178[2]);var inst_39161 = (inst_39160__$1 == null);var inst_39162 = cljs.core.not.call(null,inst_39161);var state_39178__$1 = (function (){var statearr_39180 = state_39178;(statearr_39180[7] = inst_39160__$1);
return statearr_39180;
})();if(inst_39162)
{var statearr_39181_39202 = state_39178__$1;(statearr_39181_39202[1] = 8);
} else
{var statearr_39182_39203 = state_39178__$1;(statearr_39182_39203[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39179 === 1))
{var inst_39155 = 0;var state_39178__$1 = (function (){var statearr_39183 = state_39178;(statearr_39183[8] = inst_39155);
return statearr_39183;
})();var statearr_39184_39204 = state_39178__$1;(statearr_39184_39204[2] = null);
(statearr_39184_39204[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39179 === 4))
{var state_39178__$1 = state_39178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39178__$1,7,ch);
} else
{if((state_val_39179 === 6))
{var inst_39173 = (state_39178[2]);var state_39178__$1 = state_39178;var statearr_39185_39205 = state_39178__$1;(statearr_39185_39205[2] = inst_39173);
(statearr_39185_39205[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39179 === 3))
{var inst_39175 = (state_39178[2]);var inst_39176 = cljs.core.async.close_BANG_.call(null,out);var state_39178__$1 = (function (){var statearr_39186 = state_39178;(statearr_39186[9] = inst_39175);
return statearr_39186;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39178__$1,inst_39176);
} else
{if((state_val_39179 === 2))
{var inst_39155 = (state_39178[8]);var inst_39157 = (inst_39155 < n);var state_39178__$1 = state_39178;if(cljs.core.truth_(inst_39157))
{var statearr_39187_39206 = state_39178__$1;(statearr_39187_39206[1] = 4);
} else
{var statearr_39188_39207 = state_39178__$1;(statearr_39188_39207[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39179 === 11))
{var inst_39155 = (state_39178[8]);var inst_39165 = (state_39178[2]);var inst_39166 = (inst_39155 + 1);var inst_39155__$1 = inst_39166;var state_39178__$1 = (function (){var statearr_39189 = state_39178;(statearr_39189[10] = inst_39165);
(statearr_39189[8] = inst_39155__$1);
return statearr_39189;
})();var statearr_39190_39208 = state_39178__$1;(statearr_39190_39208[2] = null);
(statearr_39190_39208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39179 === 9))
{var state_39178__$1 = state_39178;var statearr_39191_39209 = state_39178__$1;(statearr_39191_39209[2] = null);
(statearr_39191_39209[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39179 === 5))
{var state_39178__$1 = state_39178;var statearr_39192_39210 = state_39178__$1;(statearr_39192_39210[2] = null);
(statearr_39192_39210[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39179 === 10))
{var inst_39170 = (state_39178[2]);var state_39178__$1 = state_39178;var statearr_39193_39211 = state_39178__$1;(statearr_39193_39211[2] = inst_39170);
(statearr_39193_39211[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39179 === 8))
{var inst_39160 = (state_39178[7]);var state_39178__$1 = state_39178;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39178__$1,11,out,inst_39160);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_39197 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_39197[0] = state_machine__29225__auto__);
(statearr_39197[1] = 1);
return statearr_39197;
});
var state_machine__29225__auto____1 = (function (state_39178){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_39178);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e39198){if((e39198 instanceof Object))
{var ex__29228__auto__ = e39198;var statearr_39199_39212 = state_39178;(statearr_39199_39212[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39178);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39213 = state_39178;
state_39178 = G__39213;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_39178){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_39178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_39200 = f__29289__auto__.call(null);(statearr_39200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___39201);
return statearr_39200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__29288__auto___39310 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_39285){var state_val_39286 = (state_39285[1]);if((state_val_39286 === 7))
{var inst_39280 = (state_39285[2]);var state_39285__$1 = state_39285;var statearr_39287_39311 = state_39285__$1;(statearr_39287_39311[2] = inst_39280);
(statearr_39287_39311[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39286 === 1))
{var inst_39262 = null;var state_39285__$1 = (function (){var statearr_39288 = state_39285;(statearr_39288[7] = inst_39262);
return statearr_39288;
})();var statearr_39289_39312 = state_39285__$1;(statearr_39289_39312[2] = null);
(statearr_39289_39312[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39286 === 4))
{var inst_39265 = (state_39285[8]);var inst_39265__$1 = (state_39285[2]);var inst_39266 = (inst_39265__$1 == null);var inst_39267 = cljs.core.not.call(null,inst_39266);var state_39285__$1 = (function (){var statearr_39290 = state_39285;(statearr_39290[8] = inst_39265__$1);
return statearr_39290;
})();if(inst_39267)
{var statearr_39291_39313 = state_39285__$1;(statearr_39291_39313[1] = 5);
} else
{var statearr_39292_39314 = state_39285__$1;(statearr_39292_39314[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39286 === 6))
{var state_39285__$1 = state_39285;var statearr_39293_39315 = state_39285__$1;(statearr_39293_39315[2] = null);
(statearr_39293_39315[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39286 === 3))
{var inst_39282 = (state_39285[2]);var inst_39283 = cljs.core.async.close_BANG_.call(null,out);var state_39285__$1 = (function (){var statearr_39294 = state_39285;(statearr_39294[9] = inst_39282);
return statearr_39294;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39285__$1,inst_39283);
} else
{if((state_val_39286 === 2))
{var state_39285__$1 = state_39285;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39285__$1,4,ch);
} else
{if((state_val_39286 === 11))
{var inst_39265 = (state_39285[8]);var inst_39274 = (state_39285[2]);var inst_39262 = inst_39265;var state_39285__$1 = (function (){var statearr_39295 = state_39285;(statearr_39295[10] = inst_39274);
(statearr_39295[7] = inst_39262);
return statearr_39295;
})();var statearr_39296_39316 = state_39285__$1;(statearr_39296_39316[2] = null);
(statearr_39296_39316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39286 === 9))
{var inst_39265 = (state_39285[8]);var state_39285__$1 = state_39285;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39285__$1,11,out,inst_39265);
} else
{if((state_val_39286 === 5))
{var inst_39265 = (state_39285[8]);var inst_39262 = (state_39285[7]);var inst_39269 = cljs.core._EQ_.call(null,inst_39265,inst_39262);var state_39285__$1 = state_39285;if(inst_39269)
{var statearr_39298_39317 = state_39285__$1;(statearr_39298_39317[1] = 8);
} else
{var statearr_39299_39318 = state_39285__$1;(statearr_39299_39318[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39286 === 10))
{var inst_39277 = (state_39285[2]);var state_39285__$1 = state_39285;var statearr_39300_39319 = state_39285__$1;(statearr_39300_39319[2] = inst_39277);
(statearr_39300_39319[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39286 === 8))
{var inst_39262 = (state_39285[7]);var tmp39297 = inst_39262;var inst_39262__$1 = tmp39297;var state_39285__$1 = (function (){var statearr_39301 = state_39285;(statearr_39301[7] = inst_39262__$1);
return statearr_39301;
})();var statearr_39302_39320 = state_39285__$1;(statearr_39302_39320[2] = null);
(statearr_39302_39320[1] = 2);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_39306 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_39306[0] = state_machine__29225__auto__);
(statearr_39306[1] = 1);
return statearr_39306;
});
var state_machine__29225__auto____1 = (function (state_39285){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_39285);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e39307){if((e39307 instanceof Object))
{var ex__29228__auto__ = e39307;var statearr_39308_39321 = state_39285;(statearr_39308_39321[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39285);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39322 = state_39285;
state_39285 = G__39322;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_39285){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_39285);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_39309 = f__29289__auto__.call(null);(statearr_39309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___39310);
return statearr_39309;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__29288__auto___39457 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_39427){var state_val_39428 = (state_39427[1]);if((state_val_39428 === 7))
{var inst_39423 = (state_39427[2]);var state_39427__$1 = state_39427;var statearr_39429_39458 = state_39427__$1;(statearr_39429_39458[2] = inst_39423);
(statearr_39429_39458[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39428 === 1))
{var inst_39390 = (new Array(n));var inst_39391 = inst_39390;var inst_39392 = 0;var state_39427__$1 = (function (){var statearr_39430 = state_39427;(statearr_39430[7] = inst_39392);
(statearr_39430[8] = inst_39391);
return statearr_39430;
})();var statearr_39431_39459 = state_39427__$1;(statearr_39431_39459[2] = null);
(statearr_39431_39459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39428 === 4))
{var inst_39395 = (state_39427[9]);var inst_39395__$1 = (state_39427[2]);var inst_39396 = (inst_39395__$1 == null);var inst_39397 = cljs.core.not.call(null,inst_39396);var state_39427__$1 = (function (){var statearr_39432 = state_39427;(statearr_39432[9] = inst_39395__$1);
return statearr_39432;
})();if(inst_39397)
{var statearr_39433_39460 = state_39427__$1;(statearr_39433_39460[1] = 5);
} else
{var statearr_39434_39461 = state_39427__$1;(statearr_39434_39461[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39428 === 15))
{var inst_39417 = (state_39427[2]);var state_39427__$1 = state_39427;var statearr_39435_39462 = state_39427__$1;(statearr_39435_39462[2] = inst_39417);
(statearr_39435_39462[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39428 === 13))
{var state_39427__$1 = state_39427;var statearr_39436_39463 = state_39427__$1;(statearr_39436_39463[2] = null);
(statearr_39436_39463[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39428 === 6))
{var inst_39392 = (state_39427[7]);var inst_39413 = (inst_39392 > 0);var state_39427__$1 = state_39427;if(cljs.core.truth_(inst_39413))
{var statearr_39437_39464 = state_39427__$1;(statearr_39437_39464[1] = 12);
} else
{var statearr_39438_39465 = state_39427__$1;(statearr_39438_39465[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39428 === 3))
{var inst_39425 = (state_39427[2]);var state_39427__$1 = state_39427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39427__$1,inst_39425);
} else
{if((state_val_39428 === 12))
{var inst_39391 = (state_39427[8]);var inst_39415 = cljs.core.vec.call(null,inst_39391);var state_39427__$1 = state_39427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39427__$1,15,out,inst_39415);
} else
{if((state_val_39428 === 2))
{var state_39427__$1 = state_39427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39427__$1,4,ch);
} else
{if((state_val_39428 === 11))
{var inst_39407 = (state_39427[2]);var inst_39408 = (new Array(n));var inst_39391 = inst_39408;var inst_39392 = 0;var state_39427__$1 = (function (){var statearr_39439 = state_39427;(statearr_39439[10] = inst_39407);
(statearr_39439[7] = inst_39392);
(statearr_39439[8] = inst_39391);
return statearr_39439;
})();var statearr_39440_39466 = state_39427__$1;(statearr_39440_39466[2] = null);
(statearr_39440_39466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39428 === 9))
{var inst_39391 = (state_39427[8]);var inst_39405 = cljs.core.vec.call(null,inst_39391);var state_39427__$1 = state_39427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39427__$1,11,out,inst_39405);
} else
{if((state_val_39428 === 5))
{var inst_39400 = (state_39427[11]);var inst_39392 = (state_39427[7]);var inst_39395 = (state_39427[9]);var inst_39391 = (state_39427[8]);var inst_39399 = (inst_39391[inst_39392] = inst_39395);var inst_39400__$1 = (inst_39392 + 1);var inst_39401 = (inst_39400__$1 < n);var state_39427__$1 = (function (){var statearr_39441 = state_39427;(statearr_39441[11] = inst_39400__$1);
(statearr_39441[12] = inst_39399);
return statearr_39441;
})();if(cljs.core.truth_(inst_39401))
{var statearr_39442_39467 = state_39427__$1;(statearr_39442_39467[1] = 8);
} else
{var statearr_39443_39468 = state_39427__$1;(statearr_39443_39468[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39428 === 14))
{var inst_39420 = (state_39427[2]);var inst_39421 = cljs.core.async.close_BANG_.call(null,out);var state_39427__$1 = (function (){var statearr_39445 = state_39427;(statearr_39445[13] = inst_39420);
return statearr_39445;
})();var statearr_39446_39469 = state_39427__$1;(statearr_39446_39469[2] = inst_39421);
(statearr_39446_39469[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39428 === 10))
{var inst_39411 = (state_39427[2]);var state_39427__$1 = state_39427;var statearr_39447_39470 = state_39427__$1;(statearr_39447_39470[2] = inst_39411);
(statearr_39447_39470[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39428 === 8))
{var inst_39400 = (state_39427[11]);var inst_39391 = (state_39427[8]);var tmp39444 = inst_39391;var inst_39391__$1 = tmp39444;var inst_39392 = inst_39400;var state_39427__$1 = (function (){var statearr_39448 = state_39427;(statearr_39448[7] = inst_39392);
(statearr_39448[8] = inst_39391__$1);
return statearr_39448;
})();var statearr_39449_39471 = state_39427__$1;(statearr_39449_39471[2] = null);
(statearr_39449_39471[1] = 2);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_39453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39453[0] = state_machine__29225__auto__);
(statearr_39453[1] = 1);
return statearr_39453;
});
var state_machine__29225__auto____1 = (function (state_39427){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_39427);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e39454){if((e39454 instanceof Object))
{var ex__29228__auto__ = e39454;var statearr_39455_39472 = state_39427;(statearr_39455_39472[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39454;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39473 = state_39427;
state_39427 = G__39473;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_39427){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_39427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_39456 = f__29289__auto__.call(null);(statearr_39456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___39457);
return statearr_39456;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__29288__auto___39616 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__29289__auto__ = (function (){var switch__29224__auto__ = (function (state_39586){var state_val_39587 = (state_39586[1]);if((state_val_39587 === 7))
{var inst_39582 = (state_39586[2]);var state_39586__$1 = state_39586;var statearr_39588_39617 = state_39586__$1;(statearr_39588_39617[2] = inst_39582);
(statearr_39588_39617[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39587 === 1))
{var inst_39545 = [];var inst_39546 = inst_39545;var inst_39547 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_39586__$1 = (function (){var statearr_39589 = state_39586;(statearr_39589[7] = inst_39547);
(statearr_39589[8] = inst_39546);
return statearr_39589;
})();var statearr_39590_39618 = state_39586__$1;(statearr_39590_39618[2] = null);
(statearr_39590_39618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39587 === 4))
{var inst_39550 = (state_39586[9]);var inst_39550__$1 = (state_39586[2]);var inst_39551 = (inst_39550__$1 == null);var inst_39552 = cljs.core.not.call(null,inst_39551);var state_39586__$1 = (function (){var statearr_39591 = state_39586;(statearr_39591[9] = inst_39550__$1);
return statearr_39591;
})();if(inst_39552)
{var statearr_39592_39619 = state_39586__$1;(statearr_39592_39619[1] = 5);
} else
{var statearr_39593_39620 = state_39586__$1;(statearr_39593_39620[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39587 === 15))
{var inst_39576 = (state_39586[2]);var state_39586__$1 = state_39586;var statearr_39594_39621 = state_39586__$1;(statearr_39594_39621[2] = inst_39576);
(statearr_39594_39621[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39587 === 13))
{var state_39586__$1 = state_39586;var statearr_39595_39622 = state_39586__$1;(statearr_39595_39622[2] = null);
(statearr_39595_39622[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39587 === 6))
{var inst_39546 = (state_39586[8]);var inst_39571 = inst_39546.length;var inst_39572 = (inst_39571 > 0);var state_39586__$1 = state_39586;if(cljs.core.truth_(inst_39572))
{var statearr_39596_39623 = state_39586__$1;(statearr_39596_39623[1] = 12);
} else
{var statearr_39597_39624 = state_39586__$1;(statearr_39597_39624[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39587 === 3))
{var inst_39584 = (state_39586[2]);var state_39586__$1 = state_39586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39586__$1,inst_39584);
} else
{if((state_val_39587 === 12))
{var inst_39546 = (state_39586[8]);var inst_39574 = cljs.core.vec.call(null,inst_39546);var state_39586__$1 = state_39586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39586__$1,15,out,inst_39574);
} else
{if((state_val_39587 === 2))
{var state_39586__$1 = state_39586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39586__$1,4,ch);
} else
{if((state_val_39587 === 11))
{var inst_39550 = (state_39586[9]);var inst_39554 = (state_39586[10]);var inst_39564 = (state_39586[2]);var inst_39565 = [];var inst_39566 = inst_39565.push(inst_39550);var inst_39546 = inst_39565;var inst_39547 = inst_39554;var state_39586__$1 = (function (){var statearr_39598 = state_39586;(statearr_39598[7] = inst_39547);
(statearr_39598[11] = inst_39566);
(statearr_39598[8] = inst_39546);
(statearr_39598[12] = inst_39564);
return statearr_39598;
})();var statearr_39599_39625 = state_39586__$1;(statearr_39599_39625[2] = null);
(statearr_39599_39625[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39587 === 9))
{var inst_39546 = (state_39586[8]);var inst_39562 = cljs.core.vec.call(null,inst_39546);var state_39586__$1 = state_39586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39586__$1,11,out,inst_39562);
} else
{if((state_val_39587 === 5))
{var inst_39550 = (state_39586[9]);var inst_39547 = (state_39586[7]);var inst_39554 = (state_39586[10]);var inst_39554__$1 = f.call(null,inst_39550);var inst_39555 = cljs.core._EQ_.call(null,inst_39554__$1,inst_39547);var inst_39556 = cljs.core.keyword_identical_QMARK_.call(null,inst_39547,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_39557 = (inst_39555) || (inst_39556);var state_39586__$1 = (function (){var statearr_39600 = state_39586;(statearr_39600[10] = inst_39554__$1);
return statearr_39600;
})();if(cljs.core.truth_(inst_39557))
{var statearr_39601_39626 = state_39586__$1;(statearr_39601_39626[1] = 8);
} else
{var statearr_39602_39627 = state_39586__$1;(statearr_39602_39627[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39587 === 14))
{var inst_39579 = (state_39586[2]);var inst_39580 = cljs.core.async.close_BANG_.call(null,out);var state_39586__$1 = (function (){var statearr_39604 = state_39586;(statearr_39604[13] = inst_39579);
return statearr_39604;
})();var statearr_39605_39628 = state_39586__$1;(statearr_39605_39628[2] = inst_39580);
(statearr_39605_39628[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39587 === 10))
{var inst_39569 = (state_39586[2]);var state_39586__$1 = state_39586;var statearr_39606_39629 = state_39586__$1;(statearr_39606_39629[2] = inst_39569);
(statearr_39606_39629[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39587 === 8))
{var inst_39550 = (state_39586[9]);var inst_39546 = (state_39586[8]);var inst_39554 = (state_39586[10]);var inst_39559 = inst_39546.push(inst_39550);var tmp39603 = inst_39546;var inst_39546__$1 = tmp39603;var inst_39547 = inst_39554;var state_39586__$1 = (function (){var statearr_39607 = state_39586;(statearr_39607[7] = inst_39547);
(statearr_39607[14] = inst_39559);
(statearr_39607[8] = inst_39546__$1);
return statearr_39607;
})();var statearr_39608_39630 = state_39586__$1;(statearr_39608_39630[2] = null);
(statearr_39608_39630[1] = 2);
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
});return ((function (switch__29224__auto__){
return (function() {
var state_machine__29225__auto__ = null;
var state_machine__29225__auto____0 = (function (){var statearr_39612 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39612[0] = state_machine__29225__auto__);
(statearr_39612[1] = 1);
return statearr_39612;
});
var state_machine__29225__auto____1 = (function (state_39586){while(true){
var ret_value__29226__auto__ = (function (){try{while(true){
var result__29227__auto__ = switch__29224__auto__.call(null,state_39586);if(cljs.core.keyword_identical_QMARK_.call(null,result__29227__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__29227__auto__;
}
break;
}
}catch (e39613){if((e39613 instanceof Object))
{var ex__29228__auto__ = e39613;var statearr_39614_39631 = state_39586;(statearr_39614_39631[5] = ex__29228__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39586);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39613;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__29226__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39632 = state_39586;
state_39586 = G__39632;
continue;
}
} else
{return ret_value__29226__auto__;
}
break;
}
});
state_machine__29225__auto__ = function(state_39586){
switch(arguments.length){
case 0:
return state_machine__29225__auto____0.call(this);
case 1:
return state_machine__29225__auto____1.call(this,state_39586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__29225__auto____0;
state_machine__29225__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__29225__auto____1;
return state_machine__29225__auto__;
})()
;})(switch__29224__auto__))
})();var state__29290__auto__ = (function (){var statearr_39615 = f__29289__auto__.call(null);(statearr_39615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__29288__auto___39616);
return statearr_39615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__29290__auto__);
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

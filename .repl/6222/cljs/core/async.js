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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t37043 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37043 = (function (f,fn_handler,meta37044){
this.f = f;
this.fn_handler = fn_handler;
this.meta37044 = meta37044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37043.cljs$lang$type = true;
cljs.core.async.t37043.cljs$lang$ctorStr = "cljs.core.async/t37043";
cljs.core.async.t37043.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37043");
});
cljs.core.async.t37043.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37043.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t37043.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t37043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37045){var self__ = this;
var _37045__$1 = this;return self__.meta37044;
});
cljs.core.async.t37043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37045,meta37044__$1){var self__ = this;
var _37045__$1 = this;return (new cljs.core.async.t37043(self__.f,self__.fn_handler,meta37044__$1));
});
cljs.core.async.__GT_t37043 = (function __GT_t37043(f__$1,fn_handler__$1,meta37044){return (new cljs.core.async.t37043(f__$1,fn_handler__$1,meta37044));
});
}
return (new cljs.core.async.t37043(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__37047 = buff;if(G__37047)
{var bit__15231__auto__ = null;if(cljs.core.truth_((function (){var or__14581__auto__ = bit__15231__auto__;if(cljs.core.truth_(or__14581__auto__))
{return or__14581__auto__;
} else
{return G__37047.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__37047.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37047);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37047);
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
{var val_37048 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_37048);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_37048);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__14569__auto__ = ret;if(cljs.core.truth_(and__14569__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__14569__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15429__auto___37049 = n;var x_37050 = 0;while(true){
if((x_37050 < n__15429__auto___37049))
{(a[x_37050] = 0);
{
var G__37051 = (x_37050 + 1);
x_37050 = G__37051;
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
var G__37052 = (i + 1);
i = G__37052;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t37056 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37056 = (function (flag,alt_flag,meta37057){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta37057 = meta37057;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37056.cljs$lang$type = true;
cljs.core.async.t37056.cljs$lang$ctorStr = "cljs.core.async/t37056";
cljs.core.async.t37056.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37056");
});
cljs.core.async.t37056.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37056.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t37056.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t37056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37058){var self__ = this;
var _37058__$1 = this;return self__.meta37057;
});
cljs.core.async.t37056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37058,meta37057__$1){var self__ = this;
var _37058__$1 = this;return (new cljs.core.async.t37056(self__.flag,self__.alt_flag,meta37057__$1));
});
cljs.core.async.__GT_t37056 = (function __GT_t37056(flag__$1,alt_flag__$1,meta37057){return (new cljs.core.async.t37056(flag__$1,alt_flag__$1,meta37057));
});
}
return (new cljs.core.async.t37056(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t37062 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37062 = (function (cb,flag,alt_handler,meta37063){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta37063 = meta37063;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37062.cljs$lang$type = true;
cljs.core.async.t37062.cljs$lang$ctorStr = "cljs.core.async/t37062";
cljs.core.async.t37062.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37062");
});
cljs.core.async.t37062.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t37062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t37062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37064){var self__ = this;
var _37064__$1 = this;return self__.meta37063;
});
cljs.core.async.t37062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37064,meta37063__$1){var self__ = this;
var _37064__$1 = this;return (new cljs.core.async.t37062(self__.cb,self__.flag,self__.alt_handler,meta37063__$1));
});
cljs.core.async.__GT_t37062 = (function __GT_t37062(cb__$1,flag__$1,alt_handler__$1,meta37063){return (new cljs.core.async.t37062(cb__$1,flag__$1,alt_handler__$1,meta37063));
});
}
return (new cljs.core.async.t37062(cb,flag,alt_handler,null));
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
return (function (p1__37065_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37065_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__14581__auto__ = wport;if(cljs.core.truth_(or__14581__auto__))
{return or__14581__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__37066 = (i + 1);
i = G__37066;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__14581__auto__ = ret;if(cljs.core.truth_(or__14581__auto__))
{return or__14581__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__14569__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__14569__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__14569__auto__;
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
var alts_BANG___delegate = function (ports,p__37067){var map__37069 = p__37067;var map__37069__$1 = ((cljs.core.seq_QMARK_.call(null,map__37069))?cljs.core.apply.call(null,cljs.core.hash_map,map__37069):map__37069);var opts = map__37069__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__37067 = null;if (arguments.length > 1) {
  p__37067 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__37067);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__37070){
var ports = cljs.core.first(arglist__37070);
var p__37067 = cljs.core.rest(arglist__37070);
return alts_BANG___delegate(ports,p__37067);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t37078 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37078 = (function (ch,f,map_LT_,meta37079){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37079 = meta37079;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37078.cljs$lang$type = true;
cljs.core.async.t37078.cljs$lang$ctorStr = "cljs.core.async/t37078";
cljs.core.async.t37078.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37078");
});
cljs.core.async.t37078.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37078.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t37078.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37078.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t37081 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37081 = (function (fn1,_,meta37079,ch,f,map_LT_,meta37082){
this.fn1 = fn1;
this._ = _;
this.meta37079 = meta37079;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37082 = meta37082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37081.cljs$lang$type = true;
cljs.core.async.t37081.cljs$lang$ctorStr = "cljs.core.async/t37081";
cljs.core.async.t37081.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37081");
});
cljs.core.async.t37081.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37081.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t37081.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t37081.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__37071_SHARP_){return f1.call(null,(((p1__37071_SHARP_ == null))?null:self__.f.call(null,p1__37071_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t37081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37083){var self__ = this;
var _37083__$1 = this;return self__.meta37082;
});
cljs.core.async.t37081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37083,meta37082__$1){var self__ = this;
var _37083__$1 = this;return (new cljs.core.async.t37081(self__.fn1,self__._,self__.meta37079,self__.ch,self__.f,self__.map_LT_,meta37082__$1));
});
cljs.core.async.__GT_t37081 = (function __GT_t37081(fn1__$1,___$2,meta37079__$1,ch__$2,f__$2,map_LT___$2,meta37082){return (new cljs.core.async.t37081(fn1__$1,___$2,meta37079__$1,ch__$2,f__$2,map_LT___$2,meta37082));
});
}
return (new cljs.core.async.t37081(fn1,___$1,self__.meta37079,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__14569__auto__ = ret;if(cljs.core.truth_(and__14569__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__14569__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t37078.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37078.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37078.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37080){var self__ = this;
var _37080__$1 = this;return self__.meta37079;
});
cljs.core.async.t37078.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37080,meta37079__$1){var self__ = this;
var _37080__$1 = this;return (new cljs.core.async.t37078(self__.ch,self__.f,self__.map_LT_,meta37079__$1));
});
cljs.core.async.__GT_t37078 = (function __GT_t37078(ch__$1,f__$1,map_LT___$1,meta37079){return (new cljs.core.async.t37078(ch__$1,f__$1,map_LT___$1,meta37079));
});
}
return (new cljs.core.async.t37078(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t37087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37087 = (function (ch,f,map_GT_,meta37088){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta37088 = meta37088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37087.cljs$lang$type = true;
cljs.core.async.t37087.cljs$lang$ctorStr = "cljs.core.async/t37087";
cljs.core.async.t37087.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37087");
});
cljs.core.async.t37087.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t37087.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t37087.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37089){var self__ = this;
var _37089__$1 = this;return self__.meta37088;
});
cljs.core.async.t37087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37089,meta37088__$1){var self__ = this;
var _37089__$1 = this;return (new cljs.core.async.t37087(self__.ch,self__.f,self__.map_GT_,meta37088__$1));
});
cljs.core.async.__GT_t37087 = (function __GT_t37087(ch__$1,f__$1,map_GT___$1,meta37088){return (new cljs.core.async.t37087(ch__$1,f__$1,map_GT___$1,meta37088));
});
}
return (new cljs.core.async.t37087(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t37093 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37093 = (function (ch,p,filter_GT_,meta37094){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta37094 = meta37094;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37093.cljs$lang$type = true;
cljs.core.async.t37093.cljs$lang$ctorStr = "cljs.core.async/t37093";
cljs.core.async.t37093.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37093");
});
cljs.core.async.t37093.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t37093.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t37093.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37095){var self__ = this;
var _37095__$1 = this;return self__.meta37094;
});
cljs.core.async.t37093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37095,meta37094__$1){var self__ = this;
var _37095__$1 = this;return (new cljs.core.async.t37093(self__.ch,self__.p,self__.filter_GT_,meta37094__$1));
});
cljs.core.async.__GT_t37093 = (function __GT_t37093(ch__$1,p__$1,filter_GT___$1,meta37094){return (new cljs.core.async.t37093(ch__$1,p__$1,filter_GT___$1,meta37094));
});
}
return (new cljs.core.async.t37093(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__26736__auto___37178 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_37157){var state_val_37158 = (state_37157[1]);if((state_val_37158 === 7))
{var inst_37153 = (state_37157[2]);var state_37157__$1 = state_37157;var statearr_37159_37179 = state_37157__$1;(statearr_37159_37179[2] = inst_37153);
(statearr_37159_37179[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37158 === 1))
{var state_37157__$1 = state_37157;var statearr_37160_37180 = state_37157__$1;(statearr_37160_37180[2] = null);
(statearr_37160_37180[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37158 === 4))
{var inst_37139 = (state_37157[7]);var inst_37139__$1 = (state_37157[2]);var inst_37140 = (inst_37139__$1 == null);var state_37157__$1 = (function (){var statearr_37161 = state_37157;(statearr_37161[7] = inst_37139__$1);
return statearr_37161;
})();if(cljs.core.truth_(inst_37140))
{var statearr_37162_37181 = state_37157__$1;(statearr_37162_37181[1] = 5);
} else
{var statearr_37163_37182 = state_37157__$1;(statearr_37163_37182[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37158 === 6))
{var inst_37139 = (state_37157[7]);var inst_37144 = p.call(null,inst_37139);var state_37157__$1 = state_37157;if(cljs.core.truth_(inst_37144))
{var statearr_37164_37183 = state_37157__$1;(statearr_37164_37183[1] = 8);
} else
{var statearr_37165_37184 = state_37157__$1;(statearr_37165_37184[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37158 === 3))
{var inst_37155 = (state_37157[2]);var state_37157__$1 = state_37157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37157__$1,inst_37155);
} else
{if((state_val_37158 === 2))
{var state_37157__$1 = state_37157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37157__$1,4,ch);
} else
{if((state_val_37158 === 11))
{var inst_37147 = (state_37157[2]);var state_37157__$1 = state_37157;var statearr_37166_37185 = state_37157__$1;(statearr_37166_37185[2] = inst_37147);
(statearr_37166_37185[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37158 === 9))
{var state_37157__$1 = state_37157;var statearr_37167_37186 = state_37157__$1;(statearr_37167_37186[2] = null);
(statearr_37167_37186[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37158 === 5))
{var inst_37142 = cljs.core.async.close_BANG_.call(null,out);var state_37157__$1 = state_37157;var statearr_37168_37187 = state_37157__$1;(statearr_37168_37187[2] = inst_37142);
(statearr_37168_37187[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37158 === 10))
{var inst_37150 = (state_37157[2]);var state_37157__$1 = (function (){var statearr_37169 = state_37157;(statearr_37169[8] = inst_37150);
return statearr_37169;
})();var statearr_37170_37188 = state_37157__$1;(statearr_37170_37188[2] = null);
(statearr_37170_37188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37158 === 8))
{var inst_37139 = (state_37157[7]);var state_37157__$1 = state_37157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37157__$1,11,out,inst_37139);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_37174 = [null,null,null,null,null,null,null,null,null];(statearr_37174[0] = state_machine__26673__auto__);
(statearr_37174[1] = 1);
return statearr_37174;
});
var state_machine__26673__auto____1 = (function (state_37157){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_37157);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e37175){if((e37175 instanceof Object))
{var ex__26676__auto__ = e37175;var statearr_37176_37189 = state_37157;(statearr_37176_37189[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37157);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37175;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37190 = state_37157;
state_37157 = G__37190;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_37157){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_37157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_37177 = f__26737__auto__.call(null);(statearr_37177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___37178);
return statearr_37177;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__26736__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_37342){var state_val_37343 = (state_37342[1]);if((state_val_37343 === 7))
{var inst_37338 = (state_37342[2]);var state_37342__$1 = state_37342;var statearr_37344_37381 = state_37342__$1;(statearr_37344_37381[2] = inst_37338);
(statearr_37344_37381[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 20))
{var inst_37313 = (state_37342[7]);var inst_37324 = (state_37342[2]);var inst_37325 = cljs.core.next.call(null,inst_37313);var inst_37299 = inst_37325;var inst_37300 = null;var inst_37301 = 0;var inst_37302 = 0;var state_37342__$1 = (function (){var statearr_37345 = state_37342;(statearr_37345[8] = inst_37300);
(statearr_37345[9] = inst_37299);
(statearr_37345[10] = inst_37302);
(statearr_37345[11] = inst_37324);
(statearr_37345[12] = inst_37301);
return statearr_37345;
})();var statearr_37346_37382 = state_37342__$1;(statearr_37346_37382[2] = null);
(statearr_37346_37382[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 1))
{var state_37342__$1 = state_37342;var statearr_37347_37383 = state_37342__$1;(statearr_37347_37383[2] = null);
(statearr_37347_37383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 4))
{var inst_37288 = (state_37342[13]);var inst_37288__$1 = (state_37342[2]);var inst_37289 = (inst_37288__$1 == null);var state_37342__$1 = (function (){var statearr_37351 = state_37342;(statearr_37351[13] = inst_37288__$1);
return statearr_37351;
})();if(cljs.core.truth_(inst_37289))
{var statearr_37352_37384 = state_37342__$1;(statearr_37352_37384[1] = 5);
} else
{var statearr_37353_37385 = state_37342__$1;(statearr_37353_37385[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 15))
{var state_37342__$1 = state_37342;var statearr_37354_37386 = state_37342__$1;(statearr_37354_37386[2] = null);
(statearr_37354_37386[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 13))
{var inst_37300 = (state_37342[8]);var inst_37299 = (state_37342[9]);var inst_37302 = (state_37342[10]);var inst_37301 = (state_37342[12]);var inst_37309 = (state_37342[2]);var inst_37310 = (inst_37302 + 1);var tmp37348 = inst_37300;var tmp37349 = inst_37299;var tmp37350 = inst_37301;var inst_37299__$1 = tmp37349;var inst_37300__$1 = tmp37348;var inst_37301__$1 = tmp37350;var inst_37302__$1 = inst_37310;var state_37342__$1 = (function (){var statearr_37355 = state_37342;(statearr_37355[8] = inst_37300__$1);
(statearr_37355[14] = inst_37309);
(statearr_37355[9] = inst_37299__$1);
(statearr_37355[10] = inst_37302__$1);
(statearr_37355[12] = inst_37301__$1);
return statearr_37355;
})();var statearr_37356_37387 = state_37342__$1;(statearr_37356_37387[2] = null);
(statearr_37356_37387[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 6))
{var inst_37288 = (state_37342[13]);var inst_37293 = f.call(null,inst_37288);var inst_37298 = cljs.core.seq.call(null,inst_37293);var inst_37299 = inst_37298;var inst_37300 = null;var inst_37301 = 0;var inst_37302 = 0;var state_37342__$1 = (function (){var statearr_37357 = state_37342;(statearr_37357[8] = inst_37300);
(statearr_37357[9] = inst_37299);
(statearr_37357[10] = inst_37302);
(statearr_37357[12] = inst_37301);
return statearr_37357;
})();var statearr_37358_37388 = state_37342__$1;(statearr_37358_37388[2] = null);
(statearr_37358_37388[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 17))
{var inst_37313 = (state_37342[7]);var inst_37317 = cljs.core.chunk_first.call(null,inst_37313);var inst_37318 = cljs.core.chunk_rest.call(null,inst_37313);var inst_37319 = cljs.core.count.call(null,inst_37317);var inst_37299 = inst_37318;var inst_37300 = inst_37317;var inst_37301 = inst_37319;var inst_37302 = 0;var state_37342__$1 = (function (){var statearr_37359 = state_37342;(statearr_37359[8] = inst_37300);
(statearr_37359[9] = inst_37299);
(statearr_37359[10] = inst_37302);
(statearr_37359[12] = inst_37301);
return statearr_37359;
})();var statearr_37360_37389 = state_37342__$1;(statearr_37360_37389[2] = null);
(statearr_37360_37389[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 3))
{var inst_37340 = (state_37342[2]);var state_37342__$1 = state_37342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37342__$1,inst_37340);
} else
{if((state_val_37343 === 12))
{var inst_37333 = (state_37342[2]);var state_37342__$1 = state_37342;var statearr_37361_37390 = state_37342__$1;(statearr_37361_37390[2] = inst_37333);
(statearr_37361_37390[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 2))
{var state_37342__$1 = state_37342;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37342__$1,4,in$);
} else
{if((state_val_37343 === 19))
{var inst_37328 = (state_37342[2]);var state_37342__$1 = state_37342;var statearr_37362_37391 = state_37342__$1;(statearr_37362_37391[2] = inst_37328);
(statearr_37362_37391[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 11))
{var inst_37313 = (state_37342[7]);var inst_37299 = (state_37342[9]);var inst_37313__$1 = cljs.core.seq.call(null,inst_37299);var state_37342__$1 = (function (){var statearr_37363 = state_37342;(statearr_37363[7] = inst_37313__$1);
return statearr_37363;
})();if(inst_37313__$1)
{var statearr_37364_37392 = state_37342__$1;(statearr_37364_37392[1] = 14);
} else
{var statearr_37365_37393 = state_37342__$1;(statearr_37365_37393[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 9))
{var inst_37335 = (state_37342[2]);var state_37342__$1 = (function (){var statearr_37366 = state_37342;(statearr_37366[15] = inst_37335);
return statearr_37366;
})();var statearr_37367_37394 = state_37342__$1;(statearr_37367_37394[2] = null);
(statearr_37367_37394[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 5))
{var inst_37291 = cljs.core.async.close_BANG_.call(null,out);var state_37342__$1 = state_37342;var statearr_37368_37395 = state_37342__$1;(statearr_37368_37395[2] = inst_37291);
(statearr_37368_37395[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 14))
{var inst_37313 = (state_37342[7]);var inst_37315 = cljs.core.chunked_seq_QMARK_.call(null,inst_37313);var state_37342__$1 = state_37342;if(inst_37315)
{var statearr_37369_37396 = state_37342__$1;(statearr_37369_37396[1] = 17);
} else
{var statearr_37370_37397 = state_37342__$1;(statearr_37370_37397[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 16))
{var inst_37331 = (state_37342[2]);var state_37342__$1 = state_37342;var statearr_37371_37398 = state_37342__$1;(statearr_37371_37398[2] = inst_37331);
(statearr_37371_37398[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 10))
{var inst_37300 = (state_37342[8]);var inst_37302 = (state_37342[10]);var inst_37307 = cljs.core._nth.call(null,inst_37300,inst_37302);var state_37342__$1 = state_37342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37342__$1,13,out,inst_37307);
} else
{if((state_val_37343 === 18))
{var inst_37313 = (state_37342[7]);var inst_37322 = cljs.core.first.call(null,inst_37313);var state_37342__$1 = state_37342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37342__$1,20,out,inst_37322);
} else
{if((state_val_37343 === 8))
{var inst_37302 = (state_37342[10]);var inst_37301 = (state_37342[12]);var inst_37304 = (inst_37302 < inst_37301);var inst_37305 = inst_37304;var state_37342__$1 = state_37342;if(cljs.core.truth_(inst_37305))
{var statearr_37372_37399 = state_37342__$1;(statearr_37372_37399[1] = 10);
} else
{var statearr_37373_37400 = state_37342__$1;(statearr_37373_37400[1] = 11);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_37377 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37377[0] = state_machine__26673__auto__);
(statearr_37377[1] = 1);
return statearr_37377;
});
var state_machine__26673__auto____1 = (function (state_37342){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_37342);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e37378){if((e37378 instanceof Object))
{var ex__26676__auto__ = e37378;var statearr_37379_37401 = state_37342;(statearr_37379_37401[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37342);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37378;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37402 = state_37342;
state_37342 = G__37402;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_37342){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_37342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_37380 = f__26737__auto__.call(null);(statearr_37380[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto__);
return statearr_37380;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
}));
return c__26736__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__26736__auto___37483 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_37462){var state_val_37463 = (state_37462[1]);if((state_val_37463 === 7))
{var inst_37458 = (state_37462[2]);var state_37462__$1 = state_37462;var statearr_37464_37484 = state_37462__$1;(statearr_37464_37484[2] = inst_37458);
(statearr_37464_37484[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37463 === 1))
{var state_37462__$1 = state_37462;var statearr_37465_37485 = state_37462__$1;(statearr_37465_37485[2] = null);
(statearr_37465_37485[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37463 === 4))
{var inst_37445 = (state_37462[7]);var inst_37445__$1 = (state_37462[2]);var inst_37446 = (inst_37445__$1 == null);var state_37462__$1 = (function (){var statearr_37466 = state_37462;(statearr_37466[7] = inst_37445__$1);
return statearr_37466;
})();if(cljs.core.truth_(inst_37446))
{var statearr_37467_37486 = state_37462__$1;(statearr_37467_37486[1] = 5);
} else
{var statearr_37468_37487 = state_37462__$1;(statearr_37468_37487[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37463 === 6))
{var inst_37445 = (state_37462[7]);var state_37462__$1 = state_37462;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37462__$1,11,to,inst_37445);
} else
{if((state_val_37463 === 3))
{var inst_37460 = (state_37462[2]);var state_37462__$1 = state_37462;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37462__$1,inst_37460);
} else
{if((state_val_37463 === 2))
{var state_37462__$1 = state_37462;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37462__$1,4,from);
} else
{if((state_val_37463 === 11))
{var inst_37455 = (state_37462[2]);var state_37462__$1 = (function (){var statearr_37469 = state_37462;(statearr_37469[8] = inst_37455);
return statearr_37469;
})();var statearr_37470_37488 = state_37462__$1;(statearr_37470_37488[2] = null);
(statearr_37470_37488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37463 === 9))
{var state_37462__$1 = state_37462;var statearr_37471_37489 = state_37462__$1;(statearr_37471_37489[2] = null);
(statearr_37471_37489[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37463 === 5))
{var state_37462__$1 = state_37462;if(cljs.core.truth_(close_QMARK_))
{var statearr_37472_37490 = state_37462__$1;(statearr_37472_37490[1] = 8);
} else
{var statearr_37473_37491 = state_37462__$1;(statearr_37473_37491[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37463 === 10))
{var inst_37452 = (state_37462[2]);var state_37462__$1 = state_37462;var statearr_37474_37492 = state_37462__$1;(statearr_37474_37492[2] = inst_37452);
(statearr_37474_37492[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37463 === 8))
{var inst_37449 = cljs.core.async.close_BANG_.call(null,to);var state_37462__$1 = state_37462;var statearr_37475_37493 = state_37462__$1;(statearr_37475_37493[2] = inst_37449);
(statearr_37475_37493[1] = 10);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_37479 = [null,null,null,null,null,null,null,null,null];(statearr_37479[0] = state_machine__26673__auto__);
(statearr_37479[1] = 1);
return statearr_37479;
});
var state_machine__26673__auto____1 = (function (state_37462){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_37462);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e37480){if((e37480 instanceof Object))
{var ex__26676__auto__ = e37480;var statearr_37481_37494 = state_37462;(statearr_37481_37494[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37462);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37480;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37495 = state_37462;
state_37462 = G__37495;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_37462){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_37462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_37482 = f__26737__auto__.call(null);(statearr_37482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___37483);
return statearr_37482;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__26736__auto___37582 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_37560){var state_val_37561 = (state_37560[1]);if((state_val_37561 === 7))
{var inst_37556 = (state_37560[2]);var state_37560__$1 = state_37560;var statearr_37562_37583 = state_37560__$1;(statearr_37562_37583[2] = inst_37556);
(statearr_37562_37583[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37561 === 1))
{var state_37560__$1 = state_37560;var statearr_37563_37584 = state_37560__$1;(statearr_37563_37584[2] = null);
(statearr_37563_37584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37561 === 4))
{var inst_37541 = (state_37560[7]);var inst_37541__$1 = (state_37560[2]);var inst_37542 = (inst_37541__$1 == null);var state_37560__$1 = (function (){var statearr_37564 = state_37560;(statearr_37564[7] = inst_37541__$1);
return statearr_37564;
})();if(cljs.core.truth_(inst_37542))
{var statearr_37565_37585 = state_37560__$1;(statearr_37565_37585[1] = 5);
} else
{var statearr_37566_37586 = state_37560__$1;(statearr_37566_37586[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37561 === 6))
{var inst_37541 = (state_37560[7]);var inst_37547 = p.call(null,inst_37541);var state_37560__$1 = state_37560;if(cljs.core.truth_(inst_37547))
{var statearr_37567_37587 = state_37560__$1;(statearr_37567_37587[1] = 9);
} else
{var statearr_37568_37588 = state_37560__$1;(statearr_37568_37588[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37561 === 3))
{var inst_37558 = (state_37560[2]);var state_37560__$1 = state_37560;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37560__$1,inst_37558);
} else
{if((state_val_37561 === 2))
{var state_37560__$1 = state_37560;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37560__$1,4,ch);
} else
{if((state_val_37561 === 11))
{var inst_37541 = (state_37560[7]);var inst_37551 = (state_37560[2]);var state_37560__$1 = state_37560;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37560__$1,8,inst_37551,inst_37541);
} else
{if((state_val_37561 === 9))
{var state_37560__$1 = state_37560;var statearr_37569_37589 = state_37560__$1;(statearr_37569_37589[2] = tc);
(statearr_37569_37589[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37561 === 5))
{var inst_37544 = cljs.core.async.close_BANG_.call(null,tc);var inst_37545 = cljs.core.async.close_BANG_.call(null,fc);var state_37560__$1 = (function (){var statearr_37570 = state_37560;(statearr_37570[8] = inst_37544);
return statearr_37570;
})();var statearr_37571_37590 = state_37560__$1;(statearr_37571_37590[2] = inst_37545);
(statearr_37571_37590[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37561 === 10))
{var state_37560__$1 = state_37560;var statearr_37572_37591 = state_37560__$1;(statearr_37572_37591[2] = fc);
(statearr_37572_37591[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37561 === 8))
{var inst_37553 = (state_37560[2]);var state_37560__$1 = (function (){var statearr_37573 = state_37560;(statearr_37573[9] = inst_37553);
return statearr_37573;
})();var statearr_37574_37592 = state_37560__$1;(statearr_37574_37592[2] = null);
(statearr_37574_37592[1] = 2);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_37578 = [null,null,null,null,null,null,null,null,null,null];(statearr_37578[0] = state_machine__26673__auto__);
(statearr_37578[1] = 1);
return statearr_37578;
});
var state_machine__26673__auto____1 = (function (state_37560){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_37560);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e37579){if((e37579 instanceof Object))
{var ex__26676__auto__ = e37579;var statearr_37580_37593 = state_37560;(statearr_37580_37593[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37560);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37579;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37594 = state_37560;
state_37560 = G__37594;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_37560){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_37560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_37581 = f__26737__auto__.call(null);(statearr_37581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___37582);
return statearr_37581;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__26736__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_37641){var state_val_37642 = (state_37641[1]);if((state_val_37642 === 7))
{var inst_37637 = (state_37641[2]);var state_37641__$1 = state_37641;var statearr_37643_37659 = state_37641__$1;(statearr_37643_37659[2] = inst_37637);
(statearr_37643_37659[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37642 === 6))
{var inst_37630 = (state_37641[7]);var inst_37627 = (state_37641[8]);var inst_37634 = f.call(null,inst_37627,inst_37630);var inst_37627__$1 = inst_37634;var state_37641__$1 = (function (){var statearr_37644 = state_37641;(statearr_37644[8] = inst_37627__$1);
return statearr_37644;
})();var statearr_37645_37660 = state_37641__$1;(statearr_37645_37660[2] = null);
(statearr_37645_37660[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37642 === 5))
{var inst_37627 = (state_37641[8]);var state_37641__$1 = state_37641;var statearr_37646_37661 = state_37641__$1;(statearr_37646_37661[2] = inst_37627);
(statearr_37646_37661[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37642 === 4))
{var inst_37630 = (state_37641[7]);var inst_37630__$1 = (state_37641[2]);var inst_37631 = (inst_37630__$1 == null);var state_37641__$1 = (function (){var statearr_37647 = state_37641;(statearr_37647[7] = inst_37630__$1);
return statearr_37647;
})();if(cljs.core.truth_(inst_37631))
{var statearr_37648_37662 = state_37641__$1;(statearr_37648_37662[1] = 5);
} else
{var statearr_37649_37663 = state_37641__$1;(statearr_37649_37663[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37642 === 3))
{var inst_37639 = (state_37641[2]);var state_37641__$1 = state_37641;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37641__$1,inst_37639);
} else
{if((state_val_37642 === 2))
{var state_37641__$1 = state_37641;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37641__$1,4,ch);
} else
{if((state_val_37642 === 1))
{var inst_37627 = init;var state_37641__$1 = (function (){var statearr_37650 = state_37641;(statearr_37650[8] = inst_37627);
return statearr_37650;
})();var statearr_37651_37664 = state_37641__$1;(statearr_37651_37664[2] = null);
(statearr_37651_37664[1] = 2);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_37655 = [null,null,null,null,null,null,null,null,null];(statearr_37655[0] = state_machine__26673__auto__);
(statearr_37655[1] = 1);
return statearr_37655;
});
var state_machine__26673__auto____1 = (function (state_37641){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_37641);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e37656){if((e37656 instanceof Object))
{var ex__26676__auto__ = e37656;var statearr_37657_37665 = state_37641;(statearr_37657_37665[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37641);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37656;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37666 = state_37641;
state_37641 = G__37666;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_37641){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_37641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_37658 = f__26737__auto__.call(null);(statearr_37658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto__);
return statearr_37658;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
}));
return c__26736__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__26736__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_37728){var state_val_37729 = (state_37728[1]);if((state_val_37729 === 7))
{var inst_37709 = (state_37728[7]);var inst_37714 = (state_37728[2]);var inst_37715 = cljs.core.next.call(null,inst_37709);var inst_37709__$1 = inst_37715;var state_37728__$1 = (function (){var statearr_37730 = state_37728;(statearr_37730[8] = inst_37714);
(statearr_37730[7] = inst_37709__$1);
return statearr_37730;
})();var statearr_37731_37749 = state_37728__$1;(statearr_37731_37749[2] = null);
(statearr_37731_37749[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37729 === 1))
{var inst_37708 = cljs.core.seq.call(null,coll);var inst_37709 = inst_37708;var state_37728__$1 = (function (){var statearr_37732 = state_37728;(statearr_37732[7] = inst_37709);
return statearr_37732;
})();var statearr_37733_37750 = state_37728__$1;(statearr_37733_37750[2] = null);
(statearr_37733_37750[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37729 === 4))
{var inst_37709 = (state_37728[7]);var inst_37712 = cljs.core.first.call(null,inst_37709);var state_37728__$1 = state_37728;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37728__$1,7,ch,inst_37712);
} else
{if((state_val_37729 === 6))
{var inst_37724 = (state_37728[2]);var state_37728__$1 = state_37728;var statearr_37734_37751 = state_37728__$1;(statearr_37734_37751[2] = inst_37724);
(statearr_37734_37751[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37729 === 3))
{var inst_37726 = (state_37728[2]);var state_37728__$1 = state_37728;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37728__$1,inst_37726);
} else
{if((state_val_37729 === 2))
{var inst_37709 = (state_37728[7]);var state_37728__$1 = state_37728;if(cljs.core.truth_(inst_37709))
{var statearr_37735_37752 = state_37728__$1;(statearr_37735_37752[1] = 4);
} else
{var statearr_37736_37753 = state_37728__$1;(statearr_37736_37753[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37729 === 9))
{var state_37728__$1 = state_37728;var statearr_37737_37754 = state_37728__$1;(statearr_37737_37754[2] = null);
(statearr_37737_37754[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37729 === 5))
{var state_37728__$1 = state_37728;if(cljs.core.truth_(close_QMARK_))
{var statearr_37738_37755 = state_37728__$1;(statearr_37738_37755[1] = 8);
} else
{var statearr_37739_37756 = state_37728__$1;(statearr_37739_37756[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37729 === 10))
{var inst_37722 = (state_37728[2]);var state_37728__$1 = state_37728;var statearr_37740_37757 = state_37728__$1;(statearr_37740_37757[2] = inst_37722);
(statearr_37740_37757[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37729 === 8))
{var inst_37719 = cljs.core.async.close_BANG_.call(null,ch);var state_37728__$1 = state_37728;var statearr_37741_37758 = state_37728__$1;(statearr_37741_37758[2] = inst_37719);
(statearr_37741_37758[1] = 10);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_37745 = [null,null,null,null,null,null,null,null,null];(statearr_37745[0] = state_machine__26673__auto__);
(statearr_37745[1] = 1);
return statearr_37745;
});
var state_machine__26673__auto____1 = (function (state_37728){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_37728);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e37746){if((e37746 instanceof Object))
{var ex__26676__auto__ = e37746;var statearr_37747_37759 = state_37728;(statearr_37747_37759[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37728);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37746;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37760 = state_37728;
state_37728 = G__37760;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_37728){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_37728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_37748 = f__26737__auto__.call(null);(statearr_37748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto__);
return statearr_37748;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
}));
return c__26736__auto__;
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
cljs.core.async.Mux = (function (){var obj37762 = {};return obj37762;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__14569__auto__ = _;if(and__14569__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__14569__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__15208__auto__ = (((_ == null))?null:_);return (function (){var or__14581__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj37764 = {};return obj37764;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__14569__auto__ = m;if(and__14569__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__14569__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__15208__auto__ = (((m == null))?null:m);return (function (){var or__14581__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__14569__auto__ = m;if(and__14569__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__14569__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__15208__auto__ = (((m == null))?null:m);return (function (){var or__14581__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__14569__auto__ = m;if(and__14569__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__14569__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__15208__auto__ = (((m == null))?null:m);return (function (){var or__14581__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t37988 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37988 = (function (cs,ch,mult,meta37989){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta37989 = meta37989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37988.cljs$lang$type = true;
cljs.core.async.t37988.cljs$lang$ctorStr = "cljs.core.async/t37988";
cljs.core.async.t37988.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37988");
});})(cs))
;
cljs.core.async.t37988.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t37988.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t37988.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t37988.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t37988.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t37988.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t37988.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_37990){var self__ = this;
var _37990__$1 = this;return self__.meta37989;
});})(cs))
;
cljs.core.async.t37988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_37990,meta37989__$1){var self__ = this;
var _37990__$1 = this;return (new cljs.core.async.t37988(self__.cs,self__.ch,self__.mult,meta37989__$1));
});})(cs))
;
cljs.core.async.__GT_t37988 = ((function (cs){
return (function __GT_t37988(cs__$1,ch__$1,mult__$1,meta37989){return (new cljs.core.async.t37988(cs__$1,ch__$1,mult__$1,meta37989));
});})(cs))
;
}
return (new cljs.core.async.t37988(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__26736__auto___38211 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_38125){var state_val_38126 = (state_38125[1]);if((state_val_38126 === 7))
{var inst_38121 = (state_38125[2]);var state_38125__$1 = state_38125;var statearr_38127_38212 = state_38125__$1;(statearr_38127_38212[2] = inst_38121);
(statearr_38127_38212[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 20))
{var inst_38022 = (state_38125[7]);var inst_38032 = cljs.core.first.call(null,inst_38022);var inst_38033 = cljs.core.nth.call(null,inst_38032,0,null);var inst_38034 = cljs.core.nth.call(null,inst_38032,1,null);var state_38125__$1 = (function (){var statearr_38128 = state_38125;(statearr_38128[8] = inst_38033);
return statearr_38128;
})();if(cljs.core.truth_(inst_38034))
{var statearr_38129_38213 = state_38125__$1;(statearr_38129_38213[1] = 22);
} else
{var statearr_38130_38214 = state_38125__$1;(statearr_38130_38214[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 27))
{var inst_38064 = (state_38125[9]);var inst_38062 = (state_38125[10]);var inst_38069 = cljs.core._nth.call(null,inst_38062,inst_38064);var state_38125__$1 = (function (){var statearr_38131 = state_38125;(statearr_38131[11] = inst_38069);
return statearr_38131;
})();var statearr_38132_38215 = state_38125__$1;(statearr_38132_38215[2] = null);
(statearr_38132_38215[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 1))
{var state_38125__$1 = state_38125;var statearr_38133_38216 = state_38125__$1;(statearr_38133_38216[2] = null);
(statearr_38133_38216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 24))
{var inst_38022 = (state_38125[7]);var inst_38039 = (state_38125[2]);var inst_38040 = cljs.core.next.call(null,inst_38022);var inst_38002 = inst_38040;var inst_38003 = null;var inst_38004 = 0;var inst_38005 = 0;var state_38125__$1 = (function (){var statearr_38134 = state_38125;(statearr_38134[12] = inst_38039);
(statearr_38134[13] = inst_38002);
(statearr_38134[14] = inst_38003);
(statearr_38134[15] = inst_38005);
(statearr_38134[16] = inst_38004);
return statearr_38134;
})();var statearr_38135_38217 = state_38125__$1;(statearr_38135_38217[2] = null);
(statearr_38135_38217[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 39))
{var inst_38082 = (state_38125[17]);var inst_38100 = (state_38125[2]);var inst_38101 = cljs.core.next.call(null,inst_38082);var inst_38061 = inst_38101;var inst_38062 = null;var inst_38063 = 0;var inst_38064 = 0;var state_38125__$1 = (function (){var statearr_38139 = state_38125;(statearr_38139[18] = inst_38100);
(statearr_38139[19] = inst_38061);
(statearr_38139[20] = inst_38063);
(statearr_38139[9] = inst_38064);
(statearr_38139[10] = inst_38062);
return statearr_38139;
})();var statearr_38140_38218 = state_38125__$1;(statearr_38140_38218[2] = null);
(statearr_38140_38218[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 4))
{var inst_37993 = (state_38125[21]);var inst_37993__$1 = (state_38125[2]);var inst_37994 = (inst_37993__$1 == null);var state_38125__$1 = (function (){var statearr_38141 = state_38125;(statearr_38141[21] = inst_37993__$1);
return statearr_38141;
})();if(cljs.core.truth_(inst_37994))
{var statearr_38142_38219 = state_38125__$1;(statearr_38142_38219[1] = 5);
} else
{var statearr_38143_38220 = state_38125__$1;(statearr_38143_38220[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 15))
{var inst_38002 = (state_38125[13]);var inst_38003 = (state_38125[14]);var inst_38005 = (state_38125[15]);var inst_38004 = (state_38125[16]);var inst_38018 = (state_38125[2]);var inst_38019 = (inst_38005 + 1);var tmp38136 = inst_38002;var tmp38137 = inst_38003;var tmp38138 = inst_38004;var inst_38002__$1 = tmp38136;var inst_38003__$1 = tmp38137;var inst_38004__$1 = tmp38138;var inst_38005__$1 = inst_38019;var state_38125__$1 = (function (){var statearr_38144 = state_38125;(statearr_38144[22] = inst_38018);
(statearr_38144[13] = inst_38002__$1);
(statearr_38144[14] = inst_38003__$1);
(statearr_38144[15] = inst_38005__$1);
(statearr_38144[16] = inst_38004__$1);
return statearr_38144;
})();var statearr_38145_38221 = state_38125__$1;(statearr_38145_38221[2] = null);
(statearr_38145_38221[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 21))
{var inst_38043 = (state_38125[2]);var state_38125__$1 = state_38125;var statearr_38146_38222 = state_38125__$1;(statearr_38146_38222[2] = inst_38043);
(statearr_38146_38222[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 31))
{var inst_38069 = (state_38125[11]);var inst_38070 = (state_38125[2]);var inst_38071 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_38072 = cljs.core.async.untap_STAR_.call(null,m,inst_38069);var state_38125__$1 = (function (){var statearr_38147 = state_38125;(statearr_38147[23] = inst_38071);
(statearr_38147[24] = inst_38070);
return statearr_38147;
})();var statearr_38148_38223 = state_38125__$1;(statearr_38148_38223[2] = inst_38072);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38125__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 32))
{var inst_38069 = (state_38125[11]);var inst_37993 = (state_38125[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38125,31,Object,null,30);var inst_38076 = cljs.core.async.put_BANG_.call(null,inst_38069,inst_37993,done);var state_38125__$1 = state_38125;var statearr_38149_38224 = state_38125__$1;(statearr_38149_38224[2] = inst_38076);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38125__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 40))
{var inst_38091 = (state_38125[25]);var inst_38092 = (state_38125[2]);var inst_38093 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_38094 = cljs.core.async.untap_STAR_.call(null,m,inst_38091);var state_38125__$1 = (function (){var statearr_38150 = state_38125;(statearr_38150[26] = inst_38093);
(statearr_38150[27] = inst_38092);
return statearr_38150;
})();var statearr_38151_38225 = state_38125__$1;(statearr_38151_38225[2] = inst_38094);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38125__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 33))
{var inst_38082 = (state_38125[17]);var inst_38084 = cljs.core.chunked_seq_QMARK_.call(null,inst_38082);var state_38125__$1 = state_38125;if(inst_38084)
{var statearr_38152_38226 = state_38125__$1;(statearr_38152_38226[1] = 36);
} else
{var statearr_38153_38227 = state_38125__$1;(statearr_38153_38227[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 13))
{var inst_38012 = (state_38125[28]);var inst_38015 = cljs.core.async.close_BANG_.call(null,inst_38012);var state_38125__$1 = state_38125;var statearr_38154_38228 = state_38125__$1;(statearr_38154_38228[2] = inst_38015);
(statearr_38154_38228[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 22))
{var inst_38033 = (state_38125[8]);var inst_38036 = cljs.core.async.close_BANG_.call(null,inst_38033);var state_38125__$1 = state_38125;var statearr_38155_38229 = state_38125__$1;(statearr_38155_38229[2] = inst_38036);
(statearr_38155_38229[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 36))
{var inst_38082 = (state_38125[17]);var inst_38086 = cljs.core.chunk_first.call(null,inst_38082);var inst_38087 = cljs.core.chunk_rest.call(null,inst_38082);var inst_38088 = cljs.core.count.call(null,inst_38086);var inst_38061 = inst_38087;var inst_38062 = inst_38086;var inst_38063 = inst_38088;var inst_38064 = 0;var state_38125__$1 = (function (){var statearr_38156 = state_38125;(statearr_38156[19] = inst_38061);
(statearr_38156[20] = inst_38063);
(statearr_38156[9] = inst_38064);
(statearr_38156[10] = inst_38062);
return statearr_38156;
})();var statearr_38157_38230 = state_38125__$1;(statearr_38157_38230[2] = null);
(statearr_38157_38230[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 41))
{var inst_38091 = (state_38125[25]);var inst_37993 = (state_38125[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38125,40,Object,null,39);var inst_38098 = cljs.core.async.put_BANG_.call(null,inst_38091,inst_37993,done);var state_38125__$1 = state_38125;var statearr_38158_38231 = state_38125__$1;(statearr_38158_38231[2] = inst_38098);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38125__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 43))
{var state_38125__$1 = state_38125;var statearr_38159_38232 = state_38125__$1;(statearr_38159_38232[2] = null);
(statearr_38159_38232[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 29))
{var inst_38109 = (state_38125[2]);var state_38125__$1 = state_38125;var statearr_38160_38233 = state_38125__$1;(statearr_38160_38233[2] = inst_38109);
(statearr_38160_38233[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 44))
{var inst_38118 = (state_38125[2]);var state_38125__$1 = (function (){var statearr_38161 = state_38125;(statearr_38161[29] = inst_38118);
return statearr_38161;
})();var statearr_38162_38234 = state_38125__$1;(statearr_38162_38234[2] = null);
(statearr_38162_38234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 6))
{var inst_38053 = (state_38125[30]);var inst_38052 = cljs.core.deref.call(null,cs);var inst_38053__$1 = cljs.core.keys.call(null,inst_38052);var inst_38054 = cljs.core.count.call(null,inst_38053__$1);var inst_38055 = cljs.core.reset_BANG_.call(null,dctr,inst_38054);var inst_38060 = cljs.core.seq.call(null,inst_38053__$1);var inst_38061 = inst_38060;var inst_38062 = null;var inst_38063 = 0;var inst_38064 = 0;var state_38125__$1 = (function (){var statearr_38163 = state_38125;(statearr_38163[19] = inst_38061);
(statearr_38163[30] = inst_38053__$1);
(statearr_38163[31] = inst_38055);
(statearr_38163[20] = inst_38063);
(statearr_38163[9] = inst_38064);
(statearr_38163[10] = inst_38062);
return statearr_38163;
})();var statearr_38164_38235 = state_38125__$1;(statearr_38164_38235[2] = null);
(statearr_38164_38235[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 28))
{var inst_38082 = (state_38125[17]);var inst_38061 = (state_38125[19]);var inst_38082__$1 = cljs.core.seq.call(null,inst_38061);var state_38125__$1 = (function (){var statearr_38165 = state_38125;(statearr_38165[17] = inst_38082__$1);
return statearr_38165;
})();if(inst_38082__$1)
{var statearr_38166_38236 = state_38125__$1;(statearr_38166_38236[1] = 33);
} else
{var statearr_38167_38237 = state_38125__$1;(statearr_38167_38237[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 25))
{var inst_38063 = (state_38125[20]);var inst_38064 = (state_38125[9]);var inst_38066 = (inst_38064 < inst_38063);var inst_38067 = inst_38066;var state_38125__$1 = state_38125;if(cljs.core.truth_(inst_38067))
{var statearr_38168_38238 = state_38125__$1;(statearr_38168_38238[1] = 27);
} else
{var statearr_38169_38239 = state_38125__$1;(statearr_38169_38239[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 34))
{var state_38125__$1 = state_38125;var statearr_38170_38240 = state_38125__$1;(statearr_38170_38240[2] = null);
(statearr_38170_38240[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 17))
{var state_38125__$1 = state_38125;var statearr_38171_38241 = state_38125__$1;(statearr_38171_38241[2] = null);
(statearr_38171_38241[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 3))
{var inst_38123 = (state_38125[2]);var state_38125__$1 = state_38125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38125__$1,inst_38123);
} else
{if((state_val_38126 === 12))
{var inst_38048 = (state_38125[2]);var state_38125__$1 = state_38125;var statearr_38172_38242 = state_38125__$1;(statearr_38172_38242[2] = inst_38048);
(statearr_38172_38242[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 2))
{var state_38125__$1 = state_38125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38125__$1,4,ch);
} else
{if((state_val_38126 === 23))
{var state_38125__$1 = state_38125;var statearr_38173_38243 = state_38125__$1;(statearr_38173_38243[2] = null);
(statearr_38173_38243[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 35))
{var inst_38107 = (state_38125[2]);var state_38125__$1 = state_38125;var statearr_38174_38244 = state_38125__$1;(statearr_38174_38244[2] = inst_38107);
(statearr_38174_38244[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 19))
{var inst_38022 = (state_38125[7]);var inst_38026 = cljs.core.chunk_first.call(null,inst_38022);var inst_38027 = cljs.core.chunk_rest.call(null,inst_38022);var inst_38028 = cljs.core.count.call(null,inst_38026);var inst_38002 = inst_38027;var inst_38003 = inst_38026;var inst_38004 = inst_38028;var inst_38005 = 0;var state_38125__$1 = (function (){var statearr_38175 = state_38125;(statearr_38175[13] = inst_38002);
(statearr_38175[14] = inst_38003);
(statearr_38175[15] = inst_38005);
(statearr_38175[16] = inst_38004);
return statearr_38175;
})();var statearr_38176_38245 = state_38125__$1;(statearr_38176_38245[2] = null);
(statearr_38176_38245[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 11))
{var inst_38002 = (state_38125[13]);var inst_38022 = (state_38125[7]);var inst_38022__$1 = cljs.core.seq.call(null,inst_38002);var state_38125__$1 = (function (){var statearr_38177 = state_38125;(statearr_38177[7] = inst_38022__$1);
return statearr_38177;
})();if(inst_38022__$1)
{var statearr_38178_38246 = state_38125__$1;(statearr_38178_38246[1] = 16);
} else
{var statearr_38179_38247 = state_38125__$1;(statearr_38179_38247[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 9))
{var inst_38050 = (state_38125[2]);var state_38125__$1 = state_38125;var statearr_38180_38248 = state_38125__$1;(statearr_38180_38248[2] = inst_38050);
(statearr_38180_38248[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 5))
{var inst_38000 = cljs.core.deref.call(null,cs);var inst_38001 = cljs.core.seq.call(null,inst_38000);var inst_38002 = inst_38001;var inst_38003 = null;var inst_38004 = 0;var inst_38005 = 0;var state_38125__$1 = (function (){var statearr_38181 = state_38125;(statearr_38181[13] = inst_38002);
(statearr_38181[14] = inst_38003);
(statearr_38181[15] = inst_38005);
(statearr_38181[16] = inst_38004);
return statearr_38181;
})();var statearr_38182_38249 = state_38125__$1;(statearr_38182_38249[2] = null);
(statearr_38182_38249[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 14))
{var state_38125__$1 = state_38125;var statearr_38183_38250 = state_38125__$1;(statearr_38183_38250[2] = null);
(statearr_38183_38250[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 45))
{var inst_38115 = (state_38125[2]);var state_38125__$1 = state_38125;var statearr_38184_38251 = state_38125__$1;(statearr_38184_38251[2] = inst_38115);
(statearr_38184_38251[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 26))
{var inst_38053 = (state_38125[30]);var inst_38111 = (state_38125[2]);var inst_38112 = cljs.core.seq.call(null,inst_38053);var state_38125__$1 = (function (){var statearr_38185 = state_38125;(statearr_38185[32] = inst_38111);
return statearr_38185;
})();if(inst_38112)
{var statearr_38186_38252 = state_38125__$1;(statearr_38186_38252[1] = 42);
} else
{var statearr_38187_38253 = state_38125__$1;(statearr_38187_38253[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 16))
{var inst_38022 = (state_38125[7]);var inst_38024 = cljs.core.chunked_seq_QMARK_.call(null,inst_38022);var state_38125__$1 = state_38125;if(inst_38024)
{var statearr_38191_38254 = state_38125__$1;(statearr_38191_38254[1] = 19);
} else
{var statearr_38192_38255 = state_38125__$1;(statearr_38192_38255[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 38))
{var inst_38104 = (state_38125[2]);var state_38125__$1 = state_38125;var statearr_38193_38256 = state_38125__$1;(statearr_38193_38256[2] = inst_38104);
(statearr_38193_38256[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 30))
{var inst_38061 = (state_38125[19]);var inst_38063 = (state_38125[20]);var inst_38064 = (state_38125[9]);var inst_38062 = (state_38125[10]);var inst_38078 = (state_38125[2]);var inst_38079 = (inst_38064 + 1);var tmp38188 = inst_38061;var tmp38189 = inst_38063;var tmp38190 = inst_38062;var inst_38061__$1 = tmp38188;var inst_38062__$1 = tmp38190;var inst_38063__$1 = tmp38189;var inst_38064__$1 = inst_38079;var state_38125__$1 = (function (){var statearr_38194 = state_38125;(statearr_38194[19] = inst_38061__$1);
(statearr_38194[33] = inst_38078);
(statearr_38194[20] = inst_38063__$1);
(statearr_38194[9] = inst_38064__$1);
(statearr_38194[10] = inst_38062__$1);
return statearr_38194;
})();var statearr_38195_38257 = state_38125__$1;(statearr_38195_38257[2] = null);
(statearr_38195_38257[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 10))
{var inst_38003 = (state_38125[14]);var inst_38005 = (state_38125[15]);var inst_38011 = cljs.core._nth.call(null,inst_38003,inst_38005);var inst_38012 = cljs.core.nth.call(null,inst_38011,0,null);var inst_38013 = cljs.core.nth.call(null,inst_38011,1,null);var state_38125__$1 = (function (){var statearr_38196 = state_38125;(statearr_38196[28] = inst_38012);
return statearr_38196;
})();if(cljs.core.truth_(inst_38013))
{var statearr_38197_38258 = state_38125__$1;(statearr_38197_38258[1] = 13);
} else
{var statearr_38198_38259 = state_38125__$1;(statearr_38198_38259[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 18))
{var inst_38046 = (state_38125[2]);var state_38125__$1 = state_38125;var statearr_38199_38260 = state_38125__$1;(statearr_38199_38260[2] = inst_38046);
(statearr_38199_38260[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 42))
{var state_38125__$1 = state_38125;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38125__$1,45,dchan);
} else
{if((state_val_38126 === 37))
{var inst_38082 = (state_38125[17]);var inst_38091 = cljs.core.first.call(null,inst_38082);var state_38125__$1 = (function (){var statearr_38200 = state_38125;(statearr_38200[25] = inst_38091);
return statearr_38200;
})();var statearr_38201_38261 = state_38125__$1;(statearr_38201_38261[2] = null);
(statearr_38201_38261[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38126 === 8))
{var inst_38005 = (state_38125[15]);var inst_38004 = (state_38125[16]);var inst_38007 = (inst_38005 < inst_38004);var inst_38008 = inst_38007;var state_38125__$1 = state_38125;if(cljs.core.truth_(inst_38008))
{var statearr_38202_38262 = state_38125__$1;(statearr_38202_38262[1] = 10);
} else
{var statearr_38203_38263 = state_38125__$1;(statearr_38203_38263[1] = 11);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_38207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38207[0] = state_machine__26673__auto__);
(statearr_38207[1] = 1);
return statearr_38207;
});
var state_machine__26673__auto____1 = (function (state_38125){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_38125);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e38208){if((e38208 instanceof Object))
{var ex__26676__auto__ = e38208;var statearr_38209_38264 = state_38125;(statearr_38209_38264[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38125);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38265 = state_38125;
state_38125 = G__38265;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_38125){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_38125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_38210 = f__26737__auto__.call(null);(statearr_38210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___38211);
return statearr_38210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
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
cljs.core.async.Mix = (function (){var obj38267 = {};return obj38267;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__14569__auto__ = m;if(and__14569__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__14569__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__15208__auto__ = (((m == null))?null:m);return (function (){var or__14581__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__14569__auto__ = m;if(and__14569__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__14569__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__15208__auto__ = (((m == null))?null:m);return (function (){var or__14581__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__14569__auto__ = m;if(and__14569__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__14569__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__15208__auto__ = (((m == null))?null:m);return (function (){var or__14581__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__14569__auto__ = m;if(and__14569__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__14569__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__15208__auto__ = (((m == null))?null:m);return (function (){var or__14581__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__14569__auto__ = m;if(and__14569__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__14569__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__15208__auto__ = (((m == null))?null:m);return (function (){var or__14581__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t38377 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38377 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta38378){
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
this.meta38378 = meta38378;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38377.cljs$lang$type = true;
cljs.core.async.t38377.cljs$lang$ctorStr = "cljs.core.async/t38377";
cljs.core.async.t38377.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t38377");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38377.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t38377.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38377.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38377.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38377.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38377.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38377.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38377.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38377.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38379){var self__ = this;
var _38379__$1 = this;return self__.meta38378;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t38377.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_38379,meta38378__$1){var self__ = this;
var _38379__$1 = this;return (new cljs.core.async.t38377(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta38378__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t38377 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t38377(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38378){return (new cljs.core.async.t38377(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta38378));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t38377(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__26736__auto___38486 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_38444){var state_val_38445 = (state_38444[1]);if((state_val_38445 === 7))
{var inst_38393 = (state_38444[7]);var inst_38398 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38393);var state_38444__$1 = state_38444;var statearr_38446_38487 = state_38444__$1;(statearr_38446_38487[2] = inst_38398);
(statearr_38446_38487[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 20))
{var inst_38408 = (state_38444[8]);var state_38444__$1 = state_38444;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38444__$1,23,out,inst_38408);
} else
{if((state_val_38445 === 1))
{var inst_38383 = (state_38444[9]);var inst_38383__$1 = calc_state.call(null);var inst_38384 = cljs.core.seq_QMARK_.call(null,inst_38383__$1);var state_38444__$1 = (function (){var statearr_38447 = state_38444;(statearr_38447[9] = inst_38383__$1);
return statearr_38447;
})();if(inst_38384)
{var statearr_38448_38488 = state_38444__$1;(statearr_38448_38488[1] = 2);
} else
{var statearr_38449_38489 = state_38444__$1;(statearr_38449_38489[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 4))
{var inst_38383 = (state_38444[9]);var inst_38389 = (state_38444[2]);var inst_38390 = cljs.core.get.call(null,inst_38389,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_38391 = cljs.core.get.call(null,inst_38389,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_38392 = cljs.core.get.call(null,inst_38389,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_38393 = inst_38383;var state_38444__$1 = (function (){var statearr_38450 = state_38444;(statearr_38450[7] = inst_38393);
(statearr_38450[10] = inst_38390);
(statearr_38450[11] = inst_38392);
(statearr_38450[12] = inst_38391);
return statearr_38450;
})();var statearr_38451_38490 = state_38444__$1;(statearr_38451_38490[2] = null);
(statearr_38451_38490[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 15))
{var state_38444__$1 = state_38444;var statearr_38452_38491 = state_38444__$1;(statearr_38452_38491[2] = null);
(statearr_38452_38491[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 21))
{var state_38444__$1 = state_38444;var statearr_38453_38492 = state_38444__$1;(statearr_38453_38492[2] = null);
(statearr_38453_38492[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 13))
{var inst_38440 = (state_38444[2]);var state_38444__$1 = state_38444;var statearr_38454_38493 = state_38444__$1;(statearr_38454_38493[2] = inst_38440);
(statearr_38454_38493[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 22))
{var inst_38401 = (state_38444[13]);var inst_38437 = (state_38444[2]);var inst_38393 = inst_38401;var state_38444__$1 = (function (){var statearr_38455 = state_38444;(statearr_38455[7] = inst_38393);
(statearr_38455[14] = inst_38437);
return statearr_38455;
})();var statearr_38456_38494 = state_38444__$1;(statearr_38456_38494[2] = null);
(statearr_38456_38494[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 6))
{var inst_38442 = (state_38444[2]);var state_38444__$1 = state_38444;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38444__$1,inst_38442);
} else
{if((state_val_38445 === 17))
{var inst_38423 = (state_38444[15]);var state_38444__$1 = state_38444;var statearr_38457_38495 = state_38444__$1;(statearr_38457_38495[2] = inst_38423);
(statearr_38457_38495[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 3))
{var inst_38383 = (state_38444[9]);var state_38444__$1 = state_38444;var statearr_38458_38496 = state_38444__$1;(statearr_38458_38496[2] = inst_38383);
(statearr_38458_38496[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 12))
{var inst_38404 = (state_38444[16]);var inst_38409 = (state_38444[17]);var inst_38423 = (state_38444[15]);var inst_38423__$1 = inst_38404.call(null,inst_38409);var state_38444__$1 = (function (){var statearr_38459 = state_38444;(statearr_38459[15] = inst_38423__$1);
return statearr_38459;
})();if(cljs.core.truth_(inst_38423__$1))
{var statearr_38460_38497 = state_38444__$1;(statearr_38460_38497[1] = 17);
} else
{var statearr_38461_38498 = state_38444__$1;(statearr_38461_38498[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 2))
{var inst_38383 = (state_38444[9]);var inst_38386 = cljs.core.apply.call(null,cljs.core.hash_map,inst_38383);var state_38444__$1 = state_38444;var statearr_38462_38499 = state_38444__$1;(statearr_38462_38499[2] = inst_38386);
(statearr_38462_38499[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 23))
{var inst_38434 = (state_38444[2]);var state_38444__$1 = state_38444;var statearr_38463_38500 = state_38444__$1;(statearr_38463_38500[2] = inst_38434);
(statearr_38463_38500[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 19))
{var inst_38431 = (state_38444[2]);var state_38444__$1 = state_38444;if(cljs.core.truth_(inst_38431))
{var statearr_38464_38501 = state_38444__$1;(statearr_38464_38501[1] = 20);
} else
{var statearr_38465_38502 = state_38444__$1;(statearr_38465_38502[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 11))
{var inst_38408 = (state_38444[8]);var inst_38414 = (inst_38408 == null);var state_38444__$1 = state_38444;if(cljs.core.truth_(inst_38414))
{var statearr_38466_38503 = state_38444__$1;(statearr_38466_38503[1] = 14);
} else
{var statearr_38467_38504 = state_38444__$1;(statearr_38467_38504[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 9))
{var inst_38401 = (state_38444[13]);var inst_38401__$1 = (state_38444[2]);var inst_38402 = cljs.core.get.call(null,inst_38401__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_38403 = cljs.core.get.call(null,inst_38401__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_38404 = cljs.core.get.call(null,inst_38401__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_38444__$1 = (function (){var statearr_38468 = state_38444;(statearr_38468[16] = inst_38404);
(statearr_38468[13] = inst_38401__$1);
(statearr_38468[18] = inst_38403);
return statearr_38468;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_38444__$1,10,inst_38402);
} else
{if((state_val_38445 === 5))
{var inst_38393 = (state_38444[7]);var inst_38396 = cljs.core.seq_QMARK_.call(null,inst_38393);var state_38444__$1 = state_38444;if(inst_38396)
{var statearr_38469_38505 = state_38444__$1;(statearr_38469_38505[1] = 7);
} else
{var statearr_38470_38506 = state_38444__$1;(statearr_38470_38506[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 14))
{var inst_38409 = (state_38444[17]);var inst_38416 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_38409);var state_38444__$1 = state_38444;var statearr_38471_38507 = state_38444__$1;(statearr_38471_38507[2] = inst_38416);
(statearr_38471_38507[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 16))
{var inst_38419 = (state_38444[2]);var inst_38420 = calc_state.call(null);var inst_38393 = inst_38420;var state_38444__$1 = (function (){var statearr_38472 = state_38444;(statearr_38472[7] = inst_38393);
(statearr_38472[19] = inst_38419);
return statearr_38472;
})();var statearr_38473_38508 = state_38444__$1;(statearr_38473_38508[2] = null);
(statearr_38473_38508[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 10))
{var inst_38408 = (state_38444[8]);var inst_38409 = (state_38444[17]);var inst_38407 = (state_38444[2]);var inst_38408__$1 = cljs.core.nth.call(null,inst_38407,0,null);var inst_38409__$1 = cljs.core.nth.call(null,inst_38407,1,null);var inst_38410 = (inst_38408__$1 == null);var inst_38411 = cljs.core._EQ_.call(null,inst_38409__$1,change);var inst_38412 = (inst_38410) || (inst_38411);var state_38444__$1 = (function (){var statearr_38474 = state_38444;(statearr_38474[8] = inst_38408__$1);
(statearr_38474[17] = inst_38409__$1);
return statearr_38474;
})();if(cljs.core.truth_(inst_38412))
{var statearr_38475_38509 = state_38444__$1;(statearr_38475_38509[1] = 11);
} else
{var statearr_38476_38510 = state_38444__$1;(statearr_38476_38510[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 18))
{var inst_38404 = (state_38444[16]);var inst_38409 = (state_38444[17]);var inst_38403 = (state_38444[18]);var inst_38426 = cljs.core.empty_QMARK_.call(null,inst_38404);var inst_38427 = inst_38403.call(null,inst_38409);var inst_38428 = cljs.core.not.call(null,inst_38427);var inst_38429 = (inst_38426) && (inst_38428);var state_38444__$1 = state_38444;var statearr_38477_38511 = state_38444__$1;(statearr_38477_38511[2] = inst_38429);
(statearr_38477_38511[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38445 === 8))
{var inst_38393 = (state_38444[7]);var state_38444__$1 = state_38444;var statearr_38478_38512 = state_38444__$1;(statearr_38478_38512[2] = inst_38393);
(statearr_38478_38512[1] = 9);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_38482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38482[0] = state_machine__26673__auto__);
(statearr_38482[1] = 1);
return statearr_38482;
});
var state_machine__26673__auto____1 = (function (state_38444){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_38444);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e38483){if((e38483 instanceof Object))
{var ex__26676__auto__ = e38483;var statearr_38484_38513 = state_38444;(statearr_38484_38513[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38444);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38483;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38514 = state_38444;
state_38444 = G__38514;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_38444){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_38444);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_38485 = f__26737__auto__.call(null);(statearr_38485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___38486);
return statearr_38485;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
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
cljs.core.async.Pub = (function (){var obj38516 = {};return obj38516;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__14569__auto__ = p;if(and__14569__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__14569__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__15208__auto__ = (((p == null))?null:p);return (function (){var or__14581__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__14569__auto__ = p;if(and__14569__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__14569__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__15208__auto__ = (((p == null))?null:p);return (function (){var or__14581__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__14569__auto__ = p;if(and__14569__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__14569__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__15208__auto__ = (((p == null))?null:p);return (function (){var or__14581__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__14569__auto__ = p;if(and__14569__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__14569__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__15208__auto__ = (((p == null))?null:p);return (function (){var or__14581__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15208__auto__)]);if(or__14581__auto__)
{return or__14581__auto__;
} else
{var or__14581__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__14581__auto____$1)
{return or__14581__auto____$1;
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
return (function (topic){var or__14581__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__14581__auto__))
{return or__14581__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__14581__auto__,mults){
return (function (p1__38517_SHARP_){if(cljs.core.truth_(p1__38517_SHARP_.call(null,topic)))
{return p1__38517_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__38517_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14581__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t38642 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38642 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta38643){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta38643 = meta38643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38642.cljs$lang$type = true;
cljs.core.async.t38642.cljs$lang$ctorStr = "cljs.core.async/t38642";
cljs.core.async.t38642.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t38642");
});})(mults,ensure_mult))
;
cljs.core.async.t38642.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t38642.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t38642.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t38642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t38642.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t38642.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t38642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_38644){var self__ = this;
var _38644__$1 = this;return self__.meta38643;
});})(mults,ensure_mult))
;
cljs.core.async.t38642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_38644,meta38643__$1){var self__ = this;
var _38644__$1 = this;return (new cljs.core.async.t38642(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta38643__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t38642 = ((function (mults,ensure_mult){
return (function __GT_t38642(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38643){return (new cljs.core.async.t38642(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta38643));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t38642(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__26736__auto___38766 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_38718){var state_val_38719 = (state_38718[1]);if((state_val_38719 === 7))
{var inst_38714 = (state_38718[2]);var state_38718__$1 = state_38718;var statearr_38720_38767 = state_38718__$1;(statearr_38720_38767[2] = inst_38714);
(statearr_38720_38767[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 20))
{var state_38718__$1 = state_38718;var statearr_38721_38768 = state_38718__$1;(statearr_38721_38768[2] = null);
(statearr_38721_38768[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 1))
{var state_38718__$1 = state_38718;var statearr_38722_38769 = state_38718__$1;(statearr_38722_38769[2] = null);
(statearr_38722_38769[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 24))
{var inst_38647 = (state_38718[7]);var inst_38697 = (state_38718[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38718,23,Object,null,22);var inst_38704 = cljs.core.async.muxch_STAR_.call(null,inst_38697);var state_38718__$1 = state_38718;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38718__$1,25,inst_38704,inst_38647);
} else
{if((state_val_38719 === 4))
{var inst_38647 = (state_38718[7]);var inst_38647__$1 = (state_38718[2]);var inst_38648 = (inst_38647__$1 == null);var state_38718__$1 = (function (){var statearr_38723 = state_38718;(statearr_38723[7] = inst_38647__$1);
return statearr_38723;
})();if(cljs.core.truth_(inst_38648))
{var statearr_38724_38770 = state_38718__$1;(statearr_38724_38770[1] = 5);
} else
{var statearr_38725_38771 = state_38718__$1;(statearr_38725_38771[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 15))
{var inst_38689 = (state_38718[2]);var state_38718__$1 = state_38718;var statearr_38726_38772 = state_38718__$1;(statearr_38726_38772[2] = inst_38689);
(statearr_38726_38772[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 21))
{var inst_38711 = (state_38718[2]);var state_38718__$1 = (function (){var statearr_38727 = state_38718;(statearr_38727[9] = inst_38711);
return statearr_38727;
})();var statearr_38728_38773 = state_38718__$1;(statearr_38728_38773[2] = null);
(statearr_38728_38773[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 13))
{var inst_38671 = (state_38718[10]);var inst_38673 = cljs.core.chunked_seq_QMARK_.call(null,inst_38671);var state_38718__$1 = state_38718;if(inst_38673)
{var statearr_38729_38774 = state_38718__$1;(statearr_38729_38774[1] = 16);
} else
{var statearr_38730_38775 = state_38718__$1;(statearr_38730_38775[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 22))
{var inst_38708 = (state_38718[2]);var state_38718__$1 = state_38718;var statearr_38731_38776 = state_38718__$1;(statearr_38731_38776[2] = inst_38708);
(statearr_38731_38776[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 6))
{var inst_38695 = (state_38718[11]);var inst_38647 = (state_38718[7]);var inst_38697 = (state_38718[8]);var inst_38695__$1 = topic_fn.call(null,inst_38647);var inst_38696 = cljs.core.deref.call(null,mults);var inst_38697__$1 = cljs.core.get.call(null,inst_38696,inst_38695__$1);var state_38718__$1 = (function (){var statearr_38732 = state_38718;(statearr_38732[11] = inst_38695__$1);
(statearr_38732[8] = inst_38697__$1);
return statearr_38732;
})();if(cljs.core.truth_(inst_38697__$1))
{var statearr_38733_38777 = state_38718__$1;(statearr_38733_38777[1] = 19);
} else
{var statearr_38734_38778 = state_38718__$1;(statearr_38734_38778[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 25))
{var inst_38706 = (state_38718[2]);var state_38718__$1 = state_38718;var statearr_38735_38779 = state_38718__$1;(statearr_38735_38779[2] = inst_38706);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38718__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 17))
{var inst_38671 = (state_38718[10]);var inst_38680 = cljs.core.first.call(null,inst_38671);var inst_38681 = cljs.core.async.muxch_STAR_.call(null,inst_38680);var inst_38682 = cljs.core.async.close_BANG_.call(null,inst_38681);var inst_38683 = cljs.core.next.call(null,inst_38671);var inst_38657 = inst_38683;var inst_38658 = null;var inst_38659 = 0;var inst_38660 = 0;var state_38718__$1 = (function (){var statearr_38736 = state_38718;(statearr_38736[12] = inst_38659);
(statearr_38736[13] = inst_38657);
(statearr_38736[14] = inst_38660);
(statearr_38736[15] = inst_38658);
(statearr_38736[16] = inst_38682);
return statearr_38736;
})();var statearr_38737_38780 = state_38718__$1;(statearr_38737_38780[2] = null);
(statearr_38737_38780[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 3))
{var inst_38716 = (state_38718[2]);var state_38718__$1 = state_38718;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38718__$1,inst_38716);
} else
{if((state_val_38719 === 12))
{var inst_38691 = (state_38718[2]);var state_38718__$1 = state_38718;var statearr_38738_38781 = state_38718__$1;(statearr_38738_38781[2] = inst_38691);
(statearr_38738_38781[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 2))
{var state_38718__$1 = state_38718;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38718__$1,4,ch);
} else
{if((state_val_38719 === 23))
{var inst_38695 = (state_38718[11]);var inst_38699 = (state_38718[2]);var inst_38700 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_38695);var state_38718__$1 = (function (){var statearr_38739 = state_38718;(statearr_38739[17] = inst_38699);
return statearr_38739;
})();var statearr_38740_38782 = state_38718__$1;(statearr_38740_38782[2] = inst_38700);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38718__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 19))
{var state_38718__$1 = state_38718;var statearr_38741_38783 = state_38718__$1;(statearr_38741_38783[2] = null);
(statearr_38741_38783[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 11))
{var inst_38671 = (state_38718[10]);var inst_38657 = (state_38718[13]);var inst_38671__$1 = cljs.core.seq.call(null,inst_38657);var state_38718__$1 = (function (){var statearr_38742 = state_38718;(statearr_38742[10] = inst_38671__$1);
return statearr_38742;
})();if(inst_38671__$1)
{var statearr_38743_38784 = state_38718__$1;(statearr_38743_38784[1] = 13);
} else
{var statearr_38744_38785 = state_38718__$1;(statearr_38744_38785[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 9))
{var inst_38693 = (state_38718[2]);var state_38718__$1 = state_38718;var statearr_38745_38786 = state_38718__$1;(statearr_38745_38786[2] = inst_38693);
(statearr_38745_38786[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 5))
{var inst_38654 = cljs.core.deref.call(null,mults);var inst_38655 = cljs.core.vals.call(null,inst_38654);var inst_38656 = cljs.core.seq.call(null,inst_38655);var inst_38657 = inst_38656;var inst_38658 = null;var inst_38659 = 0;var inst_38660 = 0;var state_38718__$1 = (function (){var statearr_38746 = state_38718;(statearr_38746[12] = inst_38659);
(statearr_38746[13] = inst_38657);
(statearr_38746[14] = inst_38660);
(statearr_38746[15] = inst_38658);
return statearr_38746;
})();var statearr_38747_38787 = state_38718__$1;(statearr_38747_38787[2] = null);
(statearr_38747_38787[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 14))
{var state_38718__$1 = state_38718;var statearr_38751_38788 = state_38718__$1;(statearr_38751_38788[2] = null);
(statearr_38751_38788[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 16))
{var inst_38671 = (state_38718[10]);var inst_38675 = cljs.core.chunk_first.call(null,inst_38671);var inst_38676 = cljs.core.chunk_rest.call(null,inst_38671);var inst_38677 = cljs.core.count.call(null,inst_38675);var inst_38657 = inst_38676;var inst_38658 = inst_38675;var inst_38659 = inst_38677;var inst_38660 = 0;var state_38718__$1 = (function (){var statearr_38752 = state_38718;(statearr_38752[12] = inst_38659);
(statearr_38752[13] = inst_38657);
(statearr_38752[14] = inst_38660);
(statearr_38752[15] = inst_38658);
return statearr_38752;
})();var statearr_38753_38789 = state_38718__$1;(statearr_38753_38789[2] = null);
(statearr_38753_38789[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 10))
{var inst_38659 = (state_38718[12]);var inst_38657 = (state_38718[13]);var inst_38660 = (state_38718[14]);var inst_38658 = (state_38718[15]);var inst_38665 = cljs.core._nth.call(null,inst_38658,inst_38660);var inst_38666 = cljs.core.async.muxch_STAR_.call(null,inst_38665);var inst_38667 = cljs.core.async.close_BANG_.call(null,inst_38666);var inst_38668 = (inst_38660 + 1);var tmp38748 = inst_38659;var tmp38749 = inst_38657;var tmp38750 = inst_38658;var inst_38657__$1 = tmp38749;var inst_38658__$1 = tmp38750;var inst_38659__$1 = tmp38748;var inst_38660__$1 = inst_38668;var state_38718__$1 = (function (){var statearr_38754 = state_38718;(statearr_38754[12] = inst_38659__$1);
(statearr_38754[13] = inst_38657__$1);
(statearr_38754[14] = inst_38660__$1);
(statearr_38754[15] = inst_38658__$1);
(statearr_38754[18] = inst_38667);
return statearr_38754;
})();var statearr_38755_38790 = state_38718__$1;(statearr_38755_38790[2] = null);
(statearr_38755_38790[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 18))
{var inst_38686 = (state_38718[2]);var state_38718__$1 = state_38718;var statearr_38756_38791 = state_38718__$1;(statearr_38756_38791[2] = inst_38686);
(statearr_38756_38791[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38719 === 8))
{var inst_38659 = (state_38718[12]);var inst_38660 = (state_38718[14]);var inst_38662 = (inst_38660 < inst_38659);var inst_38663 = inst_38662;var state_38718__$1 = state_38718;if(cljs.core.truth_(inst_38663))
{var statearr_38757_38792 = state_38718__$1;(statearr_38757_38792[1] = 10);
} else
{var statearr_38758_38793 = state_38718__$1;(statearr_38758_38793[1] = 11);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_38762 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38762[0] = state_machine__26673__auto__);
(statearr_38762[1] = 1);
return statearr_38762;
});
var state_machine__26673__auto____1 = (function (state_38718){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_38718);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e38763){if((e38763 instanceof Object))
{var ex__26676__auto__ = e38763;var statearr_38764_38794 = state_38718;(statearr_38764_38794[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38718);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38763;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38795 = state_38718;
state_38718 = G__38795;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_38718){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_38718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_38765 = f__26737__auto__.call(null);(statearr_38765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___38766);
return statearr_38765;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
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
,cljs.core.range.call(null,cnt));var c__26736__auto___38932 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_38902){var state_val_38903 = (state_38902[1]);if((state_val_38903 === 7))
{var state_38902__$1 = state_38902;var statearr_38904_38933 = state_38902__$1;(statearr_38904_38933[2] = null);
(statearr_38904_38933[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38903 === 1))
{var state_38902__$1 = state_38902;var statearr_38905_38934 = state_38902__$1;(statearr_38905_38934[2] = null);
(statearr_38905_38934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38903 === 4))
{var inst_38866 = (state_38902[7]);var inst_38868 = (inst_38866 < cnt);var state_38902__$1 = state_38902;if(cljs.core.truth_(inst_38868))
{var statearr_38906_38935 = state_38902__$1;(statearr_38906_38935[1] = 6);
} else
{var statearr_38907_38936 = state_38902__$1;(statearr_38907_38936[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38903 === 15))
{var inst_38898 = (state_38902[2]);var state_38902__$1 = state_38902;var statearr_38908_38937 = state_38902__$1;(statearr_38908_38937[2] = inst_38898);
(statearr_38908_38937[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38903 === 13))
{var inst_38891 = cljs.core.async.close_BANG_.call(null,out);var state_38902__$1 = state_38902;var statearr_38909_38938 = state_38902__$1;(statearr_38909_38938[2] = inst_38891);
(statearr_38909_38938[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38903 === 6))
{var state_38902__$1 = state_38902;var statearr_38910_38939 = state_38902__$1;(statearr_38910_38939[2] = null);
(statearr_38910_38939[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38903 === 3))
{var inst_38900 = (state_38902[2]);var state_38902__$1 = state_38902;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38902__$1,inst_38900);
} else
{if((state_val_38903 === 12))
{var inst_38888 = (state_38902[8]);var inst_38888__$1 = (state_38902[2]);var inst_38889 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_38888__$1);var state_38902__$1 = (function (){var statearr_38911 = state_38902;(statearr_38911[8] = inst_38888__$1);
return statearr_38911;
})();if(cljs.core.truth_(inst_38889))
{var statearr_38912_38940 = state_38902__$1;(statearr_38912_38940[1] = 13);
} else
{var statearr_38913_38941 = state_38902__$1;(statearr_38913_38941[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38903 === 2))
{var inst_38865 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_38866 = 0;var state_38902__$1 = (function (){var statearr_38914 = state_38902;(statearr_38914[7] = inst_38866);
(statearr_38914[9] = inst_38865);
return statearr_38914;
})();var statearr_38915_38942 = state_38902__$1;(statearr_38915_38942[2] = null);
(statearr_38915_38942[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38903 === 11))
{var inst_38866 = (state_38902[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38902,10,Object,null,9);var inst_38875 = chs__$1.call(null,inst_38866);var inst_38876 = done.call(null,inst_38866);var inst_38877 = cljs.core.async.take_BANG_.call(null,inst_38875,inst_38876);var state_38902__$1 = state_38902;var statearr_38916_38943 = state_38902__$1;(statearr_38916_38943[2] = inst_38877);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38902__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38903 === 9))
{var inst_38866 = (state_38902[7]);var inst_38879 = (state_38902[2]);var inst_38880 = (inst_38866 + 1);var inst_38866__$1 = inst_38880;var state_38902__$1 = (function (){var statearr_38917 = state_38902;(statearr_38917[7] = inst_38866__$1);
(statearr_38917[10] = inst_38879);
return statearr_38917;
})();var statearr_38918_38944 = state_38902__$1;(statearr_38918_38944[2] = null);
(statearr_38918_38944[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38903 === 5))
{var inst_38886 = (state_38902[2]);var state_38902__$1 = (function (){var statearr_38919 = state_38902;(statearr_38919[11] = inst_38886);
return statearr_38919;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38902__$1,12,dchan);
} else
{if((state_val_38903 === 14))
{var inst_38888 = (state_38902[8]);var inst_38893 = cljs.core.apply.call(null,f,inst_38888);var state_38902__$1 = state_38902;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38902__$1,16,out,inst_38893);
} else
{if((state_val_38903 === 16))
{var inst_38895 = (state_38902[2]);var state_38902__$1 = (function (){var statearr_38920 = state_38902;(statearr_38920[12] = inst_38895);
return statearr_38920;
})();var statearr_38921_38945 = state_38902__$1;(statearr_38921_38945[2] = null);
(statearr_38921_38945[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38903 === 10))
{var inst_38870 = (state_38902[2]);var inst_38871 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_38902__$1 = (function (){var statearr_38922 = state_38902;(statearr_38922[13] = inst_38870);
return statearr_38922;
})();var statearr_38923_38946 = state_38902__$1;(statearr_38923_38946[2] = inst_38871);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38902__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38903 === 8))
{var inst_38884 = (state_38902[2]);var state_38902__$1 = state_38902;var statearr_38924_38947 = state_38902__$1;(statearr_38924_38947[2] = inst_38884);
(statearr_38924_38947[1] = 5);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_38928 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38928[0] = state_machine__26673__auto__);
(statearr_38928[1] = 1);
return statearr_38928;
});
var state_machine__26673__auto____1 = (function (state_38902){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_38902);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e38929){if((e38929 instanceof Object))
{var ex__26676__auto__ = e38929;var statearr_38930_38948 = state_38902;(statearr_38930_38948[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38902);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38949 = state_38902;
state_38902 = G__38949;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_38902){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_38902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_38931 = f__26737__auto__.call(null);(statearr_38931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___38932);
return statearr_38931;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__26736__auto___39057 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_39033){var state_val_39034 = (state_39033[1]);if((state_val_39034 === 7))
{var inst_39013 = (state_39033[7]);var inst_39012 = (state_39033[8]);var inst_39012__$1 = (state_39033[2]);var inst_39013__$1 = cljs.core.nth.call(null,inst_39012__$1,0,null);var inst_39014 = cljs.core.nth.call(null,inst_39012__$1,1,null);var inst_39015 = (inst_39013__$1 == null);var state_39033__$1 = (function (){var statearr_39035 = state_39033;(statearr_39035[7] = inst_39013__$1);
(statearr_39035[9] = inst_39014);
(statearr_39035[8] = inst_39012__$1);
return statearr_39035;
})();if(cljs.core.truth_(inst_39015))
{var statearr_39036_39058 = state_39033__$1;(statearr_39036_39058[1] = 8);
} else
{var statearr_39037_39059 = state_39033__$1;(statearr_39037_39059[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39034 === 1))
{var inst_39004 = cljs.core.vec.call(null,chs);var inst_39005 = inst_39004;var state_39033__$1 = (function (){var statearr_39038 = state_39033;(statearr_39038[10] = inst_39005);
return statearr_39038;
})();var statearr_39039_39060 = state_39033__$1;(statearr_39039_39060[2] = null);
(statearr_39039_39060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39034 === 4))
{var inst_39005 = (state_39033[10]);var state_39033__$1 = state_39033;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_39033__$1,7,inst_39005);
} else
{if((state_val_39034 === 6))
{var inst_39029 = (state_39033[2]);var state_39033__$1 = state_39033;var statearr_39040_39061 = state_39033__$1;(statearr_39040_39061[2] = inst_39029);
(statearr_39040_39061[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39034 === 3))
{var inst_39031 = (state_39033[2]);var state_39033__$1 = state_39033;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39033__$1,inst_39031);
} else
{if((state_val_39034 === 2))
{var inst_39005 = (state_39033[10]);var inst_39007 = cljs.core.count.call(null,inst_39005);var inst_39008 = (inst_39007 > 0);var state_39033__$1 = state_39033;if(cljs.core.truth_(inst_39008))
{var statearr_39042_39062 = state_39033__$1;(statearr_39042_39062[1] = 4);
} else
{var statearr_39043_39063 = state_39033__$1;(statearr_39043_39063[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39034 === 11))
{var inst_39005 = (state_39033[10]);var inst_39022 = (state_39033[2]);var tmp39041 = inst_39005;var inst_39005__$1 = tmp39041;var state_39033__$1 = (function (){var statearr_39044 = state_39033;(statearr_39044[11] = inst_39022);
(statearr_39044[10] = inst_39005__$1);
return statearr_39044;
})();var statearr_39045_39064 = state_39033__$1;(statearr_39045_39064[2] = null);
(statearr_39045_39064[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39034 === 9))
{var inst_39013 = (state_39033[7]);var state_39033__$1 = state_39033;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39033__$1,11,out,inst_39013);
} else
{if((state_val_39034 === 5))
{var inst_39027 = cljs.core.async.close_BANG_.call(null,out);var state_39033__$1 = state_39033;var statearr_39046_39065 = state_39033__$1;(statearr_39046_39065[2] = inst_39027);
(statearr_39046_39065[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39034 === 10))
{var inst_39025 = (state_39033[2]);var state_39033__$1 = state_39033;var statearr_39047_39066 = state_39033__$1;(statearr_39047_39066[2] = inst_39025);
(statearr_39047_39066[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39034 === 8))
{var inst_39013 = (state_39033[7]);var inst_39014 = (state_39033[9]);var inst_39005 = (state_39033[10]);var inst_39012 = (state_39033[8]);var inst_39017 = (function (){var c = inst_39014;var v = inst_39013;var vec__39010 = inst_39012;var cs = inst_39005;return ((function (c,v,vec__39010,cs,inst_39013,inst_39014,inst_39005,inst_39012,state_val_39034){
return (function (p1__38950_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__38950_SHARP_);
});
;})(c,v,vec__39010,cs,inst_39013,inst_39014,inst_39005,inst_39012,state_val_39034))
})();var inst_39018 = cljs.core.filterv.call(null,inst_39017,inst_39005);var inst_39005__$1 = inst_39018;var state_39033__$1 = (function (){var statearr_39048 = state_39033;(statearr_39048[10] = inst_39005__$1);
return statearr_39048;
})();var statearr_39049_39067 = state_39033__$1;(statearr_39049_39067[2] = null);
(statearr_39049_39067[1] = 2);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_39053 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39053[0] = state_machine__26673__auto__);
(statearr_39053[1] = 1);
return statearr_39053;
});
var state_machine__26673__auto____1 = (function (state_39033){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_39033);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e39054){if((e39054 instanceof Object))
{var ex__26676__auto__ = e39054;var statearr_39055_39068 = state_39033;(statearr_39055_39068[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39033);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39054;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39069 = state_39033;
state_39033 = G__39069;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_39033){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_39033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_39056 = f__26737__auto__.call(null);(statearr_39056[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___39057);
return statearr_39056;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__26736__auto___39162 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_39139){var state_val_39140 = (state_39139[1]);if((state_val_39140 === 7))
{var inst_39121 = (state_39139[7]);var inst_39121__$1 = (state_39139[2]);var inst_39122 = (inst_39121__$1 == null);var inst_39123 = cljs.core.not.call(null,inst_39122);var state_39139__$1 = (function (){var statearr_39141 = state_39139;(statearr_39141[7] = inst_39121__$1);
return statearr_39141;
})();if(inst_39123)
{var statearr_39142_39163 = state_39139__$1;(statearr_39142_39163[1] = 8);
} else
{var statearr_39143_39164 = state_39139__$1;(statearr_39143_39164[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39140 === 1))
{var inst_39116 = 0;var state_39139__$1 = (function (){var statearr_39144 = state_39139;(statearr_39144[8] = inst_39116);
return statearr_39144;
})();var statearr_39145_39165 = state_39139__$1;(statearr_39145_39165[2] = null);
(statearr_39145_39165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39140 === 4))
{var state_39139__$1 = state_39139;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39139__$1,7,ch);
} else
{if((state_val_39140 === 6))
{var inst_39134 = (state_39139[2]);var state_39139__$1 = state_39139;var statearr_39146_39166 = state_39139__$1;(statearr_39146_39166[2] = inst_39134);
(statearr_39146_39166[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39140 === 3))
{var inst_39136 = (state_39139[2]);var inst_39137 = cljs.core.async.close_BANG_.call(null,out);var state_39139__$1 = (function (){var statearr_39147 = state_39139;(statearr_39147[9] = inst_39136);
return statearr_39147;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39139__$1,inst_39137);
} else
{if((state_val_39140 === 2))
{var inst_39116 = (state_39139[8]);var inst_39118 = (inst_39116 < n);var state_39139__$1 = state_39139;if(cljs.core.truth_(inst_39118))
{var statearr_39148_39167 = state_39139__$1;(statearr_39148_39167[1] = 4);
} else
{var statearr_39149_39168 = state_39139__$1;(statearr_39149_39168[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39140 === 11))
{var inst_39116 = (state_39139[8]);var inst_39126 = (state_39139[2]);var inst_39127 = (inst_39116 + 1);var inst_39116__$1 = inst_39127;var state_39139__$1 = (function (){var statearr_39150 = state_39139;(statearr_39150[10] = inst_39126);
(statearr_39150[8] = inst_39116__$1);
return statearr_39150;
})();var statearr_39151_39169 = state_39139__$1;(statearr_39151_39169[2] = null);
(statearr_39151_39169[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39140 === 9))
{var state_39139__$1 = state_39139;var statearr_39152_39170 = state_39139__$1;(statearr_39152_39170[2] = null);
(statearr_39152_39170[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39140 === 5))
{var state_39139__$1 = state_39139;var statearr_39153_39171 = state_39139__$1;(statearr_39153_39171[2] = null);
(statearr_39153_39171[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39140 === 10))
{var inst_39131 = (state_39139[2]);var state_39139__$1 = state_39139;var statearr_39154_39172 = state_39139__$1;(statearr_39154_39172[2] = inst_39131);
(statearr_39154_39172[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39140 === 8))
{var inst_39121 = (state_39139[7]);var state_39139__$1 = state_39139;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39139__$1,11,out,inst_39121);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_39158 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_39158[0] = state_machine__26673__auto__);
(statearr_39158[1] = 1);
return statearr_39158;
});
var state_machine__26673__auto____1 = (function (state_39139){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_39139);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e39159){if((e39159 instanceof Object))
{var ex__26676__auto__ = e39159;var statearr_39160_39173 = state_39139;(statearr_39160_39173[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39139);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39159;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39174 = state_39139;
state_39139 = G__39174;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_39139){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_39139);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_39161 = f__26737__auto__.call(null);(statearr_39161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___39162);
return statearr_39161;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__26736__auto___39271 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_39246){var state_val_39247 = (state_39246[1]);if((state_val_39247 === 7))
{var inst_39241 = (state_39246[2]);var state_39246__$1 = state_39246;var statearr_39248_39272 = state_39246__$1;(statearr_39248_39272[2] = inst_39241);
(statearr_39248_39272[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 1))
{var inst_39223 = null;var state_39246__$1 = (function (){var statearr_39249 = state_39246;(statearr_39249[7] = inst_39223);
return statearr_39249;
})();var statearr_39250_39273 = state_39246__$1;(statearr_39250_39273[2] = null);
(statearr_39250_39273[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 4))
{var inst_39226 = (state_39246[8]);var inst_39226__$1 = (state_39246[2]);var inst_39227 = (inst_39226__$1 == null);var inst_39228 = cljs.core.not.call(null,inst_39227);var state_39246__$1 = (function (){var statearr_39251 = state_39246;(statearr_39251[8] = inst_39226__$1);
return statearr_39251;
})();if(inst_39228)
{var statearr_39252_39274 = state_39246__$1;(statearr_39252_39274[1] = 5);
} else
{var statearr_39253_39275 = state_39246__$1;(statearr_39253_39275[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 6))
{var state_39246__$1 = state_39246;var statearr_39254_39276 = state_39246__$1;(statearr_39254_39276[2] = null);
(statearr_39254_39276[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 3))
{var inst_39243 = (state_39246[2]);var inst_39244 = cljs.core.async.close_BANG_.call(null,out);var state_39246__$1 = (function (){var statearr_39255 = state_39246;(statearr_39255[9] = inst_39243);
return statearr_39255;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39246__$1,inst_39244);
} else
{if((state_val_39247 === 2))
{var state_39246__$1 = state_39246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39246__$1,4,ch);
} else
{if((state_val_39247 === 11))
{var inst_39226 = (state_39246[8]);var inst_39235 = (state_39246[2]);var inst_39223 = inst_39226;var state_39246__$1 = (function (){var statearr_39256 = state_39246;(statearr_39256[7] = inst_39223);
(statearr_39256[10] = inst_39235);
return statearr_39256;
})();var statearr_39257_39277 = state_39246__$1;(statearr_39257_39277[2] = null);
(statearr_39257_39277[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 9))
{var inst_39226 = (state_39246[8]);var state_39246__$1 = state_39246;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39246__$1,11,out,inst_39226);
} else
{if((state_val_39247 === 5))
{var inst_39223 = (state_39246[7]);var inst_39226 = (state_39246[8]);var inst_39230 = cljs.core._EQ_.call(null,inst_39226,inst_39223);var state_39246__$1 = state_39246;if(inst_39230)
{var statearr_39259_39278 = state_39246__$1;(statearr_39259_39278[1] = 8);
} else
{var statearr_39260_39279 = state_39246__$1;(statearr_39260_39279[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 10))
{var inst_39238 = (state_39246[2]);var state_39246__$1 = state_39246;var statearr_39261_39280 = state_39246__$1;(statearr_39261_39280[2] = inst_39238);
(statearr_39261_39280[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 8))
{var inst_39223 = (state_39246[7]);var tmp39258 = inst_39223;var inst_39223__$1 = tmp39258;var state_39246__$1 = (function (){var statearr_39262 = state_39246;(statearr_39262[7] = inst_39223__$1);
return statearr_39262;
})();var statearr_39263_39281 = state_39246__$1;(statearr_39263_39281[2] = null);
(statearr_39263_39281[1] = 2);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_39267 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_39267[0] = state_machine__26673__auto__);
(statearr_39267[1] = 1);
return statearr_39267;
});
var state_machine__26673__auto____1 = (function (state_39246){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_39246);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e39268){if((e39268 instanceof Object))
{var ex__26676__auto__ = e39268;var statearr_39269_39282 = state_39246;(statearr_39269_39282[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39246);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39268;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39283 = state_39246;
state_39246 = G__39283;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_39246){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_39246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_39270 = f__26737__auto__.call(null);(statearr_39270[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___39271);
return statearr_39270;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__26736__auto___39418 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_39388){var state_val_39389 = (state_39388[1]);if((state_val_39389 === 7))
{var inst_39384 = (state_39388[2]);var state_39388__$1 = state_39388;var statearr_39390_39419 = state_39388__$1;(statearr_39390_39419[2] = inst_39384);
(statearr_39390_39419[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39389 === 1))
{var inst_39351 = (new Array(n));var inst_39352 = inst_39351;var inst_39353 = 0;var state_39388__$1 = (function (){var statearr_39391 = state_39388;(statearr_39391[7] = inst_39352);
(statearr_39391[8] = inst_39353);
return statearr_39391;
})();var statearr_39392_39420 = state_39388__$1;(statearr_39392_39420[2] = null);
(statearr_39392_39420[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39389 === 4))
{var inst_39356 = (state_39388[9]);var inst_39356__$1 = (state_39388[2]);var inst_39357 = (inst_39356__$1 == null);var inst_39358 = cljs.core.not.call(null,inst_39357);var state_39388__$1 = (function (){var statearr_39393 = state_39388;(statearr_39393[9] = inst_39356__$1);
return statearr_39393;
})();if(inst_39358)
{var statearr_39394_39421 = state_39388__$1;(statearr_39394_39421[1] = 5);
} else
{var statearr_39395_39422 = state_39388__$1;(statearr_39395_39422[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39389 === 15))
{var inst_39378 = (state_39388[2]);var state_39388__$1 = state_39388;var statearr_39396_39423 = state_39388__$1;(statearr_39396_39423[2] = inst_39378);
(statearr_39396_39423[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39389 === 13))
{var state_39388__$1 = state_39388;var statearr_39397_39424 = state_39388__$1;(statearr_39397_39424[2] = null);
(statearr_39397_39424[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39389 === 6))
{var inst_39353 = (state_39388[8]);var inst_39374 = (inst_39353 > 0);var state_39388__$1 = state_39388;if(cljs.core.truth_(inst_39374))
{var statearr_39398_39425 = state_39388__$1;(statearr_39398_39425[1] = 12);
} else
{var statearr_39399_39426 = state_39388__$1;(statearr_39399_39426[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39389 === 3))
{var inst_39386 = (state_39388[2]);var state_39388__$1 = state_39388;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39388__$1,inst_39386);
} else
{if((state_val_39389 === 12))
{var inst_39352 = (state_39388[7]);var inst_39376 = cljs.core.vec.call(null,inst_39352);var state_39388__$1 = state_39388;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39388__$1,15,out,inst_39376);
} else
{if((state_val_39389 === 2))
{var state_39388__$1 = state_39388;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39388__$1,4,ch);
} else
{if((state_val_39389 === 11))
{var inst_39368 = (state_39388[2]);var inst_39369 = (new Array(n));var inst_39352 = inst_39369;var inst_39353 = 0;var state_39388__$1 = (function (){var statearr_39400 = state_39388;(statearr_39400[7] = inst_39352);
(statearr_39400[10] = inst_39368);
(statearr_39400[8] = inst_39353);
return statearr_39400;
})();var statearr_39401_39427 = state_39388__$1;(statearr_39401_39427[2] = null);
(statearr_39401_39427[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39389 === 9))
{var inst_39352 = (state_39388[7]);var inst_39366 = cljs.core.vec.call(null,inst_39352);var state_39388__$1 = state_39388;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39388__$1,11,out,inst_39366);
} else
{if((state_val_39389 === 5))
{var inst_39361 = (state_39388[11]);var inst_39352 = (state_39388[7]);var inst_39356 = (state_39388[9]);var inst_39353 = (state_39388[8]);var inst_39360 = (inst_39352[inst_39353] = inst_39356);var inst_39361__$1 = (inst_39353 + 1);var inst_39362 = (inst_39361__$1 < n);var state_39388__$1 = (function (){var statearr_39402 = state_39388;(statearr_39402[11] = inst_39361__$1);
(statearr_39402[12] = inst_39360);
return statearr_39402;
})();if(cljs.core.truth_(inst_39362))
{var statearr_39403_39428 = state_39388__$1;(statearr_39403_39428[1] = 8);
} else
{var statearr_39404_39429 = state_39388__$1;(statearr_39404_39429[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39389 === 14))
{var inst_39381 = (state_39388[2]);var inst_39382 = cljs.core.async.close_BANG_.call(null,out);var state_39388__$1 = (function (){var statearr_39406 = state_39388;(statearr_39406[13] = inst_39381);
return statearr_39406;
})();var statearr_39407_39430 = state_39388__$1;(statearr_39407_39430[2] = inst_39382);
(statearr_39407_39430[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39389 === 10))
{var inst_39372 = (state_39388[2]);var state_39388__$1 = state_39388;var statearr_39408_39431 = state_39388__$1;(statearr_39408_39431[2] = inst_39372);
(statearr_39408_39431[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39389 === 8))
{var inst_39361 = (state_39388[11]);var inst_39352 = (state_39388[7]);var tmp39405 = inst_39352;var inst_39352__$1 = tmp39405;var inst_39353 = inst_39361;var state_39388__$1 = (function (){var statearr_39409 = state_39388;(statearr_39409[7] = inst_39352__$1);
(statearr_39409[8] = inst_39353);
return statearr_39409;
})();var statearr_39410_39432 = state_39388__$1;(statearr_39410_39432[2] = null);
(statearr_39410_39432[1] = 2);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_39414 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39414[0] = state_machine__26673__auto__);
(statearr_39414[1] = 1);
return statearr_39414;
});
var state_machine__26673__auto____1 = (function (state_39388){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_39388);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e39415){if((e39415 instanceof Object))
{var ex__26676__auto__ = e39415;var statearr_39416_39433 = state_39388;(statearr_39416_39433[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39388);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39415;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39434 = state_39388;
state_39388 = G__39434;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_39388){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_39388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_39417 = f__26737__auto__.call(null);(statearr_39417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___39418);
return statearr_39417;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__26736__auto___39577 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26737__auto__ = (function (){var switch__26672__auto__ = (function (state_39547){var state_val_39548 = (state_39547[1]);if((state_val_39548 === 7))
{var inst_39543 = (state_39547[2]);var state_39547__$1 = state_39547;var statearr_39549_39578 = state_39547__$1;(statearr_39549_39578[2] = inst_39543);
(statearr_39549_39578[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 1))
{var inst_39506 = [];var inst_39507 = inst_39506;var inst_39508 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_39547__$1 = (function (){var statearr_39550 = state_39547;(statearr_39550[7] = inst_39508);
(statearr_39550[8] = inst_39507);
return statearr_39550;
})();var statearr_39551_39579 = state_39547__$1;(statearr_39551_39579[2] = null);
(statearr_39551_39579[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 4))
{var inst_39511 = (state_39547[9]);var inst_39511__$1 = (state_39547[2]);var inst_39512 = (inst_39511__$1 == null);var inst_39513 = cljs.core.not.call(null,inst_39512);var state_39547__$1 = (function (){var statearr_39552 = state_39547;(statearr_39552[9] = inst_39511__$1);
return statearr_39552;
})();if(inst_39513)
{var statearr_39553_39580 = state_39547__$1;(statearr_39553_39580[1] = 5);
} else
{var statearr_39554_39581 = state_39547__$1;(statearr_39554_39581[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 15))
{var inst_39537 = (state_39547[2]);var state_39547__$1 = state_39547;var statearr_39555_39582 = state_39547__$1;(statearr_39555_39582[2] = inst_39537);
(statearr_39555_39582[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 13))
{var state_39547__$1 = state_39547;var statearr_39556_39583 = state_39547__$1;(statearr_39556_39583[2] = null);
(statearr_39556_39583[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 6))
{var inst_39507 = (state_39547[8]);var inst_39532 = inst_39507.length;var inst_39533 = (inst_39532 > 0);var state_39547__$1 = state_39547;if(cljs.core.truth_(inst_39533))
{var statearr_39557_39584 = state_39547__$1;(statearr_39557_39584[1] = 12);
} else
{var statearr_39558_39585 = state_39547__$1;(statearr_39558_39585[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 3))
{var inst_39545 = (state_39547[2]);var state_39547__$1 = state_39547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39547__$1,inst_39545);
} else
{if((state_val_39548 === 12))
{var inst_39507 = (state_39547[8]);var inst_39535 = cljs.core.vec.call(null,inst_39507);var state_39547__$1 = state_39547;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39547__$1,15,out,inst_39535);
} else
{if((state_val_39548 === 2))
{var state_39547__$1 = state_39547;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39547__$1,4,ch);
} else
{if((state_val_39548 === 11))
{var inst_39515 = (state_39547[10]);var inst_39511 = (state_39547[9]);var inst_39525 = (state_39547[2]);var inst_39526 = [];var inst_39527 = inst_39526.push(inst_39511);var inst_39507 = inst_39526;var inst_39508 = inst_39515;var state_39547__$1 = (function (){var statearr_39559 = state_39547;(statearr_39559[11] = inst_39525);
(statearr_39559[12] = inst_39527);
(statearr_39559[7] = inst_39508);
(statearr_39559[8] = inst_39507);
return statearr_39559;
})();var statearr_39560_39586 = state_39547__$1;(statearr_39560_39586[2] = null);
(statearr_39560_39586[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 9))
{var inst_39507 = (state_39547[8]);var inst_39523 = cljs.core.vec.call(null,inst_39507);var state_39547__$1 = state_39547;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39547__$1,11,out,inst_39523);
} else
{if((state_val_39548 === 5))
{var inst_39515 = (state_39547[10]);var inst_39508 = (state_39547[7]);var inst_39511 = (state_39547[9]);var inst_39515__$1 = f.call(null,inst_39511);var inst_39516 = cljs.core._EQ_.call(null,inst_39515__$1,inst_39508);var inst_39517 = cljs.core.keyword_identical_QMARK_.call(null,inst_39508,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_39518 = (inst_39516) || (inst_39517);var state_39547__$1 = (function (){var statearr_39561 = state_39547;(statearr_39561[10] = inst_39515__$1);
return statearr_39561;
})();if(cljs.core.truth_(inst_39518))
{var statearr_39562_39587 = state_39547__$1;(statearr_39562_39587[1] = 8);
} else
{var statearr_39563_39588 = state_39547__$1;(statearr_39563_39588[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 14))
{var inst_39540 = (state_39547[2]);var inst_39541 = cljs.core.async.close_BANG_.call(null,out);var state_39547__$1 = (function (){var statearr_39565 = state_39547;(statearr_39565[13] = inst_39540);
return statearr_39565;
})();var statearr_39566_39589 = state_39547__$1;(statearr_39566_39589[2] = inst_39541);
(statearr_39566_39589[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 10))
{var inst_39530 = (state_39547[2]);var state_39547__$1 = state_39547;var statearr_39567_39590 = state_39547__$1;(statearr_39567_39590[2] = inst_39530);
(statearr_39567_39590[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39548 === 8))
{var inst_39515 = (state_39547[10]);var inst_39511 = (state_39547[9]);var inst_39507 = (state_39547[8]);var inst_39520 = inst_39507.push(inst_39511);var tmp39564 = inst_39507;var inst_39507__$1 = tmp39564;var inst_39508 = inst_39515;var state_39547__$1 = (function (){var statearr_39568 = state_39547;(statearr_39568[14] = inst_39520);
(statearr_39568[7] = inst_39508);
(statearr_39568[8] = inst_39507__$1);
return statearr_39568;
})();var statearr_39569_39591 = state_39547__$1;(statearr_39569_39591[2] = null);
(statearr_39569_39591[1] = 2);
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
});return ((function (switch__26672__auto__){
return (function() {
var state_machine__26673__auto__ = null;
var state_machine__26673__auto____0 = (function (){var statearr_39573 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39573[0] = state_machine__26673__auto__);
(statearr_39573[1] = 1);
return statearr_39573;
});
var state_machine__26673__auto____1 = (function (state_39547){while(true){
var ret_value__26674__auto__ = (function (){try{while(true){
var result__26675__auto__ = switch__26672__auto__.call(null,state_39547);if(cljs.core.keyword_identical_QMARK_.call(null,result__26675__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26675__auto__;
}
break;
}
}catch (e39574){if((e39574 instanceof Object))
{var ex__26676__auto__ = e39574;var statearr_39575_39592 = state_39547;(statearr_39575_39592[5] = ex__26676__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39547);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39574;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26674__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39593 = state_39547;
state_39547 = G__39593;
continue;
}
} else
{return ret_value__26674__auto__;
}
break;
}
});
state_machine__26673__auto__ = function(state_39547){
switch(arguments.length){
case 0:
return state_machine__26673__auto____0.call(this);
case 1:
return state_machine__26673__auto____1.call(this,state_39547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26673__auto____0;
state_machine__26673__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26673__auto____1;
return state_machine__26673__auto__;
})()
;})(switch__26672__auto__))
})();var state__26738__auto__ = (function (){var statearr_39576 = f__26737__auto__.call(null);(statearr_39576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26736__auto___39577);
return statearr_39576;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26738__auto__);
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

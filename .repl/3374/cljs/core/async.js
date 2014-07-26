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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t41861 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41861 = (function (f,fn_handler,meta41862){
this.f = f;
this.fn_handler = fn_handler;
this.meta41862 = meta41862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41861.cljs$lang$type = true;
cljs.core.async.t41861.cljs$lang$ctorStr = "cljs.core.async/t41861";
cljs.core.async.t41861.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t41861");
});
cljs.core.async.t41861.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41861.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t41861.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t41861.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41863){var self__ = this;
var _41863__$1 = this;return self__.meta41862;
});
cljs.core.async.t41861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41863,meta41862__$1){var self__ = this;
var _41863__$1 = this;return (new cljs.core.async.t41861(self__.f,self__.fn_handler,meta41862__$1));
});
cljs.core.async.__GT_t41861 = (function __GT_t41861(f__$1,fn_handler__$1,meta41862){return (new cljs.core.async.t41861(f__$1,fn_handler__$1,meta41862));
});
}
return (new cljs.core.async.t41861(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__41865 = buff;if(G__41865)
{var bit__15632__auto__ = null;if(cljs.core.truth_((function (){var or__14982__auto__ = bit__15632__auto__;if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return G__41865.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__41865.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__41865);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__41865);
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
{var val_41866 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_41866);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_41866);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15830__auto___41867 = n;var x_41868 = 0;while(true){
if((x_41868 < n__15830__auto___41867))
{(a[x_41868] = 0);
{
var G__41869 = (x_41868 + 1);
x_41868 = G__41869;
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
var G__41870 = (i + 1);
i = G__41870;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t41874 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41874 = (function (flag,alt_flag,meta41875){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta41875 = meta41875;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41874.cljs$lang$type = true;
cljs.core.async.t41874.cljs$lang$ctorStr = "cljs.core.async/t41874";
cljs.core.async.t41874.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t41874");
});
cljs.core.async.t41874.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41874.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t41874.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t41874.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41876){var self__ = this;
var _41876__$1 = this;return self__.meta41875;
});
cljs.core.async.t41874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41876,meta41875__$1){var self__ = this;
var _41876__$1 = this;return (new cljs.core.async.t41874(self__.flag,self__.alt_flag,meta41875__$1));
});
cljs.core.async.__GT_t41874 = (function __GT_t41874(flag__$1,alt_flag__$1,meta41875){return (new cljs.core.async.t41874(flag__$1,alt_flag__$1,meta41875));
});
}
return (new cljs.core.async.t41874(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t41880 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41880 = (function (cb,flag,alt_handler,meta41881){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta41881 = meta41881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41880.cljs$lang$type = true;
cljs.core.async.t41880.cljs$lang$ctorStr = "cljs.core.async/t41880";
cljs.core.async.t41880.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t41880");
});
cljs.core.async.t41880.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41880.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t41880.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t41880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41882){var self__ = this;
var _41882__$1 = this;return self__.meta41881;
});
cljs.core.async.t41880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41882,meta41881__$1){var self__ = this;
var _41882__$1 = this;return (new cljs.core.async.t41880(self__.cb,self__.flag,self__.alt_handler,meta41881__$1));
});
cljs.core.async.__GT_t41880 = (function __GT_t41880(cb__$1,flag__$1,alt_handler__$1,meta41881){return (new cljs.core.async.t41880(cb__$1,flag__$1,alt_handler__$1,meta41881));
});
}
return (new cljs.core.async.t41880(cb,flag,alt_handler,null));
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
return (function (p1__41883_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__41883_SHARP_,port], null));
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
var G__41884 = (i + 1);
i = G__41884;
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
var alts_BANG___delegate = function (ports,p__41885){var map__41887 = p__41885;var map__41887__$1 = ((cljs.core.seq_QMARK_.call(null,map__41887))?cljs.core.apply.call(null,cljs.core.hash_map,map__41887):map__41887);var opts = map__41887__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__41885 = null;if (arguments.length > 1) {
  p__41885 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__41885);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__41888){
var ports = cljs.core.first(arglist__41888);
var p__41885 = cljs.core.rest(arglist__41888);
return alts_BANG___delegate(ports,p__41885);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t41896 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41896 = (function (ch,f,map_LT_,meta41897){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta41897 = meta41897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41896.cljs$lang$type = true;
cljs.core.async.t41896.cljs$lang$ctorStr = "cljs.core.async/t41896";
cljs.core.async.t41896.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t41896");
});
cljs.core.async.t41896.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41896.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t41896.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41896.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t41899 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41899 = (function (fn1,_,meta41897,ch,f,map_LT_,meta41900){
this.fn1 = fn1;
this._ = _;
this.meta41897 = meta41897;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta41900 = meta41900;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41899.cljs$lang$type = true;
cljs.core.async.t41899.cljs$lang$ctorStr = "cljs.core.async/t41899";
cljs.core.async.t41899.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t41899");
});
cljs.core.async.t41899.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t41899.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t41899.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t41899.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__41889_SHARP_){return f1.call(null,(((p1__41889_SHARP_ == null))?null:self__.f.call(null,p1__41889_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t41899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41901){var self__ = this;
var _41901__$1 = this;return self__.meta41900;
});
cljs.core.async.t41899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41901,meta41900__$1){var self__ = this;
var _41901__$1 = this;return (new cljs.core.async.t41899(self__.fn1,self__._,self__.meta41897,self__.ch,self__.f,self__.map_LT_,meta41900__$1));
});
cljs.core.async.__GT_t41899 = (function __GT_t41899(fn1__$1,___$2,meta41897__$1,ch__$2,f__$2,map_LT___$2,meta41900){return (new cljs.core.async.t41899(fn1__$1,___$2,meta41897__$1,ch__$2,f__$2,map_LT___$2,meta41900));
});
}
return (new cljs.core.async.t41899(fn1,___$1,self__.meta41897,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t41896.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41896.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t41896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41898){var self__ = this;
var _41898__$1 = this;return self__.meta41897;
});
cljs.core.async.t41896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41898,meta41897__$1){var self__ = this;
var _41898__$1 = this;return (new cljs.core.async.t41896(self__.ch,self__.f,self__.map_LT_,meta41897__$1));
});
cljs.core.async.__GT_t41896 = (function __GT_t41896(ch__$1,f__$1,map_LT___$1,meta41897){return (new cljs.core.async.t41896(ch__$1,f__$1,map_LT___$1,meta41897));
});
}
return (new cljs.core.async.t41896(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t41905 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41905 = (function (ch,f,map_GT_,meta41906){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta41906 = meta41906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41905.cljs$lang$type = true;
cljs.core.async.t41905.cljs$lang$ctorStr = "cljs.core.async/t41905";
cljs.core.async.t41905.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t41905");
});
cljs.core.async.t41905.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41905.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t41905.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41905.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t41905.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41905.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t41905.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41907){var self__ = this;
var _41907__$1 = this;return self__.meta41906;
});
cljs.core.async.t41905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41907,meta41906__$1){var self__ = this;
var _41907__$1 = this;return (new cljs.core.async.t41905(self__.ch,self__.f,self__.map_GT_,meta41906__$1));
});
cljs.core.async.__GT_t41905 = (function __GT_t41905(ch__$1,f__$1,map_GT___$1,meta41906){return (new cljs.core.async.t41905(ch__$1,f__$1,map_GT___$1,meta41906));
});
}
return (new cljs.core.async.t41905(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t41911 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t41911 = (function (ch,p,filter_GT_,meta41912){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta41912 = meta41912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t41911.cljs$lang$type = true;
cljs.core.async.t41911.cljs$lang$ctorStr = "cljs.core.async/t41911";
cljs.core.async.t41911.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t41911");
});
cljs.core.async.t41911.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t41911.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t41911.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t41911.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t41911.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t41911.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t41911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_41913){var self__ = this;
var _41913__$1 = this;return self__.meta41912;
});
cljs.core.async.t41911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_41913,meta41912__$1){var self__ = this;
var _41913__$1 = this;return (new cljs.core.async.t41911(self__.ch,self__.p,self__.filter_GT_,meta41912__$1));
});
cljs.core.async.__GT_t41911 = (function __GT_t41911(ch__$1,p__$1,filter_GT___$1,meta41912){return (new cljs.core.async.t41911(ch__$1,p__$1,filter_GT___$1,meta41912));
});
}
return (new cljs.core.async.t41911(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___41996 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_41975){var state_val_41976 = (state_41975[1]);if((state_val_41976 === 7))
{var inst_41971 = (state_41975[2]);var state_41975__$1 = state_41975;var statearr_41977_41997 = state_41975__$1;(statearr_41977_41997[2] = inst_41971);
(statearr_41977_41997[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41976 === 1))
{var state_41975__$1 = state_41975;var statearr_41978_41998 = state_41975__$1;(statearr_41978_41998[2] = null);
(statearr_41978_41998[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41976 === 4))
{var inst_41957 = (state_41975[7]);var inst_41957__$1 = (state_41975[2]);var inst_41958 = (inst_41957__$1 == null);var state_41975__$1 = (function (){var statearr_41979 = state_41975;(statearr_41979[7] = inst_41957__$1);
return statearr_41979;
})();if(cljs.core.truth_(inst_41958))
{var statearr_41980_41999 = state_41975__$1;(statearr_41980_41999[1] = 5);
} else
{var statearr_41981_42000 = state_41975__$1;(statearr_41981_42000[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41976 === 6))
{var inst_41957 = (state_41975[7]);var inst_41962 = p.call(null,inst_41957);var state_41975__$1 = state_41975;if(cljs.core.truth_(inst_41962))
{var statearr_41982_42001 = state_41975__$1;(statearr_41982_42001[1] = 8);
} else
{var statearr_41983_42002 = state_41975__$1;(statearr_41983_42002[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41976 === 3))
{var inst_41973 = (state_41975[2]);var state_41975__$1 = state_41975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41975__$1,inst_41973);
} else
{if((state_val_41976 === 2))
{var state_41975__$1 = state_41975;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41975__$1,4,ch);
} else
{if((state_val_41976 === 11))
{var inst_41965 = (state_41975[2]);var state_41975__$1 = state_41975;var statearr_41984_42003 = state_41975__$1;(statearr_41984_42003[2] = inst_41965);
(statearr_41984_42003[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41976 === 9))
{var state_41975__$1 = state_41975;var statearr_41985_42004 = state_41975__$1;(statearr_41985_42004[2] = null);
(statearr_41985_42004[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41976 === 5))
{var inst_41960 = cljs.core.async.close_BANG_.call(null,out);var state_41975__$1 = state_41975;var statearr_41986_42005 = state_41975__$1;(statearr_41986_42005[2] = inst_41960);
(statearr_41986_42005[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41976 === 10))
{var inst_41968 = (state_41975[2]);var state_41975__$1 = (function (){var statearr_41987 = state_41975;(statearr_41987[8] = inst_41968);
return statearr_41987;
})();var statearr_41988_42006 = state_41975__$1;(statearr_41988_42006[2] = null);
(statearr_41988_42006[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_41976 === 8))
{var inst_41957 = (state_41975[7]);var state_41975__$1 = state_41975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_41975__$1,11,out,inst_41957);
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
var state_machine__22127__auto____0 = (function (){var statearr_41992 = [null,null,null,null,null,null,null,null,null];(statearr_41992[0] = state_machine__22127__auto__);
(statearr_41992[1] = 1);
return statearr_41992;
});
var state_machine__22127__auto____1 = (function (state_41975){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_41975);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e41993){if((e41993 instanceof Object))
{var ex__22130__auto__ = e41993;var statearr_41994_42007 = state_41975;(statearr_41994_42007[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41975);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e41993;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42008 = state_41975;
state_41975 = G__42008;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_41975){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_41975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_41995 = f__22202__auto__.call(null);(statearr_41995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___41996);
return statearr_41995;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_42160){var state_val_42161 = (state_42160[1]);if((state_val_42161 === 7))
{var inst_42156 = (state_42160[2]);var state_42160__$1 = state_42160;var statearr_42162_42199 = state_42160__$1;(statearr_42162_42199[2] = inst_42156);
(statearr_42162_42199[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 20))
{var inst_42131 = (state_42160[7]);var inst_42142 = (state_42160[2]);var inst_42143 = cljs.core.next.call(null,inst_42131);var inst_42117 = inst_42143;var inst_42118 = null;var inst_42119 = 0;var inst_42120 = 0;var state_42160__$1 = (function (){var statearr_42163 = state_42160;(statearr_42163[8] = inst_42119);
(statearr_42163[9] = inst_42118);
(statearr_42163[10] = inst_42142);
(statearr_42163[11] = inst_42120);
(statearr_42163[12] = inst_42117);
return statearr_42163;
})();var statearr_42164_42200 = state_42160__$1;(statearr_42164_42200[2] = null);
(statearr_42164_42200[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 1))
{var state_42160__$1 = state_42160;var statearr_42165_42201 = state_42160__$1;(statearr_42165_42201[2] = null);
(statearr_42165_42201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 4))
{var inst_42106 = (state_42160[13]);var inst_42106__$1 = (state_42160[2]);var inst_42107 = (inst_42106__$1 == null);var state_42160__$1 = (function (){var statearr_42169 = state_42160;(statearr_42169[13] = inst_42106__$1);
return statearr_42169;
})();if(cljs.core.truth_(inst_42107))
{var statearr_42170_42202 = state_42160__$1;(statearr_42170_42202[1] = 5);
} else
{var statearr_42171_42203 = state_42160__$1;(statearr_42171_42203[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 15))
{var state_42160__$1 = state_42160;var statearr_42172_42204 = state_42160__$1;(statearr_42172_42204[2] = null);
(statearr_42172_42204[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 13))
{var inst_42119 = (state_42160[8]);var inst_42118 = (state_42160[9]);var inst_42120 = (state_42160[11]);var inst_42117 = (state_42160[12]);var inst_42127 = (state_42160[2]);var inst_42128 = (inst_42120 + 1);var tmp42166 = inst_42119;var tmp42167 = inst_42118;var tmp42168 = inst_42117;var inst_42117__$1 = tmp42168;var inst_42118__$1 = tmp42167;var inst_42119__$1 = tmp42166;var inst_42120__$1 = inst_42128;var state_42160__$1 = (function (){var statearr_42173 = state_42160;(statearr_42173[8] = inst_42119__$1);
(statearr_42173[9] = inst_42118__$1);
(statearr_42173[14] = inst_42127);
(statearr_42173[11] = inst_42120__$1);
(statearr_42173[12] = inst_42117__$1);
return statearr_42173;
})();var statearr_42174_42205 = state_42160__$1;(statearr_42174_42205[2] = null);
(statearr_42174_42205[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 6))
{var inst_42106 = (state_42160[13]);var inst_42111 = f.call(null,inst_42106);var inst_42116 = cljs.core.seq.call(null,inst_42111);var inst_42117 = inst_42116;var inst_42118 = null;var inst_42119 = 0;var inst_42120 = 0;var state_42160__$1 = (function (){var statearr_42175 = state_42160;(statearr_42175[8] = inst_42119);
(statearr_42175[9] = inst_42118);
(statearr_42175[11] = inst_42120);
(statearr_42175[12] = inst_42117);
return statearr_42175;
})();var statearr_42176_42206 = state_42160__$1;(statearr_42176_42206[2] = null);
(statearr_42176_42206[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 17))
{var inst_42131 = (state_42160[7]);var inst_42135 = cljs.core.chunk_first.call(null,inst_42131);var inst_42136 = cljs.core.chunk_rest.call(null,inst_42131);var inst_42137 = cljs.core.count.call(null,inst_42135);var inst_42117 = inst_42136;var inst_42118 = inst_42135;var inst_42119 = inst_42137;var inst_42120 = 0;var state_42160__$1 = (function (){var statearr_42177 = state_42160;(statearr_42177[8] = inst_42119);
(statearr_42177[9] = inst_42118);
(statearr_42177[11] = inst_42120);
(statearr_42177[12] = inst_42117);
return statearr_42177;
})();var statearr_42178_42207 = state_42160__$1;(statearr_42178_42207[2] = null);
(statearr_42178_42207[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 3))
{var inst_42158 = (state_42160[2]);var state_42160__$1 = state_42160;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42160__$1,inst_42158);
} else
{if((state_val_42161 === 12))
{var inst_42151 = (state_42160[2]);var state_42160__$1 = state_42160;var statearr_42179_42208 = state_42160__$1;(statearr_42179_42208[2] = inst_42151);
(statearr_42179_42208[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 2))
{var state_42160__$1 = state_42160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42160__$1,4,in$);
} else
{if((state_val_42161 === 19))
{var inst_42146 = (state_42160[2]);var state_42160__$1 = state_42160;var statearr_42180_42209 = state_42160__$1;(statearr_42180_42209[2] = inst_42146);
(statearr_42180_42209[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 11))
{var inst_42131 = (state_42160[7]);var inst_42117 = (state_42160[12]);var inst_42131__$1 = cljs.core.seq.call(null,inst_42117);var state_42160__$1 = (function (){var statearr_42181 = state_42160;(statearr_42181[7] = inst_42131__$1);
return statearr_42181;
})();if(inst_42131__$1)
{var statearr_42182_42210 = state_42160__$1;(statearr_42182_42210[1] = 14);
} else
{var statearr_42183_42211 = state_42160__$1;(statearr_42183_42211[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 9))
{var inst_42153 = (state_42160[2]);var state_42160__$1 = (function (){var statearr_42184 = state_42160;(statearr_42184[15] = inst_42153);
return statearr_42184;
})();var statearr_42185_42212 = state_42160__$1;(statearr_42185_42212[2] = null);
(statearr_42185_42212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 5))
{var inst_42109 = cljs.core.async.close_BANG_.call(null,out);var state_42160__$1 = state_42160;var statearr_42186_42213 = state_42160__$1;(statearr_42186_42213[2] = inst_42109);
(statearr_42186_42213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 14))
{var inst_42131 = (state_42160[7]);var inst_42133 = cljs.core.chunked_seq_QMARK_.call(null,inst_42131);var state_42160__$1 = state_42160;if(inst_42133)
{var statearr_42187_42214 = state_42160__$1;(statearr_42187_42214[1] = 17);
} else
{var statearr_42188_42215 = state_42160__$1;(statearr_42188_42215[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 16))
{var inst_42149 = (state_42160[2]);var state_42160__$1 = state_42160;var statearr_42189_42216 = state_42160__$1;(statearr_42189_42216[2] = inst_42149);
(statearr_42189_42216[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42161 === 10))
{var inst_42118 = (state_42160[9]);var inst_42120 = (state_42160[11]);var inst_42125 = cljs.core._nth.call(null,inst_42118,inst_42120);var state_42160__$1 = state_42160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42160__$1,13,out,inst_42125);
} else
{if((state_val_42161 === 18))
{var inst_42131 = (state_42160[7]);var inst_42140 = cljs.core.first.call(null,inst_42131);var state_42160__$1 = state_42160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42160__$1,20,out,inst_42140);
} else
{if((state_val_42161 === 8))
{var inst_42119 = (state_42160[8]);var inst_42120 = (state_42160[11]);var inst_42122 = (inst_42120 < inst_42119);var inst_42123 = inst_42122;var state_42160__$1 = state_42160;if(cljs.core.truth_(inst_42123))
{var statearr_42190_42217 = state_42160__$1;(statearr_42190_42217[1] = 10);
} else
{var statearr_42191_42218 = state_42160__$1;(statearr_42191_42218[1] = 11);
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
var state_machine__22127__auto____0 = (function (){var statearr_42195 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_42195[0] = state_machine__22127__auto__);
(statearr_42195[1] = 1);
return statearr_42195;
});
var state_machine__22127__auto____1 = (function (state_42160){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_42160);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e42196){if((e42196 instanceof Object))
{var ex__22130__auto__ = e42196;var statearr_42197_42219 = state_42160;(statearr_42197_42219[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42160);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42220 = state_42160;
state_42160 = G__42220;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_42160){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_42160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_42198 = f__22202__auto__.call(null);(statearr_42198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_42198;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__22201__auto___42301 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_42280){var state_val_42281 = (state_42280[1]);if((state_val_42281 === 7))
{var inst_42276 = (state_42280[2]);var state_42280__$1 = state_42280;var statearr_42282_42302 = state_42280__$1;(statearr_42282_42302[2] = inst_42276);
(statearr_42282_42302[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42281 === 1))
{var state_42280__$1 = state_42280;var statearr_42283_42303 = state_42280__$1;(statearr_42283_42303[2] = null);
(statearr_42283_42303[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42281 === 4))
{var inst_42263 = (state_42280[7]);var inst_42263__$1 = (state_42280[2]);var inst_42264 = (inst_42263__$1 == null);var state_42280__$1 = (function (){var statearr_42284 = state_42280;(statearr_42284[7] = inst_42263__$1);
return statearr_42284;
})();if(cljs.core.truth_(inst_42264))
{var statearr_42285_42304 = state_42280__$1;(statearr_42285_42304[1] = 5);
} else
{var statearr_42286_42305 = state_42280__$1;(statearr_42286_42305[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42281 === 6))
{var inst_42263 = (state_42280[7]);var state_42280__$1 = state_42280;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42280__$1,11,to,inst_42263);
} else
{if((state_val_42281 === 3))
{var inst_42278 = (state_42280[2]);var state_42280__$1 = state_42280;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42280__$1,inst_42278);
} else
{if((state_val_42281 === 2))
{var state_42280__$1 = state_42280;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42280__$1,4,from);
} else
{if((state_val_42281 === 11))
{var inst_42273 = (state_42280[2]);var state_42280__$1 = (function (){var statearr_42287 = state_42280;(statearr_42287[8] = inst_42273);
return statearr_42287;
})();var statearr_42288_42306 = state_42280__$1;(statearr_42288_42306[2] = null);
(statearr_42288_42306[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42281 === 9))
{var state_42280__$1 = state_42280;var statearr_42289_42307 = state_42280__$1;(statearr_42289_42307[2] = null);
(statearr_42289_42307[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42281 === 5))
{var state_42280__$1 = state_42280;if(cljs.core.truth_(close_QMARK_))
{var statearr_42290_42308 = state_42280__$1;(statearr_42290_42308[1] = 8);
} else
{var statearr_42291_42309 = state_42280__$1;(statearr_42291_42309[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42281 === 10))
{var inst_42270 = (state_42280[2]);var state_42280__$1 = state_42280;var statearr_42292_42310 = state_42280__$1;(statearr_42292_42310[2] = inst_42270);
(statearr_42292_42310[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42281 === 8))
{var inst_42267 = cljs.core.async.close_BANG_.call(null,to);var state_42280__$1 = state_42280;var statearr_42293_42311 = state_42280__$1;(statearr_42293_42311[2] = inst_42267);
(statearr_42293_42311[1] = 10);
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
var state_machine__22127__auto____0 = (function (){var statearr_42297 = [null,null,null,null,null,null,null,null,null];(statearr_42297[0] = state_machine__22127__auto__);
(statearr_42297[1] = 1);
return statearr_42297;
});
var state_machine__22127__auto____1 = (function (state_42280){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_42280);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e42298){if((e42298 instanceof Object))
{var ex__22130__auto__ = e42298;var statearr_42299_42312 = state_42280;(statearr_42299_42312[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42280);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42298;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42313 = state_42280;
state_42280 = G__42313;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_42280){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_42280);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_42300 = f__22202__auto__.call(null);(statearr_42300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___42301);
return statearr_42300;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__22201__auto___42400 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_42378){var state_val_42379 = (state_42378[1]);if((state_val_42379 === 7))
{var inst_42374 = (state_42378[2]);var state_42378__$1 = state_42378;var statearr_42380_42401 = state_42378__$1;(statearr_42380_42401[2] = inst_42374);
(statearr_42380_42401[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42379 === 1))
{var state_42378__$1 = state_42378;var statearr_42381_42402 = state_42378__$1;(statearr_42381_42402[2] = null);
(statearr_42381_42402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42379 === 4))
{var inst_42359 = (state_42378[7]);var inst_42359__$1 = (state_42378[2]);var inst_42360 = (inst_42359__$1 == null);var state_42378__$1 = (function (){var statearr_42382 = state_42378;(statearr_42382[7] = inst_42359__$1);
return statearr_42382;
})();if(cljs.core.truth_(inst_42360))
{var statearr_42383_42403 = state_42378__$1;(statearr_42383_42403[1] = 5);
} else
{var statearr_42384_42404 = state_42378__$1;(statearr_42384_42404[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42379 === 6))
{var inst_42359 = (state_42378[7]);var inst_42365 = p.call(null,inst_42359);var state_42378__$1 = state_42378;if(cljs.core.truth_(inst_42365))
{var statearr_42385_42405 = state_42378__$1;(statearr_42385_42405[1] = 9);
} else
{var statearr_42386_42406 = state_42378__$1;(statearr_42386_42406[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42379 === 3))
{var inst_42376 = (state_42378[2]);var state_42378__$1 = state_42378;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42378__$1,inst_42376);
} else
{if((state_val_42379 === 2))
{var state_42378__$1 = state_42378;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42378__$1,4,ch);
} else
{if((state_val_42379 === 11))
{var inst_42359 = (state_42378[7]);var inst_42369 = (state_42378[2]);var state_42378__$1 = state_42378;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42378__$1,8,inst_42369,inst_42359);
} else
{if((state_val_42379 === 9))
{var state_42378__$1 = state_42378;var statearr_42387_42407 = state_42378__$1;(statearr_42387_42407[2] = tc);
(statearr_42387_42407[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42379 === 5))
{var inst_42362 = cljs.core.async.close_BANG_.call(null,tc);var inst_42363 = cljs.core.async.close_BANG_.call(null,fc);var state_42378__$1 = (function (){var statearr_42388 = state_42378;(statearr_42388[8] = inst_42362);
return statearr_42388;
})();var statearr_42389_42408 = state_42378__$1;(statearr_42389_42408[2] = inst_42363);
(statearr_42389_42408[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42379 === 10))
{var state_42378__$1 = state_42378;var statearr_42390_42409 = state_42378__$1;(statearr_42390_42409[2] = fc);
(statearr_42390_42409[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42379 === 8))
{var inst_42371 = (state_42378[2]);var state_42378__$1 = (function (){var statearr_42391 = state_42378;(statearr_42391[9] = inst_42371);
return statearr_42391;
})();var statearr_42392_42410 = state_42378__$1;(statearr_42392_42410[2] = null);
(statearr_42392_42410[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_42396 = [null,null,null,null,null,null,null,null,null,null];(statearr_42396[0] = state_machine__22127__auto__);
(statearr_42396[1] = 1);
return statearr_42396;
});
var state_machine__22127__auto____1 = (function (state_42378){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_42378);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e42397){if((e42397 instanceof Object))
{var ex__22130__auto__ = e42397;var statearr_42398_42411 = state_42378;(statearr_42398_42411[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42378);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42412 = state_42378;
state_42378 = G__42412;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_42378){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_42378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_42399 = f__22202__auto__.call(null);(statearr_42399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___42400);
return statearr_42399;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_42459){var state_val_42460 = (state_42459[1]);if((state_val_42460 === 7))
{var inst_42455 = (state_42459[2]);var state_42459__$1 = state_42459;var statearr_42461_42477 = state_42459__$1;(statearr_42461_42477[2] = inst_42455);
(statearr_42461_42477[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42460 === 6))
{var inst_42445 = (state_42459[7]);var inst_42448 = (state_42459[8]);var inst_42452 = f.call(null,inst_42445,inst_42448);var inst_42445__$1 = inst_42452;var state_42459__$1 = (function (){var statearr_42462 = state_42459;(statearr_42462[7] = inst_42445__$1);
return statearr_42462;
})();var statearr_42463_42478 = state_42459__$1;(statearr_42463_42478[2] = null);
(statearr_42463_42478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42460 === 5))
{var inst_42445 = (state_42459[7]);var state_42459__$1 = state_42459;var statearr_42464_42479 = state_42459__$1;(statearr_42464_42479[2] = inst_42445);
(statearr_42464_42479[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42460 === 4))
{var inst_42448 = (state_42459[8]);var inst_42448__$1 = (state_42459[2]);var inst_42449 = (inst_42448__$1 == null);var state_42459__$1 = (function (){var statearr_42465 = state_42459;(statearr_42465[8] = inst_42448__$1);
return statearr_42465;
})();if(cljs.core.truth_(inst_42449))
{var statearr_42466_42480 = state_42459__$1;(statearr_42466_42480[1] = 5);
} else
{var statearr_42467_42481 = state_42459__$1;(statearr_42467_42481[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42460 === 3))
{var inst_42457 = (state_42459[2]);var state_42459__$1 = state_42459;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42459__$1,inst_42457);
} else
{if((state_val_42460 === 2))
{var state_42459__$1 = state_42459;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42459__$1,4,ch);
} else
{if((state_val_42460 === 1))
{var inst_42445 = init;var state_42459__$1 = (function (){var statearr_42468 = state_42459;(statearr_42468[7] = inst_42445);
return statearr_42468;
})();var statearr_42469_42482 = state_42459__$1;(statearr_42469_42482[2] = null);
(statearr_42469_42482[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_42473 = [null,null,null,null,null,null,null,null,null];(statearr_42473[0] = state_machine__22127__auto__);
(statearr_42473[1] = 1);
return statearr_42473;
});
var state_machine__22127__auto____1 = (function (state_42459){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_42459);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e42474){if((e42474 instanceof Object))
{var ex__22130__auto__ = e42474;var statearr_42475_42483 = state_42459;(statearr_42475_42483[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42459);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42474;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42484 = state_42459;
state_42459 = G__42484;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_42459){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_42459);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_42476 = f__22202__auto__.call(null);(statearr_42476[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_42476;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__22201__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_42546){var state_val_42547 = (state_42546[1]);if((state_val_42547 === 7))
{var inst_42527 = (state_42546[7]);var inst_42532 = (state_42546[2]);var inst_42533 = cljs.core.next.call(null,inst_42527);var inst_42527__$1 = inst_42533;var state_42546__$1 = (function (){var statearr_42548 = state_42546;(statearr_42548[7] = inst_42527__$1);
(statearr_42548[8] = inst_42532);
return statearr_42548;
})();var statearr_42549_42567 = state_42546__$1;(statearr_42549_42567[2] = null);
(statearr_42549_42567[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42547 === 1))
{var inst_42526 = cljs.core.seq.call(null,coll);var inst_42527 = inst_42526;var state_42546__$1 = (function (){var statearr_42550 = state_42546;(statearr_42550[7] = inst_42527);
return statearr_42550;
})();var statearr_42551_42568 = state_42546__$1;(statearr_42551_42568[2] = null);
(statearr_42551_42568[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42547 === 4))
{var inst_42527 = (state_42546[7]);var inst_42530 = cljs.core.first.call(null,inst_42527);var state_42546__$1 = state_42546;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_42546__$1,7,ch,inst_42530);
} else
{if((state_val_42547 === 6))
{var inst_42542 = (state_42546[2]);var state_42546__$1 = state_42546;var statearr_42552_42569 = state_42546__$1;(statearr_42552_42569[2] = inst_42542);
(statearr_42552_42569[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42547 === 3))
{var inst_42544 = (state_42546[2]);var state_42546__$1 = state_42546;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42546__$1,inst_42544);
} else
{if((state_val_42547 === 2))
{var inst_42527 = (state_42546[7]);var state_42546__$1 = state_42546;if(cljs.core.truth_(inst_42527))
{var statearr_42553_42570 = state_42546__$1;(statearr_42553_42570[1] = 4);
} else
{var statearr_42554_42571 = state_42546__$1;(statearr_42554_42571[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42547 === 9))
{var state_42546__$1 = state_42546;var statearr_42555_42572 = state_42546__$1;(statearr_42555_42572[2] = null);
(statearr_42555_42572[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42547 === 5))
{var state_42546__$1 = state_42546;if(cljs.core.truth_(close_QMARK_))
{var statearr_42556_42573 = state_42546__$1;(statearr_42556_42573[1] = 8);
} else
{var statearr_42557_42574 = state_42546__$1;(statearr_42557_42574[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42547 === 10))
{var inst_42540 = (state_42546[2]);var state_42546__$1 = state_42546;var statearr_42558_42575 = state_42546__$1;(statearr_42558_42575[2] = inst_42540);
(statearr_42558_42575[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42547 === 8))
{var inst_42537 = cljs.core.async.close_BANG_.call(null,ch);var state_42546__$1 = state_42546;var statearr_42559_42576 = state_42546__$1;(statearr_42559_42576[2] = inst_42537);
(statearr_42559_42576[1] = 10);
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
var state_machine__22127__auto____0 = (function (){var statearr_42563 = [null,null,null,null,null,null,null,null,null];(statearr_42563[0] = state_machine__22127__auto__);
(statearr_42563[1] = 1);
return statearr_42563;
});
var state_machine__22127__auto____1 = (function (state_42546){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_42546);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e42564){if((e42564 instanceof Object))
{var ex__22130__auto__ = e42564;var statearr_42565_42577 = state_42546;(statearr_42565_42577[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42546);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e42564;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__42578 = state_42546;
state_42546 = G__42578;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_42546){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_42546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_42566 = f__22202__auto__.call(null);(statearr_42566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto__);
return statearr_42566;
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
cljs.core.async.Mux = (function (){var obj42580 = {};return obj42580;
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
cljs.core.async.Mult = (function (){var obj42582 = {};return obj42582;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t42806 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t42806 = (function (cs,ch,mult,meta42807){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta42807 = meta42807;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t42806.cljs$lang$type = true;
cljs.core.async.t42806.cljs$lang$ctorStr = "cljs.core.async/t42806";
cljs.core.async.t42806.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t42806");
});})(cs))
;
cljs.core.async.t42806.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t42806.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t42806.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t42806.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t42806.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t42806.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t42806.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_42808){var self__ = this;
var _42808__$1 = this;return self__.meta42807;
});})(cs))
;
cljs.core.async.t42806.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_42808,meta42807__$1){var self__ = this;
var _42808__$1 = this;return (new cljs.core.async.t42806(self__.cs,self__.ch,self__.mult,meta42807__$1));
});})(cs))
;
cljs.core.async.__GT_t42806 = ((function (cs){
return (function __GT_t42806(cs__$1,ch__$1,mult__$1,meta42807){return (new cljs.core.async.t42806(cs__$1,ch__$1,mult__$1,meta42807));
});})(cs))
;
}
return (new cljs.core.async.t42806(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__22201__auto___43029 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_42943){var state_val_42944 = (state_42943[1]);if((state_val_42944 === 7))
{var inst_42939 = (state_42943[2]);var state_42943__$1 = state_42943;var statearr_42945_43030 = state_42943__$1;(statearr_42945_43030[2] = inst_42939);
(statearr_42945_43030[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 20))
{var inst_42840 = (state_42943[7]);var inst_42850 = cljs.core.first.call(null,inst_42840);var inst_42851 = cljs.core.nth.call(null,inst_42850,0,null);var inst_42852 = cljs.core.nth.call(null,inst_42850,1,null);var state_42943__$1 = (function (){var statearr_42946 = state_42943;(statearr_42946[8] = inst_42851);
return statearr_42946;
})();if(cljs.core.truth_(inst_42852))
{var statearr_42947_43031 = state_42943__$1;(statearr_42947_43031[1] = 22);
} else
{var statearr_42948_43032 = state_42943__$1;(statearr_42948_43032[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 27))
{var inst_42880 = (state_42943[9]);var inst_42882 = (state_42943[10]);var inst_42887 = cljs.core._nth.call(null,inst_42880,inst_42882);var state_42943__$1 = (function (){var statearr_42949 = state_42943;(statearr_42949[11] = inst_42887);
return statearr_42949;
})();var statearr_42950_43033 = state_42943__$1;(statearr_42950_43033[2] = null);
(statearr_42950_43033[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 1))
{var state_42943__$1 = state_42943;var statearr_42951_43034 = state_42943__$1;(statearr_42951_43034[2] = null);
(statearr_42951_43034[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 24))
{var inst_42840 = (state_42943[7]);var inst_42857 = (state_42943[2]);var inst_42858 = cljs.core.next.call(null,inst_42840);var inst_42820 = inst_42858;var inst_42821 = null;var inst_42822 = 0;var inst_42823 = 0;var state_42943__$1 = (function (){var statearr_42952 = state_42943;(statearr_42952[12] = inst_42857);
(statearr_42952[13] = inst_42822);
(statearr_42952[14] = inst_42820);
(statearr_42952[15] = inst_42821);
(statearr_42952[16] = inst_42823);
return statearr_42952;
})();var statearr_42953_43035 = state_42943__$1;(statearr_42953_43035[2] = null);
(statearr_42953_43035[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 39))
{var inst_42900 = (state_42943[17]);var inst_42918 = (state_42943[2]);var inst_42919 = cljs.core.next.call(null,inst_42900);var inst_42879 = inst_42919;var inst_42880 = null;var inst_42881 = 0;var inst_42882 = 0;var state_42943__$1 = (function (){var statearr_42957 = state_42943;(statearr_42957[9] = inst_42880);
(statearr_42957[18] = inst_42879);
(statearr_42957[19] = inst_42918);
(statearr_42957[10] = inst_42882);
(statearr_42957[20] = inst_42881);
return statearr_42957;
})();var statearr_42958_43036 = state_42943__$1;(statearr_42958_43036[2] = null);
(statearr_42958_43036[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 4))
{var inst_42811 = (state_42943[21]);var inst_42811__$1 = (state_42943[2]);var inst_42812 = (inst_42811__$1 == null);var state_42943__$1 = (function (){var statearr_42959 = state_42943;(statearr_42959[21] = inst_42811__$1);
return statearr_42959;
})();if(cljs.core.truth_(inst_42812))
{var statearr_42960_43037 = state_42943__$1;(statearr_42960_43037[1] = 5);
} else
{var statearr_42961_43038 = state_42943__$1;(statearr_42961_43038[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 15))
{var inst_42822 = (state_42943[13]);var inst_42820 = (state_42943[14]);var inst_42821 = (state_42943[15]);var inst_42823 = (state_42943[16]);var inst_42836 = (state_42943[2]);var inst_42837 = (inst_42823 + 1);var tmp42954 = inst_42822;var tmp42955 = inst_42820;var tmp42956 = inst_42821;var inst_42820__$1 = tmp42955;var inst_42821__$1 = tmp42956;var inst_42822__$1 = tmp42954;var inst_42823__$1 = inst_42837;var state_42943__$1 = (function (){var statearr_42962 = state_42943;(statearr_42962[22] = inst_42836);
(statearr_42962[13] = inst_42822__$1);
(statearr_42962[14] = inst_42820__$1);
(statearr_42962[15] = inst_42821__$1);
(statearr_42962[16] = inst_42823__$1);
return statearr_42962;
})();var statearr_42963_43039 = state_42943__$1;(statearr_42963_43039[2] = null);
(statearr_42963_43039[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 21))
{var inst_42861 = (state_42943[2]);var state_42943__$1 = state_42943;var statearr_42964_43040 = state_42943__$1;(statearr_42964_43040[2] = inst_42861);
(statearr_42964_43040[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 31))
{var inst_42887 = (state_42943[11]);var inst_42888 = (state_42943[2]);var inst_42889 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_42890 = cljs.core.async.untap_STAR_.call(null,m,inst_42887);var state_42943__$1 = (function (){var statearr_42965 = state_42943;(statearr_42965[23] = inst_42889);
(statearr_42965[24] = inst_42888);
return statearr_42965;
})();var statearr_42966_43041 = state_42943__$1;(statearr_42966_43041[2] = inst_42890);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42943__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 32))
{var inst_42811 = (state_42943[21]);var inst_42887 = (state_42943[11]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42943,31,Object,null,30);var inst_42894 = cljs.core.async.put_BANG_.call(null,inst_42887,inst_42811,done);var state_42943__$1 = state_42943;var statearr_42967_43042 = state_42943__$1;(statearr_42967_43042[2] = inst_42894);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42943__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 40))
{var inst_42909 = (state_42943[25]);var inst_42910 = (state_42943[2]);var inst_42911 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_42912 = cljs.core.async.untap_STAR_.call(null,m,inst_42909);var state_42943__$1 = (function (){var statearr_42968 = state_42943;(statearr_42968[26] = inst_42910);
(statearr_42968[27] = inst_42911);
return statearr_42968;
})();var statearr_42969_43043 = state_42943__$1;(statearr_42969_43043[2] = inst_42912);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42943__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 33))
{var inst_42900 = (state_42943[17]);var inst_42902 = cljs.core.chunked_seq_QMARK_.call(null,inst_42900);var state_42943__$1 = state_42943;if(inst_42902)
{var statearr_42970_43044 = state_42943__$1;(statearr_42970_43044[1] = 36);
} else
{var statearr_42971_43045 = state_42943__$1;(statearr_42971_43045[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 13))
{var inst_42830 = (state_42943[28]);var inst_42833 = cljs.core.async.close_BANG_.call(null,inst_42830);var state_42943__$1 = state_42943;var statearr_42972_43046 = state_42943__$1;(statearr_42972_43046[2] = inst_42833);
(statearr_42972_43046[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 22))
{var inst_42851 = (state_42943[8]);var inst_42854 = cljs.core.async.close_BANG_.call(null,inst_42851);var state_42943__$1 = state_42943;var statearr_42973_43047 = state_42943__$1;(statearr_42973_43047[2] = inst_42854);
(statearr_42973_43047[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 36))
{var inst_42900 = (state_42943[17]);var inst_42904 = cljs.core.chunk_first.call(null,inst_42900);var inst_42905 = cljs.core.chunk_rest.call(null,inst_42900);var inst_42906 = cljs.core.count.call(null,inst_42904);var inst_42879 = inst_42905;var inst_42880 = inst_42904;var inst_42881 = inst_42906;var inst_42882 = 0;var state_42943__$1 = (function (){var statearr_42974 = state_42943;(statearr_42974[9] = inst_42880);
(statearr_42974[18] = inst_42879);
(statearr_42974[10] = inst_42882);
(statearr_42974[20] = inst_42881);
return statearr_42974;
})();var statearr_42975_43048 = state_42943__$1;(statearr_42975_43048[2] = null);
(statearr_42975_43048[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 41))
{var inst_42811 = (state_42943[21]);var inst_42909 = (state_42943[25]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_42943,40,Object,null,39);var inst_42916 = cljs.core.async.put_BANG_.call(null,inst_42909,inst_42811,done);var state_42943__$1 = state_42943;var statearr_42976_43049 = state_42943__$1;(statearr_42976_43049[2] = inst_42916);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42943__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 43))
{var state_42943__$1 = state_42943;var statearr_42977_43050 = state_42943__$1;(statearr_42977_43050[2] = null);
(statearr_42977_43050[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 29))
{var inst_42927 = (state_42943[2]);var state_42943__$1 = state_42943;var statearr_42978_43051 = state_42943__$1;(statearr_42978_43051[2] = inst_42927);
(statearr_42978_43051[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 44))
{var inst_42936 = (state_42943[2]);var state_42943__$1 = (function (){var statearr_42979 = state_42943;(statearr_42979[29] = inst_42936);
return statearr_42979;
})();var statearr_42980_43052 = state_42943__$1;(statearr_42980_43052[2] = null);
(statearr_42980_43052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 6))
{var inst_42871 = (state_42943[30]);var inst_42870 = cljs.core.deref.call(null,cs);var inst_42871__$1 = cljs.core.keys.call(null,inst_42870);var inst_42872 = cljs.core.count.call(null,inst_42871__$1);var inst_42873 = cljs.core.reset_BANG_.call(null,dctr,inst_42872);var inst_42878 = cljs.core.seq.call(null,inst_42871__$1);var inst_42879 = inst_42878;var inst_42880 = null;var inst_42881 = 0;var inst_42882 = 0;var state_42943__$1 = (function (){var statearr_42981 = state_42943;(statearr_42981[9] = inst_42880);
(statearr_42981[18] = inst_42879);
(statearr_42981[31] = inst_42873);
(statearr_42981[10] = inst_42882);
(statearr_42981[20] = inst_42881);
(statearr_42981[30] = inst_42871__$1);
return statearr_42981;
})();var statearr_42982_43053 = state_42943__$1;(statearr_42982_43053[2] = null);
(statearr_42982_43053[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 28))
{var inst_42900 = (state_42943[17]);var inst_42879 = (state_42943[18]);var inst_42900__$1 = cljs.core.seq.call(null,inst_42879);var state_42943__$1 = (function (){var statearr_42983 = state_42943;(statearr_42983[17] = inst_42900__$1);
return statearr_42983;
})();if(inst_42900__$1)
{var statearr_42984_43054 = state_42943__$1;(statearr_42984_43054[1] = 33);
} else
{var statearr_42985_43055 = state_42943__$1;(statearr_42985_43055[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 25))
{var inst_42882 = (state_42943[10]);var inst_42881 = (state_42943[20]);var inst_42884 = (inst_42882 < inst_42881);var inst_42885 = inst_42884;var state_42943__$1 = state_42943;if(cljs.core.truth_(inst_42885))
{var statearr_42986_43056 = state_42943__$1;(statearr_42986_43056[1] = 27);
} else
{var statearr_42987_43057 = state_42943__$1;(statearr_42987_43057[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 34))
{var state_42943__$1 = state_42943;var statearr_42988_43058 = state_42943__$1;(statearr_42988_43058[2] = null);
(statearr_42988_43058[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 17))
{var state_42943__$1 = state_42943;var statearr_42989_43059 = state_42943__$1;(statearr_42989_43059[2] = null);
(statearr_42989_43059[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 3))
{var inst_42941 = (state_42943[2]);var state_42943__$1 = state_42943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42943__$1,inst_42941);
} else
{if((state_val_42944 === 12))
{var inst_42866 = (state_42943[2]);var state_42943__$1 = state_42943;var statearr_42990_43060 = state_42943__$1;(statearr_42990_43060[2] = inst_42866);
(statearr_42990_43060[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 2))
{var state_42943__$1 = state_42943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42943__$1,4,ch);
} else
{if((state_val_42944 === 23))
{var state_42943__$1 = state_42943;var statearr_42991_43061 = state_42943__$1;(statearr_42991_43061[2] = null);
(statearr_42991_43061[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 35))
{var inst_42925 = (state_42943[2]);var state_42943__$1 = state_42943;var statearr_42992_43062 = state_42943__$1;(statearr_42992_43062[2] = inst_42925);
(statearr_42992_43062[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 19))
{var inst_42840 = (state_42943[7]);var inst_42844 = cljs.core.chunk_first.call(null,inst_42840);var inst_42845 = cljs.core.chunk_rest.call(null,inst_42840);var inst_42846 = cljs.core.count.call(null,inst_42844);var inst_42820 = inst_42845;var inst_42821 = inst_42844;var inst_42822 = inst_42846;var inst_42823 = 0;var state_42943__$1 = (function (){var statearr_42993 = state_42943;(statearr_42993[13] = inst_42822);
(statearr_42993[14] = inst_42820);
(statearr_42993[15] = inst_42821);
(statearr_42993[16] = inst_42823);
return statearr_42993;
})();var statearr_42994_43063 = state_42943__$1;(statearr_42994_43063[2] = null);
(statearr_42994_43063[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 11))
{var inst_42840 = (state_42943[7]);var inst_42820 = (state_42943[14]);var inst_42840__$1 = cljs.core.seq.call(null,inst_42820);var state_42943__$1 = (function (){var statearr_42995 = state_42943;(statearr_42995[7] = inst_42840__$1);
return statearr_42995;
})();if(inst_42840__$1)
{var statearr_42996_43064 = state_42943__$1;(statearr_42996_43064[1] = 16);
} else
{var statearr_42997_43065 = state_42943__$1;(statearr_42997_43065[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 9))
{var inst_42868 = (state_42943[2]);var state_42943__$1 = state_42943;var statearr_42998_43066 = state_42943__$1;(statearr_42998_43066[2] = inst_42868);
(statearr_42998_43066[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 5))
{var inst_42818 = cljs.core.deref.call(null,cs);var inst_42819 = cljs.core.seq.call(null,inst_42818);var inst_42820 = inst_42819;var inst_42821 = null;var inst_42822 = 0;var inst_42823 = 0;var state_42943__$1 = (function (){var statearr_42999 = state_42943;(statearr_42999[13] = inst_42822);
(statearr_42999[14] = inst_42820);
(statearr_42999[15] = inst_42821);
(statearr_42999[16] = inst_42823);
return statearr_42999;
})();var statearr_43000_43067 = state_42943__$1;(statearr_43000_43067[2] = null);
(statearr_43000_43067[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 14))
{var state_42943__$1 = state_42943;var statearr_43001_43068 = state_42943__$1;(statearr_43001_43068[2] = null);
(statearr_43001_43068[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 45))
{var inst_42933 = (state_42943[2]);var state_42943__$1 = state_42943;var statearr_43002_43069 = state_42943__$1;(statearr_43002_43069[2] = inst_42933);
(statearr_43002_43069[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 26))
{var inst_42871 = (state_42943[30]);var inst_42929 = (state_42943[2]);var inst_42930 = cljs.core.seq.call(null,inst_42871);var state_42943__$1 = (function (){var statearr_43003 = state_42943;(statearr_43003[32] = inst_42929);
return statearr_43003;
})();if(inst_42930)
{var statearr_43004_43070 = state_42943__$1;(statearr_43004_43070[1] = 42);
} else
{var statearr_43005_43071 = state_42943__$1;(statearr_43005_43071[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 16))
{var inst_42840 = (state_42943[7]);var inst_42842 = cljs.core.chunked_seq_QMARK_.call(null,inst_42840);var state_42943__$1 = state_42943;if(inst_42842)
{var statearr_43009_43072 = state_42943__$1;(statearr_43009_43072[1] = 19);
} else
{var statearr_43010_43073 = state_42943__$1;(statearr_43010_43073[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 38))
{var inst_42922 = (state_42943[2]);var state_42943__$1 = state_42943;var statearr_43011_43074 = state_42943__$1;(statearr_43011_43074[2] = inst_42922);
(statearr_43011_43074[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 30))
{var inst_42880 = (state_42943[9]);var inst_42879 = (state_42943[18]);var inst_42882 = (state_42943[10]);var inst_42881 = (state_42943[20]);var inst_42896 = (state_42943[2]);var inst_42897 = (inst_42882 + 1);var tmp43006 = inst_42880;var tmp43007 = inst_42879;var tmp43008 = inst_42881;var inst_42879__$1 = tmp43007;var inst_42880__$1 = tmp43006;var inst_42881__$1 = tmp43008;var inst_42882__$1 = inst_42897;var state_42943__$1 = (function (){var statearr_43012 = state_42943;(statearr_43012[33] = inst_42896);
(statearr_43012[9] = inst_42880__$1);
(statearr_43012[18] = inst_42879__$1);
(statearr_43012[10] = inst_42882__$1);
(statearr_43012[20] = inst_42881__$1);
return statearr_43012;
})();var statearr_43013_43075 = state_42943__$1;(statearr_43013_43075[2] = null);
(statearr_43013_43075[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 10))
{var inst_42821 = (state_42943[15]);var inst_42823 = (state_42943[16]);var inst_42829 = cljs.core._nth.call(null,inst_42821,inst_42823);var inst_42830 = cljs.core.nth.call(null,inst_42829,0,null);var inst_42831 = cljs.core.nth.call(null,inst_42829,1,null);var state_42943__$1 = (function (){var statearr_43014 = state_42943;(statearr_43014[28] = inst_42830);
return statearr_43014;
})();if(cljs.core.truth_(inst_42831))
{var statearr_43015_43076 = state_42943__$1;(statearr_43015_43076[1] = 13);
} else
{var statearr_43016_43077 = state_42943__$1;(statearr_43016_43077[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 18))
{var inst_42864 = (state_42943[2]);var state_42943__$1 = state_42943;var statearr_43017_43078 = state_42943__$1;(statearr_43017_43078[2] = inst_42864);
(statearr_43017_43078[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 42))
{var state_42943__$1 = state_42943;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42943__$1,45,dchan);
} else
{if((state_val_42944 === 37))
{var inst_42900 = (state_42943[17]);var inst_42909 = cljs.core.first.call(null,inst_42900);var state_42943__$1 = (function (){var statearr_43018 = state_42943;(statearr_43018[25] = inst_42909);
return statearr_43018;
})();var statearr_43019_43079 = state_42943__$1;(statearr_43019_43079[2] = null);
(statearr_43019_43079[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_42944 === 8))
{var inst_42822 = (state_42943[13]);var inst_42823 = (state_42943[16]);var inst_42825 = (inst_42823 < inst_42822);var inst_42826 = inst_42825;var state_42943__$1 = state_42943;if(cljs.core.truth_(inst_42826))
{var statearr_43020_43080 = state_42943__$1;(statearr_43020_43080[1] = 10);
} else
{var statearr_43021_43081 = state_42943__$1;(statearr_43021_43081[1] = 11);
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
var state_machine__22127__auto____0 = (function (){var statearr_43025 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43025[0] = state_machine__22127__auto__);
(statearr_43025[1] = 1);
return statearr_43025;
});
var state_machine__22127__auto____1 = (function (state_42943){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_42943);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e43026){if((e43026 instanceof Object))
{var ex__22130__auto__ = e43026;var statearr_43027_43082 = state_42943;(statearr_43027_43082[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42943);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43026;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43083 = state_42943;
state_42943 = G__43083;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_42943){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_42943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_43028 = f__22202__auto__.call(null);(statearr_43028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___43029);
return statearr_43028;
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
cljs.core.async.Mix = (function (){var obj43085 = {};return obj43085;
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
;var m = (function (){if(typeof cljs.core.async.t43195 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43195 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta43196){
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
this.meta43196 = meta43196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43195.cljs$lang$type = true;
cljs.core.async.t43195.cljs$lang$ctorStr = "cljs.core.async/t43195";
cljs.core.async.t43195.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t43195");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43195.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t43195.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43195.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43195.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43195.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43195.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43195.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43195.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43197){var self__ = this;
var _43197__$1 = this;return self__.meta43196;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t43195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_43197,meta43196__$1){var self__ = this;
var _43197__$1 = this;return (new cljs.core.async.t43195(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta43196__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t43195 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t43195(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43196){return (new cljs.core.async.t43195(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta43196));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t43195(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__22201__auto___43304 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_43262){var state_val_43263 = (state_43262[1]);if((state_val_43263 === 7))
{var inst_43211 = (state_43262[7]);var inst_43216 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43211);var state_43262__$1 = state_43262;var statearr_43264_43305 = state_43262__$1;(statearr_43264_43305[2] = inst_43216);
(statearr_43264_43305[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 20))
{var inst_43226 = (state_43262[8]);var state_43262__$1 = state_43262;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43262__$1,23,out,inst_43226);
} else
{if((state_val_43263 === 1))
{var inst_43201 = (state_43262[9]);var inst_43201__$1 = calc_state.call(null);var inst_43202 = cljs.core.seq_QMARK_.call(null,inst_43201__$1);var state_43262__$1 = (function (){var statearr_43265 = state_43262;(statearr_43265[9] = inst_43201__$1);
return statearr_43265;
})();if(inst_43202)
{var statearr_43266_43306 = state_43262__$1;(statearr_43266_43306[1] = 2);
} else
{var statearr_43267_43307 = state_43262__$1;(statearr_43267_43307[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 4))
{var inst_43201 = (state_43262[9]);var inst_43207 = (state_43262[2]);var inst_43208 = cljs.core.get.call(null,inst_43207,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_43209 = cljs.core.get.call(null,inst_43207,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_43210 = cljs.core.get.call(null,inst_43207,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_43211 = inst_43201;var state_43262__$1 = (function (){var statearr_43268 = state_43262;(statearr_43268[10] = inst_43209);
(statearr_43268[7] = inst_43211);
(statearr_43268[11] = inst_43208);
(statearr_43268[12] = inst_43210);
return statearr_43268;
})();var statearr_43269_43308 = state_43262__$1;(statearr_43269_43308[2] = null);
(statearr_43269_43308[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 15))
{var state_43262__$1 = state_43262;var statearr_43270_43309 = state_43262__$1;(statearr_43270_43309[2] = null);
(statearr_43270_43309[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 21))
{var state_43262__$1 = state_43262;var statearr_43271_43310 = state_43262__$1;(statearr_43271_43310[2] = null);
(statearr_43271_43310[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 13))
{var inst_43258 = (state_43262[2]);var state_43262__$1 = state_43262;var statearr_43272_43311 = state_43262__$1;(statearr_43272_43311[2] = inst_43258);
(statearr_43272_43311[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 22))
{var inst_43219 = (state_43262[13]);var inst_43255 = (state_43262[2]);var inst_43211 = inst_43219;var state_43262__$1 = (function (){var statearr_43273 = state_43262;(statearr_43273[7] = inst_43211);
(statearr_43273[14] = inst_43255);
return statearr_43273;
})();var statearr_43274_43312 = state_43262__$1;(statearr_43274_43312[2] = null);
(statearr_43274_43312[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 6))
{var inst_43260 = (state_43262[2]);var state_43262__$1 = state_43262;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43262__$1,inst_43260);
} else
{if((state_val_43263 === 17))
{var inst_43241 = (state_43262[15]);var state_43262__$1 = state_43262;var statearr_43275_43313 = state_43262__$1;(statearr_43275_43313[2] = inst_43241);
(statearr_43275_43313[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 3))
{var inst_43201 = (state_43262[9]);var state_43262__$1 = state_43262;var statearr_43276_43314 = state_43262__$1;(statearr_43276_43314[2] = inst_43201);
(statearr_43276_43314[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 12))
{var inst_43222 = (state_43262[16]);var inst_43241 = (state_43262[15]);var inst_43227 = (state_43262[17]);var inst_43241__$1 = inst_43222.call(null,inst_43227);var state_43262__$1 = (function (){var statearr_43277 = state_43262;(statearr_43277[15] = inst_43241__$1);
return statearr_43277;
})();if(cljs.core.truth_(inst_43241__$1))
{var statearr_43278_43315 = state_43262__$1;(statearr_43278_43315[1] = 17);
} else
{var statearr_43279_43316 = state_43262__$1;(statearr_43279_43316[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 2))
{var inst_43201 = (state_43262[9]);var inst_43204 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43201);var state_43262__$1 = state_43262;var statearr_43280_43317 = state_43262__$1;(statearr_43280_43317[2] = inst_43204);
(statearr_43280_43317[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 23))
{var inst_43252 = (state_43262[2]);var state_43262__$1 = state_43262;var statearr_43281_43318 = state_43262__$1;(statearr_43281_43318[2] = inst_43252);
(statearr_43281_43318[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 19))
{var inst_43249 = (state_43262[2]);var state_43262__$1 = state_43262;if(cljs.core.truth_(inst_43249))
{var statearr_43282_43319 = state_43262__$1;(statearr_43282_43319[1] = 20);
} else
{var statearr_43283_43320 = state_43262__$1;(statearr_43283_43320[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 11))
{var inst_43226 = (state_43262[8]);var inst_43232 = (inst_43226 == null);var state_43262__$1 = state_43262;if(cljs.core.truth_(inst_43232))
{var statearr_43284_43321 = state_43262__$1;(statearr_43284_43321[1] = 14);
} else
{var statearr_43285_43322 = state_43262__$1;(statearr_43285_43322[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 9))
{var inst_43219 = (state_43262[13]);var inst_43219__$1 = (state_43262[2]);var inst_43220 = cljs.core.get.call(null,inst_43219__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_43221 = cljs.core.get.call(null,inst_43219__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_43222 = cljs.core.get.call(null,inst_43219__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_43262__$1 = (function (){var statearr_43286 = state_43262;(statearr_43286[13] = inst_43219__$1);
(statearr_43286[16] = inst_43222);
(statearr_43286[18] = inst_43221);
return statearr_43286;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_43262__$1,10,inst_43220);
} else
{if((state_val_43263 === 5))
{var inst_43211 = (state_43262[7]);var inst_43214 = cljs.core.seq_QMARK_.call(null,inst_43211);var state_43262__$1 = state_43262;if(inst_43214)
{var statearr_43287_43323 = state_43262__$1;(statearr_43287_43323[1] = 7);
} else
{var statearr_43288_43324 = state_43262__$1;(statearr_43288_43324[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 14))
{var inst_43227 = (state_43262[17]);var inst_43234 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_43227);var state_43262__$1 = state_43262;var statearr_43289_43325 = state_43262__$1;(statearr_43289_43325[2] = inst_43234);
(statearr_43289_43325[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 16))
{var inst_43237 = (state_43262[2]);var inst_43238 = calc_state.call(null);var inst_43211 = inst_43238;var state_43262__$1 = (function (){var statearr_43290 = state_43262;(statearr_43290[7] = inst_43211);
(statearr_43290[19] = inst_43237);
return statearr_43290;
})();var statearr_43291_43326 = state_43262__$1;(statearr_43291_43326[2] = null);
(statearr_43291_43326[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 10))
{var inst_43226 = (state_43262[8]);var inst_43227 = (state_43262[17]);var inst_43225 = (state_43262[2]);var inst_43226__$1 = cljs.core.nth.call(null,inst_43225,0,null);var inst_43227__$1 = cljs.core.nth.call(null,inst_43225,1,null);var inst_43228 = (inst_43226__$1 == null);var inst_43229 = cljs.core._EQ_.call(null,inst_43227__$1,change);var inst_43230 = (inst_43228) || (inst_43229);var state_43262__$1 = (function (){var statearr_43292 = state_43262;(statearr_43292[8] = inst_43226__$1);
(statearr_43292[17] = inst_43227__$1);
return statearr_43292;
})();if(cljs.core.truth_(inst_43230))
{var statearr_43293_43327 = state_43262__$1;(statearr_43293_43327[1] = 11);
} else
{var statearr_43294_43328 = state_43262__$1;(statearr_43294_43328[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 18))
{var inst_43222 = (state_43262[16]);var inst_43221 = (state_43262[18]);var inst_43227 = (state_43262[17]);var inst_43244 = cljs.core.empty_QMARK_.call(null,inst_43222);var inst_43245 = inst_43221.call(null,inst_43227);var inst_43246 = cljs.core.not.call(null,inst_43245);var inst_43247 = (inst_43244) && (inst_43246);var state_43262__$1 = state_43262;var statearr_43295_43329 = state_43262__$1;(statearr_43295_43329[2] = inst_43247);
(statearr_43295_43329[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43263 === 8))
{var inst_43211 = (state_43262[7]);var state_43262__$1 = state_43262;var statearr_43296_43330 = state_43262__$1;(statearr_43296_43330[2] = inst_43211);
(statearr_43296_43330[1] = 9);
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
var state_machine__22127__auto____0 = (function (){var statearr_43300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43300[0] = state_machine__22127__auto__);
(statearr_43300[1] = 1);
return statearr_43300;
});
var state_machine__22127__auto____1 = (function (state_43262){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_43262);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e43301){if((e43301 instanceof Object))
{var ex__22130__auto__ = e43301;var statearr_43302_43331 = state_43262;(statearr_43302_43331[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43262);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43301;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43332 = state_43262;
state_43262 = G__43332;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_43262){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_43262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_43303 = f__22202__auto__.call(null);(statearr_43303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___43304);
return statearr_43303;
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
cljs.core.async.Pub = (function (){var obj43334 = {};return obj43334;
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
return (function (p1__43335_SHARP_){if(cljs.core.truth_(p1__43335_SHARP_.call(null,topic)))
{return p1__43335_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__43335_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14982__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t43460 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t43460 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta43461){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta43461 = meta43461;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t43460.cljs$lang$type = true;
cljs.core.async.t43460.cljs$lang$ctorStr = "cljs.core.async/t43460";
cljs.core.async.t43460.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t43460");
});})(mults,ensure_mult))
;
cljs.core.async.t43460.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t43460.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t43460.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t43460.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t43460.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t43460.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t43460.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t43460.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_43462){var self__ = this;
var _43462__$1 = this;return self__.meta43461;
});})(mults,ensure_mult))
;
cljs.core.async.t43460.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_43462,meta43461__$1){var self__ = this;
var _43462__$1 = this;return (new cljs.core.async.t43460(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta43461__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t43460 = ((function (mults,ensure_mult){
return (function __GT_t43460(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta43461){return (new cljs.core.async.t43460(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta43461));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t43460(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__22201__auto___43584 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_43536){var state_val_43537 = (state_43536[1]);if((state_val_43537 === 7))
{var inst_43532 = (state_43536[2]);var state_43536__$1 = state_43536;var statearr_43538_43585 = state_43536__$1;(statearr_43538_43585[2] = inst_43532);
(statearr_43538_43585[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 20))
{var state_43536__$1 = state_43536;var statearr_43539_43586 = state_43536__$1;(statearr_43539_43586[2] = null);
(statearr_43539_43586[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 1))
{var state_43536__$1 = state_43536;var statearr_43540_43587 = state_43536__$1;(statearr_43540_43587[2] = null);
(statearr_43540_43587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 24))
{var inst_43465 = (state_43536[7]);var inst_43515 = (state_43536[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43536,23,Object,null,22);var inst_43522 = cljs.core.async.muxch_STAR_.call(null,inst_43515);var state_43536__$1 = state_43536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43536__$1,25,inst_43522,inst_43465);
} else
{if((state_val_43537 === 4))
{var inst_43465 = (state_43536[7]);var inst_43465__$1 = (state_43536[2]);var inst_43466 = (inst_43465__$1 == null);var state_43536__$1 = (function (){var statearr_43541 = state_43536;(statearr_43541[7] = inst_43465__$1);
return statearr_43541;
})();if(cljs.core.truth_(inst_43466))
{var statearr_43542_43588 = state_43536__$1;(statearr_43542_43588[1] = 5);
} else
{var statearr_43543_43589 = state_43536__$1;(statearr_43543_43589[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 15))
{var inst_43507 = (state_43536[2]);var state_43536__$1 = state_43536;var statearr_43544_43590 = state_43536__$1;(statearr_43544_43590[2] = inst_43507);
(statearr_43544_43590[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 21))
{var inst_43529 = (state_43536[2]);var state_43536__$1 = (function (){var statearr_43545 = state_43536;(statearr_43545[9] = inst_43529);
return statearr_43545;
})();var statearr_43546_43591 = state_43536__$1;(statearr_43546_43591[2] = null);
(statearr_43546_43591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 13))
{var inst_43489 = (state_43536[10]);var inst_43491 = cljs.core.chunked_seq_QMARK_.call(null,inst_43489);var state_43536__$1 = state_43536;if(inst_43491)
{var statearr_43547_43592 = state_43536__$1;(statearr_43547_43592[1] = 16);
} else
{var statearr_43548_43593 = state_43536__$1;(statearr_43548_43593[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 22))
{var inst_43526 = (state_43536[2]);var state_43536__$1 = state_43536;var statearr_43549_43594 = state_43536__$1;(statearr_43549_43594[2] = inst_43526);
(statearr_43549_43594[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 6))
{var inst_43465 = (state_43536[7]);var inst_43515 = (state_43536[8]);var inst_43513 = (state_43536[11]);var inst_43513__$1 = topic_fn.call(null,inst_43465);var inst_43514 = cljs.core.deref.call(null,mults);var inst_43515__$1 = cljs.core.get.call(null,inst_43514,inst_43513__$1);var state_43536__$1 = (function (){var statearr_43550 = state_43536;(statearr_43550[8] = inst_43515__$1);
(statearr_43550[11] = inst_43513__$1);
return statearr_43550;
})();if(cljs.core.truth_(inst_43515__$1))
{var statearr_43551_43595 = state_43536__$1;(statearr_43551_43595[1] = 19);
} else
{var statearr_43552_43596 = state_43536__$1;(statearr_43552_43596[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 25))
{var inst_43524 = (state_43536[2]);var state_43536__$1 = state_43536;var statearr_43553_43597 = state_43536__$1;(statearr_43553_43597[2] = inst_43524);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43536__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 17))
{var inst_43489 = (state_43536[10]);var inst_43498 = cljs.core.first.call(null,inst_43489);var inst_43499 = cljs.core.async.muxch_STAR_.call(null,inst_43498);var inst_43500 = cljs.core.async.close_BANG_.call(null,inst_43499);var inst_43501 = cljs.core.next.call(null,inst_43489);var inst_43475 = inst_43501;var inst_43476 = null;var inst_43477 = 0;var inst_43478 = 0;var state_43536__$1 = (function (){var statearr_43554 = state_43536;(statearr_43554[12] = inst_43478);
(statearr_43554[13] = inst_43477);
(statearr_43554[14] = inst_43476);
(statearr_43554[15] = inst_43475);
(statearr_43554[16] = inst_43500);
return statearr_43554;
})();var statearr_43555_43598 = state_43536__$1;(statearr_43555_43598[2] = null);
(statearr_43555_43598[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 3))
{var inst_43534 = (state_43536[2]);var state_43536__$1 = state_43536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43536__$1,inst_43534);
} else
{if((state_val_43537 === 12))
{var inst_43509 = (state_43536[2]);var state_43536__$1 = state_43536;var statearr_43556_43599 = state_43536__$1;(statearr_43556_43599[2] = inst_43509);
(statearr_43556_43599[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 2))
{var state_43536__$1 = state_43536;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43536__$1,4,ch);
} else
{if((state_val_43537 === 23))
{var inst_43513 = (state_43536[11]);var inst_43517 = (state_43536[2]);var inst_43518 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_43513);var state_43536__$1 = (function (){var statearr_43557 = state_43536;(statearr_43557[17] = inst_43517);
return statearr_43557;
})();var statearr_43558_43600 = state_43536__$1;(statearr_43558_43600[2] = inst_43518);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43536__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 19))
{var state_43536__$1 = state_43536;var statearr_43559_43601 = state_43536__$1;(statearr_43559_43601[2] = null);
(statearr_43559_43601[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 11))
{var inst_43489 = (state_43536[10]);var inst_43475 = (state_43536[15]);var inst_43489__$1 = cljs.core.seq.call(null,inst_43475);var state_43536__$1 = (function (){var statearr_43560 = state_43536;(statearr_43560[10] = inst_43489__$1);
return statearr_43560;
})();if(inst_43489__$1)
{var statearr_43561_43602 = state_43536__$1;(statearr_43561_43602[1] = 13);
} else
{var statearr_43562_43603 = state_43536__$1;(statearr_43562_43603[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 9))
{var inst_43511 = (state_43536[2]);var state_43536__$1 = state_43536;var statearr_43563_43604 = state_43536__$1;(statearr_43563_43604[2] = inst_43511);
(statearr_43563_43604[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 5))
{var inst_43472 = cljs.core.deref.call(null,mults);var inst_43473 = cljs.core.vals.call(null,inst_43472);var inst_43474 = cljs.core.seq.call(null,inst_43473);var inst_43475 = inst_43474;var inst_43476 = null;var inst_43477 = 0;var inst_43478 = 0;var state_43536__$1 = (function (){var statearr_43564 = state_43536;(statearr_43564[12] = inst_43478);
(statearr_43564[13] = inst_43477);
(statearr_43564[14] = inst_43476);
(statearr_43564[15] = inst_43475);
return statearr_43564;
})();var statearr_43565_43605 = state_43536__$1;(statearr_43565_43605[2] = null);
(statearr_43565_43605[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 14))
{var state_43536__$1 = state_43536;var statearr_43569_43606 = state_43536__$1;(statearr_43569_43606[2] = null);
(statearr_43569_43606[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 16))
{var inst_43489 = (state_43536[10]);var inst_43493 = cljs.core.chunk_first.call(null,inst_43489);var inst_43494 = cljs.core.chunk_rest.call(null,inst_43489);var inst_43495 = cljs.core.count.call(null,inst_43493);var inst_43475 = inst_43494;var inst_43476 = inst_43493;var inst_43477 = inst_43495;var inst_43478 = 0;var state_43536__$1 = (function (){var statearr_43570 = state_43536;(statearr_43570[12] = inst_43478);
(statearr_43570[13] = inst_43477);
(statearr_43570[14] = inst_43476);
(statearr_43570[15] = inst_43475);
return statearr_43570;
})();var statearr_43571_43607 = state_43536__$1;(statearr_43571_43607[2] = null);
(statearr_43571_43607[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 10))
{var inst_43478 = (state_43536[12]);var inst_43477 = (state_43536[13]);var inst_43476 = (state_43536[14]);var inst_43475 = (state_43536[15]);var inst_43483 = cljs.core._nth.call(null,inst_43476,inst_43478);var inst_43484 = cljs.core.async.muxch_STAR_.call(null,inst_43483);var inst_43485 = cljs.core.async.close_BANG_.call(null,inst_43484);var inst_43486 = (inst_43478 + 1);var tmp43566 = inst_43477;var tmp43567 = inst_43476;var tmp43568 = inst_43475;var inst_43475__$1 = tmp43568;var inst_43476__$1 = tmp43567;var inst_43477__$1 = tmp43566;var inst_43478__$1 = inst_43486;var state_43536__$1 = (function (){var statearr_43572 = state_43536;(statearr_43572[12] = inst_43478__$1);
(statearr_43572[13] = inst_43477__$1);
(statearr_43572[14] = inst_43476__$1);
(statearr_43572[15] = inst_43475__$1);
(statearr_43572[18] = inst_43485);
return statearr_43572;
})();var statearr_43573_43608 = state_43536__$1;(statearr_43573_43608[2] = null);
(statearr_43573_43608[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 18))
{var inst_43504 = (state_43536[2]);var state_43536__$1 = state_43536;var statearr_43574_43609 = state_43536__$1;(statearr_43574_43609[2] = inst_43504);
(statearr_43574_43609[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43537 === 8))
{var inst_43478 = (state_43536[12]);var inst_43477 = (state_43536[13]);var inst_43480 = (inst_43478 < inst_43477);var inst_43481 = inst_43480;var state_43536__$1 = state_43536;if(cljs.core.truth_(inst_43481))
{var statearr_43575_43610 = state_43536__$1;(statearr_43575_43610[1] = 10);
} else
{var statearr_43576_43611 = state_43536__$1;(statearr_43576_43611[1] = 11);
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
var state_machine__22127__auto____0 = (function (){var statearr_43580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43580[0] = state_machine__22127__auto__);
(statearr_43580[1] = 1);
return statearr_43580;
});
var state_machine__22127__auto____1 = (function (state_43536){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_43536);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e43581){if((e43581 instanceof Object))
{var ex__22130__auto__ = e43581;var statearr_43582_43612 = state_43536;(statearr_43582_43612[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43536);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43581;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43613 = state_43536;
state_43536 = G__43613;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_43536){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_43536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_43583 = f__22202__auto__.call(null);(statearr_43583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___43584);
return statearr_43583;
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
,cljs.core.range.call(null,cnt));var c__22201__auto___43750 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_43720){var state_val_43721 = (state_43720[1]);if((state_val_43721 === 7))
{var state_43720__$1 = state_43720;var statearr_43722_43751 = state_43720__$1;(statearr_43722_43751[2] = null);
(statearr_43722_43751[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43721 === 1))
{var state_43720__$1 = state_43720;var statearr_43723_43752 = state_43720__$1;(statearr_43723_43752[2] = null);
(statearr_43723_43752[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43721 === 4))
{var inst_43684 = (state_43720[7]);var inst_43686 = (inst_43684 < cnt);var state_43720__$1 = state_43720;if(cljs.core.truth_(inst_43686))
{var statearr_43724_43753 = state_43720__$1;(statearr_43724_43753[1] = 6);
} else
{var statearr_43725_43754 = state_43720__$1;(statearr_43725_43754[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43721 === 15))
{var inst_43716 = (state_43720[2]);var state_43720__$1 = state_43720;var statearr_43726_43755 = state_43720__$1;(statearr_43726_43755[2] = inst_43716);
(statearr_43726_43755[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43721 === 13))
{var inst_43709 = cljs.core.async.close_BANG_.call(null,out);var state_43720__$1 = state_43720;var statearr_43727_43756 = state_43720__$1;(statearr_43727_43756[2] = inst_43709);
(statearr_43727_43756[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43721 === 6))
{var state_43720__$1 = state_43720;var statearr_43728_43757 = state_43720__$1;(statearr_43728_43757[2] = null);
(statearr_43728_43757[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43721 === 3))
{var inst_43718 = (state_43720[2]);var state_43720__$1 = state_43720;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43720__$1,inst_43718);
} else
{if((state_val_43721 === 12))
{var inst_43706 = (state_43720[8]);var inst_43706__$1 = (state_43720[2]);var inst_43707 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_43706__$1);var state_43720__$1 = (function (){var statearr_43729 = state_43720;(statearr_43729[8] = inst_43706__$1);
return statearr_43729;
})();if(cljs.core.truth_(inst_43707))
{var statearr_43730_43758 = state_43720__$1;(statearr_43730_43758[1] = 13);
} else
{var statearr_43731_43759 = state_43720__$1;(statearr_43731_43759[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43721 === 2))
{var inst_43683 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_43684 = 0;var state_43720__$1 = (function (){var statearr_43732 = state_43720;(statearr_43732[9] = inst_43683);
(statearr_43732[7] = inst_43684);
return statearr_43732;
})();var statearr_43733_43760 = state_43720__$1;(statearr_43733_43760[2] = null);
(statearr_43733_43760[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43721 === 11))
{var inst_43684 = (state_43720[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_43720,10,Object,null,9);var inst_43693 = chs__$1.call(null,inst_43684);var inst_43694 = done.call(null,inst_43684);var inst_43695 = cljs.core.async.take_BANG_.call(null,inst_43693,inst_43694);var state_43720__$1 = state_43720;var statearr_43734_43761 = state_43720__$1;(statearr_43734_43761[2] = inst_43695);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43720__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43721 === 9))
{var inst_43684 = (state_43720[7]);var inst_43697 = (state_43720[2]);var inst_43698 = (inst_43684 + 1);var inst_43684__$1 = inst_43698;var state_43720__$1 = (function (){var statearr_43735 = state_43720;(statearr_43735[10] = inst_43697);
(statearr_43735[7] = inst_43684__$1);
return statearr_43735;
})();var statearr_43736_43762 = state_43720__$1;(statearr_43736_43762[2] = null);
(statearr_43736_43762[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43721 === 5))
{var inst_43704 = (state_43720[2]);var state_43720__$1 = (function (){var statearr_43737 = state_43720;(statearr_43737[11] = inst_43704);
return statearr_43737;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43720__$1,12,dchan);
} else
{if((state_val_43721 === 14))
{var inst_43706 = (state_43720[8]);var inst_43711 = cljs.core.apply.call(null,f,inst_43706);var state_43720__$1 = state_43720;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43720__$1,16,out,inst_43711);
} else
{if((state_val_43721 === 16))
{var inst_43713 = (state_43720[2]);var state_43720__$1 = (function (){var statearr_43738 = state_43720;(statearr_43738[12] = inst_43713);
return statearr_43738;
})();var statearr_43739_43763 = state_43720__$1;(statearr_43739_43763[2] = null);
(statearr_43739_43763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43721 === 10))
{var inst_43688 = (state_43720[2]);var inst_43689 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_43720__$1 = (function (){var statearr_43740 = state_43720;(statearr_43740[13] = inst_43688);
return statearr_43740;
})();var statearr_43741_43764 = state_43720__$1;(statearr_43741_43764[2] = inst_43689);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43720__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43721 === 8))
{var inst_43702 = (state_43720[2]);var state_43720__$1 = state_43720;var statearr_43742_43765 = state_43720__$1;(statearr_43742_43765[2] = inst_43702);
(statearr_43742_43765[1] = 5);
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
var state_machine__22127__auto____0 = (function (){var statearr_43746 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43746[0] = state_machine__22127__auto__);
(statearr_43746[1] = 1);
return statearr_43746;
});
var state_machine__22127__auto____1 = (function (state_43720){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_43720);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e43747){if((e43747 instanceof Object))
{var ex__22130__auto__ = e43747;var statearr_43748_43766 = state_43720;(statearr_43748_43766[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43720);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43747;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43767 = state_43720;
state_43720 = G__43767;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_43720){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_43720);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_43749 = f__22202__auto__.call(null);(statearr_43749[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___43750);
return statearr_43749;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___43875 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_43851){var state_val_43852 = (state_43851[1]);if((state_val_43852 === 7))
{var inst_43830 = (state_43851[7]);var inst_43831 = (state_43851[8]);var inst_43830__$1 = (state_43851[2]);var inst_43831__$1 = cljs.core.nth.call(null,inst_43830__$1,0,null);var inst_43832 = cljs.core.nth.call(null,inst_43830__$1,1,null);var inst_43833 = (inst_43831__$1 == null);var state_43851__$1 = (function (){var statearr_43853 = state_43851;(statearr_43853[7] = inst_43830__$1);
(statearr_43853[8] = inst_43831__$1);
(statearr_43853[9] = inst_43832);
return statearr_43853;
})();if(cljs.core.truth_(inst_43833))
{var statearr_43854_43876 = state_43851__$1;(statearr_43854_43876[1] = 8);
} else
{var statearr_43855_43877 = state_43851__$1;(statearr_43855_43877[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43852 === 1))
{var inst_43822 = cljs.core.vec.call(null,chs);var inst_43823 = inst_43822;var state_43851__$1 = (function (){var statearr_43856 = state_43851;(statearr_43856[10] = inst_43823);
return statearr_43856;
})();var statearr_43857_43878 = state_43851__$1;(statearr_43857_43878[2] = null);
(statearr_43857_43878[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43852 === 4))
{var inst_43823 = (state_43851[10]);var state_43851__$1 = state_43851;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_43851__$1,7,inst_43823);
} else
{if((state_val_43852 === 6))
{var inst_43847 = (state_43851[2]);var state_43851__$1 = state_43851;var statearr_43858_43879 = state_43851__$1;(statearr_43858_43879[2] = inst_43847);
(statearr_43858_43879[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43852 === 3))
{var inst_43849 = (state_43851[2]);var state_43851__$1 = state_43851;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43851__$1,inst_43849);
} else
{if((state_val_43852 === 2))
{var inst_43823 = (state_43851[10]);var inst_43825 = cljs.core.count.call(null,inst_43823);var inst_43826 = (inst_43825 > 0);var state_43851__$1 = state_43851;if(cljs.core.truth_(inst_43826))
{var statearr_43860_43880 = state_43851__$1;(statearr_43860_43880[1] = 4);
} else
{var statearr_43861_43881 = state_43851__$1;(statearr_43861_43881[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43852 === 11))
{var inst_43823 = (state_43851[10]);var inst_43840 = (state_43851[2]);var tmp43859 = inst_43823;var inst_43823__$1 = tmp43859;var state_43851__$1 = (function (){var statearr_43862 = state_43851;(statearr_43862[10] = inst_43823__$1);
(statearr_43862[11] = inst_43840);
return statearr_43862;
})();var statearr_43863_43882 = state_43851__$1;(statearr_43863_43882[2] = null);
(statearr_43863_43882[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43852 === 9))
{var inst_43831 = (state_43851[8]);var state_43851__$1 = state_43851;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43851__$1,11,out,inst_43831);
} else
{if((state_val_43852 === 5))
{var inst_43845 = cljs.core.async.close_BANG_.call(null,out);var state_43851__$1 = state_43851;var statearr_43864_43883 = state_43851__$1;(statearr_43864_43883[2] = inst_43845);
(statearr_43864_43883[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43852 === 10))
{var inst_43843 = (state_43851[2]);var state_43851__$1 = state_43851;var statearr_43865_43884 = state_43851__$1;(statearr_43865_43884[2] = inst_43843);
(statearr_43865_43884[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43852 === 8))
{var inst_43830 = (state_43851[7]);var inst_43831 = (state_43851[8]);var inst_43823 = (state_43851[10]);var inst_43832 = (state_43851[9]);var inst_43835 = (function (){var c = inst_43832;var v = inst_43831;var vec__43828 = inst_43830;var cs = inst_43823;return ((function (c,v,vec__43828,cs,inst_43830,inst_43831,inst_43823,inst_43832,state_val_43852){
return (function (p1__43768_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__43768_SHARP_);
});
;})(c,v,vec__43828,cs,inst_43830,inst_43831,inst_43823,inst_43832,state_val_43852))
})();var inst_43836 = cljs.core.filterv.call(null,inst_43835,inst_43823);var inst_43823__$1 = inst_43836;var state_43851__$1 = (function (){var statearr_43866 = state_43851;(statearr_43866[10] = inst_43823__$1);
return statearr_43866;
})();var statearr_43867_43885 = state_43851__$1;(statearr_43867_43885[2] = null);
(statearr_43867_43885[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_43871 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43871[0] = state_machine__22127__auto__);
(statearr_43871[1] = 1);
return statearr_43871;
});
var state_machine__22127__auto____1 = (function (state_43851){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_43851);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e43872){if((e43872 instanceof Object))
{var ex__22130__auto__ = e43872;var statearr_43873_43886 = state_43851;(statearr_43873_43886[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43851);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43887 = state_43851;
state_43851 = G__43887;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_43851){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_43851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_43874 = f__22202__auto__.call(null);(statearr_43874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___43875);
return statearr_43874;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___43980 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_43957){var state_val_43958 = (state_43957[1]);if((state_val_43958 === 7))
{var inst_43939 = (state_43957[7]);var inst_43939__$1 = (state_43957[2]);var inst_43940 = (inst_43939__$1 == null);var inst_43941 = cljs.core.not.call(null,inst_43940);var state_43957__$1 = (function (){var statearr_43959 = state_43957;(statearr_43959[7] = inst_43939__$1);
return statearr_43959;
})();if(inst_43941)
{var statearr_43960_43981 = state_43957__$1;(statearr_43960_43981[1] = 8);
} else
{var statearr_43961_43982 = state_43957__$1;(statearr_43961_43982[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43958 === 1))
{var inst_43934 = 0;var state_43957__$1 = (function (){var statearr_43962 = state_43957;(statearr_43962[8] = inst_43934);
return statearr_43962;
})();var statearr_43963_43983 = state_43957__$1;(statearr_43963_43983[2] = null);
(statearr_43963_43983[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43958 === 4))
{var state_43957__$1 = state_43957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43957__$1,7,ch);
} else
{if((state_val_43958 === 6))
{var inst_43952 = (state_43957[2]);var state_43957__$1 = state_43957;var statearr_43964_43984 = state_43957__$1;(statearr_43964_43984[2] = inst_43952);
(statearr_43964_43984[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43958 === 3))
{var inst_43954 = (state_43957[2]);var inst_43955 = cljs.core.async.close_BANG_.call(null,out);var state_43957__$1 = (function (){var statearr_43965 = state_43957;(statearr_43965[9] = inst_43954);
return statearr_43965;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43957__$1,inst_43955);
} else
{if((state_val_43958 === 2))
{var inst_43934 = (state_43957[8]);var inst_43936 = (inst_43934 < n);var state_43957__$1 = state_43957;if(cljs.core.truth_(inst_43936))
{var statearr_43966_43985 = state_43957__$1;(statearr_43966_43985[1] = 4);
} else
{var statearr_43967_43986 = state_43957__$1;(statearr_43967_43986[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43958 === 11))
{var inst_43934 = (state_43957[8]);var inst_43944 = (state_43957[2]);var inst_43945 = (inst_43934 + 1);var inst_43934__$1 = inst_43945;var state_43957__$1 = (function (){var statearr_43968 = state_43957;(statearr_43968[8] = inst_43934__$1);
(statearr_43968[10] = inst_43944);
return statearr_43968;
})();var statearr_43969_43987 = state_43957__$1;(statearr_43969_43987[2] = null);
(statearr_43969_43987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43958 === 9))
{var state_43957__$1 = state_43957;var statearr_43970_43988 = state_43957__$1;(statearr_43970_43988[2] = null);
(statearr_43970_43988[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43958 === 5))
{var state_43957__$1 = state_43957;var statearr_43971_43989 = state_43957__$1;(statearr_43971_43989[2] = null);
(statearr_43971_43989[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43958 === 10))
{var inst_43949 = (state_43957[2]);var state_43957__$1 = state_43957;var statearr_43972_43990 = state_43957__$1;(statearr_43972_43990[2] = inst_43949);
(statearr_43972_43990[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_43958 === 8))
{var inst_43939 = (state_43957[7]);var state_43957__$1 = state_43957;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_43957__$1,11,out,inst_43939);
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
var state_machine__22127__auto____0 = (function (){var statearr_43976 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_43976[0] = state_machine__22127__auto__);
(statearr_43976[1] = 1);
return statearr_43976;
});
var state_machine__22127__auto____1 = (function (state_43957){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_43957);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e43977){if((e43977 instanceof Object))
{var ex__22130__auto__ = e43977;var statearr_43978_43991 = state_43957;(statearr_43978_43991[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43957);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e43977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__43992 = state_43957;
state_43957 = G__43992;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_43957){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_43957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_43979 = f__22202__auto__.call(null);(statearr_43979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___43980);
return statearr_43979;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___44089 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_44064){var state_val_44065 = (state_44064[1]);if((state_val_44065 === 7))
{var inst_44059 = (state_44064[2]);var state_44064__$1 = state_44064;var statearr_44066_44090 = state_44064__$1;(statearr_44066_44090[2] = inst_44059);
(statearr_44066_44090[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44065 === 1))
{var inst_44041 = null;var state_44064__$1 = (function (){var statearr_44067 = state_44064;(statearr_44067[7] = inst_44041);
return statearr_44067;
})();var statearr_44068_44091 = state_44064__$1;(statearr_44068_44091[2] = null);
(statearr_44068_44091[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44065 === 4))
{var inst_44044 = (state_44064[8]);var inst_44044__$1 = (state_44064[2]);var inst_44045 = (inst_44044__$1 == null);var inst_44046 = cljs.core.not.call(null,inst_44045);var state_44064__$1 = (function (){var statearr_44069 = state_44064;(statearr_44069[8] = inst_44044__$1);
return statearr_44069;
})();if(inst_44046)
{var statearr_44070_44092 = state_44064__$1;(statearr_44070_44092[1] = 5);
} else
{var statearr_44071_44093 = state_44064__$1;(statearr_44071_44093[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44065 === 6))
{var state_44064__$1 = state_44064;var statearr_44072_44094 = state_44064__$1;(statearr_44072_44094[2] = null);
(statearr_44072_44094[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44065 === 3))
{var inst_44061 = (state_44064[2]);var inst_44062 = cljs.core.async.close_BANG_.call(null,out);var state_44064__$1 = (function (){var statearr_44073 = state_44064;(statearr_44073[9] = inst_44061);
return statearr_44073;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44064__$1,inst_44062);
} else
{if((state_val_44065 === 2))
{var state_44064__$1 = state_44064;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44064__$1,4,ch);
} else
{if((state_val_44065 === 11))
{var inst_44044 = (state_44064[8]);var inst_44053 = (state_44064[2]);var inst_44041 = inst_44044;var state_44064__$1 = (function (){var statearr_44074 = state_44064;(statearr_44074[7] = inst_44041);
(statearr_44074[10] = inst_44053);
return statearr_44074;
})();var statearr_44075_44095 = state_44064__$1;(statearr_44075_44095[2] = null);
(statearr_44075_44095[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44065 === 9))
{var inst_44044 = (state_44064[8]);var state_44064__$1 = state_44064;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44064__$1,11,out,inst_44044);
} else
{if((state_val_44065 === 5))
{var inst_44044 = (state_44064[8]);var inst_44041 = (state_44064[7]);var inst_44048 = cljs.core._EQ_.call(null,inst_44044,inst_44041);var state_44064__$1 = state_44064;if(inst_44048)
{var statearr_44077_44096 = state_44064__$1;(statearr_44077_44096[1] = 8);
} else
{var statearr_44078_44097 = state_44064__$1;(statearr_44078_44097[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44065 === 10))
{var inst_44056 = (state_44064[2]);var state_44064__$1 = state_44064;var statearr_44079_44098 = state_44064__$1;(statearr_44079_44098[2] = inst_44056);
(statearr_44079_44098[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44065 === 8))
{var inst_44041 = (state_44064[7]);var tmp44076 = inst_44041;var inst_44041__$1 = tmp44076;var state_44064__$1 = (function (){var statearr_44080 = state_44064;(statearr_44080[7] = inst_44041__$1);
return statearr_44080;
})();var statearr_44081_44099 = state_44064__$1;(statearr_44081_44099[2] = null);
(statearr_44081_44099[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_44085 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_44085[0] = state_machine__22127__auto__);
(statearr_44085[1] = 1);
return statearr_44085;
});
var state_machine__22127__auto____1 = (function (state_44064){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_44064);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e44086){if((e44086 instanceof Object))
{var ex__22130__auto__ = e44086;var statearr_44087_44100 = state_44064;(statearr_44087_44100[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44064);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44086;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44101 = state_44064;
state_44064 = G__44101;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_44064){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_44064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_44088 = f__22202__auto__.call(null);(statearr_44088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___44089);
return statearr_44088;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___44236 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_44206){var state_val_44207 = (state_44206[1]);if((state_val_44207 === 7))
{var inst_44202 = (state_44206[2]);var state_44206__$1 = state_44206;var statearr_44208_44237 = state_44206__$1;(statearr_44208_44237[2] = inst_44202);
(statearr_44208_44237[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 1))
{var inst_44169 = (new Array(n));var inst_44170 = inst_44169;var inst_44171 = 0;var state_44206__$1 = (function (){var statearr_44209 = state_44206;(statearr_44209[7] = inst_44170);
(statearr_44209[8] = inst_44171);
return statearr_44209;
})();var statearr_44210_44238 = state_44206__$1;(statearr_44210_44238[2] = null);
(statearr_44210_44238[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 4))
{var inst_44174 = (state_44206[9]);var inst_44174__$1 = (state_44206[2]);var inst_44175 = (inst_44174__$1 == null);var inst_44176 = cljs.core.not.call(null,inst_44175);var state_44206__$1 = (function (){var statearr_44211 = state_44206;(statearr_44211[9] = inst_44174__$1);
return statearr_44211;
})();if(inst_44176)
{var statearr_44212_44239 = state_44206__$1;(statearr_44212_44239[1] = 5);
} else
{var statearr_44213_44240 = state_44206__$1;(statearr_44213_44240[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 15))
{var inst_44196 = (state_44206[2]);var state_44206__$1 = state_44206;var statearr_44214_44241 = state_44206__$1;(statearr_44214_44241[2] = inst_44196);
(statearr_44214_44241[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 13))
{var state_44206__$1 = state_44206;var statearr_44215_44242 = state_44206__$1;(statearr_44215_44242[2] = null);
(statearr_44215_44242[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 6))
{var inst_44171 = (state_44206[8]);var inst_44192 = (inst_44171 > 0);var state_44206__$1 = state_44206;if(cljs.core.truth_(inst_44192))
{var statearr_44216_44243 = state_44206__$1;(statearr_44216_44243[1] = 12);
} else
{var statearr_44217_44244 = state_44206__$1;(statearr_44217_44244[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 3))
{var inst_44204 = (state_44206[2]);var state_44206__$1 = state_44206;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44206__$1,inst_44204);
} else
{if((state_val_44207 === 12))
{var inst_44170 = (state_44206[7]);var inst_44194 = cljs.core.vec.call(null,inst_44170);var state_44206__$1 = state_44206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44206__$1,15,out,inst_44194);
} else
{if((state_val_44207 === 2))
{var state_44206__$1 = state_44206;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44206__$1,4,ch);
} else
{if((state_val_44207 === 11))
{var inst_44186 = (state_44206[2]);var inst_44187 = (new Array(n));var inst_44170 = inst_44187;var inst_44171 = 0;var state_44206__$1 = (function (){var statearr_44218 = state_44206;(statearr_44218[10] = inst_44186);
(statearr_44218[7] = inst_44170);
(statearr_44218[8] = inst_44171);
return statearr_44218;
})();var statearr_44219_44245 = state_44206__$1;(statearr_44219_44245[2] = null);
(statearr_44219_44245[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 9))
{var inst_44170 = (state_44206[7]);var inst_44184 = cljs.core.vec.call(null,inst_44170);var state_44206__$1 = state_44206;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44206__$1,11,out,inst_44184);
} else
{if((state_val_44207 === 5))
{var inst_44174 = (state_44206[9]);var inst_44170 = (state_44206[7]);var inst_44179 = (state_44206[11]);var inst_44171 = (state_44206[8]);var inst_44178 = (inst_44170[inst_44171] = inst_44174);var inst_44179__$1 = (inst_44171 + 1);var inst_44180 = (inst_44179__$1 < n);var state_44206__$1 = (function (){var statearr_44220 = state_44206;(statearr_44220[12] = inst_44178);
(statearr_44220[11] = inst_44179__$1);
return statearr_44220;
})();if(cljs.core.truth_(inst_44180))
{var statearr_44221_44246 = state_44206__$1;(statearr_44221_44246[1] = 8);
} else
{var statearr_44222_44247 = state_44206__$1;(statearr_44222_44247[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 14))
{var inst_44199 = (state_44206[2]);var inst_44200 = cljs.core.async.close_BANG_.call(null,out);var state_44206__$1 = (function (){var statearr_44224 = state_44206;(statearr_44224[13] = inst_44199);
return statearr_44224;
})();var statearr_44225_44248 = state_44206__$1;(statearr_44225_44248[2] = inst_44200);
(statearr_44225_44248[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 10))
{var inst_44190 = (state_44206[2]);var state_44206__$1 = state_44206;var statearr_44226_44249 = state_44206__$1;(statearr_44226_44249[2] = inst_44190);
(statearr_44226_44249[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44207 === 8))
{var inst_44170 = (state_44206[7]);var inst_44179 = (state_44206[11]);var tmp44223 = inst_44170;var inst_44170__$1 = tmp44223;var inst_44171 = inst_44179;var state_44206__$1 = (function (){var statearr_44227 = state_44206;(statearr_44227[7] = inst_44170__$1);
(statearr_44227[8] = inst_44171);
return statearr_44227;
})();var statearr_44228_44250 = state_44206__$1;(statearr_44228_44250[2] = null);
(statearr_44228_44250[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_44232 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44232[0] = state_machine__22127__auto__);
(statearr_44232[1] = 1);
return statearr_44232;
});
var state_machine__22127__auto____1 = (function (state_44206){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_44206);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e44233){if((e44233 instanceof Object))
{var ex__22130__auto__ = e44233;var statearr_44234_44251 = state_44206;(statearr_44234_44251[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44206);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44233;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44252 = state_44206;
state_44206 = G__44252;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_44206){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_44206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_44235 = f__22202__auto__.call(null);(statearr_44235[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___44236);
return statearr_44235;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__22201__auto___44395 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__22202__auto__ = (function (){var switch__22126__auto__ = (function (state_44365){var state_val_44366 = (state_44365[1]);if((state_val_44366 === 7))
{var inst_44361 = (state_44365[2]);var state_44365__$1 = state_44365;var statearr_44367_44396 = state_44365__$1;(statearr_44367_44396[2] = inst_44361);
(statearr_44367_44396[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44366 === 1))
{var inst_44324 = [];var inst_44325 = inst_44324;var inst_44326 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_44365__$1 = (function (){var statearr_44368 = state_44365;(statearr_44368[7] = inst_44325);
(statearr_44368[8] = inst_44326);
return statearr_44368;
})();var statearr_44369_44397 = state_44365__$1;(statearr_44369_44397[2] = null);
(statearr_44369_44397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44366 === 4))
{var inst_44329 = (state_44365[9]);var inst_44329__$1 = (state_44365[2]);var inst_44330 = (inst_44329__$1 == null);var inst_44331 = cljs.core.not.call(null,inst_44330);var state_44365__$1 = (function (){var statearr_44370 = state_44365;(statearr_44370[9] = inst_44329__$1);
return statearr_44370;
})();if(inst_44331)
{var statearr_44371_44398 = state_44365__$1;(statearr_44371_44398[1] = 5);
} else
{var statearr_44372_44399 = state_44365__$1;(statearr_44372_44399[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44366 === 15))
{var inst_44355 = (state_44365[2]);var state_44365__$1 = state_44365;var statearr_44373_44400 = state_44365__$1;(statearr_44373_44400[2] = inst_44355);
(statearr_44373_44400[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44366 === 13))
{var state_44365__$1 = state_44365;var statearr_44374_44401 = state_44365__$1;(statearr_44374_44401[2] = null);
(statearr_44374_44401[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44366 === 6))
{var inst_44325 = (state_44365[7]);var inst_44350 = inst_44325.length;var inst_44351 = (inst_44350 > 0);var state_44365__$1 = state_44365;if(cljs.core.truth_(inst_44351))
{var statearr_44375_44402 = state_44365__$1;(statearr_44375_44402[1] = 12);
} else
{var statearr_44376_44403 = state_44365__$1;(statearr_44376_44403[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44366 === 3))
{var inst_44363 = (state_44365[2]);var state_44365__$1 = state_44365;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44365__$1,inst_44363);
} else
{if((state_val_44366 === 12))
{var inst_44325 = (state_44365[7]);var inst_44353 = cljs.core.vec.call(null,inst_44325);var state_44365__$1 = state_44365;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44365__$1,15,out,inst_44353);
} else
{if((state_val_44366 === 2))
{var state_44365__$1 = state_44365;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44365__$1,4,ch);
} else
{if((state_val_44366 === 11))
{var inst_44329 = (state_44365[9]);var inst_44333 = (state_44365[10]);var inst_44343 = (state_44365[2]);var inst_44344 = [];var inst_44345 = inst_44344.push(inst_44329);var inst_44325 = inst_44344;var inst_44326 = inst_44333;var state_44365__$1 = (function (){var statearr_44377 = state_44365;(statearr_44377[11] = inst_44343);
(statearr_44377[12] = inst_44345);
(statearr_44377[7] = inst_44325);
(statearr_44377[8] = inst_44326);
return statearr_44377;
})();var statearr_44378_44404 = state_44365__$1;(statearr_44378_44404[2] = null);
(statearr_44378_44404[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44366 === 9))
{var inst_44325 = (state_44365[7]);var inst_44341 = cljs.core.vec.call(null,inst_44325);var state_44365__$1 = state_44365;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44365__$1,11,out,inst_44341);
} else
{if((state_val_44366 === 5))
{var inst_44326 = (state_44365[8]);var inst_44329 = (state_44365[9]);var inst_44333 = (state_44365[10]);var inst_44333__$1 = f.call(null,inst_44329);var inst_44334 = cljs.core._EQ_.call(null,inst_44333__$1,inst_44326);var inst_44335 = cljs.core.keyword_identical_QMARK_.call(null,inst_44326,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_44336 = (inst_44334) || (inst_44335);var state_44365__$1 = (function (){var statearr_44379 = state_44365;(statearr_44379[10] = inst_44333__$1);
return statearr_44379;
})();if(cljs.core.truth_(inst_44336))
{var statearr_44380_44405 = state_44365__$1;(statearr_44380_44405[1] = 8);
} else
{var statearr_44381_44406 = state_44365__$1;(statearr_44381_44406[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44366 === 14))
{var inst_44358 = (state_44365[2]);var inst_44359 = cljs.core.async.close_BANG_.call(null,out);var state_44365__$1 = (function (){var statearr_44383 = state_44365;(statearr_44383[13] = inst_44358);
return statearr_44383;
})();var statearr_44384_44407 = state_44365__$1;(statearr_44384_44407[2] = inst_44359);
(statearr_44384_44407[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44366 === 10))
{var inst_44348 = (state_44365[2]);var state_44365__$1 = state_44365;var statearr_44385_44408 = state_44365__$1;(statearr_44385_44408[2] = inst_44348);
(statearr_44385_44408[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44366 === 8))
{var inst_44325 = (state_44365[7]);var inst_44329 = (state_44365[9]);var inst_44333 = (state_44365[10]);var inst_44338 = inst_44325.push(inst_44329);var tmp44382 = inst_44325;var inst_44325__$1 = tmp44382;var inst_44326 = inst_44333;var state_44365__$1 = (function (){var statearr_44386 = state_44365;(statearr_44386[7] = inst_44325__$1);
(statearr_44386[8] = inst_44326);
(statearr_44386[14] = inst_44338);
return statearr_44386;
})();var statearr_44387_44409 = state_44365__$1;(statearr_44387_44409[2] = null);
(statearr_44387_44409[1] = 2);
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
var state_machine__22127__auto____0 = (function (){var statearr_44391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44391[0] = state_machine__22127__auto__);
(statearr_44391[1] = 1);
return statearr_44391;
});
var state_machine__22127__auto____1 = (function (state_44365){while(true){
var ret_value__22128__auto__ = (function (){try{while(true){
var result__22129__auto__ = switch__22126__auto__.call(null,state_44365);if(cljs.core.keyword_identical_QMARK_.call(null,result__22129__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__22129__auto__;
}
break;
}
}catch (e44392){if((e44392 instanceof Object))
{var ex__22130__auto__ = e44392;var statearr_44393_44410 = state_44365;(statearr_44393_44410[5] = ex__22130__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44365);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22128__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44411 = state_44365;
state_44365 = G__44411;
continue;
}
} else
{return ret_value__22128__auto__;
}
break;
}
});
state_machine__22127__auto__ = function(state_44365){
switch(arguments.length){
case 0:
return state_machine__22127__auto____0.call(this);
case 1:
return state_machine__22127__auto____1.call(this,state_44365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__22127__auto____0;
state_machine__22127__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__22127__auto____1;
return state_machine__22127__auto__;
})()
;})(switch__22126__auto__))
})();var state__22203__auto__ = (function (){var statearr_44394 = f__22202__auto__.call(null);(statearr_44394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22201__auto___44395);
return statearr_44394;
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

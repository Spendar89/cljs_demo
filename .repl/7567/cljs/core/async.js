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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t37845 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37845 = (function (f,fn_handler,meta37846){
this.f = f;
this.fn_handler = fn_handler;
this.meta37846 = meta37846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37845.cljs$lang$type = true;
cljs.core.async.t37845.cljs$lang$ctorStr = "cljs.core.async/t37845";
cljs.core.async.t37845.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37845");
});
cljs.core.async.t37845.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37845.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t37845.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t37845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37847){var self__ = this;
var _37847__$1 = this;return self__.meta37846;
});
cljs.core.async.t37845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37847,meta37846__$1){var self__ = this;
var _37847__$1 = this;return (new cljs.core.async.t37845(self__.f,self__.fn_handler,meta37846__$1));
});
cljs.core.async.__GT_t37845 = (function __GT_t37845(f__$1,fn_handler__$1,meta37846){return (new cljs.core.async.t37845(f__$1,fn_handler__$1,meta37846));
});
}
return (new cljs.core.async.t37845(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__37849 = buff;if(G__37849)
{var bit__15231__auto__ = null;if(cljs.core.truth_((function (){var or__14581__auto__ = bit__15231__auto__;if(cljs.core.truth_(or__14581__auto__))
{return or__14581__auto__;
} else
{return G__37849.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__37849.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37849);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__37849);
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
{var val_37850 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_37850);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_37850);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15429__auto___37851 = n;var x_37852 = 0;while(true){
if((x_37852 < n__15429__auto___37851))
{(a[x_37852] = 0);
{
var G__37853 = (x_37852 + 1);
x_37852 = G__37853;
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
var G__37854 = (i + 1);
i = G__37854;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t37858 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37858 = (function (flag,alt_flag,meta37859){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta37859 = meta37859;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37858.cljs$lang$type = true;
cljs.core.async.t37858.cljs$lang$ctorStr = "cljs.core.async/t37858";
cljs.core.async.t37858.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37858");
});
cljs.core.async.t37858.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37858.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t37858.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t37858.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37860){var self__ = this;
var _37860__$1 = this;return self__.meta37859;
});
cljs.core.async.t37858.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37860,meta37859__$1){var self__ = this;
var _37860__$1 = this;return (new cljs.core.async.t37858(self__.flag,self__.alt_flag,meta37859__$1));
});
cljs.core.async.__GT_t37858 = (function __GT_t37858(flag__$1,alt_flag__$1,meta37859){return (new cljs.core.async.t37858(flag__$1,alt_flag__$1,meta37859));
});
}
return (new cljs.core.async.t37858(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t37864 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37864 = (function (cb,flag,alt_handler,meta37865){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta37865 = meta37865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37864.cljs$lang$type = true;
cljs.core.async.t37864.cljs$lang$ctorStr = "cljs.core.async/t37864";
cljs.core.async.t37864.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37864");
});
cljs.core.async.t37864.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37864.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t37864.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t37864.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37866){var self__ = this;
var _37866__$1 = this;return self__.meta37865;
});
cljs.core.async.t37864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37866,meta37865__$1){var self__ = this;
var _37866__$1 = this;return (new cljs.core.async.t37864(self__.cb,self__.flag,self__.alt_handler,meta37865__$1));
});
cljs.core.async.__GT_t37864 = (function __GT_t37864(cb__$1,flag__$1,alt_handler__$1,meta37865){return (new cljs.core.async.t37864(cb__$1,flag__$1,alt_handler__$1,meta37865));
});
}
return (new cljs.core.async.t37864(cb,flag,alt_handler,null));
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
return (function (p1__37867_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37867_SHARP_,port], null));
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
var G__37868 = (i + 1);
i = G__37868;
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
var alts_BANG___delegate = function (ports,p__37869){var map__37871 = p__37869;var map__37871__$1 = ((cljs.core.seq_QMARK_.call(null,map__37871))?cljs.core.apply.call(null,cljs.core.hash_map,map__37871):map__37871);var opts = map__37871__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__37869 = null;if (arguments.length > 1) {
  p__37869 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__37869);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__37872){
var ports = cljs.core.first(arglist__37872);
var p__37869 = cljs.core.rest(arglist__37872);
return alts_BANG___delegate(ports,p__37869);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t37880 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37880 = (function (ch,f,map_LT_,meta37881){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37881 = meta37881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37880.cljs$lang$type = true;
cljs.core.async.t37880.cljs$lang$ctorStr = "cljs.core.async/t37880";
cljs.core.async.t37880.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37880");
});
cljs.core.async.t37880.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37880.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t37880.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37880.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t37883 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37883 = (function (fn1,_,meta37881,ch,f,map_LT_,meta37884){
this.fn1 = fn1;
this._ = _;
this.meta37881 = meta37881;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta37884 = meta37884;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37883.cljs$lang$type = true;
cljs.core.async.t37883.cljs$lang$ctorStr = "cljs.core.async/t37883";
cljs.core.async.t37883.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37883");
});
cljs.core.async.t37883.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t37883.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t37883.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t37883.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__37873_SHARP_){return f1.call(null,(((p1__37873_SHARP_ == null))?null:self__.f.call(null,p1__37873_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t37883.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37885){var self__ = this;
var _37885__$1 = this;return self__.meta37884;
});
cljs.core.async.t37883.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37885,meta37884__$1){var self__ = this;
var _37885__$1 = this;return (new cljs.core.async.t37883(self__.fn1,self__._,self__.meta37881,self__.ch,self__.f,self__.map_LT_,meta37884__$1));
});
cljs.core.async.__GT_t37883 = (function __GT_t37883(fn1__$1,___$2,meta37881__$1,ch__$2,f__$2,map_LT___$2,meta37884){return (new cljs.core.async.t37883(fn1__$1,___$2,meta37881__$1,ch__$2,f__$2,map_LT___$2,meta37884));
});
}
return (new cljs.core.async.t37883(fn1,___$1,self__.meta37881,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t37880.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37880.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37880.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37882){var self__ = this;
var _37882__$1 = this;return self__.meta37881;
});
cljs.core.async.t37880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37882,meta37881__$1){var self__ = this;
var _37882__$1 = this;return (new cljs.core.async.t37880(self__.ch,self__.f,self__.map_LT_,meta37881__$1));
});
cljs.core.async.__GT_t37880 = (function __GT_t37880(ch__$1,f__$1,map_LT___$1,meta37881){return (new cljs.core.async.t37880(ch__$1,f__$1,map_LT___$1,meta37881));
});
}
return (new cljs.core.async.t37880(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t37889 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37889 = (function (ch,f,map_GT_,meta37890){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta37890 = meta37890;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37889.cljs$lang$type = true;
cljs.core.async.t37889.cljs$lang$ctorStr = "cljs.core.async/t37889";
cljs.core.async.t37889.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37889");
});
cljs.core.async.t37889.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37889.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t37889.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37889.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t37889.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37889.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37891){var self__ = this;
var _37891__$1 = this;return self__.meta37890;
});
cljs.core.async.t37889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37891,meta37890__$1){var self__ = this;
var _37891__$1 = this;return (new cljs.core.async.t37889(self__.ch,self__.f,self__.map_GT_,meta37890__$1));
});
cljs.core.async.__GT_t37889 = (function __GT_t37889(ch__$1,f__$1,map_GT___$1,meta37890){return (new cljs.core.async.t37889(ch__$1,f__$1,map_GT___$1,meta37890));
});
}
return (new cljs.core.async.t37889(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t37895 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t37895 = (function (ch,p,filter_GT_,meta37896){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta37896 = meta37896;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t37895.cljs$lang$type = true;
cljs.core.async.t37895.cljs$lang$ctorStr = "cljs.core.async/t37895";
cljs.core.async.t37895.cljs$lang$ctorPrWriter = (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t37895");
});
cljs.core.async.t37895.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t37895.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t37895.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t37895.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t37895.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t37895.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t37895.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37897){var self__ = this;
var _37897__$1 = this;return self__.meta37896;
});
cljs.core.async.t37895.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37897,meta37896__$1){var self__ = this;
var _37897__$1 = this;return (new cljs.core.async.t37895(self__.ch,self__.p,self__.filter_GT_,meta37896__$1));
});
cljs.core.async.__GT_t37895 = (function __GT_t37895(ch__$1,p__$1,filter_GT___$1,meta37896){return (new cljs.core.async.t37895(ch__$1,p__$1,filter_GT___$1,meta37896));
});
}
return (new cljs.core.async.t37895(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__26765__auto___37980 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_37959){var state_val_37960 = (state_37959[1]);if((state_val_37960 === 7))
{var inst_37955 = (state_37959[2]);var state_37959__$1 = state_37959;var statearr_37961_37981 = state_37959__$1;(statearr_37961_37981[2] = inst_37955);
(statearr_37961_37981[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37960 === 1))
{var state_37959__$1 = state_37959;var statearr_37962_37982 = state_37959__$1;(statearr_37962_37982[2] = null);
(statearr_37962_37982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37960 === 4))
{var inst_37941 = (state_37959[7]);var inst_37941__$1 = (state_37959[2]);var inst_37942 = (inst_37941__$1 == null);var state_37959__$1 = (function (){var statearr_37963 = state_37959;(statearr_37963[7] = inst_37941__$1);
return statearr_37963;
})();if(cljs.core.truth_(inst_37942))
{var statearr_37964_37983 = state_37959__$1;(statearr_37964_37983[1] = 5);
} else
{var statearr_37965_37984 = state_37959__$1;(statearr_37965_37984[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37960 === 6))
{var inst_37941 = (state_37959[7]);var inst_37946 = p.call(null,inst_37941);var state_37959__$1 = state_37959;if(cljs.core.truth_(inst_37946))
{var statearr_37966_37985 = state_37959__$1;(statearr_37966_37985[1] = 8);
} else
{var statearr_37967_37986 = state_37959__$1;(statearr_37967_37986[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37960 === 3))
{var inst_37957 = (state_37959[2]);var state_37959__$1 = state_37959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37959__$1,inst_37957);
} else
{if((state_val_37960 === 2))
{var state_37959__$1 = state_37959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37959__$1,4,ch);
} else
{if((state_val_37960 === 11))
{var inst_37949 = (state_37959[2]);var state_37959__$1 = state_37959;var statearr_37968_37987 = state_37959__$1;(statearr_37968_37987[2] = inst_37949);
(statearr_37968_37987[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37960 === 9))
{var state_37959__$1 = state_37959;var statearr_37969_37988 = state_37959__$1;(statearr_37969_37988[2] = null);
(statearr_37969_37988[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37960 === 5))
{var inst_37944 = cljs.core.async.close_BANG_.call(null,out);var state_37959__$1 = state_37959;var statearr_37970_37989 = state_37959__$1;(statearr_37970_37989[2] = inst_37944);
(statearr_37970_37989[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37960 === 10))
{var inst_37952 = (state_37959[2]);var state_37959__$1 = (function (){var statearr_37971 = state_37959;(statearr_37971[8] = inst_37952);
return statearr_37971;
})();var statearr_37972_37990 = state_37959__$1;(statearr_37972_37990[2] = null);
(statearr_37972_37990[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37960 === 8))
{var inst_37941 = (state_37959[7]);var state_37959__$1 = state_37959;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37959__$1,11,out,inst_37941);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_37976 = [null,null,null,null,null,null,null,null,null];(statearr_37976[0] = state_machine__26702__auto__);
(statearr_37976[1] = 1);
return statearr_37976;
});
var state_machine__26702__auto____1 = (function (state_37959){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_37959);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e37977){if((e37977 instanceof Object))
{var ex__26705__auto__ = e37977;var statearr_37978_37991 = state_37959;(statearr_37978_37991[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37959);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37992 = state_37959;
state_37959 = G__37992;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_37959){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_37959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_37979 = f__26766__auto__.call(null);(statearr_37979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___37980);
return statearr_37979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__26765__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_38144){var state_val_38145 = (state_38144[1]);if((state_val_38145 === 7))
{var inst_38140 = (state_38144[2]);var state_38144__$1 = state_38144;var statearr_38146_38183 = state_38144__$1;(statearr_38146_38183[2] = inst_38140);
(statearr_38146_38183[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 20))
{var inst_38115 = (state_38144[7]);var inst_38126 = (state_38144[2]);var inst_38127 = cljs.core.next.call(null,inst_38115);var inst_38101 = inst_38127;var inst_38102 = null;var inst_38103 = 0;var inst_38104 = 0;var state_38144__$1 = (function (){var statearr_38147 = state_38144;(statearr_38147[8] = inst_38102);
(statearr_38147[9] = inst_38101);
(statearr_38147[10] = inst_38104);
(statearr_38147[11] = inst_38103);
(statearr_38147[12] = inst_38126);
return statearr_38147;
})();var statearr_38148_38184 = state_38144__$1;(statearr_38148_38184[2] = null);
(statearr_38148_38184[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 1))
{var state_38144__$1 = state_38144;var statearr_38149_38185 = state_38144__$1;(statearr_38149_38185[2] = null);
(statearr_38149_38185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 4))
{var inst_38090 = (state_38144[13]);var inst_38090__$1 = (state_38144[2]);var inst_38091 = (inst_38090__$1 == null);var state_38144__$1 = (function (){var statearr_38153 = state_38144;(statearr_38153[13] = inst_38090__$1);
return statearr_38153;
})();if(cljs.core.truth_(inst_38091))
{var statearr_38154_38186 = state_38144__$1;(statearr_38154_38186[1] = 5);
} else
{var statearr_38155_38187 = state_38144__$1;(statearr_38155_38187[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 15))
{var state_38144__$1 = state_38144;var statearr_38156_38188 = state_38144__$1;(statearr_38156_38188[2] = null);
(statearr_38156_38188[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 13))
{var inst_38102 = (state_38144[8]);var inst_38101 = (state_38144[9]);var inst_38104 = (state_38144[10]);var inst_38103 = (state_38144[11]);var inst_38111 = (state_38144[2]);var inst_38112 = (inst_38104 + 1);var tmp38150 = inst_38102;var tmp38151 = inst_38101;var tmp38152 = inst_38103;var inst_38101__$1 = tmp38151;var inst_38102__$1 = tmp38150;var inst_38103__$1 = tmp38152;var inst_38104__$1 = inst_38112;var state_38144__$1 = (function (){var statearr_38157 = state_38144;(statearr_38157[8] = inst_38102__$1);
(statearr_38157[9] = inst_38101__$1);
(statearr_38157[10] = inst_38104__$1);
(statearr_38157[14] = inst_38111);
(statearr_38157[11] = inst_38103__$1);
return statearr_38157;
})();var statearr_38158_38189 = state_38144__$1;(statearr_38158_38189[2] = null);
(statearr_38158_38189[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 6))
{var inst_38090 = (state_38144[13]);var inst_38095 = f.call(null,inst_38090);var inst_38100 = cljs.core.seq.call(null,inst_38095);var inst_38101 = inst_38100;var inst_38102 = null;var inst_38103 = 0;var inst_38104 = 0;var state_38144__$1 = (function (){var statearr_38159 = state_38144;(statearr_38159[8] = inst_38102);
(statearr_38159[9] = inst_38101);
(statearr_38159[10] = inst_38104);
(statearr_38159[11] = inst_38103);
return statearr_38159;
})();var statearr_38160_38190 = state_38144__$1;(statearr_38160_38190[2] = null);
(statearr_38160_38190[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 17))
{var inst_38115 = (state_38144[7]);var inst_38119 = cljs.core.chunk_first.call(null,inst_38115);var inst_38120 = cljs.core.chunk_rest.call(null,inst_38115);var inst_38121 = cljs.core.count.call(null,inst_38119);var inst_38101 = inst_38120;var inst_38102 = inst_38119;var inst_38103 = inst_38121;var inst_38104 = 0;var state_38144__$1 = (function (){var statearr_38161 = state_38144;(statearr_38161[8] = inst_38102);
(statearr_38161[9] = inst_38101);
(statearr_38161[10] = inst_38104);
(statearr_38161[11] = inst_38103);
return statearr_38161;
})();var statearr_38162_38191 = state_38144__$1;(statearr_38162_38191[2] = null);
(statearr_38162_38191[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 3))
{var inst_38142 = (state_38144[2]);var state_38144__$1 = state_38144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38144__$1,inst_38142);
} else
{if((state_val_38145 === 12))
{var inst_38135 = (state_38144[2]);var state_38144__$1 = state_38144;var statearr_38163_38192 = state_38144__$1;(statearr_38163_38192[2] = inst_38135);
(statearr_38163_38192[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 2))
{var state_38144__$1 = state_38144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38144__$1,4,in$);
} else
{if((state_val_38145 === 19))
{var inst_38130 = (state_38144[2]);var state_38144__$1 = state_38144;var statearr_38164_38193 = state_38144__$1;(statearr_38164_38193[2] = inst_38130);
(statearr_38164_38193[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 11))
{var inst_38115 = (state_38144[7]);var inst_38101 = (state_38144[9]);var inst_38115__$1 = cljs.core.seq.call(null,inst_38101);var state_38144__$1 = (function (){var statearr_38165 = state_38144;(statearr_38165[7] = inst_38115__$1);
return statearr_38165;
})();if(inst_38115__$1)
{var statearr_38166_38194 = state_38144__$1;(statearr_38166_38194[1] = 14);
} else
{var statearr_38167_38195 = state_38144__$1;(statearr_38167_38195[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 9))
{var inst_38137 = (state_38144[2]);var state_38144__$1 = (function (){var statearr_38168 = state_38144;(statearr_38168[15] = inst_38137);
return statearr_38168;
})();var statearr_38169_38196 = state_38144__$1;(statearr_38169_38196[2] = null);
(statearr_38169_38196[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 5))
{var inst_38093 = cljs.core.async.close_BANG_.call(null,out);var state_38144__$1 = state_38144;var statearr_38170_38197 = state_38144__$1;(statearr_38170_38197[2] = inst_38093);
(statearr_38170_38197[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 14))
{var inst_38115 = (state_38144[7]);var inst_38117 = cljs.core.chunked_seq_QMARK_.call(null,inst_38115);var state_38144__$1 = state_38144;if(inst_38117)
{var statearr_38171_38198 = state_38144__$1;(statearr_38171_38198[1] = 17);
} else
{var statearr_38172_38199 = state_38144__$1;(statearr_38172_38199[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 16))
{var inst_38133 = (state_38144[2]);var state_38144__$1 = state_38144;var statearr_38173_38200 = state_38144__$1;(statearr_38173_38200[2] = inst_38133);
(statearr_38173_38200[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38145 === 10))
{var inst_38102 = (state_38144[8]);var inst_38104 = (state_38144[10]);var inst_38109 = cljs.core._nth.call(null,inst_38102,inst_38104);var state_38144__$1 = state_38144;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38144__$1,13,out,inst_38109);
} else
{if((state_val_38145 === 18))
{var inst_38115 = (state_38144[7]);var inst_38124 = cljs.core.first.call(null,inst_38115);var state_38144__$1 = state_38144;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38144__$1,20,out,inst_38124);
} else
{if((state_val_38145 === 8))
{var inst_38104 = (state_38144[10]);var inst_38103 = (state_38144[11]);var inst_38106 = (inst_38104 < inst_38103);var inst_38107 = inst_38106;var state_38144__$1 = state_38144;if(cljs.core.truth_(inst_38107))
{var statearr_38174_38201 = state_38144__$1;(statearr_38174_38201[1] = 10);
} else
{var statearr_38175_38202 = state_38144__$1;(statearr_38175_38202[1] = 11);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_38179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_38179[0] = state_machine__26702__auto__);
(statearr_38179[1] = 1);
return statearr_38179;
});
var state_machine__26702__auto____1 = (function (state_38144){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_38144);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e38180){if((e38180 instanceof Object))
{var ex__26705__auto__ = e38180;var statearr_38181_38203 = state_38144;(statearr_38181_38203[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38144);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38204 = state_38144;
state_38144 = G__38204;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_38144){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_38144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_38182 = f__26766__auto__.call(null);(statearr_38182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto__);
return statearr_38182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
}));
return c__26765__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__26765__auto___38285 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_38264){var state_val_38265 = (state_38264[1]);if((state_val_38265 === 7))
{var inst_38260 = (state_38264[2]);var state_38264__$1 = state_38264;var statearr_38266_38286 = state_38264__$1;(statearr_38266_38286[2] = inst_38260);
(statearr_38266_38286[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38265 === 1))
{var state_38264__$1 = state_38264;var statearr_38267_38287 = state_38264__$1;(statearr_38267_38287[2] = null);
(statearr_38267_38287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38265 === 4))
{var inst_38247 = (state_38264[7]);var inst_38247__$1 = (state_38264[2]);var inst_38248 = (inst_38247__$1 == null);var state_38264__$1 = (function (){var statearr_38268 = state_38264;(statearr_38268[7] = inst_38247__$1);
return statearr_38268;
})();if(cljs.core.truth_(inst_38248))
{var statearr_38269_38288 = state_38264__$1;(statearr_38269_38288[1] = 5);
} else
{var statearr_38270_38289 = state_38264__$1;(statearr_38270_38289[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38265 === 6))
{var inst_38247 = (state_38264[7]);var state_38264__$1 = state_38264;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38264__$1,11,to,inst_38247);
} else
{if((state_val_38265 === 3))
{var inst_38262 = (state_38264[2]);var state_38264__$1 = state_38264;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38264__$1,inst_38262);
} else
{if((state_val_38265 === 2))
{var state_38264__$1 = state_38264;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38264__$1,4,from);
} else
{if((state_val_38265 === 11))
{var inst_38257 = (state_38264[2]);var state_38264__$1 = (function (){var statearr_38271 = state_38264;(statearr_38271[8] = inst_38257);
return statearr_38271;
})();var statearr_38272_38290 = state_38264__$1;(statearr_38272_38290[2] = null);
(statearr_38272_38290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38265 === 9))
{var state_38264__$1 = state_38264;var statearr_38273_38291 = state_38264__$1;(statearr_38273_38291[2] = null);
(statearr_38273_38291[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38265 === 5))
{var state_38264__$1 = state_38264;if(cljs.core.truth_(close_QMARK_))
{var statearr_38274_38292 = state_38264__$1;(statearr_38274_38292[1] = 8);
} else
{var statearr_38275_38293 = state_38264__$1;(statearr_38275_38293[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38265 === 10))
{var inst_38254 = (state_38264[2]);var state_38264__$1 = state_38264;var statearr_38276_38294 = state_38264__$1;(statearr_38276_38294[2] = inst_38254);
(statearr_38276_38294[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38265 === 8))
{var inst_38251 = cljs.core.async.close_BANG_.call(null,to);var state_38264__$1 = state_38264;var statearr_38277_38295 = state_38264__$1;(statearr_38277_38295[2] = inst_38251);
(statearr_38277_38295[1] = 10);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_38281 = [null,null,null,null,null,null,null,null,null];(statearr_38281[0] = state_machine__26702__auto__);
(statearr_38281[1] = 1);
return statearr_38281;
});
var state_machine__26702__auto____1 = (function (state_38264){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_38264);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e38282){if((e38282 instanceof Object))
{var ex__26705__auto__ = e38282;var statearr_38283_38296 = state_38264;(statearr_38283_38296[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38264);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38297 = state_38264;
state_38264 = G__38297;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_38264){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_38264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_38284 = f__26766__auto__.call(null);(statearr_38284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___38285);
return statearr_38284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__26765__auto___38384 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_38362){var state_val_38363 = (state_38362[1]);if((state_val_38363 === 7))
{var inst_38358 = (state_38362[2]);var state_38362__$1 = state_38362;var statearr_38364_38385 = state_38362__$1;(statearr_38364_38385[2] = inst_38358);
(statearr_38364_38385[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38363 === 1))
{var state_38362__$1 = state_38362;var statearr_38365_38386 = state_38362__$1;(statearr_38365_38386[2] = null);
(statearr_38365_38386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38363 === 4))
{var inst_38343 = (state_38362[7]);var inst_38343__$1 = (state_38362[2]);var inst_38344 = (inst_38343__$1 == null);var state_38362__$1 = (function (){var statearr_38366 = state_38362;(statearr_38366[7] = inst_38343__$1);
return statearr_38366;
})();if(cljs.core.truth_(inst_38344))
{var statearr_38367_38387 = state_38362__$1;(statearr_38367_38387[1] = 5);
} else
{var statearr_38368_38388 = state_38362__$1;(statearr_38368_38388[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38363 === 6))
{var inst_38343 = (state_38362[7]);var inst_38349 = p.call(null,inst_38343);var state_38362__$1 = state_38362;if(cljs.core.truth_(inst_38349))
{var statearr_38369_38389 = state_38362__$1;(statearr_38369_38389[1] = 9);
} else
{var statearr_38370_38390 = state_38362__$1;(statearr_38370_38390[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38363 === 3))
{var inst_38360 = (state_38362[2]);var state_38362__$1 = state_38362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38362__$1,inst_38360);
} else
{if((state_val_38363 === 2))
{var state_38362__$1 = state_38362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38362__$1,4,ch);
} else
{if((state_val_38363 === 11))
{var inst_38343 = (state_38362[7]);var inst_38353 = (state_38362[2]);var state_38362__$1 = state_38362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38362__$1,8,inst_38353,inst_38343);
} else
{if((state_val_38363 === 9))
{var state_38362__$1 = state_38362;var statearr_38371_38391 = state_38362__$1;(statearr_38371_38391[2] = tc);
(statearr_38371_38391[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38363 === 5))
{var inst_38346 = cljs.core.async.close_BANG_.call(null,tc);var inst_38347 = cljs.core.async.close_BANG_.call(null,fc);var state_38362__$1 = (function (){var statearr_38372 = state_38362;(statearr_38372[8] = inst_38346);
return statearr_38372;
})();var statearr_38373_38392 = state_38362__$1;(statearr_38373_38392[2] = inst_38347);
(statearr_38373_38392[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38363 === 10))
{var state_38362__$1 = state_38362;var statearr_38374_38393 = state_38362__$1;(statearr_38374_38393[2] = fc);
(statearr_38374_38393[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38363 === 8))
{var inst_38355 = (state_38362[2]);var state_38362__$1 = (function (){var statearr_38375 = state_38362;(statearr_38375[9] = inst_38355);
return statearr_38375;
})();var statearr_38376_38394 = state_38362__$1;(statearr_38376_38394[2] = null);
(statearr_38376_38394[1] = 2);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_38380 = [null,null,null,null,null,null,null,null,null,null];(statearr_38380[0] = state_machine__26702__auto__);
(statearr_38380[1] = 1);
return statearr_38380;
});
var state_machine__26702__auto____1 = (function (state_38362){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_38362);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e38381){if((e38381 instanceof Object))
{var ex__26705__auto__ = e38381;var statearr_38382_38395 = state_38362;(statearr_38382_38395[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38362);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38381;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38396 = state_38362;
state_38362 = G__38396;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_38362){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_38362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_38383 = f__26766__auto__.call(null);(statearr_38383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___38384);
return statearr_38383;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__26765__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_38443){var state_val_38444 = (state_38443[1]);if((state_val_38444 === 7))
{var inst_38439 = (state_38443[2]);var state_38443__$1 = state_38443;var statearr_38445_38461 = state_38443__$1;(statearr_38445_38461[2] = inst_38439);
(statearr_38445_38461[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38444 === 6))
{var inst_38429 = (state_38443[7]);var inst_38432 = (state_38443[8]);var inst_38436 = f.call(null,inst_38429,inst_38432);var inst_38429__$1 = inst_38436;var state_38443__$1 = (function (){var statearr_38446 = state_38443;(statearr_38446[7] = inst_38429__$1);
return statearr_38446;
})();var statearr_38447_38462 = state_38443__$1;(statearr_38447_38462[2] = null);
(statearr_38447_38462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38444 === 5))
{var inst_38429 = (state_38443[7]);var state_38443__$1 = state_38443;var statearr_38448_38463 = state_38443__$1;(statearr_38448_38463[2] = inst_38429);
(statearr_38448_38463[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38444 === 4))
{var inst_38432 = (state_38443[8]);var inst_38432__$1 = (state_38443[2]);var inst_38433 = (inst_38432__$1 == null);var state_38443__$1 = (function (){var statearr_38449 = state_38443;(statearr_38449[8] = inst_38432__$1);
return statearr_38449;
})();if(cljs.core.truth_(inst_38433))
{var statearr_38450_38464 = state_38443__$1;(statearr_38450_38464[1] = 5);
} else
{var statearr_38451_38465 = state_38443__$1;(statearr_38451_38465[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38444 === 3))
{var inst_38441 = (state_38443[2]);var state_38443__$1 = state_38443;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38443__$1,inst_38441);
} else
{if((state_val_38444 === 2))
{var state_38443__$1 = state_38443;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38443__$1,4,ch);
} else
{if((state_val_38444 === 1))
{var inst_38429 = init;var state_38443__$1 = (function (){var statearr_38452 = state_38443;(statearr_38452[7] = inst_38429);
return statearr_38452;
})();var statearr_38453_38466 = state_38443__$1;(statearr_38453_38466[2] = null);
(statearr_38453_38466[1] = 2);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_38457 = [null,null,null,null,null,null,null,null,null];(statearr_38457[0] = state_machine__26702__auto__);
(statearr_38457[1] = 1);
return statearr_38457;
});
var state_machine__26702__auto____1 = (function (state_38443){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_38443);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e38458){if((e38458 instanceof Object))
{var ex__26705__auto__ = e38458;var statearr_38459_38467 = state_38443;(statearr_38459_38467[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38443);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38458;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38468 = state_38443;
state_38443 = G__38468;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_38443){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_38443);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_38460 = f__26766__auto__.call(null);(statearr_38460[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto__);
return statearr_38460;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
}));
return c__26765__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__26765__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_38530){var state_val_38531 = (state_38530[1]);if((state_val_38531 === 7))
{var inst_38511 = (state_38530[7]);var inst_38516 = (state_38530[2]);var inst_38517 = cljs.core.next.call(null,inst_38511);var inst_38511__$1 = inst_38517;var state_38530__$1 = (function (){var statearr_38532 = state_38530;(statearr_38532[7] = inst_38511__$1);
(statearr_38532[8] = inst_38516);
return statearr_38532;
})();var statearr_38533_38551 = state_38530__$1;(statearr_38533_38551[2] = null);
(statearr_38533_38551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38531 === 1))
{var inst_38510 = cljs.core.seq.call(null,coll);var inst_38511 = inst_38510;var state_38530__$1 = (function (){var statearr_38534 = state_38530;(statearr_38534[7] = inst_38511);
return statearr_38534;
})();var statearr_38535_38552 = state_38530__$1;(statearr_38535_38552[2] = null);
(statearr_38535_38552[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38531 === 4))
{var inst_38511 = (state_38530[7]);var inst_38514 = cljs.core.first.call(null,inst_38511);var state_38530__$1 = state_38530;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38530__$1,7,ch,inst_38514);
} else
{if((state_val_38531 === 6))
{var inst_38526 = (state_38530[2]);var state_38530__$1 = state_38530;var statearr_38536_38553 = state_38530__$1;(statearr_38536_38553[2] = inst_38526);
(statearr_38536_38553[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38531 === 3))
{var inst_38528 = (state_38530[2]);var state_38530__$1 = state_38530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38530__$1,inst_38528);
} else
{if((state_val_38531 === 2))
{var inst_38511 = (state_38530[7]);var state_38530__$1 = state_38530;if(cljs.core.truth_(inst_38511))
{var statearr_38537_38554 = state_38530__$1;(statearr_38537_38554[1] = 4);
} else
{var statearr_38538_38555 = state_38530__$1;(statearr_38538_38555[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38531 === 9))
{var state_38530__$1 = state_38530;var statearr_38539_38556 = state_38530__$1;(statearr_38539_38556[2] = null);
(statearr_38539_38556[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38531 === 5))
{var state_38530__$1 = state_38530;if(cljs.core.truth_(close_QMARK_))
{var statearr_38540_38557 = state_38530__$1;(statearr_38540_38557[1] = 8);
} else
{var statearr_38541_38558 = state_38530__$1;(statearr_38541_38558[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38531 === 10))
{var inst_38524 = (state_38530[2]);var state_38530__$1 = state_38530;var statearr_38542_38559 = state_38530__$1;(statearr_38542_38559[2] = inst_38524);
(statearr_38542_38559[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38531 === 8))
{var inst_38521 = cljs.core.async.close_BANG_.call(null,ch);var state_38530__$1 = state_38530;var statearr_38543_38560 = state_38530__$1;(statearr_38543_38560[2] = inst_38521);
(statearr_38543_38560[1] = 10);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_38547 = [null,null,null,null,null,null,null,null,null];(statearr_38547[0] = state_machine__26702__auto__);
(statearr_38547[1] = 1);
return statearr_38547;
});
var state_machine__26702__auto____1 = (function (state_38530){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_38530);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e38548){if((e38548 instanceof Object))
{var ex__26705__auto__ = e38548;var statearr_38549_38561 = state_38530;(statearr_38549_38561[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38530);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e38548;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__38562 = state_38530;
state_38530 = G__38562;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_38530){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_38530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_38550 = f__26766__auto__.call(null);(statearr_38550[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto__);
return statearr_38550;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
}));
return c__26765__auto__;
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
cljs.core.async.Mux = (function (){var obj38564 = {};return obj38564;
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
cljs.core.async.Mult = (function (){var obj38566 = {};return obj38566;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t38790 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t38790 = (function (cs,ch,mult,meta38791){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta38791 = meta38791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t38790.cljs$lang$type = true;
cljs.core.async.t38790.cljs$lang$ctorStr = "cljs.core.async/t38790";
cljs.core.async.t38790.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t38790");
});})(cs))
;
cljs.core.async.t38790.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t38790.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t38790.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t38790.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t38790.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t38790.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t38790.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_38792){var self__ = this;
var _38792__$1 = this;return self__.meta38791;
});})(cs))
;
cljs.core.async.t38790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_38792,meta38791__$1){var self__ = this;
var _38792__$1 = this;return (new cljs.core.async.t38790(self__.cs,self__.ch,self__.mult,meta38791__$1));
});})(cs))
;
cljs.core.async.__GT_t38790 = ((function (cs){
return (function __GT_t38790(cs__$1,ch__$1,mult__$1,meta38791){return (new cljs.core.async.t38790(cs__$1,ch__$1,mult__$1,meta38791));
});})(cs))
;
}
return (new cljs.core.async.t38790(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__26765__auto___39013 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_38927){var state_val_38928 = (state_38927[1]);if((state_val_38928 === 7))
{var inst_38923 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_38929_39014 = state_38927__$1;(statearr_38929_39014[2] = inst_38923);
(statearr_38929_39014[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 20))
{var inst_38824 = (state_38927[7]);var inst_38834 = cljs.core.first.call(null,inst_38824);var inst_38835 = cljs.core.nth.call(null,inst_38834,0,null);var inst_38836 = cljs.core.nth.call(null,inst_38834,1,null);var state_38927__$1 = (function (){var statearr_38930 = state_38927;(statearr_38930[8] = inst_38835);
return statearr_38930;
})();if(cljs.core.truth_(inst_38836))
{var statearr_38931_39015 = state_38927__$1;(statearr_38931_39015[1] = 22);
} else
{var statearr_38932_39016 = state_38927__$1;(statearr_38932_39016[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 27))
{var inst_38866 = (state_38927[9]);var inst_38864 = (state_38927[10]);var inst_38871 = cljs.core._nth.call(null,inst_38864,inst_38866);var state_38927__$1 = (function (){var statearr_38933 = state_38927;(statearr_38933[11] = inst_38871);
return statearr_38933;
})();var statearr_38934_39017 = state_38927__$1;(statearr_38934_39017[2] = null);
(statearr_38934_39017[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 1))
{var state_38927__$1 = state_38927;var statearr_38935_39018 = state_38927__$1;(statearr_38935_39018[2] = null);
(statearr_38935_39018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 24))
{var inst_38824 = (state_38927[7]);var inst_38841 = (state_38927[2]);var inst_38842 = cljs.core.next.call(null,inst_38824);var inst_38804 = inst_38842;var inst_38805 = null;var inst_38806 = 0;var inst_38807 = 0;var state_38927__$1 = (function (){var statearr_38936 = state_38927;(statearr_38936[12] = inst_38804);
(statearr_38936[13] = inst_38806);
(statearr_38936[14] = inst_38805);
(statearr_38936[15] = inst_38807);
(statearr_38936[16] = inst_38841);
return statearr_38936;
})();var statearr_38937_39019 = state_38927__$1;(statearr_38937_39019[2] = null);
(statearr_38937_39019[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 39))
{var inst_38884 = (state_38927[17]);var inst_38902 = (state_38927[2]);var inst_38903 = cljs.core.next.call(null,inst_38884);var inst_38863 = inst_38903;var inst_38864 = null;var inst_38865 = 0;var inst_38866 = 0;var state_38927__$1 = (function (){var statearr_38941 = state_38927;(statearr_38941[9] = inst_38866);
(statearr_38941[10] = inst_38864);
(statearr_38941[18] = inst_38865);
(statearr_38941[19] = inst_38863);
(statearr_38941[20] = inst_38902);
return statearr_38941;
})();var statearr_38942_39020 = state_38927__$1;(statearr_38942_39020[2] = null);
(statearr_38942_39020[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 4))
{var inst_38795 = (state_38927[21]);var inst_38795__$1 = (state_38927[2]);var inst_38796 = (inst_38795__$1 == null);var state_38927__$1 = (function (){var statearr_38943 = state_38927;(statearr_38943[21] = inst_38795__$1);
return statearr_38943;
})();if(cljs.core.truth_(inst_38796))
{var statearr_38944_39021 = state_38927__$1;(statearr_38944_39021[1] = 5);
} else
{var statearr_38945_39022 = state_38927__$1;(statearr_38945_39022[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 15))
{var inst_38804 = (state_38927[12]);var inst_38806 = (state_38927[13]);var inst_38805 = (state_38927[14]);var inst_38807 = (state_38927[15]);var inst_38820 = (state_38927[2]);var inst_38821 = (inst_38807 + 1);var tmp38938 = inst_38804;var tmp38939 = inst_38806;var tmp38940 = inst_38805;var inst_38804__$1 = tmp38938;var inst_38805__$1 = tmp38940;var inst_38806__$1 = tmp38939;var inst_38807__$1 = inst_38821;var state_38927__$1 = (function (){var statearr_38946 = state_38927;(statearr_38946[22] = inst_38820);
(statearr_38946[12] = inst_38804__$1);
(statearr_38946[13] = inst_38806__$1);
(statearr_38946[14] = inst_38805__$1);
(statearr_38946[15] = inst_38807__$1);
return statearr_38946;
})();var statearr_38947_39023 = state_38927__$1;(statearr_38947_39023[2] = null);
(statearr_38947_39023[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 21))
{var inst_38845 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_38948_39024 = state_38927__$1;(statearr_38948_39024[2] = inst_38845);
(statearr_38948_39024[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 31))
{var inst_38871 = (state_38927[11]);var inst_38872 = (state_38927[2]);var inst_38873 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_38874 = cljs.core.async.untap_STAR_.call(null,m,inst_38871);var state_38927__$1 = (function (){var statearr_38949 = state_38927;(statearr_38949[23] = inst_38873);
(statearr_38949[24] = inst_38872);
return statearr_38949;
})();var statearr_38950_39025 = state_38927__$1;(statearr_38950_39025[2] = inst_38874);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38927__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 32))
{var inst_38871 = (state_38927[11]);var inst_38795 = (state_38927[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38927,31,Object,null,30);var inst_38878 = cljs.core.async.put_BANG_.call(null,inst_38871,inst_38795,done);var state_38927__$1 = state_38927;var statearr_38951_39026 = state_38927__$1;(statearr_38951_39026[2] = inst_38878);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38927__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 40))
{var inst_38893 = (state_38927[25]);var inst_38894 = (state_38927[2]);var inst_38895 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_38896 = cljs.core.async.untap_STAR_.call(null,m,inst_38893);var state_38927__$1 = (function (){var statearr_38952 = state_38927;(statearr_38952[26] = inst_38894);
(statearr_38952[27] = inst_38895);
return statearr_38952;
})();var statearr_38953_39027 = state_38927__$1;(statearr_38953_39027[2] = inst_38896);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38927__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 33))
{var inst_38884 = (state_38927[17]);var inst_38886 = cljs.core.chunked_seq_QMARK_.call(null,inst_38884);var state_38927__$1 = state_38927;if(inst_38886)
{var statearr_38954_39028 = state_38927__$1;(statearr_38954_39028[1] = 36);
} else
{var statearr_38955_39029 = state_38927__$1;(statearr_38955_39029[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 13))
{var inst_38814 = (state_38927[28]);var inst_38817 = cljs.core.async.close_BANG_.call(null,inst_38814);var state_38927__$1 = state_38927;var statearr_38956_39030 = state_38927__$1;(statearr_38956_39030[2] = inst_38817);
(statearr_38956_39030[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 22))
{var inst_38835 = (state_38927[8]);var inst_38838 = cljs.core.async.close_BANG_.call(null,inst_38835);var state_38927__$1 = state_38927;var statearr_38957_39031 = state_38927__$1;(statearr_38957_39031[2] = inst_38838);
(statearr_38957_39031[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 36))
{var inst_38884 = (state_38927[17]);var inst_38888 = cljs.core.chunk_first.call(null,inst_38884);var inst_38889 = cljs.core.chunk_rest.call(null,inst_38884);var inst_38890 = cljs.core.count.call(null,inst_38888);var inst_38863 = inst_38889;var inst_38864 = inst_38888;var inst_38865 = inst_38890;var inst_38866 = 0;var state_38927__$1 = (function (){var statearr_38958 = state_38927;(statearr_38958[9] = inst_38866);
(statearr_38958[10] = inst_38864);
(statearr_38958[18] = inst_38865);
(statearr_38958[19] = inst_38863);
return statearr_38958;
})();var statearr_38959_39032 = state_38927__$1;(statearr_38959_39032[2] = null);
(statearr_38959_39032[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 41))
{var inst_38893 = (state_38927[25]);var inst_38795 = (state_38927[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_38927,40,Object,null,39);var inst_38900 = cljs.core.async.put_BANG_.call(null,inst_38893,inst_38795,done);var state_38927__$1 = state_38927;var statearr_38960_39033 = state_38927__$1;(statearr_38960_39033[2] = inst_38900);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38927__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 43))
{var state_38927__$1 = state_38927;var statearr_38961_39034 = state_38927__$1;(statearr_38961_39034[2] = null);
(statearr_38961_39034[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 29))
{var inst_38911 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_38962_39035 = state_38927__$1;(statearr_38962_39035[2] = inst_38911);
(statearr_38962_39035[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 44))
{var inst_38920 = (state_38927[2]);var state_38927__$1 = (function (){var statearr_38963 = state_38927;(statearr_38963[29] = inst_38920);
return statearr_38963;
})();var statearr_38964_39036 = state_38927__$1;(statearr_38964_39036[2] = null);
(statearr_38964_39036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 6))
{var inst_38855 = (state_38927[30]);var inst_38854 = cljs.core.deref.call(null,cs);var inst_38855__$1 = cljs.core.keys.call(null,inst_38854);var inst_38856 = cljs.core.count.call(null,inst_38855__$1);var inst_38857 = cljs.core.reset_BANG_.call(null,dctr,inst_38856);var inst_38862 = cljs.core.seq.call(null,inst_38855__$1);var inst_38863 = inst_38862;var inst_38864 = null;var inst_38865 = 0;var inst_38866 = 0;var state_38927__$1 = (function (){var statearr_38965 = state_38927;(statearr_38965[9] = inst_38866);
(statearr_38965[31] = inst_38857);
(statearr_38965[30] = inst_38855__$1);
(statearr_38965[10] = inst_38864);
(statearr_38965[18] = inst_38865);
(statearr_38965[19] = inst_38863);
return statearr_38965;
})();var statearr_38966_39037 = state_38927__$1;(statearr_38966_39037[2] = null);
(statearr_38966_39037[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 28))
{var inst_38884 = (state_38927[17]);var inst_38863 = (state_38927[19]);var inst_38884__$1 = cljs.core.seq.call(null,inst_38863);var state_38927__$1 = (function (){var statearr_38967 = state_38927;(statearr_38967[17] = inst_38884__$1);
return statearr_38967;
})();if(inst_38884__$1)
{var statearr_38968_39038 = state_38927__$1;(statearr_38968_39038[1] = 33);
} else
{var statearr_38969_39039 = state_38927__$1;(statearr_38969_39039[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 25))
{var inst_38866 = (state_38927[9]);var inst_38865 = (state_38927[18]);var inst_38868 = (inst_38866 < inst_38865);var inst_38869 = inst_38868;var state_38927__$1 = state_38927;if(cljs.core.truth_(inst_38869))
{var statearr_38970_39040 = state_38927__$1;(statearr_38970_39040[1] = 27);
} else
{var statearr_38971_39041 = state_38927__$1;(statearr_38971_39041[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 34))
{var state_38927__$1 = state_38927;var statearr_38972_39042 = state_38927__$1;(statearr_38972_39042[2] = null);
(statearr_38972_39042[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 17))
{var state_38927__$1 = state_38927;var statearr_38973_39043 = state_38927__$1;(statearr_38973_39043[2] = null);
(statearr_38973_39043[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 3))
{var inst_38925 = (state_38927[2]);var state_38927__$1 = state_38927;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38927__$1,inst_38925);
} else
{if((state_val_38928 === 12))
{var inst_38850 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_38974_39044 = state_38927__$1;(statearr_38974_39044[2] = inst_38850);
(statearr_38974_39044[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 2))
{var state_38927__$1 = state_38927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38927__$1,4,ch);
} else
{if((state_val_38928 === 23))
{var state_38927__$1 = state_38927;var statearr_38975_39045 = state_38927__$1;(statearr_38975_39045[2] = null);
(statearr_38975_39045[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 35))
{var inst_38909 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_38976_39046 = state_38927__$1;(statearr_38976_39046[2] = inst_38909);
(statearr_38976_39046[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 19))
{var inst_38824 = (state_38927[7]);var inst_38828 = cljs.core.chunk_first.call(null,inst_38824);var inst_38829 = cljs.core.chunk_rest.call(null,inst_38824);var inst_38830 = cljs.core.count.call(null,inst_38828);var inst_38804 = inst_38829;var inst_38805 = inst_38828;var inst_38806 = inst_38830;var inst_38807 = 0;var state_38927__$1 = (function (){var statearr_38977 = state_38927;(statearr_38977[12] = inst_38804);
(statearr_38977[13] = inst_38806);
(statearr_38977[14] = inst_38805);
(statearr_38977[15] = inst_38807);
return statearr_38977;
})();var statearr_38978_39047 = state_38927__$1;(statearr_38978_39047[2] = null);
(statearr_38978_39047[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 11))
{var inst_38824 = (state_38927[7]);var inst_38804 = (state_38927[12]);var inst_38824__$1 = cljs.core.seq.call(null,inst_38804);var state_38927__$1 = (function (){var statearr_38979 = state_38927;(statearr_38979[7] = inst_38824__$1);
return statearr_38979;
})();if(inst_38824__$1)
{var statearr_38980_39048 = state_38927__$1;(statearr_38980_39048[1] = 16);
} else
{var statearr_38981_39049 = state_38927__$1;(statearr_38981_39049[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 9))
{var inst_38852 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_38982_39050 = state_38927__$1;(statearr_38982_39050[2] = inst_38852);
(statearr_38982_39050[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 5))
{var inst_38802 = cljs.core.deref.call(null,cs);var inst_38803 = cljs.core.seq.call(null,inst_38802);var inst_38804 = inst_38803;var inst_38805 = null;var inst_38806 = 0;var inst_38807 = 0;var state_38927__$1 = (function (){var statearr_38983 = state_38927;(statearr_38983[12] = inst_38804);
(statearr_38983[13] = inst_38806);
(statearr_38983[14] = inst_38805);
(statearr_38983[15] = inst_38807);
return statearr_38983;
})();var statearr_38984_39051 = state_38927__$1;(statearr_38984_39051[2] = null);
(statearr_38984_39051[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 14))
{var state_38927__$1 = state_38927;var statearr_38985_39052 = state_38927__$1;(statearr_38985_39052[2] = null);
(statearr_38985_39052[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 45))
{var inst_38917 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_38986_39053 = state_38927__$1;(statearr_38986_39053[2] = inst_38917);
(statearr_38986_39053[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 26))
{var inst_38855 = (state_38927[30]);var inst_38913 = (state_38927[2]);var inst_38914 = cljs.core.seq.call(null,inst_38855);var state_38927__$1 = (function (){var statearr_38987 = state_38927;(statearr_38987[32] = inst_38913);
return statearr_38987;
})();if(inst_38914)
{var statearr_38988_39054 = state_38927__$1;(statearr_38988_39054[1] = 42);
} else
{var statearr_38989_39055 = state_38927__$1;(statearr_38989_39055[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 16))
{var inst_38824 = (state_38927[7]);var inst_38826 = cljs.core.chunked_seq_QMARK_.call(null,inst_38824);var state_38927__$1 = state_38927;if(inst_38826)
{var statearr_38993_39056 = state_38927__$1;(statearr_38993_39056[1] = 19);
} else
{var statearr_38994_39057 = state_38927__$1;(statearr_38994_39057[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 38))
{var inst_38906 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_38995_39058 = state_38927__$1;(statearr_38995_39058[2] = inst_38906);
(statearr_38995_39058[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 30))
{var inst_38866 = (state_38927[9]);var inst_38864 = (state_38927[10]);var inst_38865 = (state_38927[18]);var inst_38863 = (state_38927[19]);var inst_38880 = (state_38927[2]);var inst_38881 = (inst_38866 + 1);var tmp38990 = inst_38864;var tmp38991 = inst_38865;var tmp38992 = inst_38863;var inst_38863__$1 = tmp38992;var inst_38864__$1 = tmp38990;var inst_38865__$1 = tmp38991;var inst_38866__$1 = inst_38881;var state_38927__$1 = (function (){var statearr_38996 = state_38927;(statearr_38996[9] = inst_38866__$1);
(statearr_38996[33] = inst_38880);
(statearr_38996[10] = inst_38864__$1);
(statearr_38996[18] = inst_38865__$1);
(statearr_38996[19] = inst_38863__$1);
return statearr_38996;
})();var statearr_38997_39059 = state_38927__$1;(statearr_38997_39059[2] = null);
(statearr_38997_39059[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 10))
{var inst_38805 = (state_38927[14]);var inst_38807 = (state_38927[15]);var inst_38813 = cljs.core._nth.call(null,inst_38805,inst_38807);var inst_38814 = cljs.core.nth.call(null,inst_38813,0,null);var inst_38815 = cljs.core.nth.call(null,inst_38813,1,null);var state_38927__$1 = (function (){var statearr_38998 = state_38927;(statearr_38998[28] = inst_38814);
return statearr_38998;
})();if(cljs.core.truth_(inst_38815))
{var statearr_38999_39060 = state_38927__$1;(statearr_38999_39060[1] = 13);
} else
{var statearr_39000_39061 = state_38927__$1;(statearr_39000_39061[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 18))
{var inst_38848 = (state_38927[2]);var state_38927__$1 = state_38927;var statearr_39001_39062 = state_38927__$1;(statearr_39001_39062[2] = inst_38848);
(statearr_39001_39062[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 42))
{var state_38927__$1 = state_38927;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38927__$1,45,dchan);
} else
{if((state_val_38928 === 37))
{var inst_38884 = (state_38927[17]);var inst_38893 = cljs.core.first.call(null,inst_38884);var state_38927__$1 = (function (){var statearr_39002 = state_38927;(statearr_39002[25] = inst_38893);
return statearr_39002;
})();var statearr_39003_39063 = state_38927__$1;(statearr_39003_39063[2] = null);
(statearr_39003_39063[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_38928 === 8))
{var inst_38806 = (state_38927[13]);var inst_38807 = (state_38927[15]);var inst_38809 = (inst_38807 < inst_38806);var inst_38810 = inst_38809;var state_38927__$1 = state_38927;if(cljs.core.truth_(inst_38810))
{var statearr_39004_39064 = state_38927__$1;(statearr_39004_39064[1] = 10);
} else
{var statearr_39005_39065 = state_38927__$1;(statearr_39005_39065[1] = 11);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_39009 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39009[0] = state_machine__26702__auto__);
(statearr_39009[1] = 1);
return statearr_39009;
});
var state_machine__26702__auto____1 = (function (state_38927){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_38927);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e39010){if((e39010 instanceof Object))
{var ex__26705__auto__ = e39010;var statearr_39011_39066 = state_38927;(statearr_39011_39066[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38927);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39067 = state_38927;
state_38927 = G__39067;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_38927){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_38927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_39012 = f__26766__auto__.call(null);(statearr_39012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___39013);
return statearr_39012;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
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
cljs.core.async.Mix = (function (){var obj39069 = {};return obj39069;
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
;var m = (function (){if(typeof cljs.core.async.t39179 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39179 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta39180){
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
this.meta39180 = meta39180;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39179.cljs$lang$type = true;
cljs.core.async.t39179.cljs$lang$ctorStr = "cljs.core.async/t39179";
cljs.core.async.t39179.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t39179");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39179.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t39179.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39179.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39179.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39179.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39179.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39179.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t39179.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39179.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39181){var self__ = this;
var _39181__$1 = this;return self__.meta39180;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t39179.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39181,meta39180__$1){var self__ = this;
var _39181__$1 = this;return (new cljs.core.async.t39179(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta39180__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t39179 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t39179(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39180){return (new cljs.core.async.t39179(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta39180));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t39179(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__26765__auto___39288 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_39246){var state_val_39247 = (state_39246[1]);if((state_val_39247 === 7))
{var inst_39195 = (state_39246[7]);var inst_39200 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39195);var state_39246__$1 = state_39246;var statearr_39248_39289 = state_39246__$1;(statearr_39248_39289[2] = inst_39200);
(statearr_39248_39289[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 20))
{var inst_39210 = (state_39246[8]);var state_39246__$1 = state_39246;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39246__$1,23,out,inst_39210);
} else
{if((state_val_39247 === 1))
{var inst_39185 = (state_39246[9]);var inst_39185__$1 = calc_state.call(null);var inst_39186 = cljs.core.seq_QMARK_.call(null,inst_39185__$1);var state_39246__$1 = (function (){var statearr_39249 = state_39246;(statearr_39249[9] = inst_39185__$1);
return statearr_39249;
})();if(inst_39186)
{var statearr_39250_39290 = state_39246__$1;(statearr_39250_39290[1] = 2);
} else
{var statearr_39251_39291 = state_39246__$1;(statearr_39251_39291[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 4))
{var inst_39185 = (state_39246[9]);var inst_39191 = (state_39246[2]);var inst_39192 = cljs.core.get.call(null,inst_39191,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_39193 = cljs.core.get.call(null,inst_39191,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_39194 = cljs.core.get.call(null,inst_39191,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_39195 = inst_39185;var state_39246__$1 = (function (){var statearr_39252 = state_39246;(statearr_39252[7] = inst_39195);
(statearr_39252[10] = inst_39192);
(statearr_39252[11] = inst_39193);
(statearr_39252[12] = inst_39194);
return statearr_39252;
})();var statearr_39253_39292 = state_39246__$1;(statearr_39253_39292[2] = null);
(statearr_39253_39292[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 15))
{var state_39246__$1 = state_39246;var statearr_39254_39293 = state_39246__$1;(statearr_39254_39293[2] = null);
(statearr_39254_39293[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 21))
{var state_39246__$1 = state_39246;var statearr_39255_39294 = state_39246__$1;(statearr_39255_39294[2] = null);
(statearr_39255_39294[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 13))
{var inst_39242 = (state_39246[2]);var state_39246__$1 = state_39246;var statearr_39256_39295 = state_39246__$1;(statearr_39256_39295[2] = inst_39242);
(statearr_39256_39295[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 22))
{var inst_39203 = (state_39246[13]);var inst_39239 = (state_39246[2]);var inst_39195 = inst_39203;var state_39246__$1 = (function (){var statearr_39257 = state_39246;(statearr_39257[7] = inst_39195);
(statearr_39257[14] = inst_39239);
return statearr_39257;
})();var statearr_39258_39296 = state_39246__$1;(statearr_39258_39296[2] = null);
(statearr_39258_39296[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 6))
{var inst_39244 = (state_39246[2]);var state_39246__$1 = state_39246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39246__$1,inst_39244);
} else
{if((state_val_39247 === 17))
{var inst_39225 = (state_39246[15]);var state_39246__$1 = state_39246;var statearr_39259_39297 = state_39246__$1;(statearr_39259_39297[2] = inst_39225);
(statearr_39259_39297[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 3))
{var inst_39185 = (state_39246[9]);var state_39246__$1 = state_39246;var statearr_39260_39298 = state_39246__$1;(statearr_39260_39298[2] = inst_39185);
(statearr_39260_39298[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 12))
{var inst_39206 = (state_39246[16]);var inst_39211 = (state_39246[17]);var inst_39225 = (state_39246[15]);var inst_39225__$1 = inst_39206.call(null,inst_39211);var state_39246__$1 = (function (){var statearr_39261 = state_39246;(statearr_39261[15] = inst_39225__$1);
return statearr_39261;
})();if(cljs.core.truth_(inst_39225__$1))
{var statearr_39262_39299 = state_39246__$1;(statearr_39262_39299[1] = 17);
} else
{var statearr_39263_39300 = state_39246__$1;(statearr_39263_39300[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 2))
{var inst_39185 = (state_39246[9]);var inst_39188 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39185);var state_39246__$1 = state_39246;var statearr_39264_39301 = state_39246__$1;(statearr_39264_39301[2] = inst_39188);
(statearr_39264_39301[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 23))
{var inst_39236 = (state_39246[2]);var state_39246__$1 = state_39246;var statearr_39265_39302 = state_39246__$1;(statearr_39265_39302[2] = inst_39236);
(statearr_39265_39302[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 19))
{var inst_39233 = (state_39246[2]);var state_39246__$1 = state_39246;if(cljs.core.truth_(inst_39233))
{var statearr_39266_39303 = state_39246__$1;(statearr_39266_39303[1] = 20);
} else
{var statearr_39267_39304 = state_39246__$1;(statearr_39267_39304[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 11))
{var inst_39210 = (state_39246[8]);var inst_39216 = (inst_39210 == null);var state_39246__$1 = state_39246;if(cljs.core.truth_(inst_39216))
{var statearr_39268_39305 = state_39246__$1;(statearr_39268_39305[1] = 14);
} else
{var statearr_39269_39306 = state_39246__$1;(statearr_39269_39306[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 9))
{var inst_39203 = (state_39246[13]);var inst_39203__$1 = (state_39246[2]);var inst_39204 = cljs.core.get.call(null,inst_39203__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_39205 = cljs.core.get.call(null,inst_39203__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_39206 = cljs.core.get.call(null,inst_39203__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_39246__$1 = (function (){var statearr_39270 = state_39246;(statearr_39270[13] = inst_39203__$1);
(statearr_39270[16] = inst_39206);
(statearr_39270[18] = inst_39205);
return statearr_39270;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_39246__$1,10,inst_39204);
} else
{if((state_val_39247 === 5))
{var inst_39195 = (state_39246[7]);var inst_39198 = cljs.core.seq_QMARK_.call(null,inst_39195);var state_39246__$1 = state_39246;if(inst_39198)
{var statearr_39271_39307 = state_39246__$1;(statearr_39271_39307[1] = 7);
} else
{var statearr_39272_39308 = state_39246__$1;(statearr_39272_39308[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 14))
{var inst_39211 = (state_39246[17]);var inst_39218 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39211);var state_39246__$1 = state_39246;var statearr_39273_39309 = state_39246__$1;(statearr_39273_39309[2] = inst_39218);
(statearr_39273_39309[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 16))
{var inst_39221 = (state_39246[2]);var inst_39222 = calc_state.call(null);var inst_39195 = inst_39222;var state_39246__$1 = (function (){var statearr_39274 = state_39246;(statearr_39274[7] = inst_39195);
(statearr_39274[19] = inst_39221);
return statearr_39274;
})();var statearr_39275_39310 = state_39246__$1;(statearr_39275_39310[2] = null);
(statearr_39275_39310[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 10))
{var inst_39211 = (state_39246[17]);var inst_39210 = (state_39246[8]);var inst_39209 = (state_39246[2]);var inst_39210__$1 = cljs.core.nth.call(null,inst_39209,0,null);var inst_39211__$1 = cljs.core.nth.call(null,inst_39209,1,null);var inst_39212 = (inst_39210__$1 == null);var inst_39213 = cljs.core._EQ_.call(null,inst_39211__$1,change);var inst_39214 = (inst_39212) || (inst_39213);var state_39246__$1 = (function (){var statearr_39276 = state_39246;(statearr_39276[17] = inst_39211__$1);
(statearr_39276[8] = inst_39210__$1);
return statearr_39276;
})();if(cljs.core.truth_(inst_39214))
{var statearr_39277_39311 = state_39246__$1;(statearr_39277_39311[1] = 11);
} else
{var statearr_39278_39312 = state_39246__$1;(statearr_39278_39312[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 18))
{var inst_39206 = (state_39246[16]);var inst_39211 = (state_39246[17]);var inst_39205 = (state_39246[18]);var inst_39228 = cljs.core.empty_QMARK_.call(null,inst_39206);var inst_39229 = inst_39205.call(null,inst_39211);var inst_39230 = cljs.core.not.call(null,inst_39229);var inst_39231 = (inst_39228) && (inst_39230);var state_39246__$1 = state_39246;var statearr_39279_39313 = state_39246__$1;(statearr_39279_39313[2] = inst_39231);
(statearr_39279_39313[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39247 === 8))
{var inst_39195 = (state_39246[7]);var state_39246__$1 = state_39246;var statearr_39280_39314 = state_39246__$1;(statearr_39280_39314[2] = inst_39195);
(statearr_39280_39314[1] = 9);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_39284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39284[0] = state_machine__26702__auto__);
(statearr_39284[1] = 1);
return statearr_39284;
});
var state_machine__26702__auto____1 = (function (state_39246){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_39246);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e39285){if((e39285 instanceof Object))
{var ex__26705__auto__ = e39285;var statearr_39286_39315 = state_39246;(statearr_39286_39315[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39246);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39285;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39316 = state_39246;
state_39246 = G__39316;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_39246){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_39246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_39287 = f__26766__auto__.call(null);(statearr_39287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___39288);
return statearr_39287;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
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
cljs.core.async.Pub = (function (){var obj39318 = {};return obj39318;
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
return (function (p1__39319_SHARP_){if(cljs.core.truth_(p1__39319_SHARP_.call(null,topic)))
{return p1__39319_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__39319_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14581__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t39444 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t39444 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta39445){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta39445 = meta39445;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t39444.cljs$lang$type = true;
cljs.core.async.t39444.cljs$lang$ctorStr = "cljs.core.async/t39444";
cljs.core.async.t39444.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15148__auto__,writer__15149__auto__,opt__15150__auto__){return cljs.core._write.call(null,writer__15149__auto__,"cljs.core.async/t39444");
});})(mults,ensure_mult))
;
cljs.core.async.t39444.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t39444.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t39444.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t39444.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t39444.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t39444.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t39444.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t39444.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39446){var self__ = this;
var _39446__$1 = this;return self__.meta39445;
});})(mults,ensure_mult))
;
cljs.core.async.t39444.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39446,meta39445__$1){var self__ = this;
var _39446__$1 = this;return (new cljs.core.async.t39444(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta39445__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t39444 = ((function (mults,ensure_mult){
return (function __GT_t39444(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta39445){return (new cljs.core.async.t39444(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta39445));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t39444(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__26765__auto___39568 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_39520){var state_val_39521 = (state_39520[1]);if((state_val_39521 === 7))
{var inst_39516 = (state_39520[2]);var state_39520__$1 = state_39520;var statearr_39522_39569 = state_39520__$1;(statearr_39522_39569[2] = inst_39516);
(statearr_39522_39569[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 20))
{var state_39520__$1 = state_39520;var statearr_39523_39570 = state_39520__$1;(statearr_39523_39570[2] = null);
(statearr_39523_39570[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 1))
{var state_39520__$1 = state_39520;var statearr_39524_39571 = state_39520__$1;(statearr_39524_39571[2] = null);
(statearr_39524_39571[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 24))
{var inst_39499 = (state_39520[7]);var inst_39449 = (state_39520[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39520,23,Object,null,22);var inst_39506 = cljs.core.async.muxch_STAR_.call(null,inst_39499);var state_39520__$1 = state_39520;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39520__$1,25,inst_39506,inst_39449);
} else
{if((state_val_39521 === 4))
{var inst_39449 = (state_39520[8]);var inst_39449__$1 = (state_39520[2]);var inst_39450 = (inst_39449__$1 == null);var state_39520__$1 = (function (){var statearr_39525 = state_39520;(statearr_39525[8] = inst_39449__$1);
return statearr_39525;
})();if(cljs.core.truth_(inst_39450))
{var statearr_39526_39572 = state_39520__$1;(statearr_39526_39572[1] = 5);
} else
{var statearr_39527_39573 = state_39520__$1;(statearr_39527_39573[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 15))
{var inst_39491 = (state_39520[2]);var state_39520__$1 = state_39520;var statearr_39528_39574 = state_39520__$1;(statearr_39528_39574[2] = inst_39491);
(statearr_39528_39574[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 21))
{var inst_39513 = (state_39520[2]);var state_39520__$1 = (function (){var statearr_39529 = state_39520;(statearr_39529[9] = inst_39513);
return statearr_39529;
})();var statearr_39530_39575 = state_39520__$1;(statearr_39530_39575[2] = null);
(statearr_39530_39575[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 13))
{var inst_39473 = (state_39520[10]);var inst_39475 = cljs.core.chunked_seq_QMARK_.call(null,inst_39473);var state_39520__$1 = state_39520;if(inst_39475)
{var statearr_39531_39576 = state_39520__$1;(statearr_39531_39576[1] = 16);
} else
{var statearr_39532_39577 = state_39520__$1;(statearr_39532_39577[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 22))
{var inst_39510 = (state_39520[2]);var state_39520__$1 = state_39520;var statearr_39533_39578 = state_39520__$1;(statearr_39533_39578[2] = inst_39510);
(statearr_39533_39578[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 6))
{var inst_39499 = (state_39520[7]);var inst_39449 = (state_39520[8]);var inst_39497 = (state_39520[11]);var inst_39497__$1 = topic_fn.call(null,inst_39449);var inst_39498 = cljs.core.deref.call(null,mults);var inst_39499__$1 = cljs.core.get.call(null,inst_39498,inst_39497__$1);var state_39520__$1 = (function (){var statearr_39534 = state_39520;(statearr_39534[7] = inst_39499__$1);
(statearr_39534[11] = inst_39497__$1);
return statearr_39534;
})();if(cljs.core.truth_(inst_39499__$1))
{var statearr_39535_39579 = state_39520__$1;(statearr_39535_39579[1] = 19);
} else
{var statearr_39536_39580 = state_39520__$1;(statearr_39536_39580[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 25))
{var inst_39508 = (state_39520[2]);var state_39520__$1 = state_39520;var statearr_39537_39581 = state_39520__$1;(statearr_39537_39581[2] = inst_39508);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39520__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 17))
{var inst_39473 = (state_39520[10]);var inst_39482 = cljs.core.first.call(null,inst_39473);var inst_39483 = cljs.core.async.muxch_STAR_.call(null,inst_39482);var inst_39484 = cljs.core.async.close_BANG_.call(null,inst_39483);var inst_39485 = cljs.core.next.call(null,inst_39473);var inst_39459 = inst_39485;var inst_39460 = null;var inst_39461 = 0;var inst_39462 = 0;var state_39520__$1 = (function (){var statearr_39538 = state_39520;(statearr_39538[12] = inst_39459);
(statearr_39538[13] = inst_39484);
(statearr_39538[14] = inst_39461);
(statearr_39538[15] = inst_39460);
(statearr_39538[16] = inst_39462);
return statearr_39538;
})();var statearr_39539_39582 = state_39520__$1;(statearr_39539_39582[2] = null);
(statearr_39539_39582[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 3))
{var inst_39518 = (state_39520[2]);var state_39520__$1 = state_39520;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39520__$1,inst_39518);
} else
{if((state_val_39521 === 12))
{var inst_39493 = (state_39520[2]);var state_39520__$1 = state_39520;var statearr_39540_39583 = state_39520__$1;(statearr_39540_39583[2] = inst_39493);
(statearr_39540_39583[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 2))
{var state_39520__$1 = state_39520;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39520__$1,4,ch);
} else
{if((state_val_39521 === 23))
{var inst_39497 = (state_39520[11]);var inst_39501 = (state_39520[2]);var inst_39502 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39497);var state_39520__$1 = (function (){var statearr_39541 = state_39520;(statearr_39541[17] = inst_39501);
return statearr_39541;
})();var statearr_39542_39584 = state_39520__$1;(statearr_39542_39584[2] = inst_39502);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39520__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 19))
{var state_39520__$1 = state_39520;var statearr_39543_39585 = state_39520__$1;(statearr_39543_39585[2] = null);
(statearr_39543_39585[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 11))
{var inst_39459 = (state_39520[12]);var inst_39473 = (state_39520[10]);var inst_39473__$1 = cljs.core.seq.call(null,inst_39459);var state_39520__$1 = (function (){var statearr_39544 = state_39520;(statearr_39544[10] = inst_39473__$1);
return statearr_39544;
})();if(inst_39473__$1)
{var statearr_39545_39586 = state_39520__$1;(statearr_39545_39586[1] = 13);
} else
{var statearr_39546_39587 = state_39520__$1;(statearr_39546_39587[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 9))
{var inst_39495 = (state_39520[2]);var state_39520__$1 = state_39520;var statearr_39547_39588 = state_39520__$1;(statearr_39547_39588[2] = inst_39495);
(statearr_39547_39588[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 5))
{var inst_39456 = cljs.core.deref.call(null,mults);var inst_39457 = cljs.core.vals.call(null,inst_39456);var inst_39458 = cljs.core.seq.call(null,inst_39457);var inst_39459 = inst_39458;var inst_39460 = null;var inst_39461 = 0;var inst_39462 = 0;var state_39520__$1 = (function (){var statearr_39548 = state_39520;(statearr_39548[12] = inst_39459);
(statearr_39548[14] = inst_39461);
(statearr_39548[15] = inst_39460);
(statearr_39548[16] = inst_39462);
return statearr_39548;
})();var statearr_39549_39589 = state_39520__$1;(statearr_39549_39589[2] = null);
(statearr_39549_39589[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 14))
{var state_39520__$1 = state_39520;var statearr_39553_39590 = state_39520__$1;(statearr_39553_39590[2] = null);
(statearr_39553_39590[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 16))
{var inst_39473 = (state_39520[10]);var inst_39477 = cljs.core.chunk_first.call(null,inst_39473);var inst_39478 = cljs.core.chunk_rest.call(null,inst_39473);var inst_39479 = cljs.core.count.call(null,inst_39477);var inst_39459 = inst_39478;var inst_39460 = inst_39477;var inst_39461 = inst_39479;var inst_39462 = 0;var state_39520__$1 = (function (){var statearr_39554 = state_39520;(statearr_39554[12] = inst_39459);
(statearr_39554[14] = inst_39461);
(statearr_39554[15] = inst_39460);
(statearr_39554[16] = inst_39462);
return statearr_39554;
})();var statearr_39555_39591 = state_39520__$1;(statearr_39555_39591[2] = null);
(statearr_39555_39591[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 10))
{var inst_39459 = (state_39520[12]);var inst_39461 = (state_39520[14]);var inst_39460 = (state_39520[15]);var inst_39462 = (state_39520[16]);var inst_39467 = cljs.core._nth.call(null,inst_39460,inst_39462);var inst_39468 = cljs.core.async.muxch_STAR_.call(null,inst_39467);var inst_39469 = cljs.core.async.close_BANG_.call(null,inst_39468);var inst_39470 = (inst_39462 + 1);var tmp39550 = inst_39459;var tmp39551 = inst_39461;var tmp39552 = inst_39460;var inst_39459__$1 = tmp39550;var inst_39460__$1 = tmp39552;var inst_39461__$1 = tmp39551;var inst_39462__$1 = inst_39470;var state_39520__$1 = (function (){var statearr_39556 = state_39520;(statearr_39556[12] = inst_39459__$1);
(statearr_39556[14] = inst_39461__$1);
(statearr_39556[15] = inst_39460__$1);
(statearr_39556[18] = inst_39469);
(statearr_39556[16] = inst_39462__$1);
return statearr_39556;
})();var statearr_39557_39592 = state_39520__$1;(statearr_39557_39592[2] = null);
(statearr_39557_39592[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 18))
{var inst_39488 = (state_39520[2]);var state_39520__$1 = state_39520;var statearr_39558_39593 = state_39520__$1;(statearr_39558_39593[2] = inst_39488);
(statearr_39558_39593[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39521 === 8))
{var inst_39461 = (state_39520[14]);var inst_39462 = (state_39520[16]);var inst_39464 = (inst_39462 < inst_39461);var inst_39465 = inst_39464;var state_39520__$1 = state_39520;if(cljs.core.truth_(inst_39465))
{var statearr_39559_39594 = state_39520__$1;(statearr_39559_39594[1] = 10);
} else
{var statearr_39560_39595 = state_39520__$1;(statearr_39560_39595[1] = 11);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_39564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39564[0] = state_machine__26702__auto__);
(statearr_39564[1] = 1);
return statearr_39564;
});
var state_machine__26702__auto____1 = (function (state_39520){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_39520);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e39565){if((e39565 instanceof Object))
{var ex__26705__auto__ = e39565;var statearr_39566_39596 = state_39520;(statearr_39566_39596[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39520);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39597 = state_39520;
state_39520 = G__39597;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_39520){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_39520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_39567 = f__26766__auto__.call(null);(statearr_39567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___39568);
return statearr_39567;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
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
,cljs.core.range.call(null,cnt));var c__26765__auto___39734 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_39704){var state_val_39705 = (state_39704[1]);if((state_val_39705 === 7))
{var state_39704__$1 = state_39704;var statearr_39706_39735 = state_39704__$1;(statearr_39706_39735[2] = null);
(statearr_39706_39735[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39705 === 1))
{var state_39704__$1 = state_39704;var statearr_39707_39736 = state_39704__$1;(statearr_39707_39736[2] = null);
(statearr_39707_39736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39705 === 4))
{var inst_39668 = (state_39704[7]);var inst_39670 = (inst_39668 < cnt);var state_39704__$1 = state_39704;if(cljs.core.truth_(inst_39670))
{var statearr_39708_39737 = state_39704__$1;(statearr_39708_39737[1] = 6);
} else
{var statearr_39709_39738 = state_39704__$1;(statearr_39709_39738[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39705 === 15))
{var inst_39700 = (state_39704[2]);var state_39704__$1 = state_39704;var statearr_39710_39739 = state_39704__$1;(statearr_39710_39739[2] = inst_39700);
(statearr_39710_39739[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39705 === 13))
{var inst_39693 = cljs.core.async.close_BANG_.call(null,out);var state_39704__$1 = state_39704;var statearr_39711_39740 = state_39704__$1;(statearr_39711_39740[2] = inst_39693);
(statearr_39711_39740[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39705 === 6))
{var state_39704__$1 = state_39704;var statearr_39712_39741 = state_39704__$1;(statearr_39712_39741[2] = null);
(statearr_39712_39741[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39705 === 3))
{var inst_39702 = (state_39704[2]);var state_39704__$1 = state_39704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39704__$1,inst_39702);
} else
{if((state_val_39705 === 12))
{var inst_39690 = (state_39704[8]);var inst_39690__$1 = (state_39704[2]);var inst_39691 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_39690__$1);var state_39704__$1 = (function (){var statearr_39713 = state_39704;(statearr_39713[8] = inst_39690__$1);
return statearr_39713;
})();if(cljs.core.truth_(inst_39691))
{var statearr_39714_39742 = state_39704__$1;(statearr_39714_39742[1] = 13);
} else
{var statearr_39715_39743 = state_39704__$1;(statearr_39715_39743[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39705 === 2))
{var inst_39667 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_39668 = 0;var state_39704__$1 = (function (){var statearr_39716 = state_39704;(statearr_39716[7] = inst_39668);
(statearr_39716[9] = inst_39667);
return statearr_39716;
})();var statearr_39717_39744 = state_39704__$1;(statearr_39717_39744[2] = null);
(statearr_39717_39744[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39705 === 11))
{var inst_39668 = (state_39704[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_39704,10,Object,null,9);var inst_39677 = chs__$1.call(null,inst_39668);var inst_39678 = done.call(null,inst_39668);var inst_39679 = cljs.core.async.take_BANG_.call(null,inst_39677,inst_39678);var state_39704__$1 = state_39704;var statearr_39718_39745 = state_39704__$1;(statearr_39718_39745[2] = inst_39679);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39704__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39705 === 9))
{var inst_39668 = (state_39704[7]);var inst_39681 = (state_39704[2]);var inst_39682 = (inst_39668 + 1);var inst_39668__$1 = inst_39682;var state_39704__$1 = (function (){var statearr_39719 = state_39704;(statearr_39719[7] = inst_39668__$1);
(statearr_39719[10] = inst_39681);
return statearr_39719;
})();var statearr_39720_39746 = state_39704__$1;(statearr_39720_39746[2] = null);
(statearr_39720_39746[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39705 === 5))
{var inst_39688 = (state_39704[2]);var state_39704__$1 = (function (){var statearr_39721 = state_39704;(statearr_39721[11] = inst_39688);
return statearr_39721;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39704__$1,12,dchan);
} else
{if((state_val_39705 === 14))
{var inst_39690 = (state_39704[8]);var inst_39695 = cljs.core.apply.call(null,f,inst_39690);var state_39704__$1 = state_39704;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39704__$1,16,out,inst_39695);
} else
{if((state_val_39705 === 16))
{var inst_39697 = (state_39704[2]);var state_39704__$1 = (function (){var statearr_39722 = state_39704;(statearr_39722[12] = inst_39697);
return statearr_39722;
})();var statearr_39723_39747 = state_39704__$1;(statearr_39723_39747[2] = null);
(statearr_39723_39747[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39705 === 10))
{var inst_39672 = (state_39704[2]);var inst_39673 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_39704__$1 = (function (){var statearr_39724 = state_39704;(statearr_39724[13] = inst_39672);
return statearr_39724;
})();var statearr_39725_39748 = state_39704__$1;(statearr_39725_39748[2] = inst_39673);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39704__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39705 === 8))
{var inst_39686 = (state_39704[2]);var state_39704__$1 = state_39704;var statearr_39726_39749 = state_39704__$1;(statearr_39726_39749[2] = inst_39686);
(statearr_39726_39749[1] = 5);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_39730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39730[0] = state_machine__26702__auto__);
(statearr_39730[1] = 1);
return statearr_39730;
});
var state_machine__26702__auto____1 = (function (state_39704){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_39704);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e39731){if((e39731 instanceof Object))
{var ex__26705__auto__ = e39731;var statearr_39732_39750 = state_39704;(statearr_39732_39750[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39704);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39731;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39751 = state_39704;
state_39704 = G__39751;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_39704){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_39704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_39733 = f__26766__auto__.call(null);(statearr_39733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___39734);
return statearr_39733;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__26765__auto___39859 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_39835){var state_val_39836 = (state_39835[1]);if((state_val_39836 === 7))
{var inst_39814 = (state_39835[7]);var inst_39815 = (state_39835[8]);var inst_39814__$1 = (state_39835[2]);var inst_39815__$1 = cljs.core.nth.call(null,inst_39814__$1,0,null);var inst_39816 = cljs.core.nth.call(null,inst_39814__$1,1,null);var inst_39817 = (inst_39815__$1 == null);var state_39835__$1 = (function (){var statearr_39837 = state_39835;(statearr_39837[7] = inst_39814__$1);
(statearr_39837[8] = inst_39815__$1);
(statearr_39837[9] = inst_39816);
return statearr_39837;
})();if(cljs.core.truth_(inst_39817))
{var statearr_39838_39860 = state_39835__$1;(statearr_39838_39860[1] = 8);
} else
{var statearr_39839_39861 = state_39835__$1;(statearr_39839_39861[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39836 === 1))
{var inst_39806 = cljs.core.vec.call(null,chs);var inst_39807 = inst_39806;var state_39835__$1 = (function (){var statearr_39840 = state_39835;(statearr_39840[10] = inst_39807);
return statearr_39840;
})();var statearr_39841_39862 = state_39835__$1;(statearr_39841_39862[2] = null);
(statearr_39841_39862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39836 === 4))
{var inst_39807 = (state_39835[10]);var state_39835__$1 = state_39835;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_39835__$1,7,inst_39807);
} else
{if((state_val_39836 === 6))
{var inst_39831 = (state_39835[2]);var state_39835__$1 = state_39835;var statearr_39842_39863 = state_39835__$1;(statearr_39842_39863[2] = inst_39831);
(statearr_39842_39863[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39836 === 3))
{var inst_39833 = (state_39835[2]);var state_39835__$1 = state_39835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39835__$1,inst_39833);
} else
{if((state_val_39836 === 2))
{var inst_39807 = (state_39835[10]);var inst_39809 = cljs.core.count.call(null,inst_39807);var inst_39810 = (inst_39809 > 0);var state_39835__$1 = state_39835;if(cljs.core.truth_(inst_39810))
{var statearr_39844_39864 = state_39835__$1;(statearr_39844_39864[1] = 4);
} else
{var statearr_39845_39865 = state_39835__$1;(statearr_39845_39865[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39836 === 11))
{var inst_39807 = (state_39835[10]);var inst_39824 = (state_39835[2]);var tmp39843 = inst_39807;var inst_39807__$1 = tmp39843;var state_39835__$1 = (function (){var statearr_39846 = state_39835;(statearr_39846[11] = inst_39824);
(statearr_39846[10] = inst_39807__$1);
return statearr_39846;
})();var statearr_39847_39866 = state_39835__$1;(statearr_39847_39866[2] = null);
(statearr_39847_39866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39836 === 9))
{var inst_39815 = (state_39835[8]);var state_39835__$1 = state_39835;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39835__$1,11,out,inst_39815);
} else
{if((state_val_39836 === 5))
{var inst_39829 = cljs.core.async.close_BANG_.call(null,out);var state_39835__$1 = state_39835;var statearr_39848_39867 = state_39835__$1;(statearr_39848_39867[2] = inst_39829);
(statearr_39848_39867[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39836 === 10))
{var inst_39827 = (state_39835[2]);var state_39835__$1 = state_39835;var statearr_39849_39868 = state_39835__$1;(statearr_39849_39868[2] = inst_39827);
(statearr_39849_39868[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39836 === 8))
{var inst_39814 = (state_39835[7]);var inst_39807 = (state_39835[10]);var inst_39815 = (state_39835[8]);var inst_39816 = (state_39835[9]);var inst_39819 = (function (){var c = inst_39816;var v = inst_39815;var vec__39812 = inst_39814;var cs = inst_39807;return ((function (c,v,vec__39812,cs,inst_39814,inst_39807,inst_39815,inst_39816,state_val_39836){
return (function (p1__39752_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__39752_SHARP_);
});
;})(c,v,vec__39812,cs,inst_39814,inst_39807,inst_39815,inst_39816,state_val_39836))
})();var inst_39820 = cljs.core.filterv.call(null,inst_39819,inst_39807);var inst_39807__$1 = inst_39820;var state_39835__$1 = (function (){var statearr_39850 = state_39835;(statearr_39850[10] = inst_39807__$1);
return statearr_39850;
})();var statearr_39851_39869 = state_39835__$1;(statearr_39851_39869[2] = null);
(statearr_39851_39869[1] = 2);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_39855 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_39855[0] = state_machine__26702__auto__);
(statearr_39855[1] = 1);
return statearr_39855;
});
var state_machine__26702__auto____1 = (function (state_39835){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_39835);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e39856){if((e39856 instanceof Object))
{var ex__26705__auto__ = e39856;var statearr_39857_39870 = state_39835;(statearr_39857_39870[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39835);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39856;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39871 = state_39835;
state_39835 = G__39871;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_39835){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_39835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_39858 = f__26766__auto__.call(null);(statearr_39858[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___39859);
return statearr_39858;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__26765__auto___39964 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_39941){var state_val_39942 = (state_39941[1]);if((state_val_39942 === 7))
{var inst_39923 = (state_39941[7]);var inst_39923__$1 = (state_39941[2]);var inst_39924 = (inst_39923__$1 == null);var inst_39925 = cljs.core.not.call(null,inst_39924);var state_39941__$1 = (function (){var statearr_39943 = state_39941;(statearr_39943[7] = inst_39923__$1);
return statearr_39943;
})();if(inst_39925)
{var statearr_39944_39965 = state_39941__$1;(statearr_39944_39965[1] = 8);
} else
{var statearr_39945_39966 = state_39941__$1;(statearr_39945_39966[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39942 === 1))
{var inst_39918 = 0;var state_39941__$1 = (function (){var statearr_39946 = state_39941;(statearr_39946[8] = inst_39918);
return statearr_39946;
})();var statearr_39947_39967 = state_39941__$1;(statearr_39947_39967[2] = null);
(statearr_39947_39967[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39942 === 4))
{var state_39941__$1 = state_39941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39941__$1,7,ch);
} else
{if((state_val_39942 === 6))
{var inst_39936 = (state_39941[2]);var state_39941__$1 = state_39941;var statearr_39948_39968 = state_39941__$1;(statearr_39948_39968[2] = inst_39936);
(statearr_39948_39968[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39942 === 3))
{var inst_39938 = (state_39941[2]);var inst_39939 = cljs.core.async.close_BANG_.call(null,out);var state_39941__$1 = (function (){var statearr_39949 = state_39941;(statearr_39949[9] = inst_39938);
return statearr_39949;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39941__$1,inst_39939);
} else
{if((state_val_39942 === 2))
{var inst_39918 = (state_39941[8]);var inst_39920 = (inst_39918 < n);var state_39941__$1 = state_39941;if(cljs.core.truth_(inst_39920))
{var statearr_39950_39969 = state_39941__$1;(statearr_39950_39969[1] = 4);
} else
{var statearr_39951_39970 = state_39941__$1;(statearr_39951_39970[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39942 === 11))
{var inst_39918 = (state_39941[8]);var inst_39928 = (state_39941[2]);var inst_39929 = (inst_39918 + 1);var inst_39918__$1 = inst_39929;var state_39941__$1 = (function (){var statearr_39952 = state_39941;(statearr_39952[10] = inst_39928);
(statearr_39952[8] = inst_39918__$1);
return statearr_39952;
})();var statearr_39953_39971 = state_39941__$1;(statearr_39953_39971[2] = null);
(statearr_39953_39971[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39942 === 9))
{var state_39941__$1 = state_39941;var statearr_39954_39972 = state_39941__$1;(statearr_39954_39972[2] = null);
(statearr_39954_39972[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39942 === 5))
{var state_39941__$1 = state_39941;var statearr_39955_39973 = state_39941__$1;(statearr_39955_39973[2] = null);
(statearr_39955_39973[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39942 === 10))
{var inst_39933 = (state_39941[2]);var state_39941__$1 = state_39941;var statearr_39956_39974 = state_39941__$1;(statearr_39956_39974[2] = inst_39933);
(statearr_39956_39974[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_39942 === 8))
{var inst_39923 = (state_39941[7]);var state_39941__$1 = state_39941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39941__$1,11,out,inst_39923);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_39960 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_39960[0] = state_machine__26702__auto__);
(statearr_39960[1] = 1);
return statearr_39960;
});
var state_machine__26702__auto____1 = (function (state_39941){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_39941);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e39961){if((e39961 instanceof Object))
{var ex__26705__auto__ = e39961;var statearr_39962_39975 = state_39941;(statearr_39962_39975[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e39961;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__39976 = state_39941;
state_39941 = G__39976;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_39941){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_39941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_39963 = f__26766__auto__.call(null);(statearr_39963[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___39964);
return statearr_39963;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__26765__auto___40073 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_40048){var state_val_40049 = (state_40048[1]);if((state_val_40049 === 7))
{var inst_40043 = (state_40048[2]);var state_40048__$1 = state_40048;var statearr_40050_40074 = state_40048__$1;(statearr_40050_40074[2] = inst_40043);
(statearr_40050_40074[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40049 === 1))
{var inst_40025 = null;var state_40048__$1 = (function (){var statearr_40051 = state_40048;(statearr_40051[7] = inst_40025);
return statearr_40051;
})();var statearr_40052_40075 = state_40048__$1;(statearr_40052_40075[2] = null);
(statearr_40052_40075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40049 === 4))
{var inst_40028 = (state_40048[8]);var inst_40028__$1 = (state_40048[2]);var inst_40029 = (inst_40028__$1 == null);var inst_40030 = cljs.core.not.call(null,inst_40029);var state_40048__$1 = (function (){var statearr_40053 = state_40048;(statearr_40053[8] = inst_40028__$1);
return statearr_40053;
})();if(inst_40030)
{var statearr_40054_40076 = state_40048__$1;(statearr_40054_40076[1] = 5);
} else
{var statearr_40055_40077 = state_40048__$1;(statearr_40055_40077[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40049 === 6))
{var state_40048__$1 = state_40048;var statearr_40056_40078 = state_40048__$1;(statearr_40056_40078[2] = null);
(statearr_40056_40078[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40049 === 3))
{var inst_40045 = (state_40048[2]);var inst_40046 = cljs.core.async.close_BANG_.call(null,out);var state_40048__$1 = (function (){var statearr_40057 = state_40048;(statearr_40057[9] = inst_40045);
return statearr_40057;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40048__$1,inst_40046);
} else
{if((state_val_40049 === 2))
{var state_40048__$1 = state_40048;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40048__$1,4,ch);
} else
{if((state_val_40049 === 11))
{var inst_40028 = (state_40048[8]);var inst_40037 = (state_40048[2]);var inst_40025 = inst_40028;var state_40048__$1 = (function (){var statearr_40058 = state_40048;(statearr_40058[7] = inst_40025);
(statearr_40058[10] = inst_40037);
return statearr_40058;
})();var statearr_40059_40079 = state_40048__$1;(statearr_40059_40079[2] = null);
(statearr_40059_40079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40049 === 9))
{var inst_40028 = (state_40048[8]);var state_40048__$1 = state_40048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40048__$1,11,out,inst_40028);
} else
{if((state_val_40049 === 5))
{var inst_40025 = (state_40048[7]);var inst_40028 = (state_40048[8]);var inst_40032 = cljs.core._EQ_.call(null,inst_40028,inst_40025);var state_40048__$1 = state_40048;if(inst_40032)
{var statearr_40061_40080 = state_40048__$1;(statearr_40061_40080[1] = 8);
} else
{var statearr_40062_40081 = state_40048__$1;(statearr_40062_40081[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40049 === 10))
{var inst_40040 = (state_40048[2]);var state_40048__$1 = state_40048;var statearr_40063_40082 = state_40048__$1;(statearr_40063_40082[2] = inst_40040);
(statearr_40063_40082[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40049 === 8))
{var inst_40025 = (state_40048[7]);var tmp40060 = inst_40025;var inst_40025__$1 = tmp40060;var state_40048__$1 = (function (){var statearr_40064 = state_40048;(statearr_40064[7] = inst_40025__$1);
return statearr_40064;
})();var statearr_40065_40083 = state_40048__$1;(statearr_40065_40083[2] = null);
(statearr_40065_40083[1] = 2);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_40069 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_40069[0] = state_machine__26702__auto__);
(statearr_40069[1] = 1);
return statearr_40069;
});
var state_machine__26702__auto____1 = (function (state_40048){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_40048);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e40070){if((e40070 instanceof Object))
{var ex__26705__auto__ = e40070;var statearr_40071_40084 = state_40048;(statearr_40071_40084[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40048);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e40070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__40085 = state_40048;
state_40048 = G__40085;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_40048){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_40048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_40072 = f__26766__auto__.call(null);(statearr_40072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___40073);
return statearr_40072;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__26765__auto___40220 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_40190){var state_val_40191 = (state_40190[1]);if((state_val_40191 === 7))
{var inst_40186 = (state_40190[2]);var state_40190__$1 = state_40190;var statearr_40192_40221 = state_40190__$1;(statearr_40192_40221[2] = inst_40186);
(statearr_40192_40221[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40191 === 1))
{var inst_40153 = (new Array(n));var inst_40154 = inst_40153;var inst_40155 = 0;var state_40190__$1 = (function (){var statearr_40193 = state_40190;(statearr_40193[7] = inst_40155);
(statearr_40193[8] = inst_40154);
return statearr_40193;
})();var statearr_40194_40222 = state_40190__$1;(statearr_40194_40222[2] = null);
(statearr_40194_40222[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40191 === 4))
{var inst_40158 = (state_40190[9]);var inst_40158__$1 = (state_40190[2]);var inst_40159 = (inst_40158__$1 == null);var inst_40160 = cljs.core.not.call(null,inst_40159);var state_40190__$1 = (function (){var statearr_40195 = state_40190;(statearr_40195[9] = inst_40158__$1);
return statearr_40195;
})();if(inst_40160)
{var statearr_40196_40223 = state_40190__$1;(statearr_40196_40223[1] = 5);
} else
{var statearr_40197_40224 = state_40190__$1;(statearr_40197_40224[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40191 === 15))
{var inst_40180 = (state_40190[2]);var state_40190__$1 = state_40190;var statearr_40198_40225 = state_40190__$1;(statearr_40198_40225[2] = inst_40180);
(statearr_40198_40225[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40191 === 13))
{var state_40190__$1 = state_40190;var statearr_40199_40226 = state_40190__$1;(statearr_40199_40226[2] = null);
(statearr_40199_40226[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40191 === 6))
{var inst_40155 = (state_40190[7]);var inst_40176 = (inst_40155 > 0);var state_40190__$1 = state_40190;if(cljs.core.truth_(inst_40176))
{var statearr_40200_40227 = state_40190__$1;(statearr_40200_40227[1] = 12);
} else
{var statearr_40201_40228 = state_40190__$1;(statearr_40201_40228[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40191 === 3))
{var inst_40188 = (state_40190[2]);var state_40190__$1 = state_40190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40190__$1,inst_40188);
} else
{if((state_val_40191 === 12))
{var inst_40154 = (state_40190[8]);var inst_40178 = cljs.core.vec.call(null,inst_40154);var state_40190__$1 = state_40190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40190__$1,15,out,inst_40178);
} else
{if((state_val_40191 === 2))
{var state_40190__$1 = state_40190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40190__$1,4,ch);
} else
{if((state_val_40191 === 11))
{var inst_40170 = (state_40190[2]);var inst_40171 = (new Array(n));var inst_40154 = inst_40171;var inst_40155 = 0;var state_40190__$1 = (function (){var statearr_40202 = state_40190;(statearr_40202[7] = inst_40155);
(statearr_40202[10] = inst_40170);
(statearr_40202[8] = inst_40154);
return statearr_40202;
})();var statearr_40203_40229 = state_40190__$1;(statearr_40203_40229[2] = null);
(statearr_40203_40229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40191 === 9))
{var inst_40154 = (state_40190[8]);var inst_40168 = cljs.core.vec.call(null,inst_40154);var state_40190__$1 = state_40190;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40190__$1,11,out,inst_40168);
} else
{if((state_val_40191 === 5))
{var inst_40155 = (state_40190[7]);var inst_40158 = (state_40190[9]);var inst_40154 = (state_40190[8]);var inst_40163 = (state_40190[11]);var inst_40162 = (inst_40154[inst_40155] = inst_40158);var inst_40163__$1 = (inst_40155 + 1);var inst_40164 = (inst_40163__$1 < n);var state_40190__$1 = (function (){var statearr_40204 = state_40190;(statearr_40204[12] = inst_40162);
(statearr_40204[11] = inst_40163__$1);
return statearr_40204;
})();if(cljs.core.truth_(inst_40164))
{var statearr_40205_40230 = state_40190__$1;(statearr_40205_40230[1] = 8);
} else
{var statearr_40206_40231 = state_40190__$1;(statearr_40206_40231[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40191 === 14))
{var inst_40183 = (state_40190[2]);var inst_40184 = cljs.core.async.close_BANG_.call(null,out);var state_40190__$1 = (function (){var statearr_40208 = state_40190;(statearr_40208[13] = inst_40183);
return statearr_40208;
})();var statearr_40209_40232 = state_40190__$1;(statearr_40209_40232[2] = inst_40184);
(statearr_40209_40232[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40191 === 10))
{var inst_40174 = (state_40190[2]);var state_40190__$1 = state_40190;var statearr_40210_40233 = state_40190__$1;(statearr_40210_40233[2] = inst_40174);
(statearr_40210_40233[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40191 === 8))
{var inst_40154 = (state_40190[8]);var inst_40163 = (state_40190[11]);var tmp40207 = inst_40154;var inst_40154__$1 = tmp40207;var inst_40155 = inst_40163;var state_40190__$1 = (function (){var statearr_40211 = state_40190;(statearr_40211[7] = inst_40155);
(statearr_40211[8] = inst_40154__$1);
return statearr_40211;
})();var statearr_40212_40234 = state_40190__$1;(statearr_40212_40234[2] = null);
(statearr_40212_40234[1] = 2);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_40216 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40216[0] = state_machine__26702__auto__);
(statearr_40216[1] = 1);
return statearr_40216;
});
var state_machine__26702__auto____1 = (function (state_40190){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_40190);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e40217){if((e40217 instanceof Object))
{var ex__26705__auto__ = e40217;var statearr_40218_40235 = state_40190;(statearr_40218_40235[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e40217;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__40236 = state_40190;
state_40190 = G__40236;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_40190){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_40190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_40219 = f__26766__auto__.call(null);(statearr_40219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___40220);
return statearr_40219;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__26765__auto___40379 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__26766__auto__ = (function (){var switch__26701__auto__ = (function (state_40349){var state_val_40350 = (state_40349[1]);if((state_val_40350 === 7))
{var inst_40345 = (state_40349[2]);var state_40349__$1 = state_40349;var statearr_40351_40380 = state_40349__$1;(statearr_40351_40380[2] = inst_40345);
(statearr_40351_40380[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40350 === 1))
{var inst_40308 = [];var inst_40309 = inst_40308;var inst_40310 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_40349__$1 = (function (){var statearr_40352 = state_40349;(statearr_40352[7] = inst_40310);
(statearr_40352[8] = inst_40309);
return statearr_40352;
})();var statearr_40353_40381 = state_40349__$1;(statearr_40353_40381[2] = null);
(statearr_40353_40381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40350 === 4))
{var inst_40313 = (state_40349[9]);var inst_40313__$1 = (state_40349[2]);var inst_40314 = (inst_40313__$1 == null);var inst_40315 = cljs.core.not.call(null,inst_40314);var state_40349__$1 = (function (){var statearr_40354 = state_40349;(statearr_40354[9] = inst_40313__$1);
return statearr_40354;
})();if(inst_40315)
{var statearr_40355_40382 = state_40349__$1;(statearr_40355_40382[1] = 5);
} else
{var statearr_40356_40383 = state_40349__$1;(statearr_40356_40383[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40350 === 15))
{var inst_40339 = (state_40349[2]);var state_40349__$1 = state_40349;var statearr_40357_40384 = state_40349__$1;(statearr_40357_40384[2] = inst_40339);
(statearr_40357_40384[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40350 === 13))
{var state_40349__$1 = state_40349;var statearr_40358_40385 = state_40349__$1;(statearr_40358_40385[2] = null);
(statearr_40358_40385[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40350 === 6))
{var inst_40309 = (state_40349[8]);var inst_40334 = inst_40309.length;var inst_40335 = (inst_40334 > 0);var state_40349__$1 = state_40349;if(cljs.core.truth_(inst_40335))
{var statearr_40359_40386 = state_40349__$1;(statearr_40359_40386[1] = 12);
} else
{var statearr_40360_40387 = state_40349__$1;(statearr_40360_40387[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40350 === 3))
{var inst_40347 = (state_40349[2]);var state_40349__$1 = state_40349;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40349__$1,inst_40347);
} else
{if((state_val_40350 === 12))
{var inst_40309 = (state_40349[8]);var inst_40337 = cljs.core.vec.call(null,inst_40309);var state_40349__$1 = state_40349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40349__$1,15,out,inst_40337);
} else
{if((state_val_40350 === 2))
{var state_40349__$1 = state_40349;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40349__$1,4,ch);
} else
{if((state_val_40350 === 11))
{var inst_40313 = (state_40349[9]);var inst_40317 = (state_40349[10]);var inst_40327 = (state_40349[2]);var inst_40328 = [];var inst_40329 = inst_40328.push(inst_40313);var inst_40309 = inst_40328;var inst_40310 = inst_40317;var state_40349__$1 = (function (){var statearr_40361 = state_40349;(statearr_40361[7] = inst_40310);
(statearr_40361[8] = inst_40309);
(statearr_40361[11] = inst_40329);
(statearr_40361[12] = inst_40327);
return statearr_40361;
})();var statearr_40362_40388 = state_40349__$1;(statearr_40362_40388[2] = null);
(statearr_40362_40388[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40350 === 9))
{var inst_40309 = (state_40349[8]);var inst_40325 = cljs.core.vec.call(null,inst_40309);var state_40349__$1 = state_40349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40349__$1,11,out,inst_40325);
} else
{if((state_val_40350 === 5))
{var inst_40313 = (state_40349[9]);var inst_40310 = (state_40349[7]);var inst_40317 = (state_40349[10]);var inst_40317__$1 = f.call(null,inst_40313);var inst_40318 = cljs.core._EQ_.call(null,inst_40317__$1,inst_40310);var inst_40319 = cljs.core.keyword_identical_QMARK_.call(null,inst_40310,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_40320 = (inst_40318) || (inst_40319);var state_40349__$1 = (function (){var statearr_40363 = state_40349;(statearr_40363[10] = inst_40317__$1);
return statearr_40363;
})();if(cljs.core.truth_(inst_40320))
{var statearr_40364_40389 = state_40349__$1;(statearr_40364_40389[1] = 8);
} else
{var statearr_40365_40390 = state_40349__$1;(statearr_40365_40390[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40350 === 14))
{var inst_40342 = (state_40349[2]);var inst_40343 = cljs.core.async.close_BANG_.call(null,out);var state_40349__$1 = (function (){var statearr_40367 = state_40349;(statearr_40367[13] = inst_40342);
return statearr_40367;
})();var statearr_40368_40391 = state_40349__$1;(statearr_40368_40391[2] = inst_40343);
(statearr_40368_40391[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40350 === 10))
{var inst_40332 = (state_40349[2]);var state_40349__$1 = state_40349;var statearr_40369_40392 = state_40349__$1;(statearr_40369_40392[2] = inst_40332);
(statearr_40369_40392[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_40350 === 8))
{var inst_40313 = (state_40349[9]);var inst_40309 = (state_40349[8]);var inst_40317 = (state_40349[10]);var inst_40322 = inst_40309.push(inst_40313);var tmp40366 = inst_40309;var inst_40309__$1 = tmp40366;var inst_40310 = inst_40317;var state_40349__$1 = (function (){var statearr_40370 = state_40349;(statearr_40370[7] = inst_40310);
(statearr_40370[8] = inst_40309__$1);
(statearr_40370[14] = inst_40322);
return statearr_40370;
})();var statearr_40371_40393 = state_40349__$1;(statearr_40371_40393[2] = null);
(statearr_40371_40393[1] = 2);
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
});return ((function (switch__26701__auto__){
return (function() {
var state_machine__26702__auto__ = null;
var state_machine__26702__auto____0 = (function (){var statearr_40375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_40375[0] = state_machine__26702__auto__);
(statearr_40375[1] = 1);
return statearr_40375;
});
var state_machine__26702__auto____1 = (function (state_40349){while(true){
var ret_value__26703__auto__ = (function (){try{while(true){
var result__26704__auto__ = switch__26701__auto__.call(null,state_40349);if(cljs.core.keyword_identical_QMARK_.call(null,result__26704__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__26704__auto__;
}
break;
}
}catch (e40376){if((e40376 instanceof Object))
{var ex__26705__auto__ = e40376;var statearr_40377_40394 = state_40349;(statearr_40377_40394[5] = ex__26705__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40349);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e40376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__26703__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__40395 = state_40349;
state_40349 = G__40395;
continue;
}
} else
{return ret_value__26703__auto__;
}
break;
}
});
state_machine__26702__auto__ = function(state_40349){
switch(arguments.length){
case 0:
return state_machine__26702__auto____0.call(this);
case 1:
return state_machine__26702__auto____1.call(this,state_40349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__26702__auto____0;
state_machine__26702__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__26702__auto____1;
return state_machine__26702__auto__;
})()
;})(switch__26701__auto__))
})();var state__26767__auto__ = (function (){var statearr_40378 = f__26766__auto__.call(null);(statearr_40378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__26765__auto___40379);
return statearr_40378;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26767__auto__);
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

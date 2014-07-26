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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34146 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34146 = (function (f,fn_handler,meta34147){
this.f = f;
this.fn_handler = fn_handler;
this.meta34147 = meta34147;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34146.cljs$lang$type = true;
cljs.core.async.t34146.cljs$lang$ctorStr = "cljs.core.async/t34146";
cljs.core.async.t34146.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34146");
});
cljs.core.async.t34146.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34146.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34146.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34148){var self__ = this;
var _34148__$1 = this;return self__.meta34147;
});
cljs.core.async.t34146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34148,meta34147__$1){var self__ = this;
var _34148__$1 = this;return (new cljs.core.async.t34146(self__.f,self__.fn_handler,meta34147__$1));
});
cljs.core.async.__GT_t34146 = (function __GT_t34146(f__$1,fn_handler__$1,meta34147){return (new cljs.core.async.t34146(f__$1,fn_handler__$1,meta34147));
});
}
return (new cljs.core.async.t34146(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34150 = buff;if(G__34150)
{var bit__15632__auto__ = null;if(cljs.core.truth_((function (){var or__14982__auto__ = bit__15632__auto__;if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return G__34150.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34150.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34150);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34150);
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
{var val_34151 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34151);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34151);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15830__auto___34152 = n;var x_34153 = 0;while(true){
if((x_34153 < n__15830__auto___34152))
{(a[x_34153] = 0);
{
var G__34154 = (x_34153 + 1);
x_34153 = G__34154;
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
var G__34155 = (i + 1);
i = G__34155;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34159 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34159 = (function (flag,alt_flag,meta34160){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34160 = meta34160;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34159.cljs$lang$type = true;
cljs.core.async.t34159.cljs$lang$ctorStr = "cljs.core.async/t34159";
cljs.core.async.t34159.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34159");
});
cljs.core.async.t34159.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34159.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34159.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34159.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34161){var self__ = this;
var _34161__$1 = this;return self__.meta34160;
});
cljs.core.async.t34159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34161,meta34160__$1){var self__ = this;
var _34161__$1 = this;return (new cljs.core.async.t34159(self__.flag,self__.alt_flag,meta34160__$1));
});
cljs.core.async.__GT_t34159 = (function __GT_t34159(flag__$1,alt_flag__$1,meta34160){return (new cljs.core.async.t34159(flag__$1,alt_flag__$1,meta34160));
});
}
return (new cljs.core.async.t34159(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34165 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34165 = (function (cb,flag,alt_handler,meta34166){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34166 = meta34166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34165.cljs$lang$type = true;
cljs.core.async.t34165.cljs$lang$ctorStr = "cljs.core.async/t34165";
cljs.core.async.t34165.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34165");
});
cljs.core.async.t34165.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34165.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34165.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34167){var self__ = this;
var _34167__$1 = this;return self__.meta34166;
});
cljs.core.async.t34165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34167,meta34166__$1){var self__ = this;
var _34167__$1 = this;return (new cljs.core.async.t34165(self__.cb,self__.flag,self__.alt_handler,meta34166__$1));
});
cljs.core.async.__GT_t34165 = (function __GT_t34165(cb__$1,flag__$1,alt_handler__$1,meta34166){return (new cljs.core.async.t34165(cb__$1,flag__$1,alt_handler__$1,meta34166));
});
}
return (new cljs.core.async.t34165(cb,flag,alt_handler,null));
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
return (function (p1__34168_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34168_SHARP_,port], null));
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
var G__34169 = (i + 1);
i = G__34169;
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
var alts_BANG___delegate = function (ports,p__34170){var map__34172 = p__34170;var map__34172__$1 = ((cljs.core.seq_QMARK_.call(null,map__34172))?cljs.core.apply.call(null,cljs.core.hash_map,map__34172):map__34172);var opts = map__34172__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34170 = null;if (arguments.length > 1) {
  p__34170 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34170);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34173){
var ports = cljs.core.first(arglist__34173);
var p__34170 = cljs.core.rest(arglist__34173);
return alts_BANG___delegate(ports,p__34170);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34181 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34181 = (function (ch,f,map_LT_,meta34182){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34182 = meta34182;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34181.cljs$lang$type = true;
cljs.core.async.t34181.cljs$lang$ctorStr = "cljs.core.async/t34181";
cljs.core.async.t34181.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34181");
});
cljs.core.async.t34181.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34181.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34181.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34181.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34184 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34184 = (function (fn1,_,meta34182,ch,f,map_LT_,meta34185){
this.fn1 = fn1;
this._ = _;
this.meta34182 = meta34182;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34185 = meta34185;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34184.cljs$lang$type = true;
cljs.core.async.t34184.cljs$lang$ctorStr = "cljs.core.async/t34184";
cljs.core.async.t34184.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34184");
});
cljs.core.async.t34184.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34184.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34184.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34184.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34174_SHARP_){return f1.call(null,(((p1__34174_SHARP_ == null))?null:self__.f.call(null,p1__34174_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34184.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34186){var self__ = this;
var _34186__$1 = this;return self__.meta34185;
});
cljs.core.async.t34184.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34186,meta34185__$1){var self__ = this;
var _34186__$1 = this;return (new cljs.core.async.t34184(self__.fn1,self__._,self__.meta34182,self__.ch,self__.f,self__.map_LT_,meta34185__$1));
});
cljs.core.async.__GT_t34184 = (function __GT_t34184(fn1__$1,___$2,meta34182__$1,ch__$2,f__$2,map_LT___$2,meta34185){return (new cljs.core.async.t34184(fn1__$1,___$2,meta34182__$1,ch__$2,f__$2,map_LT___$2,meta34185));
});
}
return (new cljs.core.async.t34184(fn1,___$1,self__.meta34182,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34181.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34181.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34181.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34183){var self__ = this;
var _34183__$1 = this;return self__.meta34182;
});
cljs.core.async.t34181.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34183,meta34182__$1){var self__ = this;
var _34183__$1 = this;return (new cljs.core.async.t34181(self__.ch,self__.f,self__.map_LT_,meta34182__$1));
});
cljs.core.async.__GT_t34181 = (function __GT_t34181(ch__$1,f__$1,map_LT___$1,meta34182){return (new cljs.core.async.t34181(ch__$1,f__$1,map_LT___$1,meta34182));
});
}
return (new cljs.core.async.t34181(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34190 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34190 = (function (ch,f,map_GT_,meta34191){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34191 = meta34191;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34190.cljs$lang$type = true;
cljs.core.async.t34190.cljs$lang$ctorStr = "cljs.core.async/t34190";
cljs.core.async.t34190.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34190");
});
cljs.core.async.t34190.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34190.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34190.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34190.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34190.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34190.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34190.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34192){var self__ = this;
var _34192__$1 = this;return self__.meta34191;
});
cljs.core.async.t34190.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34192,meta34191__$1){var self__ = this;
var _34192__$1 = this;return (new cljs.core.async.t34190(self__.ch,self__.f,self__.map_GT_,meta34191__$1));
});
cljs.core.async.__GT_t34190 = (function __GT_t34190(ch__$1,f__$1,map_GT___$1,meta34191){return (new cljs.core.async.t34190(ch__$1,f__$1,map_GT___$1,meta34191));
});
}
return (new cljs.core.async.t34190(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34196 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34196 = (function (ch,p,filter_GT_,meta34197){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34197 = meta34197;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34196.cljs$lang$type = true;
cljs.core.async.t34196.cljs$lang$ctorStr = "cljs.core.async/t34196";
cljs.core.async.t34196.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t34196");
});
cljs.core.async.t34196.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34196.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34196.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34196.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34196.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34196.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34196.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34198){var self__ = this;
var _34198__$1 = this;return self__.meta34197;
});
cljs.core.async.t34196.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34198,meta34197__$1){var self__ = this;
var _34198__$1 = this;return (new cljs.core.async.t34196(self__.ch,self__.p,self__.filter_GT_,meta34197__$1));
});
cljs.core.async.__GT_t34196 = (function __GT_t34196(ch__$1,p__$1,filter_GT___$1,meta34197){return (new cljs.core.async.t34196(ch__$1,p__$1,filter_GT___$1,meta34197));
});
}
return (new cljs.core.async.t34196(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___34281 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_34260){var state_val_34261 = (state_34260[1]);if((state_val_34261 === 7))
{var inst_34256 = (state_34260[2]);var state_34260__$1 = state_34260;var statearr_34262_34282 = state_34260__$1;(statearr_34262_34282[2] = inst_34256);
(statearr_34262_34282[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34261 === 1))
{var state_34260__$1 = state_34260;var statearr_34263_34283 = state_34260__$1;(statearr_34263_34283[2] = null);
(statearr_34263_34283[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34261 === 4))
{var inst_34242 = (state_34260[7]);var inst_34242__$1 = (state_34260[2]);var inst_34243 = (inst_34242__$1 == null);var state_34260__$1 = (function (){var statearr_34264 = state_34260;(statearr_34264[7] = inst_34242__$1);
return statearr_34264;
})();if(cljs.core.truth_(inst_34243))
{var statearr_34265_34284 = state_34260__$1;(statearr_34265_34284[1] = 5);
} else
{var statearr_34266_34285 = state_34260__$1;(statearr_34266_34285[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34261 === 6))
{var inst_34242 = (state_34260[7]);var inst_34247 = p.call(null,inst_34242);var state_34260__$1 = state_34260;if(cljs.core.truth_(inst_34247))
{var statearr_34267_34286 = state_34260__$1;(statearr_34267_34286[1] = 8);
} else
{var statearr_34268_34287 = state_34260__$1;(statearr_34268_34287[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34261 === 3))
{var inst_34258 = (state_34260[2]);var state_34260__$1 = state_34260;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34260__$1,inst_34258);
} else
{if((state_val_34261 === 2))
{var state_34260__$1 = state_34260;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34260__$1,4,ch);
} else
{if((state_val_34261 === 11))
{var inst_34250 = (state_34260[2]);var state_34260__$1 = state_34260;var statearr_34269_34288 = state_34260__$1;(statearr_34269_34288[2] = inst_34250);
(statearr_34269_34288[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34261 === 9))
{var state_34260__$1 = state_34260;var statearr_34270_34289 = state_34260__$1;(statearr_34270_34289[2] = null);
(statearr_34270_34289[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34261 === 5))
{var inst_34245 = cljs.core.async.close_BANG_.call(null,out);var state_34260__$1 = state_34260;var statearr_34271_34290 = state_34260__$1;(statearr_34271_34290[2] = inst_34245);
(statearr_34271_34290[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34261 === 10))
{var inst_34253 = (state_34260[2]);var state_34260__$1 = (function (){var statearr_34272 = state_34260;(statearr_34272[8] = inst_34253);
return statearr_34272;
})();var statearr_34273_34291 = state_34260__$1;(statearr_34273_34291[2] = null);
(statearr_34273_34291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34261 === 8))
{var inst_34242 = (state_34260[7]);var state_34260__$1 = state_34260;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34260__$1,11,out,inst_34242);
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
var state_machine__23717__auto____0 = (function (){var statearr_34277 = [null,null,null,null,null,null,null,null,null];(statearr_34277[0] = state_machine__23717__auto__);
(statearr_34277[1] = 1);
return statearr_34277;
});
var state_machine__23717__auto____1 = (function (state_34260){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_34260);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e34278){if((e34278 instanceof Object))
{var ex__23720__auto__ = e34278;var statearr_34279_34292 = state_34260;(statearr_34279_34292[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34260);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34278;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34293 = state_34260;
state_34260 = G__34293;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_34260){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_34260);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_34280 = f__23781__auto__.call(null);(statearr_34280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___34281);
return statearr_34280;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__23780__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_34445){var state_val_34446 = (state_34445[1]);if((state_val_34446 === 7))
{var inst_34441 = (state_34445[2]);var state_34445__$1 = state_34445;var statearr_34447_34484 = state_34445__$1;(statearr_34447_34484[2] = inst_34441);
(statearr_34447_34484[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 20))
{var inst_34416 = (state_34445[7]);var inst_34427 = (state_34445[2]);var inst_34428 = cljs.core.next.call(null,inst_34416);var inst_34402 = inst_34428;var inst_34403 = null;var inst_34404 = 0;var inst_34405 = 0;var state_34445__$1 = (function (){var statearr_34448 = state_34445;(statearr_34448[8] = inst_34402);
(statearr_34448[9] = inst_34405);
(statearr_34448[10] = inst_34403);
(statearr_34448[11] = inst_34427);
(statearr_34448[12] = inst_34404);
return statearr_34448;
})();var statearr_34449_34485 = state_34445__$1;(statearr_34449_34485[2] = null);
(statearr_34449_34485[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 1))
{var state_34445__$1 = state_34445;var statearr_34450_34486 = state_34445__$1;(statearr_34450_34486[2] = null);
(statearr_34450_34486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 4))
{var inst_34391 = (state_34445[13]);var inst_34391__$1 = (state_34445[2]);var inst_34392 = (inst_34391__$1 == null);var state_34445__$1 = (function (){var statearr_34454 = state_34445;(statearr_34454[13] = inst_34391__$1);
return statearr_34454;
})();if(cljs.core.truth_(inst_34392))
{var statearr_34455_34487 = state_34445__$1;(statearr_34455_34487[1] = 5);
} else
{var statearr_34456_34488 = state_34445__$1;(statearr_34456_34488[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 15))
{var state_34445__$1 = state_34445;var statearr_34457_34489 = state_34445__$1;(statearr_34457_34489[2] = null);
(statearr_34457_34489[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 13))
{var inst_34402 = (state_34445[8]);var inst_34405 = (state_34445[9]);var inst_34403 = (state_34445[10]);var inst_34404 = (state_34445[12]);var inst_34412 = (state_34445[2]);var inst_34413 = (inst_34405 + 1);var tmp34451 = inst_34402;var tmp34452 = inst_34403;var tmp34453 = inst_34404;var inst_34402__$1 = tmp34451;var inst_34403__$1 = tmp34452;var inst_34404__$1 = tmp34453;var inst_34405__$1 = inst_34413;var state_34445__$1 = (function (){var statearr_34458 = state_34445;(statearr_34458[8] = inst_34402__$1);
(statearr_34458[9] = inst_34405__$1);
(statearr_34458[10] = inst_34403__$1);
(statearr_34458[14] = inst_34412);
(statearr_34458[12] = inst_34404__$1);
return statearr_34458;
})();var statearr_34459_34490 = state_34445__$1;(statearr_34459_34490[2] = null);
(statearr_34459_34490[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 6))
{var inst_34391 = (state_34445[13]);var inst_34396 = f.call(null,inst_34391);var inst_34401 = cljs.core.seq.call(null,inst_34396);var inst_34402 = inst_34401;var inst_34403 = null;var inst_34404 = 0;var inst_34405 = 0;var state_34445__$1 = (function (){var statearr_34460 = state_34445;(statearr_34460[8] = inst_34402);
(statearr_34460[9] = inst_34405);
(statearr_34460[10] = inst_34403);
(statearr_34460[12] = inst_34404);
return statearr_34460;
})();var statearr_34461_34491 = state_34445__$1;(statearr_34461_34491[2] = null);
(statearr_34461_34491[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 17))
{var inst_34416 = (state_34445[7]);var inst_34420 = cljs.core.chunk_first.call(null,inst_34416);var inst_34421 = cljs.core.chunk_rest.call(null,inst_34416);var inst_34422 = cljs.core.count.call(null,inst_34420);var inst_34402 = inst_34421;var inst_34403 = inst_34420;var inst_34404 = inst_34422;var inst_34405 = 0;var state_34445__$1 = (function (){var statearr_34462 = state_34445;(statearr_34462[8] = inst_34402);
(statearr_34462[9] = inst_34405);
(statearr_34462[10] = inst_34403);
(statearr_34462[12] = inst_34404);
return statearr_34462;
})();var statearr_34463_34492 = state_34445__$1;(statearr_34463_34492[2] = null);
(statearr_34463_34492[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 3))
{var inst_34443 = (state_34445[2]);var state_34445__$1 = state_34445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34445__$1,inst_34443);
} else
{if((state_val_34446 === 12))
{var inst_34436 = (state_34445[2]);var state_34445__$1 = state_34445;var statearr_34464_34493 = state_34445__$1;(statearr_34464_34493[2] = inst_34436);
(statearr_34464_34493[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 2))
{var state_34445__$1 = state_34445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34445__$1,4,in$);
} else
{if((state_val_34446 === 19))
{var inst_34431 = (state_34445[2]);var state_34445__$1 = state_34445;var statearr_34465_34494 = state_34445__$1;(statearr_34465_34494[2] = inst_34431);
(statearr_34465_34494[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 11))
{var inst_34402 = (state_34445[8]);var inst_34416 = (state_34445[7]);var inst_34416__$1 = cljs.core.seq.call(null,inst_34402);var state_34445__$1 = (function (){var statearr_34466 = state_34445;(statearr_34466[7] = inst_34416__$1);
return statearr_34466;
})();if(inst_34416__$1)
{var statearr_34467_34495 = state_34445__$1;(statearr_34467_34495[1] = 14);
} else
{var statearr_34468_34496 = state_34445__$1;(statearr_34468_34496[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 9))
{var inst_34438 = (state_34445[2]);var state_34445__$1 = (function (){var statearr_34469 = state_34445;(statearr_34469[15] = inst_34438);
return statearr_34469;
})();var statearr_34470_34497 = state_34445__$1;(statearr_34470_34497[2] = null);
(statearr_34470_34497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 5))
{var inst_34394 = cljs.core.async.close_BANG_.call(null,out);var state_34445__$1 = state_34445;var statearr_34471_34498 = state_34445__$1;(statearr_34471_34498[2] = inst_34394);
(statearr_34471_34498[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 14))
{var inst_34416 = (state_34445[7]);var inst_34418 = cljs.core.chunked_seq_QMARK_.call(null,inst_34416);var state_34445__$1 = state_34445;if(inst_34418)
{var statearr_34472_34499 = state_34445__$1;(statearr_34472_34499[1] = 17);
} else
{var statearr_34473_34500 = state_34445__$1;(statearr_34473_34500[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 16))
{var inst_34434 = (state_34445[2]);var state_34445__$1 = state_34445;var statearr_34474_34501 = state_34445__$1;(statearr_34474_34501[2] = inst_34434);
(statearr_34474_34501[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34446 === 10))
{var inst_34405 = (state_34445[9]);var inst_34403 = (state_34445[10]);var inst_34410 = cljs.core._nth.call(null,inst_34403,inst_34405);var state_34445__$1 = state_34445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34445__$1,13,out,inst_34410);
} else
{if((state_val_34446 === 18))
{var inst_34416 = (state_34445[7]);var inst_34425 = cljs.core.first.call(null,inst_34416);var state_34445__$1 = state_34445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34445__$1,20,out,inst_34425);
} else
{if((state_val_34446 === 8))
{var inst_34405 = (state_34445[9]);var inst_34404 = (state_34445[12]);var inst_34407 = (inst_34405 < inst_34404);var inst_34408 = inst_34407;var state_34445__$1 = state_34445;if(cljs.core.truth_(inst_34408))
{var statearr_34475_34502 = state_34445__$1;(statearr_34475_34502[1] = 10);
} else
{var statearr_34476_34503 = state_34445__$1;(statearr_34476_34503[1] = 11);
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
var state_machine__23717__auto____0 = (function (){var statearr_34480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34480[0] = state_machine__23717__auto__);
(statearr_34480[1] = 1);
return statearr_34480;
});
var state_machine__23717__auto____1 = (function (state_34445){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_34445);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e34481){if((e34481 instanceof Object))
{var ex__23720__auto__ = e34481;var statearr_34482_34504 = state_34445;(statearr_34482_34504[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34481;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34505 = state_34445;
state_34445 = G__34505;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_34445){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_34445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_34483 = f__23781__auto__.call(null);(statearr_34483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto__);
return statearr_34483;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__23780__auto___34586 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_34565){var state_val_34566 = (state_34565[1]);if((state_val_34566 === 7))
{var inst_34561 = (state_34565[2]);var state_34565__$1 = state_34565;var statearr_34567_34587 = state_34565__$1;(statearr_34567_34587[2] = inst_34561);
(statearr_34567_34587[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34566 === 1))
{var state_34565__$1 = state_34565;var statearr_34568_34588 = state_34565__$1;(statearr_34568_34588[2] = null);
(statearr_34568_34588[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34566 === 4))
{var inst_34548 = (state_34565[7]);var inst_34548__$1 = (state_34565[2]);var inst_34549 = (inst_34548__$1 == null);var state_34565__$1 = (function (){var statearr_34569 = state_34565;(statearr_34569[7] = inst_34548__$1);
return statearr_34569;
})();if(cljs.core.truth_(inst_34549))
{var statearr_34570_34589 = state_34565__$1;(statearr_34570_34589[1] = 5);
} else
{var statearr_34571_34590 = state_34565__$1;(statearr_34571_34590[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34566 === 6))
{var inst_34548 = (state_34565[7]);var state_34565__$1 = state_34565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34565__$1,11,to,inst_34548);
} else
{if((state_val_34566 === 3))
{var inst_34563 = (state_34565[2]);var state_34565__$1 = state_34565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34565__$1,inst_34563);
} else
{if((state_val_34566 === 2))
{var state_34565__$1 = state_34565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34565__$1,4,from);
} else
{if((state_val_34566 === 11))
{var inst_34558 = (state_34565[2]);var state_34565__$1 = (function (){var statearr_34572 = state_34565;(statearr_34572[8] = inst_34558);
return statearr_34572;
})();var statearr_34573_34591 = state_34565__$1;(statearr_34573_34591[2] = null);
(statearr_34573_34591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34566 === 9))
{var state_34565__$1 = state_34565;var statearr_34574_34592 = state_34565__$1;(statearr_34574_34592[2] = null);
(statearr_34574_34592[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34566 === 5))
{var state_34565__$1 = state_34565;if(cljs.core.truth_(close_QMARK_))
{var statearr_34575_34593 = state_34565__$1;(statearr_34575_34593[1] = 8);
} else
{var statearr_34576_34594 = state_34565__$1;(statearr_34576_34594[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34566 === 10))
{var inst_34555 = (state_34565[2]);var state_34565__$1 = state_34565;var statearr_34577_34595 = state_34565__$1;(statearr_34577_34595[2] = inst_34555);
(statearr_34577_34595[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34566 === 8))
{var inst_34552 = cljs.core.async.close_BANG_.call(null,to);var state_34565__$1 = state_34565;var statearr_34578_34596 = state_34565__$1;(statearr_34578_34596[2] = inst_34552);
(statearr_34578_34596[1] = 10);
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
var state_machine__23717__auto____0 = (function (){var statearr_34582 = [null,null,null,null,null,null,null,null,null];(statearr_34582[0] = state_machine__23717__auto__);
(statearr_34582[1] = 1);
return statearr_34582;
});
var state_machine__23717__auto____1 = (function (state_34565){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_34565);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e34583){if((e34583 instanceof Object))
{var ex__23720__auto__ = e34583;var statearr_34584_34597 = state_34565;(statearr_34584_34597[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34565);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34598 = state_34565;
state_34565 = G__34598;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_34565){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_34565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_34585 = f__23781__auto__.call(null);(statearr_34585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___34586);
return statearr_34585;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__23780__auto___34685 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_34663){var state_val_34664 = (state_34663[1]);if((state_val_34664 === 7))
{var inst_34659 = (state_34663[2]);var state_34663__$1 = state_34663;var statearr_34665_34686 = state_34663__$1;(statearr_34665_34686[2] = inst_34659);
(statearr_34665_34686[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34664 === 1))
{var state_34663__$1 = state_34663;var statearr_34666_34687 = state_34663__$1;(statearr_34666_34687[2] = null);
(statearr_34666_34687[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34664 === 4))
{var inst_34644 = (state_34663[7]);var inst_34644__$1 = (state_34663[2]);var inst_34645 = (inst_34644__$1 == null);var state_34663__$1 = (function (){var statearr_34667 = state_34663;(statearr_34667[7] = inst_34644__$1);
return statearr_34667;
})();if(cljs.core.truth_(inst_34645))
{var statearr_34668_34688 = state_34663__$1;(statearr_34668_34688[1] = 5);
} else
{var statearr_34669_34689 = state_34663__$1;(statearr_34669_34689[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34664 === 6))
{var inst_34644 = (state_34663[7]);var inst_34650 = p.call(null,inst_34644);var state_34663__$1 = state_34663;if(cljs.core.truth_(inst_34650))
{var statearr_34670_34690 = state_34663__$1;(statearr_34670_34690[1] = 9);
} else
{var statearr_34671_34691 = state_34663__$1;(statearr_34671_34691[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34664 === 3))
{var inst_34661 = (state_34663[2]);var state_34663__$1 = state_34663;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34663__$1,inst_34661);
} else
{if((state_val_34664 === 2))
{var state_34663__$1 = state_34663;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34663__$1,4,ch);
} else
{if((state_val_34664 === 11))
{var inst_34644 = (state_34663[7]);var inst_34654 = (state_34663[2]);var state_34663__$1 = state_34663;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34663__$1,8,inst_34654,inst_34644);
} else
{if((state_val_34664 === 9))
{var state_34663__$1 = state_34663;var statearr_34672_34692 = state_34663__$1;(statearr_34672_34692[2] = tc);
(statearr_34672_34692[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34664 === 5))
{var inst_34647 = cljs.core.async.close_BANG_.call(null,tc);var inst_34648 = cljs.core.async.close_BANG_.call(null,fc);var state_34663__$1 = (function (){var statearr_34673 = state_34663;(statearr_34673[8] = inst_34647);
return statearr_34673;
})();var statearr_34674_34693 = state_34663__$1;(statearr_34674_34693[2] = inst_34648);
(statearr_34674_34693[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34664 === 10))
{var state_34663__$1 = state_34663;var statearr_34675_34694 = state_34663__$1;(statearr_34675_34694[2] = fc);
(statearr_34675_34694[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34664 === 8))
{var inst_34656 = (state_34663[2]);var state_34663__$1 = (function (){var statearr_34676 = state_34663;(statearr_34676[9] = inst_34656);
return statearr_34676;
})();var statearr_34677_34695 = state_34663__$1;(statearr_34677_34695[2] = null);
(statearr_34677_34695[1] = 2);
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
var state_machine__23717__auto____0 = (function (){var statearr_34681 = [null,null,null,null,null,null,null,null,null,null];(statearr_34681[0] = state_machine__23717__auto__);
(statearr_34681[1] = 1);
return statearr_34681;
});
var state_machine__23717__auto____1 = (function (state_34663){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_34663);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e34682){if((e34682 instanceof Object))
{var ex__23720__auto__ = e34682;var statearr_34683_34696 = state_34663;(statearr_34683_34696[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34663);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34697 = state_34663;
state_34663 = G__34697;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_34663){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_34663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_34684 = f__23781__auto__.call(null);(statearr_34684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___34685);
return statearr_34684;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__23780__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_34744){var state_val_34745 = (state_34744[1]);if((state_val_34745 === 7))
{var inst_34740 = (state_34744[2]);var state_34744__$1 = state_34744;var statearr_34746_34762 = state_34744__$1;(statearr_34746_34762[2] = inst_34740);
(statearr_34746_34762[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34745 === 6))
{var inst_34730 = (state_34744[7]);var inst_34733 = (state_34744[8]);var inst_34737 = f.call(null,inst_34730,inst_34733);var inst_34730__$1 = inst_34737;var state_34744__$1 = (function (){var statearr_34747 = state_34744;(statearr_34747[7] = inst_34730__$1);
return statearr_34747;
})();var statearr_34748_34763 = state_34744__$1;(statearr_34748_34763[2] = null);
(statearr_34748_34763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34745 === 5))
{var inst_34730 = (state_34744[7]);var state_34744__$1 = state_34744;var statearr_34749_34764 = state_34744__$1;(statearr_34749_34764[2] = inst_34730);
(statearr_34749_34764[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34745 === 4))
{var inst_34733 = (state_34744[8]);var inst_34733__$1 = (state_34744[2]);var inst_34734 = (inst_34733__$1 == null);var state_34744__$1 = (function (){var statearr_34750 = state_34744;(statearr_34750[8] = inst_34733__$1);
return statearr_34750;
})();if(cljs.core.truth_(inst_34734))
{var statearr_34751_34765 = state_34744__$1;(statearr_34751_34765[1] = 5);
} else
{var statearr_34752_34766 = state_34744__$1;(statearr_34752_34766[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34745 === 3))
{var inst_34742 = (state_34744[2]);var state_34744__$1 = state_34744;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34744__$1,inst_34742);
} else
{if((state_val_34745 === 2))
{var state_34744__$1 = state_34744;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34744__$1,4,ch);
} else
{if((state_val_34745 === 1))
{var inst_34730 = init;var state_34744__$1 = (function (){var statearr_34753 = state_34744;(statearr_34753[7] = inst_34730);
return statearr_34753;
})();var statearr_34754_34767 = state_34744__$1;(statearr_34754_34767[2] = null);
(statearr_34754_34767[1] = 2);
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
var state_machine__23717__auto____0 = (function (){var statearr_34758 = [null,null,null,null,null,null,null,null,null];(statearr_34758[0] = state_machine__23717__auto__);
(statearr_34758[1] = 1);
return statearr_34758;
});
var state_machine__23717__auto____1 = (function (state_34744){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_34744);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e34759){if((e34759 instanceof Object))
{var ex__23720__auto__ = e34759;var statearr_34760_34768 = state_34744;(statearr_34760_34768[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34744);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34769 = state_34744;
state_34744 = G__34769;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_34744){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_34744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_34761 = f__23781__auto__.call(null);(statearr_34761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto__);
return statearr_34761;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__23780__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_34831){var state_val_34832 = (state_34831[1]);if((state_val_34832 === 7))
{var inst_34812 = (state_34831[7]);var inst_34817 = (state_34831[2]);var inst_34818 = cljs.core.next.call(null,inst_34812);var inst_34812__$1 = inst_34818;var state_34831__$1 = (function (){var statearr_34833 = state_34831;(statearr_34833[7] = inst_34812__$1);
(statearr_34833[8] = inst_34817);
return statearr_34833;
})();var statearr_34834_34852 = state_34831__$1;(statearr_34834_34852[2] = null);
(statearr_34834_34852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 1))
{var inst_34811 = cljs.core.seq.call(null,coll);var inst_34812 = inst_34811;var state_34831__$1 = (function (){var statearr_34835 = state_34831;(statearr_34835[7] = inst_34812);
return statearr_34835;
})();var statearr_34836_34853 = state_34831__$1;(statearr_34836_34853[2] = null);
(statearr_34836_34853[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 4))
{var inst_34812 = (state_34831[7]);var inst_34815 = cljs.core.first.call(null,inst_34812);var state_34831__$1 = state_34831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34831__$1,7,ch,inst_34815);
} else
{if((state_val_34832 === 6))
{var inst_34827 = (state_34831[2]);var state_34831__$1 = state_34831;var statearr_34837_34854 = state_34831__$1;(statearr_34837_34854[2] = inst_34827);
(statearr_34837_34854[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 3))
{var inst_34829 = (state_34831[2]);var state_34831__$1 = state_34831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34831__$1,inst_34829);
} else
{if((state_val_34832 === 2))
{var inst_34812 = (state_34831[7]);var state_34831__$1 = state_34831;if(cljs.core.truth_(inst_34812))
{var statearr_34838_34855 = state_34831__$1;(statearr_34838_34855[1] = 4);
} else
{var statearr_34839_34856 = state_34831__$1;(statearr_34839_34856[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 9))
{var state_34831__$1 = state_34831;var statearr_34840_34857 = state_34831__$1;(statearr_34840_34857[2] = null);
(statearr_34840_34857[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 5))
{var state_34831__$1 = state_34831;if(cljs.core.truth_(close_QMARK_))
{var statearr_34841_34858 = state_34831__$1;(statearr_34841_34858[1] = 8);
} else
{var statearr_34842_34859 = state_34831__$1;(statearr_34842_34859[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 10))
{var inst_34825 = (state_34831[2]);var state_34831__$1 = state_34831;var statearr_34843_34860 = state_34831__$1;(statearr_34843_34860[2] = inst_34825);
(statearr_34843_34860[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34832 === 8))
{var inst_34822 = cljs.core.async.close_BANG_.call(null,ch);var state_34831__$1 = state_34831;var statearr_34844_34861 = state_34831__$1;(statearr_34844_34861[2] = inst_34822);
(statearr_34844_34861[1] = 10);
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
var state_machine__23717__auto____0 = (function (){var statearr_34848 = [null,null,null,null,null,null,null,null,null];(statearr_34848[0] = state_machine__23717__auto__);
(statearr_34848[1] = 1);
return statearr_34848;
});
var state_machine__23717__auto____1 = (function (state_34831){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_34831);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e34849){if((e34849 instanceof Object))
{var ex__23720__auto__ = e34849;var statearr_34850_34862 = state_34831;(statearr_34850_34862[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34831);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34863 = state_34831;
state_34831 = G__34863;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_34831){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_34831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_34851 = f__23781__auto__.call(null);(statearr_34851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto__);
return statearr_34851;
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
cljs.core.async.Mux = (function (){var obj34865 = {};return obj34865;
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
cljs.core.async.Mult = (function (){var obj34867 = {};return obj34867;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35091 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35091 = (function (cs,ch,mult,meta35092){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35092 = meta35092;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35091.cljs$lang$type = true;
cljs.core.async.t35091.cljs$lang$ctorStr = "cljs.core.async/t35091";
cljs.core.async.t35091.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t35091");
});})(cs))
;
cljs.core.async.t35091.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35091.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35091.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35091.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35091.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35091.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35091.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35093){var self__ = this;
var _35093__$1 = this;return self__.meta35092;
});})(cs))
;
cljs.core.async.t35091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35093,meta35092__$1){var self__ = this;
var _35093__$1 = this;return (new cljs.core.async.t35091(self__.cs,self__.ch,self__.mult,meta35092__$1));
});})(cs))
;
cljs.core.async.__GT_t35091 = ((function (cs){
return (function __GT_t35091(cs__$1,ch__$1,mult__$1,meta35092){return (new cljs.core.async.t35091(cs__$1,ch__$1,mult__$1,meta35092));
});})(cs))
;
}
return (new cljs.core.async.t35091(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__23780__auto___35314 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_35228){var state_val_35229 = (state_35228[1]);if((state_val_35229 === 7))
{var inst_35224 = (state_35228[2]);var state_35228__$1 = state_35228;var statearr_35230_35315 = state_35228__$1;(statearr_35230_35315[2] = inst_35224);
(statearr_35230_35315[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 20))
{var inst_35125 = (state_35228[7]);var inst_35135 = cljs.core.first.call(null,inst_35125);var inst_35136 = cljs.core.nth.call(null,inst_35135,0,null);var inst_35137 = cljs.core.nth.call(null,inst_35135,1,null);var state_35228__$1 = (function (){var statearr_35231 = state_35228;(statearr_35231[8] = inst_35136);
return statearr_35231;
})();if(cljs.core.truth_(inst_35137))
{var statearr_35232_35316 = state_35228__$1;(statearr_35232_35316[1] = 22);
} else
{var statearr_35233_35317 = state_35228__$1;(statearr_35233_35317[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 27))
{var inst_35167 = (state_35228[9]);var inst_35165 = (state_35228[10]);var inst_35172 = cljs.core._nth.call(null,inst_35165,inst_35167);var state_35228__$1 = (function (){var statearr_35234 = state_35228;(statearr_35234[11] = inst_35172);
return statearr_35234;
})();var statearr_35235_35318 = state_35228__$1;(statearr_35235_35318[2] = null);
(statearr_35235_35318[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 1))
{var state_35228__$1 = state_35228;var statearr_35236_35319 = state_35228__$1;(statearr_35236_35319[2] = null);
(statearr_35236_35319[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 24))
{var inst_35125 = (state_35228[7]);var inst_35142 = (state_35228[2]);var inst_35143 = cljs.core.next.call(null,inst_35125);var inst_35105 = inst_35143;var inst_35106 = null;var inst_35107 = 0;var inst_35108 = 0;var state_35228__$1 = (function (){var statearr_35237 = state_35228;(statearr_35237[12] = inst_35107);
(statearr_35237[13] = inst_35108);
(statearr_35237[14] = inst_35142);
(statearr_35237[15] = inst_35106);
(statearr_35237[16] = inst_35105);
return statearr_35237;
})();var statearr_35238_35320 = state_35228__$1;(statearr_35238_35320[2] = null);
(statearr_35238_35320[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 39))
{var inst_35185 = (state_35228[17]);var inst_35203 = (state_35228[2]);var inst_35204 = cljs.core.next.call(null,inst_35185);var inst_35164 = inst_35204;var inst_35165 = null;var inst_35166 = 0;var inst_35167 = 0;var state_35228__$1 = (function (){var statearr_35242 = state_35228;(statearr_35242[18] = inst_35164);
(statearr_35242[9] = inst_35167);
(statearr_35242[19] = inst_35166);
(statearr_35242[20] = inst_35203);
(statearr_35242[10] = inst_35165);
return statearr_35242;
})();var statearr_35243_35321 = state_35228__$1;(statearr_35243_35321[2] = null);
(statearr_35243_35321[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 4))
{var inst_35096 = (state_35228[21]);var inst_35096__$1 = (state_35228[2]);var inst_35097 = (inst_35096__$1 == null);var state_35228__$1 = (function (){var statearr_35244 = state_35228;(statearr_35244[21] = inst_35096__$1);
return statearr_35244;
})();if(cljs.core.truth_(inst_35097))
{var statearr_35245_35322 = state_35228__$1;(statearr_35245_35322[1] = 5);
} else
{var statearr_35246_35323 = state_35228__$1;(statearr_35246_35323[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 15))
{var inst_35107 = (state_35228[12]);var inst_35108 = (state_35228[13]);var inst_35106 = (state_35228[15]);var inst_35105 = (state_35228[16]);var inst_35121 = (state_35228[2]);var inst_35122 = (inst_35108 + 1);var tmp35239 = inst_35107;var tmp35240 = inst_35106;var tmp35241 = inst_35105;var inst_35105__$1 = tmp35241;var inst_35106__$1 = tmp35240;var inst_35107__$1 = tmp35239;var inst_35108__$1 = inst_35122;var state_35228__$1 = (function (){var statearr_35247 = state_35228;(statearr_35247[12] = inst_35107__$1);
(statearr_35247[13] = inst_35108__$1);
(statearr_35247[22] = inst_35121);
(statearr_35247[15] = inst_35106__$1);
(statearr_35247[16] = inst_35105__$1);
return statearr_35247;
})();var statearr_35248_35324 = state_35228__$1;(statearr_35248_35324[2] = null);
(statearr_35248_35324[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 21))
{var inst_35146 = (state_35228[2]);var state_35228__$1 = state_35228;var statearr_35249_35325 = state_35228__$1;(statearr_35249_35325[2] = inst_35146);
(statearr_35249_35325[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 31))
{var inst_35172 = (state_35228[11]);var inst_35173 = (state_35228[2]);var inst_35174 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35175 = cljs.core.async.untap_STAR_.call(null,m,inst_35172);var state_35228__$1 = (function (){var statearr_35250 = state_35228;(statearr_35250[23] = inst_35174);
(statearr_35250[24] = inst_35173);
return statearr_35250;
})();var statearr_35251_35326 = state_35228__$1;(statearr_35251_35326[2] = inst_35175);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35228__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 32))
{var inst_35172 = (state_35228[11]);var inst_35096 = (state_35228[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35228,31,Object,null,30);var inst_35179 = cljs.core.async.put_BANG_.call(null,inst_35172,inst_35096,done);var state_35228__$1 = state_35228;var statearr_35252_35327 = state_35228__$1;(statearr_35252_35327[2] = inst_35179);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35228__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 40))
{var inst_35194 = (state_35228[25]);var inst_35195 = (state_35228[2]);var inst_35196 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35197 = cljs.core.async.untap_STAR_.call(null,m,inst_35194);var state_35228__$1 = (function (){var statearr_35253 = state_35228;(statearr_35253[26] = inst_35195);
(statearr_35253[27] = inst_35196);
return statearr_35253;
})();var statearr_35254_35328 = state_35228__$1;(statearr_35254_35328[2] = inst_35197);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35228__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 33))
{var inst_35185 = (state_35228[17]);var inst_35187 = cljs.core.chunked_seq_QMARK_.call(null,inst_35185);var state_35228__$1 = state_35228;if(inst_35187)
{var statearr_35255_35329 = state_35228__$1;(statearr_35255_35329[1] = 36);
} else
{var statearr_35256_35330 = state_35228__$1;(statearr_35256_35330[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 13))
{var inst_35115 = (state_35228[28]);var inst_35118 = cljs.core.async.close_BANG_.call(null,inst_35115);var state_35228__$1 = state_35228;var statearr_35257_35331 = state_35228__$1;(statearr_35257_35331[2] = inst_35118);
(statearr_35257_35331[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 22))
{var inst_35136 = (state_35228[8]);var inst_35139 = cljs.core.async.close_BANG_.call(null,inst_35136);var state_35228__$1 = state_35228;var statearr_35258_35332 = state_35228__$1;(statearr_35258_35332[2] = inst_35139);
(statearr_35258_35332[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 36))
{var inst_35185 = (state_35228[17]);var inst_35189 = cljs.core.chunk_first.call(null,inst_35185);var inst_35190 = cljs.core.chunk_rest.call(null,inst_35185);var inst_35191 = cljs.core.count.call(null,inst_35189);var inst_35164 = inst_35190;var inst_35165 = inst_35189;var inst_35166 = inst_35191;var inst_35167 = 0;var state_35228__$1 = (function (){var statearr_35259 = state_35228;(statearr_35259[18] = inst_35164);
(statearr_35259[9] = inst_35167);
(statearr_35259[19] = inst_35166);
(statearr_35259[10] = inst_35165);
return statearr_35259;
})();var statearr_35260_35333 = state_35228__$1;(statearr_35260_35333[2] = null);
(statearr_35260_35333[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 41))
{var inst_35194 = (state_35228[25]);var inst_35096 = (state_35228[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35228,40,Object,null,39);var inst_35201 = cljs.core.async.put_BANG_.call(null,inst_35194,inst_35096,done);var state_35228__$1 = state_35228;var statearr_35261_35334 = state_35228__$1;(statearr_35261_35334[2] = inst_35201);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35228__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 43))
{var state_35228__$1 = state_35228;var statearr_35262_35335 = state_35228__$1;(statearr_35262_35335[2] = null);
(statearr_35262_35335[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 29))
{var inst_35212 = (state_35228[2]);var state_35228__$1 = state_35228;var statearr_35263_35336 = state_35228__$1;(statearr_35263_35336[2] = inst_35212);
(statearr_35263_35336[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 44))
{var inst_35221 = (state_35228[2]);var state_35228__$1 = (function (){var statearr_35264 = state_35228;(statearr_35264[29] = inst_35221);
return statearr_35264;
})();var statearr_35265_35337 = state_35228__$1;(statearr_35265_35337[2] = null);
(statearr_35265_35337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 6))
{var inst_35156 = (state_35228[30]);var inst_35155 = cljs.core.deref.call(null,cs);var inst_35156__$1 = cljs.core.keys.call(null,inst_35155);var inst_35157 = cljs.core.count.call(null,inst_35156__$1);var inst_35158 = cljs.core.reset_BANG_.call(null,dctr,inst_35157);var inst_35163 = cljs.core.seq.call(null,inst_35156__$1);var inst_35164 = inst_35163;var inst_35165 = null;var inst_35166 = 0;var inst_35167 = 0;var state_35228__$1 = (function (){var statearr_35266 = state_35228;(statearr_35266[18] = inst_35164);
(statearr_35266[9] = inst_35167);
(statearr_35266[19] = inst_35166);
(statearr_35266[30] = inst_35156__$1);
(statearr_35266[31] = inst_35158);
(statearr_35266[10] = inst_35165);
return statearr_35266;
})();var statearr_35267_35338 = state_35228__$1;(statearr_35267_35338[2] = null);
(statearr_35267_35338[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 28))
{var inst_35164 = (state_35228[18]);var inst_35185 = (state_35228[17]);var inst_35185__$1 = cljs.core.seq.call(null,inst_35164);var state_35228__$1 = (function (){var statearr_35268 = state_35228;(statearr_35268[17] = inst_35185__$1);
return statearr_35268;
})();if(inst_35185__$1)
{var statearr_35269_35339 = state_35228__$1;(statearr_35269_35339[1] = 33);
} else
{var statearr_35270_35340 = state_35228__$1;(statearr_35270_35340[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 25))
{var inst_35167 = (state_35228[9]);var inst_35166 = (state_35228[19]);var inst_35169 = (inst_35167 < inst_35166);var inst_35170 = inst_35169;var state_35228__$1 = state_35228;if(cljs.core.truth_(inst_35170))
{var statearr_35271_35341 = state_35228__$1;(statearr_35271_35341[1] = 27);
} else
{var statearr_35272_35342 = state_35228__$1;(statearr_35272_35342[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 34))
{var state_35228__$1 = state_35228;var statearr_35273_35343 = state_35228__$1;(statearr_35273_35343[2] = null);
(statearr_35273_35343[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 17))
{var state_35228__$1 = state_35228;var statearr_35274_35344 = state_35228__$1;(statearr_35274_35344[2] = null);
(statearr_35274_35344[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 3))
{var inst_35226 = (state_35228[2]);var state_35228__$1 = state_35228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35228__$1,inst_35226);
} else
{if((state_val_35229 === 12))
{var inst_35151 = (state_35228[2]);var state_35228__$1 = state_35228;var statearr_35275_35345 = state_35228__$1;(statearr_35275_35345[2] = inst_35151);
(statearr_35275_35345[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 2))
{var state_35228__$1 = state_35228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35228__$1,4,ch);
} else
{if((state_val_35229 === 23))
{var state_35228__$1 = state_35228;var statearr_35276_35346 = state_35228__$1;(statearr_35276_35346[2] = null);
(statearr_35276_35346[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 35))
{var inst_35210 = (state_35228[2]);var state_35228__$1 = state_35228;var statearr_35277_35347 = state_35228__$1;(statearr_35277_35347[2] = inst_35210);
(statearr_35277_35347[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 19))
{var inst_35125 = (state_35228[7]);var inst_35129 = cljs.core.chunk_first.call(null,inst_35125);var inst_35130 = cljs.core.chunk_rest.call(null,inst_35125);var inst_35131 = cljs.core.count.call(null,inst_35129);var inst_35105 = inst_35130;var inst_35106 = inst_35129;var inst_35107 = inst_35131;var inst_35108 = 0;var state_35228__$1 = (function (){var statearr_35278 = state_35228;(statearr_35278[12] = inst_35107);
(statearr_35278[13] = inst_35108);
(statearr_35278[15] = inst_35106);
(statearr_35278[16] = inst_35105);
return statearr_35278;
})();var statearr_35279_35348 = state_35228__$1;(statearr_35279_35348[2] = null);
(statearr_35279_35348[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 11))
{var inst_35125 = (state_35228[7]);var inst_35105 = (state_35228[16]);var inst_35125__$1 = cljs.core.seq.call(null,inst_35105);var state_35228__$1 = (function (){var statearr_35280 = state_35228;(statearr_35280[7] = inst_35125__$1);
return statearr_35280;
})();if(inst_35125__$1)
{var statearr_35281_35349 = state_35228__$1;(statearr_35281_35349[1] = 16);
} else
{var statearr_35282_35350 = state_35228__$1;(statearr_35282_35350[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 9))
{var inst_35153 = (state_35228[2]);var state_35228__$1 = state_35228;var statearr_35283_35351 = state_35228__$1;(statearr_35283_35351[2] = inst_35153);
(statearr_35283_35351[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 5))
{var inst_35103 = cljs.core.deref.call(null,cs);var inst_35104 = cljs.core.seq.call(null,inst_35103);var inst_35105 = inst_35104;var inst_35106 = null;var inst_35107 = 0;var inst_35108 = 0;var state_35228__$1 = (function (){var statearr_35284 = state_35228;(statearr_35284[12] = inst_35107);
(statearr_35284[13] = inst_35108);
(statearr_35284[15] = inst_35106);
(statearr_35284[16] = inst_35105);
return statearr_35284;
})();var statearr_35285_35352 = state_35228__$1;(statearr_35285_35352[2] = null);
(statearr_35285_35352[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 14))
{var state_35228__$1 = state_35228;var statearr_35286_35353 = state_35228__$1;(statearr_35286_35353[2] = null);
(statearr_35286_35353[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 45))
{var inst_35218 = (state_35228[2]);var state_35228__$1 = state_35228;var statearr_35287_35354 = state_35228__$1;(statearr_35287_35354[2] = inst_35218);
(statearr_35287_35354[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 26))
{var inst_35156 = (state_35228[30]);var inst_35214 = (state_35228[2]);var inst_35215 = cljs.core.seq.call(null,inst_35156);var state_35228__$1 = (function (){var statearr_35288 = state_35228;(statearr_35288[32] = inst_35214);
return statearr_35288;
})();if(inst_35215)
{var statearr_35289_35355 = state_35228__$1;(statearr_35289_35355[1] = 42);
} else
{var statearr_35290_35356 = state_35228__$1;(statearr_35290_35356[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 16))
{var inst_35125 = (state_35228[7]);var inst_35127 = cljs.core.chunked_seq_QMARK_.call(null,inst_35125);var state_35228__$1 = state_35228;if(inst_35127)
{var statearr_35294_35357 = state_35228__$1;(statearr_35294_35357[1] = 19);
} else
{var statearr_35295_35358 = state_35228__$1;(statearr_35295_35358[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 38))
{var inst_35207 = (state_35228[2]);var state_35228__$1 = state_35228;var statearr_35296_35359 = state_35228__$1;(statearr_35296_35359[2] = inst_35207);
(statearr_35296_35359[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 30))
{var inst_35164 = (state_35228[18]);var inst_35167 = (state_35228[9]);var inst_35166 = (state_35228[19]);var inst_35165 = (state_35228[10]);var inst_35181 = (state_35228[2]);var inst_35182 = (inst_35167 + 1);var tmp35291 = inst_35164;var tmp35292 = inst_35166;var tmp35293 = inst_35165;var inst_35164__$1 = tmp35291;var inst_35165__$1 = tmp35293;var inst_35166__$1 = tmp35292;var inst_35167__$1 = inst_35182;var state_35228__$1 = (function (){var statearr_35297 = state_35228;(statearr_35297[18] = inst_35164__$1);
(statearr_35297[9] = inst_35167__$1);
(statearr_35297[33] = inst_35181);
(statearr_35297[19] = inst_35166__$1);
(statearr_35297[10] = inst_35165__$1);
return statearr_35297;
})();var statearr_35298_35360 = state_35228__$1;(statearr_35298_35360[2] = null);
(statearr_35298_35360[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 10))
{var inst_35108 = (state_35228[13]);var inst_35106 = (state_35228[15]);var inst_35114 = cljs.core._nth.call(null,inst_35106,inst_35108);var inst_35115 = cljs.core.nth.call(null,inst_35114,0,null);var inst_35116 = cljs.core.nth.call(null,inst_35114,1,null);var state_35228__$1 = (function (){var statearr_35299 = state_35228;(statearr_35299[28] = inst_35115);
return statearr_35299;
})();if(cljs.core.truth_(inst_35116))
{var statearr_35300_35361 = state_35228__$1;(statearr_35300_35361[1] = 13);
} else
{var statearr_35301_35362 = state_35228__$1;(statearr_35301_35362[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 18))
{var inst_35149 = (state_35228[2]);var state_35228__$1 = state_35228;var statearr_35302_35363 = state_35228__$1;(statearr_35302_35363[2] = inst_35149);
(statearr_35302_35363[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 42))
{var state_35228__$1 = state_35228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35228__$1,45,dchan);
} else
{if((state_val_35229 === 37))
{var inst_35185 = (state_35228[17]);var inst_35194 = cljs.core.first.call(null,inst_35185);var state_35228__$1 = (function (){var statearr_35303 = state_35228;(statearr_35303[25] = inst_35194);
return statearr_35303;
})();var statearr_35304_35364 = state_35228__$1;(statearr_35304_35364[2] = null);
(statearr_35304_35364[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35229 === 8))
{var inst_35107 = (state_35228[12]);var inst_35108 = (state_35228[13]);var inst_35110 = (inst_35108 < inst_35107);var inst_35111 = inst_35110;var state_35228__$1 = state_35228;if(cljs.core.truth_(inst_35111))
{var statearr_35305_35365 = state_35228__$1;(statearr_35305_35365[1] = 10);
} else
{var statearr_35306_35366 = state_35228__$1;(statearr_35306_35366[1] = 11);
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
var state_machine__23717__auto____0 = (function (){var statearr_35310 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35310[0] = state_machine__23717__auto__);
(statearr_35310[1] = 1);
return statearr_35310;
});
var state_machine__23717__auto____1 = (function (state_35228){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_35228);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e35311){if((e35311 instanceof Object))
{var ex__23720__auto__ = e35311;var statearr_35312_35367 = state_35228;(statearr_35312_35367[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35228);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35311;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35368 = state_35228;
state_35228 = G__35368;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_35228){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_35228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_35313 = f__23781__auto__.call(null);(statearr_35313[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___35314);
return statearr_35313;
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
cljs.core.async.Mix = (function (){var obj35370 = {};return obj35370;
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
;var m = (function (){if(typeof cljs.core.async.t35480 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35480 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta35481){
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
this.meta35481 = meta35481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35480.cljs$lang$type = true;
cljs.core.async.t35480.cljs$lang$ctorStr = "cljs.core.async/t35480";
cljs.core.async.t35480.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t35480");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35480.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35480.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35480.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35480.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35480.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35480.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35480.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35480.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35480.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35482){var self__ = this;
var _35482__$1 = this;return self__.meta35481;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35482,meta35481__$1){var self__ = this;
var _35482__$1 = this;return (new cljs.core.async.t35480(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta35481__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35480 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35480(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35481){return (new cljs.core.async.t35480(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta35481));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35480(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__23780__auto___35589 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_35547){var state_val_35548 = (state_35547[1]);if((state_val_35548 === 7))
{var inst_35496 = (state_35547[7]);var inst_35501 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35496);var state_35547__$1 = state_35547;var statearr_35549_35590 = state_35547__$1;(statearr_35549_35590[2] = inst_35501);
(statearr_35549_35590[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 20))
{var inst_35511 = (state_35547[8]);var state_35547__$1 = state_35547;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35547__$1,23,out,inst_35511);
} else
{if((state_val_35548 === 1))
{var inst_35486 = (state_35547[9]);var inst_35486__$1 = calc_state.call(null);var inst_35487 = cljs.core.seq_QMARK_.call(null,inst_35486__$1);var state_35547__$1 = (function (){var statearr_35550 = state_35547;(statearr_35550[9] = inst_35486__$1);
return statearr_35550;
})();if(inst_35487)
{var statearr_35551_35591 = state_35547__$1;(statearr_35551_35591[1] = 2);
} else
{var statearr_35552_35592 = state_35547__$1;(statearr_35552_35592[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 4))
{var inst_35486 = (state_35547[9]);var inst_35492 = (state_35547[2]);var inst_35493 = cljs.core.get.call(null,inst_35492,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35494 = cljs.core.get.call(null,inst_35492,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35495 = cljs.core.get.call(null,inst_35492,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_35496 = inst_35486;var state_35547__$1 = (function (){var statearr_35553 = state_35547;(statearr_35553[10] = inst_35495);
(statearr_35553[11] = inst_35493);
(statearr_35553[7] = inst_35496);
(statearr_35553[12] = inst_35494);
return statearr_35553;
})();var statearr_35554_35593 = state_35547__$1;(statearr_35554_35593[2] = null);
(statearr_35554_35593[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 15))
{var state_35547__$1 = state_35547;var statearr_35555_35594 = state_35547__$1;(statearr_35555_35594[2] = null);
(statearr_35555_35594[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 21))
{var state_35547__$1 = state_35547;var statearr_35556_35595 = state_35547__$1;(statearr_35556_35595[2] = null);
(statearr_35556_35595[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 13))
{var inst_35543 = (state_35547[2]);var state_35547__$1 = state_35547;var statearr_35557_35596 = state_35547__$1;(statearr_35557_35596[2] = inst_35543);
(statearr_35557_35596[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 22))
{var inst_35504 = (state_35547[13]);var inst_35540 = (state_35547[2]);var inst_35496 = inst_35504;var state_35547__$1 = (function (){var statearr_35558 = state_35547;(statearr_35558[7] = inst_35496);
(statearr_35558[14] = inst_35540);
return statearr_35558;
})();var statearr_35559_35597 = state_35547__$1;(statearr_35559_35597[2] = null);
(statearr_35559_35597[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 6))
{var inst_35545 = (state_35547[2]);var state_35547__$1 = state_35547;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35547__$1,inst_35545);
} else
{if((state_val_35548 === 17))
{var inst_35526 = (state_35547[15]);var state_35547__$1 = state_35547;var statearr_35560_35598 = state_35547__$1;(statearr_35560_35598[2] = inst_35526);
(statearr_35560_35598[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 3))
{var inst_35486 = (state_35547[9]);var state_35547__$1 = state_35547;var statearr_35561_35599 = state_35547__$1;(statearr_35561_35599[2] = inst_35486);
(statearr_35561_35599[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 12))
{var inst_35507 = (state_35547[16]);var inst_35526 = (state_35547[15]);var inst_35512 = (state_35547[17]);var inst_35526__$1 = inst_35507.call(null,inst_35512);var state_35547__$1 = (function (){var statearr_35562 = state_35547;(statearr_35562[15] = inst_35526__$1);
return statearr_35562;
})();if(cljs.core.truth_(inst_35526__$1))
{var statearr_35563_35600 = state_35547__$1;(statearr_35563_35600[1] = 17);
} else
{var statearr_35564_35601 = state_35547__$1;(statearr_35564_35601[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 2))
{var inst_35486 = (state_35547[9]);var inst_35489 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35486);var state_35547__$1 = state_35547;var statearr_35565_35602 = state_35547__$1;(statearr_35565_35602[2] = inst_35489);
(statearr_35565_35602[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 23))
{var inst_35537 = (state_35547[2]);var state_35547__$1 = state_35547;var statearr_35566_35603 = state_35547__$1;(statearr_35566_35603[2] = inst_35537);
(statearr_35566_35603[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 19))
{var inst_35534 = (state_35547[2]);var state_35547__$1 = state_35547;if(cljs.core.truth_(inst_35534))
{var statearr_35567_35604 = state_35547__$1;(statearr_35567_35604[1] = 20);
} else
{var statearr_35568_35605 = state_35547__$1;(statearr_35568_35605[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 11))
{var inst_35511 = (state_35547[8]);var inst_35517 = (inst_35511 == null);var state_35547__$1 = state_35547;if(cljs.core.truth_(inst_35517))
{var statearr_35569_35606 = state_35547__$1;(statearr_35569_35606[1] = 14);
} else
{var statearr_35570_35607 = state_35547__$1;(statearr_35570_35607[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 9))
{var inst_35504 = (state_35547[13]);var inst_35504__$1 = (state_35547[2]);var inst_35505 = cljs.core.get.call(null,inst_35504__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35506 = cljs.core.get.call(null,inst_35504__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35507 = cljs.core.get.call(null,inst_35504__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_35547__$1 = (function (){var statearr_35571 = state_35547;(statearr_35571[16] = inst_35507);
(statearr_35571[18] = inst_35506);
(statearr_35571[13] = inst_35504__$1);
return statearr_35571;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35547__$1,10,inst_35505);
} else
{if((state_val_35548 === 5))
{var inst_35496 = (state_35547[7]);var inst_35499 = cljs.core.seq_QMARK_.call(null,inst_35496);var state_35547__$1 = state_35547;if(inst_35499)
{var statearr_35572_35608 = state_35547__$1;(statearr_35572_35608[1] = 7);
} else
{var statearr_35573_35609 = state_35547__$1;(statearr_35573_35609[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 14))
{var inst_35512 = (state_35547[17]);var inst_35519 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35512);var state_35547__$1 = state_35547;var statearr_35574_35610 = state_35547__$1;(statearr_35574_35610[2] = inst_35519);
(statearr_35574_35610[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 16))
{var inst_35522 = (state_35547[2]);var inst_35523 = calc_state.call(null);var inst_35496 = inst_35523;var state_35547__$1 = (function (){var statearr_35575 = state_35547;(statearr_35575[7] = inst_35496);
(statearr_35575[19] = inst_35522);
return statearr_35575;
})();var statearr_35576_35611 = state_35547__$1;(statearr_35576_35611[2] = null);
(statearr_35576_35611[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 10))
{var inst_35511 = (state_35547[8]);var inst_35512 = (state_35547[17]);var inst_35510 = (state_35547[2]);var inst_35511__$1 = cljs.core.nth.call(null,inst_35510,0,null);var inst_35512__$1 = cljs.core.nth.call(null,inst_35510,1,null);var inst_35513 = (inst_35511__$1 == null);var inst_35514 = cljs.core._EQ_.call(null,inst_35512__$1,change);var inst_35515 = (inst_35513) || (inst_35514);var state_35547__$1 = (function (){var statearr_35577 = state_35547;(statearr_35577[8] = inst_35511__$1);
(statearr_35577[17] = inst_35512__$1);
return statearr_35577;
})();if(cljs.core.truth_(inst_35515))
{var statearr_35578_35612 = state_35547__$1;(statearr_35578_35612[1] = 11);
} else
{var statearr_35579_35613 = state_35547__$1;(statearr_35579_35613[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 18))
{var inst_35507 = (state_35547[16]);var inst_35506 = (state_35547[18]);var inst_35512 = (state_35547[17]);var inst_35529 = cljs.core.empty_QMARK_.call(null,inst_35507);var inst_35530 = inst_35506.call(null,inst_35512);var inst_35531 = cljs.core.not.call(null,inst_35530);var inst_35532 = (inst_35529) && (inst_35531);var state_35547__$1 = state_35547;var statearr_35580_35614 = state_35547__$1;(statearr_35580_35614[2] = inst_35532);
(statearr_35580_35614[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35548 === 8))
{var inst_35496 = (state_35547[7]);var state_35547__$1 = state_35547;var statearr_35581_35615 = state_35547__$1;(statearr_35581_35615[2] = inst_35496);
(statearr_35581_35615[1] = 9);
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
var state_machine__23717__auto____0 = (function (){var statearr_35585 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35585[0] = state_machine__23717__auto__);
(statearr_35585[1] = 1);
return statearr_35585;
});
var state_machine__23717__auto____1 = (function (state_35547){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_35547);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e35586){if((e35586 instanceof Object))
{var ex__23720__auto__ = e35586;var statearr_35587_35616 = state_35547;(statearr_35587_35616[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35547);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35586;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35617 = state_35547;
state_35547 = G__35617;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_35547){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_35547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_35588 = f__23781__auto__.call(null);(statearr_35588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___35589);
return statearr_35588;
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
cljs.core.async.Pub = (function (){var obj35619 = {};return obj35619;
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
return (function (p1__35620_SHARP_){if(cljs.core.truth_(p1__35620_SHARP_.call(null,topic)))
{return p1__35620_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35620_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14982__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35745 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35745 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35746){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35746 = meta35746;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35745.cljs$lang$type = true;
cljs.core.async.t35745.cljs$lang$ctorStr = "cljs.core.async/t35745";
cljs.core.async.t35745.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t35745");
});})(mults,ensure_mult))
;
cljs.core.async.t35745.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35745.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35745.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35745.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35745.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35745.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35745.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35747){var self__ = this;
var _35747__$1 = this;return self__.meta35746;
});})(mults,ensure_mult))
;
cljs.core.async.t35745.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35747,meta35746__$1){var self__ = this;
var _35747__$1 = this;return (new cljs.core.async.t35745(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35746__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35745 = ((function (mults,ensure_mult){
return (function __GT_t35745(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35746){return (new cljs.core.async.t35745(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35746));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35745(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__23780__auto___35869 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_35821){var state_val_35822 = (state_35821[1]);if((state_val_35822 === 7))
{var inst_35817 = (state_35821[2]);var state_35821__$1 = state_35821;var statearr_35823_35870 = state_35821__$1;(statearr_35823_35870[2] = inst_35817);
(statearr_35823_35870[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 20))
{var state_35821__$1 = state_35821;var statearr_35824_35871 = state_35821__$1;(statearr_35824_35871[2] = null);
(statearr_35824_35871[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 1))
{var state_35821__$1 = state_35821;var statearr_35825_35872 = state_35821__$1;(statearr_35825_35872[2] = null);
(statearr_35825_35872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 24))
{var inst_35750 = (state_35821[7]);var inst_35800 = (state_35821[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35821,23,Object,null,22);var inst_35807 = cljs.core.async.muxch_STAR_.call(null,inst_35800);var state_35821__$1 = state_35821;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35821__$1,25,inst_35807,inst_35750);
} else
{if((state_val_35822 === 4))
{var inst_35750 = (state_35821[7]);var inst_35750__$1 = (state_35821[2]);var inst_35751 = (inst_35750__$1 == null);var state_35821__$1 = (function (){var statearr_35826 = state_35821;(statearr_35826[7] = inst_35750__$1);
return statearr_35826;
})();if(cljs.core.truth_(inst_35751))
{var statearr_35827_35873 = state_35821__$1;(statearr_35827_35873[1] = 5);
} else
{var statearr_35828_35874 = state_35821__$1;(statearr_35828_35874[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 15))
{var inst_35792 = (state_35821[2]);var state_35821__$1 = state_35821;var statearr_35829_35875 = state_35821__$1;(statearr_35829_35875[2] = inst_35792);
(statearr_35829_35875[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 21))
{var inst_35814 = (state_35821[2]);var state_35821__$1 = (function (){var statearr_35830 = state_35821;(statearr_35830[9] = inst_35814);
return statearr_35830;
})();var statearr_35831_35876 = state_35821__$1;(statearr_35831_35876[2] = null);
(statearr_35831_35876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 13))
{var inst_35774 = (state_35821[10]);var inst_35776 = cljs.core.chunked_seq_QMARK_.call(null,inst_35774);var state_35821__$1 = state_35821;if(inst_35776)
{var statearr_35832_35877 = state_35821__$1;(statearr_35832_35877[1] = 16);
} else
{var statearr_35833_35878 = state_35821__$1;(statearr_35833_35878[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 22))
{var inst_35811 = (state_35821[2]);var state_35821__$1 = state_35821;var statearr_35834_35879 = state_35821__$1;(statearr_35834_35879[2] = inst_35811);
(statearr_35834_35879[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 6))
{var inst_35750 = (state_35821[7]);var inst_35798 = (state_35821[11]);var inst_35800 = (state_35821[8]);var inst_35798__$1 = topic_fn.call(null,inst_35750);var inst_35799 = cljs.core.deref.call(null,mults);var inst_35800__$1 = cljs.core.get.call(null,inst_35799,inst_35798__$1);var state_35821__$1 = (function (){var statearr_35835 = state_35821;(statearr_35835[11] = inst_35798__$1);
(statearr_35835[8] = inst_35800__$1);
return statearr_35835;
})();if(cljs.core.truth_(inst_35800__$1))
{var statearr_35836_35880 = state_35821__$1;(statearr_35836_35880[1] = 19);
} else
{var statearr_35837_35881 = state_35821__$1;(statearr_35837_35881[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 25))
{var inst_35809 = (state_35821[2]);var state_35821__$1 = state_35821;var statearr_35838_35882 = state_35821__$1;(statearr_35838_35882[2] = inst_35809);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35821__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 17))
{var inst_35774 = (state_35821[10]);var inst_35783 = cljs.core.first.call(null,inst_35774);var inst_35784 = cljs.core.async.muxch_STAR_.call(null,inst_35783);var inst_35785 = cljs.core.async.close_BANG_.call(null,inst_35784);var inst_35786 = cljs.core.next.call(null,inst_35774);var inst_35760 = inst_35786;var inst_35761 = null;var inst_35762 = 0;var inst_35763 = 0;var state_35821__$1 = (function (){var statearr_35839 = state_35821;(statearr_35839[12] = inst_35762);
(statearr_35839[13] = inst_35760);
(statearr_35839[14] = inst_35761);
(statearr_35839[15] = inst_35763);
(statearr_35839[16] = inst_35785);
return statearr_35839;
})();var statearr_35840_35883 = state_35821__$1;(statearr_35840_35883[2] = null);
(statearr_35840_35883[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 3))
{var inst_35819 = (state_35821[2]);var state_35821__$1 = state_35821;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35821__$1,inst_35819);
} else
{if((state_val_35822 === 12))
{var inst_35794 = (state_35821[2]);var state_35821__$1 = state_35821;var statearr_35841_35884 = state_35821__$1;(statearr_35841_35884[2] = inst_35794);
(statearr_35841_35884[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 2))
{var state_35821__$1 = state_35821;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35821__$1,4,ch);
} else
{if((state_val_35822 === 23))
{var inst_35798 = (state_35821[11]);var inst_35802 = (state_35821[2]);var inst_35803 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35798);var state_35821__$1 = (function (){var statearr_35842 = state_35821;(statearr_35842[17] = inst_35802);
return statearr_35842;
})();var statearr_35843_35885 = state_35821__$1;(statearr_35843_35885[2] = inst_35803);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35821__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 19))
{var state_35821__$1 = state_35821;var statearr_35844_35886 = state_35821__$1;(statearr_35844_35886[2] = null);
(statearr_35844_35886[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 11))
{var inst_35760 = (state_35821[13]);var inst_35774 = (state_35821[10]);var inst_35774__$1 = cljs.core.seq.call(null,inst_35760);var state_35821__$1 = (function (){var statearr_35845 = state_35821;(statearr_35845[10] = inst_35774__$1);
return statearr_35845;
})();if(inst_35774__$1)
{var statearr_35846_35887 = state_35821__$1;(statearr_35846_35887[1] = 13);
} else
{var statearr_35847_35888 = state_35821__$1;(statearr_35847_35888[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 9))
{var inst_35796 = (state_35821[2]);var state_35821__$1 = state_35821;var statearr_35848_35889 = state_35821__$1;(statearr_35848_35889[2] = inst_35796);
(statearr_35848_35889[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 5))
{var inst_35757 = cljs.core.deref.call(null,mults);var inst_35758 = cljs.core.vals.call(null,inst_35757);var inst_35759 = cljs.core.seq.call(null,inst_35758);var inst_35760 = inst_35759;var inst_35761 = null;var inst_35762 = 0;var inst_35763 = 0;var state_35821__$1 = (function (){var statearr_35849 = state_35821;(statearr_35849[12] = inst_35762);
(statearr_35849[13] = inst_35760);
(statearr_35849[14] = inst_35761);
(statearr_35849[15] = inst_35763);
return statearr_35849;
})();var statearr_35850_35890 = state_35821__$1;(statearr_35850_35890[2] = null);
(statearr_35850_35890[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 14))
{var state_35821__$1 = state_35821;var statearr_35854_35891 = state_35821__$1;(statearr_35854_35891[2] = null);
(statearr_35854_35891[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 16))
{var inst_35774 = (state_35821[10]);var inst_35778 = cljs.core.chunk_first.call(null,inst_35774);var inst_35779 = cljs.core.chunk_rest.call(null,inst_35774);var inst_35780 = cljs.core.count.call(null,inst_35778);var inst_35760 = inst_35779;var inst_35761 = inst_35778;var inst_35762 = inst_35780;var inst_35763 = 0;var state_35821__$1 = (function (){var statearr_35855 = state_35821;(statearr_35855[12] = inst_35762);
(statearr_35855[13] = inst_35760);
(statearr_35855[14] = inst_35761);
(statearr_35855[15] = inst_35763);
return statearr_35855;
})();var statearr_35856_35892 = state_35821__$1;(statearr_35856_35892[2] = null);
(statearr_35856_35892[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 10))
{var inst_35762 = (state_35821[12]);var inst_35760 = (state_35821[13]);var inst_35761 = (state_35821[14]);var inst_35763 = (state_35821[15]);var inst_35768 = cljs.core._nth.call(null,inst_35761,inst_35763);var inst_35769 = cljs.core.async.muxch_STAR_.call(null,inst_35768);var inst_35770 = cljs.core.async.close_BANG_.call(null,inst_35769);var inst_35771 = (inst_35763 + 1);var tmp35851 = inst_35762;var tmp35852 = inst_35760;var tmp35853 = inst_35761;var inst_35760__$1 = tmp35852;var inst_35761__$1 = tmp35853;var inst_35762__$1 = tmp35851;var inst_35763__$1 = inst_35771;var state_35821__$1 = (function (){var statearr_35857 = state_35821;(statearr_35857[12] = inst_35762__$1);
(statearr_35857[13] = inst_35760__$1);
(statearr_35857[14] = inst_35761__$1);
(statearr_35857[18] = inst_35770);
(statearr_35857[15] = inst_35763__$1);
return statearr_35857;
})();var statearr_35858_35893 = state_35821__$1;(statearr_35858_35893[2] = null);
(statearr_35858_35893[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 18))
{var inst_35789 = (state_35821[2]);var state_35821__$1 = state_35821;var statearr_35859_35894 = state_35821__$1;(statearr_35859_35894[2] = inst_35789);
(statearr_35859_35894[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35822 === 8))
{var inst_35762 = (state_35821[12]);var inst_35763 = (state_35821[15]);var inst_35765 = (inst_35763 < inst_35762);var inst_35766 = inst_35765;var state_35821__$1 = state_35821;if(cljs.core.truth_(inst_35766))
{var statearr_35860_35895 = state_35821__$1;(statearr_35860_35895[1] = 10);
} else
{var statearr_35861_35896 = state_35821__$1;(statearr_35861_35896[1] = 11);
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
var state_machine__23717__auto____0 = (function (){var statearr_35865 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35865[0] = state_machine__23717__auto__);
(statearr_35865[1] = 1);
return statearr_35865;
});
var state_machine__23717__auto____1 = (function (state_35821){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_35821);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e35866){if((e35866 instanceof Object))
{var ex__23720__auto__ = e35866;var statearr_35867_35897 = state_35821;(statearr_35867_35897[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35821);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35866;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35898 = state_35821;
state_35821 = G__35898;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_35821){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_35821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_35868 = f__23781__auto__.call(null);(statearr_35868[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___35869);
return statearr_35868;
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
,cljs.core.range.call(null,cnt));var c__23780__auto___36035 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_36005){var state_val_36006 = (state_36005[1]);if((state_val_36006 === 7))
{var state_36005__$1 = state_36005;var statearr_36007_36036 = state_36005__$1;(statearr_36007_36036[2] = null);
(statearr_36007_36036[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36006 === 1))
{var state_36005__$1 = state_36005;var statearr_36008_36037 = state_36005__$1;(statearr_36008_36037[2] = null);
(statearr_36008_36037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36006 === 4))
{var inst_35969 = (state_36005[7]);var inst_35971 = (inst_35969 < cnt);var state_36005__$1 = state_36005;if(cljs.core.truth_(inst_35971))
{var statearr_36009_36038 = state_36005__$1;(statearr_36009_36038[1] = 6);
} else
{var statearr_36010_36039 = state_36005__$1;(statearr_36010_36039[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36006 === 15))
{var inst_36001 = (state_36005[2]);var state_36005__$1 = state_36005;var statearr_36011_36040 = state_36005__$1;(statearr_36011_36040[2] = inst_36001);
(statearr_36011_36040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36006 === 13))
{var inst_35994 = cljs.core.async.close_BANG_.call(null,out);var state_36005__$1 = state_36005;var statearr_36012_36041 = state_36005__$1;(statearr_36012_36041[2] = inst_35994);
(statearr_36012_36041[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36006 === 6))
{var state_36005__$1 = state_36005;var statearr_36013_36042 = state_36005__$1;(statearr_36013_36042[2] = null);
(statearr_36013_36042[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36006 === 3))
{var inst_36003 = (state_36005[2]);var state_36005__$1 = state_36005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36005__$1,inst_36003);
} else
{if((state_val_36006 === 12))
{var inst_35991 = (state_36005[8]);var inst_35991__$1 = (state_36005[2]);var inst_35992 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35991__$1);var state_36005__$1 = (function (){var statearr_36014 = state_36005;(statearr_36014[8] = inst_35991__$1);
return statearr_36014;
})();if(cljs.core.truth_(inst_35992))
{var statearr_36015_36043 = state_36005__$1;(statearr_36015_36043[1] = 13);
} else
{var statearr_36016_36044 = state_36005__$1;(statearr_36016_36044[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36006 === 2))
{var inst_35968 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_35969 = 0;var state_36005__$1 = (function (){var statearr_36017 = state_36005;(statearr_36017[7] = inst_35969);
(statearr_36017[9] = inst_35968);
return statearr_36017;
})();var statearr_36018_36045 = state_36005__$1;(statearr_36018_36045[2] = null);
(statearr_36018_36045[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36006 === 11))
{var inst_35969 = (state_36005[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36005,10,Object,null,9);var inst_35978 = chs__$1.call(null,inst_35969);var inst_35979 = done.call(null,inst_35969);var inst_35980 = cljs.core.async.take_BANG_.call(null,inst_35978,inst_35979);var state_36005__$1 = state_36005;var statearr_36019_36046 = state_36005__$1;(statearr_36019_36046[2] = inst_35980);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36005__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36006 === 9))
{var inst_35969 = (state_36005[7]);var inst_35982 = (state_36005[2]);var inst_35983 = (inst_35969 + 1);var inst_35969__$1 = inst_35983;var state_36005__$1 = (function (){var statearr_36020 = state_36005;(statearr_36020[7] = inst_35969__$1);
(statearr_36020[10] = inst_35982);
return statearr_36020;
})();var statearr_36021_36047 = state_36005__$1;(statearr_36021_36047[2] = null);
(statearr_36021_36047[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36006 === 5))
{var inst_35989 = (state_36005[2]);var state_36005__$1 = (function (){var statearr_36022 = state_36005;(statearr_36022[11] = inst_35989);
return statearr_36022;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36005__$1,12,dchan);
} else
{if((state_val_36006 === 14))
{var inst_35991 = (state_36005[8]);var inst_35996 = cljs.core.apply.call(null,f,inst_35991);var state_36005__$1 = state_36005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36005__$1,16,out,inst_35996);
} else
{if((state_val_36006 === 16))
{var inst_35998 = (state_36005[2]);var state_36005__$1 = (function (){var statearr_36023 = state_36005;(statearr_36023[12] = inst_35998);
return statearr_36023;
})();var statearr_36024_36048 = state_36005__$1;(statearr_36024_36048[2] = null);
(statearr_36024_36048[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36006 === 10))
{var inst_35973 = (state_36005[2]);var inst_35974 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36005__$1 = (function (){var statearr_36025 = state_36005;(statearr_36025[13] = inst_35973);
return statearr_36025;
})();var statearr_36026_36049 = state_36005__$1;(statearr_36026_36049[2] = inst_35974);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36005__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36006 === 8))
{var inst_35987 = (state_36005[2]);var state_36005__$1 = state_36005;var statearr_36027_36050 = state_36005__$1;(statearr_36027_36050[2] = inst_35987);
(statearr_36027_36050[1] = 5);
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
var state_machine__23717__auto____0 = (function (){var statearr_36031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36031[0] = state_machine__23717__auto__);
(statearr_36031[1] = 1);
return statearr_36031;
});
var state_machine__23717__auto____1 = (function (state_36005){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_36005);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e36032){if((e36032 instanceof Object))
{var ex__23720__auto__ = e36032;var statearr_36033_36051 = state_36005;(statearr_36033_36051[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36052 = state_36005;
state_36005 = G__36052;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_36005){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_36005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_36034 = f__23781__auto__.call(null);(statearr_36034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___36035);
return statearr_36034;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___36160 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_36136){var state_val_36137 = (state_36136[1]);if((state_val_36137 === 7))
{var inst_36115 = (state_36136[7]);var inst_36116 = (state_36136[8]);var inst_36115__$1 = (state_36136[2]);var inst_36116__$1 = cljs.core.nth.call(null,inst_36115__$1,0,null);var inst_36117 = cljs.core.nth.call(null,inst_36115__$1,1,null);var inst_36118 = (inst_36116__$1 == null);var state_36136__$1 = (function (){var statearr_36138 = state_36136;(statearr_36138[7] = inst_36115__$1);
(statearr_36138[9] = inst_36117);
(statearr_36138[8] = inst_36116__$1);
return statearr_36138;
})();if(cljs.core.truth_(inst_36118))
{var statearr_36139_36161 = state_36136__$1;(statearr_36139_36161[1] = 8);
} else
{var statearr_36140_36162 = state_36136__$1;(statearr_36140_36162[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36137 === 1))
{var inst_36107 = cljs.core.vec.call(null,chs);var inst_36108 = inst_36107;var state_36136__$1 = (function (){var statearr_36141 = state_36136;(statearr_36141[10] = inst_36108);
return statearr_36141;
})();var statearr_36142_36163 = state_36136__$1;(statearr_36142_36163[2] = null);
(statearr_36142_36163[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36137 === 4))
{var inst_36108 = (state_36136[10]);var state_36136__$1 = state_36136;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36136__$1,7,inst_36108);
} else
{if((state_val_36137 === 6))
{var inst_36132 = (state_36136[2]);var state_36136__$1 = state_36136;var statearr_36143_36164 = state_36136__$1;(statearr_36143_36164[2] = inst_36132);
(statearr_36143_36164[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36137 === 3))
{var inst_36134 = (state_36136[2]);var state_36136__$1 = state_36136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36136__$1,inst_36134);
} else
{if((state_val_36137 === 2))
{var inst_36108 = (state_36136[10]);var inst_36110 = cljs.core.count.call(null,inst_36108);var inst_36111 = (inst_36110 > 0);var state_36136__$1 = state_36136;if(cljs.core.truth_(inst_36111))
{var statearr_36145_36165 = state_36136__$1;(statearr_36145_36165[1] = 4);
} else
{var statearr_36146_36166 = state_36136__$1;(statearr_36146_36166[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36137 === 11))
{var inst_36108 = (state_36136[10]);var inst_36125 = (state_36136[2]);var tmp36144 = inst_36108;var inst_36108__$1 = tmp36144;var state_36136__$1 = (function (){var statearr_36147 = state_36136;(statearr_36147[11] = inst_36125);
(statearr_36147[10] = inst_36108__$1);
return statearr_36147;
})();var statearr_36148_36167 = state_36136__$1;(statearr_36148_36167[2] = null);
(statearr_36148_36167[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36137 === 9))
{var inst_36116 = (state_36136[8]);var state_36136__$1 = state_36136;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36136__$1,11,out,inst_36116);
} else
{if((state_val_36137 === 5))
{var inst_36130 = cljs.core.async.close_BANG_.call(null,out);var state_36136__$1 = state_36136;var statearr_36149_36168 = state_36136__$1;(statearr_36149_36168[2] = inst_36130);
(statearr_36149_36168[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36137 === 10))
{var inst_36128 = (state_36136[2]);var state_36136__$1 = state_36136;var statearr_36150_36169 = state_36136__$1;(statearr_36150_36169[2] = inst_36128);
(statearr_36150_36169[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36137 === 8))
{var inst_36115 = (state_36136[7]);var inst_36117 = (state_36136[9]);var inst_36108 = (state_36136[10]);var inst_36116 = (state_36136[8]);var inst_36120 = (function (){var c = inst_36117;var v = inst_36116;var vec__36113 = inst_36115;var cs = inst_36108;return ((function (c,v,vec__36113,cs,inst_36115,inst_36117,inst_36108,inst_36116,state_val_36137){
return (function (p1__36053_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36053_SHARP_);
});
;})(c,v,vec__36113,cs,inst_36115,inst_36117,inst_36108,inst_36116,state_val_36137))
})();var inst_36121 = cljs.core.filterv.call(null,inst_36120,inst_36108);var inst_36108__$1 = inst_36121;var state_36136__$1 = (function (){var statearr_36151 = state_36136;(statearr_36151[10] = inst_36108__$1);
return statearr_36151;
})();var statearr_36152_36170 = state_36136__$1;(statearr_36152_36170[2] = null);
(statearr_36152_36170[1] = 2);
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
var state_machine__23717__auto____0 = (function (){var statearr_36156 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36156[0] = state_machine__23717__auto__);
(statearr_36156[1] = 1);
return statearr_36156;
});
var state_machine__23717__auto____1 = (function (state_36136){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_36136);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e36157){if((e36157 instanceof Object))
{var ex__23720__auto__ = e36157;var statearr_36158_36171 = state_36136;(statearr_36158_36171[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36136);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36157;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36172 = state_36136;
state_36136 = G__36172;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_36136){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_36136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_36159 = f__23781__auto__.call(null);(statearr_36159[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___36160);
return statearr_36159;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___36265 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_36242){var state_val_36243 = (state_36242[1]);if((state_val_36243 === 7))
{var inst_36224 = (state_36242[7]);var inst_36224__$1 = (state_36242[2]);var inst_36225 = (inst_36224__$1 == null);var inst_36226 = cljs.core.not.call(null,inst_36225);var state_36242__$1 = (function (){var statearr_36244 = state_36242;(statearr_36244[7] = inst_36224__$1);
return statearr_36244;
})();if(inst_36226)
{var statearr_36245_36266 = state_36242__$1;(statearr_36245_36266[1] = 8);
} else
{var statearr_36246_36267 = state_36242__$1;(statearr_36246_36267[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36243 === 1))
{var inst_36219 = 0;var state_36242__$1 = (function (){var statearr_36247 = state_36242;(statearr_36247[8] = inst_36219);
return statearr_36247;
})();var statearr_36248_36268 = state_36242__$1;(statearr_36248_36268[2] = null);
(statearr_36248_36268[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36243 === 4))
{var state_36242__$1 = state_36242;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36242__$1,7,ch);
} else
{if((state_val_36243 === 6))
{var inst_36237 = (state_36242[2]);var state_36242__$1 = state_36242;var statearr_36249_36269 = state_36242__$1;(statearr_36249_36269[2] = inst_36237);
(statearr_36249_36269[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36243 === 3))
{var inst_36239 = (state_36242[2]);var inst_36240 = cljs.core.async.close_BANG_.call(null,out);var state_36242__$1 = (function (){var statearr_36250 = state_36242;(statearr_36250[9] = inst_36239);
return statearr_36250;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36242__$1,inst_36240);
} else
{if((state_val_36243 === 2))
{var inst_36219 = (state_36242[8]);var inst_36221 = (inst_36219 < n);var state_36242__$1 = state_36242;if(cljs.core.truth_(inst_36221))
{var statearr_36251_36270 = state_36242__$1;(statearr_36251_36270[1] = 4);
} else
{var statearr_36252_36271 = state_36242__$1;(statearr_36252_36271[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36243 === 11))
{var inst_36219 = (state_36242[8]);var inst_36229 = (state_36242[2]);var inst_36230 = (inst_36219 + 1);var inst_36219__$1 = inst_36230;var state_36242__$1 = (function (){var statearr_36253 = state_36242;(statearr_36253[10] = inst_36229);
(statearr_36253[8] = inst_36219__$1);
return statearr_36253;
})();var statearr_36254_36272 = state_36242__$1;(statearr_36254_36272[2] = null);
(statearr_36254_36272[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36243 === 9))
{var state_36242__$1 = state_36242;var statearr_36255_36273 = state_36242__$1;(statearr_36255_36273[2] = null);
(statearr_36255_36273[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36243 === 5))
{var state_36242__$1 = state_36242;var statearr_36256_36274 = state_36242__$1;(statearr_36256_36274[2] = null);
(statearr_36256_36274[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36243 === 10))
{var inst_36234 = (state_36242[2]);var state_36242__$1 = state_36242;var statearr_36257_36275 = state_36242__$1;(statearr_36257_36275[2] = inst_36234);
(statearr_36257_36275[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36243 === 8))
{var inst_36224 = (state_36242[7]);var state_36242__$1 = state_36242;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36242__$1,11,out,inst_36224);
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
var state_machine__23717__auto____0 = (function (){var statearr_36261 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36261[0] = state_machine__23717__auto__);
(statearr_36261[1] = 1);
return statearr_36261;
});
var state_machine__23717__auto____1 = (function (state_36242){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_36242);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e36262){if((e36262 instanceof Object))
{var ex__23720__auto__ = e36262;var statearr_36263_36276 = state_36242;(statearr_36263_36276[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36242);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36262;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36277 = state_36242;
state_36242 = G__36277;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_36242){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_36242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_36264 = f__23781__auto__.call(null);(statearr_36264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___36265);
return statearr_36264;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___36374 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_36349){var state_val_36350 = (state_36349[1]);if((state_val_36350 === 7))
{var inst_36344 = (state_36349[2]);var state_36349__$1 = state_36349;var statearr_36351_36375 = state_36349__$1;(statearr_36351_36375[2] = inst_36344);
(statearr_36351_36375[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36350 === 1))
{var inst_36326 = null;var state_36349__$1 = (function (){var statearr_36352 = state_36349;(statearr_36352[7] = inst_36326);
return statearr_36352;
})();var statearr_36353_36376 = state_36349__$1;(statearr_36353_36376[2] = null);
(statearr_36353_36376[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36350 === 4))
{var inst_36329 = (state_36349[8]);var inst_36329__$1 = (state_36349[2]);var inst_36330 = (inst_36329__$1 == null);var inst_36331 = cljs.core.not.call(null,inst_36330);var state_36349__$1 = (function (){var statearr_36354 = state_36349;(statearr_36354[8] = inst_36329__$1);
return statearr_36354;
})();if(inst_36331)
{var statearr_36355_36377 = state_36349__$1;(statearr_36355_36377[1] = 5);
} else
{var statearr_36356_36378 = state_36349__$1;(statearr_36356_36378[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36350 === 6))
{var state_36349__$1 = state_36349;var statearr_36357_36379 = state_36349__$1;(statearr_36357_36379[2] = null);
(statearr_36357_36379[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36350 === 3))
{var inst_36346 = (state_36349[2]);var inst_36347 = cljs.core.async.close_BANG_.call(null,out);var state_36349__$1 = (function (){var statearr_36358 = state_36349;(statearr_36358[9] = inst_36346);
return statearr_36358;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36349__$1,inst_36347);
} else
{if((state_val_36350 === 2))
{var state_36349__$1 = state_36349;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36349__$1,4,ch);
} else
{if((state_val_36350 === 11))
{var inst_36329 = (state_36349[8]);var inst_36338 = (state_36349[2]);var inst_36326 = inst_36329;var state_36349__$1 = (function (){var statearr_36359 = state_36349;(statearr_36359[7] = inst_36326);
(statearr_36359[10] = inst_36338);
return statearr_36359;
})();var statearr_36360_36380 = state_36349__$1;(statearr_36360_36380[2] = null);
(statearr_36360_36380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36350 === 9))
{var inst_36329 = (state_36349[8]);var state_36349__$1 = state_36349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36349__$1,11,out,inst_36329);
} else
{if((state_val_36350 === 5))
{var inst_36326 = (state_36349[7]);var inst_36329 = (state_36349[8]);var inst_36333 = cljs.core._EQ_.call(null,inst_36329,inst_36326);var state_36349__$1 = state_36349;if(inst_36333)
{var statearr_36362_36381 = state_36349__$1;(statearr_36362_36381[1] = 8);
} else
{var statearr_36363_36382 = state_36349__$1;(statearr_36363_36382[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36350 === 10))
{var inst_36341 = (state_36349[2]);var state_36349__$1 = state_36349;var statearr_36364_36383 = state_36349__$1;(statearr_36364_36383[2] = inst_36341);
(statearr_36364_36383[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36350 === 8))
{var inst_36326 = (state_36349[7]);var tmp36361 = inst_36326;var inst_36326__$1 = tmp36361;var state_36349__$1 = (function (){var statearr_36365 = state_36349;(statearr_36365[7] = inst_36326__$1);
return statearr_36365;
})();var statearr_36366_36384 = state_36349__$1;(statearr_36366_36384[2] = null);
(statearr_36366_36384[1] = 2);
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
var state_machine__23717__auto____0 = (function (){var statearr_36370 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36370[0] = state_machine__23717__auto__);
(statearr_36370[1] = 1);
return statearr_36370;
});
var state_machine__23717__auto____1 = (function (state_36349){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_36349);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e36371){if((e36371 instanceof Object))
{var ex__23720__auto__ = e36371;var statearr_36372_36385 = state_36349;(statearr_36372_36385[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36349);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36386 = state_36349;
state_36349 = G__36386;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_36349){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_36349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_36373 = f__23781__auto__.call(null);(statearr_36373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___36374);
return statearr_36373;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___36521 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_36491){var state_val_36492 = (state_36491[1]);if((state_val_36492 === 7))
{var inst_36487 = (state_36491[2]);var state_36491__$1 = state_36491;var statearr_36493_36522 = state_36491__$1;(statearr_36493_36522[2] = inst_36487);
(statearr_36493_36522[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 1))
{var inst_36454 = (new Array(n));var inst_36455 = inst_36454;var inst_36456 = 0;var state_36491__$1 = (function (){var statearr_36494 = state_36491;(statearr_36494[7] = inst_36456);
(statearr_36494[8] = inst_36455);
return statearr_36494;
})();var statearr_36495_36523 = state_36491__$1;(statearr_36495_36523[2] = null);
(statearr_36495_36523[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 4))
{var inst_36459 = (state_36491[9]);var inst_36459__$1 = (state_36491[2]);var inst_36460 = (inst_36459__$1 == null);var inst_36461 = cljs.core.not.call(null,inst_36460);var state_36491__$1 = (function (){var statearr_36496 = state_36491;(statearr_36496[9] = inst_36459__$1);
return statearr_36496;
})();if(inst_36461)
{var statearr_36497_36524 = state_36491__$1;(statearr_36497_36524[1] = 5);
} else
{var statearr_36498_36525 = state_36491__$1;(statearr_36498_36525[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 15))
{var inst_36481 = (state_36491[2]);var state_36491__$1 = state_36491;var statearr_36499_36526 = state_36491__$1;(statearr_36499_36526[2] = inst_36481);
(statearr_36499_36526[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 13))
{var state_36491__$1 = state_36491;var statearr_36500_36527 = state_36491__$1;(statearr_36500_36527[2] = null);
(statearr_36500_36527[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 6))
{var inst_36456 = (state_36491[7]);var inst_36477 = (inst_36456 > 0);var state_36491__$1 = state_36491;if(cljs.core.truth_(inst_36477))
{var statearr_36501_36528 = state_36491__$1;(statearr_36501_36528[1] = 12);
} else
{var statearr_36502_36529 = state_36491__$1;(statearr_36502_36529[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 3))
{var inst_36489 = (state_36491[2]);var state_36491__$1 = state_36491;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36491__$1,inst_36489);
} else
{if((state_val_36492 === 12))
{var inst_36455 = (state_36491[8]);var inst_36479 = cljs.core.vec.call(null,inst_36455);var state_36491__$1 = state_36491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36491__$1,15,out,inst_36479);
} else
{if((state_val_36492 === 2))
{var state_36491__$1 = state_36491;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36491__$1,4,ch);
} else
{if((state_val_36492 === 11))
{var inst_36471 = (state_36491[2]);var inst_36472 = (new Array(n));var inst_36455 = inst_36472;var inst_36456 = 0;var state_36491__$1 = (function (){var statearr_36503 = state_36491;(statearr_36503[10] = inst_36471);
(statearr_36503[7] = inst_36456);
(statearr_36503[8] = inst_36455);
return statearr_36503;
})();var statearr_36504_36530 = state_36491__$1;(statearr_36504_36530[2] = null);
(statearr_36504_36530[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 9))
{var inst_36455 = (state_36491[8]);var inst_36469 = cljs.core.vec.call(null,inst_36455);var state_36491__$1 = state_36491;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36491__$1,11,out,inst_36469);
} else
{if((state_val_36492 === 5))
{var inst_36456 = (state_36491[7]);var inst_36455 = (state_36491[8]);var inst_36459 = (state_36491[9]);var inst_36464 = (state_36491[11]);var inst_36463 = (inst_36455[inst_36456] = inst_36459);var inst_36464__$1 = (inst_36456 + 1);var inst_36465 = (inst_36464__$1 < n);var state_36491__$1 = (function (){var statearr_36505 = state_36491;(statearr_36505[12] = inst_36463);
(statearr_36505[11] = inst_36464__$1);
return statearr_36505;
})();if(cljs.core.truth_(inst_36465))
{var statearr_36506_36531 = state_36491__$1;(statearr_36506_36531[1] = 8);
} else
{var statearr_36507_36532 = state_36491__$1;(statearr_36507_36532[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 14))
{var inst_36484 = (state_36491[2]);var inst_36485 = cljs.core.async.close_BANG_.call(null,out);var state_36491__$1 = (function (){var statearr_36509 = state_36491;(statearr_36509[13] = inst_36484);
return statearr_36509;
})();var statearr_36510_36533 = state_36491__$1;(statearr_36510_36533[2] = inst_36485);
(statearr_36510_36533[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 10))
{var inst_36475 = (state_36491[2]);var state_36491__$1 = state_36491;var statearr_36511_36534 = state_36491__$1;(statearr_36511_36534[2] = inst_36475);
(statearr_36511_36534[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36492 === 8))
{var inst_36455 = (state_36491[8]);var inst_36464 = (state_36491[11]);var tmp36508 = inst_36455;var inst_36455__$1 = tmp36508;var inst_36456 = inst_36464;var state_36491__$1 = (function (){var statearr_36512 = state_36491;(statearr_36512[7] = inst_36456);
(statearr_36512[8] = inst_36455__$1);
return statearr_36512;
})();var statearr_36513_36535 = state_36491__$1;(statearr_36513_36535[2] = null);
(statearr_36513_36535[1] = 2);
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
var state_machine__23717__auto____0 = (function (){var statearr_36517 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36517[0] = state_machine__23717__auto__);
(statearr_36517[1] = 1);
return statearr_36517;
});
var state_machine__23717__auto____1 = (function (state_36491){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_36491);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e36518){if((e36518 instanceof Object))
{var ex__23720__auto__ = e36518;var statearr_36519_36536 = state_36491;(statearr_36519_36536[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36491);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36518;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36537 = state_36491;
state_36491 = G__36537;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_36491){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_36491);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_36520 = f__23781__auto__.call(null);(statearr_36520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___36521);
return statearr_36520;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23780__auto___36680 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23781__auto__ = (function (){var switch__23716__auto__ = (function (state_36650){var state_val_36651 = (state_36650[1]);if((state_val_36651 === 7))
{var inst_36646 = (state_36650[2]);var state_36650__$1 = state_36650;var statearr_36652_36681 = state_36650__$1;(statearr_36652_36681[2] = inst_36646);
(statearr_36652_36681[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36651 === 1))
{var inst_36609 = [];var inst_36610 = inst_36609;var inst_36611 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_36650__$1 = (function (){var statearr_36653 = state_36650;(statearr_36653[7] = inst_36610);
(statearr_36653[8] = inst_36611);
return statearr_36653;
})();var statearr_36654_36682 = state_36650__$1;(statearr_36654_36682[2] = null);
(statearr_36654_36682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36651 === 4))
{var inst_36614 = (state_36650[9]);var inst_36614__$1 = (state_36650[2]);var inst_36615 = (inst_36614__$1 == null);var inst_36616 = cljs.core.not.call(null,inst_36615);var state_36650__$1 = (function (){var statearr_36655 = state_36650;(statearr_36655[9] = inst_36614__$1);
return statearr_36655;
})();if(inst_36616)
{var statearr_36656_36683 = state_36650__$1;(statearr_36656_36683[1] = 5);
} else
{var statearr_36657_36684 = state_36650__$1;(statearr_36657_36684[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36651 === 15))
{var inst_36640 = (state_36650[2]);var state_36650__$1 = state_36650;var statearr_36658_36685 = state_36650__$1;(statearr_36658_36685[2] = inst_36640);
(statearr_36658_36685[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36651 === 13))
{var state_36650__$1 = state_36650;var statearr_36659_36686 = state_36650__$1;(statearr_36659_36686[2] = null);
(statearr_36659_36686[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36651 === 6))
{var inst_36610 = (state_36650[7]);var inst_36635 = inst_36610.length;var inst_36636 = (inst_36635 > 0);var state_36650__$1 = state_36650;if(cljs.core.truth_(inst_36636))
{var statearr_36660_36687 = state_36650__$1;(statearr_36660_36687[1] = 12);
} else
{var statearr_36661_36688 = state_36650__$1;(statearr_36661_36688[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36651 === 3))
{var inst_36648 = (state_36650[2]);var state_36650__$1 = state_36650;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36650__$1,inst_36648);
} else
{if((state_val_36651 === 12))
{var inst_36610 = (state_36650[7]);var inst_36638 = cljs.core.vec.call(null,inst_36610);var state_36650__$1 = state_36650;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36650__$1,15,out,inst_36638);
} else
{if((state_val_36651 === 2))
{var state_36650__$1 = state_36650;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36650__$1,4,ch);
} else
{if((state_val_36651 === 11))
{var inst_36614 = (state_36650[9]);var inst_36618 = (state_36650[10]);var inst_36628 = (state_36650[2]);var inst_36629 = [];var inst_36630 = inst_36629.push(inst_36614);var inst_36610 = inst_36629;var inst_36611 = inst_36618;var state_36650__$1 = (function (){var statearr_36662 = state_36650;(statearr_36662[7] = inst_36610);
(statearr_36662[8] = inst_36611);
(statearr_36662[11] = inst_36628);
(statearr_36662[12] = inst_36630);
return statearr_36662;
})();var statearr_36663_36689 = state_36650__$1;(statearr_36663_36689[2] = null);
(statearr_36663_36689[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36651 === 9))
{var inst_36610 = (state_36650[7]);var inst_36626 = cljs.core.vec.call(null,inst_36610);var state_36650__$1 = state_36650;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36650__$1,11,out,inst_36626);
} else
{if((state_val_36651 === 5))
{var inst_36611 = (state_36650[8]);var inst_36614 = (state_36650[9]);var inst_36618 = (state_36650[10]);var inst_36618__$1 = f.call(null,inst_36614);var inst_36619 = cljs.core._EQ_.call(null,inst_36618__$1,inst_36611);var inst_36620 = cljs.core.keyword_identical_QMARK_.call(null,inst_36611,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_36621 = (inst_36619) || (inst_36620);var state_36650__$1 = (function (){var statearr_36664 = state_36650;(statearr_36664[10] = inst_36618__$1);
return statearr_36664;
})();if(cljs.core.truth_(inst_36621))
{var statearr_36665_36690 = state_36650__$1;(statearr_36665_36690[1] = 8);
} else
{var statearr_36666_36691 = state_36650__$1;(statearr_36666_36691[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36651 === 14))
{var inst_36643 = (state_36650[2]);var inst_36644 = cljs.core.async.close_BANG_.call(null,out);var state_36650__$1 = (function (){var statearr_36668 = state_36650;(statearr_36668[13] = inst_36643);
return statearr_36668;
})();var statearr_36669_36692 = state_36650__$1;(statearr_36669_36692[2] = inst_36644);
(statearr_36669_36692[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36651 === 10))
{var inst_36633 = (state_36650[2]);var state_36650__$1 = state_36650;var statearr_36670_36693 = state_36650__$1;(statearr_36670_36693[2] = inst_36633);
(statearr_36670_36693[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36651 === 8))
{var inst_36610 = (state_36650[7]);var inst_36614 = (state_36650[9]);var inst_36618 = (state_36650[10]);var inst_36623 = inst_36610.push(inst_36614);var tmp36667 = inst_36610;var inst_36610__$1 = tmp36667;var inst_36611 = inst_36618;var state_36650__$1 = (function (){var statearr_36671 = state_36650;(statearr_36671[7] = inst_36610__$1);
(statearr_36671[8] = inst_36611);
(statearr_36671[14] = inst_36623);
return statearr_36671;
})();var statearr_36672_36694 = state_36650__$1;(statearr_36672_36694[2] = null);
(statearr_36672_36694[1] = 2);
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
var state_machine__23717__auto____0 = (function (){var statearr_36676 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36676[0] = state_machine__23717__auto__);
(statearr_36676[1] = 1);
return statearr_36676;
});
var state_machine__23717__auto____1 = (function (state_36650){while(true){
var ret_value__23718__auto__ = (function (){try{while(true){
var result__23719__auto__ = switch__23716__auto__.call(null,state_36650);if(cljs.core.keyword_identical_QMARK_.call(null,result__23719__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23719__auto__;
}
break;
}
}catch (e36677){if((e36677 instanceof Object))
{var ex__23720__auto__ = e36677;var statearr_36678_36695 = state_36650;(statearr_36678_36695[5] = ex__23720__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36650);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36677;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23718__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36696 = state_36650;
state_36650 = G__36696;
continue;
}
} else
{return ret_value__23718__auto__;
}
break;
}
});
state_machine__23717__auto__ = function(state_36650){
switch(arguments.length){
case 0:
return state_machine__23717__auto____0.call(this);
case 1:
return state_machine__23717__auto____1.call(this,state_36650);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23717__auto____0;
state_machine__23717__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23717__auto____1;
return state_machine__23717__auto__;
})()
;})(switch__23716__auto__))
})();var state__23782__auto__ = (function (){var statearr_36679 = f__23781__auto__.call(null);(statearr_36679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23780__auto___36680);
return statearr_36679;
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

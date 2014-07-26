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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31667 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31667 = (function (f,fn_handler,meta31668){
this.f = f;
this.fn_handler = fn_handler;
this.meta31668 = meta31668;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31667.cljs$lang$type = true;
cljs.core.async.t31667.cljs$lang$ctorStr = "cljs.core.async/t31667";
cljs.core.async.t31667.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t31667");
});
cljs.core.async.t31667.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31667.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31667.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31667.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31669){var self__ = this;
var _31669__$1 = this;return self__.meta31668;
});
cljs.core.async.t31667.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31669,meta31668__$1){var self__ = this;
var _31669__$1 = this;return (new cljs.core.async.t31667(self__.f,self__.fn_handler,meta31668__$1));
});
cljs.core.async.__GT_t31667 = (function __GT_t31667(f__$1,fn_handler__$1,meta31668){return (new cljs.core.async.t31667(f__$1,fn_handler__$1,meta31668));
});
}
return (new cljs.core.async.t31667(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31671 = buff;if(G__31671)
{var bit__15632__auto__ = null;if(cljs.core.truth_((function (){var or__14982__auto__ = bit__15632__auto__;if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return G__31671.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31671.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31671);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31671);
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
{var val_31672 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_31672);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_31672);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15830__auto___31673 = n;var x_31674 = 0;while(true){
if((x_31674 < n__15830__auto___31673))
{(a[x_31674] = 0);
{
var G__31675 = (x_31674 + 1);
x_31674 = G__31675;
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
var G__31676 = (i + 1);
i = G__31676;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t31680 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31680 = (function (flag,alt_flag,meta31681){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31681 = meta31681;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31680.cljs$lang$type = true;
cljs.core.async.t31680.cljs$lang$ctorStr = "cljs.core.async/t31680";
cljs.core.async.t31680.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t31680");
});
cljs.core.async.t31680.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31680.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t31680.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t31680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31682){var self__ = this;
var _31682__$1 = this;return self__.meta31681;
});
cljs.core.async.t31680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31682,meta31681__$1){var self__ = this;
var _31682__$1 = this;return (new cljs.core.async.t31680(self__.flag,self__.alt_flag,meta31681__$1));
});
cljs.core.async.__GT_t31680 = (function __GT_t31680(flag__$1,alt_flag__$1,meta31681){return (new cljs.core.async.t31680(flag__$1,alt_flag__$1,meta31681));
});
}
return (new cljs.core.async.t31680(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31686 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31686 = (function (cb,flag,alt_handler,meta31687){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31687 = meta31687;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31686.cljs$lang$type = true;
cljs.core.async.t31686.cljs$lang$ctorStr = "cljs.core.async/t31686";
cljs.core.async.t31686.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t31686");
});
cljs.core.async.t31686.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31686.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t31686.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t31686.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31688){var self__ = this;
var _31688__$1 = this;return self__.meta31687;
});
cljs.core.async.t31686.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31688,meta31687__$1){var self__ = this;
var _31688__$1 = this;return (new cljs.core.async.t31686(self__.cb,self__.flag,self__.alt_handler,meta31687__$1));
});
cljs.core.async.__GT_t31686 = (function __GT_t31686(cb__$1,flag__$1,alt_handler__$1,meta31687){return (new cljs.core.async.t31686(cb__$1,flag__$1,alt_handler__$1,meta31687));
});
}
return (new cljs.core.async.t31686(cb,flag,alt_handler,null));
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
return (function (p1__31689_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31689_SHARP_,port], null));
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
var G__31690 = (i + 1);
i = G__31690;
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
var alts_BANG___delegate = function (ports,p__31691){var map__31693 = p__31691;var map__31693__$1 = ((cljs.core.seq_QMARK_.call(null,map__31693))?cljs.core.apply.call(null,cljs.core.hash_map,map__31693):map__31693);var opts = map__31693__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__31691 = null;if (arguments.length > 1) {
  p__31691 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31691);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31694){
var ports = cljs.core.first(arglist__31694);
var p__31691 = cljs.core.rest(arglist__31694);
return alts_BANG___delegate(ports,p__31691);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31702 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31702 = (function (ch,f,map_LT_,meta31703){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31703 = meta31703;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31702.cljs$lang$type = true;
cljs.core.async.t31702.cljs$lang$ctorStr = "cljs.core.async/t31702";
cljs.core.async.t31702.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t31702");
});
cljs.core.async.t31702.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31702.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t31702.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31702.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t31705 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31705 = (function (fn1,_,meta31703,ch,f,map_LT_,meta31706){
this.fn1 = fn1;
this._ = _;
this.meta31703 = meta31703;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31706 = meta31706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31705.cljs$lang$type = true;
cljs.core.async.t31705.cljs$lang$ctorStr = "cljs.core.async/t31705";
cljs.core.async.t31705.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t31705");
});
cljs.core.async.t31705.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t31705.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t31705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__31695_SHARP_){return f1.call(null,(((p1__31695_SHARP_ == null))?null:self__.f.call(null,p1__31695_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t31705.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31707){var self__ = this;
var _31707__$1 = this;return self__.meta31706;
});
cljs.core.async.t31705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31707,meta31706__$1){var self__ = this;
var _31707__$1 = this;return (new cljs.core.async.t31705(self__.fn1,self__._,self__.meta31703,self__.ch,self__.f,self__.map_LT_,meta31706__$1));
});
cljs.core.async.__GT_t31705 = (function __GT_t31705(fn1__$1,___$2,meta31703__$1,ch__$2,f__$2,map_LT___$2,meta31706){return (new cljs.core.async.t31705(fn1__$1,___$2,meta31703__$1,ch__$2,f__$2,map_LT___$2,meta31706));
});
}
return (new cljs.core.async.t31705(fn1,___$1,self__.meta31703,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t31702.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31702.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31702.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31704){var self__ = this;
var _31704__$1 = this;return self__.meta31703;
});
cljs.core.async.t31702.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31704,meta31703__$1){var self__ = this;
var _31704__$1 = this;return (new cljs.core.async.t31702(self__.ch,self__.f,self__.map_LT_,meta31703__$1));
});
cljs.core.async.__GT_t31702 = (function __GT_t31702(ch__$1,f__$1,map_LT___$1,meta31703){return (new cljs.core.async.t31702(ch__$1,f__$1,map_LT___$1,meta31703));
});
}
return (new cljs.core.async.t31702(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31711 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31711 = (function (ch,f,map_GT_,meta31712){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31712 = meta31712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31711.cljs$lang$type = true;
cljs.core.async.t31711.cljs$lang$ctorStr = "cljs.core.async/t31711";
cljs.core.async.t31711.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t31711");
});
cljs.core.async.t31711.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31711.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t31711.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31711.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31711.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31711.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31713){var self__ = this;
var _31713__$1 = this;return self__.meta31712;
});
cljs.core.async.t31711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31713,meta31712__$1){var self__ = this;
var _31713__$1 = this;return (new cljs.core.async.t31711(self__.ch,self__.f,self__.map_GT_,meta31712__$1));
});
cljs.core.async.__GT_t31711 = (function __GT_t31711(ch__$1,f__$1,map_GT___$1,meta31712){return (new cljs.core.async.t31711(ch__$1,f__$1,map_GT___$1,meta31712));
});
}
return (new cljs.core.async.t31711(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31717 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31717 = (function (ch,p,filter_GT_,meta31718){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31718 = meta31718;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31717.cljs$lang$type = true;
cljs.core.async.t31717.cljs$lang$ctorStr = "cljs.core.async/t31717";
cljs.core.async.t31717.cljs$lang$ctorPrWriter = (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t31717");
});
cljs.core.async.t31717.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31717.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t31717.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31717.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31717.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31717.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31719){var self__ = this;
var _31719__$1 = this;return self__.meta31718;
});
cljs.core.async.t31717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31719,meta31718__$1){var self__ = this;
var _31719__$1 = this;return (new cljs.core.async.t31717(self__.ch,self__.p,self__.filter_GT_,meta31718__$1));
});
cljs.core.async.__GT_t31717 = (function __GT_t31717(ch__$1,p__$1,filter_GT___$1,meta31718){return (new cljs.core.async.t31717(ch__$1,p__$1,filter_GT___$1,meta31718));
});
}
return (new cljs.core.async.t31717(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23818__auto___31802 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_31781){var state_val_31782 = (state_31781[1]);if((state_val_31782 === 7))
{var inst_31777 = (state_31781[2]);var state_31781__$1 = state_31781;var statearr_31783_31803 = state_31781__$1;(statearr_31783_31803[2] = inst_31777);
(statearr_31783_31803[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31782 === 1))
{var state_31781__$1 = state_31781;var statearr_31784_31804 = state_31781__$1;(statearr_31784_31804[2] = null);
(statearr_31784_31804[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31782 === 4))
{var inst_31763 = (state_31781[7]);var inst_31763__$1 = (state_31781[2]);var inst_31764 = (inst_31763__$1 == null);var state_31781__$1 = (function (){var statearr_31785 = state_31781;(statearr_31785[7] = inst_31763__$1);
return statearr_31785;
})();if(cljs.core.truth_(inst_31764))
{var statearr_31786_31805 = state_31781__$1;(statearr_31786_31805[1] = 5);
} else
{var statearr_31787_31806 = state_31781__$1;(statearr_31787_31806[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31782 === 6))
{var inst_31763 = (state_31781[7]);var inst_31768 = p.call(null,inst_31763);var state_31781__$1 = state_31781;if(cljs.core.truth_(inst_31768))
{var statearr_31788_31807 = state_31781__$1;(statearr_31788_31807[1] = 8);
} else
{var statearr_31789_31808 = state_31781__$1;(statearr_31789_31808[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31782 === 3))
{var inst_31779 = (state_31781[2]);var state_31781__$1 = state_31781;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31781__$1,inst_31779);
} else
{if((state_val_31782 === 2))
{var state_31781__$1 = state_31781;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31781__$1,4,ch);
} else
{if((state_val_31782 === 11))
{var inst_31771 = (state_31781[2]);var state_31781__$1 = state_31781;var statearr_31790_31809 = state_31781__$1;(statearr_31790_31809[2] = inst_31771);
(statearr_31790_31809[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31782 === 9))
{var state_31781__$1 = state_31781;var statearr_31791_31810 = state_31781__$1;(statearr_31791_31810[2] = null);
(statearr_31791_31810[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31782 === 5))
{var inst_31766 = cljs.core.async.close_BANG_.call(null,out);var state_31781__$1 = state_31781;var statearr_31792_31811 = state_31781__$1;(statearr_31792_31811[2] = inst_31766);
(statearr_31792_31811[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31782 === 10))
{var inst_31774 = (state_31781[2]);var state_31781__$1 = (function (){var statearr_31793 = state_31781;(statearr_31793[8] = inst_31774);
return statearr_31793;
})();var statearr_31794_31812 = state_31781__$1;(statearr_31794_31812[2] = null);
(statearr_31794_31812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31782 === 8))
{var inst_31763 = (state_31781[7]);var state_31781__$1 = state_31781;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31781__$1,11,out,inst_31763);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_31798 = [null,null,null,null,null,null,null,null,null];(statearr_31798[0] = state_machine__23755__auto__);
(statearr_31798[1] = 1);
return statearr_31798;
});
var state_machine__23755__auto____1 = (function (state_31781){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_31781);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e31799){if((e31799 instanceof Object))
{var ex__23758__auto__ = e31799;var statearr_31800_31813 = state_31781;(statearr_31800_31813[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31781);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31799;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31814 = state_31781;
state_31781 = G__31814;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_31781){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_31781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_31801 = f__23819__auto__.call(null);(statearr_31801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto___31802);
return statearr_31801;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__23818__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_31966){var state_val_31967 = (state_31966[1]);if((state_val_31967 === 7))
{var inst_31962 = (state_31966[2]);var state_31966__$1 = state_31966;var statearr_31968_32005 = state_31966__$1;(statearr_31968_32005[2] = inst_31962);
(statearr_31968_32005[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 20))
{var inst_31937 = (state_31966[7]);var inst_31948 = (state_31966[2]);var inst_31949 = cljs.core.next.call(null,inst_31937);var inst_31923 = inst_31949;var inst_31924 = null;var inst_31925 = 0;var inst_31926 = 0;var state_31966__$1 = (function (){var statearr_31969 = state_31966;(statearr_31969[8] = inst_31923);
(statearr_31969[9] = inst_31926);
(statearr_31969[10] = inst_31948);
(statearr_31969[11] = inst_31924);
(statearr_31969[12] = inst_31925);
return statearr_31969;
})();var statearr_31970_32006 = state_31966__$1;(statearr_31970_32006[2] = null);
(statearr_31970_32006[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 1))
{var state_31966__$1 = state_31966;var statearr_31971_32007 = state_31966__$1;(statearr_31971_32007[2] = null);
(statearr_31971_32007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 4))
{var inst_31912 = (state_31966[13]);var inst_31912__$1 = (state_31966[2]);var inst_31913 = (inst_31912__$1 == null);var state_31966__$1 = (function (){var statearr_31975 = state_31966;(statearr_31975[13] = inst_31912__$1);
return statearr_31975;
})();if(cljs.core.truth_(inst_31913))
{var statearr_31976_32008 = state_31966__$1;(statearr_31976_32008[1] = 5);
} else
{var statearr_31977_32009 = state_31966__$1;(statearr_31977_32009[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 15))
{var state_31966__$1 = state_31966;var statearr_31978_32010 = state_31966__$1;(statearr_31978_32010[2] = null);
(statearr_31978_32010[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 13))
{var inst_31923 = (state_31966[8]);var inst_31926 = (state_31966[9]);var inst_31924 = (state_31966[11]);var inst_31925 = (state_31966[12]);var inst_31933 = (state_31966[2]);var inst_31934 = (inst_31926 + 1);var tmp31972 = inst_31923;var tmp31973 = inst_31924;var tmp31974 = inst_31925;var inst_31923__$1 = tmp31972;var inst_31924__$1 = tmp31973;var inst_31925__$1 = tmp31974;var inst_31926__$1 = inst_31934;var state_31966__$1 = (function (){var statearr_31979 = state_31966;(statearr_31979[8] = inst_31923__$1);
(statearr_31979[14] = inst_31933);
(statearr_31979[9] = inst_31926__$1);
(statearr_31979[11] = inst_31924__$1);
(statearr_31979[12] = inst_31925__$1);
return statearr_31979;
})();var statearr_31980_32011 = state_31966__$1;(statearr_31980_32011[2] = null);
(statearr_31980_32011[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 6))
{var inst_31912 = (state_31966[13]);var inst_31917 = f.call(null,inst_31912);var inst_31922 = cljs.core.seq.call(null,inst_31917);var inst_31923 = inst_31922;var inst_31924 = null;var inst_31925 = 0;var inst_31926 = 0;var state_31966__$1 = (function (){var statearr_31981 = state_31966;(statearr_31981[8] = inst_31923);
(statearr_31981[9] = inst_31926);
(statearr_31981[11] = inst_31924);
(statearr_31981[12] = inst_31925);
return statearr_31981;
})();var statearr_31982_32012 = state_31966__$1;(statearr_31982_32012[2] = null);
(statearr_31982_32012[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 17))
{var inst_31937 = (state_31966[7]);var inst_31941 = cljs.core.chunk_first.call(null,inst_31937);var inst_31942 = cljs.core.chunk_rest.call(null,inst_31937);var inst_31943 = cljs.core.count.call(null,inst_31941);var inst_31923 = inst_31942;var inst_31924 = inst_31941;var inst_31925 = inst_31943;var inst_31926 = 0;var state_31966__$1 = (function (){var statearr_31983 = state_31966;(statearr_31983[8] = inst_31923);
(statearr_31983[9] = inst_31926);
(statearr_31983[11] = inst_31924);
(statearr_31983[12] = inst_31925);
return statearr_31983;
})();var statearr_31984_32013 = state_31966__$1;(statearr_31984_32013[2] = null);
(statearr_31984_32013[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 3))
{var inst_31964 = (state_31966[2]);var state_31966__$1 = state_31966;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31966__$1,inst_31964);
} else
{if((state_val_31967 === 12))
{var inst_31957 = (state_31966[2]);var state_31966__$1 = state_31966;var statearr_31985_32014 = state_31966__$1;(statearr_31985_32014[2] = inst_31957);
(statearr_31985_32014[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 2))
{var state_31966__$1 = state_31966;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31966__$1,4,in$);
} else
{if((state_val_31967 === 19))
{var inst_31952 = (state_31966[2]);var state_31966__$1 = state_31966;var statearr_31986_32015 = state_31966__$1;(statearr_31986_32015[2] = inst_31952);
(statearr_31986_32015[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 11))
{var inst_31937 = (state_31966[7]);var inst_31923 = (state_31966[8]);var inst_31937__$1 = cljs.core.seq.call(null,inst_31923);var state_31966__$1 = (function (){var statearr_31987 = state_31966;(statearr_31987[7] = inst_31937__$1);
return statearr_31987;
})();if(inst_31937__$1)
{var statearr_31988_32016 = state_31966__$1;(statearr_31988_32016[1] = 14);
} else
{var statearr_31989_32017 = state_31966__$1;(statearr_31989_32017[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 9))
{var inst_31959 = (state_31966[2]);var state_31966__$1 = (function (){var statearr_31990 = state_31966;(statearr_31990[15] = inst_31959);
return statearr_31990;
})();var statearr_31991_32018 = state_31966__$1;(statearr_31991_32018[2] = null);
(statearr_31991_32018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 5))
{var inst_31915 = cljs.core.async.close_BANG_.call(null,out);var state_31966__$1 = state_31966;var statearr_31992_32019 = state_31966__$1;(statearr_31992_32019[2] = inst_31915);
(statearr_31992_32019[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 14))
{var inst_31937 = (state_31966[7]);var inst_31939 = cljs.core.chunked_seq_QMARK_.call(null,inst_31937);var state_31966__$1 = state_31966;if(inst_31939)
{var statearr_31993_32020 = state_31966__$1;(statearr_31993_32020[1] = 17);
} else
{var statearr_31994_32021 = state_31966__$1;(statearr_31994_32021[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 16))
{var inst_31955 = (state_31966[2]);var state_31966__$1 = state_31966;var statearr_31995_32022 = state_31966__$1;(statearr_31995_32022[2] = inst_31955);
(statearr_31995_32022[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31967 === 10))
{var inst_31926 = (state_31966[9]);var inst_31924 = (state_31966[11]);var inst_31931 = cljs.core._nth.call(null,inst_31924,inst_31926);var state_31966__$1 = state_31966;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31966__$1,13,out,inst_31931);
} else
{if((state_val_31967 === 18))
{var inst_31937 = (state_31966[7]);var inst_31946 = cljs.core.first.call(null,inst_31937);var state_31966__$1 = state_31966;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31966__$1,20,out,inst_31946);
} else
{if((state_val_31967 === 8))
{var inst_31926 = (state_31966[9]);var inst_31925 = (state_31966[12]);var inst_31928 = (inst_31926 < inst_31925);var inst_31929 = inst_31928;var state_31966__$1 = state_31966;if(cljs.core.truth_(inst_31929))
{var statearr_31996_32023 = state_31966__$1;(statearr_31996_32023[1] = 10);
} else
{var statearr_31997_32024 = state_31966__$1;(statearr_31997_32024[1] = 11);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_32001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32001[0] = state_machine__23755__auto__);
(statearr_32001[1] = 1);
return statearr_32001;
});
var state_machine__23755__auto____1 = (function (state_31966){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_31966);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e32002){if((e32002 instanceof Object))
{var ex__23758__auto__ = e32002;var statearr_32003_32025 = state_31966;(statearr_32003_32025[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31966);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32002;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32026 = state_31966;
state_31966 = G__32026;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_31966){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_31966);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_32004 = f__23819__auto__.call(null);(statearr_32004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto__);
return statearr_32004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
}));
return c__23818__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__23818__auto___32107 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_32086){var state_val_32087 = (state_32086[1]);if((state_val_32087 === 7))
{var inst_32082 = (state_32086[2]);var state_32086__$1 = state_32086;var statearr_32088_32108 = state_32086__$1;(statearr_32088_32108[2] = inst_32082);
(statearr_32088_32108[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32087 === 1))
{var state_32086__$1 = state_32086;var statearr_32089_32109 = state_32086__$1;(statearr_32089_32109[2] = null);
(statearr_32089_32109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32087 === 4))
{var inst_32069 = (state_32086[7]);var inst_32069__$1 = (state_32086[2]);var inst_32070 = (inst_32069__$1 == null);var state_32086__$1 = (function (){var statearr_32090 = state_32086;(statearr_32090[7] = inst_32069__$1);
return statearr_32090;
})();if(cljs.core.truth_(inst_32070))
{var statearr_32091_32110 = state_32086__$1;(statearr_32091_32110[1] = 5);
} else
{var statearr_32092_32111 = state_32086__$1;(statearr_32092_32111[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32087 === 6))
{var inst_32069 = (state_32086[7]);var state_32086__$1 = state_32086;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32086__$1,11,to,inst_32069);
} else
{if((state_val_32087 === 3))
{var inst_32084 = (state_32086[2]);var state_32086__$1 = state_32086;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32086__$1,inst_32084);
} else
{if((state_val_32087 === 2))
{var state_32086__$1 = state_32086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32086__$1,4,from);
} else
{if((state_val_32087 === 11))
{var inst_32079 = (state_32086[2]);var state_32086__$1 = (function (){var statearr_32093 = state_32086;(statearr_32093[8] = inst_32079);
return statearr_32093;
})();var statearr_32094_32112 = state_32086__$1;(statearr_32094_32112[2] = null);
(statearr_32094_32112[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32087 === 9))
{var state_32086__$1 = state_32086;var statearr_32095_32113 = state_32086__$1;(statearr_32095_32113[2] = null);
(statearr_32095_32113[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32087 === 5))
{var state_32086__$1 = state_32086;if(cljs.core.truth_(close_QMARK_))
{var statearr_32096_32114 = state_32086__$1;(statearr_32096_32114[1] = 8);
} else
{var statearr_32097_32115 = state_32086__$1;(statearr_32097_32115[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32087 === 10))
{var inst_32076 = (state_32086[2]);var state_32086__$1 = state_32086;var statearr_32098_32116 = state_32086__$1;(statearr_32098_32116[2] = inst_32076);
(statearr_32098_32116[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32087 === 8))
{var inst_32073 = cljs.core.async.close_BANG_.call(null,to);var state_32086__$1 = state_32086;var statearr_32099_32117 = state_32086__$1;(statearr_32099_32117[2] = inst_32073);
(statearr_32099_32117[1] = 10);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_32103 = [null,null,null,null,null,null,null,null,null];(statearr_32103[0] = state_machine__23755__auto__);
(statearr_32103[1] = 1);
return statearr_32103;
});
var state_machine__23755__auto____1 = (function (state_32086){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_32086);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e32104){if((e32104 instanceof Object))
{var ex__23758__auto__ = e32104;var statearr_32105_32118 = state_32086;(statearr_32105_32118[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32086);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32104;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32119 = state_32086;
state_32086 = G__32119;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_32086){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_32086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_32106 = f__23819__auto__.call(null);(statearr_32106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto___32107);
return statearr_32106;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__23818__auto___32206 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_32184){var state_val_32185 = (state_32184[1]);if((state_val_32185 === 7))
{var inst_32180 = (state_32184[2]);var state_32184__$1 = state_32184;var statearr_32186_32207 = state_32184__$1;(statearr_32186_32207[2] = inst_32180);
(statearr_32186_32207[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32185 === 1))
{var state_32184__$1 = state_32184;var statearr_32187_32208 = state_32184__$1;(statearr_32187_32208[2] = null);
(statearr_32187_32208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32185 === 4))
{var inst_32165 = (state_32184[7]);var inst_32165__$1 = (state_32184[2]);var inst_32166 = (inst_32165__$1 == null);var state_32184__$1 = (function (){var statearr_32188 = state_32184;(statearr_32188[7] = inst_32165__$1);
return statearr_32188;
})();if(cljs.core.truth_(inst_32166))
{var statearr_32189_32209 = state_32184__$1;(statearr_32189_32209[1] = 5);
} else
{var statearr_32190_32210 = state_32184__$1;(statearr_32190_32210[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32185 === 6))
{var inst_32165 = (state_32184[7]);var inst_32171 = p.call(null,inst_32165);var state_32184__$1 = state_32184;if(cljs.core.truth_(inst_32171))
{var statearr_32191_32211 = state_32184__$1;(statearr_32191_32211[1] = 9);
} else
{var statearr_32192_32212 = state_32184__$1;(statearr_32192_32212[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32185 === 3))
{var inst_32182 = (state_32184[2]);var state_32184__$1 = state_32184;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32184__$1,inst_32182);
} else
{if((state_val_32185 === 2))
{var state_32184__$1 = state_32184;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32184__$1,4,ch);
} else
{if((state_val_32185 === 11))
{var inst_32165 = (state_32184[7]);var inst_32175 = (state_32184[2]);var state_32184__$1 = state_32184;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32184__$1,8,inst_32175,inst_32165);
} else
{if((state_val_32185 === 9))
{var state_32184__$1 = state_32184;var statearr_32193_32213 = state_32184__$1;(statearr_32193_32213[2] = tc);
(statearr_32193_32213[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32185 === 5))
{var inst_32168 = cljs.core.async.close_BANG_.call(null,tc);var inst_32169 = cljs.core.async.close_BANG_.call(null,fc);var state_32184__$1 = (function (){var statearr_32194 = state_32184;(statearr_32194[8] = inst_32168);
return statearr_32194;
})();var statearr_32195_32214 = state_32184__$1;(statearr_32195_32214[2] = inst_32169);
(statearr_32195_32214[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32185 === 10))
{var state_32184__$1 = state_32184;var statearr_32196_32215 = state_32184__$1;(statearr_32196_32215[2] = fc);
(statearr_32196_32215[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32185 === 8))
{var inst_32177 = (state_32184[2]);var state_32184__$1 = (function (){var statearr_32197 = state_32184;(statearr_32197[9] = inst_32177);
return statearr_32197;
})();var statearr_32198_32216 = state_32184__$1;(statearr_32198_32216[2] = null);
(statearr_32198_32216[1] = 2);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_32202 = [null,null,null,null,null,null,null,null,null,null];(statearr_32202[0] = state_machine__23755__auto__);
(statearr_32202[1] = 1);
return statearr_32202;
});
var state_machine__23755__auto____1 = (function (state_32184){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_32184);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e32203){if((e32203 instanceof Object))
{var ex__23758__auto__ = e32203;var statearr_32204_32217 = state_32184;(statearr_32204_32217[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32184);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32218 = state_32184;
state_32184 = G__32218;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_32184){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_32184);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_32205 = f__23819__auto__.call(null);(statearr_32205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto___32206);
return statearr_32205;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__23818__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_32265){var state_val_32266 = (state_32265[1]);if((state_val_32266 === 7))
{var inst_32261 = (state_32265[2]);var state_32265__$1 = state_32265;var statearr_32267_32283 = state_32265__$1;(statearr_32267_32283[2] = inst_32261);
(statearr_32267_32283[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32266 === 6))
{var inst_32251 = (state_32265[7]);var inst_32254 = (state_32265[8]);var inst_32258 = f.call(null,inst_32251,inst_32254);var inst_32251__$1 = inst_32258;var state_32265__$1 = (function (){var statearr_32268 = state_32265;(statearr_32268[7] = inst_32251__$1);
return statearr_32268;
})();var statearr_32269_32284 = state_32265__$1;(statearr_32269_32284[2] = null);
(statearr_32269_32284[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32266 === 5))
{var inst_32251 = (state_32265[7]);var state_32265__$1 = state_32265;var statearr_32270_32285 = state_32265__$1;(statearr_32270_32285[2] = inst_32251);
(statearr_32270_32285[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32266 === 4))
{var inst_32254 = (state_32265[8]);var inst_32254__$1 = (state_32265[2]);var inst_32255 = (inst_32254__$1 == null);var state_32265__$1 = (function (){var statearr_32271 = state_32265;(statearr_32271[8] = inst_32254__$1);
return statearr_32271;
})();if(cljs.core.truth_(inst_32255))
{var statearr_32272_32286 = state_32265__$1;(statearr_32272_32286[1] = 5);
} else
{var statearr_32273_32287 = state_32265__$1;(statearr_32273_32287[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32266 === 3))
{var inst_32263 = (state_32265[2]);var state_32265__$1 = state_32265;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32265__$1,inst_32263);
} else
{if((state_val_32266 === 2))
{var state_32265__$1 = state_32265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32265__$1,4,ch);
} else
{if((state_val_32266 === 1))
{var inst_32251 = init;var state_32265__$1 = (function (){var statearr_32274 = state_32265;(statearr_32274[7] = inst_32251);
return statearr_32274;
})();var statearr_32275_32288 = state_32265__$1;(statearr_32275_32288[2] = null);
(statearr_32275_32288[1] = 2);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_32279 = [null,null,null,null,null,null,null,null,null];(statearr_32279[0] = state_machine__23755__auto__);
(statearr_32279[1] = 1);
return statearr_32279;
});
var state_machine__23755__auto____1 = (function (state_32265){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_32265);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e32280){if((e32280 instanceof Object))
{var ex__23758__auto__ = e32280;var statearr_32281_32289 = state_32265;(statearr_32281_32289[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32265);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32280;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32290 = state_32265;
state_32265 = G__32290;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_32265){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_32265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_32282 = f__23819__auto__.call(null);(statearr_32282[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto__);
return statearr_32282;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
}));
return c__23818__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__23818__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_32352){var state_val_32353 = (state_32352[1]);if((state_val_32353 === 7))
{var inst_32333 = (state_32352[7]);var inst_32338 = (state_32352[2]);var inst_32339 = cljs.core.next.call(null,inst_32333);var inst_32333__$1 = inst_32339;var state_32352__$1 = (function (){var statearr_32354 = state_32352;(statearr_32354[7] = inst_32333__$1);
(statearr_32354[8] = inst_32338);
return statearr_32354;
})();var statearr_32355_32373 = state_32352__$1;(statearr_32355_32373[2] = null);
(statearr_32355_32373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32353 === 1))
{var inst_32332 = cljs.core.seq.call(null,coll);var inst_32333 = inst_32332;var state_32352__$1 = (function (){var statearr_32356 = state_32352;(statearr_32356[7] = inst_32333);
return statearr_32356;
})();var statearr_32357_32374 = state_32352__$1;(statearr_32357_32374[2] = null);
(statearr_32357_32374[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32353 === 4))
{var inst_32333 = (state_32352[7]);var inst_32336 = cljs.core.first.call(null,inst_32333);var state_32352__$1 = state_32352;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32352__$1,7,ch,inst_32336);
} else
{if((state_val_32353 === 6))
{var inst_32348 = (state_32352[2]);var state_32352__$1 = state_32352;var statearr_32358_32375 = state_32352__$1;(statearr_32358_32375[2] = inst_32348);
(statearr_32358_32375[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32353 === 3))
{var inst_32350 = (state_32352[2]);var state_32352__$1 = state_32352;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32352__$1,inst_32350);
} else
{if((state_val_32353 === 2))
{var inst_32333 = (state_32352[7]);var state_32352__$1 = state_32352;if(cljs.core.truth_(inst_32333))
{var statearr_32359_32376 = state_32352__$1;(statearr_32359_32376[1] = 4);
} else
{var statearr_32360_32377 = state_32352__$1;(statearr_32360_32377[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32353 === 9))
{var state_32352__$1 = state_32352;var statearr_32361_32378 = state_32352__$1;(statearr_32361_32378[2] = null);
(statearr_32361_32378[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32353 === 5))
{var state_32352__$1 = state_32352;if(cljs.core.truth_(close_QMARK_))
{var statearr_32362_32379 = state_32352__$1;(statearr_32362_32379[1] = 8);
} else
{var statearr_32363_32380 = state_32352__$1;(statearr_32363_32380[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32353 === 10))
{var inst_32346 = (state_32352[2]);var state_32352__$1 = state_32352;var statearr_32364_32381 = state_32352__$1;(statearr_32364_32381[2] = inst_32346);
(statearr_32364_32381[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32353 === 8))
{var inst_32343 = cljs.core.async.close_BANG_.call(null,ch);var state_32352__$1 = state_32352;var statearr_32365_32382 = state_32352__$1;(statearr_32365_32382[2] = inst_32343);
(statearr_32365_32382[1] = 10);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_32369 = [null,null,null,null,null,null,null,null,null];(statearr_32369[0] = state_machine__23755__auto__);
(statearr_32369[1] = 1);
return statearr_32369;
});
var state_machine__23755__auto____1 = (function (state_32352){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_32352);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e32370){if((e32370 instanceof Object))
{var ex__23758__auto__ = e32370;var statearr_32371_32383 = state_32352;(statearr_32371_32383[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32352);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32370;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32384 = state_32352;
state_32352 = G__32384;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_32352){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_32352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_32372 = f__23819__auto__.call(null);(statearr_32372[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto__);
return statearr_32372;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
}));
return c__23818__auto__;
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
cljs.core.async.Mux = (function (){var obj32386 = {};return obj32386;
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
cljs.core.async.Mult = (function (){var obj32388 = {};return obj32388;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t32612 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32612 = (function (cs,ch,mult,meta32613){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32613 = meta32613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32612.cljs$lang$type = true;
cljs.core.async.t32612.cljs$lang$ctorStr = "cljs.core.async/t32612";
cljs.core.async.t32612.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t32612");
});})(cs))
;
cljs.core.async.t32612.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32612.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32612.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32612.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t32612.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32614){var self__ = this;
var _32614__$1 = this;return self__.meta32613;
});})(cs))
;
cljs.core.async.t32612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32614,meta32613__$1){var self__ = this;
var _32614__$1 = this;return (new cljs.core.async.t32612(self__.cs,self__.ch,self__.mult,meta32613__$1));
});})(cs))
;
cljs.core.async.__GT_t32612 = ((function (cs){
return (function __GT_t32612(cs__$1,ch__$1,mult__$1,meta32613){return (new cljs.core.async.t32612(cs__$1,ch__$1,mult__$1,meta32613));
});})(cs))
;
}
return (new cljs.core.async.t32612(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__23818__auto___32835 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_32749){var state_val_32750 = (state_32749[1]);if((state_val_32750 === 7))
{var inst_32745 = (state_32749[2]);var state_32749__$1 = state_32749;var statearr_32751_32836 = state_32749__$1;(statearr_32751_32836[2] = inst_32745);
(statearr_32751_32836[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 20))
{var inst_32646 = (state_32749[7]);var inst_32656 = cljs.core.first.call(null,inst_32646);var inst_32657 = cljs.core.nth.call(null,inst_32656,0,null);var inst_32658 = cljs.core.nth.call(null,inst_32656,1,null);var state_32749__$1 = (function (){var statearr_32752 = state_32749;(statearr_32752[8] = inst_32657);
return statearr_32752;
})();if(cljs.core.truth_(inst_32658))
{var statearr_32753_32837 = state_32749__$1;(statearr_32753_32837[1] = 22);
} else
{var statearr_32754_32838 = state_32749__$1;(statearr_32754_32838[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 27))
{var inst_32688 = (state_32749[9]);var inst_32686 = (state_32749[10]);var inst_32693 = cljs.core._nth.call(null,inst_32686,inst_32688);var state_32749__$1 = (function (){var statearr_32755 = state_32749;(statearr_32755[11] = inst_32693);
return statearr_32755;
})();var statearr_32756_32839 = state_32749__$1;(statearr_32756_32839[2] = null);
(statearr_32756_32839[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 1))
{var state_32749__$1 = state_32749;var statearr_32757_32840 = state_32749__$1;(statearr_32757_32840[2] = null);
(statearr_32757_32840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 24))
{var inst_32646 = (state_32749[7]);var inst_32663 = (state_32749[2]);var inst_32664 = cljs.core.next.call(null,inst_32646);var inst_32626 = inst_32664;var inst_32627 = null;var inst_32628 = 0;var inst_32629 = 0;var state_32749__$1 = (function (){var statearr_32758 = state_32749;(statearr_32758[12] = inst_32627);
(statearr_32758[13] = inst_32663);
(statearr_32758[14] = inst_32626);
(statearr_32758[15] = inst_32629);
(statearr_32758[16] = inst_32628);
return statearr_32758;
})();var statearr_32759_32841 = state_32749__$1;(statearr_32759_32841[2] = null);
(statearr_32759_32841[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 39))
{var inst_32706 = (state_32749[17]);var inst_32724 = (state_32749[2]);var inst_32725 = cljs.core.next.call(null,inst_32706);var inst_32685 = inst_32725;var inst_32686 = null;var inst_32687 = 0;var inst_32688 = 0;var state_32749__$1 = (function (){var statearr_32763 = state_32749;(statearr_32763[9] = inst_32688);
(statearr_32763[10] = inst_32686);
(statearr_32763[18] = inst_32724);
(statearr_32763[19] = inst_32687);
(statearr_32763[20] = inst_32685);
return statearr_32763;
})();var statearr_32764_32842 = state_32749__$1;(statearr_32764_32842[2] = null);
(statearr_32764_32842[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 4))
{var inst_32617 = (state_32749[21]);var inst_32617__$1 = (state_32749[2]);var inst_32618 = (inst_32617__$1 == null);var state_32749__$1 = (function (){var statearr_32765 = state_32749;(statearr_32765[21] = inst_32617__$1);
return statearr_32765;
})();if(cljs.core.truth_(inst_32618))
{var statearr_32766_32843 = state_32749__$1;(statearr_32766_32843[1] = 5);
} else
{var statearr_32767_32844 = state_32749__$1;(statearr_32767_32844[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 15))
{var inst_32627 = (state_32749[12]);var inst_32626 = (state_32749[14]);var inst_32629 = (state_32749[15]);var inst_32628 = (state_32749[16]);var inst_32642 = (state_32749[2]);var inst_32643 = (inst_32629 + 1);var tmp32760 = inst_32627;var tmp32761 = inst_32626;var tmp32762 = inst_32628;var inst_32626__$1 = tmp32761;var inst_32627__$1 = tmp32760;var inst_32628__$1 = tmp32762;var inst_32629__$1 = inst_32643;var state_32749__$1 = (function (){var statearr_32768 = state_32749;(statearr_32768[12] = inst_32627__$1);
(statearr_32768[14] = inst_32626__$1);
(statearr_32768[15] = inst_32629__$1);
(statearr_32768[22] = inst_32642);
(statearr_32768[16] = inst_32628__$1);
return statearr_32768;
})();var statearr_32769_32845 = state_32749__$1;(statearr_32769_32845[2] = null);
(statearr_32769_32845[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 21))
{var inst_32667 = (state_32749[2]);var state_32749__$1 = state_32749;var statearr_32770_32846 = state_32749__$1;(statearr_32770_32846[2] = inst_32667);
(statearr_32770_32846[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 31))
{var inst_32693 = (state_32749[11]);var inst_32694 = (state_32749[2]);var inst_32695 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32696 = cljs.core.async.untap_STAR_.call(null,m,inst_32693);var state_32749__$1 = (function (){var statearr_32771 = state_32749;(statearr_32771[23] = inst_32694);
(statearr_32771[24] = inst_32695);
return statearr_32771;
})();var statearr_32772_32847 = state_32749__$1;(statearr_32772_32847[2] = inst_32696);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32749__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 32))
{var inst_32693 = (state_32749[11]);var inst_32617 = (state_32749[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32749,31,Object,null,30);var inst_32700 = cljs.core.async.put_BANG_.call(null,inst_32693,inst_32617,done);var state_32749__$1 = state_32749;var statearr_32773_32848 = state_32749__$1;(statearr_32773_32848[2] = inst_32700);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32749__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 40))
{var inst_32715 = (state_32749[25]);var inst_32716 = (state_32749[2]);var inst_32717 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32718 = cljs.core.async.untap_STAR_.call(null,m,inst_32715);var state_32749__$1 = (function (){var statearr_32774 = state_32749;(statearr_32774[26] = inst_32716);
(statearr_32774[27] = inst_32717);
return statearr_32774;
})();var statearr_32775_32849 = state_32749__$1;(statearr_32775_32849[2] = inst_32718);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32749__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 33))
{var inst_32706 = (state_32749[17]);var inst_32708 = cljs.core.chunked_seq_QMARK_.call(null,inst_32706);var state_32749__$1 = state_32749;if(inst_32708)
{var statearr_32776_32850 = state_32749__$1;(statearr_32776_32850[1] = 36);
} else
{var statearr_32777_32851 = state_32749__$1;(statearr_32777_32851[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 13))
{var inst_32636 = (state_32749[28]);var inst_32639 = cljs.core.async.close_BANG_.call(null,inst_32636);var state_32749__$1 = state_32749;var statearr_32778_32852 = state_32749__$1;(statearr_32778_32852[2] = inst_32639);
(statearr_32778_32852[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 22))
{var inst_32657 = (state_32749[8]);var inst_32660 = cljs.core.async.close_BANG_.call(null,inst_32657);var state_32749__$1 = state_32749;var statearr_32779_32853 = state_32749__$1;(statearr_32779_32853[2] = inst_32660);
(statearr_32779_32853[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 36))
{var inst_32706 = (state_32749[17]);var inst_32710 = cljs.core.chunk_first.call(null,inst_32706);var inst_32711 = cljs.core.chunk_rest.call(null,inst_32706);var inst_32712 = cljs.core.count.call(null,inst_32710);var inst_32685 = inst_32711;var inst_32686 = inst_32710;var inst_32687 = inst_32712;var inst_32688 = 0;var state_32749__$1 = (function (){var statearr_32780 = state_32749;(statearr_32780[9] = inst_32688);
(statearr_32780[10] = inst_32686);
(statearr_32780[19] = inst_32687);
(statearr_32780[20] = inst_32685);
return statearr_32780;
})();var statearr_32781_32854 = state_32749__$1;(statearr_32781_32854[2] = null);
(statearr_32781_32854[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 41))
{var inst_32715 = (state_32749[25]);var inst_32617 = (state_32749[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32749,40,Object,null,39);var inst_32722 = cljs.core.async.put_BANG_.call(null,inst_32715,inst_32617,done);var state_32749__$1 = state_32749;var statearr_32782_32855 = state_32749__$1;(statearr_32782_32855[2] = inst_32722);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32749__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 43))
{var state_32749__$1 = state_32749;var statearr_32783_32856 = state_32749__$1;(statearr_32783_32856[2] = null);
(statearr_32783_32856[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 29))
{var inst_32733 = (state_32749[2]);var state_32749__$1 = state_32749;var statearr_32784_32857 = state_32749__$1;(statearr_32784_32857[2] = inst_32733);
(statearr_32784_32857[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 44))
{var inst_32742 = (state_32749[2]);var state_32749__$1 = (function (){var statearr_32785 = state_32749;(statearr_32785[29] = inst_32742);
return statearr_32785;
})();var statearr_32786_32858 = state_32749__$1;(statearr_32786_32858[2] = null);
(statearr_32786_32858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 6))
{var inst_32677 = (state_32749[30]);var inst_32676 = cljs.core.deref.call(null,cs);var inst_32677__$1 = cljs.core.keys.call(null,inst_32676);var inst_32678 = cljs.core.count.call(null,inst_32677__$1);var inst_32679 = cljs.core.reset_BANG_.call(null,dctr,inst_32678);var inst_32684 = cljs.core.seq.call(null,inst_32677__$1);var inst_32685 = inst_32684;var inst_32686 = null;var inst_32687 = 0;var inst_32688 = 0;var state_32749__$1 = (function (){var statearr_32787 = state_32749;(statearr_32787[31] = inst_32679);
(statearr_32787[9] = inst_32688);
(statearr_32787[10] = inst_32686);
(statearr_32787[19] = inst_32687);
(statearr_32787[20] = inst_32685);
(statearr_32787[30] = inst_32677__$1);
return statearr_32787;
})();var statearr_32788_32859 = state_32749__$1;(statearr_32788_32859[2] = null);
(statearr_32788_32859[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 28))
{var inst_32706 = (state_32749[17]);var inst_32685 = (state_32749[20]);var inst_32706__$1 = cljs.core.seq.call(null,inst_32685);var state_32749__$1 = (function (){var statearr_32789 = state_32749;(statearr_32789[17] = inst_32706__$1);
return statearr_32789;
})();if(inst_32706__$1)
{var statearr_32790_32860 = state_32749__$1;(statearr_32790_32860[1] = 33);
} else
{var statearr_32791_32861 = state_32749__$1;(statearr_32791_32861[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 25))
{var inst_32688 = (state_32749[9]);var inst_32687 = (state_32749[19]);var inst_32690 = (inst_32688 < inst_32687);var inst_32691 = inst_32690;var state_32749__$1 = state_32749;if(cljs.core.truth_(inst_32691))
{var statearr_32792_32862 = state_32749__$1;(statearr_32792_32862[1] = 27);
} else
{var statearr_32793_32863 = state_32749__$1;(statearr_32793_32863[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 34))
{var state_32749__$1 = state_32749;var statearr_32794_32864 = state_32749__$1;(statearr_32794_32864[2] = null);
(statearr_32794_32864[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 17))
{var state_32749__$1 = state_32749;var statearr_32795_32865 = state_32749__$1;(statearr_32795_32865[2] = null);
(statearr_32795_32865[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 3))
{var inst_32747 = (state_32749[2]);var state_32749__$1 = state_32749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32749__$1,inst_32747);
} else
{if((state_val_32750 === 12))
{var inst_32672 = (state_32749[2]);var state_32749__$1 = state_32749;var statearr_32796_32866 = state_32749__$1;(statearr_32796_32866[2] = inst_32672);
(statearr_32796_32866[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 2))
{var state_32749__$1 = state_32749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32749__$1,4,ch);
} else
{if((state_val_32750 === 23))
{var state_32749__$1 = state_32749;var statearr_32797_32867 = state_32749__$1;(statearr_32797_32867[2] = null);
(statearr_32797_32867[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 35))
{var inst_32731 = (state_32749[2]);var state_32749__$1 = state_32749;var statearr_32798_32868 = state_32749__$1;(statearr_32798_32868[2] = inst_32731);
(statearr_32798_32868[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 19))
{var inst_32646 = (state_32749[7]);var inst_32650 = cljs.core.chunk_first.call(null,inst_32646);var inst_32651 = cljs.core.chunk_rest.call(null,inst_32646);var inst_32652 = cljs.core.count.call(null,inst_32650);var inst_32626 = inst_32651;var inst_32627 = inst_32650;var inst_32628 = inst_32652;var inst_32629 = 0;var state_32749__$1 = (function (){var statearr_32799 = state_32749;(statearr_32799[12] = inst_32627);
(statearr_32799[14] = inst_32626);
(statearr_32799[15] = inst_32629);
(statearr_32799[16] = inst_32628);
return statearr_32799;
})();var statearr_32800_32869 = state_32749__$1;(statearr_32800_32869[2] = null);
(statearr_32800_32869[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 11))
{var inst_32626 = (state_32749[14]);var inst_32646 = (state_32749[7]);var inst_32646__$1 = cljs.core.seq.call(null,inst_32626);var state_32749__$1 = (function (){var statearr_32801 = state_32749;(statearr_32801[7] = inst_32646__$1);
return statearr_32801;
})();if(inst_32646__$1)
{var statearr_32802_32870 = state_32749__$1;(statearr_32802_32870[1] = 16);
} else
{var statearr_32803_32871 = state_32749__$1;(statearr_32803_32871[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 9))
{var inst_32674 = (state_32749[2]);var state_32749__$1 = state_32749;var statearr_32804_32872 = state_32749__$1;(statearr_32804_32872[2] = inst_32674);
(statearr_32804_32872[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 5))
{var inst_32624 = cljs.core.deref.call(null,cs);var inst_32625 = cljs.core.seq.call(null,inst_32624);var inst_32626 = inst_32625;var inst_32627 = null;var inst_32628 = 0;var inst_32629 = 0;var state_32749__$1 = (function (){var statearr_32805 = state_32749;(statearr_32805[12] = inst_32627);
(statearr_32805[14] = inst_32626);
(statearr_32805[15] = inst_32629);
(statearr_32805[16] = inst_32628);
return statearr_32805;
})();var statearr_32806_32873 = state_32749__$1;(statearr_32806_32873[2] = null);
(statearr_32806_32873[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 14))
{var state_32749__$1 = state_32749;var statearr_32807_32874 = state_32749__$1;(statearr_32807_32874[2] = null);
(statearr_32807_32874[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 45))
{var inst_32739 = (state_32749[2]);var state_32749__$1 = state_32749;var statearr_32808_32875 = state_32749__$1;(statearr_32808_32875[2] = inst_32739);
(statearr_32808_32875[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 26))
{var inst_32677 = (state_32749[30]);var inst_32735 = (state_32749[2]);var inst_32736 = cljs.core.seq.call(null,inst_32677);var state_32749__$1 = (function (){var statearr_32809 = state_32749;(statearr_32809[32] = inst_32735);
return statearr_32809;
})();if(inst_32736)
{var statearr_32810_32876 = state_32749__$1;(statearr_32810_32876[1] = 42);
} else
{var statearr_32811_32877 = state_32749__$1;(statearr_32811_32877[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 16))
{var inst_32646 = (state_32749[7]);var inst_32648 = cljs.core.chunked_seq_QMARK_.call(null,inst_32646);var state_32749__$1 = state_32749;if(inst_32648)
{var statearr_32815_32878 = state_32749__$1;(statearr_32815_32878[1] = 19);
} else
{var statearr_32816_32879 = state_32749__$1;(statearr_32816_32879[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 38))
{var inst_32728 = (state_32749[2]);var state_32749__$1 = state_32749;var statearr_32817_32880 = state_32749__$1;(statearr_32817_32880[2] = inst_32728);
(statearr_32817_32880[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 30))
{var inst_32688 = (state_32749[9]);var inst_32686 = (state_32749[10]);var inst_32687 = (state_32749[19]);var inst_32685 = (state_32749[20]);var inst_32702 = (state_32749[2]);var inst_32703 = (inst_32688 + 1);var tmp32812 = inst_32686;var tmp32813 = inst_32687;var tmp32814 = inst_32685;var inst_32685__$1 = tmp32814;var inst_32686__$1 = tmp32812;var inst_32687__$1 = tmp32813;var inst_32688__$1 = inst_32703;var state_32749__$1 = (function (){var statearr_32818 = state_32749;(statearr_32818[33] = inst_32702);
(statearr_32818[9] = inst_32688__$1);
(statearr_32818[10] = inst_32686__$1);
(statearr_32818[19] = inst_32687__$1);
(statearr_32818[20] = inst_32685__$1);
return statearr_32818;
})();var statearr_32819_32881 = state_32749__$1;(statearr_32819_32881[2] = null);
(statearr_32819_32881[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 10))
{var inst_32627 = (state_32749[12]);var inst_32629 = (state_32749[15]);var inst_32635 = cljs.core._nth.call(null,inst_32627,inst_32629);var inst_32636 = cljs.core.nth.call(null,inst_32635,0,null);var inst_32637 = cljs.core.nth.call(null,inst_32635,1,null);var state_32749__$1 = (function (){var statearr_32820 = state_32749;(statearr_32820[28] = inst_32636);
return statearr_32820;
})();if(cljs.core.truth_(inst_32637))
{var statearr_32821_32882 = state_32749__$1;(statearr_32821_32882[1] = 13);
} else
{var statearr_32822_32883 = state_32749__$1;(statearr_32822_32883[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 18))
{var inst_32670 = (state_32749[2]);var state_32749__$1 = state_32749;var statearr_32823_32884 = state_32749__$1;(statearr_32823_32884[2] = inst_32670);
(statearr_32823_32884[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 42))
{var state_32749__$1 = state_32749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32749__$1,45,dchan);
} else
{if((state_val_32750 === 37))
{var inst_32706 = (state_32749[17]);var inst_32715 = cljs.core.first.call(null,inst_32706);var state_32749__$1 = (function (){var statearr_32824 = state_32749;(statearr_32824[25] = inst_32715);
return statearr_32824;
})();var statearr_32825_32885 = state_32749__$1;(statearr_32825_32885[2] = null);
(statearr_32825_32885[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32750 === 8))
{var inst_32629 = (state_32749[15]);var inst_32628 = (state_32749[16]);var inst_32631 = (inst_32629 < inst_32628);var inst_32632 = inst_32631;var state_32749__$1 = state_32749;if(cljs.core.truth_(inst_32632))
{var statearr_32826_32886 = state_32749__$1;(statearr_32826_32886[1] = 10);
} else
{var statearr_32827_32887 = state_32749__$1;(statearr_32827_32887[1] = 11);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_32831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32831[0] = state_machine__23755__auto__);
(statearr_32831[1] = 1);
return statearr_32831;
});
var state_machine__23755__auto____1 = (function (state_32749){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_32749);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e32832){if((e32832 instanceof Object))
{var ex__23758__auto__ = e32832;var statearr_32833_32888 = state_32749;(statearr_32833_32888[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32889 = state_32749;
state_32749 = G__32889;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_32749){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_32749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_32834 = f__23819__auto__.call(null);(statearr_32834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto___32835);
return statearr_32834;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
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
cljs.core.async.Mix = (function (){var obj32891 = {};return obj32891;
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
;var m = (function (){if(typeof cljs.core.async.t33001 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33001 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33002){
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
this.meta33002 = meta33002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33001.cljs$lang$type = true;
cljs.core.async.t33001.cljs$lang$ctorStr = "cljs.core.async/t33001";
cljs.core.async.t33001.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t33001");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33001.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t33001.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33001.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33001.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33001.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33001.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33001.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33001.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33003){var self__ = this;
var _33003__$1 = this;return self__.meta33002;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33003,meta33002__$1){var self__ = this;
var _33003__$1 = this;return (new cljs.core.async.t33001(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33002__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t33001 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33001(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33002){return (new cljs.core.async.t33001(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33002));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t33001(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__23818__auto___33110 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_33068){var state_val_33069 = (state_33068[1]);if((state_val_33069 === 7))
{var inst_33017 = (state_33068[7]);var inst_33022 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33017);var state_33068__$1 = state_33068;var statearr_33070_33111 = state_33068__$1;(statearr_33070_33111[2] = inst_33022);
(statearr_33070_33111[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 20))
{var inst_33032 = (state_33068[8]);var state_33068__$1 = state_33068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33068__$1,23,out,inst_33032);
} else
{if((state_val_33069 === 1))
{var inst_33007 = (state_33068[9]);var inst_33007__$1 = calc_state.call(null);var inst_33008 = cljs.core.seq_QMARK_.call(null,inst_33007__$1);var state_33068__$1 = (function (){var statearr_33071 = state_33068;(statearr_33071[9] = inst_33007__$1);
return statearr_33071;
})();if(inst_33008)
{var statearr_33072_33112 = state_33068__$1;(statearr_33072_33112[1] = 2);
} else
{var statearr_33073_33113 = state_33068__$1;(statearr_33073_33113[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 4))
{var inst_33007 = (state_33068[9]);var inst_33013 = (state_33068[2]);var inst_33014 = cljs.core.get.call(null,inst_33013,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33015 = cljs.core.get.call(null,inst_33013,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33016 = cljs.core.get.call(null,inst_33013,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_33017 = inst_33007;var state_33068__$1 = (function (){var statearr_33074 = state_33068;(statearr_33074[10] = inst_33015);
(statearr_33074[11] = inst_33016);
(statearr_33074[12] = inst_33014);
(statearr_33074[7] = inst_33017);
return statearr_33074;
})();var statearr_33075_33114 = state_33068__$1;(statearr_33075_33114[2] = null);
(statearr_33075_33114[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 15))
{var state_33068__$1 = state_33068;var statearr_33076_33115 = state_33068__$1;(statearr_33076_33115[2] = null);
(statearr_33076_33115[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 21))
{var state_33068__$1 = state_33068;var statearr_33077_33116 = state_33068__$1;(statearr_33077_33116[2] = null);
(statearr_33077_33116[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 13))
{var inst_33064 = (state_33068[2]);var state_33068__$1 = state_33068;var statearr_33078_33117 = state_33068__$1;(statearr_33078_33117[2] = inst_33064);
(statearr_33078_33117[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 22))
{var inst_33025 = (state_33068[13]);var inst_33061 = (state_33068[2]);var inst_33017 = inst_33025;var state_33068__$1 = (function (){var statearr_33079 = state_33068;(statearr_33079[14] = inst_33061);
(statearr_33079[7] = inst_33017);
return statearr_33079;
})();var statearr_33080_33118 = state_33068__$1;(statearr_33080_33118[2] = null);
(statearr_33080_33118[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 6))
{var inst_33066 = (state_33068[2]);var state_33068__$1 = state_33068;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33068__$1,inst_33066);
} else
{if((state_val_33069 === 17))
{var inst_33047 = (state_33068[15]);var state_33068__$1 = state_33068;var statearr_33081_33119 = state_33068__$1;(statearr_33081_33119[2] = inst_33047);
(statearr_33081_33119[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 3))
{var inst_33007 = (state_33068[9]);var state_33068__$1 = state_33068;var statearr_33082_33120 = state_33068__$1;(statearr_33082_33120[2] = inst_33007);
(statearr_33082_33120[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 12))
{var inst_33033 = (state_33068[16]);var inst_33028 = (state_33068[17]);var inst_33047 = (state_33068[15]);var inst_33047__$1 = inst_33028.call(null,inst_33033);var state_33068__$1 = (function (){var statearr_33083 = state_33068;(statearr_33083[15] = inst_33047__$1);
return statearr_33083;
})();if(cljs.core.truth_(inst_33047__$1))
{var statearr_33084_33121 = state_33068__$1;(statearr_33084_33121[1] = 17);
} else
{var statearr_33085_33122 = state_33068__$1;(statearr_33085_33122[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 2))
{var inst_33007 = (state_33068[9]);var inst_33010 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33007);var state_33068__$1 = state_33068;var statearr_33086_33123 = state_33068__$1;(statearr_33086_33123[2] = inst_33010);
(statearr_33086_33123[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 23))
{var inst_33058 = (state_33068[2]);var state_33068__$1 = state_33068;var statearr_33087_33124 = state_33068__$1;(statearr_33087_33124[2] = inst_33058);
(statearr_33087_33124[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 19))
{var inst_33055 = (state_33068[2]);var state_33068__$1 = state_33068;if(cljs.core.truth_(inst_33055))
{var statearr_33088_33125 = state_33068__$1;(statearr_33088_33125[1] = 20);
} else
{var statearr_33089_33126 = state_33068__$1;(statearr_33089_33126[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 11))
{var inst_33032 = (state_33068[8]);var inst_33038 = (inst_33032 == null);var state_33068__$1 = state_33068;if(cljs.core.truth_(inst_33038))
{var statearr_33090_33127 = state_33068__$1;(statearr_33090_33127[1] = 14);
} else
{var statearr_33091_33128 = state_33068__$1;(statearr_33091_33128[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 9))
{var inst_33025 = (state_33068[13]);var inst_33025__$1 = (state_33068[2]);var inst_33026 = cljs.core.get.call(null,inst_33025__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33027 = cljs.core.get.call(null,inst_33025__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33028 = cljs.core.get.call(null,inst_33025__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_33068__$1 = (function (){var statearr_33092 = state_33068;(statearr_33092[13] = inst_33025__$1);
(statearr_33092[17] = inst_33028);
(statearr_33092[18] = inst_33027);
return statearr_33092;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33068__$1,10,inst_33026);
} else
{if((state_val_33069 === 5))
{var inst_33017 = (state_33068[7]);var inst_33020 = cljs.core.seq_QMARK_.call(null,inst_33017);var state_33068__$1 = state_33068;if(inst_33020)
{var statearr_33093_33129 = state_33068__$1;(statearr_33093_33129[1] = 7);
} else
{var statearr_33094_33130 = state_33068__$1;(statearr_33094_33130[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 14))
{var inst_33033 = (state_33068[16]);var inst_33040 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33033);var state_33068__$1 = state_33068;var statearr_33095_33131 = state_33068__$1;(statearr_33095_33131[2] = inst_33040);
(statearr_33095_33131[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 16))
{var inst_33043 = (state_33068[2]);var inst_33044 = calc_state.call(null);var inst_33017 = inst_33044;var state_33068__$1 = (function (){var statearr_33096 = state_33068;(statearr_33096[19] = inst_33043);
(statearr_33096[7] = inst_33017);
return statearr_33096;
})();var statearr_33097_33132 = state_33068__$1;(statearr_33097_33132[2] = null);
(statearr_33097_33132[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 10))
{var inst_33032 = (state_33068[8]);var inst_33033 = (state_33068[16]);var inst_33031 = (state_33068[2]);var inst_33032__$1 = cljs.core.nth.call(null,inst_33031,0,null);var inst_33033__$1 = cljs.core.nth.call(null,inst_33031,1,null);var inst_33034 = (inst_33032__$1 == null);var inst_33035 = cljs.core._EQ_.call(null,inst_33033__$1,change);var inst_33036 = (inst_33034) || (inst_33035);var state_33068__$1 = (function (){var statearr_33098 = state_33068;(statearr_33098[8] = inst_33032__$1);
(statearr_33098[16] = inst_33033__$1);
return statearr_33098;
})();if(cljs.core.truth_(inst_33036))
{var statearr_33099_33133 = state_33068__$1;(statearr_33099_33133[1] = 11);
} else
{var statearr_33100_33134 = state_33068__$1;(statearr_33100_33134[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 18))
{var inst_33033 = (state_33068[16]);var inst_33028 = (state_33068[17]);var inst_33027 = (state_33068[18]);var inst_33050 = cljs.core.empty_QMARK_.call(null,inst_33028);var inst_33051 = inst_33027.call(null,inst_33033);var inst_33052 = cljs.core.not.call(null,inst_33051);var inst_33053 = (inst_33050) && (inst_33052);var state_33068__$1 = state_33068;var statearr_33101_33135 = state_33068__$1;(statearr_33101_33135[2] = inst_33053);
(statearr_33101_33135[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33069 === 8))
{var inst_33017 = (state_33068[7]);var state_33068__$1 = state_33068;var statearr_33102_33136 = state_33068__$1;(statearr_33102_33136[2] = inst_33017);
(statearr_33102_33136[1] = 9);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_33106 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33106[0] = state_machine__23755__auto__);
(statearr_33106[1] = 1);
return statearr_33106;
});
var state_machine__23755__auto____1 = (function (state_33068){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_33068);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e33107){if((e33107 instanceof Object))
{var ex__23758__auto__ = e33107;var statearr_33108_33137 = state_33068;(statearr_33108_33137[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33068);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33107;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33138 = state_33068;
state_33068 = G__33138;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_33068){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_33068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_33109 = f__23819__auto__.call(null);(statearr_33109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto___33110);
return statearr_33109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
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
cljs.core.async.Pub = (function (){var obj33140 = {};return obj33140;
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
return (function (p1__33141_SHARP_){if(cljs.core.truth_(p1__33141_SHARP_.call(null,topic)))
{return p1__33141_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__33141_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__14982__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33266 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33266 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33267){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33267 = meta33267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33266.cljs$lang$type = true;
cljs.core.async.t33266.cljs$lang$ctorStr = "cljs.core.async/t33266";
cljs.core.async.t33266.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15549__auto__,writer__15550__auto__,opt__15551__auto__){return cljs.core._write.call(null,writer__15550__auto__,"cljs.core.async/t33266");
});})(mults,ensure_mult))
;
cljs.core.async.t33266.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33266.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33266.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33266.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t33266.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33266.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33266.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33266.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33268){var self__ = this;
var _33268__$1 = this;return self__.meta33267;
});})(mults,ensure_mult))
;
cljs.core.async.t33266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33268,meta33267__$1){var self__ = this;
var _33268__$1 = this;return (new cljs.core.async.t33266(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33267__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33266 = ((function (mults,ensure_mult){
return (function __GT_t33266(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33267){return (new cljs.core.async.t33266(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33267));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33266(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__23818__auto___33390 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_33342){var state_val_33343 = (state_33342[1]);if((state_val_33343 === 7))
{var inst_33338 = (state_33342[2]);var state_33342__$1 = state_33342;var statearr_33344_33391 = state_33342__$1;(statearr_33344_33391[2] = inst_33338);
(statearr_33344_33391[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 20))
{var state_33342__$1 = state_33342;var statearr_33345_33392 = state_33342__$1;(statearr_33345_33392[2] = null);
(statearr_33345_33392[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 1))
{var state_33342__$1 = state_33342;var statearr_33346_33393 = state_33342__$1;(statearr_33346_33393[2] = null);
(statearr_33346_33393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 24))
{var inst_33271 = (state_33342[7]);var inst_33321 = (state_33342[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33342,23,Object,null,22);var inst_33328 = cljs.core.async.muxch_STAR_.call(null,inst_33321);var state_33342__$1 = state_33342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33342__$1,25,inst_33328,inst_33271);
} else
{if((state_val_33343 === 4))
{var inst_33271 = (state_33342[7]);var inst_33271__$1 = (state_33342[2]);var inst_33272 = (inst_33271__$1 == null);var state_33342__$1 = (function (){var statearr_33347 = state_33342;(statearr_33347[7] = inst_33271__$1);
return statearr_33347;
})();if(cljs.core.truth_(inst_33272))
{var statearr_33348_33394 = state_33342__$1;(statearr_33348_33394[1] = 5);
} else
{var statearr_33349_33395 = state_33342__$1;(statearr_33349_33395[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 15))
{var inst_33313 = (state_33342[2]);var state_33342__$1 = state_33342;var statearr_33350_33396 = state_33342__$1;(statearr_33350_33396[2] = inst_33313);
(statearr_33350_33396[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 21))
{var inst_33335 = (state_33342[2]);var state_33342__$1 = (function (){var statearr_33351 = state_33342;(statearr_33351[9] = inst_33335);
return statearr_33351;
})();var statearr_33352_33397 = state_33342__$1;(statearr_33352_33397[2] = null);
(statearr_33352_33397[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 13))
{var inst_33295 = (state_33342[10]);var inst_33297 = cljs.core.chunked_seq_QMARK_.call(null,inst_33295);var state_33342__$1 = state_33342;if(inst_33297)
{var statearr_33353_33398 = state_33342__$1;(statearr_33353_33398[1] = 16);
} else
{var statearr_33354_33399 = state_33342__$1;(statearr_33354_33399[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 22))
{var inst_33332 = (state_33342[2]);var state_33342__$1 = state_33342;var statearr_33355_33400 = state_33342__$1;(statearr_33355_33400[2] = inst_33332);
(statearr_33355_33400[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 6))
{var inst_33271 = (state_33342[7]);var inst_33319 = (state_33342[11]);var inst_33321 = (state_33342[8]);var inst_33319__$1 = topic_fn.call(null,inst_33271);var inst_33320 = cljs.core.deref.call(null,mults);var inst_33321__$1 = cljs.core.get.call(null,inst_33320,inst_33319__$1);var state_33342__$1 = (function (){var statearr_33356 = state_33342;(statearr_33356[11] = inst_33319__$1);
(statearr_33356[8] = inst_33321__$1);
return statearr_33356;
})();if(cljs.core.truth_(inst_33321__$1))
{var statearr_33357_33401 = state_33342__$1;(statearr_33357_33401[1] = 19);
} else
{var statearr_33358_33402 = state_33342__$1;(statearr_33358_33402[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 25))
{var inst_33330 = (state_33342[2]);var state_33342__$1 = state_33342;var statearr_33359_33403 = state_33342__$1;(statearr_33359_33403[2] = inst_33330);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33342__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 17))
{var inst_33295 = (state_33342[10]);var inst_33304 = cljs.core.first.call(null,inst_33295);var inst_33305 = cljs.core.async.muxch_STAR_.call(null,inst_33304);var inst_33306 = cljs.core.async.close_BANG_.call(null,inst_33305);var inst_33307 = cljs.core.next.call(null,inst_33295);var inst_33281 = inst_33307;var inst_33282 = null;var inst_33283 = 0;var inst_33284 = 0;var state_33342__$1 = (function (){var statearr_33360 = state_33342;(statearr_33360[12] = inst_33282);
(statearr_33360[13] = inst_33283);
(statearr_33360[14] = inst_33306);
(statearr_33360[15] = inst_33281);
(statearr_33360[16] = inst_33284);
return statearr_33360;
})();var statearr_33361_33404 = state_33342__$1;(statearr_33361_33404[2] = null);
(statearr_33361_33404[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 3))
{var inst_33340 = (state_33342[2]);var state_33342__$1 = state_33342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33342__$1,inst_33340);
} else
{if((state_val_33343 === 12))
{var inst_33315 = (state_33342[2]);var state_33342__$1 = state_33342;var statearr_33362_33405 = state_33342__$1;(statearr_33362_33405[2] = inst_33315);
(statearr_33362_33405[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 2))
{var state_33342__$1 = state_33342;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33342__$1,4,ch);
} else
{if((state_val_33343 === 23))
{var inst_33319 = (state_33342[11]);var inst_33323 = (state_33342[2]);var inst_33324 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33319);var state_33342__$1 = (function (){var statearr_33363 = state_33342;(statearr_33363[17] = inst_33323);
return statearr_33363;
})();var statearr_33364_33406 = state_33342__$1;(statearr_33364_33406[2] = inst_33324);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33342__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 19))
{var state_33342__$1 = state_33342;var statearr_33365_33407 = state_33342__$1;(statearr_33365_33407[2] = null);
(statearr_33365_33407[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 11))
{var inst_33295 = (state_33342[10]);var inst_33281 = (state_33342[15]);var inst_33295__$1 = cljs.core.seq.call(null,inst_33281);var state_33342__$1 = (function (){var statearr_33366 = state_33342;(statearr_33366[10] = inst_33295__$1);
return statearr_33366;
})();if(inst_33295__$1)
{var statearr_33367_33408 = state_33342__$1;(statearr_33367_33408[1] = 13);
} else
{var statearr_33368_33409 = state_33342__$1;(statearr_33368_33409[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 9))
{var inst_33317 = (state_33342[2]);var state_33342__$1 = state_33342;var statearr_33369_33410 = state_33342__$1;(statearr_33369_33410[2] = inst_33317);
(statearr_33369_33410[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 5))
{var inst_33278 = cljs.core.deref.call(null,mults);var inst_33279 = cljs.core.vals.call(null,inst_33278);var inst_33280 = cljs.core.seq.call(null,inst_33279);var inst_33281 = inst_33280;var inst_33282 = null;var inst_33283 = 0;var inst_33284 = 0;var state_33342__$1 = (function (){var statearr_33370 = state_33342;(statearr_33370[12] = inst_33282);
(statearr_33370[13] = inst_33283);
(statearr_33370[15] = inst_33281);
(statearr_33370[16] = inst_33284);
return statearr_33370;
})();var statearr_33371_33411 = state_33342__$1;(statearr_33371_33411[2] = null);
(statearr_33371_33411[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 14))
{var state_33342__$1 = state_33342;var statearr_33375_33412 = state_33342__$1;(statearr_33375_33412[2] = null);
(statearr_33375_33412[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 16))
{var inst_33295 = (state_33342[10]);var inst_33299 = cljs.core.chunk_first.call(null,inst_33295);var inst_33300 = cljs.core.chunk_rest.call(null,inst_33295);var inst_33301 = cljs.core.count.call(null,inst_33299);var inst_33281 = inst_33300;var inst_33282 = inst_33299;var inst_33283 = inst_33301;var inst_33284 = 0;var state_33342__$1 = (function (){var statearr_33376 = state_33342;(statearr_33376[12] = inst_33282);
(statearr_33376[13] = inst_33283);
(statearr_33376[15] = inst_33281);
(statearr_33376[16] = inst_33284);
return statearr_33376;
})();var statearr_33377_33413 = state_33342__$1;(statearr_33377_33413[2] = null);
(statearr_33377_33413[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 10))
{var inst_33282 = (state_33342[12]);var inst_33283 = (state_33342[13]);var inst_33281 = (state_33342[15]);var inst_33284 = (state_33342[16]);var inst_33289 = cljs.core._nth.call(null,inst_33282,inst_33284);var inst_33290 = cljs.core.async.muxch_STAR_.call(null,inst_33289);var inst_33291 = cljs.core.async.close_BANG_.call(null,inst_33290);var inst_33292 = (inst_33284 + 1);var tmp33372 = inst_33282;var tmp33373 = inst_33283;var tmp33374 = inst_33281;var inst_33281__$1 = tmp33374;var inst_33282__$1 = tmp33372;var inst_33283__$1 = tmp33373;var inst_33284__$1 = inst_33292;var state_33342__$1 = (function (){var statearr_33378 = state_33342;(statearr_33378[12] = inst_33282__$1);
(statearr_33378[18] = inst_33291);
(statearr_33378[13] = inst_33283__$1);
(statearr_33378[15] = inst_33281__$1);
(statearr_33378[16] = inst_33284__$1);
return statearr_33378;
})();var statearr_33379_33414 = state_33342__$1;(statearr_33379_33414[2] = null);
(statearr_33379_33414[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 18))
{var inst_33310 = (state_33342[2]);var state_33342__$1 = state_33342;var statearr_33380_33415 = state_33342__$1;(statearr_33380_33415[2] = inst_33310);
(statearr_33380_33415[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33343 === 8))
{var inst_33283 = (state_33342[13]);var inst_33284 = (state_33342[16]);var inst_33286 = (inst_33284 < inst_33283);var inst_33287 = inst_33286;var state_33342__$1 = state_33342;if(cljs.core.truth_(inst_33287))
{var statearr_33381_33416 = state_33342__$1;(statearr_33381_33416[1] = 10);
} else
{var statearr_33382_33417 = state_33342__$1;(statearr_33382_33417[1] = 11);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_33386 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33386[0] = state_machine__23755__auto__);
(statearr_33386[1] = 1);
return statearr_33386;
});
var state_machine__23755__auto____1 = (function (state_33342){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_33342);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e33387){if((e33387 instanceof Object))
{var ex__23758__auto__ = e33387;var statearr_33388_33418 = state_33342;(statearr_33388_33418[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33342);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33387;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33419 = state_33342;
state_33342 = G__33419;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_33342){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_33342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_33389 = f__23819__auto__.call(null);(statearr_33389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto___33390);
return statearr_33389;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
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
,cljs.core.range.call(null,cnt));var c__23818__auto___33556 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_33526){var state_val_33527 = (state_33526[1]);if((state_val_33527 === 7))
{var state_33526__$1 = state_33526;var statearr_33528_33557 = state_33526__$1;(statearr_33528_33557[2] = null);
(statearr_33528_33557[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33527 === 1))
{var state_33526__$1 = state_33526;var statearr_33529_33558 = state_33526__$1;(statearr_33529_33558[2] = null);
(statearr_33529_33558[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33527 === 4))
{var inst_33490 = (state_33526[7]);var inst_33492 = (inst_33490 < cnt);var state_33526__$1 = state_33526;if(cljs.core.truth_(inst_33492))
{var statearr_33530_33559 = state_33526__$1;(statearr_33530_33559[1] = 6);
} else
{var statearr_33531_33560 = state_33526__$1;(statearr_33531_33560[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33527 === 15))
{var inst_33522 = (state_33526[2]);var state_33526__$1 = state_33526;var statearr_33532_33561 = state_33526__$1;(statearr_33532_33561[2] = inst_33522);
(statearr_33532_33561[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33527 === 13))
{var inst_33515 = cljs.core.async.close_BANG_.call(null,out);var state_33526__$1 = state_33526;var statearr_33533_33562 = state_33526__$1;(statearr_33533_33562[2] = inst_33515);
(statearr_33533_33562[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33527 === 6))
{var state_33526__$1 = state_33526;var statearr_33534_33563 = state_33526__$1;(statearr_33534_33563[2] = null);
(statearr_33534_33563[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33527 === 3))
{var inst_33524 = (state_33526[2]);var state_33526__$1 = state_33526;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33526__$1,inst_33524);
} else
{if((state_val_33527 === 12))
{var inst_33512 = (state_33526[8]);var inst_33512__$1 = (state_33526[2]);var inst_33513 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33512__$1);var state_33526__$1 = (function (){var statearr_33535 = state_33526;(statearr_33535[8] = inst_33512__$1);
return statearr_33535;
})();if(cljs.core.truth_(inst_33513))
{var statearr_33536_33564 = state_33526__$1;(statearr_33536_33564[1] = 13);
} else
{var statearr_33537_33565 = state_33526__$1;(statearr_33537_33565[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33527 === 2))
{var inst_33489 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_33490 = 0;var state_33526__$1 = (function (){var statearr_33538 = state_33526;(statearr_33538[9] = inst_33489);
(statearr_33538[7] = inst_33490);
return statearr_33538;
})();var statearr_33539_33566 = state_33526__$1;(statearr_33539_33566[2] = null);
(statearr_33539_33566[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33527 === 11))
{var inst_33490 = (state_33526[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33526,10,Object,null,9);var inst_33499 = chs__$1.call(null,inst_33490);var inst_33500 = done.call(null,inst_33490);var inst_33501 = cljs.core.async.take_BANG_.call(null,inst_33499,inst_33500);var state_33526__$1 = state_33526;var statearr_33540_33567 = state_33526__$1;(statearr_33540_33567[2] = inst_33501);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33526__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33527 === 9))
{var inst_33490 = (state_33526[7]);var inst_33503 = (state_33526[2]);var inst_33504 = (inst_33490 + 1);var inst_33490__$1 = inst_33504;var state_33526__$1 = (function (){var statearr_33541 = state_33526;(statearr_33541[7] = inst_33490__$1);
(statearr_33541[10] = inst_33503);
return statearr_33541;
})();var statearr_33542_33568 = state_33526__$1;(statearr_33542_33568[2] = null);
(statearr_33542_33568[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33527 === 5))
{var inst_33510 = (state_33526[2]);var state_33526__$1 = (function (){var statearr_33543 = state_33526;(statearr_33543[11] = inst_33510);
return statearr_33543;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33526__$1,12,dchan);
} else
{if((state_val_33527 === 14))
{var inst_33512 = (state_33526[8]);var inst_33517 = cljs.core.apply.call(null,f,inst_33512);var state_33526__$1 = state_33526;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33526__$1,16,out,inst_33517);
} else
{if((state_val_33527 === 16))
{var inst_33519 = (state_33526[2]);var state_33526__$1 = (function (){var statearr_33544 = state_33526;(statearr_33544[12] = inst_33519);
return statearr_33544;
})();var statearr_33545_33569 = state_33526__$1;(statearr_33545_33569[2] = null);
(statearr_33545_33569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33527 === 10))
{var inst_33494 = (state_33526[2]);var inst_33495 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_33526__$1 = (function (){var statearr_33546 = state_33526;(statearr_33546[13] = inst_33494);
return statearr_33546;
})();var statearr_33547_33570 = state_33526__$1;(statearr_33547_33570[2] = inst_33495);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33526__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33527 === 8))
{var inst_33508 = (state_33526[2]);var state_33526__$1 = state_33526;var statearr_33548_33571 = state_33526__$1;(statearr_33548_33571[2] = inst_33508);
(statearr_33548_33571[1] = 5);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_33552 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33552[0] = state_machine__23755__auto__);
(statearr_33552[1] = 1);
return statearr_33552;
});
var state_machine__23755__auto____1 = (function (state_33526){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_33526);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e33553){if((e33553 instanceof Object))
{var ex__23758__auto__ = e33553;var statearr_33554_33572 = state_33526;(statearr_33554_33572[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33526);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33573 = state_33526;
state_33526 = G__33573;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_33526){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_33526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_33555 = f__23819__auto__.call(null);(statearr_33555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto___33556);
return statearr_33555;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23818__auto___33681 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_33657){var state_val_33658 = (state_33657[1]);if((state_val_33658 === 7))
{var inst_33636 = (state_33657[7]);var inst_33637 = (state_33657[8]);var inst_33636__$1 = (state_33657[2]);var inst_33637__$1 = cljs.core.nth.call(null,inst_33636__$1,0,null);var inst_33638 = cljs.core.nth.call(null,inst_33636__$1,1,null);var inst_33639 = (inst_33637__$1 == null);var state_33657__$1 = (function (){var statearr_33659 = state_33657;(statearr_33659[7] = inst_33636__$1);
(statearr_33659[9] = inst_33638);
(statearr_33659[8] = inst_33637__$1);
return statearr_33659;
})();if(cljs.core.truth_(inst_33639))
{var statearr_33660_33682 = state_33657__$1;(statearr_33660_33682[1] = 8);
} else
{var statearr_33661_33683 = state_33657__$1;(statearr_33661_33683[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33658 === 1))
{var inst_33628 = cljs.core.vec.call(null,chs);var inst_33629 = inst_33628;var state_33657__$1 = (function (){var statearr_33662 = state_33657;(statearr_33662[10] = inst_33629);
return statearr_33662;
})();var statearr_33663_33684 = state_33657__$1;(statearr_33663_33684[2] = null);
(statearr_33663_33684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33658 === 4))
{var inst_33629 = (state_33657[10]);var state_33657__$1 = state_33657;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33657__$1,7,inst_33629);
} else
{if((state_val_33658 === 6))
{var inst_33653 = (state_33657[2]);var state_33657__$1 = state_33657;var statearr_33664_33685 = state_33657__$1;(statearr_33664_33685[2] = inst_33653);
(statearr_33664_33685[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33658 === 3))
{var inst_33655 = (state_33657[2]);var state_33657__$1 = state_33657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33657__$1,inst_33655);
} else
{if((state_val_33658 === 2))
{var inst_33629 = (state_33657[10]);var inst_33631 = cljs.core.count.call(null,inst_33629);var inst_33632 = (inst_33631 > 0);var state_33657__$1 = state_33657;if(cljs.core.truth_(inst_33632))
{var statearr_33666_33686 = state_33657__$1;(statearr_33666_33686[1] = 4);
} else
{var statearr_33667_33687 = state_33657__$1;(statearr_33667_33687[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33658 === 11))
{var inst_33629 = (state_33657[10]);var inst_33646 = (state_33657[2]);var tmp33665 = inst_33629;var inst_33629__$1 = tmp33665;var state_33657__$1 = (function (){var statearr_33668 = state_33657;(statearr_33668[11] = inst_33646);
(statearr_33668[10] = inst_33629__$1);
return statearr_33668;
})();var statearr_33669_33688 = state_33657__$1;(statearr_33669_33688[2] = null);
(statearr_33669_33688[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33658 === 9))
{var inst_33637 = (state_33657[8]);var state_33657__$1 = state_33657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33657__$1,11,out,inst_33637);
} else
{if((state_val_33658 === 5))
{var inst_33651 = cljs.core.async.close_BANG_.call(null,out);var state_33657__$1 = state_33657;var statearr_33670_33689 = state_33657__$1;(statearr_33670_33689[2] = inst_33651);
(statearr_33670_33689[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33658 === 10))
{var inst_33649 = (state_33657[2]);var state_33657__$1 = state_33657;var statearr_33671_33690 = state_33657__$1;(statearr_33671_33690[2] = inst_33649);
(statearr_33671_33690[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33658 === 8))
{var inst_33636 = (state_33657[7]);var inst_33629 = (state_33657[10]);var inst_33638 = (state_33657[9]);var inst_33637 = (state_33657[8]);var inst_33641 = (function (){var c = inst_33638;var v = inst_33637;var vec__33634 = inst_33636;var cs = inst_33629;return ((function (c,v,vec__33634,cs,inst_33636,inst_33629,inst_33638,inst_33637,state_val_33658){
return (function (p1__33574_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__33574_SHARP_);
});
;})(c,v,vec__33634,cs,inst_33636,inst_33629,inst_33638,inst_33637,state_val_33658))
})();var inst_33642 = cljs.core.filterv.call(null,inst_33641,inst_33629);var inst_33629__$1 = inst_33642;var state_33657__$1 = (function (){var statearr_33672 = state_33657;(statearr_33672[10] = inst_33629__$1);
return statearr_33672;
})();var statearr_33673_33691 = state_33657__$1;(statearr_33673_33691[2] = null);
(statearr_33673_33691[1] = 2);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_33677 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33677[0] = state_machine__23755__auto__);
(statearr_33677[1] = 1);
return statearr_33677;
});
var state_machine__23755__auto____1 = (function (state_33657){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_33657);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e33678){if((e33678 instanceof Object))
{var ex__23758__auto__ = e33678;var statearr_33679_33692 = state_33657;(statearr_33679_33692[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33657);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33678;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33693 = state_33657;
state_33657 = G__33693;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_33657){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_33657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_33680 = f__23819__auto__.call(null);(statearr_33680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto___33681);
return statearr_33680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23818__auto___33786 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_33763){var state_val_33764 = (state_33763[1]);if((state_val_33764 === 7))
{var inst_33745 = (state_33763[7]);var inst_33745__$1 = (state_33763[2]);var inst_33746 = (inst_33745__$1 == null);var inst_33747 = cljs.core.not.call(null,inst_33746);var state_33763__$1 = (function (){var statearr_33765 = state_33763;(statearr_33765[7] = inst_33745__$1);
return statearr_33765;
})();if(inst_33747)
{var statearr_33766_33787 = state_33763__$1;(statearr_33766_33787[1] = 8);
} else
{var statearr_33767_33788 = state_33763__$1;(statearr_33767_33788[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33764 === 1))
{var inst_33740 = 0;var state_33763__$1 = (function (){var statearr_33768 = state_33763;(statearr_33768[8] = inst_33740);
return statearr_33768;
})();var statearr_33769_33789 = state_33763__$1;(statearr_33769_33789[2] = null);
(statearr_33769_33789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33764 === 4))
{var state_33763__$1 = state_33763;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33763__$1,7,ch);
} else
{if((state_val_33764 === 6))
{var inst_33758 = (state_33763[2]);var state_33763__$1 = state_33763;var statearr_33770_33790 = state_33763__$1;(statearr_33770_33790[2] = inst_33758);
(statearr_33770_33790[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33764 === 3))
{var inst_33760 = (state_33763[2]);var inst_33761 = cljs.core.async.close_BANG_.call(null,out);var state_33763__$1 = (function (){var statearr_33771 = state_33763;(statearr_33771[9] = inst_33760);
return statearr_33771;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33763__$1,inst_33761);
} else
{if((state_val_33764 === 2))
{var inst_33740 = (state_33763[8]);var inst_33742 = (inst_33740 < n);var state_33763__$1 = state_33763;if(cljs.core.truth_(inst_33742))
{var statearr_33772_33791 = state_33763__$1;(statearr_33772_33791[1] = 4);
} else
{var statearr_33773_33792 = state_33763__$1;(statearr_33773_33792[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33764 === 11))
{var inst_33740 = (state_33763[8]);var inst_33750 = (state_33763[2]);var inst_33751 = (inst_33740 + 1);var inst_33740__$1 = inst_33751;var state_33763__$1 = (function (){var statearr_33774 = state_33763;(statearr_33774[10] = inst_33750);
(statearr_33774[8] = inst_33740__$1);
return statearr_33774;
})();var statearr_33775_33793 = state_33763__$1;(statearr_33775_33793[2] = null);
(statearr_33775_33793[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33764 === 9))
{var state_33763__$1 = state_33763;var statearr_33776_33794 = state_33763__$1;(statearr_33776_33794[2] = null);
(statearr_33776_33794[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33764 === 5))
{var state_33763__$1 = state_33763;var statearr_33777_33795 = state_33763__$1;(statearr_33777_33795[2] = null);
(statearr_33777_33795[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33764 === 10))
{var inst_33755 = (state_33763[2]);var state_33763__$1 = state_33763;var statearr_33778_33796 = state_33763__$1;(statearr_33778_33796[2] = inst_33755);
(statearr_33778_33796[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33764 === 8))
{var inst_33745 = (state_33763[7]);var state_33763__$1 = state_33763;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33763__$1,11,out,inst_33745);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_33782 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33782[0] = state_machine__23755__auto__);
(statearr_33782[1] = 1);
return statearr_33782;
});
var state_machine__23755__auto____1 = (function (state_33763){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_33763);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e33783){if((e33783 instanceof Object))
{var ex__23758__auto__ = e33783;var statearr_33784_33797 = state_33763;(statearr_33784_33797[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33763);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33783;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33798 = state_33763;
state_33763 = G__33798;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_33763){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_33763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_33785 = f__23819__auto__.call(null);(statearr_33785[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto___33786);
return statearr_33785;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23818__auto___33895 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_33870){var state_val_33871 = (state_33870[1]);if((state_val_33871 === 7))
{var inst_33865 = (state_33870[2]);var state_33870__$1 = state_33870;var statearr_33872_33896 = state_33870__$1;(statearr_33872_33896[2] = inst_33865);
(statearr_33872_33896[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33871 === 1))
{var inst_33847 = null;var state_33870__$1 = (function (){var statearr_33873 = state_33870;(statearr_33873[7] = inst_33847);
return statearr_33873;
})();var statearr_33874_33897 = state_33870__$1;(statearr_33874_33897[2] = null);
(statearr_33874_33897[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33871 === 4))
{var inst_33850 = (state_33870[8]);var inst_33850__$1 = (state_33870[2]);var inst_33851 = (inst_33850__$1 == null);var inst_33852 = cljs.core.not.call(null,inst_33851);var state_33870__$1 = (function (){var statearr_33875 = state_33870;(statearr_33875[8] = inst_33850__$1);
return statearr_33875;
})();if(inst_33852)
{var statearr_33876_33898 = state_33870__$1;(statearr_33876_33898[1] = 5);
} else
{var statearr_33877_33899 = state_33870__$1;(statearr_33877_33899[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33871 === 6))
{var state_33870__$1 = state_33870;var statearr_33878_33900 = state_33870__$1;(statearr_33878_33900[2] = null);
(statearr_33878_33900[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33871 === 3))
{var inst_33867 = (state_33870[2]);var inst_33868 = cljs.core.async.close_BANG_.call(null,out);var state_33870__$1 = (function (){var statearr_33879 = state_33870;(statearr_33879[9] = inst_33867);
return statearr_33879;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33870__$1,inst_33868);
} else
{if((state_val_33871 === 2))
{var state_33870__$1 = state_33870;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33870__$1,4,ch);
} else
{if((state_val_33871 === 11))
{var inst_33850 = (state_33870[8]);var inst_33859 = (state_33870[2]);var inst_33847 = inst_33850;var state_33870__$1 = (function (){var statearr_33880 = state_33870;(statearr_33880[10] = inst_33859);
(statearr_33880[7] = inst_33847);
return statearr_33880;
})();var statearr_33881_33901 = state_33870__$1;(statearr_33881_33901[2] = null);
(statearr_33881_33901[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33871 === 9))
{var inst_33850 = (state_33870[8]);var state_33870__$1 = state_33870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33870__$1,11,out,inst_33850);
} else
{if((state_val_33871 === 5))
{var inst_33850 = (state_33870[8]);var inst_33847 = (state_33870[7]);var inst_33854 = cljs.core._EQ_.call(null,inst_33850,inst_33847);var state_33870__$1 = state_33870;if(inst_33854)
{var statearr_33883_33902 = state_33870__$1;(statearr_33883_33902[1] = 8);
} else
{var statearr_33884_33903 = state_33870__$1;(statearr_33884_33903[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33871 === 10))
{var inst_33862 = (state_33870[2]);var state_33870__$1 = state_33870;var statearr_33885_33904 = state_33870__$1;(statearr_33885_33904[2] = inst_33862);
(statearr_33885_33904[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33871 === 8))
{var inst_33847 = (state_33870[7]);var tmp33882 = inst_33847;var inst_33847__$1 = tmp33882;var state_33870__$1 = (function (){var statearr_33886 = state_33870;(statearr_33886[7] = inst_33847__$1);
return statearr_33886;
})();var statearr_33887_33905 = state_33870__$1;(statearr_33887_33905[2] = null);
(statearr_33887_33905[1] = 2);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_33891 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33891[0] = state_machine__23755__auto__);
(statearr_33891[1] = 1);
return statearr_33891;
});
var state_machine__23755__auto____1 = (function (state_33870){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_33870);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e33892){if((e33892 instanceof Object))
{var ex__23758__auto__ = e33892;var statearr_33893_33906 = state_33870;(statearr_33893_33906[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33870);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33907 = state_33870;
state_33870 = G__33907;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_33870){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_33870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_33894 = f__23819__auto__.call(null);(statearr_33894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto___33895);
return statearr_33894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23818__auto___34042 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_34012){var state_val_34013 = (state_34012[1]);if((state_val_34013 === 7))
{var inst_34008 = (state_34012[2]);var state_34012__$1 = state_34012;var statearr_34014_34043 = state_34012__$1;(statearr_34014_34043[2] = inst_34008);
(statearr_34014_34043[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34013 === 1))
{var inst_33975 = (new Array(n));var inst_33976 = inst_33975;var inst_33977 = 0;var state_34012__$1 = (function (){var statearr_34015 = state_34012;(statearr_34015[7] = inst_33976);
(statearr_34015[8] = inst_33977);
return statearr_34015;
})();var statearr_34016_34044 = state_34012__$1;(statearr_34016_34044[2] = null);
(statearr_34016_34044[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34013 === 4))
{var inst_33980 = (state_34012[9]);var inst_33980__$1 = (state_34012[2]);var inst_33981 = (inst_33980__$1 == null);var inst_33982 = cljs.core.not.call(null,inst_33981);var state_34012__$1 = (function (){var statearr_34017 = state_34012;(statearr_34017[9] = inst_33980__$1);
return statearr_34017;
})();if(inst_33982)
{var statearr_34018_34045 = state_34012__$1;(statearr_34018_34045[1] = 5);
} else
{var statearr_34019_34046 = state_34012__$1;(statearr_34019_34046[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34013 === 15))
{var inst_34002 = (state_34012[2]);var state_34012__$1 = state_34012;var statearr_34020_34047 = state_34012__$1;(statearr_34020_34047[2] = inst_34002);
(statearr_34020_34047[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34013 === 13))
{var state_34012__$1 = state_34012;var statearr_34021_34048 = state_34012__$1;(statearr_34021_34048[2] = null);
(statearr_34021_34048[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34013 === 6))
{var inst_33977 = (state_34012[8]);var inst_33998 = (inst_33977 > 0);var state_34012__$1 = state_34012;if(cljs.core.truth_(inst_33998))
{var statearr_34022_34049 = state_34012__$1;(statearr_34022_34049[1] = 12);
} else
{var statearr_34023_34050 = state_34012__$1;(statearr_34023_34050[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34013 === 3))
{var inst_34010 = (state_34012[2]);var state_34012__$1 = state_34012;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34012__$1,inst_34010);
} else
{if((state_val_34013 === 12))
{var inst_33976 = (state_34012[7]);var inst_34000 = cljs.core.vec.call(null,inst_33976);var state_34012__$1 = state_34012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34012__$1,15,out,inst_34000);
} else
{if((state_val_34013 === 2))
{var state_34012__$1 = state_34012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34012__$1,4,ch);
} else
{if((state_val_34013 === 11))
{var inst_33992 = (state_34012[2]);var inst_33993 = (new Array(n));var inst_33976 = inst_33993;var inst_33977 = 0;var state_34012__$1 = (function (){var statearr_34024 = state_34012;(statearr_34024[7] = inst_33976);
(statearr_34024[8] = inst_33977);
(statearr_34024[10] = inst_33992);
return statearr_34024;
})();var statearr_34025_34051 = state_34012__$1;(statearr_34025_34051[2] = null);
(statearr_34025_34051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34013 === 9))
{var inst_33976 = (state_34012[7]);var inst_33990 = cljs.core.vec.call(null,inst_33976);var state_34012__$1 = state_34012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34012__$1,11,out,inst_33990);
} else
{if((state_val_34013 === 5))
{var inst_33985 = (state_34012[11]);var inst_33980 = (state_34012[9]);var inst_33976 = (state_34012[7]);var inst_33977 = (state_34012[8]);var inst_33984 = (inst_33976[inst_33977] = inst_33980);var inst_33985__$1 = (inst_33977 + 1);var inst_33986 = (inst_33985__$1 < n);var state_34012__$1 = (function (){var statearr_34026 = state_34012;(statearr_34026[11] = inst_33985__$1);
(statearr_34026[12] = inst_33984);
return statearr_34026;
})();if(cljs.core.truth_(inst_33986))
{var statearr_34027_34052 = state_34012__$1;(statearr_34027_34052[1] = 8);
} else
{var statearr_34028_34053 = state_34012__$1;(statearr_34028_34053[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34013 === 14))
{var inst_34005 = (state_34012[2]);var inst_34006 = cljs.core.async.close_BANG_.call(null,out);var state_34012__$1 = (function (){var statearr_34030 = state_34012;(statearr_34030[13] = inst_34005);
return statearr_34030;
})();var statearr_34031_34054 = state_34012__$1;(statearr_34031_34054[2] = inst_34006);
(statearr_34031_34054[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34013 === 10))
{var inst_33996 = (state_34012[2]);var state_34012__$1 = state_34012;var statearr_34032_34055 = state_34012__$1;(statearr_34032_34055[2] = inst_33996);
(statearr_34032_34055[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34013 === 8))
{var inst_33985 = (state_34012[11]);var inst_33976 = (state_34012[7]);var tmp34029 = inst_33976;var inst_33976__$1 = tmp34029;var inst_33977 = inst_33985;var state_34012__$1 = (function (){var statearr_34033 = state_34012;(statearr_34033[7] = inst_33976__$1);
(statearr_34033[8] = inst_33977);
return statearr_34033;
})();var statearr_34034_34056 = state_34012__$1;(statearr_34034_34056[2] = null);
(statearr_34034_34056[1] = 2);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_34038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34038[0] = state_machine__23755__auto__);
(statearr_34038[1] = 1);
return statearr_34038;
});
var state_machine__23755__auto____1 = (function (state_34012){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_34012);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e34039){if((e34039 instanceof Object))
{var ex__23758__auto__ = e34039;var statearr_34040_34057 = state_34012;(statearr_34040_34057[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34039;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34058 = state_34012;
state_34012 = G__34058;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_34012){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_34012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_34041 = f__23819__auto__.call(null);(statearr_34041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto___34042);
return statearr_34041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__23818__auto___34201 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__23819__auto__ = (function (){var switch__23754__auto__ = (function (state_34171){var state_val_34172 = (state_34171[1]);if((state_val_34172 === 7))
{var inst_34167 = (state_34171[2]);var state_34171__$1 = state_34171;var statearr_34173_34202 = state_34171__$1;(statearr_34173_34202[2] = inst_34167);
(statearr_34173_34202[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 1))
{var inst_34130 = [];var inst_34131 = inst_34130;var inst_34132 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_34171__$1 = (function (){var statearr_34174 = state_34171;(statearr_34174[7] = inst_34132);
(statearr_34174[8] = inst_34131);
return statearr_34174;
})();var statearr_34175_34203 = state_34171__$1;(statearr_34175_34203[2] = null);
(statearr_34175_34203[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 4))
{var inst_34135 = (state_34171[9]);var inst_34135__$1 = (state_34171[2]);var inst_34136 = (inst_34135__$1 == null);var inst_34137 = cljs.core.not.call(null,inst_34136);var state_34171__$1 = (function (){var statearr_34176 = state_34171;(statearr_34176[9] = inst_34135__$1);
return statearr_34176;
})();if(inst_34137)
{var statearr_34177_34204 = state_34171__$1;(statearr_34177_34204[1] = 5);
} else
{var statearr_34178_34205 = state_34171__$1;(statearr_34178_34205[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 15))
{var inst_34161 = (state_34171[2]);var state_34171__$1 = state_34171;var statearr_34179_34206 = state_34171__$1;(statearr_34179_34206[2] = inst_34161);
(statearr_34179_34206[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 13))
{var state_34171__$1 = state_34171;var statearr_34180_34207 = state_34171__$1;(statearr_34180_34207[2] = null);
(statearr_34180_34207[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 6))
{var inst_34131 = (state_34171[8]);var inst_34156 = inst_34131.length;var inst_34157 = (inst_34156 > 0);var state_34171__$1 = state_34171;if(cljs.core.truth_(inst_34157))
{var statearr_34181_34208 = state_34171__$1;(statearr_34181_34208[1] = 12);
} else
{var statearr_34182_34209 = state_34171__$1;(statearr_34182_34209[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 3))
{var inst_34169 = (state_34171[2]);var state_34171__$1 = state_34171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34171__$1,inst_34169);
} else
{if((state_val_34172 === 12))
{var inst_34131 = (state_34171[8]);var inst_34159 = cljs.core.vec.call(null,inst_34131);var state_34171__$1 = state_34171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34171__$1,15,out,inst_34159);
} else
{if((state_val_34172 === 2))
{var state_34171__$1 = state_34171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34171__$1,4,ch);
} else
{if((state_val_34172 === 11))
{var inst_34135 = (state_34171[9]);var inst_34139 = (state_34171[10]);var inst_34149 = (state_34171[2]);var inst_34150 = [];var inst_34151 = inst_34150.push(inst_34135);var inst_34131 = inst_34150;var inst_34132 = inst_34139;var state_34171__$1 = (function (){var statearr_34183 = state_34171;(statearr_34183[11] = inst_34149);
(statearr_34183[7] = inst_34132);
(statearr_34183[12] = inst_34151);
(statearr_34183[8] = inst_34131);
return statearr_34183;
})();var statearr_34184_34210 = state_34171__$1;(statearr_34184_34210[2] = null);
(statearr_34184_34210[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 9))
{var inst_34131 = (state_34171[8]);var inst_34147 = cljs.core.vec.call(null,inst_34131);var state_34171__$1 = state_34171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34171__$1,11,out,inst_34147);
} else
{if((state_val_34172 === 5))
{var inst_34132 = (state_34171[7]);var inst_34135 = (state_34171[9]);var inst_34139 = (state_34171[10]);var inst_34139__$1 = f.call(null,inst_34135);var inst_34140 = cljs.core._EQ_.call(null,inst_34139__$1,inst_34132);var inst_34141 = cljs.core.keyword_identical_QMARK_.call(null,inst_34132,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_34142 = (inst_34140) || (inst_34141);var state_34171__$1 = (function (){var statearr_34185 = state_34171;(statearr_34185[10] = inst_34139__$1);
return statearr_34185;
})();if(cljs.core.truth_(inst_34142))
{var statearr_34186_34211 = state_34171__$1;(statearr_34186_34211[1] = 8);
} else
{var statearr_34187_34212 = state_34171__$1;(statearr_34187_34212[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 14))
{var inst_34164 = (state_34171[2]);var inst_34165 = cljs.core.async.close_BANG_.call(null,out);var state_34171__$1 = (function (){var statearr_34189 = state_34171;(statearr_34189[13] = inst_34164);
return statearr_34189;
})();var statearr_34190_34213 = state_34171__$1;(statearr_34190_34213[2] = inst_34165);
(statearr_34190_34213[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 10))
{var inst_34154 = (state_34171[2]);var state_34171__$1 = state_34171;var statearr_34191_34214 = state_34171__$1;(statearr_34191_34214[2] = inst_34154);
(statearr_34191_34214[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 8))
{var inst_34135 = (state_34171[9]);var inst_34139 = (state_34171[10]);var inst_34131 = (state_34171[8]);var inst_34144 = inst_34131.push(inst_34135);var tmp34188 = inst_34131;var inst_34131__$1 = tmp34188;var inst_34132 = inst_34139;var state_34171__$1 = (function (){var statearr_34192 = state_34171;(statearr_34192[7] = inst_34132);
(statearr_34192[14] = inst_34144);
(statearr_34192[8] = inst_34131__$1);
return statearr_34192;
})();var statearr_34193_34215 = state_34171__$1;(statearr_34193_34215[2] = null);
(statearr_34193_34215[1] = 2);
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
});return ((function (switch__23754__auto__){
return (function() {
var state_machine__23755__auto__ = null;
var state_machine__23755__auto____0 = (function (){var statearr_34197 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34197[0] = state_machine__23755__auto__);
(statearr_34197[1] = 1);
return statearr_34197;
});
var state_machine__23755__auto____1 = (function (state_34171){while(true){
var ret_value__23756__auto__ = (function (){try{while(true){
var result__23757__auto__ = switch__23754__auto__.call(null,state_34171);if(cljs.core.keyword_identical_QMARK_.call(null,result__23757__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__23757__auto__;
}
break;
}
}catch (e34198){if((e34198 instanceof Object))
{var ex__23758__auto__ = e34198;var statearr_34199_34216 = state_34171;(statearr_34199_34216[5] = ex__23758__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34171);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34198;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__23756__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34217 = state_34171;
state_34171 = G__34217;
continue;
}
} else
{return ret_value__23756__auto__;
}
break;
}
});
state_machine__23755__auto__ = function(state_34171){
switch(arguments.length){
case 0:
return state_machine__23755__auto____0.call(this);
case 1:
return state_machine__23755__auto____1.call(this,state_34171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__23755__auto____0;
state_machine__23755__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__23755__auto____1;
return state_machine__23755__auto__;
})()
;})(switch__23754__auto__))
})();var state__23820__auto__ = (function (){var statearr_34200 = f__23819__auto__.call(null);(statearr_34200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__23818__auto___34201);
return statearr_34200;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__23820__auto__);
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

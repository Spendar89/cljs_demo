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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t44287 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44287 = (function (f,fn_handler,meta44288){
this.f = f;
this.fn_handler = fn_handler;
this.meta44288 = meta44288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44287.cljs$lang$type = true;
cljs.core.async.t44287.cljs$lang$ctorStr = "cljs.core.async/t44287";
cljs.core.async.t44287.cljs$lang$ctorPrWriter = (function (this__15654__auto__,writer__15655__auto__,opt__15656__auto__){return cljs.core._write.call(null,writer__15655__auto__,"cljs.core.async/t44287");
});
cljs.core.async.t44287.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t44287.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t44287.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t44287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44289){var self__ = this;
var _44289__$1 = this;return self__.meta44288;
});
cljs.core.async.t44287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44289,meta44288__$1){var self__ = this;
var _44289__$1 = this;return (new cljs.core.async.t44287(self__.f,self__.fn_handler,meta44288__$1));
});
cljs.core.async.__GT_t44287 = (function __GT_t44287(f__$1,fn_handler__$1,meta44288){return (new cljs.core.async.t44287(f__$1,fn_handler__$1,meta44288));
});
}
return (new cljs.core.async.t44287(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__44291 = buff;if(G__44291)
{var bit__15737__auto__ = null;if(cljs.core.truth_((function (){var or__15087__auto__ = bit__15737__auto__;if(cljs.core.truth_(or__15087__auto__))
{return or__15087__auto__;
} else
{return G__44291.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__44291.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__44291);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__44291);
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
{var val_44292 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_44292);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_44292);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__15075__auto__ = ret;if(cljs.core.truth_(and__15075__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__15075__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__15935__auto___44293 = n;var x_44294 = 0;while(true){
if((x_44294 < n__15935__auto___44293))
{(a[x_44294] = 0);
{
var G__44295 = (x_44294 + 1);
x_44294 = G__44295;
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
var G__44296 = (i + 1);
i = G__44296;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t44300 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44300 = (function (flag,alt_flag,meta44301){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta44301 = meta44301;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44300.cljs$lang$type = true;
cljs.core.async.t44300.cljs$lang$ctorStr = "cljs.core.async/t44300";
cljs.core.async.t44300.cljs$lang$ctorPrWriter = (function (this__15654__auto__,writer__15655__auto__,opt__15656__auto__){return cljs.core._write.call(null,writer__15655__auto__,"cljs.core.async/t44300");
});
cljs.core.async.t44300.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t44300.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t44300.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t44300.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44302){var self__ = this;
var _44302__$1 = this;return self__.meta44301;
});
cljs.core.async.t44300.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44302,meta44301__$1){var self__ = this;
var _44302__$1 = this;return (new cljs.core.async.t44300(self__.flag,self__.alt_flag,meta44301__$1));
});
cljs.core.async.__GT_t44300 = (function __GT_t44300(flag__$1,alt_flag__$1,meta44301){return (new cljs.core.async.t44300(flag__$1,alt_flag__$1,meta44301));
});
}
return (new cljs.core.async.t44300(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t44306 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44306 = (function (cb,flag,alt_handler,meta44307){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta44307 = meta44307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44306.cljs$lang$type = true;
cljs.core.async.t44306.cljs$lang$ctorStr = "cljs.core.async/t44306";
cljs.core.async.t44306.cljs$lang$ctorPrWriter = (function (this__15654__auto__,writer__15655__auto__,opt__15656__auto__){return cljs.core._write.call(null,writer__15655__auto__,"cljs.core.async/t44306");
});
cljs.core.async.t44306.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t44306.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t44306.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t44306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44308){var self__ = this;
var _44308__$1 = this;return self__.meta44307;
});
cljs.core.async.t44306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44308,meta44307__$1){var self__ = this;
var _44308__$1 = this;return (new cljs.core.async.t44306(self__.cb,self__.flag,self__.alt_handler,meta44307__$1));
});
cljs.core.async.__GT_t44306 = (function __GT_t44306(cb__$1,flag__$1,alt_handler__$1,meta44307){return (new cljs.core.async.t44306(cb__$1,flag__$1,alt_handler__$1,meta44307));
});
}
return (new cljs.core.async.t44306(cb,flag,alt_handler,null));
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
return (function (p1__44309_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__44309_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__15087__auto__ = wport;if(cljs.core.truth_(or__15087__auto__))
{return or__15087__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__44310 = (i + 1);
i = G__44310;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__15087__auto__ = ret;if(cljs.core.truth_(or__15087__auto__))
{return or__15087__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4126__auto__ = (function (){var and__15075__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__15075__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__15075__auto__;
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
var alts_BANG___delegate = function (ports,p__44311){var map__44313 = p__44311;var map__44313__$1 = ((cljs.core.seq_QMARK_.call(null,map__44313))?cljs.core.apply.call(null,cljs.core.hash_map,map__44313):map__44313);var opts = map__44313__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__44311 = null;if (arguments.length > 1) {
  p__44311 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__44311);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__44314){
var ports = cljs.core.first(arglist__44314);
var p__44311 = cljs.core.rest(arglist__44314);
return alts_BANG___delegate(ports,p__44311);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t44322 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44322 = (function (ch,f,map_LT_,meta44323){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta44323 = meta44323;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44322.cljs$lang$type = true;
cljs.core.async.t44322.cljs$lang$ctorStr = "cljs.core.async/t44322";
cljs.core.async.t44322.cljs$lang$ctorPrWriter = (function (this__15654__auto__,writer__15655__auto__,opt__15656__auto__){return cljs.core._write.call(null,writer__15655__auto__,"cljs.core.async/t44322");
});
cljs.core.async.t44322.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t44322.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t44322.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t44322.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t44325 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44325 = (function (fn1,_,meta44323,ch,f,map_LT_,meta44326){
this.fn1 = fn1;
this._ = _;
this.meta44323 = meta44323;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta44326 = meta44326;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44325.cljs$lang$type = true;
cljs.core.async.t44325.cljs$lang$ctorStr = "cljs.core.async/t44325";
cljs.core.async.t44325.cljs$lang$ctorPrWriter = (function (this__15654__auto__,writer__15655__auto__,opt__15656__auto__){return cljs.core._write.call(null,writer__15655__auto__,"cljs.core.async/t44325");
});
cljs.core.async.t44325.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t44325.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t44325.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t44325.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__44315_SHARP_){return f1.call(null,(((p1__44315_SHARP_ == null))?null:self__.f.call(null,p1__44315_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t44325.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44327){var self__ = this;
var _44327__$1 = this;return self__.meta44326;
});
cljs.core.async.t44325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44327,meta44326__$1){var self__ = this;
var _44327__$1 = this;return (new cljs.core.async.t44325(self__.fn1,self__._,self__.meta44323,self__.ch,self__.f,self__.map_LT_,meta44326__$1));
});
cljs.core.async.__GT_t44325 = (function __GT_t44325(fn1__$1,___$2,meta44323__$1,ch__$2,f__$2,map_LT___$2,meta44326){return (new cljs.core.async.t44325(fn1__$1,___$2,meta44323__$1,ch__$2,f__$2,map_LT___$2,meta44326));
});
}
return (new cljs.core.async.t44325(fn1,___$1,self__.meta44323,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__15075__auto__ = ret;if(cljs.core.truth_(and__15075__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__15075__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t44322.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t44322.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t44322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44324){var self__ = this;
var _44324__$1 = this;return self__.meta44323;
});
cljs.core.async.t44322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44324,meta44323__$1){var self__ = this;
var _44324__$1 = this;return (new cljs.core.async.t44322(self__.ch,self__.f,self__.map_LT_,meta44323__$1));
});
cljs.core.async.__GT_t44322 = (function __GT_t44322(ch__$1,f__$1,map_LT___$1,meta44323){return (new cljs.core.async.t44322(ch__$1,f__$1,map_LT___$1,meta44323));
});
}
return (new cljs.core.async.t44322(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t44331 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44331 = (function (ch,f,map_GT_,meta44332){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta44332 = meta44332;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44331.cljs$lang$type = true;
cljs.core.async.t44331.cljs$lang$ctorStr = "cljs.core.async/t44331";
cljs.core.async.t44331.cljs$lang$ctorPrWriter = (function (this__15654__auto__,writer__15655__auto__,opt__15656__auto__){return cljs.core._write.call(null,writer__15655__auto__,"cljs.core.async/t44331");
});
cljs.core.async.t44331.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t44331.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t44331.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t44331.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t44331.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t44331.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t44331.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44333){var self__ = this;
var _44333__$1 = this;return self__.meta44332;
});
cljs.core.async.t44331.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44333,meta44332__$1){var self__ = this;
var _44333__$1 = this;return (new cljs.core.async.t44331(self__.ch,self__.f,self__.map_GT_,meta44332__$1));
});
cljs.core.async.__GT_t44331 = (function __GT_t44331(ch__$1,f__$1,map_GT___$1,meta44332){return (new cljs.core.async.t44331(ch__$1,f__$1,map_GT___$1,meta44332));
});
}
return (new cljs.core.async.t44331(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t44337 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t44337 = (function (ch,p,filter_GT_,meta44338){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta44338 = meta44338;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t44337.cljs$lang$type = true;
cljs.core.async.t44337.cljs$lang$ctorStr = "cljs.core.async/t44337";
cljs.core.async.t44337.cljs$lang$ctorPrWriter = (function (this__15654__auto__,writer__15655__auto__,opt__15656__auto__){return cljs.core._write.call(null,writer__15655__auto__,"cljs.core.async/t44337");
});
cljs.core.async.t44337.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t44337.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t44337.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t44337.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t44337.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t44337.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t44337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44339){var self__ = this;
var _44339__$1 = this;return self__.meta44338;
});
cljs.core.async.t44337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44339,meta44338__$1){var self__ = this;
var _44339__$1 = this;return (new cljs.core.async.t44337(self__.ch,self__.p,self__.filter_GT_,meta44338__$1));
});
cljs.core.async.__GT_t44337 = (function __GT_t44337(ch__$1,p__$1,filter_GT___$1,meta44338){return (new cljs.core.async.t44337(ch__$1,p__$1,filter_GT___$1,meta44338));
});
}
return (new cljs.core.async.t44337(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__36000__auto___44422 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_44401){var state_val_44402 = (state_44401[1]);if((state_val_44402 === 7))
{var inst_44397 = (state_44401[2]);var state_44401__$1 = state_44401;var statearr_44403_44423 = state_44401__$1;(statearr_44403_44423[2] = inst_44397);
(statearr_44403_44423[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44402 === 1))
{var state_44401__$1 = state_44401;var statearr_44404_44424 = state_44401__$1;(statearr_44404_44424[2] = null);
(statearr_44404_44424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44402 === 4))
{var inst_44383 = (state_44401[7]);var inst_44383__$1 = (state_44401[2]);var inst_44384 = (inst_44383__$1 == null);var state_44401__$1 = (function (){var statearr_44405 = state_44401;(statearr_44405[7] = inst_44383__$1);
return statearr_44405;
})();if(cljs.core.truth_(inst_44384))
{var statearr_44406_44425 = state_44401__$1;(statearr_44406_44425[1] = 5);
} else
{var statearr_44407_44426 = state_44401__$1;(statearr_44407_44426[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44402 === 6))
{var inst_44383 = (state_44401[7]);var inst_44388 = p.call(null,inst_44383);var state_44401__$1 = state_44401;if(cljs.core.truth_(inst_44388))
{var statearr_44408_44427 = state_44401__$1;(statearr_44408_44427[1] = 8);
} else
{var statearr_44409_44428 = state_44401__$1;(statearr_44409_44428[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44402 === 3))
{var inst_44399 = (state_44401[2]);var state_44401__$1 = state_44401;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44401__$1,inst_44399);
} else
{if((state_val_44402 === 2))
{var state_44401__$1 = state_44401;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44401__$1,4,ch);
} else
{if((state_val_44402 === 11))
{var inst_44391 = (state_44401[2]);var state_44401__$1 = state_44401;var statearr_44410_44429 = state_44401__$1;(statearr_44410_44429[2] = inst_44391);
(statearr_44410_44429[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44402 === 9))
{var state_44401__$1 = state_44401;var statearr_44411_44430 = state_44401__$1;(statearr_44411_44430[2] = null);
(statearr_44411_44430[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44402 === 5))
{var inst_44386 = cljs.core.async.close_BANG_.call(null,out);var state_44401__$1 = state_44401;var statearr_44412_44431 = state_44401__$1;(statearr_44412_44431[2] = inst_44386);
(statearr_44412_44431[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44402 === 10))
{var inst_44394 = (state_44401[2]);var state_44401__$1 = (function (){var statearr_44413 = state_44401;(statearr_44413[8] = inst_44394);
return statearr_44413;
})();var statearr_44414_44432 = state_44401__$1;(statearr_44414_44432[2] = null);
(statearr_44414_44432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44402 === 8))
{var inst_44383 = (state_44401[7]);var state_44401__$1 = state_44401;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44401__$1,11,out,inst_44383);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_44418 = [null,null,null,null,null,null,null,null,null];(statearr_44418[0] = state_machine__35937__auto__);
(statearr_44418[1] = 1);
return statearr_44418;
});
var state_machine__35937__auto____1 = (function (state_44401){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_44401);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e44419){if((e44419 instanceof Object))
{var ex__35940__auto__ = e44419;var statearr_44420_44433 = state_44401;(statearr_44420_44433[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44401);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44419;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44434 = state_44401;
state_44401 = G__44434;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_44401){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_44401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_44421 = f__36001__auto__.call(null);(statearr_44421[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto___44422);
return statearr_44421;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__36000__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_44586){var state_val_44587 = (state_44586[1]);if((state_val_44587 === 7))
{var inst_44582 = (state_44586[2]);var state_44586__$1 = state_44586;var statearr_44588_44625 = state_44586__$1;(statearr_44588_44625[2] = inst_44582);
(statearr_44588_44625[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 20))
{var inst_44557 = (state_44586[7]);var inst_44568 = (state_44586[2]);var inst_44569 = cljs.core.next.call(null,inst_44557);var inst_44543 = inst_44569;var inst_44544 = null;var inst_44545 = 0;var inst_44546 = 0;var state_44586__$1 = (function (){var statearr_44589 = state_44586;(statearr_44589[8] = inst_44568);
(statearr_44589[9] = inst_44543);
(statearr_44589[10] = inst_44545);
(statearr_44589[11] = inst_44546);
(statearr_44589[12] = inst_44544);
return statearr_44589;
})();var statearr_44590_44626 = state_44586__$1;(statearr_44590_44626[2] = null);
(statearr_44590_44626[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 1))
{var state_44586__$1 = state_44586;var statearr_44591_44627 = state_44586__$1;(statearr_44591_44627[2] = null);
(statearr_44591_44627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 4))
{var inst_44532 = (state_44586[13]);var inst_44532__$1 = (state_44586[2]);var inst_44533 = (inst_44532__$1 == null);var state_44586__$1 = (function (){var statearr_44595 = state_44586;(statearr_44595[13] = inst_44532__$1);
return statearr_44595;
})();if(cljs.core.truth_(inst_44533))
{var statearr_44596_44628 = state_44586__$1;(statearr_44596_44628[1] = 5);
} else
{var statearr_44597_44629 = state_44586__$1;(statearr_44597_44629[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 15))
{var state_44586__$1 = state_44586;var statearr_44598_44630 = state_44586__$1;(statearr_44598_44630[2] = null);
(statearr_44598_44630[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 13))
{var inst_44543 = (state_44586[9]);var inst_44545 = (state_44586[10]);var inst_44546 = (state_44586[11]);var inst_44544 = (state_44586[12]);var inst_44553 = (state_44586[2]);var inst_44554 = (inst_44546 + 1);var tmp44592 = inst_44543;var tmp44593 = inst_44545;var tmp44594 = inst_44544;var inst_44543__$1 = tmp44592;var inst_44544__$1 = tmp44594;var inst_44545__$1 = tmp44593;var inst_44546__$1 = inst_44554;var state_44586__$1 = (function (){var statearr_44599 = state_44586;(statearr_44599[9] = inst_44543__$1);
(statearr_44599[10] = inst_44545__$1);
(statearr_44599[11] = inst_44546__$1);
(statearr_44599[14] = inst_44553);
(statearr_44599[12] = inst_44544__$1);
return statearr_44599;
})();var statearr_44600_44631 = state_44586__$1;(statearr_44600_44631[2] = null);
(statearr_44600_44631[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 6))
{var inst_44532 = (state_44586[13]);var inst_44537 = f.call(null,inst_44532);var inst_44542 = cljs.core.seq.call(null,inst_44537);var inst_44543 = inst_44542;var inst_44544 = null;var inst_44545 = 0;var inst_44546 = 0;var state_44586__$1 = (function (){var statearr_44601 = state_44586;(statearr_44601[9] = inst_44543);
(statearr_44601[10] = inst_44545);
(statearr_44601[11] = inst_44546);
(statearr_44601[12] = inst_44544);
return statearr_44601;
})();var statearr_44602_44632 = state_44586__$1;(statearr_44602_44632[2] = null);
(statearr_44602_44632[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 17))
{var inst_44557 = (state_44586[7]);var inst_44561 = cljs.core.chunk_first.call(null,inst_44557);var inst_44562 = cljs.core.chunk_rest.call(null,inst_44557);var inst_44563 = cljs.core.count.call(null,inst_44561);var inst_44543 = inst_44562;var inst_44544 = inst_44561;var inst_44545 = inst_44563;var inst_44546 = 0;var state_44586__$1 = (function (){var statearr_44603 = state_44586;(statearr_44603[9] = inst_44543);
(statearr_44603[10] = inst_44545);
(statearr_44603[11] = inst_44546);
(statearr_44603[12] = inst_44544);
return statearr_44603;
})();var statearr_44604_44633 = state_44586__$1;(statearr_44604_44633[2] = null);
(statearr_44604_44633[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 3))
{var inst_44584 = (state_44586[2]);var state_44586__$1 = state_44586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44586__$1,inst_44584);
} else
{if((state_val_44587 === 12))
{var inst_44577 = (state_44586[2]);var state_44586__$1 = state_44586;var statearr_44605_44634 = state_44586__$1;(statearr_44605_44634[2] = inst_44577);
(statearr_44605_44634[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 2))
{var state_44586__$1 = state_44586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44586__$1,4,in$);
} else
{if((state_val_44587 === 19))
{var inst_44572 = (state_44586[2]);var state_44586__$1 = state_44586;var statearr_44606_44635 = state_44586__$1;(statearr_44606_44635[2] = inst_44572);
(statearr_44606_44635[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 11))
{var inst_44543 = (state_44586[9]);var inst_44557 = (state_44586[7]);var inst_44557__$1 = cljs.core.seq.call(null,inst_44543);var state_44586__$1 = (function (){var statearr_44607 = state_44586;(statearr_44607[7] = inst_44557__$1);
return statearr_44607;
})();if(inst_44557__$1)
{var statearr_44608_44636 = state_44586__$1;(statearr_44608_44636[1] = 14);
} else
{var statearr_44609_44637 = state_44586__$1;(statearr_44609_44637[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 9))
{var inst_44579 = (state_44586[2]);var state_44586__$1 = (function (){var statearr_44610 = state_44586;(statearr_44610[15] = inst_44579);
return statearr_44610;
})();var statearr_44611_44638 = state_44586__$1;(statearr_44611_44638[2] = null);
(statearr_44611_44638[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 5))
{var inst_44535 = cljs.core.async.close_BANG_.call(null,out);var state_44586__$1 = state_44586;var statearr_44612_44639 = state_44586__$1;(statearr_44612_44639[2] = inst_44535);
(statearr_44612_44639[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 14))
{var inst_44557 = (state_44586[7]);var inst_44559 = cljs.core.chunked_seq_QMARK_.call(null,inst_44557);var state_44586__$1 = state_44586;if(inst_44559)
{var statearr_44613_44640 = state_44586__$1;(statearr_44613_44640[1] = 17);
} else
{var statearr_44614_44641 = state_44586__$1;(statearr_44614_44641[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 16))
{var inst_44575 = (state_44586[2]);var state_44586__$1 = state_44586;var statearr_44615_44642 = state_44586__$1;(statearr_44615_44642[2] = inst_44575);
(statearr_44615_44642[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44587 === 10))
{var inst_44546 = (state_44586[11]);var inst_44544 = (state_44586[12]);var inst_44551 = cljs.core._nth.call(null,inst_44544,inst_44546);var state_44586__$1 = state_44586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44586__$1,13,out,inst_44551);
} else
{if((state_val_44587 === 18))
{var inst_44557 = (state_44586[7]);var inst_44566 = cljs.core.first.call(null,inst_44557);var state_44586__$1 = state_44586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44586__$1,20,out,inst_44566);
} else
{if((state_val_44587 === 8))
{var inst_44545 = (state_44586[10]);var inst_44546 = (state_44586[11]);var inst_44548 = (inst_44546 < inst_44545);var inst_44549 = inst_44548;var state_44586__$1 = state_44586;if(cljs.core.truth_(inst_44549))
{var statearr_44616_44643 = state_44586__$1;(statearr_44616_44643[1] = 10);
} else
{var statearr_44617_44644 = state_44586__$1;(statearr_44617_44644[1] = 11);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_44621 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_44621[0] = state_machine__35937__auto__);
(statearr_44621[1] = 1);
return statearr_44621;
});
var state_machine__35937__auto____1 = (function (state_44586){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_44586);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e44622){if((e44622 instanceof Object))
{var ex__35940__auto__ = e44622;var statearr_44623_44645 = state_44586;(statearr_44623_44645[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44586);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44622;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44646 = state_44586;
state_44586 = G__44646;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_44586){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_44586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_44624 = f__36001__auto__.call(null);(statearr_44624[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto__);
return statearr_44624;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
}));
return c__36000__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__36000__auto___44727 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_44706){var state_val_44707 = (state_44706[1]);if((state_val_44707 === 7))
{var inst_44702 = (state_44706[2]);var state_44706__$1 = state_44706;var statearr_44708_44728 = state_44706__$1;(statearr_44708_44728[2] = inst_44702);
(statearr_44708_44728[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 1))
{var state_44706__$1 = state_44706;var statearr_44709_44729 = state_44706__$1;(statearr_44709_44729[2] = null);
(statearr_44709_44729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 4))
{var inst_44689 = (state_44706[7]);var inst_44689__$1 = (state_44706[2]);var inst_44690 = (inst_44689__$1 == null);var state_44706__$1 = (function (){var statearr_44710 = state_44706;(statearr_44710[7] = inst_44689__$1);
return statearr_44710;
})();if(cljs.core.truth_(inst_44690))
{var statearr_44711_44730 = state_44706__$1;(statearr_44711_44730[1] = 5);
} else
{var statearr_44712_44731 = state_44706__$1;(statearr_44712_44731[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 6))
{var inst_44689 = (state_44706[7]);var state_44706__$1 = state_44706;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44706__$1,11,to,inst_44689);
} else
{if((state_val_44707 === 3))
{var inst_44704 = (state_44706[2]);var state_44706__$1 = state_44706;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44706__$1,inst_44704);
} else
{if((state_val_44707 === 2))
{var state_44706__$1 = state_44706;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44706__$1,4,from);
} else
{if((state_val_44707 === 11))
{var inst_44699 = (state_44706[2]);var state_44706__$1 = (function (){var statearr_44713 = state_44706;(statearr_44713[8] = inst_44699);
return statearr_44713;
})();var statearr_44714_44732 = state_44706__$1;(statearr_44714_44732[2] = null);
(statearr_44714_44732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 9))
{var state_44706__$1 = state_44706;var statearr_44715_44733 = state_44706__$1;(statearr_44715_44733[2] = null);
(statearr_44715_44733[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 5))
{var state_44706__$1 = state_44706;if(cljs.core.truth_(close_QMARK_))
{var statearr_44716_44734 = state_44706__$1;(statearr_44716_44734[1] = 8);
} else
{var statearr_44717_44735 = state_44706__$1;(statearr_44717_44735[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 10))
{var inst_44696 = (state_44706[2]);var state_44706__$1 = state_44706;var statearr_44718_44736 = state_44706__$1;(statearr_44718_44736[2] = inst_44696);
(statearr_44718_44736[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44707 === 8))
{var inst_44693 = cljs.core.async.close_BANG_.call(null,to);var state_44706__$1 = state_44706;var statearr_44719_44737 = state_44706__$1;(statearr_44719_44737[2] = inst_44693);
(statearr_44719_44737[1] = 10);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_44723 = [null,null,null,null,null,null,null,null,null];(statearr_44723[0] = state_machine__35937__auto__);
(statearr_44723[1] = 1);
return statearr_44723;
});
var state_machine__35937__auto____1 = (function (state_44706){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_44706);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e44724){if((e44724 instanceof Object))
{var ex__35940__auto__ = e44724;var statearr_44725_44738 = state_44706;(statearr_44725_44738[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44706);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44739 = state_44706;
state_44706 = G__44739;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_44706){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_44706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_44726 = f__36001__auto__.call(null);(statearr_44726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto___44727);
return statearr_44726;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__36000__auto___44826 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_44804){var state_val_44805 = (state_44804[1]);if((state_val_44805 === 7))
{var inst_44800 = (state_44804[2]);var state_44804__$1 = state_44804;var statearr_44806_44827 = state_44804__$1;(statearr_44806_44827[2] = inst_44800);
(statearr_44806_44827[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44805 === 1))
{var state_44804__$1 = state_44804;var statearr_44807_44828 = state_44804__$1;(statearr_44807_44828[2] = null);
(statearr_44807_44828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44805 === 4))
{var inst_44785 = (state_44804[7]);var inst_44785__$1 = (state_44804[2]);var inst_44786 = (inst_44785__$1 == null);var state_44804__$1 = (function (){var statearr_44808 = state_44804;(statearr_44808[7] = inst_44785__$1);
return statearr_44808;
})();if(cljs.core.truth_(inst_44786))
{var statearr_44809_44829 = state_44804__$1;(statearr_44809_44829[1] = 5);
} else
{var statearr_44810_44830 = state_44804__$1;(statearr_44810_44830[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44805 === 6))
{var inst_44785 = (state_44804[7]);var inst_44791 = p.call(null,inst_44785);var state_44804__$1 = state_44804;if(cljs.core.truth_(inst_44791))
{var statearr_44811_44831 = state_44804__$1;(statearr_44811_44831[1] = 9);
} else
{var statearr_44812_44832 = state_44804__$1;(statearr_44812_44832[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44805 === 3))
{var inst_44802 = (state_44804[2]);var state_44804__$1 = state_44804;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44804__$1,inst_44802);
} else
{if((state_val_44805 === 2))
{var state_44804__$1 = state_44804;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44804__$1,4,ch);
} else
{if((state_val_44805 === 11))
{var inst_44785 = (state_44804[7]);var inst_44795 = (state_44804[2]);var state_44804__$1 = state_44804;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44804__$1,8,inst_44795,inst_44785);
} else
{if((state_val_44805 === 9))
{var state_44804__$1 = state_44804;var statearr_44813_44833 = state_44804__$1;(statearr_44813_44833[2] = tc);
(statearr_44813_44833[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44805 === 5))
{var inst_44788 = cljs.core.async.close_BANG_.call(null,tc);var inst_44789 = cljs.core.async.close_BANG_.call(null,fc);var state_44804__$1 = (function (){var statearr_44814 = state_44804;(statearr_44814[8] = inst_44788);
return statearr_44814;
})();var statearr_44815_44834 = state_44804__$1;(statearr_44815_44834[2] = inst_44789);
(statearr_44815_44834[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44805 === 10))
{var state_44804__$1 = state_44804;var statearr_44816_44835 = state_44804__$1;(statearr_44816_44835[2] = fc);
(statearr_44816_44835[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44805 === 8))
{var inst_44797 = (state_44804[2]);var state_44804__$1 = (function (){var statearr_44817 = state_44804;(statearr_44817[9] = inst_44797);
return statearr_44817;
})();var statearr_44818_44836 = state_44804__$1;(statearr_44818_44836[2] = null);
(statearr_44818_44836[1] = 2);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_44822 = [null,null,null,null,null,null,null,null,null,null];(statearr_44822[0] = state_machine__35937__auto__);
(statearr_44822[1] = 1);
return statearr_44822;
});
var state_machine__35937__auto____1 = (function (state_44804){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_44804);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e44823){if((e44823 instanceof Object))
{var ex__35940__auto__ = e44823;var statearr_44824_44837 = state_44804;(statearr_44824_44837[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44804);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44838 = state_44804;
state_44804 = G__44838;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_44804){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_44804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_44825 = f__36001__auto__.call(null);(statearr_44825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto___44826);
return statearr_44825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__36000__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_44885){var state_val_44886 = (state_44885[1]);if((state_val_44886 === 7))
{var inst_44881 = (state_44885[2]);var state_44885__$1 = state_44885;var statearr_44887_44903 = state_44885__$1;(statearr_44887_44903[2] = inst_44881);
(statearr_44887_44903[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44886 === 6))
{var inst_44871 = (state_44885[7]);var inst_44874 = (state_44885[8]);var inst_44878 = f.call(null,inst_44871,inst_44874);var inst_44871__$1 = inst_44878;var state_44885__$1 = (function (){var statearr_44888 = state_44885;(statearr_44888[7] = inst_44871__$1);
return statearr_44888;
})();var statearr_44889_44904 = state_44885__$1;(statearr_44889_44904[2] = null);
(statearr_44889_44904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44886 === 5))
{var inst_44871 = (state_44885[7]);var state_44885__$1 = state_44885;var statearr_44890_44905 = state_44885__$1;(statearr_44890_44905[2] = inst_44871);
(statearr_44890_44905[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44886 === 4))
{var inst_44874 = (state_44885[8]);var inst_44874__$1 = (state_44885[2]);var inst_44875 = (inst_44874__$1 == null);var state_44885__$1 = (function (){var statearr_44891 = state_44885;(statearr_44891[8] = inst_44874__$1);
return statearr_44891;
})();if(cljs.core.truth_(inst_44875))
{var statearr_44892_44906 = state_44885__$1;(statearr_44892_44906[1] = 5);
} else
{var statearr_44893_44907 = state_44885__$1;(statearr_44893_44907[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44886 === 3))
{var inst_44883 = (state_44885[2]);var state_44885__$1 = state_44885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44885__$1,inst_44883);
} else
{if((state_val_44886 === 2))
{var state_44885__$1 = state_44885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44885__$1,4,ch);
} else
{if((state_val_44886 === 1))
{var inst_44871 = init;var state_44885__$1 = (function (){var statearr_44894 = state_44885;(statearr_44894[7] = inst_44871);
return statearr_44894;
})();var statearr_44895_44908 = state_44885__$1;(statearr_44895_44908[2] = null);
(statearr_44895_44908[1] = 2);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_44899 = [null,null,null,null,null,null,null,null,null];(statearr_44899[0] = state_machine__35937__auto__);
(statearr_44899[1] = 1);
return statearr_44899;
});
var state_machine__35937__auto____1 = (function (state_44885){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_44885);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e44900){if((e44900 instanceof Object))
{var ex__35940__auto__ = e44900;var statearr_44901_44909 = state_44885;(statearr_44901_44909[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44885);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__44910 = state_44885;
state_44885 = G__44910;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_44885){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_44885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_44902 = f__36001__auto__.call(null);(statearr_44902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto__);
return statearr_44902;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
}));
return c__36000__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__36000__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_44972){var state_val_44973 = (state_44972[1]);if((state_val_44973 === 7))
{var inst_44953 = (state_44972[7]);var inst_44958 = (state_44972[2]);var inst_44959 = cljs.core.next.call(null,inst_44953);var inst_44953__$1 = inst_44959;var state_44972__$1 = (function (){var statearr_44974 = state_44972;(statearr_44974[7] = inst_44953__$1);
(statearr_44974[8] = inst_44958);
return statearr_44974;
})();var statearr_44975_44993 = state_44972__$1;(statearr_44975_44993[2] = null);
(statearr_44975_44993[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44973 === 1))
{var inst_44952 = cljs.core.seq.call(null,coll);var inst_44953 = inst_44952;var state_44972__$1 = (function (){var statearr_44976 = state_44972;(statearr_44976[7] = inst_44953);
return statearr_44976;
})();var statearr_44977_44994 = state_44972__$1;(statearr_44977_44994[2] = null);
(statearr_44977_44994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44973 === 4))
{var inst_44953 = (state_44972[7]);var inst_44956 = cljs.core.first.call(null,inst_44953);var state_44972__$1 = state_44972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_44972__$1,7,ch,inst_44956);
} else
{if((state_val_44973 === 6))
{var inst_44968 = (state_44972[2]);var state_44972__$1 = state_44972;var statearr_44978_44995 = state_44972__$1;(statearr_44978_44995[2] = inst_44968);
(statearr_44978_44995[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44973 === 3))
{var inst_44970 = (state_44972[2]);var state_44972__$1 = state_44972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44972__$1,inst_44970);
} else
{if((state_val_44973 === 2))
{var inst_44953 = (state_44972[7]);var state_44972__$1 = state_44972;if(cljs.core.truth_(inst_44953))
{var statearr_44979_44996 = state_44972__$1;(statearr_44979_44996[1] = 4);
} else
{var statearr_44980_44997 = state_44972__$1;(statearr_44980_44997[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44973 === 9))
{var state_44972__$1 = state_44972;var statearr_44981_44998 = state_44972__$1;(statearr_44981_44998[2] = null);
(statearr_44981_44998[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44973 === 5))
{var state_44972__$1 = state_44972;if(cljs.core.truth_(close_QMARK_))
{var statearr_44982_44999 = state_44972__$1;(statearr_44982_44999[1] = 8);
} else
{var statearr_44983_45000 = state_44972__$1;(statearr_44983_45000[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44973 === 10))
{var inst_44966 = (state_44972[2]);var state_44972__$1 = state_44972;var statearr_44984_45001 = state_44972__$1;(statearr_44984_45001[2] = inst_44966);
(statearr_44984_45001[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_44973 === 8))
{var inst_44963 = cljs.core.async.close_BANG_.call(null,ch);var state_44972__$1 = state_44972;var statearr_44985_45002 = state_44972__$1;(statearr_44985_45002[2] = inst_44963);
(statearr_44985_45002[1] = 10);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_44989 = [null,null,null,null,null,null,null,null,null];(statearr_44989[0] = state_machine__35937__auto__);
(statearr_44989[1] = 1);
return statearr_44989;
});
var state_machine__35937__auto____1 = (function (state_44972){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_44972);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e44990){if((e44990 instanceof Object))
{var ex__35940__auto__ = e44990;var statearr_44991_45003 = state_44972;(statearr_44991_45003[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44972);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e44990;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45004 = state_44972;
state_44972 = G__45004;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_44972){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_44972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_44992 = f__36001__auto__.call(null);(statearr_44992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto__);
return statearr_44992;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
}));
return c__36000__auto__;
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
cljs.core.async.Mux = (function (){var obj45006 = {};return obj45006;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__15075__auto__ = _;if(and__15075__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__15075__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__15714__auto__ = (((_ == null))?null:_);return (function (){var or__15087__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__15714__auto__)]);if(or__15087__auto__)
{return or__15087__auto__;
} else
{var or__15087__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__15087__auto____$1)
{return or__15087__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj45008 = {};return obj45008;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__15075__auto__ = m;if(and__15075__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__15075__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__15714__auto__ = (((m == null))?null:m);return (function (){var or__15087__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__15714__auto__)]);if(or__15087__auto__)
{return or__15087__auto__;
} else
{var or__15087__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__15087__auto____$1)
{return or__15087__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__15075__auto__ = m;if(and__15075__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__15075__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__15714__auto__ = (((m == null))?null:m);return (function (){var or__15087__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__15714__auto__)]);if(or__15087__auto__)
{return or__15087__auto__;
} else
{var or__15087__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__15087__auto____$1)
{return or__15087__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__15075__auto__ = m;if(and__15075__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__15075__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__15714__auto__ = (((m == null))?null:m);return (function (){var or__15087__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__15714__auto__)]);if(or__15087__auto__)
{return or__15087__auto__;
} else
{var or__15087__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__15087__auto____$1)
{return or__15087__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t45232 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t45232 = (function (cs,ch,mult,meta45233){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta45233 = meta45233;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45232.cljs$lang$type = true;
cljs.core.async.t45232.cljs$lang$ctorStr = "cljs.core.async/t45232";
cljs.core.async.t45232.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__15654__auto__,writer__15655__auto__,opt__15656__auto__){return cljs.core._write.call(null,writer__15655__auto__,"cljs.core.async/t45232");
});})(cs))
;
cljs.core.async.t45232.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t45232.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t45232.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t45232.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t45232.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t45232.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t45232.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_45234){var self__ = this;
var _45234__$1 = this;return self__.meta45233;
});})(cs))
;
cljs.core.async.t45232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_45234,meta45233__$1){var self__ = this;
var _45234__$1 = this;return (new cljs.core.async.t45232(self__.cs,self__.ch,self__.mult,meta45233__$1));
});})(cs))
;
cljs.core.async.__GT_t45232 = ((function (cs){
return (function __GT_t45232(cs__$1,ch__$1,mult__$1,meta45233){return (new cljs.core.async.t45232(cs__$1,ch__$1,mult__$1,meta45233));
});})(cs))
;
}
return (new cljs.core.async.t45232(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__36000__auto___45455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_45369){var state_val_45370 = (state_45369[1]);if((state_val_45370 === 7))
{var inst_45365 = (state_45369[2]);var state_45369__$1 = state_45369;var statearr_45371_45456 = state_45369__$1;(statearr_45371_45456[2] = inst_45365);
(statearr_45371_45456[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 20))
{var inst_45266 = (state_45369[7]);var inst_45276 = cljs.core.first.call(null,inst_45266);var inst_45277 = cljs.core.nth.call(null,inst_45276,0,null);var inst_45278 = cljs.core.nth.call(null,inst_45276,1,null);var state_45369__$1 = (function (){var statearr_45372 = state_45369;(statearr_45372[8] = inst_45277);
return statearr_45372;
})();if(cljs.core.truth_(inst_45278))
{var statearr_45373_45457 = state_45369__$1;(statearr_45373_45457[1] = 22);
} else
{var statearr_45374_45458 = state_45369__$1;(statearr_45374_45458[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 27))
{var inst_45306 = (state_45369[9]);var inst_45308 = (state_45369[10]);var inst_45313 = cljs.core._nth.call(null,inst_45306,inst_45308);var state_45369__$1 = (function (){var statearr_45375 = state_45369;(statearr_45375[11] = inst_45313);
return statearr_45375;
})();var statearr_45376_45459 = state_45369__$1;(statearr_45376_45459[2] = null);
(statearr_45376_45459[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 1))
{var state_45369__$1 = state_45369;var statearr_45377_45460 = state_45369__$1;(statearr_45377_45460[2] = null);
(statearr_45377_45460[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 24))
{var inst_45266 = (state_45369[7]);var inst_45283 = (state_45369[2]);var inst_45284 = cljs.core.next.call(null,inst_45266);var inst_45246 = inst_45284;var inst_45247 = null;var inst_45248 = 0;var inst_45249 = 0;var state_45369__$1 = (function (){var statearr_45378 = state_45369;(statearr_45378[12] = inst_45247);
(statearr_45378[13] = inst_45246);
(statearr_45378[14] = inst_45283);
(statearr_45378[15] = inst_45249);
(statearr_45378[16] = inst_45248);
return statearr_45378;
})();var statearr_45379_45461 = state_45369__$1;(statearr_45379_45461[2] = null);
(statearr_45379_45461[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 39))
{var inst_45326 = (state_45369[17]);var inst_45344 = (state_45369[2]);var inst_45345 = cljs.core.next.call(null,inst_45326);var inst_45305 = inst_45345;var inst_45306 = null;var inst_45307 = 0;var inst_45308 = 0;var state_45369__$1 = (function (){var statearr_45383 = state_45369;(statearr_45383[9] = inst_45306);
(statearr_45383[10] = inst_45308);
(statearr_45383[18] = inst_45344);
(statearr_45383[19] = inst_45305);
(statearr_45383[20] = inst_45307);
return statearr_45383;
})();var statearr_45384_45462 = state_45369__$1;(statearr_45384_45462[2] = null);
(statearr_45384_45462[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 4))
{var inst_45237 = (state_45369[21]);var inst_45237__$1 = (state_45369[2]);var inst_45238 = (inst_45237__$1 == null);var state_45369__$1 = (function (){var statearr_45385 = state_45369;(statearr_45385[21] = inst_45237__$1);
return statearr_45385;
})();if(cljs.core.truth_(inst_45238))
{var statearr_45386_45463 = state_45369__$1;(statearr_45386_45463[1] = 5);
} else
{var statearr_45387_45464 = state_45369__$1;(statearr_45387_45464[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 15))
{var inst_45247 = (state_45369[12]);var inst_45246 = (state_45369[13]);var inst_45249 = (state_45369[15]);var inst_45248 = (state_45369[16]);var inst_45262 = (state_45369[2]);var inst_45263 = (inst_45249 + 1);var tmp45380 = inst_45247;var tmp45381 = inst_45246;var tmp45382 = inst_45248;var inst_45246__$1 = tmp45381;var inst_45247__$1 = tmp45380;var inst_45248__$1 = tmp45382;var inst_45249__$1 = inst_45263;var state_45369__$1 = (function (){var statearr_45388 = state_45369;(statearr_45388[22] = inst_45262);
(statearr_45388[12] = inst_45247__$1);
(statearr_45388[13] = inst_45246__$1);
(statearr_45388[15] = inst_45249__$1);
(statearr_45388[16] = inst_45248__$1);
return statearr_45388;
})();var statearr_45389_45465 = state_45369__$1;(statearr_45389_45465[2] = null);
(statearr_45389_45465[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 21))
{var inst_45287 = (state_45369[2]);var state_45369__$1 = state_45369;var statearr_45390_45466 = state_45369__$1;(statearr_45390_45466[2] = inst_45287);
(statearr_45390_45466[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 31))
{var inst_45313 = (state_45369[11]);var inst_45314 = (state_45369[2]);var inst_45315 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_45316 = cljs.core.async.untap_STAR_.call(null,m,inst_45313);var state_45369__$1 = (function (){var statearr_45391 = state_45369;(statearr_45391[23] = inst_45315);
(statearr_45391[24] = inst_45314);
return statearr_45391;
})();var statearr_45392_45467 = state_45369__$1;(statearr_45392_45467[2] = inst_45316);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45369__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 32))
{var inst_45313 = (state_45369[11]);var inst_45237 = (state_45369[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45369,31,Object,null,30);var inst_45320 = cljs.core.async.put_BANG_.call(null,inst_45313,inst_45237,done);var state_45369__$1 = state_45369;var statearr_45393_45468 = state_45369__$1;(statearr_45393_45468[2] = inst_45320);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45369__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 40))
{var inst_45335 = (state_45369[25]);var inst_45336 = (state_45369[2]);var inst_45337 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_45338 = cljs.core.async.untap_STAR_.call(null,m,inst_45335);var state_45369__$1 = (function (){var statearr_45394 = state_45369;(statearr_45394[26] = inst_45337);
(statearr_45394[27] = inst_45336);
return statearr_45394;
})();var statearr_45395_45469 = state_45369__$1;(statearr_45395_45469[2] = inst_45338);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45369__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 33))
{var inst_45326 = (state_45369[17]);var inst_45328 = cljs.core.chunked_seq_QMARK_.call(null,inst_45326);var state_45369__$1 = state_45369;if(inst_45328)
{var statearr_45396_45470 = state_45369__$1;(statearr_45396_45470[1] = 36);
} else
{var statearr_45397_45471 = state_45369__$1;(statearr_45397_45471[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 13))
{var inst_45256 = (state_45369[28]);var inst_45259 = cljs.core.async.close_BANG_.call(null,inst_45256);var state_45369__$1 = state_45369;var statearr_45398_45472 = state_45369__$1;(statearr_45398_45472[2] = inst_45259);
(statearr_45398_45472[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 22))
{var inst_45277 = (state_45369[8]);var inst_45280 = cljs.core.async.close_BANG_.call(null,inst_45277);var state_45369__$1 = state_45369;var statearr_45399_45473 = state_45369__$1;(statearr_45399_45473[2] = inst_45280);
(statearr_45399_45473[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 36))
{var inst_45326 = (state_45369[17]);var inst_45330 = cljs.core.chunk_first.call(null,inst_45326);var inst_45331 = cljs.core.chunk_rest.call(null,inst_45326);var inst_45332 = cljs.core.count.call(null,inst_45330);var inst_45305 = inst_45331;var inst_45306 = inst_45330;var inst_45307 = inst_45332;var inst_45308 = 0;var state_45369__$1 = (function (){var statearr_45400 = state_45369;(statearr_45400[9] = inst_45306);
(statearr_45400[10] = inst_45308);
(statearr_45400[19] = inst_45305);
(statearr_45400[20] = inst_45307);
return statearr_45400;
})();var statearr_45401_45474 = state_45369__$1;(statearr_45401_45474[2] = null);
(statearr_45401_45474[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 41))
{var inst_45335 = (state_45369[25]);var inst_45237 = (state_45369[21]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45369,40,Object,null,39);var inst_45342 = cljs.core.async.put_BANG_.call(null,inst_45335,inst_45237,done);var state_45369__$1 = state_45369;var statearr_45402_45475 = state_45369__$1;(statearr_45402_45475[2] = inst_45342);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45369__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 43))
{var state_45369__$1 = state_45369;var statearr_45403_45476 = state_45369__$1;(statearr_45403_45476[2] = null);
(statearr_45403_45476[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 29))
{var inst_45353 = (state_45369[2]);var state_45369__$1 = state_45369;var statearr_45404_45477 = state_45369__$1;(statearr_45404_45477[2] = inst_45353);
(statearr_45404_45477[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 44))
{var inst_45362 = (state_45369[2]);var state_45369__$1 = (function (){var statearr_45405 = state_45369;(statearr_45405[29] = inst_45362);
return statearr_45405;
})();var statearr_45406_45478 = state_45369__$1;(statearr_45406_45478[2] = null);
(statearr_45406_45478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 6))
{var inst_45297 = (state_45369[30]);var inst_45296 = cljs.core.deref.call(null,cs);var inst_45297__$1 = cljs.core.keys.call(null,inst_45296);var inst_45298 = cljs.core.count.call(null,inst_45297__$1);var inst_45299 = cljs.core.reset_BANG_.call(null,dctr,inst_45298);var inst_45304 = cljs.core.seq.call(null,inst_45297__$1);var inst_45305 = inst_45304;var inst_45306 = null;var inst_45307 = 0;var inst_45308 = 0;var state_45369__$1 = (function (){var statearr_45407 = state_45369;(statearr_45407[9] = inst_45306);
(statearr_45407[10] = inst_45308);
(statearr_45407[31] = inst_45299);
(statearr_45407[30] = inst_45297__$1);
(statearr_45407[19] = inst_45305);
(statearr_45407[20] = inst_45307);
return statearr_45407;
})();var statearr_45408_45479 = state_45369__$1;(statearr_45408_45479[2] = null);
(statearr_45408_45479[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 28))
{var inst_45305 = (state_45369[19]);var inst_45326 = (state_45369[17]);var inst_45326__$1 = cljs.core.seq.call(null,inst_45305);var state_45369__$1 = (function (){var statearr_45409 = state_45369;(statearr_45409[17] = inst_45326__$1);
return statearr_45409;
})();if(inst_45326__$1)
{var statearr_45410_45480 = state_45369__$1;(statearr_45410_45480[1] = 33);
} else
{var statearr_45411_45481 = state_45369__$1;(statearr_45411_45481[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 25))
{var inst_45308 = (state_45369[10]);var inst_45307 = (state_45369[20]);var inst_45310 = (inst_45308 < inst_45307);var inst_45311 = inst_45310;var state_45369__$1 = state_45369;if(cljs.core.truth_(inst_45311))
{var statearr_45412_45482 = state_45369__$1;(statearr_45412_45482[1] = 27);
} else
{var statearr_45413_45483 = state_45369__$1;(statearr_45413_45483[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 34))
{var state_45369__$1 = state_45369;var statearr_45414_45484 = state_45369__$1;(statearr_45414_45484[2] = null);
(statearr_45414_45484[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 17))
{var state_45369__$1 = state_45369;var statearr_45415_45485 = state_45369__$1;(statearr_45415_45485[2] = null);
(statearr_45415_45485[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 3))
{var inst_45367 = (state_45369[2]);var state_45369__$1 = state_45369;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45369__$1,inst_45367);
} else
{if((state_val_45370 === 12))
{var inst_45292 = (state_45369[2]);var state_45369__$1 = state_45369;var statearr_45416_45486 = state_45369__$1;(statearr_45416_45486[2] = inst_45292);
(statearr_45416_45486[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 2))
{var state_45369__$1 = state_45369;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45369__$1,4,ch);
} else
{if((state_val_45370 === 23))
{var state_45369__$1 = state_45369;var statearr_45417_45487 = state_45369__$1;(statearr_45417_45487[2] = null);
(statearr_45417_45487[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 35))
{var inst_45351 = (state_45369[2]);var state_45369__$1 = state_45369;var statearr_45418_45488 = state_45369__$1;(statearr_45418_45488[2] = inst_45351);
(statearr_45418_45488[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 19))
{var inst_45266 = (state_45369[7]);var inst_45270 = cljs.core.chunk_first.call(null,inst_45266);var inst_45271 = cljs.core.chunk_rest.call(null,inst_45266);var inst_45272 = cljs.core.count.call(null,inst_45270);var inst_45246 = inst_45271;var inst_45247 = inst_45270;var inst_45248 = inst_45272;var inst_45249 = 0;var state_45369__$1 = (function (){var statearr_45419 = state_45369;(statearr_45419[12] = inst_45247);
(statearr_45419[13] = inst_45246);
(statearr_45419[15] = inst_45249);
(statearr_45419[16] = inst_45248);
return statearr_45419;
})();var statearr_45420_45489 = state_45369__$1;(statearr_45420_45489[2] = null);
(statearr_45420_45489[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 11))
{var inst_45266 = (state_45369[7]);var inst_45246 = (state_45369[13]);var inst_45266__$1 = cljs.core.seq.call(null,inst_45246);var state_45369__$1 = (function (){var statearr_45421 = state_45369;(statearr_45421[7] = inst_45266__$1);
return statearr_45421;
})();if(inst_45266__$1)
{var statearr_45422_45490 = state_45369__$1;(statearr_45422_45490[1] = 16);
} else
{var statearr_45423_45491 = state_45369__$1;(statearr_45423_45491[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 9))
{var inst_45294 = (state_45369[2]);var state_45369__$1 = state_45369;var statearr_45424_45492 = state_45369__$1;(statearr_45424_45492[2] = inst_45294);
(statearr_45424_45492[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 5))
{var inst_45244 = cljs.core.deref.call(null,cs);var inst_45245 = cljs.core.seq.call(null,inst_45244);var inst_45246 = inst_45245;var inst_45247 = null;var inst_45248 = 0;var inst_45249 = 0;var state_45369__$1 = (function (){var statearr_45425 = state_45369;(statearr_45425[12] = inst_45247);
(statearr_45425[13] = inst_45246);
(statearr_45425[15] = inst_45249);
(statearr_45425[16] = inst_45248);
return statearr_45425;
})();var statearr_45426_45493 = state_45369__$1;(statearr_45426_45493[2] = null);
(statearr_45426_45493[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 14))
{var state_45369__$1 = state_45369;var statearr_45427_45494 = state_45369__$1;(statearr_45427_45494[2] = null);
(statearr_45427_45494[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 45))
{var inst_45359 = (state_45369[2]);var state_45369__$1 = state_45369;var statearr_45428_45495 = state_45369__$1;(statearr_45428_45495[2] = inst_45359);
(statearr_45428_45495[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 26))
{var inst_45297 = (state_45369[30]);var inst_45355 = (state_45369[2]);var inst_45356 = cljs.core.seq.call(null,inst_45297);var state_45369__$1 = (function (){var statearr_45429 = state_45369;(statearr_45429[32] = inst_45355);
return statearr_45429;
})();if(inst_45356)
{var statearr_45430_45496 = state_45369__$1;(statearr_45430_45496[1] = 42);
} else
{var statearr_45431_45497 = state_45369__$1;(statearr_45431_45497[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 16))
{var inst_45266 = (state_45369[7]);var inst_45268 = cljs.core.chunked_seq_QMARK_.call(null,inst_45266);var state_45369__$1 = state_45369;if(inst_45268)
{var statearr_45435_45498 = state_45369__$1;(statearr_45435_45498[1] = 19);
} else
{var statearr_45436_45499 = state_45369__$1;(statearr_45436_45499[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 38))
{var inst_45348 = (state_45369[2]);var state_45369__$1 = state_45369;var statearr_45437_45500 = state_45369__$1;(statearr_45437_45500[2] = inst_45348);
(statearr_45437_45500[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 30))
{var inst_45306 = (state_45369[9]);var inst_45308 = (state_45369[10]);var inst_45305 = (state_45369[19]);var inst_45307 = (state_45369[20]);var inst_45322 = (state_45369[2]);var inst_45323 = (inst_45308 + 1);var tmp45432 = inst_45306;var tmp45433 = inst_45305;var tmp45434 = inst_45307;var inst_45305__$1 = tmp45433;var inst_45306__$1 = tmp45432;var inst_45307__$1 = tmp45434;var inst_45308__$1 = inst_45323;var state_45369__$1 = (function (){var statearr_45438 = state_45369;(statearr_45438[9] = inst_45306__$1);
(statearr_45438[33] = inst_45322);
(statearr_45438[10] = inst_45308__$1);
(statearr_45438[19] = inst_45305__$1);
(statearr_45438[20] = inst_45307__$1);
return statearr_45438;
})();var statearr_45439_45501 = state_45369__$1;(statearr_45439_45501[2] = null);
(statearr_45439_45501[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 10))
{var inst_45247 = (state_45369[12]);var inst_45249 = (state_45369[15]);var inst_45255 = cljs.core._nth.call(null,inst_45247,inst_45249);var inst_45256 = cljs.core.nth.call(null,inst_45255,0,null);var inst_45257 = cljs.core.nth.call(null,inst_45255,1,null);var state_45369__$1 = (function (){var statearr_45440 = state_45369;(statearr_45440[28] = inst_45256);
return statearr_45440;
})();if(cljs.core.truth_(inst_45257))
{var statearr_45441_45502 = state_45369__$1;(statearr_45441_45502[1] = 13);
} else
{var statearr_45442_45503 = state_45369__$1;(statearr_45442_45503[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 18))
{var inst_45290 = (state_45369[2]);var state_45369__$1 = state_45369;var statearr_45443_45504 = state_45369__$1;(statearr_45443_45504[2] = inst_45290);
(statearr_45443_45504[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 42))
{var state_45369__$1 = state_45369;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45369__$1,45,dchan);
} else
{if((state_val_45370 === 37))
{var inst_45326 = (state_45369[17]);var inst_45335 = cljs.core.first.call(null,inst_45326);var state_45369__$1 = (function (){var statearr_45444 = state_45369;(statearr_45444[25] = inst_45335);
return statearr_45444;
})();var statearr_45445_45505 = state_45369__$1;(statearr_45445_45505[2] = null);
(statearr_45445_45505[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45370 === 8))
{var inst_45249 = (state_45369[15]);var inst_45248 = (state_45369[16]);var inst_45251 = (inst_45249 < inst_45248);var inst_45252 = inst_45251;var state_45369__$1 = state_45369;if(cljs.core.truth_(inst_45252))
{var statearr_45446_45506 = state_45369__$1;(statearr_45446_45506[1] = 10);
} else
{var statearr_45447_45507 = state_45369__$1;(statearr_45447_45507[1] = 11);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_45451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45451[0] = state_machine__35937__auto__);
(statearr_45451[1] = 1);
return statearr_45451;
});
var state_machine__35937__auto____1 = (function (state_45369){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_45369);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e45452){if((e45452 instanceof Object))
{var ex__35940__auto__ = e45452;var statearr_45453_45508 = state_45369;(statearr_45453_45508[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45369);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45509 = state_45369;
state_45369 = G__45509;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_45369){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_45369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_45454 = f__36001__auto__.call(null);(statearr_45454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto___45455);
return statearr_45454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
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
cljs.core.async.Mix = (function (){var obj45511 = {};return obj45511;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__15075__auto__ = m;if(and__15075__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__15075__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__15714__auto__ = (((m == null))?null:m);return (function (){var or__15087__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__15714__auto__)]);if(or__15087__auto__)
{return or__15087__auto__;
} else
{var or__15087__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__15087__auto____$1)
{return or__15087__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__15075__auto__ = m;if(and__15075__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__15075__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__15714__auto__ = (((m == null))?null:m);return (function (){var or__15087__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__15714__auto__)]);if(or__15087__auto__)
{return or__15087__auto__;
} else
{var or__15087__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__15087__auto____$1)
{return or__15087__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__15075__auto__ = m;if(and__15075__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__15075__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__15714__auto__ = (((m == null))?null:m);return (function (){var or__15087__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__15714__auto__)]);if(or__15087__auto__)
{return or__15087__auto__;
} else
{var or__15087__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__15087__auto____$1)
{return or__15087__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__15075__auto__ = m;if(and__15075__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__15075__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__15714__auto__ = (((m == null))?null:m);return (function (){var or__15087__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__15714__auto__)]);if(or__15087__auto__)
{return or__15087__auto__;
} else
{var or__15087__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__15087__auto____$1)
{return or__15087__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__15075__auto__ = m;if(and__15075__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__15075__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__15714__auto__ = (((m == null))?null:m);return (function (){var or__15087__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__15714__auto__)]);if(or__15087__auto__)
{return or__15087__auto__;
} else
{var or__15087__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__15087__auto____$1)
{return or__15087__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t45621 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t45621 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta45622){
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
this.meta45622 = meta45622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45621.cljs$lang$type = true;
cljs.core.async.t45621.cljs$lang$ctorStr = "cljs.core.async/t45621";
cljs.core.async.t45621.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__15654__auto__,writer__15655__auto__,opt__15656__auto__){return cljs.core._write.call(null,writer__15655__auto__,"cljs.core.async/t45621");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t45621.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t45621.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t45621.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t45621.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t45621.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t45621.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t45621.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t45621.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t45621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45623){var self__ = this;
var _45623__$1 = this;return self__.meta45622;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t45621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_45623,meta45622__$1){var self__ = this;
var _45623__$1 = this;return (new cljs.core.async.t45621(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta45622__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t45621 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t45621(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45622){return (new cljs.core.async.t45621(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta45622));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t45621(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__36000__auto___45730 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_45688){var state_val_45689 = (state_45688[1]);if((state_val_45689 === 7))
{var inst_45637 = (state_45688[7]);var inst_45642 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45637);var state_45688__$1 = state_45688;var statearr_45690_45731 = state_45688__$1;(statearr_45690_45731[2] = inst_45642);
(statearr_45690_45731[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 20))
{var inst_45652 = (state_45688[8]);var state_45688__$1 = state_45688;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45688__$1,23,out,inst_45652);
} else
{if((state_val_45689 === 1))
{var inst_45627 = (state_45688[9]);var inst_45627__$1 = calc_state.call(null);var inst_45628 = cljs.core.seq_QMARK_.call(null,inst_45627__$1);var state_45688__$1 = (function (){var statearr_45691 = state_45688;(statearr_45691[9] = inst_45627__$1);
return statearr_45691;
})();if(inst_45628)
{var statearr_45692_45732 = state_45688__$1;(statearr_45692_45732[1] = 2);
} else
{var statearr_45693_45733 = state_45688__$1;(statearr_45693_45733[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 4))
{var inst_45627 = (state_45688[9]);var inst_45633 = (state_45688[2]);var inst_45634 = cljs.core.get.call(null,inst_45633,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_45635 = cljs.core.get.call(null,inst_45633,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_45636 = cljs.core.get.call(null,inst_45633,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_45637 = inst_45627;var state_45688__$1 = (function (){var statearr_45694 = state_45688;(statearr_45694[7] = inst_45637);
(statearr_45694[10] = inst_45636);
(statearr_45694[11] = inst_45635);
(statearr_45694[12] = inst_45634);
return statearr_45694;
})();var statearr_45695_45734 = state_45688__$1;(statearr_45695_45734[2] = null);
(statearr_45695_45734[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 15))
{var state_45688__$1 = state_45688;var statearr_45696_45735 = state_45688__$1;(statearr_45696_45735[2] = null);
(statearr_45696_45735[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 21))
{var state_45688__$1 = state_45688;var statearr_45697_45736 = state_45688__$1;(statearr_45697_45736[2] = null);
(statearr_45697_45736[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 13))
{var inst_45684 = (state_45688[2]);var state_45688__$1 = state_45688;var statearr_45698_45737 = state_45688__$1;(statearr_45698_45737[2] = inst_45684);
(statearr_45698_45737[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 22))
{var inst_45645 = (state_45688[13]);var inst_45681 = (state_45688[2]);var inst_45637 = inst_45645;var state_45688__$1 = (function (){var statearr_45699 = state_45688;(statearr_45699[7] = inst_45637);
(statearr_45699[14] = inst_45681);
return statearr_45699;
})();var statearr_45700_45738 = state_45688__$1;(statearr_45700_45738[2] = null);
(statearr_45700_45738[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 6))
{var inst_45686 = (state_45688[2]);var state_45688__$1 = state_45688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45688__$1,inst_45686);
} else
{if((state_val_45689 === 17))
{var inst_45667 = (state_45688[15]);var state_45688__$1 = state_45688;var statearr_45701_45739 = state_45688__$1;(statearr_45701_45739[2] = inst_45667);
(statearr_45701_45739[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 3))
{var inst_45627 = (state_45688[9]);var state_45688__$1 = state_45688;var statearr_45702_45740 = state_45688__$1;(statearr_45702_45740[2] = inst_45627);
(statearr_45702_45740[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 12))
{var inst_45653 = (state_45688[16]);var inst_45667 = (state_45688[15]);var inst_45648 = (state_45688[17]);var inst_45667__$1 = inst_45648.call(null,inst_45653);var state_45688__$1 = (function (){var statearr_45703 = state_45688;(statearr_45703[15] = inst_45667__$1);
return statearr_45703;
})();if(cljs.core.truth_(inst_45667__$1))
{var statearr_45704_45741 = state_45688__$1;(statearr_45704_45741[1] = 17);
} else
{var statearr_45705_45742 = state_45688__$1;(statearr_45705_45742[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 2))
{var inst_45627 = (state_45688[9]);var inst_45630 = cljs.core.apply.call(null,cljs.core.hash_map,inst_45627);var state_45688__$1 = state_45688;var statearr_45706_45743 = state_45688__$1;(statearr_45706_45743[2] = inst_45630);
(statearr_45706_45743[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 23))
{var inst_45678 = (state_45688[2]);var state_45688__$1 = state_45688;var statearr_45707_45744 = state_45688__$1;(statearr_45707_45744[2] = inst_45678);
(statearr_45707_45744[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 19))
{var inst_45675 = (state_45688[2]);var state_45688__$1 = state_45688;if(cljs.core.truth_(inst_45675))
{var statearr_45708_45745 = state_45688__$1;(statearr_45708_45745[1] = 20);
} else
{var statearr_45709_45746 = state_45688__$1;(statearr_45709_45746[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 11))
{var inst_45652 = (state_45688[8]);var inst_45658 = (inst_45652 == null);var state_45688__$1 = state_45688;if(cljs.core.truth_(inst_45658))
{var statearr_45710_45747 = state_45688__$1;(statearr_45710_45747[1] = 14);
} else
{var statearr_45711_45748 = state_45688__$1;(statearr_45711_45748[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 9))
{var inst_45645 = (state_45688[13]);var inst_45645__$1 = (state_45688[2]);var inst_45646 = cljs.core.get.call(null,inst_45645__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_45647 = cljs.core.get.call(null,inst_45645__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_45648 = cljs.core.get.call(null,inst_45645__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_45688__$1 = (function (){var statearr_45712 = state_45688;(statearr_45712[18] = inst_45647);
(statearr_45712[13] = inst_45645__$1);
(statearr_45712[17] = inst_45648);
return statearr_45712;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_45688__$1,10,inst_45646);
} else
{if((state_val_45689 === 5))
{var inst_45637 = (state_45688[7]);var inst_45640 = cljs.core.seq_QMARK_.call(null,inst_45637);var state_45688__$1 = state_45688;if(inst_45640)
{var statearr_45713_45749 = state_45688__$1;(statearr_45713_45749[1] = 7);
} else
{var statearr_45714_45750 = state_45688__$1;(statearr_45714_45750[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 14))
{var inst_45653 = (state_45688[16]);var inst_45660 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_45653);var state_45688__$1 = state_45688;var statearr_45715_45751 = state_45688__$1;(statearr_45715_45751[2] = inst_45660);
(statearr_45715_45751[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 16))
{var inst_45663 = (state_45688[2]);var inst_45664 = calc_state.call(null);var inst_45637 = inst_45664;var state_45688__$1 = (function (){var statearr_45716 = state_45688;(statearr_45716[19] = inst_45663);
(statearr_45716[7] = inst_45637);
return statearr_45716;
})();var statearr_45717_45752 = state_45688__$1;(statearr_45717_45752[2] = null);
(statearr_45717_45752[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 10))
{var inst_45653 = (state_45688[16]);var inst_45652 = (state_45688[8]);var inst_45651 = (state_45688[2]);var inst_45652__$1 = cljs.core.nth.call(null,inst_45651,0,null);var inst_45653__$1 = cljs.core.nth.call(null,inst_45651,1,null);var inst_45654 = (inst_45652__$1 == null);var inst_45655 = cljs.core._EQ_.call(null,inst_45653__$1,change);var inst_45656 = (inst_45654) || (inst_45655);var state_45688__$1 = (function (){var statearr_45718 = state_45688;(statearr_45718[16] = inst_45653__$1);
(statearr_45718[8] = inst_45652__$1);
return statearr_45718;
})();if(cljs.core.truth_(inst_45656))
{var statearr_45719_45753 = state_45688__$1;(statearr_45719_45753[1] = 11);
} else
{var statearr_45720_45754 = state_45688__$1;(statearr_45720_45754[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 18))
{var inst_45647 = (state_45688[18]);var inst_45653 = (state_45688[16]);var inst_45648 = (state_45688[17]);var inst_45670 = cljs.core.empty_QMARK_.call(null,inst_45648);var inst_45671 = inst_45647.call(null,inst_45653);var inst_45672 = cljs.core.not.call(null,inst_45671);var inst_45673 = (inst_45670) && (inst_45672);var state_45688__$1 = state_45688;var statearr_45721_45755 = state_45688__$1;(statearr_45721_45755[2] = inst_45673);
(statearr_45721_45755[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45689 === 8))
{var inst_45637 = (state_45688[7]);var state_45688__$1 = state_45688;var statearr_45722_45756 = state_45688__$1;(statearr_45722_45756[2] = inst_45637);
(statearr_45722_45756[1] = 9);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_45726 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_45726[0] = state_machine__35937__auto__);
(statearr_45726[1] = 1);
return statearr_45726;
});
var state_machine__35937__auto____1 = (function (state_45688){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_45688);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e45727){if((e45727 instanceof Object))
{var ex__35940__auto__ = e45727;var statearr_45728_45757 = state_45688;(statearr_45728_45757[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45688);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e45727;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__45758 = state_45688;
state_45688 = G__45758;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_45688){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_45688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_45729 = f__36001__auto__.call(null);(statearr_45729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto___45730);
return statearr_45729;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
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
cljs.core.async.Pub = (function (){var obj45760 = {};return obj45760;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__15075__auto__ = p;if(and__15075__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__15075__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__15714__auto__ = (((p == null))?null:p);return (function (){var or__15087__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__15714__auto__)]);if(or__15087__auto__)
{return or__15087__auto__;
} else
{var or__15087__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__15087__auto____$1)
{return or__15087__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__15075__auto__ = p;if(and__15075__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__15075__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__15714__auto__ = (((p == null))?null:p);return (function (){var or__15087__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__15714__auto__)]);if(or__15087__auto__)
{return or__15087__auto__;
} else
{var or__15087__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__15087__auto____$1)
{return or__15087__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__15075__auto__ = p;if(and__15075__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__15075__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__15714__auto__ = (((p == null))?null:p);return (function (){var or__15087__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15714__auto__)]);if(or__15087__auto__)
{return or__15087__auto__;
} else
{var or__15087__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15087__auto____$1)
{return or__15087__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__15075__auto__ = p;if(and__15075__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__15075__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__15714__auto__ = (((p == null))?null:p);return (function (){var or__15087__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__15714__auto__)]);if(or__15087__auto__)
{return or__15087__auto__;
} else
{var or__15087__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__15087__auto____$1)
{return or__15087__auto____$1;
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
return (function (topic){var or__15087__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__15087__auto__))
{return or__15087__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__15087__auto__,mults){
return (function (p1__45761_SHARP_){if(cljs.core.truth_(p1__45761_SHARP_.call(null,topic)))
{return p1__45761_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__45761_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__15087__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t45886 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t45886 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta45887){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta45887 = meta45887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t45886.cljs$lang$type = true;
cljs.core.async.t45886.cljs$lang$ctorStr = "cljs.core.async/t45886";
cljs.core.async.t45886.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__15654__auto__,writer__15655__auto__,opt__15656__auto__){return cljs.core._write.call(null,writer__15655__auto__,"cljs.core.async/t45886");
});})(mults,ensure_mult))
;
cljs.core.async.t45886.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t45886.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t45886.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t45886.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t45886.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t45886.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t45886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t45886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_45888){var self__ = this;
var _45888__$1 = this;return self__.meta45887;
});})(mults,ensure_mult))
;
cljs.core.async.t45886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_45888,meta45887__$1){var self__ = this;
var _45888__$1 = this;return (new cljs.core.async.t45886(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta45887__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t45886 = ((function (mults,ensure_mult){
return (function __GT_t45886(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta45887){return (new cljs.core.async.t45886(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta45887));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t45886(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__36000__auto___46010 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_45962){var state_val_45963 = (state_45962[1]);if((state_val_45963 === 7))
{var inst_45958 = (state_45962[2]);var state_45962__$1 = state_45962;var statearr_45964_46011 = state_45962__$1;(statearr_45964_46011[2] = inst_45958);
(statearr_45964_46011[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 20))
{var state_45962__$1 = state_45962;var statearr_45965_46012 = state_45962__$1;(statearr_45965_46012[2] = null);
(statearr_45965_46012[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 1))
{var state_45962__$1 = state_45962;var statearr_45966_46013 = state_45962__$1;(statearr_45966_46013[2] = null);
(statearr_45966_46013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 24))
{var inst_45941 = (state_45962[7]);var inst_45891 = (state_45962[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_45962,23,Object,null,22);var inst_45948 = cljs.core.async.muxch_STAR_.call(null,inst_45941);var state_45962__$1 = state_45962;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_45962__$1,25,inst_45948,inst_45891);
} else
{if((state_val_45963 === 4))
{var inst_45891 = (state_45962[8]);var inst_45891__$1 = (state_45962[2]);var inst_45892 = (inst_45891__$1 == null);var state_45962__$1 = (function (){var statearr_45967 = state_45962;(statearr_45967[8] = inst_45891__$1);
return statearr_45967;
})();if(cljs.core.truth_(inst_45892))
{var statearr_45968_46014 = state_45962__$1;(statearr_45968_46014[1] = 5);
} else
{var statearr_45969_46015 = state_45962__$1;(statearr_45969_46015[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 15))
{var inst_45933 = (state_45962[2]);var state_45962__$1 = state_45962;var statearr_45970_46016 = state_45962__$1;(statearr_45970_46016[2] = inst_45933);
(statearr_45970_46016[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 21))
{var inst_45955 = (state_45962[2]);var state_45962__$1 = (function (){var statearr_45971 = state_45962;(statearr_45971[9] = inst_45955);
return statearr_45971;
})();var statearr_45972_46017 = state_45962__$1;(statearr_45972_46017[2] = null);
(statearr_45972_46017[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 13))
{var inst_45915 = (state_45962[10]);var inst_45917 = cljs.core.chunked_seq_QMARK_.call(null,inst_45915);var state_45962__$1 = state_45962;if(inst_45917)
{var statearr_45973_46018 = state_45962__$1;(statearr_45973_46018[1] = 16);
} else
{var statearr_45974_46019 = state_45962__$1;(statearr_45974_46019[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 22))
{var inst_45952 = (state_45962[2]);var state_45962__$1 = state_45962;var statearr_45975_46020 = state_45962__$1;(statearr_45975_46020[2] = inst_45952);
(statearr_45975_46020[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 6))
{var inst_45941 = (state_45962[7]);var inst_45891 = (state_45962[8]);var inst_45939 = (state_45962[11]);var inst_45939__$1 = topic_fn.call(null,inst_45891);var inst_45940 = cljs.core.deref.call(null,mults);var inst_45941__$1 = cljs.core.get.call(null,inst_45940,inst_45939__$1);var state_45962__$1 = (function (){var statearr_45976 = state_45962;(statearr_45976[7] = inst_45941__$1);
(statearr_45976[11] = inst_45939__$1);
return statearr_45976;
})();if(cljs.core.truth_(inst_45941__$1))
{var statearr_45977_46021 = state_45962__$1;(statearr_45977_46021[1] = 19);
} else
{var statearr_45978_46022 = state_45962__$1;(statearr_45978_46022[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 25))
{var inst_45950 = (state_45962[2]);var state_45962__$1 = state_45962;var statearr_45979_46023 = state_45962__$1;(statearr_45979_46023[2] = inst_45950);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45962__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 17))
{var inst_45915 = (state_45962[10]);var inst_45924 = cljs.core.first.call(null,inst_45915);var inst_45925 = cljs.core.async.muxch_STAR_.call(null,inst_45924);var inst_45926 = cljs.core.async.close_BANG_.call(null,inst_45925);var inst_45927 = cljs.core.next.call(null,inst_45915);var inst_45901 = inst_45927;var inst_45902 = null;var inst_45903 = 0;var inst_45904 = 0;var state_45962__$1 = (function (){var statearr_45980 = state_45962;(statearr_45980[12] = inst_45902);
(statearr_45980[13] = inst_45904);
(statearr_45980[14] = inst_45926);
(statearr_45980[15] = inst_45901);
(statearr_45980[16] = inst_45903);
return statearr_45980;
})();var statearr_45981_46024 = state_45962__$1;(statearr_45981_46024[2] = null);
(statearr_45981_46024[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 3))
{var inst_45960 = (state_45962[2]);var state_45962__$1 = state_45962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45962__$1,inst_45960);
} else
{if((state_val_45963 === 12))
{var inst_45935 = (state_45962[2]);var state_45962__$1 = state_45962;var statearr_45982_46025 = state_45962__$1;(statearr_45982_46025[2] = inst_45935);
(statearr_45982_46025[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 2))
{var state_45962__$1 = state_45962;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45962__$1,4,ch);
} else
{if((state_val_45963 === 23))
{var inst_45939 = (state_45962[11]);var inst_45943 = (state_45962[2]);var inst_45944 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_45939);var state_45962__$1 = (function (){var statearr_45983 = state_45962;(statearr_45983[17] = inst_45943);
return statearr_45983;
})();var statearr_45984_46026 = state_45962__$1;(statearr_45984_46026[2] = inst_45944);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45962__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 19))
{var state_45962__$1 = state_45962;var statearr_45985_46027 = state_45962__$1;(statearr_45985_46027[2] = null);
(statearr_45985_46027[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 11))
{var inst_45915 = (state_45962[10]);var inst_45901 = (state_45962[15]);var inst_45915__$1 = cljs.core.seq.call(null,inst_45901);var state_45962__$1 = (function (){var statearr_45986 = state_45962;(statearr_45986[10] = inst_45915__$1);
return statearr_45986;
})();if(inst_45915__$1)
{var statearr_45987_46028 = state_45962__$1;(statearr_45987_46028[1] = 13);
} else
{var statearr_45988_46029 = state_45962__$1;(statearr_45988_46029[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 9))
{var inst_45937 = (state_45962[2]);var state_45962__$1 = state_45962;var statearr_45989_46030 = state_45962__$1;(statearr_45989_46030[2] = inst_45937);
(statearr_45989_46030[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 5))
{var inst_45898 = cljs.core.deref.call(null,mults);var inst_45899 = cljs.core.vals.call(null,inst_45898);var inst_45900 = cljs.core.seq.call(null,inst_45899);var inst_45901 = inst_45900;var inst_45902 = null;var inst_45903 = 0;var inst_45904 = 0;var state_45962__$1 = (function (){var statearr_45990 = state_45962;(statearr_45990[12] = inst_45902);
(statearr_45990[13] = inst_45904);
(statearr_45990[15] = inst_45901);
(statearr_45990[16] = inst_45903);
return statearr_45990;
})();var statearr_45991_46031 = state_45962__$1;(statearr_45991_46031[2] = null);
(statearr_45991_46031[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 14))
{var state_45962__$1 = state_45962;var statearr_45995_46032 = state_45962__$1;(statearr_45995_46032[2] = null);
(statearr_45995_46032[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 16))
{var inst_45915 = (state_45962[10]);var inst_45919 = cljs.core.chunk_first.call(null,inst_45915);var inst_45920 = cljs.core.chunk_rest.call(null,inst_45915);var inst_45921 = cljs.core.count.call(null,inst_45919);var inst_45901 = inst_45920;var inst_45902 = inst_45919;var inst_45903 = inst_45921;var inst_45904 = 0;var state_45962__$1 = (function (){var statearr_45996 = state_45962;(statearr_45996[12] = inst_45902);
(statearr_45996[13] = inst_45904);
(statearr_45996[15] = inst_45901);
(statearr_45996[16] = inst_45903);
return statearr_45996;
})();var statearr_45997_46033 = state_45962__$1;(statearr_45997_46033[2] = null);
(statearr_45997_46033[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 10))
{var inst_45902 = (state_45962[12]);var inst_45904 = (state_45962[13]);var inst_45901 = (state_45962[15]);var inst_45903 = (state_45962[16]);var inst_45909 = cljs.core._nth.call(null,inst_45902,inst_45904);var inst_45910 = cljs.core.async.muxch_STAR_.call(null,inst_45909);var inst_45911 = cljs.core.async.close_BANG_.call(null,inst_45910);var inst_45912 = (inst_45904 + 1);var tmp45992 = inst_45902;var tmp45993 = inst_45901;var tmp45994 = inst_45903;var inst_45901__$1 = tmp45993;var inst_45902__$1 = tmp45992;var inst_45903__$1 = tmp45994;var inst_45904__$1 = inst_45912;var state_45962__$1 = (function (){var statearr_45998 = state_45962;(statearr_45998[12] = inst_45902__$1);
(statearr_45998[18] = inst_45911);
(statearr_45998[13] = inst_45904__$1);
(statearr_45998[15] = inst_45901__$1);
(statearr_45998[16] = inst_45903__$1);
return statearr_45998;
})();var statearr_45999_46034 = state_45962__$1;(statearr_45999_46034[2] = null);
(statearr_45999_46034[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 18))
{var inst_45930 = (state_45962[2]);var state_45962__$1 = state_45962;var statearr_46000_46035 = state_45962__$1;(statearr_46000_46035[2] = inst_45930);
(statearr_46000_46035[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_45963 === 8))
{var inst_45904 = (state_45962[13]);var inst_45903 = (state_45962[16]);var inst_45906 = (inst_45904 < inst_45903);var inst_45907 = inst_45906;var state_45962__$1 = state_45962;if(cljs.core.truth_(inst_45907))
{var statearr_46001_46036 = state_45962__$1;(statearr_46001_46036[1] = 10);
} else
{var statearr_46002_46037 = state_45962__$1;(statearr_46002_46037[1] = 11);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_46006 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46006[0] = state_machine__35937__auto__);
(statearr_46006[1] = 1);
return statearr_46006;
});
var state_machine__35937__auto____1 = (function (state_45962){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_45962);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e46007){if((e46007 instanceof Object))
{var ex__35940__auto__ = e46007;var statearr_46008_46038 = state_45962;(statearr_46008_46038[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45962);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46007;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46039 = state_45962;
state_45962 = G__46039;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_45962){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_45962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_46009 = f__36001__auto__.call(null);(statearr_46009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto___46010);
return statearr_46009;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
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
,cljs.core.range.call(null,cnt));var c__36000__auto___46176 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_46146){var state_val_46147 = (state_46146[1]);if((state_val_46147 === 7))
{var state_46146__$1 = state_46146;var statearr_46148_46177 = state_46146__$1;(statearr_46148_46177[2] = null);
(statearr_46148_46177[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46147 === 1))
{var state_46146__$1 = state_46146;var statearr_46149_46178 = state_46146__$1;(statearr_46149_46178[2] = null);
(statearr_46149_46178[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46147 === 4))
{var inst_46110 = (state_46146[7]);var inst_46112 = (inst_46110 < cnt);var state_46146__$1 = state_46146;if(cljs.core.truth_(inst_46112))
{var statearr_46150_46179 = state_46146__$1;(statearr_46150_46179[1] = 6);
} else
{var statearr_46151_46180 = state_46146__$1;(statearr_46151_46180[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46147 === 15))
{var inst_46142 = (state_46146[2]);var state_46146__$1 = state_46146;var statearr_46152_46181 = state_46146__$1;(statearr_46152_46181[2] = inst_46142);
(statearr_46152_46181[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46147 === 13))
{var inst_46135 = cljs.core.async.close_BANG_.call(null,out);var state_46146__$1 = state_46146;var statearr_46153_46182 = state_46146__$1;(statearr_46153_46182[2] = inst_46135);
(statearr_46153_46182[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46147 === 6))
{var state_46146__$1 = state_46146;var statearr_46154_46183 = state_46146__$1;(statearr_46154_46183[2] = null);
(statearr_46154_46183[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46147 === 3))
{var inst_46144 = (state_46146[2]);var state_46146__$1 = state_46146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46146__$1,inst_46144);
} else
{if((state_val_46147 === 12))
{var inst_46132 = (state_46146[8]);var inst_46132__$1 = (state_46146[2]);var inst_46133 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_46132__$1);var state_46146__$1 = (function (){var statearr_46155 = state_46146;(statearr_46155[8] = inst_46132__$1);
return statearr_46155;
})();if(cljs.core.truth_(inst_46133))
{var statearr_46156_46184 = state_46146__$1;(statearr_46156_46184[1] = 13);
} else
{var statearr_46157_46185 = state_46146__$1;(statearr_46157_46185[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46147 === 2))
{var inst_46109 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_46110 = 0;var state_46146__$1 = (function (){var statearr_46158 = state_46146;(statearr_46158[7] = inst_46110);
(statearr_46158[9] = inst_46109);
return statearr_46158;
})();var statearr_46159_46186 = state_46146__$1;(statearr_46159_46186[2] = null);
(statearr_46159_46186[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46147 === 11))
{var inst_46110 = (state_46146[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_46146,10,Object,null,9);var inst_46119 = chs__$1.call(null,inst_46110);var inst_46120 = done.call(null,inst_46110);var inst_46121 = cljs.core.async.take_BANG_.call(null,inst_46119,inst_46120);var state_46146__$1 = state_46146;var statearr_46160_46187 = state_46146__$1;(statearr_46160_46187[2] = inst_46121);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46146__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46147 === 9))
{var inst_46110 = (state_46146[7]);var inst_46123 = (state_46146[2]);var inst_46124 = (inst_46110 + 1);var inst_46110__$1 = inst_46124;var state_46146__$1 = (function (){var statearr_46161 = state_46146;(statearr_46161[7] = inst_46110__$1);
(statearr_46161[10] = inst_46123);
return statearr_46161;
})();var statearr_46162_46188 = state_46146__$1;(statearr_46162_46188[2] = null);
(statearr_46162_46188[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46147 === 5))
{var inst_46130 = (state_46146[2]);var state_46146__$1 = (function (){var statearr_46163 = state_46146;(statearr_46163[11] = inst_46130);
return statearr_46163;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46146__$1,12,dchan);
} else
{if((state_val_46147 === 14))
{var inst_46132 = (state_46146[8]);var inst_46137 = cljs.core.apply.call(null,f,inst_46132);var state_46146__$1 = state_46146;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46146__$1,16,out,inst_46137);
} else
{if((state_val_46147 === 16))
{var inst_46139 = (state_46146[2]);var state_46146__$1 = (function (){var statearr_46164 = state_46146;(statearr_46164[12] = inst_46139);
return statearr_46164;
})();var statearr_46165_46189 = state_46146__$1;(statearr_46165_46189[2] = null);
(statearr_46165_46189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46147 === 10))
{var inst_46114 = (state_46146[2]);var inst_46115 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_46146__$1 = (function (){var statearr_46166 = state_46146;(statearr_46166[13] = inst_46114);
return statearr_46166;
})();var statearr_46167_46190 = state_46146__$1;(statearr_46167_46190[2] = inst_46115);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46146__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46147 === 8))
{var inst_46128 = (state_46146[2]);var state_46146__$1 = state_46146;var statearr_46168_46191 = state_46146__$1;(statearr_46168_46191[2] = inst_46128);
(statearr_46168_46191[1] = 5);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_46172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46172[0] = state_machine__35937__auto__);
(statearr_46172[1] = 1);
return statearr_46172;
});
var state_machine__35937__auto____1 = (function (state_46146){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_46146);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e46173){if((e46173 instanceof Object))
{var ex__35940__auto__ = e46173;var statearr_46174_46192 = state_46146;(statearr_46174_46192[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46146);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46173;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46193 = state_46146;
state_46146 = G__46193;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_46146){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_46146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_46175 = f__36001__auto__.call(null);(statearr_46175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto___46176);
return statearr_46175;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__36000__auto___46301 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_46277){var state_val_46278 = (state_46277[1]);if((state_val_46278 === 7))
{var inst_46256 = (state_46277[7]);var inst_46257 = (state_46277[8]);var inst_46256__$1 = (state_46277[2]);var inst_46257__$1 = cljs.core.nth.call(null,inst_46256__$1,0,null);var inst_46258 = cljs.core.nth.call(null,inst_46256__$1,1,null);var inst_46259 = (inst_46257__$1 == null);var state_46277__$1 = (function (){var statearr_46279 = state_46277;(statearr_46279[9] = inst_46258);
(statearr_46279[7] = inst_46256__$1);
(statearr_46279[8] = inst_46257__$1);
return statearr_46279;
})();if(cljs.core.truth_(inst_46259))
{var statearr_46280_46302 = state_46277__$1;(statearr_46280_46302[1] = 8);
} else
{var statearr_46281_46303 = state_46277__$1;(statearr_46281_46303[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46278 === 1))
{var inst_46248 = cljs.core.vec.call(null,chs);var inst_46249 = inst_46248;var state_46277__$1 = (function (){var statearr_46282 = state_46277;(statearr_46282[10] = inst_46249);
return statearr_46282;
})();var statearr_46283_46304 = state_46277__$1;(statearr_46283_46304[2] = null);
(statearr_46283_46304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46278 === 4))
{var inst_46249 = (state_46277[10]);var state_46277__$1 = state_46277;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_46277__$1,7,inst_46249);
} else
{if((state_val_46278 === 6))
{var inst_46273 = (state_46277[2]);var state_46277__$1 = state_46277;var statearr_46284_46305 = state_46277__$1;(statearr_46284_46305[2] = inst_46273);
(statearr_46284_46305[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46278 === 3))
{var inst_46275 = (state_46277[2]);var state_46277__$1 = state_46277;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46277__$1,inst_46275);
} else
{if((state_val_46278 === 2))
{var inst_46249 = (state_46277[10]);var inst_46251 = cljs.core.count.call(null,inst_46249);var inst_46252 = (inst_46251 > 0);var state_46277__$1 = state_46277;if(cljs.core.truth_(inst_46252))
{var statearr_46286_46306 = state_46277__$1;(statearr_46286_46306[1] = 4);
} else
{var statearr_46287_46307 = state_46277__$1;(statearr_46287_46307[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46278 === 11))
{var inst_46249 = (state_46277[10]);var inst_46266 = (state_46277[2]);var tmp46285 = inst_46249;var inst_46249__$1 = tmp46285;var state_46277__$1 = (function (){var statearr_46288 = state_46277;(statearr_46288[10] = inst_46249__$1);
(statearr_46288[11] = inst_46266);
return statearr_46288;
})();var statearr_46289_46308 = state_46277__$1;(statearr_46289_46308[2] = null);
(statearr_46289_46308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46278 === 9))
{var inst_46257 = (state_46277[8]);var state_46277__$1 = state_46277;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46277__$1,11,out,inst_46257);
} else
{if((state_val_46278 === 5))
{var inst_46271 = cljs.core.async.close_BANG_.call(null,out);var state_46277__$1 = state_46277;var statearr_46290_46309 = state_46277__$1;(statearr_46290_46309[2] = inst_46271);
(statearr_46290_46309[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46278 === 10))
{var inst_46269 = (state_46277[2]);var state_46277__$1 = state_46277;var statearr_46291_46310 = state_46277__$1;(statearr_46291_46310[2] = inst_46269);
(statearr_46291_46310[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46278 === 8))
{var inst_46249 = (state_46277[10]);var inst_46258 = (state_46277[9]);var inst_46256 = (state_46277[7]);var inst_46257 = (state_46277[8]);var inst_46261 = (function (){var c = inst_46258;var v = inst_46257;var vec__46254 = inst_46256;var cs = inst_46249;return ((function (c,v,vec__46254,cs,inst_46249,inst_46258,inst_46256,inst_46257,state_val_46278){
return (function (p1__46194_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__46194_SHARP_);
});
;})(c,v,vec__46254,cs,inst_46249,inst_46258,inst_46256,inst_46257,state_val_46278))
})();var inst_46262 = cljs.core.filterv.call(null,inst_46261,inst_46249);var inst_46249__$1 = inst_46262;var state_46277__$1 = (function (){var statearr_46292 = state_46277;(statearr_46292[10] = inst_46249__$1);
return statearr_46292;
})();var statearr_46293_46311 = state_46277__$1;(statearr_46293_46311[2] = null);
(statearr_46293_46311[1] = 2);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_46297 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46297[0] = state_machine__35937__auto__);
(statearr_46297[1] = 1);
return statearr_46297;
});
var state_machine__35937__auto____1 = (function (state_46277){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_46277);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e46298){if((e46298 instanceof Object))
{var ex__35940__auto__ = e46298;var statearr_46299_46312 = state_46277;(statearr_46299_46312[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46277);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46298;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46313 = state_46277;
state_46277 = G__46313;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_46277){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_46277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_46300 = f__36001__auto__.call(null);(statearr_46300[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto___46301);
return statearr_46300;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__36000__auto___46406 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_46383){var state_val_46384 = (state_46383[1]);if((state_val_46384 === 7))
{var inst_46365 = (state_46383[7]);var inst_46365__$1 = (state_46383[2]);var inst_46366 = (inst_46365__$1 == null);var inst_46367 = cljs.core.not.call(null,inst_46366);var state_46383__$1 = (function (){var statearr_46385 = state_46383;(statearr_46385[7] = inst_46365__$1);
return statearr_46385;
})();if(inst_46367)
{var statearr_46386_46407 = state_46383__$1;(statearr_46386_46407[1] = 8);
} else
{var statearr_46387_46408 = state_46383__$1;(statearr_46387_46408[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46384 === 1))
{var inst_46360 = 0;var state_46383__$1 = (function (){var statearr_46388 = state_46383;(statearr_46388[8] = inst_46360);
return statearr_46388;
})();var statearr_46389_46409 = state_46383__$1;(statearr_46389_46409[2] = null);
(statearr_46389_46409[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46384 === 4))
{var state_46383__$1 = state_46383;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46383__$1,7,ch);
} else
{if((state_val_46384 === 6))
{var inst_46378 = (state_46383[2]);var state_46383__$1 = state_46383;var statearr_46390_46410 = state_46383__$1;(statearr_46390_46410[2] = inst_46378);
(statearr_46390_46410[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46384 === 3))
{var inst_46380 = (state_46383[2]);var inst_46381 = cljs.core.async.close_BANG_.call(null,out);var state_46383__$1 = (function (){var statearr_46391 = state_46383;(statearr_46391[9] = inst_46380);
return statearr_46391;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46383__$1,inst_46381);
} else
{if((state_val_46384 === 2))
{var inst_46360 = (state_46383[8]);var inst_46362 = (inst_46360 < n);var state_46383__$1 = state_46383;if(cljs.core.truth_(inst_46362))
{var statearr_46392_46411 = state_46383__$1;(statearr_46392_46411[1] = 4);
} else
{var statearr_46393_46412 = state_46383__$1;(statearr_46393_46412[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46384 === 11))
{var inst_46360 = (state_46383[8]);var inst_46370 = (state_46383[2]);var inst_46371 = (inst_46360 + 1);var inst_46360__$1 = inst_46371;var state_46383__$1 = (function (){var statearr_46394 = state_46383;(statearr_46394[8] = inst_46360__$1);
(statearr_46394[10] = inst_46370);
return statearr_46394;
})();var statearr_46395_46413 = state_46383__$1;(statearr_46395_46413[2] = null);
(statearr_46395_46413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46384 === 9))
{var state_46383__$1 = state_46383;var statearr_46396_46414 = state_46383__$1;(statearr_46396_46414[2] = null);
(statearr_46396_46414[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46384 === 5))
{var state_46383__$1 = state_46383;var statearr_46397_46415 = state_46383__$1;(statearr_46397_46415[2] = null);
(statearr_46397_46415[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46384 === 10))
{var inst_46375 = (state_46383[2]);var state_46383__$1 = state_46383;var statearr_46398_46416 = state_46383__$1;(statearr_46398_46416[2] = inst_46375);
(statearr_46398_46416[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46384 === 8))
{var inst_46365 = (state_46383[7]);var state_46383__$1 = state_46383;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46383__$1,11,out,inst_46365);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_46402 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_46402[0] = state_machine__35937__auto__);
(statearr_46402[1] = 1);
return statearr_46402;
});
var state_machine__35937__auto____1 = (function (state_46383){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_46383);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e46403){if((e46403 instanceof Object))
{var ex__35940__auto__ = e46403;var statearr_46404_46417 = state_46383;(statearr_46404_46417[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46383);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46403;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46418 = state_46383;
state_46383 = G__46418;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_46383){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_46383);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_46405 = f__36001__auto__.call(null);(statearr_46405[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto___46406);
return statearr_46405;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__36000__auto___46515 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_46490){var state_val_46491 = (state_46490[1]);if((state_val_46491 === 7))
{var inst_46485 = (state_46490[2]);var state_46490__$1 = state_46490;var statearr_46492_46516 = state_46490__$1;(statearr_46492_46516[2] = inst_46485);
(statearr_46492_46516[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46491 === 1))
{var inst_46467 = null;var state_46490__$1 = (function (){var statearr_46493 = state_46490;(statearr_46493[7] = inst_46467);
return statearr_46493;
})();var statearr_46494_46517 = state_46490__$1;(statearr_46494_46517[2] = null);
(statearr_46494_46517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46491 === 4))
{var inst_46470 = (state_46490[8]);var inst_46470__$1 = (state_46490[2]);var inst_46471 = (inst_46470__$1 == null);var inst_46472 = cljs.core.not.call(null,inst_46471);var state_46490__$1 = (function (){var statearr_46495 = state_46490;(statearr_46495[8] = inst_46470__$1);
return statearr_46495;
})();if(inst_46472)
{var statearr_46496_46518 = state_46490__$1;(statearr_46496_46518[1] = 5);
} else
{var statearr_46497_46519 = state_46490__$1;(statearr_46497_46519[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46491 === 6))
{var state_46490__$1 = state_46490;var statearr_46498_46520 = state_46490__$1;(statearr_46498_46520[2] = null);
(statearr_46498_46520[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46491 === 3))
{var inst_46487 = (state_46490[2]);var inst_46488 = cljs.core.async.close_BANG_.call(null,out);var state_46490__$1 = (function (){var statearr_46499 = state_46490;(statearr_46499[9] = inst_46487);
return statearr_46499;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46490__$1,inst_46488);
} else
{if((state_val_46491 === 2))
{var state_46490__$1 = state_46490;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46490__$1,4,ch);
} else
{if((state_val_46491 === 11))
{var inst_46470 = (state_46490[8]);var inst_46479 = (state_46490[2]);var inst_46467 = inst_46470;var state_46490__$1 = (function (){var statearr_46500 = state_46490;(statearr_46500[10] = inst_46479);
(statearr_46500[7] = inst_46467);
return statearr_46500;
})();var statearr_46501_46521 = state_46490__$1;(statearr_46501_46521[2] = null);
(statearr_46501_46521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46491 === 9))
{var inst_46470 = (state_46490[8]);var state_46490__$1 = state_46490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46490__$1,11,out,inst_46470);
} else
{if((state_val_46491 === 5))
{var inst_46470 = (state_46490[8]);var inst_46467 = (state_46490[7]);var inst_46474 = cljs.core._EQ_.call(null,inst_46470,inst_46467);var state_46490__$1 = state_46490;if(inst_46474)
{var statearr_46503_46522 = state_46490__$1;(statearr_46503_46522[1] = 8);
} else
{var statearr_46504_46523 = state_46490__$1;(statearr_46504_46523[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46491 === 10))
{var inst_46482 = (state_46490[2]);var state_46490__$1 = state_46490;var statearr_46505_46524 = state_46490__$1;(statearr_46505_46524[2] = inst_46482);
(statearr_46505_46524[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46491 === 8))
{var inst_46467 = (state_46490[7]);var tmp46502 = inst_46467;var inst_46467__$1 = tmp46502;var state_46490__$1 = (function (){var statearr_46506 = state_46490;(statearr_46506[7] = inst_46467__$1);
return statearr_46506;
})();var statearr_46507_46525 = state_46490__$1;(statearr_46507_46525[2] = null);
(statearr_46507_46525[1] = 2);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_46511 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_46511[0] = state_machine__35937__auto__);
(statearr_46511[1] = 1);
return statearr_46511;
});
var state_machine__35937__auto____1 = (function (state_46490){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_46490);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e46512){if((e46512 instanceof Object))
{var ex__35940__auto__ = e46512;var statearr_46513_46526 = state_46490;(statearr_46513_46526[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46490);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46527 = state_46490;
state_46490 = G__46527;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_46490){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_46490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_46514 = f__36001__auto__.call(null);(statearr_46514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto___46515);
return statearr_46514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__36000__auto___46662 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_46632){var state_val_46633 = (state_46632[1]);if((state_val_46633 === 7))
{var inst_46628 = (state_46632[2]);var state_46632__$1 = state_46632;var statearr_46634_46663 = state_46632__$1;(statearr_46634_46663[2] = inst_46628);
(statearr_46634_46663[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46633 === 1))
{var inst_46595 = (new Array(n));var inst_46596 = inst_46595;var inst_46597 = 0;var state_46632__$1 = (function (){var statearr_46635 = state_46632;(statearr_46635[7] = inst_46597);
(statearr_46635[8] = inst_46596);
return statearr_46635;
})();var statearr_46636_46664 = state_46632__$1;(statearr_46636_46664[2] = null);
(statearr_46636_46664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46633 === 4))
{var inst_46600 = (state_46632[9]);var inst_46600__$1 = (state_46632[2]);var inst_46601 = (inst_46600__$1 == null);var inst_46602 = cljs.core.not.call(null,inst_46601);var state_46632__$1 = (function (){var statearr_46637 = state_46632;(statearr_46637[9] = inst_46600__$1);
return statearr_46637;
})();if(inst_46602)
{var statearr_46638_46665 = state_46632__$1;(statearr_46638_46665[1] = 5);
} else
{var statearr_46639_46666 = state_46632__$1;(statearr_46639_46666[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46633 === 15))
{var inst_46622 = (state_46632[2]);var state_46632__$1 = state_46632;var statearr_46640_46667 = state_46632__$1;(statearr_46640_46667[2] = inst_46622);
(statearr_46640_46667[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46633 === 13))
{var state_46632__$1 = state_46632;var statearr_46641_46668 = state_46632__$1;(statearr_46641_46668[2] = null);
(statearr_46641_46668[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46633 === 6))
{var inst_46597 = (state_46632[7]);var inst_46618 = (inst_46597 > 0);var state_46632__$1 = state_46632;if(cljs.core.truth_(inst_46618))
{var statearr_46642_46669 = state_46632__$1;(statearr_46642_46669[1] = 12);
} else
{var statearr_46643_46670 = state_46632__$1;(statearr_46643_46670[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46633 === 3))
{var inst_46630 = (state_46632[2]);var state_46632__$1 = state_46632;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46632__$1,inst_46630);
} else
{if((state_val_46633 === 12))
{var inst_46596 = (state_46632[8]);var inst_46620 = cljs.core.vec.call(null,inst_46596);var state_46632__$1 = state_46632;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46632__$1,15,out,inst_46620);
} else
{if((state_val_46633 === 2))
{var state_46632__$1 = state_46632;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46632__$1,4,ch);
} else
{if((state_val_46633 === 11))
{var inst_46612 = (state_46632[2]);var inst_46613 = (new Array(n));var inst_46596 = inst_46613;var inst_46597 = 0;var state_46632__$1 = (function (){var statearr_46644 = state_46632;(statearr_46644[7] = inst_46597);
(statearr_46644[8] = inst_46596);
(statearr_46644[10] = inst_46612);
return statearr_46644;
})();var statearr_46645_46671 = state_46632__$1;(statearr_46645_46671[2] = null);
(statearr_46645_46671[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46633 === 9))
{var inst_46596 = (state_46632[8]);var inst_46610 = cljs.core.vec.call(null,inst_46596);var state_46632__$1 = state_46632;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46632__$1,11,out,inst_46610);
} else
{if((state_val_46633 === 5))
{var inst_46605 = (state_46632[11]);var inst_46600 = (state_46632[9]);var inst_46597 = (state_46632[7]);var inst_46596 = (state_46632[8]);var inst_46604 = (inst_46596[inst_46597] = inst_46600);var inst_46605__$1 = (inst_46597 + 1);var inst_46606 = (inst_46605__$1 < n);var state_46632__$1 = (function (){var statearr_46646 = state_46632;(statearr_46646[11] = inst_46605__$1);
(statearr_46646[12] = inst_46604);
return statearr_46646;
})();if(cljs.core.truth_(inst_46606))
{var statearr_46647_46672 = state_46632__$1;(statearr_46647_46672[1] = 8);
} else
{var statearr_46648_46673 = state_46632__$1;(statearr_46648_46673[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46633 === 14))
{var inst_46625 = (state_46632[2]);var inst_46626 = cljs.core.async.close_BANG_.call(null,out);var state_46632__$1 = (function (){var statearr_46650 = state_46632;(statearr_46650[13] = inst_46625);
return statearr_46650;
})();var statearr_46651_46674 = state_46632__$1;(statearr_46651_46674[2] = inst_46626);
(statearr_46651_46674[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46633 === 10))
{var inst_46616 = (state_46632[2]);var state_46632__$1 = state_46632;var statearr_46652_46675 = state_46632__$1;(statearr_46652_46675[2] = inst_46616);
(statearr_46652_46675[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46633 === 8))
{var inst_46605 = (state_46632[11]);var inst_46596 = (state_46632[8]);var tmp46649 = inst_46596;var inst_46596__$1 = tmp46649;var inst_46597 = inst_46605;var state_46632__$1 = (function (){var statearr_46653 = state_46632;(statearr_46653[7] = inst_46597);
(statearr_46653[8] = inst_46596__$1);
return statearr_46653;
})();var statearr_46654_46676 = state_46632__$1;(statearr_46654_46676[2] = null);
(statearr_46654_46676[1] = 2);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_46658 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46658[0] = state_machine__35937__auto__);
(statearr_46658[1] = 1);
return statearr_46658;
});
var state_machine__35937__auto____1 = (function (state_46632){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_46632);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e46659){if((e46659 instanceof Object))
{var ex__35940__auto__ = e46659;var statearr_46660_46677 = state_46632;(statearr_46660_46677[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46632);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46678 = state_46632;
state_46632 = G__46678;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_46632){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_46632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_46661 = f__36001__auto__.call(null);(statearr_46661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto___46662);
return statearr_46661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__36000__auto___46821 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__36001__auto__ = (function (){var switch__35936__auto__ = (function (state_46791){var state_val_46792 = (state_46791[1]);if((state_val_46792 === 7))
{var inst_46787 = (state_46791[2]);var state_46791__$1 = state_46791;var statearr_46793_46822 = state_46791__$1;(statearr_46793_46822[2] = inst_46787);
(statearr_46793_46822[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46792 === 1))
{var inst_46750 = [];var inst_46751 = inst_46750;var inst_46752 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_46791__$1 = (function (){var statearr_46794 = state_46791;(statearr_46794[7] = inst_46752);
(statearr_46794[8] = inst_46751);
return statearr_46794;
})();var statearr_46795_46823 = state_46791__$1;(statearr_46795_46823[2] = null);
(statearr_46795_46823[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46792 === 4))
{var inst_46755 = (state_46791[9]);var inst_46755__$1 = (state_46791[2]);var inst_46756 = (inst_46755__$1 == null);var inst_46757 = cljs.core.not.call(null,inst_46756);var state_46791__$1 = (function (){var statearr_46796 = state_46791;(statearr_46796[9] = inst_46755__$1);
return statearr_46796;
})();if(inst_46757)
{var statearr_46797_46824 = state_46791__$1;(statearr_46797_46824[1] = 5);
} else
{var statearr_46798_46825 = state_46791__$1;(statearr_46798_46825[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46792 === 15))
{var inst_46781 = (state_46791[2]);var state_46791__$1 = state_46791;var statearr_46799_46826 = state_46791__$1;(statearr_46799_46826[2] = inst_46781);
(statearr_46799_46826[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46792 === 13))
{var state_46791__$1 = state_46791;var statearr_46800_46827 = state_46791__$1;(statearr_46800_46827[2] = null);
(statearr_46800_46827[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46792 === 6))
{var inst_46751 = (state_46791[8]);var inst_46776 = inst_46751.length;var inst_46777 = (inst_46776 > 0);var state_46791__$1 = state_46791;if(cljs.core.truth_(inst_46777))
{var statearr_46801_46828 = state_46791__$1;(statearr_46801_46828[1] = 12);
} else
{var statearr_46802_46829 = state_46791__$1;(statearr_46802_46829[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46792 === 3))
{var inst_46789 = (state_46791[2]);var state_46791__$1 = state_46791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46791__$1,inst_46789);
} else
{if((state_val_46792 === 12))
{var inst_46751 = (state_46791[8]);var inst_46779 = cljs.core.vec.call(null,inst_46751);var state_46791__$1 = state_46791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46791__$1,15,out,inst_46779);
} else
{if((state_val_46792 === 2))
{var state_46791__$1 = state_46791;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46791__$1,4,ch);
} else
{if((state_val_46792 === 11))
{var inst_46759 = (state_46791[10]);var inst_46755 = (state_46791[9]);var inst_46769 = (state_46791[2]);var inst_46770 = [];var inst_46771 = inst_46770.push(inst_46755);var inst_46751 = inst_46770;var inst_46752 = inst_46759;var state_46791__$1 = (function (){var statearr_46803 = state_46791;(statearr_46803[11] = inst_46769);
(statearr_46803[7] = inst_46752);
(statearr_46803[12] = inst_46771);
(statearr_46803[8] = inst_46751);
return statearr_46803;
})();var statearr_46804_46830 = state_46791__$1;(statearr_46804_46830[2] = null);
(statearr_46804_46830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46792 === 9))
{var inst_46751 = (state_46791[8]);var inst_46767 = cljs.core.vec.call(null,inst_46751);var state_46791__$1 = state_46791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_46791__$1,11,out,inst_46767);
} else
{if((state_val_46792 === 5))
{var inst_46759 = (state_46791[10]);var inst_46755 = (state_46791[9]);var inst_46752 = (state_46791[7]);var inst_46759__$1 = f.call(null,inst_46755);var inst_46760 = cljs.core._EQ_.call(null,inst_46759__$1,inst_46752);var inst_46761 = cljs.core.keyword_identical_QMARK_.call(null,inst_46752,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_46762 = (inst_46760) || (inst_46761);var state_46791__$1 = (function (){var statearr_46805 = state_46791;(statearr_46805[10] = inst_46759__$1);
return statearr_46805;
})();if(cljs.core.truth_(inst_46762))
{var statearr_46806_46831 = state_46791__$1;(statearr_46806_46831[1] = 8);
} else
{var statearr_46807_46832 = state_46791__$1;(statearr_46807_46832[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46792 === 14))
{var inst_46784 = (state_46791[2]);var inst_46785 = cljs.core.async.close_BANG_.call(null,out);var state_46791__$1 = (function (){var statearr_46809 = state_46791;(statearr_46809[13] = inst_46784);
return statearr_46809;
})();var statearr_46810_46833 = state_46791__$1;(statearr_46810_46833[2] = inst_46785);
(statearr_46810_46833[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46792 === 10))
{var inst_46774 = (state_46791[2]);var state_46791__$1 = state_46791;var statearr_46811_46834 = state_46791__$1;(statearr_46811_46834[2] = inst_46774);
(statearr_46811_46834[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_46792 === 8))
{var inst_46759 = (state_46791[10]);var inst_46755 = (state_46791[9]);var inst_46751 = (state_46791[8]);var inst_46764 = inst_46751.push(inst_46755);var tmp46808 = inst_46751;var inst_46751__$1 = tmp46808;var inst_46752 = inst_46759;var state_46791__$1 = (function (){var statearr_46812 = state_46791;(statearr_46812[14] = inst_46764);
(statearr_46812[7] = inst_46752);
(statearr_46812[8] = inst_46751__$1);
return statearr_46812;
})();var statearr_46813_46835 = state_46791__$1;(statearr_46813_46835[2] = null);
(statearr_46813_46835[1] = 2);
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
});return ((function (switch__35936__auto__){
return (function() {
var state_machine__35937__auto__ = null;
var state_machine__35937__auto____0 = (function (){var statearr_46817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_46817[0] = state_machine__35937__auto__);
(statearr_46817[1] = 1);
return statearr_46817;
});
var state_machine__35937__auto____1 = (function (state_46791){while(true){
var ret_value__35938__auto__ = (function (){try{while(true){
var result__35939__auto__ = switch__35936__auto__.call(null,state_46791);if(cljs.core.keyword_identical_QMARK_.call(null,result__35939__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__35939__auto__;
}
break;
}
}catch (e46818){if((e46818 instanceof Object))
{var ex__35940__auto__ = e46818;var statearr_46819_46836 = state_46791;(statearr_46819_46836[5] = ex__35940__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46791);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e46818;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35938__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__46837 = state_46791;
state_46791 = G__46837;
continue;
}
} else
{return ret_value__35938__auto__;
}
break;
}
});
state_machine__35937__auto__ = function(state_46791){
switch(arguments.length){
case 0:
return state_machine__35937__auto____0.call(this);
case 1:
return state_machine__35937__auto____1.call(this,state_46791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__35937__auto____0;
state_machine__35937__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__35937__auto____1;
return state_machine__35937__auto__;
})()
;})(switch__35936__auto__))
})();var state__36002__auto__ = (function (){var statearr_46820 = f__36001__auto__.call(null);(statearr_46820[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__36000__auto___46821);
return statearr_46820;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__36002__auto__);
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

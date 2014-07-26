// Compiled by ClojureScript 0.0-2156
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.walk');
goog.require('clojure.string');
goog.require('sablono.util');
goog.require('goog.dom');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){return (function() { 
var G__34481__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__34480 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__34480,0,null);var body = cljs.core.nthnext.call(null,vec__34480,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__34481 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__34481__delegate.call(this,args);};
G__34481.cljs$lang$maxFixedArity = 0;
G__34481.cljs$lang$applyTo = (function (arglist__34482){
var args = cljs.core.seq(arglist__34482);
return G__34481__delegate(args);
});
G__34481.cljs$core$IFn$_invoke$arity$variadic = G__34481__delegate;
return G__34481;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__15699__auto__ = (function iter__34487(s__34488){return (new cljs.core.LazySeq(null,(function (){var s__34488__$1 = s__34488;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34488__$1);if(temp__4126__auto__)
{var s__34488__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34488__$2))
{var c__15697__auto__ = cljs.core.chunk_first.call(null,s__34488__$2);var size__15698__auto__ = cljs.core.count.call(null,c__15697__auto__);var b__34490 = cljs.core.chunk_buffer.call(null,size__15698__auto__);if((function (){var i__34489 = 0;while(true){
if((i__34489 < size__15698__auto__))
{var args = cljs.core._nth.call(null,c__15697__auto__,i__34489);cljs.core.chunk_append.call(null,b__34490,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__34491 = (i__34489 + 1);
i__34489 = G__34491;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34490),iter__34487.call(null,cljs.core.chunk_rest.call(null,s__34488__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34490),null);
}
} else
{var args = cljs.core.first.call(null,s__34488__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__34487.call(null,cljs.core.rest.call(null,s__34488__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15699__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){var iter__15699__auto__ = (function iter__34496(s__34497){return (new cljs.core.LazySeq(null,(function (){var s__34497__$1 = s__34497;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34497__$1);if(temp__4126__auto__)
{var s__34497__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34497__$2))
{var c__15697__auto__ = cljs.core.chunk_first.call(null,s__34497__$2);var size__15698__auto__ = cljs.core.count.call(null,c__15697__auto__);var b__34499 = cljs.core.chunk_buffer.call(null,size__15698__auto__);if((function (){var i__34498 = 0;while(true){
if((i__34498 < size__15698__auto__))
{var style = cljs.core._nth.call(null,c__15697__auto__,i__34498);cljs.core.chunk_append.call(null,b__34499,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__34500 = (i__34498 + 1);
i__34498 = G__34500;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34499),iter__34496.call(null,cljs.core.chunk_rest.call(null,s__34497__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34499),null);
}
} else
{var style = cljs.core.first.call(null,s__34497__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__34496.call(null,cljs.core.rest.call(null,s__34497__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15699__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;if (arguments.length > 0) {
  styles = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__34501){
var styles = cljs.core.seq(arglist__34501);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to34502 = (function() { 
var link_to34502__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to34502 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to34502__delegate.call(this,url,content);};
link_to34502.cljs$lang$maxFixedArity = 1;
link_to34502.cljs$lang$applyTo = (function (arglist__34503){
var url = cljs.core.first(arglist__34503);
var content = cljs.core.rest(arglist__34503);
return link_to34502__delegate(url,content);
});
link_to34502.cljs$core$IFn$_invoke$arity$variadic = link_to34502__delegate;
return link_to34502;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to34502);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to34504 = (function() { 
var mail_to34504__delegate = function (e_mail,p__34505){var vec__34507 = p__34505;var content = cljs.core.nth.call(null,vec__34507,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__14982__auto__ = content;if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to34504 = function (e_mail,var_args){
var p__34505 = null;if (arguments.length > 1) {
  p__34505 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to34504__delegate.call(this,e_mail,p__34505);};
mail_to34504.cljs$lang$maxFixedArity = 1;
mail_to34504.cljs$lang$applyTo = (function (arglist__34508){
var e_mail = cljs.core.first(arglist__34508);
var p__34505 = cljs.core.rest(arglist__34508);
return mail_to34504__delegate(e_mail,p__34505);
});
mail_to34504.cljs$core$IFn$_invoke$arity$variadic = mail_to34504__delegate;
return mail_to34504;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to34504);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list34509 = (function unordered_list34509(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__15699__auto__ = (function iter__34514(s__34515){return (new cljs.core.LazySeq(null,(function (){var s__34515__$1 = s__34515;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34515__$1);if(temp__4126__auto__)
{var s__34515__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34515__$2))
{var c__15697__auto__ = cljs.core.chunk_first.call(null,s__34515__$2);var size__15698__auto__ = cljs.core.count.call(null,c__15697__auto__);var b__34517 = cljs.core.chunk_buffer.call(null,size__15698__auto__);if((function (){var i__34516 = 0;while(true){
if((i__34516 < size__15698__auto__))
{var x = cljs.core._nth.call(null,c__15697__auto__,i__34516);cljs.core.chunk_append.call(null,b__34517,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__34518 = (i__34516 + 1);
i__34516 = G__34518;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34517),iter__34514.call(null,cljs.core.chunk_rest.call(null,s__34515__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34517),null);
}
} else
{var x = cljs.core.first.call(null,s__34515__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__34514.call(null,cljs.core.rest.call(null,s__34515__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15699__auto__.call(null,coll);
})()], null);
});
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list34509);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list34519 = (function ordered_list34519(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__15699__auto__ = (function iter__34524(s__34525){return (new cljs.core.LazySeq(null,(function (){var s__34525__$1 = s__34525;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34525__$1);if(temp__4126__auto__)
{var s__34525__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34525__$2))
{var c__15697__auto__ = cljs.core.chunk_first.call(null,s__34525__$2);var size__15698__auto__ = cljs.core.count.call(null,c__15697__auto__);var b__34527 = cljs.core.chunk_buffer.call(null,size__15698__auto__);if((function (){var i__34526 = 0;while(true){
if((i__34526 < size__15698__auto__))
{var x = cljs.core._nth.call(null,c__15697__auto__,i__34526);cljs.core.chunk_append.call(null,b__34527,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__34528 = (i__34526 + 1);
i__34526 = G__34528;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34527),iter__34524.call(null,cljs.core.chunk_rest.call(null,s__34525__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34527),null);
}
} else
{var x = cljs.core.first.call(null,s__34525__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__34524.call(null,cljs.core.rest.call(null,s__34525__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15699__auto__.call(null,coll);
})()], null);
});
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list34519);
/**
* Create an image element.
*/
sablono.core.image34529 = (function() {
var image34529 = null;
var image34529__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image34529__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image34529 = function(src,alt){
switch(arguments.length){
case 1:
return image34529__1.call(this,src);
case 2:
return image34529__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image34529.cljs$core$IFn$_invoke$arity$1 = image34529__1;
image34529.cljs$core$IFn$_invoke$arity$2 = image34529__2;
return image34529;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image34529);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__34530_SHARP_,p2__34531_SHARP_){return [cljs.core.str(p1__34530_SHARP_),cljs.core.str("["),cljs.core.str(p2__34531_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__34532_SHARP_,p2__34533_SHARP_){return [cljs.core.str(p1__34532_SHARP_),cljs.core.str("-"),cljs.core.str(p2__34533_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1017479852),type,new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field34534 = (function() {
var color_field34534 = null;
var color_field34534__1 = (function (name__26715__auto__){return color_field34534.call(null,name__26715__auto__,null);
});
var color_field34534__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__26715__auto__,value__26716__auto__);
});
color_field34534 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return color_field34534__1.call(this,name__26715__auto__);
case 2:
return color_field34534__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field34534.cljs$core$IFn$_invoke$arity$1 = color_field34534__1;
color_field34534.cljs$core$IFn$_invoke$arity$2 = color_field34534__2;
return color_field34534;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field34534);
/**
* Creates a date input field.
*/
sablono.core.date_field34535 = (function() {
var date_field34535 = null;
var date_field34535__1 = (function (name__26715__auto__){return date_field34535.call(null,name__26715__auto__,null);
});
var date_field34535__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__26715__auto__,value__26716__auto__);
});
date_field34535 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return date_field34535__1.call(this,name__26715__auto__);
case 2:
return date_field34535__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field34535.cljs$core$IFn$_invoke$arity$1 = date_field34535__1;
date_field34535.cljs$core$IFn$_invoke$arity$2 = date_field34535__2;
return date_field34535;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field34535);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field34536 = (function() {
var datetime_field34536 = null;
var datetime_field34536__1 = (function (name__26715__auto__){return datetime_field34536.call(null,name__26715__auto__,null);
});
var datetime_field34536__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__26715__auto__,value__26716__auto__);
});
datetime_field34536 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return datetime_field34536__1.call(this,name__26715__auto__);
case 2:
return datetime_field34536__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field34536.cljs$core$IFn$_invoke$arity$1 = datetime_field34536__1;
datetime_field34536.cljs$core$IFn$_invoke$arity$2 = datetime_field34536__2;
return datetime_field34536;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field34536);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field34537 = (function() {
var datetime_local_field34537 = null;
var datetime_local_field34537__1 = (function (name__26715__auto__){return datetime_local_field34537.call(null,name__26715__auto__,null);
});
var datetime_local_field34537__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__26715__auto__,value__26716__auto__);
});
datetime_local_field34537 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return datetime_local_field34537__1.call(this,name__26715__auto__);
case 2:
return datetime_local_field34537__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field34537.cljs$core$IFn$_invoke$arity$1 = datetime_local_field34537__1;
datetime_local_field34537.cljs$core$IFn$_invoke$arity$2 = datetime_local_field34537__2;
return datetime_local_field34537;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field34537);
/**
* Creates a email input field.
*/
sablono.core.email_field34538 = (function() {
var email_field34538 = null;
var email_field34538__1 = (function (name__26715__auto__){return email_field34538.call(null,name__26715__auto__,null);
});
var email_field34538__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__26715__auto__,value__26716__auto__);
});
email_field34538 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return email_field34538__1.call(this,name__26715__auto__);
case 2:
return email_field34538__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field34538.cljs$core$IFn$_invoke$arity$1 = email_field34538__1;
email_field34538.cljs$core$IFn$_invoke$arity$2 = email_field34538__2;
return email_field34538;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field34538);
/**
* Creates a file input field.
*/
sablono.core.file_field34539 = (function() {
var file_field34539 = null;
var file_field34539__1 = (function (name__26715__auto__){return file_field34539.call(null,name__26715__auto__,null);
});
var file_field34539__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__26715__auto__,value__26716__auto__);
});
file_field34539 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return file_field34539__1.call(this,name__26715__auto__);
case 2:
return file_field34539__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field34539.cljs$core$IFn$_invoke$arity$1 = file_field34539__1;
file_field34539.cljs$core$IFn$_invoke$arity$2 = file_field34539__2;
return file_field34539;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field34539);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field34540 = (function() {
var hidden_field34540 = null;
var hidden_field34540__1 = (function (name__26715__auto__){return hidden_field34540.call(null,name__26715__auto__,null);
});
var hidden_field34540__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__26715__auto__,value__26716__auto__);
});
hidden_field34540 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return hidden_field34540__1.call(this,name__26715__auto__);
case 2:
return hidden_field34540__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field34540.cljs$core$IFn$_invoke$arity$1 = hidden_field34540__1;
hidden_field34540.cljs$core$IFn$_invoke$arity$2 = hidden_field34540__2;
return hidden_field34540;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field34540);
/**
* Creates a month input field.
*/
sablono.core.month_field34541 = (function() {
var month_field34541 = null;
var month_field34541__1 = (function (name__26715__auto__){return month_field34541.call(null,name__26715__auto__,null);
});
var month_field34541__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__26715__auto__,value__26716__auto__);
});
month_field34541 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return month_field34541__1.call(this,name__26715__auto__);
case 2:
return month_field34541__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field34541.cljs$core$IFn$_invoke$arity$1 = month_field34541__1;
month_field34541.cljs$core$IFn$_invoke$arity$2 = month_field34541__2;
return month_field34541;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field34541);
/**
* Creates a number input field.
*/
sablono.core.number_field34542 = (function() {
var number_field34542 = null;
var number_field34542__1 = (function (name__26715__auto__){return number_field34542.call(null,name__26715__auto__,null);
});
var number_field34542__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__26715__auto__,value__26716__auto__);
});
number_field34542 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return number_field34542__1.call(this,name__26715__auto__);
case 2:
return number_field34542__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field34542.cljs$core$IFn$_invoke$arity$1 = number_field34542__1;
number_field34542.cljs$core$IFn$_invoke$arity$2 = number_field34542__2;
return number_field34542;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field34542);
/**
* Creates a password input field.
*/
sablono.core.password_field34543 = (function() {
var password_field34543 = null;
var password_field34543__1 = (function (name__26715__auto__){return password_field34543.call(null,name__26715__auto__,null);
});
var password_field34543__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__26715__auto__,value__26716__auto__);
});
password_field34543 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return password_field34543__1.call(this,name__26715__auto__);
case 2:
return password_field34543__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field34543.cljs$core$IFn$_invoke$arity$1 = password_field34543__1;
password_field34543.cljs$core$IFn$_invoke$arity$2 = password_field34543__2;
return password_field34543;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field34543);
/**
* Creates a range input field.
*/
sablono.core.range_field34544 = (function() {
var range_field34544 = null;
var range_field34544__1 = (function (name__26715__auto__){return range_field34544.call(null,name__26715__auto__,null);
});
var range_field34544__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__26715__auto__,value__26716__auto__);
});
range_field34544 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return range_field34544__1.call(this,name__26715__auto__);
case 2:
return range_field34544__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field34544.cljs$core$IFn$_invoke$arity$1 = range_field34544__1;
range_field34544.cljs$core$IFn$_invoke$arity$2 = range_field34544__2;
return range_field34544;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field34544);
/**
* Creates a search input field.
*/
sablono.core.search_field34545 = (function() {
var search_field34545 = null;
var search_field34545__1 = (function (name__26715__auto__){return search_field34545.call(null,name__26715__auto__,null);
});
var search_field34545__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__26715__auto__,value__26716__auto__);
});
search_field34545 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return search_field34545__1.call(this,name__26715__auto__);
case 2:
return search_field34545__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field34545.cljs$core$IFn$_invoke$arity$1 = search_field34545__1;
search_field34545.cljs$core$IFn$_invoke$arity$2 = search_field34545__2;
return search_field34545;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field34545);
/**
* Creates a tel input field.
*/
sablono.core.tel_field34546 = (function() {
var tel_field34546 = null;
var tel_field34546__1 = (function (name__26715__auto__){return tel_field34546.call(null,name__26715__auto__,null);
});
var tel_field34546__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__26715__auto__,value__26716__auto__);
});
tel_field34546 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return tel_field34546__1.call(this,name__26715__auto__);
case 2:
return tel_field34546__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field34546.cljs$core$IFn$_invoke$arity$1 = tel_field34546__1;
tel_field34546.cljs$core$IFn$_invoke$arity$2 = tel_field34546__2;
return tel_field34546;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field34546);
/**
* Creates a text input field.
*/
sablono.core.text_field34547 = (function() {
var text_field34547 = null;
var text_field34547__1 = (function (name__26715__auto__){return text_field34547.call(null,name__26715__auto__,null);
});
var text_field34547__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__26715__auto__,value__26716__auto__);
});
text_field34547 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return text_field34547__1.call(this,name__26715__auto__);
case 2:
return text_field34547__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field34547.cljs$core$IFn$_invoke$arity$1 = text_field34547__1;
text_field34547.cljs$core$IFn$_invoke$arity$2 = text_field34547__2;
return text_field34547;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field34547);
/**
* Creates a time input field.
*/
sablono.core.time_field34548 = (function() {
var time_field34548 = null;
var time_field34548__1 = (function (name__26715__auto__){return time_field34548.call(null,name__26715__auto__,null);
});
var time_field34548__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__26715__auto__,value__26716__auto__);
});
time_field34548 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return time_field34548__1.call(this,name__26715__auto__);
case 2:
return time_field34548__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field34548.cljs$core$IFn$_invoke$arity$1 = time_field34548__1;
time_field34548.cljs$core$IFn$_invoke$arity$2 = time_field34548__2;
return time_field34548;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field34548);
/**
* Creates a url input field.
*/
sablono.core.url_field34549 = (function() {
var url_field34549 = null;
var url_field34549__1 = (function (name__26715__auto__){return url_field34549.call(null,name__26715__auto__,null);
});
var url_field34549__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__26715__auto__,value__26716__auto__);
});
url_field34549 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return url_field34549__1.call(this,name__26715__auto__);
case 2:
return url_field34549__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field34549.cljs$core$IFn$_invoke$arity$1 = url_field34549__1;
url_field34549.cljs$core$IFn$_invoke$arity$2 = url_field34549__2;
return url_field34549;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field34549);
/**
* Creates a week input field.
*/
sablono.core.week_field34550 = (function() {
var week_field34550 = null;
var week_field34550__1 = (function (name__26715__auto__){return week_field34550.call(null,name__26715__auto__,null);
});
var week_field34550__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__26715__auto__,value__26716__auto__);
});
week_field34550 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return week_field34550__1.call(this,name__26715__auto__);
case 2:
return week_field34550__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field34550.cljs$core$IFn$_invoke$arity$1 = week_field34550__1;
week_field34550.cljs$core$IFn$_invoke$arity$2 = week_field34550__2;
return week_field34550;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field34550);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box34551 = (function() {
var check_box34551 = null;
var check_box34551__1 = (function (name){return check_box34551.call(null,name,null);
});
var check_box34551__2 = (function (name,checked_QMARK_){return check_box34551.call(null,name,checked_QMARK_,"true");
});
var check_box34551__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box34551 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box34551__1.call(this,name);
case 2:
return check_box34551__2.call(this,name,checked_QMARK_);
case 3:
return check_box34551__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box34551.cljs$core$IFn$_invoke$arity$1 = check_box34551__1;
check_box34551.cljs$core$IFn$_invoke$arity$2 = check_box34551__2;
check_box34551.cljs$core$IFn$_invoke$arity$3 = check_box34551__3;
return check_box34551;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box34551);
/**
* Creates a radio button.
*/
sablono.core.radio_button34552 = (function() {
var radio_button34552 = null;
var radio_button34552__1 = (function (group){return radio_button34552.call(null,group,null);
});
var radio_button34552__2 = (function (group,checked_QMARK_){return radio_button34552.call(null,group,checked_QMARK_,"true");
});
var radio_button34552__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button34552 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button34552__1.call(this,group);
case 2:
return radio_button34552__2.call(this,group,checked_QMARK_);
case 3:
return radio_button34552__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button34552.cljs$core$IFn$_invoke$arity$1 = radio_button34552__1;
radio_button34552.cljs$core$IFn$_invoke$arity$2 = radio_button34552__2;
radio_button34552.cljs$core$IFn$_invoke$arity$3 = radio_button34552__3;
return radio_button34552;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button34552);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options34553 = (function() {
var select_options34553 = null;
var select_options34553__1 = (function (coll){return select_options34553.call(null,coll,null);
});
var select_options34553__2 = (function (coll,selected){var iter__15699__auto__ = (function iter__34562(s__34563){return (new cljs.core.LazySeq(null,(function (){var s__34563__$1 = s__34563;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__34563__$1);if(temp__4126__auto__)
{var s__34563__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__34563__$2))
{var c__15697__auto__ = cljs.core.chunk_first.call(null,s__34563__$2);var size__15698__auto__ = cljs.core.count.call(null,c__15697__auto__);var b__34565 = cljs.core.chunk_buffer.call(null,size__15698__auto__);if((function (){var i__34564 = 0;while(true){
if((i__34564 < size__15698__auto__))
{var x = cljs.core._nth.call(null,c__15697__auto__,i__34564);cljs.core.chunk_append.call(null,b__34565,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34568 = x;var text = cljs.core.nth.call(null,vec__34568,0,null);var val = cljs.core.nth.call(null,vec__34568,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__34568,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options34553.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__34570 = (i__34564 + 1);
i__34564 = G__34570;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34565),iter__34562.call(null,cljs.core.chunk_rest.call(null,s__34563__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34565),null);
}
} else
{var x = cljs.core.first.call(null,s__34563__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__34569 = x;var text = cljs.core.nth.call(null,vec__34569,0,null);var val = cljs.core.nth.call(null,vec__34569,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__34569,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options34553.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__34562.call(null,cljs.core.rest.call(null,s__34563__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15699__auto__.call(null,coll);
});
select_options34553 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options34553__1.call(this,coll);
case 2:
return select_options34553__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options34553.cljs$core$IFn$_invoke$arity$1 = select_options34553__1;
select_options34553.cljs$core$IFn$_invoke$arity$2 = select_options34553__2;
return select_options34553;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options34553);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down34571 = (function() {
var drop_down34571 = null;
var drop_down34571__2 = (function (name,options){return drop_down34571.call(null,name,options,null);
});
var drop_down34571__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down34571 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down34571__2.call(this,name,options);
case 3:
return drop_down34571__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down34571.cljs$core$IFn$_invoke$arity$2 = drop_down34571__2;
drop_down34571.cljs$core$IFn$_invoke$arity$3 = drop_down34571__3;
return drop_down34571;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down34571);
/**
* Creates a text area element.
*/
sablono.core.text_area34572 = (function() {
var text_area34572 = null;
var text_area34572__1 = (function (name){return text_area34572.call(null,name,null);
});
var text_area34572__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area34572 = function(name,value){
switch(arguments.length){
case 1:
return text_area34572__1.call(this,name);
case 2:
return text_area34572__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area34572.cljs$core$IFn$_invoke$arity$1 = text_area34572__1;
text_area34572.cljs$core$IFn$_invoke$arity$2 = text_area34572__2;
return text_area34572;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area34572);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label34573 = (function label34573(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label34573);
/**
* Creates a submit button.
*/
sablono.core.submit_button34574 = (function submit_button34574(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button34574);
/**
* Creates a form reset button.
*/
sablono.core.reset_button34575 = (function reset_button34575(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button34575);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to34576 = (function() { 
var form_to34576__delegate = function (p__34577,body){var vec__34579 = p__34577;var method = cljs.core.nth.call(null,vec__34579,0,null);var action = cljs.core.nth.call(null,vec__34579,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to34576 = function (p__34577,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to34576__delegate.call(this,p__34577,body);};
form_to34576.cljs$lang$maxFixedArity = 1;
form_to34576.cljs$lang$applyTo = (function (arglist__34580){
var p__34577 = cljs.core.first(arglist__34580);
var body = cljs.core.rest(arglist__34580);
return form_to34576__delegate(p__34577,body);
});
form_to34576.cljs$core$IFn$_invoke$arity$variadic = form_to34576__delegate;
return form_to34576;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to34576);

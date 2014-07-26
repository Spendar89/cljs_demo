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
var G__27302__delegate = function (args){if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args)))
{var vec__27301 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));var tag = cljs.core.nth.call(null,vec__27301,0,null);var body = cljs.core.nthnext.call(null,vec__27301,1);if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body)))
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else
{return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else
{return cljs.core.apply.call(null,func,args);
}
};
var G__27302 = function (var_args){
var args = null;if (arguments.length > 0) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__27302__delegate.call(this,args);};
G__27302.cljs$lang$maxFixedArity = 0;
G__27302.cljs$lang$applyTo = (function (arglist__27303){
var args = cljs.core.seq(arglist__27303);
return G__27302__delegate(args);
});
G__27302.cljs$core$IFn$_invoke$arity$variadic = G__27302__delegate;
return G__27302;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){var iter__15699__auto__ = (function iter__27308(s__27309){return (new cljs.core.LazySeq(null,(function (){var s__27309__$1 = s__27309;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27309__$1);if(temp__4126__auto__)
{var s__27309__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27309__$2))
{var c__15697__auto__ = cljs.core.chunk_first.call(null,s__27309__$2);var size__15698__auto__ = cljs.core.count.call(null,c__15697__auto__);var b__27311 = cljs.core.chunk_buffer.call(null,size__15698__auto__);if((function (){var i__27310 = 0;while(true){
if((i__27310 < size__15698__auto__))
{var args = cljs.core._nth.call(null,c__15697__auto__,i__27310);cljs.core.chunk_append.call(null,b__27311,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)));
{
var G__27312 = (i__27310 + 1);
i__27310 = G__27312;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27311),iter__27308.call(null,cljs.core.chunk_rest.call(null,s__27309__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27311),null);
}
} else
{var args = cljs.core.first.call(null,s__27309__$2);return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",-1682549128,null),args)),iter__27308.call(null,cljs.core.rest.call(null,s__27309__$2)));
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
var include_css__delegate = function (styles){var iter__15699__auto__ = (function iter__27317(s__27318){return (new cljs.core.LazySeq(null,(function (){var s__27318__$1 = s__27318;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27318__$1);if(temp__4126__auto__)
{var s__27318__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27318__$2))
{var c__15697__auto__ = cljs.core.chunk_first.call(null,s__27318__$2);var size__15698__auto__ = cljs.core.count.call(null,c__15697__auto__);var b__27320 = cljs.core.chunk_buffer.call(null,size__15698__auto__);if((function (){var i__27319 = 0;while(true){
if((i__27319 < size__15698__auto__))
{var style = cljs.core._nth.call(null,c__15697__auto__,i__27319);cljs.core.chunk_append.call(null,b__27320,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null));
{
var G__27321 = (i__27319 + 1);
i__27319 = G__27321;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27320),iter__27317.call(null,cljs.core.chunk_rest.call(null,s__27318__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27320),null);
}
} else
{var style = cljs.core.first.call(null,s__27318__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",1017226092),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1017479852),"text/css",new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1014017035),"stylesheet"], null)], null),iter__27317.call(null,cljs.core.rest.call(null,s__27318__$2)));
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
include_css.cljs$lang$applyTo = (function (arglist__27322){
var styles = cljs.core.seq(arglist__27322);
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
sablono.core.link_to27323 = (function() { 
var link_to27323__delegate = function (url,content){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to27323 = function (url,var_args){
var content = null;if (arguments.length > 1) {
  content = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return link_to27323__delegate.call(this,url,content);};
link_to27323.cljs$lang$maxFixedArity = 1;
link_to27323.cljs$lang$applyTo = (function (arglist__27324){
var url = cljs.core.first(arglist__27324);
var content = cljs.core.rest(arglist__27324);
return link_to27323__delegate(url,content);
});
link_to27323.cljs$core$IFn$_invoke$arity$variadic = link_to27323__delegate;
return link_to27323;
})()
;
sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27323);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to27325 = (function() { 
var mail_to27325__delegate = function (e_mail,p__27326){var vec__27328 = p__27326;var content = cljs.core.nth.call(null,vec__27328,0,null);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",1013904339),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",1017115293),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__14982__auto__ = content;if(cljs.core.truth_(or__14982__auto__))
{return or__14982__auto__;
} else
{return e_mail;
}
})()], null);
};
var mail_to27325 = function (e_mail,var_args){
var p__27326 = null;if (arguments.length > 1) {
  p__27326 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return mail_to27325__delegate.call(this,e_mail,p__27326);};
mail_to27325.cljs$lang$maxFixedArity = 1;
mail_to27325.cljs$lang$applyTo = (function (arglist__27329){
var e_mail = cljs.core.first(arglist__27329);
var p__27326 = cljs.core.rest(arglist__27329);
return mail_to27325__delegate(e_mail,p__27326);
});
mail_to27325.cljs$core$IFn$_invoke$arity$variadic = mail_to27325__delegate;
return mail_to27325;
})()
;
sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27325);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list27330 = (function unordered_list27330(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",1013907977),(function (){var iter__15699__auto__ = (function iter__27335(s__27336){return (new cljs.core.LazySeq(null,(function (){var s__27336__$1 = s__27336;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27336__$1);if(temp__4126__auto__)
{var s__27336__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27336__$2))
{var c__15697__auto__ = cljs.core.chunk_first.call(null,s__27336__$2);var size__15698__auto__ = cljs.core.count.call(null,c__15697__auto__);var b__27338 = cljs.core.chunk_buffer.call(null,size__15698__auto__);if((function (){var i__27337 = 0;while(true){
if((i__27337 < size__15698__auto__))
{var x = cljs.core._nth.call(null,c__15697__auto__,i__27337);cljs.core.chunk_append.call(null,b__27338,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__27339 = (i__27337 + 1);
i__27337 = G__27339;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27338),iter__27335.call(null,cljs.core.chunk_rest.call(null,s__27336__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27338),null);
}
} else
{var x = cljs.core.first.call(null,s__27336__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__27335.call(null,cljs.core.rest.call(null,s__27336__$2)));
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
sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27330);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list27340 = (function ordered_list27340(coll){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",1013907791),(function (){var iter__15699__auto__ = (function iter__27345(s__27346){return (new cljs.core.LazySeq(null,(function (){var s__27346__$1 = s__27346;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27346__$1);if(temp__4126__auto__)
{var s__27346__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27346__$2))
{var c__15697__auto__ = cljs.core.chunk_first.call(null,s__27346__$2);var size__15698__auto__ = cljs.core.count.call(null,c__15697__auto__);var b__27348 = cljs.core.chunk_buffer.call(null,size__15698__auto__);if((function (){var i__27347 = 0;while(true){
if((i__27347 < size__15698__auto__))
{var x = cljs.core._nth.call(null,c__15697__auto__,i__27347);cljs.core.chunk_append.call(null,b__27348,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null));
{
var G__27349 = (i__27347 + 1);
i__27347 = G__27349;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27348),iter__27345.call(null,cljs.core.chunk_rest.call(null,s__27346__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27348),null);
}
} else
{var x = cljs.core.first.call(null,s__27346__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",1013907695),x], null),iter__27345.call(null,cljs.core.rest.call(null,s__27346__$2)));
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
sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27340);
/**
* Create an image element.
*/
sablono.core.image27350 = (function() {
var image27350 = null;
var image27350__1 = (function (src){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src)], null)], null);
});
var image27350__2 = (function (src,alt){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1014008629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",1014018390),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",1014000923),alt], null)], null);
});
image27350 = function(src,alt){
switch(arguments.length){
case 1:
return image27350__1.call(this,src);
case 2:
return image27350__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image27350.cljs$core$IFn$_invoke$arity$1 = image27350__1;
image27350.cljs$core$IFn$_invoke$arity$2 = image27350__2;
return image27350;
})()
;
sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image27350);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){return cljs.core.reduce.call(null,(function (p1__27351_SHARP_,p2__27352_SHARP_){return [cljs.core.str(p1__27351_SHARP_),cljs.core.str("["),cljs.core.str(p2__27352_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){return cljs.core.reduce.call(null,(function (p1__27353_SHARP_,p2__27354_SHARP_){return [cljs.core.str(p1__27353_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27354_SHARP_)].join('');
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
sablono.core.color_field27355 = (function() {
var color_field27355 = null;
var color_field27355__1 = (function (name__26715__auto__){return color_field27355.call(null,name__26715__auto__,null);
});
var color_field27355__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1545688804,null))].join(''),name__26715__auto__,value__26716__auto__);
});
color_field27355 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return color_field27355__1.call(this,name__26715__auto__);
case 2:
return color_field27355__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field27355.cljs$core$IFn$_invoke$arity$1 = color_field27355__1;
color_field27355.cljs$core$IFn$_invoke$arity$2 = color_field27355__2;
return color_field27355;
})()
;
sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field27355);
/**
* Creates a date input field.
*/
sablono.core.date_field27356 = (function() {
var date_field27356 = null;
var date_field27356__1 = (function (name__26715__auto__){return date_field27356.call(null,name__26715__auto__,null);
});
var date_field27356__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",-1637455513,null))].join(''),name__26715__auto__,value__26716__auto__);
});
date_field27356 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return date_field27356__1.call(this,name__26715__auto__);
case 2:
return date_field27356__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field27356.cljs$core$IFn$_invoke$arity$1 = date_field27356__1;
date_field27356.cljs$core$IFn$_invoke$arity$2 = date_field27356__2;
return date_field27356;
})()
;
sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field27356);
/**
* Creates a datetime input field.
*/
sablono.core.datetime_field27357 = (function() {
var datetime_field27357 = null;
var datetime_field27357__1 = (function (name__26715__auto__){return datetime_field27357.call(null,name__26715__auto__,null);
});
var datetime_field27357__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",153171252,null))].join(''),name__26715__auto__,value__26716__auto__);
});
datetime_field27357 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return datetime_field27357__1.call(this,name__26715__auto__);
case 2:
return datetime_field27357__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field27357.cljs$core$IFn$_invoke$arity$1 = datetime_field27357__1;
datetime_field27357.cljs$core$IFn$_invoke$arity$2 = datetime_field27357__2;
return datetime_field27357;
})()
;
sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field27357);
/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field27358 = (function() {
var datetime_local_field27358 = null;
var datetime_local_field27358__1 = (function (name__26715__auto__){return datetime_local_field27358.call(null,name__26715__auto__,null);
});
var datetime_local_field27358__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",1631019090,null))].join(''),name__26715__auto__,value__26716__auto__);
});
datetime_local_field27358 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return datetime_local_field27358__1.call(this,name__26715__auto__);
case 2:
return datetime_local_field27358__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field27358.cljs$core$IFn$_invoke$arity$1 = datetime_local_field27358__1;
datetime_local_field27358.cljs$core$IFn$_invoke$arity$2 = datetime_local_field27358__2;
return datetime_local_field27358;
})()
;
sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field27358);
/**
* Creates a email input field.
*/
sablono.core.email_field27359 = (function() {
var email_field27359 = null;
var email_field27359__1 = (function (name__26715__auto__){return email_field27359.call(null,name__26715__auto__,null);
});
var email_field27359__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1543912107,null))].join(''),name__26715__auto__,value__26716__auto__);
});
email_field27359 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return email_field27359__1.call(this,name__26715__auto__);
case 2:
return email_field27359__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field27359.cljs$core$IFn$_invoke$arity$1 = email_field27359__1;
email_field27359.cljs$core$IFn$_invoke$arity$2 = email_field27359__2;
return email_field27359;
})()
;
sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field27359);
/**
* Creates a file input field.
*/
sablono.core.file_field27360 = (function() {
var file_field27360 = null;
var file_field27360__1 = (function (name__26715__auto__){return file_field27360.call(null,name__26715__auto__,null);
});
var file_field27360__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",-1637388491,null))].join(''),name__26715__auto__,value__26716__auto__);
});
file_field27360 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return file_field27360__1.call(this,name__26715__auto__);
case 2:
return file_field27360__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field27360.cljs$core$IFn$_invoke$arity$1 = file_field27360__1;
file_field27360.cljs$core$IFn$_invoke$arity$2 = file_field27360__2;
return file_field27360;
})()
;
sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field27360);
/**
* Creates a hidden input field.
*/
sablono.core.hidden_field27361 = (function() {
var hidden_field27361 = null;
var hidden_field27361__1 = (function (name__26715__auto__){return hidden_field27361.call(null,name__26715__auto__,null);
});
var hidden_field27361__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1436948323,null))].join(''),name__26715__auto__,value__26716__auto__);
});
hidden_field27361 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return hidden_field27361__1.call(this,name__26715__auto__);
case 2:
return hidden_field27361__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field27361.cljs$core$IFn$_invoke$arity$1 = hidden_field27361__1;
hidden_field27361.cljs$core$IFn$_invoke$arity$2 = hidden_field27361__2;
return hidden_field27361;
})()
;
sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field27361);
/**
* Creates a month input field.
*/
sablono.core.month_field27362 = (function() {
var month_field27362 = null;
var month_field27362__1 = (function (name__26715__auto__){return month_field27362.call(null,name__26715__auto__,null);
});
var month_field27362__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-1536451527,null))].join(''),name__26715__auto__,value__26716__auto__);
});
month_field27362 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return month_field27362__1.call(this,name__26715__auto__);
case 2:
return month_field27362__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field27362.cljs$core$IFn$_invoke$arity$1 = month_field27362__1;
month_field27362.cljs$core$IFn$_invoke$arity$2 = month_field27362__2;
return month_field27362;
})()
;
sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field27362);
/**
* Creates a number input field.
*/
sablono.core.number_field27363 = (function() {
var number_field27363 = null;
var number_field27363__1 = (function (name__26715__auto__){return number_field27363.call(null,name__26715__auto__,null);
});
var number_field27363__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",1620071682,null))].join(''),name__26715__auto__,value__26716__auto__);
});
number_field27363 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return number_field27363__1.call(this,name__26715__auto__);
case 2:
return number_field27363__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field27363.cljs$core$IFn$_invoke$arity$1 = number_field27363__1;
number_field27363.cljs$core$IFn$_invoke$arity$2 = number_field27363__2;
return number_field27363;
})()
;
sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field27363);
/**
* Creates a password input field.
*/
sablono.core.password_field27364 = (function() {
var password_field27364 = null;
var password_field27364__1 = (function (name__26715__auto__){return password_field27364.call(null,name__26715__auto__,null);
});
var password_field27364__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",-423545772,null))].join(''),name__26715__auto__,value__26716__auto__);
});
password_field27364 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return password_field27364__1.call(this,name__26715__auto__);
case 2:
return password_field27364__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field27364.cljs$core$IFn$_invoke$arity$1 = password_field27364__1;
password_field27364.cljs$core$IFn$_invoke$arity$2 = password_field27364__2;
return password_field27364;
})()
;
sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field27364);
/**
* Creates a range input field.
*/
sablono.core.range_field27365 = (function() {
var range_field27365 = null;
var range_field27365__1 = (function (name__26715__auto__){return range_field27365.call(null,name__26715__auto__,null);
});
var range_field27365__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1532251402,null))].join(''),name__26715__auto__,value__26716__auto__);
});
range_field27365 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return range_field27365__1.call(this,name__26715__auto__);
case 2:
return range_field27365__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field27365.cljs$core$IFn$_invoke$arity$1 = range_field27365__1;
range_field27365.cljs$core$IFn$_invoke$arity$2 = range_field27365__2;
return range_field27365;
})()
;
sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field27365);
/**
* Creates a search input field.
*/
sablono.core.search_field27366 = (function() {
var search_field27366 = null;
var search_field27366__1 = (function (name__26715__auto__){return search_field27366.call(null,name__26715__auto__,null);
});
var search_field27366__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",1748098913,null))].join(''),name__26715__auto__,value__26716__auto__);
});
search_field27366 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return search_field27366__1.call(this,name__26715__auto__);
case 2:
return search_field27366__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field27366.cljs$core$IFn$_invoke$arity$1 = search_field27366__1;
search_field27366.cljs$core$IFn$_invoke$arity$2 = search_field27366__2;
return search_field27366;
})()
;
sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field27366);
/**
* Creates a tel input field.
*/
sablono.core.tel_field27367 = (function() {
var tel_field27367 = null;
var tel_field27367__1 = (function (name__26715__auto__){return tel_field27367.call(null,name__26715__auto__,null);
});
var tel_field27367__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",-1640416812,null))].join(''),name__26715__auto__,value__26716__auto__);
});
tel_field27367 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return tel_field27367__1.call(this,name__26715__auto__);
case 2:
return tel_field27367__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field27367.cljs$core$IFn$_invoke$arity$1 = tel_field27367__1;
tel_field27367.cljs$core$IFn$_invoke$arity$2 = tel_field27367__2;
return tel_field27367;
})()
;
sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field27367);
/**
* Creates a text input field.
*/
sablono.core.text_field27368 = (function() {
var text_field27368 = null;
var text_field27368__1 = (function (name__26715__auto__){return text_field27368.call(null,name__26715__auto__,null);
});
var text_field27368__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-1636974874,null))].join(''),name__26715__auto__,value__26716__auto__);
});
text_field27368 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return text_field27368__1.call(this,name__26715__auto__);
case 2:
return text_field27368__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field27368.cljs$core$IFn$_invoke$arity$1 = text_field27368__1;
text_field27368.cljs$core$IFn$_invoke$arity$2 = text_field27368__2;
return text_field27368;
})()
;
sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field27368);
/**
* Creates a time input field.
*/
sablono.core.time_field27369 = (function() {
var time_field27369 = null;
var time_field27369__1 = (function (name__26715__auto__){return time_field27369.call(null,name__26715__auto__,null);
});
var time_field27369__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1636971386,null))].join(''),name__26715__auto__,value__26716__auto__);
});
time_field27369 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return time_field27369__1.call(this,name__26715__auto__);
case 2:
return time_field27369__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field27369.cljs$core$IFn$_invoke$arity$1 = time_field27369__1;
time_field27369.cljs$core$IFn$_invoke$arity$2 = time_field27369__2;
return time_field27369;
})()
;
sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field27369);
/**
* Creates a url input field.
*/
sablono.core.url_field27370 = (function() {
var url_field27370 = null;
var url_field27370__1 = (function (name__26715__auto__){return url_field27370.call(null,name__26715__auto__,null);
});
var url_field27370__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",-1640415448,null))].join(''),name__26715__auto__,value__26716__auto__);
});
url_field27370 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return url_field27370__1.call(this,name__26715__auto__);
case 2:
return url_field27370__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field27370.cljs$core$IFn$_invoke$arity$1 = url_field27370__1;
url_field27370.cljs$core$IFn$_invoke$arity$2 = url_field27370__2;
return url_field27370;
})()
;
sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field27370);
/**
* Creates a week input field.
*/
sablono.core.week_field27371 = (function() {
var week_field27371 = null;
var week_field27371__1 = (function (name__26715__auto__){return week_field27371.call(null,name__26715__auto__,null);
});
var week_field27371__2 = (function (name__26715__auto__,value__26716__auto__){return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",-1636886099,null))].join(''),name__26715__auto__,value__26716__auto__);
});
week_field27371 = function(name__26715__auto__,value__26716__auto__){
switch(arguments.length){
case 1:
return week_field27371__1.call(this,name__26715__auto__);
case 2:
return week_field27371__2.call(this,name__26715__auto__,value__26716__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field27371.cljs$core$IFn$_invoke$arity$1 = week_field27371__1;
week_field27371.cljs$core$IFn$_invoke$arity$2 = week_field27371__2;
return week_field27371;
})()
;
sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field27371);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box27372 = (function() {
var check_box27372 = null;
var check_box27372__1 = (function (name){return check_box27372.call(null,name,null);
});
var check_box27372__2 = (function (name,checked_QMARK_){return check_box27372.call(null,name,checked_QMARK_,"true");
});
var check_box27372__3 = (function (name,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"checkbox",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
check_box27372 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box27372__1.call(this,name);
case 2:
return check_box27372__2.call(this,name,checked_QMARK_);
case 3:
return check_box27372__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box27372.cljs$core$IFn$_invoke$arity$1 = check_box27372__1;
check_box27372.cljs$core$IFn$_invoke$arity$2 = check_box27372__2;
check_box27372.cljs$core$IFn$_invoke$arity$3 = check_box27372__3;
return check_box27372;
})()
;
sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box27372);
/**
* Creates a radio button.
*/
sablono.core.radio_button27373 = (function() {
var radio_button27373 = null;
var radio_button27373__1 = (function (group){return radio_button27373.call(null,group,null);
});
var radio_button27373__2 = (function (group,checked_QMARK_){return radio_button27373.call(null,group,checked_QMARK_,"true");
});
var radio_button27373__3 = (function (group,checked_QMARK_,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1017479852),"radio",new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",1125876963),value,new cljs.core.Keyword(null,"checked","checked",1756218137),checked_QMARK_], null)], null);
});
radio_button27373 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button27373__1.call(this,group);
case 2:
return radio_button27373__2.call(this,group,checked_QMARK_);
case 3:
return radio_button27373__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button27373.cljs$core$IFn$_invoke$arity$1 = radio_button27373__1;
radio_button27373.cljs$core$IFn$_invoke$arity$2 = radio_button27373__2;
radio_button27373.cljs$core$IFn$_invoke$arity$3 = radio_button27373__3;
return radio_button27373;
})()
;
sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button27373);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options27374 = (function() {
var select_options27374 = null;
var select_options27374__1 = (function (coll){return select_options27374.call(null,coll,null);
});
var select_options27374__2 = (function (coll,selected){var iter__15699__auto__ = (function iter__27383(s__27384){return (new cljs.core.LazySeq(null,(function (){var s__27384__$1 = s__27384;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27384__$1);if(temp__4126__auto__)
{var s__27384__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__27384__$2))
{var c__15697__auto__ = cljs.core.chunk_first.call(null,s__27384__$2);var size__15698__auto__ = cljs.core.count.call(null,c__15697__auto__);var b__27386 = cljs.core.chunk_buffer.call(null,size__15698__auto__);if((function (){var i__27385 = 0;while(true){
if((i__27385 < size__15698__auto__))
{var x = cljs.core._nth.call(null,c__15697__auto__,i__27385);cljs.core.chunk_append.call(null,b__27386,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27389 = x;var text = cljs.core.nth.call(null,vec__27389,0,null);var val = cljs.core.nth.call(null,vec__27389,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__27389,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options27374.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)));
{
var G__27391 = (i__27385 + 1);
i__27385 = G__27391;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27386),iter__27383.call(null,cljs.core.chunk_rest.call(null,s__27384__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27386),null);
}
} else
{var x = cljs.core.first.call(null,s__27384__$2);return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27390 = x;var text = cljs.core.nth.call(null,vec__27390,0,null);var val = cljs.core.nth.call(null,vec__27390,1,null);var disabled_QMARK_ = cljs.core.nth.call(null,vec__27390,2,null);var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);if(cljs.core.sequential_QMARK_.call(null,val))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",933131038),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1116631654),text], null),select_options27374.call(null,val,selected)], null);
} else
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",1125876963),val,new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",1284845038),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",4298734567),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",2205476365),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__27383.call(null,cljs.core.rest.call(null,s__27384__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__15699__auto__.call(null,coll);
});
select_options27374 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options27374__1.call(this,coll);
case 2:
return select_options27374__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options27374.cljs$core$IFn$_invoke$arity$1 = select_options27374__1;
select_options27374.cljs$core$IFn$_invoke$arity$2 = select_options27374__2;
return select_options27374;
})()
;
sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options27374);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down27392 = (function() {
var drop_down27392 = null;
var drop_down27392__2 = (function (name,options){return drop_down27392.call(null,name,options,null);
});
var drop_down27392__3 = (function (name,options,selected){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",4402849902),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down27392 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down27392__2.call(this,name,options);
case 3:
return drop_down27392__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down27392.cljs$core$IFn$_invoke$arity$2 = drop_down27392__2;
drop_down27392.cljs$core$IFn$_invoke$arity$3 = drop_down27392__3;
return drop_down27392;
})()
;
sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down27392);
/**
* Creates a text area element.
*/
sablono.core.text_area27393 = (function() {
var text_area27393 = null;
var text_area27393__1 = (function (name){return text_area27393.call(null,name,null);
});
var text_area27393__2 = (function (name,value){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",4305627820),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1017277949),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",1013907597),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",1125876963),value], null)], null);
});
text_area27393 = function(name,value){
switch(arguments.length){
case 1:
return text_area27393__1.call(this,name);
case 2:
return text_area27393__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area27393.cljs$core$IFn$_invoke$arity$1 = text_area27393__1;
text_area27393.cljs$core$IFn$_invoke$arity$2 = text_area27393__2;
return text_area27393;
})()
;
sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area27393);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label27394 = (function label27394(name,text){return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1116631654),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",2249940112),sablono.core.make_id.call(null,name)], null),text], null);
});
sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label27394);
/**
* Creates a submit button.
*/
sablono.core.submit_button27395 = (function submit_button27395(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"submit",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button27395);
/**
* Creates a form reset button.
*/
sablono.core.reset_button27396 = (function reset_button27396(text){return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",1114262332),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1017479852),"reset",new cljs.core.Keyword(null,"value","value",1125876963),text], null)], null);
});
sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button27396);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to27397 = (function() { 
var form_to27397__delegate = function (p__27398,body){var vec__27400 = p__27398;var method = cljs.core.nth.call(null,vec__27400,0,null);var action = cljs.core.nth.call(null,vec__27400,1,null);var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));var action_uri = sablono.util.to_uri.call(null,action);return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1014006472),null,new cljs.core.Keyword(null,"post","post",1017351186),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),method_str,new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",1017053238),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",4231316563),"POST",new cljs.core.Keyword(null,"action","action",3885920680),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to27397 = function (p__27398,var_args){
var body = null;if (arguments.length > 1) {
  body = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return form_to27397__delegate.call(this,p__27398,body);};
form_to27397.cljs$lang$maxFixedArity = 1;
form_to27397.cljs$lang$applyTo = (function (arglist__27401){
var p__27398 = cljs.core.first(arglist__27401);
var body = cljs.core.rest(arglist__27401);
return form_to27397__delegate(p__27398,body);
});
form_to27397.cljs$core$IFn$_invoke$arity$variadic = form_to27397__delegate;
return form_to27397;
})()
;
sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to27397);

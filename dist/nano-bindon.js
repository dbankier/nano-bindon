!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.nanoBindon=e()}}(function(){var define,module,exports;return (function e(t,n,r){function o(i,u){if(!n[i]){if(!t[i]){var a=typeof require=="function"&&require;if(!u&&a)return a.length===2?a(i,!0):a(i);if(s&&s.length===2)return s(i,!0);if(s)return s(i);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[i]={exports:{}};t[i][0].call(l.exports,function(e){var n=t[i][1][e];return o(n?n:e)},l,l.exports,e,t,n,r)}return n[i].exports}var i=Array.prototype.slice;Function.prototype.bind||Object.defineProperty(Function.prototype,"bind",{enumerable:!1,configurable:!0,writable:!0,value:function(e){function r(){return t.apply(this instanceof r&&e?this:e,n.concat(i.call(arguments)))}if(typeof this!="function")throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var t=this,n=i.call(arguments,1);return r.prototype=Object.create(t.prototype),r.prototype.contructor=r,r}});var s=typeof require=="function"&&require;for(var u=0;u<r.length;u++)o(r[u]);return o})({1:[function(require,module,exports){
// prevents binding the view changes back to the model 
// if the view has a `oneway` attribute/property
function applyClass(o) {
  var template = _.template(o.view.nclass);
  var value = template(o.$model);
  o.$.addClass(o.view, value);
}
module.exports = function(options) {
  return function(nano) {
    nano.hook('view:bind', function(o, next) {
      //use change listener of view
      if (o.view.bindon) {
        (function($model, expr, prop) {
          o.view.addEventListener(o.view.bindon, function(e) {
            nano.__callHook("view:change", { $: o.$, $model: $model, view: e.source, expr: expr, prop: prop }, function() {
              // set value in model on change in view
              nano.__setValue($model, expr, e.source[prop]);
            });
          });
        }(o.$model, o.expr, o.prop));
      } else {
        next();
      }
    });
  };
};

},{}]},{},[1])(1)
});
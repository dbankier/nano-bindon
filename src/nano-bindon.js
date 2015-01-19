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

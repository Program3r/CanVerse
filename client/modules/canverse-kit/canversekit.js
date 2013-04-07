(function($) {
    var methods = {
        init: function(options) {
           $(this)
           .addClass("ck-empty");
           var tabs = {
               "htmlEdit":{name:"Html", id:"html"},
               "cssEdit":{name:"Css", id:"css"},
               "javascriptEdit":{name:"Javascript", id:"js"}
           };
           var editor = $(Template.editor({title:"Editor", id:"editor", tabs:tabs}));
           $("body").append(editor);
           editor.draggable({handle:".modal-header"});
        }
};
    $.fn.canverseKit = function(method) {
        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        }
        else {
            $.error('Method ' + method + ' does not exist on jQuery.tooltip');
        }
    };
})(jQuery);
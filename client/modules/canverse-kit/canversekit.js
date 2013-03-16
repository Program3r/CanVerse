(function($) {
    var container;
    var methods = {
        init: function(options) {
            var container = $(this);
        },
        spawnLayout: function(options) {
            //Accepts: {selector: "#id/.class or object"}
            
            if (options.toolbox == true) {
                var toolbox = $("<section>");
                toolbox.addClass("canverse-kit_elements");
                toolbox.addClass("elements-drag");
                toolbox.addClass("span2");
                toolbox.addClass("well");
                $(options.selector).append(toolbox);
                var tools = {
                    "Div": [{
                        "color": "#D54513",
                        "class": "canverse-kit_tag",
                        "tag": "div"
                    }]
                };
                $().canverseKit("addTools", {
                    tools: tools,
                    container: toolbox
                });
            }
            var section = $("<section>");
            section.addClass("canverse-kit_add");
            section.addClass("span8");
            $(options.selector).append(section);
            $(section).droppable({
                activeClass: "canverse-kit_effect_sink",
                drop: function(event, ui) {
                    
                }
            });
            $(section).zoomTarget();
        },
        addTools: function(options){
            //Accepts: {
                //tools: {
                    //"Div": [{
                        //"color": "#0000",
                        //"class":"canverse-kit_tag",
                        //"tag":"div"
                    //}]
                //},
                //container: "#id/.class or object"
            //}
            $.each(options.tools, function(key, value) {
                var tool = $("<div>");
                tool.addClass("span1");
                tool.addClass("canverse-kit_tool");
                tool.css({
                    "background-color": value[0].color
                });
                tool.append(key);
                $(options.container).append(tool);
                tool.draggable({
                    revert: "valid"
                });
                tool.droppable({
                    activeClass: "ui-state-hover",
                    hoverClass: "ui-state-active",
                    drop: function(event, ui) {
                    }
                });
            });
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
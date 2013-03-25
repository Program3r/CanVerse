(function($) {
    var container;
    var methods = {
        init: function(options) {
            var container = $(this);
        },
        spawnLayout: function(options) {
            //Accepts: {selector: "#id/.class or object"}
            
            if (options.toolbox === true) {
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
                    }],
                    "Span": [{
                        "color": "#d016dd",
                        "class": "canverse-kit_tag span3",
                        "tag": "span"
                    }]
                };
                $().canverseKit("addTools", {
                    tools: tools,
                    container: toolbox
                });
            }
            var section = $("<section>");
            section.addClass("canverse-kit_template");
            section.addClass("canverse-kit_add");
            $(options.selector).append(section);
            var tagTemplate = $("<div>");
            tagTemplate.addClass("canverse-kit_template");
            tagTemplate.addClass("span1");
            tagTemplate.zoomTarget();
            $(tagTemplate).canverseKit("applySkeletonControls", {});
            $(section).append(tagTemplate);
            
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
                var tool = $("<"+value[0].tag+">");
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
        },
        applySkeletonControls: function( options ){
            var controllerId = "Ctl" + new Date().getTime();
            var controller = $("<div></div>");
            /*
            $(this).popover({html:true, content:controller, title:"Modify" ,placement:"right", animation:"true"});
            $(this).canverseKit("renderOptions", {set:"span-class-size", controller:controller});
            $(this).hover(function(){
                $(this).popover('show');
            },
            function(){
                //$(this).popover('hide')
            });
            */
        },
        
        renderOptions: function( options ){
            //options {type:"tags"}
            var remote = $(this);
            var optionSets = {
                    "span-class-size":{
                        init:function(){
                            var values =[
                                {actionname:"Span1", value:"span1"},
                                {actionname:"Span2", value:"span2"},
                                {actionname:"Span3", value:"span3"},
                                {actionname:"Span4", value:"span4"},
                                {actionname:"Span5", value:"span5"},
                                {actionname:"Span6", value:"span6"},
                                {actionname:"Span7", value:"span7"},
                                {actionname:"Span8", value:"span8"},
                                {actionname:"Span9", value:"span9"},
                                {actionname:"Span10", value:"span10"},
                                {actionname:"Span11", value:"span11"},
                                {actionname:"Span12", value:"span12"}
                            ];
                            var button = $(Template.buttonDropdown({
                            name:"Span",
                            values: values
                            }));
                            $(options.controller).append(button);
                            $(this).parent().delegate('.dropdown-toggle', 'click', function(event) {
                                $(this).parent().toggleClass("open");
                                console.log("happened");
                            });
                            /*
                            $(this).parent().delegate(".dropdown-menu a", "click", function(remote){
                                
                                $.each(values, function(index, item){
                                    $(remote).removeClass(item.value);
                                });
                                $(this).parent.addClass($(this).attr("data-action-value"));
                            });
                            */
                        }
                    }
            };
            if(optionSets[options.set] !== undefined){
                optionSets[options.set].init();
            }
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
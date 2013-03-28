(function($) {
    var container;
    var methods = {
        init: function(options) {
            var container = $(this);
            $("body").delegate(".tool-add","click",function(event) {
                var rad = $(this).attr("id").replace("#ctl", "#rad");
                $(rad).removeClass("canverse-kit_add");
                $(rad).addClass("well");
                $(rad).canverseKit("spawnLayout", {tag:"div", blank:true, class:"span1"});
                
                return false;
            });
        },
        spawnLayout: function(options) {
            var section = $("<"+options.tag+">");
            section.addClass("canverse-kit_add");
            section.addClass(options.class);
            $(section).canverseKit("applySkeletonControls", {blank:true});
            $(this).append(section);
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
            function makeid()
            {
                var text = "";
                var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            
                for( var i=0; i < 5; i++ )
                    text += possible.charAt(Math.floor(Math.random() * possible.length));
            
                return text;
            }
            var genId = makeid();
            
            var controller = $(Template.skeletonControls({id:"#ctl"+genId, remote:"#rad"+genId}));
            $(this).attr("id","rad"+genId);
            if(options.blank){
                $(this).popover({html:true, content:controller, container:"body", placement:"top", animation:"true", trigger:"click"});
            }

            //$(this).canverseKit("renderOptions", {set:"span-class-size", controller:controller});
            /*$("#canverse").delegate("#"+controllerId+" button", "click", function() {
              alert("yay");
            });*/
            
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
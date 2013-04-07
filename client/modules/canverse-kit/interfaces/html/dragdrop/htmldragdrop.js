Template.htmlDragDrop.tags = [
    {
        tag:"DIV",
        id:"dragDiv"
    },
    {
        tag:"SPAN",
        id:"dragSpan"
    },
    {
        tag:"UL",
        id:"dragUl"
    },
    {
        tag:"SECTION",
        id:"dragSection"
    }
];


if (Meteor.isClient) {
    Meteor.startup(function () {
        $("body").delegate(".dragTag", "mouseover", function(event) {
                $(this).draggable({
                  revert: true,
                  accept:".dragTag"
                });
        });


        $("body").delegate(".dropTag", "click", function(event){
            $(".ck-active").removeClass("ck-active");
            $(this).addClass("ck-active");
            return false;
        });
        
        $("#canverse").addClass("dropTag");
        
        $("#canverse").droppable({
          drop: function( event, ui ) {
            var dragclone = $(ui.draggable).clone();
            dragclone.attr("style", "");
            dragclone.removeClass("dragTag");
            dragclone.attr("id", "");
            dragclone.addClass("dropTag");
            $("body").find(".ck-active").append(dragclone.html(""));
            //dropzone.removeClass("span"+(dragscount-1))
            dragclone.droppable({
                  activeClass: "ui-state-hover",
                  hoverClass: "ui-state-active",
                  greedy:true,
                  accept:"dropTag"
            });
          }
        });
    });
}
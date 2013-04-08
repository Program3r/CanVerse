function htmlEncode(value){ 
  return $('<div/>').text(value).html(); 
} 
 
function htmlDecode(value){ 
  return $('<div/>').html(value).text(); 
}

function updateSlides(){
        $(".dataTag:not(.parsed)").each(function(){
            var html = htmlDecode($(this).text());
           $(this).html($(html));
           $(this).addClass("parsed");
           $(this).find(".dropTag").droppable({
                  activeClass: "ui-state-hover",
                  hoverClass: "ui-state-active",
                  greedy:true,
                  accept:".dragTag",
                  drop: function( event, ui ) {
                        var dragclone = $(ui.draggable).clone().find(".clone");
                        dragclone.attr("style", "");
                        dragclone.removeClass("dragTag");
                        dragclone.addClass("dropTag");
                        console.log("dropped");
                        $("body").find(".ck-active").append(dragclone.html());
                        //dropzone.removeClass("span"+(dragscount-1))
              }
            });
        });
        setTimeout("updateSlides()", 100);
}

Meteor.startup(function () {
    if(Meteor.isClient){
        //Meteor.call("createSlide", {title:"title"});
        var fragment = Meteor.render(
          function () {
              
            return Template.slideshow({slide:Slides.find()});
          });
        $("#canverse").append(fragment);
         
    }
});
Meteor.startup(function () {
    $(document).ready(function() {
        
        $('#canverse').canverseKit();
        setTimeout("updateSlides()", 100);
    });
});

//Bootstrap Body Attributes
$(document).ready(function() {
    $("body").attr({
        class:"preview",
        id:"top",
        "data-spy":"scroll",
        "data-target":".subnav",
        "data-offset":80
    });
    $("head").append('<meta name="viewport" content="width=device-width, initial-scale=1.0">');
    
});
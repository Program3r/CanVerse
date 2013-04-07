Meteor.startup(function () {
    $(document).ready(function() {
        
        $('#canverse').canverseKit();
        
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
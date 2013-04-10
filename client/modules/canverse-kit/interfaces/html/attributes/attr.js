if (Meteor.isClient) {
    Meteor.startup(function () {
        $(document).ready(function() {
            $("body").delegate(".editTarget", "click", function(){
                    $("#attrEditor").html(Template[$(this).prop("tagName").toLowerCase()]());
                    
            });
            setTimeout('$("#htmlattr").delegate(".save", "click", function(){ \
                $("#attrEditor input, #attrEditor textarea").each(function(){ \
                var active = $("body .ck-active"); \
                    $(active).attr($(this).attr("attr"), $(this).val()); \
                    if($(this).attr("mod") > ""){ \
                        $(active)[$(this).attr("mod")]($(this).val()); \
                    } \
                }); \
                var id = $("#canverse .ck-active").parents(".dataTag").attr("id"); \
                Meteor.call("updateHtml", {id:id, html:htmlEncode($("#"+id).html())}); \
            })',
            2000);
        });
    });
}
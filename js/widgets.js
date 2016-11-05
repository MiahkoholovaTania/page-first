$(function() {
    $(".tabsWrap .tabs li").on("click", function(){
        $(".tabsWrap .tabs li.activeLi").removeClass("activeLi");
        $(this).addClass("activeLi");

        var panelToShow = $(this).attr('rel');

        $(".tabsWrap .panel.activePanel").slideUp(500, function(){
            $(this).removeClass("activePanel");
            $('#'+panelToShow).slideDown(500, function(){
                $(this).addClass("activePanel");
                $(this).css("backgroundColor","#fff");

            });

        });

    });
});
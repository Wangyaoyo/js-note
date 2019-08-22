require(["gitbook", "jquery"], function(gitbook, $) {
	gitbook.events.bind("page.change", function(){
        $('.brief-text').text("{...}");
        $('.opt-icon').click(function(){   
            $(".toggle-section").toggle();
            if($(".opt-icon").attr("section-type") === "close"){
                var iconurl1 = $(".opt-icon").attr("src");
                $(".opt-icon").attr("src",iconurl1.substring(0,iconurl1.indexOf("icon_add.png"))+"icon_sub.png");
                $(".opt-icon").attr("section-type","open");
                $('.brief-text').text("");
            }else{
                var iconurl2 = $(".opt-icon").attr("src");
                $(".opt-icon").attr("src",iconurl2.substring(0,iconurl2.indexOf("icon_sub.png"))+"icon_add.png");
                $(".opt-icon").attr("section-type","close");
                $('.brief-text').text("{...}");
            }
            
        });
    });
});
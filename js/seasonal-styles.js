$("document").ready(function(){
    $('.seasons a').click(function(e){//find all a tags inside class of seasons
        e.preventDefault();//stop default submission
        let season = $(this).attr("href");//contents of href attribute of this element
        //alert(season);

        season = season.toLowerCase();

        switch(season){
            case "spring":
                $("html").css("background-color","#2B7129");
                $("#slogan").text("Spring into our spring wear!");
                $("#wear").attr("src","images/spring-wear.jpg");
                $("#logo").attr("src","images/spring.gif");
            break;
        }
        switch(season){
            case "summer":
                $("html").css("background-color","#EBA52B");
                $("#slogan").text("Shine into Summer wear!");
                $("#wear").attr("src","images/summer-wear.jpg");
                $("#logo").attr("src","images/summer.gif");
            break;
        }
        switch(season){
            case "fall":
                $("html").css("background-color","#A81124");
                $("#slogan").text("Leap into our Fall wear!");
                $("#wear").attr("src","images/fall-wear.jpg");
                $("#logo").attr("src","images/fall.gif");
            break;
        }
        switch(season){
            case "winter":
                $("html").css("background-color","#005393");
                $("#slogan").text("Keep calm and wait for Winter wear!");
                $("#wear").attr("src","images/winter-wear.jpg");
                $("#logo").attr("src","images/winter.gif");
            break;
        }
    });
});

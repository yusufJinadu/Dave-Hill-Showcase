

$(".img-thumbnail").on("click" , function(){
    $(this).toggleClass("enlarged")
})
$(".message a").click(function(){
    $("form").animate({ height:"toggle", opacity: "toggle"}, "slow")
})
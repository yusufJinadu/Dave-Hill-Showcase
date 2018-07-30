

$(".img-thumbnail").on("click" , function(){
    $(this).toggleClass("enlarged")
})
/*$(".message a").click(function(){
    $("form").animate({ height:"toggle", opacity: "toggle"}, "slow")
})*/
$(".message").click(function(){
    $(".register-form").toggleClass("not-show")
    $(".login-form").toggleClass("not-show")
})
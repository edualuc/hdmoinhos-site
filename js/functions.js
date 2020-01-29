//scroll
var flag = true;
function moveSite(href) {
    flag = false;
    var altura = $(href).position().top -60 ;
    $("html, body").animate({scrollTop:altura}, 800, function(){
        flag = true; //depois de animar troca pra true
    });
}
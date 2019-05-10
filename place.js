if($(window).width() < 760){
  doMobile();
}else{
  doDesktop();
}
$(window).on('resize', function(){
  if($(this).width() < 760){
    doMobile();
  }else{
    doDesktop();
  }
});

function doDesktop(){
  $(".company").css('font-size','2rem');
  $(".footer").css('font-size','3rem');
  $(".footer").css('padding','3rem');
  $(".content").css('margin','0 2rem');
  $(".w-50").css("width",'50%');
  $('.big-card-info').css('padding','3rem 2rem');
  $('.sec-details').css('display','flex');
}
function doMobile(){
  $(".company").css('font-size','');
  $(".footer").css('font-size','2rem');
  $(".footer").css('padding','3rem 0');
  $(".content").css('margin','0');
  $(".w-50").css("width",'100%');
  $('.big-card-info').css('padding','0');
  $('.sec-details').css('display','grid');
}

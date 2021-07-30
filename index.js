$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  let vh = window.innerHeight;
  var optd = (0.5*vh - scrollTop)/(0.5*vh);
  var optd2 = 0.0;
  var optd3 = 0.0;
  if(scrollTop>=0.5*vh && scrollTop<=vh){
    optd2 = (scrollTop - 0.5*vh)/(0.5*vh);
  }
  if(scrollTop<=1.5*vh && scrollTop>=vh){
    optd2 = 1-((scrollTop - vh)/(0.5*vh));
  }
  if(scrollTop>=1.5*vh && scrollTop<=2*vh){
    optd3 = (scrollTop - 1.5*vh)/(0.5*vh);
  }
  if(scrollTop<=2.5*vh && scrollTop>=2*vh){
    optd3 = 1-((scrollTop - 2*vh)/(0.5*vh));
  }



  $('.text-div').css("opacity", optd);
    $('.text-div-2').css("opacity", optd2);
      $('.text-div-3').css("opacity", optd3);
      if(optd3<=0){
        $('.text-div-3').css("display", "none");
      }
      else{
        $('.text-div-3').css("display", "block");
      }
      if(optd2<=0){
        $('.text-div-2').css("display", "none");
      }
      else{
        $('.text-div-2').css("display", "block");
      }
      if(optd<=0){
        $('.text-div').css("display", "none");
      }
      else{
        $('.text-div').css("display", "block");
      }
});

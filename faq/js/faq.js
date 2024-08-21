
$(function() {
  if($("#faq").length){
      $(".sec-faq .buttons a, .sec-faq .buttons span").on("click",function(event){
        event.preventDefault();
        $(this).siblings("a").addClass("on");
        $(this).siblings("span").addClass("on");
        $(this).removeClass("on");
        $(this).parents(".faqs").find("dd").stop(true,true).slideToggle(300);
      });
  }

});
$(function() {
/*--------------------------------
  下層ページ　グロナビ
---------------------------------*/
  $('.navWrap__in__').hover(function(){
      $(this).find('.lowerpage_list').addClass('active');
      },function(){
      $(this).find('.lowerpage_list').removeClass('active');
      console.log('ok')
  });
/*--------------------------------
  pc 下層ページヘッダーメニュー上部固定
---------------------------------*/
  // var pc_nav_pos = $(".nav_lowerpage").offset().top;
  // var pc_nav_height = $(".nav_lowerpage").outerHeight();
  // $(window).scroll(function () {
  // if ($(this).scrollTop() > pc_nav_pos) {
  //     $("body").css("padding-top", pc_nav_height);
  //     $(".nav_lowerpage").addClass("fixed");
  // } else {
  //     $("body").css("padding-top", 0);
  //     $(".nav_lowerpage").removeClass("fixed");
  // }
  // });

/*--------------------------------
  tb header固定
---------------------------------*/
$(window).on('load resize',function(){
  var windowWidth = window.innerWidth;
  var SP_headerHeight = $('#gHeader').innerHeight();
  var PC_headerHeight = $('#gHeader').innerHeight();
  var PC_lowerheaderHeight = $(".nav_lowerpage").innerHeight();
if (windowWidth > 1000) {
      $('#contentsWrap_').css('padding-top',PC_headerHeight + PC_lowerheaderHeight);
  } else if (windowWidth <= 1000) {
      $('#contentsWrap_').css('padding-top',SP_headerHeight);
}
});
   
});


$(function () {
/*--------------------------------
  access swiper スライダーオプション
---------------------------------*/
  var mySwiper01 = new Swiper('.swiper-station', {
    loop: true,
    speed: 1000,
    autoplay: {
    delay: 6000,
    disableOnInteraction: false,
    },  
    slidesPerView: 1,
    spaceBetween: 0,
        navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
  });    
    

//フェードイン
	$(window).scroll(function (){
		$('.slidein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 500){
				$(this).addClass('scrollin');
			}
		});
	});  


/*--------------------------------
  location swiper スライダーオプション
---------------------------------*/
  var mySwiper03 = new Swiper('.swiper-shopping', {
    loop: true,
    loopAdditionalSlides: 1,
    slidesPerView: 2.2,
    spaceBetween: 1,
    pagination: {
    el: ".swiper-pagination", // ページネーションのクラス名を指定
    type: "fraction", // ページネーションのtypeを指定
    formatFractionCurrent: function (number) {
        return '0' + number;
    }
},
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    breakpoints: {
      1000: {
        loop: true,
        centeredSlides : true,
        slidesPerView: 2.2,
        spaceBetween: 10,
      },
          640: {
        loop: true,
        centeredSlides : true,
        slidesPerView: 1.2,
        spaceBetween: 10,
      },     
    }
  });    
    
    
/*--------------------------------
  pickup swiper スライダーオプション
---------------------------------*/
  var mySwiper02 = new Swiper('.swiper-pickup', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    breakpoints: {
      1000: {
        loop: false,
        centeredSlides : true,
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
    }
  });
});


/*--------------------------------
  header footer include
---------------------------------*/
function includeHTML(includeFilePath, rootDir) {
	$.ajax({
		url: rootDir + includeFilePath,
		cache: false,
		async: false,
		success: function (html) {
			html = html.replace(/\{\$root\}/g, rootDir);
			document.write(html);
		}
	});
}

$(function () {
/*--------------------------------
  pcハンバーガーメニュー 
---------------------------------*/
    $('.pc-hamburger').click(function () {
    $(this).find('.navToggle').toggleClass('active');
    // $(this).addClass('active');
    $(this).prevAll('.siteTitle2').addClass('active');
    if ($(this).find('.navToggle').hasClass('active')) {
      $('.global-nav').addClass('active');
    } else {
      $('.global-nav').removeClass('active');
      $(this).removeClass('active');
      $(this).prevAll('.siteTitle2').removeClass('active');
    }
  });

/*--------------------------------
  tbハンバーガーメニュー 
---------------------------------*/
  $('.tb-hamburger').click(function () {
    $(this).find('.tb-navToggle').toggleClass('active');
    if ($(this).find('.tb-navToggle').hasClass('active')) {
      $('.tb-global-nav').addClass('active');
    } else {
      $('.tb-global-nav').removeClass('active');
    }
  });

/*--------------------------------
  tb ヘッダーメニュー上部固定
---------------------------------*/
  var tb_nav_pos = $(".tb-menu-nav_wrap").offset().top;
  var tb_nav_height = $(".tb-menu-nav_wrap").outerHeight();
  $(window).scroll(function () {
  if ($(this).scrollTop() > tb_nav_pos) {
      // $("body").css("padding-top", tb_nav_height);
      $(".tb-menu-nav_wrap").addClass("fixed");
  } else {
      // $("body").css("padding-top", 0);
      $(".tb-menu-nav_wrap").removeClass("fixed");
  }
});

/*--------------------------------
  ハンバーガーメニュー開いたら
  bodyをスクロールさせない
---------------------------------*/
  var state = false;
  var pos;
  $('.pc-hamburger').click(function(){
    if (state == false) {
    pos = $(window).scrollTop();
    $('body').addClass('fixed').css({'top': -pos});
    state = true;
    } else {
    $('body').removeClass('fixed').css({'top': 0});
    window.scrollTo(0, pos);
    state = false;
    }
  });

/*--------------------------------
  smooth scroll
---------------------------------*/
$(document).on('click','a[href^="#"]:not(a.property_menu)',function(){
  var speed = 700;
  var href = $(this).attr("href");
  var target = $(href === "#" || href === "" ? 'html' : href);
  var position = target.offset().top;
  $("html, body").animate({
    scrollTop: position
  },
  speed, "swing");
  return false;
});

/*--------------------------------
  pagetop
---------------------------------*/
var pagetop = $('.pageTop');
pagetop.hide();
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 100) {
    pagetop.fadeIn();
  } else {
    pagetop.fadeOut();
  }
});
});

/*--------------------------------
  インスタ　ロゴ
---------------------------------*/
$(function(){
  // フッター用
  $('.foot_insta').prepend('<div class="insta_logo"><a href="https://www.instagram.com/clio_mansion/?waad=75SuSVxT&ugad=75SuSVxT" target="_blank"><img src="https://www.meiwajisyo.co.jp/clio/cp/instagram/img/insta_logo_pc.png" class="pc" alt="Instagram"><img src="https://www.meiwajisyo.co.jp/clio/cp/instagram/img/insta_logo_sp.png" class="tbsp" alt="Instagram"></a></div>');
  // G ナビ用
  // $('.sp-navi .btns').append('<div class="insta_btn"><a href="https://www.instagram.com/clio_mansion/?waad=75SuSVxT&ugad=75SuSVxT" target="_blank"><img src="https://www.meiwajisyo.co.jp/clio/cp/instagram/img/insta_logo_sp.png" class="" alt="Instagram"></a></div>');
  });

$(function () {
    
//動画暗幕
	$(window).scroll(function (){
		$('.fadein_bg').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 500){
				$(this).addClass('scrollin');
			}
		});
	});  


//フェードイン
	$(window).scroll(function (){
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 300){
				$(this).addClass('scrollin');
			}
		});
	});  


//スライドイン
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


//フェードアウト
	$(window).scroll(function (){
		$('.fade-out').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 600){
				$(this).addClass('displaynone');
			}
		});
	});  

//ディレイ表示
	$(window).scroll(function (){
		$('.delay-in').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 600){
				$(this).addClass('displayon');
			}
		});
	});
    
    
});  



$(function() {
/*--------------------------------
  top cvボタン フッターまでスクロールしたら位置変更
---------------------------------*/
var footer = $('.footerWrap').innerHeight(); // footerの高さを取得
window.onscroll = function () {
  var point = window.pageYOffset; // 現在のスクロール地点 
  var docHeight = $(document).height(); // ドキュメントの高さ
  var dispHeight = $(window).height(); // 表示領域の高さ

  if(point > docHeight-dispHeight-footer){ // スクロール地点>ドキュメントの高さ-表示領域-footerの高さ
    $('.top-cv-btn').addClass('is-hidden'); //footerより下にスクロールしたらis-hiddenを追加
  }else{
    $('.top-cv-btn').removeClass('is-hidden'); //footerより上にスクロールしたらis-hiddenを削除
  }
};

var topCvbtn = $('.top-cv-btn_fadein');
topCvbtn.hide();
if (window.matchMedia( "(min-width: 1000px)" ).matches) {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 100) {
      topCvbtn.fadeIn();
    } else {
      topCvbtn.fadeOut();
    }
  });
}
});


  
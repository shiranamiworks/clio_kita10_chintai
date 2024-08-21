/**
 * @name main.js
 * @fileOverview
 * @version 1.0
 * @description
 * <p>(c) FOURDIGIT Inc. Licensed <a href="http://ja.wikipedia.org/wiki/GNU_General_Public_License">GNU General Public License</a>.</p>
 */
//他ライブラリと共存する場合、下の一行削除($無効化)
//jQuery.noConflict();
(function($){
	var config = function () {
	//easyOverのターゲット設定
		$("img.ahover, .ahoverArea img").easyOver();
	//Flash
		//$("object, embed").enableFlash();
	//ポップアップリンクに置換
		$(".commonPop").easyPop();
	//他ドメインリンク時にpageTracker有効化
		//$("a,area").blankLogToGoogle();
	//アンカーリンクをスムージング
		$("a[href^=#]").smoothScroll();
	//対象の要素をスクロールに追従するようにする
		//$("#fixBox").fixPosition("stopperID","normal");
	}
	//onload
	$(function() {
		config();


		// titleタグの文言をh1に設定する場合（0:titleタグを反映しない 　1:titleタグを反映させる）
		var titleToShdrText = 1;


			
		// ヘッダフッタロード
		var _4d_baseURL = get_homedir();
		var _4d_comleteStat = 0;
		
		function _4d_headerComplete(){//ヘッダが読み終わった後に実行したいJSを記述
			var gNavOpenStat = false;
			var gNavOpenLock = false;
			$(window).scroll(function(){
				var p = $("#pNav").offset().top;
				var s = $(window).scrollTop();
				var h = $("#pNav").height();
				if(s >= h){
					$("#gHeader").addClass("fd_fixed");
					$("#gNav").addClass("fd_fixed");
				} else {
					$("#gHeader").removeClass("fd_fixed");
					$("#gNav").removeClass("fd_fixed");
				}
			});
			$("#FD_SP_MENU a").on("click",function(){
				if(!gNavOpenLock){
					gNavOpenLock = true;
					if(!gNavOpenStat){
						$("#pNav #FD_SP_MENU").removeClass("off");
						$("#pNav #FD_SP_MENU").addClass("on");
						$("#gNav").slideDown(300,function(){
							gNavOpenStat = true;
							gNavOpenLock = false;
						});
					} else {
						$("#pNav #FD_SP_MENU").removeClass("on");
						$("#pNav #FD_SP_MENU").addClass("off");
						$("#gNav").slideUp(300,function(){
							gNavOpenStat = false;
							gNavOpenLock = false;
						});
					}
				}
				return false;
			});
			$("#gNavClose a").on("click",function(){
				gNavOpenLock = true;
				$("#pNav #FD_SP_MENU").removeClass("on");
				$("#pNav #FD_SP_MENU").addClass("off");
				$("#gNav").slideUp(300,function(){
					gNavOpenStat = false;
					gNavOpenLock = false;
				});
				return false;
			});

			if (titleToShdrText > 0){
				var _ttl = $("title").text();
				console.log(_ttl);
				$(".shldrTxt").text(_ttl);
			}

		}
		
		function _4d_footerComplete(){//フッタが読み終わった後に実行したいJSを記述
			
		}
		
		function _4d_setError(){//ヘッダフッタ読み込みエラー
			
		}
		
		function _4d_setHdrHover(){
			setTimeout(function(){$("#pNav .ahoverArea a img, #gHeader img.ahover").easyOver()},200);
		}
		function _4d_setFtrHover(){
			setTimeout(function(){$("#gFooter .ahoverArea a img, #gFooter img.ahover").easyOver()},200);
		}
		function _4d_setComplete(){
			_4d_comleteStat += 1;
			if(_4d_comleteStat >= 4){
				_4d_headerComplete();
				_4d_footerComplete();
				$("#gHeader").fadeTo(200,1);
				$("#gFooter").fadeTo(200,1);
			}
		}
		
		function _4d_setFrame(html){
			var hdr = $(html).find("#gHeader").html();
			var ftr = $(html).find("#gFooter").html();
			$("#gHeader").html(hdr).fadeTo(0,0);
			$("#gFooter").html(ftr).fadeTo(0,0);
			var hdrImgLength = $("#gHeader img").length;
			var ftrImgLength = $("#gFooter img").length;
			var hdrHrefLength = $("#gHeader a").length;
			var ftrHrefLength = $("#gFooter a").length;
			$("#gHeader a").each(function(n){
				var obj = $(this);
				var href = obj.attr("href");
				if(!href.match(/^http/) && !href.match(/^\//) && !href.match(/^tel/) && !href.match(/^mailto/) && !href.match(/^#/)){
					obj.attr("href",_4d_baseURL+href);
				}
				if(n+1 >= hdrHrefLength){
					_4d_setComplete();
				}
			});
			$("#gHeader img").each(function(n){
				var obj = $(this);
				var src = obj.attr("src");
				if(!src.match(/^http/) && !src.match(/^\//)){
					obj.attr("src",_4d_baseURL+src);
				}
				if(n+1 >= hdrImgLength){
					_4d_setHdrHover();// タブ以下のヘッダメニューでoverイメージがある場合。無い場合はコメントアウト
					_4d_setComplete();
				}
			});
			$("#gFooter a").each(function(n){
				var obj = $(this);
				var href = obj.attr("href");
				if(!href.match(/^http/) && !href.match(/^\//) && !href.match(/^tel/) && !href.match(/^mail/) && !href.match(/^#/)){
					obj.attr("href",_4d_baseURL+href);
				}
				if(n+1 >= ftrHrefLength){
					_4d_setComplete();
				}
			});
			$("#gFooter img").each(function(n){
				var obj = $(this);
				var src = obj.attr("src");
				if(!src.match(/^http/) && !src.match(/^\//)){
					obj.attr("src",_4d_baseURL+src);
				}
				if(n+1 >= ftrImgLength){
					_4d_setFtrHover();// タブ以下のフッタでoverイメージがある場合。無い場合はコメントアウト
					_4d_setComplete();
				}
			});
			
		}
		
		
		// $.ajax({
		// 	url: _4d_baseURL + "frame.html",
		// 	dataType : "html",
		// 	success: function(html){
		// 		_4d_setFrame(html);
		// 	},
		// 	error: function(){
		// 		_4d_setError();
		// 	}
		// });
		
		switch (jQuery("body").attr("id")) {
			case "pageID":
				//eachPageFunction
			break;
			case "pageID":
				//eachPageFunction
			break;
		}
		
		
		$("img.toText").each(function() {
			var text = $(this).attr("alt").replace(/\n/g,"</br>");
            $(this).after('<span class="altText">'+text+'</span>');
        });
		
		
	});
})(jQuery);

function get_homedir() {

	var sThis_filename    = 'main.js';
 	var sPath_to_the_home = '../../';

	var i, s, le;
	var sUrl = null;


	le = document.getElementById('mainJS');
	s = le.getAttribute('src');
	s = s.substr(0,s.length-sThis_filename.length);
	sUrl = s + sPath_to_the_home;
	sUrl = (sUrl.match(/\/$/)) ? sUrl : sUrl+'/';



	if (sUrl.match(/^http/i)||sUrl.match(/^https/i)) {

	} else if (sUrl.match(/^\//)   ) {
		if (! location.href.match(/^(https?:\/\/[a-z0-9.-]+)/i)) {return null;}
    	sUrl = RegExp.$1 + sUrl;
	} else {
		sUrl = location.href.replace(/\/[^\/]*$/, '/') + sUrl;
	}


	while (sUrl.match(/\/\.\//)){
		sUrl = sUrl.replace(/\/\.\//g, '/');
	}

	sUrl.match(/^(https?:\/\/[A-Za-z0-9.-]+)(\/.*)$/);
	s = RegExp.$1;
	sUrl = RegExp.$2;
	while (sUrl.match(/\/\.\.\//)) {
		while (sUrl.match(/^\/\.\.\//)) {
			sUrl = sUrl.replace(/^\/\.\.\//, '/');
    	}
		sUrl = sUrl.replace(/^\/\.\.$/, '/');
		while (sUrl.match(/\/[^\/]+\/\.\.\//)) {
			sUrl = sUrl.replace(/\/[^\/]+\/\.\.\//, '/');
		}
	}
	sUrl = s + sUrl;
	return sUrl;
}
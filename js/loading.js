
window.onload = function() {
  const spinner = document.getElementById('splash');
  spinner.classList.add('splash');

$(function () {
//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
	easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
	duration: 1000,//時間指定(1000＝1秒)
	strokeWidth: 0.2,//進捗ゲージの太さ
	color: '#fff',//進捗ゲージのカラー
	trailWidth: 0.2,//ゲージベースの線の太さ
	trailColor: '#333',//ゲージベースの線のカラー
	text: {//テキストの形状を直接指定				
		style: {//天地中央に配置
			position: 'absolute',
			left: '50%',
			top: '50%',
			padding: '0',
			margin: '30px 0 0 0',//バーより上に配置
			transform:'translate(-50%,-50%)',
			'font-size':'1rem',
			color: '#ccc',
		},
		autoStyleContainer: false //自動付与のスタイルを切る
	},
	step: function(state, bar) {
		bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
	}
});
    
//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
$("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
}); 
      
});
}  


$(function(){
var ua = navigator.userAgent;
if(ua.indexOf("iPhone") > 0 || ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0){
    
var target = document.getElementById("video");
var video = document.createElement("video");
video.src = "img/main_movie_sp.mp4";
video.style.width = "100%";
video.autoplay = true;
video.setAttribute('playsinline', '');
video.muted = true;
video.controlslist = "nodownload";
video.preload = "metadata";
video.poster = "img/main_jpg_sp.jpg";

var img = document.createElement("img");
img.src = "img/main_jpg_sp.jpg";
img.style.display = "none";

video.addEventListener("ended", function() {
  video.style.display = "none";
  img.style.display = "block";
});

target.appendChild(video);
target.appendChild(img);
      
      
}else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {

var target = document.getElementById("video");
var video = document.createElement("video");
video.src = "img/main_movie.mp4";
video.style.width = "100%";
video.autoplay = true;
video.setAttribute('playsinline', '');
video.muted = true;
video.controlslist = "nodownload";
video.preload = "metadata";
video.poster = "img/main_jpg.jpg";

var img = document.createElement("img");
img.src = "img/main_jpg.jpg";
img.style.width = "100%";
img.style.display = "none";

video.addEventListener("ended", function() {
  video.style.display = "none";
  img.style.display = "block";
});

target.appendChild(video);
target.appendChild(img);
      
  }else{
var target = document.getElementById("video");
var video = document.createElement("video");
video.src = "img/main_movie.mp4";
video.style.width = "100%";
video.autoplay = true;
video.controlslist = "nodownload";
video.preload = "metadata";
video.playsinline = true;
video.muted = true;
video.poster = "img/main_jpg.jpg";

var img = document.createElement("img");
img.src = "img/main_jpg.jpg";
img.style.width = "100%";
img.style.display = "none";

video.addEventListener("ended", function() {
  video.style.display = "none";
  img.style.display = "block";
});

target.appendChild(video);
target.appendChild(img);
      
      
  }
});

  
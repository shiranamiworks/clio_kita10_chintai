$(function(){
var ua = navigator.userAgent;
if(ua.indexOf("iPhone") > 0 || ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0){
    
var target = document.getElementById("video");
var video = document.createElement("video");
video.src = "../img/main_movie_sp.mp4";
video.style.width = "100%";
video.autoplay = true;
video.setAttribute('playsinline', '');
video.muted = true;
video.controlslist = "nodownload";
video.preload = "metadata";
video.poster = "../img/main_jpg_sp.jpg";

var img = document.createElement("img");
img.src = "../img/main_jpg_sp.jpg";
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
video.src = "../img/main_movie.mp4";
video.style.width = "100%";
video.autoplay = true;
video.setAttribute('playsinline', '');
video.muted = true;
video.controlslist = "nodownload";
video.preload = "metadata";
video.poster = "img/main_jpg.jpg";

var img = document.createElement("img");
img.src = "../img/main_jpg.jpg";
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
video.src = "../img/main_movie.mp4";
video.style.width = "100%";
video.autoplay = true;
video.controlslist = "nodownload";
video.preload = "metadata";
video.playsinline = true;
video.muted = true;
video.poster = "../img/main_jpg.jpg";

var img = document.createElement("img");
img.src = "../img/main_jpg.jpg";
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

  
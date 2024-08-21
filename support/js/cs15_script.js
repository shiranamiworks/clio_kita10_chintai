// JavaScript Document

/* iframe 高さ取得  */
$(".iframe").on("load", function(){
    try {
       /* $(this).height(0);*/
        $(this).height(this.contentWindow.document.documentElement.scrollHeight);
    } catch (e) {
    }
});
$("iframe").trigger("load");
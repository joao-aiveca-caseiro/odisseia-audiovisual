// function deferVideo() {

//     //defer html5 video loading
//   $("video").each(function() {
//     var sourceFile = $(this).attr("data-src");
//     $(this).attr("src", sourceFile);
//     var video = this.parentElement;
//     video.load();
//   });

// }
// window.onload = deferVideo;

if ($(window).width() <= 767) {
  $("#logo").attr("src", "media/logo_small.png");
} else {
   $("#logo").attr("src", "media/logo.png");
}

if ($(window).width() <= 767) {
  $("video").attr("src", "media/VideodeFundo1_small.mp4");
} else {
   $("video").attr("src", "media/VideodeFundo1.mp4");
}

var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));
if (isSafari == true) {
$("#aviso").css("display", "inline");
}
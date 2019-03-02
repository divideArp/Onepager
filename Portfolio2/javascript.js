$(document).ready(function () {
    // Handler for .ready() called.
    window.setTimeout(function () {
        location.href = "main-page.html";
    }, 4700);
});

var vid = document.getElementById("videoplayer");
vid.autoplay = true;
vid.load(); 
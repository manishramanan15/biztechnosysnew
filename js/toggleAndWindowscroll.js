$(document).on('click', '#nav-toggle', function () {
    $(this).toggleClass("active");
    $('.overlay-nav').toggleClass("open");
});

window.onscroll = function () { scrollBars() };

function scrollBars() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("top_scrollbar").style.width = scrolled + "%";
}

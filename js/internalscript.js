
function goToByScroll(id) {
    console.log(id);
    $('html,body').animate({ scrollTop: $("#" + id).offset().top - 130 }, 'slow');
}
var url = window.location.href;
var id = url.substring(url.lastIndexOf('#') + 1);

goToByScroll(id);

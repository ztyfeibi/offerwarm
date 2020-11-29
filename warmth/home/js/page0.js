// 排行榜、说明显示隐藏
$(function() {
    var btnHide = document.getElementById("btn-hide");
    var btnShow = document.getElementById("btn-right");
    btnHide.addEventListener("click", hide);
    btnShow.addEventListener("click", show);

    function hide() {
        $("#show").fadeOut();
    }

    function show() {
        $("#show").fadeIn();
    }
})
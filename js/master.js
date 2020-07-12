/* ロード画面 */
window.onload = function() {
  const spinner = document.getElementById('loading');
  spinner.classList.add('loaded');
}
/* /ロード画面 */

/* JQuery */
$(function(){
  $("body").hide().fadeIn(1000, function() {
    // console.log("JQueryでフェードインが実行されました。")
  });
});

$(function(){
  $('.slider').bxSlider({
    mode: 'fade',
    auto: true,
    speed: 2000,
    pause: 5000,
    pager: false,
    controls: false
  });
});
/* /JQuery */

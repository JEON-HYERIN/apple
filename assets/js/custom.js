$(function(){
  const video = $('.sc-video video').get(0);

  $('.sc-video .btn-control').click(function(e){
    e.preventDefault();
    $(this).toggleClass('pause');
    if ($(this).hasClass('pause')){
     video.play();
    } else{
      video.pause();
    }
  });
});
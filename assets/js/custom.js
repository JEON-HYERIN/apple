$(function(){
  // sc-video play
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

  // sc-service color-box 
  $('.sc-service .btn-color').click(function(e){
    e.preventDefault();
    $('.sc-service .btn-color').removeClass('active');
    $(this).addClass('active');
  });
});
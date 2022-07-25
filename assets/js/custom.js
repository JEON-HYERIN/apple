$(function(){
  // a태그 기본동작 방지
  $(document).on('click', 'a[href="#"]', function(e) {
    e.preventDefault();
  });

  // video play
  const video = $('.sc-video video').get(0);
  const designVideo = $('.sc-design .crown-video').get(0);

  $('.sc-video .video-control').click(function(e){
    e.preventDefault();
    $(this).toggleClass('pause');
    if ($(this).hasClass('pause')){
      video.play();
    } else{
      video.pause();
    }
  });
  $('.sc-design .group-crown .video-control').click(function(e){
    e.preventDefault();
    $(this).toggleClass('pause');
    if ($(this).hasClass('pause')){
      designVideo.play();
    } else{
      designVideo.pause();
    }
  });

  // color tab 
  $('.color-list .btn-color').click(function(e){
    e.preventDefault();
    $('.color-list .btn-color').removeClass('active');
    $(this).addClass('active');
  });

  // swiper
  new Swiper('.sc-design .gallery-swiper', {
    // autoplay: true,
    loop: true,

    pagination: {
      el: '.sc-design .swiper-pagination',
      clickable: true,
    },
  });
});
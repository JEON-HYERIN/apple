$(function () {
  // a태그 기본동작 방지
  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });

  // video play
  const video = $('.sc-video video').get(0);
  const crownVideo = $('.sc-design .crown-video').get(0);

  $('.sc-video .video-control').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('pause');
    if ($(this).hasClass('pause')) {
      video.play();
    } else {
      video.pause();
    }
  });
  $('.sc-design .group-crown .video-control').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('pause');
    if ($(this).hasClass('pause')) {
      crownVideo.play();
    } else {
      crownVideo.pause();
    }
  });

  // color tab 
  $('.color-list .btn-color').click(function (e) {
    e.preventDefault();
    $('.color-list .btn-color').removeClass('active');
    $(this).addClass('active');
  });

  // swiper
  new Swiper('.sc-design .gallery-swiper', {
    autoplay: {
      delay: 5000,
    },
    loop: true,

    pagination: {
      el: '.sc-design .swiper-pagination',
      clickable: true,
    },
  });

  // gsap
  gsap.fromTo('.sc-intro .thumb-box img', {
    opacity: 0,
    scaleX: 1.5,
    scaleY: 1.5
  }, {
    scrollTrigger: {
      trigger: '.sc-intro',
      start: '0% 0%',
      end: '100% 50%',
    },
    opacity: 0.999,
    scaleX: 1,
    scaleY: 1,
    duration: 1.2
  });
  gsap.fromTo('.sc-intro .title-box', {
    opacity: 0,
  }, {
    scrollTrigger: {
      trigger: '.sc-intro',
      start: '0% 0%',
      end: '100% 50%',
    },
    opacity: 0.999,
    delay: 1,
    duration: 1.2
  });

  // gsap.fromTo('.sc-design .group-quality .column-left .thumb-box img', {
  // }, {
  //     scrollTrigger: {
  //     trigger: '.sc-design .group-quality .quality-area',
  //     start: '0% 0%', 
  //     // end: '100% 50%',
  //     scrub: true,
  //     pin: true,
  //   },
  //   scaleX: 1,
  //   scaleY: 1,
  //   y: -84,
  //   duration: .6
  // });

  // gsap.fromTo('.sc-audio .group-quality .column-left .thumb-box img', {
  // }, {
  //     scrollTrigger: {
  //     trigger: '.sc-audio .group-quality .thumb-box img',
  //     start: '0% 0%', 
  //     // end: '100% 50%',
  //     scrub: true,
  //     pin: true,
  //   },
  //   scaleX: 1,
  //   scaleY: 1,
  //   y: -84,
  //   duration: .6
  // });

  gsap.to('.sc-audio .group-audio', {
    scrollTrigger: {
      trigger: '.sc-audio .group-audio',
      start: 'center center',
      scrub: 5,
      pin: true,
    },
    duration: 4,
  });

  gsap.to('.sc-experience .group-experience', {
    scrollTrigger: {
      trigger: '.sc-experience .group-experience',
      start: '0% 0%',
      scrub: true,
      pin: true,
    },
    duration: 4,
  });


  gsap.utils.toArray('.sc-experience .group-experience .info-box').forEach(item => {
    gsap.from(item, {
      opacity: 0,
    }, {
      scrollTrigger: {
        trigger: '.sc-experience .group-experience',
        start: '0% 0%',
        end: '100% 50%',
        toggleClass: {
          targets: item,
          className: 'show'
        },
      },
      opacity: 1,
      scaleX: 1,
      scaleY: 1,
      y: -70,
    });
  });
});
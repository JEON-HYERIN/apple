$(function () {
  // a태그 기본동작 방지
  $(document).on('click', 'a[href="#"]', function (e) {
    e.preventDefault();
  });

  $(window).scroll(function(){
    const currentScroll = $(this).scrollTop();

    const contentNav = $('.content-nav').offset().top;
    const scDesign = $('.sc-design').offset().top;

    if(currentScroll >= contentNav) {
      $('.content-nav').addClass('fixed');
    } else {
      $('.content-nav').removeClass('fixed');
    }

    if(currentScroll >= scDesign - $(window).height()) {
      $('.sc-video .video-area').addClass('sticky');
    } else {
      $('.sc-video .video-area').removeClass('sticky');
    }
  })

    // 전체영역 페이드 주면서 나오게 함
    const DimFade = gsap.fromTo('.sc-video .video-dim', {
      opacity: 0.999
    }, {
      opacity: 0.001
    });
  
    const infoListFade = gsap.fromTo('.sc-video .info-list', {
      opacity: 0.001
    }, {
      opacity: 0.999
    });
  
    // 트리거 분할
    ScrollTrigger.create({
      trigger: '.sc-video .video-dim',
      start: 'top 125%',
      end: '100% 50%',
      // markers: true,
      scrub: 1,
      animation: DimFade
    })
  
  ScrollTrigger.create({
    trigger: '.sc-video .info-list',
    start: 'top center',
    end: '10% 20%',
    // markers: true,
    scrub: 1,
    animation: infoListFade
  })
  

  $('.sc-video .info-item').each(function(index, el){
    ScrollTrigger.create({
      trigger: el,
      start: 'top 65%',
      end: 'bottom 50%',
      // markers: true,
      // scrub: 1,
      toggleClass: {targets: el, className: 'show'}
    })
  });

  // 헤드셋 움직이게
  // .sc-design .thumb-area-wrap
  // .sc-design .thumb-box.frame
  // .sc-design .thumb-box.cushion

  gsap.to('.sc-design .thumb-area-wrap', {
    scrollTrigger: {
      trigger: '.sc-design .design-inner1',
      start: 'top 100px',
      end: 'bottom -10%',
      // markers: true,
      scrub: 1,
    },
    scale: 1.1
  })

  const headsetMotion = gsap.timeline({
    scrollTrigger: {
      trigger: '.sc-design .design-inner1',
      start: 'top -30%',
      end: 'bottom -10%',
      // markers: true,
      scrub: 1,
    },
  })
  headsetMotion.addLabel('motion1')
  .to('.sc-design .thumb-box.frame', {yPercent: -3}, 'motion1+=0.4')
  .to('.sc-design .thumb-box.cushion', {yPercent: 3}, 'motion1+=0.4')

  $('.sc-design .info-box[data-target]').each(function(index, el){
    ScrollTrigger.create({
      trigger: el,
      start: 'top 60%',
      end: 'bottom -300%',
      // markers: true,
      // scrub: 1,
      toggleClass: {targets: el, className: 'show'}
    })
  });
  
  // .fromTo('[data-target="text1"]', {opacity: 0},{opacity: 1},'motion1+=0.1')
  // .fromTo('[data-target="text2"]', {opacity: 0},{opacity: 1},'motion1+=0.2')
  // .fromTo('[data-target="text3"]', {opacity: 0},{opacity: 1},'motion1+=0.3')

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
  $('.sc-service .btn-color-wrap .btn-color').click(function (e) {
    e.preventDefault();
    $('.sc-service .btn-color-wrap .btn-color').removeClass('active');
    $(this).addClass('active');
  });

 // swiper
  const colorSlide1 = new Swiper('.sc-design .gallery-swiper1', {
  autoplay: true,
  speed: 1500,
  loop: true,
  pagination: {
    el: '.sc-design .btn-color-wrap',
    clickable: true,
    renderBullet: function (index, className) {
      return `<a class="btn-color ${className}"</a>`;
    }
  },
});

  const colorSlide2= new Swiper('.sc-design .gallery-swiper2', {
    effect:'fade',
    autoplay: true,
    speed: 1500,
    loop: true,
    pagination: {
      el: '.sc-design .btn-color-wrap',
      clickable: true,
      renderBullet: function (index, className) {
        return `<a class="btn-color ${className}"</a>`;
      }
    },
  });

  colorSlide1.on('slideChange', function () {
    idx = colorSlide1.realIndex;

    colorSlide2.slideToLoop(idx);
  });

  const colorBullet = ['실버', '스페이스 그레이', '스카이 블루', '핑크' , '그린'];
  const colorSlide3= new Swiper('.sc-service .gallery-swiper', {
    effect:'fade',
    speed: 600,
    loop: true,
    pagination: {
      el: '.sc-service .btn-color-wrap',
      clickable: true,
      renderBullet: function (index, className) {
        return `<a class="btn-color ${className}"><span class="title">${colorBullet[index]}</span></a>`;
      }
    },
  });

  $('.sc-design .slide-control').click(function(e){
    e.preventDefault();
    if ($(this).hasClass('pause')) {
      colorSlide1.autoplay.stop();
      colorSlide2.autoplay.stop();
      $(this).removeClass('pause');
    } else {
      colorSlide1.autoplay.start();
      colorSlide2.autoplay.start();
      $(this).addClass('pause');
    }
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

  gsap.fromTo('.sc-design .thumb-comfort img', {
  }, {
      scrollTrigger: {
      trigger: '.sc-design .thumb-comfort img',
      start: '0% 100%', 
      end: '100% 50%',
      scrub: 1,
    },
    scaleX: 1,
    scaleY: 1,
    yPercent: -10,
    duration: .6
  });
  
  gsap.fromTo('.sc-audio .thumb-quality img', {
  }, {
      scrollTrigger: {
      trigger: '.sc-audio .thumb-quality img',
      start: '0% 100%', 
      end: '100% 50%',
      scrub: 1,
    },
    scaleX: 1,
    scaleY: 1,
    yPercent: -10,
    duration: 1.5
  });

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

  // gsap.to('.sc-audio .group-audio', {
  //   scrollTrigger: {
  //     trigger: '.sc-audio .group-audio',
  //     start: 'center center',
  //     scrub: 5,
  //     pin: true,
  //   },
  //   duration: 4,
  // });

  // gsap.to('.sc-experience .group-experience', {
  //   scrollTrigger: {
  //     trigger: '.sc-experience .group-experience',
  //     start: '0% 0%',
  //     scrub: true,
  //     pin: true,
  //   },
  //   duration: 4,
  // });


  // gsap.utils.toArray('.sc-experience .group-experience .info-box').forEach(item => {
  //   gsap.from(item, {
  //     opacity: 0,
  //   }, {
  //     scrollTrigger: {
  //       trigger: '.sc-experience .group-experience',
  //       start: '0% 0%',
  //       end: '100% 50%',
  //       toggleClass: {
  //         targets: item,
  //         className: 'show'
  //       },
  //     },
  //     opacity: 1,
  //     scaleX: 1,
  //     scaleY: 1,
  //     y: -70,
  //   });
  // });

  gsap.to('.sc-audio .group-audio', {
    scrollTrigger: {
      trigger: '.sc-audio .group-audio',
      start: 'center 65%',
      end: '+=100%',
      scrub: 7,
      pin: true,
      // markers:true,
    },
    duration: 4,
  });

  gsap.to('.sc-audio .group-audio .thumb-box',{
    scrollTrigger:{
      trigger:'.sc-audio .group-audio',
      start:'top top',
      end: '+=100%',
      // markers:true,
      scrub:1,
    },
    yPercent:-20
  })


  const op = gsap.timeline({
    scrollTrigger:{
      trigger:'.sc-audio .group-audio',
      start:"top top",
      end: '+=100%',
      // markers:true,
      scrub:1,
    },
  })

  op.addLabel('m1')
  .fromTo('.sc-audio .cushion-transparent',{opacity:0},{opacity:1},'m1')
  .fromTo('.sc-audio .chip',{opacity:0},{opacity:1},'m1+=1')
  .fromTo('.sc-audio .driver',{opacity:0},{opacity:1},'m1+=2')
  // op.addLabel('m2')
  // .fromTo('.sc-audio .group-audio .info-box',{opacity:0},{opacity:1},'m2')
  // .fromTo('.sc-audio .group-audio .info-box',{opacity:0},{opacity:1},'m2+=1')
  // .fromTo('.sc-audio .group-audio .info-box',{opacity:0},{opacity:1},'m2+=2')

  $('.sc-audio .info-box').each(function(index,el){
    ScrollTrigger.create({
      trigger:el,
      start:'top 40%',
      end: '+=100%',
      // markers:true,
      scrub:1,
      toggleClass: {targets: el, className: 'show'}
    })
  })

  gsap.fromTo('.sc-audio .sound-view', {
  }, {
    scrollTrigger: {
      trigger: '.sc-audio .sound-view',
      start: 'top 30%',
      end: '100% -200%',
      // markers: true,
      toggleClass: {
        targets: '.sc-audio .sound-view',
        className: 'show'
      }
    },
  });


  gsap.fromTo('.sc-audio .group-sound .rings.back', {
    // scaleX: 0,
    // scaleY: 0,
    y: -50,
    // opacity: 0
  }, {
      scrollTrigger: {
      trigger: '.sc-audio .sound-view',
      start: 'top -60%',
      end: '100% 50%',
      scrub: 1,
      markers: true,
      toggleClass: {
        targets: '.sc-audio .group-sound .rings.back',
        className: 'fadeout'
      }
    },
    // scaleX: 1,
    // scaleY: 1,
    y: -10,
    // opacity: 1,
    // duration: .5
  });

  gsap.fromTo('.sc-audio .group-sound .rings.front', {
    y: -30,
  }, {
      scrollTrigger: {
      trigger: '.sc-audio .sound-view',
      start: 'top -60%',
      end: '100% 50%',
      scrub: 1,
      // markers: true,
      toggleClass: {
        targets: '.sc-audio .group-sound .rings.front',
        className: 'fadeout'
      }
    },
    y: 30,
  });

  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:".sc-experience .function-list",
      start:'top 100%',
      end: '100% 70%',
      // markers:true,
      scrub:1,
    },
    // duration: .6
  })
  tl.addLabel('t1')
  .fromTo('.sc-experience .function-item.txt1',{opacity:0, y:50},{opacity:1, y:0},'t1')
  .fromTo('.sc-experience .function-item.txt2',{opacity:0, y:50},{opacity:1, y:0},'t1+=1')
  .fromTo('.sc-experience .function-item.txt3',{opacity:0, y:50},{opacity:1, y:0},'t1+=2')

});





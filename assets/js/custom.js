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

  // intro
  gsap.fromTo('.sc-intro .thumb-box img', {
    opacity: 0.001,
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
    opacity: 0.001,
  }, {
    scrollTrigger: {
      trigger: '.sc-intro',
      start: '0% 0%',
      end: '100% 50%',
    },
    opacity: 0.999,
    delay: 0.8,
    duration: 1.2
  });

  gsap.fromTo('.sc-intro .thumb-box', {
    scaleX: 1,
    scaleY: 1
  }, {
    scrollTrigger: {
      trigger: '.sc-intro',
      start: '0% -10%',
      end: '100% -5%',
      scrub: 1,
    },
    scaleX: 1.2,
    scaleY: 1.2,
    // delay: 1,
    // duration: 1.2
  });
  gsap.fromTo('.sc-intro .title-box', {
    scaleX: 1,
    scaleY: 1
  }, {
    scrollTrigger: {
      trigger: '.sc-intro',
      start: '0% -10%',
      end: '100% -5%',
      scrub: 1,
    },
    scaleX: 0.8,
    scaleY: 0.8,
    // delay: 1,
    // duration: 1.2
  });

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

  // $('.sc-design .info-box[data-target]').each(function(index, el){
  //   gsap.fromTo(el, {
  //     opacity: 0,
  //     // y: 40
  //   }, {
  //     scrollTrigger: {
  //       trigger: '.sc-design .group-design .design-inner1 .info-area',
  //       start: 'top center',
  //       end: 'bottom top',
  //       scrub: 1,
  //       // markers: true,
  //       // toggleClass: {targets: el, className: 'show'}
  //     },
  //     // y:0,
  //     opacity: 1,
  //     delay: (index + 1) * .3,
  //     duration: .6
  //   })
  // });
  
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
    touchRatio: 0,
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

  // design
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

  gsap.to('.sc-design .thumb-comfort img',{
      scrollTrigger: {
      trigger: '.sc-design .group-quality',
      start: '-30% top', 
      end: '+=100%',
      scrub: 3,
    },
    scaleX: 1,
    scaleY: 1,
    yPercent: -10,
    // duration: .6
  });
  
  // gsap.to('.sc-audio .group-audio .thumb-box',{
  //   scrollTrigger:{
  //     trigger:'.sc-audio .group-audio',
  //     start:'top center',
  //     end: '+=100%',
  //     // markers:true,
  //     scrub:1,
  //   },
  //   yPercent:-20
  // })

  // const op = gsap.timeline({
  //   scrollTrigger:{
  //     trigger:'.sc-audio .group-audio',
  //     start:"top center",
  //     end: '+=100%',
  //     // markers:true,
  //     scrub:1,
  //   },
  // })

  // op.addLabel('label')
  // .fromTo('.sc-audio .cushion-transparent',{opacity:0},{opacity:1, delay: 0.5},'label')
  // .fromTo('.sc-audio .chip',{opacity:0},{opacity:1},'label+=1')
  // .fromTo('.sc-audio .driver',{opacity:0},{opacity:1},'label+=2')
  // .fromTo('.sc-audio .info-box',{opacity:0, yPercent: 100},{opacity:1, yPercent:0, stagger: 2, duration: 2},'label+=2')
  // .to('.sc-audio .info-box', {yPercent: -100, opacity: 0, stagger: 2, duration: 2},'label+=3')

  // gsap.to('.sc-audio .group-audio .info-area', {
  //   scrollTrigger: {
  //     trigger: '.sc-audio .group-audio .info-area',
  //     start: 'top top',
  //     end: '+=100%',
  //     scrub: 7,
  //     // pin: true,
  //     // markers:true,
  //     toggleClass: {
  //       targets: '.sc-audio .group-audio .info-area',
  //       className: 'sticky'
  //     }
  //   },
  //   duration: 4,
  // });
  // const op1 = gsap.timeline({
  //   defaults: {
  //     duration: 1
  //   },
  //   scrollTrigger:{
  //     trigger:'.sc-audio .group-audio .info-area',
  //     start:"top center",
  //     end: '+=100%',
  //     // markers:true,
  //     scrub:1,
  //   },
  // })
  // op1.addLabel('label')

  // .to('.sc-audio .info-box', {yPercent: -100, opacity: 0, stagger: 2, duration: 2},'label+=3')

  //   $('.sc-audio .audio-view .info-box').each(function(index,el){
  //     const tl = gsap.timteline({
  //       ScrollTrigger:({
  //         trigger: '.sc-audio .group-audio .info-area',
  //         start:'top 40%',
  //         end: '+=100%',
  //         // markers:true,
  //         scrub:1,
  //       }),
  //       delay: (el+1) * .2
  //     })
  //     tl.addLabel('label')
  //     gsap.to(el, {
  //       scrollTrigger: {
  //         trigger: el,
  //         start:"top center",
  //         end: 'bottom center',
  //         scrub: 1,
  //       },
  //       y:-70,
  //       opacity: 0,
  //       delay: (index + 1) * 1,
  //       duration: .7
  //     })
  //     gsap.to(el, {
  //       scrollTrigger: {
  //         trigger: el,
  //         start:"top center",
  //         end: 'bottom center',
  //         scrub: 1,
  //       },
  //       y:70,
  //       opacity: 1,
  //       delay: (index + 1) * 2,
  //       duration: .7
  //     })
  // })

  // audio
  gsap.to('.sc-audio .thumb-quality img', {
    scrollTrigger: {
    trigger: '.sc-audio .group-sound',
    start:'bottom 40%',
    end: '+=200%',
    scrub: 3,
    },
    scaleX: 1,
    scaleY: 1,
    yPercent: -10,
  });

  gsap.to('.sc-audio .group-audio', {
    scrollTrigger: {
      trigger: '.sc-audio .group-audio',
      endTrigger: '.sc-audio .group-sound',
      start: '70% 50%',
      end: 'bottom 100%',
      scrub: 3,
      pin: true,
      // markers:true,
    },
    // duration: 4,
  });

  const extl1 = gsap.timeline({
    defaults: {
      // duration: .7
    },
    scrollTrigger:{
      trigger: '.sc-audio .group-audio',
      endTrigger: '.sc-audio .group-quality',
      start:'top top',
      // end: 'bottom top',
      // markers:true,
      scrub:3,
    },
    // duration: 0.03
  })
  extl1.addLabel('label')
  extl1.fromTo('.sc-audio .group-audio .thumb-box', {opacity: 0}, {opacity: 1, stagger: 4},'label')


  const extl2 = gsap.timeline({
    defaults: {
      // duration: .7
    },
    scrollTrigger:{
      trigger: '.sc-audio .group-audio',
      endTrigger: '.sc-audio .group-quality',
      start:'top top',
      // end: 'bottom top',
      // markers:true,
      scrub:3,
    },
    // duration: 0.03
  })
  extl2.addLabel('label')
  .fromTo('.sc-audio .group-audio .info-box.txt1', {y: 70}, {opacity: 1, y: 0, ease: Linear.easeNone},'label')
  .to('.sc-audio .group-audio .info-box.txt1', {opacity: 0, y: -70, ease: Linear.easeNone,delay: 1},'label')
  .fromTo('.sc-audio .group-audio .info-box.txt2', {y: 70}, {opacity: 1, y: 0, delay: 1.5, ease: Linear.easeNone,},'label+=.5')
  .to('.sc-audio .group-audio .info-box.txt2', {opacity: 0, y: -70, delay: 2, ease: Linear.easeNone,},'label+=.5')
  .fromTo('.sc-audio .group-audio .info-box.txt3', {y: 70}, {opacity: 1, y: 0, delay: 2.5, ease: Linear.easeNone,},'label+=1')
  .to('.sc-audio .group-audio .info-box.txt3', {opacity: 0, y: -70, delay: 3, ease: Linear.easeNone,},'label+=1')

  gsap.fromTo('.sc-audio .sound-view', {
  }, {
    scrollTrigger: {
      trigger: '.sc-audio .group-sound',
      start: 'top top',
      end: 'bottom top',
      // markers: true,
      toggleClass: {
        targets: '.sc-audio .sound-view',
        className: 'show'
      }
    },
  })

  gsap.fromTo('.sc-audio .group-sound .rings.back', {
    y: -50,
  }, {
      scrollTrigger: {
      trigger: '.sc-audio .group-sound',
      start: 'top top',
      end: 'bottom top',
      scrub: 3,
      // markers: true,
      // toggleClass: {
      //   targets: '.sc-audio .group-sound .rings.back',
      //   className: 'fadeout'
      // }
    },
    y: -10,
  });

  gsap.fromTo('.sc-audio .group-sound .rings.front', {
    y: -30,
  }, {
      scrollTrigger: {
      trigger: '.sc-audio .group-sound',
      start: 'top top',
      end: 'bottom top',
      scrub: 3,
      // markers: true,
      // toggleClass: {
      //   targets: '.sc-audio .group-sound .rings.front',
      //   className: 'fadeout'
      // }
    },
    y: 30,
  })

  gsap.to('.sc-audio .group-sound .rings', {
    scrollTrigger: {
      trigger: '.sc-audio .group-sound',
      start: 'top top',
      end: 'bottom 40%',
      scrub: 3,
    },
    opacity: .2,
    duration: .3
  })

  gsap.fromTo('.sc-audio .group-sound .info-area', {
    y: -30,
  }, {
      scrollTrigger: {
      trigger: '.sc-audio .group-sound',
      start: 'top top',
      end: 'bottom top',
      scrub: 3,
      // markers: true,
    },
    y: 30,
  });

  // experience
  const exTl = gsap.timeline({
    defaults: {
      duration: .3
    },
    scrollTrigger:{
      trigger:'.sc-experience .group-case',
      start:'bottom 40%',
      end: '+=50%',
      // markers:true,
      scrub:1,
    },
  })
  exTl.fromTo('.sc-experience .function-item',{opacity:0, y:50},{opacity:1, y:0, stagger: .2})
  // .fromTo('.sc-experience .function-item.txt1',{opacity:0, y:50},{opacity:1, y:0},'t1')
  // .fromTo('.sc-experience .function-item.txt2',{opacity:0, y:50},{opacity:1, y:0},'t1+=1')
  // .fromTo('.sc-experience .function-item.txt3',{opacity:0, y:50},{opacity:1, y:0},'t1+=2')

  gsap.to('.sc-experience .group-experience .experience-view', {
    scrollTrigger: {
      trigger: '.sc-experience .group-experience',
      endTrigger: '.sc-experience .group-case',
      start: '0% 0%',
      end: 'bottom 100%',
      scrub: 4,
      pin: true,
      // markers:true,
    },
    // duration: 20,
  });

  const op2 = gsap.timeline({
    defaults: {
      duration: 1
    },
    scrollTrigger:{
      trigger:'.sc-experience .group-experience',
      endTrigger: '.sc-experience .group-function',
      start:'top top',
      // end: 'bottom top',
      // markers:true,
      scrub:3,
    },
    // duration: 0.03
  })
  op2.addLabel('label')
  op2.fromTo('.sc-experience .group-experience .screen', {opacity: 0}, {opacity: 1, stagger: 4},'label')

  const op3 = gsap.timeline({
    defaults: {
      duration: 1
    },
    scrollTrigger:{
      trigger:'.sc-experience .group-experience',
      endTrigger: '.sc-experience .group-function',
      start:'top top',
      // end: 'bottom top',
      // markers:true,
      scrub:3,
    },
    // duration: 0.03
  })
  op3.addLabel('label')
  .fromTo('.sc-experience .group-experience .info-box.txt1', {y: 70}, {opacity: 1, y: 0, ease: Linear.easeNone},'label')
  .to('.sc-experience .group-experience .info-box.txt1', {opacity: 0, y: -70, ease: Linear.easeNone,delay: 1},'label')
  .fromTo('.sc-experience .group-experience .info-box.txt2', {y: 70}, {opacity: 1, y: 0, delay: 1.5, ease: Linear.easeNone,},'label+=.5')
  .to('.sc-experience .group-experience .info-box.txt2', {opacity: 0, y: -70, delay: 2, ease: Linear.easeNone,},'label+=.5')
  .fromTo('.sc-experience .group-experience .info-box.txt3', {y: 70}, {opacity: 1, y: 0, delay: 2.5, ease: Linear.easeNone,},'label+=1')
  .to('.sc-experience .group-experience .info-box.txt3', {opacity: 0, y: -70, delay: 3, ease: Linear.easeNone,},'label+=1')
  // op2.addLabel('m1')
  // .fromTo('.sc-experience .screen.video',{opacity:0},{opacity:1})
  // .fromTo('.sc-experience .screen.switching',{opacity:0},{opacity:1})
  // .fromTo('.sc-experience .screen.sharing',{opacity:0},{opacity:1})
});






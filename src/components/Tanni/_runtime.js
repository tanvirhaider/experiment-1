import TweenMax from 'TweenMax';
import ScrollMagic from 'ScrollMagic';
import ScrollMagicAddIndicators from 'ScrollMagicAddIndicators';
import ScrollMagicGSAP from 'ScrollMagicGSAP';
import Particles from 'react-particles-js';


export default {
  init(component) {
    //console.log('aaaaa');
    //console.log(component);



    function initScrollingAttributes () {
      var redZoneParallax, yellowZoneParallax, purpleZoneParallax;

      var controller = new ScrollMagic.Controller();

      redZoneParallax = new ScrollMagic.Scene({
      triggerElement: '#img-4',
      triggerHook: 0.5,
      duration: 0
      })
      .setTween(TweenMax.fromTo(['#img-4'],1,{alpha:0,x: -1605},{alpha:1,x:0}))
      .addTo(controller);

      yellowZoneParallax = new ScrollMagic.Scene({
      triggerElement: '#img-3',
      triggerHook: 0.5,
      duration: 0
      })
      .setTween(TweenMax.fromTo(['#img-3'],1,{scale:0,alpha:0,x: 1605},{scale:1,alpha:1,x:0}))
      .addTo(controller);

      purpleZoneParallax = new ScrollMagic.Scene({
      triggerElement: '#img-2',
      triggerHook: 0.5,
      duration: "100%"
      })
      .setTween(TweenMax.fromTo(['#img-2'],1,{alpha:0,x: -1605},{alpha:1,x:0}))
      .addTo(controller);



    }

    


    initScrollingAttributes ();

    component.arrow.addEventListener('click', () => {

        TweenMax.to(component.arrow, 0.5, {
         alpha:0
       });

    //   const wrapperBottom = component.wrapper.getBoundingClientRect().bottom;
    //   const scrollTop = (document.documentElement && document.documentElement.scrollTop)
    //                       || document.body.scrollTop;

    //   TweenMax.to('html, body', 0.5, {
    //     scrollTop: (scrollTop + wrapperBottom) - HEADER_HEIGHT,
    //   });

    //   FPGHelper.track({
    //     label: 'slide 1',
    //   });

    console.log(this);




    });
  }

   


};



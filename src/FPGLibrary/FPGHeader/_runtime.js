import ArrivalListener from 'joshua-arrival-listener';
import TweenMax from 'TweenMax';
import FPGHelper from '../../lib/FPGHelper';

const HEADER_HEIGHT = 118;

export default {
  initArrowBehavior(component) {
    new ArrivalListener({
      el: component.arrowPlace,
      onBottomEnterBottom() {
        component.arrow.removeAttribute('data-fix');
      },
      onBottomLeaveBottom() {
        component.arrow.setAttribute('data-fix', '');
      },
    });

    component.arrow.addEventListener('click', () => {
      const wrapperBottom = component.wrapper.getBoundingClientRect().bottom;
      const scrollTop = (document.documentElement && document.documentElement.scrollTop)
                          || document.body.scrollTop;

      TweenMax.to('html, body', 0.5, {
        scrollTop: (scrollTop + wrapperBottom) - HEADER_HEIGHT,
      });

      FPGHelper.track({
        label: 'slide 1',
      });
    });
  },
};

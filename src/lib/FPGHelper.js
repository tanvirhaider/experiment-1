import ReactGA from 'react-ga';
import Platform from 'joshua-platform';

// import config from '../config.json';

export default class {
  static track({ label = '[label]' } = {}) {
    const action = Platform.isDesktop ? 'click' : 'tap';

    ReactGA.event({
      category: PaidPost.projectName,
      action,
      label,
    });

    console.log(`ga.track :: send, track, ${PaidPost.projectName}, ${action}, ${label}`);
  }
}

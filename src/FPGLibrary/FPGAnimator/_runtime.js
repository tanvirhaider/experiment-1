import ArrivalListener from 'joshua-arrival-listener';

export default {
  init(component) {
    const el = component.refs.root;

    new ArrivalListener({
      el,
      offsetTopEnterBottom: 0.9,
      onTopEnterBottom() {
        el.setAttribute('data-active', '');
      },
      onTopLeaveBottom() {
        el.removeAttribute('data-active');
      },
    });
  },
};

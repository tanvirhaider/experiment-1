import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import scss from './FPGAnimator.scss';

let runtimeObj;

const ignoreKeys = [
  'className',
  'children',
  'tag',
  'aniType',
];

class FPGAnimator extends Component {
  componentDidMount() {
    System.import('./_runtime.js').then((runtime) => {
      runtimeObj = runtime;

      runtimeObj.default.init(this);
    });
  }

  render() {
    const props = {};

    Object.keys(this.props).forEach((key) => {
      if (!ignoreKeys.includes(key)) {
        props[key] = this.props[key];
      }
    });

    return React.createElement(
      this.props.tag,
      {
        ...props,
        ref: 'root',
        className: classnames(
          scss.FPGAnimator,
          this.props.className,
        ),
        'data-animator': '',
        [`data-${this.props.aniType}`]: '',
      },
      this.props.children,
    );
  }
}

FPGAnimator.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  tag: PropTypes.string.isRequired,
  aniType: PropTypes.oneOf([
    'custom',
    'fade',
    'fade-bottom',
    'fade-left',
    'fade-right',
  ]),
};

FPGAnimator.defaultProps = {
  className: undefined,
  tag: 'div',
  aniType: 'fade-bottom',
};

export default FPGAnimator;

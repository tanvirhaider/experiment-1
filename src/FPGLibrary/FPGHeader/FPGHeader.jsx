import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import scss from './FPGHeader.scss';

let runtimeObj;

class FPGHeader extends Component {
  componentDidMount() {
    System.import('./_runtime.js').then((runtime) => {
      runtimeObj = runtime;

      runtimeObj.default.initArrowBehavior(this);
    });
  }

  render() {
    return (
      <div
        ref={(c) => { this.wrapper = c; }}
        className={classnames(
          scss.FPGHeader,
          this.props.className,
        )}
      >
        {this.props.children}

        <div
          ref={(c) => { this.arrow = c; }}
          className={scss.scrollArrow}
        >
          <div className={scss.placeBox}></div>
          <img src={require('../../images/arrow_down.png')} alt="" />
        </div>
        <div
          ref={(c) => { this.arrowPlace = c; }}
          className={scss.scrollArrowPlace}
        >
          <img src={require('../../images/arrow_down.png')} alt="" />
        </div>
      </div>
    );
  }
}

FPGHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FPGHeader.defaultProps = {
  className: undefined,
};

export default FPGHeader;

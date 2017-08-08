import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import FPGHeader from '../../FPGLibrary/FPGHeader';
import FPGAnimator from '../../FPGLibrary/FPGAnimator';

import scss from './HeaderPart.scss';

import data from '../../data.json';

class HeaderPart extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <FPGHeader
        className={classnames(
          scss.HeaderPart,
          this.props.className,
        )}
      >
        <div className={scss.headerContainer}>
          <FPGAnimator tag="h1">{data.header.h1}</FPGAnimator>
          <FPGAnimator>
            <h2
              dangerouslySetInnerHTML={{ __html: data.header.h2 }}
              ref={(c) => { this.h2 = c; }}
            />
          </FPGAnimator>
        </div>

        <FPGAnimator aniType="fade" className={scss.backgroundImage}>
          <img
            alt=""
            className={scss.displayDesktop}
            src={this.props.desktopImg}
          />
          <img
            alt=""
            className={scss.displayMobile}
            src={this.props.mobileImg}
          />
        </FPGAnimator>
      </FPGHeader>
    );
  }
}

HeaderPart.propTypes = {
  className: PropTypes.string,
  desktopImg: PropTypes.string.isRequired,
  mobileImg: PropTypes.string.isRequired,
};

HeaderPart.defaultProps = {
  className: undefined,
};

export default HeaderPart;

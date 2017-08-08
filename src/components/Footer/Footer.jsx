import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Picture,
  FullBleed,
  Figure,
  breakpoints,
} from 'paidpost-core';

import FPGAnimator from '../../FPGLibrary/FPGAnimator';

import scss from './Footer.scss';

class Footer extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <FullBleed
        className={classNames(
          scss.Footer,
        )}
      >
        <a
          href={PaidPost.clientLink}
          alt=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <FPGAnimator aniType="fade" className={scss.backImage}>
            <Figure
              src={{
                [breakpoints.compact]: this.props.backImages[1],
                [breakpoints.regular]: this.props.backImages[0],
              }}
            />
          </FPGAnimator>
          <div className={scss.footerMain}>
            <FPGAnimator aniType="fade">
              <h3 dangerouslySetInnerHTML={{ __html: this.props.desc }} />
            </FPGAnimator>
            <FPGAnimator aniType="fade" className={scss.cta}>
              <p>LEARN MORE</p>
            </FPGAnimator>
            <FPGAnimator aniType="fade">
              <Picture
                src={this.props.logo}
                className={classNames(
                  scss.logo,
                  scss.showMobile,
                )}
              />
            </FPGAnimator>
          </div>
          <Picture
            src={this.props.logo}
            className={classNames(
              scss.logo,
              scss.showDesktop,
            )}
          />
        </a>
      </FullBleed>
    );
  }
}

Footer.propTypes = {
  backImages: PropTypes.node.isRequired,
  desc: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

Footer.defaultProps = {
  // className: undefined,
};

export default Footer;

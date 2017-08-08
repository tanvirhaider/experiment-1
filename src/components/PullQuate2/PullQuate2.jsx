import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  FullBleed,
  Picture,
  breakpoints,
} from 'paidpost-core';

import scss from './PullQuate2.scss';

class PullQuate2 extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <FullBleed
        widthMargins
        className={scss.PullQuate2}
      >
        <Picture
          className={scss.backBorder}
          src={{
            [breakpoints.compact]: require('../../images/Pullquote_2_mobile.png'),
            [breakpoints.regular]: require('../../images/Pullquote_2.png'),
          }}
        />
        <div
          className={scss.quote}
        >
          <div className={scss.words}>
            <h1>
              <span>“</span>
              {this.props.caption}
            </h1>
            <div className={scss.credit}>
              <p>—</p>
              <p className={scss.showDesktop} dangerouslySetInnerHTML={{ __html: this.props.credit }} />
              <p className={scss.showMobile} dangerouslySetInnerHTML={{ __html: this.props.creditM }} />
            </div>
          </div>
        </div>
      </FullBleed>
    );
  }
}

PullQuate2.propTypes = {
  caption: PropTypes.string.isRequired,
  credit: PropTypes.string.isRequired,
  creditM: PropTypes.string,
};

PullQuate2.defaultProps = {
  creditM: undefined,
};

export default PullQuate2;

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import {
  Picture,
  breakpoints,
} from 'paidpost-core';

import scss from './PullQuate.scss';


class PullQuate extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div
        className={classnames(
          scss.pullQuate,
          this.props.className,
        )}
      >
        <Picture
          src={{
            [breakpoints.compact]: require('../../images/Pullquote_1_mobile.png'),
            [breakpoints.regular]: require('../../images/Pullquote_1.png'),
          }}
          className={scss.quoteBorder}
        />
        <span>“</span>
        <div className={scss.words}>
          <h1>{this.props.caption}</h1>
          <div className={scss.credit}>
            <p>—</p>
            <p dangerouslySetInnerHTML={{ __html: this.props.credit }} />
          </div>
        </div>
      </div>
    );
  }
}

PullQuate.propTypes = {
  caption: PropTypes.string.isRequired,
  credit: PropTypes.string.isRequired,
  className: PropTypes.string,
};

PullQuate.defaultProps = {
  className: undefined,
};

export default PullQuate;

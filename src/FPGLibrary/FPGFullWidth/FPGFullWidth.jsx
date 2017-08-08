import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import scss from './FPGFullWidth.scss';


class FPGFullWidth extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div
        className={classnames(
          scss.FPGFullWidth,
          this.props.className, {
            [scss.widthPadding]: this.props.withPadding,
          },
        )}
      >
        {this.props.children}
      </div>
    );
  }
}

FPGFullWidth.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  withPadding: PropTypes.bool,
};

FPGFullWidth.defaultProps = {
  className: undefined,
  withPadding: false,
};

export default FPGFullWidth;

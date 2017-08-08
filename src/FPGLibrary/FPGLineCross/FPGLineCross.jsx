import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import scss from './FPGLineCross.scss';



class FPGLineCross extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <span
        className={classnames(
          scss.FPGLineCross,
          this.props.className,
        )}
        style={{
          backgroundImage: `linear-gradient(to bottom, ${this.props.color} 0%, ${this.props.color} 100%)`,
          backgroundPositionY: `${1 - this.props.lineHeight}em`,
          transitionDuration: `${this.props.duration}s`,
        }}
      >
        {this.props.children}
      </span>
    );
  }
}

FPGLineCross.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string.isRequired,
  lineHeight: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

FPGLineCross.defaultProps = {
  className: undefined,
};

export default FPGLineCross;

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import scss from './FPGParagraph.scss';



class FPGParagraph extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <div
        className={classnames(
          scss.FPGParagraph,
          this.props.className,
        )}
      >
        {this.props.children}
      </div>
    );
  }
}

FPGParagraph.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

FPGParagraph.defaultProps = {
  className: undefined,
};

export default FPGParagraph;

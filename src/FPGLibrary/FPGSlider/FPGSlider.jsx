import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import scss from './FPGSlider.scss';

let runtimeObj;

class FPGSlider extends Component {
  componentDidMount() {
    System.import('./_runtime.js').then((runtime) => { runtimeObj = runtime; });
  }

  render() {
    const settings = {
      arrows: true,
      dots: true,
      infinite: true,
      centerMode: true,
      centerPadding: '150px',
    };

    return (
      <div
        className={classnames(
          scss.FPGSlider,
          this.props.className,
        )}
      >
        <Slider {...settings}>
          <div data-wrapper>
            <div data-box><img src="http://placekitten.com/g/1600/900" alt="" /></div>
          </div>
          <div data-wrapper>
            <div data-box><img src="http://placekitten.com/g/1600/900" alt="" /></div>
          </div>
          <div data-wrapper>
            <div data-box><img src="http://placekitten.com/g/1600/900" alt="" /></div>
          </div>
        </Slider>
      </div>
    );
  }
}

FPGSlider.propTypes = {
  // children: React.PropTypes.node.isRequired,
  className: PropTypes.string,
};

FPGSlider.defaultProps = {
  className: undefined,
};

export default FPGSlider;

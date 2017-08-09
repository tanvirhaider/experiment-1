import React, { Component } from 'react';
import BackgroundImage from 'react-background-image-loader';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Particles from 'react-particles-js';


let runtimeObj;

 import {
  Picture,
  FullBleed,
  Figure,
  breakpoints,
} from 'paidpost-core';


import scss from './Tanni.scss';
import data from '../../data.json';

class Tanni extends Component {
  componentDidMount() {


     System.import('./_runtime.js').then((runtime) => {
      runtimeObj = runtime;

      runtimeObj.default.init(this);
    });


  }

  render() {
        return (
            <div className={scss.fullBleed}>
                <div ref={(c) => { this.arrow = c; }} className={scss.yoMTV}> {data.lorem} </div>
                <img id="img-1" alt="" className={classNames(scss.bgImage,scss.images)} src={this.props.desktopImg}/>
                <img id="img-2" alt="" className={scss.bgImage} src={this.props.desktopImg}/>
                <img id="img-3" alt="" className={scss.bgImage} src={this.props.desktopImg}/>
                <img id="img-4" alt="" className={scss.bgImage} src={this.props.desktopImg}/>

                <BackgroundImage className={scss.yoLanda} src={this.props.desktopImg} placeholder={this.props.desktopImg}>
                    <div className={scss.copy}>Some more markup</div>
                </BackgroundImage>

                <div id="particles" className={scss.particlebg}>
                    <Particles  params={{
            		particles: {
            			line_linked: {
            				shadow: {
            					enable: true,
            					color: "#3CA9D1",
            					blur: 5
            				}
            			}
            		}
            	}}/>

                </div>

                
            </div>
     
         


           
        
        );
    }
}

Tanni.propTypes = {
  caption: PropTypes.string.isRequired,
  credit: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Tanni.defaultProps = {
  className: undefined,
};


export default Tanni;

/* global PaidPost */
import React from 'react';
import classNames from 'classnames';
import {
  PaidPostArticle,
  Picture,
  BodyCopy,
  FullBleed,
  Center,
  VideoPlayer,
  Figure,
  Right,
  Left,
  Slideshow,
  Icon,
  SourceCopy,
} from 'paidpost-core';


import FPGAnimator from './FPGLibrary/FPGAnimator';

import HeaderPart from './components/HeaderPart';
import PullQuate from './components/PullQuate';
import PullQuate2 from './components/PullQuate2';
import PicGird from './components/PicGird';
import Footer from './components/Footer';

import Tanni from './components/Tanni';

import scss from './style.scss';
import data from './data.json';

//import reactVR from './componenets/reactVR';

export default () => (
  <PaidPostArticle>

  <Tanni  
    caption={data.bodyCopy.copy3.pullQuate}
    credit={data.bodyCopy.copy3.Author}
    desktopImg={require('./images/Header.jpg')}
  />

 


  </PaidPostArticle>
);



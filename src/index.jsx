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



import Tanni from './components/Tanni';
import scss from './style.scss';
import data from './data.json';

//import reactVR from './componenets/reactVR';

export default () => (
  <PaidPostArticle>

  <Tanni  
    caption={"nothing"}
    credit={"nothing really"}
    desktopImg={require('./images/Header.jpg')}
  />

 


  </PaidPostArticle>
);



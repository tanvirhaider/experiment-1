import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Picture,
  FullBleed,
  Center,
  Figure,
  PhotoGrid,
} from 'paidpost-core';

import FPGAnimator from '../../FPGLibrary/FPGAnimator';

import scss from './PicGird.scss';

class PicGird extends Component {
  componentDidMount() {

  }

  render() {
    return (
      <FullBleed
        className={classNames(
          scss.PicGird,
          this.props.className,
          {
            [scss.gird1]: this.props.gird1,
          },
        )}
        withMargins
      >
        <Center size="xx-large">
          <div className={scss.main}>
            <FPGAnimator>
              <Picture
                className={classNames(
                  scss.showMobile,
                  scss.borderTopM,
                )}
                src={this.props.borders[2]}
              />
            </FPGAnimator>
            <PhotoGrid className={scss.showMobile} alternate={this.props.images.length >= 4}>
              {
                this.props.images.map(item =>
                  <FPGAnimator key={item.toString()}>
                    <Figure
                      src={item}
                      className={scss.pics}
                    />
                  </FPGAnimator>,
                )
              }
            </PhotoGrid>
            <FPGAnimator className={scss.showDesktop}>
              <PhotoGrid
                alternate={this.props.images.length >= 4}
              >
                {
                  this.props.images.map(item =>
                    <Figure
                      src={item}
                      key={item.toString()}
                      className={scss.pics}
                    />,
                  )
                }
              </PhotoGrid>
            </FPGAnimator>
            <FPGAnimator>
              <p
                className={classNames(
                  scss.caption,
                  scss.showDesktop,
                )}
                dangerouslySetInnerHTML={{ __html: this.props.caption[0] }}
              />
            </FPGAnimator>
            <FPGAnimator>
              <p
                className={classNames(
                  scss.caption,
                  scss.showMobile,
                )}
                dangerouslySetInnerHTML={{ __html: this.props.caption[1] }}
              />
            </FPGAnimator>
            <FPGAnimator>
              <Picture
                className={classNames(
                  scss.showMobile,
                  scss.borderBottomM,
                )}
                src={this.props.borders[3]}
              />
            </FPGAnimator>
            <Picture
              src={this.props.borders[0]}
              className={classNames(
                scss.showDesktop,
                scss.borders,
                scss.borderTop,
              )}
            />
            <Picture
              src={this.props.borders[1]}
              className={classNames(
                scss.showDesktop,
                scss.borders,
                scss.borderBottom,
              )}
            />
          </div>
        </Center>
      </FullBleed>
    );
  }
}

PicGird.propTypes = {
  images: PropTypes.node.isRequired,
  borders: PropTypes.node.isRequired,
  caption: PropTypes.node.isRequired,
  gird1: PropTypes.bool,
  className: PropTypes.string,
};

PicGird.defaultProps = {
  className: undefined,
  gird1: false,
};

export default PicGird;

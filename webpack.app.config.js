const webpack = require('webpack');

module.exports = options => ({
  resolve: {
    alias: {
      "TweenLite": "gsap/src/uncompressed/TweenLite.js",
      "TimelineLite": "gsap/src/uncompressed/TimelineLite.js",
      "TweenMax": "gsap/src/uncompressed/TweenMax.js",
      "TimelineMax": "gsap/src/uncompressed/TimelineMax.js",
      "ScrollMagic": "scrollmagic/scrollmagic/uncompressed/ScrollMagic.js",
      "ScrollMagicAddIndicators": "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js",
      "ScrollMagicGSAP": "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js"
    }
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('postcss-css-variables'),
        ],
      },
    }),
  ],
});

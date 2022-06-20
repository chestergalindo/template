/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
module.exports = {
  plugins: [
    require( 'postcss-preset-env' )( { stage: 0 } ),
    require( 'autoprefixer' ),
    require( 'cssnano' )( {
      'preset': [ 'default', {
        discardComments: {
          removeAll: true,
        },
      } ],
    } ),
  ],
};
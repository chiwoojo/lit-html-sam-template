// Required per https://github.com/postcss/postcss-loader.
module.exports = ({ file, options, env}) => ({
    parser: file.extname === '.sss' ? 'sugarss' : false, // Handles `.css` && '.sss' files dynamically - https://github.com/postcss/postcss/issues/1062
    plugins: {
      'postcss-import': {},
      'postcss-cssnext': {},
      'cssnano':  env === 'production'  ? {} : false
    }
});
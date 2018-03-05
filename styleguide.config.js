const path = require('path');
module.exports = {
  components: 'src/components/**/*.js',
  ignore: [
    '**/__tests__/**',
    '**/*.test.js',
    '**/*.test.jsx',
    '**/*.spec.js',
    '**/*.spec.jsx',
    '**/*.util.js',
    '**/*.util.jsx',
    '**/ProtectedRoute.js'
  ],
  require: [
    path.join(__dirname, 'src/__styleguide__/styleguide.css'),
  ],
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/__styleguide__/Wrapper.js')
  },
  getExampleFilename(componentPath) {
    const filename = path.basename(componentPath, '.js')
    return __dirname + '/src/__styleguide__/' + filename + '.md'
  }
};

// Karma configuration
// Generated on Fri Jun 14 2024 17:10:53 GMT-0300 (Brasilia Standard Time)
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-coverage'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter')
    ],
    client: {
      clearContext: false
    },
    coverageIstanbulReporter: {
      dir: './coverage/',
      reports: ['lcovonly'],
      fixWebpackSourcePaths: true,
    },
    reporters: ['coverage-istanbul'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    concurrency: Infinity,    
  });
};

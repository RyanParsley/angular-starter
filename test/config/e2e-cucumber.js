// config for protractor e2e testing

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../e2e/features/**/*.feature'],
  framework: 'cucumber',
  cucumberOpts: {
    // define your step definitions in this file
    require: '../e2e/features/step_definitions/protractor_steps.js',
    format: 'progress'
  },
  capabilities: {
    browserName: 'chrome'
  }
};

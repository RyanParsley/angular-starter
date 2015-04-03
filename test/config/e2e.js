// config for protractor e2e testing

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['../e2e/**/*.spec.js'],
  capabilities: {
    browserName: 'chrome'
  }
}

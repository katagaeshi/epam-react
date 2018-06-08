const chromedriver = require('chromedriver');

module.exports = {
  before(browser, done) {
    chromedriver.start();

    done();
  },

  after(browser, done) {
    chromedriver.stop();

    done();
  },

  'Click search button': function (browser) {
    browser
      .url(browser.launchUrl)
      .resizeWindow(1280, 800)
      .waitForElementVisible('.SearchButton', 1000)
      .click('.SearchButton')
      .end();
  },
};


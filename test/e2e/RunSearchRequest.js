const chromedriver = require('chromedriver');

module.exports = {
  before(browser, done) {
    chromedriver.start();

    done();
  },

  after(browser, done) {
    chromedriver.stop();
    browser.end(function() {
      done();
    });
  },

  'Click search button': function (browser) {
    browser
      .url(browser.launchUrl)
      .resizeWindow(1280, 800)
      .waitForElementVisible('#root > div > div > div.SearchPanel-searchPanel-0-1-2 > div.SearchPanel-searchButtonContainer-0-1-4 > button', 1000)
      .setValue('#root > div > div > div.SearchPanel-searchPanel-0-1-2 > input', 'Jack')
      .click('#root > div > div > div.SearchPanel-searchPanel-0-1-2 > div.SearchPanel-searchButtonContainer-0-1-4 > button')
      .pause(1000)
      .getText('#root > div > div > div:nth-child(2) > span', function(text) {
        this.assert.equal(text.value, '13 movies found');
        browser.end();
      });
  },
};


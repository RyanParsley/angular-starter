describe('angularjs homepage', function() {
  it('should have items in the nav', function() {
    browser.get('http://angularstarter.dev');
    var nav = element(by.css('.nav li:first-child a'));
    expect(nav.getText()).toEqual('Link 1');
  });
});

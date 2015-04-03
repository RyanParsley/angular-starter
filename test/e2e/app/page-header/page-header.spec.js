describe('angularjs homepage', function() {
  it('should have change a thing link', function() {
    browser.get('http://angularstarter.dev');
    var navLink = element(by.css('.nav li:first-child a'));
    expect(navLink.getText()).toEqual('Link 1');
  });
});

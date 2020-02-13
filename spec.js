describe('Protractor Demo', function() {
  it('to check the page title', function() {
  browser.ignoreSynchronization = true;
  browser.get('https://www.google.com/');
  browser.driver.getTitle().then(function(pageTitle) {
  expect(pageTitle).toEqual('Google');
  });
  });
  });

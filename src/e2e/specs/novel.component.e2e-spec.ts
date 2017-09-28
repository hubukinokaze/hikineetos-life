import { browser, element, by } from 'protractor';

describe('Novel', () => {

  beforeEach(async () => {
    return await browser.get('/novel');
  });

  it('should have correct feature heading', () => {
    expect(element(by.css('sd-about h2')).getText()).toEqual('Features');
  });

});

import { t } from '../index';
import { browser, element, by } from 'protractor';

t.describe('App', function() {

  t.be(async function() {
    return await browser.get('/');
  });

  t.it('should have a title', function() {
    t.e(browser.getTitle()).toEqual("HikiNEETO's Life");
  });

  t.it('should have <nav>', function() {
    t.e(element(by.css('sd-app sd-navbar nav')).isPresent()).toEqual(true);
  });

  t.it('should have correct nav text for Home', function() {
    t.e(element(by.css('sd-app sd-navbar nav a:first-child')).getText()).toEqual('Home');
  });

  t.it('should have correct nav text for About', function() {
    t.e(element(by.css('sd-app sd-navbar nav a:last-child')).getText()).toEqual('About');
  });

  t.it('should have correct nav text for Novel', function() {
    t.e(element(by.css('sd-app sd-navbar nav a:last-child')).getText()).toEqual('Novel');
  });

  t.it('should have correct nav text for Art', function() {
    t.e(element(by.css('sd-app sd-navbar nav a:last-child')).getText()).toEqual('Art');
  });

  t.it('should have correct nav text for Manga', function() {
    t.e(element(by.css('sd-app sd-navbar nav a:last-child')).getText()).toEqual('Manga');
  });

  t.it('should contain a language switcher', function() {
    t.e(element(by.css('sd-app sd-toolbar lang-switcher')).isPresent()).toEqual(true);
    t.e(element.all(by.css('sd-app sd-toolbar lang-switcher option')).count()).toEqual(5);
  });

});

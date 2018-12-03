import { LoginPage } from './login.po';
import { browser } from 'protractor';
import { text } from '@angular/core/src/render3/instructions';
// import { credentials } from './credentials';
const urls = require('./data.json');
describe('pok App', () => {
    let loginPage: LoginPage;

    it('when user trying to login with valid   he should route to waitlist page', () => {
        loginPage = new LoginPage();
        loginPage.navigateTo();
        // browser.sleep(1000);

        // loginPage.email.sendKeys(credentials.username);
        // browser.sleep(100);
        // loginPage.nextBtn.click();
        // loginPage.password.sendKeys(credentials.password);
        // loginPage.nextBtn.click();
        browser.wait(
            loginPage.ifurlChangedto(
                'https://search.google.com/search-console?utm_source=about-page&resource_id=https://www.propertyok.com/'
            ),
            100000
        );

        expect(loginPage.getCurrentUrl()).toEqual(
            'https://search.google.com/search-console?utm_source=about-page&resource_id=https://www.propertyok.com/'
        );
    });
    it('test begin', () => {
        for (let url of urls) {
            loginPage.searchInput.sendKeys(url);
            browser.sleep(1000);
            loginPage.searchBtn.click();
            browser.sleep(1000);
            browser.wait(function() {
                return loginPage.requestBtn.isPresent().then(function(result) {
                    return result;
                });
            }, 20000);
            loginPage.requestBtn.isPresent().then((text) => {
                console.log(text);
            });
            browser.sleep(1000);
            loginPage.requestBtn.click();
            browser.wait(function() {
                return loginPage.gotitBtn.isPresent().then(function(result) {
                    return result;
                });
            }, 200000);
            browser.sleep(1000);
            loginPage.gotitBtn.click();
        }
    });
});

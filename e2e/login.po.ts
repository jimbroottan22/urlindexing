import { browser, by, element } from 'protractor';
import { credentials } from './credentials';

export class LoginPage {
    email;
    password;
    nextBtn;
    emailValidationMsg;
    passwordValidationMsg;
    snackbar;
    logout;
    account;
    searchInput;
    searchBtn;
    requestBtn;
    gotitBtn;
    outsidediv;
    constructor() {
        this.email = element(by.name('identifier'));
        this.password = element(by.name('password'));
        this.nextBtn = element(by.cssContainingText('.RveJvd.snByac', 'Next'));
        this.searchInput = element(by.css('.Ax4B8.ZAGvjd'));
        this.searchBtn = element(by.css('button.gb_mf'));
        this.requestBtn = element(by.css('.a50kyd.o4cf5c'));
        // tslint:disable-next-line:max-line-length
        this.gotitBtn = element(by.xpath('//div[@id="yDmH0d"]/div[6]/div/div[2]/div[3]/div/content/span'));
        this.outsidediv = element(by.css('div.sEzcBc'));
    }
    navigateTo() {
        browser.ignoreSynchronization = true;
        return browser.get('/search-console');
    }

    fillcredentials(credentias: any = credentials) {
        this.email.sendKeys(credentias.username);
        this.password.sendKeys(credentias.password);
        this.nextBtn.click();
    }

    getCurrentUrl() {
        return browser.getCurrentUrl();
    }
    ifurlChangedto(url) {
        return function() {
            return browser.getCurrentUrl().then(function(actualUrl) {
                return url === actualUrl;
            });
        };
    }
}

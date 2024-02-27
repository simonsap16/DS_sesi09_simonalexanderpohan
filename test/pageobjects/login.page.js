const { $, expect } = require('@wdio/globals')
const Page = require('./page');

class LoginPage extends Page {
    get fieldUsername () { return $('#user-name'); }
    get fieldPassword () { return $('#password'); }
    get btnLogin () { return $('#login-button'); }
    get errorLockedOutUser () { return $('//h3[text()="Epic sadface: Sorry, this user has been locked out."]') }

    async login () {
        console.log(`USERNAME: ${process.env.USERNAME_STANDARD_NAME}`)
        console.log(`PASSWORD: ${process.env.PASSSWORD_SAUCEDEMO}`)
        await this.fieldUsername.setValue(process.env.USERNAME_STANDARD_NAME);
        await this.fieldPassword.setValue(process.env.PASSSWORD_SAUCEDEMO);
        await this.btnLogin.click();
    }

    async validateLockedOutUserError() {
        expect(this.errorLockedOutUser).toBeDisplayed()
    }

    open () {
        return super.open('/');
    }
}

module.exports = new LoginPage();

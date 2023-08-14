class LoginPage {
    get usernameInput() {
        return $('#user-name');
    }

    get passwordInput() {
        return $('#password');
    }

    get loginButton() {
        return $('#login-button');
    }

    get flashMessage() {
        return $('#flash');
    }

    async open() {
        await browser.url('https://www.saucedemo.com/');
        await browser.maximizeWindow();
    }

    async login(username, password) {
        await this.usernameInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
        await browser.pause(6000);
        
    }

   
}

module.exports = new LoginPage();










const { Given, When, Then, defineStep } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/login.page');
const product = require('../pageobjects/product.page');
const logOut = require('../pageobjects/logout.page');

defineStep(/^I am on the login page$/, async () => {
    await LoginPage.open();
});

defineStep(/^I login with "([^"]*)" and "([^"]*)"$/, async (username, password) => {
    await LoginPage.login(username, password);
});

defineStep(/^The user will choose a product and remove it$/, async () => {
   await product.orderProduct();
});

defineStep(/^The user will log out$/, async () => {
    await logOut.logout();
 });





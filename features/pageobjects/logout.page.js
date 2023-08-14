class LogoutPage {
    get logoutButton() {
        return $('//*[@id="logout_sidebar_link"]');
    }

    async logout() {
        await this.logoutButton.click();
        await browser.pause(4000);
        
     
    }


}

module.exports = new LogoutPage();
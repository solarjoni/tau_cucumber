class Login {
    get url() {
        return "http://automationpractice.com/index.php?controller=authentication";
    }

    get emailInput() {
        return $("#email");
    }

    get passwordInput() {
        return $("#passwd");
    }

    get signInButton() {
        return $("#SubmitLogin");
    }

    get errorMessage() {
        return $(".alert.alert-danger > ol");
    }

    /**
     * Sign in
     * 
     * @param {String} email - Email
     * @param {String} password - Button
     */
    async signIn(email, password) {
        await this.emailInput.waitForDisplayed(5000);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.signInButton.click();
        await browser.pause(3000);
    }
}

export default new Login();
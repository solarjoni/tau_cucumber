class Home {
    get url() {
        return "http://automationpractice.com";
    }

    get searchField() {
        return $("#search_query_top");
    }

    get searchButton() {
        return $(".btn.btn-default.button-search");
    }
    
    get womenMenuOption() {
        return $('ul.menu-content > li > a[title="Women"]');
    }
    
    get dressesMenuOption() {
        return $('ul.menu-content > li > a[title="Dresses"]');
    }
    
    get tshirtMenuOption() {
        return $('ul.menu-content > li > a[title="T-shirts"]');
    }
    /**
     * Searches for a keyword
     * 
     * @param {String} keyword Search term
     */
    async search(keyword) {
        await this.searchField.waitForDisplayed(2000);
        await this.searchField.setValue(keyword);
        await this.searchButton.click();
        await browser.pause(3000);
    }

    /**
     * 
     * @param {String} option - Name of the menu option to click 
     */
    async selectMenuOption(option) {
       
        switch (option) {
            case "Women":
                await this.womenMenuOption.click();
                break;
            case "Dresses":
                await this.dressesMenuOption.click();
                break;
            case "T-Shirts":
                await this.tshirtMenuOption.click();
                break;
            default:
                console.log(`Invalid Option ${option}`);
        }
    }
}

export default new Home();
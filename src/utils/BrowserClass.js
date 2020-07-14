const puppeter = require('puppeteer');

class Browser {
    #browser;
    constructor(){
        if(Browser.instance){
            return Browser.instance;
        }
        Browser.instance = this;
        
        this.#browser = this.browserConfig();
        return this;
    }

    async getFirstPage(){
        try {
            const browser = await this.getBrowser();
            const pages = await browser.pages();
            return pages[0];
        } catch(error) {
            console.log(error);
        }
    }
    
    async browserConfig(){
        return puppeter.launch({
            headless: false
        }).then(browser => {
            return browser;
        }).catch(error => {
            console.log(error);
        });
    }

    async getNewPage(){
        const browser = await this.#browser;
        return await browser.newPage();
    }

}
module.exports = Browser;
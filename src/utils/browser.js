const puppeter = require('puppeteer');


const getBrowser = () => {
    return puppeter.launch({
        headless: false
    });
}

const getNewPage = async () => {
    return getBrowser().then(browser => {
        return browser.newPage();
    }).catch(error => {
        console.log(error);
    });
}

const goTo = async (url) => {
    await getPage().then( page => {
        page.goto(url);
    });
}

const getFirstPage = async () => {
    try {
        const browser = await getBrowser();
        const pages = await browser.pages();
        return pages[0];
    } catch(error){
        console.log(error);
    }
}

module.exports = {
    getBrowser, getNewPage, goTo, getFirstPage
};
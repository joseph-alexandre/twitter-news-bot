const puppeter = require('puppeteer');



const getBrowser = async () => {
    return puppeter.launch({
        headless: false
    }).then(browser => {
        return browser
    }).catch(error => {
        console.log(error);
    });
}

const getPage = async () => {
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

module.exports = {
    getBrowser, getPage, goTo
};
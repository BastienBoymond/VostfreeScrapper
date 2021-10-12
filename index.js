const puppeteer = require('puppeteer');

const Anime = require('./lib/Anime')

class VostFreeScreen {

    constructor() {
        this.baseUrl = 'https://vostfree.tv/';
        this.anime = new Anime(this);
        this.browser;
        this.page;
    }

    async initPage() {
        this.browser = await puppeteer.launch();
        this.page = await this.browser.newPage();
        await this.page.setDefaultNavigationTimeout(0);
    }

    async closePage() {
        await this.browser.close();
    }

    async relocatePage(endpoint) {
        await this.page.goto(this.baseUrl + endpoint);
    }
}

module.exports = VostFreeScreen;
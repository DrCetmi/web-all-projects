const puppeteer = require("puppeteer");
const path = require('path');

const browserOptions = {
    headless: true,
    ignoreHTTPSErrors: true,
    defaultViewport: null,
    devtools: false,
}

let browser;
let page;

beforeAll(async () => {
    browser = await puppeteer.launch(browserOptions);
    page = await browser.newPage();
    await page.goto('file://' + path.resolve('./index.html'));
}, 30000);

afterAll((done) => {
    try {
        this.puppeteer.close();
    } catch (e) { }
    done();
});

describe("Header", () => {
    it("closest parent `header` to `h1` has border style `5px solid rgb`", async () => {
        const header = await page.$eval('header', el => getComputedStyle(el).borderBottom);
        expect(header).toMatch(/5px solid rgb/i);
    });
});

describe("Info Section", () => {
    it("previous sibling of `.package-title` has border style `2px solid #072F5F`", async () => {
        const packageTitles = await page.$$eval('.package-title', titles => titles.map(title => getComputedStyle(title.previousElementSibling).border));
        expect(packageTitles).toEqual(expect.arrayContaining([
            '2px solid rgb(7, 47, 95)'
        ]))
    });
});

describe("Labels", () => {
    it("`.mild` and `.intense` labels have `yellow` or `orange` border", async () => {
        const labels = await page.$$eval('.info label', labels => labels.map(label => {
            if (label.matches('.mild')) {
                return getComputedStyle(label).borderBottom;
            } else if (label.matches('.intense')) {
                return getComputedStyle(label).borderBottom;
            }
        }));
        expect(labels).toEqual(expect.arrayContaining([
            "2px solid rgb(255, 255, 0)"
        ]));
    });
});

describe("Footer Navigation", () => {
    it("Footer `.site-map` contains copy of children of `.nav-list`.", async () => {
        const siteMap = await page.$eval('.site-map', el => el.innerText);
        const navList = await page.$eval('.nav-list', el => el.innerText);
        expect(siteMap).toMatch(navList);
    });
});
const puppeteer = require('puppeteer');
const path = require('path');
const browserOptions = {
  headless: true,
  ignoreHTTPSErrors: true,
};

let browser;
let page;
let mockCalled = false;

beforeAll(async () => {
  browser = await puppeteer.launch(browserOptions);
  page = await browser.newPage();
  await page.setRequestInterception(true);
  page.on('request', (request) => {
    if (request.url().match(/api\.coinbase\.com.*eth-eur/i)) {
      mockCalled = true;
      request.respond({
        content: 'application/json',
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: JSON.stringify({ data: { amount: 1.23 } }),
      });
    } else {
      request.continue();
    }
  });
  await page.goto('file://' + path.resolve('./index.html'));
});

afterAll((done) => {
  try {
    this.puppeteer.close();
  } catch (e) {}
  done();
});

describe('API Fetch', () => {
  it('API is called with correct URL params', async () => {
    // set the value of the select
    await page.select('#convert-from', 'eth');
    // set the value of the input
    await page.click('#convert-count', { clickCount: 3 });
    await page.type('#convert-count', '7');
    // set the value of the select2
    await page.select('#convert-to', 'eur');
    // submit the form
    await page.click('button[type="submit"]');
    // check if the fetch function was called with the correct params
    expect(mockCalled).toBeTruthy();
  });
});
describe('Conversion', () => {
  it('App performs currency conversion and displays correct result to user', async () => {
    // set the value of the select
    await page.select('#convert-from', 'eth');
    // set the value of the input
    await page.click('#convert-count', { clickCount: 3 });
    await page.type('#convert-count', '7');
    // set the value of the select2
    await page.select('#convert-to', 'eur');
    // submit the form
    await page.click('button[type="submit"]');
    // // check the result
    const result = await page.$eval('#output', (el) => el.value);
    expect(result).toContain('8.61');
  });
});

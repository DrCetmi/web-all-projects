const JSDOM = require('jsdom').JSDOM;
const fs = require('fs');
const path = require('path');
const { isTypedArray } = require('util/types');
const htmlString = fs.readFileSync(
  path.join(__dirname, '../index.html'),
  'utf8'
);
const dom = new JSDOM(htmlString);
global.window = dom.window;
global.document = dom.window.document;

let randomPassword;
mixedCases =
  /^[A-Za-z0-9\!\@\#\$\%\^\&\*\(\)\_\=\;\§\+\{\}\:\"\<\>\?\\| \[\]\/'\,\.\`\~]/;
unmixedCases =
  /^[a-z0-9\!\@\#\$\%\^\&\*\(\)\_\=\;\§\+\{\}\:\"\<\>\?\\| \[\]\/'\,\.\`\~]/;
describe('Generate Password', () => {
  it('Valid password is generated when page loads', () => {
    const rewireScript = require('../index.js');
    randomPassword = dom.window.document.querySelector('#output').textContent;
    expect(mixedCases.test(randomPassword)).toBe(true);
  });
  it('Generated password is 20 characters long', () => {
    const rewireScript = require('../index.js');
    randomPassword = dom.window.document.querySelector('#output').textContent;
    expect(randomPassword.length).toBe(20);
  });
});
describe('New Password on submit', () => {
  it('When form is submitted, a new password is generated', () => {
    const rewireScript = require('../index.js');
    const form = dom.window.document.querySelector('#password-form');
    form.dispatchEvent(new dom.window.Event('submit'));
    randomPassword2 = dom.window.document.querySelector('#output').textContent;
    console.log(randomPassword2, randomPassword);
    expect(mixedCases.test(randomPassword2)).toBe(true);
    expect(randomPassword2).not.toBe(randomPassword);
  });
  it('Generated password has length defined by user', () => {
    const rewireScript = require('../index.js');
    const form = dom.window.document.querySelector('#password-form');
    dom.window.document.querySelector('#length').value = 10;
    form.dispatchEvent(new dom.window.Event('submit'));
    randomPassword2 = dom.window.document.querySelector('#output').textContent;
    expect(randomPassword2.length).toBe(10);
  });
});
describe('Cases', () => {
  it('If "Use mixed cases" is not checked, the generated password should be lowercase', () => {
    const rewireScript = require('../index.js');
    const form = dom.window.document.querySelector('#password-form');
    dom.window.document.querySelector('#length').value = 30;
    dom.window.document.querySelector('#mixedCases').checked = false;
    form.dispatchEvent(new dom.window.Event('submit'));
    randomPassword3 = dom.window.document.querySelector('#output').textContent;
    expect(unmixedCases.test(randomPassword3)).toBe(true);
  });
});

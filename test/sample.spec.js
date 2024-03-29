import chai from 'chai';
import Actions from '../src/actions.js';
import puppeteer from 'puppeteer';

const expect = chai.expect;

describe('Puppeteer actions test suite', () => {
  context('Open browser', async () => {
    let browser;
    let page;
    before(async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
    });

    it('should visit google', async () => {
      // const browser = await puppeteer.launch();
      // const page = await browser.newPage();
      await page.goto('https://www.google.com');
      expect(page.url()).include('google.com');
      // await browser.close();
    });

    it('should get the text from the "Imagens" element', async () => {
      let elText = await Actions.getTextFromElement(page, '[data-pid="2"]');
      expect(elText).to.eq('Imagens');
    });
    after(async () => {
      await browser.close();
    });
  });
});

import HomePage from '../src/pages/lume_UFRGS/HomePage.js';
import chai from 'chai';
import puppeteer from 'puppeteer';
import index from '../src/index.js';

const expect = chai.expect;

describe('HomePage tests', async () => {
  context('Open browser', async () => {
    let browser;
    let page;
    before(async () => {
      browser = await puppeteer.launch();
      page = await browser.newPage();
      // });
      // before(async () => {
      //   page = await index.getPage();
    });
    it('should access home page', async () => {
      await HomePage.accessHomePage(page);
      expect(page.url()).include('lume.ufrgs.br');
    });

    after(async () => {
      await browser.close();
      console.log('close browser');
    });
  });
});

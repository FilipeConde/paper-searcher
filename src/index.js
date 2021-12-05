import puppeteer from 'puppeteer';
import Actions from './actions.js';

export default class index {
  static getPage = async () => {
    const browser = await puppeteer.launch();
    return await browser.newPage();
  };
  static run = async () => {
    const page = getPage();

    await page.goto('https://www.google.com');
    await Actions.type(page, '[title="Pesquisar"]', 'quality assurance');

    const btnText = await Actions.getTextFromElement(page, '[data-pid="2"]');
    await page.screenshot({ path: 'test.png' });
    console.log(btnText);
    await browser.close();
  };
}

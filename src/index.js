import puppeteer from 'puppeteer';
import Actions from './actions.js';

export default class index {
  static run = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await Actions.type(page, '[title="Pesquisar"]', 'quality assurance'); //page.type('[title="Pesquisar"]', 'quality assurance');
    // const btnText = await page.$eval('[name="btnK"]', (element) => element.value);
    const btnText = await Actions.getTextFromElement(page, '[data-pid="2"]');
    await page.screenshot({ path: 'test.png' });
    console.log(btnText);
    await browser.close();
  };
}

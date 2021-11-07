import puppeteer from 'puppeteer';

const test = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com');
  await page.type('[title="Pesquisar"]', 'quality assurance');
  const element = await page.$('[name="btnK"]');
  const btnText = await page.evaluate((element) => element.value, element);
  console.log(btnText);
  // await page.screenshot({ path: 'test.png' });
  await browser.close();
};

test();

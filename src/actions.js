export default class Actions {
  static async type(page, locator, text) {
    page.type(locator, text);
  }

  static async getTextFromElement(page, locator) {
    return page.$eval(locator, (element) => element.textContent);
  }

  static async click(page, locator) {
    page.click(locator);
  }
}

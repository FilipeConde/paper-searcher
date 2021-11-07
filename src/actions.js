export default class Actions {
  static async type(page, locator, text) {
    return page.type(locator, text);
  }

  static async getTextFromElement(page, locator) {
    return page.$eval(locator, (element) => element.textContent);
  }
}

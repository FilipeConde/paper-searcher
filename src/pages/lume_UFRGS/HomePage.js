import Actions from '../../actions.js';

const url = 'https://lume.ufrgs.br/';
const elements = {
  INPUT: "input[id$='Search_field_query']",
  SEARCH_BTN: 'button[title="Go"]',
};

export default class HomePage {
  static accessHomePage(page) {
    page.goto(url);
  }
  static doSearch(query) {
    Actions.type(page, elements.INPUT, query);
    Actions.click(page, elements.SEARCH_BTN);
  }
}

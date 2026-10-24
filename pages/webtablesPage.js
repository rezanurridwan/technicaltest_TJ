const locators = require('../locators/webTablesLocators');

class WebTablesPage {
  constructor(page){
    this.page = page;
  }
  async open(){
    await this.page.goto('https://demoqa.com/webtables'); 
  }
  async clickAddButton(){
    await this.page.locator(locators.addButton).click();
  }
}
module.exports = WebTablesPage;
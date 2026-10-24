const locators = require('../locators/webtables');

class WebTablesPage {
  constructor(page) {
    this.page = page;
  }
  
  async open() {
    await this.page.goto('https://demoqa.com/webtables');
  }
  async addUser(firstName, lastName, email, age, salary, department) {
    await this.page.click(locators.addButton);
    await this.page.fill(locators.firstNameInput, firstName);
    await this.page.fill(locators.lastNameInput, lastName);
    await this.page.fill(locators.emailInput, email);
    await this.page.fill(locators.ageInput, age.toString());
    await this.page.fill(locators.salaryInput, salary.toString());
    await this.page.fill(locators.departmentInput, department);
    await this.page.click(locators.submitButton);
  }
}

module.exports = WebTablesPage;
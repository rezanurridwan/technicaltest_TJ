const locators = require("../locators/webTablesLocators");
const fs = require('node:fs');
const path = require('node:path');

class WebTablesPage {
  constructor(page) {
    this.page = page;
  }
  async open() {
    await this.page.goto("https://demoqa.com/webtables");
  }
  async clickAddButton() {
    await this.page.locator(locators.addButton).click();
  }
  async firstNameInput(firstName) {
    await this.page.locator(locators.firstNameInput).fill(firstName);
  }
  async lastNameInput(lastName) {
    await this.page.locator(locators.lastNameInput).fill(lastName);
  }
  async emailInput(email) {
    await this.page.locator(locators.emailInput).fill(email);
  }
  async ageInput(age) {
    await this.page.locator(locators.ageInput).fill(age);
  }
  async salaryInput(salary) {
    await this.page.locator(locators.salaryInput).fill(salary);
  }
  async departmentInput(department) {
    await this.page.locator(locators.departmentInput).fill(department);
  }
  async submitButton() {
    await this.page.locator(locators.submitButton).click();
  }

  async takeScreenshot(fileName) {
  const screenshotDir = path.join(__dirname, '../screenshots');

  fs.mkdirSync(screenshotDir, { recursive: true });

  await this.page.screenshot({
    path: path.join(screenshotDir, `${fileName}.png`),
    fullPage: true,
  });
}

}
module.exports = WebTablesPage;

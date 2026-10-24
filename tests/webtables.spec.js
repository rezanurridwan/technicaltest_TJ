const { test } = require('@playwright/test');
const WebTablesPage = require('../pages/webtablesPage');
// const data = require('../data/data.csv');

test('Input data in web tables', async ({page}) => {
  const webTables = new WebTablesPage(page);
  await webTables.open();
  await webTables.clickAddButton();
  await webTables.firstNameInput('John');
  await webTables.lastNameInput('Doe');
  await webTables.emailInput('johndoe@example.com');
  await webTables.ageInput('30');
  await webTables.salaryInput('50000');
  await webTables.departmentInput('Engineering');
  await webTables.submitButton();
  
});
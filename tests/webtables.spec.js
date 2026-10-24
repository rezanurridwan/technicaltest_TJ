const { test } = require('@playwright/test');
const fs = require('node:fs');
const path = require('node:path');
const { parse } = require('csv-parse/sync');

const WebTablesPage = require('../pages/webtablesPage');

const csvPath = path.join(__dirname, '../data/users.csv');

const users = parse(fs.readFileSync(csvPath, 'utf8'), {
  columns: true,
  skip_empty_lines: true,
  trim: true,
});

test('Bulk Insert User di Web Tables', async ({ page }) => {
  const webTables = new WebTablesPage(page);

  await webTables.open();
  await webTables.takeScreenshot('01-webtables-page');

  for (let i = 0; i < users.length; i++) {
    const user = users[i];

    console.log(`Input user ${i + 1}: ${user.firstName} ${user.lastName}`);

    await webTables.clickAddButton();

    await webTables.firstNameInput(user.firstName);
    await webTables.lastNameInput(user.lastName);
    await webTables.emailInput(user.email);
    await webTables.ageInput(user.age);
    await webTables.salaryInput(user.salary);
    await webTables.departmentInput(user.department);

    await webTables.submitButton();

    await page.waitForTimeout(2000); t
    await webTables.takeScreenshot(`user-${i + 1}-submitted`);
  }

});
const { test } = require('@playwright/test');
const WebTablesPage = require('../pages/webtablesPage');

test('Input data in web tables', async ({page}) => {
  const webTables = new WebTablesPage(page);
  await webTables.open();
  await webTables.clickAddButton();
});
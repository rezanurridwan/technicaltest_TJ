const { test } = require('@playwright/test');
const DroppablePage = require('../pages/droppablePage');

test('Drag and drop element', async ({ page }) => {
  const droppablePage = new DroppablePage(page);

  await droppablePage.open();

  await droppablePage.dragAndDrop();

  await page.waitForTimeout(1000);
});
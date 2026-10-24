
const { test, expect } = require('@playwright/test');
const ResizablePage = require('../pages/resizablePage');

test('Resize element to 400 x 200 pixels', async ({ page }) => {
  const resizablePage = new ResizablePage(page);

  await resizablePage.open();

  const before = await resizablePage.getBoxSize();
  console.log('Ukuran awal:', before);

  await resizablePage.takeScreenshot('resizable-before');

  const after = await resizablePage.resizeTo(400, 200);

  console.log('Ukuran akhir:', after);

  await resizablePage.takeScreenshot('resizable-after');

  expect(after.width).toBe(400);
  expect(after.height).toBe(200);
});

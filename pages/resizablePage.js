const locators = require("../locators/resizableLocators");
const fs = require("node:fs");
const path = require("node:path");

class ResizablePage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto("https://demoqa.com/resizable");
  }

  async getBoxSize() {
    return this.page.locator(locators.resizeBox).evaluate((element) => {
      const rect = element.getBoundingClientRect();

      return {
        width: rect.width,
        height: rect.height,
      };
    });
  }


async resizeTo(targetWidth, targetHeight) {
  const box = this.page.locator(locators.resizeBox);
  const handle = box.locator('.react-resizable-handle-se');

  const initial = await box.boundingBox();
  const handleBox = await handle.boundingBox();

  if (!initial || !handleBox) {
    throw new Error('Box atau handle tidak ditemukan.');
  }

  const startX = handleBox.x + handleBox.width / 2;
  const startY = handleBox.y + handleBox.height / 2;

  await this.page.mouse.move(startX, startY);
  await this.page.mouse.down();

  await this.page.mouse.move(
    startX + targetWidth - initial.width,
    startY + targetHeight - initial.height,
    { steps: 30 }
  );

  await this.page.mouse.up();

  return await this.getBoxSize();
}

  





  async takeScreenshot(fileName) {
    const screenshotDir = path.join(__dirname, "../screenshots/resizable");

    fs.mkdirSync(screenshotDir, { recursive: true });

    await this.page.screenshot({
      path: path.join(screenshotDir, `${fileName}.png`),
      fullPage: true,
    });
  }
}

module.exports = ResizablePage;

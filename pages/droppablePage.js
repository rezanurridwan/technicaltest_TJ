const locators = require('../locators/droppableLocators');
const fs = require('node:fs');
const path = require('node:path');

class DroppablePage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto('https://demoqa.com/droppable');
  }

  async dragAndDrop() {
  const simpleTab = this.page.getByRole('tabpanel', {
    name: 'Simple',
  });

  const draggable = simpleTab.locator('#draggable');

  const droppable = this.page.locator(
    "xpath=//div[@class='simple-drop-container']//following-sibling::div[@id='droppable']"
  );

  await draggable.dragTo(droppable);

  await this.page.waitForTimeout(500);

  console.log('Drop text:', await droppable.innerText());
}
}

module.exports = DroppablePage;
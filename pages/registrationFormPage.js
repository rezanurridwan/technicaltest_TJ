const locators = require("../locators/registrationFormLocators");
const fs = require("node:fs");
const path = require("node:path");

class RegistrationFormPage {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto("https://demoqa.com/automation-practice-form");
  }

  async fillFirstName(firstName) {
    await this.page.locator(locators.firstNameInput).fill(firstName);
  }

  async fillLastName(lastName) {
    await this.page.locator(locators.lastNameInput).fill(lastName);
  }

  async fillEmail(email) {
    await this.page.locator(locators.emailInput).fill(email);
  }

  async fillMobile(mobile) {
    await this.page.locator(locators.mobileInput).fill(mobile);
  }

  async selectGenderMale() {
    await this.page.locator(locators.genderMale).click();
  }

  async fillSubjects(subjects) {
    await this.page.locator(locators.subjectsInput).fill(subjects);
  }

  async selectHobbies() {
    await this.page.locator(`input[id="${locators.hobies}"]`).check();
  }

  async fillAddress(address) {
    await this.page.locator(locators.currentAddressInput).fill(address);
  }

  async selectDateOfBirth(date) {
    await this.page.locator(locators.dateOfBirthInput).click();

    await this.page
      .locator(".react-datepicker__month-select")
      .selectOption({ label: date.month });

    await this.page
      .locator(".react-datepicker__year-select")
      .selectOption(date.year);

    await this.page
      .locator(
        `.react-datepicker__day--${date.day.padStart(3, "0")}:not(.react-datepicker__day--outside-month)`,
      )
      .click();
  }

  async selectSubject(subject) {
    const input = this.page.locator(locators.subjectsInput);

    await input.fill(subject);

    const option = this.page
      .locator(".subjects-auto-complete__option")
      .filter({ hasText: subject });

    await option.click();
  }

  async selectHobbySports() {
    await this.page.locator(locators.hobbySports).click();
  }

  async uploadPicture(filePath) {
    await this.page.locator(locators.pictureInput).setInputFiles(filePath);
  }

  async selectState(state) {
    await this.page.locator(locators.stateDropdown).click();

    await this.page.locator("#state").getByText(state, { exact: true }).click();
  }

  async selectCity(city) {
    await this.page.locator(locators.cityDropdown).click();

    await this.page.locator("#city").getByText(city, { exact: true }).click();
  }

  async submitForm() {
    await this.page.locator(locators.submitButton).click();
  }

  async takeScreenshot(fileName) {
    const screenshotDir = path.join(__dirname, "../screenshots/registration");

    fs.mkdirSync(screenshotDir, { recursive: true });

    await this.page.screenshot({
      path: path.join(screenshotDir, `${fileName}.png`),
      fullPage: true,
    });
  }
}

module.exports = RegistrationFormPage;

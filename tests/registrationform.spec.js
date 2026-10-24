const { test, expect } = require("@playwright/test");
const path = require("node:path");

const RegistrationFormPage = require("../pages/registrationFormPage");
const user = require("../data/registration.json");

test("Complete registration form", async ({ page }) => {
  const registrationForm = new RegistrationFormPage(page);

  await registrationForm.open();
  await registrationForm.fillFirstName(user.firstName);
  await registrationForm.fillLastName(user.lastName);
  await registrationForm.fillEmail(user.email);
  await registrationForm.selectGenderMale();
  await registrationForm.fillMobile(user.mobile);
  await registrationForm.fillAddress(user.address);
  await registrationForm.selectDateOfBirth(user.dateOfBirth);
  await registrationForm.selectHobbySports();
  const picturePath = path.join(__dirname, "../data/uploads/koci.jpeg");

  await registrationForm.uploadPicture(picturePath);
  await registrationForm.selectSubject(user.subject);
  await registrationForm.selectState(user.state);
  await registrationForm.selectCity(user.city);
  await page.waitForTimeout(3000);
  await registrationForm.takeScreenshot("registration-before-submit");
  await registrationForm.submitForm();

  const modal = page.locator(".modal-content");

  await expect(modal).toBeVisible();
  await expect(modal).toContainText("Thanks for submitting the form");
  await expect(modal).toContainText(user.firstName);
  await expect(modal).toContainText(user.email);
  await page.waitForTimeout(3000);
  await registrationForm.takeScreenshot("registration-verified");
});

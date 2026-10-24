const { test } = require("@playwright/test");
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
  await registrationForm.selectSubject(user.subject);
  await registrationForm.selectState(user.state);
  await registrationForm.selectCity(user.city);
  await registrationForm.submitForm();

  await page.waitForTimeout(1000);

  await registrationForm.takeScreenshot("registration-after-submit");
});

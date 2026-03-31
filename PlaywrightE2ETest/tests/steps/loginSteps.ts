import { test, expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();
Given('the user is on the login page', async ({page}) => {
  // Step: Given the user is on the login page
  // From: tests\features\login.feature:3:3
  await page.goto("https://www.saucedemo.com");
});

When('the user enters username', async ({page}) => {
  // Step: When the user enters username
  // From: tests\features\login.feature:4:3
  await page.locator('#user-name').fill('standard_user');
});

When('the user enters password', async ({page}) => {
  // Step: And the user enters password
  // From: tests\features\login.feature:5:3
  await page.locator('#password').fill('secret_sauce');
});

When('clicks the login button', async ({page}) => {
  // Step: And clicks the login button
  // From: tests\features\login.feature:6:3
    await page.getByText("Login").click();
});

Then('the user will be logged in successfully', async ({page}) => {
  // Step: Then the user will be logged in successfully
  // From: tests\features\login.feature:7:3
  // Step: Then the user will be redirected to the product page
  // From: tests\features\login.feature:8:3
    const actualURL=page.url();
    await expect(actualURL).toBe("https://www.saucedemo.com/inventory.html")
});

Then('the user will see an error message', async ({page}) => {
  // Step: Then the user will see an error message
  // From: tests\features\login.feature:15:5
  const errorMessage = await page.locator('[data-test="error"]').textContent();
  await expect(errorMessage).toContain("Username and password do not match any user in this service");

});
Then('the user will be redirected to the product page', async ({page}) => {
  // Step: Then the user will be redirected to the product page
  // From: tests\features\login.feature:11:3
});

Then('user is back to login page', async ({page}) => {
  // Step: And user is back to login page
  // From: tests\features\login.feature:20:5
});

When('the user enters invalid username', async ({page}) => {
  // Step: When the user enters invalid username
  // From: tests\features\login.feature:25:3
});

When('the user enters invalid password', async ({page}) => {
  // Step: And the user enters invalid password
  // From: tests\features\login.feature:26:3
});

Then('the user will see an error message as no user found', async ({page}) => {
  // Step: Then the user will see an error message as no user found
  // From: tests\features\login.feature:28:5
});

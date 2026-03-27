import { test, expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

 const { Given, When, Then } = createBdd();
// Given('User is on login page', async ({page}) => {
//   // Step: Given User is on login page        
//   // From: tests\features\login.feature:3:9   
//   await page.goto("https://www.saucedemo.com");

// });

// When('user enters username', async ({page}) => {
//   // Step: When user enters username
//   // From: tests\features\login.feature:4:9
//   await page.locator('#user-name').fill('standard_user');

// });

// When('user enters password', async ({page}) => {
//   // Step: And user enters password
//   // From: tests\features\login.feature:5:9
//   await page.locator('#password').fill('secret_sauce');

// });

// When('user clicks on login button', async ({page}) => {
//   // Step: And user clicks on login button
//   // From: tests\features\login.feature:6:9
//   await page.locator('#login-button').click();
// });

// Then('user is logged in succesfully', async ({page}) => {
//   // Step: Then user is logged in succesfully
//   // From: tests\features\login.feature:7:5
//   const actualURL=page.url();
//   await expect(actualURL).toBe("https://www.saucedemo.com/inventory.html")
// });



// Given('use is in login page', async ({page}) => {
//   // Step: Given use is in login page
//   // From: tests\features\login.feature:10:9
//    await page.goto('https://www.saucedemo.com');
// });

// When('user enters username as {string}', async ({page}, username) => {
//   // Step: When user enters username as "performce_glitch_user";        
//   // From: tests\features\login.feature:11:9
//   await page.locator('#user-name').fill(username);
// });

// When('user enter password as {string}', async ({page}, password) => {
//   // Step: And user enter password as "secret_sauce"    
//   // From: tests\features\login.feature:12:9
//     await page.locator('#password').fill(password);
// });

// When('user clicks on the login button', async ({page}) => {
//   // Step: And user clicks on the login button
//   // From: tests\features\login.feature:13:9
//     await page.locator('#login-button').click();
// });

// Then('the user is logged in succesfully', async ({page}) => {
//   // Step: Then the user is logged in succesfully
//   // From: tests\features\login.feature:14:9
//     const actualURL=page.url();
//     await expect(actualURL).toBe("https://www.saucedemo.com/inventory.html")

// });


// Given('a user is on the login page', async ({page}) => {
//   // Step: Given a user is on the login page
//   // From: tests\features\login.feature:17:9
//    await page.goto("https://www.saucedemo.com");
// });

// When('the user enters username as {string}', async ({page}, arg: string) => {
//   // Step: When the user enters username as 'standard_user'
//   // From: tests\features\login.feature:18:9
//     await page.locator('#user-name').fill(arg);
// });

// When('the user enters password as {string}', async ({page}, arg: string) => {
//   // Step: And the user enters password as 'secret_sauce'
//   // From: tests\features\login.feature:19:9
//     await page.locator('#password').fill(arg);
// });

// When('the user clicks on the login button', async ({page}) => {
//   // Step: And the user clicks on the login button
//   // From: tests\features\login.feature:20:9
//     await page.locator('#login-button').click();
// });

// Then('the user is logged in succesfully', async ({page}) => {
//   // Step: Then the user is logged in succesfully
//   // From: tests\features\login.feature:21:9
//     const actualURL=page.url();
//     await expect(actualURL).toBe("https://www.saucedemo.com/inventory.html")
// });


// Then('the user should see the products page', async ({page}) => {
//   // Step: And the user should see the products page
//   // From: tests\features\login.feature:22:9
//     const actualURL=page.url();
//     await expect(actualURL).toBe("https://www.saucedemo.com/inventory.html")

// });

Given('a user is on the login page', async ({page}) => {
  // Step: Given a user is on the login page
  // From: tests\features\login.feature:34:9
   await page.goto("https://www.saucedemo.com");
});

When('the user enters {string} and <password>\'', async ({page}, arg, dataTable) => {
  // Step: When the user enters '<username>' and <password>'
  // From: tests\features\login.feature:35:9
  const userLoginData = dataTable.hashes();
  const user = userLoginData[0].username;
  const pass = userLoginData[0].password;
  await page.locator('#user-name').fill(user);
  await page.locator('#password').fill(pass);
});

When('the user clicks on the login button', async ({page}) => {
  // Step: And the user clicks on the login button
  // From: tests\features\login.feature:43:9
   await page.locator('#login-button').click();

});

Then('the user is logged in succesfully', async ({page}) => {
  // Step: Then the user is logged in succesfully
  // From: tests\features\login.feature:44:9
   const actualURL=page.url();
   await expect(actualURL).toBe("https://www.saucedemo.com/inventory.html")

});

Then('the user should see the products page', async ({page}) => {
  // Step: And the user should see the products page
  // From: tests\features\login.feature:45:9
  let actualTitle=await page.getByText('Products').textContent();
  await expect(actualTitle).toBe('Products');

});
import { test, expect } from "@playwright/test";

test("To validate the login functionality with valid credentials", async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    
    await page.getByRole("button",{name:"Login"}).click();

    let actualValue=await page.getByText("Products").textContent();
    await expect.soft(actualValue).toBe("Products");//Hard Assetions
});

test("To validate the login functionality with invalid credentials", async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
    await page.getByPlaceholder("Username").fill("standard_user");
    await page.getByPlaceholder("Password").fill("secret_sauce");
    await page.getByRole("button",{name:"Login"}).click();                                              
    let actualValue=await page.getByText("Products").textContent();
    await expect.soft(actualValue).toBe("Products");//Hard Assetions
});


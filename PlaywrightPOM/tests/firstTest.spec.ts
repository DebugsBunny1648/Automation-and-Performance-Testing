import { test, expect ,Page} from "@playwright/test";
import { LoginPOM } from "../pages/login";

let page:Page;
let loginPage:LoginPOM;

test.beforeAll(async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    loginPage=new LoginPOM(page);
})

test("To validate the login functionality with valid credentials", async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
    // await page.getByPlaceholder("Username").fill("standard_user");
    // await page.getByPlaceholder("Password").fill("secret_sauce");
    
    // await page.getByRole("button",{name:"Login"}).click();
    // let loginPage: LoginPOM
    // loginPage=new LoginPOM(page);
    loginPage.perfromLoginAction("standard_user","secret_sauce");

    let actualValue=await page.getByText("Products").textContent();
    await expect.soft(actualValue).toBe("Products");//Hard Assetions
    console.log("Test Case 1")
});

test("To validate the login functionality with invalid credentials", async ({ page }) => {
    await page.goto("https://www.saucedemo.com");
    // await page.getByPlaceholder("Username").fill("standard_user");
    // await page.getByPlaceholder("Password").fill("secret_sauce");
    // await page.getByRole("button",{name:"Login"}).click();        
    //  let loginPage: LoginPOM
    // loginPage=new LoginPOM(page);
    loginPage.perfromLoginAction("locked_out_user","secret_sauce");
   await expect(page.locator("h3[data-test='error']"))
   .toHaveText("Epic sadface: Sorry this user has been locked out.");
   console.log("Test case 2")
});

test.afterEach(async ({page})=>{
    page.close();
});
test.afterAll(async ({browser})=>{
   await console.log("After all");
});

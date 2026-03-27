import {test, expect, Page} from "@playwright/test";
import { LoginPOM } from "../pages/login";
import { read } from "fs";
import { readExcelData } from "../utils/excelReader";

interface LoginData{
    username: string;
    password: string;
    expectedMessage: string;
}

let page:Page;
let loginPage:LoginPOM;
const loginUsers: LoginData[]=readExcelData("Login.xlsx","Sheet1");

test.beforeEach(async ({page})=>{
    await page.goto("https://www.saucedemo.com/");
    loginPage=new LoginPOM(page);
});

loginUsers.forEach(data =>{
    test(`Login test with username: ${data.username} and password: ${data.password}`, async ({ page }) => {
        await loginPage.perfromLoginAction(data.username,data.password);
        if(data.expectedMessage==="Products"){
            let actualValue=await page.getByText("Products").textContent();
            await expect.soft(actualValue).toBe(data);//Hard Assetions
        }
        else{
            await expect(page.locator("h3[data-test='error']")).toHaveText(data.expectedMessage);
        }
    });
});
import{test,expect} from "@playwright/test";
test("Test lucky page",async({page})=>{
    await page.goto("https://www.google.com/"); 
    await page.locator("//div[contains(@value=\"I'm Feeling Lucky\")]").click();
    await page.waitForTimeout(10000);
});
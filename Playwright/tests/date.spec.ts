import {test,expect} from "@playwright/test";

test("Test date picking",async({page})=>{
   await page.goto("https://demo.automationtesting.in/Datepicker.html");
// await page.locator("#datepicker2").fill("12/12/2026");
//     await page.locator

    await page.locator("#datepicker2").click();
    await page.locator("//select[@title='Change the year']").selectOption("2020");
    await page.locator("//select[@title='Change the month']").selectOption("November");
    await page.locator("a",{hasText:"23"}).click();

   await page.waitForTimeout(20000);
});
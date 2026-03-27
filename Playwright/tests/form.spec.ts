import { test, expect } from "@playwright/test";
test("Test Register Page",async({page})=>{
    await page.goto("https://demo.automationtesting.in/Register.html");
    await page.getByPlaceholder("First Name").fill("John");
    await page.getByPlaceholder("Last Name").fill("Doe");
    await page.locator("textarea[ng-model='Adress']").fill("123 Main Street");
    await page.locator("input[type='email']").fill("robot.automation@example.com");
    await page.locator("input[type='tel']").fill("1234567890");

    const totalGenders=await page.locator("input[name='radioptions']");
    console.log("Total Genders: "+await totalGenders.count());

    for(let i=0;i<await totalGenders.count();i++){
        const rowValue=totalGenders.nth(i);
        const genderValue=await rowValue.getAttribute("value");
        console.log("Gender Value: "+genderValue);
        if(genderValue==="FeMale"){
            await rowValue.check();
            break;
        }
    }

    const totalHobbies=await page.locator("input[type='checkbox']");
    console.log("Total Hobbies: "+await totalHobbies.count());  

    for(let i=0;i<await totalHobbies.count();i++){
        const rowValue=totalHobbies.nth(i);
        const hobbyValue=await rowValue.getAttribute("value");
        console.log("Hobby Value: "+hobbyValue);
        if(hobbyValue==="Cricket" || hobbyValue==="Hockey"){
            await rowValue.check();
            continue;
        }
}
await page.waitForTimeout(10000);

});
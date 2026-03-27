import {test,expect, BrowserContext, Page} from "@playwright/test";
test("Handling Windows",async({ browser })=>{
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();

   await page.goto("https://demo.automationtesting.in/Windows.html");
    const parentPage = page.url();
    console.log(`Parent Page URL: ${parentPage}`);
    const [newPage] = await Promise.all([
        context.waitForEvent("page"),
        page.locator('button:has-text("click")')
    ]);
    await newPage.waitForLoadState();
    console.log(`Child Page URL: ${newPage.url()}`);
    await newPage.locator('a:has-text("Selenium")').click();
    await newPage.waitForTimeout(5000);
    await page.bringToFront();
    await page.locator("//a[@href='#Separate']").click();
    await page.waitForTimeout(5000);

});

test('Handling multiple windows',async({browser})=>{
    const context: BrowserContext = await browser.newContext();
    const page: Page = await context.newPage();
    await page.goto("https://demo.automationtesting.in/Windows.html");
    await page.locator("//a[@href='#Multiple']").click();
    const parentPage = page.url();
    console.log(`Parent Page URL: ${parentPage}`);
    const newPages: any[] = [];
    context.on('page', async (Page) => {
        await page.waitForLoadState();
        newPages.push(page);
    }); 

    await page.click("//button[@onclick='multiplewindow()']");
    await page.waitForTimeout(5000);
    const allPages = context.pages();
    console.log(`Total Tabs opened are :  `,allPages.length);
    let indexPage = page;
    for(const currentPage of allPages){
        console.log(await currentPage.title());
        if(await currentPage.title() === "Index"){
            indexPage = currentPage;
            break;
        }

}  
    await indexPage.bringToFront();
    await indexPage.locator("//input[@id='email']").fill("test@example.com");
    await indexPage.waitForTimeout(5000);
    await indexPage.close();

    await page.bringToFront();
    await page.waitForTimeout(5000);
});
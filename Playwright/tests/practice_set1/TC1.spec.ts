import { test, expect }  from '@playwright/test';


// TC_EMT_01 - No input → Error
test('TC_EMT_01 - Validate error when no location entered', async ({ page }) => {
    await page.goto("https://www.easemytrip.com/hotels");
    await page.locator("//div[@class='htl_location shwbx']").click();
    await page.click("#btnSearch");

    await page.waitForTimeout(3000);
    const ans= await page.locator("//div[@id='locationerror']/child::div").innerText();
    console.log(ans);
    await expect(ans).toContain("Please Enter");
});



//  TC_EMT_02 - Valid search (Pune)
test('TC_EMT_02 - Valid search with location Pune', async ({ page }) => {

  await page.goto("https://www.easemytrip.com/hotels");
  await page.locator('//div[@class="htl_location shwbx"]').click();
  await page.locator('//input[@aria-label="Enter City Name, Location, or Specific hotel"]').pressSequentially('Delhi', { delay: 100 });
  await page.locator("#autohotelCTDELcity0").click();
  await page.locator('#btnSearch').click();
  await page.waitForTimeout(2000);
  await expect(page).toHaveURL(/city=Delhi/);
});

// 
test('TC_EMT_03 - To valiate checkin by choosing date' ,async ({page})=>{
  await page.goto("https://www.easemytrip.com/hotels");
  await page.locator('//div[@class="htl_location shwbx"]').click();
  await page.locator('//input[@aria-label="Enter City Name, Location, or Specific hotel"]').pressSequentially('Delhi', { delay: 100 });
  await page.locator("#autohotelCTDELcity0").click();
  await page.locator('#htl_dates').click();
  await page.locator('select.ui-datepicker-month').selectOption({label:'Apr'});
  await page.locator('select.ui-datepicker-year').selectOption({label:'2026'});
  await page.locator("//a[@class='ui-state-default' and text()='12']").first().click();
  await page.waitForTimeout(2000);
  await page.locator("//a[@class='ui-state-default' and text()='18']").nth(1).click();
  await page.waitForTimeout(2000);
  await page.click('#btnSearch');
  await expect(page.locator("text=Properties")).toBeVisible();
  await page.waitForTimeout(5000);
});


 // Guests
test('TC_EMT_04 - Select guests and rooms', async ({ page }) => {
  await page.goto("https://www.easemytrip.com/hotels");
  await page.locator('span.appendRight10').click();
  await page.waitForTimeout(2000);
  let guest:any=6;
  let comp:any=await page.locator("#Adults_room_1_1").innerText();
  while(comp<guest){
    await page.locator('#Adults_room_1_1_plus').click();
    guest--;
  }
  console.log(guest);
  await page.click('#btnSearch');
  await page.waitForTimeout(2000);

});

test('TC_5 validate adding room for booking', async ({page})=>{
   await page.goto("https://www.easemytrip.com/hotels");
  await page.locator('span.appendRight10').click();
  await page.waitForTimeout(2000);
  let guest:any=6;
  let comp:any=await page.locator("#Adults_room_1_1").innerText();
  while(comp<guest){
    await page.locator('#Adults_room_1_1_plus').click();
    guest--;
  }
  console.log(guest);
  await page.locator('#addhotelRoom').click();
  await page.locator('#exithotelroom').click();
  await page.click('#btnSearch');
  await page.waitForTimeout(2000);

});

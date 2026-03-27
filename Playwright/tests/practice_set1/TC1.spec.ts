import { test, expect }  from '@playwright/test';


// // TC_EMT_01 - No input → Error
// test('TC_EMT_01 - Validate error when no location entered', async ({ page }) => {
//     await page.goto("https://www.easemytrip.com/hotels");
//     await page.locator("//div[@class='htl_location shwbx']").click();
//     await page.click("#btnSearch");

//     await page.waitForTimeout(3000);
//     const ans= await page.locator("//div[@id='locationerror']/child::div").innerText();
//     console.log(ans);
//     await expect(ans).toContain("Please Enter");
// });



//  TC_EMT_02 - Valid search (Haryana)
test('TC_EMT_02 - Valid search with location Haryana', async ({ page }) => {

await page.goto("https://www.easemytrip.com/hotels");

// await page.locator('//div[@class="htl_location shwbx"]').click();
// await page.locator('//input[@aria-label="Enter City Name, Location, or Specific hotel"]').fill('Haryana');

  await page.click('#fromCity'); // opens hotel city field
  await page.fill('#fromCity', 'Mumbai');
  await page.keyboard.press('Enter');
  await page.click('#checkIn'); 
  await page.click("//td[@data-date='2026-04-10']");   // example date
  await page.click("//td[@data-date='2026-04-12']");

  // Guests
  await page.click('#travellerAndClass');
  await page.click("//li[text()='2 Adults']");
  await page.click("//button[text()='Done']");

  // Search
  await page.click('#searchHotelBtn');

  // Check results loaded
  await expect(page.locator('.htlDtl')).toBeVisible();
});
// // await page.locator('//div[@id="autohotelCTPNQcity0"]').click();
// await page.fill('input[name="checkin"]', '2026-03-20');
// await page.fill('input[name="checkout"]', '2026-03-25');

// await page.locator("//input[@aria-label='Enter City Name, Location, or Specific hotel']").click()
//   await page.locator("//input[@aria-label='Enter City Name, Location, or Specific hotel']").fill('Pune')
//   await page.locator("//div[@id='autohotelCTPNQcity0']").click()
// //   await page.fill('input[name="checkin"]', '2026-03-20');
//   await page.fill('input[name="checkout"]', '2026-03-25');

//   await page.click('button:has-text("Search")');

//   await expect(page.locator('text=hotels')).toBeVisible(); // adjust selecto

/*
// TC_EMT_03 - City only (Ranchi)
test('TC_EMT_03 - Search with city Ranchi', async ({ page }) => {

  await page.click('text=Hotels');

  await page.fill('input[placeholder="City, Location, Hotel"]', 'Ranchi');
  await page.fill('input[name="checkin"]', '2026-03-20');
  await page.fill('input[name="checkout"]', '2026-03-25');

  await page.click('button:has-text("Search")');

  await expect(page.locator('text=hotels')).toBeVisible();
});
*/

/*
// TC_EMT_04 - Location (Hyderabad)
test('TC_EMT_04 - Search with Hyderabad', async ({ page }) => {

  await page.click('text=Hotels');

  await page.fill('input[placeholder="City, Location, Hotel"]', 'Hyderabad');
  await page.fill('input[name="checkin"]', '2026-03-20');
  await page.fill('input[name="checkout"]', '2026-03-25');

  await page.click('button:has-text("Search")');

  await expect(page.locator('text=hotels')).toBeVisible();
});
*/

/*
// TC_EMT_05 - Specific Hotel (Marriott)
test('TC_EMT_05 - Search specific hotel Marriott', async ({ page }) => {

  await page.click('text=Hotels');

  await page.fill('input[placeholder="City, Location, Hotel"]', 'Marriott');
  await page.fill('input[name="checkin"]', '2026-03-20');
  await page.fill('input[name="checkout"]', '2026-03-25');

  await page.click('button:has-text("Search")');

  await expect(page.locator('text=Marriott')).toBeVisible();
});
*/
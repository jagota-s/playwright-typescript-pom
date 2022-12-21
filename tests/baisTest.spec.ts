import {test, expect, Locator} from "@playwright/test";

test("first playwright test", async ({page}) => {

await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

// CSS & Xpath

await page.locator("#username").type("rahulshetty");
await page.locator("#password").type("learning");
await page.locator("#signInBtn").click(); 
const error = await page.locator("[style*='block']").textContent();
expect(error).toContain("Incorrect");
console.log(error);
const username: Locator = page.locator("#username");
await username.fill("");
await username.fill("rahulshettyacademy");
await page.locator("#signInBtn").click();
await page.waitForLoadState("networkidle");
// await page.pause();
const phoneText: string | null = await page.locator(".card-body a").first().textContent();
console.log(phoneText);

});

test("first playwright test12", async ({page}) => {
 


});

test.only("Child elements", async ({page}) => {

//  const context = await browser.newContext();
//  const page = await context.newPage();
//  await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");
//  const documentLink = page.locator("[href*='documents-request']");

//  const [newPage] = await Promise.all([
//  context.waitForEvent('page'),
//  documentLink.click()
//  ])

// const text = await newPage.locator(".red").textContent();
// console.log(text);
// const username: Locator = page.locator("#username");
// username.type("rahulshettyacademy.com");
// await page.pause();
await page.goto("https://www.rahulshettyacademy.com/loginpagePractise/");

test("Child elementsq", async ({ page }) => {});
})

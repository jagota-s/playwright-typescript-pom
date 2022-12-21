import { test, expect, Locator, request } from "@playwright/test";
import { APiUtils }from "../utils/APiUtils";
const loginPayLoad = {
  userEmail: "anshika@gmail.com",
  userPassword: "Iamking@000",
};
const orderPayLoad = {
  orders: [{ country: "Cuba", productOrderedId: "6262e95ae26b7e1a10e89bf0" }],
};
// let apiUtils;
let responseToken;
let response;
let orderResponse;
test.beforeAll(async () => {
   
const apiContext = await request.newContext();
  const apiUtils = new APiUtils(apiContext, loginPayLoad);
  responseToken = await apiUtils.getToken();
  response = await apiUtils.getLoginResponse();
  orderResponse = await apiUtils.createOrder(orderPayLoad);
});

//create order is success
test("@API Place the order", async ({ page }) => {
await page.pause();
  page.addInitScript((value) => {
    window.localStorage.setItem("token", value);
  }, responseToken);
  await page.goto("https://rahulshettyacademy.com/client/");
  await page.locator("button[routerlink*='myorders']").click();
  await page.locator("tbody").waitFor();
  const rows = await page.locator("tbody tr");

  for (let i = 0; i < (await rows.count()); ++i) {
    const rowOrderId = await rows.nth(i).locator("th").textContent();
    if (orderResponse.orderId.includes(rowOrderId)) {
      await rows.nth(i).locator("button").first().click();
      break;
    }
  }
  const orderIdDetails = await page.locator(".col-text").textContent();
  //await page.pause();
  expect(orderResponse.orderId.includes(orderIdDetails)).toBeTruthy();
});

//Verify if order created is showing in history page
// Precondition - create order -

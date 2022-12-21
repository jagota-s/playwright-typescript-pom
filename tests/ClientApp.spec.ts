import test, { expect } from "../base_fwk/fixtures/baseTest"
import { testConfig } from "./testConfig";

test("first playwright test12", async ({loginPage, dashboardPage, cartPage, ordersReviewPage, ordersHistoryPage }) => {

  await loginPage.goTo();
  // await loginPage.validLogin(testConfig.username, testConfig.password);

  // await dashboardPage.searchProductAddCart("Zara Coat 3");
  // await dashboardPage.navigateToCart();

  // await cartPage.VerifyProductIsDisplayed("Zara Coat 3");
  // await cartPage.Checkout();

  // await ordersReviewPage.searchCountryAndSelect("ind", "India");
  // const orderId = await ordersReviewPage.SubmitAndGetOrderId();

  // console.log(orderId);
  // await dashboardPage.navigateToOrders();
  // await ordersHistoryPage.searchOrderAndSelect(orderId);
  // expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();

});

import test, { expect } from "../base_fwk/fixtures/baseTest"
import { testData } from "./testData";

test.describe('E2E test flows', () => {

  test("Product Checkout", async ({ page, loginPage, dashboardPage, cartPage, ordersReviewPage, ordersHistoryPage }, testinfo) => {
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);

    await dashboardPage.searchProductAddCart("Zara Coat 3");
    await dashboardPage.navigateToCart();

    await cartPage.verifyProductIsDisplayed("Zara Coat 3");
    await cartPage.clickCheckout();

    await ordersReviewPage.searchCountryAndSelect("ind", "India");
    await ordersReviewPage.SubmitAndGetOrderId();

    await dashboardPage.navigateToOrders();
    await ordersHistoryPage.searchOrderAndSelect();
  });
})

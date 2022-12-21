import test, { expect } from "../base_fwk/fixtures/baseTest"
import { OrdersReviewPage } from "../pageObjects/OrdersReviewPage/OrdersReviewPage";
//import { POManager } from "../pageObjects/POManager"
import { testConfig } from "./testConfig";
//import { expect } from "@playwright/test"
//import { test, expect, type Page } from '@playwright/test';

test.describe('two tests', () => {
  console.log("in describe from spec file");
  test("first playwright test12", async ({ page, loginPage, dashboardPage, cartPage, ordersReviewPage, ordersHistoryPage }) => {
    // test("first playwright test12", async ({ }) => {
    // test("first playwright test12", async ({ page }) => {
    console.log("test s")
    await loginPage.goTo();
    await loginPage.validLogin(testConfig.username, testConfig.password);
    //await dashboardPage.
    await dashboardPage.testDashboard();
    await cartPage.testCartPage();
    await ordersHistoryPage.testOrdersHistory();
    await ordersReviewPage.testOrdersReviewPage();
    // const value = await dashboardPage.getValue("sumit");
    // console.log(value);




  });

});



// });

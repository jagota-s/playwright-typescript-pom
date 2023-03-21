import AxeBuilder from "@axe-core/playwright";
import test, { expect } from "../base_fwk/fixtures/baseTest"
import { OrdersReviewPage } from "../pageObjects/OrdersReviewPage/OrdersReviewPage";
//import { POManager } from "../pageObjects/POManager"
import { testData } from "./testData";
//import { expect } from "@playwright/test"
//import { test, expect, type Page } from '@playwright/test';

test.describe('two tests', () => {
  console.log("in describe from spec file");
  test("first playwright test12", async ({ page, context, browser, loginPage, dashboardPage, cartPage, ordersReviewPage, ordersHistoryPage }) => {
    console.log("test start")
    await loginPage.goTo();
    console.log("test ends")

    // await loginPage.validLogin(testConfig.username, testConfig.password);
    // //await dashboardPage.
    // await dashboardPage.testDashboard();
    // await cartPage.testCartPage();
    // await ordersHistoryPage.testOrdersHistory();
    // await ordersReviewPage.testOrdersReviewPage();
    // const value = await dashboardPage.getValue("sumit");
    // console.log(value);
  });

});


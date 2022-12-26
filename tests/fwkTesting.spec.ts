import test, { expect } from "../base_fwk/fixtures/baseTest"
import { OrdersReviewPage } from "../pageObjects/OrdersReviewPage/OrdersReviewPage";
//import { POManager } from "../pageObjects/POManager"
import { testData } from "./testData";
//import { expect } from "@playwright/test"
//import { test, expect, type Page } from '@playwright/test';

test.describe('two tests', () => {
  console.log("in describe from spec file");
  test("first playwright test12", async ({ page, context, browser, loginPage, dashboardPage, cartPage, ordersReviewPage, ordersHistoryPage }) => {
    // test("first playwright test12", async ({ }) => {
    test.setTimeout(120000);
    // test("first playwright test12", async ({ page }) => {
    console.log("test start")
    // await page.goto('https://example.com');



    // await page.route("https://rahulshettyacademy.com/api/ecom/product/get-all-products", async (route) => {
    //   //console.log("<<"  + route.request().postData())
    //   const response = await route.fetch();
    //   const json = await response.json();
    //   json.data[0].productName = "supermannnnnn";
    //   json.data[1].productName = "batmann";

    //   await route.fulfill({ response, json });
    // })

    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/product/get-all-products");


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



// });

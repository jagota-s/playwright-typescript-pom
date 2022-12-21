import test, { expect } from "../base_fwk/fixtures/baseTest"
import { OrdersReviewPage } from "../pageObjects/OrdersReviewPage/OrdersReviewPage";
//import { POManager } from "../pageObjects/POManager"
import { testConfig } from "./testConfig";
//import { expect } from "@playwright/test"
//import { test, expect, type Page } from '@playwright/test';

test.describe('API test', () => {
  test("Post regress=", async ({ request, page }) => {
    // test("first playwright test12", async ({ }) => {
    // test("first playwright test12", async ({ page }) => {
    console.log("test start");

    // const getUsers = await request.get("https://reqres.in/api/users?page=2");
    // console.log(await getUsers.json());
    // expect(getUsers.ok()).toBeTruthy();

    const createUser = await request.post("https://reqres.in/api/users", {
      data: {
        "name": "Sumit",
        "job": "QA"
      },
      headers: {
        
      }
    });
    console.log(await createUser.json());





  });

});



// });

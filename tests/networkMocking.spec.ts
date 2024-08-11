import test, { expect } from "../base_fwk/fixtures/baseTest"
import { testData } from "./testData";

test.describe('Network mocking examples', () => {
    test("Modify API responses", async ({ page, request, loginPage }) => {
        await page.route("https://rahulshettyacademy.com/api/ecom/product/get-all-products", async (route) => {
            // route.fetch() is only available in version 1.29 onwards
            const response = await route.fetch();
            const json = await response.json();
            json.data[0].productName = "supermannnnnn";
            json.data[1].productName = "batmann";
            await route.fulfill({ response, json });
        })
        await loginPage.goTo();
        await loginPage.validLogin(testData.username, testData.password);
        // await page.waitForResponse("https://rahulshettyacademy.com/api/ecom/product/get-all-products");
       await page.close();
    })

});

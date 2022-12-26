import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./OrdersReviewPageLocators";

export class OrdersReviewPage extends CommonPage {

    constructor(public page: Page, public scenario: CommonScenario) {
        super(page, scenario);
    }


    async searchCountryAndSelect(countryCode: string, countryName: string) {

        await this.page.locator(locators.country).type(countryCode, { delay: 100 });
        await this.page.locator(locators.dropdown).waitFor();
        const optionsCount = await this.page.locator(locators.dropdown).locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
            const text = await this.page.locator(locators.dropdown).locator("button").nth(i).textContent();
            if (text?.trim() === countryName) {
                await this.page.locator(locators.dropdown).locator("button").nth(i).click();
                break;
            }
        }
    }

    async VerifyEmailId(username) {
        await expect(this.page.locator(locators.emailId)).toHaveText(username);
    }

    async SubmitAndGetOrderId() {
        await this.page.locator(locators.submit).click();
        await expect(await this.page.locator(locators.orderConfirmationText)).toHaveText(" Thankyou for the order. ");
        const orderID = await this.page.locator(locators.orderId).textContent();
        this.setValue("orderId", orderID!);
    }
}

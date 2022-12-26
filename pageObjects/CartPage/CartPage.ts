import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./CartPageLocators";
export class CartPage extends CommonPage {
    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
    }

    async verifyProductIsDisplayed(productName) {
        //await this.page.waitForTimeout(2000);
        const selectedProductElement = await this.page.getByRole('heading', { name: productName });
        await selectedProductElement.waitFor({ state: "visible" });
        expect(selectedProductElement.isVisible).toBeTruthy();
    };

    async clickCheckout() {
        await this.page.getByRole('button', { name: 'Checkout❯' }).click();
        await this.takeScreenshot("checkout");
    };

}
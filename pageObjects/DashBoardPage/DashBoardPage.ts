import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./DashBoardLocators";

export class DashboardPage extends CommonPage {
    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
        this.page = page;
        this.scenario = scenario;
    }

    async searchProductAddCart(productName, testInfo) {
        const product = await this.page.locator(locators.products, { hasText: productName });
        const addCartButton = await product.locator("button", { hasText: " Add To Cart" });
        const cartButtonVisible = await addCartButton.isVisible();
        expect(addCartButton, "Add cart button is visible").toBeTruthy();
        if (cartButtonVisible) {
            await addCartButton.click();
        }
    }

    async navigateToOrders() {
        await this.page.locator(locators.orders).click();
    }


    async navigateToCart() {
        await this.page.locator(locators.cart).click();
        await this.page.waitForLoadState("networkidle");
    }
}

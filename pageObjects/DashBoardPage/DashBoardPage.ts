import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./DashBoardLocators";

export class DashboardPage extends CommonPage {
    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
    }

    async searchProductAddCart(productName) {
        const product = await this.page.locator(locators.products, { hasText: productName });
        await product.waitFor({ state: "visible" });
        const addCartButton = await product.locator("button", { hasText: " Add To Cart" });
        const cartButtonVisible = await addCartButton.isVisible();
        expect(addCartButton, "Add cart button is visible").toBeTruthy();
        if (cartButtonVisible) {
            await addCartButton.click();
        }
    }

    async navigateToOrders() {
        await this.page.locator(locators.orders).click();
        await this.page.waitForLoadState("networkidle");
    }


    async navigateToCart() {
        await this.page.locator(locators.cart).click();
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForLoadState("domcontentloaded");
    }
}

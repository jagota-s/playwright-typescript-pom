import { Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";

const { test, expect } = require('@playwright/test');
export class CartPage extends CommonPage {
    // page: any;
    cartProducts: any;
    productsText: any;
    cart: any;
    orders: any;
    checkout: any;
    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
        // this.page = page;
        this.cartProducts = page.locator("div li").first();
        this.productsText = page.locator(".card-body b");
        this.cart = page.locator("[routerlink*='cart']");
        this.orders = page.locator("button[routerlink*='myorders']");
        this.checkout = page.locator("text=Checkout");

    }

    async VerifyProductIsDisplayed(productName) {

        await this.cartProducts.waitFor();
        // ZARA COAT 3
        //const bool = await this.getProductLocator(productName).isVisible();
       // expect(bool).toBeTruthy();

    }

    async Checkout() {
        console.log("in cart page")
        await this.checkout.click();
    }

    async getProductLocator(productName) {
        return this.page.locator("h3:has-text('" + productName + "')");
    }

    async testCartPage() {
        console.log("in cart page");
    }

}
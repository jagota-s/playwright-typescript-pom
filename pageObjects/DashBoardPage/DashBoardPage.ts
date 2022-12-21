import { Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./DashBoardLocators";

export class DashboardPage extends CommonPage {
    constructor(public page: Page, readonly scenario: CommonScenario) {
        super(page, scenario);
        this.page = page;
        this.scenario = scenario;
    }

    async searchProductAddCart(productName) {
        const titles = await this.page.locator(locators.productsText).allTextContents();
        console.log(titles);
        const count = await this.page.locator(locators.products).count();
        for (let i = 0; i < count; ++i) {
            if (await this.page.locator(locators.productsText).nth(i).textContent() === productName) {
                //add to cart
                await this.page.locator(locators.products).nth(i).locator("text= Add To Cart").click();
                break;
            }
        }
    }

    async navigateToOrders() {
        await this.page.locator(locators.orders).click();
    }


    async navigateToCart() {
        await this.page.locator(locators.cart).click();
    }

    async testDashboard() {
        console.log("in dashboard page");
        // console.log(CommonPage.getValue("amadeus"))
        console.log(this.scenario.getValue("1A"));
    }

}

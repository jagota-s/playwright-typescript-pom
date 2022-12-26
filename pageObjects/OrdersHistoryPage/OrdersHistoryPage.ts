import { Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./OrdersHistoryPageLocators";

export class OrdersHistoryPage extends CommonPage {
    constructor(public page: Page, public scenario: CommonScenario) {
        super(page, scenario);
    }
    async searchOrderAndSelect() {
        const orderId = this.getValue("orderId");
        for (const row of await this.page.locator(locators.rows).all()) {
            if ((await row.locator("th").textContent())?.includes(orderId!)) {
                this.page.locator(locators.BTN_View).click();
                console.log("last element" + await row.locator("th").textContent())
                break;
            }
        }
        this.takeScreenshot("Orders page");
    }

    async getOrderId() {
        return await this.page.locator(locators.orderdIdDetail).textContent();
    }

}

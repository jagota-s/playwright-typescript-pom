import { Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./OrdersHistoryPageLocators";

export class OrdersHistoryPage extends CommonPage {
    constructor(public page: Page, public scenario: CommonScenario) {
        super(page, scenario);
    }
    async searchOrderAndSelect(orderId) {

        await this.page.locator(locators.ordersTable).waitFor();
        for (let i = 0; i < await this.page.locator(locators.rows).count(); ++i) {
            const rowOrderId = await this.page.locator(locators.rows).nth(i).locator("th").textContent();
            if (orderId.includes(rowOrderId)) {
                await this.page.locator(locators.rows).nth(i).locator("button").first().click();
                break;
            }
        }

    }

    async getOrderId() {
        return await this.page.locator(locators.orderdIdDetail).textContent();
    }

    async testOrdersHistory() {
        console.log("in ordershistory page");
        console.log(this.scenario.getValue("1A"));
    }

}

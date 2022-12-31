import { expect, Page } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import { locators } from "./OrdersHistoryPageLocators";

export class OrdersHistoryPage extends CommonPage {
    constructor(public page: Page, public scenario: CommonScenario) {
        super(page, scenario);
    }

    async searchOrderAndSelect() {
        let orderFound = false;
        await this.page.waitForSelector('tbody');
        for (const row of await this.page.locator(locators.rows).all()) {
            const matchrowOrderId = await row.locator("th").textContent();
            if (this.getValue("orderId")!.includes(matchrowOrderId!)) {
                await row.locator(locators.BTN_View).click();
                orderFound = true;
                break;
            }
        }
        expect(orderFound).toBeTruthy();
        this.takeScreenshot("Orders page");
    }

    async getOrderId() {
        return await this.page.locator(locators.orderdIdDetail).textContent();
    }

}

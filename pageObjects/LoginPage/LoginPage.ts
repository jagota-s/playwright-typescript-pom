import { expect, Page, } from "@playwright/test";
import { CommonPage } from "../../base_fwk/common/CommonPage";
import { CommonScenario } from "../../base_fwk/common/CommonScenario";
import test from "../../base_fwk/fixtures/baseTest"
import { testData } from "../../tests/testData";
import { locators } from "../LoginPage/LoginPageLocators";

export class LoginPage extends CommonPage {
  readonly page: Page;
  readonly scenario: CommonScenario;


  constructor(page: Page, scenario: CommonScenario) {
    super(page, scenario);
    this.page = page;
    this.scenario = scenario;
  }
  async goTo() {
    await this.page.goto(testData.qa);
    await this.page.waitForLoadState("networkidle");
    await this.setValue("1A", "AC");
  }

  async validLogin(username, password) {
    await this.page.locator(locators.userName).type(username);
    await this.page.locator(locators.password).type(password);
    await this.page.locator(locators.signInbutton).click();
    await this.page.waitForLoadState("networkidle");
  }
}
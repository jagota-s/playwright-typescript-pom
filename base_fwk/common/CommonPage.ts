import { test, expect, Page } from "@playwright/test";
import { CommonScenario } from "./CommonScenario";


export class CommonPage {
    page: Page;
    scenario: CommonScenario;
    private dataMap = new Map();

    constructor(page, scenario) {
        this.page = page;
        this.scenario = scenario;
        this.commonPageCall("commonPage Constructor")
    }

    async commonPageCall(calledFrom: string) {
        console.log("In common page method called from " + calledFrom)
    }

    public getValue(key: string) {
        const value = this.scenario.getValue(key);
        return value;
    }

    public setValue(key: string, value: string) {
        this.scenario.setValue(key, value);
    }
}
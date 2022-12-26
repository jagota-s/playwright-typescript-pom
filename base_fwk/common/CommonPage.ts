import { test, expect, Page } from "@playwright/test";
import { CommonScenario } from "./CommonScenario";


export class CommonPage {
    private dataMap = new Map();
    constructor(public page: Page, readonly scenario: CommonScenario) {
    }

    public getValue(key: string) {
        const value = this.scenario.getValue(key);
        return value;
    }

    public setValue(key: string, value: string) {
        this.scenario.setValue(key, value);
    }

    async takeScreenshot(name: string) {
        await this.scenario.takeScreenshot(name);
    }
}
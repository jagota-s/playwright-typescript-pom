import { test, expect, Page } from "@playwright/test";
export class CommonScenario {
    readonly page: Page;

    private myMap = new Map<string, string>();
    constructor(page) {
        this.page = page;
        console.log("in common scenario constructor")
    }


    async hooks() {
        console.log("hook from the scenario page");
    }


    setValue(key: string, value: string) {
        this.myMap.set(key, value);
    }

    getValue(key: string) {
        return this.myMap.get(key);
    }
}
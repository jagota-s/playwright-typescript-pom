import test, { expect } from "../base_fwk/fixtures/baseTest"

test.describe('Handle different types of dialogs', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto("https://letcode.in/alert");
    await page.waitForLoadState("domcontentloaded");
  });

  test("Simple alert", async ({ page }) => {
    await page.on('dialog', dialog => {
      console.log(dialog.message());
      dialog.accept();
    });
    await page.locator("#accept", {
      hasText: "Simple Alert"
    }).click();
  })

  test("Confirm alert type", async ({ page }) => {
    await page.on('dialog', dialog => {
      console.log(dialog.message());
      dialog.accept();
    });
    await page.locator("#confirm", {
      hasText: "Confirm Alert"
    }).click();
  })

  test("Prompt alert type", async ({ page }) => {
    await page.on('dialog', dialog => {
      console.log(dialog.message());
      dialog.accept("i see you");
    });
    await page.locator("#prompt", {
      hasText: "Prompt Alert"
    }).click();
  })

  test("Modern alert type", async ({ page }) => {
    await page.on('dialog', dialog => {
      console.log(dialog.message());
      dialog.dismiss();
    });
    await page.locator("#modern", {
      hasText: "Modern Alert"
    }).click();
  })
})

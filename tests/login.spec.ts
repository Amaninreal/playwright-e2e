import test, { expect } from "../base_common/fixtures/baseTest"
import { testData } from "./testData";

test.describe('E2E test flows', () => {

  test("Login with Valid Credentials", async ({page, loginPage}) => {
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await expect(await loginPage.isDashboardVisible()).toBeVisible();

    // Validating if the "Products" title is visible
    await expect(await loginPage.getTitleLocator()).toHaveText("Products");

    // Click on the Twitter icon
    await loginPage.clickTwitterIcon();
    await page.pause();
  });
})
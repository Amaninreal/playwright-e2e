import test, { expect } from "../base_common/fixtures/baseTest"
import { testData } from "./testData";

test.describe('E2E test flows', () => {

  test("Product Checkout", async ({page, loginPage}, testinfo) => {
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await page.pause();
  });
})
import test, { expect } from "../base_common/fixtures/baseTest"
import { testData } from "./testData";

test.describe('E2E test flows', () => {

  test("Login with Valid Credentials", async ({page, loginPage}, testinfo) => {
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await expect
    await page.pause();
  });
})
import test, { expect } from "../base_common/fixtures/baseTest"
import { testData } from "./testData";

test.describe('E2E test flows', () => {

  test("Login with Valid Credentials", async ({page, loginPage}) => {
    await loginPage.goTo();
    await loginPage.validLogin(testData.username, testData.password);
    await expect(await loginPage.isDashboardVisible()).toBeVisible();
    await loginPage.takeScreenshot("AfterLogin");
  });
})
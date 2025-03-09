import { Page, } from "@playwright/test";
import { CommonPage } from "../../base_common/common/CommonPage";
import { CommonScenario } from "../../base_common/common/CommonScenario";
import { testData } from "../../tests/testData";
import { locators } from "../LoginPage/LoginPageLocators";

export class LoginPage extends CommonPage {

  constructor(public page: Page, readonly scenario: CommonScenario) {
    super(page, scenario);
  }
  async goTo() {
    await this.page.goto(testData.qaURL);
    await this.page.waitForLoadState("domcontentloaded");
    await this.scenario.a11yAnalysis();
  }

  async validLogin(username: string, password: string) {
    await this.page.locator(locators.userName).fill(username);
    await this.page.locator(locators.password).fill(password);
    await this.page.locator(locators.loginButton).click();
    await this.page.waitForLoadState("networkidle");
  }
}
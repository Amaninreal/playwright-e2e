import { Page, } from "@playwright/test";
import { CommonPage } from "../../base_common/common/CommonPage";
import { CommonScenario } from "../../base_common/common/CommonScenario";
import { testData } from "../../tests/testData";
import { locators } from "../LoginPage/LoginPageLocators";

export class LoginPage extends CommonPage {
  private dashboard = "[data-test='inventory-container']";

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

  async isDashboardVisible() {
    return this.page.locator(this.dashboard);
  }
  async getTitleLocator() {
    return this.page.locator(locators.title);
}

async clickTwitterIcon() {
    const twitterIcon = this.page.locator(locators.twitterIcon);
    await twitterIcon.scrollIntoViewIfNeeded();
    await twitterIcon.click();
}

}
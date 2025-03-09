import { LoginPage } from "../../page-objects/LoginPage/LoginPage";
import { Page, test as baseTest } from "@playwright/test";
import { CommonPage } from "../common/CommonPage";
import { CommonScenario } from "../common/CommonScenario";
// declaring the objects type for autocompletion 
interface PageObjects {
    loginPage: LoginPage;
    commonScenarioPage: CommonScenario;
    commonPage: CommonPage,
}
// intializing all the page objects you have in your app
// and import them as fixture in spec file
const test = baseTest.extend<PageObjects>({
    commonScenarioPage: async ({ page }, use, testinfo) => {
        await use(new CommonScenario(page, testinfo));
    },
    loginPage: async ({ page, commonScenarioPage }, use) => {
        await use(new LoginPage(page, commonScenarioPage));
    },

});
// this describe block is applicable to all the tests using baseTest
// test.describe('two tests', () => {
//     console.log("in describe");

// });
// hooks as fixtures
// let authenticatedPage: Page;
test.beforeEach(async ({ browser }) => {
   // console.log('beforeEach tests');
});

test.afterEach(async ({ page}) => {
   await page.close();
});

// export default and name export so spec files can use it 
export default test;
export const expect = test.expect;
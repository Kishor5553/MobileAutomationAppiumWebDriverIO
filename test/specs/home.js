const homePage = require("../pages/homePage")
const loginPage = require("../pages/loginPage")

describe('Home Page of Box', () => {
    it('Click on sort', async () => {
        await loginPage.login1()
        await ($(homePage.sortBy)).click()
        await ($(homePage.sortByName)).click()
    })
})
const data = require("../data/data.json")
const loginPage = require("../pages/loginPage")

describe('Login Page of box', () => {
    it('Login', async () => {
        await loginPage.login1()
    })
})
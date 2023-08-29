const homePage = require("./homePage")
const data = require("../data/data.json")
const { click, setValue, expectToHaveText } = require("../utils/util")

class LoginPage{
    loginBtn='[resource-id="com.box.android:id/loginButton"]'
    username = '//android.widget.EditText[@resource-id="login-email"]'
    nextBtn = '//android.widget.Button[@resource-id="login-submit"]'
    password = '//android.widget.EditText[@resource-id="password-login"]'
    loginBtn1 = '//android.widget.Button[@resource-id="login-submit-password"]'

    async login() {
        await ($(this.loginBtn)).click()
        await ($(this.username)).setValue(data.email)
        await ($(this.nextBtn)).click()
        await ($(this.password)).setValue(data.password)
        await ($(this.loginBtn1)).click()
        expect($(homePage.allFiles)).toHaveTextContaining("ALL FILES")      
    }
    async login1(){
        await click($(this.loginBtn))
        await setValue($(this.username), data.email)
        await click($(this.nextBtn))
        await setValue($(this.password), data.password)
        await click($(this.loginBtn1))
        expectToHaveText($(homePage.allFiles), "ALL FILES")

    }
}
module.exports= new LoginPage()
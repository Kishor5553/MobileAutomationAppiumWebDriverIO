class Util{
    async click(element){
        await element.click()
    }
    async setValue(element, text){
        await element.setValue(text)
    }
    async expectToBeDisplayed(element){
        expect(element).toBeDisplayed()
    }
    async expectToHaveText(element, text){
        expect(element).toHaveTextContaining(text)
    }


}
module.exports=new Util()
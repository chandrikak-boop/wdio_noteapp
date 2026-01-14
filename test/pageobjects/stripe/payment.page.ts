class PaymentPage{
    get cardBtn(){
        return $('//android.widget.TextView[@text="Card"]')
    }
    get cardNumber(){
        return $('android=new UiSelector().className("android.widget.EditText").instance(0)')
    }
    get cardExpiry(){
        return $('android=new UiSelector().className("android.widget.EditText").instance(1)')
    }
    get cvc(){
        return $('android=new UiSelector().className("android.widget.EditText").instance(2)')
    }
    get zipCode(){
        return $('android=new UiSelector().className("android.widget.EditText").instance(4)')
    }
    get savePayment()
    {
        return $('android=new UiSelector().className("android.widget.CheckBox")')
    }
    get PayBtn()
    {
        return $('//android.widget.Button[@resource-id="com.stripe.android.paymentsheet.example:id/primary_button"]')
    }
    get finishBtn()
    {
        return $('android=new UiSelector().text("Finish")')
    }

    async clickCardBtn()
    {
        await this.cardBtn.click()
    }
    async enterCardNumber(cardNumber:any){
        await this.cardNumber.addValue(cardNumber)
    }
      async enterCardExpiry(cardExpiry:number){
        await this.cardExpiry.addValue(cardExpiry)
    }
      async enterCvc(cvc:number){
        await this.cvc.addValue(cvc)
    }
      async enterZipcode(zipCode:number){
        await this.zipCode.addValue(zipCode)
    }
    async savePaymentFunc()
    {
        await this.savePayment.click()
    }
    async clickPayBtn()
    {
        await this.PayBtn.click()
    }
    async clickFinish()
    {
        await this.finishBtn.click()
    }
    async goBackToCart()
    {
        await driver.back()
        await driver.back()
        await driver.back()
    }
}
export default new PaymentPage()
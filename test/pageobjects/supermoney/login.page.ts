class Login
{
    get enterPhoneNumField()
    {
        return $('android.widget.EditText')
    }
    get continueBtn()
    {
        return $('~Continue')
    }
    async enterPhoneNum()
    {
        await this.enterPhoneNumField.addValue('9538906400')
    }
    async clickContinue()
    {
        await this.continueBtn.click()
    }
}
export default new Login()
import { $ } from '@wdio/globals'

class HomePage
{
    get paymetSheetLink()
    {
        return $('//android.widget.TextView[@text="PaymentSheet"]')
    }

    async navigateToPaymentSheet()
    {
        await this.paymetSheetLink.click()
    }
}
export default new HomePage()
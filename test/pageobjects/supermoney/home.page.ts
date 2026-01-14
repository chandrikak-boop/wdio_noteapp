import { $ } from '@wdio/globals'
class Home
{
     get sendMoneyBtn() {
        return $('~Send money')
    }

    get checkBalance(){
        return $('~Check balance')
    }

    get history(){
        return $('~History')
    }

    async sendMoney()
    {
        await this.sendMoneyBtn.click()
    }
}
export default new Home()
import Home from '../../../test/pageobjects/supermoney/home.page'
//import Login from '../../../test/pageobjects/supermoney/login.page'
describe('Send Money',async()=>{
    it('Using Send Money Option',async()=>{
    // await Login.enterPhoneNum()
    // await Login.clickContinue()
    await Home.sendMoney() 
    })
})
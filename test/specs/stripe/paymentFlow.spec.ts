import HomePage from '../../../test/pageobjects/stripe/home.page'
import CartPage from '../../../test/pageobjects/stripe/cart.page'
import PaymentPage from '../../pageobjects/stripe/payment.page'
describe('payment flow',()=>{
    it('valid scenario',async()=>{
    await HomePage.navigateToPaymentSheet()
    await CartPage.clickBuy()
    await PaymentPage.cardBtn.waitForDisplayed()
    await PaymentPage.clickCardBtn()
    await PaymentPage.enterCardNumber(4242424242424242)
    await PaymentPage.enterCardExpiry(1226)
    await PaymentPage.enterCvc(112)
    await PaymentPage.enterZipcode(12345)
    await PaymentPage.savePaymentFunc()
    await PaymentPage.clickPayBtn()
    await expect($('//android.widget.TextView[@text="Success"]')).toBeExisting()
    await PaymentPage.clickFinish()
    })

    it('Invalid card number',async()=>{
        await HomePage.navigateToPaymentSheet()
        await CartPage.clickBuy()
        await PaymentPage.clickCardBtn()
        await PaymentPage.enterCardNumber(4242424242424241)
        const errorMessage:string="Your card's number is invalid."
        await expect($(`android=new UiSelector().text("${errorMessage}")`)).toBeExisting()
        await PaymentPage.goBackToCart()
    })
    it('Invalid expiry date',async()=>{
        await HomePage.navigateToPaymentSheet()
        await CartPage.clickBuy()
        await PaymentPage.clickCardBtn()
        await PaymentPage.enterCardNumber(4242424242424242)
        await PaymentPage.enterCardExpiry(1225)
        const errorMessage:string="Your card's expiration year is invalid."
        await expect($(`android=new UiSelector().text("${errorMessage}")`)).toBeExisting()
        await PaymentPage.goBackToCart()
    })
        it('Invalid cvc',async()=>{
        await HomePage.navigateToPaymentSheet()
        await CartPage.clickBuy()
        await PaymentPage.clickCardBtn()
        await PaymentPage.enterCardNumber(4242424242424242)
        await PaymentPage.enterCardExpiry(1226)
        await PaymentPage.enterCvc(11)
        await PaymentPage.clickPayBtn()
        const errorMessage:string="Your card's security code is invalid."
        await expect($(`android=new UiSelector().text("${errorMessage}")`)).toBeExisting()
        await PaymentPage.goBackToCart()

    })
    it('Blank card number',async()=>{
        await HomePage.navigateToPaymentSheet()
        await CartPage.clickBuy()
        await PaymentPage.clickCardBtn()
        await PaymentPage.clickPayBtn()
        const errorMessage:string="This field cannot be blank."
        await expect($(`android=new UiSelector().text("${errorMessage}")`)).toBeExisting()
        await PaymentPage.goBackToCart()
    })
})
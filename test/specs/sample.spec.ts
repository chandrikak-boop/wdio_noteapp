describe('Stripe PaymentSheet Example', () => {
    it('should open the app and wait', async () => {
        // Wait 5 seconds to visually confirm app opened
        await driver.pause(5000)

        // Optionally: check if a known element exists
        const title = await $('android=new UiSelector().textContains("PaymentSheet")')
        console.log(await title.getText())
    })
})

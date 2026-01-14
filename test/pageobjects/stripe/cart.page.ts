class CartPage
{
    get buyBtn()
    {
        return $('android.widget.Button')
    }
    async clickBuy()
    {
        await this.buyBtn.click()
    }
}

export default new CartPage()
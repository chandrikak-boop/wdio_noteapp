class AddItemsToCheckListPage {

    get editingHeader() {
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }
    get addItemInput() {
        return $('//*[@text="Add Item"]')
    }
    get enterItemInput() {
        return $('android.widget.EditText')
    }
    get clickNext()
    {
        return $('//*[@text="NEXT"]')
    }
    get clickOk()
    {
        return $('//*[@text="OK"]')
    }  
    async editHeader(headerText: string) {
        await this.editingHeader.waitForExist({ timeout: 5000 });
        await this.editingHeader.click();
        await this.editingHeader.setValue(headerText);
    }
    async addItemsToCheckList(items:any) {
        await this.addItemInput.waitForExist({ timeout: 5000 });
        await this.addItemInput.click();
        for(const item of items){
            if(item !== items[items.length - 1]){
            await this.enterItemInput.setValue(item);
            await this.clickNext.click();
            }
            else{
                await this.enterItemInput.setValue(item);
                await this.clickOk.click();
                
            }       
        }
        for(const item of items){
            const addedItem = await $(`//*[@text="${item}"]`);
            await expect(addedItem).toBeDisplayed();
        }
    }
}
export default new AddItemsToCheckListPage();
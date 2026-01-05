import { $ } from '@wdio/globals'

class AddItemsPage {

    get addBtn() {
        return $(`//XCUIElementTypeButton[@name="Add"]`)
    }

    get titleInput() {
        return $('//*[@value="Title"]')
    }

    get dueDateField() {
        return $('//*[@value="Due"]')
    }

    get createBtn() {
        return $('//XCUIElementTypeButton[@name="Create"]')
    }
    get currentMonth() {
        return $('//XCUIElementTypeButton[@name="Month"]')
    }
    get nextMonthBtn() {
        return $('-ios predicate string:name == "DatePicker.NextMonth"'
);
    }

    async addItem(itemName: string, date: string = '25') {
        await this.addBtn.click()
        await this.titleInput.addValue(itemName)
        await this.dueDateField.click()
        await $(`//XCUIElementTypeStaticText[@name="${date}"]`).click()
        await this.createBtn.click()
    }

    async addMultipleItems(items: {name: string, month: string, day: string}[]) {
        for (const item of items) {
            await this.addBtn.click()
            await this.titleInput.addValue(item.name)
            await this.dueDateField.click()
            let currentMonth = await this.currentMonth.getText()
            while (currentMonth !== item.month) {
                await this.nextMonthBtn.click()
                currentMonth = await this.currentMonth.getText()
            }
            await $(`//XCUIElementTypeStaticText[@name="${item.day}"]`).click()
            await this.createBtn.click()
        }
    }
}

export default new AddItemsPage()
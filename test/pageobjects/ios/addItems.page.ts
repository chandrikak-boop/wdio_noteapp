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

    async addItem(itemName: string, date: string = '25') {
        await this.addBtn.click()
        await this.titleInput.addValue(itemName)
        await this.dueDateField.click()
        await $(`//XCUIElementTypeStaticText[@name="${date}"]`).click()
        await this.createBtn.click()
    }
}

export default new AddItemsPage()
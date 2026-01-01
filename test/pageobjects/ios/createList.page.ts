import { $ } from '@wdio/globals'

class CreateListPage {

    get createListBtn() {
        return $(`//XCUIElementTypeStaticText[@name="Create list"]`)
    }

    get listNameInput() {
        return $(`//XCUIElementTypeTextField`)
    }

    get createBtn() {
        return $('~Create')
    }

    listName(name: string) {
        return $(`//XCUIElementTypeStaticText[@name="${name}"]`)
    }

    async createList(listName: string) {
        await this.createListBtn.click()
        await this.listNameInput.addValue(listName)
        await this.createBtn.click()
        await expect(this.listName(listName)).toBeExisting()
    }

    async openList(listName: string) {
        await this.listName(listName).click()
    }
}

export default new CreateListPage()
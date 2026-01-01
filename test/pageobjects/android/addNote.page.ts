import { $ } from '@wdio/globals'

class AddNotePage {

    get skipTutorialBtn() {
        return $('android.widget.Button')
    }

    get addNoteBtn() {
        return $('//*[@text="Add note"]')
    }

    get textOption() {
        return $('android=new UiSelector().text("Text")')
    }

    get editingHeader() {
        return $('//*[@text="Editing"]')
    }

    get titleInput() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_title"]')
    }

    get noteInput() {
        return $('//android.widget.EditText[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/edit_note"]')
    }

    async skipTutorial() {
        await this.skipTutorialBtn.click()
        await expect(this.addNoteBtn).toBeExisting()
    }

    async addTextNote(title: string, body: string) {
        await this.addNoteBtn.click()
        await this.textOption.click()
        await expect(this.editingHeader).toBeExisting()
        await this.titleInput.setValue(title)
        await this.noteInput.setValue(body)
        await driver.back()
        await driver.back()
    }

    noteTitle(title: string) {
        return $(`//*[@text="${title}"]`)
    }
}

export default new AddNotePage()
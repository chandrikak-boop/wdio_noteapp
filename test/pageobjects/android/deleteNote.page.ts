import { $ } from '@wdio/globals'

class DeleteNotePage {

    get moreOptions() {
        return $('//android.widget.ImageButton[@content-desc="More"]')
    }

    get deleteOption() {
        return $('//*[@text="Delete"]')
    }

    get confirmDeleteBtn() {
        return $('//*[@resource-id="android:id/button1"]')
    }

    get navigationMenu() {
        return $('//android.widget.ImageButton[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/icon_nav"]')
    }

    get trashCan() {
        return $('//*[@text="Trash Can"]')
    }

    noteTitle(title: string) {
        return $(`//*[@text="${title}"]`)
    }

    async openNote(title: string) {
        await this.noteTitle(title).click()
    }

    async deleteNote() {
        await this.moreOptions.click()
        await this.deleteOption.click()
        await this.confirmDeleteBtn.click()
    }

    async openTrash() {
        await this.navigationMenu.click()
        await this.trashCan.click()
    }
}

export default new DeleteNotePage()
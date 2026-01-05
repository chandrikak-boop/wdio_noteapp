import { $ } from '@wdio/globals'
 class AddCheckListPage {
     get skipTutorialBtn() {
        return $('android.widget.Button')
    }
    get addCheckListButton() {
        return $('//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/main_btn1"]')
    }
    get checkListOption() {
        return $('//*[@text="Checklist"]')
    }
    async skipTutorial() {
        await this.skipTutorialBtn.waitForExist({ timeout: 5000 });
        await this.skipTutorialBtn.click()
        await expect(this.addCheckListButton).toBeExisting()
    }
    async addCheckList() {
        await this.addCheckListButton.waitForExist({ timeout: 5000 });
        await this.addCheckListButton.click()
        await this.checkListOption.waitForExist({ timeout: 5000 });
        await this.checkListOption.click()
    }
 }
 export default new AddCheckListPage()
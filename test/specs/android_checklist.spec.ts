import AddCheckListPage from '../../test/pageobjects/android/addCheckList.page'
import AddItemsToCheckListPage from '../pageobjects/android/addItemsToCheckList.page'

describe('Create Checklist', () => {
    it('Skip tutorial', async () => {
        await AddCheckListPage.skipTutorial()
    })

    it('Add a checklist', async () => {
        await AddCheckListPage.addCheckList()
    })
    it('Edit checklist header', async () => {
        const headerText = 'My Checklist'
        await AddItemsToCheckListPage.editHeader(headerText)
    })

    it('Add items to checklist', async () => {
        const items = ['Item 1', 'Item 2', 'Item 3']
        await AddItemsToCheckListPage.addItemsToCheckList(items)
    })
})
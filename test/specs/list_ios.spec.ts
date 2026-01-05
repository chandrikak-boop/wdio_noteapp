import CreateListPage from '../../test/pageobjects/ios/createList.page'
import AddItemsPage from '../../test/pageobjects/ios/addItems.page'
const testData = require("../../data/ios_testdata.json");

describe('iOS Test Suite - POM', () => {

    const listName = testData.listName

    it('Create a list', async () => {
        await CreateListPage.createList(listName)
    })

    it('Add items to list', async () => {
        await CreateListPage.openList(listName)
        await AddItemsPage.addMultipleItems(testData.items)
    })
})
import AddNotePage from '../pageobjects/android/addNote.page'
import DeleteNotePage from '../pageobjects/android/deleteNote.page'
//import testData from '../../data/android_testdata.json'
const testData = require("../../data/android_testdata.json");

describe('Notes App - POM separation', () => {

    const title = testData.title
    const body = testData.body

    it('Skip tutorial', async () => {
        await AddNotePage.skipTutorial()
    })

    it('Add a text note', async () => {
        await AddNotePage.addTextNote(title, body)
        await expect(AddNotePage.noteTitle(title)).toBeExisting()
    })

    it('Delete the note', async () => {
        await DeleteNotePage.openNote(title)
        await DeleteNotePage.deleteNote()
        await DeleteNotePage.openTrash()
        await expect(DeleteNotePage.noteTitle(title)).toBeExisting()
    })

})

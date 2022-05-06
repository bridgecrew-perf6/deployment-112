
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {

    try {
        driver.get('http://localhost:3000/')
    } catch (err) {
        console.log('error', err)
    }



  
})

afterAll(async () => {

    try {
      
    driver.quit()
    } catch (err) {
        console.log('error', err)
    }



})







test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})



import test, { chromium, firefox, webkit } from '@playwright/test'

test("Launch Browser",async()=>{

    //lanuch browserheadless
    const browser= await firefox.launch({headless:false})
    //open window
    const context=  await browser.newContext()
    //open page
    const page= await context.newPage()
    //load the url 
    await page.goto("https://playwright.dev/")

})
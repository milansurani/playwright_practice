const {test,expect} = require ('@playwright/test') ;

test ('Open Child Window', async ({browser}) =>
    {
        const context = await browser.newContext();
        const page = await context.newPage();
        //navigate to the URL
         await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
         const newPageLink = page.locator("[href*='documents-request']");

         // click on the link and wait for the new page to load (here we are using proimse array to handle the promise)
         const [newTab] = await Promise.all ([

            context.waitForEvent('page'),
            newPageLink.click(),
         ])
        // save text from new page
         const text = await newTab.locator(".red").textContent();
         
         //retrive username by splitting the text
         const arrayText = text.split("@")
         const username = arrayText[1].split(" ")[0]

         // go back to parent page and type username(here we are using page context again to refer the parent page)
         await page.locator("#username").fill(username);
         
    });
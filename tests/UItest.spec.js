const {test,expect} = require ('@playwright/test') ;

//test suite for UI controls
test.describe('UI Controls Suite', () => {

    // test cases
test ('UI controls on Login Page', async ({page}) =>
    {
        //navigate to the URL
         await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
        //get the page title
         await page.title();
         //assert page title to be equals the value
         await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
         
         //clear the username and write the correct value
         await page.locator("#username").clear();
         await page.locator("#username").fill("rahulshettyacademy");
    
          //clear the password and write the correct value
          await page.locator("#password").clear();
          await page.locator("#password").fill("learning");

          //check the user radio button
          await page.locator("radiotextsty").last().click();
          await page.locator("#okayBtn").click();
          expect(page.locator("radiotextsty").last()).toBeChecked();

          //select the correct value from dropdown
          const dropdown = page.locator("select.form-control");
          await dropdown.selectOption("consult");
    
         //click on signin button
         await page.locator("#signInBtn");
    
    });

})
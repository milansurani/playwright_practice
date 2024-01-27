const {test,expect} = require ('@playwright/test') ;


// test cases
test ('Log in with correct credentials', async ({page}) =>
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

     //click on signin button
     await page.locator("#signInBtn");

});

test.only ('Log in with incorrect credentials and verify the error message', async ({page}) =>
{
    //navigate to the URL
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //get the page title
     await page.title();
     //assert page title to be equals the value
     await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");
     
     //clear the username and write the correct value
     await page.locator("#username").clear();
     await page.locator("#username").fill("rahulshetty");

      //clear the password and write the correct value
     await page.locator("#password").clear();
     await page.locator("#password").fill("learning");

     //click on signin button
     await page.locator("#signInBtn").click();

     //check for error message block
     await expect(page.locator("[style*='block']")).toContainText("Incorrect");

});
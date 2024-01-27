//importing playwright test annotation
const {test,expect} = require ('@playwright/test') ;


// test cases
test ('Navigate to URL & Verify title', async ({page}) =>
{
    //navigate to the URL
     await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    //get the page title
     await page.title();
     //assert page title to be equals the value
     await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");

});
const { test, expect } = require("@playwright/test");

test.beforeEach("Navigate and Login to Site", async ({ page }) => {
  //navigate to the URL
  await page.goto("https://rahulshettyacademy.com/client");
  //get the page title
  await page.title();
  //assert page title to be equals the value
  await expect(page).toHaveTitle("Let's Shop");

  //clear the username and write the correct value
  await page.locator("#userEmail").clear();
  await page.locator("#userEmail").fill("anshika@gmail.com");

  //clear the password and write the correct value
  await page.locator("#userPassword").clear();
  await page.locator("#userPassword").fill("Iamking@000");

  //click on login button
  await page.locator("#login").click();
  await page.waitForLoadState("networkidle");
});

test("Add Product to the cart", async ({ page }) => {
  //The product user wants to add to cart
  const productName = "IPHONE 13 PRO";
  // get the list of all the products on the page
  const product = page.locator(".card-body");
  const titles = await page.locator(".card-body b").allTextContents();
  const count = await product.count();
  console.log(titles);

  // loop through product list and find the productname and add it to cart
  for (let i = 0; i < count; i++) {
    console.log("inside the loop");
    console.log(await product.nth(i).locator("b").textContent());
    if ((await product.nth(i).locator("b").textContent()) === productName) {
      // click on add product to cart button
      await product.nth(i).locator("text = Add to Cart").click();
      //break out once you reached the product and added it to cart
      break;
    }
  }
});

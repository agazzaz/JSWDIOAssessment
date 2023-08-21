
const common = require("../components/lib_common.js");
const config = require("../../config.json")
const homepage = require ("../components/lib_home.js");
const SearchPage = require ("../components/lib_search.js");
const td_product = require('../data/td_product.json');
const ProductPage = require ("../components/lib_product.js");
const assert = require('assert');
const userData = require('../data/td_user.json');
const OrderPage = require ("../components/lib_order.js");
// const { expect: Chaiexpect } = require("chai");
// const chai = require('chai');


describe("Common Tests", () => {
  // let prm_Url = "https://www.booking.com";
  let prm_Url = config.URLS.QA;
  it("Verify whether the hompage loads as expected", async () => {
    await common.bc_Homepage(prm_Url);
// verify the page URL
    await common.bc_VerifyPageURL();
  });

  it("Verify whether basic settings can be set before searching the locations", async () => {
    //select country
    await homepage.bc_SelectCountry();
    //select currency
    await homepage.bc_SelectCurrency();
    //click on stays button
    await homepage.bc_ClickStaysBtn();
  });

  it('Verify whether the the locations can be searched and entered along with required follow up details', async () => {

    //Enter the location
    let prm_Location = td_product.town;
    await SearchPage.bc_SelectLocation(prm_Location);
    //select the check-in and checkout dates
    const selectedDates = await SearchPage.bc_SelectCheckinCheckout();
    //select the adult and child count
    await SearchPage.bc_SelectAdultChildCount();
    //click the search button
    await SearchPage.bc_ClickSearch();
    // Listing only 5 star rated stays
    await SearchPage.bc_SelectRating();
    // Sort by lowest price
    await SearchPage.bc_SelectSortBypriceOption();
    //get check-in and checkout dates after selection
    await SearchPage.bc_GetDates();
  });

  it('Getting the name and amount with the tax of the second item listed in page ', async () => {
    const productDetails = await ProductPage.bc_GetProductDetails(); // Call your method
    console.log('Product Details:', productDetails); // Optional: log the details
    
    // Add your assertions if needed
    assert.strictEqual(typeof productDetails.productName, 'string', 'Product name should be a string');
    assert.strictEqual(typeof productDetails.productPrice, 'string', 'Product price should be a string');
    assert.strictEqual(typeof productDetails.extractedTax, 'string', 'Extracted tax should be a string');
    assert.strictEqual(typeof productDetails.withTax, 'number', 'With tax amount should be a number');

  });

  it('Click the second item from the search List page and navigate to the hotel Detail page and verify the hotel name. ', async () => {
    
    const proDetails = await ProductPage.bc_SelectSecondProduct();
    console.log('Product Details:', proDetails); // Optional: log the details

    // Add your assertions if needed
    // assert.strictEqual(typeof proDetails.productName, 'string', 'Product name should be a string');
    // let prm_ProductName = "Lanka Guest";
    // const pdProductName = await ProductPage.bc_VerifyProductDetails(prm_ProductName);
  });

  it('Click  on reserve, fill details, verify details and go back to Homepage ', async () => {
      await ProductPage.bc_ReserveRoom();
      const userDataEntry = userData[0];

      const prm_FirstName = userDataEntry.firstName;
      const prm_LastName = userDataEntry.lastName;
      const prm_Email = userDataEntry.email;
      await OrderPage.bc_FillDetailsForm(prm_FirstName, prm_LastName, prm_Email);
      await OrderPage.bc_VerifyFormDetails(prm_FirstName, prm_LastName, prm_Email);
      homepage.bc_DismissAlert;
  });

});

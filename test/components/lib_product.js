const { expect: Chaiexpect } = require("chai");
const ProductPage = require ("../pages/pg_product.js");
const OrderPage = require ("../pages/pg_order.js");


class Product {
  async bc_GetProductDetails() {
    // get product name of the second product in the Product page
    const productName = await ProductPage.lbl_SecondProductName.getText();

    //get product price of the second product in the Product page
    const productPrice = await ProductPage.lbl_SecondProductPrice.getText();

    //get product tax of the second product in the Product page
    const extractedTax = await ProductPage.lbl_TaxAmount.getText();

    //calculate amount with tax
    const withTax = await this.bc_GetTax(extractedTax, productPrice);

    return { productName, productPrice, extractedTax, withTax };
  }

  async bc_SelectSecondProduct() {
    await browser.pause(2000);
    //calling bc_GetProductDetails() method
    const proDetails = await this.bc_GetProductDetails();

    //click on second Product and naviagte to product details page
    await ProductPage.lbl_SecondProductName.click();

    //switch to product details page
    await browser.switchWindow("booking.com/hotel");

    return proDetails;
  }

  async bc_VerifyProductDetails(prm_ProductName) {
    //wait till the element exist
    await ProductPage.lbl_ProductNamePd.waitForExist({
      timeout: 10000,
      timeoutMsg: "product details page is not fully loaded",
    });

    //get product Name
    const pdProductName = await ProductPage.lbl_ProductNamePd.getText();

    //verify the product name in the product details page with the product list page
    Chaiexpect(prm_ProductName).to.equal(pdProductName);
  }

  async bc_GetTax(prm_ExtractedTax, prm_ProductPrice) {
    //get tax value
    const tax = prm_ExtractedTax.replace(/[^\d,.-]/g, "");

    //get current price after discount
    const price = prm_ProductPrice.replace(/[^\d,.-]/g, "");

    //get full amount by tax+price
    const fullAmount = parseInt(tax) + parseInt(price);

    return fullAmount;
  }

  async bc_ReserveRoom() {
    let count = 0;
        //scroll till view the selectbox
    await ProductPage.lbl_HeadingLevel.scrollIntoView();
    await browser.pause(3000);
    await ProductPage.dd_RoomCount[count].selectByAttribute("value", "1");
    await browser.pause(3000);


     //click on Reserve button
     await ProductPage.btn_Reserve.click();
     await browser.pause(5000);
  }
}

// export default new Product();
module.exports = new Product();
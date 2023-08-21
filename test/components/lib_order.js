const { expect: Chaiexpect } = require("chai");
const OrderPage = require ("../pages/pg_order.js");

class Order {
 
  async bc_FillDetailsForm(prm_FirstName, prm_LastName, prm_Email) {
    //fill out firstname, lastname, email
    await OrderPage.tf_FirstName.setValue(prm_FirstName);

    await OrderPage.tf_LastName.setValue(prm_LastName);

    await OrderPage.tf_EmailAddress.setValue(prm_Email);

    //wait till browser load
    await browser.pause(9000);

    //click next button
    await OrderPage.btn_Next.click();
  }

  async bc_VerifyFormDetails(prm_FirstName, prm_LastName, prm_Email) {
    await browser.pause(10000);

    //get full name by concatinating two strings
    const fullName = prm_FirstName + " " + prm_LastName;

    //get full name from the element
    const fullName2 = await OrderPage.lbl_FullName.getText();

    //get email address from the element
    const emailAddress = await OrderPage.lbl_Email.getText();

    //verify full name in the order confirmation page with what entered in above step
    Chaiexpect(fullName).to.equal(fullName2);

    //verify email in the order confirmation page with what entered in above step
    Chaiexpect(prm_Email).to.equal(emailAddress);

    //click on booking.com logo
    await OrderPage.lnk_BookingLogo.click();
    await browser.pause(10000);
  }
}

// export default new Order();
module.exports = new Order();
const homepage = require ("../pages/pg_home.js");

class home {
  async bc_SelectCountry() {
    //to close the randomly appearing modal
    await homepage.btn_CloseRandomModal.click();

    //click on home page country btn
    await homepage.btn_Country.click();

    //selelct Uk as the country
    await homepage.btn_CountryUk.click();
  }

  async bc_SelectCurrency() {
    //click on home page currency btn
    await homepage.btn_Currency.click();

    //selelct usd as the currency
    await homepage.btn_CurrencyUsd.click();
  }

  async bc_ClickStaysBtn() {
    //click stays button
    await homepage.btn_Stays.click();
  }

  async bc_DismissAlert() {
    //wait for alert to appear
    await homepage.btn_AlertClose.waitForExist({ timeout: 10000 });

    //dimiss the alert
    await homepage.btn_AlertClose.click();
  }

  async bc_CheckForAlert() {
    browser.pause(2000);
    
    //verify whether the alert is opened
    let isOpen = await homepage.btn_AlertClose.isDisplayed();
    await expect(isOpen).toEqual(false);
  }
}

module.exports = new home();
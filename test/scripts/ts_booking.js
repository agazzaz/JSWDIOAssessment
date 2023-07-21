
const common = require("../components/lib_common.js");
const config = require("../../config.json")
const homepage = require ("../components/lib_home.js");

describe("Common Tests", () => {
  // let prm_Url = "https://www.booking.com";
  let prm_Url = config.URLS.QA;
  it("loadingHomepage", async () => {
    await common.bc_Homepage(prm_Url);
  });

  it("should verify the page URL", async () => {
    await common.bc_VerifyPageURL();
  });

  // it("should close the randomly appearing modal", async () => {
  //   await homepage.bc_CloseRandomModal();
  //   // Add assertions or further test steps if needed
  // });

  it("should select the country", async () => {
    await homepage.bc_SelectCountry();
    // Add assertions or further test steps if needed
  });

  it("should select the currency", async () => {
    await homepage.bc_SelectCurrency();
    // Add assertions or further test steps if needed
  });

  it("should click the stays button", async () => {
    await homepage.bc_ClickStaysBtn();
    // Add assertions or further test steps if needed
  });

  // it("should dismiss the alert", async () => {
  //   await homepage.bc_DismissAlert();
  //   // Add assertions or further test steps if needed
  // });

  it("should check for alert", async () => {
    await homepage.bc_CheckForAlert();
  });
});

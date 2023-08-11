class common {
    async bc_Homepage(prm_Url) {
       //load booking.com
        await browser.url(prm_Url);  
    }
  
    bc_VerifyPageURL = async () => {
      //verifying the url is booking.com 
      await expect(browser).toHaveUrlContaining("https://www.booking.com")
      console.log('booking.com url is loaded')
    }
  }
  
  module.exports = new common();
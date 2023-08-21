
class PGOrderPage {
      
    get tf_FirstName() {
      return $('//input[@id="firstname"]');
    }
  
    get tf_LastName() {
      return $('//input[@id="lastname"]');
    }
  
    get tf_EmailAddress() {
      return $('//input[@id="email"]');
    }
    get btn_Next() {
      return $("button*= Next: Final details");
    }
  
    get lbl_FullName() {
      return $('(//ul)[5]/li[1]/div[2]');
    }
  
    get lbl_Email() {
      return $('(//ul)[5]/li[2]/div[2]');
    //   return $("//div[contains(text(),'agfffffffa@gmail.com')]");
      
    }
  
    get lnk_BookingLogo() {
      return $("aria/Booking.com online hotel reservations");
    }
  
    get lbl_Tax(){
      return $('(//div[@class="bui-u-text-right"])[2]/div');
    }
  
  }
  
//   export default new  PGOrderPage();
  module.exports = new PGOrderPage();
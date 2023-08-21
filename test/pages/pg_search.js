class PGSearchPage {
    get tf_Location() {
      return $("//input[@id=':re:']");
    }
  
    get dd_Location() {
      return $('(//ul)[2]/li');
    }
  
    async btn_CheckinDate(in_day) {
  
      await $(`td span[data-date="${in_day}"]`).click();
    }
  
    async btn_CheckoutDate(out_day) {
      await $(`td span[data-date="${out_day}"]`).click();
    }
  
    get tf_AdultChildCount() {
      return $('button[data-testid="occupancy-config"]');
    }
  
    get btn_Minus() {
      return $("//div[contains(@class, 'bfb38641b0')]//button[1]");
      // return $("//body/div[@id='indexsearch']/div[2]/div[1]/form[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/button[1]");
      
    }
  
    get btn_Done() {
      return $("button*=Done");
    }
  
    get btn_Search() {
      return $("//span[text()='Search']/..");
    }
  
    get chk_StarRate() {
      return $('//div[@data-filters-item="class:class=5"]');
      
    }
  
    get btn_SortBy() {
      return $("button*=Sort by");
    }
  
    get btn_PriceLowestListItem() {
      return $("button*=Price (lowest first)");
    }
  
    get tf_LocationSearch() {
      return $('//input[@name="ss"]');
    }
  
    get btn_SelectedCheckinDate() {
      return $("//div[@class='f9cf783bde'][2]//button[1]");
    }
  
    get btn_SelectedCheckoutDate() {
      return $("//div[@class='f9cf783bde'][2]//button[2]");
    }
  
    get txt_Count() {
      //gets all room, adult and child count
      return $$('div[class="e98c626f34"] span[class="e615eb5e43"]');
    }
  
  }
  
module.exports = new PGSearchPage();
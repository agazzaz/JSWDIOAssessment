class PGHomePage {
  get btn_Country() {
    // return $('(//span[@class="e4adce92df"]/button)[2]');
    return $('//body[1]/div[2]/div[1]/header[1]/nav[1]/div[2]/span[2]/button[1]');
    
    
  }

  get btn_CloseRandomModal() {
    // return $('div[class="e5aa33035e"] button');
    return $('button.a83ed08757.c21c56c305.f38b6daa18.d691166b09.ab98298258.deab83296e.f4552b6561');
     
  }

  get btn_CountryUk() {
    return $("button*=English (UK)");
  }

  get btn_CountryUk2() {
    return $("aria/Language: English (UK)");
  }

  get btn_Currency() {
    return $('button[data-testid="header-currency-picker-trigger"]');
  }

  get btn_CurrencyUsd() {
    return $("button*=United States Dollar");
  }

  get btn_CurrencyUsd2() {
    return $("aria/Prices in United States Dollar");
  }
  get btn_Stays() {
    return $('//a[@aria-controls="accommodations"]');
  }

  get btn_AlertClose() {
    return $('div[class="notice-item-close-x"]');
  }

}

module.exports = new PGHomePage();
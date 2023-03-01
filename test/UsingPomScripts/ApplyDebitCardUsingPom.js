const debit = require("../pageobjects/ApplydebitCard");
const home = require("../pageobjects/BankingHomePagePom")



describe("Apply debit card and get debit card number and pin ",async ()=>{


  it(" ", async ()=>{

   await  browser.url("http://testingserver/domain/Online_Banking_System/");
   expect(homePageUrl).toHaveUrlContaining("http://testingserver/domain/Online_Banking_System/");
   await  home.applyDebitCardBtn.click();
   const ApplyDebitCardTitle=await browser.getTitle();
   expect(ApplyDebitCardTitle).toHaveTitleContaining("Apply Debit Card")
   await   debit.debitCardApply("vinod","03-07-1997","pan","9206798281","1011191011998");

  debitdetails=await browser.getAlertText();
  console.log("the debit  card details is "+debitdetails);
  debitcard= debitdetails.split(" ");
  debitno=debitcard[17];
  console.log(debitno);// 421391912155
  debitpin=debitcard[22];
  console.log(debitpin);//2417

  })


} )
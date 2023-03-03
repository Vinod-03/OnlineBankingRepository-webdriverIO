const { expect } = require("chai");
const debit = require("../pageobjects/ApplydebitCard");
const home = require("../pageobjects/BankingHomePagePom")



describe("Apply debit card and get debit card number and pin ",async ()=>{


  it(" ", async ()=>{

    await home.openBrowser();
    homePageTitle=await browser.getTitle();
    expect(homePageTitle).to.contains("Online Banking System")
    await  home.applyDebitCard_Btn.click();
    const ApplyDebitCardTitle=await browser.getTitle();
    expect(ApplyDebitCardTitle).to.contains("Apply Debit Card")
    await   debit.debitCardApply("vinod","03-07-1997","pan","9206798281","1011411011985");
     debitdetails=await browser.getAlertText();
  console.log("the debit  card details is "+debitdetails);
  debitcard= debitdetails.split(" ");
  debitno=debitcard[17];
  console.log(debitno);// 421335539558
  debitpin=debitcard[22];
  console.log(debitpin);//3684

  })


} )
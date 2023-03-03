const home = require("../pageobjects/BankingHomePagePom");
const CustomerHomePage = require("../pageobjects/CustomerProfilePage");
const transfer = require("../pageobjects/FundTransfer");
const internetLog = require("../pageobjects/InternetbankLogin");


describe("FundTransfer Page " , async ()=>{



     it("verifiv=cation of FundTransfer",  async ()=>{

     await  home.openBrowser();
     console.log("Home Page Url is " +homePageUrl);
     expect(homePageUrl).to.contains("http://testingserver/domain/Online_Banking_System/");
     await  (await home.fundTransfer_Btn).click();
     const  LoginPageTitle=await browser.getTitle();
     expect(LoginPageTitle).to.include("Login Page")
     await internetLog.LoginUsingCredential("1011676","password")
     const ComsterProfilePageUrl=await browser.getUrl();
     expect(ComsterProfilePageUrl).to.be.equal("http://testingserver/domain/Online_Banking_System/customer_profile.php");
    await (await CustomerHomePage.clickFundTranstfer_Btn).click();
   await transfer.transferAmount("1011251011610","10000","tranfer");
   await browser.pause(5000);
   const otpMessage=await transfer.otpMessageFromText.getText();
   let otp=otpMessage.split(" ");
   let  ot= otp[13].split(":");
   let  sendOTp=ot.join(' ').trim();
   await  transfer.otpCode_Txt.setValue(sendOTp);
   await (await transfer.verfiy_Btn).click();
   let  SucessfulMessage= await browser.getAlertText();
   console.log(" the Confirmation message " +SucessfulMessage );

      
     
      
       

     })











})
 
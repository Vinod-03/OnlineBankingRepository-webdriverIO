const { expect } = require("chai");
const home = require("../pageobjects/BankingHomePagePom");
const CustomerHomePage = require("../pageobjects/CustomerProfilePage");
const internetLog = require("../pageobjects/InternetbankLogin");


describe("Internet Login ",async ()=>{

    it("Login  using credential ", async ()=>{
     
       await home.openBrowser();
       const homePageTitle=  await browser.getTitle();
       expect(homePageTitle).to.be.contains("Online Banking System")
       await home.mouseHoverToLogin();
       const  LoginPageTitle=await browser.getTitle();
       expect(LoginPageTitle).to.include("Login Page")
       await internetLog.LoginUsingCredential("1011676","password"); 
       const ComsterProfilePageUrl=await browser.getUrl();
       expect(ComsterProfilePageUrl).to.be.equal("http://testingserver/domain/Online_Banking_System/customer_profile.php");
    })
    
    
       it("Add benificiary" ,async () =>{
         CustomerHomePage.addbenificiary("1011251011610","1011","vinay1234");
         const sucefulMessage=  await browser.getAlertText();
         console.log("The benficiary add succesfullt"+sucefulMessage);


       })


})
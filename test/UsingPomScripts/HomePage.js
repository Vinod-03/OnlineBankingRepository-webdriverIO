
const home = require("../pageobjects/BankingHomePagePom.js");
const userDetails = require("../pageobjects/AccountRegistrationPom.js");
const { expect } = require("chai");

describe("Internet Banking Home Page  ",async ()=>{
   let appno=""

    it(" open the browser Click on  OpenAccount Button " ,async()=>{

  await home.openBeowser();
  const  homePageUrl= await browser.getUrl();
  console.log("Home Page Url is " +homePageUrl);
  expect(homePageUrl).to.equal("http://testingserver/domain/Online_Banking_System/");
  await (await home.openAccount_Btn).click();
   const registPageTitle= browser.getTitle();
   expect(registPageTitle).toHaveTitleContaining("Registration Form");

  
  
  });
  
  it("enter the User details" , async ()=>{

  await userDetails.CreateAccount("vinod","9206798281","@test","08015422","03-07-1997","pan","uk","home","office","pin","area","Male","California","Los Angeles","Saving");
    })
   
    it("Reconfirmation page " ,async ()=>{
     const reconfirmPageUrl= await browser.getUrl();
      expect(reconfirmPageUrl).toHaveUrlContaining("http://testingserver/domain/Online_Banking_System/cust_regfrm_confirm.php");
     await  userDetails.Reconfimation();   
    })


    it("get the Application no ",async ()=>{
       
        let apno =await browser.getAlertText();
    
        let  textAlertappno= apno.split('')
        applicationno =textAlertappno.filter((textAlertappno)=>{return textAlertappno>=0 &&  textAlertappno<=9});
        appno=applicationno.join('').trim(); //766954258
          console.log("The Applicatin no from   alert text Pop-Up  " +appno);
        });
  
})
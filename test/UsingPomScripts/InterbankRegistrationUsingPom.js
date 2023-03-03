const { expect } = require("chai");
const home = require("../pageobjects/BankingHomePagePom");
const register = require("../pageobjects/InternetBankRegister");

describe(" Internet banking registration", async ()=>{

 it("register ", async ()=>{

    await home.openBrowser();
    const homePageTitle=   await browser.getTitle();
    expect(homePageTitle).to.be.equals("Online Banking System")
    await home.mouseHoverTORegister();
     const InternetBankingRegistration=await browser.getTitle();
    expect(InternetBankingRegistration).to.contain("Internet Banking Registration");
    await register.RegistrationDetails();
    let  internetBanking= await browser.getAlertText();
    console.log(internetBanking);
    let  textAlertCid= internetBanking.split('')
    sigupId =textAlertappno.filter((textAlertCid)=>{return textAlertCid>=0 &&  textAlertCid<=9});
    cid=applicationno.join('').trim();
    console.log("The Applicatin no from   alert text Pop-Up  " +cid);
 })




})
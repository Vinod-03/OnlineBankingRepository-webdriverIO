const home = require("../pageobjects/BankingHomePagePom");
const internetLog = require("../pageobjects/InternetbankLogin");





describe(" ",async ()=>{

    it(" ", async ()=>{
     
       await home.openBeowser();
       await internetLog.LoginUsingCredential("","");
       

    })



})
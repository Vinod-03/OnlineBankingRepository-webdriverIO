const home = require("../pageobjects/BankingHomePagePom")
const penAcc = require("../pageobjects/PendingCustomerPom")
const sHomePage = require("../pageobjects/StaffHomePagePom")
const staff = require("../pageobjects/StaffLoginPagePom")



describe("Approve Pending Account " , async ()=>{
 
 it("StaffLogin Page ",async ()=>{

  browser.url("http://testingserver/domain/Online_Banking_System/cust_regfrm_confirm.php");

 (await home.StaffLoginBtn).click();
 
 await   staff.staffLoginWithCredential("210001","password")
 });

 it("Approve account  ",async ()=>{
 
  await   (await sHomePage.approveBtn).click();
  await penAcc.AccountNo("748058907");
  let accnoText =await browser.getAlertText();
  let  accountno= accnoText.split('')
  var  accno=accountno.filter((accountno)=>{return accountno>=0  &&  accountno<=9 });   accnumber=accno.join('').trim();
  console.log("The  Account  no from   alert text Pop-Up  " +accnumber);
  
 })






})


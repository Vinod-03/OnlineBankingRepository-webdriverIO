const { expect } = require("chai")
const home = require("../pageobjects/BankingHomePagePom")
const penAcc = require("../pageobjects/PendingCustomerPom")
const sHomePage = require("../pageobjects/StaffHomePagePom")
const staff = require("../pageobjects/StaffLoginPagePom")



describe("Approve Pending Account " , async ()=>{
 
 it("StaffLogin Page ",async ()=>{
  await browser.maximizeWindow();
  await browser.url("http://testingserver/domain/Online_Banking_System/"); 
  const homePageTitle=await browser.getTitle();
  expect(homePageTitle).to.contains("Online Banking System");
  await (await home.StaffLogin_Btn).click();
  const  staffloginpageTitle=await browser.getTitle();
  expect(staffloginpageTitle).to.contains("Staff Page");
  await   staff.staffLoginWithCredential("210001","password")
  const StaffHomepage=await browser.getTitle();
  expect(StaffHomepage).to.contains("Staff Home");
 });

 it("Approve account  ",async ()=>{
 
  await    sHomePage.approve_Btn.click();
  const  aproveAcctitle=await browser.getTitle();  
  expect(aproveAcctitle).to.contains("Pending Customers")
  await penAcc.applicationNo("463263334");
  let accnoText =await browser.getAlertText();
  let  accountno= accnoText.split('')
  var  accno=accountno.filter((accountno)=>{return accountno>=0  &&  accountno<=9 });  
  let  accnumber=accno.join('').trim();//1011411011985
  console.log("The  Account  no from   alert text Pop-Up  " +accnumber);
  
})



})


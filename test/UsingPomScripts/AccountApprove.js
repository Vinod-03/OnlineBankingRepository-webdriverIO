const home = require("../pageobjects/BankingHomePagePom")
const penAcc = require("../pageobjects/PendingCustomerPom")
const sHomePage = require("../pageobjects/StaffHomePagePom")
const staff = require("../pageobjects/StaffLoginPagePom")



describe("Approve Pending Account " , async ()=>{
 
 it("StaffLogin Page ",async ()=>{

  browser.url("http://testingserver/domain/Online_Banking_System/cust_regfrm_confirm.php");

 (await home.StaffLoginBtn).click();
  const  staffloginpageTitle=await browser.getTitle();
  expect(staffloginpageTitle).toHaveTitleContaining("Staff Page");
 await   staff.staffLoginWithCredential("210001","password")
      const StaffHomepage=await browser.getTitle();
      expect(StaffHomepage).toHaveTextContaining("StaffHomepage")
 });

 it("Approve account  ",async ()=>{
 
  await   (await sHomePage.approveBtn).click();
    const  aproveAcctitle=await browser.getTitle();  
    expect(aproveAcctitle).toHaveTitleContaining("Pending Customers")
  await penAcc.AccountNo("748058907");
  let accnoText =await browser.getAlertText();
  let  accountno= accnoText.split('')
  var  accno=accountno.filter((accountno)=>{return accountno>=0  &&  accountno<=9 });   accnumber=accno.join('').trim();
  console.log("The  Account  no from   alert text Pop-Up  " +accnumber);
  
 })



})


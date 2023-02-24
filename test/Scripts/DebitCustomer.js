

   describe("Debit customer Page ",async()=>{


   it("staff Login ",async()=>{

    browser.url("http://testingserver/domain/Online_Banking_System/")
    await  browser.$(`=Staff Login`).click();
    await  browser.$(`[name="staff_id"]`).setValue("210001")
    await  browser.$(`[name="password"]`).setValue("password")  
    await  browser.$(`[name="staff_login-btn"]`).click();
    await expect(browser).toHaveTitleContaining("Staff Home")
    await   browser.$(`[name="credit_cust_ac"]`).click();
    await expect(browser).toHaveUrlContaining("http://testingserver/domain/Online_Banking_System/credit_customer_ac.php");

     });



   it("credit the customer by accnumber and amount ",async()=>{
  await  browser.$(`[name="customer_account_no"]`).setValue("1011221011676");
  browser.debug();
  await browser.$(`[name="credit_amount"]`).setValue("10000");

   await  browser.$(`[name="credit_btn"]`).click();
  creditcust= await    browser.getAlertText();
  console.log("message "+creditcust);
  

          


   });


})

describe("  Add  benficiary  ", async ()=>{



    it("login " ,async ()=>{

  await browser.url("http://testingserver/domain/Online_Banking_System/")
  await (await browser.$(`//a[contains(text(),'Internet Banking')]`)).moveTo({ })
  await (await browser.$(`//li[text()="Login "]`)).click();
  await (await browser.$(`[name="customer_id"]`)).setValue("1011676");
  await (await browser.$(`[name="password"]`)).setValue("password");
  await (await browser.$(`[name="login-btn"]`)).click();
    } )



    it("add benficiary " , async()=>{
     
        (await browser.$(`//li[text()="Fund Transfer"]`)).click();
        await (await browser.$(`[name="add_beneficiary"]`)).click();
        await (await browser.$(`[name="beneficiary_acno"]`)).setValue("1011251011610");
        await (await browser.$(`[name="Ifsc_code"]`)).setValue("1011");
        await (await browser.$(`[name="beneficiary_name"]`)).setValue("vinay1234");
        await (await browser.$(`[name="beneficiary_acc_type"]`)).selectByIndex(1);
         await (await browser.$(`[name="add_beneficiary_btn"]`)).click();
      const sucefulMessage=  await browser.getAlertText();
      console.log("The benficiary add succesfullt"+sucefulMessage);
         
        //
    await (await browser.$(`[name="logout_btn"]`)).click();


    })
})
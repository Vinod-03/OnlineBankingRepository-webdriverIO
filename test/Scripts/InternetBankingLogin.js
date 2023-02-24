describe("InternetBanking-Login", async ()=>{


it("login",async ()=>{

  await browser.url("http://testingserver/domain/Online_Banking_System/")
  await (await browser.$(`//a[contains(text(),'Internet Banking')]`)).moveTo({ })
  await (await browser.$(`//li[text()="Login "]`)).click();


})




   it("User credential-login" , async ()=>{

   await (await browser.$(`[name="customer_id"]`)).setValue("1011676");
   await (await browser.$(`[name="password"]`)).setValue("password");
   await (await browser.$(`[name="login-btn"]`)).click();

   await browser.pause(5000)


   })

})
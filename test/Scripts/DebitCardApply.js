describe("Apply debit card ", async ()=>{

   it("debit card details", async()=>{
   
       browser.url("http://testingserver/domain/Online_Banking_System/");
    //await   browser.scroll(300, 300)
//     await browser.$(`//li[contains(text(),"Apply Debit Card")]`).click();
//     await browser.$(`[name="holder_name"]`).setValue("vinay1234")

//     await browser.$(`[name="dob"]`).click();
//     await browser.$(`[name="dob"]`).setValue("03-07-1997");
    
    
//     await browser.$(`[name="pan"]`).setValue("azap258")
//     await browser.$(`[name="mob"]`).setValue("9876543210")
//     await browser.$(`[name="acc_no"]`).setValue("1011221011676")
//     await  browser.$(`[name="dbt_crd_submit"]`).click();
    
//     debitdetails=await browser.getAlertText();
//     console.log("the debit  card details is "+debitdetails);
    
//    debitcard= debitdetails.split(" ");

//    debitno=debitcard[17];
//    console.log(debitno);
//    debitpin=debitcard[22];
//    console.log(debitpin);


   })


   it("",async()=>{
   
    //await browser.$(`//a[contains(text(),"Home")]`).click();
   await browser.$(`//a[contains(text(),'Internet Banking')]`).moveTo({ })
   await browser.$("//li[contains(text(),'Register')]").click();
   //await expect(browser).toHaveTextContaining("Internet Banking Registration")
   await  browser.$(`[name="holder_name"]`).setValue("vinay1234")
   await  browser.$(`[name="accnum"]`).setValue("1011221011676")
   await  browser.$(`[name="dbtcard"]`).setValue("421345888619")
   await  browser.$(`[name="dbtpin"]`).setValue("3095")
  
   await  browser.$(`[name="mobile"]`).setValue("9876543210")
  
   await  browser.$(`[name="dob"]`).click();
   await  browser.$(`[name="dob"]`).setValue("03-07-1997");
   await   browser.$(`[name="pan_no"]`).setValue("azap258");
   await  browser.$(`[name="last_trans"]`).setValue("10000")
   await  browser.$(`[name="password"]`).setValue("password")
   await  browser.$(`[name="cnfrm_password"]`).setValue("password")
  
   
  await browser.$(`[name="submit"]`).click();
   await browser.pause(5000)
    internetBanking= await browser.getAlertText();
   console.log(internetBanking);

   })






})
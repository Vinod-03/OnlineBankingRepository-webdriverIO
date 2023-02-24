describe(" Internet banking ", async ()=>{

    it("signup ",async()=>{
   
        browser.url("http://testingserver/domain/Online_Banking_System/")
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
       
       let  internetBanking= await browser.getAlertText();
       console.log(internetBanking);
       

       let  textAlertCid= internetBanking.split('')
             
       sigupId =textAlertappno.filter((textAlertCid)=>{return textAlertCid>=0 &&  textAlertCid<=9});
       cid=applicationno.join('').trim();
         console.log("The Applicatin no from   alert text Pop-Up  " +cid);
    
       })
    
    




})
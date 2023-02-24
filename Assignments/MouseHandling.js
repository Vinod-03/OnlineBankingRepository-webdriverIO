describe("Mouse functions",async()=>{

   it("doubleclick" , async()=>{
    await browser.url("https://demoqa.com/buttons")
    await browser.$("#doubleClickBtn").doubleClick();
    await browser.pause(5000)
  const duclick= await browser.$(`#doubleClickMessage`);
   duclick.isDisplayed(2000);
   duclick.getText();
   })


   })



   describe("Mouse functions",async()=>{
    

      it("moveTO", async()=>{
      
          browser.url("http://testingserver/domain/Online_Banking_System/");
       await   browser.scroll(300, 300)
       await browser.$(`//li[contains(text(),"Apply Debit Card")]`).click();
       await browser.$(`[name="holder_name"]`).setValue("vinay1234")
   
       await browser.$(`[name="dob"]`).click();
 
    })

  })
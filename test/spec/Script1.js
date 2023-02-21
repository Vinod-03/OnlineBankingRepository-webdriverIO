describe("welcome page face book",()=>{

   it("", async ()=>{
     // await browser.maximizeWindow();
      await browser.url("http://testingserver/domain/Online_Banking_System/");

    
       console.log(" ------>the browser url is ==="+await browser.getUrl());
       await $$(`//a`).forEach(a=>console.log(a.getText()));
      
     // var a=await $(`=Forgotten password?`).click();

      await $(`aria/Open Account`).click();
      await $(`aria/Name`).setValue('vinod');
   //   await $(`aria/Name`).setValue('vinod');
   

    //   await browser.pause(3000)
    // await $(`//a[contains(text(),'Internet Banking')]`).moveTo({})

    // await $(`//li[.="Login "]`).click();
    
     await browser.pause(3000)


   })
 
  




})
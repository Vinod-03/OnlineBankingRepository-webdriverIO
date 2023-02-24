describe("Calendra POP" ,async()=>
{


  it("makemytrip", async ()=>{

     await browser.url("https://www.redbus.in/")


   let  a= await browser.$(`//input[@placeholder="FROM"]`).click();
    
     await browser.$(` //input[@id="txtDestination"]`).setValue("manglore")

      await browser.$(`#onward_cal`).click();

    await browser.$(`////span[.="26"]`).click();

   

  })





})
describe("FaceBookLogin",async ()=>{
      

    it("by enterting the worng data" , async ()=>{
  await browser.url("https://www.facebook.com/login/");
  await   browser.$(`[name="email"]`).setValue("000");
  await  browser.$(`[name="pass"]`).setValue("aa");
  await  browser.$(`[name="login"]`).click();
 
  

  const elem = await $('//div[contains(text(),"t connected to an account. ")]')
  await elem.waitUntil(async function () {
      return (await elem.isDisplayed())}, {
      timeout: 5000,
      timeoutMsg: 'timeout'
  });

    
  const  errorMessage=  elem.getText();

  console.log("The Error message is "+errorMessage);





    })
 





})
describe(" " , async()=>{

    it(" ", async ()=>{
await browser.url("https://www.igp.com/");
const searchtext=await browser.$(`[name="q"]`);
  
await searchtext.setValue("cakes");

 const sugge=await browser.$$(`//div[contains(text(),' Cakes')]`);
  

     sugge.forEach(element => {
          console.log(" cakes "+element).getText();
     });
 





   })




})
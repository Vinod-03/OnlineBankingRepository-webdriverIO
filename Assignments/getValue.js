describe(" ",async ()=>{

  it("  4" , async ()=>{

    
   
    await browser.url("https://www.facebook.com/login/")
   let   value= await browser.$(`//a`).getValue();
     
        //   value.forEach(element => {
        //     console.log(element.getValue("href"));
        //   });
   
   

        console.log("the value is"+value);
   
  



  })

    
})
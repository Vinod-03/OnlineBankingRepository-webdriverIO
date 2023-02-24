describe(" ", async ()=>{

    it("order cake", async()=>{

     browser.url("https://www.igp.com/")
   const  homePageTitle= await browser.getUrl();
   expect(browser).toHaveTitleContaining(homePageTitle)
     await browser.$(`[name="q"]`).setValue("cakes");
     await  browser.$(`//img[@class="img-responsive" and @alt="Search"]`).click();
    const  cakesPage= await browser.getUrl();
    expect(browser).toHaveTitleContaining("cake")
    })

    it("select the cake", async()=>{
    
     
     await  browser.$(`//div[@class="product-name-w product-name-w-revamp"]//p[contains(text(),'Truffle Delight Cake (Half Kg)') and @class="product-name product-name-revamp"]`).click();
     
    })


    it("verification of price ", async()=>{
    
     const  hprice=await  browser.$(`//h1[text()="Truffle Delight Cake (Half Kg)"]/../../../..//span[@class="number prod-price  "]`).getText();
          halfpricetoArray= hprice.split(" ");
          
          cakeHalfKg=halfpricetoArray[1];
     oneKgCake=  await browser.$(`//a[@data-name="Truffle Delight Cake (1 KG)"]`);
    oneKgCake.click();
     const  Oneprice=await  browser.$(`//h1[text()="Truffle Delight Cake (1 Kg)"]/../../../..//span[@class="number prod-price  "]`).getText();
     
       oneKgCakeToArrayOrice =Oneprice.split(" ");
       oneKgCakePrice=oneKgCakeToArrayOrice[1]

     expect(Number(oneKgCakePrice)).toBeGreaterThan(Number(cakeHalfKg))

    })

    it("add to  cart ", async()=>{
      await browser.$(`#location-input`).setValue("560076");
      await browser.scroll(500,500)
      
     await browser.$(`//button[@ id="show-Select_Date"]`).click();
    
      await  browser.$(`//a[text()='24']`).click();
    
      await  browser.$(`#timepicker`).selectByAttribute('value', "1");
      await  browser.$(`//button[@id="add-cart"]`).click();
      await browser.pause(5000);
    })


    it("without coupons checkout ", async()=>{

      await  browser.$(`//span[text()="CONTINUE WITHOUT ADDONS"]`).click();
    
      await  browser.$(`//a[text()=" Proceed To Checkout"]`).click();
   
    })

})
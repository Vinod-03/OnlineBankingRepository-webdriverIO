describe("Online food ordering " , async()=>{

 it("Home page", async ()=>{
     
    browser.url("http://testingserver/domain/Online_Food_Ordering_System/");
  const homePageTitle= await browser.getTitle();
   

});
   
    it("user login",async()=>{

      const elem =await browser.$(`//a[text()="Login"]`);
      await elem.waitForClickable({ timeout: 3000 });
      await elem.click();
    const username= await browser.$(`[name="username"]`)
     await username.waitForDisplayed(1000)
    await username.setValue("vinod kumar R");
    await browser.$(`[name="password"]`).setValue("123456789")
      await browser.$(`[name="submit"]`).click();

   browser.pause(5000)

 })


it("select the resturant ", async ()=>{
    await browser.$("//a[contains(text(),'Restaurants ')]").click();
    await browser.$(`//a[text()='North Street Tavern' ]/../../../..//a[text()='View Menu' and  @href="dishes.php?res_id=1" ]`).click();
   
   
});


it("verification of the price and check out ", async ()=>{
    initalamount = await  browser.$(`//p[text()='TOTAL']/..//strong`).getText();
    iamt= initalamount.split('');
    iValue=(Number(iamt[1]));
    await  browser.$(`//a[text()='Stuffed Jacket Potatoes']/../../../../..//input[@value="Add To Cart"]`).click();
    finalValue =await  browser.$(`//p[text()='TOTAL']/..//strong`).getText();
    famt=finalValue.split('')
    fValue=(Number(famt[1]));
    expect(fValue).toBeGreaterThan(iValue);
  

 const  foodtext= await browser.$(`//a[.="Stuffed Jacket Potatoes"]`).getText();
 const  foodprice=await browser.$(`//span[contains(text(),"$8.00")]`).getText();
 const  foodqty=await browser.$(`//span[contains(text(),"$8.00")]/..//input`).getValue();


       let appprice=foodprice.split(' ')


  console.log("the ordered food is "+foodtext + "the ordered food price is  "+foodprice +" the quantity is "+foodqty);

  const  billtext= await browser.$(`//div[@class="title-row"]`).getText();
 const  billprice=await browser.$(`//input[@class="form-control b-r-0"]`).getValue();
 const  billqty=await browser.$(`//input[@id="example-number-input"]`).getValue();


    let  ordered=billprice.split(' ')
  
  
        
     //  expect((Number(ordered[1])).toBe(Number(appprice[1])))
  
  
  
  
   (await browser.$(`//a[text()="Checkout"]`)).click();

 })




  it("food order",async()=>{


    (await browser.$(`[name="submit"]`)).click();
    a= await   browser.acceptAlert()
     const getText= await   browser.getAlertText();
    console.log("order confirm "+getText);
  






  }

  )

})
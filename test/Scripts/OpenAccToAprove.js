//login as customer and enter the details and login as  staff and approve the account  based on application number 
 var openAcc
 {
   var accnumber=0
describe("open account for user ",async ()=>{
//launch the browser
       
   it("launch the browser  ",async ()=>{

  await browser.maximizeWindow();
   await browser.url("http://testingserver/domain/Online_Banking_System/");   
   const onlineBankingTitle= await  browser.getTitle();
   
   console.log("The title of the home Page ==>"+onlineBankingTitle);
     
    await expect(browser).toHaveTitleContaining('Online Banking System')

    });
   

  //click on create account 
   it("Click on create Account ",async ()=>{

    await browser.$('//li[contains(text(),"Open Account")]').click();
   const registrationForm=await browser.getTitle();
   console.log("The Account registration page  Title " +registrationForm);
   const acctualregistrationForm="Registration Form" ;
   await expect(browser).toHaveTitleContaining(acctualregistrationForm)
   });


   // eneter the valid customer details
   it("enter the customerdetails ",async ()=>{    
    await browser.$(`[name="name"]`).setValue("vinay1234");
    await browser.$(`[name="mobile"]`).setValue("9876543210");
    await browser.$(`[name="email"]`).setValue("123@test.com");
    await browser.$(`[name="landline"]`).setValue("080147");
    await browser.$(`[name="dob"]`).click();
    await browser.$(`[name="dob"]`).setValue("03-07-1997");
    await browser.$(`[name="pan_no"]`).setValue("azap258");
    await browser.$(`[name="citizenship"]`).setValue("14785");
    await browser.$(`[name="homeaddrs"]`).setValue("no adress");
    await browser.$(`[name="officeaddrs"]`).setValue("no office");
    await browser.$(`[name="pin"]`).setValue("no 789");
    await browser.$(`[name="arealoc"]`).setValue("no area");
    await browser.$('[name="gender"]').selectByVisibleText("Male");
    await browser.$(`[name="state"]`).selectByAttribute('value', 'California');
    await browser.$(`[name="city"]`).selectByAttribute('value',"Los Angeles")
    await browser.$(`[name="acctype"]`).selectByAttribute('value',"Saving")
    await browser.$(`[name=submit]`).click();
  
   });
   
    //Refverification of customerdetails
     it("Reverficiation of customerDetails ",async ()=>{  
     const actualReconfirmUrl = await browser.getUrl();
     expectedReconfirmUrl="http://testingserver/domain/Online_Banking_System/cust_regfrm_confirm.php";
     console.log("The reconfirmation page URL" +actualReconfirmUrl);
     await expect(browser).toHaveUrl(expectedReconfirmUrl);
     await  browser.$(`[name="cnfrm-submit"]`).click();
    

   });

    // getting the application number from text POP
     it("get the Application no ",async ()=>{
       
    let apno =await browser.getAlertText();

    let  textAlertappno= apno.split('')
          
    applicationno =textAlertappno.filter((textAlertappno)=>{return textAlertappno>=0 &&  textAlertappno<=9});
    appno=applicationno.join('').trim();
      console.log("The Applicatin no from   alert text Pop-Up  " +appno);
    });

     
    // Login as staff  with valid credentials
    it("Staff Login",async()=>{
      await  browser.$(`=Staff Login`).click();
      await  browser.$(`[name="staff_id"]`).setValue("210001")
      await  browser.$(`[name="password"]`).setValue("password")  
      await  browser.$(`[name="staff_login-btn"]`).click();

       });


     //approve account
       it("approve account",async()=>{

         await  browser.$(`[name="apprvac"]`).click();
         await browser.$(`[name="application_no"]`).setValue(appno)
         await  browser.$(`//input[@name="search_application"]`).click();  
         let expectedApno=await browser.$(`//tbody/tr/th[2]/../../tr/td[2]`).getText();
         console.log("The expected Application no "+expectedApno);
         await expect(appno).toEqual(expectedApno);
         await  browser.$(`[name="approve_cust"]`).click();
         console.log("The customer Account is created");
         let accnoText =await browser.getAlertText();
         let  accountno= accnoText.split('')
          
        accno=accountno.filter((accountno)=>{return accountno>=0  &&  accountno<=9 });
           accnumber=accno.join('').trim();
        console.log("The  Account  no from   alert text Pop-Up  " +accnumber);       

      });
     

     

    

   })
 }

      var data=new openAcc();
    module.exports=data;
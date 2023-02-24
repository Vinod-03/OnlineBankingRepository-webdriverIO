describe("Table Data" , async ()=>{

  it("to read account number from table  " , async ()=>{


  await browser.url("http://testingserver/domain/Online_Banking_System/");
   
  await  browser.$(`=Staff Login`).click();
  await  browser.$(`[name="staff_id"]`).setValue("210001")
  await  browser.$(`[name="password"]`).setValue("password")  
  await  browser.$(`[name="staff_login-btn"]`).click();
 await browser.$(`[name="viewdet"]`).click();
  
   let accno=await browser.$$(`//th[.="Account No."]/../following-sibling::tr/td[4]`);



          accno.forEach(element => {
            console.log(" the account no is "+element.getText());
     });
  })




})
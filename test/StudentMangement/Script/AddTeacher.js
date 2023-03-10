const { expect } = require("chai")
const teach = require("../PomPage/AllTeacher")
const SMangeHome = require("../PomPage/Homepage")
const adminlogin = require("../PomPage/LoginPage")
const newTeacher = require("../PomPage/Teacher")


describe("Student Management",async()=>{


      it("Login to the application " ,async()=>{


     await browser.url("http://testingserver/domain/Student_Management_System/view/login.php")
           const  LoginPageUrl=  browser.getUrl();
           
           await expect(LoginPageUrl).equals("http://testingserver/domain/Student_Management_System/view/login.php");
      await adminlogin.loginCredential("admin@gmail.com","12345");
      
      await  (await SMangeHome.Techer_Btn).click();
      await browser.pause(5000); 
      let    addteach=  await  (await SMangeHome.addTeacher_btn);
      await  addteach.waitForClickable();
      await addteach.click();
      await newTeacher.addTeacherDetails("107"," vinod ","vinod r","jp nagar","123-456-7828","a113355@test.com")
     
      await  (await newTeacher.add_Btn).click();

     
       await (await SMangeHome.Techer_Btn).click();
     
     let  allTeacher= await (await SMangeHome.allTeacherBtn);
      await allTeacher.waitForClickable();
      await allTeacher.click();
      await (await teach.Search_txt).setValue("vinod r")
      let   data= await (await teach.tableData_txt).getText();
       
       await  expect(data).equal("vinod r")




     
      ;

    
                


      })





})
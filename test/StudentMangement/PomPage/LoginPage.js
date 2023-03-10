

class LoginPage

{


        get adminEmail_txt()
        {
            return $(`#email`);
        }


        get Password_txt()
        {
            return $(`#password`);
        }


      get  Login_btn()
      {
         return $(`#btnSubmit`);

      }

    
        async loginCredential(id,password)
        {
           await  this.adminEmail_txt.setValue(id)
           await  this.Password_txt.setValue(password)
           await  (await this.Login_btn).click();
        }

}

 let adminlogin=new LoginPage();
  module.exports=adminlogin
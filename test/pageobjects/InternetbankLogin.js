
class Login
{

   get userCustomerId_Txt()
   {
      return $(`[name="customer_id"]`);
   }


    get userPassword_Txt()
    {
       return $(`[name="password"]`);

    }
     
    get login_Btn()
    {
      return $(`[name="login-btn"]`);  
    }

     async LoginUsingCredential(cid,password)
     {

        await (await this.userCustomerId_Txt).setValue(cid);
        await (await this.userPassword_Txt).setValue(password);
        await (await this.login_Btn).click();
     }



} 
   const  internetLog=new Login();
    module.exports=internetLog;











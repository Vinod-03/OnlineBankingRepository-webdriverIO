class StaffLogin
{

   get userNameTxt()
   {
    return $(`[name="staff_id"]`)
   }

    get passwordTxt()
    {
       return $(`[name="password"]`)
    }

    get loginBtn()
    {
        return $(`[name="staff_login-btn"]`)
    }




   async staffLoginWithCredential(staffid,password)
    {

      await this.userNameTxt.setValue(staffid);
      await this.passwordTxt.setValue(password);
      await this.loginBtn.click();

    }

}

let   staff=new StaffLogin();
module.exports=staff;
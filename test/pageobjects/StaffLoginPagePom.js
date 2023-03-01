class StaffLogin
{

   get userName_Txt()
   {
    return $(`[name="staff_id"]`)
   }

    get password_Txt()
    {
       return $(`[name="password"]`)
    }

    get login_Btn()
    {
        return $(`[name="staff_login-btn"]`)
    }




   async staffLoginWithCredential(staffid,password)
    {

      await this.userName_Txt.setValue(staffid);
      await this.password_Txt.setValue(password);
      await this.login_Btn.click();

    }

}

let   staff=new StaffLogin();
module.exports=staff;
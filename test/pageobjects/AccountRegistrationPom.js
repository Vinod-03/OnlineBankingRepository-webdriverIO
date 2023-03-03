

class Register
{

       get userName_Txt()
       {
          return $(`[name="name"]`);
       }
       get userMobileNumber_Txt()
       {
          return $(`[name="mobile"]`);
       }
       
       get userEmail_Txt()
       {
          return $(`[name="email"]`);
       }

       
       get userLandlineNo_Txt()
       {
          return $(`[name="landline"]`);
       }

       get userDob_Txt()
       {
          return $(`[name="dob"]`);
       }
       
       get userPanNumber_Txt()
       {
          return $(`[name="pan_no"]`);
       }

       get userCitizshpp_Txt()
       {
          return $(`[name="citizenship"]`);
       }

       get userHomeAddres_Txt()
       {
          return $(`[name="homeaddrs"]`);
       }

       get userOfficeaddrs_Txt()
       {
          return $(`[name="officeaddrs"]`);
       }
       
       get   userAddresPinCode_Txt()
       {
          return $(`[name="pin"]`);
       }
   

       get   userArea_Txt()
       {
          return $(`[name="arealoc"]`);
       }
    
    
   
      get userGender_Select()
      {
        return $(`[name="gender"]`);
      }


      get userState_Select()
      {
        return $(`[name="state"]`);
      }


      get userCity_Select()
      {
        return $(`[name="city"]`);
      }

      get NomineeAccType_Select()
      {
        return $(`[name="acctype"]`);
      }
     

      get submit_Btn()
      {
        return $(`[name="submit"]`);
      }
      

      get Reconfirm_Btn()
      {
        return $(`[name="cnfrm-submit"]`);
      }

      

     async  CreateAccount(name,mobile,email,landlineno,dob,pan_no,citizenship,homeaddrs,officeaddrs,pin,arealoc,gender,state,city,acctype)
     {  
    await this.userName_Txt.setValue(name);
    await this.userMobileNumber_Txt.setValue(mobile);
    await this.userEmail_Txt.setValue(email);
    await this.userLandlineNo_Txt.setValue(landlineno);
    await this.userDob_Txt.click();
    await this.userDob_Txt.setValue(dob);
    await this.userPanNumber_Txt.setValue(pan_no);
    await this.userCitizshpp_Txt.setValue(citizenship);
    await this.userHomeAddres_Txt.setValue(homeaddrs);
    await this.userOfficeaddrs_Txt.setValue(officeaddrs);
    await this.userAddresPinCode_Txt.setValue(pin);
    await this.userArea_Txt.setValue(arealoc);
    await  this.userGender_Select.selectByVisibleText(gender);
    await (await this.userState_Select).selectByVisibleText(state);
    await (await this.userCity_Select).selectByVisibleText(city);
    await (await this.NomineeAccType_Select).selectByVisibleText(acctype);
    await this.submit_Btn.click();
     }

   async Reconfimation()
   {

    await this.Reconfirm_Btn.click();

   }
   
  


} 

  let  userDetails=new Register();
   module.exports=userDetails;



class Register
{

       get userNameTxt()
       {
          return $(`[name="name"]`);
       }
       get userMobileNumberTxt()
       {
          return $(`[name="mobile"]`);
       }
       
       get userEmailTxt()
       {
          return $(`[name="email"]`);
       }

       
       get userLandlineNoTxt()
       {
          return $(`[name="landline"]`);
       }

       get userDob()
       {
          return $(`[name="dob"]`);
       }
       
       get userPanNumberTxt()
       {
          return $(`[name="pan_no"]`);
       }

       get userCitizshppTxt()
       {
          return $(`[name="citizenship"]`);
       }

       get userHomeAddresTxt()
       {
          return $(`[name="homeaddrs"]`);
       }

       get userOfficeaddrsTxt()
       {
          return $(`[name="officeaddrs"]`);
       }
       
       get   userAddresPinCode()
       {
          return $(`[name="pin"]`);
       }
   

       get   userAreaTxt()
       {
          return $(`[name="arealoc"]`);
       }
    
    
   
      get userGenderSelect()
      {
        return $(`[name="gender"]`);
      }


      get userStateSelect()
      {
        return $(`[name="state"]`);
      }


      get userCitySelect()
      {
        return $(`[name="city"]`);
      }

      get NomineeAccTypeSelect()
      {
        return $(`[name="acctype"]`);
      }
     

      get submitBtn()
      {
        return $(`[name="submit"]`);
      }
      

      get ReconfirmBtn()
      {
        return $(`[name="cnfrm-submit"]`);
      }

      

     async  CreateAccount(name,mobile,email,landlineno,dob,pan_no,citizenship,homeaddrs,officeaddrs,pin,arealoc,gender,state,city,acctype)
     {  
     await this.userNameTxt.setValue(name);
    await this.userMobileNumberTxt.setValue(mobile);
    await this.userEmailTxt.setValue(email);
    await this.userLandlineNoTxt.setValue(landlineno);
    await this.userDob.click();
    await this.userDob.setValue(dob);
    await this.userPanNumberTxt.setValue(pan_no);
    await this.userCitizshppTxt.setValue(citizenship);
    await this.userHomeAddresTxt.setValue(homeaddrs);
    await this.userOfficeaddrsTxt.setValue(officeaddrs);
    await this.userAddresPinCode.setValue(pin);
    await this.userAreaTxt.setValue(arealoc);
    await  this.userGenderSelect.selectByVisibleText(gender);
    await (await this.userStateSelect).selectByVisibleText(state);
    await (await this.userCitySelect).selectByVisibleText(city);
    await (await this.NomineeAccTypeSelect).selectByVisibleText(acctype);
    await this.submitBtn.click();
     }

   async Reconfimation()
   {

    await this.ReconfirmBtn.click();

   }
   
  


} 

  let  userDetails=new Register();
   module.exports=userDetails;



class signup
{


     get userName_Txt()
     {
        return $(`[name="holder_name"]`);
     }

     get userAccNo_Txt()
     {
        return $(`[name="accnum"]`);
     }

     get debitCardNo_Txt()
     {
       return $(`[name="dbtcard"]`);
     }

    get debitPin_Txt()
    {
        return $(`[name="dbtpin"]`);
    }
     
       

    get userMobileno_Txt()
    {
        return $(`[name="mobile"]`);
    }
    get  userDob_Txt()
    {
        return $(`[name="dob"]`);
    }


    get  userPanNo_Txt()
    {
        return $(`[name="dob"]`);
    }
    
      
    get userLastTrans_Txt()
    {
        return $(`[name="last_trans"]`);
    }
     get userpass_Txt()
     {
         return $(`[name="password"]`);
     }
      
     get userConfirmPass_Txt()
     {
         return $(`[name="cnfrm_password"]`);
     }
      
       get submit_Btn()
       {
           return $(`[name="submit"]`);
       }
       
      async RegistrationDetails(name,accno,debitno,debpin,mobileno,panno,date,trans,password,confirmpass)
      {
       await (await this.userName_Txt).setValue(name);
       await (await this.userAccNo_Txt).setValue(accno);
       await (await this.debitCardNo_Txt).setValue(debitno);
       await (await this.debitPin_Txt).setValue(debpin);
       await (await this.userMobileno_Txt).setValue(mobileno);
       await (await this.userPanNo_Txt).setValue(panno);
       await await ( this.userDob_Txt).click();
       await this.userDob_Txt.setValue(date);
       await (await this.userLastTrans_Txt).setValue(trans)
       await (await this.userpass_Txt).setValue(password)
       await (await this.userConfirmPass_Txt).setValue(confirmpass);
       await this.submit_Btn.click();
      }

     





      }


    const  register=new signup();
    module.exports=register;





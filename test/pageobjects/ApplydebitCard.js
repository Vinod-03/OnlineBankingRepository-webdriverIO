class debitCard
{

      get userName_Txt()
      {
        return $(`[name="holder_name"]`)
      }

      get userDob_Txt()
      {
       return $(`[name="dob"]`)
      }


      get  userPan_TXt()
      {
        return $(`[name="pan"]`)
      }
    
      get userMobileNo_Txt()
      {
       return $(`[name="mob"]`)
      }
    
      get userAccNo_Txt()
      {
        return $(`[name="acc_no"]`)
      }
    

      get   submit_Btn()
      {
         return $(`[name="dbt_crd_submit"]`);
      }

    

      async debitCardApply(name,dob,pan,mobile,accno)
    {


      await  this.userName_Txt.setValue(name);
       await (await this.userDob_Txt).click();
       await (await this.userDob_Txt).setValue(dob);
       await (await this.userPan_TXt).setValue(pan);
       await (await this.userMobileNo_Txt).setValue(mobile);
       await this.userAccNo_Txt.setValue(accno);
       await (await this.submit_Btn).click();
    }







    }

   let debit =new debitCard();

    module.exports=debit;
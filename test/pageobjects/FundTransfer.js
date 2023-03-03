class FundTransferPage
{

        get Benficiar_Select()
        {
   
           return $(`[name="beneficiary"]`);

        }
      

        get  Amount_Txt()
        {
            return $(`[name="trnsf_amount"]`);
        }

       
        get TransferRemarks_Txt()
        {
            return $(`[name="trnsf_remark"]`)
        }


        get fundTransfer_Btn()
        {
            return $(`[name="fnd_trns_btn"]`)
        }
        
        
         get otpMessageFromText()
         {
           
           return $(`//label[@class="OTP_msg"]`);
         }
           

         get otpCode_Txt()
         {
           return $(`[name="otpcode"]`)
         }


         get verfiy_Btn()
         {
           return $(`[name="verify-btn"]`)
         }
        async transferAmount(accno,amount,msg)
        {

           await (await this.Benficiar_Select).selectByAttribute("value",accno);
           await  (await this.Amount_Txt).setValue(amount);
           await (await this.TransferRemarks_Txt).setValue(msg);
           await  this.fundTransfer_Btn.click();
          
        }



}



   const transfer=new FundTransferPage();
   module.exports=transfer;


class CustomerProfilePage
{

     get  clickFundTranstfer_Btn()
     {


          return $(`//li[text()="Fund Transfer"]`);

     }  

     get  clickAddBenficiary_Btn()
     {


          return $(`[name="beneficiary_acno"]`);

     } 

      get benficiaryAccno_txt()
      {
        return $(`[name="beneficiary_acno"]`);  
      }
     
      get benficisIfscCode_txt()
      {
        return $(`[name="Ifsc_code"]`)
      }
    
      get benficisName_txt()
      {
        return $(`[name="beneficiary_name"]`);
      }
       
       
      get benficiAccType_Select()
      {
        return $(`[name="beneficiary_acc_type"]`);
      }
       

      get   addbenificary_Btn()
      {
        return $(`[name="add_beneficiary_btn"]`)
      }
       

      
    async  addbenificiary(bAccno,ifsc,bName)
    {
        await (await this.clickFundTranstfer_Btn).click();
        await (await this.clickAddBenficiary_Btn).click();
        await  (await this.benficiaryAccno_txt).setValue(bAccno);
       
        await (await this.benficisName_txt).setValue(ifsc);
        await (await this.benficisName_txt).setValue(bName);
        await (await this.benficiAccType_Select).selectByIndex(1)
        await (await this.addbenificary_Btn).click();




    }

        

}
   
const   CustomerHomePage= new CustomerProfilePage();


module.exports=CustomerHomePage;
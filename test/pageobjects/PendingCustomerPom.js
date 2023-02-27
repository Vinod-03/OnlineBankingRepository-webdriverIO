class PendingaAccount
{

   get ApplicationNoTxt()
   {
    return $(`[name="application_no"]`);
   }


    get searchApplicationNoBtn()
    {
       return $(`//input[@name="search_application"]`);
    }
   
   
    get approveBtn()
    {
      return  $(`[name="approve_cust"]`);

    }
    

    async  AccountNo(apno)
    {

       await this.ApplicationNoTxt.setValue(apno);
       await   this.searchApplicationNoBtn.click();
       await this.approveBtn.click();

      
    }


    
}


let penAcc=new PendingaAccount();
module.exports=penAcc;
class PendingaAccount
{

   get ApplicationNo_Txt()
   {
    return $(`[name="application_no"]`);
   }


    get searchApplicationNo_Btn()
    {
       return $(`//input[@name="search_application"]`);
    }
   
   
    get approve_Btn()
    {
      return  $(`[name="approve_cust"]`);

    }
    

    async  applicationNo(apno)
    {

       await this.ApplicationNo_Txt.setValue(apno);
       await   this.searchApplicationNo_Btn.click();
       await this.approve_Btn.click();

      
    }


    
}


let penAcc=new PendingaAccount();
module.exports=penAcc;
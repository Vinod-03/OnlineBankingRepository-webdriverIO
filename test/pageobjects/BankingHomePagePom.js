

class homePage
{
    
    
            

    get openAccount_Btn () {
        return $('//li[contains(text(),"Open Account")]');
    }

    get StaffLogin_Btn()
    {
       return  $(`=Staff Login`);


    }
   get applyDebitCard_Btn()
   {
         return $(`//li[contains(text(),"Apply Debit Card")]`);
   }
  

   get internetBanking_Btn()
   {
      return $(`//a[contains(text(),'Internet Banking')]`);
   }

   
   get internetBankingRegisterBtn()
   {
      return $("//li[contains(text(),'Register')]");
   }
  
   get internetBankingLogin_Btn()
   {
     return $(`//li[text()="Login "]`);
   }
        async mouseHoverTORegister()
        {
         await  browser.scroll(500,500)
         await  this.internetBanking_Btn.moveTo({ })
         await   this.internetBankingRegister_Btn.click();

        }

        async mouseHoverToLogin()
        {
         await  browser.scroll(500,500)
         await  this.internetBanking_Btn.moveTo({ })
         await  (await this.internetBankingLogin_Btn).click();

        }

        async openBeowser()
        {
         await   browser.url("http://testingserver/domain/Online_Banking_System/");
          await   browser.maximizeWindow();
        }

}

   
      let   home=new  homePage();
          
               
module.exports =home;
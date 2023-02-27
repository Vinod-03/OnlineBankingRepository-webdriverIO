

class homePage
{


            

    get openAccountBtn () {
        return $('//li[contains(text(),"Open Account")]');
    }

    get StaffLoginBtn()
    {
       return  $(`=Staff Login`);


    }
   get applyDebitCardBtn()
   {

   }

}

   
      let   home=new  homePage();
          
               
module.exports =home;
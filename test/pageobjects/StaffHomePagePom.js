class staffHomePage
{

    get approveBtn()
    {
     return  $(`[name="apprvac"]`);
    }


}


let   sHomePage=new staffHomePage();

module.exports=sHomePage;
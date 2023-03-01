class staffHomePage
{

    get approve_Btn()
    {
     return  $(`[name="apprvac"]`);
    }


}


let   sHomePage=new staffHomePage();

module.exports=sHomePage;
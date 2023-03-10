class AllTeachers
{

   get   Search_txt()
   {
    return  $(`//input[@type="search"]`)
   }


    get tableData_txt()
    {
        return $(`//a[@href="#modalViewform"]`)
    }

}


const teach=new AllTeachers();
module.exports=teach;
class HomePage
{


    get      Techer_Btn()
    {
        return $(`//span[text()="Teacher"]`);
    }



    get addTeacher_btn()
    {
        return $(`//a[@href="teacher.php"]`)


    }

    get   allTeacherBtn()
   {
    return  $(`//a[@href="all_teacher.php"]`)
   }

}
 const SMangeHome=  new HomePage();
 module.exports=SMangeHome;
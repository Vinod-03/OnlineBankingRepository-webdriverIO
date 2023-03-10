class AddTeacher
{

   get indexNumber_txt()
   {
      return $(`[name="index_number"]`)
   }

  
   get fullName_txt()
   {
    return $(` [name="full_name"]`)
   }
  
   get fullNameWithInetial_txt()
   {
    return  $(`[name="i_name"]`)
   }


   get address_txt()
   {
    return $(`[name="address"]`)
   }

   get gender_select()
   {
    return $(`[name="gender"]`)
   }
   


   get phone_txt()
   {
    return  $(`[name="phone"]`)
   }

   


   get email_txt()
   {
    return  $(`[name="email"]`)
   }

   get photo_Btn()
   {
    return $(`[name="fileToUpload"]`)
   }


   id="btnSubmit"

   get add_Btn()
   {
    return $(`#btnSubmit`)
   }


    async  addTeacherDetails(id,fname,nameInt,address,phoneno,email)
    {

        (await this.indexNumber_txt).setValue(id); 
        await (await this.fullName_txt).setValue(fname);
          await (await this.fullNameWithInetial_txt).setValue(nameInt);
          await (await this.address_txt).setValue(address);
          await (await this.gender_select).selectByVisibleText("Male");
          await (await this.phone_txt).setValue(phoneno);
          await (await this.email_txt).setValue(email)
         
         let  photopath= await browser.uploadFile(`C:/Users/vinod/OneDrive/Pictures/Screenshots/Screenshot (3).png`); 
          await this.photo_Btn.setValue(photopath);
        
      

    }


}

           const newTeacher=  new AddTeacher();
           module.exports=newTeacher;
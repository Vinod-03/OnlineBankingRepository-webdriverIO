text="Account Created SuccessfullyAccount no :1011651011671 Hint : Get Debit Card then register e-banking"

let  accountno= text.split('')
          
  accno=accountno.filter((accountno)=>{return accountno>=0  &&  accountno<=9 });
  console.log(accno.join(''));
  


 


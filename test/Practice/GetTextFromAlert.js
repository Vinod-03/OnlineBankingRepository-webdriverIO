const { filter } = require("minimatch");

// text="Account Created SuccessfullyAccount no :1011651011671 Hint : Get Debit Card then register e-banking"

// let  accountno= text.split('')
          
//   accno=accountno.filter((accountno)=>{return accountno>=0  &&  accountno<=9 });
//   console.log(accno.join(''));
  

text1="Debit Card issued successfully. It will be delivered to your home address soon.   Your Debit Card No is : 421385223382 and Pin is : 3969"
 var t=text1.split(" ")


 //Debit Card issued successfully. It will be delivered to your home address soon.   Your Debit Card No is : 421385223382 and Pin is : 3969

  for ( key in t) {
    
      console.log(key + " "+t[key]);
    }
  

 console.log(t[21]);
 console.log(t[26]);


function validate(){
    
    var name=document.myform.name.value;
    if(name == null || name==""){
        alert("name cannot be blank")
    }
    var x=document.myform.email.value;
    var atposition=x.indexOf("@");
    var dotposition= x.lastIndexOf(".");
    
    if(atposition<1 || dotposition<atposition+2 || dotposition+2>x.length){
     alert("please enter a valid email id");
    }
 
    
    var firstpassword=document.myform.password1.value;
    var secondpassword=document.myform.password2.value;
        if (firstpassword.length<5){
           alert("password must be 5 characters long")
            return false
           }
            else if(firstpassword==secondpassword){
            return true;
            }
            else{
                alert("password must be same")
                return false;
            }
          
        }
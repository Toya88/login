/* 
to get username
check to see if username is not to long or to short

to get user password
check if password has enough characters
check if password has at least one special characters
check if passowrd has at least one uppercase
check if password has at least one lowercase
check if password has at least one number
check is password has any spaces


*/
//eventlistener keyup
// pass.addEventListener('keyup', validate);
//event.preventDefault();
function validate() {
    event.preventDefault();
    console.log('SUBMIT');
    

    var username = document.getElementById("username").value
    var pass = document.getElementById("pass").value
    var password = document.getElementById("password").value
//     var passN = parseInt(pass);
//     // var number = /(?=.*[\d])/g;
//     // var lower = /(?=.*[a-z])/g;
//     // var upper = /(?=.*[A-Z])/g;
//     // var space = /[\s]/g;


    // if (pass.lenght < 8                                                 || pass.lenght > 20) {
    //     return false
    // }
    if (pass.search(/([0-9])/) == -1) {
        // alert("Password must  contain atleast 1 number");
        document.getElementById("message").innerText="Password must  contain atleast 1 number"
        console.log('number false');
        return false;
    } 
        
    
    if (pass.search(/([a-z])/) == -1 ) {
        document.getElementById("message").innerText="Password must contain at least one lowercase letter"
        // alert("Password must contain at least one lowercase letter");
        return false;
    } 

    if  (pass.search(/([A-Z])/) == -1 ) {
        document.getElementById("message").innerText="Password must contain at least one uppercase letter"
        // alert("Password must contain at least one uppercase letter");
        return false;
     } 

    if  (pass.search(/[!\ @\ #\ $\ %\ &]/) ==  -1) {
        document.getElementById("message").innerText="Password must contain at least one  special character"
        // alert("Password must contain at least one lowercase letter");
        return false;
     }
     
     if  (pass.search(/[\S]/) ==  -1) {
        document.getElementById("message").innerText="Password can not contain a space"
        // alert("Password must contain at least one lowercase letter");
        return false;
     }

     if (password == username) {
         document.getElementById("message").innerText="Username and password can not be the same"
         return false;
     }
    //  debugger;

    if (!password == pass) {
        document.getElementById("message").innerText="Passwords do not match"
        console.log("hello");
        return false;
    } 

    if (password == pass) {
        window.open("https://toya88.github.io/","blank")
        alert("Login Successful2")
    }
    
    

    //user and pasword can not match
}

function Toggle() { 
     
    if (pass.type === "password") { 
        pass.type = "text"; 
    } 
    else { 
        pass.type = "password"; 
    } 
} 
// made each requirement into fuctions then called each function in one function inside an object and return each function uses &&
// link to another page - location = website
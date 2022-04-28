let username = document.getElementById('username');
let password = document.getElementById('password');

function validateForm(){
    if(username.value == ""){
        document.getElementById('username_error').innerHTML = "Username is empty";

    } else if(username.value.length < 5){
        document.getElementById('username_error').innerHTML = "Username must be at least 5 characters";
    }
    if(password.value == ""){
        document.getElementById('password_error').innerHTML = "Password is empty";
    }

    return false;
}
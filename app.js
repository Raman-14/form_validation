function validate()
{
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    var email = document.getElementById("email");

    if(username.value.trim()==""){
        alert("Blank Username");
        username.style.border="solid 3px red";
        document.getElementById("invalid").style.visibility="visible";
        return false;
    }
    else if(password.value.trim()==""){
        alert("Blank Password")
        password.style.border="solid 3px red";
        return false;
    }else if(password.value.trim().length<5){
        alert("password too short");
        return false;
    }
    else if(email.value.trim()==""){
        alert("Blank Email");
        return false;
    }else{
        return true;
    }
}
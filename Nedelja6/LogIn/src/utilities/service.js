
function CheckPassword(inputtxt) {
   
    if(inputtxt.length>=3 && inputtxt.length<=15 ){
        return true;
    }
    else {
        alert('Password must be between 3 and 15 characters...!')
        return false;
    }
}

function CheckUsername(inputtxt) {
    var usern = /^[A-Za-z]\w{2,15}$/;
    if (inputtxt.match(usern)) {
       
        return true;
    }
    else {
        alert('Username must be between 3 and 15 characters and first character must be a letter. ...!')
        return false;
    }
}


export {
   
    CheckPassword,
    CheckUsername
    
}
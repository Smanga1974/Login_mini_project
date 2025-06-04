function verifyUser(){
    var username = document.getElementById("usernameInput").value;
    var password = document.getElementById("userpasswordInput").value;

    checkUserCreds(username,password);
}

function checkUserCreds (username,password){
    var systemUsername = "Bond";
    var systemPassword = "007";
                
    var message = document.getElementById("message");
    if(username === systemUsername && password === systemPassword){
        message.textContent = "✅ Login successful!";
        message.className = "success";
    } else {
    message.textContent = "❌ Username or password is incorrect.";
    message.className = "error";
    }
}
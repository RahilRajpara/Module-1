let password = "raahil2907";

let username = "raahil";

if (password.length >= 8 && username.length >= 5) {     
    console.log("Password and username are valid");
}   
else if (password.length < 8 && username.length >= 5) {
    console.log("Password is too short");
}       
else if (password.length >= 8 && username.length < 5) {
    console.log("Username is too short");
}   
else {
    console.log("Password and username are too short");
}
// Characters
const capital_alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const small_alphabets = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const special_characters = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";

// Function
function generatePassword() {
    // combining characters
    var characters = capital_alphabets + small_alphabets + numbers + special_characters
    var password = "";
    passwordLength = parseInt(form.passwordLength.value);

    // validate if passwordLength is a number
    if (isNaN(passwordLength)) {
        alert("Please enter a valid number")
        return
    }

    // passwordLength should be between 6 and 16
    if (passwordLength < 6 || passwordLength > 16) {
        alert("Please enter a number between 6 and 16 inclusive")
        return
    }

    for (var i = 0; i < passwordLength; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    document.getElementById("password").value = password; 
}
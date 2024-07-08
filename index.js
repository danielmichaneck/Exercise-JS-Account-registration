/* ##### Inputs ##### */
const nameInput = document.querySelector("#name");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordconfirmInput = document.querySelector("#passwordconfirm");

const submitButton = document.querySelector("#submit");

/* ##### Warnings ##### */
const nameWarning = document.querySelector("#name-warning");
const usernameWarning = document.querySelector("#username-warning");
const emailWarning = document.querySelector("#email-warning");
const passwordWarning = document.querySelector("#password-warning");
const passwordconfirmWarning = document.querySelector("#passwordconfirm-warning");

const accountCreationText = document.querySelector(".submit-succesful");

/* ##### Acount ##### */
const account = {
    name: nameInput.innerText,
    username: usernameInput.innerText,
    email: emailInput.innerText,
    password: passwordInput.innerText,
    passwordconfirm: passwordconfirmInput.innerText,
}

submitButton.addEventListener("click", function(event) {

    event.preventDefault();

    UpdateInputValues();

    const valid = CheckAllInputValues();

    if (valid) ShowAccountCreationText();
})

function UpdateInputValues () {
    account.name = nameInput.value;
    account.username = usernameInput.value;
    account.email = emailInput.value;
    account.password = passwordInput.value;
    account.passwordconfirm = passwordconfirmInput.value;
    console.log(account);
}

function CheckAllInputValues() {
    let valid = true;
    if (!CheckInputValue("name")) valid = false;
    if (!CheckInputValue("username")) valid = false;
    if (!CheckInputValue("email")) valid = false;
    if (!CheckInputValue("password")) valid = false;
    if (!CheckInputValue("passwordconfirm")) valid = false;
    return valid;
}

function CheckInputValue (inputField) {
    switch(inputField){
        case "name":
            if (account.name == "") {
                ShowWarningText(nameWarning);
                return false;
            }
            HideWarningText(nameWarning);
            return true;

        case "username":
            if (account.username == "") {
                ShowWarningText(usernameWarning);
                return false;
            }
            HideWarningText(usernameWarning);
            return true;

        case "email":
            if (account.email == "" || !emailInput.checkValidity()) {
                ShowWarningText(emailWarning);
                return false;
            }
            HideWarningText(emailWarning);
            return true;

        case "password":
            if (account.password.length < 8) {
                ShowWarningText(passwordWarning);
                return false;
            }
            HideWarningText(passwordWarning);
            return true;

        case "passwordconfirm":
            if (account.passwordconfirm != account.password) {
                ShowWarningText(passwordconfirmWarning);
                return false;
            }
            HideWarningText(passwordconfirmWarning);
            return true;
    }
    return true;
}

function ShowWarningText(warning) {
    warning.classList.add("warning-text-visible");
    warning.classList.remove("warning-text-hidden");
}

function HideWarningText(warning) {
    warning.classList.add("warning-text-hidden");
    warning.classList.remove("warning-text-visible");
}

function ShowAccountCreationText() {
    accountCreationText.classList.add("warning-text-visible");
    accountCreationText.classList.remove("warning-text-hidden");
}
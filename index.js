/* ##### Form ##### */
const form = document.querySelector(".form");


/* ##### Labels ##### */
const nameLabel =            document.querySelector("#name");
const usernameLabel =        document.querySelector("#username");
const emailLabel =           document.querySelector("#email");
const passwordLabel =        document.querySelector("#password");
const passwordconfirmLabel = document.querySelector("#passwordconfirm");


/* ##### Inputs ##### */
const nameInput =            nameLabel.firstElementChild;
const usernameInput =        usernameLabel.firstElementChild;
const emailInput =           emailLabel.firstElementChild;
const passwordInput =        passwordLabel.firstElementChild;
const passwordconfirmInput = passwordconfirmLabel.firstElementChild;


/* ##### Warnings ##### */
const nameWarning =            nameLabel.lastElementChild;
const usernameWarning =        usernameLabel.lastElementChild;
const emailWarning =           emailLabel.lastElementChild;
const passwordWarning =        passwordLabel.lastElementChild;
const passwordconfirmWarning = passwordconfirmLabel.lastElementChild;


/* ##### Success button ##### */
const submitButton = document.querySelector("#submit");
const accountCreationText = document.querySelector(".submit-succesful");


/* ##### Acount ##### */
const account = {
    name: nameInput.innerText,
    username: usernameInput.innerText,
    email: emailInput.innerText,
    password: passwordInput.innerText,
    passwordconfirm: passwordconfirmInput.innerText,
}


/* ##### registrationData ##### */
const registrationData = {
    name: "first name last name",
    username: "username",
    email: "email@email.com",
    password: "password",
}


/* ##### Form ##### */
form.addEventListener("change", (event) => {
    UpdateInputValues();
    CheckAllInputValues();
})


/* ##### Submit button ##### */
submitButton.addEventListener("click", (event) => {

    event.preventDefault();

    UpdateInputValues();

    const valid = CheckAllInputValues();

    if (valid) ShowAccountCreationText();
})

function UpdateInputValues () {
    account.name = nameInput.value.trim();
    account.username = usernameInput.value.trim();
    account.email = emailInput.value.trim();
    account.password = passwordInput.value.trim();
    account.passwordconfirm = passwordconfirmInput.value.trim();
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
            if (account.name.length === 0) {
                ShowWarning(nameInput, nameWarning);
                return false;
            }
            HideWarning(nameInput, nameWarning);
            return true;

        case "username":
            if (account.username.length === 0) {
                ShowWarning(usernameInput, usernameWarning);
                return false;
            }
            HideWarning(usernameInput, usernameWarning);
            return true;

        case "email":
            if (account.email.length === 0 || !emailInput.checkValidity()) {
                ShowWarning(emailInput, emailWarning);
                return false;
            }
            HideWarning(emailInput, emailWarning);
            return true;

        case "password":
            if (account.password.length < 8) {
                ShowWarning(passwordInput, passwordWarning);
                return false;
            }
            HideWarning(passwordInput, passwordWarning);
            return true;

        case "passwordconfirm":
            if (account.passwordconfirm != account.password) {
                ShowWarning(passwordconfirmInput, passwordconfirmWarning);
                return false;
            }
            HideWarning(passwordconfirmInput, passwordconfirmWarning);
            return true;
    }
    return true;
}

function ShowWarning(field, warning) {
    field.classList.add("input-invalid");
    warning.classList.add("warning-text-visible");
    warning.classList.remove("warning-text-hidden");
}

function HideWarning(field, warning) {
    field.classList.remove("input-invalid");
    warning.classList.add("warning-text-hidden");
    warning.classList.remove("warning-text-visible");
}

function ShowAccountCreationText() {
    accountCreationText.classList.add("warning-text-visible");
    accountCreationText.classList.remove("warning-text-hidden");
}
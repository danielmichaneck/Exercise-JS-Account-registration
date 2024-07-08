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


/* ##### Form update ##### */
form.addEventListener("input", (event) => {
    UpdateInputValues();
    const valid = CheckAllInputValues(false);
    if (valid) submitButton.disabled = false;
    else submitButton.disabled = true;
})


/* ##### Label update ##### */
function updateLabel(label) {
    UpdateInputValues();
    CheckInputValue(label, true);
}

nameInput.addEventListener("input", () => updateLabel("name"));

usernameInput.addEventListener("input", () => updateLabel("username"));

emailInput.addEventListener("input", () => updateLabel("email"));

passwordInput.addEventListener("input", () => updateLabel("password"));

passwordconfirmInput.addEventListener("input", () => updateLabel("passwordconfirm"));


/* ##### Submit button ##### */
submitButton.addEventListener("submit", (event) => {
    event.preventDefault();
    UpdateInputValues();
    const valid = CheckAllInputValues(true);
    if (valid) ShowAccountCreationText();
    return false;
})

function UpdateInputValues () {
    account.name =            nameInput.value.trim();
    account.username =        usernameInput.value.trim();
    account.email =           emailInput.value.trim();
    account.password =        passwordInput.value.trim();
    account.passwordconfirm = passwordconfirmInput.value.trim();
    console.log(account);
}

function CheckAllInputValues(warn) {
    let valid = true;
    if (!CheckInputValue("name", warn))            valid = false;
    if (!CheckInputValue("username", warn))        valid = false;
    if (!CheckInputValue("email", warn))           valid = false;
    if (!CheckInputValue("password", warn))        valid = false;
    if (!CheckInputValue("passwordconfirm", warn)) valid = false;
    return valid;
}

function CheckInputValue (inputField, warn) {
    switch(inputField){
        case "name":
            if (account.name.length === 0) {
                if (warn) ShowWarning(nameInput, nameWarning);
                return false;
            }
            if (warn) HideWarning(nameInput, nameWarning);
            return true;

        case "username":
            if (account.username.length === 0) {
                if (warn) ShowWarning(usernameInput, usernameWarning);
                return false;
            }
            if (warn) HideWarning(usernameInput, usernameWarning);
            return true;

        case "email":
            if (account.email.length === 0 || !emailInput.checkValidity()) {
                if (warn) ShowWarning(emailInput, emailWarning);
                return false;
            }
            if (warn) HideWarning(emailInput, emailWarning);
            return true;

        case "password":
            if (account.password.length < 8) {
                if (warn) ShowWarning(passwordInput, passwordWarning);
                return false;
            }
            if (warn) HideWarning(passwordInput, passwordWarning);
            return true;

        case "passwordconfirm":
            if (account.passwordconfirm != account.password) {
                if (warn) ShowWarning(passwordconfirmInput, passwordconfirmWarning);
                return false;
            }
            if (warn) HideWarning(passwordconfirmInput, passwordconfirmWarning);
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
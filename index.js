/* ##### Form ##### */
const form = document.querySelector(".form");


/* ##### Labels ##### */
const nameLabel =            document.querySelector("#name");
const usernameLabel =        document.querySelector("#username");
const emailLabel =           document.querySelector("#email");
const passwordLabel =        document.querySelector("#password");
const passwordconfirmLabel = document.querySelector("#passwordconfirm");


/* ##### Inputs ##### */
const nameInput =            nameLabel.children[1];
const usernameInput =        usernameLabel.children[1];
const emailInput =           emailLabel.children[1];
const passwordInput =        passwordLabel.children[1];
const passwordconfirmInput = passwordconfirmLabel.children[1];


/* ##### Warnings ##### */
const nameWarning =            nameLabel.lastElementChild;
const usernameWarning =        usernameLabel.lastElementChild;
const emailWarning =           emailLabel.lastElementChild;
const passwordWarning =        passwordLabel.lastElementChild;
const passwordconfirmWarning = passwordconfirmLabel.lastElementChild;


/* ##### Success button ##### */
const submitButton = document.querySelector("#submit");
const accountCreationText = document.querySelector(".submit-successful");


/* ##### Account ##### */
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
    updateInputValues();
    const valid = checkAllInputValues(false);
    if (valid) submitButton.disabled = false;
    else submitButton.disabled = true;
    hideAccountCreationText();
})


/* ##### Label update ##### */
function updateLabel(label) {
    updateInputValues();
    checkInputValue(label, true);
}

nameInput.addEventListener("input", () => updateLabel("name"));

usernameInput.addEventListener("input", () => updateLabel("username"));

emailInput.addEventListener("input", () => updateLabel("email"));

passwordInput.addEventListener("input", () => updateLabel("password"));

passwordconfirmInput.addEventListener("input", () => updateLabel("passwordconfirm"));


/* ##### Submit form ##### */
form.addEventListener("submit", (event) => {
    event.preventDefault();
    updateInputValues();
    const valid = checkAllInputValues(true);
    if (valid) {
        showAccountCreationText();
        setRegistrationData();
        console.log(registrationData);
    }
    return false;
})


function setRegistrationData() {
    registrationData.name = account.name;
    registrationData.username = account.username;
    registrationData.email = account.email;
    registrationData.password = account.password;
}


/* ##### Updates account values with field values ##### */
function updateInputValues () {
    account.name =            nameInput.value.trim();
    account.username =        usernameInput.value.trim();
    account.email =           emailInput.value.trim();
    account.password =        passwordInput.value.trim();
    account.passwordconfirm = passwordconfirmInput.value.trim();
}


/* ##### Checks all fields ##### */
function checkAllInputValues(warn) {
    let valid = true;
    if (!checkInputValue("name", warn))            valid = false;
    if (!checkInputValue("username", warn))        valid = false;
    if (!checkInputValue("email", warn))           valid = false;
    if (!checkInputValue("password", warn))        valid = false;
    if (!checkInputValue("passwordconfirm", warn)) valid = false;
    return valid;
}


/* ##### Checks specific field ##### */
function checkInputValue (inputField, warn) {
    switch(inputField){
        case "name":
            if (account.name.length === 0) {
                if (warn) showWarning(nameInput, nameWarning);
                return false;
            }
            if (warn) hideWarning(nameInput, nameWarning);
            return true;

        case "username":
            if (account.username.length === 0) {
                if (warn) showWarning(usernameInput, usernameWarning);
                return false;
            }
            if (warn) hideWarning(usernameInput, usernameWarning);
            return true;

        case "email":
            if (account.email.length === 0 || !emailInput.checkValidity()) {
                if (warn) showWarning(emailInput, emailWarning);
                return false;
            }
            if (warn) hideWarning(emailInput, emailWarning);
            return true;

        case "password":
            if (account.password.length < 8) {
                if (warn) showWarning(passwordInput, passwordWarning);
                return false;
            }
            if (warn) hideWarning(passwordInput, passwordWarning);
            return true;

        case "passwordconfirm":
            if (account.passwordconfirm != account.password) {
                if (warn) showWarning(passwordconfirmInput, passwordconfirmWarning);
                return false;
            }
            if (warn) hideWarning(passwordconfirmInput, passwordconfirmWarning);
            return true;
    }
    return true;
}


/* ##### Shows warning message and adjusts field background color ##### */
function showWarning(field, warning) {
    field.classList.add("input-invalid");
    warning.classList.add("warning-text-visible");
    warning.classList.remove("warning-text-hidden");
}


/* ##### Hides warning message and adjusts field background color ##### */
function hideWarning(field, warning) {
    field.classList.remove("input-invalid");
    warning.classList.add("warning-text-hidden");
    warning.classList.remove("warning-text-visible");
}


/* ##### Shows text for successfully creating an account ##### */
function showAccountCreationText() {
    accountCreationText.classList.add("warning-text-visible");
    accountCreationText.classList.remove("warning-text-hidden");
}


/* ##### Hides text for successfully creating an account ##### */
function hideAccountCreationText() {
    accountCreationText.classList.remove("warning-text-visible");
    accountCreationText.classList.add("warning-text-hidden");
}
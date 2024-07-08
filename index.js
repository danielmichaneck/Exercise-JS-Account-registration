/* ##### Inputs ##### */
const nameInput = document.querySelector("#name");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordconfirmInput = document.querySelector("#passwordconfirm");

const submitButton = document.querySelector("#submit");

/* ##### Warnings ##### */
const nameWarning = document.querySelector("#name-warning");
const usernameWarning = document.querySelector("#name-warning");
const emailWarning = document.querySelector("#name-warning");
const passwordWarning = document.querySelector("#name-warning");
const passwordconfirmWarning = document.querySelector("#name-warning");

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

    GetInputValues();

    if (account.name == "") {
        nameWarning.classList.add("warning-text-visible");
        nameWarning.classList.remove("warning-text-hidden");
    }
    else {
        nameWarning.classList.add("warning-text-hidden");
        nameWarning.classList.remove("warning-text-visible");
    }
})

function GetInputValues () {
    account.name = nameInput.value;
    account.username = usernameInput.value;
    account.email = emailInput.value;
    account.password = passwordInput.value;
    account.passwordconfirm = passwordconfirmInput.value;
    console.log(account);
}

function CheckInputValue (inputField) {
    let correct = true;
    switch(inputField){
        case "name":

            break;
    }
    return correct;
}
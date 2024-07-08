

const nameInput = document.querySelector("#name");
const usernameInput = document.querySelector("#username");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const passwordconfirmInput = document.querySelector("#passwordconfirm");

const submitButton = document.querySelector("#submit");

const accountInformation = {
    name: nameInput.innerText,
    username: usernameInput.innerText,
    email: emailInput.innerText,
    password: passwordInput.innerText,
    passwordconfirm: passwordconfirmInput.innerText,
}

console.log(accountInformation);

submitButton.addEventListener("click", function(event) {
    event.preventDefault();

    if (accountInformation.name == "") {
    }
})


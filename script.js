let registerBtn = document.querySelector(".Register-btn");
let loginBtn = document.querySelector(".login-btn");
let formBox = document.querySelector(".box-form");

registerBtn.addEventListener("click", () => {
    formBox.classList.add("change-form");
});

loginBtn.addEventListener("click", () => {
    formBox.classList.remove("change-form");
});
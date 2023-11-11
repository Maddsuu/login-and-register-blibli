let inputEmail = document.querySelector(".email");
let inputPassword = document.querySelector(".password");
let tombol = document.querySelector(".tombol");

tombol.disabled = true;

inputEmail.addEventListener("input" , success);
inputPassword.addEventListener("input" , success);

function success() {
    if (inputEmail.value.length > 0 && inputPassword.value.length > 0) {
        tombol.disabled = false;
    } else {
        tombol.disabled = true;
    }
}

const password = document.querySelector(".password");
const toggle = document.querySelector("#togglePw");

togglePw.addEventListener("click", intip);

function intip() {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    togglePw.classList.toggle("eye-slash");
}
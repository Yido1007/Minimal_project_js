const passwordBox = document.getElementById("password");
const lengthRange = document.getElementById("lengthRange");
const lengthValue = document.getElementById("lengthValue");
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghıjklmnoprqstuvwyxz";
const numbers = "0123456789";
const symbol = "@#$^&*()_()|{}[]<>/-=";
const allChars = upperCase + lowerCase + numbers + symbol;
let lenght = lengthRange ? parseInt(lengthRange.value, 10) : 12;
if (lengthRange && lengthValue) {
    lengthValue.textContent = String(lenght);
    lengthRange.addEventListener("input", () => {
        lenght = parseInt(lengthRange.value, 10);
        lengthValue.textContent = String(lenght);
    });
}
function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;
}

function copyPassword() {
    passwordBox.select();
    document.execCommand("copy");
}
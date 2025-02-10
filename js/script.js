function generatePasswords() {
    const length = document.getElementById('length').value;
    const useUppercase = document.getElementById('uppercase').checked;
    const useLowercase = document.getElementById('lowercase').checked;
    const useNumbers = document.getElementById('numbers').checked;
    const useSymbols = document.getElementById('symbols').checked;
    const excludeChars = document.getElementById('excludeChars').value;
    const count = document.getElementById('count').value;

    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+{}[]:;<>,.?/";

    let characters = "";
    if (useUppercase) characters += upperCase;
    if (useLowercase) characters += lowerCase;
    if (useNumbers) characters += numbers;
    if (useSymbols) characters += symbols;

    // 除外する文字を削除
    if (excludeChars) {
        characters = characters.split("").filter(c => !excludeChars.includes(c)).join("");
    }

    if (!characters) {
        alert("少なくとも1つのオプションを選択してください。");
        return;
    }

    let passwordList = "";
    for (let j = 0; j < count; j++) {
        let password = "";
        for (let i = 0; i < length; i++) {
            password += characters[Math.floor(Math.random() * characters.length)];
        }
        passwordList += `<div class="password-item">${password} <button onclick="copyPassword('${password}')">📋</button></div>`;
    }

    document.getElementById('passwords').innerHTML = passwordList;
}

function copyPassword(password) {
    navigator.clipboard.writeText(password);
    alert("コピーしました: " + password);
}

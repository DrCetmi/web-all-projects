// You code here

const charset = 'abcdefghijklmnopqrstuvwxyz0123456789!§$%&/()=?#,;.:_';

function getRandomInt(max) {
return Math.floor(Math.random() * max);
}

function generatePassword(length, mixedCase) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = getRandomInt(charset.length);
        let randomChar = charset.charAt(randomIndex);
        if (mixedCase && i % 3 === 2) {
        randomChar = randomChar.toUpperCase();
        }
        password += randomChar;
    }
    return password;
    }

    const passwordForm = document.getElementById('password-form');
    const output = document.getElementById('output');
    const lengthInput = document.getElementById('length');
    const mixedCasesCheckbox = document.getElementById('mixedCases');

    passwordForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const length = parseInt(lengthInput.value);
        const mixedCase = mixedCasesCheckbox.checked;
        const newPassword = generatePassword(length, mixedCase);
        output.textContent = newPassword;
    });

    const initialPassword = generatePassword(20, true);
    output.textContent = initialPassword;
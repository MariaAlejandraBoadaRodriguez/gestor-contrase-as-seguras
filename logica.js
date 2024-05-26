const passwordForm = document.getElementById('passwordForm');
const generateBtn = document.getElementById('generateBtn');
const passwordDisplay = document.getElementById('passwordDisplay');

function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

passwordForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const length = parseInt(document.getElementById('length').value);
    const newPassword = generatePassword(length);
    passwordDisplay.textContent = newPassword;
});
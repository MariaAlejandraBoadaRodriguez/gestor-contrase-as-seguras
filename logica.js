import { generatePassword } from './passwordGenerator.js';

const passwordForm = document.getElementById('passwordForm');
const passwordDisplay = document.getElementById('passwordDisplay');

passwordForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const length = parseInt(document.getElementById('length').value);
    const newPassword = generatePassword(length);
    passwordDisplay.textContent = newPassword;
});
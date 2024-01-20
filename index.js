const registerForm = document.getElementById('register-form');

registerForm.addEventListener('submit', e => {
    e.preventDefault();
    registerForm.reset();
    setTimeout(() => {
        alert('We received your registration form, and we\'ll contact you by your email if you got hired.');
    }, 500);            
});
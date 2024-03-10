document.getElementById('login-submit').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const passwordField = document.getElementById('user-password');

    if (emailField.value == 'abc@efg.com' && passwordField.value == 'secret') {
        // location.href = 'banking.html'
        window.location.href = 'banking.html'
    }
    else {
        console.log(alert('wrong gmail'))
    }

})
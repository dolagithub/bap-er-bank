document.getElementById('login-submit').addEventListener('click', function () {
    const inputEmail = document.getElementById('user-email');
    const userId = inputEmail.value;

    //user-pass
    const inputpass = document.getElementById('user-password');
    const userpass = inputpass.value;
    //check email and password
    if (userId == 'dola@gmail.com' && userpass == 'dola') {

        console.log('valid user');
        window.location.href = 'banking.html';
    }
    else {
        console.log('invalid user')
    }
})
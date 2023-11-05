// scroll button 
var scroll_top = document.getElementaryById ('scroll-top');
window.onscroll = function(){
    if (document.body.scrollTop > 20 || document.document.scrollTop > 20)
    {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
};
backToTopButton.addEventListener('click',
function(){
document.body.scrollTop = 0; //Safari browsers
document.documentElements.scrollTop = 0; //Chrome, firefox, edge
});

// register and login page
function myMenuFunction() {
var i = document.getElementById("navMenu");

if(i.className === "nav-menu") {
    i.className += " responsive";
} else {
    i.className = "nav-menu";
}
}


var a = document.getElementById("loginBtn");
var b = document.getElementById("registerBtn");
var x = document.getElementById("login");
var y = document.getElementById("register");

function login() {
    x.style.left = "4px";
    y.style.right = "-520px";
    a.className += " white-btn";
    b.className = "btn";
    x.style.opacity = 1;
    y.style.opacity = 0;
}

function register() {
    x.style.left = "-510px";
    y.style.right = "5px";
    a.className = "btn";
    b.className += " white-btn";
    x.style.opacity = 0;
    y.style.opacity = 1;
}


function redirectToIndex() {
    var usernameOrEmail = document.querySelector('.input-field[placeholder="Username or Email"]').value;
    var password = document.querySelector('.input-field[placeholder="Password"]').value;
    if (usernameOrEmail.trim() !== '' && password.trim() !== '') {
        window.location.href = './home/index.html';
    } else {
        alert('Please fill in all required fields.');
    }
}
var signInButton = document.querySelector('.submit');
signInButton.addEventListener('click', redirectToIndex);

//Reset password
function redirectToLogin() {
    var Email = document.querySelector('.input-field[placeholder="Email"]').value;
    var newPassword = document.querySelector('.input-field[placeholder="New Password"]').value;
    if (Email.trim() !== '' && newPassword.trim() !== '') {
        window.location.href = 'login.html';
    } else {
        alert('Please fill in all required fields.');
    }
}
var signInButton = document.querySelector('.submit');
signInButton.addEventListener('click', redirectToLogin);
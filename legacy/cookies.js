// GET COOKIE
function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.indexOf(name + '=') === 0) {
            return decodeURIComponent(cookie.substring(name.length + 1));
        }
    }
    return null;
}

// CHECK LOGIN
function isLoggedIn(){
    return getCookie("userEmail") !== null;
}

// GET CURRENT USER
function getCurrentUser(){
    const email = getCookie("userEmail");
    if(!email) return null;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    return users.find(u => u.email === email);
}

// UPDATE HEADER BUTTON
function updateButton(){

    let btn = document.querySelector('.login-btn');
    if(!btn) return;

    let user = getCurrentUser();

    if(user){
        btn.innerHTML = '<i class="fas fa-user"></i> ' + user.firstName + "'s Dashboard";
        btn.href = "dashboard.html";
    } else {
        btn.innerHTML = '<i class="fas fa-sign-in-alt"></i> Login / Register';
        btn.href = "login.html";
    }
}

// LOGOUT
function logout(){
    document.cookie = "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "index.html";
}

// RUN WHEN PAGE LOADS
document.addEventListener("DOMContentLoaded", updateButton);
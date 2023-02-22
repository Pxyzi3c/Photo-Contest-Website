// LOGIN VALIDATIONS
let pword = "admin";
let uname = "pontillas32";

function validateForm() {
    let x = document.forms["myForm"]["Password"].value;
    let y = document.forms["myForm"]["Username"].value;

    if (y !== uname) {
        if (x !== pword) {
            alert("Incorrect Username and Password! Please try again");
            return false;
        }
        else {
            alert("Incorrect Username! Please try again");
            return false;
        }
    }
    else if (x !== pword) {
        alert("Incorrect Password! Please try again");
        return false;    
    }
}

// CHANGE NAVBAR STYLE ON SCROLL
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 20)
})

// SHOW/HIDE NAVBAR IN TABLET AND SMARPHONE VIEW
const menu = document.querySelector('.nav_menu');
const showMenu = document.querySelector('#open_menu_btn');
const closeMenu = document.querySelector('#close_menu_btn');

showMenu.addEventListener('click', () => {
    menu.style.display = "flex";
    showMenu.style.display = "none";
    closeMenu.style.display = "inline-block";
})

closeMenu.addEventListener('click', () => {
    menu.style.display = "none";
    showMenu.style.display = "inline-block";
    closeMenu.style.display = "none";
})


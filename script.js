const mobile_navbar = document.querySelector('.mobile-navbar-btn');
const nav_header = document.querySelector('.header');

const togglenav = () => {
    nav_header.classList.toggle('active');
};

mobile_navbar.addEventListener('click',  () => togglenav())
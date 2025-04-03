//toggle menu button
var menuBtn =document.querySelector('.menu-btn');
var navLinkswrapper = document.querySelector('.nav-links');
var navLinks = document.querySelectorAll('.nav-links li a');
menuBtn.addEventListener('click', toggleMenu);
function toggleMenu (){
    menuBtn.classList.toggle('active');
    navLinkswrapper.classList.toggle('active')
}
for(var i =0; i < navLinks.length; i++){
    navLinks[i].addEventListener('click', toggleMenu);
}
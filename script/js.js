var contact = document.querySelector('.contact-menu');
var formulairecontact = document.querySelector('.contact');
var close = formulairecontact.querySelector('.close-icon');

contact.addEventListener('click', hasClick)

close.addEventListener('click', hasClick)

function hasClick() {
    contact.classList.toggle("active");
    formulairecontact.classList.toggle("active");
}
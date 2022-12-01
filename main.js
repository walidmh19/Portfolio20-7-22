


// filters

let filters = [...document.querySelectorAll('.filters')]
// console.log(projects)

function filter(text , id) {
    let projects = [...document.querySelectorAll('.project')]
console.log(projects);
console.log(text);
for (let i = 0; i < projects.length; i++) {
        console.log(typeof(projects[i].getAttribute('data-filters')));
        if (projects[i].getAttribute('data-filters').includes(text)) {
            projects[i].style.display = 'inline-block'
        } else {
            console.log(true);

            projects[i].style.display = 'none'
        }
    }
    filters.forEach(element => {
        element.classList.remove('filterActive')
    });
    document.getElementById(id).classList.add('filterActive')
}



// nav opening

function navOpen(id) {
    const $ = document.getElementById(id)
    $.classList.toggle('menuActive')
    const $$ = document.getElementById('navList')
    $$.classList.toggle('navListOpen')

}
    

// nav hide


let lastScrollY = scrollY
const nav = document.querySelector('nav')
window.addEventListener('scroll', () => {
    if (lastScrollY <= scrollY) {
        nav.style.top = '-15vh'
    } else{
        nav.style.top = '0'

    }
    lastScrollY = scrollY
})

 

// Scroll reveal





// ScrollReveal({ reset: true });
if (document.width > 782) {
    if (scrollY == 0) {
    ScrollReveal().reveal('.navLink', { interval: 150 , delay :250 , reset: false , scale: 0});
    
}
}


ScrollReveal().reveal('.socialBtn', { interval: 150 , delay: 900 , scale: 0});
ScrollReveal().reveal('.homeHeadline', {delay: 500})
ScrollReveal().reveal('.typeWrite', {delay: 1000})
ScrollReveal().reveal('.heroBtn', {delay: 1500})
ScrollReveal().reveal('.homeImg', {delay: 1500})
ScrollReveal().reveal('.sectionTitle' , {delay: 200}) 
ScrollReveal().reveal('.service', { interval: 200 , delay: 500 , scale: 0});
// ScrollReveal().reveal('.project', { interval: 200 , delay: 500 , scale: 0});
ScrollReveal().reveal('.skill', { interval: 150 , delay: 500 , scale: 0});
ScrollReveal().reveal('.card', { interval: 150 , delay: 500 , scale: 0.5});
ScrollReveal().reveal('.contactForm' , {delay: 700}) 


// var ScrollReveal = function(){}







const skillcircles = document.querySelectorAll('.skillcircle')
const skillcirclesArr = [...skillcircles]
for (let i = 0; i < skillcirclesArr.length; i++) {
    
    skillcircles[i].style.background = `conic-gradient(
        #72a1cb ${skillcirclesArr[i].getAttribute('data-progress') * 3.6}deg, 
        #dedede ${skillcirclesArr[i].getAttribute('data-progress') * 3.6}deg
    )`
}


// filters

let projects = [...document.querySelectorAll('.project')]
let filters = [...document.querySelectorAll('.filters')]
console.log(projects)

function filter(text , id) {
    for (let i = 0; i < projects.length; i++) {
        if (JSON.parse(projects[i].getAttribute('data-filtters')).includes(text)) {
            projects[i].style.display = 'inline-block'
        } else {

            projects[i].style.display = 'none'
        }
    }
    filters.forEach(element => {
        element.classList.remove('filterActive')
    });
    document.getElementById(id).classList.add('filterActive')
}





// scroll to top


const scrollToTopBtn = document.getElementById('scrollToTopBtn')
function scrollToTop() {
   window.scrollTo(0 , 0)
}

// nav bar active toggle


const homeBtn = document.getElementById('homeBtn')
const servicesBtn = document.getElementById('servicesBtn')
const projectsBtn = document.getElementById('projectsBtn')
const skillsBtn = document.getElementById('skillsBtn')
const contactBtn = document.getElementById('contactsBtn')
    
const homeSec = document.getElementById('home')
const servicesSec = document.getElementById('services')
const projectsSec = document.getElementById('projects')
const skillsSec = document.getElementById('skills')
const contactSec = document.getElementById('contact')


window.addEventListener('scroll', () => {
    
    let topOfHome = homeSec.offsetTop - 1
    let topOfServices = servicesSec.offsetTop - 1
    let topOfProjects = projectsSec.offsetTop - 1
    let topOfSkills = skillsSec.offsetTop - 1
    let topOfContact = contactSec.offsetTop -1
    
    let bottomOfHome = homeSec.offsetTop + homeSec.offsetHeight - 2
    let bottomOfServices = servicesSec.offsetTop + servicesSec.offsetHeight  - 2
    let bottomOfProjects = projectsSec.offsetTop + projectsSec.offsetHeight - 2
    let bottomOfSkills = skillsSec.offsetTop + skillsSec.offsetHeight - 2
    let bottomOfContact = contactSec.offsetTop + contactSec.offsetHeight - 2
        
    let topOfScreen = scrollY


    if ( topOfScreen <= bottomOfHome && topOfScreen >= topOfHome) {
        homeBtn.classList.add('navlinkActive')
        scrollToTopBtn.style.display = 'none'
    } else {
        homeBtn.classList.remove('navlinkActive')
        scrollToTopBtn.style.display = 'grid'
    }
    if ( topOfScreen <= bottomOfServices && topOfScreen >= topOfServices) {
        servicesBtn.classList.add('navlinkActive')
    } else {
        servicesBtn.classList.remove('navlinkActive')
    }
    if ( topOfScreen <= bottomOfProjects && topOfScreen >= topOfProjects) {
        projectsBtn.classList.add('navlinkActive')
    } else {
        projectsBtn.classList.remove('navlinkActive')
    }
    if ( topOfScreen <= bottomOfSkills && topOfScreen >= topOfSkills) {
        skillsBtn.classList.add('navlinkActive')
    } else {
        skillsBtn.classList.remove('navlinkActive')
    }
    if ( topOfScreen <= bottomOfContact && topOfScreen >= topOfContact) {
        contactBtn.classList.add('navlinkActive')
    } else {
        contactBtn.classList.remove('navlinkActive')
    }

})

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
ScrollReveal().reveal('.project', { interval: 200 , delay: 500 , scale: 0});
ScrollReveal().reveal('.skill', { interval: 150 , delay: 500 , scale: 0});
ScrollReveal().reveal('.card', { interval: 150 , delay: 500 , scale: 0.5});
ScrollReveal().reveal('.contactForm' , {delay: 700}) 


// var ScrollReveal = function(){}







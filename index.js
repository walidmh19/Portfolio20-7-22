// skills circles


const skillcircles = document.querySelectorAll('.skillcircle')
const skillcirclesArr = [...skillcircles]

function circlesDisplay () {
   
for (let i = 0; i < skillcirclesArr.length; i++) {
    
    

      let degree = 0
    let interval = setInterval(() => {
      skillcircles[i].style.background = `conic-gradient(
         #72a1cb ${degree * 3.6}deg, 
         #dedede ${degree * 3.6}deg
     )`     
     degree ++
     if (degree >= skillcirclesArr[i].getAttribute('data-progress')) {
      clearInterval(interval)
     }
    }, 20);
}

}

// projects display

           
const container = document.querySelector('.projectsGridContainer')
                fetch('./projects.json').then(res => res.json()).then(arr=> {
        
                    let projects = arr.reverse()
         for (let  i= 0;  i< 6; i++) {
            
            
         let projectContainer = document.createElement('div')
         projectContainer.classList.add('project')
         projectContainer.setAttribute('data-filters' , projects[i].categories)

         let projectImg = document.createElement('img')
         projectImg.src = projects[i].cover

         let projectInfos = document.createElement('div')
         
         let projectTitle = document.createElement('h2')
         projectTitle.classList.add('projectTitle')
         projectTitle.innerText = projects[i].name

         let projectDescription = document.createElement('p')
         projectDescription.classList.add('projectDescription')
         projectDescription.innerText = projects[i].description

         let button = document.createElement('a')
         button.classList.add('Btn')
         button.setAttribute('target', '_blank')
         button.innerText = 'demo'
         button.setAttribute('href', projects[i].url)
         
         projectInfos.append(projectTitle , projectDescription , button)
         projectContainer.append(projectImg , projectInfos)
         container.append(projectContainer)
        };
                })





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
   let bottomOfScreen = topOfScreen + screen.height - (screen.height * 0.15)

   if (bottomOfScreen   > bottomOfServices  ) {
      scrollToTopBtn.style.position = 'fixed'
      
   } else {
      scrollToTopBtn.style.position = 'absolute'

   }






    if ( topOfScreen <= bottomOfHome && topOfScreen >= topOfHome) {
        homeBtn.classList.add('navlinkActive')
    } else {
        homeBtn.classList.remove('navlinkActive')
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

const container = document.querySelector('.moreProjectsGridContainer')
      fetch('../projects.json').then(res => res.json()).then(projects=> {
        projects.reverse().forEach(project => {
         let projectContainer = document.createElement('div')
         projectContainer.classList.add('project')
         projectContainer.setAttribute('data-filters' , JSON.stringify(project.categories))

         let projectImg = document.createElement('img')
         projectImg.setAttribute('loading','lazy')
         projectImg.src = `.${project.cover}`

         let projectInfos = document.createElement('div')
         
         let projectTitle = document.createElement('h2')
         projectTitle.classList.add('projectTitle')
         projectTitle.innerText = project.name

         let projectDescription = document.createElement('p')
         projectDescription.classList.add('projectDescription')
         projectDescription.innerText = project.description

         let button = document.createElement('a')
         button.classList.add('Btn')
         button.setAttribute('target', '_blank')
         button.innerText = 'demo'
         button.setAttribute('href', project.url)
         
         projectInfos.append(projectTitle , projectDescription , button)
         projectContainer.append(projectImg , projectInfos)
         container.append(projectContainer)
        });
      })
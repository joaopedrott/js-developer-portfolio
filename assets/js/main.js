
function updateProfileInfo(profileData) {
    const photo = document.getElementById('profile.photo')
    photo.src = profileData.photo
    photo.alt = profileData.name

    const name = document.getElementById('profile.name')
    name.innerText = profileData.name

/*     const job = document.getElementById('profile.job') //trabalho atual
    job.innerText = profileData.job */

    const location = document.getElementById('profile.location')
    location.innerText = profileData.location
    location.href =`https://www.google.com.br/maps/place/Penedo+-+AL/@-10.3053689,-36.5689248,13.5z/data=!4m6!3m5!1s0x70454ecaa7f9f0f:0xae1fbf773d20b89b!8m2!3d-10.2889455!4d-36.5839568!16zL20vMDRkZm5w?entry=ttu`
    

    const phone = document.getElementById('profile.phone')
    phone.innerText = profileData.phone
    /* phone.href = `tel:${profileData.phone}` */
    phone.href = `https://wa.me/5582981043360`
    

    const email = document.getElementById('profile.email')
    email.innerText = profileData.email
    email.href = `mailto:${profileData.email}`

}

function updateSoftSkills(profileData) {
    const softSkills = document.getElementById('profile.skills.softSkills')
    softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join('')


}

function updateHardSkills(profileData) {
    const hardSkills = document.getElementById('profile.skills.hardSkills')
    hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src="${skill.logo}" alt="${skill.name}" title="${skill.name}"></li>`).join('')


}

function updateLanguages(profileData) {
    const languages = document.getElementById('profile.languages')
    languages.innerHTML = profileData.languages.map(language => `<li>${language}</li>`).join('')


}

function updatePortfolio(profileData) {
    const portfolio = document.getElementById('profile.portfolio')
    portfolio.innerHTML = profileData.portfolio.map(project =>{ return`
        <li>
        <h3 ${project.github ? 'class="github"': ''}>${project.name}</h3>
        <a href="${project.url}" target="_blank">${project.url}</a>
        <p>Descricao: ${project.descricao2}</p>
        </li>`
    }).join('')
}

function updateProfessionalExperience(profileData) {
    const professionalExperience = document.getElementById('profile.professionalExperience')
    professionalExperience.innerHTML= profileData.professionalExperience.map(experience=>{
        return `
        <li>
        <h3 class="title" >${experience.name}</h3>
            <p class="period" >${experience.period}</p>
            <p>${experience.description}</p>
        </li>
        `
    }).join('')
}



(async function () {
    const profileData = await fetchProfileData()
    updateProfileInfo(profileData)
    updateSoftSkills(profileData)
    updateHardSkills(profileData)
    updateLanguages(profileData)
    updatePortfolio(profileData)
    updateProfessionalExperience(profileData)
    //console.log(profileData)
})()
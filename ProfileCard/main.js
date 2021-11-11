const linksSocialMedia = {
    github: "Hallssss",
    youtube: "jakelinygracielly",
    instagram: "jakeliny.gracielly",
    facebook: "maykbrito",
    twitter: "jakelinytec"
}

function changeSocialMediaLinks() {
    for(let li of socialLinks.children) {
        const social = li.getAttribute('class')

        li.children[0].href = `https://www.${social}.com/${linksSocialMedia[social]}`
    }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
    const url = `https://api.github.com/users/${linksSocialMedia.github}`

    fetch(url)
        .then(responde => responde.json())
        .then(data => {
            userName.textContent = data.name
            userBio.textContent = data.bio
            userLink.href = data.html_url
            userLogin.textContent = data.login
            userImage.src =data.avatar_url
        })
}

getGitHubProfileInfos()

const computerContainer = document.querySelector('.computer-Container')
const cpuData = document.querySelector('cpu')


const cpuUrl = 'http://localhost:3000/Suggested-Computer'
fetch(cpuUrl)
.then(response => response.json())
.then(computerBuilds=> {
    const enthusiastBuild = computerBuilds[0]
    console.log(enthusiastBuild.enthusiast)   
})
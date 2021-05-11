//variable declarations that grab the table data elements in html
const computerContainer = document.querySelector('.computer-Container')
const cpuTablePart = document.querySelector('.cpu')
const coolingTablePart = document.querySelector('.cooling')
const motherboardTable = document.querySelector('.motherboard')
const gpuTable = document.querySelector('.gpu')
const ramTable = document.querySelector('.ram')
const storageTable = document.querySelector('.storage')
const caseTable = document.querySelector('.case')
const powerSupplyTable = document.querySelector('.power-Supply')
const operatingSystemTable = document.querySelector('.operating-System')
const computerPicDiv = document.querySelector('.computer-Pic')
const whyPcDiv = document.querySelector('.why-Pc')
const highButton =  document.querySelector('.high')
const midButton =  document.querySelector('.mid')
const lowButton =  document.querySelector('.low')
const computerImageTag = document.createElement('img')
const aboutThisComputer = document.createElement('p')


//fetch that grabs the suggested computer database
const cpuUrl = 'http://localhost:3000/Suggested-Computer'
fetch(cpuUrl)
.then(response => response.json()) //turn response to JSON
.then(computerBuilds=> { //with that object
    //this case selects the enthusiast build
   
highButton.addEventListener('click', (e) => {
    
    const enthusiastBuildParts = computerBuilds[0].enthusiast.parts
    createCpuTable(enthusiastBuildParts)
    pictureAndInfo(enthusiastBuildParts)
})

midButton.addEventListener('click', (e) => {
    
    const enthusiastBuildParts = computerBuilds[0].epicGamer.parts
    createCpuTable(enthusiastBuildParts)
    pictureAndInfo(enthusiastBuildParts)
})

lowButton.addEventListener('click', (e) => {
    
    const enthusiastBuildParts = computerBuilds[0].surfinAndStreaming.parts
    createCpuTable(enthusiastBuildParts)
    pictureAndInfo(enthusiastBuildParts)
})

    
})
const createCpuTable = cpuObject => {
    //builds the computer table based on the cpuObject passed in
    cpuTablePart.textContent = cpuObject.cpu
    coolingTablePart.textContent = cpuObject.cooling
    motherboardTable.textContent = cpuObject.motherboard
    gpuTable.textContent = cpuObject.gpu
    ramTable.textContent = cpuObject.ram
    storageTable.textContent = cpuObject.storage
    caseTable.textContent = cpuObject.case
    powerSupplyTable.textContent = cpuObject.powerSupply
    operatingSystemTable.textContent = cpuObject.operatingSystem
}


const pictureAndInfo = cpuObject => {
    //image section
    
    computerImageTag.src = cpuObject.caseImage
    // console.log(cpuObject.caseImage)
    computerImageTag.alt = 'Image of a computer built in this case!'
    computerPicDiv.append(computerImageTag)

    //text section

    aboutThisComputer.innerText = cpuObject.description
    whyPcDiv.append(aboutThisComputer)
    console.log(aboutThisComputer)
   
}


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

//fetch that grabs the suggested computer database
const cpuUrl = 'http://localhost:3000/Suggested-Computer'
fetch(cpuUrl)
.then(response => response.json()) //turn response to JSON
.then(computerBuilds=> { //with that object

    //this case selects the enthusiast build
    const enthusiastBuildParts = computerBuilds[0].enthusiast.parts
    console.log(enthusiastBuildParts[0])
    
    console.log(createCpuTable(enthusiastBuildParts))
})

const createCpuTable = cpuObject => {
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
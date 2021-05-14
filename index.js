//variable declarations that grab/modify DOM elements
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
const highButton = document.querySelector('.high')``
const midButton = document.querySelector('.mid')
const lowButton = document.querySelector('.low')
const computerImageTag = document.createElement('img')
computerImageTag.className = "compImage"
const aboutThisComputer = document.createElement('p')
aboutThisComputer.className = "computerInfo"
const filterList = document.querySelector("#filterList")
const searchBar = document.querySelector("#search")



//url variables that are used in our fetch calls
const cpuUrl = 'http://localhost:3000/Suggested-Computer'
const partsUrl = "http://localhost:3000/allParts"

fetch(cpuUrl)
    .then(response => response.json())
    .then(computerBuilds => { 
        //this button selects our high tier computer
        highButton.addEventListener('click', (e) => {
            const enthusiastBuildParts = computerBuilds[0].enthusiast.parts
            createCpuTable(enthusiastBuildParts)
            pictureAndInfo(enthusiastBuildParts)
        })
        //this button selects the mid tier computer
        midButton.addEventListener('click', (e) => {
            const epicGamer = computerBuilds[0].epicGamer.parts
            createCpuTable(epicGamer)
            pictureAndInfo(epicGamer)
        })
        //this button selects the low tier option
        lowButton.addEventListener('click', (e) => {
            const surfinAndStreaming = computerBuilds[0].surfinAndStreaming.parts
            createCpuTable(surfinAndStreaming)
            pictureAndInfo(surfinAndStreaming)
        })
    })

const createCpuTable = cpuObject => {
    //builds the computer table based on the cpuObject passed in for the above fetch call
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
}

fetch(partsUrl)
    .then(res => res.json())
    .then(cpuPartsObject => {
        //need to acces the parts key values of the returned cpuPartsObject
        const partsList = cpuPartsObject.parts
        /*the code blocks below create elements for each key value in our object with class name of returned parts
        and then appends them into the ul that is hard coded into our html structure
        this is done for each key value in our returned aray from above.*/
        partsList.cpu.forEach(string => {
            const cpuLi = document.createElement("li")
            cpuLi.textContent = string
            cpuLi.className = "returnedParts"
            filterList.append(cpuLi)
        })
        partsList.cooling.forEach(string => {
            const coolingLi = document.createElement("li")
            coolingLi.textContent = string
            coolingLi.className = "returnedParts"
            filterList.append(coolingLi)
        })
        partsList.motherboard.forEach(string => {
            const motherboardLi = document.createElement("li")
            motherboardLi.textContent = string
            motherboardLi.className = "returnedParts"
            filterList.append(motherboardLi)
        })
        partsList.gpu.forEach(string => {
            const gpuLi = document.createElement("li")
            gpuLi.textContent = string
            gpuLi.className = "returnedParts"
            filterList.append(gpuLi)
        })
        partsList.ram.forEach(string => {
            const ramLi = document.createElement("li")
            ramLi.textContent = string
            ramLi.className = "returnedParts"
            filterList.append(ramLi)
        })
        partsList.storage.forEach(string => {
            const storageLi = document.createElement("li")
            storageLi.textContent = string
            storageLi.className = "returnedParts"
            filterList.append(storageLi)
        })
        partsList.case.forEach(string => {
            const caseLi = document.createElement("li")
            caseLi.textContent = string
            caseLi.className = "returnedParts"
            filterList.append(caseLi)
        })
        partsList.powerSupply.forEach(string => {
            const powerSupplyLi = document.createElement("li")
            powerSupplyLi.textContent = string
            powerSupplyLi.className = "returnedParts"
            filterList.append(powerSupplyLi)
        })
        partsList.operatingSystem.forEach(string => {
            const operatingSystemLi = document.createElement("li")
            operatingSystemLi.textContent = string
            operatingSystemLi.className = "returnedParts"
            filterList.append(operatingSystemLi)
        })
        //add event listener to our searchbar ID in our html
        //listen for key up, and when key up happens run the earchParts function
        searchBar.addEventListener("keyup", searchParts)
    })

//searchParts takes the keyup event
function searchParts(event) {
    //store the value of the text that is typed into the searchBar on each key up
    const text = event.target.value.toLowerCase()
    //select all the elements of class name .returnedParts created in the fetch above//
    document.querySelectorAll(".returnedParts").forEach(function(part) {
        //if the input form is empty, display nothing, if the input matches anything in .returnedParts display "block", else Display "none"
        const partName = part.innerText
        if(text === "") {
        part.style.display= "none"
        } else if(partName.toLowerCase().startsWith(text)) {
            part.style.display = "block"
        } else {
            part.style.display = "none"
        } 
    })
}

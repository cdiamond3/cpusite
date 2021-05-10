// let subjectObject = {
//     "Enthusiast": {

//     },
//     "Gamer": {

//     },
//     "Casual": {

//     }
// }
// window.onload = function() {
//   let typeSelect = document.getElementById("typeCpu");
//   let topicSel = document.getElementById("budget");
  
//   for (let x in subjectObject) {
//     typeSelect.options[typeSelect.options.length] = new Option(x, x);
//   }
//   subjectSel.onchange = function() {
//     //empty Chapters- and Topics- dropdowns
//     topicSel.length = 1;
//     //display correct values
//     for (let y in subjectObject[this.value]) {
//       topicSel.options[topicSel.options.length] = new Option(y, y);
//     }
//   }
//   topicSel.onchange = function() {
//     //empty Chapters dropdown
//     chapterSel.length = 1;
//     //display correct values
//     let z = subjectObject[subjectSel.value][this.value];
//     for (let i = 0; i < z.length; i++) {
//       chapterSel.options[chapterSel.options.length] = new Option(z[i], z[i]);
//     }
//   }
// }
const computerContainer = document.querySelector('.computer-Container')
const cpuData = document.querySelector('cpu')


const cpuUrl = 'http://localhost:3000/Suggested-Computer'
fetch(cpuUrl)
.then(response => response.json())
.then(computerBuilds=> {

    const enthusiastBuild = computerBuilds[0]
    console.log(enthusiastBuild.enthusiast)
    
    //create a table to display desired computer build
   
    
    

    // computerContainer.append(table)
})

import fs from 'fs';


const populateProjects = () => {
    let projectsList = document.getElementById("current-project")
    const dirs = fs.readdirSync('./projects');
        
    for(let dir of dirs){
        projectsList.innerHTML += `<option id="${dir}">${dir.replace("-", " ")}</option>`
    }
}

export default populateProjects;
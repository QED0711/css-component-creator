
const fs = require("fs");
// import { exec } from 'shelljs'


const handleNewProject = () => {
    const newProject = document.getElementById("new-project");

    newProject.onsubmit = (e) => {
        e.preventDefault();
        const name = e.target.children[0];
        const parsedName = name.value.replace(" ", "-")
        const dir = `./projects/${parsedName}`;
        
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir)
            const currentProject = document.getElementById("current-project");
            currentProject.innerHTML += `<option value="${parsedName}">${name.value}</option>`
            currentProject.value = parsedName
        } else {
            alert("That project name already exists. Please choose another");
        }
        name.value = "";
    }
}

export default handleNewProject;
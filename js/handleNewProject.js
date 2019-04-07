
const fs = require("fs");
// import { exec } from 'shelljs'

const createLocalDirs = (dir) => {
    console.log(dir + '/html')
    fs.mkdirSync(dir + '/html');
    fs.mkdirSync(dir + '/css');
}


const handleNewProject = () => {
    const newProject = document.getElementById("new-project");

    newProject.onsubmit = (e) => {
        e.preventDefault();
        const name = e.target.children[0];
        const parsedName = name.value.replace(" ", "-")
        const dir = `./projects/${parsedName}`;
        
        if(!fs.existsSync(dir)){
            fs.mkdirSync(dir)
            createLocalDirs(dir);
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
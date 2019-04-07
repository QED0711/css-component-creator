
import fs from 'fs';

const populateComponentList = (newComponent) => {
    const projectName = document.getElementById("current-project").value.replace(" ", "-");
    const components = fs.readdirSync(`./projects/${projectName}/css`);
    console.log(components)
    const componentList = document.getElementById("component-list")
    componentList.innerHTML = "";
    
    let componentName;
    for(let c of components){
        componentName = c.split(".css")[0]
        componentList.innerHTML += `<option value="${componentName}">${componentName.replace("-", " ")}</option>`
    }
    // if populateComponentList received a newComponent, then set the current value of the component list to that name
    if(newComponent){
        componentList.value = newComponent;
    }
}

export default populateComponentList;
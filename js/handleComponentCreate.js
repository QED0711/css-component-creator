
import fs from 'fs';
import populateComponentList from './populateComponentList';



const handleComponentCreate = () => {

    // get the component form element
    const componentForm = document.getElementById("current-component");
    componentForm.onsubmit = (e) => {
        e.preventDefault();
        // get the new component name and the project name so we can create new files in the correct folder
        const componentName = componentForm.children[3].value.replace(" ", "-");
        const projectName = document.getElementById("current-project").value.replace(" ", "-");
        // create html and css files in the correct folders
        fs.writeFileSync(`./projects/${projectName}/html/${componentName}.html`, "");
        fs.writeFileSync(`./projects/${projectName}/css/${componentName}.css`, "");      
        
        // after files have been written, update the component list with all the components in the project
        populateComponentList(componentName);
        // reset the component form
        componentForm.children[3].value = ""
        
    }

}

export default handleComponentCreate;
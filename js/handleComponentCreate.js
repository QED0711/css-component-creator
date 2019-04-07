
import fs from 'fs';

const handleWriteError = (err) => {
    if(err){
        console.error(err)
    } else {
        console.log("File Created")
    }
}

const handleComponentCreate = () => {

    const componentForm = document.getElementById("current-component");
    componentForm.onsubmit = (e) => {
        e.preventDefault();
        const componentName = componentForm.children[3].value.replace(" ", "-");
        const projectName = document.getElementById("current-project").value.replace(" ", "-");
        // debugger
        fs.writeFile(`./projects/${projectName}/html/${componentName}.html`, "", handleWriteError);
        fs.writeFile(`./projects/${projectName}/css/${componentName}.css`, "", handleWriteError);        
    }

}

export default handleComponentCreate;
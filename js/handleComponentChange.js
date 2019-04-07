import fs from 'fs';

const handleComponentChange = () => {
    const componentList = document.getElementById('component-list');
    
    const userInput = document.getElementById('user-input');
    const html = userInput.children[4]
    const css = userInput.children[8]

    componentList.onchange = (e) => {
        const currentComponent = componentList.value;
        fs.readFile(`./projects/${projectName}/html/${currentComponent}.html`, (err, data) => {
            if(err){
                throw err
            }
        })
    }
}

export default handleComponentChange;
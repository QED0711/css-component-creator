import fs from 'fs';
import {setComponentHTML, setComponentCSS} from "./setComponentDOM";
import { projectName } from './helpers'

const handleComponentChange = () => {
    const componentList = document.getElementById('component-list');
    
    const userInput = document.getElementById('user-input');
    const html = userInput.children[4]
    const css = userInput.children[8]

    componentList.onchange = (e) => {
        const currentComponent = componentList.value;
        const pn = projectName();
        fs.readFile(`./projects/${pn}/html/${currentComponent}.html`, (err, data) => {
            if(err){
                throw err
            } else {
                html.value = data
                setComponentHTML(data);
            }
        })
        fs.readFile(`./projects/${pn}/css/${currentComponent}.css`, (err, data) => {
            if(err){
                throw err
            } else {
                css.value = data
                setComponentCSS(data)
            }
        })
    }
}

export default handleComponentChange;
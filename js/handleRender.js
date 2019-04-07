import fs from 'fs'
import {setComponentHTML, setComponentCSS} from "./setComponentDOM";

const handleWriteError = (err) => {
    if(err) console.error(err)
}

const handleRender = () => {
    const userInput = document.getElementById('user-input');
    const html = userInput.children[4]
    const css = userInput.children[8]
    
    html.onkeyup = (e) => {
        setComponentHTML(html.value)
    }

    css.onkeyup = (e) => {
        setComponentCSS(css.value)
    }
    
    userInput.onsubmit = (e) => {
        e.preventDefault();
        console.log(html.value, css.value)

        const projectName = document.getElementById("current-project").value.replace(" ", "-");
        const componentName = document.getElementById("component-list").value

        console.log({projectName, componentName})
        fs.writeFile(`./projects/${projectName}/html/${componentName}.html`, html.value, handleRender)
        fs.writeFile(`./projects/${projectName}/css/${componentName}.css`, css.value, handleRender)

    }
}

export default handleRender;
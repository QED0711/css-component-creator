import fs from 'fs';
import { projectFileName } from './helpers';

const handleCompileStyle = () => {
    const compileForm = document.getElementById("compile-style-form");
    compileForm.onsubmit = (e) => {
        e.preventDefault();
        const styles = fs.readdirSync(`./projects/${projectFileName()}/css`);
        let compiledStylesheet = "";
        for(let style of styles){
            compiledStylesheet = compiledStylesheet + fs.readFileSync(`./projects/${projectFileName()}/css/${style}`) + "\n\n";
        }
        fs.writeFile(`./projects/${projectFileName()}/compiled.css`, compiledStylesheet, (err) => {
            if(err){
                console.error(err);
            } else {
                console.log("Project Style Compiled")
            }
        })
    }
}

export default handleCompileStyle
import {setComponentHTML, setComponentCSS} from "./setComponentDOM";



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

    }
}

export default handleRender;
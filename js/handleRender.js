import {setComponentHTML, setComponentCSS} from "./setComponentHTML";



const handleRender = () => {
    const userInput = document.getElementById('user-input');
    const html = userInput.children[2]
    const css = userInput.children[6]
    
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
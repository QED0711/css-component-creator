
// get all textareas of document for later
const textareas = document.querySelectorAll('textarea');

const changeKeyboardFunctionality = (e, code, replaceText) => {
    const self = e.target;
    const keyCode = e.keyCode || e.which
    if(keyCode === code){
        e.preventDefault();
        const s = self.selectionStart;
        self.value = self.value.substring(0, self.selectionStart) + replaceText + self.value.substring(self.selectionEnd);
        self.selectionEnd = s + 1;
    }
}


const addTextAreaFunctionality = () => {
    for(let ta of textareas){
        ta.onkeydown = (e) => {
            if(e.shiftKey){
                changeKeyboardFunctionality(e, 57, "()") // close praentheses
                changeKeyboardFunctionality(e, 219, "{}") // close braces
                changeKeyboardFunctionality(e, 188, "<>") // Tag braces
                changeKeyboardFunctionality(e, 222, '""') // Close Double Quotes
            } else {
                changeKeyboardFunctionality(e, 9, "\t"); // tab functionality
                changeKeyboardFunctionality(e, 219, "[]"); // close square brackets                
                changeKeyboardFunctionality(e, 222, "''"); // close single quotes                

            }
        }
    }
}


export default addTextAreaFunctionality;

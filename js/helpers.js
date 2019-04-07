
const projectName = () => {
    return document.getElementById("current-project").value
}

const projectFileName = () => {
    return document.getElementById("current-project").value.replace(" ", "-");
}



export {
    projectName,
    projectFileName
}
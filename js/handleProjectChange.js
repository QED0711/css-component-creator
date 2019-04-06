
const handleProjectChange = () => {
    const projectForm = document.getElementById("current-project");
    projectForm.onchange = (e) => {
        e.preventDefault();
        console.log("EXCERPTED")
    }
}

export default handleProjectChange;
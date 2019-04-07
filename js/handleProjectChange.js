import populateComponentList from "./populateComponentList";

const handleProjectChange = () => {
    const currentProject = document.getElementById("current-project");
    currentProject.onchange = (e) => {
        e.preventDefault();
        const projectName = e.target.value
        console.log(projectName)
        populateComponentList();
    }
}

export default handleProjectChange;
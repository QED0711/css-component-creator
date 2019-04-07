import populateComponentList from "./populateComponentList";

const handleProjectChange = () => {
    const currentProject = document.getElementById("current-project");
    currentProject.onchange = (e) => {
        e.preventDefault();
        const projectName = e.target.value
        populateComponentList();
    }
}

export default handleProjectChange;
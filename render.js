import handleProjectChange from "./js/handleProjectChange";
import handleNewProject from "./js/handleNewProject";
import populatProjects from './js/populateProjects';
import handleRender from './js/handleRender'
import handleComponentCreate from "./js/handleComponentCreate";

populatProjects();

handleProjectChange();
handleNewProject();
handleRender();
handleComponentCreate();
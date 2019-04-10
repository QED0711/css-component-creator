import handleProjectChange from "./js/handleProjectChange";
import handleNewProject from "./js/handleNewProject";
import populatProjects from './js/populateProjects';
import handleRender from './js/handleRender'
import handleComponentCreate from "./js/handleComponentCreate";
import handleComponentChange from "./js/handleComponentChange";
import addTextAreaFunctionality from "./js/textAreaKeyboardCommands";
import handleCompileStyle from "./js/handleCompileStyle";

populatProjects();

handleProjectChange();
handleNewProject();
handleRender();
handleComponentCreate();
handleComponentChange();
addTextAreaFunctionality();
handleCompileStyle();
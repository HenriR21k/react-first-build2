//import moduleList from '../modulesList';
import { API } from '../api/apiRequest.js';
import { useState, useEffect } from 'react';
import { ModuleList } from '../modules/ModuleList.js';
import ModuleForm from "../modules/ModuleForm";
import { useNavigate } from 'react-router-dom';

import Button from "../UI/Button";

function MyModules() {
    // Properties ----------------------------
    const navigate = useNavigate();

    // Hooks ---------------------------------

    const [loadingMessage, setLoadingMessage] = useState("Loading records ...");
    const [modules, setModules] = useState(null)
    const [viewModuleForm, setViewModuleForm] = useState(false)
    const [SingleModule, setSingleModule] = useState(null)

    useEffect(() => { fetchModules() }, []);
    
    // Methods -------------------------------

    const setModuleFormVisibility = () => {
      setViewModuleForm(true);
    }

    const fetchModules = async () => {
      const outcome = await API.get('Modules');
      if (outcome.success) setModules (outcome.response);
      else setLoadingMessage(`Error ${outcome.response.status}: Modules could not be found.`);
    }

    const handleModulePost = async (newModule) => {

      console.log("input of post: "+JSON.stringify(newModule)); 
      const outcome = await API.post('Modules', newModule);
      outcome.success && cancelModuleForm();
      console.log("outcome of post: "+JSON.stringify(outcome.response));
      fetchModules();

    }

    const handleModulePut = async (newModule) => {

        console.log("input of put: "+JSON.stringify(newModule)); 
        const outcome = await API.put('Modules/'+newModule.ModuleID, newModule);
        outcome.success && cancelModuleForm();
        console.log("outcome of put: "+JSON.stringify(outcome.response));        
        fetchModules();
  
      }


    //rethink - needs ID to delete with, but we passed in the obj, maybe use newModule.oduleId
    const handleModuleDelete = async (newModule) => {

        console.log("input of delete: "+JSON.stringify(newModule)); 
        const outcome = await API.delete('Modules/'+newModule.ModuleID);
        outcome.success && cancelModuleForm();
        console.log("outcome of delete: "+JSON.stringify(outcome.response));        
        fetchModules();


    }

    const setEdit = (module) => {
      setSingleModule(module);
      setViewModuleForm(true); 
    }

    const cancelModuleForm = () => {
      setViewModuleForm(false);
      setSingleModule(null);
      
    }

    //unused
    const handleEdit = (module) => {
      setSingleModule(module);
      setViewModuleForm(true);
    }
    
    const addFavourite = (moduleId) => setModules(
        modules.map((module) => (
          module.ModuleID === moduleId ? { ...module, favourite: true } : module
        ))
      );

    const removeFavourite = (moduleId) => setModules(
        modules.map((module) => (
          module.ModuleID === moduleId ? { ...module, favourite: false } : module
        ))
      );

    const listAllModules = () => fetchModules();
    const listAllFavourites = () => setModules(modules.filter((module) => module.favourite));

    // View ---------------------------------

    return (     
        <>
            <div className="heading">All Modules</div>
            {
              viewModuleForm && 
                <ModuleForm 
                  onPost = {handleModulePost}
                  onPut = {handleModulePut}
                  onCancel = {cancelModuleForm}
                  module = {SingleModule}
                />
            } 

            <div className = "favouriteButton">
                
                <Button
                className = "ListAllModules"
                img = "https://img.icons8.com/material-outlined/344/list.png"
                alt = ""
                title = "List all"
                onClick = {listAllModules}
                type = "Button"
                ></Button>

                <Button
                 className = "favouriteButtons"
                 img = "https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1655390263~hmac=70dae7f22c500d0cc77ad17858ce2aee"
                 alt = ""
                 title = "List Favourites"
                 onClick={listAllFavourites}
                 type = "Button"
                 >
                </Button>

                <Button
                className = "addModuleButton"
                img = "https://img.icons8.com/ios-glyphs/344/add--v1.png"
                alt = ""
                title = "Add Module"
                onClick= {setModuleFormVisibility}
                type = "Button"
                >
               </Button>



            </div>
              {
                !modules
                ? loadingMessage
                : modules.length === 0
                  ? <p>No Modules Found</p>
                  : <ModuleList 
                    modules={modules} 
                    handlers={{addFavourite, removeFavourite, setEdit, handleModuleDelete}} 
                /> 
              }
        </>
    )

}

export default MyModules;
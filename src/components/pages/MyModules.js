//import moduleList from '../modulesList';
import { apiRequest } from '../api/apiRequest.js';
import { useState, useEffect } from 'react';
import { ModuleList } from '../modules/ModuleList.js';
import ModuleForm from "../modules/ModuleForm";

import Button from "../UI/Button";

function Home() {
    // Properties ----------------------------

    const API_URL = 'https://my.api.mockaroo.com/';
    const API_KEY = '?key=bb6adbc0';

    // Hooks ---------------------------------

    const [loadingMessage, setLoadingMessage] = useState("Loading records ...");
    const [modules, setModules] = useState(null)
    const [viewModuleForm, setViewModuleForm] = useState(false)

    const setModuleFormVisibility = () => {
      setViewModuleForm(true);
    }

    const handleAddModule = (newModule) => {
      newModule.ModuleID = modules.length+1;
      setModules([...modules, newModule]);
    }

    const cancelModuleForm = () => {
      setViewModuleForm(false);
    }
    
    useEffect(() => { fetchModules() }, []);

    // Context -------------------------------
    // Methods -------------------------------

    const fetchModules = async () => {
      const outcome = await apiRequest(API_URL, 'Modules', API_KEY);
      if (outcome.success) setModules (outcome.response);
      else setLoadingMessage(`Error ${outcome.response.status}: Modules could not be found.`);
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
                  onAdd = {handleAddModule}
                  onCancel = {cancelModuleForm}
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
                 img = /*"https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1655390263~hmac=70dae7f22c500d0cc77ad17858ce2aee"*/ ""
                 alt = ""
                 title = "List Favourites"
                 onClick={listAllFavourites}
                 type = "Button"
                 >
                </Button>

                <Button
                className = "addModuleButton"
                img = ""
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
                    handlers={{addFavourite, removeFavourite}} 
                /> 
              }
        </>
    )

}

export default Home;
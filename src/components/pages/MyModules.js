//import moduleList from '../modulesList';
import { apiRequest } from '../api/apiRequest.js';
import { useState, useEffect } from 'react';
import { ModuleList } from '../modules/ModuleList.js';

function Home() {
    // Properties ----------------------------

    const API_URL = 'https://my.api.mockaroo.com/';
    const API_KEY = '?key=bb6adbc0';

    // Hooks ---------------------------------

    const [loadingMessage, setLoadingMessage] = useState("Loading records ...");
    const [modules, setModules] = useState(null)

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

            <div className = "favouriteButton">
                <button onClick={listAllFavourites}> 
                    <img className = "heart" src ="https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1655390263~hmac=70dae7f22c500d0cc77ad17858ce2aee" alt = "heart"/> List Favourites
                </button>
                <button onClick={listAllModules}> 
                    <img className = "list" src ="https://img.icons8.com/material-outlined/344/list.png" alt ="list" /> List all
                </button>
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
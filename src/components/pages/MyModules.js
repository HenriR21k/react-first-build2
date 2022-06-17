//import moduleList from '../modulesList';
import initialModules from '../data/modules';
import { useState } from 'react';
import { ModuleList } from '../modules/ModuleList.js';






function Home() {
    // Properties ----------------------------
    // Hooks ---------------------------------

    //utilise useStates here
    const [modules, setModules] = useState(initialModules)

    // Context -------------------------------
    // Methods -------------------------------

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

    const listAllModules = () => setModules(initialModules);
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
            
            <ModuleList 
                modules={modules} 
                handlers={{addFavourite, removeFavourite}} 
            /> 
        </>
    )

}

export default Home;
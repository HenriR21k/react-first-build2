//import moduleList from '../modulesList';
import modules from '../data/modules';

import { ModuleList } from '../modules/ModuleList.js';






function MyModules() {
    // Properties ----------------------------
    // Hooks ---------------------------------
    // Context -------------------------------
    // Methods -------------------------------
    // View ---------------------------------

    return ( 
        
            <section>
                
                <div className="heading">All Modules</div>

                <div className = "favouriteButton">
                    <button> <img class = "heart" src ="https://cdn-icons.flaticon.com/png/512/2589/premium/2589175.png?token=exp=1655390263~hmac=70dae7f22c500d0cc77ad17858ce2aee" alt = "heart"/> List Favourites</button>
                    <button> <img class = "list" src ="https://img.icons8.com/material-outlined/344/list.png" alt ="list" /> List all</button>
                </div>
                
                
            
                <ModuleList modules={modules} /> 
            

            </section>
    
    )

}

export default MyModules;
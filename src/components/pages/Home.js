//import moduleList from '../modulesList';
import modules from '../../modules.js';

import { ModuleList } from '../modules/modulesList.js';




function Home() {
    // Properties ----------------------------
    // Hooks ---------------------------------
    // Context -------------------------------
    // Methods -------------------------------
    // View ---------------------------------

    return ( <section>

        <h1>All Modules</h1>
    
        <ModuleList modules={modules} /> 
       

        </section>
    )

}

export default Home;
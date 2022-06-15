//import moduleList from '../modulesList';
import modules from '../../modules.js';

import { moduleList } from './modules/modulesList.js';




function Home() {
    // Properties ----------------------------
    // Hooks ---------------------------------
    // Context -------------------------------
    // Methods -------------------------------
    // View ---------------------------------

    return ( <section>

        <h1>All Modules</h1>
    
        <moduleList module={modules} /> 

        </section>
    )

}

export default Home;
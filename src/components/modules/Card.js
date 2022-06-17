import './Card.css';

import { useContext } from 'react';


function Card({module}) {




    return ( 
        <div className="Card">
            <div className="Moduleimage">
                <img src={module.ModuleImage} alt={module.ModuleName} />
            </div>
            <div className="content">
                <h1>{module.ModuleName}</h1>
                <p>Module Code: {module.ModuleCode}</p>
                <p>Module Level: {module.ModuleLevel}</p>
            </div>
            <div className="actions">
                {/* if module favourite is true, Display button remove from favourites, else Add to favourites */}
                <button>Add To Favourites</button>
            </div>
        </div>
    );
}

export default Card; 
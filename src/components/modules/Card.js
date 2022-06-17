import './Card.css';

import { useContext } from 'react';
import FavouritesContext from '../data/Favourites';

function Card({module}) {

    /*Contains current context*/
    const favouriteContextObj = useContext(FavouritesContext);

    /*grabs current card id and passes into method IsModuleFavourite which is attached to the current stateobject favourite 
    context object, which will return a true or false statement into IsModuleFavourite.
    */
    const IsModuleFavourite = favouriteContextObj.IsModuleFavourite(module.ModuleID);


    /*This method uses the if statement to determine if the module is a favourite when the button is clicked.
    if the module is a favourite, remove favourite since it will have displayed "remove favourite", and if its not a favourite and its clicked
    it adds the favourite.
    */
    function toggleFavouriteStatusHandler() {
        if (IsModuleFavourite) {
            favouriteContextObj.removeFavourite(module.ModuleID);
        }
        else {
            favouriteContextObj.addFavourite(module);
        }
    }

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
                <button onClick={toggleFavouriteStatusHandler}>{IsModuleFavourite ? 'Remove from Favourites' : 'Add To Favourites'}</button>
            </div>
        </div>
    );
}

export default Card; 
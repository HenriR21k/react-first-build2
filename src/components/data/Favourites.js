import { createContext, useState } from "react";

/*Contains react component*/ 
const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteModule) => {},
    removeFavourite: (moduleID) => {},
    IsModuleFavourite: (moduleID) => {}
});

/*Provides context for all the components interested i.e: Card */
export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([]);

    /*The three functions below revolve around changing the state*/

    function addFavouriteHandler(favouriteModule) {
        setUserFavourites((userFavourites) => {
            return userFavourites.concat(favouriteModule);
        });
    }
    
    function removeFavouriteHandler(moduleID) {
        setUserFavourites(prevUserFavourites => {
            return prevUserFavourites.filter(module => module.moduleID !== moduleID);
        });
    }


    function IsModuleFavouriteHandler(moduleID) {
        return userFavourites.some(module => module.moduleID === moduleID)
    }

    /*Include show all Modules Handler for list button*/


    /*So when the state changes, the userFavourites is populating favourites. We also grab the length*/
    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler,
        IsModuleFavourite: IsModuleFavouriteHandler

    };
    
    /*Needs to be wrapped around components interested in interacting with context
    This components which is exposed by favourites context provider wants a value prop where
    we pass the current context value. That way, the context is the return and dynamically updated.
    */

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>


}

export default FavouritesContext;
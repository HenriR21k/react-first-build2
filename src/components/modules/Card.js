import './Card.css';




function Card({module}) {

    //Create a boolean function for handling favourites
    //then use that to swap the buttons display.


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
                {/* if module favourite is true, Display button remove from favourites /call removeButtonFunction, else Add to favourites /addFavouriteFunction  */}
                <button>Add To Favourites</button>
            </div>
        </div>
    );
}

export default Card; 
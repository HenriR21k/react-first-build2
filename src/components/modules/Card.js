import './Card.css';


function Card({module, handlers}) {

    const handleAdd = () => handlers.addFavourite(module.ModuleID);
    const handleRemove = () => handlers.removeFavourite(module.ModuleID);

    return ( 
        <div className="Card">

            {
                module.favourite && console.log("Put heart here!")
            }

            <div className="Moduleimage">
                <img src={module.ModuleImage} alt={module.ModuleName} />
            </div>
            
            <div className="content">
                <h1>{module.ModuleName}</h1>
                <p>Module Code: {module.ModuleCode}</p>
                <p>Module Level: {module.ModuleLevel}</p>
            </div>
            
            <div className="actions">
                {
                    module.favourite 
                        ? <button onClick={handleRemove}> Remove from Favourites </button>
                        : <button onClick={handleAdd}> Add to Favourites </button>
                }
            </div>

        </div>
    );
}

export default Card; 
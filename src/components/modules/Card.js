import './Card.css';
import Button from '../UI/Button';


function Card({module, handlers}) {

    const handleAdd = () => handlers.addFavourite(module.ModuleID);
    const handleRemove = () => handlers.removeFavourite(module.ModuleID);
	const handleEdit = () => handlers.setEdit(module);
    const handleDelete = () => handlers.handleModuleDelete(module);
    

    return ( 
        <div className="Card">

            {
                module.favourite && console.log("Put heart here!")
            }

            <div className="Moduleimage">
                <img src={module.ModuleImageURL} alt={module.ModuleName} />
            </div>
            
            <div className="content">
                <h1>{module.ModuleName}</h1>
                <p>Module Code: {module.ModuleCode}</p>
                <p>Module Level: {module.ModuleLevel}</p>
								<p>Module Leader ID: {module.ModuleLeaderID} </p>
            </div>
            
            <div className="actions">
                {
                    module.favourite 
                    ?   <Button
                        className = "favourite"
                        img = "https://img.icons8.com/material-sharp/344/like--v1.png"
                        alt = ""
                        title = ""
                        onClick = {handleRemove}
                        type = "Button"
                        >
                        </Button>
                    : 
                        <Button
                        className = "favourite"
                        img = "https://img.icons8.com/fluency/344/like.png"
                        alt = ""
                        title = ""
                        onClick = {handleAdd}
                        type = "Button"
                        >
                        </Button>
                }
                  
                    <Button
                        className = "editBtn"
                        img = "https://img.icons8.com/ios-glyphs/344/edit--v1.png"
                        alt = ""
                        title = ""
                        onClick = {handleEdit}
                        type = "Button"
                        >
                    </Button>

                    <Button
                        className = "deleteBtn"
                        img = "https://img.icons8.com/ios-glyphs/344/filled-trash.png"
                        alt = ""
                        title = ""
                        onClick = {handleDelete}
                        type = "Button"
                       >
                    </Button> 
            </div>

           
           

        </div>
    );
}

export default Card; 
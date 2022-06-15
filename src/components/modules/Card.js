import './Card.css';

function Card({module}) {
    return ( 
        <div className="Card">
            <div className="Moduleimage">
                <img src={module.ModuleImage} alt={module.ModuleName} />
            </div>
            <div className="content">
                <h1>{module.ModuleName}</h1>
                <p>{module.ModuleCode}</p>
                <p>{module.ModuleLevel}</p>
            </div>
            <div className="actions">
                <button>To Favourites</button>
            </div>
        </div>
    );
}

export default Card;
import classes from './moduleItem.css';

function moduleItem(props) {
    return ( 
    <li className={classes.item}>
        <div className={classes.Moduleimage}>
            <img src={props.ModuleImage} alt={props.ModuleName} />
        </div>
        <div className={classes.content}>
            <h1>{props.ModuleName}</h1>
            <ul>{props.ModuleCode}</ul>
            <ul>{props.ModuleLevel}</ul>
        </div>
        <div className={classes.actions}>
            <button>To Favourites</button>
        </div>
    </li>
    );
}

export default moduleItem;
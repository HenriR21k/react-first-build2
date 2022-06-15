
import moduleItem from './moduleItem.js';
import classes from './modulesList.css';

function moduleList(props) {
    return (
    <ul className={classes.list}>
    {props.modules.map(module => 
        <moduleItem 
        key={module.ModuleID} 
        id={module.ModuleID} 
        moduleImage={module.ModuleImage} 
        moduleName={module.ModuleName} 
        moduleCode={module.moduleCode}
        moduleLevel={module.ModuleLevel}
        />
        )}
    </ul>
    );
}

export default moduleList;
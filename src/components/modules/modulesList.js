import CardContainer from '../UI/CardContainer';
import Card from './Card';
import classes from './modulesList.css';

export function ModuleList(props) {
    return (
        <CardContainer className={classes.list}>
            {
                props.modules.map(module => 
                    <Card 
                        key={module.ModuleID} 
                        module = {module}
                        
                    />
                )
            }
        </CardContainer>
    );
}




export default ModuleList;
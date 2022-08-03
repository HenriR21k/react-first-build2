import CardContainer from '../UI/CardContainer';
import UserCard from './UserCard.js';
import classes from './UserList.css';

export function UserList(props) {
    return (
        <CardContainer className={classes.list}>
            {
                props.users.map(user => 
                    <UserCard 
                        key={user.UserID} 
                        user = {user}
                    />
                )
            }
        </CardContainer>
    );
}




export default UserList;
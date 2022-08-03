import { API } from '../api/apiRequest.js';
import { useState, useEffect } from 'react';
import { UserList } from '../users/UserList.js' 

function MyUsers() {
    // Properties ----------------------------
    const [loadingMessage, setLoadingMessage] = useState("Loading records ...");
    const [users, setUsers] = useState(null)

    useEffect(() => { fetchUsers() }, []);


    // Methods -------------------------------

    const fetchUsers = async () => {
      const outcome = await API.get('Users');
      if (outcome.success) setUsers (outcome.response);
      else setLoadingMessage(`Error ${outcome.response.status}: Users could not be found.`);
    
    }

    // View ---------------------------------
    return (
    <>
      <div className="heading">All Users</div>
              
              {
                !users
                ? loadingMessage
                : users.length === 0
                  ? <p>No Users Found</p>
                  : <UserList 
                    users={users} 
                /> 
              }


    </>


    )};


export default MyUsers;

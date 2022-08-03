import './UserCard.css';


function UserCard({user}) {

/*  {"UserID":
  "UserFirstname":
  "UserLastname":
  "UserEmail":
  "UserPassword":
  "UserRegistered":
  "UserUsertypeID":
  "UserLevel":
  "UserImageURL":
}*/

return ( 
  <div className="Card">

      <div className="Userimage">
          <img src={user.UserImageURL}/>
      </div>
      
      <div className="content">
          <h1> {user.UserFirstname}</h1>
          <p>{user.UserLastname}</p>
  
      </div>
    
  </div>
);

}

export default UserCard;
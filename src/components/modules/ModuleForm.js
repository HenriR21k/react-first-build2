import { useState, useEffect } from "react";
import { apiRequest } from '../api/apiRequest.js';
import {Form, FormInput, FormSelect} from "./Form";
import Button from "../UI/Button";
import "./ModuleForm.css";


function ModuleForm (props) {
  // Properties ----------------------------
    const API_URL = 'https://my.api.mockaroo.com/';
    const API_KEY = '?key=bb6adbc0';
    const [users, setUsers] = useState(null);

  // State ---------------------------------
  const [loadingMessage, setLoadingMessage] = useState("Loading records ...");
  const [module, setModule] = useState(null);
  const [moduleNameError, setModuleNameError] = useState(null);
  const [moduleCodeError, setModuleCodeError] = useState(null);


  // Methods -------------------------------

  const handleDefaultValue = (moduleObjectValue) => {

    if (module === null)
    {
      return "";
    }
    else if (moduleObjectValue === "ModuleName")
    {
          return module.ModuleName;
    }
    else if (moduleObjectValue === "ModuleCode")
    {
          return module.ModuleCode;
    }
    else if (moduleObjectValue === "ModuleLevel")
    {
          return module.ModuleLevel;
    }
    else if (moduleObjectValue === "ModuleLeaderID")
    {
          return module.ModuleLeaderID;
    }
    else if (moduleObjectValue === "ModuleImageURL")
    {
          return module.ModuleImageURL;
    }
   

  }

  useEffect(() => { fetchUsers() }, []);

  const fetchUsers = async () => {
    const outcome = await apiRequest(API_URL, 'Users', API_KEY);
    if (outcome.success) setUsers (outcome.response);
    else setLoadingMessage(`Error ${outcome.response.status}: Users could not be found.`);
  }

  const handleModuleNameError = () => {
    
    module.ModuleName.length < 5 
    ? setModuleNameError("Error: Module Name must be longer than 5 characters")
    : setModuleNameError(null);
    
  }

  const handleModuleCodeError = () => {

    module.ModuleCode.length < 5 
    ? setModuleCodeError("Error: Module Code must be longer than 5 characters")
    : setModuleCodeError(null);

  }

  //when we add module, when we open up form, we need to fetch users, and we also need to pass module, and set the attributes. Initially the form was null and empty causing the erro

  useEffect(() => {setModule(props.module)}, []);

  

  const handleSubmit = async (event) => {
    event.preventDefault()
    
      {(moduleNameError === null && moduleCodeError === null)
        && props.onAdd(module);
        
      }
  };

  const handleChange = (event) => {
    const updatedModule = {...module, [event.target.name]: event.target.value};
    setModule(updatedModule);
    handleModuleNameError()
    handleModuleCodeError()
  };

  // View ----------------------------------
  
  return (

    <body>
      <Form onSubmit={handleSubmit}>
        <FormInput name = "ModuleName" placeholder = "Programming..." label = "Module Name" defaultValue = {handleDefaultValue("ModuleName")} onChange={handleChange} error={moduleNameError}  />
        <FormInput name = "ModuleCode" placeholder = "CI2530..." label = "Module Code" defaultValue = {handleDefaultValue("ModuleCode")} onChange={handleChange} error={moduleCodeError}/>
        <FormSelect name = "ModuleLevel" label = "Module Level" defaultValue = {handleDefaultValue("ModuleLevel")} onChange={handleChange} >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </FormSelect>
        {
          !users
          ? loadingMessage
          : users.length === 0
            ? <p>No Users Found</p>
            : <FormSelect name = "ModuleLeaderID" label = "Module Leader ID" defaultValue = {handleDefaultValue("ModuleLeaderID")} onChange={handleChange} >
              {users.map((user) => (
              <option value={user.UserID} key={user.UserID}> {user.UserID} {user.UserFirstname} {user.UserLastname} </option>))}
              </FormSelect>
        }
        

        <FormInput name = "ModuleImageURL" placeholder = "Enter URL..." label = "Module Image URL" defaultValue = {handleDefaultValue("ModuleImage")} onChange={handleChange}/>

        <Button
          className = "submitBtn"
          img = ""
          alt = ""
          title = "Submit"
          onClick = {handleSubmit}
          type = "Button"
        ></Button>
        <Button
          className = ""
          img = ""
          alt = ""
          title = "Cancel"
          onClick = {props.onCancel}
          type = "Button"
        ></Button>
   
      </Form>
    </body>
  )


}

export default ModuleForm;
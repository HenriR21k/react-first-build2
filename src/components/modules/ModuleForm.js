import { useState } from "react";
import {Form, FormInput, FormSelect} from "./Form";
import Button from "../UI/Button";
import "./ModuleForm.css";


function ModuleForm (props) {
  // Properties ----------------------------
/*  let initialModules = [
    {
      ModuleName: "",
      ModuleCode: "",
      ModuleLevel: 0,
      ModuleLeaderID: 0,
      ModuleImage: ""
    }];*/
  // State ---------------------------------
  const [module, setModule] = useState(null);

  // Methods -------------------------------
  const handleSubmit = (event) => {
    event.preventDefault()
    
    props.onAdd(module);
  };

  const handleChange = (event) => {
    const updatedModule = {...module, [event.target.name]: event.target.value};
    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(updatedModule);
    setModule(updatedModule)
  };

  
  
 
  // View ----------------------------------
  return (

    <body>
      <Form>
        <FormInput name = "ModuleName" placeholder = "Enter Value" label = "Module Name" onChange={handleChange}/>
        <FormInput name = "ModuleCode" placeholder = "Enter Value" label = "Module Code" onChange={handleChange}/>
        <FormInput name = "ModuleLevel" label = "Module Level" onChange={handleChange}/>
        <FormInput name = "ModuleLeaderID" label = "Module Leader ID" onChange={handleChange}/>
        <FormInput name = "ModuleImage" placeholder = "Enter Value" label = "Module Image URL" onChange={handleChange}/>

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
import { useState } from "react";
import {Form, FormInput, FormSelect} from "./Form";
import Button from "../UI/Button";
import "./ModuleForm.css";


function ModuleForm (props) {
  // Properties ----------------------------

  // State ---------------------------------
  const [module, setModule] = useState(null);

  // Methods -------------------------------
  const handleSubmit = (event) => {
    event.preventDefault()
    props.onAdd(module);
    props.onCancel();
  };

  const handleChange = (event) => {
    const updatedModule = {...module, [event.target.name]: event.target.value};
    
    setModule(updatedModule)

    console.log(event);
    console.log(event.target.name);
    console.log(event.target.value);
    console.log(updatedModule);
  };

  
  
 
  // View ----------------------------------
  const error = "cant say poo";
  return (

    <body>
      <Form onSubmit={handleSubmit}>
        <FormInput name = "ModuleName" placeholder = "Programming..." label = "Module Name" onChange={handleChange} error={null}/>
        <FormInput name = "ModuleCode" placeholder = "CI2530..." label = "Module Code" onChange={handleChange}/>
        <FormSelect name = "ModuleLevel" label = "Module Level" onChange={handleChange} >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
        </FormSelect>
        <FormSelect name = "ModuleLeaderID" label = "Module Leader ID" onChange={handleChange} >
          <option value="k2041275">Natalie</option>
          <option value="ku06696">Graeme</option>
        </FormSelect>

        <FormInput name = "ModuleImage" placeholder = "Enter URL..." label = "Module Image URL" onChange={handleChange}/>

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
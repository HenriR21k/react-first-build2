import { useState } from "react";
import {Form, FormInput, FormSelect} from "./Form";
import Button from "../UI/Button";
import "./ModuleForm.css";


function ModuleForm (props) {
  // Properties ----------------------------

  // State ---------------------------------
  const [module, setModule] = useState(null);

  const [moduleNameError, setModuleNameError] = useState(false);
  const [moduleCodeError, setModuleCodeError] = useState(false);

  // Methods -------------------------------

  const handleModuleNameError = async () => {
    console.log(module.ModuleName.length);

    {module.ModuleName.length < 5 
    ? setModuleNameError(true)
    : setModuleNameError(false);
    }
  }

  const handleModuleCodeError = async () => {

    module.ModuleCode.length < 5 
    ? setModuleCodeError("Error: Module Code must be longer than 5 characters")
    : setModuleCodeError(null);

  }



  const handleSubmit = async (event) => {
    event.preventDefault()
    await (
      handleModuleNameError(),
      handleModuleCodeError()
    )

    
    //handleModuleCodeError();

    if (moduleNameError && moduleCodeError)
    {
      props.onAdd(module);
      props.onCancel();
    }    
    else 
    {
      console.log("hi");
    }


    //props.onAdd(module);
    //props.onCancel();


  };

  const handleChange = (event) => {
    const updatedModule = {...module, [event.target.name]: event.target.value};
    setModule(updatedModule);
    
  };

  
  
 
  // View ----------------------------------
  
  return (

    <body>
      <Form onSubmit={handleSubmit}>
        <FormInput name = "ModuleName" placeholder = "Programming..." label = "Module Name" onChange={handleChange} error={moduleNameError && "Module Name cannot be shorter than 5 characters"}  />
        <FormInput name = "ModuleCode" placeholder = "CI2530..." label = "Module Code" onChange={handleChange} error={moduleCodeError}/>
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
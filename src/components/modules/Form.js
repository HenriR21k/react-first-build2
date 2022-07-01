export function Form(props) {

  return (
    <form onSubmit={props.onSubmit}>
      {props.children}
    </form>
  )
}

export function FormInput(props) {

  return (
  <>
    <label for={props.name}> {props.label} </label> <br/>
    <input type={props.type} id={props.name} name={props.name} onChange={props.onChange} placeholder={props.placeholder}/> <br />
    {
      props.error &&
        <p>Error message: {props.error}</p>

    }
  </>
  )
}

export function FormSelect(props) {

  return (
  <>
    <label for={props.name}>{props.label}</label> <br/>
      <select name={props.name} id={props.id} onChange={props.onChange} > <br/>
      {/*implement if statement to check to see which text field was clicked to display the relevant data? */}
      {/*This approach is flawed as FormSelect is not a reusable component */}
      {props.children}
    </select> <br/>
  </>
  )
}

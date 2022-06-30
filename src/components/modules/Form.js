export function Form(props) {

  return (
    <form>
      {props.children}
    </form>
  )
}

export function FormInput(props) {

  return (
  <>
    <label for={props.name}> {props.label} </label> <br/>
    <input type={props.type} id={props.name} name={props.name} onClick={props.onChange} placeholder={props.placeholder}/> <br />
  </>
  )
}

export function FormSelect(props) {

  return (
  <>
    <label for = {props.label} value = {props.value}> {props.text} </label> <br/>
    <input type = {props.type} id={props.label} name ={props.label}/> <br />
  </>
  )
}



export function Button(props) {


  return (
          <button onClick={props.onClick}> 
            <img className = {props.className} src = {props.img} alt = {props.alt}/> {props.title}
          </button>
  )
  }
  
  export default Button;
  
  
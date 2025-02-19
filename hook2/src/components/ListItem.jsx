import { useReducer } from "react"

const ListItem=(props)=>{
    
    let reducer=(state)=>{
        if(state.hide){
            return {
                text:props.text,
                hide:false
            }            
        }
        return {
            text: "Message Hidden",
            hide: true,
        };  
    }

    const [state, dispatch] = useReducer(reducer, {
        text: props.text,
        hide: false,
    });

    return (
        <div>
            <h3>{state.text}</h3>
            <button onClick={dispatch}>View/Hide</button>
        </div>
    )
}

export default ListItem
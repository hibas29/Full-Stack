import { useState,useReducer } from "react"
function reducer(state,action){
    switch(action.type){
    case"increment": return{ count: state.count +1};  
    case "decrement": return{ count: state.count -1}; 
    default: return state;
}
}
function Counter(){

    const [count, setCount] = useState(0);
    const[state,dispatch]=useReducer(reducer,{count:0,operation:"initial"});
    return <>
    <h1>Counter </h1>
    {state.count}{state.operation}
    <button onClick={()=>dispatch({type:"increment"})}>+</button>
    <button onClick={()=>dispatch({type:"decrement"})}>-</button>
    <br />
    <br />
    
        
    </>
}

export default Counter
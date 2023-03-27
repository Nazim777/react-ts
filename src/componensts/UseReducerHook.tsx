import React,{useReducer} from 'react'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'
const RESET = 'RESET'
const INCREMENTBYAMOUNT = 'INCREMENTBYAMOUNT' 
const initialState = {
    count:0
}

type counterStateType = {
    count:number
}
type incrementActionType = {type: typeof INCREMENT}
type decrementActionType = {type: typeof DECREMENT}
type resetActionType = {type: typeof RESET}
type incrementByAmountActionType = {type: typeof INCREMENTBYAMOUNT,
payload:number}
type counterActionType = incrementActionType | decrementActionType | resetActionType | incrementByAmountActionType


const reducer = (state : counterStateType,action : counterActionType)=>{
    switch(action.type){
        case INCREMENT:
            return{count:state.count+1};
            case DECREMENT:
                return{count:state.count-1};
                case RESET:
                    return{count:0};
                    case INCREMENTBYAMOUNT:
                        return{count:state.count+action.payload}
    }


}
const UseReducerHook = () => {
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
        <h2>value: {state.count}</h2>
        <button onClick={()=>dispatch({type:INCREMENT})}>increment</button>
        <button onClick={()=>dispatch({type:DECREMENT})}>decrement</button>
        <button onClick={()=>dispatch({type:RESET})}>reset</button>
        <button onClick={()=>dispatch({type:INCREMENTBYAMOUNT,payload:5})}>incrementbyamount</button>
      
    </div>
  )
}

export default UseReducerHook

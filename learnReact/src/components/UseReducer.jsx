import React, { useReducer } from 'react'
function reducer(state,action) {
    if(action.type==='inc_age'){
        return {age :state.age+1}
    }
}
function UseReducer() {
    const [state,dispatch]=useReducer(reducer,{age:42})
    return (
        <>
        <button onClick={()=>{dispatch({type:'inc_age'})}}>Increament</button>
        <p>Current age is {state.age}</p>
        </>
    )
}

export default UseReducer

import useCustomHook from "./useCustomHook"
import React from 'react'

function HookUsing(){
    const {count,increment,decrement,reset}=useCustomHook()

  return (
        <div>
            <h2>{count}</h2>
            <button onClick={increment} >Add</button>
            <button onClick={decrement} >minus</button>
            <button onClick={reset} >reset</button>

        </div>    
  )
}
export default HookUsing
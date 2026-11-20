import react,{ useState } from 'react'

function useCustomHook(initialValue=0){

    const [count,setCount]=useState(initialValue)

    function increment(){
        setCount((c)=>c+1)
    }
    function decrement(){
        setCount((c)=>c-1)
    }
    function reset(){
        setCount(initialValue)
    }

    return {count,increment,decrement,reset}

}
export default useCustomHook
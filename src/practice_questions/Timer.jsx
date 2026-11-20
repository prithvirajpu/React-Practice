import react,{useState,useEffect} from 'react'

function Timer(){
    const [count,setCount]=useState(0)
    const [running,setRunning]=useState(false)
    useEffect(()=>{
        console.log('effect triggered')
        let interval
        if (running){
        console.log('timer here.',{count})
         interval=setInterval(()=>{
            setCount((c)=>c+1)
        },1000)}
        return ()=>{
            console.log('clean up function')
            clearInterval(interval)
        }
    },[running])
    function handleStart(){
        setRunning(true)
    }
    function handleStop(){
        setRunning(false)
    }
    function handleReset(){
        setRunning(false)
        setCount(0)
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleStart} >Start</button>
            <button onClick={handleStop} >Stop</button>
            <button onClick={handleReset} >Reset</button>

        </div>
    )
}
export default Timer
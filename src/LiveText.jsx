import react,{useState } from "react"

function LiveText(){
    const [data,setData]=useState('')
    const [isDisplayed,setDisplay]=useState(false)
    function handleDisplay(){
        setDisplay(c=>!c)
    }

    return (
        <div>
            {isDisplayed && <h1>hello React</h1>}  
            <button onClick={handleDisplay} >Display</button><br />


            <input type="text" onChange={(e)=>setData(e.target.value)} /> 
            <h2>Displaying the data you type</h2>
            <p >{data}</p>
        </div>
    )
}

export default LiveText
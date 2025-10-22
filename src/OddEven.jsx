import react,{useState} from 'react'

function OddEven(){
    const [count,setCount]=useState(1)

    return (
        <div>
            
            <h1 style={{color:count%2===0?'green':'orange'}} >{count}</h1>
            <button onClick={()=>setCount((c)=>c+1)} >Add</button>

        </div>

    )

}

export default OddEven
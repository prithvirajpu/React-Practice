import react,{useState} from  'react'

function SumOfCounter(){
    const [count1,setCount1]=useState(1)
    const [count2,setCount2]=useState(1)

    return (
        <div>
            <h1>{count1}</h1>
            <button onClick={()=>setCount1((c)=>c+1)} >  Add</button>
            <button onClick={()=>setCount1((c)=>c-1)} >  Minus</button>
            <h1>{count2}</h1>
            <button onClick={()=>setCount2((c)=>c+1)} >  Add</button>
            <button onClick={()=>setCount2((c)=>c-1)} >  Minus</button>

            <p>this is the answer sum: {count1+count2} </p>
        </div>
    )
}
export default SumOfCounter
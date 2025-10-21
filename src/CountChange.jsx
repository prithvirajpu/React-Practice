import react,{useState} from 'react'

function CountChange(){

    const [type,setType]=useState(0)
    const [count,setCount]=useState(0)
    function handleAdd(){
        setCount(count+type)
    }

    return (
        <div>
            <input type="number" value={type} onChange={(e)=>setType(parseInt(e.target.value))} />
            <button onClick={handleAdd} >Add </button>
            <h2> {count} </h2>

        </div>
    )
}

export default CountChange
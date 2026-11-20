import react,{useState} from 'react'

function Counter(){
    const [count,setCount]=useState(1)
    const [typed,setTyped]=useState(1)
    function handleAdd(){

        setCount(count+parseInt(typed))
        
    }


    return (
        <div>
            <h2>{count}</h2>
            <input type="number" placeholder='enter the number' value={typed} onChange={(e)=>setTyped(e.target.value)} />
            <button onClick={handleAdd} >Add</button>
        </div>

    )
}

export default Counter
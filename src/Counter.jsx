import react,{useState} from 'react'

function Counter(){
    const [count,setCount]=useState(1)
    function handleAdd(){
        setCount((c)=>c+1)
    }
    function handleMinus(){
        setCount((c)=>c-1)
    }



    return (
        <div>
            <h3>{count}</h3>
            <button onClick={handleAdd} >Add</button>
             {count>0 && <button onClick={handleMinus}  >Minus</button>} 
        </div>


    )
}

export default Counter
import react,{useState} from 'react'
function PropsPassing({val,handleAdd}){

    return (
        <div>
            <h1>{val}</h1>
            <button onClick={()=>handleAdd(val+1)} >Add value</button>
        </div>
    )
}

export default PropsPassing
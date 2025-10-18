import react,{useState} from 'react'

function Temparature(){
    const [type,setTyped]=useState(0)
    function handleTemperature(e){
        setTyped(e.target.value)
    }

    return (
        <div>
            <label htmlFor="">Enter the celsius</label>
            <input type="number" value={type} onChange={(e)=>handleTemperature(e)} />
            <h3>{(type * 9/5) + 32}</h3>
        </div>
    )
}

export default Temparature
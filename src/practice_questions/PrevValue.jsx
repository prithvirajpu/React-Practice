import react,{useState,useRef,useEffect} from 'react'

function PrevValue(){
    const [value,setValue]=useState('')
    let inputref=useRef('')
    useEffect(()=>{
        inputref.current=value
    },[value])


    return (
            <div>
                <input type="text" onChange={e=>setValue(e.target.value)}  value={value}/>
                <h3>current value: {value} </h3>
                <h3>previous value: {inputref.current}</h3>
        </div>
    )
}

export default PrevValue
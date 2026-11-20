import react,{useState} from 'react'

function InputDisplay() {
    const [type,setType]=useState('')
    const [display,setDisplay]=useState('')

  return (
    <div>
        <input type="text" onChange={(e)=>setType(e.target.value)}  value={type}/>
        <button onClick={()=>setDisplay(type)} >click to Display</button>
        <h1>{display}</h1>
    </div>
  )
}

export default InputDisplay
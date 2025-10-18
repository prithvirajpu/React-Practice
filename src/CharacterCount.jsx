import react,{useState} from 'react'

function CharacterCount(){
    const [count,setCount]=useState('')
    const len=count.length

    return (
        <div>
            <input type="text" onChange={(e)=>setCount(e.target.value)} />
            <h2>count of characters: {len}</h2>
        </div>
    )
}
export default CharacterCount
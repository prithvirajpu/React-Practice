import react,{useState} from 'react'


function Background(){
    const [color,setColor]=useState('')




    return (
        <div style={{backgroundColor:color}} >
            <input type="text"  value={color} placeholder="Enter the color" onChange={(e)=>setColor(e.target.value)} />
            <h1>hello</h1>

        </div>
    )
}

export default Background
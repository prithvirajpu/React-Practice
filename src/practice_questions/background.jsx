import react,{useState} from 'react'


function Background(){
    const [color,setColor]=useState('')




    return (
        <div style={{backgroundColor:color,height:'100vh'}} >
            <input type="text"  value={color} placeholder="Enter the color" onChange={(e)=>setColor(e.target.value)} />

        </div>
    )
}

export default Background
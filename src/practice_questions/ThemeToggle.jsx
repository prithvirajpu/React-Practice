import react,{useState} from 'react'

function ThemeToggle(){
    const [theme,setTheme]=useState(false)
    function handleToggle(){
        setTheme(!theme)
    }
    const mystyle={
        backgroundColor:theme?'black':'white',
        height:'100vh',
        alignItmes:'center',
        display:'flex',
        justifyContent:'center',
        
    }
    return (
        <div style={mystyle}>
            
            <button onClick={handleToggle} >{!theme?<h3>dark mode</h3>:<h3>light mode</h3>}</button>

        </div>
    )
}

export default ThemeToggle
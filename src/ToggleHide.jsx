import  react,{useState} from 'react'

function ToggleHide(){
    
    const [hide,setHide]=useState(false)
    function handleToggle(){
        setHide(!hide)
    }


    return (
        <div  >

            <button  onClick={handleToggle} >Toggle</button>
            {hide && <h1 >data here</h1> } 

        </div>
    )
}

export default ToggleHide
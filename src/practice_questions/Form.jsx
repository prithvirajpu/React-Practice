import react,{useState} from 'react'

function Form(){
    const [data,setData]=useState({username:'',password:''})
    const [display,setDisplay]=useState()
    function handleTyped(e){
        const {name,value}=e.target
        setData((d)=>({...d,[name]:value}))
    }

    function handleLogin(){
        setDisplay(data)
    }

    return (
        <div>
            <label htmlFor="">Username: </label>
            <input type="text" value={data.username} name='username' onChange={(e)=>handleTyped(e)} /> <br />
            <label htmlFor="">Password: </label>
            <input type="text" value={data.password} name='password' onChange={(e)=>handleTyped(e)} /><br />
            <button onClick={handleLogin} >Submit</button>
            {display && <h3>username: {display.username}</h3> }
            {display && <h3>password: {display.password}</h3> }


        </div>
    )
}

export default Form
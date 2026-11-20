import react,{ useState} from 'react'

function LoginPage(){
    const [form,setForm]=useState({})
    const [display,setDisplay]=useState(null)
    function handleForm(e){
        const {name,value}=e.target
        setForm((f)=>({...f,[name]:value}))
    }
    function handleLogin(){
        setDisplay(form)
    }

    return (
        <div>
            <label htmlFor="">UserName: </label>
            <input type="text" name='username' value={form.username} placeholder='Enter the username ' onChange={(e)=>handleForm(e)} /> <br />
            <label htmlFor="">Password</label>
            <input type="text" name='password' value={form.password} placeholder='enter the password' onChange={(e)=>handleForm(e)} /> <br />
            <button onClick={handleLogin} >Login </button>
            {display && <h3>username: {display.username}</h3> }
        </div>
    )

}

export default LoginPage
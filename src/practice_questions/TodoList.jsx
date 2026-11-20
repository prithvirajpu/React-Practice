import react,{useState} from 'react'

function TodoList(){
    const [type,setType]=useState('')
    const [data,setData]=useState([])
    const handleTodos=()=>{
        setData((d)=>[...d,{text:type,completed:false}])
        setType('')
    }
    function handleDelete(index){
        setData(data.filter((element,i)=>index!==i))
    }
    function handleEdit(index){
        const val=prompt('enter the new todo ',data[index].text)
        if (val){
            const updated=data.map((element,i)=>{
                if (i===index){
                    return {...element,text:val}
                }
                return element
            })
            setData(updated)
        }
        
    }
    function handleToggle(index){
        const item=data.map((element,i)=>{
            if (i===index){
                return {...element,completed:!element.completed}
            }else{
            return element
            } 
        })
        setData(item)
    }
     

    return (
        <div>
            <h1>Todo List ..</h1>
            <input type="text" value={type} onChange={(e)=>setType(e.target.value)} placeholder='enter the todos' />
            <button onClick={handleTodos} >Add</button>
            <ul>
                {data.map((element,index)=> <li className={(element.completed?'completed':'')}  key={index} >
                    <input type="checkbox"  onChange={()=>handleToggle(index)} checked={element.completed} />
                    {element.text}
                    <button onClick={()=>handleDelete(index)} >Delete</button>
                    <button onClick={()=>handleEdit(index)} >Edit</button>
                </li>  )}
            </ul>


        </div>
    )
}

export default TodoList
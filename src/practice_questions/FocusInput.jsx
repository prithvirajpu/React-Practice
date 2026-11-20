import react,{useRef} from 'react'
function FocusInput(){
    const inputref=useRef('')
    function handleFocus() {
        inputref.current.focus()
    }
    return (
        <div>
            
            <input type="text" placeholder='Enter ' ref={inputref} />
            <button onClick={handleFocus} >Focus</button>

        </div>
    )
}

export default FocusInput
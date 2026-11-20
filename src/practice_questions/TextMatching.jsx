import react,{useState} from 'react'


function TextMatching(){
    const [text1,setText1]=useState('')
    const [text2,setText2]=useState('')
    
    

    return (
        <div>
            <h1>Text checking</h1>
            <input type="text" placeholder='enter the text' value={text1} onChange={(e)=>setText1(e.target.value)} />
            <input type="text" placeholder='enter the text' value={text2} onChange={(e)=>setText2(e.target.value)} />

            {text1 === text2 ?<h3>Text matching</h3>: <h3>not matching</h3> } 

        </div>
    )
}

export default TextMatching
import React, { useEffect, useState } from 'react'
import Hoc from './Hoc'
import users from './List'

const EnhanceHoccall=Hoc(users)
const HocCalling = () => {
    const [data,setData]=useState(['arun'])
    const [isLoad,setIsLoad]=useState(true)

    useEffect(()=>{
        let timeout=setTimeout(()=>{
            setData(p=>[...p,'prithviraj'])
            setIsLoad(false)
        },3000)
        return ()=>clearTimeout(timeout)
    },[])

  return (
    <div>
        <h2>Hoc component calling</h2>
        <EnhanceHoccall isLoad={isLoad} data={data} />
      
    </div>
  )
}

export default HocCalling

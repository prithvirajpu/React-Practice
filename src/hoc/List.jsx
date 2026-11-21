import React, { use, useState } from 'react'

const List = ({data}) => {
    
  return (
    <ul>
        {data.map((element,id)=>(
            <li key={id}>{element} </li>
        ))}
    </ul>
  )
}

export default List

import React, { useState } from 'react'
import ChildComponent from './ChildComponent'

const Parentcomponent = () => {
    const [data,setdata]=useState(null);
        const HandleData=(children)=>{
        setdata(children +" i'm parent");
    }
  return (
    <div>
    <ChildComponent onDataFromChild={HandleData}/> 
    <p>{data}</p>
    </div>
  )
}

export default Parentcomponent

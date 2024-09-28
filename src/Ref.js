import React, { useState } from 'react'

const Ref = () => {
 const [val , setVal] = useState("");

 const change = (event) =>{
    setVal(event.target.value)

 }
  return (
    <>
    <div className='container'>
        <h1> UseRef Hook</h1>
        <input type='text' value={val} onClick={change}/>

    </div>
    </>
  )
}

export default Ref
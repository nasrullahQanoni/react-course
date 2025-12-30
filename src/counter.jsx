

import { useState } from 'react'


function Counter() {
     const[counter, setCounter ] = useState(0)
    //  const[hide, sethide]  = useState("")
    //  let btn = ()={
    //     sethide((pre1)=> pre1 + text)
    //  }
     let increase = ()=>{
        setCounter((pre)=> pre +1)
     }

     let decrease = ()=>{
        setCounter((pre)=> pre-1)
     }
    return(
        <>
        <div className="items-center m-15">
           <button onClick={increase} className=" bg-blue-700 w-15">+</button>
           <span className="bg-green-500 w-15">{counter}</span>
        <button onClick={decrease} className="bg-red-500 w-15">-</button>
        </div>
  
        </>
    )
}

export default Counter; 





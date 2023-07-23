import React, { useState } from 'react'

export default function Counter() {
    let [x,setX]=useState(0)
  return (

    <>
    <h1> Count is : {x}</h1>
    <button onClick={increment}>increment</button>
    <button onClick={deincrement}>deincrement</button>
    <button onClick={reset}>reset</button>

    

    
    </>
  )
  function increment(){
    setX(++x)
  }
  function deincrement(){
    setX(--x)
  }
  function reset(){
    setX(0)
  }
  
}

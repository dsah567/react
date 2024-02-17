import React from 'react'
import { useState } from 'react'
function UpdateScreen() {
    function handleClick() {
        setNumber((prev)=>prev+1)
    }
    function handleDec() {
        setNumber((prev)=>prev-1)
    }
    const [number,setNumber]=useState(0)
    return (
        <>
        <button onClick={handleClick}>Click to increase</button><br/>
        <button >Clicked {number} times</button><br/>
        <button onClick={handleDec}>Click to decrease</button>
        </>
    )
}

export default UpdateScreen

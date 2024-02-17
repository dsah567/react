import React, { useState } from 'react'

function Form() {
    const [status,setStatus]=useState("empty")
    if (status === 'success') {
        return <h1>That's right!</h1>
    }
    return (
        <>
        <form id='from'>
            <h2>City Quiz</h2>
            <p>Name of framework in which this page is written</p>
            <textarea onChange={()=> setStatus('typing')}></textarea>
            <br/>
            <button disabled={status!=='typing'||status==='empty'} onClick={()=>setStatus('success')}>submit</button>
        </form>
        </>
    )
}

export default Form

import React from 'react'

function Event() {
    function clicked(e){
        e.target.style.backgroundColor="red"
    }
    return (
        <button onClick={clicked}>Click Me</button>
    )
}

export default Event

import React from 'react'

function RespondingtoEvents({handleClick}) {
    // function handleClick() {
    //     alert('Hello')
    // }
    return (
        <div>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default RespondingtoEvents


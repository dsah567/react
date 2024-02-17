import React from 'react'
let bi={
    name:"Dipu",
    age:22
}
function Bio() {
    return (
        <h1>My name is {bi?.name} and my age is {bi?.age}</h1> 
    )
}

export default Bio

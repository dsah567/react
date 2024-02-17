import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Contact() {
    return (
        <>
        <h1>Hello contacts</h1>
        <Link to={`about`}>About</Link>
        <Outlet/>
        </>
    )
}

export default Contact

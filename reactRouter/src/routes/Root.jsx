import React from 'react'
import { Link, Outlet,NavLink } from 'react-router-dom'

function Root() {
    return (
        <>
        <h1>React Roouter</h1>
        <form>
            <input type='search'/>
        </form><br/>

        <NavLink  style={({isActive})=> 
        {return {color: isActive ? "red" : "black"};}} 
        to={`contact/1`}>Your name</NavLink>
        
        <br/>

        <Link to={`contact/2`}>Friend name</Link>
        <Outlet/>
        </>
    )
}

export default Root

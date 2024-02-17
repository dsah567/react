import React,{useContext,useState} from 'react'
import UserContext from '../context/context'


function Profile() {
    const {user}=useContext(UserContext)
    if(!user) return <div>Please login</div>
    

    return <div>Welcome {user.username} and password {user.password}</div>
}

export default Profile

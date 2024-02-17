import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Bio from './Bio.jsx'
import RenderingList from './RenderingList.jsx'
import Event from './Event.jsx'
import UpdateScreen from './UpdateScreen.jsx'
let Bi=false
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* {Bi?(<Bio/>):<App/>} */}
    {/* <RenderingList/> */}
    {/* <Event/> */}
    <UpdateScreen/>
  </React.StrictMode>,
)

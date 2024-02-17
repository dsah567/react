import { useState } from "react"
import FirstComponent from "./components/FirstComponent"
import ImageCard from "./components/ImageCard"
import Props_ from "./components/Props_"
import RespondingtoEvents from "./components/RespondingtoEvents"
import Form from "./components/Form"
import UseReducer from "./components/UseReducer"

function App() {

  const [count,setCount]=useState(1)
  function handleCount(){
    setCount(count+1)
  }
  function handleClick() {
    alert(count)
  }
  return (
    <>
    <UseReducer/>
    <Form/>
    {/* <button onClick={handleCount}>click {count}</button>
    <RespondingtoEvents handleClick={handleClick}/>
    <Props_ name={'Dipu'} age={22}/>
    <FirstComponent/>
    <ImageCard/>
 
    <ImageCard/>
    <ImageCard/>  */}
    </>
  )
}

export default App

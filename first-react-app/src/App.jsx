// import { useState } from 'react'
import './App.css'

//functional component 
//moder javascript arrow function in taht we return JSX 
//JSX looks like HTML but it is not HTML it is javascript XML
//jsx converts to react.createElement() behind the scenes
//babel is used to convert JSX to javascript that browsers can understand
//react components must return a single element
//we can use fragments <> </> to wrap multiple elements without adding extra nodes to the DOM
const App = () => {
  return(
    <> 
    <Header /> 
    {/* using Header component inside App component */}
      <div className="App">
        <h1>Hello, React!</h1>
        <p>Welcome to your first React application.</p>
      </div>
    </>
  )
}

export const Header = () => {
  return(
  <>
    <h1>This is the heading Componets of the sections</h1>
    </>
  )
}

export default App

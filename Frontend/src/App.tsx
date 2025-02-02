import Home from "./Components/Home/Home"
import Navigation from "./Components/Navigation/Navigation"
import Register from "./Components/Register/Register"
import Login from "./Components/Login/Login"
import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import { Route, Routes, BrowserRouter } from "react-router-dom"
const App = () => {
  return (
    <div>
        <BrowserRouter>
            <Navigation />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            
        </Routes>
        </BrowserRouter>
       
    </div>
  )
}

export default App

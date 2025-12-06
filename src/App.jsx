import Navbar from "./Components/Navbar/Navbar"
import { BrowserRouter, Route, Routes} from "react-router-dom"
import LayOut from "./LayOut"
import Summer from "./Pages/Summer"
import Winter from "./Pages/Winter"
import Shop from "./Pages/Shop"
import Product from "./Pages/Product"
import Login from "./Pages/Login"


function App() {
  

  return (
    <div>
      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<LayOut/>}>
        <Route path="/" element={<Shop/>}/>
        <Route path="/summer" element={<Summer/>}/>
        <Route path="/winter" element={<Winter/>}/>
        <Route path="/product" element={<Product/>}/>
        <Route path=":productId" element={<Product/>}/>
        <Route path="/login" element={<Login/>}/>
      </Route>
      </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App

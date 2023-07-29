import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import "./reset.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/About.jsx";
import Category from "./pages/Category.jsx";
import Details from "./pages/Details.jsx";

function App() {

  return (
 <div >
  <BrowserRouter>
  <Routes>
<Route path="/" element={<Home />}/>
<Route path="/about" element={<About/>}/>
<Route path="Categories" element={<Category />}/>
<Route path="/:idMeal" element={<Details />}/>
  </Routes>
  </BrowserRouter>
 </div>
      
    
  );
}

export default App;

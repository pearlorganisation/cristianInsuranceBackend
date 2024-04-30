import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";


function App() {
  return (
    
   <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/aboutus" element={<AboutUs />}/>
    {/* <Route path="*" element={<NotFound />}/> */}

   </Routes>
  );
}

export default App;

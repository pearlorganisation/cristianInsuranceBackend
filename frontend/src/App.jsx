import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Blogs from "./pages/Blogs/Blogs";
import Faq from "./pages/Faq/Faq";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/blog" element={<Blogs />} />

        <Route path="/faq" element={<Faq />} />

        <Route path="/aboutus" element={<AboutUs />} />

        {/* <Route path="*" element={<NotFound />}/> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

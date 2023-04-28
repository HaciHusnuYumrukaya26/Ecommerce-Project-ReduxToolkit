import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import PageContainer from "./containers/PageContainer";
import Detail from "./pages/Detail";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="container">
      <PageContainer/>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products/:id" element={<Detail/>}/>
          <Route path="/cart" element={<Cart/>}/>
       

        </Routes>
        <Footer/>
      </Router>
      
    </div>
  );
};

export default App;

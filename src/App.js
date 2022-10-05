import "./App.css";
import Home from "./Component/Home";
import Products from "./Component/Product";
import Checkout from "./Component/Checkout";
import Navbar from "./Component/Navbar";
// import Footer from "./Component/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/checkout" element={<Checkout />} exact></Route>
          <Route path="/shop" element={<Products />} exact>
            {" "}
          </Route>
          <Route path="/" element={<Home />} exact></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import ShowName from "./pages/ShowName";
import { useEffect, useState } from "react";
import axios from "axios";
import ProductDetailPage from "./pages/ProductDetailPage";
import Navbar from "./components/Navbar";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setProducts(data.slice(0, 10));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />

          {/* <Route path="/" element={<Navbar />} /> */}

          <Route path="/student/:route" element={<ShowName />} />

          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
          <Route
            path="/products/:id"
            element={<ProductDetailPage products={products} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

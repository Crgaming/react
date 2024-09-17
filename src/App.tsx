import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import ShopPage from "./pages/shop/shop";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="shop" element={<ShopPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

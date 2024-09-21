import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import ShopPage from "./pages/shop/shop";
import Login from "./pages/login/login";
import Contact from "./pages/contact/contact";
import SingleProduct from "./pages/single_product/singe_product";
import Register from "./pages/register/register";
// Add more routes as needed
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="SingleProduct" element={<SingleProduct />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

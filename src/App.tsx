import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home/home";
import Product from "./pages/product/product";
import Login from "./pages/login/login";
import Contact from "./pages/contact/contact";
import SingleProduct from "./pages/single_product/singe_product";
import Register from "./pages/register/register";
import About from "./pages/about/aboutus";
import Cart from "./pages/cart/cart";
import News from "./pages/news/news";
import Admin from "./layout/admin";
import AdminPage from "./pages/admin/admin";
// Add more routes as needed
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="Products" element={<Product />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="SingleProduct" element={<SingleProduct />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route path="cart" element={<Cart />} />
            <Route path="News" element={<News />} />
          </Route>
          
        </Routes>
        <Routes>
        <Route element={<Admin />}>
            <Route path="admin" element={<AdminPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

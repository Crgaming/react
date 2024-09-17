import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home/home";
import Product from "./pages/product/product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

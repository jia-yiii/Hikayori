import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HomePage from "@/pages/home/HomePage";
import GuidePage from "@/pages/guide/GuidePage";
import OrderPage from "@/pages/order/OrderFormPage";
import ProductsPage from "@/pages/products/ProductsPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/guide" element={<GuidePage />} />
        <Route path="/pds" element={<ProductsPage />} />
        {/* <Route path="/pds/:id" element={<ProductDetailPage />} /> */}
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import User from "./components/User/User";
import Login from "./components/Login";
import ErrorPage from "./components/ErrorPage";
import Profile from "./components/Profile/Profile";
import Products from "./components/Product/Products";
import ProductForm from "./components/Product/ProductForm";
import Register from "./components/Register";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/products" element={<Products />} />
          <Route path="/add-product" element={<ProductForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

const App = () => {
  const user = false
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route path="product" element={<ProductList />}>
        </Route>
        <Route path="productList" element={<Product />}>
        </Route>
        <Route path="Cart" element={<Cart />}>
        </Route>
        <Route path="Login" element= {user ? <Navigate to ="/" /> : <Login />}>
        </Route>
        <Route path="Register" element= {user ? <Navigate to ="/" /> : <Register />}>
        </Route>
      </Routes>
    </BrowserRouter>
  )
};

export default App;
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Analytics from "./pages/Analytics";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from "./pages/ProductDetails";
import About from './pages/About';
import Info from './pages/Info';
import Contact from './pages/Contact';
import WhatsappCall from './components/WatsappCall';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import OrderHistory from './pages/OrderHistory';
import OrderSuccess from './pages/OrderSuccess';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
// import { useEffect } from "react";

function App() {
  // useEffect(() => {
  //   document.title = "Natural Cocos | Premium Cocopeat & Coir Products";
  //   const handleContextMenu = (e) => {
  //     e.preventDefault();
  //     window.alert("Sorry, right-click has been disabled.");
  //   };
  //   document.addEventListener("contextmenu", handleContextMenu);
  //   return () => {
  //     document.removeEventListener("contextmenu", handleContextMenu);
  //   };
  // }, []);

  return (
    <Router>
      <AuthProvider>
        <CartProvider>
          <Analytics />
          <Navbar />
          <Routes>
          {/* Public routes */}
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:section/:product" element={<ProductDetails />} />
          <Route path="/WhyUs" element={<Info />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected routes */}
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
          <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
          <Route path="/order-history" element={<ProtectedRoute><OrderHistory /></ProtectedRoute>} />
          <Route path="/order-success" element={<ProtectedRoute><OrderSuccess /></ProtectedRoute>} />
        </Routes>
          <WhatsappCall message="Hi, I would like to order a custom product!" />
        </CartProvider>
      </AuthProvider>
    </Router>
  );
}


export default App;

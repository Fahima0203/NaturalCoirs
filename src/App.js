import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from "./pages/ProductDetails";
import About from './pages/About';
import Info from './pages/Info';
import Contact from './pages/Contact';
import WhatsappCall from './components/WatsappCall';
function App() {
  return (
    <Router>
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:section/:product" element={<ProductDetails />} />
        <Route path="/AboutOurCocoProducts" element={<Info />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        {/* Add more routes as needed */}
      </Routes>
      {/* <WhatsappCall message="Hi, I would like to order a custom product!" /> */}
    </Router>
  );
}


export default App;

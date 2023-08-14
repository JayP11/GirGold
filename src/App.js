import "./App.css";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Products from "./pages/Products";
import Milk from "./pages/Milk";
import Ghee from "./pages/Ghee";
import Chaas from "./pages/Chaas";
import Lassi from "./pages/Lassi";
import Blog from "./pages/Blog";
import SingleBlog from "./pages/SingleBlog";
import Report from "./pages/Report";
import Gallary from "./pages/Gallary";
import ContectUs from "./pages/contectUs/ContectUs";
import { FaWhatsapp } from "react-icons/fa";
import SubscriptionForm from "./pages/subscriptionform/SubscriptionForm";
function App() {
  return (
    // <BrowserRouter basename="girgold">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/milk" element={<Milk />} />
        <Route exact path="/ghee" element={<Ghee />} />
        <Route exact path="/chaas" element={<Chaas />} />
        <Route exact path="/lassi" element={<Lassi />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/report" element={<Report />} />
        <Route exact path="/single_blog/:id" element={<SingleBlog />} />
        <Route exact path="/gallary" element={<Gallary />} />
        <Route exact path="/contectus" element={<ContectUs />} />
        <Route exact path="/subscription" element={<SubscriptionForm />} />
      </Routes>
      <a
        className="whats-app"
        href="https://api.whatsapp.com/send?phone=919409724444"
        target="_blank"
      >
        <FaWhatsapp className="my-float" />
      </a>

      <Link to="/subscription" className="subscription-btn">
        Subscribe
      </Link>
    </BrowserRouter>
  );
}

export default App;

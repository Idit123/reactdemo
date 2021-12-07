import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx"
import Home from "./pages/home"
import HowItWorks from "./pages/howItWorks"
import Services from "./pages/services"
import AboutUs from "./pages/aboutUs"
import Faq from "./pages/faq"
import ConatctUs from "./pages/contactUs"
import Login from "./pages/LoginPage"
import Register from "./pages/RegisterPage"
import Error from "./pages/error"
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-woks" element={<HowItWorks />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact-us" element={<ConatctUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

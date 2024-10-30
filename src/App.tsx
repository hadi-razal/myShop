import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/Home"
import AboutUs from "./pages/About"
import Login from "./pages/Login"
import Register from "./pages/Register"
import UserDashboard from "./pages/UserDashboard"
import AddProduct from "./pages/AddProduct"
import PrivacyPolicy from "./pages/PrivacyPolicy"
import TermsAndConditions from "./pages/TermsAndConditions"
import Footer from "./components/Footer"
import Products from "./pages/Products"
import Pricing from "./pages/Pricing"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/shop" element={<UserDashboard />} />
        <Route path="/store/:storeId" element={<Products />} />
        <Route path="/add-product" element={<AddProduct />} />

      </Routes>

      <Footer/>
    </BrowserRouter>
  )
}

export default App
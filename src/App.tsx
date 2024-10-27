import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import HomePage from "./pages/Home"
import AboutUs from "./pages/AboutUs"
// import Footer from "./components/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Header />
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>

      {/* <Footer/> */}
    </BrowserRouter>
  )
}

export default App
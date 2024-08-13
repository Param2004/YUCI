import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Forums from './pages/forums'
import JoinUs from './pages/joinUs'
import WhyUs from './pages/whyUs'
import ContactUs from './pages/contactUs'
import Bureaucrat from './pages/bureaucrat'
import Celebrity from './pages/celebrity'
import Entrepreneur from './pages/entrepreneur'
import GlobalEmbassy from './pages/globalEmbassy'
import InternationalEcinomic from './pages/internationalEconomic'
import Law from './pages/law'
import Medico from './pages/medico'
import Political from './pages/political'
import Sports from './pages/sports'
import Youth from './pages/youth'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css'

export default function App() {
  // const [count, setCount] = useState(0)
  

  return (
    <>
    <Router>
      <Header />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/forums" element={<Forums />} />
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/contact-us" element={<ContactUs />} />

        <Route path="/bureaucrat-forum" element={<Bureaucrat />} />
        <Route path="/celebrity-forum" element={<Celebrity />} />
        <Route path="/entrepreneur-forum" element={<Entrepreneur />} />
        <Route path="/global-embassy-forum" element={<GlobalEmbassy />} />
        <Route path="/international-ecinomic-forum" element={<InternationalEcinomic />} />
        <Route path="/law-forum" element={<Law />} />
        <Route path="/medico-forum" element={<Medico />} />
        <Route path="/political-forum" element={<Political />} />
        <Route path="/sports-forum" element={<Sports />} />
        <Route path="/youth-forum" element={<Youth />} />

      </Routes>
      <Footer />
    </Router>
    </>
  )
}

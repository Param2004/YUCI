import { useState } from 'react'
import Header from './components/header'
import Footer from './components/footer'
import Home from './pages/home'
import Forums from './pages/forums'
import JoinUs from './pages/joinUs'
import WhyUs from './pages/whyUs'
import ContactUs from './pages/contactUs'
import Bureaucrat from './pages/forums/bureaucrat'
import Celebrity from './pages/forums/celebrity'
import Entrepreneur from './pages/forums/entrepreneur'
import GlobalEmbassy from './pages/forums/globalEmbassy'
import InternationalEcinomic from './pages/forums/internationalEconomic'
import Law from './pages/forums/law'
import Medico from './pages/forums/medico'
import Political from './pages/forums/political'
import Sports from './pages/forums/sports'
import Youth from './pages/forums/youth'
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
        <Route path="/forums" element={<Forums />} >
          <Route path="bureaucrat-forum" element={<Bureaucrat />} />
          <Route path="celebrity-forum" element={<Celebrity />} />
          <Route path="entrepreneur-forum" element={<Entrepreneur />} />
          <Route path="global-embassy-forum" element={<GlobalEmbassy />} />
          <Route path="international-economic-forum" element={<InternationalEcinomic />} />
          <Route path="law-forum" element={<Law />} />
          <Route path="medico-forum" element={<Medico />} />
          <Route path="political-forum" element={<Political />} />
          <Route path="sports-forum" element={<Sports />} />
          <Route path="youth-forum" element={<Youth />} />
        </Route>
        <Route path="/join-us" element={<JoinUs />} />
        <Route path="/why-us" element={<WhyUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </Router>
    </>
  )
}

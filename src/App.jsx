import React from 'react'
import Home from './pages/Home.jsx'
import Page2 from './pages/Page2.jsx'
import Testimonials from './pages/Testimonials.jsx'
import Work from './pages/Work.jsx'
import Contact from './pages/Contact.jsx'
import ScrollToTopButton from './component/ScrollToTopButton.jsx'
import MadeWithLove from './pages/MadeWithLove.jsx'
import Footer from './pages/Footer.jsx'

export default function App() {
  return (
    <div className="w-full overflow-x-hidden ">
      <Home/>
      <Page2/>
      <Testimonials/>
      <Work/>
      <Contact/>
      <ScrollToTopButton />
      <Footer/>
      <MadeWithLove/>
    </div>
  )
}

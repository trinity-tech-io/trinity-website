import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// layouts
import Home from '../pages/Home';
import Team from '../pages/Team';
import Contact from '../pages/Contact';
import Layout from '../layout';

// ----------------------------------------------------------------------
export default function Router() {
  const { pathname } = useLocation();
  React.useEffect(()=>{
    window.initMethod()
    window.scrollTo({top: 0, behavior: 'smooth'})
  }, [pathname])
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
  )
}
import React from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
// layouts
import Home from '../pages/Home';
import Team from '../pages/about/Team';
import Contact from '../pages/about/Contact';
import DID from '../pages/sdks/DID';
import Hive from '../pages/sdks/Hive';
import Carrier from '../pages/sdks/Carrier';
import Wallet from '../pages/sdks/Wallet';
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
          <Route path="did" element={<DID />} />
          <Route path="hive" element={<Hive />} />
          <Route path="carrier" element={<Carrier />} />
          <Route path="wallet" element={<Wallet />} />
        </Route>
      </Routes>
  )
}
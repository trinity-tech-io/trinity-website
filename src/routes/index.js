import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// layouts
import Home from '../pages/Home';
import Team from '../pages/Team';
import Layout from '../layout';

// ----------------------------------------------------------------------
export default function Router() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="team" element={<Team />} />
        </Route>
        {/* <Route
          index
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path='/team'
          element={
            <Layout>
              <Team />
            </Layout>
          }
        /> */}
      </Routes>
    </BrowserRouter>
  )
}
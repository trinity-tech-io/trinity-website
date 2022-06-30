import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// layouts
import Home from '../pages/Home';
import Layout from '../layout';

// ----------------------------------------------------------------------
export default function Router() {
  return (
    <BrowserRouter basename={'/'} >
      <Routes>
        <Route
          index
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}
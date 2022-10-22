import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ReviewDetails from "./pages/ReviewDetails";
import Category from "./pages/Category";

import SiteHeader from "./components/SiteHeader";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<ReviewDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

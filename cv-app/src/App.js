import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home/HomePage";
import { InnerPage } from "./pages/Inner/Inner";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route path="/inner" element={<InnerPage />} />
        <Route path="/inner/:id" element={<InnerPage />} />
      </Routes>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import AddFeedback from "./pages/AddFeedback.jsx";

export default function App() {
  const [list, setList] = useState([]);

  async function pull() {
    try {
      const response = await fetch("api/get-all-suggestions");
      const suggestionsFromApi = await response.json();
      setList(Array.isArray(suggestionsFromApi) ? suggestionsFromApi : []);
    } catch {
      setList([]);
    }
  }

  useEffect(() => {
    pull();
  }, []);

  return (
    <BrowserRouter>
      <div className="site">
        <Routes>
          <Route path="/" element={<Home suggestions={list} />} />
          <Route path="/add-feedback" element={<AddFeedback />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

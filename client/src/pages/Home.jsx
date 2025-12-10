import React from "react";
import { Link } from "react-router-dom";

export default function Home({ suggestions }) {
  const safeSuggestionsArray = Array.isArray(suggestions) ? suggestions : [];

  return (
    <div className="home">
      <h1 className="home-title">Feedback Board</h1>

      <p className="home-subtitle">
        Total suggestions: {safeSuggestionsArray.length}
      </p>

      <Link to="/add-feedback" className="add-feedback-button">
        Add Feedback
      </Link>

      <p className="home-placeholder">Suggestion list coming soon.</p>
    </div>
  );
}

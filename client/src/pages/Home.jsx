// src/pages/Home.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SuggestionCard from "../components/SuggestionCard.jsx";
import addFeedbackIcon from "../assets/icons/icon-plus.svg";
import emptyIllustration from "../assets/suggestions/illustration-empty.svg";
import bgHeaderDesktop from "../assets/suggestions/desktop/background-header.png";

export default function Home({ suggestions }) {
  const suggestionsArray = Array.isArray(suggestions) ? suggestions : [];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categoryOptions = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  let filteredSuggestionsArray = [];

  if (selectedCategory === "All") {
    filteredSuggestionsArray = suggestionsArray;
  } else {
    filteredSuggestionsArray = suggestionsArray.filter((suggestionItem) => {
      return suggestionItem.category === selectedCategory;
    });
  }

  return (
    <div className="home">
      <div className="home-layout">
        <div className="home-sidebar">
          <div
            className="board-card"
            style={{
              backgroundImage: `url(${bgHeaderDesktop})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            <h2 className="board-title">My Company</h2>
            <p className="board-subtitle">Feedback Board</p>
          </div>

          <div className="filter-card">
            <div className="category-row">
              {categoryOptions.map((categoryName) => (
                <button
                  key={categoryName}
                  className={
                    categoryName === selectedCategory
                      ? "category-button category-button-selected"
                      : "category-button"
                  }
                  onClick={() => setSelectedCategory(categoryName)}
                >
                  {categoryName}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="home-main">
          <div className="top-bar">
            <h2 className="top-bar-title">
              {filteredSuggestionsArray.length} Suggestions
            </h2>
            <Link to="/add-feedback" className="add-feedback-button">
              <img src={addFeedbackIcon} alt="" className="add-feedback-icon" />
              Add Feedback
            </Link>
          </div>

          <div className="suggestions-list">
            {filteredSuggestionsArray.length === 0 && (
              <div className="no-feedback">
                <img
                  src={emptyIllustration}
                  alt="a little man with a microscope"
                  className="empty-illustration"
                />
                <h3>There is no feedback yet.</h3>
                <p>Try a different category or add a suggestion.</p>
              </div>
            )}

            {filteredSuggestionsArray.map((suggestionItem) => (
              <div className="suggestion-item" key={suggestionItem.id}>
                <SuggestionCard suggestion={suggestionItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

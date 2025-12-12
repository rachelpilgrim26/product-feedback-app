import React, { useState } from "react";
import { Link } from "react-router-dom";
import SuggestionCard from "../components/SuggestionCard.jsx";
import addFeedbackIcon from "../assets/icons/icon-plus.svg";
import emptyIllustration from "../assets/suggestions/illustration-empty.svg";
import bgHeaderDesktop from "../assets/suggestions/desktop/background-header.png";

export default function Home({ suggestions }) {
  const list = Array.isArray(suggestions) ? suggestions : [];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = ["All", "UI", "UX", "Enhancement", "Bug", "Feature"];

  const filteredList =
    selectedCategory === "All"
      ? list
      : list.filter((item) => item.category === selectedCategory);

  function handleCategoryClick(categoryName) {
    setSelectedCategory(categoryName);
    setIsMenuOpen(false);
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
            <div className="board-header">
              <div>
                <h2 className="board-title">My Company</h2>
                <p className="board-subtitle">Feedback Board</p>
              </div>

              <button
                className="hamburger-button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                ☰
              </button>
            </div>
          </div>

          <div className="filter-card desktop-filter">
            <div className="category-row">
              {categories.map((categoryName) => (
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

          {isMenuOpen && (
            <div className="filter-card mobile-filter">
              <div className="category-row">
                {categories.map((categoryName) => (
                  <button
                    key={categoryName}
                    className={
                      categoryName === selectedCategory
                        ? "category-button category-button-selected"
                        : "category-button"
                    }
                    onClick={() => handleCategoryClick(categoryName)}
                  >
                    {categoryName}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="home-main">
          <div className="top-bar">
            <h2 className="top-bar-title">{filteredList.length} Suggestions</h2>

            <Link to="/add-feedback" className="add-feedback-button">
              <img src={addFeedbackIcon} alt="" className="add-feedback-icon" />
              <span>Add Feedback</span>
            </Link>
          </div>

          <div className="suggestions-list">
            {filteredList.length === 0 && (
              <div className="no-feedback">
                <img
                  src={emptyIllustration}
                  alt=""
                  className="empty-illustration"
                />
                <h3>There is no feedback yet.</h3>
                <p>Try a different category or add a suggestion.</p>
              </div>
            )}

            {filteredList.map((item, index) => (
              <div className="suggestion-item" key={index}>
                <SuggestionCard suggestion={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

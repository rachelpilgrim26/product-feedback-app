import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddFeedback() {
  const navigateToPage = useNavigate();

  const emptyFormState = {
    feedbackTitle: "",
    feedbackCategory: "UI",
    feedbackDetail: "",
  };

  const [formData, setFormData] = useState(emptyFormState);

  const storeFeedback = async () => {
    const newSuggestion = {
      feedback_title: formData.feedbackTitle,
      category: formData.feedbackCategory,
      feedback_detail: formData.feedbackDetail,
    };

    await fetch("http://localhost:3000/add-one-suggestion", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newSuggestion),
    });
  };

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    await storeFeedback();
    setFormData(emptyFormState);
    navigateToPage("/");
  };

  const handleChange = (changeEvent) => {
    const changedFieldName = changeEvent.target.name;
    const changedFieldValue = changeEvent.target.value;

    setFormData({
      ...formData,
      [changedFieldName]: changedFieldValue,
    });
  };

  return (
    <section className="add-feedback-page">
      <div className="back-row">
        <Link to="/" className="back-link">
          Go Back
        </Link>
      </div>

      <section className="add-feedback-card">
        <div className="add-feedback-icon-circle">
          <span className="add-feedback-icon-plus">+</span>
        </div>

        <h2 className="add-feedback-title">Create New Feedback</h2>

        <form
          onSubmit={handleSubmit}
          className="add-feedback-form"
          name="add-feedback-form"
        >
          <label className="form-label">
            Feedback Title
            <input
              type="text"
              name="feedbackTitle"
              className="form-input"
              value={formData.feedbackTitle}
              onChange={handleChange}
              placeholder="Add a short, descriptive headline"
              required
            />
          </label>

          <label className="form-label">
            Category
            <select
              name="feedbackCategory"
              className="form-select"
              value={formData.feedbackCategory}
              onChange={handleChange}
              required
            >
              <option value="UI">UI</option>
              <option value="UX">UX</option>
              <option value="Enhancement">Enhancement</option>
              <option value="Bug">Bug</option>
              <option value="Feature">Feature</option>
            </select>
          </label>

          <label className="form-label">
            Feedback Detail
            <textarea
              name="feedbackDetail"
              className="form-textarea"
              value={formData.feedbackDetail}
              onChange={handleChange}
              placeholder="Include any specific comments on what should be improved, added, etc."
              required
            />
          </label>

          <div className="buttons-row">
            <Link to="/" className="button-secondary">
              Cancel
            </Link>
            <button type="submit" className="button-primary">
              Add Feedback
            </button>
          </div>
        </form>
      </section>
    </section>
  );
}

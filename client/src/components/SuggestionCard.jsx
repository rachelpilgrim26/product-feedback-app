import React from "react";

// export a react function component that takes a single prop named suggestion
export default function SuggestionCard({ suggestion }) {
  // read required values from the suggestion object
  const title = suggestion.feedback_title;
  const category = suggestion.category;
  const detail = suggestion.feedback_detail;

  // show a simple suggestion card component
  return (
    <div className="card">
      {/* show the suggestion title */}
      <div className="nm">{title}</div>

      {/* show the category label */}
      <p>Category: {category}</p>

      {/* show the feedback detail */}
      <p>{detail}</p>
    </div>
  );
}

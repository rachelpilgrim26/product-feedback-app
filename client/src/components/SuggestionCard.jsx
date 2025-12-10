export default function SuggestionCard({ suggestion }) {
  return (
    <div className="card">
      <h3 className="card-title">{suggestion.feedback_title}</h3>
      <p className="card-text">{suggestion.feedback_detail}</p>

      <div className="card-footer">
        <span className="tag-button">{suggestion.category}</span>
      </div>
    </div>
  );
}

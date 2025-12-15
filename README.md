# Product Feedback Full-Stack App

📌 Project Description & Purpose

This project is a full-stack Product Feedback Board designed to help users submit, browse, and categorize feedback for a company or product. It includes a clean Home page that lists all suggestions, category filters for quick sorting, and a dedicated form for adding new feedback. Each suggestion is displayed inside a styled card component, making the board easy to scan and interact with.

🚀 Live Site

Check out the app:
(https://product-feedback-app-2025.netlify.app/)

🖼️ Screenshots
Desktop
<img width="1166" height="573" alt="image" src="https://github.com/user-attachments/assets/8c28ad60-4aa8-4013-8845-d3fa6d33f3b4" />
Tablet
<img width="822" height="595" alt="image" src="https://github.com/user-attachments/assets/8b9f8303-01e3-4ac5-badf-be88a34119dc" />
Mobile
<img width="547" height="581" alt="image" src="https://github.com/user-attachments/assets/464a9be7-0357-4e82-9486-6a8f2f9e5f6a" />




✨ Features

- This is what you can do on the app:
- Browse all feedback suggestions in a clean, organized layout
- Filter suggestions by category (UI, UX, Feature, Bug, Enhancement, or All)
- Add new feedback through a fully controlled form
- Automatically return to the Home page after submitting
- View suggestions inside reusable card components
- See a friendly empty-state graphic when no feedback exists
- Enjoy smooth navigation using React Router

🛠️ Tech Stack
Frontend

- Languages: JavaScript, HTML, CSS
- Framework: React
- Routing: React Router
- Deployment: Netlify

Server / API

- Language: JavaScript (Node.js)
- Framework: Express
- Endpoints: GET + POST for managing suggestions
- Deployment: Render

Database

- Language: SQL DB fiddle [https://www.db-fiddle.com/f/nNLWQEWEkUdLZuHyjGdVW6/0]
- Deployment: Neon

🔹 API Documentation

These are the API endpoints used in the app:

1.  GET /get-all-suggestions
2.  GET /get-suggestions-by-category
3.  POST /add-one-suggestion

- Saves a new suggestion using:

```JSON
    {
  "feedback_title": "",
  "category": "",
  "feedback_detail": ""
}


```

API documentation [[API Documentation](../api-documentation.md)]

🗄️ Database Schema

```SQL
CREATE TABLE suggestions (
  suggestions_id SERIAL PRIMARY KEY,
  feedback_title VARCHAR NOT NULL,
  category VARCHAR NOT NULL,
  feedback_detail VARCHAR NOT NULL

);
```

💭 Reflections
What I learned:

I learned how to build a full-stack workflow using React on the frontend and Express on the backend. I practiced controlled forms, filtering data, making fetch requests, and using dynamic routing. Seeing everything come together — frontend, backend, and UI — really helped solidify how full-stack apps are built.

What I’m proud of:

I’m proud of how smooth the user flow is, how clean the UI feels, and how organized the code is. I built reusable components, clean fetch logic, and a simple but professional feedback board.

What challenged me:

Getting the frontend and backend communicating correctly was the biggest challenge. Debugging fetch requests, managing state, and making sure the app updated in real time pushed me to think deeply and problem-solve.

Future improvements I’d love to build:

1. 👍 Add upvote functionality
2. ✏️ Add edit & delete feedback
3. 🔍 Add sorting options (Most Upvoted, Most Recent, etc.)
4. 💬 Add a discussion section on each suggestion
5. 👤 Add user authentication
6. 📱 Improve mobile responsiveness & animations

🙌 Credits & Shoutouts

Huge thank you to Arianna for guiding and supporting me through this project.
Big shoutout to AnnieCannons for the structure and opportunity to build real applications.
And thank you to Bakari for the extra help and TA support throughout my learning journey!

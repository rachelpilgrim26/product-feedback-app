# 📘 Product Feedback API Documentation

Base URL: `https://REPLACE-THIS-WITH-YOUR-DEPLOYED-URL.onrender.com`

## Overview

| Resource      | Method | Endpoint                     | Description                                                   |
| ------------- | ------ | ---------------------------- | ------------------------------------------------------------- |
| `suggestions` | GET    | /get-all-suggestions         | Retrieves all product feedback suggestions from the database. |
| `suggestions` | GET    | /get-suggestions-by-category | Retrieves all suggestions that match a specific category.     |
| `suggestions` | POST   | /add-one-suggestion          | Adds a new suggestion to the database.                        |

---

### 🔹 GET `/get-all-suggestions`

**Description:** Retrieves all suggestions in the system.

**Example Request URL:**

```
Write the example request URL here

http://localhost:3000/get-all-suggestions

```

**Example Response:**

```

Write the data returned by this endpoint.
Think about its data type (String, Object, Array of Objects, etc.)
Use spaces/indents to format the data if it is an array or object.


 [
{
"user_id": 1,
"feedback_title": "Make it look nicer",
"category": "UI",
"feedback_detail": "I think the site should just look better somehow."
},
{
"user_id": 2,
"feedback_title": "Fix stuff",
"category": "Bug",
"feedback_detail": "Sometimes things don’t work right."
},
{
"user_id": 3,
"feedback_title": "Add more things",
"category": "Feature",
"feedback_detail": "Maybe add more stuff users can do."
}
 ]

```

---

### 🔹 GET `/get-suggestions-by-category/:category`

**Description:** Retrieves all suggestions in the database that match the selected category.**\*\*\*\***\_\_\_**\*\*\*\***

**Example Request URL:**
http://localhost:3000/get-suggestions-by-category/UX

```

Write the example request URL here

```

**Example Response:**

```

Write the data returned by this endpoint.
Think about its data type (String, Object, Array of Objects, etc.)
Use spaces/indents to format the data if it is an array or object.

[
  {
    "user_id": 4,
    "feedback_title": "Make it easier to use",
    "category": "UX",
    "feedback_detail": "Right now it feels kinda confusing to find things."
  }
]

```

---

### 🔹 POST `/add-one-suggestion`

**Description:** Adds a new suggestion to the database.**\*\*\*\***\_\_\_**\*\*\*\***

**Example Request URL:**

```

Write the example request URL here

http://localhost:3000/add-one-suggestion

```

**Example Request Body:**

```

Write the data required in the request body.
Think about its data type (String, Object, Array of Objects, etc.)
Use spaces/indents to format the data if it is an array or object.

{
  "feedback_title": "Change button color",
  "category": "UI",
  "feedback_detail": "The main button is hard to see. Make it a brighter color."
}

```

**Example Response:**
Success! Suggestion has been added.

```

Write the data returned by this endpoint.
Think about its data type (String, Object, Array of Objects, etc.)
Use spaces/indents to format the data if it is an array or object.

```

string

```
Success! Suggestion has been added.
```

# 🐱 Cat Notes – MERN Stack Note-Taking App with Cat Facts

This is a simple full-stack MERN (MongoDB, Express, React, Node.js) note-taking application. Each note you create automatically includes a random cat fact from [catfact.ninja](https://catfact.ninja/fact) 🐾.

---

## 🚀 Features

- ✅ Create a new note with title and content.
- 🐱 Automatically assigns a random cat fact to every note.
- 🔍 Search notes by title, content, or cat fact.
- ❌ Delete any note.
- 📊 Metrics endpoint to monitor backend API usage.
- 🎨 Clean UI using React and CSS.
- 🐳 Dockerized for easy deployment.

---

## 🛠️ Technologies Used

- **Frontend:** React, Axios, CSS
- **Backend:** Node.js, Express, Mongoose
- **Database:** MongoDB Atlas
- **Cat Fact API:** [https://catfact.ninja/fact](https://catfact.ninja/fact)
- **Monitoring:** HTTP request count via `/metrics` endpoint
- **Deployment Ready:** Docker support for both frontend and backend

---

## 📁 Project Structure

\`\`\`
CatNotesApp/
├── client/              # React frontend
│   └── src/
│       └── App.js
├── server/              # Node.js backend
│   ├── models/
│   ├── routes/
│   └── server.js
├── .env
├── Dockerfile
├── docker-compose.yml
└── README.md
\`\`\`

---

## 🔧 Setup Instructions

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/Deepanshi32/cat-notes-app.git
cd cat-notes-app
\`\`\`

---

### 2. Environment Variables

Create a \`.env\` file in the root of the project:

\`\`\`env
MONGO_URI=mongodb://localhost:27017/catnotes
\`\`\`

---

### 3. Run Locally with Docker 🐳

Make sure Docker is installed and running.

\`\`\`bash
docker-compose up --build
\`\`\`

- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/api/notes
- Metrics Endpoint: http://localhost:8000/metrics

---

### 4. Run Without Docker

#### Backend (Node.js)

\`\`\`bash
cd server
npm install
npm start
\`\`\`

#### Frontend (React)

\`\`\`bash
cd client
npm install
npm start
\`\`\`

---

## 🔍 Available API Endpoints

| Method | Endpoint             | Description                     |
|--------|----------------------|---------------------------------|
| GET    | \`/api/notes\`         | Fetch all notes                 |
| POST   | \`/api/notes\`         | Create new note + cat fact      |
| DELETE | \`/api/notes/:id\`     | Delete a note by ID             |
| GET    | \`/api/notes/search?q=term\` | Search in title/content/catfact |
| GET    | \`/metrics\`           | Show HTTP call count (Actuator) |

---

## 📦 Docker Deployment

### Run using Docker Compose

\`\`\`bash
docker-compose up --build
\`\`\`

### Stop containers

\`\`\`bash
docker-compose down
\`\`\`

---

## 🧪 Example Notes Object

\`\`\`json
{
  "_id": "681f79b30f81a7aaae90444a",
  "title": "Test Note",
  "content": "This is a test note.",
  "catfact": "There are approximately 60,000 hairs per square inch on the back of a cat...",
  "createdAt": "2025-05-10T16:07:15.022Z"
}
\`\`\`

---

## 📊 Metrics Output

Visit \`/metrics.txt\` to see:

\`\`\`json
{
  "GET /api/notes": 3,
  "POST /api/notes": 2,
  "DELETE /api/notes/:id": 1,
  "GET /api/notes/search": 4
}
\`\`\`

---

## 🧑‍💻 Author

- **Deepanshi Jain** – [Deepanshi32](https://github.com/Deepanshi32)

---

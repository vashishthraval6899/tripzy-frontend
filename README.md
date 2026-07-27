# 🌍 Tripzy Frontend – AI Travel Assistant

[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react)](https://react.dev/)
[![Netlify](https://img.shields.io/badge/Hosted_on-Netlify-00C7B7?logo=netlify)](https://www.netlify.com/)
[![FastAPI](https://img.shields.io/badge/Backend-FastAPI-009688?logo=fastapi)](https://fastapi.tiangolo.com/)
[![OpenAI Agents SDK](https://img.shields.io/badge/OpenAI-Agents_SDK-green)](https://github.com/openai/openai-agents-python)
[![Groq](https://img.shields.io/badge/Groq-Free_Tier-orange)](https://console.groq.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](LICENSE)

> **Tripzy Frontend** is a modern React application that provides a beautiful, conversational interface for **Tripzy**, a production-grade Multi-Agent AI Travel Assistant. It allows users to generate personalized travel plans, chat with the AI, and receive intelligent recommendations powered by the OpenAI Agents SDK and Groq's free LLM API.

---

# 🎥 Demo

> **Coming Soon**

Replace the placeholder below with your own application screenshot or demo GIF.

<p align="center">
  <img src="https://via.placeholder.com/900x450?text=Tripzy+Frontend+Demo" width="900">
</p>

After uploading a screenshot or `demo.gif`, replace it with:

```md
![Tripzy Frontend Demo](demo.gif)
```

---

# ✨ Features

- 🧳 Interactive trip planning form
- 💬 Conversational AI chat interface
- 🧠 Context-aware follow-up conversations
- 🎯 Personalized itinerary generation
- 📱 Fully responsive design
- ⚡ Fast communication with FastAPI backend
- 🌍 Clean and modern user experience
- ☁️ Deployable on Netlify
- 🔗 Easily configurable backend API endpoint

---

# 🧠 How It Works

```text
               User Opens Tripzy

                      │
                      ▼

          Fill Trip Planning Form

                      │
                      ▼

          React Frontend Builds Query

                      │
                      ▼

          Sends Request to FastAPI API

                      │
                      ▼

        Multi-Agent AI Processes Request

     Coordinator
         │
 ┌───────┼────────┐
 │       │        │
 ▼       ▼        ▼
Planner Research Risk
         │
         ▼
 Travel Specialist

                      │
                      ▼

      Personalized Travel Plan Returned

                      │
                      ▼

       User Can Continue Chat Naturally
```

---

# 🚀 User Journey

1. Enter your travel preferences.
2. Choose your destination.
3. Specify your budget and trip duration.
4. Click **Plan My Trip**.
5. Receive a personalized itinerary.
6. Continue chatting with the AI for modifications or additional recommendations.

---

# 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| Frontend | React 18 |
| Styling | CSS3 |
| HTTP Client | Fetch API / Axios |
| Deployment | Netlify |
| Backend | FastAPI |
| AI | OpenAI Agents SDK |
| LLM | Groq (Llama 3.3 70B) |

---

# 📂 Project Structure

```text
tripzy-frontend/
│
├── public/
├── src/
│   ├── components/
│   ├── styles/
│   ├── App.js
│   ├── index.js
│   └── ...
│
├── .env.development
├── package.json
├── README.md
└── ...
```

---

# 🚀 Getting Started

## Prerequisites

- Node.js 18+
- npm 9+

---

## Clone Repository

```bash
git clone https://github.com/vashishthraval6899/tripzy-frontend.git

cd tripzy-frontend
```

---

## Install Dependencies

```bash
npm install
```

---

## Environment Variables

Create a file named:

```text
.env.development
```

Add:

```env
REACT_APP_API_URL=http://localhost:8000
```

If you're using the deployed backend, replace it with:

```env
REACT_APP_API_URL=https://your-render-backend-url.onrender.com
```

---

## Run Development Server

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

---

# 🌐 Connecting to the Backend

The frontend communicates with the Tripzy FastAPI backend through:

```
POST /chat
```

The backend processes the request using multiple AI agents and returns a personalized travel itinerary.

---

# 💬 Example User Prompt

```
Plan a 7-day honeymoon trip to Bali.

Budget: ₹2.5 Lakhs

Include:

• Luxury hotels
• Romantic experiences
• Food recommendations
• Hidden gems
• Weather
• Safety tips
• Budget breakdown
```

---

# ☁️ Deploy on Netlify

## Build Command

```bash
npm run build
```

---

## Publish Directory

```text
build
```

---

## Environment Variable

```text
REACT_APP_API_URL=https://your-render-backend-url.onrender.com
```

Push your repository to GitHub and connect it to Netlify for automatic deployments on every push to the `main` branch.

---

# 🔗 Related Repository

**Tripzy Backend (Multi-Agent API)**

https://github.com/vashishthraval6899/Tripzy---Production-grade-multi-agent-travel-assistant

The backend is built with:

- FastAPI
- OpenAI Agents SDK
- Groq
- Docker
- Multi-Agent Architecture

---

# 📸 Screenshots

> Add screenshots of:

- Home Page
- Trip Planning Form
- AI Chat Interface
- Mobile View

Example:

```md
![Home](images/home.png)

![Chat](images/chat.png)
```

---

# 🚀 Future Improvements

- User authentication
- Saved trips
- Trip history
- Dark mode
- Voice interaction
- Interactive maps
- Flight booking integration
- Hotel booking integration
- Export itinerary as PDF

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository

2. Create a new branch

```bash
git checkout -b feature/new-feature
```

3. Commit changes

```bash
git commit -m "Add new feature"
```

4. Push your branch

```bash
git push origin feature/new-feature
```

5. Open a Pull Request

---

# 🙌 Acknowledgements

Built with ❤️ using:

- React
- FastAPI
- OpenAI Agents SDK
- Groq
- Netlify

Special thanks to the open-source community for making modern AI application development accessible.

---

# 📄 License

This project is licensed under the **MIT License**.

---

# 👨‍💻 Author

**Vashishth Raval**

- GitHub: https://github.com/vashishthraval6899
- LinkedIn: https://www.linkedin.com/in/vashishthraval/

---

⭐ If you found this project useful, consider giving it a **Star** on GitHub!

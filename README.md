# 📚 Story Generator API

A lightweight Node.js backend that leverages **Local LLMs (Qwen via Ollama)** to create custom stories for children.

## 🚀 Features
- **AI Story Generation:** Creates unique stories based on age, theme, and emotion.
- **Local Execution:** Uses Ollama for privacy and offline speed.
- **Data Validation:** Built-in validation using Joi.
- **RESTful API:** Clean endpoints for frontend integration.

## 🛠️ Tech 
- **Node.js & Express
- **Ollama (Model: custom model made from ollama3.2:3b)
- **CORS** (Cross-Origin Resource Sharing)

## 📡 API Endpoints

### POST `/api/createastoryformykid`
Generates a new story.
**Body:**
```json
{
     "theme" : "Pirates",
     "goal" : "Happiness",
     "who_talking" : "Teacher",
     "age" : "8",  (Just a number)
    "duration" : "5 minutes"
}
```

### GET /api/getstories 
Returns a list of all stories generated.


Data Persistence Notice:
Currently, stories are stored in a local JavaScript array. This is a temporary session-based list 

Future Improvements: > For a production-ready app, we should replace this array with a persistent database like Supabase or PostgreSQL to ensure that stories are saved permanently and don't disappear when the server restarts.

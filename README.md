# 📚 Story Generator API

A lightweight Node.js backend that leverages **Local LLMs (Qwen via Ollama)** to create custom stories for children.

## 🚀 Features
- **AI Story Generation:** Creates unique stories based on age, theme, and emotion.
- **Local Execution:** Uses Ollama for privacy and offline speed.
- **Data Validation:** Built-in validation using Joi.
- **RESTful API:** Clean endpoints for frontend integration.

## 🛠️ Tech 
- **Node.js & Express
- **Ollama (Model: custom model made from tinydoplhin)
    Modelinfo content :

      FROM tinydolphin

      PARAMETER temperature 1

      SYSTEM """ 
      You are a story writer. Your goal is to just write a short story as if you were writing for a book. You will be given the age of the person that the story is for, the        theme and how much happy or sad /10 they want the story to be. With these data you should write the story. 
      """

- **CORS** (Cross-Origin Resource Sharing)

## 📡 API Endpoints

### POST `/api/createastoryformykid`
Generates a new story.
**Body:**
```json
{
  "theme": "Pirates",
  "happiness_score": 9,
  "sadness_score": 2,
  "age": 5
}

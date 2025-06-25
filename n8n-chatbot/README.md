# 🤖 Telegram Chatbot with n8n

This project explores the creation of a Telegram chatbot using **n8n** as part of the [Platzi](https://platzi.com/) automation course. The bot takes files sent via Telegram, extracts structured information using AI, stores it in a Google Sheets document, and responds to the user with a summary.

---

## 🚀 Getting Started

The first step is to create an account on [n8n.io](https://n8n.io), which offers a 14-day free trial for their cloud service — perfect for testing and learning automation workflows.

In this project, we walk through:

- Understanding basic n8n concepts (creating/deleting nodes, connecting APIs, managing credentials).
- Building a complete Telegram bot automation.
- Identifying workflow limitations and optimizing the process.

---

## 📦 Initial Workflow – Course Version

The first version follows the structure proposed in the course:

### 🔧 Node Sequence

1. **Telegram Trigger** – Listens for incoming messages.
2. **Telegram Get File** – Fetches the file sent by the user.
3. **Code Node** – Converts the file to binary format using JavaScript.
4. **AI Node** – Analyzes the binary file and returns a JSON-like string.
5. **Edit Fields Node** – Attempts to convert the string into a valid JSON.
6. **AI Agent** – Uploads the parsed data into a Google Sheet.
7. **Telegram Send Message** – Sends a confirmation or summary to the user.

### 🧾 Goal

The bot allows users to upload invoices in various formats and automatically registers the information into a Google Sheets tracker. The bot then replies with a summary.

📷 You can check the screenshots of this initial workflow and output in [this folder](https://github.com/Aurionidas/Automations/tree/main/n8n-chatbot/images).

---

## ⚠️ Challenges Encountered

While functional in theory, the original workflow led to several issues:

- The **Edit Fields Node** often failed to parse text properly, blocking the workflow.
- Using **two AI requests** (for extraction and processing) felt inefficient and costly.
- The summary sent to the user was a raw JSON — not very user-friendly.
- Switching from OpenAI to Gemini caused compatibility issues with node formatting.

---

## 🔁 My Optimized Workflow

To improve stability and efficiency, I rebuilt the workflow from scratch with the following changes:

### ✅ Improvements

- Removed the problematic **Edit Fields Node**.
- Used a **single AI Agent**, reducing API calls.
- Added a **custom Code Node** to convert the AI response to valid JSON.
- Created a **clean, human-readable summary** for the final Telegram message.

### 🔧 Updated Node Sequence

1. **Telegram Trigger**
2. **Telegram Get File**
3. **Code Node** – Convert file to binary
4. **AI Agent** – Extract structured data (as JSON-like string)
5. **Code Node** – Parse string into valid JSON
6. **Code Node** – Generate user-friendly message
7. **Telegram Send Message** – Reply with summary

Even though the AI agent didn’t return a native JSON format, this custom solution ensures correct parsing without relying on multiple AI nodes.

🖼️ Check the [folder](https://github.com/Aurionidas/Automations/tree/main/n8n-chatbot/images) for screenshots and side-by-side comparisons of both workflows.

---

## 💭 Final Thoughts

While the current version of the bot handles the core functionality, there's still room for improvements such as:

- Input validation and error handling
- User education messages
- Cleaner fail-safes and fallback responses

n8n also offers a component library with ready-made templates, but this project focuses on **learning the fundamentals by building from scratch** — empowering you to understand how automation works under the hood.

Thanks for reading — feel free to explore and adapt this project for your own use! 😊


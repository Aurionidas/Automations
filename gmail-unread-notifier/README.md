# 📬 Gmail Unread Labels Notifier – Google Apps Script Automation

This project demonstrates how I discovered and used **Google Apps Script** to quickly automate a personal workflow and solve a real problem with minimal code.

---

### ⚡️ What Problem Does It Solve?

After organizing my Gmail using labels (tags), I realized I was no longer receiving notifications for some important emails. I asked ChatGPT why and the answer was simple: **Gmail only sends notifications for emails in the inbox**, not for messages automatically filtered into labels.

To solve this, I created a script that checks for **unread emails in specific labels** and sends me an email notification listing them.

---

### 💡 About the Project

Although I'm not a JavaScript expert, I was able to:
- Prompt ChatGPT for a solution.
- Refine and adapt the script to suit my workflow.
- Automate it to run hourly using **time-driven triggers**.

This project is not meant to showcase advanced JavaScript skills, but rather to highlight how powerful, accessible automation can be when using **modern tools** creatively. Even with limited coding knowledge.

Also, You can notice in the code that the messages are in spanish, those can be adjusted as desired, in this case I Preferred Spanish.

---

### 🛠️ Setup Instructions

1. **Create a Google Sheet**
   - In the first column, list all the Gmail labels (tags) you want to track — one label per row.
   - Optionally, name the column `Label`.

2. **Open Apps Script Editor**
   - In the Google Sheet: `Extensions` → `Apps Script`.
   - Paste the content of `Code.gs` into the editor.

3. **Customize the Script**
   - Update the following as needed:
     - Sheet name and range where labels are stored.
     - Recipient email address.
     - Subject and body format of the alert email.

4. **Set Up a Time Trigger**
   - In the Apps Script editor: `Triggers` → `+ Add Trigger`.
   - Choose the main function and set it to run hourly (or as preferred).

---

### 🧠 What You'll Learn

- How to use **Google Apps Script** to interact with Gmail and Google Sheets.
- How to automate Gmail alerts based on custom label logic.
- How to create time-based triggers for hands-free automation.

---

### 📁 Files Included

- `Code.gs`: Main automation script.
- `README.md`: Project overview and setup guide.

---

### 🙌 Final Note

This project is a small example of how combining simple tools like **Google Sheets**, **Gmail**, and **Apps Script** can help solve real-life problems — quickly and efficiently.


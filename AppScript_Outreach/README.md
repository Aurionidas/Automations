# 📬 Automated Outreach with Google Apps Script

This project was born from one of those moments when you imagine a business idea — searching for leads, contacting them, and offering your services.  
But doing all of that manually these days can become overwhelming and inefficient, especially with so many automation tools available.

So, I decided to build my own solution:  
A simple Google Apps Script that connects to a lead database stored in Google Sheets and sends a predefined number of emails per day automatically.

---

## ⚙️ How It Works

The script reads a spreadsheet containing your leads and sends personalized emails while keeping track of which contacts have already been reached.  
It’s designed to be light, functional, and mindful of Google’s daily email limits.

---

## 🪜 Steps to Set It Up

### 1. 🧾 Create a Google Sheets Document

Start by setting up a spreadsheet with the following columns:
- **id**
- **Name**
- **Email**
- **Sector**
- **Role**
- **Sent_email**
- **Sent_date**
- **Reach_back** (For further automations)

The `Sent_email` column helps prevent sending multiple emails to the same person.

---

### 2. 💻 Set Up Your Google Apps Script Project

- Open [Google Apps Script](https://script.google.com).
- Create a new project linked to your Google Sheet.
- Set up the script with the necessary permissions.

---

### 3. ✍️ Write the Script

- Define constants to reference your spreadsheet and column indexes.
- Set a daily limit for how many emails to send (to stay within Gmail limits).
- Loop through the spreadsheet rows to find contacts that haven't been emailed.
- Build a personalized message using the contact’s name.
- Use `MailApp.sendEmail()` to send the message.
- Update the `Is_Sent` column to mark the lead as contacted.

---

### 🧠 Learning Curve

Since JavaScript isn't my main language, I had to learn as I went, especially around Google Workspace-specific functions.  
I relied on hands-on testing, trial and error, and some help from AI tools to understand and refine the code.

After several iterations, I managed to build a working system that sends emails and updates the spreadsheet successfully. ✅

---

## 💬 Final Thoughts

This project automates a simple but time-consuming task. Once set up, it saves time and effort while allowing room for customization.

A few additional notes:

- 💌 Each email includes the recipient’s name for a personal touch (e.g., "Hi Juan").
- 🧪 I tested the script with sample data and a test email address — everything worked as expected.
- 🗂️ The code can be found in the `/appscript-automated-emails` folder of this repository.
- 🖋️ You can enhance this project further by crafting a custom HTML email body — though that part is left to your imagination and specific use case.

Thanks for reading!



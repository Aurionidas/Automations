## Sending Automated Emails with Google App Script

I had one of those moments in which you think about a business model. Searching leads, contacting them and offer your services
But nowdays doing all of that just by hand may be great hustle and a waste of time comsidering the variety of tools available, 
so I decided to create my own automation. A simple script capable of conecting to a database stored in Google Sheets and sending 
a predetermind quantity of email per day.

I started with this projects looking for required details, like some basics of JavaScript, fucntions to operate with the google workspace tools and the daily limit of sent emails.

---
## Steps
- Creating a Google sheets document:
  I created the document with columns like name, email, industry, description and is_sent to avoid sending and email twice to teh same person.
  
- Creating a project on Google App Script project
  
- Setting the canvas for the main fuction:
  I started by naming my main fuction and the connected the the Google sheets document, setting necessary constants and referencing the columns by indexes. At this point I sketched everything a bit and tried to understand the logics og the whole process, then I instantiated the function to send the emails

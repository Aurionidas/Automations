### 🛠️ Setup Instructions

1. **Create a new Google Sheet**
   - Add a sheet with a column listing all Gmail labels to track (one label per row).
   - Optionally, name the column `Label`.

2. **Open Google Apps Script**
   - In Google Sheets, go to `Extensions` > `Apps Script`.
   - Copy and paste the content of `Code.gs`.

3. **Set Your Configuration**
   - Define:
     - The sheet name and column range to read labels from.
     - The recipient email address.
     - Optionally, customize the subject or body format of the email.

4. **Set up a Trigger**
   - In the Apps Script editor, go to `Triggers`.
   - Set the function to run periodically (e.g., once a day).

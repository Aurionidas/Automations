function emailSender() {
  // --- Configurattion ---
  const spreadsheetId = "YOUR-SHEET-ID";
  const sheetName = "Leads"; // Name of the sheet containing your leads
  const maxDailyLeads = 25; // Maximum number of daily emails

  // --- Column indexes  ---
  // If 'id' is in the Column A, it's index is 0.
  const ID_COL = 0;           //'id'
  const NAME_COL = 1;         // 'Name'
  const EMAIL_COL = 2;        // 'Email'
  const SENT_EMAIL_COL = 5;   // 'sent_email' (True, False)
  const SENT_DATE_COL = 6;    // 'Sent date'

  // --- Opens the SpreadSheet ---
  const book = SpreadsheetApp.openById(spreadsheetId);
  const sheet = book.getSheetByName(sheetName);

  // Validating if the seet exists
  if (!sheet) {
    Logger.log("❌ Not possible to find '" + sheetName + "' Sheet");
    return;
  }

  // --- Reading the data from the sheet ---
  // Gets the data, Excludes the first row containing the headers.
  const dataRange = sheet.getDataRange();
  const values = dataRange.getValues();

  // If we only have the headers or there is no reamaining data, exits
  if (values.length <= 1) {
    Logger.log("✅ Not available Leads.");
    return;
  }

  // --- Prepairing emails to send ---
  let emailsSentToday = 0;
  const leadsToContact = [];

  // Iterates the rows starting from the second one (Avoiding headers).
  for (let i = 1; i < values.length; i++) {
    const row = values[i];
    const email = row[EMAIL_COL];
    const name = row[NAME_COL] || " "; // Defaul name ins Name column is empty
    const sentEmailStatus = row[SENT_EMAIL_COL]; // True/False status from the sheet

    // Verifies id a lead has a valid email, no email has been sent and no daily limit has been reached.
    // Validating if the True/False values are Strings or Booleans.
    // String() and toUpperCase() to ensure a consistent comparison.
    if (email && String(sentEmailStatus).toUpperCase() !== "TRUE" && emailsSentToday < maxDailyLeads) {
      leadsToContact.push({
        rowIndex: i, // Stores the index of the row to update afterwards
        email: email,
        name: name,
      });
      emailsSentToday++;
    }
  }

  // --- Send Emails ---
  if (leadsToContact.length > 0) {
    Logger.log(`📧 Trying to send ${leadsToContact.length} Emails.`);

    const subject = "Looking for a Personal/Executive Assistant?";
    const baseBody = "Hi, [NAME], \n\n I am  [Your Name]. This is a tester, in case you may need a Virtual assistant, I am here to help you. Just schedule a quick video call with me and we can discuss how we can colaborate to get your daily tasks done and boost your productivity.\n\nKind Regards,\n [Your Name]";

    leadsToContact.forEach(lead => {
      try {
        const personalizedBody = baseBody.replace("[NAME]", lead.name);
        const finalBody = personalizedBody.replace(" [Your Name]", "David"); // replaces info from the body

        GmailApp.sendEmail(lead.email, subject, finalBody);

        // Updated the status on the Google sheet
        sheet.getRange(lead.rowIndex + 1, SENT_EMAIL_COL + 1).setValue(true); // updates a True value into the Google sheet
        sheet.getRange(lead.rowIndex + 1, SENT_DATE_COL + 1).setValue(new Date()); // Registers the sent date
        Logger.log(`✅ Email sent to: ${lead.email}`);
      } catch (e) {
        Logger.log(`❌ Error sending the Email to ${lead.email}: ${e.toString()}`);
       
      }
    });
    Logger.log("✅ Finished sending emails.");
  } else {
    Logger.log("✅ There are no remaining Leads to contact.");
  }
}

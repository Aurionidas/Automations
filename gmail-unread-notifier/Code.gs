function reviewMultipleTags() {
  const spreadsheetId = "SHEET_ID_HERE";
  const book       = SpreadsheetApp.openById(spreadsheetId);
  const sheet        = book.getSheetByName("Etiquetas");   // ← Cambia aquí si la hoja se llama distinto

  if (!sheet) {
    Logger.log("❌ No se encontró la hoja llamada 'Etiquetas'");
    return;
  }

  // Lee la columna A, quita vacíos:
  const tags = sheet.getRange("A1:A")
                        .getValues()
                        .flat()
                        .filter(String);

  let totalMessages = 0;
  let resumeHTML    = "";
  
  tags.forEach(tagName => {
    const query   = `label:${tagName} is:unread`;
    const threads = GmailApp.search(query);            // máx. 500 per consult

    if (threads.length > 0) {
      resumeHTML    += `<li> <strong>${tagName}</strong>: ${threads.length} correo(s) sin leer</li>`;
      totalMessages  += threads.length;
    }
  });

  if (totalMessages > 0) {
    const subject      = "Etiquetas con correos sin leer";
    const htmlBody    = `
      <p>Tienes correos sin leer en las siguientes etiquetas:</p>
      <ul style="margin:0 0 0 1em; padding:0;">
        ${resumeHTML}
      </ul>
    `;

    // Plain text + HTML
    GmailApp.sendEmail(
      Session.getActiveUser().getEmail(),
      subject,
      "Tienes correos sin leer en tus etiquetas (activa vista HTML para ver detalles).",
      {htmlBody: htmlBody}
    );

    Logger.log("📧 Correo HTML enviado:\n" + htmlBody);
  } else {
    Logger.log("✅ No hay correos sin leer en las etiquetas listadas.");
  }
}

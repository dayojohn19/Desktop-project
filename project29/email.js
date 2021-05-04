//// sending email

var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("sampling");
var emails = [... new Set(sheet.getRange("A1:A" + sheet.getLastRow()).getValues().reduce((ar, [a]) => {
  if (a) ar.push(a);
  return ar;
}, []))];


var mes1 =  crypto1 + 'our value ' + (changedd * 100) + '  Average value ' + (Sales * 100 );
emails.forEach(email => MailApp.sendEmail(email, sub1, mes1));


//from
emails.forEach(email => MailApp.sendEmail(email, sub1, mes1));

//to
MailApp.sendEmail({subject: sub1, body: mes1, cc: emails.join(",")});
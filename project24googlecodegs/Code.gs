function doGet(request) {
  return HtmlService.createTemplateFromFile('Index').evaluate();
}



/* @Include JavaScript and CSS Files */
function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename)
      .getContent();
}

/* @Process Form */
function processForm(formObject) {
  var url = "https://docs.google.com/spreadsheets/d/1WuXbtR71LWN-mkhwFW7X2gsfuv9IrmGC1xJtZxJm2wc/edit#gid=196554382";
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("PLACE");
  
  ws.appendRow([formObject.first_name,
                formObject.last_name,
                
                formObject.color,
                formObject.date_today,
                formObject.code,
                formObject.phone,
               formObject.loft_name,
              
                
               formObject.municipality]);
}
function doGet(request) {
    return HtmlService.createTemplateFromFile('index').evaluate();
  }
  
  
  
  /* @Include JavaScript and CSS Files */
  function include(filename) {
    return HtmlService.createHtmlOutputFromFile(filename)
        .getContent();
  }
  
  /* @Process Form */
  function processForm(formObject) {
    var url = "https://docs.google.com/spreadsheets/d/1nQSMKr_eMsWI6PCS9ekVW3F6UcQ5kN7w8_OlRX9M_4g/edit#gid=0";
    var ss = SpreadsheetApp.openByUrl(url);
    var ws = ss.getSheetByName("EM");
    
    ws.appendRow([formObject.first_name,
                  formObject.last_name, ]);
  }
                  
                   function getNewHtml(e) {
        var html = HtmlService
          .createTemplateFromFile('index') // uses templated html
          .evaluate()
          .getContent();
        return html;
      }
       // Prevent forms from submitting.
  function preventFormSubmit() {
    var forms = document.querySelectorAll('form');
    for (var i = 0; i < forms.length; i++) {
      forms[i].addEventListener('submit', function(event) {
      event.preventDefault();
      });
    }
  }
  window.addEventListener('load', preventFormSubmit);    
      
      
  function handleFormSubmit(formObject) {
    google.script.run.processForm(formObject);
    document.getElementById("myForm").reset();
  }
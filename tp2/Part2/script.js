function function1(id) {
    var paragraph = document.getElementById(id).innerHTML;
    var newparagraph = paragraph.replace(/([A-Za-z]){7,}/g, "<span style='background-color: 00ff40;'>$&</span> ");
    document.getElementById(id).innerHTML = newparagraph;
  }
function function2(id) {
    var paragraph = document.getElementById(id).innerHTML;
    var newparagraph = paragraph.replace(/([^.?!]+[.?!]){5}/g, "$&<p></p>");
    document.getElementById(id).innerHTML = newparagraph;
  }
  
function function3(id) {
    var paragraph = document.getElementById(id).innerHTML;
    var newparagraph = paragraph.replace(/google/gi, " <a href='http://www.google.com'>$&</a> ");
    document.getElementById(id).innerHTML = newparagraph;
  }
  
  
function function4(id) {
    var paragraph = document.getElementById(id).innerHTML;
    const number = paragraph.split(/\b\w+\b/).length-1;
    document.getElementById(id).innerHTML = "<b>Nombre de mots dans le paragraphe : " + number + " </b>" + document.getElementById(id).innerHTML;
  }

function function1(id) {
    var paragraph = document.getElementById(id).innerHTML;
    var newparagraph = paragraph.replace(/([A-Za-z]){7,}/g, "<span style='background-color: 00ff40;'>" + /([A-Za-z]){7,}/g + "</span> ");
    document.getElementById(id).innerHTML = newparagraph;
  }
function function2(id) {
    var paragraph = document.getElementById(id).innerHTML;
    var newparagraph = paragraph.replace(/(?<=[.?!])/g, "<br></br> <br></br>");
    document.getElementById(id).innerHTML = newparagraph;
  }
  
function function3(id) {
    var paragraph = document.getElementById(id).innerHTML;
    var newparagraph = paragraph.replace(/google/gi, " <a href='http://www.google.com'>" + "Google" + "</a> ");
    document.getElementById(id).innerHTML = newparagraph;
  }
  
  
function function4(id) {
    var paragraph = document.getElementById(id).innerHTML;
    const number = paragraph.split(/\b\w+\b/).length-1;
    document.getElementById(id).innerHTML = "<b>Nombre de mots dans le paragraphe : " + number + " </b>" + document.getElementById(id).innerHTML;
  }

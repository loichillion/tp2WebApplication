function color(value) {
    document.body.style.backgroundColor=value
  }

function function2() {
    var rm = document.getElementById("buttonN1");
    rm.remove();
    
}

function function3() {
    var doc = document.getElementById('page');
    doc.style.textTransform = "uppercase";
    var doc = document.getElementById('button1');
    doc.style.textTransform = "uppercase";
    var doc = document.getElementById('button2');
    doc.style.textTransform = "uppercase";
    var doc = document.getElementById('button3');
    doc.style.textTransform = "uppercase";
    var doc = document.getElementById('button4');
    doc.style.textTransform = "uppercase";
    var doc = document.getElementById('button5');
    doc.style.textTransform = "uppercase";
    var doc = document.getElementById('button6');
    doc.style.textTransform = "uppercase";
    var doc = document.getElementById('button7');
    doc.style.textTransform = "uppercase";
}

function function4() {
    var doc = document.getElementById('page');
    doc.style.textTransform = "lowercase";
    var doc = document.getElementById('button1');
    doc.style.textTransform = "lowercase";
    var doc = document.getElementById('button2');
    doc.style.textTransform = "lowercase";
    var doc = document.getElementById('button3');
    doc.style.textTransform = "lowercase";
    var doc = document.getElementById('button4');
    doc.style.textTransform = "lowercase";
    var doc = document.getElementById('button5');
    doc.style.textTransform = "lowercase";
    var doc = document.getElementById('button6');
    doc.style.textTransform = "lowercase";
    var doc = document.getElementById('button7');
    doc.style.textTransform = "lowercase";
}

function function5() {
    // alert("HELLO WORLD!");
    document.getElementById("hello").innerText="HELLO WORD!"  
}

function function6() {
    var audio = new Audio('song.mp3');
    audio.play();
}
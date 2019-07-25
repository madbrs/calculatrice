

function btn(value) {
    document.getElementById("result").innerHTML += value;
}
function btnClear(){
   document.getElementById("result").innerHTML = "";
}
function btnPlus() {
   document.getElementById("result").innerHTML += "+";
}
function btnLess() {
   document.getElementById("result").innerHTML += "-";
}
function btnMulti() {
   document.getElementById("result").innerHTML += "*";
}
function btnDiv() {
   document.getElementById("result").innerHTML += "/";
}

function btnEqual() {
     let egal = eval(document.getElementById('result').innerHTML);
     document.getElementById('result').innerHTML = egal;
 }

// function pour virgule
// function pour retour


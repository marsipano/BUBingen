"use strict";

function setlistitems(arr) {
    var s = "";
    arr.forEach(element => {
        s += "\n<li> " + element.name.toUpperCase() + " (" + element.alter + ") </li>";
    });
    document.getElementById("ausgabe").innerHTML = s;
}

var personen = [];

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        personen = JSON.parse(this.responseText).personen;
        setlistitems(personen);
    }
};
xhttp.open("GET", "http://localhost/personen.json", true);
xhttp.send();

document.getElementById("eingabe").onkeyup = function() {
    setlistitems(
        personen.filter(
            function(p) { return p.alter >= document.getElementById("eingabe").value; }
        )
    )
};
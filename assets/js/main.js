//document.body.innerHTML = "hola";
var body  = document.getElementsByTagName("BODY")[0];
// Creo la variable para trabajar dentro del body
var redDiv = document.createElement("div");
    redDiv.setAttribute("id","red");
    document.body.appendChild(redDiv);
// Creo el div rojo con su id
var purpleDiv = document.createElement("div");
    purpleDiv.setAttribute("id","purple");
    document.body.appendChild(purpleDiv);
    document.getElementById("red").appendChild(purpleDiv);

var yellowDiv = document.createElement("div");
    yellowDiv.setAttribute("id","yellow");
    document.body.appendChild(yellowDiv);
    document.getElementById("red").appendChild(yellowDiv);
// Creo los divs morado y amarillo dentro del div rojo
var blueDiv = document.createElement("div");
    blueDiv.setAttribute("id","blue");
    document.body.appendChild(blueDiv);
// Creo el div azul donde iran los divs verde y negro
var greenDiv = document.createElement("div");
    greenDiv.setAttribute("id","green");
    document.body.appendChild(greenDiv);
    document.getElementById("blue").appendChild(greenDiv);

var blackDiv = document.createElement("div");
    blackDiv.setAttribute("id","black");
    document.body.appendChild(blackDiv);
    document.getElementById("blue").appendChild(blackDiv);

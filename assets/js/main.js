//document.body.innerHTML = "hola";
var body  = document.getElementsByTagName("BODY")[0];
//var div  = document.createElement("div");
//document.body.appendChild(div);
var blueDiv = document.createElement("div");
		blueDiv.setAttribute("id","blue");
		blueDiv.innerHTML = "<p>Este es el contenido de mi div azul</p>";
    document.body.appendChild(blueDiv);

var redDiv = document.createElement("div");
    redDiv.setAttribute("id","red");
    redDiv.innerHTML = "<p>Este es el contenido de mi div rojo</p>";
    document.body.appendChild(redDiv);

var purpleDiv = document.createElement("div");
    purpleDiv.setAttribute("id","purple");
    purpleDiv.innerHTML = "<p>Este es el contenido de mi div rojo</p>";
    document.body.appendChild(purpleDiv);

var yellowDiv = document.createElement("div");
    yellowDiv.setAttribute("id","yellow");
    yellowDiv.innerHTML = "<p>Este es el contenido de mi div morado</p>";
    document.body.appendChild(yellowDiv);

var blackDiv = document.createElement("div");
    blackDiv.setAttribute("id","black");
    blackDiv.innerHTML = "<p>Este es el contenido de mi div negro</p>";
    document.body.appendChild(blackDiv);

var greenDiv = document.createElement("div");
    greenDiv.setAttribute("id","green");
    greenDiv.innerHTML = "<p>Este es el contenido de mi div verde</p>";
    document.body.appendChild(greenDiv);

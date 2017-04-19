//document.body.innerHTML = "hola";
var body  = document.getElementsByTagName("BODY")[0];
//var div  = document.createElement("div");
//document.body.appendChild(div);
var redDiv = document.createElement("div");
    redDiv.setAttribute("id","red");
    document.body.appendChild(redDiv);

var purpleDiv = document.createElement("div");
    purpleDiv.setAttribute("id","purple");
    document.body.appendChild(purpleDiv);
    document.getElementById("red").appendChild(purpleDiv);

var yellowDiv = document.createElement("div");
    yellowDiv.setAttribute("id","yellow");
    document.body.appendChild(yellowDiv);
    document.getElementById("red").appendChild(yellowDiv);

var blueDiv = document.createElement("div");
    blueDiv.setAttribute("id","blue");
    document.body.appendChild(blueDiv);

var greenDiv = document.createElement("div");
    greenDiv.setAttribute("id","green");
    document.body.appendChild(greenDiv);
    document.getElementById("blue").appendChild(greenDiv);

var blackDiv = document.createElement("div");
    blackDiv.setAttribute("id","black");
    document.body.appendChild(blackDiv);
    document.getElementById("blue").appendChild(blackDiv);

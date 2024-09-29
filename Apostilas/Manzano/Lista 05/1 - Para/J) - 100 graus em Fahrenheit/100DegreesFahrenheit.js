let cont;
let fahrenheit;
let celsius = 10;

for(cont = 1; cont <= 10; cont++){
    fahrenheit = (9*celsius+160)/5
    document.getElementById("holder").innerHTML += `<p>${celsius}Cº = ${fahrenheit}Fº</p>`

    celsius+=10
}
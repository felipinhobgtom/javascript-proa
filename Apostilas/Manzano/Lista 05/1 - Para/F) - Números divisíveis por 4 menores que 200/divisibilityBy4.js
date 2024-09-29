let cont;

for(cont = 1; cont <= 200; cont++){
    if(cont % 4 == 0){
        document.getElementById("holder").innerHTML += `<p>${cont} é divisível por 4.</p>`
    }
}
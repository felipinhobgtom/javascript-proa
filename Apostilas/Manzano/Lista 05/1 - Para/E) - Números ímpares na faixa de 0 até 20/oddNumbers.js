let cont;

for(cont = 0; cont <= 20; cont++){
    if(cont % 2 != 0){
        document.getElementById("holder").innerHTML += `<p>${cont}</p>`
    }
}